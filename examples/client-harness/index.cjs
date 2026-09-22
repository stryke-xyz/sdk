#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const {
  createPublicClient,
  http,
} = require("viem");
const sdk = require("../../dist");

const CHAIN_ID = Number(process.env.CHAIN_ID || 4663);
const RPC_URL = process.env.RPC_URL || "https://rpc.mainnet.chain.robinhood.com";
const args = process.argv.slice(2).filter((argument) => argument !== "--");

if (process.env.PRIVATE_KEY || process.env.WALLET_PRIVATE_KEY) {
  throw new Error("This harness is preparation-only and does not accept private keys");
}

const chain = {
  id: CHAIN_ID,
  name: CHAIN_ID === 4663 ? "Robinhood Chain" : `Chain ${CHAIN_ID}`,
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] } },
};

const publicClient = createPublicClient({ chain, transport: http(RPC_URL) });

function json(value) {
  return JSON.stringify(value, (_, item) => (typeof item === "bigint" ? item.toString() : item), 2);
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable ${name}`);
  return value;
}

function bigintEnv(name) {
  return BigInt(required(name));
}

function integerEnv(name, fallback) {
  const value = process.env[name];
  return value === undefined ? fallback : Number(value);
}

function readJsonInput() {
  const file = process.env.INPUT_FILE || args[1];
  if (!file) throw new Error("Set INPUT_FILE or pass a JSON input file as the third argument");
  return JSON.parse(fs.readFileSync(path.resolve(file), "utf8"));
}

function getDeploymentOrThrow() {
  const deployment = sdk.getDeployment(CHAIN_ID);
  if (!deployment) throw new Error(`No SDK deployment registry entry for chain ${CHAIN_ID}`);
  return deployment;
}

function getAmmOrThrow() {
  const deployment = getDeploymentOrThrow();
  const address = process.env.AMM_ADDRESS || sdk.getAMMs({ chainId: CHAIN_ID })[0]?.address;
  if (!address) throw new Error("Set AMM_ADDRESS");
  const amm = sdk.getAMM({ chainId: CHAIN_ID, address });
  if (!amm) throw new Error(`AMM ${address} is not registered in the SDK`);
  return { amm, deployment };
}

async function readPoolState(pool) {
  const [chainId, blockNumber, slot0] = await Promise.all([
    publicClient.getChainId(),
    publicClient.getBlockNumber(),
    publicClient.readContract({ address: pool, abi: sdk.Slot0Abi, functionName: "slot0" }),
  ]);
  if (chainId !== CHAIN_ID) throw new Error(`RPC returned chain ${chainId}; expected ${CHAIN_ID}`);
  return { chainId, blockNumber, sqrtPriceX96: slot0[0], tick: Number(slot0[1]) };
}

async function state() {
  const { amm } = getAmmOrThrow();
  const poolState = await readPoolState(amm.address);
  console.log(json({ mode: "read-only", rpcUrl: RPC_URL, amm, poolState }));
}

async function deposit() {
  const { amm, deployment } = getAmmOrThrow();
  const hook = process.env.HOOK_ADDRESS || sdk.getHooks(CHAIN_ID)[0]?.address;
  const router = process.env.ADD_LIQUIDITY_ROUTER || deployment.contracts.addLiquidityRouter;
  if (!hook) throw new Error("Set HOOK_ADDRESS");
  if (!router) throw new Error("No add-liquidity router is registered; set ADD_LIQUIDITY_ROUTER");

  const poolState = await readPoolState(amm.address);
  const tickLower = integerEnv(
    "TICK_LOWER",
    sdk.alignTickToSpacing(poolState.tick - amm.tickSpacing, amm.tickSpacing, "down")
  );
  const tickUpper = integerEnv(
    "TICK_UPPER",
    sdk.alignTickToSpacing(poolState.tick + amm.tickSpacing, amm.tickSpacing, "up")
  );
  const plan = sdk.buildDepositPlan({
    chainId: CHAIN_ID,
    amm,
    hook,
    tickLower,
    tickUpper,
    currentSqrtPriceX96: poolState.sqrtPriceX96,
    currentTick: poolState.tick,
    amount0Desired: bigintEnv("AMOUNT0_DESIRED"),
    amount1Desired: bigintEnv("AMOUNT1_DESIRED"),
    deadline: BigInt(integerEnv("DEADLINE", Math.floor(Date.now() / 1000) + 900)),
    addLiquidityRouter: router,
  });

  console.log(json({ mode: "prepare-only", poolState, plan }));
}

async function withdraw() {
  const { amm, deployment } = getAmmOrThrow();
  const hook = process.env.HOOK_ADDRESS || sdk.getHooks(CHAIN_ID)[0]?.address;
  const positionManager = process.env.POSITION_MANAGER || deployment.contracts.positionManager;
  if (!hook) throw new Error("Set HOOK_ADDRESS");
  if (!positionManager) throw new Error("No position manager is registered; set POSITION_MANAGER");

  const plan = sdk.buildWithdrawPlan({
    chainId: CHAIN_ID,
    positionManager,
    handler: process.env.HANDLER || amm.handler,
    pool: process.env.POOL || amm.address,
    hook,
    tickLower: Number(required("TICK_LOWER")),
    tickUpper: Number(required("TICK_UPPER")),
    liquidity: bigintEnv("LIQUIDITY"),
  });
  console.log(json({ mode: "prepare-only", plan }));
}

async function purchase() {
  const input = readJsonInput();
  const api = new sdk.StrykeApiClient({ baseUrl: required("STRYKE_API_URL") });
  const client = sdk.createStrykeClient({ api });
  const deployment = getDeploymentOrThrow();
  const firewall = input.firewall || deployment.contracts.mintOptionFirewall;
  if (!firewall) throw new Error("No mint firewall is registered; set firewall in the input file");

  const approvalRequirements = (input.approvalRequirements || []).map((item) => ({
    token: item.token,
    spender: item.spender || firewall,
    amount: BigInt(item.amount),
    description: item.description,
  }));
  const plan = await client.preparePurchase({
    chainId: CHAIN_ID,
    firewall,
    request: input.request,
    approvalRequirements,
    batch: input.batch,
  });
  console.log(json({ mode: "prepare-only", plan }));
}

async function exercise() {
  const input = readJsonInput();
  const api = new sdk.StrykeApiClient({ baseUrl: required("STRYKE_API_URL") });
  const client = sdk.createStrykeClient({ api });
  const deployment = getDeploymentOrThrow();
  const firewall = input.firewall || deployment.contracts.exerciseOptionFirewall;
  if (!firewall) throw new Error("No exercise firewall is registered; set firewall in the input file");

  const settlements = Object.fromEntries(
    Object.entries(input.settlements || {}).map(([optionId, settlement]) => [optionId, {
      optionId: BigInt(settlement.optionId || optionId),
      swapper: settlement.swapper,
      swapData: settlement.swapData,
      liquidityToSettle: settlement.liquidityToSettle.map(BigInt),
    }])
  );
  const plan = await client.prepareExercise({
    chainId: CHAIN_ID,
    firewall,
    caller: input.caller || input.request.user,
    request: input.request,
    settlements,
    batch: input.batch,
  });
  console.log(json({ mode: "prepare-only", plan }));
}

async function main() {
  const command = args[0];
  if (command === "state") return state();
  if (command === "deposit") return deposit();
  if (command === "withdraw") return withdraw();
  if (command === "purchase") return purchase();
  if (command === "exercise") return exercise();
  throw new Error("Usage: client-harness <state|deposit|withdraw|purchase|exercise> [input.json]");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
