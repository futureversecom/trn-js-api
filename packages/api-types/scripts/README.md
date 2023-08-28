## Update metadata & types

1. Add new modules to interfaces/update existing definitions to include additional type stubs and RPC methods.
2. Run the following

```bash
pnpm --filter=@therootnetwork/api-types upd:meta
pnpm --filter-@therootnetwork/api-types gen
```
