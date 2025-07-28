"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLiquidityRouterAbi = void 0;
exports.AddLiquidityRouterAbi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_positionManager",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "addLiquidity",
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
            {
                name: "_rangeCheckData",
                type: "tuple",
                internalType: "struct AddLiquidityRouter.RangeCheckData",
                components: [
                    {
                        name: "minTickLower",
                        type: "int24",
                        internalType: "int24",
                    },
                    {
                        name: "maxTickUpper",
                        type: "int24",
                        internalType: "int24",
                    },
                    {
                        name: "minSqrtPriceX96",
                        type: "uint160",
                        internalType: "uint160",
                    },
                    {
                        name: "maxSqrtPriceX96",
                        type: "uint160",
                        internalType: "uint160",
                    },
                    { name: "deadline", type: "uint256", internalType: "uint256" },
                ],
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
        name: "sweep",
        inputs: [{ name: "_token", type: "address", internalType: "address" }],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "wrap",
        inputs: [
            { name: "weth", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
        ],
        outputs: [],
        stateMutability: "payable",
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
    { type: "error", name: "InvalidDeadline", inputs: [] },
    { type: "error", name: "InvalidSqrtPriceX96", inputs: [] },
    { type: "error", name: "InvalidTick", inputs: [] },
    {
        type: "error",
        name: "SafeERC20FailedOperation",
        inputs: [{ name: "token", type: "address", internalType: "address" }],
    },
];
