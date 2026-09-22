import {
	encodeAbiParameters,
	encodeFunctionData,
	type Address,
	type Hex,
} from "viem";
import {
	ExerciseOptionFirewallAbi,
	MintOptionFirewallAbi,
} from "../abi";
import { OpenSettlementAbi } from "./abis";
import { ClientValidationError } from "./errors";
import { buildApprovalTransactions, buildPreparedAction } from "./transactions";
import type {
	ApprovalRequirement,
	FirewallSignature,
	OptionExercisePreparation,
	OptionParams,
	OptionPurchasePreparation,
	RangeCheck,
	SettlementParams,
	SwapCall,
	TransactionPlan,
	PreparedTransaction,
} from "./types";
import {
	assertArrayLengths,
	assertNonNegative,
	assertSameAddress,
	assertTickRange,
	normalizeAddress,
} from "./validation";

const SWAP_DATA_TYPES = [
	{ name: "minAmountOut", type: "uint256" },
	{ name: "to", type: "address" },
	{ name: "swapData", type: "bytes" },
] as const;

function normalizeRangeChecks(
	market: Address,
	rangeChecks: readonly RangeCheck[],
	caller?: Address
): RangeCheck[] {
	return rangeChecks.map((rangeCheck) => {
		const normalized: RangeCheck = {
			...rangeCheck,
			user: normalizeAddress(rangeCheck.user, "range check user"),
			pool: normalizeAddress(rangeCheck.pool, "range check pool"),
			market: normalizeAddress(rangeCheck.market, "range check market"),
		};

		assertSameAddress(normalized.market, market, "range check market does not match option market");
		if (caller) {
			assertSameAddress(normalized.user, caller, "range check user does not match transaction caller");
		}
		return normalized;
	});
}

function normalizeSignatures(signatures: readonly FirewallSignature[]): FirewallSignature[] {
	return signatures.map((signature) => {
		if (!Number.isInteger(signature.v) || signature.v < 0 || signature.v > 255) {
			throw new ClientValidationError("INVALID_SIGNATURE_V", "signature.v must fit uint8");
		}
		return {
			v: signature.v,
			r: signature.r,
			s: signature.s,
		};
	});
}

function normalizeOptionParams(optionParams: OptionParams) {
	if (optionParams.optionTicks.length === 0 || optionParams.optionTicks.length > 20) {
		throw new ClientValidationError("INVALID_OPTION_LEGS", "an option must contain between 1 and 20 legs");
	}
	assertTickRange(optionParams.tickLower, optionParams.tickUpper);
	assertNonNegative(optionParams.ttl, "ttl");
	assertNonNegative(optionParams.maxCostAllowance, "maxCostAllowance");

	return {
		...optionParams,
		optionTicks: optionParams.optionTicks.map((optionTick) => {
			assertTickRange(optionTick.tickLower, optionTick.tickUpper);
			if (optionTick.tickLower !== optionParams.tickLower || optionTick.tickUpper !== optionParams.tickUpper) {
				throw new ClientValidationError("OPTION_TICK_MISMATCH", "each option leg must use the option strike range");
			}
			assertNonNegative(optionTick.liquidityToUse, "liquidityToUse");
			return {
				_handler: normalizeAddress(optionTick.handler, "option handler"),
				pool: normalizeAddress(optionTick.pool, "option pool"),
				hook: normalizeAddress(optionTick.hook, "option hook"),
				tickLower: optionTick.tickLower,
				tickUpper: optionTick.tickUpper,
				liquidityToUse: optionTick.liquidityToUse,
			};
		}),
	};
}

function validateSettlementParams(settlement: SettlementParams): void {
	assertArrayLengths(
		"settlement",
		settlement.swapper,
		settlement.swapData,
		settlement.liquidityToSettle
	);
	for (const liquidity of settlement.liquidityToSettle) {
		assertNonNegative(liquidity, "liquidityToSettle");
	}
}

