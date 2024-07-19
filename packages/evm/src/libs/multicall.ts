import { Contract, Interface } from "ethers";
import { MULTICALL3_ABI, MULTICALL3_ADDRESS } from "./constants";
import { IMultiCall, TProviderOrSigner } from "../types";

export class Multicall {
	provider: TProviderOrSigner;
	contract: Contract;

	constructor(provider: TProviderOrSigner) {
		this.provider = provider;
		this.contract = new Contract(MULTICALL3_ADDRESS, MULTICALL3_ABI, this.provider);
	}

	/**
	 * Returns the contract instance
	 */
	getContract() {
		return this.contract;
	}

	calls = async (
		calls: IMultiCall[],
		allowFailure?: boolean
	): Promise<{ success: boolean; result: any }[]> => {
		const data = await this.contract.aggregate3.staticCall(
			calls.map(({ target, functionName, args, abi }) => {
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
