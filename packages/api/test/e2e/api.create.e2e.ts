import { ApiPromise, WsProvider } from "@polkadot/api";
import { options } from "@therootnetwork/api";

describe("e2e api create", () => {
	it("Find lock balance for rootnet validator", async () => {
		const providerUrl = "wss://root.rootnet.live/ws";
		const provider = new WsProvider(providerUrl);
		console.log("providerUrl", providerUrl);
		const api = new ApiPromise(options({ provider }));
		await api.isReady;
		const validator = "0x0Fa787f51333D9cA66a4A6563b56EececDA49a06";
		const lockBalance = await api.query.balances.locks(validator);
		expect(lockBalance.toJSON()[0].amount).toBeGreaterThanOrEqual(0);
		await api.disconnect();
	});

	// it('Should get rejected if the connection fails', async () => {
	//   const incorrectEndPoint = 'wss://unknow.chain.io/ws';
	//   const autoConnect = false;
	//   const provider = new WsProvider(incorrectEndPoint, autoConnect);
	//   const api = new ApiPromise(options({provider: provider}));
	//   await expect(api.isReady).rejects.toThrow('Timed out in 10000 ms.');
	// });

	it("subscription test", async () => {
		const providerUrl = "wss://root.rootnet.live/ws";
		const provider = new WsProvider(providerUrl);
		console.log("providerUrl", providerUrl);
		const api = new ApiPromise(options({ provider }));
		await api.isReady;
		const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
			console.log(`Chain is at block: #${header.number}`);
			expect(header.number).toBeDefined();
			unsubscribe();
			api.disconnect();
		});
	});
});
