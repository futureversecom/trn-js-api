/* eslint-disable @typescript-eslint/no-explicit-any  */
import {
	generateDefaultConsts,
	generateDefaultErrors,
	generateDefaultEvents,
	generateDefaultQuery,
	generateDefaultRpc,
	generateDefaultRuntime,
	generateDefaultTx,
} from "@polkadot/typegen/generate";
import { generateInterfaceTypes } from "@polkadot/typegen/generate/interfaceRegistry";
import { generateTsDef } from "@polkadot/typegen/generate/tsDef";
import { assertDir, HEADER, writeFile } from "@polkadot/typegen/util";
import fs from "fs";
import path from "path";

import * as substrateDefinitions from "@polkadot/types/interfaces/definitions";
import metadata from "../metadata";
import * as rootnetDefinitions from "../src/interfaces/definitions";
import { generateDefaultLookup } from "./generateLookup";

export function main() {
	// generate
	console.log("------ start -------");

	const registryPath = assertDir(path.join(__dirname, "../src/registry"));
	const augmentPath = assertDir(path.join(__dirname, "../src/augment"));
	const lookupPath = assertDir(path.join(__dirname, "../src/lookup"));
	const inputPath = assertDir(path.join(__dirname, "../src/interfaces"));
	const pkg = "@therootnetwork/api-types/interfaces";

	const userDefs: Record<string, any> = {
		...rootnetDefinitions,
	};

	const userKeys = Object.keys(userDefs);
	const filteredBase = Object.entries(substrateDefinitions as Record<string, unknown>)
		.filter(([key]) => {
			if (userKeys.includes(key)) {
				console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);

				return false;
			}

			return true;
		})
		.reduce((defs: Record<string, any>, [key, value]) => {
			defs[key] = value;

			return defs;
		}, {});

	const allDefs: Record<string, any> = {
		"@polkadot/types/interfaces": filteredBase,
		// The order of the keys will affect the generated file.
		[pkg]: userDefs,
	};

	const customLookupDefinitions = {
		rpc: {},
		// eslint-disable-next-line  @typescript-eslint/no-var-requires
		types: require("../src/lookup/rootnet.ts").default,
	};

	generateTsDef(allDefs, inputPath, pkg);
	generateInterfaceTypes(allDefs, path.join(registryPath, "interfaces.ts"));
	generateDefaultLookup(lookupPath, metadata);
	generateDefaultConsts(
		path.join(augmentPath, "api-consts.ts"),
		metadata,
		allDefs,
		false,
		customLookupDefinitions
	);
	generateDefaultErrors(path.join(augmentPath, "api-errors.ts"), metadata, allDefs, false);
	generateDefaultEvents(
		path.join(augmentPath, "api-events.ts"),
		metadata,
		allDefs,
		false,
		customLookupDefinitions
	);
	generateDefaultQuery(
		path.join(augmentPath, "api-query.ts"),
		metadata,
		allDefs,
		false,
		customLookupDefinitions
	);

	// TODO: should check why import an unused type
	writeFile(path.join(augmentPath, "api-query.ts"), () => {
		const content = fs.readFileSync(path.join(augmentPath, "api-query.ts"), {
			encoding: "utf-8",
		});
		return content.replace("OrmlUtilitiesOrderedSet,", "");
	});

	generateDefaultRpc(path.join(augmentPath, "api-rpc.ts"), allDefs);
	generateDefaultTx(
		path.join(augmentPath, "api-tx.ts"),
		metadata,
		allDefs,
		false,
		customLookupDefinitions
	);

	generateDefaultRuntime(
		path.join(augmentPath, "api-runtime.ts"),
		metadata,
		allDefs,
		false,
		customLookupDefinitions
	);
	writeFile(path.join(augmentPath, "api.ts"), (): string =>
		[
			HEADER("chain"),
			...[
				...["consts", "errors", "events", "query", "tx", "rpc", "runtime"]
					.filter((key) => !!key)
					.map((key) => `./api-${key}`),
			].map((path) => `import '${path}';\n`),
		].join("")
	);
}

main();
