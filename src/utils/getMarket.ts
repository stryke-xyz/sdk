import { markets } from "../markets";

type Params = {
  address: string;
  chainId: number;
};
export function getMarket(params: Params) {
  return markets.find((market) => {
    return (
      market.address.toLowerCase() === params.address.toLowerCase() &&
      market.chainId === params.chainId
    );
  });
}
