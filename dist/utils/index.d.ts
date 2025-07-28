export * from "./tick-to-price";
export * from "./getAMM";
export * from "./liquidity-amount-math";
export * from "./tick-math";
export * from "./getMarket";
export declare function getHookData({ address, chainId, }: {
    address: string;
    chainId: number;
}): {
    address: import("../index.").Address;
    name: string;
    interval: string;
    maxTTL: number;
    chainId: import("../index.").SupportedChainIds;
    deprecated: boolean;
    index: number;
} | undefined;
