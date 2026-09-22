# Client transaction preparation

The `@stryke-xyz/sdk` client layer is preparation-only. It produces complete
transaction calls and does not accept private keys, wallet clients, or execute
transactions.

```ts
import {
  StrykeApiClient,
  buildDepositPlan,
  createStrykeClient,
} from "@stryke-xyz/sdk";

const api = new StrykeApiClient({
  baseUrl: "https://api.example.com",
});

const client = createStrykeClient({ api });

const plan = buildDepositPlan({
  chainId: 4663,
  amm,
  hook,
  tickLower: -200,
  tickUpper: 200,
  currentSqrtPriceX96,
  currentTick,
  amount0Desired,
  amount1Desired,
  deadline,
  addLiquidityRouter,
});

// The caller decides how to send these calls through its own wallet system.
for (const approval of plan.approvals) {
  await wallet.sendTransaction({
    chainId: approval.chainId,
    to: approval.to,
    data: approval.data,
    value: approval.value,
  });
}
await wallet.sendTransaction({
  chainId: plan.transaction.chainId,
  to: plan.transaction.to,
  data: plan.transaction.data,
  value: plan.transaction.value,
});
```

The option purchase flow is similar. `StrykeClient.preparePurchase` calls the
backend for the firewall attestations and returns the final firewall calldata.
The backend signature is embedded in the transaction; the user still signs
the actual transaction with their own wallet.

The SDK intentionally does not append the firewall's unrestricted `sweep`
function. The caller must provide explicit approval amounts, and the deployed
firewall should provide a safe residual-refund mechanism before production
use.
