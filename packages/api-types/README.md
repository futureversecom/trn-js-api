# @therootnetwork/api-types

A utility package that supplements `@therootnetwork/api`, and makes Root Network specific types available from `@polkadot/{api, types}/augment`.

## Install

```bash
yarn add @therootnetwork/api-types
```

## Update metadata & types

1. Add new modules to interfaces/update existing definitions to include additional type stubs and RPC methods.
2. Start a node with the target runtime
3. Run the following

```bash
# Get metadata from local rootnet node running target version
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933 > rootnet.json

pnpm build
```
