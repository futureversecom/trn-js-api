/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from "@polkadot/types/types";

import dex from "./dex";
import ethWallet from "./ethWallet";
import ethy from "./ethy";
import nft from "./nft";
import runtime from "./runtime";
import porciniVersioned from "./spec/porcini";
import rootnetVersioned from "./spec/rootnet";
import xrplBridge from "./xrplBridge";

const rootDefs = {
	dex,
	ethy,
	ethWallet,
	xrplBridge,
	nft,
	runtime,
};

function getBundle(versioned: OverrideVersionedType[]) {
	return {
		instances: { council: ["generalCouncil"] },
		types: [...versioned].map((version) => {
			return {
				minmax: version.minmax,
				types: version.types,
			};
		}),
	};
}

export const typesBundle = {
	spec: {
		root: getBundle(rootnetVersioned),
		porcini: getBundle(porciniVersioned),
	},
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
	spec: {
		root: getBundle(rootnetVersioned),
		porcini: getBundle(porciniVersioned),
	},
};
