"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WETH_USDC_OPTION_MARKET_ARBITRUM = void 0;
const _amms_1 = require("../amms/_amms");
const chains_1 = require("../chains");
const tokens_1 = require("../tokens");
const symbols_1 = require("../utils/symbols");
const WETH_USDC_OPTION_MARKET_ARBITRUM_ADDRESS = "0x3eFb7b9863cAaB6f7A1bC290C50602c9aaeBCB34";
const WETH_USDC_SYMBOL = "WETHUSDC";
exports.WETH_USDC_OPTION_MARKET_ARBITRUM = {
    address: WETH_USDC_OPTION_MARKET_ARBITRUM_ADDRESS,
    baseToken: tokens_1.WETH_ARBITRUM,
    quoteToken: tokens_1.USDC_ARBITRUM,
    principleSymbol: symbols_1.ETH,
    quoteSymbol: symbols_1.USD,
    chainId: chains_1.ARBITRUM_CHAIN_ID,
    inversePrice: false,
    primeAmm: _amms_1.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM,
    pairSymbol: WETH_USDC_SYMBOL,
    amms: [_amms_1.WETH_USDC_UNISWAP_V3_500_POOL_ARBITRUM],
};
