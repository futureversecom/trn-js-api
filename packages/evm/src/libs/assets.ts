import { Contract, TransactionResponse } from "ethers";
import { IMultiCallResponse, TAddress, TProviderOrSigner } from "../types";
import { Ownable } from "./ownable";
import { ERC20_PRECOMPILE_ABI } from "./constants";
import { assetIdToERC20Address, ERC20_ABI, Multicall } from "..";

/** Class that allows to interact with a specific asset. */
export class Assets extends Ownable {
	provider: TProviderOrSigner;
	contractAddress: TAddress;
	contract: Contract;
	multicall: Multicall;

	/**
	 * Initialize a new asset instance.
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 * @param {TAddress} contractAddress - The contractAddress of the asset.
	 * @param {number} assetId - The assetId
	 */
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
	 * @returns {Contract} - The contractInstance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Adjusts the approval amount for spender
	 *
	 * @param {TAddress} spender - The spender's address
	 * @param {number} amount - The approval amount
	 * @return {TransactionResponse} - Transaction object
	 */
	approve = async (spender: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.approve(spender, amount);
	};

	/**
	 * Returns the allowance of the spender for owner address
	 *
	 * @param {TAddress} owner - The owner's address
	 * @param {TAddress} spender - The spender's address
	 * @returns {bigint} The allowance
	 */
	allowance = async (owner: TAddress, spender: TAddress): Promise<bigint> => {
		return this.contract.allowance(owner, spender);
	};

	/**
	 * Returns the balance for given address
	 *
	 * @param {TAddress} owner - The owner's address
	 * @returns {bigint} The balance
	 */
	balanceOf = async (owner: TAddress): Promise<bigint> => {
		return this.contract.balanceOf(owner);
	};

	/**
	 * Returns the token name
	 * @returns {string} The name.
	 */
	name = async (): Promise<string> => {
		return this.contract.name();
	};

	/**
	 * Returns the token symbol
	 * @returns {string} The symbol
	 */
	symbol = async (): Promise<string> => {
		return this.contract.symbol();
	};

	/**
	 * Returns the token decimals
	 * @returns {bigint} The decimals
	 */
	decimals = async (): Promise<bigint> => {
		return this.contract.decimals();
	};

	/**
	 * Transfer token to given address
	 *
	 * @param {TAddress} who - The address to transfer to
	 * @param {number} amount - The amount to transfer
	 * @returns {TransactionResponse} Transaction object
	 */
	transfer = async (who: TAddress, amount: number): Promise<TransactionResponse> => {
		return this.contract.transfer(who, amount);
	};

	/**
	 * Gives back balances of owners in a single aggregated query
	 * @param {TAddress[]} owners - An array of addresses to query
	 * @returns {IMultiCallResponse[]} The balances and whether each call succeeded
	 */
	getMultipleBalances = async (owners: TAddress[]): Promise<IMultiCallResponse[]> => {
		const calls = owners.map((owner: TAddress) => {
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
