import { describe, expect, test } from "@jest/globals";
import { getApiOptions } from "@trnja/api/libs/getApiOptions";

describe("getApiOptions", () => {
  test("returns expected options", () => {
    const options = getApiOptions();
    expect(Object.keys(options)).toEqual(["types", "rpc"]);
  });
});
