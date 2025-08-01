export const OptionMarketOTMFEAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_owner", type: "address", internalType: "address" },
      { name: "_pm", type: "address", internalType: "address" },
      {
        name: "_optionPricing",
        type: "address",
        internalType: "address",
      },
      { name: "_dpFee", type: "address", internalType: "address" },
      { name: "_callAsset", type: "address", internalType: "address" },
      { name: "_putAsset", type: "address", internalType: "address" },
      { name: "_primePool", type: "address", internalType: "address" },
      {
        name: "_verifiedSpotPrice",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "account", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "approvedHooks",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approvedMinters",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approvedPools",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approvedSwapper",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approvedTTLs",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "result", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callAsset",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callAssetDecimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dpFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IClammFeeStrategyV2",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "emergencyWithdraw",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "feeTo",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "result", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getFee",
    inputs: [
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "premium", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPremiumAmount",
    inputs: [
      { name: "hook", type: "address", internalType: "address" },
      { name: "isPut", type: "bool", internalType: "bool" },
      { name: "expiry", type: "uint256", internalType: "uint256" },
      { name: "ttl", type: "uint256", internalType: "uint256" },
      { name: "strike", type: "uint256", internalType: "uint256" },
      { name: "lastPrice", type: "uint256", internalType: "uint256" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPricePerCallAssetViaTick",
    inputs: [
      {
        name: "_pool",
        type: "address",
        internalType: "contract IUniswapV3Pool",
      },
      { name: "_tick", type: "int24", internalType: "int24" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "result", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maxTickDiff",
    inputs: [],
    outputs: [{ name: "", type: "uint24", internalType: "uint24" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintOption",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct OptionMarketOTMFE.OptionParams",
        components: [
          {
            name: "optionTicks",
            type: "tuple[]",
            internalType: "struct OptionMarketOTMFE.OptionTicks[]",
            components: [
              {
                name: "_handler",
                type: "address",
                internalType: "contract IHandler",
              },
              {
                name: "pool",
                type: "address",
                internalType: "contract IUniswapV3Pool",
              },
              {
                name: "hook",
                type: "address",
                internalType: "address",
              },
              {
                name: "tickLower",
                type: "int24",
                internalType: "int24",
              },
              {
                name: "tickUpper",
                type: "int24",
                internalType: "int24",
              },
              {
                name: "liquidityToUse",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          { name: "ttl", type: "uint256", internalType: "uint256" },
          {
            name: "maxCostAllowance",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "tickLower", type: "int24", internalType: "int24" },
          { name: "tickUpper", type: "int24", internalType: "int24" },
          { name: "isCall", type: "bool", internalType: "bool" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
    outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "opData",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "opTickArrayLen",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "expiry", type: "uint256", internalType: "uint256" },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      { name: "isCall", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "opTickMap",
    inputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      {
        name: "pool",
        type: "address",
        internalType: "contract IUniswapV3Pool",
      },
      { name: "hook", type: "address", internalType: "address" },
      { name: "tickLower", type: "int24", internalType: "int24" },
      { name: "tickUpper", type: "int24", internalType: "int24" },
      {
        name: "liquidityToUse",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "optionIds",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "optionPricing",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IOptionPricingV2",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "result", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "positionManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPositionManager",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "positionSplitter",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct OptionMarketOTMFE.PositionSplitterParams",
        components: [
          {
            name: "optionId",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "to", type: "address", internalType: "address" },
          {
            name: "liquidityToSplit",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "primePool",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IUniswapV3Pool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "putAsset",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "putAssetDecimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "isApproved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovedMinter",
    inputs: [
      { name: "minter", type: "address", internalType: "address" },
      { name: "statusMinter", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovedSwapperAndHook",
    inputs: [
      { name: "swapper", type: "address", internalType: "address" },
      { name: "statusSwapper", type: "bool", internalType: "bool" },
      { name: "hook", type: "address", internalType: "address" },
      { name: "statusHook", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "settleOption",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct OptionMarketOTMFE.SettleOptionParams",
        components: [
          {
            name: "optionId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "swapper",
            type: "address[]",
            internalType: "contract ISwapper[]",
          },
          {
            name: "swapData",
            type: "bytes[]",
            internalType: "bytes[]",
          },
          {
            name: "liquidityToSettle",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "ac",
        type: "tuple",
        internalType: "struct OptionMarketOTMFE.AssetsCache",
        components: [
          {
            name: "totalProfit",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalAssetRelocked",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "assetToUse",
            type: "address",
            internalType: "contract ERC20",
          },
          {
            name: "assetToGet",
            type: "address",
            internalType: "contract ERC20",
          },
          { name: "isSettle", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "settlers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "result", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURIFetcher",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "id", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ttlStartTime",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updatePoolApporvals",
    inputs: [
      { name: "_settler", type: "address", internalType: "address" },
      { name: "_statusSettler", type: "bool", internalType: "bool" },
      { name: "_pool", type: "address", internalType: "address" },
      { name: "_statusPools", type: "bool", internalType: "bool" },
      { name: "_ttl", type: "uint256", internalType: "uint256" },
      {
        name: "_ttlStartTime",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "ttlStatus", type: "bool", internalType: "bool" },
      { name: "_BUFFER_TIME", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePoolSettings",
    inputs: [
      { name: "_feeTo", type: "address", internalType: "address" },
      {
        name: "_tokenURIFetcher",
        type: "address",
        internalType: "address",
      },
      { name: "_dpFee", type: "address", internalType: "address" },
      {
        name: "_optionPricing",
        type: "address",
        internalType: "address",
      },
      {
        name: "_verifiedSpotPrice",
        type: "address",
        internalType: "address",
      },
      { name: "_maxTickDiff", type: "uint24", internalType: "uint24" },
      { name: "_maxUpperTick", type: "int24", internalType: "int24" },
      { name: "_minLowerTick", type: "int24", internalType: "int24" },
      {
        name: "_minLiquidityToUse",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifiedSpotPrice",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IVerifiedSpotPrice",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "isApproved",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogMintOption",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        indexed: false,
        internalType: "struct OptionMarketOTMFE.OptionParams",
        components: [
          {
            name: "optionTicks",
            type: "tuple[]",
            internalType: "struct OptionMarketOTMFE.OptionTicks[]",
            components: [
              {
                name: "_handler",
                type: "address",
                internalType: "contract IHandler",
              },
              {
                name: "pool",
                type: "address",
                internalType: "contract IUniswapV3Pool",
              },
              {
                name: "hook",
                type: "address",
                internalType: "address",
              },
              {
                name: "tickLower",
                type: "int24",
                internalType: "int24",
              },
              {
                name: "tickUpper",
                type: "int24",
                internalType: "int24",
              },
              {
                name: "liquidityToUse",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          { name: "ttl", type: "uint256", internalType: "uint256" },
          {
            name: "maxCostAllowance",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "tickLower", type: "int24", internalType: "int24" },
          { name: "tickUpper", type: "int24", internalType: "int24" },
          { name: "isCall", type: "bool", internalType: "bool" },
        ],
      },
      {
        name: "optionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "premiumAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "size",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "protocolFees",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogOptionsMarketInitialized",
    inputs: [
      {
        name: "primePool",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "optionPricing",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "dpFee",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "callAsset",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "putAsset",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogSettleOption",
    inputs: [
      {
        name: "assetsCache",
        type: "tuple",
        indexed: false,
        internalType: "struct OptionMarketOTMFE.AssetsCache",
        components: [
          {
            name: "totalProfit",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalAssetRelocked",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "assetToUse",
            type: "address",
            internalType: "contract ERC20",
          },
          {
            name: "assetToGet",
            type: "address",
            internalType: "contract ERC20",
          },
          { name: "isSettle", type: "bool", internalType: "bool" },
        ],
      },
      {
        name: "liquiditySettled",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        name: "owner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "optionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogSplitOption",
    inputs: [
      {
        name: "params",
        type: "tuple",
        indexed: false,
        internalType: "struct OptionMarketOTMFE.PositionSplitterParams",
        components: [
          {
            name: "optionId",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "to", type: "address", internalType: "address" },
          {
            name: "liquidityToSplit",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      {
        name: "newOptionId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "oldOwner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateApprovedHook",
    inputs: [
      {
        name: "hook",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateApprovedMinter",
    inputs: [
      {
        name: "minter",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateApprovedSwapper",
    inputs: [
      {
        name: "swapper",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateExerciseDelegate",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "delegate",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdatePoolApprovals",
    inputs: [
      {
        name: "settler",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "statusSettler",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "pool",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "statusPools",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "ttl",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "ttlStartTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "ttlStatus",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "bufferTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdatePoolSettings",
    inputs: [
      {
        name: "feeTo",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "tokenURIFetcher",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "dpFee",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "optionPricing",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "AccountBalanceOverflow", inputs: [] },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [{ name: "target", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "ArrayLenMismatch", inputs: [] },
  { type: "error", name: "BalanceQueryForZeroAddress", inputs: [] },
  { type: "error", name: "Expired", inputs: [] },
  { type: "error", name: "FailedInnerCall", inputs: [] },
  { type: "error", name: "IVNotSet", inputs: [] },
  { type: "error", name: "InBUFFER_TIME", inputs: [] },
  { type: "error", name: "InvalidPool", inputs: [] },
  { type: "error", name: "MaxCostAllowanceExceeded", inputs: [] },
  { type: "error", name: "MaxOptionBuyReached", inputs: [] },
  { type: "error", name: "MinLiquidityToUse", inputs: [] },
  { type: "error", name: "NotApprovedHook", inputs: [] },
  { type: "error", name: "NotApprovedMinter", inputs: [] },
  { type: "error", name: "NotApprovedSettler", inputs: [] },
  { type: "error", name: "NotApprovedSwapper", inputs: [] },
  { type: "error", name: "NotApprovedTTL", inputs: [] },
  { type: "error", name: "NotEnoughAfterSwap", inputs: [] },
  { type: "error", name: "NotOwnerNorApproved", inputs: [] },
  { type: "error", name: "NotOwnerOrDelegator", inputs: [] },
  { type: "error", name: "NotValidStrikeTick", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "PoolNotApproved", inputs: [] },
  { type: "error", name: "R", inputs: [] },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
  { type: "error", name: "T", inputs: [] },
  { type: "error", name: "TTLNotSet", inputs: [] },
  { type: "error", name: "TokenAlreadyExists", inputs: [] },
  { type: "error", name: "TokenDoesNotExist", inputs: [] },
  { type: "error", name: "TransferFromIncorrectOwner", inputs: [] },
  {
    type: "error",
    name: "TransferToNonERC721ReceiverImplementer",
    inputs: [],
  },
  { type: "error", name: "TransferToZeroAddress", inputs: [] },
] as const;
