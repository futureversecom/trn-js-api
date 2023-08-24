# @therootnetwork/api-types

A utility package that supplements `@therootnetwork/api`, and makes Root Network specific types available from `@polkadot/{api, types}/augment`.

## Install

```bash
yarn add -D @therootnetwork/api-types
```

## Usage

- Create an API instance, and import `@therootnetwork/api-types`

```typescript
import "@therootnetwork/api-types";
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";

const api = await ApiPromise.create({
	...getApiOptions(),
	...getPublicProvider("root"),
});
```

- You will now have autocompletion on all modules e.g. `api.query...`
- To import the types separately, you can install "@polkadot/types"

```typescript
import type { PalletAssetsAssetAccount } from "@polkadot/types/lookup";
```

## Update metadata & types

1. Add new modules to interfaces/update existing definitions to include additional type stubs and RPC methods.
2. Run the following

```bash
pnpm --filter=@therootnetwork/api-types upd:meta
pnpm --filter-@therootnetwork/api-types gen
```
