import definitions from "@polkadot/types/interfaces/runtime/definitions";

export default {
	rpc: {},
	types: {
		...definitions.types,
		AccountId: "EthereumAccountId",
		AccountId20: "EthereumAccountId",
		AccountId32: "EthereumAccountId",
		Address: "AccountId",
		LookupSource: "AccountId",
		Lookup0: "AccountId",
		AssetId: "u32",
		Balance: "u128",
	},
};
