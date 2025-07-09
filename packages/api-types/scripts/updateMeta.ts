import fs from "fs";
import path from "path";
import { w3cwebsocket as WebSocket } from "websocket";

const getWebSocketUrl = (network: string): string => {
	switch (network) {
		case "porcini":
			return "wss://porcini.rootnet.app/ws";
		case "mainnet":
			return "wss://root.rootnet.live/ws";
		default:
			throw new Error(`Invalid network: ${network}. Use 'porcini' or 'mainnet'`);
	}
};

const main = (): void => {
	// Parse command line arguments
	const args = process.argv.slice(2);
	const networkArg = args.find((arg) => arg.startsWith("--network="));
	const network = networkArg ? networkArg.split("=")[1] : "porcini";

	console.log(`Updating metadata for network: ${network}`);

	const wsUrl = getWebSocketUrl(network);
	const ws = new WebSocket(wsUrl);

	ws.onopen = (): void => {
		ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ws.onmessage = (msg: any): void => {
		const metadata = JSON.parse(msg.data).result;
		fs.writeFileSync(path.join(__dirname, "../metadata.ts"), `export default '${metadata}'`);
		console.log(`Metadata updated successfully for ${network} network`);
		process.exit(0);
	};

	ws.onerror = (error: Error): void => {
		console.error(`WebSocket error for ${network} network:`, error);
		process.exit(1);
	};
};

main();
