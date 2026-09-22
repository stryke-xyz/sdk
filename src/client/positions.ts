import {
	encodeAbiParameters,
	encodeFunctionData,
	keccak256,
	type Address,
	type Hex,
} from "viem";
import { AddLiquidityRouterAbi, PositionManagerAbi } from "../abi";
import type { AMM } from "../types/types";
import {
	getAmountsForLiquidity,
	getLiquidityForAmounts,
} from "../utils/liquidity-amount-math";
import { getSqrtRatioAtTick } from "../utils/tick-math";
import {
	assertNonNegative,
	assertTick,
	assertTickAligned,
	assertTickRange,
	assertUint128,
	MAX_TICK,
	MIN_TICK,
	normalizeAddress,
} from "./validation";
import { buildApprovalTransactions, buildPreparedAction } from "./transactions";
import type {
	DepositPlanMetadata,
	DepositRangeCheck,
	PositionAmounts,
	PreparedTransaction,
	TransactionPlan,
	V3PositionParams,
	WithdrawPlanMetadata,
} from "./types";

const MINT_POSITION_TYPES = [
	{
		name: "params",
		type: "tuple",
		components: [
			{ name: "pool", type: "address" },
			{ name: "hook", type: "address" },
			{ name: "tickLower", type: "int24" },
			{ name: "tickUpper", type: "int24" },
			{ name: "liquidity", type: "uint128" },
		],
	},
	{ name: "hookData", type: "bytes" },
] as const;

const BURN_POSITION_TYPES = [
	{
		name: "params",
		type: "tuple",
		components: [
			{ name: "pool", type: "address" },
			{ name: "hook", type: "address" },
			{ name: "tickLower", type: "int24" },
			{ name: "tickUpper", type: "int24" },
			{ name: "liquidity", type: "uint128" },
		],
	},
	{ name: "hookData", type: "bytes" },
] as const;

export type CalculatePositionLiquidityParams = {
	currentSqrtPriceX96: bigint;
	tickLower: number;
	tickUpper: number;
	amount0Desired: bigint;
	amount1Desired: bigint;
};

export type CalculatedPositionLiquidity = {
	liquidity: bigint;
	expectedAmounts: PositionAmounts;
};

export function calculatePositionLiquidity(
	params: CalculatePositionLiquidityParams
): CalculatedPositionLiquidity {
	assertTickRange(params.tickLower, params.tickUpper);
	assertNonNegative(params.currentSqrtPriceX96, "currentSqrtPriceX96");
	assertNonNegative(params.amount0Desired, "amount0Desired");
	assertNonNegative(params.amount1Desired, "amount1Desired");

	const sqrtRatioAX96 = getSqrtRatioAtTick(BigInt(params.tickLower));
	const sqrtRatioBX96 = getSqrtRatioAtTick(BigInt(params.tickUpper));
	const liquidity = getLiquidityForAmounts(
		params.currentSqrtPriceX96,
		sqrtRatioAX96,
		sqrtRatioBX96,
		params.amount0Desired,
		params.amount1Desired
	);

	assertUint128(liquidity, "liquidity");

	return {
		liquidity,
		expectedAmounts: getAmountsForLiquidity(
			params.currentSqrtPriceX96,
			sqrtRatioAX96,
			sqrtRatioBX96,
			liquidity
		),
	};
}

export function getPositionTokenId(
	_handler: Address,
	pool: Address,
	hook: Address,
	tickLower: number,
	tickUpper: number
): bigint {
	assertTickRange(tickLower, tickUpper);
	return BigInt(
		keccak256(
			encodeAbiParameters(
				[
					{ type: "address" },
					{ type: "address" },
					{ type: "address" },
					{ type: "int24" },
					{ type: "int24" },
				],
				[_handler, pool, hook, tickLower, tickUpper]
			)
		)
	);
}

export function buildMintPositionData(params: V3PositionParams): Hex {
	assertTickRange(params.tickLower, params.tickUpper);
	assertUint128(params.liquidity, "liquidity");

	return encodeAbiParameters(MINT_POSITION_TYPES, [
		{
			pool: normalizeAddress(params.pool, "pool"),
			hook: normalizeAddress(params.hook, "hook"),
			tickLower: params.tickLower,
			tickUpper: params.tickUpper,
			liquidity: params.liquidity,
		},
		params.hookData ?? "0x",
	]);
}

