# @therootnetwork/evm

A utility package that simplifies EVM development on The Root Network.

## Install

```bash
yarn add @therootnetwork/evm
```

## Usage

- Import and utilize what you need

```typescript
import {
  collectionIdToERC721Address,
  ERC721_PRECOMPILE_ABI,
  getPublicProviderUrl,
} from "@therootnetwork/evm";
import { Contract, getDefaultProvider } from "ethers";

const collectionAddress = collectionIdToERC721Address(1);
const providerUrl = getPublicProviderUrl("porcini");
const provider = getDefaultProvider();
const contract = new Contract(collectionAddress, ERC721_PRECOMPILE_ABI, provider);
```
## API

### `function assetIdToERC20Address(assetId: string | number)`

Converts native asset id to ERC-20 contract address

### `function collectionIdToERC721Address(collectionId: string | number)`

Converts native nft collection id to ERC-721 contract address

### `function getPublicProviderUrl(network: NetworkName): HttpProviderUrl`

Returns the Public RPC URls for the corresponding `network`

## Constants

### Addresses

| Constant | Description |
| --- | --- |
| `NFT_PRECOMPILE_ADDRESS: string` | Precompile address for `nft` pallet |
| `SFT_PRECOMPILE_ADDRESS: string` | Precompile address for `sft` pallet |
| `FUTUREPASS_REGISTRAR_PRECOMPILE_ADDRESS: string` | Precompile address for `futurepass` pallet |
| `PEG_PRECOMPILE_ADDRESS: string` | Precompile address for `erc20Peg` and `nftPeg` pallets |
| `DEX_PRECOMPILE_ADDRESS: string` | Precompile address for `dex` pallet |
| `FEE_PROXY_PRECOMPILE_ADDRESS` | Precompile address for `feeProxy` pallet |

### ABIs

| Constant | Description |
| --- | --- |
| `ERC20_ABI: string[]` | ABI for the ERC-20 standard |
| `ERC721_ABI: string[]` | ABI for the ERC-721 standard |
| `ERC1155_ABI: string[]` | ABI for the ERC-1155 standard |
| `NFT_PRECOMPILE_ABI: string[]` | ABI for the `nft` pallet |
| `SFT_PRECOMPILE_ABI: string[]` | ABI for the `sft` pallet |
| `FEE_PROXY_PRECOMPILE_ABI: string[]` | ABI for `feeProxy` pallet |
| `FUTUREPASS_PRECOMPILE_ABI: string[]` | ABI for `futurepass` account |
| `FUTUREPASS_REGISTRAR_PRECOMPILE_ABI: string[]` | ABI for `futurepass` pallet |
| `DEX_PRECOMPILE_ABI: string[]` | ABI for the `dex` pallet |

> NOTE: All exported ABIs are in human-readable format