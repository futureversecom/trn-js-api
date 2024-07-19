import { InterfaceAbi, Provider, Signer } from "ethers";

export type TAddress = `0x${string}`;
export type TTokenId = string | number | bigint;
export type TProviderOrSigner = Signer | Provider;
export enum ProxyType {
	NoPermission = 0,
	Any = 1,
}

export interface IMultiCall {
	target: TAddress;
	abi: InterfaceAbi;
	functionName: string;
	args?: ReadonlyArray<any>;
}
