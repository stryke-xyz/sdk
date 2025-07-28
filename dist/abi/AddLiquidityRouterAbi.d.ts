export declare const AddLiquidityRouterAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_positionManager";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addLiquidity";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_mintPositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_rangeCheckData";
        readonly type: "tuple";
        readonly internalType: "struct AddLiquidityRouter.RangeCheckData";
        readonly components: readonly [{
            readonly name: "minTickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "maxTickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "minSqrtPriceX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "maxSqrtPriceX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "sharesMinted";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "multicall";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "results";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "positionManager";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPositionManager";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "sweep";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "wrap";
    readonly inputs: readonly [{
        readonly name: "weth";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "error";
    readonly name: "AddressEmptyCode";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "AddressInsufficientBalance";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "FailedInnerCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidDeadline";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidSqrtPriceX96";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidTick";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SafeERC20FailedOperation";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
}];
