export declare const V3BaseHandlerAbi: readonly [{
    readonly type: "function";
    readonly name: "allowance";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
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
    readonly name: "approve";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
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
    readonly name: "balanceOf";
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
    readonly name: "burnPositionHandler";
    readonly inputs: readonly [{
        readonly name: "context";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_burnPositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "donateToPosition";
    readonly inputs: readonly [{
        readonly name: "_donateData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "emergencyPause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "emergencyUnpause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "feeReceiver";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getHandlerIdentifier";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "handlerIdentifierId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hookPerms";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "onMint";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "onBurn";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "onUse";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "onUnuse";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "onDonate";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "allowSplit";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hookRegistered";
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
    readonly name: "isOperator";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
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
    readonly name: "mintPositionHandler";
    readonly inputs: readonly [{
        readonly name: "context";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_mintPositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
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
    readonly name: "registerHook";
    readonly inputs: readonly [{
        readonly name: "_hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_info";
        readonly type: "tuple";
        readonly internalType: "struct IHandler.HookPermInfo";
        readonly components: readonly [{
            readonly name: "onMint";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "onBurn";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "onUse";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "onUnuse";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "onDonate";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "allowSplit";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "reserveCooldownHook";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "reservedLiquidityPerUser";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "liquidity";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "lastReserve";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setOperator";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "supportsInterface";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "tokenIds";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "totalLiquidity";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "liquidityUsed";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "feeGrowthInside0LastX128";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "feeGrowthInside1LastX128";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "tokensOwed0";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "tokensOwed1";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "token0";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "token1";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "fee";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }, {
        readonly name: "reservedLiquidity";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokensToPullForDonate";
    readonly inputs: readonly [{
        readonly name: "_donatePosition";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokensToPullForMint";
    readonly inputs: readonly [{
        readonly name: "_mintPositionData";
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
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokensToPullForUnUse";
    readonly inputs: readonly [{
        readonly name: "_unusePositionData";
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
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokensToPullForWildcard";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
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
    readonly name: "transferFrom";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "receiver";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
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
    readonly name: "unusePositionHandler";
    readonly inputs: readonly [{
        readonly name: "_unusePositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updateHandlerSettings";
    readonly inputs: readonly [{
        readonly name: "_app";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_status";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_newReserveCooldown";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "_newFeeReceiver";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "usePositionHandler";
    readonly inputs: readonly [{
        readonly name: "_usePositionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "whitelistedApps";
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
    readonly name: "wildcardHandler";
    readonly inputs: readonly [{
        readonly name: "context";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_wildcardData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogBurnPositionHandler";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.BurnPositionParams";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogCollectedFees";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "contract IV3Pool";
    }, {
        readonly name: "hook";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "tickLower";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly indexed: false;
        readonly internalType: "int24";
    }, {
        readonly name: "tokensOwed0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "tokensOwed1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogDonateToPosition";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.DonateParams";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "amount0";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "amount1";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogMintPositionHandler";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.MintPositionParams";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogReservedLiquidity";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.ReserveOperation";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "isReserve";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "lastReserve";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUnusePositionHandler";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.UnusePositionParams";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidityToUnuse";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUsePositionHandler";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.UsePositionParams";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidityToUse";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogWithdrawReserveLiquidity";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct V3BaseHandler.ReserveOperation";
        readonly components: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IV3Pool";
        }, {
            readonly name: "hook";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "isReserve";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }, {
        readonly name: "context";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount0";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OperatorSet";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
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
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly name: "caller";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
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
    readonly name: "BeforeReserveCooldown";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FailedInnerCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HookAlreadyRegistered";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HookNotRegistered";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InsufficientLiquidity";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidTicks";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotWhitelisted";
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
    readonly name: "Paused";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SafeERC20FailedOperation";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "T";
    readonly inputs: readonly [];
}];
