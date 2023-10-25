# @therootnetwork/api-types

A type package that supplements `@therootnetwork/api`, and makes The Root Network specific types available from `@polkadot/{api,types}/lookup`.

## Install

```bash
yarn add -D @therootnetwork/api-types
```

## Usage

- Add import `@therootnetwork/api-types` at the top to augument The Root Network specific types to the standard `@polkadot/types`

```typescript
import "@therootnetwork/api-types";
// after import, TRN types are automatically augmented to the standard `@polkadot/types` package
import { type Option } from "@polkadot/types";
import { type PalletNftCollectionInformation } from "@polkadot/types/lookup";

import { ApiPromise } from "@polkadot/api";
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";

const api = await ApiPromise.create({
  ...getApiOptions(),
  ...getPublicProvider("root"),
});

const info = (await api.query.nft.collectionInfo(1124)) as Option<PalletNftCollectionInformation>;
```
