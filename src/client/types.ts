import type { Address, Hex } from "viem";

export type TransactionKind = "approval" | "action";

export type PreparedTransaction = {
	chainId: number;
	to: Address;
	data: Hex;
	value?: bigint;
	kind: TransactionKind;
	description: string;
};

export type ApprovalRequirement = {
	token: Address;
	spender: Address;
	amount: bigint;
	description?: string;
};

export type TransactionPlan<TMetadata = Record<string, unknown>> = {
	chainId: number;
	approvals: PreparedTransaction[];
	transaction: PreparedTransaction;
	metadata: TMetadata;
	warnings: string[];
};

export type V3PositionParams = {
	pool: Address;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	liquidity: bigint;
	hookData?: Hex;
};

export type PositionAmounts = {
	amount0: bigint;
	amount1: bigint;
};

export type DepositRangeCheck = {
	minTickLower: number;
	maxTickUpper: number;
	minSqrtPriceX96: bigint;
	maxSqrtPriceX96: bigint;
	deadline: bigint;
};

export type DepositPlanMetadata = {
	pool: Address;
	handler: Address;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	liquidity: bigint;
	positionId: bigint;
	mintPositionData: Hex;
	expectedAmounts: PositionAmounts;
	rangeCheck: DepositRangeCheck;
};

export type WithdrawPlanMetadata = {
	pool: Address;
	handler: Address;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	liquidity: bigint;
	positionId: bigint;
	burnPositionData: Hex;
};

export type OptionTick = {
	handler: Address;
	pool: Address;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	liquidityToUse: bigint;
};

export type RangeCheck = {
	user: Address;
	pool: Address;
	market: Address;
	minTickLower: number;
	maxTickUpper: number;
	minSqrtPriceX96: bigint;
	maxSqrtPriceX96: bigint;
	deadline: bigint;
};

export type FirewallSignature = {
	v: number;
	r: Hex;
	s: Hex;
};

export type OptionParams = {
	optionTicks: OptionTick[];
	ttl: bigint;
	maxCostAllowance: bigint;
	tickLower: number;
	tickUpper: number;
	isCall: boolean;
};

export type SettlementParams = {
	optionId: bigint;
	swapper: Address[];
	swapData: Hex[];
	liquidityToSettle: bigint[];
};

export type SwapCall = {
	target: Address;
	calldata: Hex;
	minAmountOut: bigint;
};

export type OptionPurchasePreparation = {
	market: Address;
	tickLower: number;
	tickUpper: number;
	transaction: {
		to: Address;
		data: Hex;
	};
};

export type OptionExercisePreparation = {
	market: Address;
	tokenId: bigint;
	rangeChecks: RangeCheck[];
	signatures: FirewallSignature[];
};
