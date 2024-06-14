# @therootnetwork/extrinsic

A utility package that makes submitting extrinsic on the Root Network as easy as 🥧

## Install

```bash
yarn add @polkadot/api @therootnetwork/api @therootnetwork/extrinsic
yarn add -D @therootnetwork/api-types # optional, for Typescript support
```

## Usage

```typescript
import "@therootnetwork/api-types"; // optional, for Typescript support
import { getApiOptions, getPublicProvider } from "@therootnetwork/api";
import { futurepassWrapper, feeProxyWrapper, nativeWalletSigner } from "@therootnetwork/api";

const api = await ApiPromise.create({
  ...getApiOptions(),
  ...getPublicProvider("root"),
});

const senderAddress = "0x25451A4de12dcCc2D166922fA938E900fCc4ED24";
const ROOT_ASSET_ID = 1;

const { estimate, signAndSend } = createDispatcher(
  api,
  senderAddress,
  [futurepassWrapper(), feeProxyWrapper(ROOT_ASSET_ID)],
  nativeWalletSigner(process.env.SENDER_PRIVATE_KEY)
);

const extrinsic = api.tx.system.remark("🥧");

// estimate an extrinsic in any token
const fee = await estimate(extrinsic, ROOT_ASSET_ID);

// send an extrinsic that pays gas in ROOT token and via FuturePass account
const result = await signAndSend();
```
