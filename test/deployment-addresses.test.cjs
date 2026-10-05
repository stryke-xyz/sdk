const assert = require("node:assert/strict");
const { isAddress, getAddress, encodeFunctionData, decodeFunctionData } = require("viem");
const sdk = require(process.env.SDK_TEST_DIST || "../dist");

const deployment = sdk.getDeployment(4663);
for (const [name, address] of Object.entries(deployment.contracts)) {
  assert(isAddress(address), `Robinhood contracts.${name} must be ABI-encodable: ${address}`);
}
const receiver = deployment.contracts.onSwapReceiver;
assert.equal(receiver.toLowerCase(), "0x26dae4850d151f215abf8f7b901f1bcbd6ff02f5",
  "Checksum correction must preserve the deployed receiver address");
assert.equal(receiver, getAddress(receiver.toLowerCase()));
console.log("deployment address tests passed");

// Check every discovered market, including AI, through the actual pricing ABI.
for (const market of sdk.getMarkets(4663)) {
  assert(isAddress(market.address), `${market.principleSymbol} address must be ABI-encodable`);
  assert(deployment.optionMarkets.includes(market.address));
  const ttls = [3600n, 7200n, 21600n, 43200n, 86400n, 604800n];
  const ivs = ttls.map(() => 194n);
  const data = encodeFunctionData({abi: sdk.OptionPricingAbi, functionName: "updateIVs", args: [market.address, ttls, ivs]});
  const decoded = decodeFunctionData({abi: sdk.OptionPricingAbi, data});
  assert.equal(decoded.args[0].toLowerCase(), market.address.toLowerCase());
  assert.deepEqual(decoded.args[1], ttls);
  assert.deepEqual(decoded.args[2], ivs);
}
const ai = sdk.getMarkets(4663).find(market => market.principleSymbol === "AI");
assert.equal(ai.address.toLowerCase(), "0x9e7e0341b64fc1990f960ad493bbaad80400f75a",
  "Checksum correction must preserve the deployed AI market address bytes");
assert.equal(ai.address, getAddress(ai.address.toLowerCase()));
