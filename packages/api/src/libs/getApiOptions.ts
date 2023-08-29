import { ApiOptions } from "@polkadot/api/types";

import { lookupTypes } from "@therootnetwork/api-types/index";
import * as definitions from "@therootnetwork/api-types/interfaces/definitions";

export function getApiOptions(): ApiOptions {
	return {
		types: {
			...getTypesOptions(),
		},
		rpc: {
			...getRpcOptions(),
		},
	};
}

export function getTypesOptions(): ApiOptions["types"] {
	const types = Object.values(definitions).reduce((res, { types }) => ({ ...res, ...types }), {});

	return { ...types, ...(lookupTypes as unknown as ApiOptions["types"]) };
}

export function getRpcOptions(): ApiOptions["rpc"] {
	return {
		dex: {
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
		ethy: {
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
		},
		nft: {
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
	};
}
