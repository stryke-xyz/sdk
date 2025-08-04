
export type AMM = {
  readonly address: string;
  readonly feeBps: number;
  readonly handler: string;
  readonly ammVerboseName: string;
  readonly ammShortName: string;
  readonly principleSymbol: string;
  readonly quoteSymbol: string;
  readonly tickSpacing: number;
  readonly token0: Token;
  readonly token1: Token;
  readonly inversePrice: boolean;
  readonly isMemePair: boolean;
};

export type Token = {
  readonly address: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly chainId: SupportedChainIds;
};

export type SupportedChainIds = 42161 | 146 | 80094 | 8453 | 1439;

export type Market = {
  readonly pairSymbol: string;
  readonly principleSymbol: string;
  readonly quoteSymbol: string;
  readonly address: string;
  readonly primeAmm: AMM;
  readonly amms: readonly AMM[];
  readonly baseToken: Token;
  readonly quoteToken: Token;
};

export type Hook = {
  readonly address: string;
  readonly name: string;
  readonly interval: string;
  readonly maxTTL: number;
  readonly deprecated: boolean;
};
