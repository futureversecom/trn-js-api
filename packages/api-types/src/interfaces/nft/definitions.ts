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
		collectionDetails: {
			description: "Returns the collection info for a NFT collection",
			params: [
				{
					name: "collectionId",
					type: "u32",
				},
			],
			type: "Result<CollectionDetail, Text>",
		},
	},
	types: {
		CollectionUuid: "u32",
		SerialNumber: "u32",
		TokenId: "(CollectionUuid, SerialNumber)",
		CollectionDetail: {
			owner: "AccountId",
			name: "Vec<u8>",
			metadataScheme: "Vec<u8>",
			royaltiesSchedule: "Option<Vec<(T::AccountId, Permill)>>",
			maxIssuance: "Option<u32>",
			originChain: "Text",
			nextSerialNumber: "u32",
			collectionIssuance: "u32",
			crossChainCompatibility: "CrossChainCompatibility",
		},
		CrossChainCompatibility: {
			xrpl: "bool",
		},
	},
};
