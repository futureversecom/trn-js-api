export default {
	rpc: {
		getEventProof: {
			description: "Get ETH event proof for event Id",
			params: [
				{
					name: "eventId",
					type: "EventProofId",
				},
			],
			type: "Option<EthEventProofResponse>",
		},
		getXrplTxProof: {
			description: "Get XRPL event proof for event Id",
			params: [
				{
					name: "eventId",
					type: "EventProofId",
				},
			],
			type: "Option<XrplEventProofResponse>",
		},
		subscribeEventProofs: {
			alias: ["ethy_subscribeEventProofs", "ethy_unsubscribeEventProofs"],
			description: "Subscribe to Eth event proof.",
			params: [],
			pubsub: ["subscribeEventProofs", "unsubscribeEventProofs"],
			type: "Null",
		},
	},
	types: {
		VersionedEventProof: {
			_enum: {
				sentinel: null,
				EventProof: "EventProof",
			},
		},
		ExtrinsicSignature: "EthereumSignature",
		EthyId: "[u8; 32]",
		EthyEventId: "u64",
		EthEventProofResponse: {
			event_id: "EventProofId",
			signatures: "Vec<Bytes>",
			validators: "Vec<AccountId20>",
			validator_set_id: "ValidatorSetId",
			block: "H256",
			tag: "Option<Bytes>",
		},
		EventProofId: "u64",
		EthereumSignature: {
			r: "H256",
			s: "H256",
			v: "U8",
		},
		EventProof: {
			digest: "EthyId",
			eventId: "EventProofId",
			validatorSetId: "ValidatorSetId",
			signatures: "Vec<Bytes>",
			block: "[u8; 32]",
		},
	},
};
