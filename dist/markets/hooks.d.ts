import { Hook } from "../types";
export declare const STRYKE_WEEKLY_HOOK_ARBITRUM: Hook;
export declare const STRYKE_ZERO_DAY_HOOK_ARBITRUM: Hook;
export declare const HOOKS: {
    address: import("../types").Address;
    name: string;
    interval: string;
    maxTTL: number;
    chainId: import("../types").SupportedChainIds;
    deprecated: boolean;
    index: number;
}[];
