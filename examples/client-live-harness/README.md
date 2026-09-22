# SDK client deposit harness

This is a small Node.js consumer of the published `@stryke-xyz/sdk` package.
It uses the SDK to read the pool and prepare a concentrated-liquidity deposit.
By default it only prints the prepared calls; it does not sign or broadcast.

The package's `.npmrc` points the `@stryke-xyz` scope at local Verdaccio on
`127.0.0.1:4873`. Start Verdaccio and publish the SDK version from the SDK
checkout before installing this example. Public packages such as `viem` and
`dotenv` continue to resolve from npmjs.

From the SDK repository root, the local package setup is:

```sh
verdaccio --listen 127.0.0.1:4873
npm publish --registry=http://127.0.0.1:4873 --access=restricted
```

Then install the consumer dependencies from this example directory with
`npm install`.

## Install and configure

From this directory:

```sh
npm install
cp .env.example .env
```

Edit `.env` locally. The private key is optional for preparation and required
only for `--execute`. Never commit `.env`, paste its key into chat, or use a
browser bundle as a place to store a private key. The repository ignore rules
exclude `.env` files.

`AMOUNT0_DESIRED` and `AMOUNT1_DESIRED` are integer base units for the AMM's
registered `token0` and `token1` respectively—not human decimal amounts. Set
the tick bounds deliberately for the position you want. If omitted, this demo
uses one tick spacing below and above the current pool tick.

## Prepare only

```sh
npm run deposit:prepare
```

This reads `slot0`, checks the configured RPC chain ID, and prints approvals and
the `AddLiquidityRouter` call returned by `buildDepositPlan`. It does not need
`PVK`.

## Explicit execution

```sh
npm run deposit -- --execute
```

The script derives and displays the signer address (never the private key),
requires a nonzero native gas balance, checks token balances against the SDK's
calculated expected deposit amounts, skips approvals whose allowance is
already sufficient, simulates each approval before sending it, and requires
typing `SEND <address-prefix>` before the first transaction. It then waits for
each approval receipt, simulates the deposit call, sends it, and waits for its
receipt. Each approval and the deposit is a separate on-chain transaction.
Any allowance granted by an approval remains in place after the deposit.

This is a local testing harness, not a production wallet. The SDK's current
deposit plan warns that the liquidity manager does not enforce
`amount0Min`/`amount1Min`; do not treat the prepared call as production-safe
slippage protection. Review every displayed amount, address, tick range, and
call before confirming. No transaction is sent unless `--execute` is supplied
and the confirmation phrase is entered.
