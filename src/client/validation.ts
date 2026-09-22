import { getAddress, type Address } from "viem";
import { ClientValidationError } from "./errors";

export const MIN_TICK = -887272;
export const MAX_TICK = 887272;
export const UINT128_MAX = (1n << 128n) - 1n;

export function normalizeAddress(value: string, field = "address"): Address {
	try {
		return getAddress(value);
	} catch {
		throw new ClientValidationError("INVALID_ADDRESS", `${field} is not a valid EVM address`);
	}
}

export function assertInt24(value: number, field: string): void {
	if (!Number.isInteger(value) || value < -8388608 || value > 8388607) {
		throw new ClientValidationError("INVALID_INT24", `${field} must fit int24`);
	}
}

export function assertTick(value: number, field: string): void {
	assertInt24(value, field);
	if (value < MIN_TICK || value > MAX_TICK) {
		throw new ClientValidationError("INVALID_TICK", `${field} must be between ${MIN_TICK} and ${MAX_TICK}`);
	}
}

export function assertTickRange(tickLower: number, tickUpper: number): void {
	assertTick(tickLower, "tickLower");
	assertTick(tickUpper, "tickUpper");
	if (tickLower >= tickUpper) {
		throw new ClientValidationError("INVALID_TICK_RANGE", "tickLower must be less than tickUpper");
	}
}

export function assertTickAligned(tick: number, tickSpacing: number, field: string): void {
	if (!Number.isInteger(tickSpacing) || tickSpacing <= 0) {
		throw new ClientValidationError("INVALID_TICK_SPACING", "tickSpacing must be a positive integer");
	}
	if (tick % tickSpacing !== 0) {
		throw new ClientValidationError("MISALIGNED_TICK", `${field} must be aligned to tick spacing ${tickSpacing}`);
	}
}

export function alignTickToSpacing(
	tick: number,
	tickSpacing: number,
	mode: "down" | "up"
): number {
	if (!Number.isInteger(tick) || !Number.isInteger(tickSpacing) || tickSpacing <= 0) {
		throw new ClientValidationError("INVALID_TICK_ALIGNMENT", "tick and tickSpacing must be integers; spacing must be positive");
	}

	const quotient = Math.floor(tick / tickSpacing);
	const aligned = mode === "down" ? quotient * tickSpacing : Math.ceil(tick / tickSpacing) * tickSpacing;
	assertTick(aligned, "aligned tick");
	return aligned;
}

export function assertUint128(value: bigint, field: string): void {
	if (value < 0n || value > UINT128_MAX) {
		throw new ClientValidationError("INVALID_UINT128", `${field} must fit uint128`);
	}
}

export function assertNonNegative(value: bigint, field: string): void {
	if (value < 0n) {
		throw new ClientValidationError("NEGATIVE_AMOUNT", `${field} cannot be negative`);
	}
}

export function assertArrayLengths(label: string, ...arrays: readonly unknown[][]): void {
	if (arrays.length < 2) return;
	const expected = arrays[0].length;
	if (arrays.some((items) => items.length !== expected)) {
		throw new ClientValidationError("ARRAY_LENGTH_MISMATCH", `${label} arrays must have equal lengths`);
	}
}

export function assertSameAddress(left: string, right: string, message: string): void {
	if (left.toLowerCase() !== right.toLowerCase()) {
		throw new ClientValidationError("ADDRESS_MISMATCH", message);
	}
}
