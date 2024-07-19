import { Contract, Interface } from "ethers";
import { MULTICALL3_ABI, MULTICALL3_ADDRESS } from "./constants";
import { IMultiCall, IMultiCallResponse, TProviderOrSigner } from "../types";

/** Class that allows to use Multicall. */
export class Multicall {
	provider: TProviderOrSigner;
	contract: Contract;

	/**
	 * Initialize a new Multicall instance
	 * @param {TProviderOrSigner} provider - An ethers provider.
	 */
	constructor(provider: TProviderOrSigner) {
		this.provider = provider;
		this.contract = new Contract(MULTICALL3_ADDRESS, MULTICALL3_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract(): Contract {
		return this.contract;
	}

	/**
	 * Initialize a new Multicall instance
	 * @param {IMultiCall[]} calls - Multicall calldata.
	 * @param {boolean} allowFailure - Whether all calls have to succeed
	 */
	calls = async (calls: IMultiCall[], allowFailure?: boolean): Promise<IMultiCallResponse[]> => {
		const data = await this.contract.aggregate3.staticCall(
			calls.map(({ target, functionName, args, abi }: IMultiCall) => {
				const iface = new Interface(abi);
				return {
					target,
					allowFailure: allowFailure ? true : false,
					callData: iface.encodeFunctionData(functionName, args),
				};
			})
		);

		const formattedData = data.map((item: [boolean, any], idx: number) => {
			const iface = new Interface(calls[idx].abi);
			const functionName = calls[idx].functionName;
			const result = iface.decodeFunctionResult(functionName, item[1]);
			return {
				success: item[0],
				result: result?.length === 1 ? result[0] : result,
			};
		});

		return formattedData;
	};
}
