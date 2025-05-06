// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, Text, Vec } from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";

/** @name DataPermission */
export interface DataPermission extends Text {}

/** @name GetPermissionsResult */
export interface GetPermissionsResult extends Struct {
	readonly permissions: Vec<ITuple<[Text, Vec<DataPermission>]>>;
	readonly permission_reference: Option<PermissionReferenceRecord>;
}

/** @name PermissionReferenceRecord */
export interface PermissionReferenceRecord extends Struct {
	readonly permission_record_id: Text;
	readonly resolvers: Vec<ITuple<[Text, Vec<Text>]>>;
}

export type PHANTOM_SYLODATAPERMISSIONS = "syloDataPermissions";
