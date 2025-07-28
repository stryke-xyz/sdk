export declare const OptionPricingAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "VOLATILITY_PRECISION";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getOptionPrice";
    readonly inputs: readonly [{
        readonly name: "_hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_isPut";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_expiry";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_ttl";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_strike";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_lastPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getOptionPriceViaAdddress";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_isPut";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_expiry";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_ttl";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_strike";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_lastPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getOptionPriceViaTTL";
    readonly inputs: readonly [{
        readonly name: "hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isPut";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "ttl";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "strike";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "lastPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getOptionPriceViaTTLViaAddress";
    readonly inputs: readonly [{
        readonly name: "optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isPut";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "ttl";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "strike";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "lastPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVolatility";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "strike";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "lastPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "volatility";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ivSetter";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "minOptionPricePercentage";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "ttlToVol";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "updateIVSetter";
    readonly inputs: readonly [{
        readonly name: "_setter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_status";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateIVs";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_ttls";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "_ttlIV";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateMinOptionPricePercentage";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_minOptionPricePercentage";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateVolatilityMultiplier";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_volatilityMultiplier";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateVolatilityOffset";
    readonly inputs: readonly [{
        readonly name: "_optionsMarket";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_volatilityOffset";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "volatilityMultiplier";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "volatilityOffset";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "ArrayLengthMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotIVSetter";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "Vol_Not_Set";
    readonly inputs: readonly [];
}];
