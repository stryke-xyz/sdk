const assert = require("node:assert/strict");
const client = require("../dist");

const addresses = {
  user: "0x1111111111111111111111111111111111111111",
  pool: "0x2222222222222222222222222222222222222222",
  hook: "0x3333333333333333333333333333333333333333",
  handler: "0x4444444444444444444444444444444444444444",
  token0: "0x5555555555555555555555555555555555555555",
  token1: "0x6666666666666666666666666666666666666666",
  market: "0x7777777777777777777777777777777777777777",
  router: "0x8888888888888888888888888888888888888888",
  firewall: "0x9999999999999999999999999999999999999999",
  swapper: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
};

const amm = {
  chainId: 4663,
  address: addresses.pool,
  feeBps: 10000,
  handler: addresses.handler,
  ammVerboseName: "Test V3",
  ammShortName: "test-v3",
  principleSymbol: "TEST",
  quoteSymbol: "USD",
  tickSpacing: 200,
  token0: { address: addresses.token0, decimals: 18, symbol: "TEST", chainId: 4663 },
  token1: { address: addresses.token1, decimals: 6, symbol: "USD", chainId: 4663 },
  inversePrice: false,
  isMemePair: false,
};

const sqrtAtZero = client.getSqrtRatioAtTick(0n);

const calculated = client.calculatePositionLiquidity({
  currentSqrtPriceX96: sqrtAtZero,
  tickLower: -200,
  tickUpper: 200,
  amount0Desired: 10n ** 18n,
  amount1Desired: 10n ** 6n,
});
assert(calculated.liquidity > 0n);
assert(calculated.expectedAmounts.amount0 >= 0n);
assert(calculated.expectedAmounts.amount1 >= 0n);

const deposit = client.buildDepositPlan({
  chainId: 4663,
  amm,
  hook: addresses.hook,
  tickLower: -200,
  tickUpper: 200,
  currentSqrtPriceX96: sqrtAtZero,
  currentTick: 0,
  deadline: 2_000_000_000n,
  addLiquidityRouter: addresses.router,
  amount0Desired: 10n ** 18n,
  amount1Desired: 10n ** 6n,
});
assert.equal(deposit.approvals.length, 2);
assert.equal(deposit.transaction.to.toLowerCase(), addresses.router);
assert(deposit.metadata.positionId > 0n);
assert.equal(deposit.metadata.mintPositionData.slice(0, 2), "0x");

const withdraw = client.buildWithdrawPlan({
  chainId: 4663,
  positionManager: addresses.router,
  handler: addresses.handler,
  pool: addresses.pool,
  hook: addresses.hook,
  tickLower: -200,
  tickUpper: 200,
  liquidity: 1000n,
});
assert.equal(withdraw.approvals.length, 0);
assert.equal(withdraw.transaction.to.toLowerCase(), addresses.router);

const swapData = client.buildOnSwapReceiverData({
  target: addresses.router,
  calldata: "0x1234",
  minAmountOut: 99n,
});
assert(swapData.length > 2);

const rangeCheck = {
  user: addresses.user,
  pool: addresses.pool,
  market: addresses.market,
  minTickLower: -1000,
  maxTickUpper: 1000,
  minSqrtPriceX96: client.getSqrtRatioAtTick(-1000n),
  maxSqrtPriceX96: client.getSqrtRatioAtTick(1000n),
  deadline: 2_000_000_000n,
};
const signature = {
  v: 27,
  r: `0x${"11".repeat(32)}`,
  s: `0x${"22".repeat(32)}`,
};

const mint = client.buildMintOptionTransaction({
  chainId: 4663,
  firewall: addresses.firewall,
  market: addresses.market,
  caller: addresses.user,
  optionRecipient: addresses.user,
  optionParams: {
    optionTicks: [
      {
        handler: addresses.handler,
        pool: addresses.pool,
        hook: addresses.hook,
        tickLower: 200,
        tickUpper: 400,
        liquidityToUse: 1000n,
      },
    ],
    ttl: 86400n,
    maxCostAllowance: 100n,
    tickLower: 200,
    tickUpper: 400,
    isCall: true,
  },
  rangeChecks: [rangeCheck],
  signatures: [signature],
});
assert.equal(mint.transaction, undefined);
assert(mint.data.length > 2);

const purchase = client.buildMintOptionPlan({
  chainId: 4663,
  preparations: [
    { market: addresses.market, tickLower: 200, tickUpper: 400, transaction: { to: addresses.firewall, data: mint.data } },
    { market: addresses.market, tickLower: 400, tickUpper: 600, transaction: { to: addresses.firewall, data: mint.data } },
  ],
  approvalRequirements: [{ token: addresses.token0, spender: addresses.firewall, amount: 100n }],
});
assert.equal(purchase.approvals.length, 1);
assert.equal(purchase.transaction.to.toLowerCase(), addresses.firewall);
assert(purchase.warnings.some((warning) => warning.includes("sweep")));

const exercisePreparation = {
  market: addresses.market,
  tokenId: 1n,
  rangeChecks: [rangeCheck],
  signatures: [signature],
};
const exercise = client.buildExerciseOptionTransaction({
  chainId: 4663,
  firewall: addresses.firewall,
  caller: addresses.user,
  preparation: exercisePreparation,
  settlement: {
    optionId: 1n,
    swapper: [addresses.swapper],
    swapData: [swapData],
    liquidityToSettle: [1000n],
  },
});
assert.equal(exercise.to.toLowerCase(), addresses.firewall);
assert(exercise.data.length > 2);

const expiry = client.buildExpirySettlementPlan({
  chainId: 4663,
  openSettlement: addresses.router,
  market: addresses.market,
  settlement: {
    optionId: 1n,
    swapper: [addresses.swapper],
    swapData: [swapData],
    liquidityToSettle: [1000n],
  },
});
assert.equal(expiry.transaction.to.toLowerCase(), addresses.router);

console.log("client transaction builder tests passed");
