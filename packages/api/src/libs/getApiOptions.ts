import { ApiOptions } from "@polkadot/api/types";

import { lookupTypes } from "@therootnetwork/api-types/index";
import * as definitions from "@therootnetwork/api-types/interfaces/definitions";

type Definitions = Record<string, { rpc?: object; types: object }>;

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
	return Object.keys(definitions).reduce((res, key) => {
		const rpc = (definitions as Definitions)[key].rpc;
		if (!rpc || !Object.keys(rpc).length) return res;
		return { ...res, [key]: (definitions as Definitions)[key].rpc };
	}, {});
}
