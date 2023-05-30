export default {
	rpc: {
		ownedTokens: {
			description: "Get all NFTs owned by an account",
			params: [
				{
					name: "collectionId",
					type: "CollectionUuid",
				},
				{
					name: "who",
					type: "AccountId",
				},
				{ name: "cursor", type: "SerialNumber" },
				{ name: "limit", type: "u16" },
			],
			type: "Json",
		},
		tokenUri: {
			description: "Get the URI of a token",
			params: [
				{
					name: "tokenId",
					type: "TokenId",
				},
			],
			type: "Json",
		},
	},
	types: {
		CollectionUuid: "u32",
		SerialNumber: "u32",
		TokenId: "(CollectionUuid, SerialNumber)",
	},
};
