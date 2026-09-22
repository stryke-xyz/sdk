import { encodeFunctionData, type Address } from "viem";
import { ERC20Abi } from "./abis";
import type { ApprovalRequirement, PreparedTransaction } from "./types";
import { assertNonNegative, normalizeAddress } from "./validation";

export function buildApprovalTransaction(
	chainId: number,
	requirement: ApprovalRequirement
): PreparedTransaction {
	assertNonNegative(requirement.amount, "approval amount");

	return {
		chainId,
		to: normalizeAddress(requirement.token, "approval token"),
		data: encodeFunctionData({
			abi: ERC20Abi,
			functionName: "approve",
			args: [normalizeAddress(requirement.spender, "approval spender"), requirement.amount],
		}),
		kind: "approval",
		description: requirement.description ?? "Approve token spending",
	};
}

export function buildApprovalTransactions(
	chainId: number,
	requirements: readonly ApprovalRequirement[]
): PreparedTransaction[] {
	const merged = new Map<string, ApprovalRequirement>();

	for (const requirement of requirements) {
		const token = normalizeAddress(requirement.token, "approval token");
		const spender = normalizeAddress(requirement.spender, "approval spender");
		const key = `${token.toLowerCase()}:${spender.toLowerCase()}`;
		const existing = merged.get(key);

		if (existing) {
			existing.amount += requirement.amount;
		} else {
			merged.set(key, {
				...requirement,
				token,
				spender,
			});
		}
	}

	return [...merged.values()].map((requirement) => buildApprovalTransaction(chainId, requirement));
}

export function buildPreparedAction(
	chainId: number,
	to: Address,
	data: `0x${string}`,
	description: string,
	value?: bigint
): PreparedTransaction {
	return {
		chainId,
		to: normalizeAddress(to, "transaction target"),
		data,
		...(value === undefined ? {} : { value }),
		kind: "action",
		description,
	};
}
