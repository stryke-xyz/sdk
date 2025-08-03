import { Hook } from "../types/types";

export const STRYKE_WEEKLY_HOOK_ARBITRUM: Hook = {
  address: "0x9aCeea983E9B29E6C34765313fc742781196690a",
  name: "stryke_weekly_hook",
  interval: "weekly",
  maxTTL: 604800, // 7 days in seconds
  deprecated: false,
};

export const STRYKE_ZERO_DAY_HOOK_ARBITRUM: Hook = {
  address: "0xf48BE73A6BaC8983603F3e96A9304bC4D82751e4",
  name: "stryke_zero_day_hook",
  interval: "daily",
  maxTTL: 86400, // 1 day in seconds
  deprecated: false,
};

export const HOOKS = [
  STRYKE_WEEKLY_HOOK_ARBITRUM,
  STRYKE_ZERO_DAY_HOOK_ARBITRUM,
].map((hook, index) => ({
  index,
  ...hook,
}));
