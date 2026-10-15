import type { Api, OptionLegMetadata } from "../dist";

type Position = Api["v1/options/positions"][number];
type Leg = Position["opTicks"][number];

// Existing API payloads remain assignable without any new metadata.
const legacyLeg: Leg = {
  tickLower: 0,
  tickUpper: 1,
  pool: "pool",
  hook: "hook",
  handler: "handler",
  liquidity: "0",
};
const legacy: Position = {
  market: "market",
  breakEven: 0,
  chainId: 4663,
  expiry: "1",
  fee: "0",
  feeUsd: 0,
  isCall: true,
  markPriceAtOpen: 0,
  premium: "0",
  premiumUsd: 0,
  size: "0",
  sizeUsd: 0,
  strike: 0,
  tokenId: "9007199254740993",
  opTicks: [legacyLeg],
};
const metadata: OptionLegMetadata = {
  opTickArrayIndex: 0,
  originalLiquidity: "9007199254740993",
  rootOptionId: "9007199254740993",
  rootOpTickArrayIndex: 0,
  parentOptionId: null,
  originalOpTickArrayLen: 2,
};
const corrected: Position = {
  ...legacy,
  opTickArrayLen: 2,
  opTicks: [{ ...legacyLeg, ...metadata }],
};
// @ts-expect-error IDs must retain exact integer precision as strings.
const unsafeId: OptionLegMetadata = { rootOptionId: 9007199254740993 };
// @ts-expect-error Liquidity must retain exact integer precision as strings.
const unsafeLiquidity: OptionLegMetadata = {
  originalLiquidity: 9007199254740993,
};
void [legacy, corrected, unsafeId, unsafeLiquidity];
