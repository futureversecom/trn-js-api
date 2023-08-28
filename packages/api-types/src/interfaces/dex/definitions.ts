export default {
	rpc: {
		quote: {
			description:
				"Given some amount of an asset and pair reserves, returns an equivalent amount of the other asset",
			params: [
				{
					name: "amountA",
					type: "u128",
				},
				{
					name: "reserveA",
					type: "u128",
				},
				{
					name: "reserveB",
					type: "u128",
				},
			],
			type: "Json",
		},
		getAmountsOut: {
			description: "Given an array of AssetIds, return amounts out for an amount in",
			params: [
				{
					name: "amountIn",
					type: "u128",
				},
				{
					name: "path",
					type: "Vec<AssetId>",
				},
			],
			type: "Json",
		},
		getAmountsIn: {
			description: "Given an array of AssetIds, return amounts in for an amount out",
			params: [
				{
					name: "amountOut",
					type: "u128",
				},
				{
					name: "path",
					type: "Vec<AssetId>",
				},
			],
			type: "Json",
		},
		getLPTokenID: {
			description: "Given two AssetIds, return liquidity token created for the pair",
			params: [
				{
					name: "assetA",
					type: "AssetId",
				},
				{
					name: "assetB",
					type: "AssetId",
				},
			],
			type: "Json",
		},
		getLiquidity: {
			description: "Given two AssetIds, return liquidity",
			params: [
				{
					name: "assetA",
					type: "AssetId",
				},
				{
					name: "assetB",
					type: "AssetId",
				},
			],
			type: "Json",
		},
		getTradingPairStatus: {
			description: "Given two AssetIds, return whether trading pair is enabled or disabled",
			params: [
				{
					name: "assetA",
					type: "AssetId",
				},
				{
					name: "assetB",
					type: "AssetId",
				},
			],
			type: "Text",
		},
	},
	types: {},
};
