import { Contract, getBytes, Provider, Signer } from "ethers";
import { ERC721_ABI } from "..";
import { TAddress, TTokenId } from "../types";
import { Ownable } from "./ownable";

export class Nft extends Ownable {
	provider: Provider | Signer;
	contractAddress: TAddress;

	constructor(provider: Provider | Signer, contractAddress: TAddress) {
		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
	}

	ownerOf = async (tokenId: TTokenId): Promise<TAddress> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.ownerOf(tokenId);
	};

	balanceOf = async (owner: TAddress): Promise<number> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.balanceOf(owner);
	};

	name = async (): Promise<string> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.name();
	};

	symbol = async (): Promise<string> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.symbol();
	};

	tokenURI = async (tokenId: TTokenId): Promise<string> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.tokenURI(tokenId);
	};

	isApprovedForAll = async (owner: TAddress, operator: TAddress): Promise<string> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.isApprovedForAll(owner, operator);
	};

	totalSupply = async (): Promise<bigint> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.totalSupply();
	};

	ownedTokens = async (
		who: TAddress,
		limit: number,
		cursor: number
	): Promise<[bigint, bigint, bigint[]]> => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.ownedTokens(who, limit, cursor);
	};

	safeTransferFrom = async (from: TAddress, to: TAddress, tokenId: TTokenId) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.safeTransferFrom(from, to, tokenId);
	};

	transferFrom = async (from: TAddress, to: TAddress, tokenId: TTokenId) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.transferFrom(from, to, tokenId);
	};

	approve = async (to: TAddress, tokenId: TTokenId) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.approve(to, tokenId);
	};

	getApproved = async (tokenId: TTokenId) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.getApproved(tokenId);
	};

	setApprovalForAll = async (operator: TAddress, approved: boolean) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.setApprovalForAll(operator, approved);
	};

	mint = async (owner: TAddress, quantity: number) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.mint(owner, quantity);
	};

	setMaxSupply = async (maxSupply: number) => {
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.setMaxSupply(maxSupply);
	};

	setBaseURI = async (baseURI: string) => {
		const cb = getBytes(baseURI);
		const c = new Contract(this.contractAddress, ERC721_ABI, this.provider);
		return c.setBaseURI(cb);
	};
}
