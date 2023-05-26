// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U8, U8aFixed, u64 } from '@polkadot/types-codec';
import type { H256 } from '@therootnetwork/types/interfaces/runtime';

/** @name EthereumSignature */
export interface EthereumSignature extends Struct {
  readonly r: H256;
  readonly s: H256;
  readonly v: U8;
}

/** @name EthyEventId */
export interface EthyEventId extends u64 {}

/** @name EthyId */
export interface EthyId extends U8aFixed {}

/** @name ExtrinsicSignature */
export interface ExtrinsicSignature extends EthereumSignature {}

/** @name VersionedEventProof */
export interface VersionedEventProof extends Enum {
  readonly isSentinel: boolean;
  readonly isEventProof: boolean;
  readonly asEventProof: EventProof;
  readonly type: 'Sentinel' | 'EventProof';
}

export type PHANTOM_ETHY = 'ethy';
