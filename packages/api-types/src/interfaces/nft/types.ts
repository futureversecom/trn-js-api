// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Option, Struct, Text, Vec, bool, u32 } from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type { AccountId, Permill } from "@therootnetwork/api-types/interfaces/runtime";

/** @name CollectionDetail */
export interface CollectionDetail extends Struct {
	readonly owner: AccountId;
	readonly name: Bytes;
	readonly metadataScheme: Bytes;
	readonly royaltiesSchedule: Option<Vec<ITuple<[AccountId, Permill]>>>;
	readonly maxIssuance: Option<u32>;
	readonly originChain: Text;
	readonly nextSerialNumber: u32;
	readonly collectionIssuance: u32;
	readonly crossChainCompatibility: CrossChainCompatibility;
}

/** @name CollectionUuid */
export interface CollectionUuid extends u32 {}

/** @name CrossChainCompatibility */
export interface CrossChainCompatibility extends Struct {
	readonly xrpl: bool;
}

/** @name SerialNumber */
export interface SerialNumber extends u32 {}

/** @name TokenId */
export interface TokenId extends ITuple<[CollectionUuid, SerialNumber]> {}

export type PHANTOM_NFT = "nft";
