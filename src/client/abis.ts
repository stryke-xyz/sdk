export const ERC20Abi = [
	{
		type: "function",
		name: "approve",
		inputs: [
			{ name: "spender", type: "address" },
			{ name: "amount", type: "uint256" },
		],
		outputs: [{ name: "", type: "bool" }],
		stateMutability: "nonpayable",
	},
] as const;

export const OpenSettlementAbi = [
	{
		type: "function",
		name: "openSettle",
		inputs: [
			{ name: "market", type: "address" },
			{ name: "optionId", type: "uint256" },
			{
				name: "settleParams",
				type: "tuple",
				components: [
					{ name: "optionId", type: "uint256" },
					{ name: "swapper", type: "address[]" },
					{ name: "swapData", type: "bytes[]" },
					{ name: "liquidityToSettle", type: "uint256[]" },
				],
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
] as const;
