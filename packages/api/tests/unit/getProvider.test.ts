import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { getLocalProvider, getProvider, getPublicProvider } from "@trnja/api/libs/getProvider";

const HttpProviderMock = jest.fn();
const WsProviderMock = jest.fn();

jest.mock("@polkadot/api", () => {
	return {
		__esModule: true,
		get HttpProvider() {
			return HttpProviderMock;
		},
		get WsProvider() {
			return WsProviderMock;
		},
	};
});

describe("getProvider", () => {
	beforeEach(() => {
		HttpProviderMock.mockClear();
		WsProviderMock.mockClear();
	});

	test("creates an instance of WsProvider", () => {
		const { provider } = getProvider("ws://localhost");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("ws://localhost");
		expect(provider).toBeTruthy();
	});

	test("creates an instance of HttpProvider", async () => {
		const { provider } = getProvider("http://localhost");
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("http://localhost");
		expect(provider).toBeTruthy();
	});

	test("throws error if `url` parameter is unrecognizable", () => {
		expect(() => getProvider("//localhost" as unknown as `http${string}`)).toThrow();
	});
});

describe("getPublicProvider", () => {
	beforeEach(() => {
		HttpProviderMock.mockClear();
		WsProviderMock.mockClear();
	});

	test("creates an instance of WsProvider for `root` network", async () => {
		getPublicProvider("root");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://root.rootnet.live/ws");
	});

	test("creates an instance of WsProvider for `porcini` network", async () => {
		getPublicProvider("porcini");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://porcini.rootnet.app/ws");
	});

	test("throws error if `network` parameter is unrecognizable", async () => {
		expect(() => getPublicProvider("foo" as unknown as `root`)).toThrow();
	});
});

describe("getLocalProvider", () => {
	test("creates an instance of WsProvider", () => {
		getLocalProvider();
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("ws://127.0.0.1:9944");
	});
});
