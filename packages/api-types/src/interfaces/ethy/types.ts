// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8, U8aFixed, Vec, u64 } from "@polkadot/types-codec";
import type { ValidatorSetId } from "@polkadot/types/interfaces/beefy";
import type { AccountId20, H256 } from "@therootnetwork/api-types/interfaces/runtime";

/** @name EthereumSignature */
export interface EthereumSignature extends Struct {
	readonly r: H256;
	readonly s: H256;
	readonly v: U8;
}

/** @name EthEventProofResponse */
export interface EthEventProofResponse extends Struct {
	readonly event_id: EventProofId;
	readonly signatures: Vec<Bytes>;
	readonly validators: Vec<AccountId20>;
	readonly validator_set_id: ValidatorSetId;
	readonly block: H256;
	readonly tag: Option<Bytes>;
}

/** @name EthyEventId */
export interface EthyEventId extends u64 {}

/** @name EthyId */
export interface EthyId extends U8aFixed {}

/** @name EventProof */
export interface EventProof extends Struct {
	readonly digest: EthyId;
	readonly eventId: EventProofId;
	readonly validatorSetId: ValidatorSetId;
	readonly signatures: Vec<Bytes>;
	readonly block: U8aFixed;
}

/** @name EventProofId */
export interface EventProofId extends u64 {}

/** @name ExtrinsicSignature */
export interface ExtrinsicSignature extends EthereumSignature {}

/** @name VersionedEventProof */
export interface VersionedEventProof extends Enum {
	readonly isSentinel: boolean;
	readonly isEventProof: boolean;
	readonly asEventProof: EventProof;
	readonly type: "Sentinel" | "EventProof";
}

export type PHANTOM_ETHY = "ethy";
