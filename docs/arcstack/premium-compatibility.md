# Premium accounting SDK compatibility

Implemented locally on 2026-10-15 for review. No version bump, package publication,
API deployment or Crons change was performed.

## Public contract

`Api["v1/options/positions"]` now accepts optional `opTickArrayLen`, the contract's
leg count including completed legs. Each `opTicks` entry accepts the exported
`OptionLegMetadata` fields corresponding to Prism:

| Field | Type | Meaning |
|---|---|---|
| `opTickArrayIndex` | optional number | Contract array position; retain zero-liquidity entries |
| `originalLiquidity` | optional string | Exact original leg liquidity |
| `rootOptionId` | optional string or null | Original funding option ID |
| `rootOpTickArrayIndex` | optional number or null | Original funding leg position |
| `parentOptionId` | optional string or null | Split parent ID |
| `originalOpTickArrayLen` | optional number or null | Original leg array length |

Nullability follows Prism's lineage columns. Absence supports older API versions;
missing metadata is not proof of coverage, eligibility or accounting readiness.
IDs and liquidity remain decimal strings, including values above JavaScript's safe
integer range. These are response types: the SDK does not validate or reconstruct
missing legs, calculate rewards, infer readiness or change transaction encoding.

The API has not yet been updated to return these fields. Its GraphQL selections,
mapping, response schema and generated types must be updated together, preserving
positional zero legs. Do not publish a package expecting these fields to be populated
by the currently deployed API. Allocation timing, baseline balances and opaque
internal accounting journals are not exposed speculatively in the SDK.

## Verification

- `npm test` under Node 24.15.0 passed: build, public declaration type checks,
  existing client/metadata/deployment suites and premium metadata client coverage.
- Type checks accept legacy payloads and corrected metadata, and reject numeric
  funding IDs/liquidity. They import the built package declarations.
- Client coverage preserves zero-liquidity positional entries, split lineage,
  null parent and IDs above the safe integer range through a JSON response.
- `npm pack --dry-run --ignore-scripts --json` passed: 88 files, including public
  JavaScript and declaration entrypoints and the updated API declarations.
- Version remains 2.0.2; release/version selection is deferred until review.

## Review handoff

Review the SDK diff before changing another application. Crons already contains
settlement safeguards, immutable archives and durable writer infrastructure; the
remaining task is a focused compatibility review, not a replacement implementation.
Its current snapshot gate does not consume Prism's `financialReady`, `premiumStatus`
or `accountingMetadata`. Coordinate the API response contract before integrating
new fields in downstream consumers. Production baseline, Redis reconciliation,
publisher funding/readiness and migration rehearsal remain release requirements.
