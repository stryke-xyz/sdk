export const PoolSpotPriceAbi = [
  {
    type: "function",
    name: "getSpotPrice",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "contract IUniswapV3Pool",
      },
      { name: "callAsset", type: "address", internalType: "address" },
      {
        name: "callAssetDecimals",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
] as const;
