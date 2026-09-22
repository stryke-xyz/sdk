import type { Api } from "../api/types";
import type { Address, Hex } from "viem";
import { ApiClientError } from "./errors";
import type { OptionExercisePreparation, OptionPurchasePreparation, RangeCheck, FirewallSignature } from "./types";
import { normalizeAddress } from "./validation";

export type OptionsQuoteRequest = {
	chain: string;
	expiry: number;
	market: string;
	options: {
		tickLower: number;
		tickUpper: number;
	}[];
};

export type OptionsAssembleRequest = {
	isSelf?: boolean;
	chain: string;
	expiry: number;
	user: string;
	market: string;
	deadline: number;
	options: {
		tickLower: number;
		tickUpper: number;
		maxCostAllowance: bigint | string;
		parts: {
			pool: string;
			hook: string;
			handler: string;
			liquidity: bigint | string;
		}[];
	}[];
};

export type OptionsExerciseRequest = {
	chain: string;
	user: string;
	market: string;
	deadline: number;
	options: {
		tokenId: bigint | number;
		pools: string[];
	}[];
};

export type StrykeApiClientConfig = {
	baseUrl: string;
	headers?: Record<string, string>;
	fetch?: typeof fetch;
};

function asSafeApiTokenId(tokenId: bigint | number): number {
	if (typeof tokenId === "number") {
		if (!Number.isSafeInteger(tokenId) || tokenId < 0) {
			throw new Error("tokenId must be a non-negative safe integer for the current API schema");
		}
		return tokenId;
	}
	if (tokenId < 0n || tokenId > BigInt(Number.MAX_SAFE_INTEGER)) {
		throw new Error("the current API schema cannot safely represent this tokenId as a JSON number");
	}
	return Number(tokenId);
}

export class StrykeApiClient {
	private readonly baseUrl: string;
	private readonly headers: Record<string, string>;
	private readonly fetcher: typeof fetch;

	constructor(config: StrykeApiClientConfig) {
		this.baseUrl = config.baseUrl.replace(/\/+$/, "");
		this.headers = { ...config.headers };
		this.fetcher = config.fetch ?? fetch;
	}

	private async request<T>(path: string, init: RequestInit): Promise<T> {
		const response = await this.fetcher(`${this.baseUrl}${path}`, {
			...init,
			headers: {
				"content-type": "application/json",
				...this.headers,
				...(init.headers ?? {}),
			},
		});

		const body = await response.json().catch(() => undefined);
		if (!response.ok) {
			throw new ApiClientError(response.status, `Stryke API request failed: ${path}`, body);
		}
		return body as T;
	}

	getOptionQuotes(body: OptionsQuoteRequest): Promise<Api["v1/options/quotes"]> {
		return this.request<Api["v1/options/quotes"]>("/v1/options/quotes", {
			method: "POST",
			body: JSON.stringify(body),
		});
	}

	assembleOptions(body: OptionsAssembleRequest): Promise<Api["v1/options/assemble"]> {
		return this.request<Api["v1/options/assemble"]>("/v1/options/assemble", {
			method: "POST",
			body: JSON.stringify({
				...body,
				options: body.options.map((option) => ({
					...option,
					maxCostAllowance: option.maxCostAllowance.toString(),
					parts: option.parts.map((part) => ({ ...part, liquidity: part.liquidity.toString() })),
				})),
			}),
		});
	}

	prepareExercise(body: OptionsExerciseRequest): Promise<Api["v1/options/exercise"]> {
		return this.request<Api["v1/options/exercise"]>("/v1/options/exercise", {
			method: "POST",
			body: JSON.stringify({
				...body,
				options: body.options.map((option) => ({
					...option,
					tokenId: asSafeApiTokenId(option.tokenId),
				})),
			}),
		});
	}

	getOptionPositions(params: {
		chain: string;
		user: string;
		market: string;
	}): Promise<Api["v1/options/positions"]> {
		const query = new URLSearchParams({
			chain: params.chain,
			user: params.user,
			market: params.market,
		});
		return this.request<Api["v1/options/positions"]>(`/v1/options/positions?${query.toString()}`, {
			method: "GET",
		});
	}
}

export function normalizeAssembledOptions(
	response: Api["v1/options/assemble"]
): OptionPurchasePreparation[] {
	return response.map((item) => ({
		market: normalizeAddress(item.market, "assembled market"),
		tickLower: item.tickLower,
		tickUpper: item.tickUpper,
		transaction: {
			to: normalizeAddress(item.transaction.to, "assembled transaction target"),
			data: item.transaction.data as Hex,
		},
	}));
}

function normalizeRangeCheck(rangeCheck: Api["v1/options/exercise"][number]["rangeChecks"][number]): RangeCheck {
	return {
		user: normalizeAddress(rangeCheck.user, "range check user"),
		pool: normalizeAddress(rangeCheck.pool, "range check pool"),
		market: normalizeAddress(rangeCheck.market, "range check market"),
		minTickLower: rangeCheck.minTickLower,
		maxTickUpper: rangeCheck.maxTickUpper,
		minSqrtPriceX96: BigInt(rangeCheck.minSqrtPriceX96),
		maxSqrtPriceX96: BigInt(rangeCheck.maxSqrtPriceX96),
		deadline: BigInt(rangeCheck.deadline),
	};
}

function normalizeFirewallSignature(
	signature: Api["v1/options/exercise"][number]["signatures"][number]
): FirewallSignature {
	return {
		v: signature.v,
		r: signature.r as Hex,
		s: signature.s as Hex,
	};
}

export function normalizeExerciseOptions(
	response: Api["v1/options/exercise"]
): OptionExercisePreparation[] {
	return response.map((item) => ({
		market: normalizeAddress(item.market, "exercise market"),
		tokenId: BigInt(item.tokenId),
		rangeChecks: item.rangeChecks.map(normalizeRangeCheck),
		signatures: item.signatures.map(normalizeFirewallSignature),
	}));
}
