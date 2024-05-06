import { describe, expect, test } from "@jest/globals";
import { deriveAddressFromEd25519 } from "@therootnetwork/extrinsic/utils";
import { derive } from "xrpl-accountlib";

describe("deriveAddressFromEd25519", () => {
	test("it derives a checksum address from an Ed25519 key", () => {
		const importedAccount = derive.familySeed("sEdS4rAgVysUtD5Zmm9F8i8uJBGik4K");
		const privateKey = importedAccount.keypair.privateKey as string;

		expect(privateKey.slice(0, 2)).toBe("ED");

		const expected = deriveAddressFromEd25519(privateKey);

		expect(expected).toBe("0x99494850300b9C524e0747a253b769dBaD9f5191");
	});
});
