import { Hook } from "../types/types";
export declare const STRYKE_WEEKLY_HOOK_ARBITRUM: Hook;
export declare const STRYKE_ZERO_DAY_HOOK_ARBITRUM: Hook;
export declare const ZERO_DAY_HOOK_ADDRESS = "0xf48BE73A6BaC8983603F3e96A9304bC4D82751e4";
export declare const ONE_WEEK_MAX_HOOK_ADDRESS = "0x9aCeea983E9B29E6C34765313fc742781196690a";
export declare const HOOKS: {
    address: import("../types/types").Address;
    name: string;
    interval: string;
    maxTTL: number;
    chainId: import("../types/types").SupportedChainIds;
    deprecated: boolean;
    index: number;
}[];
