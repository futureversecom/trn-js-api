import type { ApiOptions } from "@polkadot/api/types";
import { rpcOptions } from "./rpcOptions";
import { typesOptions } from "./typesOptions";

export const options: ApiOptions = {
	types: {
		...typesOptions,
	},
	rpc: {
		...rpcOptions,
	},
};
