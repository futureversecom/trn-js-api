import fs from "fs";
import path from "path";
import { w3cwebsocket as WebSocket } from "websocket";

const main = (): void => {
	const ws = new WebSocket("wss://porcini.rootnet.app/ws");

	ws.onopen = (): void => {
		ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ws.onmessage = (msg: any): void => {
		const metadata = JSON.parse(msg.data).result;
		fs.writeFileSync(path.join(__dirname, "../metadata.ts"), `export default '${metadata}'`);
		process.exit(0);
	};
};

main();
