// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { u32 } from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";

/** @name CollectionUuid */
export interface CollectionUuid extends u32 {}

/** @name SerialNumber */
export interface SerialNumber extends u32 {}

/** @name TokenId */
export interface TokenId extends ITuple<[CollectionUuid, SerialNumber]> {}

export type PHANTOM_NFT = "nft";
