export declare const PositionManagerAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "burnPosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_burnPositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "sharesBurned";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "donateToPosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_donatePosition";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "liquidity";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "mintPosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_mintPositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
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
    readonly name: "sweepTokens";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
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
    readonly name: "unusePosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_unusePositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "liquidity";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateWhitelistHandler";
    readonly inputs: readonly [{
        readonly name: "_handler";
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
    readonly name: "updateWhitelistHandlerWithApp";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_app";
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
    readonly name: "usePosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_usePositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "tokens";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "amounts";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "liquidityUsed";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "whitelistedHandlers";
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
    readonly name: "whitelistedHandlersWithApp";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "wildcard";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "_wildcardData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "wildcardRetData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "LogBurnPosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "sharesBurned";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogDonation";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "liquidityDonated";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogMintPosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "user";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "sharesMinted";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUnusePosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "liquidityUnused";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateWhitelistHandler";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "_status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateWhitelistHandlerWithApp";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "_app";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "_status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUsePosition";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "liquidityUsed";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogWildcard";
    readonly inputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IHandler";
    }];
    readonly anonymous: false;
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
    readonly name: "PositionManager__NotWhitelistedApp";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PositionManager__NotWhitelistedHandler";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
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
