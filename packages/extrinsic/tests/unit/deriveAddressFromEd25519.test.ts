import { describe, expect, test } from "@jest/globals";
import { deriveAddressPair } from "@therootnetwork/extrinsic/utils";
import { derive } from "xrpl-accountlib";

describe("deriveAddressPair", () => {
	test("it derives an address pair from a non-Ed25519 key", () => {
		const privateKey = "0xd04b9d7e5bbab8ed66f1fea4370afc9c20142539555472a89b0968c3844ba51f";

		const result = deriveAddressPair(privateKey);

		expect(result).toEqual([
			"0x370aFC9c20142539555472a89b0968c3844bA51F",
			"rLj9HcrmUTeTrpXEHJiU6FLoxTDVe35WGY",
		]);
	});
	test("it derives an address pair from an Ed25519 key", () => {
		const importedAccount = derive.familySeed("sEdS4rAgVysUtD5Zmm9F8i8uJBGik4K");
		const signer = derive.privatekey(importedAccount.keypair.privateKey as string);
		const privateKey = signer.keypair.publicKey as string;

		expect(privateKey.slice(0, 2)).toBe("ED");

		const result = deriveAddressPair(privateKey);

		expect(result).toEqual([
			"0x83a6Dd17b5db4F87b9d877A38E172F3Bff0CdE46",
			"rHTfx7p4ge8CfDhyoczpSwc84LWfiK3dhN",
		]);
	});
	test("it correctly handles key of `0x${string}`", () => {
		const importedAccount = derive.familySeed("sEdS4rAgVysUtD5Zmm9F8i8uJBGik4K");
		const publicKey = importedAccount.keypair.publicKey as string;

		expect(publicKey.slice(0, 2)).toBe("ED");

		const result = deriveAddressPair(`0x${publicKey}`);

		expect(result).toEqual([
			"0x83a6Dd17b5db4F87b9d877A38E172F3Bff0CdE46",
			"rHTfx7p4ge8CfDhyoczpSwc84LWfiK3dhN",
		]);
	});
});
