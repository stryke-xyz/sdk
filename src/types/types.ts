export type AMM = {
  readonly chainId: number;
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

export type SupportedChainIds = 42161 | 146 | 80094 | 8453 | 1439 | 4663;

export type Market = {
  readonly chainId: number;
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
  readonly chainId: SupportedChainIds;
  readonly address: string;
  readonly name: string;
  readonly interval: string;
  readonly maxTTL: number;
  readonly deprecated: boolean;
};

export type DeploymentContracts = {
  readonly positionManager?: string;
  readonly handler?: string;
  /** Handler used by Slipstream/UP V3 pools on chains with multiple AMMs. */
  readonly upHandler?: string;
  readonly optionPricing?: string;
  readonly feeStrategy?: string;
  readonly poolSpotPrice?: string;
  readonly mintOptionFirewall?: string;
  readonly exerciseOptionFirewall?: string;
  readonly openSettlement?: string;
  readonly addLiquidityRouter?: string;
  readonly multiSwapRouter?: string;
  readonly onSwapReceiver?: string;
  readonly swapRouterSwapper?: string;
  readonly swapRouter?: string;
  readonly feeClaim?: string;
  readonly merkleFeeDistributor?: string;
};

export type ChainDeployment = {
  readonly chainId: SupportedChainIds;
  readonly name: string;
  readonly factory?: string;
  /** UP/Slipstream factory when it differs from the canonical V3 factory. */
  readonly upFactory?: string;
  readonly poolInitCodeHash?: string;
  readonly contracts: DeploymentContracts;
  readonly optionMarkets: readonly string[];
};
