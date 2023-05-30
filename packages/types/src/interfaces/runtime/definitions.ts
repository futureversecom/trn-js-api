import definitions from "@polkadot/types/interfaces/runtime/definitions";
import type { Definitions } from "@polkadot/types/types";
import runtime from "@therootnetwork/type-definitions/runtime";

export default {
	rpc: {},
	types: {
		...definitions.types,
		...runtime.types,
	},
} as Definitions;
