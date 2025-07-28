"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiquidityForAmount0 = getLiquidityForAmount0;
exports.getLiquidityForAmount1 = getLiquidityForAmount1;
exports.getLiquidityForAmounts = getLiquidityForAmounts;
exports.getAmount0ForLiquidity = getAmount0ForLiquidity;
exports.getAmount1ForLiquidity = getAmount1ForLiquidity;
exports.getAmountsForLiquidity = getAmountsForLiquidity;
const Q96 = BigInt("0x1000000000000000000000000");
const RESOLUTION = BigInt(96);
function getLiquidityForAmount0(sqrtRatioAX96, sqrtRatioBX96, amount0) {
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    const mid = (sqrtRatioAX96 * sqrtRatioBX96) / Q96;
    return (amount0 * mid) / (sqrtRatioBX96 - sqrtRatioAX96);
}
function getLiquidityForAmount1(sqrtRatioAX96, sqrtRatioBX96, amount1) {
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    return (amount1 * Q96) / (sqrtRatioBX96 - sqrtRatioAX96);
}
function getLiquidityForAmounts(sqrtRatioX96, sqrtRatioAX96, sqrtRatioBX96, amount0, amount1) {
    let liquidity = BigInt(0);
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    if (sqrtRatioX96 <= sqrtRatioAX96) {
        liquidity = getLiquidityForAmount0(sqrtRatioAX96, sqrtRatioBX96, amount0);
    }
    else if (sqrtRatioX96 < sqrtRatioBX96) {
        const liquidity0 = getLiquidityForAmount0(sqrtRatioX96, sqrtRatioBX96, amount0);
        const liquidity1 = getLiquidityForAmount1(sqrtRatioAX96, sqrtRatioX96, amount1);
        liquidity = liquidity0 < liquidity1 ? liquidity0 : liquidity1;
    }
    else {
        liquidity = getLiquidityForAmount1(sqrtRatioAX96, sqrtRatioBX96, amount1);
    }
    return liquidity;
}
function getAmount0ForLiquidity(sqrtRatioAX96, sqrtRatioBX96, liquidity) {
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    return (((liquidity << RESOLUTION) * (sqrtRatioBX96 - sqrtRatioAX96)) /
        sqrtRatioBX96 /
        sqrtRatioAX96);
}
function getAmount1ForLiquidity(sqrtRatioAX96, sqrtRatioBX96, liquidity) {
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    return (liquidity * (sqrtRatioBX96 - sqrtRatioAX96)) / Q96;
}
function getAmountsForLiquidity(sqrtRatioX96, sqrtRatioAX96, sqrtRatioBX96, liquidity) {
    if (sqrtRatioAX96 > sqrtRatioBX96) {
        const temp = sqrtRatioBX96;
        sqrtRatioBX96 = sqrtRatioAX96;
        sqrtRatioAX96 = temp;
    }
    let amount0 = BigInt(0);
    let amount1 = BigInt(0);
    if (sqrtRatioX96 <= sqrtRatioAX96) {
        amount0 = getAmount0ForLiquidity(sqrtRatioAX96, sqrtRatioBX96, liquidity);
    }
    else if (sqrtRatioX96 < sqrtRatioBX96) {
        amount0 = getAmount0ForLiquidity(sqrtRatioX96, sqrtRatioBX96, liquidity);
        amount1 = getAmount1ForLiquidity(sqrtRatioAX96, sqrtRatioX96, liquidity);
    }
    else {
        amount1 = getAmount1ForLiquidity(sqrtRatioAX96, sqrtRatioBX96, liquidity);
    }
    return {
        amount0,
        amount1,
    };
}
