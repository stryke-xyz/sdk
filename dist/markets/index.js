"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markets = void 0;
const _markets_1 = require("./_markets");
exports.markets = [_markets_1.WETH_USDC_OPTION_MARKET_ARBITRUM].map((market, index) => ({
    index,
    ...market,
}));
