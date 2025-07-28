export declare function getLiquidityForAmount0(sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, amount0: bigint): bigint;
export declare function getLiquidityForAmount1(sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, amount1: bigint): bigint;
export declare function getLiquidityForAmounts(sqrtRatioX96: bigint, sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, amount0: bigint, amount1: bigint): bigint;
export declare function getAmount0ForLiquidity(sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, liquidity: bigint): bigint;
export declare function getAmount1ForLiquidity(sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, liquidity: bigint): bigint;
export declare function getAmountsForLiquidity(sqrtRatioX96: bigint, sqrtRatioAX96: bigint, sqrtRatioBX96: bigint, liquidity: bigint): {
    amount0: bigint;
    amount1: bigint;
};
