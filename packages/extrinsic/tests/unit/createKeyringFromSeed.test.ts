import { Keyring } from "@polkadot/api";
import { describe, expect, test, jest } from "@jest/globals";
import { createKeyringFromSeed } from "@therootnetwork/extrinsic/utils";
import { hexToU8a } from "@polkadot/util";

const $addFromSeed = jest.fn();

class MockKeyring {
	addFromSeed(seed: Uint8Array) {
		$addFromSeed(seed);

		return {
			isKeypair: true,
		};
	}
}

jest.mock("@polkadot/api", () => ({
	__esModule: true,
	Keyring: jest.fn(() => new MockKeyring()),
}));

describe("createKeyringFromSeed", () => {
	test("it calls Keyring constructor and `addFromSeed` with expected values", () => {
		const keypair = createKeyringFromSeed("0x0");

		expect(Keyring).toBeCalledWith({ type: "ethereum" });

		expect($addFromSeed).toBeCalledWith(hexToU8a("0x0"));

		expect(keypair).toEqual({
			isKeypair: true,
		});
	});
});
