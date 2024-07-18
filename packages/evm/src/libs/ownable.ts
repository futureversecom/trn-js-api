import { Contract, Provider, Signer } from "ethers";
import { OWNABLE_ABI } from "..";
import { TAddress } from "../types";

export class Ownable {
	provider: Provider | Signer;
	contractAddress: TAddress;

	constructor(provider: Provider | Signer, contractAddress: TAddress) {
		this.provider = provider;
		this.contractAddress = contractAddress;
	}

	owner = async (): Promise<TAddress> => {
		const c = new Contract(this.contractAddress, OWNABLE_ABI, this.provider);
		return c.owner();
	};

	renounceOwnership = async () => {
		const c = new Contract(this.contractAddress, OWNABLE_ABI, this.provider);
		return c.renounceOwnership();
	};
	transferOwnership = async (owner: TAddress) => {
		const c = new Contract(this.contractAddress, OWNABLE_ABI, this.provider);
		return c.transferOwnership(owner);
	};
}
