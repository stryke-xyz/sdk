export const PositionManagerAbi = [
  {
    type: "constructor",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "burnPosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      {
        name: "_burnPositionData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      { name: "sharesBurned", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "donateToPosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      { name: "_donatePosition", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
      { name: "liquidity", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mintPosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      {
        name: "_mintPositionData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      { name: "sharesMinted", type: "uint256", internalType: "uint256" },
    ],
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
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
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
    name: "sweepTokens",
    inputs: [
      { name: "_token", type: "address", internalType: "address" },
      { name: "_amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "unusePosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      {
        name: "_unusePositionData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
      { name: "liquidity", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateWhitelistHandler",
    inputs: [
      { name: "_handler", type: "address", internalType: "address" },
      { name: "_status", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateWhitelistHandlerWithApp",
    inputs: [
      { name: "_handler", type: "address", internalType: "address" },
      { name: "_app", type: "address", internalType: "address" },
      { name: "_status", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "usePosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      { name: "_usePositionData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "tokens", type: "address[]", internalType: "address[]" },
      { name: "amounts", type: "uint256[]", internalType: "uint256[]" },
      {
        name: "liquidityUsed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "whitelistedHandlers",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "whitelistedHandlersWithApp",
    inputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wildcard",
    inputs: [
      {
        name: "_handler",
        type: "address",
        internalType: "contract IHandler",
      },
      { name: "_wildcardData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "wildcardRetData", type: "bytes", internalType: "bytes" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "LogBurnPosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "sharesBurned",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogDonation",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
      },
      {
        name: "liquidityDonated",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogMintPosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "sharesMinted",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUnusePosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
      },
      {
        name: "liquidityUnused",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateWhitelistHandler",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUpdateWhitelistHandlerWithApp",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_app",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogUsePosition",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
      },
      {
        name: "liquidityUsed",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LogWildcard",
    inputs: [
      {
        name: "_handler",
        type: "address",
        indexed: false,
        internalType: "contract IHandler",
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
    type: "error",
    name: "AddressEmptyCode",
    inputs: [{ name: "target", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "FailedInnerCall", inputs: [] },
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
  {
    type: "error",
    name: "PositionManager__NotWhitelistedApp",
    inputs: [],
  },
  {
    type: "error",
    name: "PositionManager__NotWhitelistedHandler",
    inputs: [],
  },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [{ name: "token", type: "address", internalType: "address" }],
  },
] as const;