export type MintOptionTransactionParams = {
	chainId: number;
	firewall: Address;
	market: Address;
	caller?: Address;
	optionRecipient: Address;
	optionParams: OptionParams;
	rangeChecks: RangeCheck[];
	signatures: FirewallSignature[];
	self?: boolean;
};

export function buildMintOptionTransaction(
	params: MintOptionTransactionParams
): PreparedTransaction {
	const firewall = normalizeAddress(params.firewall, "mint option firewall");
	const market = normalizeAddress(params.market, "option market");
	const optionRecipient = normalizeAddress(params.optionRecipient, "option recipient");
	const optionParams = normalizeOptionParams(params.optionParams);
	assertArrayLengths("mint option", params.rangeChecks, params.signatures, optionParams.optionTicks);
	const rangeChecks = normalizeRangeChecks(market, params.rangeChecks, params.caller);
	const signatures = normalizeSignatures(params.signatures);
	for (let index = 0; index < rangeChecks.length; index += 1) {
		assertSameAddress(
			rangeChecks[index].pool,
			params.optionParams.optionTicks[index].pool,
			"range check pool does not match option leg pool"
		);
	}

	const data = encodeFunctionData({
		abi: MintOptionFirewallAbi,
		functionName: "mintOption",
		args: [
			{
				market,
				optionParams,
				optionRecipient,
				self: params.self ?? false,
			},
			rangeChecks,
			signatures,
		],
	});

	return buildPreparedAction(params.chainId, firewall, data, "Mint option through firewall");
}

export type MintOptionPlanMetadata = {
	optionCount: number;
	firewall: Address;
	preparations: OptionPurchasePreparation[];
};

export type MintOptionPlanParams = {
	chainId: number;
	firewall?: Address;
	preparations: readonly OptionPurchasePreparation[];
	approvalRequirements?: readonly ApprovalRequirement[];
	batch?: boolean;
};

export function buildMintOptionPlan(
	params: MintOptionPlanParams
): TransactionPlan<MintOptionPlanMetadata> {
	if (params.preparations.length === 0) {
		throw new ClientValidationError("EMPTY_PURCHASE", "at least one assembled option is required");
	}

	const returnedFirewall = normalizeAddress(params.preparations[0].transaction.to, "mint option firewall");
	const firewall = normalizeAddress(params.firewall ?? returnedFirewall, "mint option firewall");
	assertSameAddress(returnedFirewall, firewall, "assembled transaction targets a different mint firewall");

	const transactionData = params.preparations.map((preparation) => {
		const target = normalizeAddress(preparation.transaction.to, "assembled transaction target");
		assertSameAddress(target, firewall, "all assembled options must target the same mint firewall");
		return preparation.transaction.data;
	});

	let actionData: Hex = transactionData[0];
	if (params.batch ?? transactionData.length > 1) {
		actionData = encodeFunctionData({
			abi: MintOptionFirewallAbi,
			functionName: "multicall",
			args: [transactionData],
		});
	}

	return {
		chainId: params.chainId,
		approvals: buildApprovalTransactions(params.chainId, params.approvalRequirements ?? []),
		transaction: buildPreparedAction(params.chainId, firewall, actionData, "Purchase option(s) through firewall"),
		metadata: {
			optionCount: params.preparations.length,
			firewall,
			preparations: [...params.preparations],
		},
		warnings: [
			"No firewall sweep call is included. The caller must only approve the intended payment amount.",
		],
	};
}

export function buildOnSwapReceiverData(swap: SwapCall): Hex {
	assertNonNegative(swap.minAmountOut, "minAmountOut");
	if (swap.minAmountOut === 0n) {
		throw new ClientValidationError("ZERO_MIN_OUTPUT", "minAmountOut must be greater than zero");
	}
	return encodeAbiParameters(SWAP_DATA_TYPES, [
		swap.minAmountOut,
		normalizeAddress(swap.target, "swap target"),
		swap.calldata,
	]);
}

export type ExerciseOptionTransactionParams = {
	chainId: number;
	firewall: Address;
	caller?: Address;
	preparation: OptionExercisePreparation;
	settlement: SettlementParams;
};

