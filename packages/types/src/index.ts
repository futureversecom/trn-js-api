import "@polkadot/types/lookup";
import type {
	DefinitionRpc,
	DefinitionRpcSub,
	OverrideBundleType,
	OverrideModuleType,
	RegistryTypes,
} from "@polkadot/types/types";
import { typesBundle as rootnetTypesBundle } from "@therootnetwork/type-definitions";

import "./augment/api";
import "./lookup/rootnet";

export * as lookupTypes from "./lookup/rootnet";

export const typesBundle = rootnetTypesBundle as unknown as OverrideBundleType;
