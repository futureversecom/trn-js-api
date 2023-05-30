import type { ApiOptions } from "@polkadot/api/types";
import type { RegistryTypes } from "@polkadot/types/types";
import {
	lookupTypes as rootnetLookupTypes,
	typesBundle as rootnetTypesBundle,
} from "@therootnetwork/types";

// import { runtime as rootnetRuntime } from './runtime';

export const options = ({
	rpc = {},
	runtime = {},
	signedExtensions,
	types = {},
	typesAlias = {},
	typesBundle = {},
	...otherOptions
}: ApiOptions = {}): ApiOptions => ({
	types: {
		...(rootnetLookupTypes as unknown as RegistryTypes), // TODO: RegistryTypes's own issue?
		...types,
	},
	rpc: {
		...rpc,
	},
	typesAlias: {
		...typesAlias,
	},
	typesBundle: {
		...typesBundle,
		spec: {
			...typesBundle.spec,
			rootnet: {
				...rootnetTypesBundle?.spec?.rootnet,
				...typesBundle?.spec?.rootnet,
			},
			porcini: {
				...rootnetTypesBundle?.spec?.porcini,
				...typesBundle?.spec?.porcini,
			},
		},
	},
	...otherOptions,
});