export function buildExerciseOptionTransaction(
	params: ExerciseOptionTransactionParams
): PreparedTransaction {
	const firewall = normalizeAddress(params.firewall, "exercise option firewall");
	const market = normalizeAddress(params.preparation.market, "option market");
	const tokenId = params.preparation.tokenId;
	if (tokenId !== params.settlement.optionId) {
		throw new ClientValidationError("OPTION_ID_MISMATCH", "settlement optionId does not match exercise preparation");
	}
	validateSettlementParams(params.settlement);
	assertArrayLengths(
		"settlement",
		params.settlement.swapper,
		params.settlement.swapData,
		params.settlement.liquidityToSettle,
		params.preparation.rangeChecks
	);
	assertArrayLengths("exercise signatures", params.preparation.rangeChecks, params.preparation.signatures);
	const rangeChecks = normalizeRangeChecks(market, params.preparation.rangeChecks, params.caller);
	const signatures = normalizeSignatures(params.preparation.signatures);

	const data = encodeFunctionData({
		abi: ExerciseOptionFirewallAbi,
		functionName: "exerciseOption",
		args: [
			market,
			tokenId,
			{
				optionId: params.settlement.optionId,
				swapper: params.settlement.swapper.map((address) => normalizeAddress(address, "swapper")),
				swapData: params.settlement.swapData,
				liquidityToSettle: params.settlement.liquidityToSettle,
			},
			rangeChecks,
			signatures,
		],
	});

	return buildPreparedAction(params.chainId, firewall, data, "Exercise option through firewall");
}

export type ExerciseOptionPlanParams = {
	chainId: number;
	firewall: Address;
	caller?: Address;
	items: readonly ExerciseOptionTransactionParams[];
	batch?: boolean;
};

export function buildExerciseOptionPlan(
	params: ExerciseOptionPlanParams
): TransactionPlan<{ optionCount: number; firewall: Address }> {
	if (params.items.length === 0) {
		throw new ClientValidationError("EMPTY_EXERCISE", "at least one option is required");
	}

	const calls = params.items.map((item) =>
		buildExerciseOptionTransaction({
			...item,
			chainId: params.chainId,
			firewall: params.firewall,
			caller: params.caller,
		})
	);
	const firewall = normalizeAddress(params.firewall, "exercise option firewall");
	let transaction = calls[0];
	if (params.batch ?? calls.length > 1) {
		const data = encodeFunctionData({
			abi: ExerciseOptionFirewallAbi,
			functionName: "multicall",
			args: [calls.map((call) => call.data)],
		});
		transaction = buildPreparedAction(params.chainId, firewall, data, "Exercise option(s) through firewall");
	}

	return {
		chainId: params.chainId,
		approvals: [],
		transaction,
		metadata: { optionCount: calls.length, firewall },
		warnings: [],
	};
}

export type ExpirySettlementPlanParams = {
	chainId: number;
	openSettlement: Address;
	market: Address;
	settlement: SettlementParams;
};

export function buildExpirySettlementPlan(
	params: ExpirySettlementPlanParams
): TransactionPlan<{ optionId: bigint; openSettlement: Address }> {
	const openSettlement = normalizeAddress(params.openSettlement, "open settlement");
	const market = normalizeAddress(params.market, "option market");
	validateSettlementParams(params.settlement);
	const data = encodeFunctionData({
		abi: OpenSettlementAbi,
		functionName: "openSettle",
		args: [
			market,
			params.settlement.optionId,
			{
				optionId: params.settlement.optionId,
				swapper: params.settlement.swapper.map((address) => normalizeAddress(address, "swapper")),
				swapData: params.settlement.swapData,
				liquidityToSettle: params.settlement.liquidityToSettle,
			},
		],
	});

	return {
		chainId: params.chainId,
		approvals: [],
		transaction: buildPreparedAction(params.chainId, openSettlement, data, "Settle expired option"),
		metadata: { optionId: params.settlement.optionId, openSettlement },
		warnings: ["The option must be expired and the configured settlement permissions must allow this caller."],
	};
}
