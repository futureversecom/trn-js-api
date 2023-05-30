import { typesBundleForPolkadot } from "@therootnetwork/type-definitions";
import fs from "fs";

fs.writeFileSync(
	"packages/type-definitions/src/json/typesBundle.json",
	JSON.stringify(typesBundleForPolkadot, null, 4)
);
