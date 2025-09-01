export type Api = {
  "v1/deposit/earned": {
    type: string;
    pool: string;
    hook: string;
    chainId: number;
    timestamp: string;
    amount0: string;
    amount1: string;
    tickLower: number;
    tickUpper: number;
  };
  "v1/options/exercise": {
    market: string;
    rangeChecks: {
      user: string;
      pool: string;
      market: string;
      minTickLower: number;
      maxTickUpper: number;
      minSqrtPriceX96: string;
      maxSqrtPriceX96: string;
      deadline: string;
    }[];
    signatures: {
      v: number;
      r: string;
      s: string;
    }[];
    tokenId: number;
  }[];
  "v1/options/positions": {
    market: string;
    breakEven: number;
    chainId: number;
    expiry: string;
    fee: string;
    feeUsd: number;
    isCall: boolean;
    markPriceAtOpen: number;
    premium: string;
    premiumUsd: number;
    size: string;
    sizeUsd: number;
    strike: number;
    tokenId: string;
    opTicks: {
      tickLower: number;
      tickUpper: number;
      pool: string;
      hook: string;
      handler: string;
      liquidity: string;
    }[];
  }[];
  "v1/options/assemble": {
    market: string;
    tickLower: number;
    tickUpper: number;
    transaction: {
      data: string;
      to: string;
    };
  }[];
  "v1/options/quotes": {
    strike: number;
    type: "call" | "put";
    availableOptionsAmount: number;
    availableLiquidityUsd: number;
    protocolFeeRate: number;
    protocolFeeInToken: string;
    protocolFeeUsd: number;
    token: string;
    rateInToken: string;
    rateUsd: number;
    tickLower: number;
    tickUpper: number;
    opTicks: {
      hook: string;
      pool: string;
      handler: string;
      liquidity: string;
    }[];
  }[];
  "v1/deposit/history": {
    action: "deposit" | "withdraw";
    chainId: number;
    blockNumber: string;
    transactionHash: string;
    date: string;
    amount0: number;
    amount1: number;
    amm: string;
    pool: string;
    hook: string;
    handler: string;
    strike0: number;
    strike1: number;
  }[];
  "v1/prices": Record<string, number>;
  "v1/markets": {
    principal: string;
    quote: string;
    networks: {
      liquidityUsd: number;
      openInterestUsd: number;
      dailyVolumeUsd: number;
      dailyPremiumUsd: number;
      address: string;
      chainId: number;
    }[];
  }[];
  "v1/deposit/positions": {
    chainId: number;
    strike0: number;
    strike1: number;
    pool: string;
    handler: string;
    hook: string;
    earningsUsd: number;
    earnedAmount0: string;
    earnedAmount1: string;
    liquidityUsd: number;
    withdrawableUsd: number;
    reservedUsd: number;
    withdrawableReservedUsd: number;
    liquidity: string;
    reserved: string;
    shares: string;
    withdrawableLiquidity: string;
    withdrawableReserved: string;
    tickLower: number;
    tickUpper: number;
    version: number;
  }[];
  "v1/strikes-chain": {
    maxStrike: number;
    minStrike: number;
    liquidityUsd: number;
    openInterestUsd: number;
    ticker: string;
    chainId: number;
    type: "call" | "put";
    token: string;
    contracts: number;
    parts: {
      contracts: number;
      amount: string;
      amountUsd: number;
      hook: string;
      handler: string;
      pool: string;
      liquidity: string;
      liquidityUsed: string;
      liquidityAvailable: string;
    }[];
    tickLower: number;
    tickUpper: number;
    totalLiquidity: string;
    totalLiquidityUsed: string;
    totalLiquidityAvailable: string;
  }[];
};
