// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types-codec';
import type { Balance, H160, H256 } from '@therootnetwork/types/interfaces/runtime';

/** @name XRPLTxData */
export interface XRPLTxData extends Enum {
  readonly isPayment: boolean;
  readonly asPayment: {
    readonly amount: Balance;
    readonly destination: H160;
  } & Struct;
  readonly isCurrencyPayment: boolean;
  readonly asCurrencyPayment: {
    readonly amount: Balance;
    readonly address: H160;
    readonly currencyId: H256;
  } & Struct;
  readonly type: 'Payment' | 'CurrencyPayment';
}

export type PHANTOM_XRPLBRIDGE = 'xrplBridge';
