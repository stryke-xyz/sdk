import { Hook } from "../types/types";

export const STRYKE_WEEKLY_HOOK: Hook = {
  address: "0x205D7125FA32a5388dcEe28c37906c7D04e1eB98",
  name: "stryke_weekly_hook",
  interval: "weekly",
  maxTTL: 604800, // 7 days in seconds
  deprecated: false,
};

export const STRYKE_ZERO_DAY_HOOK: Hook = {
  address: "0x17A2A73904EdFD382304a807B80b56dc57adb1E7",
  name: "stryke_zero_day_hook",
  interval: "daily",
  maxTTL: 86400, // 1 day in seconds
  deprecated: false,
};

export const HOOKS = [STRYKE_WEEKLY_HOOK, STRYKE_ZERO_DAY_HOOK].map(
  (hook, index) => ({
    index,
    ...hook,
  })
);
