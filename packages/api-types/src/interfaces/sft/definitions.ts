export default {
	rpc: {
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
	types: {},
};
