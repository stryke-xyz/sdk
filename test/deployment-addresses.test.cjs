const assert = require("node:assert/strict");
const { isAddress, getAddress } = require("viem");
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