export function buildBurnPositionData(params: V3PositionParams): Hex {
	assertTickRange(params.tickLower, params.tickUpper);
	assertUint128(params.liquidity, "liquidity");

	return encodeAbiParameters(BURN_POSITION_TYPES, [
		{
			pool: normalizeAddress(params.pool, "pool"),
			hook: normalizeAddress(params.hook, "hook"),
			tickLower: params.tickLower,
			tickUpper: params.tickUpper,
			liquidity: params.liquidity,
		},
		params.hookData ?? "0x",
	]);
}

export type DepositPlanParams = {
	chainId: number;
	amm: AMM;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	currentSqrtPriceX96: bigint;
	currentTick: number;
	deadline: bigint;
	addLiquidityRouter: Address;
	liquidity?: bigint;
	amount0Desired?: bigint;
	amount1Desired?: bigint;
	handler?: Address;
	pool?: Address;
	hookData?: Hex;
	rangeCheck?: Partial<DepositRangeCheck>;
	approvalAmount0?: bigint;
	approvalAmount1?: bigint;
};

function buildDefaultDepositRange(
	currentTick: number,
	tickSpacing: number,
	deadline: bigint
): DepositRangeCheck {
	const minTickLower = Math.max(MIN_TICK, currentTick - tickSpacing * 5);
	const maxTickUpper = Math.min(MAX_TICK, currentTick + tickSpacing * 5);

	return {
		minTickLower,
		maxTickUpper,
		minSqrtPriceX96: getSqrtRatioAtTick(BigInt(minTickLower)),
		maxSqrtPriceX96: getSqrtRatioAtTick(BigInt(maxTickUpper)),
		deadline,
	};
}

export function buildDepositPlan(
	params: DepositPlanParams
): TransactionPlan<DepositPlanMetadata> {
	assertTickRange(params.tickLower, params.tickUpper);
	assertTickAligned(params.tickLower, params.amm.tickSpacing, "tickLower");
	assertTickAligned(params.tickUpper, params.amm.tickSpacing, "tickUpper");
	assertTick(params.currentTick, "currentTick");
	assertNonNegative(params.currentSqrtPriceX96, "currentSqrtPriceX96");
	assertNonNegative(params.deadline, "deadline");

	const handler = normalizeAddress(params.handler ?? params.amm.handler, "handler");
	const pool = normalizeAddress(params.pool ?? params.amm.address, "pool");
	const hook = normalizeAddress(params.hook, "hook");

	const hasLiquidity = params.liquidity !== undefined;
	const hasDesiredAmounts = params.amount0Desired !== undefined && params.amount1Desired !== undefined;
	if (hasLiquidity === hasDesiredAmounts) {
		throw new Error("Provide either liquidity or both amount0Desired and amount1Desired");
	}

	let liquidity: bigint;
	let expectedAmounts: PositionAmounts;
	if (hasDesiredAmounts) {
		const calculated = calculatePositionLiquidity({
			currentSqrtPriceX96: params.currentSqrtPriceX96,
			tickLower: params.tickLower,
			tickUpper: params.tickUpper,
			amount0Desired: params.amount0Desired!,
			amount1Desired: params.amount1Desired!,
		});
		liquidity = calculated.liquidity;
		expectedAmounts = calculated.expectedAmounts;
	} else {
		liquidity = params.liquidity!;
		assertUint128(liquidity, "liquidity");
		expectedAmounts = getAmountsForLiquidity(
			params.currentSqrtPriceX96,
			getSqrtRatioAtTick(BigInt(params.tickLower)),
			getSqrtRatioAtTick(BigInt(params.tickUpper)),
			liquidity
		);
	}

	if (liquidity === 0n) {
		throw new Error("liquidity must be greater than zero");
	}

	const defaultRange = buildDefaultDepositRange(params.currentTick, params.amm.tickSpacing, params.deadline);
	const rangeCheck: DepositRangeCheck = {
		...defaultRange,
		...params.rangeCheck,
	};
	assertTick(rangeCheck.minTickLower, "rangeCheck.minTickLower");
	assertTick(rangeCheck.maxTickUpper, "rangeCheck.maxTickUpper");
	if (rangeCheck.minTickLower > rangeCheck.maxTickUpper) {
		throw new Error("rangeCheck.minTickLower must not exceed maxTickUpper");
	}

	const mintPositionData = buildMintPositionData({
		pool,
		hook,
		tickLower: params.tickLower,
		tickUpper: params.tickUpper,
		liquidity,
		hookData: params.hookData,
	});

	const transactionData = encodeFunctionData({
		abi: AddLiquidityRouterAbi,
		functionName: "addLiquidity",
		args: [handler, mintPositionData, rangeCheck],
	});

	const approvalAmount0 = params.approvalAmount0 ?? params.amount0Desired ?? expectedAmounts.amount0;
	const approvalAmount1 = params.approvalAmount1 ?? params.amount1Desired ?? expectedAmounts.amount1;
	const approvals = buildApprovalTransactions(params.chainId, [
		...(approvalAmount0 > 0n
			? [{ token: normalizeAddress(params.amm.token0.address, "token0"), spender: normalizeAddress(params.addLiquidityRouter, "addLiquidityRouter"), amount: approvalAmount0, description: "Approve token0 for liquidity deposit" }]
			: []),
		...(approvalAmount1 > 0n
			? [{ token: normalizeAddress(params.amm.token1.address, "token1"), spender: normalizeAddress(params.addLiquidityRouter, "addLiquidityRouter"), amount: approvalAmount1, description: "Approve token1 for liquidity deposit" }]
			: []),
	]);

	const positionId = getPositionTokenId(handler, pool, hook, params.tickLower, params.tickUpper);
	const transaction = buildPreparedAction(
		params.chainId,
		normalizeAddress(params.addLiquidityRouter, "addLiquidityRouter"),
		transactionData,
		"Add concentrated liquidity"
	);

	return {
		chainId: params.chainId,
		approvals,
		transaction,
		metadata: {
			pool,
			handler,
			hook,
			tickLower: params.tickLower,
			tickUpper: params.tickUpper,
			liquidity,
			positionId,
			mintPositionData,
			expectedAmounts,
			rangeCheck,
		},
		warnings: [
			"The current liquidity manager does not enforce amount0Min/amount1Min; pool-price range checks are the available deposit protection.",
		],
	};
}

