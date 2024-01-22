export default {
	rpc: {
		freeBalance: {
			description: "Given asset id and address, returns free balance",
			params: [
				{
					name: "asset",
					type: "AssetId",
				},
				{
					name: "who",
					type: "AccountId",
				},
			],
			type: "Text",
		},
	},
	types: {},
};
