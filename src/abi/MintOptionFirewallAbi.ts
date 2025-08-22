export const MintOptionFirewallAbi = [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_owner", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        { "name": "fields", "type": "bytes1", "internalType": "bytes1" },
        { "name": "name", "type": "string", "internalType": "string" },
        { "name": "version", "type": "string", "internalType": "string" },
        { "name": "chainId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "verifyingContract",
          "type": "address",
          "internalType": "address"
        },
        { "name": "salt", "type": "bytes32", "internalType": "bytes32" },
        {
          "name": "extensions",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getDomainSeparator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRangeCheckTypehash",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "hashTypedDataV4",
      "inputs": [
        { "name": "structHash", "type": "bytes32", "internalType": "bytes32" }
      ],
      "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mintOption",
      "inputs": [
        {
          "name": "optionData",
          "type": "tuple",
          "internalType": "struct MintOptionFirewall.OptionData",
          "components": [
            {
              "name": "market",
              "type": "address",
              "internalType": "contract IOptionMarketOTMFE"
            },
            {
              "name": "optionParams",
              "type": "tuple",
              "internalType": "struct IOptionMarketOTMFE.OptionParams",
              "components": [
                {
                  "name": "optionTicks",
                  "type": "tuple[]",
                  "internalType": "struct IOptionMarketOTMFE.OptionTicks[]",
                  "components": [
                    {
                      "name": "_handler",
                      "type": "address",
                      "internalType": "contract IHandler"
                    },
                    {
                      "name": "pool",
                      "type": "address",
                      "internalType": "contract IUniswapV3Pool"
                    },
                    {
                      "name": "hook",
                      "type": "address",
                      "internalType": "address"
                    },
                    {
                      "name": "tickLower",
                      "type": "int24",
                      "internalType": "int24"
                    },
                    {
                      "name": "tickUpper",
                      "type": "int24",
                      "internalType": "int24"
                    },
                    {
                      "name": "liquidityToUse",
                      "type": "uint256",
                      "internalType": "uint256"
                    }
                  ]
                },
                { "name": "ttl", "type": "uint256", "internalType": "uint256" },
                {
                  "name": "maxCostAllowance",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "tickLower",
                  "type": "int24",
                  "internalType": "int24"
                },
                {
                  "name": "tickUpper",
                  "type": "int24",
                  "internalType": "int24"
                },
                { "name": "isCall", "type": "bool", "internalType": "bool" }
              ]
            },
            {
              "name": "optionRecipient",
              "type": "address",
              "internalType": "address"
            },
            { "name": "self", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "rangeCheckData",
          "type": "tuple[]",
          "internalType": "struct MintOptionFirewall.RangeCheckData[]",
          "components": [
            { "name": "user", "type": "address", "internalType": "address" },
            { "name": "pool", "type": "address", "internalType": "address" },
            { "name": "market", "type": "address", "internalType": "address" },
            {
              "name": "minTickLower",
              "type": "int24",
              "internalType": "int24"
            },
            {
              "name": "maxTickUpper",
              "type": "int24",
              "internalType": "int24"
            },
            {
              "name": "minSqrtPriceX96",
              "type": "uint160",
              "internalType": "uint160"
            },
            {
              "name": "maxSqrtPriceX96",
              "type": "uint160",
              "internalType": "uint160"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" }
          ]
        },
        {
          "name": "signature",
          "type": "tuple[]",
          "internalType": "struct MintOptionFirewall.Signature[]",
          "components": [
            { "name": "v", "type": "uint8", "internalType": "uint8" },
            { "name": "r", "type": "bytes32", "internalType": "bytes32" },
            { "name": "s", "type": "bytes32", "internalType": "bytes32" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        { "name": "data", "type": "bytes[]", "internalType": "bytes[]" }
      ],
      "outputs": [
        { "name": "results", "type": "bytes[]", "internalType": "bytes[]" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onERC721Received",
      "inputs": [
        { "name": "", "type": "address", "internalType": "address" },
        { "name": "", "type": "address", "internalType": "address" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [{ "name": "", "type": "bytes4", "internalType": "bytes4" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swap",
      "inputs": [
        { "name": "swapper", "type": "address[]", "internalType": "address[]" },
        {
          "name": "tokensIn",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "tokensOut",
          "type": "address[]",
          "internalType": "address[]"
        },
        { "name": "amounts", "type": "uint256[]", "internalType": "uint256[]" },
        { "name": "swapData", "type": "bytes[]", "internalType": "bytes[]" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "sweep",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        { "name": "newOwner", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateWhitelistedSigner",
      "inputs": [
        { "name": "_signer", "type": "address", "internalType": "address" },
        { "name": "_isWhitelisted", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "whitelistedSigners",
      "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "wrap",
      "inputs": [
        { "name": "weth", "type": "address", "internalType": "address" },
        { "name": "amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MintOption",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "market",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "optionId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AddressEmptyCode",
      "inputs": [
        { "name": "target", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "AddressInsufficientBalance",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ]
    },
    { "type": "error", "name": "ECDSAInvalidSignature", "inputs": [] },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureLength",
      "inputs": [
        { "name": "length", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureS",
      "inputs": [{ "name": "s", "type": "bytes32", "internalType": "bytes32" }]
    },
    { "type": "error", "name": "FailedInnerCall", "inputs": [] },
    { "type": "error", "name": "InvalidDeadline", "inputs": [] },
    { "type": "error", "name": "InvalidOptionParams", "inputs": [] },
    { "type": "error", "name": "InvalidShortString", "inputs": [] },
    { "type": "error", "name": "InvalidSignature", "inputs": [] },
    { "type": "error", "name": "InvalidSignatureLen", "inputs": [] },
    { "type": "error", "name": "InvalidSqrtPriceX96", "inputs": [] },
    { "type": "error", "name": "InvalidTick", "inputs": [] },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "StringTooLong",
      "inputs": [{ "name": "str", "type": "string", "internalType": "string" }]
    }
  ] as const;