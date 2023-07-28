# @therootnetwork/evm

## Getting Started

- Install dependencies

```bash
yarn add @therootnetwork/evm
```

- Import and utilize what you need

```typescript
import {
	collectionIdToERC721Address,
	ERC721_PRECOMPILE_ABI,
	getPublicProviderUrl,
} from "@therootnetwork/evm";
import { Contract, getDefaultProvider } from "ethers";

async function main() {
	const collectionAddress = collectionIdToERC721Address(1);
	const provider = getDefaultProvider(getPublicProviderUrl("porcini"));
	const contract = new Contract(collectionAddress, ERC721_PRECOMPILE_ABI, provider);

	// use contract instance
}

main();
```