export type WithdrawPlanParams = {
	chainId: number;
	positionManager: Address;
	handler: Address;
	pool: Address;
	hook: Address;
	tickLower: number;
	tickUpper: number;
	liquidity: bigint;
	hookData?: Hex;
};

export function buildWithdrawPlan(
	params: WithdrawPlanParams
): TransactionPlan<WithdrawPlanMetadata> {
	assertTickRange(params.tickLower, params.tickUpper);
	assertUint128(params.liquidity, "liquidity");
	if (params.liquidity === 0n) {
		throw new Error("liquidity must be greater than zero");
	}

	const handler = normalizeAddress(params.handler, "handler");
	const pool = normalizeAddress(params.pool, "pool");
	const hook = normalizeAddress(params.hook, "hook");
	const burnPositionData = buildBurnPositionData({
		pool,
		hook,
		tickLower: params.tickLower,
		tickUpper: params.tickUpper,
		liquidity: params.liquidity,
		hookData: params.hookData,
	});

	const data = encodeFunctionData({
		abi: PositionManagerAbi,
		functionName: "burnPosition",
		args: [handler, burnPositionData],
	});
	const positionId = getPositionTokenId(handler, pool, hook, params.tickLower, params.tickUpper);

	return {
		chainId: params.chainId,
		approvals: [],
		transaction: buildPreparedAction(
			params.chainId,
			normalizeAddress(params.positionManager, "positionManager"),
			data,
			"Withdraw concentrated liquidity"
		),
		metadata: {
			pool,
			handler,
			hook,
			tickLower: params.tickLower,
			tickUpper: params.tickUpper,
			liquidity: params.liquidity,
			positionId,
			burnPositionData,
		},
		warnings: [],
	};
}

export function buildPositionManagerMulticall(
	chainId: number,
	positionManager: Address,
	calls: readonly PreparedTransaction[]
): PreparedTransaction {
	const data = encodeFunctionData({
		abi: PositionManagerAbi,
		functionName: "multicall",
		args: [calls.map((call) => call.data)],
	});

	return buildPreparedAction(
		chainId,
		normalizeAddress(positionManager, "positionManager"),
		data,
		"Execute PositionManager multicall"
	);
}
