import { ARBITRUM_CHAIN_ID, RH_CHAIN_ID } from "../chains";
import { Hook } from "../types/types";

export const STRYKE_WEEKLY_HOOK: Hook = {
  chainId: ARBITRUM_CHAIN_ID,
  address: "0x205D7125FA32a5388dcEe28c37906c7D04e1eB98",
  name: "stryke_weekly_hook",
  interval: "weekly",
  maxTTL: 604800, // 7 days in seconds
  deprecated: false,
};

export const STRYKE_ZERO_DAY_HOOK: Hook = {
  chainId: ARBITRUM_CHAIN_ID,
  address: "0x17A2A73904EdFD382304a807B80b56dc57adb1E7",
  name: "stryke_zero_day_hook",
  interval: "daily",
  maxTTL: 86400, // 1 day in seconds
  deprecated: false,
};

export const STRYKE_ROBINHOOD_ZERO_DAY_HOOK: Hook = {
  chainId: RH_CHAIN_ID,
  address: "0x87265de79499f1a03e17e13eff74c2da268ec0c8",
  name: "stryke_robinhood_zero_day_hook",
  interval: "daily",
  maxTTL: 86400,
  deprecated: false,
};

export const STRYKE_ROBINHOOD_WEEKLY_HOOK: Hook = {
  chainId: RH_CHAIN_ID,
  address: "0x4b60687281799994f8dcd9b30f8a50ac4a30eb75",
  name: "stryke_robinhood_weekly_hook",
  interval: "weekly",
  maxTTL: 604800,
  deprecated: false,
};

export const hooksByChainId: Record<number, Hook[]> = {
  [ARBITRUM_CHAIN_ID]: [STRYKE_WEEKLY_HOOK, STRYKE_ZERO_DAY_HOOK],
  [RH_CHAIN_ID]: [STRYKE_ROBINHOOD_WEEKLY_HOOK, STRYKE_ROBINHOOD_ZERO_DAY_HOOK],
};

export function getHooks(chainId: number): Hook[] {
  return hooksByChainId[chainId] ?? [];
}

// Backwards-compatible Arbitrum export. New consumers should use getHooks(chainId).
export const HOOKS = hooksByChainId[ARBITRUM_CHAIN_ID].map(
  (hook, index) => ({
    index,
    ...hook,
  })
);
