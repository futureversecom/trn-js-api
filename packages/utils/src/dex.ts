import {Api} from '@polkadot/api';
import {QueryableStorageFunction, SubmittableExtrinsic} from '@polkadot/types';
import {AssetId, Balance, Hash} from "@therootnetwork/types/interfaces";

export class Dex {
    static async create(api: Api): Promise<Dex> {
        if (api.dex) {
            return api.dex;
        }
        await (api as any).loadMeta();
        return new Dex(api);
    }

    private _api: Api;

    constructor(api: Api) {
        this._api = api;
    }

    get api(): Api {
        return this._api;
    }

    /**
     * Add liquidity an asset
     * @param
     */
    addLiquidity(assetIdA: AssetId, assetIdB: AssetId, amountADesired: Balance, amountBDesired: Balance, amountAMin: Balance, amountBMin: Balance, minShareIncrement: Balance ): SubmittableExtrinsic<Promise<Hash>, Promise<() => any>> {
        return this.api.tx.dex.addLiquidity(assetIdA, assetIdB, amountADesired, amountBDesired, amountAMin, amountBMin, minShareIncrement);
    }

    /**
     * Transfer asset to the destination account
     * @param assetId The id or symbol (for reserved asset) of the transferred asset
     * @param dest The address of the destination account
     * @param amount The amount to be transferred
     */
    removeLiquidity(
        assetIdA: AssetId, assetIdB: AssetId,
        removeLiquidity: Balance,
        minWithdrawnA: Balance,
        minWithdrawnB: Balance
    ): SubmittableExtrinsic<Promise<Hash>, Promise<() => any>> {
        return this.api.tx.dex.removeLiquidity(assetIdA, assetIdB, removeLiquidity, minWithdrawnA, minWithdrawnB);
    }

    /**
     * Query the pool balance
     */
    get getPoolBalance(): QueryableStorageFunction<Promise<(Balance, Balance)>, Promise<() => any>> {
        return this.api.query.dex.liquidityPool as any;
    }

    /**
     * Query the trading pair liquidity token
     */
    get getLiquidityToken(): QueryableStorageFunction<Promise<AssetId>, Promise<() => any>> {
        return this.api.query.dex.tradingPairLPToken as any;
    }

    // tslint:disable:member-ordering
    /**
     * Query trading pair status
     */
    get getPairStatus(): QueryableStorageFunction<Promise<Balance>, Promise<() => any>> {
        return this.api.query.dex.tradingPairStatuses as any;
    }

}
