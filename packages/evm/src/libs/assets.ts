import { Contract, TransactionResponse } from "ethers";
import { TAddress, TProviderOrSigner } from "../types";
import { Ownable } from "./ownable";
import { ERC20_PRECOMPILE_ABI } from "./constants";
import { assetIdToERC20Address, ERC20_ABI, Multicall } from "..";

export class Assets extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;
	multicall: Multicall;

	constructor(provider: TProviderOrSigner, contractAddress?: TAddress, assetId?: number) {
		if (!contractAddress && !assetId) {
			throw new Error("Either contractAddress or collectionId should be passed");
		}

		if (assetId) {
			contractAddress = assetIdToERC20Address(assetId);
		}

		if (!contractAddress) throw new Error("No contractAddress detected to initialize");

		super(provider, contractAddress);
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.contract = new Contract(this.contractAddress, ERC20_PRECOMPILE_ABI, this.provider);
		this.multicall = new Multicall(this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	/**
	 * Adjusts the approval amount for spender
	 *
	 * @param spender - The spender's address
	 * @param amount - The approval amount
	 */
	approve = async (spender: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.approve(spender, amount);
	};

	/**
	 * Returns the allowance of the spender for owner address
	 *
	 * @param owner - The owner's address
	 * @param spender - The spender's address
	 */
	allowance = async (owner: TAddress, spender: TAddress): Promise<bigint> => {
		return this.contract.allowance(owner, spender);
	};

	/**
	 * Returns the balance for given address
	 *
	 * @param owner - The owner's address
	 */
	balanceOf = async (owner: TAddress): Promise<bigint> => {
		return this.contract.balanceOf(owner);
	};

	/**
	 * Returns the token name
	 */
	name = async (): Promise<string> => {
		return this.contract.name();
	};

	/**
	 * Returns the token symbol
	 */
	symbol = async (): Promise<string> => {
		return this.contract.symbol();
	};

	/**
	 * Returns the token decimals
	 */
	decimals = async (): Promise<bigint> => {
		return this.contract.decimals();
	};

	/**
	 * Transfer token to given address
	 *
	 * @param who - The address to transfer to
	 * @param amount - The amount to transfer
	 */
	transfer = async (who: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.transfer(who, amount);
	};

	/**
	 * Gives back balances of owners in a single aggregated query
	 */
	getMultipleBalances = async (owners: TAddress[]) => {
		const calls = owners.map((owner) => {
			return {
				target: this.contractAddress,
				abi: ERC20_ABI,
				functionName: "balanceOf",
				args: [owner],
			};
		});

		return this.multicall.calls(calls);
	};
}
