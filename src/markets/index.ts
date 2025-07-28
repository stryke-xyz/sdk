import { WETH_USDC_OPTION_MARKET_ARBITRUM } from "./_markets";

export const markets = [WETH_USDC_OPTION_MARKET_ARBITRUM].map(
    (market, index) => ({
        index,
        ...market,
    })
);
