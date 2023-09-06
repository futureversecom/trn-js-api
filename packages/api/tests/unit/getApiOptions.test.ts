import { describe, expect, test } from "@jest/globals";
import { getApiOptions } from "@therootnetwork/api/libs/getApiOptions";

describe("getApiOptions", () => {
	test("returns expected options", () => {
		const options = getApiOptions();
		expect(options).toMatchSnapshot();
	});
});
