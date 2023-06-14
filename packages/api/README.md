# @therootnetwork/api

## Getting Started

- Install dependencies

```bash
yarn add @polkadot/api @therootnetwork/api
```

- Create API instance

```typescript
import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";

async function main() {
  const provider = getPublicProvider("root");
  const api = await ApiPromise.create({
    ...getApiOptions(),
    ...getPublicProvider("root"),
  });

  // use the api
}

main();
```
