import { Contract, Provider, Signer } from "ethers";
import { ERC721_ABI } from "..";

type TAddress = `0x${string}`;
type TTokenId = string | number | bigint;

export class Nft {
	provider: Provider | Signer;

	constructor(provider: Provider | Signer) {
		this.provider = provider;
	}

	ownerOf = async (contractAddress: TAddress, tokenId: TTokenId): Promise<TAddress> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.ownerOf(tokenId);
	};

	balanceOf = async (contractAddress: TAddress, owner: TAddress): Promise<number> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.balanceOf(owner);
	};

	name = async (contractAddress: TAddress): Promise<string> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.name();
	};

	symbol = async (contractAddress: TAddress): Promise<string> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.symbol();
	};

	tokenURI = async (contractAddress: TAddress, tokenId: TTokenId): Promise<string> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.tokenURI(tokenId);
	};

	isApprovedForAll = async (
		contractAddress: TAddress,
		owner: TAddress,
		operator: TAddress
	): Promise<string> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.isApprovedForAll(owner, operator);
	};

	ownedTokens = async (
		contractAddress: TAddress,
		who: TAddress,
		limit: number,
		cursor: number
	): Promise<[bigint, bigint, bigint[]]> => {
		const c = new Contract(contractAddress, ERC721_ABI, this.provider);
		return await c.ownedTokens(who, limit, cursor);
	};
}
