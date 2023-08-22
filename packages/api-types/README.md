# @therootnetwork/api-types

A utility package that supplements `@therootnetwork/api`, and makes Root Network specific types available from `@polkadot/{api, types}/augment`.

## Install

```bash
yarn add @therootnetwork/api-types
```

## Update metadata & types

1. Add new modules to interfaces/update existing definitions to include additional type stubs and RPC methods.
2. Run the following

```bash
pnpm --filter=@therootnetwork/api-types upd:meta
pnpm --filter-@therootnetwork/api-types gen
```
