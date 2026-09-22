import type { Address } from "viem";
import {
	normalizeAssembledOptions,
	normalizeExerciseOptions,
	StrykeApiClient,
	type OptionsAssembleRequest,
	type OptionsExerciseRequest,
	type OptionsQuoteRequest,
} from "./api";
import { ClientValidationError } from "./errors";
import {
	buildExerciseOptionPlan,
	buildMintOptionPlan,
	type ExerciseOptionPlanParams,
} from "./options";
import type { ApprovalRequirement, SettlementParams } from "./types";
import { assertSameAddress } from "./validation";

export * from "./abis";
export * from "./api";
export * from "./errors";
export * from "./options";
export * from "./positions";
export * from "./transactions";
export * from "./types";
export * from "./validation";

export type PreparePurchaseParams = {
	chainId: number;
	request: OptionsAssembleRequest;
	firewall?: Address;
	approvalRequirements?: readonly ApprovalRequirement[];
	batch?: boolean;
};

export type PrepareExerciseParams = {
	chainId: number;
	request: OptionsExerciseRequest;
	firewall: Address;
	caller?: Address;
	settlements: Record<string, SettlementParams>;
	batch?: boolean;
};

/**
 * Preparation-only facade. It calls the backend when needed, then returns
 * complete transaction calls. It never accepts or stores a private key.
 */
export class StrykeClient {
	readonly api: StrykeApiClient;

	constructor(api: StrykeApiClient) {
		this.api = api;
	}

	getOptionQuotes(request: OptionsQuoteRequest) {
		return this.api.getOptionQuotes(request);
	}

	async preparePurchase(params: PreparePurchaseParams) {
		const raw = await this.api.assembleOptions(params.request);
		return buildMintOptionPlan({
			chainId: params.chainId,
			firewall: params.firewall,
			preparations: normalizeAssembledOptions(raw),
			approvalRequirements: params.approvalRequirements,
			batch: params.batch,
		});
	}

	async prepareExercise(params: PrepareExerciseParams) {
		const raw = await this.api.prepareExercise(params.request);
		const preparations = normalizeExerciseOptions(raw);
		if (preparations.length === 0) {
			throw new ClientValidationError("EMPTY_EXERCISE", "the backend returned no exercise preparation");
		}

		if (params.caller) {
			assertSameAddress(params.caller, params.request.user, "caller does not match exercise request user");
		}

		const items: ExerciseOptionPlanParams["items"] = preparations.map((preparation) => {
			const settlement = params.settlements[preparation.tokenId.toString()];
			if (!settlement) {
				throw new ClientValidationError(
					"MISSING_SETTLEMENT",
					`missing settlement data for option ${preparation.tokenId.toString()}`
				);
			}
			return {
				chainId: params.chainId,
				firewall: params.firewall,
				caller: params.caller,
				preparation,
				settlement,
			};
		});

		return buildExerciseOptionPlan({
			chainId: params.chainId,
			firewall: params.firewall,
			caller: params.caller,
			items,
			batch: params.batch,
		});
	}
}

export function createStrykeClient(config: { api: StrykeApiClient }): StrykeClient {
	return new StrykeClient(config.api);
}

export type { OptionsAssembleRequest, OptionsExerciseRequest, OptionsQuoteRequest } from "./api";
