import { Hook } from "../types/types";

export const STRYKE_WEEKLY_HOOK_ARBITRUM: Hook = {
  address: "0x9436981dDFa57F108BfF350010FE39Ec380f0542",
  name: "stryke_weekly_hook",
  interval: "weekly",
  maxTTL: 604800, // 7 days in seconds
  deprecated: false,
};

export const STRYKE_ZERO_DAY_HOOK_ARBITRUM: Hook = {
  address: "0x3F8A76dCeeF79aDBf842Da80796EFc8E778dD422",
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
