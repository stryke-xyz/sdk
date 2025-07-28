export const Slot0Abi = [
  {
    type: "function",
    name: "slot0",
    inputs: [],
    outputs: [
      {
        name: "sqrtPriceX96",
        type: "uint160",
        internalType: "uint160",
      },
      { name: "tick", type: "int24", internalType: "int24" },
    ],
    stateMutability: "view",
  },
] as const;
