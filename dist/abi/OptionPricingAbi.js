"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionPricingAbi = void 0;
exports.OptionPricingAbi = [
    {
        "type": "constructor",
        "inputs": [
            { "name": "_owner", "type": "address", "internalType": "address" }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "VOLATILITY_PRECISION",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOptionPrice",
        "inputs": [
            { "name": "_hook", "type": "address", "internalType": "address" },
            { "name": "_isPut", "type": "bool", "internalType": "bool" },
            { "name": "_expiry", "type": "uint256", "internalType": "uint256" },
            { "name": "_ttl", "type": "uint256", "internalType": "uint256" },
            { "name": "_strike", "type": "uint256", "internalType": "uint256" },
            { "name": "_lastPrice", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOptionPriceViaAdddress",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            { "name": "_hook", "type": "address", "internalType": "address" },
            { "name": "_isPut", "type": "bool", "internalType": "bool" },
            { "name": "_expiry", "type": "uint256", "internalType": "uint256" },
            { "name": "_ttl", "type": "uint256", "internalType": "uint256" },
            { "name": "_strike", "type": "uint256", "internalType": "uint256" },
            { "name": "_lastPrice", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOptionPriceViaTTL",
        "inputs": [
            { "name": "hook", "type": "address", "internalType": "address" },
            { "name": "isPut", "type": "bool", "internalType": "bool" },
            { "name": "ttl", "type": "uint256", "internalType": "uint256" },
            { "name": "strike", "type": "uint256", "internalType": "uint256" },
            { "name": "lastPrice", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOptionPriceViaTTLViaAddress",
        "inputs": [
            {
                "name": "optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            { "name": "hook", "type": "address", "internalType": "address" },
            { "name": "isPut", "type": "bool", "internalType": "bool" },
            { "name": "ttl", "type": "uint256", "internalType": "uint256" },
            { "name": "strike", "type": "uint256", "internalType": "uint256" },
            { "name": "lastPrice", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getVolatility",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            { "name": "strike", "type": "uint256", "internalType": "uint256" },
            { "name": "lastPrice", "type": "uint256", "internalType": "uint256" },
            { "name": "volatility", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ivSetter",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "minOptionPricePercentage",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
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
        "name": "transferOwnership",
        "inputs": [
            { "name": "newOwner", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "ttlToVol",
        "inputs": [
            { "name": "", "type": "address", "internalType": "address" },
            { "name": "", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "updateIVSetter",
        "inputs": [
            { "name": "_setter", "type": "address", "internalType": "address" },
            { "name": "_status", "type": "bool", "internalType": "bool" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateIVs",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            { "name": "_ttls", "type": "uint256[]", "internalType": "uint256[]" },
            { "name": "_ttlIV", "type": "uint256[]", "internalType": "uint256[]" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateMinOptionPricePercentage",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_minOptionPricePercentage",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateVolatilityMultiplier",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_volatilityMultiplier",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateVolatilityOffset",
        "inputs": [
            {
                "name": "_optionsMarket",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_volatilityOffset",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "volatilityMultiplier",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "volatilityOffset",
        "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
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
    { "type": "error", "name": "ArrayLengthMismatch", "inputs": [] },
    { "type": "error", "name": "NotIVSetter", "inputs": [] },
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
    { "type": "error", "name": "Vol_Not_Set", "inputs": [] }
];
