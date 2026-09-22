export class ClientValidationError extends Error {
	readonly code: string;

	constructor(code: string, message: string) {
		super(message);
		this.name = "ClientValidationError";
		this.code = code;
	}
}

export class ApiClientError extends Error {
	readonly status: number;
	readonly body: unknown;

	constructor(status: number, message: string, body: unknown) {
		super(message);
		this.name = "ApiClientError";
		this.status = status;
		this.body = body;
	}
}
