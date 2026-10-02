const assert = require('node:assert/strict');
const path = require('node:path');
const dist = process.env.SDK_TEST_DIST || path.resolve(__dirname, '../dist');
const sdk = require(dist);
const { tokens, retiredTokens } = require(path.join(dist, 'tokens'));
const chainId = 4663;
const marketAddress = '0x0E21d9DCc57DC36eF8B7231024B99309fB88E624';
const poolAddress = '0xb77e03DF4CAe1752aa1E2b52C46794026b46873E';
assert.equal(tokens[chainId].QUOTRON, undefined);
assert.equal(retiredTokens[chainId].QUOTRON.decimals, 18);
assert.deepEqual(sdk.getMarkets(chainId).map(m => m.principleSymbol), ['PONS', 'STONKBROKER', 'AI', 'BONER']);
assert.deepEqual(sdk.getAMMs({ chainId }).map(m => m.principleSymbol), ['PONS', 'STONKBROKER', 'AI', 'BONER']);
for (const market of sdk.getMarkets(chainId)) {
  assert.equal(market.primeAmm.principleSymbol, market.principleSymbol);
  assert(market.amms.includes(market.primeAmm));
  assert.equal(sdk.getMarket({ chainId, address: market.address }), market);
}
for (const address of [marketAddress, marketAddress.toLowerCase(), marketAddress.toUpperCase()]) {
  const market = sdk.getMarket({ chainId, address });
  assert.equal(market, sdk.getRetiredMarkets(chainId)[0]);
  assert.equal(market.baseToken.symbol, 'QUOTRON');
  assert.equal(market.quoteToken.symbol, 'USDG');
  assert.equal(market.primeAmm, sdk.getAMM({ chainId, address: poolAddress.toUpperCase() }));
}
assert.equal(sdk.getRetiredAMMs({ chainId })[0].address, poolAddress);
assert(sdk.getDeployment(chainId).optionMarkets.includes(marketAddress));
assert.deepEqual(sdk.getRetiredMarkets(999999), []);
assert.deepEqual(sdk.getRetiredAMMs({ chainId: 999999 }), []);
assert.equal(sdk.getMarket({ chainId: 999999, address: marketAddress }), null);
assert.equal(sdk.getAMM({ chainId: 999999, address: poolAddress }), null);
console.log('metadata delisting tests passed');
