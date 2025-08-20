import { AMM, Hook, Token } from "../../types/types";

export type Api = {
  "v1/options/quotes": Record<
    string,
    {
      strike: number;
      type: "call" | "put";
      availableOptionsAmount: number;
      availableLiquidityUsd: number;
      token: Token;
      rateInToken: string;
      rateUsd: number;
      opTicks: {
        tickLower: number;
        tickUpper: number;
        hook: string;
        pool: string;
        handler: string;
        liquidity: string;
      }[];
    }[]
  >;
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
      baseToken: string;
      quoteToken: string;
      amms: string[];
      primeAMM: string;
      pairSymbol: string;
      totalLiquidityUSD: number;
      availableLiquidityUSD: number;
      dailyVolumeUSD: number;
      weeklyEarnedUSD: number;
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
    liquidityUsd: number;
    withdrawableUsd: number;
    reservedUsd: number;
    withdrawableReservedUsd: number;
    earned: string;
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
    premium: {
      iv: number;
      tokenAmount: string;
      usd: number;
      expiry: number;
      ttl: number;
    }[];
    parts: {
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
