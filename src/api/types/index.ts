import { AMM, Hook } from "../../types/types";

export type Api = {
  "v1/deposit/history": {
    action: "deposit" | "withdraw";
    chain: string;
    blockNumber: string;
    transactionHash: string;
    date: string;
    amount0: number;
    amount1: number;
    amm: AMM;
    hook: { address: string };
    handler: { address: string };
    range: {
      min: number;
      max: number;
    };
    meta: {
      liquidity: string;
    };
  }[];
  "v1/prices": Record<string, number>;
  "v1/markets": {

    ticker: string;
    networks: {
      amms: AMM[];
      primeAMM: AMM;
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
    chain: string;
    strike0: number;
    strike1: number;
    pool: AMM;
    handler: { address: string };
    hook: { address: string };
    liquidityUsd: number;
    earningsUsd: number;
    liquidity: {
      amount0: string;
      amount1: string;
    };
    withdrawable: {
      amount0: string;
      amount1: string;
    };
    reserve: {
      liquidity: {
        amount0: string;
        amount1: string;
      };
      withdrawable: {
        amount0: string;
        amount1: string;
      };
    };
    earnings: {
      amount0: string;
      amount1: string;
    };
    meta: {
      tickLower: number;
      tickUpper: number;
      liquidityReserved: string;
      tokenId: string;
      shares: string;
      liquidity: string;
      withdrawableLiquidity: string;
      withdrawableReservedLiquidity: string;
    };
    time: string;
    version: number;
    isInRange: boolean;
  }[];
  "v1/strikes-chain": {
    maxStrike: number;
    minStrike: number;
    liquidityUsd: number;
    openInterestUsd: number;
    parts: {
      amount0: string;
      amount1: string;
      amount0Usd: number;
      amount1Usd: number;
      hook: Hook;
      handler: string;
      pool: AMM;
      meta: {
        liquidity: string;
        liquidityUsed: string;
        liquidityAvailable: string;
      };
    }[];
    meta: {
      tickLower: number;
      tickUpper: number;
      totalLiquidity: string;
      totalLiquidityUsed: string;
      totalLiquidityAvailable: string;
    };
  }[];
};
