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

## TypeScript Support

See [`api-types`](https://github.com/futureversecom/trn-js-api/tree/main/packages/api-types) for more details

## API

### `function getApiOptions()`

Returns an `ApiOptions` object that contains necessary types, rpc methods to connect the Root Network

### `function getPublicProvider(network: NetworkName, useWsProvider?: boolean, useArchiveNode?: boolean)`

Returns a `provider` instance of either `WsProvider` or `HttpProvider` that connects to TRN mainnet `"root"` or testnet `"porcini"`

### `function getPublicProviderUrl(network: NetworkName, useWsProvider?: boolean, useArchiveNode?: boolean)`

Used by `getPublicProvider`, simply returns public URL for the provider

## Updating Metadata

To update the metadata for a newer version of the TRN runtime, run:

```bash
pnpm --filter=@therootnetwork/api-types update:meta
pnpm --filter=@therootnetwork/api-types generate:types
```

Then to update the test snapshot run:

```bash
pnpm test:snapshot
```
