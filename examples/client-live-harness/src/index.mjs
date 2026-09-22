import "dotenv/config";

import {
  buildDepositPlan,
  getAMM,
  getAMMs,
  getDeployment,
  getHooks,
  alignTickToSpacing,
  ERC20Abi,
  Slot0Abi,
} from "@stryke-xyz/sdk";
import {
  createPublicClient,
  createWalletClient,
  decodeFunctionData,
  decodeFunctionResult,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { createInterface } from "node:readline/promises";

const DEFAULT_CHAIN_ID = 4663;
const DEFAULT_RPC_URL = "https://rpc.mainnet.chain.robinhood.com";
const ERC20_READ_ABI = [
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
];

function requireValue(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing ${name}; set it in .env`);
  return value;
}

function positiveBigInt(name) {
  const value = BigInt(requireValue(name));
  if (value <= 0n) throw new Error(`${name} must be greater than zero`);
  return value;
}

function integer(name, fallback) {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isSafeInteger(value))
    throw new Error(`${name} must be a safe integer`);
  return value;
}

function stringify(value) {
  return JSON.stringify(
    value,
    (_, item) => (typeof item === "bigint" ? item.toString() : item),
    2,
  );
}

function readAmm(chainId) {
  const address = process.env.AMM_ADDRESS?.trim();
  if (!address) {
    const amm = getAMMs({ chainId })[0];
    if (!amm) throw new Error(`No AMM is registered for chain ${chainId}`);
    return amm;
  }
  const amm = getAMM({ chainId, address });
  if (!amm)
    throw new Error(
      `AMM ${address} is not registered in the SDK for chain ${chainId}`,
    );
  return amm;
}

function readHook(chainId) {
  const hooks = getHooks(chainId);
  const configured = process.env.HOOK_ADDRESS?.trim();
  const hook = configured
    ? hooks.find(
        (candidate) =>
          candidate.address.toLowerCase() === configured.toLowerCase(),
      )
    : hooks[0];
  if (!hook) {
    throw new Error(
      configured
        ? `HOOK_ADDRESS ${configured} is not registered for chain ${chainId}`
        : `No hook is registered for chain ${chainId}`,
    );
  }
  return hook;
}

async function prepareDeposit() {
  const chainId = integer("CHAIN_ID", DEFAULT_CHAIN_ID);
  const rpcUrl = process.env.RPC_URL?.trim() || DEFAULT_RPC_URL;
  const chain = {
    id: chainId,
    name: chainId === 4663 ? "Robinhood Chain" : `Chain ${chainId}`,
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: [rpcUrl] } },
  };
  const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
  const deployment = getDeployment(chainId);
  if (!deployment)
    throw new Error(`No SDK deployment is registered for chain ${chainId}`);

  const amm = readAmm(chainId);
  const hook = readHook(chainId);
  const router =
    process.env.ADD_LIQUIDITY_ROUTER?.trim() ||
    deployment.contracts.addLiquidityRouter;
  if (!router)
    throw new Error(
      `No add-liquidity router is registered for chain ${chainId}`,
    );

  const [actualChainId, blockNumber, slot0] = await Promise.all([
    publicClient.getChainId(),
    publicClient.getBlockNumber(),
    publicClient.readContract({
      address: amm.address,
      abi: Slot0Abi,
      functionName: "slot0",
    }),
  ]);
  if (actualChainId !== chainId) {
    throw new Error(`RPC returned chain ${actualChainId}, expected ${chainId}`);
  }

  const currentTick = Number(slot0[1]);
  const tickLower = integer(
    "TICK_LOWER",
    alignTickToSpacing(currentTick - amm.tickSpacing, amm.tickSpacing, "down"),
  );
  const tickUpper = integer(
    "TICK_UPPER",
    alignTickToSpacing(currentTick + amm.tickSpacing, amm.tickSpacing, "up"),
  );
  const deadline = BigInt(
    Math.floor(Date.now() / 1000) + integer("DEADLINE_SECONDS", 900),
  );
  const plan = buildDepositPlan({
    chainId,
    amm,
    hook: hook.address,
    tickLower,
    tickUpper,
    currentSqrtPriceX96: slot0[0],
    currentTick,
    amount0Desired: positiveBigInt("AMOUNT0_DESIRED"),
    amount1Desired: positiveBigInt("AMOUNT1_DESIRED"),
    deadline,
    addLiquidityRouter: router,
  });

  return {
    chain,
    rpcUrl,
    publicClient,
    amm,
    hook,
    blockNumber,
    currentTick,
    tickLower,
    tickUpper,
    plan,
  };
}

function showPrepared(context) {
  const {
    rpcUrl,
    amm,
    hook,
    blockNumber,
    currentTick,
    tickLower,
    tickUpper,
    plan,
  } = context;
  console.log(
    stringify({
      mode: "prepare-only",
      rpcUrl,
      blockNumber,
      amm: {
        name: amm.ammVerboseName,
        pool: amm.address,
        token0: amm.token0,
        token1: amm.token1,
        tickSpacing: amm.tickSpacing,
      },
      hook: hook.address,
      currentTick,
      tickLower,
      tickUpper,
      plan,
    }),
  );
}

async function confirmExecution(address, transactions) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error(
      "Execution requires an interactive terminal for the confirmation prompt",
    );
  }
  console.log(`\nSigner: ${address}`);
  console.log("Transactions to submit, in order:");
  for (const [index, transaction] of transactions.entries()) {
    console.log(
      `${index + 1}. ${transaction.description}: ${transaction.to} (${transaction.data.slice(0, 10)})`,
    );
  }
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const confirmation = await rl.question(
      `Type SEND ${address.slice(0, 8)} to continue: `,
    );
    if (confirmation !== `SEND ${address.slice(0, 8)}`) {
      throw new Error("Confirmation did not match; no transaction was sent");
    }
  } finally {
    rl.close();
  }
}

async function executeDeposit(context) {
  const rawPrivateKey = requireValue("PVK");
  if (!/^0x[0-9a-fA-F]{64}$/.test(rawPrivateKey)) {
    throw new Error("PVK must be a 32-byte 0x-prefixed private key");
  }

  const account = privateKeyToAccount(rawPrivateKey);
  const { chain, publicClient, plan } = context;
  const walletClient = createWalletClient({
    account,
    chain,
    transport: http(context.rpcUrl),
  });
  const actualChainId = await publicClient.getChainId();
  if (actualChainId !== plan.chainId) {
    throw new Error(
      `RPC returned chain ${actualChainId}, expected ${plan.chainId}`,
    );
  }

  const nativeBalance = await publicClient.getBalance({
    address: account.address,
  });
  if (nativeBalance === 0n)
    throw new Error("Signer has no native token for gas");

  const requiredApprovals = [];
  const expectedBalances = new Map([
    [
      context.amm.token0.address.toLowerCase(),
      plan.metadata.expectedAmounts.amount0,
    ],
    [
      context.amm.token1.address.toLowerCase(),
      plan.metadata.expectedAmounts.amount1,
    ],
  ]);
  for (const approval of plan.approvals) {
    const decoded = decodeFunctionData({ abi: ERC20Abi, data: approval.data });
    if (decoded.functionName !== "approve")
      throw new Error("Unexpected SDK approval call");
    const [spender, amount] = decoded.args;
    const [balance, allowance] = await Promise.all([
      publicClient.readContract({
        address: approval.to,
        abi: ERC20_READ_ABI,
        functionName: "balanceOf",
        args: [account.address],
      }),
      publicClient.readContract({
        address: approval.to,
        abi: ERC20_READ_ABI,
        functionName: "allowance",
        args: [account.address, spender],
      }),
    ]);
    const expectedBalance = expectedBalances.get(approval.to.toLowerCase());
    if (expectedBalance === undefined) {
      throw new Error(
        `SDK returned approval for unrecognized token ${approval.to}`,
      );
    }
    if (balance < expectedBalance) {
      throw new Error(
        `Insufficient balance for the planned deposit of ${approval.to}`,
      );
    }
    if (allowance < amount) requiredApprovals.push(approval);
  }

  const transactions = [...requiredApprovals, plan.transaction];
  console.log(
    stringify({
      mode: "execution-requested",
      signer: account.address,
      nativeBalanceWei: nativeBalance,
      approvalsAlreadySufficient:
        plan.approvals.length - requiredApprovals.length,
      transactions,
      warnings: plan.warnings,
    }),
  );
  await confirmExecution(account.address, transactions);

  for (const approval of requiredApprovals) {
    const simulation = await publicClient.call({
      account: account.address,
      to: approval.to,
      data: approval.data,
      value: approval.value,
    });
    if (simulation.data && simulation.data !== "0x") {
      const result = decodeFunctionResult({
        abi: ERC20Abi,
        functionName: "approve",
        data: simulation.data,
      });
      if (result !== true)
        throw new Error(
          `Approval simulation returned false for ${approval.to}`,
        );
    }
    const hash = await walletClient.sendTransaction({
      account,
      to: approval.to,
      data: approval.data,
      value: approval.value ?? 0n,
    });
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    if (receipt.status !== "success")
      throw new Error(`Approval transaction reverted: ${hash}`);
    console.log(`Approval confirmed: ${hash}`);
  }

  await publicClient.call({
    account: account.address,
    to: plan.transaction.to,
    data: plan.transaction.data,
    value: plan.transaction.value,
  });
  const hash = await walletClient.sendTransaction({
    account,
    to: plan.transaction.to,
    data: plan.transaction.data,
    value: plan.transaction.value ?? 0n,
  });
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  if (receipt.status !== "success")
    throw new Error(`Deposit transaction reverted: ${hash}`);
  console.log(`Deposit confirmed: ${hash}`);
}

async function main() {
  const args = process.argv.slice(2);
  const execute = args.includes("--execute");
  if (args.some((argument) => argument !== "--execute")) {
    throw new Error(
      "Usage: npm run deposit:prepare | npm run deposit -- --execute",
    );
  }
  const context = await prepareDeposit();
  showPrepared(context);
  if (!execute) return;
  await executeDeposit(context);
}

main().catch((error) => {
  console.error(
    error instanceof Error ? error.message : "Client harness failed",
  );
  process.exitCode = 1;
});
