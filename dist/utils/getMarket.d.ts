type Params = {
    address: string;
    chainId: number;
};
export declare function getMarket(params: Params): {
    pairSymbol: string;
    principleSymbol: string;
    quoteSymbol: string;
    address: import("../index.").Address;
    primeAmm: import("../index.").AMM;
    amms: readonly import("../index.").AMM[];
    baseToken: import("../index.").Token;
    quoteToken: import("../index.").Token;
    inversePrice: boolean;
    chainId: import("../index.").SupportedChainIds;
    index: number;
} | undefined;
export {};
