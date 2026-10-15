const assert = require("node:assert/strict");
const { StrykeApiClient } = require("../dist");

async function main() {
  const legs = [
    {
      liquidity: "0",
      opTickArrayIndex: 0,
      originalLiquidity: "9007199254740993",
      rootOptionId: "9007199254740993",
      rootOpTickArrayIndex: 0,
      parentOptionId: null,
      originalOpTickArrayLen: 2,
    },
    {
      liquidity: "42",
      opTickArrayIndex: 1,
      originalLiquidity: "42",
      rootOptionId: "9007199254740993",
      rootOpTickArrayIndex: 1,
      parentOptionId: "9007199254740992",
      originalOpTickArrayLen: 2,
    },
  ].map((leg) => ({
    tickLower: 0,
    tickUpper: 1,
    pool: "pool",
    hook: "hook",
    handler: "handler",
    ...leg,
  }));
  const response = [
    { tokenId: "9007199254740994", opTickArrayLen: 2, opTicks: legs },
  ];
  const api = new StrykeApiClient({
    baseUrl: "https://example.invalid",
    fetch: async () => ({
      ok: true,
      json: async () => JSON.parse(JSON.stringify(response)),
    }),
  });
  const actual = await api.getOptionPositions({
    chain: "robinhood",
    user: "user",
    market: "market",
  });
  assert.deepEqual(
    actual,
    response,
    "client must preserve complete positional arrays and exact lineage values",
  );
  console.log("Premium metadata client compatibility passed");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
