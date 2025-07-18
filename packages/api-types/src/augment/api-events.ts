// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/events";

import type { ApiTypes, AugmentedEvent } from "@polkadot/api-base/types";
import type {
	Bytes,
	Null,
	Option,
	Result,
	Text,
	U256,
	U8aFixed,
	Vec,
	bool,
	u128,
	u16,
	u32,
	u64,
	u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type {
	EthereumLog,
	EvmCoreErrorExitReason,
	FrameSupportDispatchDispatchInfo,
	FrameSupportTokensMiscBalanceStatus,
	PalletCrowdsaleSaleInformation,
	PalletDexTradingPair,
	PalletElectionProviderMultiPhaseElectionCompute,
	PalletElectionProviderMultiPhasePhase,
	PalletEthyEthySigningRequest,
	PalletEthyEventClaim,
	PalletImOnlineSr25519AppSr25519Public,
	PalletMarketplaceAuctionClosureReason,
	PalletMarketplaceFixedPriceClosureReason,
	PalletMarketplaceListingTokens,
	PalletMultisigTimepoint,
	PalletNfiFeeDetails,
	PalletNfiGenericCollectionId,
	PalletNfiMultiChainTokenId,
	PalletNfiNfiDataType,
	PalletNfiNfiSubType,
	PalletPartnerAttributionPartnerInformation,
	PalletStakingExposure,
	PalletStakingForcing,
	PalletStakingValidatorPrefs,
	PalletSyloActionPermissionsSpender,
	PalletXls20Xls20Collection,
	PalletXrplBridgeXrplCurrency,
	PalletXrplBridgeXrplDoorAccount,
	PalletXrplBridgeXrplTransaction,
	PalletXrplXrplPublicKey,
	SeedPalletCommonEventRouterError,
	SeedPalletCommonSyloDataPermission,
	SeedPalletCommonUtilsCollectionUtilityFlags,
	SeedPalletCommonUtilsTokenBurnAuthority,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesNftCrossChainCompatibility,
	SeedPrimitivesNftOriginChain,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesSignatureAccountId20,
	SeedRuntimeImplsProxyType,
	SpConsensusGrandpaAppPublic,
	SpNposElectionsElectionScore,
	SpRuntimeDispatchError,
} from "@polkadot/types/lookup";
import type {
	Call,
	H160,
	H256,
	H512,
	Perbill,
	Permill,
} from "@therootnetwork/api-types/interfaces/runtime";

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module "@polkadot/api-base/types/events" {
	interface AugmentedEvents<ApiType extends ApiTypes> {
		assets: {
			/**
			 * Accounts were destroyed for given asset.
			 **/
			AccountsDestroyed: AugmentedEvent<
				ApiType,
				[assetId: u32, accountsDestroyed: u32, accountsRemaining: u32],
				{ assetId: u32; accountsDestroyed: u32; accountsRemaining: u32 }
			>;
			/**
			 * An approval for account `delegate` was cancelled by `owner`.
			 **/
			ApprovalCancelled: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					owner: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
				],
				{
					assetId: u32;
					owner: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Approvals were destroyed for given asset.
			 **/
			ApprovalsDestroyed: AugmentedEvent<
				ApiType,
				[assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32],
				{ assetId: u32; approvalsDestroyed: u32; approvalsRemaining: u32 }
			>;
			/**
			 * (Additional) funds have been approved for transfer to a destination account.
			 **/
			ApprovedTransfer: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					source: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
					amount: u128,
				],
				{
					assetId: u32;
					source: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
					amount: u128;
				}
			>;
			/**
			 * Some asset `asset_id` was frozen.
			 **/
			AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * The min_balance of an asset has been updated by the asset owner.
			 **/
			AssetMinBalanceChanged: AugmentedEvent<
				ApiType,
				[assetId: u32, newMinBalance: u128],
				{ assetId: u32; newMinBalance: u128 }
			>;
			/**
			 * An asset has had its attributes changed by the `Force` origin.
			 **/
			AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * Some asset `asset_id` was thawed.
			 **/
			AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * Some account `who` was blocked.
			 **/
			Blocked: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Some assets were destroyed.
			 **/
			Burned: AugmentedEvent<
				ApiType,
				[assetId: u32, owner: SeedPrimitivesSignatureAccountId20, balance: u128],
				{ assetId: u32; owner: SeedPrimitivesSignatureAccountId20; balance: u128 }
			>;
			/**
			 * Some asset class was created.
			 **/
			Created: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					creator: SeedPrimitivesSignatureAccountId20,
					owner: SeedPrimitivesSignatureAccountId20,
				],
				{
					assetId: u32;
					creator: SeedPrimitivesSignatureAccountId20;
					owner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * An asset class was destroyed.
			 **/
			Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * An asset class is in the process of being destroyed.
			 **/
			DestructionStarted: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * Some asset class was force-created.
			 **/
			ForceCreated: AugmentedEvent<
				ApiType,
				[assetId: u32, owner: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; owner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Some account `who` was frozen.
			 **/
			Frozen: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Some assets were issued.
			 **/
			Issued: AugmentedEvent<
				ApiType,
				[assetId: u32, owner: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ assetId: u32; owner: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Metadata has been cleared for an asset.
			 **/
			MetadataCleared: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * New metadata has been set for an asset.
			 **/
			MetadataSet: AugmentedEvent<
				ApiType,
				[assetId: u32, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool],
				{ assetId: u32; name: Bytes; symbol: Bytes; decimals: u8; isFrozen: bool }
			>;
			/**
			 * The owner changed.
			 **/
			OwnerChanged: AugmentedEvent<
				ApiType,
				[assetId: u32, owner: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; owner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * The management team changed.
			 **/
			TeamChanged: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					issuer: SeedPrimitivesSignatureAccountId20,
					admin: SeedPrimitivesSignatureAccountId20,
					freezer: SeedPrimitivesSignatureAccountId20,
				],
				{
					assetId: u32;
					issuer: SeedPrimitivesSignatureAccountId20;
					admin: SeedPrimitivesSignatureAccountId20;
					freezer: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Some account `who` was thawed.
			 **/
			Thawed: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Some account `who` was created with a deposit from `depositor`.
			 **/
			Touched: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					who: SeedPrimitivesSignatureAccountId20,
					depositor: SeedPrimitivesSignatureAccountId20,
				],
				{
					assetId: u32;
					who: SeedPrimitivesSignatureAccountId20;
					depositor: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Some assets were transferred.
			 **/
			Transferred: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					from: SeedPrimitivesSignatureAccountId20,
					to: SeedPrimitivesSignatureAccountId20,
					amount: u128,
				],
				{
					assetId: u32;
					from: SeedPrimitivesSignatureAccountId20;
					to: SeedPrimitivesSignatureAccountId20;
					amount: u128;
				}
			>;
			/**
			 * An `amount` was transferred in its entirety from `owner` to `destination` by
			 * the approved `delegate`.
			 **/
			TransferredApproved: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					owner: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
					destination: SeedPrimitivesSignatureAccountId20,
					amount: u128,
				],
				{
					assetId: u32;
					owner: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
					destination: SeedPrimitivesSignatureAccountId20;
					amount: u128;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		assetsExt: {
			/**
			 * The asset deposit was set
			 **/
			AssetDepositSet: AugmentedEvent<ApiType, [assetDeposit: u128], { assetDeposit: u128 }>;
			/**
			 * New asset has been created
			 **/
			CreateAsset: AugmentedEvent<
				ApiType,
				[assetId: u32, creator: SeedPrimitivesSignatureAccountId20, initialBalance: u128],
				{ assetId: u32; creator: SeedPrimitivesSignatureAccountId20; initialBalance: u128 }
			>;
			/**
			 * Assets were deposited into this account by the system e.g. refunding gas
			 **/
			InternalDeposit: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Assets were withdrawn from this account by the system e.g. paying tx fees
			 **/
			InternalWithdraw: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some assets have been placed on hold by a pallet
			 **/
			PlaceHold: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128, palletId: U8aFixed],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128; palletId: U8aFixed }
			>;
			/**
			 * Some held assets have been released by a pallet
			 **/
			ReleaseHold: AugmentedEvent<
				ApiType,
				[assetId: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128, palletId: U8aFixed],
				{ assetId: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128; palletId: U8aFixed }
			>;
			/**
			 * Some held assets were spend by a pallet
			 **/
			SpendHold: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					who: SeedPrimitivesSignatureAccountId20,
					spends: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>,
					palletId: U8aFixed,
				],
				{
					assetId: u32;
					who: SeedPrimitivesSignatureAccountId20;
					spends: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
					palletId: U8aFixed;
				}
			>;
			/**
			 * Multi-part transfer of assets from who
			 **/
			SplitTransfer: AugmentedEvent<
				ApiType,
				[
					assetId: u32,
					who: SeedPrimitivesSignatureAccountId20,
					transfers: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>,
				],
				{
					assetId: u32;
					who: SeedPrimitivesSignatureAccountId20;
					transfers: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		balances: {
			/**
			 * A balance was set by root.
			 **/
			BalanceSet: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, free: u128],
				{ who: SeedPrimitivesSignatureAccountId20; free: u128 }
			>;
			/**
			 * Some amount was burned from an account.
			 **/
			Burned: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some amount was deposited (e.g. for transaction fees).
			 **/
			Deposit: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * An account was removed whose balance was non-zero but below ExistentialDeposit,
			 * resulting in an outright loss.
			 **/
			DustLost: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ account: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * An account was created with some free balance.
			 **/
			Endowed: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, freeBalance: u128],
				{ account: SeedPrimitivesSignatureAccountId20; freeBalance: u128 }
			>;
			/**
			 * Some balance was frozen.
			 **/
			Frozen: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Total issuance was increased by `amount`, creating a credit to be balanced.
			 **/
			Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
			/**
			 * Some balance was locked.
			 **/
			Locked: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some amount was minted into an account.
			 **/
			Minted: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Total issuance was decreased by `amount`, creating a debt to be balanced.
			 **/
			Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
			/**
			 * Some balance was reserved (moved from free to reserved).
			 **/
			Reserved: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some balance was moved from the reserve of the first account to the second account.
			 * Final argument indicates the destination balance type.
			 **/
			ReserveRepatriated: AugmentedEvent<
				ApiType,
				[
					from: SeedPrimitivesSignatureAccountId20,
					to: SeedPrimitivesSignatureAccountId20,
					amount: u128,
					destinationStatus: FrameSupportTokensMiscBalanceStatus,
				],
				{
					from: SeedPrimitivesSignatureAccountId20;
					to: SeedPrimitivesSignatureAccountId20;
					amount: u128;
					destinationStatus: FrameSupportTokensMiscBalanceStatus;
				}
			>;
			/**
			 * Some amount was restored into an account.
			 **/
			Restored: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some amount was removed from the account (e.g. for misbehavior).
			 **/
			Slashed: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some amount was suspended from an account (it can be restored later).
			 **/
			Suspended: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some balance was thawed.
			 **/
			Thawed: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Transfer succeeded.
			 **/
			Transfer: AugmentedEvent<
				ApiType,
				[
					from: SeedPrimitivesSignatureAccountId20,
					to: SeedPrimitivesSignatureAccountId20,
					amount: u128,
				],
				{
					from: SeedPrimitivesSignatureAccountId20;
					to: SeedPrimitivesSignatureAccountId20;
					amount: u128;
				}
			>;
			/**
			 * Some balance was unlocked.
			 **/
			Unlocked: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Some balance was unreserved (moved from reserved to free).
			 **/
			Unreserved: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * An account was upgraded.
			 **/
			Upgraded: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20],
				{ who: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Some amount was withdrawn from the account (e.g. for transaction fees).
			 **/
			Withdraw: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		crowdsale: {
			/**
			 * Crowdsale closed
			 **/
			CrowdsaleClosed: AugmentedEvent<
				ApiType,
				[saleId: u64, info: PalletCrowdsaleSaleInformation],
				{ saleId: u64; info: PalletCrowdsaleSaleInformation }
			>;
			/**
			 * Crowdsale created
			 **/
			CrowdsaleCreated: AugmentedEvent<
				ApiType,
				[saleId: u64, info: PalletCrowdsaleSaleInformation],
				{ saleId: u64; info: PalletCrowdsaleSaleInformation }
			>;
			/**
			 * Crowdsale distribution has been completed and all vouchers paid out
			 **/
			CrowdsaleDistributionComplete: AugmentedEvent<
				ApiType,
				[saleId: u64, vouchersDistributed: u128],
				{ saleId: u64; vouchersDistributed: u128 }
			>;
			/**
			 * Crowdsale enabled
			 **/
			CrowdsaleEnabled: AugmentedEvent<
				ApiType,
				[saleId: u64, info: PalletCrowdsaleSaleInformation, endBlock: u32],
				{ saleId: u64; info: PalletCrowdsaleSaleInformation; endBlock: u32 }
			>;
			/**
			 * Crowdsale distribution was manually triggered
			 **/
			CrowdsaleManualDistribution: AugmentedEvent<
				ApiType,
				[
					saleId: u64,
					info: PalletCrowdsaleSaleInformation,
					who: SeedPrimitivesSignatureAccountId20,
				],
				{
					saleId: u64;
					info: PalletCrowdsaleSaleInformation;
					who: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Crowdsale NFT redeemed
			 **/
			CrowdsaleNFTRedeemed: AugmentedEvent<
				ApiType,
				[saleId: u64, who: SeedPrimitivesSignatureAccountId20, collectionId: u32, quantity: u32],
				{ saleId: u64; who: SeedPrimitivesSignatureAccountId20; collectionId: u32; quantity: u32 }
			>;
			/**
			 * Crowdsale participated
			 **/
			CrowdsaleParticipated: AugmentedEvent<
				ApiType,
				[saleId: u64, who: SeedPrimitivesSignatureAccountId20, asset: u32, amount: u128],
				{ saleId: u64; who: SeedPrimitivesSignatureAccountId20; asset: u32; amount: u128 }
			>;
			/**
			 * Crowdsale vouchers claimed
			 **/
			CrowdsaleVouchersClaimed: AugmentedEvent<
				ApiType,
				[saleId: u64, who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ saleId: u64; who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Call proxied
			 **/
			VaultCallProxied: AugmentedEvent<
				ApiType,
				[
					saleId: u64,
					who: SeedPrimitivesSignatureAccountId20,
					vault: SeedPrimitivesSignatureAccountId20,
					call: Call,
				],
				{
					saleId: u64;
					who: SeedPrimitivesSignatureAccountId20;
					vault: SeedPrimitivesSignatureAccountId20;
					call: Call;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		dex: {
			/**
			 * Add liquidity success. \[who, asset_id_0, reserve_0_increment,
			 * asset_id_1, reserve_1_increment, share_increment, to\]
			 **/
			AddLiquidity: AugmentedEvent<
				ApiType,
				[
					SeedPrimitivesSignatureAccountId20,
					u32,
					u128,
					u32,
					u128,
					u128,
					SeedPrimitivesSignatureAccountId20,
				]
			>;
			/**
			 * Add provision success. \[who, asset_id_0, contribution_0,
			 * asset_id_1, contribution_1\]
			 **/
			AddProvision: AugmentedEvent<
				ApiType,
				[SeedPrimitivesSignatureAccountId20, u32, u128, u32, u128]
			>;
			/**
			 * Disable trading pair. \[trading_pair\]
			 **/
			DisableTradingPair: AugmentedEvent<ApiType, [PalletDexTradingPair]>;
			/**
			 * Enable trading pair. \[trading_pair\]
			 **/
			EnableTradingPair: AugmentedEvent<ApiType, [PalletDexTradingPair]>;
			/**
			 * Set FeeTo account success. \[fee_to]
			 **/
			FeeToSet: AugmentedEvent<ApiType, [Option<SeedPrimitivesSignatureAccountId20>]>;
			/**
			 * Provisioning trading pair convert to Enabled. \[trading_pair,
			 * pool_0_amount, pool_1_amount, total_share_amount\]
			 **/
			ProvisioningToEnabled: AugmentedEvent<ApiType, [PalletDexTradingPair, u128, u128, u128]>;
			/**
			 * Remove liquidity from the trading pool success. \[who,
			 * asset_id_0, reserve_0_decrement, asset_id_1, reserve_1_decrement,
			 * share_decrement, to\]
			 **/
			RemoveLiquidity: AugmentedEvent<
				ApiType,
				[
					SeedPrimitivesSignatureAccountId20,
					u32,
					u128,
					u32,
					u128,
					u128,
					SeedPrimitivesSignatureAccountId20,
				]
			>;
			/**
			 * Use supply Asset to swap target Asset. \[trader, trading_path,
			 * supply_Asset_amount, target_Asset_amount, to\]
			 **/
			Swap: AugmentedEvent<
				ApiType,
				[
					SeedPrimitivesSignatureAccountId20,
					Vec<u32>,
					u128,
					u128,
					SeedPrimitivesSignatureAccountId20,
				]
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		doughnut: {
			/**
			 * Doughnut transaction executed
			 **/
			DoughnutCallExecuted: AugmentedEvent<
				ApiType,
				[doughnut: Bytes, call: Call, result: Result<Null, SpRuntimeDispatchError>],
				{ doughnut: Bytes; call: Call; result: Result<Null, SpRuntimeDispatchError> }
			>;
			/**
			 * Doughnut revoke state updated
			 **/
			DoughnutRevokeStateUpdated: AugmentedEvent<
				ApiType,
				[doughnutHash: U8aFixed, revoked: bool],
				{ doughnutHash: U8aFixed; revoked: bool }
			>;
			/**
			 * Holder revocation updated
			 **/
			HolderRevokeStateUpdated: AugmentedEvent<
				ApiType,
				[
					issuer: SeedPrimitivesSignatureAccountId20,
					holder: SeedPrimitivesSignatureAccountId20,
					revoked: bool,
				],
				{
					issuer: SeedPrimitivesSignatureAccountId20;
					holder: SeedPrimitivesSignatureAccountId20;
					revoked: bool;
				}
			>;
			/**
			 * Whitelisted holders updated
			 **/
			WhitelistedHoldersUpdated: AugmentedEvent<
				ApiType,
				[holder: SeedPrimitivesSignatureAccountId20, enabled: bool],
				{ holder: SeedPrimitivesSignatureAccountId20; enabled: bool }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		echo: {
			/**
			 * A ping was received from Ethereum
			 **/
			PingReceived: AugmentedEvent<
				ApiType,
				[sessionId: u64, source: H160, data: Bytes],
				{ sessionId: u64; source: H160; data: Bytes }
			>;
			/**
			 * A ping message was sent to Ethereum
			 **/
			PingSent: AugmentedEvent<
				ApiType,
				[sessionId: u64, source: H160, destination: H160, eventProofId: u64],
				{ sessionId: u64; source: H160; destination: H160; eventProofId: u64 }
			>;
			/**
			 * A pong response was received from Ethereum
			 **/
			PongReceived: AugmentedEvent<
				ApiType,
				[sessionId: u64, source: H160, data: Bytes],
				{ sessionId: u64; source: H160; data: Bytes }
			>;
			/**
			 * A pong message was sent to Ethereum
			 **/
			PongSent: AugmentedEvent<
				ApiType,
				[sessionId: u64, source: H160, destination: H160, eventProofId: u64],
				{ sessionId: u64; source: H160; destination: H160; eventProofId: u64 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * An election failed.
			 *
			 * Not much can be said about which computes failed in the process.
			 **/
			ElectionFailed: AugmentedEvent<ApiType, []>;
			/**
			 * The election has been finalized, with the given computation and score.
			 **/
			ElectionFinalized: AugmentedEvent<
				ApiType,
				[
					compute: PalletElectionProviderMultiPhaseElectionCompute,
					score: SpNposElectionsElectionScore,
				],
				{
					compute: PalletElectionProviderMultiPhaseElectionCompute;
					score: SpNposElectionsElectionScore;
				}
			>;
			/**
			 * There was a phase transition in a given round.
			 **/
			PhaseTransitioned: AugmentedEvent<
				ApiType,
				[
					from: PalletElectionProviderMultiPhasePhase,
					to: PalletElectionProviderMultiPhasePhase,
					round: u32,
				],
				{
					from: PalletElectionProviderMultiPhasePhase;
					to: PalletElectionProviderMultiPhasePhase;
					round: u32;
				}
			>;
			/**
			 * An account has been rewarded for their signed submission being finalized.
			 **/
			Rewarded: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, value: u128],
				{ account: SeedPrimitivesSignatureAccountId20; value: u128 }
			>;
			/**
			 * An account has been slashed for submitting an invalid signed submission.
			 **/
			Slashed: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, value: u128],
				{ account: SeedPrimitivesSignatureAccountId20; value: u128 }
			>;
			/**
			 * A solution was stored with the given compute.
			 *
			 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
			 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
			 * Otherwise, the solution was stored either during the unsigned phase or by
			 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
			 * room for this one.
			 **/
			SolutionStored: AugmentedEvent<
				ApiType,
				[
					compute: PalletElectionProviderMultiPhaseElectionCompute,
					origin: Option<SeedPrimitivesSignatureAccountId20>,
					prevEjected: bool,
				],
				{
					compute: PalletElectionProviderMultiPhaseElectionCompute;
					origin: Option<SeedPrimitivesSignatureAccountId20>;
					prevEjected: bool;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		erc20Peg: {
			/**
			 * Toggle deposit delay.
			 **/
			ActivateDepositDelay: AugmentedEvent<ApiType, [active: bool], { active: bool }>;
			/**
			 * Toggle deposits.
			 **/
			ActivateDeposits: AugmentedEvent<ApiType, [active: bool], { active: bool }>;
			/**
			 * Toggle withdrawal delay.
			 **/
			ActivateWithdrawalDelay: AugmentedEvent<ApiType, [active: bool], { active: bool }>;
			/**
			 * Toggle withdrawals.
			 **/
			ActivateWithdrawals: AugmentedEvent<ApiType, [active: bool], { active: bool }>;
			/**
			 * A delayed erc20 deposit has failed.
			 **/
			DelayedErc20DepositFailed: AugmentedEvent<
				ApiType,
				[paymentId: u64, beneficiary: SeedPrimitivesSignatureAccountId20],
				{ paymentId: u64; beneficiary: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A delayed erc20 withdrawal has failed.
			 **/
			DelayedErc20WithdrawalFailed: AugmentedEvent<
				ApiType,
				[assetId: u32, beneficiary: H160],
				{ assetId: u32; beneficiary: H160 }
			>;
			/**
			 * An ERC20 delay has failed due to storage bounds.
			 **/
			Erc20DelayFailed: AugmentedEvent<
				ApiType,
				[
					paymentId: u64,
					scheduledBlock: u32,
					assetId: u32,
					source: SeedPrimitivesSignatureAccountId20,
				],
				{
					paymentId: u64;
					scheduledBlock: u32;
					assetId: u32;
					source: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A bridged erc20 deposit succeeded.
			 **/
			Erc20Deposit: AugmentedEvent<
				ApiType,
				[assetId: u32, amount: u128, beneficiary: SeedPrimitivesSignatureAccountId20],
				{ assetId: u32; amount: u128; beneficiary: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * An erc20 deposit has been delayed.
			 **/
			Erc20DepositDelayed: AugmentedEvent<
				ApiType,
				[
					paymentId: u64,
					scheduledBlock: u32,
					amount: u128,
					beneficiary: SeedPrimitivesSignatureAccountId20,
					assetId: u32,
				],
				{
					paymentId: u64;
					scheduledBlock: u32;
					amount: u128;
					beneficiary: SeedPrimitivesSignatureAccountId20;
					assetId: u32;
				}
			>;
			/**
			 * A bridged erc20 deposit failed.
			 **/
			Erc20DepositFail: AugmentedEvent<
				ApiType,
				[source: H160, abiData: Bytes],
				{ source: H160; abiData: Bytes }
			>;
			/**
			 * Tokens were burnt for withdrawal on Ethereum as ERC20s
			 **/
			Erc20Withdraw: AugmentedEvent<
				ApiType,
				[assetId: u32, amount: u128, beneficiary: H160, source: SeedPrimitivesSignatureAccountId20],
				{
					assetId: u32;
					amount: u128;
					beneficiary: H160;
					source: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A withdrawal has been delayed.
			 **/
			Erc20WithdrawalDelayed: AugmentedEvent<
				ApiType,
				[
					paymentId: u64,
					scheduledBlock: u32,
					amount: u128,
					beneficiary: H160,
					assetId: u32,
					source: SeedPrimitivesSignatureAccountId20,
				],
				{
					paymentId: u64;
					scheduledBlock: u32;
					amount: u128;
					beneficiary: H160;
					assetId: u32;
					source: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * There are no more payment ids available, they've been exhausted.
			 **/
			NoAvailableDelayedPaymentIds: AugmentedEvent<ApiType, []>;
			/**
			 * A delay was added for an asset_id.
			 **/
			PaymentDelaySet: AugmentedEvent<
				ApiType,
				[assetId: u32, minBalance: u128, delay: u32],
				{ assetId: u32; minBalance: u128; delay: u32 }
			>;
			/**
			 * The peg contract address has been set.
			 **/
			SetContractAddress: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * The ROOT peg contract address has been set.
			 **/
			SetRootPegContract: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		ethBridge: {
			/**
			 * A notary (validator) set change is in motion
			 * A proof for the change will be generated with the given `event_id`
			 **/
			AuthoritySetChange: AugmentedEvent<
				ApiType,
				[eventProofId: u64, validatorSetId: u64],
				{ eventProofId: u64; validatorSetId: u64 }
			>;
			/**
			 * The bridge has been manually paused or unpaused
			 **/
			BridgeManualPause: AugmentedEvent<ApiType, [paused: bool], { paused: bool }>;
			/**
			 * An event has been challenged
			 **/
			Challenged: AugmentedEvent<
				ApiType,
				[eventClaimId: u64, challenger: SeedPrimitivesSignatureAccountId20],
				{ eventClaimId: u64; challenger: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A new challenge period was set
			 **/
			ChallengePeriodSet: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
			/**
			 * DelayedEventProofsPerBlock was set
			 **/
			DelayedEventProofsPerBlockSet: AugmentedEvent<ApiType, [count: u8], { count: u8 }>;
			/**
			 * Ethereum event confirmations were set
			 **/
			EventBlockConfirmationsSet: AugmentedEvent<
				ApiType,
				[confirmations: u64],
				{ confirmations: u64 }
			>;
			/**
			 * An event proof has been sent for signing by ethy-gadget
			 **/
			EventSend: AugmentedEvent<
				ApiType,
				[eventProofId: u64, signingRequest: PalletEthyEthySigningRequest],
				{ eventProofId: u64; signingRequest: PalletEthyEthySigningRequest }
			>;
			/**
			 * An event has been submitted from Ethereum
			 **/
			EventSubmit: AugmentedEvent<
				ApiType,
				[eventClaimId: u64, eventClaim: PalletEthyEventClaim, processAt: u32],
				{ eventClaimId: u64; eventClaim: PalletEthyEventClaim; processAt: u32 }
			>;
			/**
			 * The schedule to unpause the bridge has failed
			 **/
			FinaliseScheduleFail: AugmentedEvent<ApiType, [scheduledBlock: u32], { scheduledBlock: u32 }>;
			/**
			 * Verifying an event failed
			 **/
			Invalid: AugmentedEvent<ApiType, [eventClaimId: u64], { eventClaimId: u64 }>;
			/**
			 * A range of missing event Ids were removed
			 **/
			MissingEventIdsRemoved: AugmentedEvent<
				ApiType,
				[range: ITuple<[u64, u64]>],
				{ range: ITuple<[u64, u64]> }
			>;
			/**
			 * The event is still awaiting consensus. Process block pushed out
			 **/
			ProcessAtExtended: AugmentedEvent<
				ApiType,
				[eventClaimId: u64, processAt: u32],
				{ eventClaimId: u64; processAt: u32 }
			>;
			/**
			 * Processing an event failed
			 **/
			ProcessingFailed: AugmentedEvent<
				ApiType,
				[eventClaimId: u64, routerError: SeedPalletCommonEventRouterError],
				{ eventClaimId: u64; routerError: SeedPalletCommonEventRouterError }
			>;
			/**
			 * Processing an event succeeded
			 **/
			ProcessingOk: AugmentedEvent<ApiType, [eventClaimId: u64], { eventClaimId: u64 }>;
			/**
			 * Generating event proof delayed as bridge is paused
			 **/
			ProofDelayed: AugmentedEvent<ApiType, [eventProofId: u64], { eventProofId: u64 }>;
			/**
			 * An account has deposited a relayer bond
			 **/
			RelayerBondDeposit: AugmentedEvent<
				ApiType,
				[relayer: SeedPrimitivesSignatureAccountId20, bond: u128],
				{ relayer: SeedPrimitivesSignatureAccountId20; bond: u128 }
			>;
			/**
			 * An account has withdrawn a relayer bond
			 **/
			RelayerBondWithdraw: AugmentedEvent<
				ApiType,
				[relayer: SeedPrimitivesSignatureAccountId20, bond: u128],
				{ relayer: SeedPrimitivesSignatureAccountId20; bond: u128 }
			>;
			/**
			 * A new relayer has been set
			 **/
			RelayerSet: AugmentedEvent<
				ApiType,
				[relayer: Option<SeedPrimitivesSignatureAccountId20>],
				{ relayer: Option<SeedPrimitivesSignatureAccountId20> }
			>;
			/**
			 * The bridge contract address has been set
			 **/
			SetContractAddress: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * Verifying an event succeeded
			 **/
			Verified: AugmentedEvent<ApiType, [eventClaimId: u64], { eventClaimId: u64 }>;
			/**
			 * A notary (validator) set change for Xrpl is in motion
			 * A set of proofs for the change will be generated with the given `event_proof_ids`
			 **/
			XrplAuthoritySetChange: AugmentedEvent<
				ApiType,
				[eventProofIds: Vec<u64>, validatorSetId: u64],
				{ eventProofIds: Vec<u64>; validatorSetId: u64 }
			>;
			/**
			 * Xrpl authority set change request failed
			 **/
			XrplAuthoritySetChangeRequestFailed: AugmentedEvent<
				ApiType,
				[error: SpRuntimeDispatchError],
				{ error: SpRuntimeDispatchError }
			>;
			/**
			 * Xrpl Door signers are set
			 **/
			XrplDoorSignersSet: AugmentedEvent<
				ApiType,
				[newSigners: Vec<ITuple<[SeedPrimitivesEthyCryptoAppCryptoPublic, bool]>>],
				{ newSigners: Vec<ITuple<[SeedPrimitivesEthyCryptoAppCryptoPublic, bool]>> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		ethereum: {
			/**
			 * An ethereum transaction was successfully executed.
			 **/
			Executed: AugmentedEvent<
				ApiType,
				[
					from: H160,
					to: H160,
					transactionHash: H256,
					exitReason: EvmCoreErrorExitReason,
					extraData: Bytes,
				],
				{
					from: H160;
					to: H160;
					transactionHash: H256;
					exitReason: EvmCoreErrorExitReason;
					extraData: Bytes;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		evm: {
			/**
			 * A contract has been created at given address.
			 **/
			Created: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * A contract was attempted to be created, but the execution failed.
			 **/
			CreatedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * A contract has been executed successfully with states applied.
			 **/
			Executed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * A contract has been executed with errors. States are reverted with only gas fees applied.
			 **/
			ExecutedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
			/**
			 * Ethereum events from contracts.
			 **/
			Log: AugmentedEvent<ApiType, [log: EthereumLog], { log: EthereumLog }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		evmChainId: {
			ChainIdSet: AugmentedEvent<ApiType, [u64]>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		feeControl: {
			/**
			 * The EVM base fee has been set to `base_fee`
			 **/
			EvmBaseFeeSet: AugmentedEvent<ApiType, [baseFee: U256], { baseFee: U256 }>;
			/**
			 * The length multiplier has been set to `length_multiplier`
			 **/
			LengthMultiplierSet: AugmentedEvent<
				ApiType,
				[lengthMultiplier: u128],
				{ lengthMultiplier: u128 }
			>;
			/**
			 * The weight multiplier has been set to `weight_multiplier`
			 **/
			WeightMultiplierSet: AugmentedEvent<
				ApiType,
				[weightMultiplier: Perbill],
				{ weightMultiplier: Perbill }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		feeProxy: {
			/**
			 * A call was made with specified payment asset
			 **/
			CallWithFeePreferences: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, paymentAsset: u32, maxPayment: u128],
				{ who: SeedPrimitivesSignatureAccountId20; paymentAsset: u32; maxPayment: u128 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		futurepass: {
			/**
			 * Delegate registration to Futurepass account
			 **/
			DelegateRegistered: AugmentedEvent<
				ApiType,
				[
					futurepass: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
					proxyType: SeedRuntimeImplsProxyType,
				],
				{
					futurepass: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
					proxyType: SeedRuntimeImplsProxyType;
				}
			>;
			/**
			 * Delegate unregistration from Futurepass account
			 **/
			DelegateUnregistered: AugmentedEvent<
				ApiType,
				[
					futurepass: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
				],
				{
					futurepass: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Futurepass creation
			 **/
			FuturepassCreated: AugmentedEvent<
				ApiType,
				[
					futurepass: SeedPrimitivesSignatureAccountId20,
					delegate: SeedPrimitivesSignatureAccountId20,
				],
				{
					futurepass: SeedPrimitivesSignatureAccountId20;
					delegate: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Futurepass transfer
			 **/
			FuturepassTransferred: AugmentedEvent<
				ApiType,
				[
					oldOwner: SeedPrimitivesSignatureAccountId20,
					newOwner: Option<SeedPrimitivesSignatureAccountId20>,
					futurepass: SeedPrimitivesSignatureAccountId20,
				],
				{
					oldOwner: SeedPrimitivesSignatureAccountId20;
					newOwner: Option<SeedPrimitivesSignatureAccountId20>;
					futurepass: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A proxy call was executed with the given call
			 **/
			ProxyExecuted: AugmentedEvent<
				ApiType,
				[
					delegate: SeedPrimitivesSignatureAccountId20,
					result: Result<Null, SpRuntimeDispatchError>,
				],
				{
					delegate: SeedPrimitivesSignatureAccountId20;
					result: Result<Null, SpRuntimeDispatchError>;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		grandpa: {
			/**
			 * New authority set has been applied.
			 **/
			NewAuthorities: AugmentedEvent<
				ApiType,
				[authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>],
				{ authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }
			>;
			/**
			 * Current authority set has been paused.
			 **/
			Paused: AugmentedEvent<ApiType, []>;
			/**
			 * Current authority set has been resumed.
			 **/
			Resumed: AugmentedEvent<ApiType, []>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		imOnline: {
			/**
			 * At the end of the session, no offence was committed.
			 **/
			AllGood: AugmentedEvent<ApiType, []>;
			/**
			 * A new heartbeat was received from `AuthorityId`.
			 **/
			HeartbeatReceived: AugmentedEvent<
				ApiType,
				[authorityId: PalletImOnlineSr25519AppSr25519Public],
				{ authorityId: PalletImOnlineSr25519AppSr25519Public }
			>;
			/**
			 * At the end of the session, at least one validator was found to be offline.
			 **/
			SomeOffline: AugmentedEvent<
				ApiType,
				[offline: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, PalletStakingExposure]>>],
				{ offline: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, PalletStakingExposure]>> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		liquidityPools: {
			/**
			 * Pool closed, no more users can join.
			 **/
			PoolClosed: AugmentedEvent<
				ApiType,
				[
					poolId: u32,
					rewardAssetAmount: u128,
					stakedAssetAmount: u128,
					receiver: SeedPrimitivesSignatureAccountId20,
				],
				{
					poolId: u32;
					rewardAssetAmount: u128;
					stakedAssetAmount: u128;
					receiver: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Pool rollover is done and ready for users to claim rewards.
			 **/
			PoolMatured: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
			/**
			 * Reward pool created, user could join pool
			 **/
			PoolOpen: AugmentedEvent<
				ApiType,
				[
					poolId: u32,
					rewardAssetId: u32,
					stakedAssetId: u32,
					interestRate: u32,
					maxTokens: u128,
					lockStartBlock: u32,
					lockEndBlock: u32,
				],
				{
					poolId: u32;
					rewardAssetId: u32;
					stakedAssetId: u32;
					interestRate: u32;
					maxTokens: u128;
					lockStartBlock: u32;
					lockEndBlock: u32;
				}
			>;
			/**
			 * Pool starts to rollover users that want to continue to next pool.
			 **/
			PoolRenewing: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
			/**
			 * Pool starts to lock.
			 **/
			PoolStarted: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
			/**
			 * Rewards claimed.
			 **/
			RewardsClaimed: AugmentedEvent<
				ApiType,
				[accountId: SeedPrimitivesSignatureAccountId20, poolId: u32, amount: u128],
				{ accountId: SeedPrimitivesSignatureAccountId20; poolId: u32; amount: u128 }
			>;
			/**
			 * Set pool successor, when predecessor pool is done, users will be rolled over to
			 * successor pool.
			 **/
			SetSuccession: AugmentedEvent<
				ApiType,
				[predecessorPoolId: u32, successorPoolId: u32],
				{ predecessorPoolId: u32; successorPoolId: u32 }
			>;
			/**
			 * User exited pool.
			 **/
			UserExited: AugmentedEvent<
				ApiType,
				[accountId: SeedPrimitivesSignatureAccountId20, poolId: u32, amount: u128],
				{ accountId: SeedPrimitivesSignatureAccountId20; poolId: u32; amount: u128 }
			>;
			/**
			 * User info updated, currently only rollover preference is updated.
			 **/
			UserInfoUpdated: AugmentedEvent<
				ApiType,
				[poolId: u32, accountId: SeedPrimitivesSignatureAccountId20, shouldRollover: bool],
				{ poolId: u32; accountId: SeedPrimitivesSignatureAccountId20; shouldRollover: bool }
			>;
			/**
			 * User joined pool.
			 **/
			UserJoined: AugmentedEvent<
				ApiType,
				[accountId: SeedPrimitivesSignatureAccountId20, poolId: u32, amount: u128],
				{ accountId: SeedPrimitivesSignatureAccountId20; poolId: u32; amount: u128 }
			>;
			/**
			 * User rolled over to its successor pool.
			 **/
			UserRolledOver: AugmentedEvent<
				ApiType,
				[
					accountId: SeedPrimitivesSignatureAccountId20,
					poolId: u32,
					rolledToPoolId: u32,
					amount: u128,
				],
				{
					accountId: SeedPrimitivesSignatureAccountId20;
					poolId: u32;
					rolledToPoolId: u32;
					amount: u128;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		maintenanceMode: {
			/**
			 * An account was blocked
			 **/
			AccountBlocked: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, blocked: bool],
				{ account: SeedPrimitivesSignatureAccountId20; blocked: bool }
			>;
			/**
			 * A Runtime Call was blocked
			 **/
			CallBlocked: AugmentedEvent<
				ApiType,
				[palletName: Bytes, callName: Bytes, blocked: bool],
				{ palletName: Bytes; callName: Bytes; blocked: bool }
			>;
			/**
			 * An account was blocked
			 **/
			EVMTargetBlocked: AugmentedEvent<
				ApiType,
				[targetAddress: H160, blocked: bool],
				{ targetAddress: H160; blocked: bool }
			>;
			/**
			 * Maintenance mode was activated
			 **/
			MaintenanceModeActivated: AugmentedEvent<ApiType, [enabled: bool], { enabled: bool }>;
			/**
			 * A Pallet was blocked
			 **/
			PalletBlocked: AugmentedEvent<
				ApiType,
				[palletName: Bytes, blocked: bool],
				{ palletName: Bytes; blocked: bool }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		marketplace: {
			/**
			 * An auction has closed without selling
			 **/
			AuctionClose: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					reason: PalletMarketplaceAuctionClosureReason,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					reason: PalletMarketplaceAuctionClosureReason;
				}
			>;
			/**
			 * An auction has opened
			 **/
			AuctionOpen: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					paymentAsset: u32,
					reservePrice: u128,
					seller: SeedPrimitivesSignatureAccountId20,
					close: u32,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					paymentAsset: u32;
					reservePrice: u128;
					seller: SeedPrimitivesSignatureAccountId20;
					close: u32;
				}
			>;
			/**
			 * An auction has sold
			 **/
			AuctionSold: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					paymentAsset: u32,
					hammerPrice: u128,
					winner: SeedPrimitivesSignatureAccountId20,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					paymentAsset: u32;
					hammerPrice: u128;
					winner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A new highest bid was placed
			 **/
			Bid: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					amount: u128,
					bidder: SeedPrimitivesSignatureAccountId20,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					amount: u128;
					bidder: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * The network fee receiver address has been updated
			 **/
			FeeToSet: AugmentedEvent<
				ApiType,
				[account: Option<SeedPrimitivesSignatureAccountId20>],
				{ account: Option<SeedPrimitivesSignatureAccountId20> }
			>;
			/**
			 * A fixed price sale has closed without selling
			 **/
			FixedPriceSaleClose: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					reason: PalletMarketplaceFixedPriceClosureReason,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					reason: PalletMarketplaceFixedPriceClosureReason;
				}
			>;
			/**
			 * A fixed price sale has completed
			 **/
			FixedPriceSaleComplete: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					price: u128,
					paymentAsset: u32,
					buyer: SeedPrimitivesSignatureAccountId20,
					seller: SeedPrimitivesSignatureAccountId20,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					price: u128;
					paymentAsset: u32;
					buyer: SeedPrimitivesSignatureAccountId20;
					seller: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A fixed price sale has been listed
			 **/
			FixedPriceSaleList: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					price: u128,
					paymentAsset: u32,
					seller: SeedPrimitivesSignatureAccountId20,
					close: u32,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					price: u128;
					paymentAsset: u32;
					seller: SeedPrimitivesSignatureAccountId20;
					close: u32;
				}
			>;
			/**
			 * A fixed price sale has had its price updated
			 **/
			FixedPriceSalePriceUpdate: AugmentedEvent<
				ApiType,
				[
					tokens: PalletMarketplaceListingTokens,
					listingId: u128,
					marketplaceId: Option<u32>,
					newPrice: u128,
				],
				{
					tokens: PalletMarketplaceListingTokens;
					listingId: u128;
					marketplaceId: Option<u32>;
					newPrice: u128;
				}
			>;
			/**
			 * An account has been registered as a marketplace
			 **/
			MarketplaceRegister: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, entitlement: Permill, marketplaceId: u32],
				{ account: SeedPrimitivesSignatureAccountId20; entitlement: Permill; marketplaceId: u32 }
			>;
			/**
			 * An offer has been made on an NFT
			 **/
			Offer: AugmentedEvent<
				ApiType,
				[
					offerId: u64,
					amount: u128,
					assetId: u32,
					marketplaceId: Option<u32>,
					buyer: SeedPrimitivesSignatureAccountId20,
				],
				{
					offerId: u64;
					amount: u128;
					assetId: u32;
					marketplaceId: Option<u32>;
					buyer: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * An offer has been accepted
			 **/
			OfferAccept: AugmentedEvent<
				ApiType,
				[
					offerId: u64,
					marketplaceId: Option<u32>,
					tokenId: ITuple<[u32, u32]>,
					amount: u128,
					assetId: u32,
				],
				{
					offerId: u64;
					marketplaceId: Option<u32>;
					tokenId: ITuple<[u32, u32]>;
					amount: u128;
					assetId: u32;
				}
			>;
			/**
			 * An offer has been cancelled
			 **/
			OfferCancel: AugmentedEvent<
				ApiType,
				[offerId: u64, marketplaceId: Option<u32>, tokenId: ITuple<[u32, u32]>],
				{ offerId: u64; marketplaceId: Option<u32>; tokenId: ITuple<[u32, u32]> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		migration: {
			/**
			 * The block delay has been set
			 **/
			BlockDelaySet: AugmentedEvent<
				ApiType,
				[blockDelay: Option<u32>],
				{ blockDelay: Option<u32> }
			>;
			/**
			 * The block limit has been set
			 **/
			BlockLimitSet: AugmentedEvent<ApiType, [blockLimit: u32], { blockLimit: u32 }>;
			/**
			 * The current migration has completed
			 **/
			MigrationComplete: AugmentedEvent<ApiType, [itemsMigrated: u32], { itemsMigrated: u32 }>;
			/**
			 * Multi-Block migration has been disabled
			 **/
			MigrationDisabled: AugmentedEvent<ApiType, []>;
			/**
			 * Multi-Block migration has been enabled
			 **/
			MigrationEnabled: AugmentedEvent<ApiType, []>;
			MigrationRuntimeUpgrade: AugmentedEvent<ApiType, []>;
			/**
			 * A Migration has been set
			 **/
			MigrationSet: AugmentedEvent<ApiType, []>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		multisig: {
			/**
			 * A multisig operation has been approved by someone.
			 **/
			MultisigApproval: AugmentedEvent<
				ApiType,
				[
					approving: SeedPrimitivesSignatureAccountId20,
					timepoint: PalletMultisigTimepoint,
					multisig: SeedPrimitivesSignatureAccountId20,
					callHash: U8aFixed,
				],
				{
					approving: SeedPrimitivesSignatureAccountId20;
					timepoint: PalletMultisigTimepoint;
					multisig: SeedPrimitivesSignatureAccountId20;
					callHash: U8aFixed;
				}
			>;
			/**
			 * A multisig operation has been cancelled.
			 **/
			MultisigCancelled: AugmentedEvent<
				ApiType,
				[
					cancelling: SeedPrimitivesSignatureAccountId20,
					timepoint: PalletMultisigTimepoint,
					multisig: SeedPrimitivesSignatureAccountId20,
					callHash: U8aFixed,
				],
				{
					cancelling: SeedPrimitivesSignatureAccountId20;
					timepoint: PalletMultisigTimepoint;
					multisig: SeedPrimitivesSignatureAccountId20;
					callHash: U8aFixed;
				}
			>;
			/**
			 * A multisig operation has been executed.
			 **/
			MultisigExecuted: AugmentedEvent<
				ApiType,
				[
					approving: SeedPrimitivesSignatureAccountId20,
					timepoint: PalletMultisigTimepoint,
					multisig: SeedPrimitivesSignatureAccountId20,
					callHash: U8aFixed,
					result: Result<Null, SpRuntimeDispatchError>,
				],
				{
					approving: SeedPrimitivesSignatureAccountId20;
					timepoint: PalletMultisigTimepoint;
					multisig: SeedPrimitivesSignatureAccountId20;
					callHash: U8aFixed;
					result: Result<Null, SpRuntimeDispatchError>;
				}
			>;
			/**
			 * A new multisig operation has begun.
			 **/
			NewMultisig: AugmentedEvent<
				ApiType,
				[
					approving: SeedPrimitivesSignatureAccountId20,
					multisig: SeedPrimitivesSignatureAccountId20,
					callHash: U8aFixed,
				],
				{
					approving: SeedPrimitivesSignatureAccountId20;
					multisig: SeedPrimitivesSignatureAccountId20;
					callHash: U8aFixed;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		nfi: {
			/**
			 * NFI storage has been removed for a token
			 **/
			DataRemoved: AugmentedEvent<
				ApiType,
				[tokenId: PalletNfiMultiChainTokenId],
				{ tokenId: PalletNfiMultiChainTokenId }
			>;
			/**
			 * Request for new NFI data creation on a token with pre-existing data
			 **/
			DataRequestExisting: AugmentedEvent<
				ApiType,
				[
					subType: PalletNfiNfiSubType,
					caller: SeedPrimitivesSignatureAccountId20,
					tokenId: PalletNfiMultiChainTokenId,
				],
				{
					subType: PalletNfiNfiSubType;
					caller: SeedPrimitivesSignatureAccountId20;
					tokenId: PalletNfiMultiChainTokenId;
				}
			>;
			/**
			 * Request for new NFI data creation on a token without existing data
			 **/
			DataRequestNew: AugmentedEvent<
				ApiType,
				[
					subType: PalletNfiNfiSubType,
					caller: SeedPrimitivesSignatureAccountId20,
					tokenId: PalletNfiMultiChainTokenId,
				],
				{
					subType: PalletNfiNfiSubType;
					caller: SeedPrimitivesSignatureAccountId20;
					tokenId: PalletNfiMultiChainTokenId;
				}
			>;
			/**
			 * A new NFI storage item has been set
			 **/
			DataSet: AugmentedEvent<
				ApiType,
				[
					subType: PalletNfiNfiSubType,
					tokenId: PalletNfiMultiChainTokenId,
					dataItem: PalletNfiNfiDataType,
				],
				{
					subType: PalletNfiNfiSubType;
					tokenId: PalletNfiMultiChainTokenId;
					dataItem: PalletNfiNfiDataType;
				}
			>;
			/**
			 * New Fee details have been set
			 **/
			FeeDetailsSet: AugmentedEvent<
				ApiType,
				[subType: PalletNfiNfiSubType, feeDetails: Option<PalletNfiFeeDetails>],
				{ subType: PalletNfiNfiSubType; feeDetails: Option<PalletNfiFeeDetails> }
			>;
			/**
			 * The network fee receiver address has been updated
			 **/
			FeeToSet: AugmentedEvent<
				ApiType,
				[account: Option<SeedPrimitivesSignatureAccountId20>],
				{ account: Option<SeedPrimitivesSignatureAccountId20> }
			>;
			/**
			 * Additional mint fee has been paid to the receiver address
			 **/
			MintFeePaid: AugmentedEvent<
				ApiType,
				[
					subType: PalletNfiNfiSubType,
					who: SeedPrimitivesSignatureAccountId20,
					assetId: u32,
					totalFee: u128,
				],
				{
					subType: PalletNfiNfiSubType;
					who: SeedPrimitivesSignatureAccountId20;
					assetId: u32;
					totalFee: u128;
				}
			>;
			/**
			 * NFI compatibility enabled for a collection
			 **/
			NfiEnabled: AugmentedEvent<
				ApiType,
				[subType: PalletNfiNfiSubType, collectionId: PalletNfiGenericCollectionId],
				{ subType: PalletNfiNfiSubType; collectionId: PalletNfiGenericCollectionId }
			>;
			/**
			 * A new relayer has been set
			 **/
			RelayerSet: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20],
				{ account: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		nft: {
			/**
			 * Some additional data has been set for a token
			 **/
			AdditionalDataSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, additionalData: Option<Bytes>],
				{ tokenId: ITuple<[u32, u32]>; additionalData: Option<Bytes> }
			>;
			/**
			 * Base URI was set
			 **/
			BaseUriSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, baseUri: Bytes],
				{ collectionId: u32; baseUri: Bytes }
			>;
			/**
			 * Token(s) were bridged
			 **/
			BridgedMint: AugmentedEvent<
				ApiType,
				[collectionId: u32, serialNumbers: Vec<u32>, owner: SeedPrimitivesSignatureAccountId20],
				{ collectionId: u32; serialNumbers: Vec<u32>; owner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A token was burned
			 **/
			Burn: AugmentedEvent<
				ApiType,
				[tokenOwner: SeedPrimitivesSignatureAccountId20, collectionId: u32, serialNumber: u32],
				{ tokenOwner: SeedPrimitivesSignatureAccountId20; collectionId: u32; serialNumber: u32 }
			>;
			/**
			 * Collection has been claimed
			 **/
			CollectionClaimed: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, collectionId: u32],
				{ account: SeedPrimitivesSignatureAccountId20; collectionId: u32 }
			>;
			/**
			 * A new collection of tokens was created
			 **/
			CollectionCreate: AugmentedEvent<
				ApiType,
				[
					collectionUuid: u32,
					initialIssuance: u32,
					maxIssuance: Option<u32>,
					collectionOwner: SeedPrimitivesSignatureAccountId20,
					metadataScheme: Bytes,
					name: Bytes,
					royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>,
					originChain: SeedPrimitivesNftOriginChain,
					compatibility: SeedPrimitivesNftCrossChainCompatibility,
				],
				{
					collectionUuid: u32;
					initialIssuance: u32;
					maxIssuance: Option<u32>;
					collectionOwner: SeedPrimitivesSignatureAccountId20;
					metadataScheme: Bytes;
					name: Bytes;
					royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
					originChain: SeedPrimitivesNftOriginChain;
					compatibility: SeedPrimitivesNftCrossChainCompatibility;
				}
			>;
			/**
			 * Soulbound tokens were successfully issued
			 **/
			Issued: AugmentedEvent<
				ApiType,
				[
					tokenOwner: SeedPrimitivesSignatureAccountId20,
					start: u32,
					end: u32,
					burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority,
				],
				{
					tokenOwner: SeedPrimitivesSignatureAccountId20;
					start: u32;
					end: u32;
					burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority;
				}
			>;
			/**
			 * Max issuance was set
			 **/
			MaxIssuanceSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, maxIssuance: u32],
				{ collectionId: u32; maxIssuance: u32 }
			>;
			/**
			 * Token(s) were minted
			 **/
			Mint: AugmentedEvent<
				ApiType,
				[collectionId: u32, start: u32, end: u32, owner: SeedPrimitivesSignatureAccountId20],
				{ collectionId: u32; start: u32; end: u32; owner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Payment was made to cover a public mint
			 **/
			MintFeePaid: AugmentedEvent<
				ApiType,
				[
					who: SeedPrimitivesSignatureAccountId20,
					collectionId: u32,
					paymentAsset: u32,
					paymentAmount: u128,
					tokenCount: u32,
				],
				{
					who: SeedPrimitivesSignatureAccountId20;
					collectionId: u32;
					paymentAsset: u32;
					paymentAmount: u128;
					tokenCount: u32;
				}
			>;
			/**
			 * A mint price was set for a collection
			 **/
			MintPriceSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, paymentAsset: Option<u32>, mintPrice: Option<u128>],
				{ collectionId: u32; paymentAsset: Option<u32>; mintPrice: Option<u128> }
			>;
			/**
			 * Name was set
			 **/
			NameSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, name: Bytes],
				{ collectionId: u32; name: Bytes }
			>;
			/**
			 * A new owner was set
			 **/
			OwnerSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, newOwner: SeedPrimitivesSignatureAccountId20],
				{ collectionId: u32; newOwner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A pending issuance for a soulbound token has been created
			 **/
			PendingIssuanceCreated: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					issuanceId: u32,
					tokenOwner: SeedPrimitivesSignatureAccountId20,
					quantity: u32,
					burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority,
				],
				{
					collectionId: u32;
					issuanceId: u32;
					tokenOwner: SeedPrimitivesSignatureAccountId20;
					quantity: u32;
					burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority;
				}
			>;
			/**
			 * Public minting was enabled/disabled for a collection
			 **/
			PublicMintToggle: AugmentedEvent<
				ApiType,
				[collectionId: u32, enabled: bool],
				{ collectionId: u32; enabled: bool }
			>;
			/**
			 * Royalties schedule was set
			 **/
			RoyaltiesScheduleSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule],
				{ collectionId: u32; royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule }
			>;
			/**
			 * Token transferable flag was set
			 **/
			TokenTransferableFlagSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, transferable: bool],
				{ tokenId: ITuple<[u32, u32]>; transferable: bool }
			>;
			/**
			 * A token was transferred
			 **/
			Transfer: AugmentedEvent<
				ApiType,
				[
					previousOwner: SeedPrimitivesSignatureAccountId20,
					collectionId: u32,
					serialNumbers: Vec<u32>,
					newOwner: SeedPrimitivesSignatureAccountId20,
				],
				{
					previousOwner: SeedPrimitivesSignatureAccountId20;
					collectionId: u32;
					serialNumbers: Vec<u32>;
					newOwner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Utility flags were set for a collection
			 **/
			UtilityFlagsSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, utilityFlags: SeedPalletCommonUtilsCollectionUtilityFlags],
				{ collectionId: u32; utilityFlags: SeedPalletCommonUtilsCollectionUtilityFlags }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		nftPeg: {
			/**
			 * The NFT-peg contract address was set
			 **/
			ContractAddressSet: AugmentedEvent<ApiType, [contract: H160], { contract: H160 }>;
			/**
			 * Bridged ERC721 tokens were unable to be minted due to collection limit being reached
			 **/
			ERC721Blocked: AugmentedEvent<
				ApiType,
				[
					blockedMintId: u32,
					destinationAddress: SeedPrimitivesSignatureAccountId20,
					collectionId: u32,
					serialNumbers: Vec<u32>,
				],
				{
					blockedMintId: u32;
					destinationAddress: SeedPrimitivesSignatureAccountId20;
					collectionId: u32;
					serialNumbers: Vec<u32>;
				}
			>;
			/**
			 * An ERC721 deposit was made
			 **/
			Erc721Deposit: AugmentedEvent<
				ApiType,
				[destination: SeedPrimitivesSignatureAccountId20],
				{ destination: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Bridged ERC721 tokens were minted
			 **/
			Erc721Mint: AugmentedEvent<
				ApiType,
				[collectionId: u32, serialNumbers: Vec<u32>, owner: SeedPrimitivesSignatureAccountId20],
				{ collectionId: u32; serialNumbers: Vec<u32>; owner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * An ERC721 withdraw was made
			 **/
			Erc721Withdraw: AugmentedEvent<
				ApiType,
				[
					origin: SeedPrimitivesSignatureAccountId20,
					collectionIds: Vec<u32>,
					serialNumbers: Vec<Vec<u32>>,
					destination: H160,
				],
				{
					origin: SeedPrimitivesSignatureAccountId20;
					collectionIds: Vec<u32>;
					serialNumbers: Vec<Vec<u32>>;
					destination: H160;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		offences: {
			/**
			 * There is an offence reported of the given `kind` happened at the `session_index` and
			 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
			 * \[kind, timeslot\].
			 **/
			Offence: AugmentedEvent<
				ApiType,
				[kind: U8aFixed, timeslot: Bytes],
				{ kind: U8aFixed; timeslot: Bytes }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		partnerAttribution: {
			AccountAttributed: AugmentedEvent<
				ApiType,
				[partnerId: u128, account: SeedPrimitivesSignatureAccountId20],
				{ partnerId: u128; account: SeedPrimitivesSignatureAccountId20 }
			>;
			PartnerRegistered: AugmentedEvent<
				ApiType,
				[partnerId: u128, partner: PalletPartnerAttributionPartnerInformation],
				{ partnerId: u128; partner: PalletPartnerAttributionPartnerInformation }
			>;
			PartnerRemoved: AugmentedEvent<
				ApiType,
				[partnerId: u128, account: SeedPrimitivesSignatureAccountId20],
				{ partnerId: u128; account: SeedPrimitivesSignatureAccountId20 }
			>;
			PartnerUpdated: AugmentedEvent<
				ApiType,
				[partnerId: u128, account: SeedPrimitivesSignatureAccountId20],
				{ partnerId: u128; account: SeedPrimitivesSignatureAccountId20 }
			>;
			PartnerUpgraded: AugmentedEvent<
				ApiType,
				[partnerId: u128, account: SeedPrimitivesSignatureAccountId20, feePercentage: Permill],
				{ partnerId: u128; account: SeedPrimitivesSignatureAccountId20; feePercentage: Permill }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		preimage: {
			/**
			 * A preimage has ben cleared.
			 **/
			Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
			/**
			 * A preimage has been noted.
			 **/
			Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
			/**
			 * A preimage has been requested.
			 **/
			Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		proxy: {
			/**
			 * An announcement was placed to make a call in the future.
			 **/
			Announced: AugmentedEvent<
				ApiType,
				[
					real: SeedPrimitivesSignatureAccountId20,
					proxy: SeedPrimitivesSignatureAccountId20,
					callHash: H256,
				],
				{
					real: SeedPrimitivesSignatureAccountId20;
					proxy: SeedPrimitivesSignatureAccountId20;
					callHash: H256;
				}
			>;
			/**
			 * A proxy was added.
			 **/
			ProxyAdded: AugmentedEvent<
				ApiType,
				[
					delegator: SeedPrimitivesSignatureAccountId20,
					delegatee: SeedPrimitivesSignatureAccountId20,
					proxyType: SeedRuntimeImplsProxyType,
					delay: u32,
				],
				{
					delegator: SeedPrimitivesSignatureAccountId20;
					delegatee: SeedPrimitivesSignatureAccountId20;
					proxyType: SeedRuntimeImplsProxyType;
					delay: u32;
				}
			>;
			/**
			 * A proxy was executed correctly, with the given.
			 **/
			ProxyExecuted: AugmentedEvent<
				ApiType,
				[result: Result<Null, SpRuntimeDispatchError>],
				{ result: Result<Null, SpRuntimeDispatchError> }
			>;
			/**
			 * A proxy was removed.
			 **/
			ProxyRemoved: AugmentedEvent<
				ApiType,
				[
					delegator: SeedPrimitivesSignatureAccountId20,
					delegatee: SeedPrimitivesSignatureAccountId20,
					proxyType: SeedRuntimeImplsProxyType,
					delay: u32,
				],
				{
					delegator: SeedPrimitivesSignatureAccountId20;
					delegatee: SeedPrimitivesSignatureAccountId20;
					proxyType: SeedRuntimeImplsProxyType;
					delay: u32;
				}
			>;
			/**
			 * A pure account has been created by new proxy with given
			 * disambiguation index and proxy type.
			 **/
			PureCreated: AugmentedEvent<
				ApiType,
				[
					pure: SeedPrimitivesSignatureAccountId20,
					who: SeedPrimitivesSignatureAccountId20,
					proxyType: SeedRuntimeImplsProxyType,
					disambiguationIndex: u16,
				],
				{
					pure: SeedPrimitivesSignatureAccountId20;
					who: SeedPrimitivesSignatureAccountId20;
					proxyType: SeedRuntimeImplsProxyType;
					disambiguationIndex: u16;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		recovery: {
			/**
			 * Lost account has been successfully recovered by rescuer account.
			 **/
			AccountRecovered: AugmentedEvent<
				ApiType,
				[
					lostAccount: SeedPrimitivesSignatureAccountId20,
					rescuerAccount: SeedPrimitivesSignatureAccountId20,
				],
				{
					lostAccount: SeedPrimitivesSignatureAccountId20;
					rescuerAccount: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A recovery process for lost account by rescuer account has been closed.
			 **/
			RecoveryClosed: AugmentedEvent<
				ApiType,
				[
					lostAccount: SeedPrimitivesSignatureAccountId20,
					rescuerAccount: SeedPrimitivesSignatureAccountId20,
				],
				{
					lostAccount: SeedPrimitivesSignatureAccountId20;
					rescuerAccount: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A recovery process has been set up for an account.
			 **/
			RecoveryCreated: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20],
				{ account: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A recovery process has been initiated for lost account by rescuer account.
			 **/
			RecoveryInitiated: AugmentedEvent<
				ApiType,
				[
					lostAccount: SeedPrimitivesSignatureAccountId20,
					rescuerAccount: SeedPrimitivesSignatureAccountId20,
				],
				{
					lostAccount: SeedPrimitivesSignatureAccountId20;
					rescuerAccount: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A recovery process has been removed for an account.
			 **/
			RecoveryRemoved: AugmentedEvent<
				ApiType,
				[lostAccount: SeedPrimitivesSignatureAccountId20],
				{ lostAccount: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A recovery process for lost account by rescuer account has been vouched for by sender.
			 **/
			RecoveryVouched: AugmentedEvent<
				ApiType,
				[
					lostAccount: SeedPrimitivesSignatureAccountId20,
					rescuerAccount: SeedPrimitivesSignatureAccountId20,
					sender: SeedPrimitivesSignatureAccountId20,
				],
				{
					lostAccount: SeedPrimitivesSignatureAccountId20;
					rescuerAccount: SeedPrimitivesSignatureAccountId20;
					sender: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		scheduler: {
			/**
			 * The call for the provided hash was not found so the task has been aborted.
			 **/
			CallUnavailable: AugmentedEvent<
				ApiType,
				[task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
				{ task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
			>;
			/**
			 * Canceled some task.
			 **/
			Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>;
			/**
			 * Dispatched some task.
			 **/
			Dispatched: AugmentedEvent<
				ApiType,
				[
					task: ITuple<[u32, u32]>,
					id: Option<U8aFixed>,
					result: Result<Null, SpRuntimeDispatchError>,
				],
				{
					task: ITuple<[u32, u32]>;
					id: Option<U8aFixed>;
					result: Result<Null, SpRuntimeDispatchError>;
				}
			>;
			/**
			 * The given task was unable to be renewed since the agenda is full at that block.
			 **/
			PeriodicFailed: AugmentedEvent<
				ApiType,
				[task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
				{ task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
			>;
			/**
			 * The given task can never be executed since it is overweight.
			 **/
			PermanentlyOverweight: AugmentedEvent<
				ApiType,
				[task: ITuple<[u32, u32]>, id: Option<U8aFixed>],
				{ task: ITuple<[u32, u32]>; id: Option<U8aFixed> }
			>;
			/**
			 * Scheduled some task.
			 **/
			Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32; index: u32 }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		session: {
			/**
			 * New session has happened. Note that the argument is the session index, not the
			 * block number as the type might suggest.
			 **/
			NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		sft: {
			/**
			 * Some additional data has been set for a token
			 **/
			AdditionalDataSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, additionalData: Option<Bytes>],
				{ tokenId: ITuple<[u32, u32]>; additionalData: Option<Bytes> }
			>;
			/**
			 * Base URI was set
			 **/
			BaseUriSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, metadataScheme: Bytes],
				{ collectionId: u32; metadataScheme: Bytes }
			>;
			/**
			 * A token was burned
			 **/
			Burn: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					serialNumbers: Vec<u32>,
					balances: Vec<u128>,
					owner: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					balances: Vec<u128>;
					owner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A new collection of tokens was created
			 **/
			CollectionCreate: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					collectionOwner: SeedPrimitivesSignatureAccountId20,
					metadataScheme: Bytes,
					name: Bytes,
					royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>,
					originChain: SeedPrimitivesNftOriginChain,
				],
				{
					collectionId: u32;
					collectionOwner: SeedPrimitivesSignatureAccountId20;
					metadataScheme: Bytes;
					name: Bytes;
					royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
					originChain: SeedPrimitivesNftOriginChain;
				}
			>;
			/**
			 * Soulbound tokens were successfully issued
			 **/
			Issued: AugmentedEvent<
				ApiType,
				[
					tokenOwner: SeedPrimitivesSignatureAccountId20,
					serialNumbers: Vec<u32>,
					balances: Vec<u128>,
				],
				{
					tokenOwner: SeedPrimitivesSignatureAccountId20;
					serialNumbers: Vec<u32>;
					balances: Vec<u128>;
				}
			>;
			/**
			 * Max issuance was set
			 **/
			MaxIssuanceSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, maxIssuance: u128],
				{ tokenId: ITuple<[u32, u32]>; maxIssuance: u128 }
			>;
			/**
			 * Token(s) were minted
			 **/
			Mint: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					serialNumbers: Vec<u32>,
					balances: Vec<u128>,
					owner: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					balances: Vec<u128>;
					owner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Payment was made to cover a public mint
			 **/
			MintFeePaid: AugmentedEvent<
				ApiType,
				[
					who: SeedPrimitivesSignatureAccountId20,
					tokenId: ITuple<[u32, u32]>,
					paymentAsset: u32,
					paymentAmount: u128,
					tokenCount: u128,
				],
				{
					who: SeedPrimitivesSignatureAccountId20;
					tokenId: ITuple<[u32, u32]>;
					paymentAsset: u32;
					paymentAmount: u128;
					tokenCount: u128;
				}
			>;
			/**
			 * A mint price was set for a collection
			 **/
			MintPriceSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, paymentAsset: Option<u32>, mintPrice: Option<u128>],
				{ tokenId: ITuple<[u32, u32]>; paymentAsset: Option<u32>; mintPrice: Option<u128> }
			>;
			/**
			 * Name was set
			 **/
			NameSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, collectionName: Bytes],
				{ collectionId: u32; collectionName: Bytes }
			>;
			/**
			 * A new owner was set
			 **/
			OwnerSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, newOwner: SeedPrimitivesSignatureAccountId20],
				{ collectionId: u32; newOwner: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A pending issuance for a soulbound token has been created
			 **/
			PendingIssuanceCreated: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					issuanceId: u32,
					serialNumbers: Vec<u32>,
					balances: Vec<u128>,
					tokenOwner: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					issuanceId: u32;
					serialNumbers: Vec<u32>;
					balances: Vec<u128>;
					tokenOwner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Public minting was enabled/disabled for a collection
			 **/
			PublicMintToggle: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, enabled: bool],
				{ tokenId: ITuple<[u32, u32]>; enabled: bool }
			>;
			/**
			 * Royalties schedule was set
			 **/
			RoyaltiesScheduleSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule],
				{ collectionId: u32; royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule }
			>;
			TokenBurnAuthoritySet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority],
				{ tokenId: ITuple<[u32, u32]>; burnAuthority: SeedPalletCommonUtilsTokenBurnAuthority }
			>;
			/**
			 * A new token was created within a collection
			 **/
			TokenCreate: AugmentedEvent<
				ApiType,
				[
					tokenId: ITuple<[u32, u32]>,
					initialIssuance: u128,
					maxIssuance: Option<u128>,
					tokenName: Bytes,
					tokenOwner: SeedPrimitivesSignatureAccountId20,
				],
				{
					tokenId: ITuple<[u32, u32]>;
					initialIssuance: u128;
					maxIssuance: Option<u128>;
					tokenName: Bytes;
					tokenOwner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Token name was set
			 **/
			TokenNameSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, tokenName: Bytes],
				{ tokenId: ITuple<[u32, u32]>; tokenName: Bytes }
			>;
			/**
			 * Token transferable flag was set
			 **/
			TokenTransferableFlagSet: AugmentedEvent<
				ApiType,
				[tokenId: ITuple<[u32, u32]>, transferable: bool],
				{ tokenId: ITuple<[u32, u32]>; transferable: bool }
			>;
			/**
			 * A token was transferred
			 **/
			Transfer: AugmentedEvent<
				ApiType,
				[
					previousOwner: SeedPrimitivesSignatureAccountId20,
					collectionId: u32,
					serialNumbers: Vec<u32>,
					balances: Vec<u128>,
					newOwner: SeedPrimitivesSignatureAccountId20,
				],
				{
					previousOwner: SeedPrimitivesSignatureAccountId20;
					collectionId: u32;
					serialNumbers: Vec<u32>;
					balances: Vec<u128>;
					newOwner: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Utility flags were set for a collection
			 **/
			UtilityFlagsSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, utilityFlags: SeedPalletCommonUtilsCollectionUtilityFlags],
				{ collectionId: u32; utilityFlags: SeedPalletCommonUtilsCollectionUtilityFlags }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		staking: {
			/**
			 * An account has bonded this amount. \[stash, amount\]
			 *
			 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
			 * it will not be emitted for staking rewards when they are added to stake.
			 **/
			Bonded: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ stash: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * An account has stopped participating as either a validator or nominator.
			 **/
			Chilled: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20],
				{ stash: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * The era payout has been set; the first balance is the validator-payout; the second is
			 * the remainder from the maximum amount of reward.
			 **/
			EraPaid: AugmentedEvent<
				ApiType,
				[eraIndex: u32, validatorPayout: u128, remainder: u128],
				{ eraIndex: u32; validatorPayout: u128; remainder: u128 }
			>;
			/**
			 * A new force era mode was set.
			 **/
			ForceEra: AugmentedEvent<
				ApiType,
				[mode: PalletStakingForcing],
				{ mode: PalletStakingForcing }
			>;
			/**
			 * A nominator has been kicked from a validator.
			 **/
			Kicked: AugmentedEvent<
				ApiType,
				[nominator: SeedPrimitivesSignatureAccountId20, stash: SeedPrimitivesSignatureAccountId20],
				{ nominator: SeedPrimitivesSignatureAccountId20; stash: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * An old slashing report from a prior era was discarded because it could
			 * not be processed.
			 **/
			OldSlashingReportDiscarded: AugmentedEvent<
				ApiType,
				[sessionIndex: u32],
				{ sessionIndex: u32 }
			>;
			/**
			 * The stakers' rewards are getting paid.
			 **/
			PayoutStarted: AugmentedEvent<
				ApiType,
				[eraIndex: u32, validatorStash: SeedPrimitivesSignatureAccountId20],
				{ eraIndex: u32; validatorStash: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * The nominator has been rewarded by this amount.
			 **/
			Rewarded: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ stash: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * A staker (validator or nominator) has been slashed by the given amount.
			 **/
			Slashed: AugmentedEvent<
				ApiType,
				[staker: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ staker: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * A slash for the given validator, for the given percentage of their stake, at the given
			 * era as been reported.
			 **/
			SlashReported: AugmentedEvent<
				ApiType,
				[validator: SeedPrimitivesSignatureAccountId20, fraction: Perbill, slashEra: u32],
				{ validator: SeedPrimitivesSignatureAccountId20; fraction: Perbill; slashEra: u32 }
			>;
			/**
			 * A new set of stakers was elected.
			 **/
			StakersElected: AugmentedEvent<ApiType, []>;
			/**
			 * The election failed. No new era is planned.
			 **/
			StakingElectionFailed: AugmentedEvent<ApiType, []>;
			/**
			 * An account has unbonded this amount.
			 **/
			Unbonded: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ stash: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * A validator has set their preferences.
			 **/
			ValidatorPrefsSet: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20, prefs: PalletStakingValidatorPrefs],
				{ stash: SeedPrimitivesSignatureAccountId20; prefs: PalletStakingValidatorPrefs }
			>;
			/**
			 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
			 * from the unlocking queue.
			 **/
			Withdrawn: AugmentedEvent<
				ApiType,
				[stash: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ stash: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		sudo: {
			/**
			 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
			 **/
			KeyChanged: AugmentedEvent<
				ApiType,
				[oldSudoer: Option<SeedPrimitivesSignatureAccountId20>],
				{ oldSudoer: Option<SeedPrimitivesSignatureAccountId20> }
			>;
			/**
			 * A sudo just took place. \[result\]
			 **/
			Sudid: AugmentedEvent<
				ApiType,
				[sudoResult: Result<Null, SpRuntimeDispatchError>],
				{ sudoResult: Result<Null, SpRuntimeDispatchError> }
			>;
			/**
			 * A sudo just took place. \[result\]
			 **/
			SudoAsDone: AugmentedEvent<
				ApiType,
				[sudoResult: Result<Null, SpRuntimeDispatchError>],
				{ sudoResult: Result<Null, SpRuntimeDispatchError> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		syloActionPermissions: {
			/**
			 * A permissioned transaction was executed.
			 **/
			PermissionTransactExecuted: AugmentedEvent<
				ApiType,
				[grantor: SeedPrimitivesSignatureAccountId20, grantee: SeedPrimitivesSignatureAccountId20],
				{ grantor: SeedPrimitivesSignatureAccountId20; grantee: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A transact permission was accepted.
			 **/
			TransactPermissionAccepted: AugmentedEvent<
				ApiType,
				[grantor: SeedPrimitivesSignatureAccountId20, grantee: SeedPrimitivesSignatureAccountId20],
				{ grantor: SeedPrimitivesSignatureAccountId20; grantee: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A transact permission was granted.
			 **/
			TransactPermissionGranted: AugmentedEvent<
				ApiType,
				[
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					spender: PalletSyloActionPermissionsSpender,
					spendingBalance: Option<u128>,
					allowedCalls: Vec<ITuple<[Bytes, Bytes]>>,
					expiry: Option<u32>,
				],
				{
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					spender: PalletSyloActionPermissionsSpender;
					spendingBalance: Option<u128>;
					allowedCalls: Vec<ITuple<[Bytes, Bytes]>>;
					expiry: Option<u32>;
				}
			>;
			/**
			 * A transact permission was revoked.
			 **/
			TransactPermissionRevoked: AugmentedEvent<
				ApiType,
				[grantor: SeedPrimitivesSignatureAccountId20, grantee: SeedPrimitivesSignatureAccountId20],
				{ grantor: SeedPrimitivesSignatureAccountId20; grantee: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A transact permission was updated.
			 **/
			TransactPermissionUpdated: AugmentedEvent<
				ApiType,
				[
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					spender: PalletSyloActionPermissionsSpender,
					spendingBalance: Option<u128>,
					allowedCalls: Vec<ITuple<[Bytes, Bytes]>>,
					expiry: Option<u32>,
				],
				{
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					spender: PalletSyloActionPermissionsSpender;
					spendingBalance: Option<u128>;
					allowedCalls: Vec<ITuple<[Bytes, Bytes]>>;
					expiry: Option<u32>;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		syloDataPermissions: {
			/**
			 * An account has been granted permission for a given data record
			 **/
			DataPermissionGranted: AugmentedEvent<
				ApiType,
				[
					dataAuthor: SeedPrimitivesSignatureAccountId20,
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					dataId: Bytes,
					permission: SeedPalletCommonSyloDataPermission,
					expiry: Option<u32>,
					irrevocable: bool,
				],
				{
					dataAuthor: SeedPrimitivesSignatureAccountId20;
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					dataId: Bytes;
					permission: SeedPalletCommonSyloDataPermission;
					expiry: Option<u32>;
					irrevocable: bool;
				}
			>;
			/**
			 * An account's permission has been revoked for a given data record
			 **/
			DataPermissionRevoked: AugmentedEvent<
				ApiType,
				[
					revoker: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permission: SeedPalletCommonSyloDataPermission,
					dataId: Bytes,
				],
				{
					revoker: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permission: SeedPalletCommonSyloDataPermission;
					dataId: Bytes;
				}
			>;
			/**
			 * An expired permission has been automatically removed
			 **/
			ExpiredDataPermissionRemoved: AugmentedEvent<
				ApiType,
				[
					dataAuthor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					dataId: Bytes,
					permissionId: u32,
				],
				{
					dataAuthor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					dataId: Bytes;
					permissionId: u32;
				}
			>;
			/**
			 * An expired tagged permission has been automatically removed
			 **/
			ExpiredTaggedPermissionRemoved: AugmentedEvent<
				ApiType,
				[
					dataAuthor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permissionId: u32,
				],
				{
					dataAuthor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permissionId: u32;
				}
			>;
			/**
			 * An account has been granted a permission reference
			 **/
			PermissionReferenceGranted: AugmentedEvent<
				ApiType,
				[
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permissionRecordId: Bytes,
				],
				{
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permissionRecordId: Bytes;
				}
			>;
			/**
			 * An account's permission reference has been revoked
			 **/
			PermissionReferenceRevoked: AugmentedEvent<
				ApiType,
				[
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permissionRecordId: Bytes,
				],
				{
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permissionRecordId: Bytes;
				}
			>;
			/**
			 * An account has been granted tagged permissions
			 **/
			TaggedDataPermissionsGranted: AugmentedEvent<
				ApiType,
				[
					grantor: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permission: SeedPalletCommonSyloDataPermission,
					tags: Vec<Bytes>,
					expiry: Option<u32>,
					irrevocable: bool,
				],
				{
					grantor: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permission: SeedPalletCommonSyloDataPermission;
					tags: Vec<Bytes>;
					expiry: Option<u32>;
					irrevocable: bool;
				}
			>;
			/**
			 * One of the tagged permissions for an account has been revoked
			 **/
			TaggedDataPermissionsRevoked: AugmentedEvent<
				ApiType,
				[
					revoker: SeedPrimitivesSignatureAccountId20,
					grantee: SeedPrimitivesSignatureAccountId20,
					permission: SeedPalletCommonSyloDataPermission,
					tags: Vec<Bytes>,
				],
				{
					revoker: SeedPrimitivesSignatureAccountId20;
					grantee: SeedPrimitivesSignatureAccountId20;
					permission: SeedPalletCommonSyloDataPermission;
					tags: Vec<Bytes>;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		syloDataVerification: {
			/**
			 * The asset used to for extrinsics has been set
			 **/
			PaymentAssetSet: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * An existing resolver has been deregistered and removed from storage
			 **/
			ResolverDeregistered: AugmentedEvent<ApiType, [id: Bytes], { id: Bytes }>;
			/**
			 * A new resolver has been registered and set in storage
			 **/
			ResolverRegistered: AugmentedEvent<
				ApiType,
				[id: Bytes, controller: SeedPrimitivesSignatureAccountId20, serviceEndpoints: Vec<Bytes>],
				{ id: Bytes; controller: SeedPrimitivesSignatureAccountId20; serviceEndpoints: Vec<Bytes> }
			>;
			/**
			 * An existing resolver has had it's service endpoints updated
			 **/
			ResolverUpdated: AugmentedEvent<
				ApiType,
				[id: Bytes, controller: SeedPrimitivesSignatureAccountId20, serviceEndpoints: Vec<Bytes>],
				{ id: Bytes; controller: SeedPrimitivesSignatureAccountId20; serviceEndpoints: Vec<Bytes> }
			>;
			/**
			 * The string reserved for the method used by sylo resolvers has been set
			 **/
			SyloResolverMethodSet: AugmentedEvent<ApiType, [method: Bytes], { method: Bytes }>;
			/**
			 * An entry of an existing validation record has been added
			 **/
			ValidationEntryAdded: AugmentedEvent<
				ApiType,
				[author: SeedPrimitivesSignatureAccountId20, id: Bytes, checksum: H256],
				{ author: SeedPrimitivesSignatureAccountId20; id: Bytes; checksum: H256 }
			>;
			/**
			 * A new validation record has been created and set in storage
			 **/
			ValidationRecordCreated: AugmentedEvent<
				ApiType,
				[author: SeedPrimitivesSignatureAccountId20, id: Bytes],
				{ author: SeedPrimitivesSignatureAccountId20; id: Bytes }
			>;
			/**
			 * An existing validation record has been deleted and removed from
			 * storage
			 **/
			ValidationRecordDeleted: AugmentedEvent<
				ApiType,
				[author: SeedPrimitivesSignatureAccountId20, id: Bytes],
				{ author: SeedPrimitivesSignatureAccountId20; id: Bytes }
			>;
			/**
			 * An existing validation record has had its fields updated
			 **/
			ValidationRecordUpdated: AugmentedEvent<
				ApiType,
				[
					author: SeedPrimitivesSignatureAccountId20,
					id: Bytes,
					resolvers: Option<Vec<Bytes>>,
					dataType: Option<Bytes>,
					tags: Option<Vec<Bytes>>,
				],
				{
					author: SeedPrimitivesSignatureAccountId20;
					id: Bytes;
					resolvers: Option<Vec<Bytes>>;
					dataType: Option<Bytes>;
					tags: Option<Vec<Bytes>>;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		system: {
			/**
			 * `:code` was updated.
			 **/
			CodeUpdated: AugmentedEvent<ApiType, []>;
			/**
			 * An extrinsic failed.
			 **/
			ExtrinsicFailed: AugmentedEvent<
				ApiType,
				[dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo],
				{ dispatchError: SpRuntimeDispatchError; dispatchInfo: FrameSupportDispatchDispatchInfo }
			>;
			/**
			 * An extrinsic completed successfully.
			 **/
			ExtrinsicSuccess: AugmentedEvent<
				ApiType,
				[dispatchInfo: FrameSupportDispatchDispatchInfo],
				{ dispatchInfo: FrameSupportDispatchDispatchInfo }
			>;
			/**
			 * An account was reaped.
			 **/
			KilledAccount: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20],
				{ account: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * A new account was created.
			 **/
			NewAccount: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20],
				{ account: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * On on-chain remark happened.
			 **/
			Remarked: AugmentedEvent<
				ApiType,
				[sender: SeedPrimitivesSignatureAccountId20, hash_: H256],
				{ sender: SeedPrimitivesSignatureAccountId20; hash_: H256 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		transactionPayment: {
			/**
			 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
			 * has been paid by `who`.
			 **/
			TransactionFeePaid: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, actualFee: u128, tip: u128],
				{ who: SeedPrimitivesSignatureAccountId20; actualFee: u128; tip: u128 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		utility: {
			/**
			 * Batch of dispatches completed fully with no error.
			 **/
			BatchCompleted: AugmentedEvent<ApiType, []>;
			/**
			 * Batch of dispatches completed but has errors.
			 **/
			BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
			/**
			 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
			 * well as the error.
			 **/
			BatchInterrupted: AugmentedEvent<
				ApiType,
				[index: u32, error: SpRuntimeDispatchError],
				{ index: u32; error: SpRuntimeDispatchError }
			>;
			/**
			 * A call was dispatched.
			 **/
			DispatchedAs: AugmentedEvent<
				ApiType,
				[result: Result<Null, SpRuntimeDispatchError>],
				{ result: Result<Null, SpRuntimeDispatchError> }
			>;
			/**
			 * A single item within a Batch of dispatches has completed with no error.
			 **/
			ItemCompleted: AugmentedEvent<ApiType, []>;
			/**
			 * A single item within a Batch of dispatches has completed with error.
			 **/
			ItemFailed: AugmentedEvent<
				ApiType,
				[error: SpRuntimeDispatchError],
				{ error: SpRuntimeDispatchError }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		vortexDistribution: {
			/**
			 * Admin Account changed
			 **/
			AdminAccountChanged: AugmentedEvent<
				ApiType,
				[
					oldKey: Option<SeedPrimitivesSignatureAccountId20>,
					newKey: SeedPrimitivesSignatureAccountId20,
				],
				{
					oldKey: Option<SeedPrimitivesSignatureAccountId20>;
					newKey: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * Pivot key string is too long and exceeds MaxStringLength
			 **/
			PivotStringTooLong: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Rewards registered
			 **/
			RewardRegistered: AugmentedEvent<
				ApiType,
				[id: u32, rewards: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>],
				{ id: u32; rewards: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>> }
			>;
			/**
			 * Set asset prices
			 **/
			SetAssetPrices: AugmentedEvent<
				ApiType,
				[id: u32, assetPrices: Vec<ITuple<[u32, u128]>>],
				{ id: u32; assetPrices: Vec<ITuple<[u32, u128]>> }
			>;
			/**
			 * Set ConsiderCurrentBalance
			 **/
			SetConsiderCurrentBalance: AugmentedEvent<ApiType, [value: bool], { value: bool }>;
			/**
			 * Set DisableRedeem
			 **/
			SetDisableRedeem: AugmentedEvent<ApiType, [value: bool], { value: bool }>;
			/**
			 * Set EnableManualRewardInput
			 **/
			SetEnableManualRewardInput: AugmentedEvent<ApiType, [value: bool], { value: bool }>;
			/**
			 * Set Fee pot asset balances
			 **/
			SetFeePotAssetBalances: AugmentedEvent<
				ApiType,
				[id: u32, assetsBalances: Vec<ITuple<[u32, u128]>>],
				{ id: u32; assetsBalances: Vec<ITuple<[u32, u128]>> }
			>;
			/**
			 * Set Vtx total supply
			 **/
			SetVtxTotalSupply: AugmentedEvent<
				ApiType,
				[id: u32, totalSupply: u128],
				{ id: u32; totalSupply: u128 }
			>;
			/**
			 * Set Vtx vault asset balances
			 **/
			SetVtxVaultAssetBalances: AugmentedEvent<
				ApiType,
				[id: u32, assetsBalances: Vec<ITuple<[u32, u128]>>],
				{ id: u32; assetsBalances: Vec<ITuple<[u32, u128]>> }
			>;
			/**
			 * Set VtxVaultRedeemAssetList
			 **/
			SetVtxVaultRedeemAssetList: AugmentedEvent<
				ApiType,
				[assetList: Vec<u32>],
				{ assetList: Vec<u32> }
			>;
			/**
			 * Distribution created
			 **/
			VtxDistCreated: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Distribution disabled
			 **/
			VtxDistDisabled: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Distribution done
			 **/
			VtxDistDone: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Distribution paid out
			 **/
			VtxDistPaidOut: AugmentedEvent<
				ApiType,
				[id: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ id: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Distribution payment failed
			 **/
			VtxDistPayFailed: AugmentedEvent<
				ApiType,
				[id: u32, who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ id: u32; who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Vtx distribution triggered
			 **/
			VtxDistributionTriggered: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Vtx distribution triggering
			 **/
			VtxDistributionTriggering: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Distribution started
			 **/
			VtxDistStarted: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
			/**
			 * Vortex redeemed
			 **/
			VtxRedeemed: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
			>;
			/**
			 * Vtx staker reward points registered
			 **/
			VtxRewardPointRegistered: AugmentedEvent<
				ApiType,
				[id: u32, rewardPoints: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>],
				{ id: u32; rewardPoints: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>> }
			>;
			/**
			 * Vtx work points registered
			 **/
			VtxWorkPointRegistered: AugmentedEvent<
				ApiType,
				[id: u32, workPoints: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>],
				{ id: u32; workPoints: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		voterList: {
			/**
			 * Moved an account from one bag to another.
			 **/
			Rebagged: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, from: u64, to: u64],
				{ who: SeedPrimitivesSignatureAccountId20; from: u64; to: u64 }
			>;
			/**
			 * Updated the score of some account to the given amount.
			 **/
			ScoreUpdated: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, newScore: u64],
				{ who: SeedPrimitivesSignatureAccountId20; newScore: u64 }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		xls20: {
			/**
			 * A new relayer has been set
			 **/
			RelayerSet: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20],
				{ account: SeedPrimitivesSignatureAccountId20 }
			>;
			/**
			 * Xls20 collection mappings have been set
			 **/
			Xls20CollectionMappingsSet: AugmentedEvent<
				ApiType,
				[mappings: Vec<ITuple<[u32, PalletXls20Xls20Collection]>>],
				{ mappings: Vec<ITuple<[u32, PalletXls20Xls20Collection]>> }
			>;
			/**
			 * A collection has had XLS-20 compatibility enabled
			 **/
			Xls20CompatibilityEnabled: AugmentedEvent<
				ApiType,
				[collectionId: u32],
				{ collectionId: u32 }
			>;
			/**
			 * A new XLS20 mapping has been set
			 **/
			Xls20MappingSet: AugmentedEvent<
				ApiType,
				[collectionId: u32, mappings: Vec<ITuple<[u32, U8aFixed]>>],
				{ collectionId: u32; mappings: Vec<ITuple<[u32, U8aFixed]>> }
			>;
			/**
			 * Additional mint fee for XLS-20 mint has been paid to relayer
			 **/
			Xls20MintFeePaid: AugmentedEvent<
				ApiType,
				[collectionOwner: SeedPrimitivesSignatureAccountId20, totalFee: u128],
				{ collectionOwner: SeedPrimitivesSignatureAccountId20; totalFee: u128 }
			>;
			/**
			 * A new Xls20 Mint Fee has been set
			 **/
			Xls20MintFeeSet: AugmentedEvent<ApiType, [newFee: u128], { newFee: u128 }>;
			/**
			 * Request sent to XLS20 Relayer
			 **/
			Xls20MintRequest: AugmentedEvent<
				ApiType,
				[collectionId: u32, serialNumbers: Vec<u32>, tokenUris: Vec<Bytes>],
				{ collectionId: u32; serialNumbers: Vec<u32>; tokenUris: Vec<Bytes> }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		xrpl: {
			/**
			 * XRPL transaction with encoded extrinsic executed
			 **/
			XRPLExtrinsicExecuted: AugmentedEvent<
				ApiType,
				[
					publicKey: PalletXrplXrplPublicKey,
					caller: SeedPrimitivesSignatureAccountId20,
					rAddress: Text,
					call: Call,
				],
				{
					publicKey: PalletXrplXrplPublicKey;
					caller: SeedPrimitivesSignatureAccountId20;
					rAddress: Text;
					call: Call;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		xrplBridge: {
			/**
			 * XRPL Door address set/reset
			 **/
			DoorAddressSet: AugmentedEvent<
				ApiType,
				[doorAccount: PalletXrplBridgeXrplDoorAccount, address: Option<H160>],
				{ doorAccount: PalletXrplBridgeXrplDoorAccount; address: Option<H160> }
			>;
			/**
			 * Next ticket sequence params set for the XRPL door account
			 **/
			DoorNextTicketSequenceParamSet: AugmentedEvent<
				ApiType,
				[
					doorAccount: PalletXrplBridgeXrplDoorAccount,
					ticketSequenceStartNext: u32,
					ticketBucketSizeNext: u32,
				],
				{
					doorAccount: PalletXrplBridgeXrplDoorAccount;
					ticketSequenceStartNext: u32;
					ticketBucketSizeNext: u32;
				}
			>;
			/**
			 * ticket sequence params set for the XRPL door account
			 **/
			DoorTicketSequenceParamSet: AugmentedEvent<
				ApiType,
				[
					doorAccount: PalletXrplBridgeXrplDoorAccount,
					ticketSequence: u32,
					ticketSequenceStart: u32,
					ticketBucketSize: u32,
				],
				{
					doorAccount: PalletXrplBridgeXrplDoorAccount;
					ticketSequence: u32;
					ticketSequenceStart: u32;
					ticketBucketSize: u32;
				}
			>;
			LedgerIndexManualPrune: AugmentedEvent<
				ApiType,
				[ledgerIndex: u32, totalCleared: u32],
				{ ledgerIndex: u32; totalCleared: u32 }
			>;
			/**
			 * Transaction not supported
			 **/
			NotSupportedTransaction: AugmentedEvent<ApiType, []>;
			/**
			 * The payment delay was removed
			 **/
			PaymentDelayRemoved: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * The payment delay was set
			 **/
			PaymentDelaySet: AugmentedEvent<
				ApiType,
				[assetId: u32, paymentThreshold: u128, delay: u32],
				{ assetId: u32; paymentThreshold: u128; delay: u32 }
			>;
			/**
			 * Processing an event failed
			 **/
			ProcessingFailed: AugmentedEvent<ApiType, [u64, H512, SpRuntimeDispatchError]>;
			/**
			 * Processing an event succeeded
			 **/
			ProcessingOk: AugmentedEvent<ApiType, [u64, H512]>;
			RelayerAdded: AugmentedEvent<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			RelayerRemoved: AugmentedEvent<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * ticket sequence threshold reached for the XRPL door account
			 **/
			TicketSequenceThresholdReached: AugmentedEvent<
				ApiType,
				[doorAccount: PalletXrplBridgeXrplDoorAccount, currentTicket: u32],
				{ doorAccount: PalletXrplBridgeXrplDoorAccount; currentTicket: u32 }
			>;
			TransactionAdded: AugmentedEvent<ApiType, [u64, H512]>;
			TransactionChallenge: AugmentedEvent<ApiType, [u64, H512]>;
			/**
			 * A withdrawal was delayed as it was above the min_payment threshold
			 **/
			WithdrawDelayed: AugmentedEvent<
				ApiType,
				[
					sender: SeedPrimitivesSignatureAccountId20,
					assetId: u32,
					amount: u128,
					destination: H160,
					delayedPaymentId: u64,
					paymentBlock: u32,
				],
				{
					sender: SeedPrimitivesSignatureAccountId20;
					assetId: u32;
					amount: u128;
					destination: H160;
					delayedPaymentId: u64;
					paymentBlock: u32;
				}
			>;
			/**
			 * Request to withdraw some XRP amount to XRPL
			 **/
			WithdrawRequest: AugmentedEvent<
				ApiType,
				[
					proofId: u64,
					sender: SeedPrimitivesSignatureAccountId20,
					assetId: u32,
					amount: u128,
					destination: H160,
				],
				{
					proofId: u64;
					sender: SeedPrimitivesSignatureAccountId20;
					assetId: u32;
					amount: u128;
					destination: H160;
				}
			>;
			XrplAssetMapRemoved: AugmentedEvent<
				ApiType,
				[assetId: u32, xrplCurrency: PalletXrplBridgeXrplCurrency],
				{ assetId: u32; xrplCurrency: PalletXrplBridgeXrplCurrency }
			>;
			XrplAssetMapSet: AugmentedEvent<
				ApiType,
				[assetId: u32, xrplCurrency: PalletXrplBridgeXrplCurrency],
				{ assetId: u32; xrplCurrency: PalletXrplBridgeXrplCurrency }
			>;
			/**
			 * Submit XRPL Tx signing request
			 **/
			XrplTxSignRequest: AugmentedEvent<
				ApiType,
				[proofId: u64, tx: PalletXrplBridgeXrplTransaction],
				{ proofId: u64; tx: PalletXrplBridgeXrplTransaction }
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
	} // AugmentedEvents
} // declare module
