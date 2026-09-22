# Client preparation harness

This harness tests the SDK client layer without a private key and without
broadcasting transactions. Every command either reads public chain state or
prints `{ chainId, to, data, value }` calls for a user-controlled wallet.

The default network settings target Robinhood Chain mainnet:

```text
chain ID: 4663
RPC: https://rpc.mainnet.chain.robinhood.com
```

Run the harness after building the SDK:

```bash
pnpm build
pnpm client:harness -- state
```

## Deposit preparation

`deposit` reads the registered AMM's current `slot0`, then builds approvals and
`AddLiquidityRouter.addLiquidity` calldata.

```bash
AMOUNT0_DESIRED=1000000000000000000 \
AMOUNT1_DESIRED=1000000 \
HOOK_ADDRESS=0x... \
pnpm client:harness -- deposit
```

Useful overrides include `RPC_URL`, `AMM_ADDRESS`, `TICK_LOWER`, `TICK_UPPER`,
`DEADLINE`, `ADD_LIQUIDITY_ROUTER`, and `HOOK_ADDRESS`.

## Withdraw preparation

```bash
AMM_ADDRESS=0x... \
HOOK_ADDRESS=0x... \
TICK_LOWER=-200 \
TICK_UPPER=200 \
LIQUIDITY=1000000 \
pnpm client:harness -- withdraw
```

## Purchase preparation

Create an input file with the existing backend assemble request and explicit
payment-token approvals:

```json
{
  "request": {
    "chain": "robinhood",
    "expiry": 1770000000,
    "user": "0x...",
    "market": "PONSUSD",
    "deadline": 1770000100,
    "options": []
  },
  "approvalRequirements": [
    { "token": "0x...", "amount": "1000000" }
  ]
}
```

Then run:

```bash
STRYKE_API_URL=https://api.example.com \
pnpm client:harness -- purchase purchase.json
```

The backend supplies firewall attestations; the harness only prints the final
firewall transaction and approval calls.

## Exercise preparation

The exercise input contains the backend request plus settlement data because
the current exercise endpoint returns signatures/range checks, not swap routes:

```json
{
  "request": {
    "chain": "robinhood",
    "user": "0x...",
    "market": "PONSUSD",
    "deadline": 1770000100,
    "options": [{ "tokenId": 1, "pools": ["0x..."] }]
  },
  "settlements": {
    "1": {
      "swapper": ["0x..."],
      "swapData": ["0x..."],
      "liquidityToSettle": ["1000000"]
    }
  }
}
```

```bash
STRYKE_API_URL=https://api.example.com \
pnpm client:harness -- exercise exercise.json
```

There is deliberately no `send`, `broadcast`, or private-key command in this
harness.
