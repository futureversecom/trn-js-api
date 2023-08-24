// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, Vec } from "@polkadot/types-codec";
import type { ValidatorSetId } from "@polkadot/types/interfaces/beefy";
import type { EventProofId } from "@therootnetwork/api-types/interfaces/ethy";
import type { Balance, H160, H256 } from "@therootnetwork/api-types/interfaces/runtime";

/** @name XrplEventProofResponse */
export interface XrplEventProofResponse extends Struct {
	readonly event_id: EventProofId;
	readonly signatures: Vec<Bytes>;
	readonly validators: Vec<Bytes>;
	readonly validator_set_id: ValidatorSetId;
	readonly block: H256;
	readonly tag: Option<Bytes>;
}

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
	readonly type: "Payment" | "CurrencyPayment";
}

export type PHANTOM_XRPLBRIDGE = "xrplBridge";
