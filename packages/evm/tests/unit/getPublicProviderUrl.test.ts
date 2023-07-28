import { describe, expect, test } from "@jest/globals";
import { getPublicProviderUrl } from "@trnja/evm/libs/getPublicProviderUrl";

describe("getPublicProviderUrl", () => {
	test("returns provider url for `root` network", async () => {
		expect(getPublicProviderUrl("root")).toBe("https://root.rootnet.live/archive");
	});

	test("returns provider url for `porcini` network", async () => {
		expect(getPublicProviderUrl("porcini")).toBe("https://porcini.rootnet.app/archive");
	});
});
