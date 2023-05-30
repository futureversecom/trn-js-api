# @therootnetwork/api

Contains necessary options to create a polkadot.js API instance

- Create API instance

```ts
import { options } from "@acala-network/api";
import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";

async function main() {
	const provider = new WsProvider(providerUrl);
	api = new ApiPromise(options({ provider }));
	await api.isReady;

	// use api
}

main();
```

const provider = new WsProvider(providerUrl);
console.log('providerUrl', providerUrl);
api = new ApiPromise(options({provider}));
await api.isReady;
