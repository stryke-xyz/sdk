"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarket = getMarket;
const markets_1 = require("../markets");
function getMarket(params) {
    return markets_1.markets.find((market) => {
        return (market.address.toLowerCase() === params.address.toLowerCase() &&
            market.chainId === params.chainId);
    });
}
