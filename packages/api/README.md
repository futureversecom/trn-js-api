# @therootnetwork/api

A utility package that complements the `@polkadot/api` to connect and interact with the Root Network node.

## Install

```bash
yarn add @polkadot/api @therootnetwork/api
yarn add -D @therootnetwork/api-types # optional, for Typescript support
```

## Usage

- Create an API instance

```typescript
import "@therootnetwork/api-types"; // optional, for Typescript support
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";

const api = await ApiPromise.create({
	...getApiOptions(),
	...getPublicProvider("root"),
});
```

- Use `api` instance to interact with node

```typescript
// query and display account data
const data = await api.query.system.account("0xE04CC55ebEE1cBCE552f250e85c57B70B2E2625b");
console.log(data.toHuman());
```

## API

### `function getApiOptions()`

Returns an `ApiOptions` object that contains necessary types, rpc methods to connect the Root Network

### `function getPublicProvider(network: NetworkName, useWsProvider?: boolean)`

Returns a `provider` instance of either `WsProvider` or `HttpProvider` that connects to TRN mainnet `"root"` or testnet `"porcini"`
