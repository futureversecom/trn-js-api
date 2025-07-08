// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/submittable";

import type {
	ApiTypes,
	AugmentedSubmittable,
	SubmittableExtrinsic,
	SubmittableExtrinsicFunction,
} from "@polkadot/api-base/types";
import type {
	BTreeSet,
	Bytes,
	Compact,
	Option,
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
import type { AnyNumber, IMethod, ITuple } from "@polkadot/types-codec/types";
import type {
	EthereumTransactionTransactionV2,
	PalletElectionProviderMultiPhaseRawSolution,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletEthyNotarizationPayload,
	PalletImOnlineHeartbeat,
	PalletImOnlineSr25519AppSr25519Signature,
	PalletMarketplaceListingTokens,
	PalletMultisigTimepoint,
	PalletNfiFeeDetails,
	PalletNfiMultiChainTokenId,
	PalletNfiNfiDataType,
	PalletNfiNfiSubType,
	PalletStakingPalletConfigOpPerbill,
	PalletStakingPalletConfigOpPercent,
	PalletStakingPalletConfigOpU128,
	PalletStakingPalletConfigOpU32,
	PalletStakingRewardDestination,
	PalletStakingValidatorPrefs,
	PalletSyloActionPermissionsSpender,
	PalletSyloActionPermissionsTransactPermissionToken,
	PalletSyloActionPermissionsTransactPermissionTokenSignature,
	PalletXls20Xls20Collection,
	PalletXrplBridgeXrpTransaction,
	PalletXrplBridgeXrplCurrency,
	PalletXrplBridgeXrplDoorAccount,
	PalletXrplBridgeXrplTxData,
	SeedPalletCommonSyloDataPermission,
	SeedPalletCommonSyloResolverId,
	SeedPalletCommonUtilsCollectionUtilityFlags,
	SeedPalletCommonUtilsTokenBurnAuthority,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesEthyCryptoAppCryptoSignature,
	SeedPrimitivesNftCrossChainCompatibility,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesSignatureAccountId20,
	SeedRuntimeImplsProxyType,
	SeedRuntimeOriginCaller,
	SeedRuntimeSessionKeys,
	SpConsensusBabeDigestsNextConfigDescriptor,
	SpConsensusGrandpaEquivocationProof,
	SpConsensusSlotsEquivocationProof,
	SpNposElectionsElectionScore,
	SpNposElectionsSupport,
	SpSessionMembershipProof,
	SpWeightsWeightV2Weight,
} from "@polkadot/types/lookup";
import type {
	Call,
	H160,
	H256,
	H512,
	Perbill,
	Percent,
	Permill,
} from "@therootnetwork/api-types/interfaces/runtime";

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> =
	SubmittableExtrinsicFunction<ApiType>;

declare module "@polkadot/api-base/types/submittable" {
	interface AugmentedSubmittables<ApiType extends ApiTypes> {
		assets: {
			/**
			 * See [`Pallet::approve_transfer`].
			 **/
			approveTransfer: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::block`].
			 **/
			block: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::burn`].
			 **/
			burn: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::cancel_approval`].
			 **/
			cancelApproval: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::clear_metadata`].
			 **/
			clearMetadata: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::create`].
			 **/
			create: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					minBalance: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, u128]
			>;
			/**
			 * See [`Pallet::destroy_accounts`].
			 **/
			destroyAccounts: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::destroy_approvals`].
			 **/
			destroyApprovals: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::finish_destroy`].
			 **/
			finishDestroy: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::force_asset_status`].
			 **/
			forceAssetStatus: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					issuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					freezer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					minBalance: Compact<u128> | AnyNumber | Uint8Array,
					isSufficient: bool | boolean | Uint8Array,
					isFrozen: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					Compact<u128>,
					bool,
					bool,
				]
			>;
			/**
			 * See [`Pallet::force_cancel_approval`].
			 **/
			forceCancelApproval: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::force_clear_metadata`].
			 **/
			forceClearMetadata: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::force_create`].
			 **/
			forceCreate: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					isSufficient: bool | boolean | Uint8Array,
					minBalance: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, bool, Compact<u128>]
			>;
			/**
			 * See [`Pallet::force_set_metadata`].
			 **/
			forceSetMetadata: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array,
					symbol: Bytes | string | Uint8Array,
					decimals: u8 | AnyNumber | Uint8Array,
					isFrozen: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes, Bytes, u8, bool]
			>;
			/**
			 * See [`Pallet::force_transfer`].
			 **/
			forceTransfer: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					source: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::freeze`].
			 **/
			freeze: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::freeze_asset`].
			 **/
			freezeAsset: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					beneficiary: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::refund`].
			 **/
			refund: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					allowBurn: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, bool]
			>;
			/**
			 * See [`Pallet::refund_other`].
			 **/
			refundOther: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_metadata`].
			 **/
			setMetadata: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array,
					symbol: Bytes | string | Uint8Array,
					decimals: u8 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes, Bytes, u8]
			>;
			/**
			 * See [`Pallet::set_min_balance`].
			 **/
			setMinBalance: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					minBalance: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128]
			>;
			/**
			 * See [`Pallet::set_team`].
			 **/
			setTeam: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					issuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					freezer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
				]
			>;
			/**
			 * See [`Pallet::start_destroy`].
			 **/
			startDestroy: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::thaw`].
			 **/
			thaw: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::thaw_asset`].
			 **/
			thawAsset: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::touch`].
			 **/
			touch: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::touch_other`].
			 **/
			touchOther: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					target: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_approved`].
			 **/
			transferApproved: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					destination: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_keep_alive`].
			 **/
			transferKeepAlive: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					target: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_ownership`].
			 **/
			transferOwnership: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		assetsExt: {
			/**
			 * See [`Pallet::burn_from`].
			 **/
			burnFrom: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::create_asset`].
			 **/
			createAsset: AugmentedSubmittable<
				(
					name: Bytes | string | Uint8Array,
					symbol: Bytes | string | Uint8Array,
					decimals: u8 | AnyNumber | Uint8Array,
					minBalance: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					owner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Bytes, u8, Option<u128>, Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					beneficiary: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::set_asset_deposit`].
			 **/
			setAssetDeposit: AugmentedSubmittable<
				(assetDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					destination: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					keepAlive: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20, Compact<u128>, bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		babe: {
			/**
			 * See [`Pallet::plan_config_change`].
			 **/
			planConfigChange: AugmentedSubmittable<
				(
					config: SpConsensusBabeDigestsNextConfigDescriptor | { V1: any } | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusBabeDigestsNextConfigDescriptor]
			>;
			/**
			 * See [`Pallet::report_equivocation`].
			 **/
			reportEquivocation: AugmentedSubmittable<
				(
					equivocationProof:
						| SpConsensusSlotsEquivocationProof
						| { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any }
						| string
						| Uint8Array,
					keyOwnerProof:
						| SpSessionMembershipProof
						| { session?: any; trieNodes?: any; validatorCount?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]
			>;
			/**
			 * See [`Pallet::report_equivocation_unsigned`].
			 **/
			reportEquivocationUnsigned: AugmentedSubmittable<
				(
					equivocationProof:
						| SpConsensusSlotsEquivocationProof
						| { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any }
						| string
						| Uint8Array,
					keyOwnerProof:
						| SpSessionMembershipProof
						| { session?: any; trieNodes?: any; validatorCount?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		balances: {
			/**
			 * See [`Pallet::force_set_balance`].
			 **/
			forceSetBalance: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					newFree: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::force_transfer`].
			 **/
			forceTransfer: AugmentedSubmittable<
				(
					source: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::force_unreserve`].
			 **/
			forceUnreserve: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u128]
			>;
			/**
			 * See [`Pallet::set_balance_deprecated`].
			 **/
			setBalanceDeprecated: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					newFree: Compact<u128> | AnyNumber | Uint8Array,
					oldReserved: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_all`].
			 **/
			transferAll: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					keepAlive: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, bool]
			>;
			/**
			 * See [`Pallet::transfer_allow_death`].
			 **/
			transferAllowDeath: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_keep_alive`].
			 **/
			transferKeepAlive: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * See [`Pallet::upgrade_accounts`].
			 **/
			upgradeAccounts: AugmentedSubmittable<
				(
					who:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		crowdsale: {
			/**
			 * See [`Pallet::claim_voucher`].
			 **/
			claimVoucher: AugmentedSubmittable<
				(saleId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::distribute_crowdsale_rewards`].
			 **/
			distributeCrowdsaleRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::enable`].
			 **/
			enable: AugmentedSubmittable<
				(saleId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::initialize`].
			 **/
			initialize: AugmentedSubmittable<
				(
					paymentAssetId: u32 | AnyNumber | Uint8Array,
					collectionId: u32 | AnyNumber | Uint8Array,
					softCapPrice: u128 | AnyNumber | Uint8Array,
					saleDuration: u32 | AnyNumber | Uint8Array,
					voucherName: Option<Bytes> | null | Uint8Array | Bytes | string,
					voucherSymbol: Option<Bytes> | null | Uint8Array | Bytes | string
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u128, u32, Option<Bytes>, Option<Bytes>]
			>;
			/**
			 * See [`Pallet::participate`].
			 **/
			participate: AugmentedSubmittable<
				(
					saleId: u64 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u64, u128]
			>;
			/**
			 * See [`Pallet::proxy_vault_call`].
			 **/
			proxyVaultCall: AugmentedSubmittable<
				(
					saleId: u64 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u64, Call]
			>;
			/**
			 * See [`Pallet::redeem_voucher`].
			 **/
			redeemVoucher: AugmentedSubmittable<
				(
					saleId: u64 | AnyNumber | Uint8Array,
					quantity: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u64, u32]
			>;
			/**
			 * See [`Pallet::try_force_distribution`].
			 **/
			tryForceDistribution: AugmentedSubmittable<
				(saleId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		dex: {
			/**
			 * See [`Pallet::add_liquidity`].
			 **/
			addLiquidity: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array,
					amountADesired: Compact<u128> | AnyNumber | Uint8Array,
					amountBDesired: Compact<u128> | AnyNumber | Uint8Array,
					amountAMin: Compact<u128> | AnyNumber | Uint8Array,
					amountBMin: Compact<u128> | AnyNumber | Uint8Array,
					to:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					deadline: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					u32,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Option<SeedPrimitivesSignatureAccountId20>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::disable_trading_pair`].
			 **/
			disableTradingPair: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::reenable_trading_pair`].
			 **/
			reenableTradingPair: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::remove_liquidity`].
			 **/
			removeLiquidity: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array,
					liquidity: Compact<u128> | AnyNumber | Uint8Array,
					amountAMin: Compact<u128> | AnyNumber | Uint8Array,
					amountBMin: Compact<u128> | AnyNumber | Uint8Array,
					to:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					deadline: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					u32,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Option<SeedPrimitivesSignatureAccountId20>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::set_fee_to`].
			 **/
			setFeeTo: AugmentedSubmittable<
				(
					feeTo:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::swap_with_exact_supply`].
			 **/
			swapWithExactSupply: AugmentedSubmittable<
				(
					amountIn: Compact<u128> | AnyNumber | Uint8Array,
					amountOutMin: Compact<u128> | AnyNumber | Uint8Array,
					path: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					to:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					deadline: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u128>,
					Compact<u128>,
					Vec<u32>,
					Option<SeedPrimitivesSignatureAccountId20>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::swap_with_exact_target`].
			 **/
			swapWithExactTarget: AugmentedSubmittable<
				(
					amountOut: Compact<u128> | AnyNumber | Uint8Array,
					amountInMax: Compact<u128> | AnyNumber | Uint8Array,
					path: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					to:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					deadline: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u128>,
					Compact<u128>,
					Vec<u32>,
					Option<SeedPrimitivesSignatureAccountId20>,
					Option<u32>,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		doughnut: {
			/**
			 * See [`Pallet::revoke_doughnut`].
			 **/
			revokeDoughnut: AugmentedSubmittable<
				(
					doughnut: Bytes | string | Uint8Array,
					revoke: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, bool]
			>;
			/**
			 * See [`Pallet::revoke_holder`].
			 **/
			revokeHolder: AugmentedSubmittable<
				(
					holder: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					revoke: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, bool]
			>;
			/**
			 * See [`Pallet::transact`].
			 **/
			transact: AugmentedSubmittable<
				(
					call: Call | IMethod | string | Uint8Array,
					doughnut: Bytes | string | Uint8Array,
					nonce: u32 | AnyNumber | Uint8Array,
					genesisHash: H256 | string | Uint8Array,
					tip: u64 | AnyNumber | Uint8Array,
					signature: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Call, Bytes, u32, H256, u64, Bytes]
			>;
			/**
			 * See [`Pallet::update_whitelisted_holders`].
			 **/
			updateWhitelistedHolders: AugmentedSubmittable<
				(
					holder: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					add: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		echo: {
			/**
			 * See [`Pallet::ping`].
			 **/
			ping: AugmentedSubmittable<
				(destination: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * See [`Pallet::governance_fallback`].
			 **/
			governanceFallback: AugmentedSubmittable<
				(
					maybeMaxVoters: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					maybeMaxTargets: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[Option<u32>, Option<u32>]
			>;
			/**
			 * See [`Pallet::set_emergency_election_result`].
			 **/
			setEmergencyElectionResult: AugmentedSubmittable<
				(
					supports:
						| Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SpNposElectionsSupport]>>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								SpNposElectionsSupport | { total?: any; voters?: any } | string | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SpNposElectionsSupport]>>]
			>;
			/**
			 * See [`Pallet::set_minimum_untrusted_score`].
			 **/
			setMinimumUntrustedScore: AugmentedSubmittable<
				(
					maybeNextScore:
						| Option<SpNposElectionsElectionScore>
						| null
						| Uint8Array
						| SpNposElectionsElectionScore
						| { minimalStake?: any; sumStake?: any; sumStakeSquared?: any }
						| string
				) => SubmittableExtrinsic<ApiType>,
				[Option<SpNposElectionsElectionScore>]
			>;
			/**
			 * See [`Pallet::submit`].
			 **/
			submit: AugmentedSubmittable<
				(
					rawSolution:
						| PalletElectionProviderMultiPhaseRawSolution
						| { solution?: any; score?: any; round?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletElectionProviderMultiPhaseRawSolution]
			>;
			/**
			 * See [`Pallet::submit_unsigned`].
			 **/
			submitUnsigned: AugmentedSubmittable<
				(
					rawSolution:
						| PalletElectionProviderMultiPhaseRawSolution
						| { solution?: any; score?: any; round?: any }
						| string
						| Uint8Array,
					witness:
						| PalletElectionProviderMultiPhaseSolutionOrSnapshotSize
						| { voters?: any; targets?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					PalletElectionProviderMultiPhaseRawSolution,
					PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		erc20Peg: {
			/**
			 * See [`Pallet::activate_deposits`].
			 **/
			activateDeposits: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::activate_deposits_delay`].
			 **/
			activateDepositsDelay: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::activate_withdrawals`].
			 **/
			activateWithdrawals: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::activate_withdrawals_delay`].
			 **/
			activateWithdrawalsDelay: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::claim_delayed_payment`].
			 **/
			claimDelayedPayment: AugmentedSubmittable<
				(
					blockNumber: u32 | AnyNumber | Uint8Array,
					paymentId: u64 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u64]
			>;
			/**
			 * See [`Pallet::set_erc20_asset_map`].
			 **/
			setErc20AssetMap: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					ethAddress: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, H160]
			>;
			/**
			 * See [`Pallet::set_erc20_meta`].
			 **/
			setErc20Meta: AugmentedSubmittable<
				(
					details:
						| Vec<ITuple<[H160, Bytes, u8]>>
						| [
								H160 | string | Uint8Array,
								Bytes | string | Uint8Array,
								u8 | AnyNumber | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[H160, Bytes, u8]>>]
			>;
			/**
			 * See [`Pallet::set_erc20_peg_address`].
			 **/
			setErc20PegAddress: AugmentedSubmittable<
				(ethAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * See [`Pallet::set_payment_delay`].
			 **/
			setPaymentDelay: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					minBalance: u128 | AnyNumber | Uint8Array,
					delay: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u32]
			>;
			/**
			 * See [`Pallet::set_root_peg_address`].
			 **/
			setRootPegAddress: AugmentedSubmittable<
				(ethAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * See [`Pallet::withdraw`].
			 **/
			withdraw: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					beneficiary: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, H160]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		ethBridge: {
			/**
			 * See [`Pallet::deposit_relayer_bond`].
			 **/
			depositRelayerBond: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::finalise_authorities_change`].
			 **/
			finaliseAuthoritiesChange: AugmentedSubmittable<
				(
					nextNotaryKeys:
						| Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>
						| (SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>]
			>;
			/**
			 * See [`Pallet::remove_missing_event_id`].
			 **/
			removeMissingEventId: AugmentedSubmittable<
				(
					eventIdRange:
						| ITuple<[u64, u64]>
						| [u64 | AnyNumber | Uint8Array, u64 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u64, u64]>]
			>;
			/**
			 * See [`Pallet::set_bridge_paused`].
			 **/
			setBridgePaused: AugmentedSubmittable<
				(paused: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::set_challenge_period`].
			 **/
			setChallengePeriod: AugmentedSubmittable<
				(blocks: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_contract_address`].
			 **/
			setContractAddress: AugmentedSubmittable<
				(contractAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * See [`Pallet::set_delayed_event_proofs_per_block`].
			 **/
			setDelayedEventProofsPerBlock: AugmentedSubmittable<
				(count: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u8]
			>;
			/**
			 * See [`Pallet::set_event_block_confirmations`].
			 **/
			setEventBlockConfirmations: AugmentedSubmittable<
				(confirmations: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::set_relayer`].
			 **/
			setRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_xrpl_door_signers`].
			 **/
			setXrplDoorSigners: AugmentedSubmittable<
				(
					newSigners:
						| Vec<ITuple<[SeedPrimitivesEthyCryptoAppCryptoPublic, bool]>>
						| [
								SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array,
								bool | boolean | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[SeedPrimitivesEthyCryptoAppCryptoPublic, bool]>>]
			>;
			/**
			 * See [`Pallet::submit_challenge`].
			 **/
			submitChallenge: AugmentedSubmittable<
				(eventClaimId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::submit_event`].
			 **/
			submitEvent: AugmentedSubmittable<
				(
					txHash: H256 | string | Uint8Array,
					event: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H256, Bytes]
			>;
			/**
			 * See [`Pallet::submit_missing_event`].
			 **/
			submitMissingEvent: AugmentedSubmittable<
				(
					txHash: H256 | string | Uint8Array,
					event: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H256, Bytes]
			>;
			/**
			 * See [`Pallet::submit_notarization`].
			 **/
			submitNotarization: AugmentedSubmittable<
				(
					payload:
						| PalletEthyNotarizationPayload
						| { Call: any }
						| { Event: any }
						| string
						| Uint8Array,
					signature: SeedPrimitivesEthyCryptoAppCryptoSignature | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletEthyNotarizationPayload, SeedPrimitivesEthyCryptoAppCryptoSignature]
			>;
			/**
			 * See [`Pallet::withdraw_relayer_bond`].
			 **/
			withdrawRelayerBond: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		ethereum: {
			/**
			 * See [`Pallet::transact`].
			 **/
			transact: AugmentedSubmittable<
				(
					transaction:
						| EthereumTransactionTransactionV2
						| { Legacy: any }
						| { EIP2930: any }
						| { EIP1559: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[EthereumTransactionTransactionV2]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		evm: {
			/**
			 * See [`Pallet::call`].
			 **/
			call: AugmentedSubmittable<
				(
					source: H160 | string | Uint8Array,
					target: H160 | string | Uint8Array,
					input: Bytes | string | Uint8Array,
					value: U256 | AnyNumber | Uint8Array,
					gasLimit: u64 | AnyNumber | Uint8Array,
					maxFeePerGas: U256 | AnyNumber | Uint8Array,
					maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					accessList:
						| Vec<ITuple<[H160, Vec<H256>]>>
						| [H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]][]
				) => SubmittableExtrinsic<ApiType>,
				[
					H160,
					H160,
					Bytes,
					U256,
					u64,
					U256,
					Option<U256>,
					Option<U256>,
					Vec<ITuple<[H160, Vec<H256>]>>,
				]
			>;
			/**
			 * See [`Pallet::create`].
			 **/
			create: AugmentedSubmittable<
				(
					source: H160 | string | Uint8Array,
					init: Bytes | string | Uint8Array,
					value: U256 | AnyNumber | Uint8Array,
					gasLimit: u64 | AnyNumber | Uint8Array,
					maxFeePerGas: U256 | AnyNumber | Uint8Array,
					maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					accessList:
						| Vec<ITuple<[H160, Vec<H256>]>>
						| [H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]][]
				) => SubmittableExtrinsic<ApiType>,
				[H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]
			>;
			/**
			 * See [`Pallet::create2`].
			 **/
			create2: AugmentedSubmittable<
				(
					source: H160 | string | Uint8Array,
					init: Bytes | string | Uint8Array,
					salt: H256 | string | Uint8Array,
					value: U256 | AnyNumber | Uint8Array,
					gasLimit: u64 | AnyNumber | Uint8Array,
					maxFeePerGas: U256 | AnyNumber | Uint8Array,
					maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
					accessList:
						| Vec<ITuple<[H160, Vec<H256>]>>
						| [H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]][]
				) => SubmittableExtrinsic<ApiType>,
				[
					H160,
					Bytes,
					H256,
					U256,
					u64,
					U256,
					Option<U256>,
					Option<U256>,
					Vec<ITuple<[H160, Vec<H256>]>>,
				]
			>;
			/**
			 * See [`Pallet::withdraw`].
			 **/
			withdraw: AugmentedSubmittable<
				(
					address: H160 | string | Uint8Array,
					value: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H160, u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		evmChainId: {
			/**
			 * See [`Pallet::set_chain_id`].
			 **/
			setChainId: AugmentedSubmittable<
				(chainId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u64>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		feeControl: {
			/**
			 * See [`Pallet::set_evm_base_fee`].
			 **/
			setEvmBaseFee: AugmentedSubmittable<
				(value: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[U256]
			>;
			/**
			 * See [`Pallet::set_length_multiplier`].
			 **/
			setLengthMultiplier: AugmentedSubmittable<
				(value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::set_weight_multiplier`].
			 **/
			setWeightMultiplier: AugmentedSubmittable<
				(value: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Perbill]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		feeProxy: {
			/**
			 * See [`Pallet::call_with_fee_preferences`].
			 **/
			callWithFeePreferences: AugmentedSubmittable<
				(
					paymentAsset: u32 | AnyNumber | Uint8Array,
					maxPayment: u128 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, Call]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		futurepass: {
			/**
			 * See [`Pallet::create`].
			 **/
			create: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::proxy_extrinsic`].
			 **/
			proxyExtrinsic: AugmentedSubmittable<
				(
					futurepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * See [`Pallet::register_delegate_with_signature`].
			 **/
			registerDelegateWithSignature: AugmentedSubmittable<
				(
					futurepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					proxyType:
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number
						| Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
					signature: U8aFixed | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					SeedRuntimeImplsProxyType,
					u32,
					U8aFixed,
				]
			>;
			/**
			 * See [`Pallet::transfer_futurepass`].
			 **/
			transferFuturepass: AugmentedSubmittable<
				(
					currentOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					newOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::unregister_delegate`].
			 **/
			unregisterDelegate: AugmentedSubmittable<
				(
					futurepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		grandpa: {
			/**
			 * See [`Pallet::note_stalled`].
			 **/
			noteStalled: AugmentedSubmittable<
				(
					delay: u32 | AnyNumber | Uint8Array,
					bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::report_equivocation`].
			 **/
			reportEquivocation: AugmentedSubmittable<
				(
					equivocationProof:
						| SpConsensusGrandpaEquivocationProof
						| { setId?: any; equivocation?: any }
						| string
						| Uint8Array,
					keyOwnerProof:
						| SpSessionMembershipProof
						| { session?: any; trieNodes?: any; validatorCount?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]
			>;
			/**
			 * See [`Pallet::report_equivocation_unsigned`].
			 **/
			reportEquivocationUnsigned: AugmentedSubmittable<
				(
					equivocationProof:
						| SpConsensusGrandpaEquivocationProof
						| { setId?: any; equivocation?: any }
						| string
						| Uint8Array,
					keyOwnerProof:
						| SpSessionMembershipProof
						| { session?: any; trieNodes?: any; validatorCount?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		imOnline: {
			/**
			 * See [`Pallet::heartbeat`].
			 **/
			heartbeat: AugmentedSubmittable<
				(
					heartbeat:
						| PalletImOnlineHeartbeat
						| { blockNumber?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any }
						| string
						| Uint8Array,
					signature: PalletImOnlineSr25519AppSr25519Signature | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		liquidityPools: {
			/**
			 * See [`Pallet::claim_reward`].
			 **/
			claimReward: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::close_pool`].
			 **/
			closePool: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::create_pool`].
			 **/
			createPool: AugmentedSubmittable<
				(
					rewardAssetId: u32 | AnyNumber | Uint8Array,
					stakedAssetId: u32 | AnyNumber | Uint8Array,
					interestRate: u32 | AnyNumber | Uint8Array,
					maxTokens: u128 | AnyNumber | Uint8Array,
					lockStartBlock: u32 | AnyNumber | Uint8Array,
					lockEndBlock: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u128, u32, u32]
			>;
			/**
			 * See [`Pallet::enter_pool`].
			 **/
			enterPool: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128]
			>;
			/**
			 * See [`Pallet::exit_pool`].
			 **/
			exitPool: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::rollover_unsigned`].
			 **/
			rolloverUnsigned: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					currentBlock: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::set_pool_rollover`].
			 **/
			setPoolRollover: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					shouldRollover: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, bool]
			>;
			/**
			 * See [`Pallet::set_pool_succession`].
			 **/
			setPoolSuccession: AugmentedSubmittable<
				(
					predecessorPoolId: u32 | AnyNumber | Uint8Array,
					successorPoolId: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		maintenanceMode: {
			/**
			 * See [`Pallet::block_account`].
			 **/
			blockAccount: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					blocked: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, bool]
			>;
			/**
			 * See [`Pallet::block_call`].
			 **/
			blockCall: AugmentedSubmittable<
				(
					palletName: Bytes | string | Uint8Array,
					callName: Bytes | string | Uint8Array,
					blocked: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Bytes, bool]
			>;
			/**
			 * See [`Pallet::block_evm_target`].
			 **/
			blockEvmTarget: AugmentedSubmittable<
				(
					targetAddress: H160 | string | Uint8Array,
					blocked: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H160, bool]
			>;
			/**
			 * See [`Pallet::block_pallet`].
			 **/
			blockPallet: AugmentedSubmittable<
				(
					palletName: Bytes | string | Uint8Array,
					blocked: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, bool]
			>;
			/**
			 * See [`Pallet::enable_maintenance_mode`].
			 **/
			enableMaintenanceMode: AugmentedSubmittable<
				(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		marketplace: {
			/**
			 * See [`Pallet::accept_offer`].
			 **/
			acceptOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::auction`].
			 **/
			auction: AugmentedSubmittable<
				(
					tokens:
						| PalletMarketplaceListingTokens
						| { Nft: any }
						| { Sft: any }
						| string
						| Uint8Array,
					paymentAsset: u32 | AnyNumber | Uint8Array,
					reservePrice: u128 | AnyNumber | Uint8Array,
					duration: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					marketplaceId: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[PalletMarketplaceListingTokens, u32, u128, Option<u32>, Option<u32>]
			>;
			/**
			 * See [`Pallet::auction_nft`].
			 **/
			auctionNft: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					paymentAsset: u32 | AnyNumber | Uint8Array,
					reservePrice: u128 | AnyNumber | Uint8Array,
					duration: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					marketplaceId: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>, u32, u128, Option<u32>, Option<u32>]
			>;
			/**
			 * See [`Pallet::bid`].
			 **/
			bid: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * See [`Pallet::buy`].
			 **/
			buy: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::buy_multi`].
			 **/
			buyMulti: AugmentedSubmittable<
				(
					listingIds: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<u128>]
			>;
			/**
			 * See [`Pallet::cancel_offer`].
			 **/
			cancelOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::cancel_sale`].
			 **/
			cancelSale: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::make_simple_offer`].
			 **/
			makeSimpleOffer: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					amount: u128 | AnyNumber | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					marketplaceId: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, u128, u32, Option<u32>]
			>;
			/**
			 * See [`Pallet::register_marketplace`].
			 **/
			registerMarketplace: AugmentedSubmittable<
				(
					marketplaceAccount:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					entitlement: Permill | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Option<SeedPrimitivesSignatureAccountId20>, Permill]
			>;
			/**
			 * See [`Pallet::sell`].
			 **/
			sell: AugmentedSubmittable<
				(
					tokens:
						| PalletMarketplaceListingTokens
						| { Nft: any }
						| { Sft: any }
						| string
						| Uint8Array,
					buyer:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					paymentAsset: u32 | AnyNumber | Uint8Array,
					fixedPrice: u128 | AnyNumber | Uint8Array,
					duration: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					marketplaceId: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					PalletMarketplaceListingTokens,
					Option<SeedPrimitivesSignatureAccountId20>,
					u32,
					u128,
					Option<u32>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::sell_nft`].
			 **/
			sellNft: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					buyer:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					paymentAsset: u32 | AnyNumber | Uint8Array,
					fixedPrice: u128 | AnyNumber | Uint8Array,
					duration: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					marketplaceId: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					Vec<u32>,
					Option<SeedPrimitivesSignatureAccountId20>,
					u32,
					u128,
					Option<u32>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::set_fee_to`].
			 **/
			setFeeTo: AugmentedSubmittable<
				(
					feeTo:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::update_fixed_price`].
			 **/
			updateFixedPrice: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					newPrice: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		migration: {
			/**
			 * See [`Pallet::enable_migration`].
			 **/
			enableMigration: AugmentedSubmittable<
				(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::set_block_delay`].
			 **/
			setBlockDelay: AugmentedSubmittable<
				(
					blockDelay: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[Option<u32>]
			>;
			/**
			 * See [`Pallet::set_block_limit`].
			 **/
			setBlockLimit: AugmentedSubmittable<
				(blockLimit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		multisig: {
			/**
			 * See [`Pallet::approve_as_multi`].
			 **/
			approveAsMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[],
					maybeTimepoint:
						| Option<PalletMultisigTimepoint>
						| null
						| Uint8Array
						| PalletMultisigTimepoint
						| { height?: any; index?: any }
						| string,
					callHash: U8aFixed | string | Uint8Array,
					maxWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					u16,
					Vec<SeedPrimitivesSignatureAccountId20>,
					Option<PalletMultisigTimepoint>,
					U8aFixed,
					SpWeightsWeightV2Weight,
				]
			>;
			/**
			 * See [`Pallet::as_multi`].
			 **/
			asMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[],
					maybeTimepoint:
						| Option<PalletMultisigTimepoint>
						| null
						| Uint8Array
						| PalletMultisigTimepoint
						| { height?: any; index?: any }
						| string,
					call: Call | IMethod | string | Uint8Array,
					maxWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					u16,
					Vec<SeedPrimitivesSignatureAccountId20>,
					Option<PalletMultisigTimepoint>,
					Call,
					SpWeightsWeightV2Weight,
				]
			>;
			/**
			 * See [`Pallet::as_multi_threshold_1`].
			 **/
			asMultiThreshold1: AugmentedSubmittable<
				(
					otherSignatories:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[],
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>, Call]
			>;
			/**
			 * See [`Pallet::cancel_as_multi`].
			 **/
			cancelAsMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[],
					timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array,
					callHash: U8aFixed | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u16, Vec<SeedPrimitivesSignatureAccountId20>, PalletMultisigTimepoint, U8aFixed]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		nfi: {
			/**
			 * See [`Pallet::enable_nfi_for_trn_collection`].
			 **/
			enableNfiForTrnCollection: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					subType: PalletNfiNfiSubType | "NFI" | number | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, PalletNfiNfiSubType]
			>;
			/**
			 * See [`Pallet::manual_data_request`].
			 **/
			manualDataRequest: AugmentedSubmittable<
				(
					tokenId:
						| PalletNfiMultiChainTokenId
						| { chainId?: any; collectionId?: any; serialNumber?: any }
						| string
						| Uint8Array,
					subType: PalletNfiNfiSubType | "NFI" | number | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletNfiMultiChainTokenId, PalletNfiNfiSubType]
			>;
			/**
			 * See [`Pallet::set_fee_details`].
			 **/
			setFeeDetails: AugmentedSubmittable<
				(
					subType: PalletNfiNfiSubType | "NFI" | number | Uint8Array,
					feeDetails:
						| Option<PalletNfiFeeDetails>
						| null
						| Uint8Array
						| PalletNfiFeeDetails
						| { assetId?: any; amount?: any; receiver?: any }
						| string
				) => SubmittableExtrinsic<ApiType>,
				[PalletNfiNfiSubType, Option<PalletNfiFeeDetails>]
			>;
			/**
			 * See [`Pallet::set_fee_to`].
			 **/
			setFeeTo: AugmentedSubmittable<
				(
					feeTo:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::set_relayer`].
			 **/
			setRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::submit_nfi_data`].
			 **/
			submitNfiData: AugmentedSubmittable<
				(
					tokenId:
						| PalletNfiMultiChainTokenId
						| { chainId?: any; collectionId?: any; serialNumber?: any }
						| string
						| Uint8Array,
					dataItem: PalletNfiNfiDataType | { NFI: any } | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletNfiMultiChainTokenId, PalletNfiNfiDataType]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		nft: {
			/**
			 * See [`Pallet::accept_soulbound_issuance`].
			 **/
			acceptSoulboundIssuance: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					issuanceId: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::burn`].
			 **/
			burn: AugmentedSubmittable<
				(
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>]
			>;
			/**
			 * See [`Pallet::claim_unowned_collection`].
			 **/
			claimUnownedCollection: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::create_collection`].
			 **/
			createCollection: AugmentedSubmittable<
				(
					name: Bytes | string | Uint8Array,
					initialIssuance: u32 | AnyNumber | Uint8Array,
					maxIssuance: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					metadataScheme: Bytes | string | Uint8Array,
					royaltiesSchedule:
						| Option<SeedPrimitivesNftRoyaltiesSchedule>
						| null
						| Uint8Array
						| SeedPrimitivesNftRoyaltiesSchedule
						| { entitlements?: any }
						| string,
					crossChainCompatibility:
						| SeedPrimitivesNftCrossChainCompatibility
						| { xrpl?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					Bytes,
					u32,
					Option<u32>,
					Option<SeedPrimitivesSignatureAccountId20>,
					Bytes,
					Option<SeedPrimitivesNftRoyaltiesSchedule>,
					SeedPrimitivesNftCrossChainCompatibility,
				]
			>;
			/**
			 * See [`Pallet::issue_soulbound`].
			 **/
			issueSoulbound: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					quantity: u32 | AnyNumber | Uint8Array,
					tokenOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					burnAuthority:
						| SeedPalletCommonUtilsTokenBurnAuthority
						| "CollectionOwner"
						| "TokenOwner"
						| "Both"
						| "Neither"
						| number
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, SeedPrimitivesSignatureAccountId20, SeedPalletCommonUtilsTokenBurnAuthority]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					quantity: u32 | AnyNumber | Uint8Array,
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::mint_with_additional_data`].
			 **/
			mintWithAdditionalData: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					additionalData: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<SeedPrimitivesSignatureAccountId20>, Bytes]
			>;
			/**
			 * See [`Pallet::set_additional_data`].
			 **/
			setAdditionalData: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					additionalData: Option<Bytes> | null | Uint8Array | Bytes | string
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, Option<Bytes>]
			>;
			/**
			 * See [`Pallet::set_base_uri`].
			 **/
			setBaseUri: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					baseUri: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * See [`Pallet::set_max_issuance`].
			 **/
			setMaxIssuance: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					maxIssuance: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::set_mint_fee`].
			 **/
			setMintFee: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					pricingDetails:
						| Option<ITuple<[u32, u128]>>
						| null
						| Uint8Array
						| ITuple<[u32, u128]>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::set_name`].
			 **/
			setName: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * See [`Pallet::set_owner`].
			 **/
			setOwner: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_royalties_schedule`].
			 **/
			setRoyaltiesSchedule: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					royaltiesSchedule:
						| SeedPrimitivesNftRoyaltiesSchedule
						| { entitlements?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesNftRoyaltiesSchedule]
			>;
			/**
			 * See [`Pallet::set_token_transferable_flag`].
			 **/
			setTokenTransferableFlag: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					transferable: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, bool]
			>;
			/**
			 * See [`Pallet::set_utility_flags`].
			 **/
			setUtilityFlags: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					utilityFlags:
						| SeedPalletCommonUtilsCollectionUtilityFlags
						| { transferable?: any; burnable?: any; mintable?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPalletCommonUtilsCollectionUtilityFlags]
			>;
			/**
			 * See [`Pallet::toggle_public_mint`].
			 **/
			togglePublicMint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					enabled: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, bool]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		nftPeg: {
			/**
			 * See [`Pallet::reclaim_blocked_nfts`].
			 **/
			reclaimBlockedNfts: AugmentedSubmittable<
				(
					blockedMintId: u32 | AnyNumber | Uint8Array,
					destination: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, H160]
			>;
			/**
			 * See [`Pallet::set_contract_address`].
			 **/
			setContractAddress: AugmentedSubmittable<
				(contract: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * See [`Pallet::withdraw`].
			 **/
			withdraw: AugmentedSubmittable<
				(
					collectionIds: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					serialNumbers: Vec<Vec<u32>>,
					destination: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Vec<u32>, Vec<Vec<u32>>, H160]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		partnerAttribution: {
			/**
			 * See [`Pallet::attribute_account`].
			 **/
			attributeAccount: AugmentedSubmittable<
				(partnerId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::create_futurepass_with_partner`].
			 **/
			createFuturepassWithPartner: AugmentedSubmittable<
				(
					partnerId: u128 | AnyNumber | Uint8Array,
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::register_partner_account`].
			 **/
			registerPartnerAccount: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::update_partner_account`].
			 **/
			updatePartnerAccount: AugmentedSubmittable<
				(
					partnerId: Compact<u128> | AnyNumber | Uint8Array,
					partnerAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::upgrade_partner`].
			 **/
			upgradePartner: AugmentedSubmittable<
				(
					partnerId: Compact<u128> | AnyNumber | Uint8Array,
					feePercentage: Compact<Permill> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, Compact<Permill>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		preimage: {
			/**
			 * See [`Pallet::note_preimage`].
			 **/
			notePreimage: AugmentedSubmittable<
				(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::request_preimage`].
			 **/
			requestPreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::unnote_preimage`].
			 **/
			unnotePreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::unrequest_preimage`].
			 **/
			unrequestPreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		proxy: {
			/**
			 * See [`Pallet::add_proxy`].
			 **/
			addProxy: AugmentedSubmittable<
				(
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					proxyType:
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedRuntimeImplsProxyType, u32]
			>;
			/**
			 * See [`Pallet::announce`].
			 **/
			announce: AugmentedSubmittable<
				(
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * See [`Pallet::create_pure`].
			 **/
			createPure: AugmentedSubmittable<
				(
					proxyType:
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array,
					index: u16 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedRuntimeImplsProxyType, u32, u16]
			>;
			/**
			 * See [`Pallet::kill_pure`].
			 **/
			killPure: AugmentedSubmittable<
				(
					spawner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					proxyType:
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number
						| Uint8Array,
					index: u16 | AnyNumber | Uint8Array,
					height: Compact<u32> | AnyNumber | Uint8Array,
					extIndex: Compact<u32> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					SeedRuntimeImplsProxyType,
					u16,
					Compact<u32>,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::proxy`].
			 **/
			proxy: AugmentedSubmittable<
				(
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					forceProxyType:
						| Option<SeedRuntimeImplsProxyType>
						| null
						| Uint8Array
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Option<SeedRuntimeImplsProxyType>, Call]
			>;
			/**
			 * See [`Pallet::proxy_announced`].
			 **/
			proxyAnnounced: AugmentedSubmittable<
				(
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					forceProxyType:
						| Option<SeedRuntimeImplsProxyType>
						| null
						| Uint8Array
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					Option<SeedRuntimeImplsProxyType>,
					Call,
				]
			>;
			/**
			 * See [`Pallet::reject_announcement`].
			 **/
			rejectAnnouncement: AugmentedSubmittable<
				(
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * See [`Pallet::remove_announcement`].
			 **/
			removeAnnouncement: AugmentedSubmittable<
				(
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * See [`Pallet::remove_proxies`].
			 **/
			removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_proxy`].
			 **/
			removeProxy: AugmentedSubmittable<
				(
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					proxyType:
						| SeedRuntimeImplsProxyType
						| "NoPermission"
						| "Any"
						| "NonTransfer"
						| "Governance"
						| "Staking"
						| "Owner"
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedRuntimeImplsProxyType, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		recovery: {
			/**
			 * See [`Pallet::as_recovered`].
			 **/
			asRecovered: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * See [`Pallet::cancel_recovered`].
			 **/
			cancelRecovered: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::claim_recovery`].
			 **/
			claimRecovery: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::close_recovery`].
			 **/
			closeRecovery: AugmentedSubmittable<
				(
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::create_recovery`].
			 **/
			createRecovery: AugmentedSubmittable<
				(
					friends:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[],
					threshold: u16 | AnyNumber | Uint8Array,
					delayPeriod: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>, u16, u32]
			>;
			/**
			 * See [`Pallet::initiate_recovery`].
			 **/
			initiateRecovery: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::remove_recovery`].
			 **/
			removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::set_recovered`].
			 **/
			setRecovered: AugmentedSubmittable<
				(
					lost: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::vouch_recovery`].
			 **/
			vouchRecovery: AugmentedSubmittable<
				(
					lost: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		scheduler: {
			/**
			 * See [`Pallet::cancel`].
			 **/
			cancel: AugmentedSubmittable<
				(
					when: u32 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::cancel_named`].
			 **/
			cancelNamed: AugmentedSubmittable<
				(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[U8aFixed]
			>;
			/**
			 * See [`Pallet::schedule`].
			 **/
			schedule: AugmentedSubmittable<
				(
					when: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_after`].
			 **/
			scheduleAfter: AugmentedSubmittable<
				(
					after: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_named`].
			 **/
			scheduleNamed: AugmentedSubmittable<
				(
					id: U8aFixed | string | Uint8Array,
					when: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_named_after`].
			 **/
			scheduleNamedAfter: AugmentedSubmittable<
				(
					id: U8aFixed | string | Uint8Array,
					after: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		session: {
			/**
			 * See [`Pallet::purge_keys`].
			 **/
			purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::set_keys`].
			 **/
			setKeys: AugmentedSubmittable<
				(
					keys:
						| SeedRuntimeSessionKeys
						| { babe?: any; imOnline?: any; grandpa?: any; ethy?: any }
						| string
						| Uint8Array,
					proof: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedRuntimeSessionKeys, Bytes]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		sft: {
			/**
			 * See [`Pallet::accept_soulbound_issuance`].
			 **/
			acceptSoulboundIssuance: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					issuanceId: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::burn`].
			 **/
			burn: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::burn_as_collection_owner`].
			 **/
			burnAsCollectionOwner: AugmentedSubmittable<
				(
					tokenOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, Vec<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::create_collection`].
			 **/
			createCollection: AugmentedSubmittable<
				(
					collectionName: Bytes | string | Uint8Array,
					collectionOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					metadataScheme: Bytes | string | Uint8Array,
					royaltiesSchedule:
						| Option<SeedPrimitivesNftRoyaltiesSchedule>
						| null
						| Uint8Array
						| SeedPrimitivesNftRoyaltiesSchedule
						| { entitlements?: any }
						| string
				) => SubmittableExtrinsic<ApiType>,
				[
					Bytes,
					Option<SeedPrimitivesSignatureAccountId20>,
					Bytes,
					Option<SeedPrimitivesNftRoyaltiesSchedule>,
				]
			>;
			/**
			 * See [`Pallet::create_token`].
			 **/
			createToken: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					tokenName: Bytes | string | Uint8Array,
					initialIssuance: u128 | AnyNumber | Uint8Array,
					maxIssuance: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes, u128, Option<u128>, Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::create_token_with_additional_data`].
			 **/
			createTokenWithAdditionalData: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					tokenName: Bytes | string | Uint8Array,
					initialIssuance: u128 | AnyNumber | Uint8Array,
					maxIssuance: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string,
					additionalData: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes, u128, Option<u128>, Option<SeedPrimitivesSignatureAccountId20>, Bytes]
			>;
			/**
			 * See [`Pallet::issue_soulbound`].
			 **/
			issueSoulbound: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][],
					tokenOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][],
					tokenOwner:
						| Option<SeedPrimitivesSignatureAccountId20>
						| null
						| Uint8Array
						| SeedPrimitivesSignatureAccountId20
						| string
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>, Option<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::set_additional_data`].
			 **/
			setAdditionalData: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					additionalData: Option<Bytes> | null | Uint8Array | Bytes | string
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, Option<Bytes>]
			>;
			/**
			 * See [`Pallet::set_base_uri`].
			 **/
			setBaseUri: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					metadataScheme: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * See [`Pallet::set_max_issuance`].
			 **/
			setMaxIssuance: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					maxIssuance: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, u128]
			>;
			/**
			 * See [`Pallet::set_mint_fee`].
			 **/
			setMintFee: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					pricingDetails:
						| Option<ITuple<[u32, u128]>>
						| null
						| Uint8Array
						| ITuple<[u32, u128]>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, Option<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::set_name`].
			 **/
			setName: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					collectionName: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * See [`Pallet::set_owner`].
			 **/
			setOwner: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_royalties_schedule`].
			 **/
			setRoyaltiesSchedule: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					royaltiesSchedule:
						| SeedPrimitivesNftRoyaltiesSchedule
						| { entitlements?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesNftRoyaltiesSchedule]
			>;
			/**
			 * See [`Pallet::set_token_burn_authority`].
			 **/
			setTokenBurnAuthority: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					burnAuthority:
						| SeedPalletCommonUtilsTokenBurnAuthority
						| "CollectionOwner"
						| "TokenOwner"
						| "Both"
						| "Neither"
						| number
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, SeedPalletCommonUtilsTokenBurnAuthority]
			>;
			/**
			 * See [`Pallet::set_token_name`].
			 **/
			setTokenName: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					tokenName: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, Bytes]
			>;
			/**
			 * See [`Pallet::set_token_transferable_flag`].
			 **/
			setTokenTransferableFlag: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					transferable: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, bool]
			>;
			/**
			 * See [`Pallet::set_utility_flags`].
			 **/
			setUtilityFlags: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					utilityFlags:
						| SeedPalletCommonUtilsCollectionUtilityFlags
						| { transferable?: any; burnable?: any; mintable?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPalletCommonUtilsCollectionUtilityFlags]
			>;
			/**
			 * See [`Pallet::toggle_public_mint`].
			 **/
			togglePublicMint: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					enabled: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, bool]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][],
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		staking: {
			/**
			 * See [`Pallet::bond`].
			 **/
			bond: AugmentedSubmittable<
				(
					value: Compact<u128> | AnyNumber | Uint8Array,
					payee:
						| PalletStakingRewardDestination
						| { Staked: any }
						| { Stash: any }
						| { Controller: any }
						| { Account: any }
						| { None: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, PalletStakingRewardDestination]
			>;
			/**
			 * See [`Pallet::bond_extra`].
			 **/
			bondExtra: AugmentedSubmittable<
				(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * See [`Pallet::cancel_deferred_slash`].
			 **/
			cancelDeferredSlash: AugmentedSubmittable<
				(
					era: u32 | AnyNumber | Uint8Array,
					slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>]
			>;
			/**
			 * See [`Pallet::chill`].
			 **/
			chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::chill_other`].
			 **/
			chillOther: AugmentedSubmittable<
				(
					controller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::force_apply_min_commission`].
			 **/
			forceApplyMinCommission: AugmentedSubmittable<
				(
					validatorStash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::force_new_era`].
			 **/
			forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::force_new_era_always`].
			 **/
			forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::force_no_eras`].
			 **/
			forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::force_unstake`].
			 **/
			forceUnstake: AugmentedSubmittable<
				(
					stash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					numSlashingSpans: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * See [`Pallet::increase_validator_count`].
			 **/
			increaseValidatorCount: AugmentedSubmittable<
				(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::kick`].
			 **/
			kick: AugmentedSubmittable<
				(
					who:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::nominate`].
			 **/
			nominate: AugmentedSubmittable<
				(
					targets:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::payout_stakers`].
			 **/
			payoutStakers: AugmentedSubmittable<
				(
					validatorStash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					era: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * See [`Pallet::reap_stash`].
			 **/
			reapStash: AugmentedSubmittable<
				(
					stash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					numSlashingSpans: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * See [`Pallet::rebond`].
			 **/
			rebond: AugmentedSubmittable<
				(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * See [`Pallet::scale_validator_count`].
			 **/
			scaleValidatorCount: AugmentedSubmittable<
				(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Percent]
			>;
			/**
			 * See [`Pallet::set_controller`].
			 **/
			setController: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::set_invulnerables`].
			 **/
			setInvulnerables: AugmentedSubmittable<
				(
					invulnerables:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * See [`Pallet::set_min_commission`].
			 **/
			setMinCommission: AugmentedSubmittable<
				(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Perbill]
			>;
			/**
			 * See [`Pallet::set_payee`].
			 **/
			setPayee: AugmentedSubmittable<
				(
					payee:
						| PalletStakingRewardDestination
						| { Staked: any }
						| { Stash: any }
						| { Controller: any }
						| { Account: any }
						| { None: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletStakingRewardDestination]
			>;
			/**
			 * See [`Pallet::set_staking_configs`].
			 **/
			setStakingConfigs: AugmentedSubmittable<
				(
					minNominatorBond:
						| PalletStakingPalletConfigOpU128
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array,
					minValidatorBond:
						| PalletStakingPalletConfigOpU128
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array,
					maxNominatorCount:
						| PalletStakingPalletConfigOpU32
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array,
					maxValidatorCount:
						| PalletStakingPalletConfigOpU32
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array,
					chillThreshold:
						| PalletStakingPalletConfigOpPercent
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array,
					minCommission:
						| PalletStakingPalletConfigOpPerbill
						| { Noop: any }
						| { Set: any }
						| { Remove: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					PalletStakingPalletConfigOpU128,
					PalletStakingPalletConfigOpU128,
					PalletStakingPalletConfigOpU32,
					PalletStakingPalletConfigOpU32,
					PalletStakingPalletConfigOpPercent,
					PalletStakingPalletConfigOpPerbill,
				]
			>;
			/**
			 * See [`Pallet::set_validator_count`].
			 **/
			setValidatorCount: AugmentedSubmittable<
				(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::unbond`].
			 **/
			unbond: AugmentedSubmittable<
				(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * See [`Pallet::validate`].
			 **/
			validate: AugmentedSubmittable<
				(
					prefs:
						| PalletStakingValidatorPrefs
						| { commission?: any; blocked?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletStakingValidatorPrefs]
			>;
			/**
			 * See [`Pallet::withdraw_unbonded`].
			 **/
			withdrawUnbonded: AugmentedSubmittable<
				(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		sudo: {
			/**
			 * See [`Pallet::set_key`].
			 **/
			setKey: AugmentedSubmittable<
				(
					updated: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::sudo`].
			 **/
			sudo: AugmentedSubmittable<
				(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Call]
			>;
			/**
			 * See [`Pallet::sudo_as`].
			 **/
			sudoAs: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * See [`Pallet::sudo_unchecked_weight`].
			 **/
			sudoUncheckedWeight: AugmentedSubmittable<
				(
					call: Call | IMethod | string | Uint8Array,
					weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Call, SpWeightsWeightV2Weight]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		syloActionPermissions: {
			/**
			 * See [`Pallet::accept_transact_permission`].
			 **/
			acceptTransactPermission: AugmentedSubmittable<
				(
					permissionToken:
						| PalletSyloActionPermissionsTransactPermissionToken
						| {
								grantee?: any;
								useFuturepass?: any;
								spender?: any;
								spendingBalance?: any;
								allowedCalls?: any;
								expiry?: any;
								nonce?: any;
						  }
						| string
						| Uint8Array,
					tokenSignature:
						| PalletSyloActionPermissionsTransactPermissionTokenSignature
						| { EIP191: any }
						| { XRPL: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					PalletSyloActionPermissionsTransactPermissionToken,
					PalletSyloActionPermissionsTransactPermissionTokenSignature,
				]
			>;
			/**
			 * See [`Pallet::grant_transact_permission`].
			 **/
			grantTransactPermission: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					spender: PalletSyloActionPermissionsSpender | "GRANTOR" | "GRANTEE" | number | Uint8Array,
					spendingBalance: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					allowedCalls: BTreeSet<ITuple<[Bytes, Bytes]>>,
					expiry: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					PalletSyloActionPermissionsSpender,
					Option<u128>,
					BTreeSet<ITuple<[Bytes, Bytes]>>,
					Option<u32>,
				]
			>;
			/**
			 * See [`Pallet::revoke_transact_permission`].
			 **/
			revokeTransactPermission: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::transact`].
			 **/
			transact: AugmentedSubmittable<
				(
					grantor: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * See [`Pallet::update_transact_permission`].
			 **/
			updateTransactPermission: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					spender:
						| Option<PalletSyloActionPermissionsSpender>
						| null
						| Uint8Array
						| PalletSyloActionPermissionsSpender
						| "GRANTOR"
						| "GRANTEE"
						| number,
					spendingBalance:
						| Option<Option<u128>>
						| null
						| Uint8Array
						| Option<u128>
						| u128
						| AnyNumber,
					allowedCalls:
						| Option<BTreeSet<ITuple<[Bytes, Bytes]>>>
						| null
						| Uint8Array
						| BTreeSet<ITuple<[Bytes, Bytes]>>,
					expiry: Option<Option<u32>> | null | Uint8Array | Option<u32> | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					Option<PalletSyloActionPermissionsSpender>,
					Option<Option<u128>>,
					Option<BTreeSet<ITuple<[Bytes, Bytes]>>>,
					Option<Option<u32>>,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		syloDataPermissions: {
			/**
			 * See [`Pallet::grant_data_permissions`].
			 **/
			grantDataPermissions: AugmentedSubmittable<
				(
					dataAuthor: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dataIds: Vec<Bytes> | (Bytes | string | Uint8Array)[],
					permission:
						| SeedPalletCommonSyloDataPermission
						| "VIEW"
						| "MODIFY"
						| "DISTRIBUTE"
						| number
						| Uint8Array,
					expiry: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					irrevocable: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					Vec<Bytes>,
					SeedPalletCommonSyloDataPermission,
					Option<u32>,
					bool,
				]
			>;
			/**
			 * See [`Pallet::grant_permission_reference`].
			 **/
			grantPermissionReference: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					permissionRecordId: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Bytes]
			>;
			/**
			 * See [`Pallet::grant_tagged_permissions`].
			 **/
			grantTaggedPermissions: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					permission:
						| SeedPalletCommonSyloDataPermission
						| "VIEW"
						| "MODIFY"
						| "DISTRIBUTE"
						| number
						| Uint8Array,
					tags: Vec<Bytes> | (Bytes | string | Uint8Array)[],
					expiry: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					irrevocable: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					SeedPrimitivesSignatureAccountId20,
					SeedPalletCommonSyloDataPermission,
					Vec<Bytes>,
					Option<u32>,
					bool,
				]
			>;
			/**
			 * See [`Pallet::revoke_data_permission`].
			 **/
			revokeDataPermission: AugmentedSubmittable<
				(
					dataAuthor: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					permissionId: u32 | AnyNumber | Uint8Array,
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dataId: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, SeedPrimitivesSignatureAccountId20, Bytes]
			>;
			/**
			 * See [`Pallet::revoke_permission_reference`].
			 **/
			revokePermissionReference: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::revoke_tagged_permission`].
			 **/
			revokeTaggedPermission: AugmentedSubmittable<
				(
					grantee: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					permissionId: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		syloDataVerification: {
			/**
			 * See [`Pallet::add_validation_record_entry`].
			 **/
			addValidationRecordEntry: AugmentedSubmittable<
				(
					dataAuthor: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dataId: Bytes | string | Uint8Array,
					checksum: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Bytes, H256]
			>;
			/**
			 * See [`Pallet::create_validation_record`].
			 **/
			createValidationRecord: AugmentedSubmittable<
				(
					dataId: Bytes | string | Uint8Array,
					resolvers:
						| Vec<SeedPalletCommonSyloResolverId>
						| (
								| SeedPalletCommonSyloResolverId
								| { method?: any; identifier?: any }
								| string
								| Uint8Array
						  )[],
					dataType: Bytes | string | Uint8Array,
					tags: Vec<Bytes> | (Bytes | string | Uint8Array)[],
					checksum: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Vec<SeedPalletCommonSyloResolverId>, Bytes, Vec<Bytes>, H256]
			>;
			/**
			 * See [`Pallet::delete_validation_record`].
			 **/
			deleteValidationRecord: AugmentedSubmittable<
				(dataId: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::deregister_resolver`].
			 **/
			deregisterResolver: AugmentedSubmittable<
				(identifier: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::register_resolver`].
			 **/
			registerResolver: AugmentedSubmittable<
				(
					identifier: Bytes | string | Uint8Array,
					serviceEndpoints: Vec<Bytes> | (Bytes | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Vec<Bytes>]
			>;
			/**
			 * See [`Pallet::set_payment_asset`].
			 **/
			setPaymentAsset: AugmentedSubmittable<
				(paymentAsset: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_sylo_resolver_method`].
			 **/
			setSyloResolverMethod: AugmentedSubmittable<
				(resolverMethod: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::update_resolver`].
			 **/
			updateResolver: AugmentedSubmittable<
				(
					identifier: Bytes | string | Uint8Array,
					serviceEndpoints: Vec<Bytes> | (Bytes | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Vec<Bytes>]
			>;
			/**
			 * See [`Pallet::update_validation_record`].
			 **/
			updateValidationRecord: AugmentedSubmittable<
				(
					dataId: Bytes | string | Uint8Array,
					resolvers:
						| Option<Vec<SeedPalletCommonSyloResolverId>>
						| null
						| Uint8Array
						| Vec<SeedPalletCommonSyloResolverId>
						| (
								| SeedPalletCommonSyloResolverId
								| { method?: any; identifier?: any }
								| string
								| Uint8Array
						  )[],
					dataType: Option<Bytes> | null | Uint8Array | Bytes | string,
					tags:
						| Option<Vec<Bytes>>
						| null
						| Uint8Array
						| Vec<Bytes>
						| (Bytes | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Option<Vec<SeedPalletCommonSyloResolverId>>, Option<Bytes>, Option<Vec<Bytes>>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		system: {
			/**
			 * See [`Pallet::kill_prefix`].
			 **/
			killPrefix: AugmentedSubmittable<
				(
					prefix: Bytes | string | Uint8Array,
					subkeys: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, u32]
			>;
			/**
			 * See [`Pallet::kill_storage`].
			 **/
			killStorage: AugmentedSubmittable<
				(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
				[Vec<Bytes>]
			>;
			/**
			 * See [`Pallet::remark`].
			 **/
			remark: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::remark_with_event`].
			 **/
			remarkWithEvent: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_code`].
			 **/
			setCode: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_code_without_checks`].
			 **/
			setCodeWithoutChecks: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_heap_pages`].
			 **/
			setHeapPages: AugmentedSubmittable<
				(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::set_storage`].
			 **/
			setStorage: AugmentedSubmittable<
				(
					items:
						| Vec<ITuple<[Bytes, Bytes]>>
						| [Bytes | string | Uint8Array, Bytes | string | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[Bytes, Bytes]>>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		timestamp: {
			/**
			 * See [`Pallet::set`].
			 **/
			set: AugmentedSubmittable<
				(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u64>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		tokenApprovals: {
			/**
			 * See [`Pallet::erc1155_approval_for_all`].
			 **/
			erc1155ApprovalForAll: AugmentedSubmittable<
				(
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					collectionUuid: u32 | AnyNumber | Uint8Array,
					approved: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, bool]
			>;
			/**
			 * See [`Pallet::erc20_approval`].
			 **/
			erc20Approval: AugmentedSubmittable<
				(
					spender: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, u128]
			>;
			/**
			 * See [`Pallet::erc20_update_approval`].
			 **/
			erc20UpdateApproval: AugmentedSubmittable<
				(
					spender: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, u128]
			>;
			/**
			 * See [`Pallet::erc721_approval`].
			 **/
			erc721Approval: AugmentedSubmittable<
				(
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, ITuple<[u32, u32]>]
			>;
			/**
			 * See [`Pallet::erc721_approval_for_all`].
			 **/
			erc721ApprovalForAll: AugmentedSubmittable<
				(
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					collectionUuid: u32 | AnyNumber | Uint8Array,
					approved: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32, bool]
			>;
			/**
			 * See [`Pallet::erc721_remove_approval`].
			 **/
			erc721RemoveApproval: AugmentedSubmittable<
				(
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		utility: {
			/**
			 * See [`Pallet::as_derivative`].
			 **/
			asDerivative: AugmentedSubmittable<
				(
					index: u16 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u16, Call]
			>;
			/**
			 * See [`Pallet::batch`].
			 **/
			batch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::batch_all`].
			 **/
			batchAll: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::dispatch_as`].
			 **/
			dispatchAs: AugmentedSubmittable<
				(
					asOrigin:
						| SeedRuntimeOriginCaller
						| { system: any }
						| { Void: any }
						| { Ethereum: any }
						| { Xrpl: any }
						| string
						| Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedRuntimeOriginCaller, Call]
			>;
			/**
			 * See [`Pallet::force_batch`].
			 **/
			forceBatch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::with_weight`].
			 **/
			withWeight: AugmentedSubmittable<
				(
					call: Call | IMethod | string | Uint8Array,
					weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Call, SpWeightsWeightV2Weight]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		vortexDistribution: {
			/**
			 * See [`Pallet::create_vtx_dist`].
			 **/
			createVtxDist: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::disable_vtx_dist`].
			 **/
			disableVtxDist: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::pay_unsigned`].
			 **/
			payUnsigned: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					currentBlock: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::redeem_tokens_from_vault`].
			 **/
			redeemTokensFromVault: AugmentedSubmittable<
				(vortexTokenAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::register_reward_points`].
			 **/
			registerRewardPoints: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					rewardPoints:
						| Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>]
			>;
			/**
			 * See [`Pallet::register_rewards`].
			 **/
			registerRewards: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					rewards:
						| Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>]
			>;
			/**
			 * See [`Pallet::register_work_points`].
			 **/
			registerWorkPoints: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					workPoints:
						| Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>]
			>;
			/**
			 * See [`Pallet::set_admin`].
			 **/
			setAdmin: AugmentedSubmittable<
				(
					updated: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_asset_prices`].
			 **/
			setAssetPrices: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					assetPrices:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::set_consider_current_balance`].
			 **/
			setConsiderCurrentBalance: AugmentedSubmittable<
				(value: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::set_disable_redeem`].
			 **/
			setDisableRedeem: AugmentedSubmittable<
				(value: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::set_enable_manual_reward_input`].
			 **/
			setEnableManualRewardInput: AugmentedSubmittable<
				(value: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::set_fee_pot_asset_balances`].
			 **/
			setFeePotAssetBalances: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					assetsBalances:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::set_vtx_total_supply`].
			 **/
			setVtxTotalSupply: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					supply: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128]
			>;
			/**
			 * See [`Pallet::set_vtx_vault_asset_balances`].
			 **/
			setVtxVaultAssetBalances: AugmentedSubmittable<
				(
					id: u32 | AnyNumber | Uint8Array,
					assetsBalances:
						| Vec<ITuple<[u32, u128]>>
						| [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, u128]>>]
			>;
			/**
			 * See [`Pallet::set_vtx_vault_redeem_asset_list`].
			 **/
			setVtxVaultRedeemAssetList: AugmentedSubmittable<
				(assetsList: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
				[Vec<u32>]
			>;
			/**
			 * See [`Pallet::start_vtx_dist`].
			 **/
			startVtxDist: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::trigger_vtx_distribution`].
			 **/
			triggerVtxDistribution: AugmentedSubmittable<
				(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		voterList: {
			/**
			 * See [`Pallet::put_in_front_of`].
			 **/
			putInFrontOf: AugmentedSubmittable<
				(
					lighter: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::rebag`].
			 **/
			rebag: AugmentedSubmittable<
				(
					dislocated: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xls20: {
			/**
			 * See [`Pallet::enable_xls20_compatibility`].
			 **/
			enableXls20Compatibility: AugmentedSubmittable<
				(collectionId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::fulfill_xls20_mint`].
			 **/
			fulfillXls20Mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					tokenMappings:
						| Vec<ITuple<[u32, U8aFixed]>>
						| [u32 | AnyNumber | Uint8Array, U8aFixed | string | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, U8aFixed]>>]
			>;
			/**
			 * See [`Pallet::re_request_xls20_mint`].
			 **/
			reRequestXls20Mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>]
			>;
			/**
			 * See [`Pallet::set_collection_mappings`].
			 **/
			setCollectionMappings: AugmentedSubmittable<
				(
					mappings:
						| Vec<ITuple<[u32, PalletXls20Xls20Collection]>>
						| [
								u32 | AnyNumber | Uint8Array,
								(
									| PalletXls20Xls20Collection
									| { issuerAddress?: any; taxon?: any }
									| string
									| Uint8Array
								),
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[u32, PalletXls20Xls20Collection]>>]
			>;
			/**
			 * See [`Pallet::set_relayer`].
			 **/
			setRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::set_xls20_fee`].
			 **/
			setXls20Fee: AugmentedSubmittable<
				(newFee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xrpl: {
			/**
			 * See [`Pallet::transact`].
			 **/
			transact: AugmentedSubmittable<
				(
					encodedMsg: Bytes | string | Uint8Array,
					signature: Bytes | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, Bytes, Call]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xrplBridge: {
			/**
			 * See [`Pallet::add_relayer`].
			 **/
			addRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::generate_nft_accept_offer`].
			 **/
			generateNftAcceptOffer: AugmentedSubmittable<
				(nftokenSellOffer: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[U8aFixed]
			>;
			/**
			 * See [`Pallet::prune_settled_ledger_index`].
			 **/
			pruneSettledLedgerIndex: AugmentedSubmittable<
				(ledgerIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::remove_relayer`].
			 **/
			removeRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * See [`Pallet::reset_settled_xrpl_tx_data`].
			 **/
			resetSettledXrplTxData: AugmentedSubmittable<
				(
					highestSettledLedgerIndex: u32 | AnyNumber | Uint8Array,
					submissionWindowWidth: u32 | AnyNumber | Uint8Array,
					highestPrunedLedgerIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					settledTxData:
						| Option<
								Vec<
									ITuple<
										[H512, u32, PalletXrplBridgeXrpTransaction, SeedPrimitivesSignatureAccountId20]
									>
								>
						  >
						| null
						| Uint8Array
						| Vec<
								ITuple<
									[H512, u32, PalletXrplBridgeXrpTransaction, SeedPrimitivesSignatureAccountId20]
								>
						  >
						| [
								H512 | string | Uint8Array,
								u32 | AnyNumber | Uint8Array,
								(
									| PalletXrplBridgeXrpTransaction
									| { transactionHash?: any; transaction?: any; timestamp?: any }
									| string
									| Uint8Array
								),
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
						  ][]
				) => SubmittableExtrinsic<ApiType>,
				[
					u32,
					u32,
					Option<u32>,
					Option<
						Vec<
							ITuple<
								[H512, u32, PalletXrplBridgeXrpTransaction, SeedPrimitivesSignatureAccountId20]
							>
						>
					>,
				]
			>;
			/**
			 * See [`Pallet::set_door_address`].
			 **/
			setDoorAddress: AugmentedSubmittable<
				(
					doorAccount: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array,
					doorAddress: Option<H160> | null | Uint8Array | H160 | string
				) => SubmittableExtrinsic<ApiType>,
				[PalletXrplBridgeXrplDoorAccount, Option<H160>]
			>;
			/**
			 * See [`Pallet::set_door_tx_fee`].
			 **/
			setDoorTxFee: AugmentedSubmittable<
				(
					doorType: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array,
					fee: u64 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletXrplBridgeXrplDoorAccount, u64]
			>;
			/**
			 * See [`Pallet::set_payment_delay`].
			 **/
			setPaymentDelay: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					paymentDelay:
						| Option<ITuple<[u128, u32]>>
						| null
						| Uint8Array
						| ITuple<[u128, u32]>
						| [u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u128, u32]>>]
			>;
			/**
			 * See [`Pallet::set_ticket_sequence_current_allocation`].
			 **/
			setTicketSequenceCurrentAllocation: AugmentedSubmittable<
				(
					doorAccount: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array,
					ticketSequence: u32 | AnyNumber | Uint8Array,
					startTicketSequence: u32 | AnyNumber | Uint8Array,
					ticketBucketSize: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletXrplBridgeXrplDoorAccount, u32, u32, u32]
			>;
			/**
			 * See [`Pallet::set_ticket_sequence_next_allocation`].
			 **/
			setTicketSequenceNextAllocation: AugmentedSubmittable<
				(
					doorAccount: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array,
					startTicketSequence: u32 | AnyNumber | Uint8Array,
					ticketBucketSize: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletXrplBridgeXrplDoorAccount, u32, u32]
			>;
			/**
			 * See [`Pallet::set_xrpl_asset_map`].
			 **/
			setXrplAssetMap: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					xrplCurrency:
						| Option<PalletXrplBridgeXrplCurrency>
						| null
						| Uint8Array
						| PalletXrplBridgeXrplCurrency
						| { symbol?: any; issuer?: any }
						| string
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<PalletXrplBridgeXrplCurrency>]
			>;
			/**
			 * See [`Pallet::set_xrp_source_tag`].
			 **/
			setXrpSourceTag: AugmentedSubmittable<
				(sourceTag: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::submit_challenge`].
			 **/
			submitChallenge: AugmentedSubmittable<
				(transactionHash: H512 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H512]
			>;
			/**
			 * See [`Pallet::submit_transaction`].
			 **/
			submitTransaction: AugmentedSubmittable<
				(
					ledgerIndex: u64 | AnyNumber | Uint8Array,
					transactionHash: H512 | string | Uint8Array,
					transaction:
						| PalletXrplBridgeXrplTxData
						| { Payment: any }
						| { CurrencyPayment: any }
						| { Xls20: any }
						| string
						| Uint8Array,
					timestamp: u64 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u64, H512, PalletXrplBridgeXrplTxData, u64]
			>;
			/**
			 * See [`Pallet::withdraw`].
			 **/
			withdraw: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					destination: H160 | string | Uint8Array,
					destinationTag: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, H160, Option<u32>]
			>;
			/**
			 * See [`Pallet::withdraw_nft`].
			 **/
			withdrawNft: AugmentedSubmittable<
				(
					tokenId:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					destination: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>, H160]
			>;
			/**
			 * See [`Pallet::withdraw_xrp`].
			 **/
			withdrawXrp: AugmentedSubmittable<
				(
					amount: u128 | AnyNumber | Uint8Array,
					destination: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, H160]
			>;
			/**
			 * See [`Pallet::withdraw_xrp_with_destination_tag`].
			 **/
			withdrawXrpWithDestinationTag: AugmentedSubmittable<
				(
					amount: u128 | AnyNumber | Uint8Array,
					destination: H160 | string | Uint8Array,
					destinationTag: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, H160, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
	} // AugmentedSubmittables
} // declare module
