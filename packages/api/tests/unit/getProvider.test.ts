import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import {
	getLocalProvider,
	getProvider,
	getPublicProvider,
} from "@therootnetwork/api/libs/getProvider";

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

	test("creates an instance of WsProvider (default full node) for `root` network", async () => {
		getPublicProvider("root");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://root.rootnet.live/ws");
	});

	test("creates an instance of HttpProvider for `root` network", async () => {
		getPublicProvider("root", false);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://root.rootnet.live/");
	});

	test("creates an instance of WsProvider for (archive node) `root` network", async () => {
		getPublicProvider("root", true, true);
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://root.rootnet.live/archive/ws");
	});

	test("creates an instance of HttpProvider (archive node) for `root` network", async () => {
		getPublicProvider("root", false, true);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://root.rootnet.live/archive");
	});

	test("creates an instance of WsProvider for `porcini` network", async () => {
		getPublicProvider("porcini");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://porcini.rootnet.app/ws");
	});

	test("creates an instance of HttpProvider for `porcini` network", async () => {
		getPublicProvider("porcini", false);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://porcini.rootnet.app/");
	});

	test("creates an instance of WsProvider for `sprout-1` network", async () => {
		getPublicProvider("sprout-1");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://porcini.devnet.rootnet.app/ws");
	});

	test("creates an instance of HttpProvider for `sprout-1` network", async () => {
		getPublicProvider("sprout-1", false);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://porcini.devnet.rootnet.app/");
	});

	test("creates an instance of WsProvider for `sprout-2` network", async () => {
		getPublicProvider("sprout-2");
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://root.devnet.rootnet.app/ws");
	});

	test("creates an instance of HttpProvider for `sprout-2` network", async () => {
		getPublicProvider("sprout-2", false);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://root.devnet.rootnet.app/");
	});

	test("creates an instance of WsProvider (archive node) for `porcini` network", async () => {
		getPublicProvider("porcini", true, true);
		expect(WsProviderMock).toHaveBeenCalledTimes(1);
		expect(WsProviderMock.mock.calls[0][0]).toBe("wss://porcini.rootnet.app/archive/ws");
	});

	test("creates an instance of HttpProvider (archive node) for `porcini` network", async () => {
		getPublicProvider("porcini", false, true);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("https://porcini.rootnet.app/archive");
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

	test("creates an instance of HttpProvider", () => {
		getLocalProvider(false);
		expect(HttpProviderMock).toHaveBeenCalledTimes(1);
		expect(HttpProviderMock.mock.calls[0][0]).toBe("http://127.0.0.1:9933");
	});
});
