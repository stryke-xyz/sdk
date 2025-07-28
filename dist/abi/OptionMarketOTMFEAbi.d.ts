export declare const OptionMarketOTMFEAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_pm";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_optionPricing";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_dpFee";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_callAsset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_putAsset";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_primePool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_verifiedSpotPrice";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "approvedHooks";
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
    readonly name: "approvedMinters";
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
    readonly name: "approvedPools";
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
    readonly name: "approvedSwapper";
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
    readonly name: "approvedTTLs";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "callAsset";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "callAssetDecimals";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "dpFee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IClammFeeStrategyV2";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "emergencyWithdraw";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "feeTo";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getApproved";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getFee";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "premium";
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
    readonly name: "getPremiumAmount";
    readonly inputs: readonly [{
        readonly name: "hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isPut";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "expiry";
        readonly type: "uint256";
        readonly internalType: "uint256";
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
    }, {
        readonly name: "amount";
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
    readonly name: "getPricePerCallAssetViaTick";
    readonly inputs: readonly [{
        readonly name: "_pool";
        readonly type: "address";
        readonly internalType: "contract IUniswapV3Pool";
    }, {
        readonly name: "_tick";
        readonly type: "int24";
        readonly internalType: "int24";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "maxTickDiff";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "mintOption";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly type: "tuple";
        readonly internalType: "struct OptionMarketOTMFE.OptionParams";
        readonly components: readonly [{
            readonly name: "optionTicks";
            readonly type: "tuple[]";
            readonly internalType: "struct OptionMarketOTMFE.OptionTicks[]";
            readonly components: readonly [{
                readonly name: "_handler";
                readonly type: "address";
                readonly internalType: "contract IHandler";
            }, {
                readonly name: "pool";
                readonly type: "address";
                readonly internalType: "contract IUniswapV3Pool";
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
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "ttl";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxCostAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "isCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }];
    readonly outputs: readonly [];
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
    readonly name: "name";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "opData";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "opTickArrayLen";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "expiry";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "tickLower";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "tickUpper";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "isCall";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "opTickMap";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "_handler";
        readonly type: "address";
        readonly internalType: "contract IHandler";
    }, {
        readonly name: "pool";
        readonly type: "address";
        readonly internalType: "contract IUniswapV3Pool";
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
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "optionIds";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "optionPricing";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IOptionPricingV2";
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
    readonly name: "ownerOf";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
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
    readonly name: "positionSplitter";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly type: "tuple";
        readonly internalType: "struct OptionMarketOTMFE.PositionSplitterParams";
        readonly components: readonly [{
            readonly name: "optionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidityToSplit";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "primePool";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IUniswapV3Pool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "putAsset";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "putAssetDecimals";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "uint8";
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
    readonly name: "safeTransferFrom";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "setApprovalForAll";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "isApproved";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setApprovedMinter";
    readonly inputs: readonly [{
        readonly name: "minter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "statusMinter";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setApprovedSwapperAndHook";
    readonly inputs: readonly [{
        readonly name: "swapper";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "statusSwapper";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "hook";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "statusHook";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "settleOption";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly type: "tuple";
        readonly internalType: "struct OptionMarketOTMFE.SettleOptionParams";
        readonly components: readonly [{
            readonly name: "optionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "swapper";
            readonly type: "address[]";
            readonly internalType: "contract ISwapper[]";
        }, {
            readonly name: "swapData";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "liquidityToSettle";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "ac";
        readonly type: "tuple";
        readonly internalType: "struct OptionMarketOTMFE.AssetsCache";
        readonly components: readonly [{
            readonly name: "totalProfit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalAssetRelocked";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "assetToUse";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "assetToGet";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "isSettle";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "settlers";
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
    readonly name: "supportsInterface";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokenURI";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "tokenURIFetcher";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
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
    readonly name: "ttlStartTime";
    readonly inputs: readonly [{
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
    readonly name: "updatePoolApporvals";
    readonly inputs: readonly [{
        readonly name: "_settler";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_statusSettler";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_pool";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_statusPools";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_ttl";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_ttlStartTime";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "ttlStatus";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "_BUFFER_TIME";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "updatePoolSettings";
    readonly inputs: readonly [{
        readonly name: "_feeTo";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_tokenURIFetcher";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_dpFee";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_optionPricing";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_verifiedSpotPrice";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_maxTickDiff";
        readonly type: "uint24";
        readonly internalType: "uint24";
    }, {
        readonly name: "_maxUpperTick";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "_minLowerTick";
        readonly type: "int24";
        readonly internalType: "int24";
    }, {
        readonly name: "_minLiquidityToUse";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "verifiedSpotPrice";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IVerifiedSpotPrice";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "Approval";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ApprovalForAll";
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
        readonly name: "isApproved";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogMintOption";
    readonly inputs: readonly [{
        readonly name: "_params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct OptionMarketOTMFE.OptionParams";
        readonly components: readonly [{
            readonly name: "optionTicks";
            readonly type: "tuple[]";
            readonly internalType: "struct OptionMarketOTMFE.OptionTicks[]";
            readonly components: readonly [{
                readonly name: "_handler";
                readonly type: "address";
                readonly internalType: "contract IHandler";
            }, {
                readonly name: "pool";
                readonly type: "address";
                readonly internalType: "contract IUniswapV3Pool";
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
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "ttl";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxCostAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "isCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }, {
        readonly name: "optionId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "premiumAmount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "size";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "protocolFees";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogOptionsMarketInitialized";
    readonly inputs: readonly [{
        readonly name: "primePool";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "optionPricing";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "dpFee";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "callAsset";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "putAsset";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogSettleOption";
    readonly inputs: readonly [{
        readonly name: "assetsCache";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct OptionMarketOTMFE.AssetsCache";
        readonly components: readonly [{
            readonly name: "totalProfit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalAssetRelocked";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "assetToUse";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "assetToGet";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "isSettle";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
    }, {
        readonly name: "liquiditySettled";
        readonly type: "uint256[]";
        readonly indexed: false;
        readonly internalType: "uint256[]";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "optionId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogSplitOption";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct OptionMarketOTMFE.PositionSplitterParams";
        readonly components: readonly [{
            readonly name: "optionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidityToSplit";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
    }, {
        readonly name: "newOptionId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "oldOwner";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateApprovedHook";
    readonly inputs: readonly [{
        readonly name: "hook";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateApprovedMinter";
    readonly inputs: readonly [{
        readonly name: "minter";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateApprovedSwapper";
    readonly inputs: readonly [{
        readonly name: "swapper";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdateExerciseDelegate";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "delegate";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "status";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdatePoolApprovals";
    readonly inputs: readonly [{
        readonly name: "settler";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "statusSettler";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "pool";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "statusPools";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "ttl";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "ttlStartTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "ttlStatus";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "bufferTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LogUpdatePoolSettings";
    readonly inputs: readonly [{
        readonly name: "feeTo";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "tokenURIFetcher";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "dpFee";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "optionPricing";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
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
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AccountBalanceOverflow";
    readonly inputs: readonly [];
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
    readonly name: "ArrayLenMismatch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BalanceQueryForZeroAddress";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Expired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FailedInnerCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "IVNotSet";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InBUFFER_TIME";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidPool";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaxCostAllowanceExceeded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MaxOptionBuyReached";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MinLiquidityToUse";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedHook";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedMinter";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedSettler";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedSwapper";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotApprovedTTL";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotEnoughAfterSwap";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotOwnerNorApproved";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotOwnerOrDelegator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotValidStrikeTick";
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
    readonly name: "PoolNotApproved";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "R";
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
}, {
    readonly type: "error";
    readonly name: "T";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TTLNotSet";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TokenAlreadyExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TokenDoesNotExist";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TransferFromIncorrectOwner";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TransferToNonERC721ReceiverImplementer";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TransferToZeroAddress";
    readonly inputs: readonly [];
}];
