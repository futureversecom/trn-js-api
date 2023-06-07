import { ApiOptions } from "@polkadot/api/types";

export const typesOptions: ApiOptions["types"] = {
	AccountId: "EthereumAccountId",
	AccountId20: "EthereumAccountId",
	AccountId32: "EthereumAccountId",
	Address: "AccountId",
	LookupSource: "AccountId",
	Lookup0: "AccountId",
	AssetId: "u32",
	Balance: "u128",
	EventProofId: "u64",
	ValidatorSetId: "u64",
	EthereumSignature: {
		r: "H256",
		s: "H256",
		v: "U8",
	},
	ExtrinsicSignature: "EthereumSignature",
	EthyId: "[u8; 32]",
	EthLog1: {
		address: "EthAddress",
		topics: "Vec<H256>",
		data: "Bytes",
	},
	EthWalletCall: {
		nonce: "u32",
	},
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
	EthEventProofResponse: {
		event_id: "EventProofId",
		signatures: "Vec<Bytes>",
		validators: "Vec<AccountId20>",
		validator_set_id: "ValidatorSetId",
		block: "H256",
		tag: "Option<Bytes>",
	},
	XrplEventProofResponse: {
		event_id: "EventProofId",
		signatures: "Vec<Bytes>",
		validators: "Vec<Bytes>",
		validator_set_id: "ValidatorSetId",
		block: "H256",
		tag: "Option<Bytes>",
	},
	VersionedEventProof: {
		_enum: {
			sentinel: null,
			EventProof: "EventProof",
		},
	},
	CollectionUuid: "u32",
	SerialNumber: "u32",
	TokenId: "(CollectionUuid, SerialNumber)",
};
