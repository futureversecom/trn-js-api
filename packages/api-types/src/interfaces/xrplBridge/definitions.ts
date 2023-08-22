export default {
	rpc: {},
	types: {
		XRPLTxData: {
			_enum: {
				Payment: {
					amount: "Balance",
					destination: "H160",
				},
				CurrencyPayment: {
					amount: "Balance",
					address: "H160",
					currencyId: "H256",
				},
			},
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} as any,
		XrplEventProofResponse: {
			event_id: "EventProofId",
			signatures: "Vec<Bytes>",
			validators: "Vec<Bytes>",
			validator_set_id: "ValidatorSetId",
			block: "H256",
			tag: "Option<Bytes>",
		},
	},
};
