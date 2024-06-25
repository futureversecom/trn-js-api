import { describe, expect, test } from "@jest/globals";
import { getPublicProviderUrl } from "@therootnetwork/evm/libs/getPublicProviderUrl";

describe("getPublicProviderUrl", () => {
	test("returns provider url for `root` network", async () => {
		expect(getPublicProviderUrl("root")).toBe("https://root.rootnet.live/archive");
	});

	test("returns provider url for `porcini` network", async () => {
		expect(getPublicProviderUrl("porcini")).toBe("https://porcini.rootnet.app/archive");
	});

	test("returns provider url for `sprout-1` network", async () => {
		expect(getPublicProviderUrl("sprout-1")).toBe("https://porcini.devnet.rootnet.app/archive");
	});

	test("returns provider url for `sprout-2` network", async () => {
		expect(getPublicProviderUrl("sprout-2")).toBe("https://root.devnet.rootnet.app/archive");
	});
});
