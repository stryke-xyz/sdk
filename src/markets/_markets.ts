import { WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM } from "../amms/_amms";
import { ARBITRUM_CHAIN_ID } from "../chains";
import { USDC_ARBITRUM, WETH_ARBITRUM } from "../tokens";
import { Market } from "../types/types";
import { ETH, USD } from "../utils/symbols";

const WETH_USDC_OPTION_MARKET_ARBITRUM_ADDRESS =
  "0x3eFb7b9863cAaB6f7A1bC290C50602c9aaeBCB34";

const WETH_USDC_SYMBOL = "WETHUSDC";

export const WETH_USDC_OPTION_MARKET_ARBITRUM: Market = {
  address: WETH_USDC_OPTION_MARKET_ARBITRUM_ADDRESS,
  baseToken: WETH_ARBITRUM,
  quoteToken: USDC_ARBITRUM,
  principleSymbol: ETH,
  quoteSymbol: USD,
  chainId: ARBITRUM_CHAIN_ID,
  inversePrice: false,
  primeAmm: WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM,
  pairSymbol: WETH_USDC_SYMBOL,
  amms: [WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM],
};
