export type Address = `0x${string}`;

export type AMM = {
  readonly chainId: number;
  readonly address: Address;
  readonly feeBps: number;
  readonly handler: Address;
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
  readonly address: Address;
  readonly decimals: number;
  readonly symbol: string;
  readonly chainId: SupportedChainIds;
};

export type SupportedChainIds = 42161 | 146 | 5000 | 80094;

export type Market = {
  readonly pairSymbol: string;
  readonly principleSymbol: string;
  readonly quoteSymbol: string;
  readonly address: Address;
  readonly primeAmm: AMM;
  readonly amms: readonly AMM[];
  readonly baseToken: Token;
  readonly quoteToken: Token;
  readonly inversePrice: boolean;
  readonly chainId: SupportedChainIds;
};

export type Hook = {
  readonly address: Address;
  readonly name: string;
  readonly interval: string;
  readonly maxTTL: number;
  readonly chainId: SupportedChainIds;
  readonly deprecated: boolean;
};
