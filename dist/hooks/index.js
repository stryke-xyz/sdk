"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOOKS = exports.ONE_WEEK_MAX_HOOK_ADDRESS = exports.ZERO_DAY_HOOK_ADDRESS = exports.STRYKE_ZERO_DAY_HOOK_ARBITRUM = exports.STRYKE_WEEKLY_HOOK_ARBITRUM = void 0;
exports.STRYKE_WEEKLY_HOOK_ARBITRUM = {
    address: "0x9aCeea983E9B29E6C34765313fc742781196690a",
    name: "stryke_weekly_hook",
    interval: "weekly",
    maxTTL: 604800, // 7 days in seconds
    chainId: 42161,
    deprecated: false,
};
exports.STRYKE_ZERO_DAY_HOOK_ARBITRUM = {
    address: "0xf48BE73A6BaC8983603F3e96A9304bC4D82751e4",
    name: "stryke_zero_day_hook",
    interval: "daily",
    maxTTL: 86400, // 1 day in seconds
    chainId: 42161,
    deprecated: false,
};
exports.ZERO_DAY_HOOK_ADDRESS = "0xf48BE73A6BaC8983603F3e96A9304bC4D82751e4";
exports.ONE_WEEK_MAX_HOOK_ADDRESS = "0x9aCeea983E9B29E6C34765313fc742781196690a";
exports.HOOKS = [
    exports.STRYKE_WEEKLY_HOOK_ARBITRUM,
    exports.STRYKE_ZERO_DAY_HOOK_ARBITRUM,
].map((hook, index) => ({
    index,
    ...hook,
}));
