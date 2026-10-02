import { markets, retiredMarkets } from "../markets";

type Params = {
  address: string;
  chainId: number;
};

export function getMarket(params: Params) {
  const marketsByChain = markets[params.chainId];
  return (
    marketsByChain?.find(
      (market) => market.address.toLowerCase() === params.address.toLowerCase()
    ) ||
    retiredMarkets[params.chainId]?.find(
      (market) => market.address.toLowerCase() === params.address.toLowerCase()
    ) ||
    null
  );
}

export function getMarkets(chainId: number) {
  const marketsByChain = markets[chainId];
  if (!marketsByChain) return [];
  return marketsByChain;
}

export function getRetiredMarkets(chainId: number) {
  return retiredMarkets[chainId] ?? [];
}
