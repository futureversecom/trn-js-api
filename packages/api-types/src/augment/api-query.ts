// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/storage";

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from "@polkadot/api-base/types";
import type {
	BTreeMap,
	Bytes,
	Option,
	U256,
	U8aFixed,
	Vec,
	bool,
	u128,
	u32,
	u64,
	u8,
} from "@polkadot/types-codec";
import type { AnyNumber, ITuple } from "@polkadot/types-codec/types";
import type {
	EthereumBlock,
	EthereumReceiptReceiptV3,
	EthereumTransactionTransactionV2,
	FpRpcTransactionStatus,
	FrameSupportDispatchPerDispatchClassWeight,
	FrameSystemAccountInfo,
	FrameSystemEventRecord,
	FrameSystemLastRuntimeUpgradeInfo,
	FrameSystemPhase,
	PalletAssetsApproval,
	PalletAssetsAssetAccount,
	PalletAssetsAssetDetails,
	PalletAssetsAssetMetadata,
	PalletBagsListListBag,
	PalletBagsListListNode,
	PalletBalancesAccountData,
	PalletBalancesBalanceLock,
	PalletBalancesIdAmount,
	PalletBalancesReserveData,
	PalletCrowdsaleSaleInformation,
	PalletDexTradingPair,
	PalletDexTradingPairStatus,
	PalletElectionProviderMultiPhasePhase,
	PalletElectionProviderMultiPhaseReadySolution,
	PalletElectionProviderMultiPhaseRoundSnapshot,
	PalletElectionProviderMultiPhaseSignedSignedSubmission,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletErc20PegPendingPayment,
	PalletEthyBridgePauseStatus,
	PalletEthyCheckedEthCallRequest,
	PalletEthyCheckedEthCallResult,
	PalletEthyEthySigningRequest,
	PalletEthyEventClaim,
	PalletEthyEventClaimResult,
	PalletEthyEventClaimStatus,
	PalletEvmCodeMetadata,
	PalletFeeControlFeeControlFeeConfig,
	PalletGrandpaStoredPendingChange,
	PalletGrandpaStoredState,
	PalletImOnlineSr25519AppSr25519Public,
	PalletLiquidityPoolsPoolInfo,
	PalletLiquidityPoolsPoolRelationship,
	PalletLiquidityPoolsUserInfo,
	PalletMarketplaceListing,
	PalletMarketplaceMarketplace,
	PalletMarketplaceOfferType,
	PalletMigrationMigrationStatus,
	PalletMultisigMultisig,
	PalletNfiFeeDetails,
	PalletNfiGenericCollectionId,
	PalletNfiMultiChainTokenId,
	PalletNfiNfiDataType,
	PalletNfiNfiSubType,
	PalletNftCollectionInformation,
	PalletNftCollectionPendingIssuances,
	PalletNftPegBlockedTokenInfo,
	PalletNftTokenInformation,
	PalletPartnerAttributionPartnerInformation,
	PalletPreimageRequestStatus,
	PalletProxyAnnouncement,
	PalletProxyProxyDefinition,
	PalletRecoveryActiveRecovery,
	PalletRecoveryRecoveryConfig,
	PalletSchedulerScheduled,
	PalletSftSftCollectionInformation,
	PalletSftSftCollectionPendingIssuances,
	PalletSftSftTokenInformation,
	PalletStakingActiveEraInfo,
	PalletStakingEraRewardPoints,
	PalletStakingExposure,
	PalletStakingForcing,
	PalletStakingNominations,
	PalletStakingRewardDestination,
	PalletStakingSlashingSlashingSpans,
	PalletStakingSlashingSpanRecord,
	PalletStakingStakingLedger,
	PalletStakingUnappliedSlash,
	PalletStakingValidatorPrefs,
	PalletSyloActionPermissionsTransactPermission,
	PalletSyloDataPermissionsPermissionRecord,
	PalletSyloDataPermissionsPermissionReference,
	PalletSyloDataPermissionsTaggedPermissionRecord,
	PalletTransactionPaymentReleases,
	PalletVortexDistributionVtxDistStatus,
	PalletXls20Xls20Collection,
	PalletXrplBridgeDelayedWithdrawal,
	PalletXrplBridgeXrpTransaction,
	PalletXrplBridgeXrplCurrency,
	PalletXrplBridgeXrplDoorAccount,
	PalletXrplBridgeXrplTicketSequenceParams,
	SeedPalletCommonSyloResolver,
	SeedPalletCommonSyloValidationRecord,
	SeedPalletCommonUtilsCollectionUtilityFlags,
	SeedPalletCommonUtilsPublicMintInformation,
	SeedPalletCommonUtilsTokenUtilityFlags,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesSignatureAccountId20,
	SeedRuntimeSessionKeys,
	SpConsensusBabeAppPublic,
	SpConsensusBabeBabeEpochConfiguration,
	SpConsensusBabeDigestsNextConfigDescriptor,
	SpConsensusBabeDigestsPreDigest,
	SpCoreCryptoKeyTypeId,
	SpNposElectionsElectionScore,
	SpRuntimeDigest,
	SpStakingOffenceOffenceDetails,
} from "@polkadot/types/lookup";
import type { Observable } from "@polkadot/types/types";
import type {
	H160,
	H256,
	H512,
	Perbill,
	Percent,
} from "@therootnetwork/api-types/interfaces/runtime";

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module "@polkadot/api-base/types/storage" {
	interface AugmentedQueries<ApiType extends ApiTypes> {
		assets: {
			/**
			 * The holdings of a specific account for a specific asset.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletAssetsAssetAccount>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Approved balance transfers. First balance is the amount approved for transfer. Second
			 * is the amount of `T::Currency` reserved for storing this.
			 * First key is the asset ID, second key is the owner and third key is the delegate.
			 **/
			approvals: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg3: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletAssetsApproval>>,
				[u32, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[u32, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			/**
			 * Details of an asset.
			 **/
			asset: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletAssetsAssetDetails>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Metadata of an asset.
			 **/
			metadata: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetMetadata>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		assetsExt: {
			/**
			 * The minimum deposit for creating an asset
			 **/
			assetDeposit: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The holdings of a specific account for a specific asset.
			 **/
			holds: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<ITuple<[U8aFixed, u128]>>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The total units issued in the system.
			 **/
			nextAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		authorship: {
			/**
			 * Author of current block.
			 **/
			author: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		babe: {
			/**
			 * Current epoch authorities.
			 **/
			authorities: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * This field should always be populated during block processing unless
			 * secondary plain slots are enabled (which don't contain a VRF output).
			 *
			 * It is set in `on_finalize`, before it will contain the value from the last block.
			 **/
			authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current slot number.
			 **/
			currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The configuration for the current epoch. Should never be `None` as it is initialized in
			 * genesis.
			 **/
			epochConfig: AugmentedQuery<
				ApiType,
				() => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current epoch index.
			 **/
			epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The block numbers when the last and current epoch have started, respectively `N-1` and
			 * `N`.
			 * NOTE: We track this is in order to annotate the block number when a given pool of
			 * entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
			 * slots, which may be skipped, the block numbers may not line up with the slot numbers.
			 **/
			epochStart: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The slot at which the first epoch actually started. This is 0
			 * until the first block of the chain.
			 **/
			genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Temporary value (cleared at block finalization) which is `Some`
			 * if per-block initialization has already been called for current block.
			 **/
			initialized: AugmentedQuery<
				ApiType,
				() => Observable<Option<Option<SpConsensusBabeDigestsPreDigest>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * How late the current block is compared to its parent.
			 *
			 * This entry is populated as part of block execution and is cleaned up
			 * on block finalization. Querying this storage entry outside of block
			 * execution context should always yield zero.
			 **/
			lateness: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Next epoch authorities.
			 **/
			nextAuthorities: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The configuration for the next epoch, `None` if the config will not change
			 * (you can fallback to `EpochConfig` instead in that case).
			 **/
			nextEpochConfig: AugmentedQuery<
				ApiType,
				() => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Next epoch randomness.
			 **/
			nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Pending epoch configuration change that will be applied when the next epoch is enacted.
			 **/
			pendingEpochConfigChange: AugmentedQuery<
				ApiType,
				() => Observable<Option<SpConsensusBabeDigestsNextConfigDescriptor>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The epoch randomness for the *current* epoch.
			 *
			 * # Security
			 *
			 * This MUST NOT be used for gambling, as it can be influenced by a
			 * malicious validator in the short term. It MAY be used in many
			 * cryptographic protocols, however, so long as one remembers that this
			 * (like everything else on-chain) it is public. For example, it can be
			 * used where a number is needed that cannot have been chosen by an
			 * adversary, for purposes such as public-coin zero-knowledge proofs.
			 **/
			randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Randomness under construction.
			 *
			 * We make a trade-off between storage accesses and list length.
			 * We store the under-construction randomness in segments of up to
			 * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
			 *
			 * Once a segment reaches this length, we begin the next one.
			 * We reset all segments and return to `0` at the beginning of every
			 * epoch.
			 **/
			segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A list of the last 100 skipped epochs and the corresponding session index
			 * when the epoch was skipped.
			 *
			 * This is only used for validating equivocation proofs. An equivocation proof
			 * must contains a key-ownership proof for a given session, therefore we need a
			 * way to tie together sessions and epoch indices, i.e. we need to validate that
			 * a validator was the owner of a given key on a given session, and what the
			 * active epoch index was during that session.
			 **/
			skippedEpochs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u64, u32]>>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
			 **/
			underConstruction: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		balances: {
			/**
			 * The Balances pallet example of storing the balance of an account.
			 *
			 * # Example
			 *
			 * ```nocompile
			 * impl pallet_balances::Config for Runtime {
			 * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
			 * }
			 * ```
			 *
			 * You can also store the balance of an account in the `System` pallet.
			 *
			 * # Example
			 *
			 * ```nocompile
			 * impl pallet_balances::Config for Runtime {
			 * type AccountStore = System
			 * }
			 * ```
			 *
			 * But this comes with tradeoffs, storing account balances in the system pallet stores
			 * `frame_system` data alongside the account data contrary to storing account balances in the
			 * `Balances` pallet, which uses a `StorageMap` to store balances data only.
			 * NOTE: This is only used in the case that this pallet is used to store balances.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletBalancesAccountData>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Freeze locks on account balances.
			 **/
			freezes: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<PalletBalancesIdAmount>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Holds on account balances.
			 **/
			holds: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<PalletBalancesIdAmount>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The total units of outstanding deactivated balance in the system.
			 **/
			inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Any liquidity locks on some account balances.
			 * NOTE: Should only be accessed when setting, changing and freeing a lock.
			 **/
			locks: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<PalletBalancesBalanceLock>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Named reserves on some account balances.
			 **/
			reserves: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<PalletBalancesReserveData>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The total units issued in the system.
			 **/
			totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		crowdsale: {
			/**
			 * The next available sale id
			 **/
			nextSaleId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores next unsigned tx block number
			 **/
			nextUnsignedAt: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A list of all sales currently being distributed
			 **/
			saleDistribution: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from block number to the sales that will end at that block
			 * The tuple represents the sale id and the current sale participant distribution index
			 **/
			saleEndBlocks: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<u64>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Map from sale id to its information
			 **/
			saleInfo: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletCrowdsaleSaleInformation>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * User participation in the sale
			 * sale_id -> user -> payment_asset contribution amount
			 **/
			saleParticipation: AugmentedQuery<
				ApiType,
				(
					arg1: u64 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<u128>>,
				[u64, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u64, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		dex: {
			/**
			 * FeeTo account where network fees are deposited
			 **/
			feeTo: AugmentedQuery<
				ApiType,
				() => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			liquidityPool: AugmentedQuery<
				ApiType,
				(arg: PalletDexTradingPair) => Observable<ITuple<[u128, u128]>>,
				[PalletDexTradingPair]
			> &
				QueryableStorageEntry<ApiType, [PalletDexTradingPair]>;
			liquidityPoolLastK: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<U256>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			tradingPairLPToken: AugmentedQuery<
				ApiType,
				(arg: PalletDexTradingPair) => Observable<Option<u32>>,
				[PalletDexTradingPair]
			> &
				QueryableStorageEntry<ApiType, [PalletDexTradingPair]>;
			tradingPairStatuses: AugmentedQuery<
				ApiType,
				(arg: PalletDexTradingPair) => Observable<PalletDexTradingPairStatus>,
				[PalletDexTradingPair]
			> &
				QueryableStorageEntry<ApiType, [PalletDexTradingPair]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		doughnut: {
			/**
			 * Storage map for revoked doughnut information
			 **/
			blockedDoughnuts: AugmentedQuery<
				ApiType,
				(arg: U8aFixed | string | Uint8Array) => Observable<bool>,
				[U8aFixed]
			> &
				QueryableStorageEntry<ApiType, [U8aFixed]>;
			/**
			 * Double map from issuer to blocked holder
			 **/
			blockedHolders: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<bool>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			/**
			 * Storage map for whitelisted holder information
			 **/
			whitelistedHolders: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<bool>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		echo: {
			/**
			 * The next available offer_id
			 **/
			nextSessionId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * Current phase.
			 **/
			currentPhase: AugmentedQuery<
				ApiType,
				() => Observable<PalletElectionProviderMultiPhasePhase>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Desired number of targets to elect for this round.
			 *
			 * Only exists when [`Snapshot`] is present.
			 **/
			desiredTargets: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum score that each 'untrusted' solution must attain in order to be considered
			 * feasible.
			 *
			 * Can be set via `set_minimum_untrusted_score`.
			 **/
			minimumUntrustedScore: AugmentedQuery<
				ApiType,
				() => Observable<Option<SpNposElectionsElectionScore>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current best solution, signed or unsigned, queued to be returned upon `elect`.
			 *
			 * Always sorted by score.
			 **/
			queuedSolution: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletElectionProviderMultiPhaseReadySolution>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Internal counter for the number of rounds.
			 *
			 * This is useful for de-duplication of transactions submitted to the pool, and general
			 * diagnostics of the pallet.
			 *
			 * This is merely incremented once per every time that an upstream `elect` is called.
			 **/
			round: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
			 * value in `SignedSubmissions`.
			 *
			 * We never need to process more than a single signed submission at a time. Signed submissions
			 * can be quite large, so we're willing to pay the cost of multiple database accesses to access
			 * them one at a time instead of reading and decoding all of them at once.
			 **/
			signedSubmissionIndices: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[SpNposElectionsElectionScore, u32, u32]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The next index to be assigned to an incoming signed submission.
			 *
			 * Every accepted submission is assigned a unique index; that index is bound to that particular
			 * submission for the duration of the election. On election finalization, the next index is
			 * reset to 0.
			 *
			 * We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
			 * capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
			 * because iteration is slow. Instead, we store the value here.
			 **/
			signedSubmissionNextIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Unchecked, signed solutions.
			 *
			 * Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
			 * allowing us to keep only a single one in memory at a time.
			 *
			 * Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
			 * affect; we shouldn't need a cryptographically secure hasher.
			 **/
			signedSubmissionsMap: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<Option<PalletElectionProviderMultiPhaseSignedSignedSubmission>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Snapshot data of the round.
			 *
			 * This is created at the beginning of the signed phase and cleared upon calling `elect`.
			 **/
			snapshot: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletElectionProviderMultiPhaseRoundSnapshot>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The metadata of the [`RoundSnapshot`]
			 *
			 * Only exists when [`Snapshot`] is present.
			 **/
			snapshotMetadata: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		erc20Peg: {
			/**
			 * Map GA asset Id to ERC20 address
			 **/
			assetIdToErc20: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H160>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The peg contract address on Ethereum
			 **/
			contractAddress: AugmentedQuery<ApiType, () => Observable<H160>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from DelayedPaymentId to PendingPayment
			 **/
			delayedPayments: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletErc20PegPendingPayment>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Map from block number to DelayedPaymentIds scheduled for that block
			 **/
			delayedPaymentSchedule: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u64>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Whether deposit are active
			 **/
			depositsActive: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Whether deposit delays are active, default is set to true
			 **/
			depositsDelayActive: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Metadata for well-known erc20 tokens (symbol, decimals)
			 **/
			erc20Meta: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Option<ITuple<[Bytes, u8]>>>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			/**
			 * Map ERC20 address to GA asset Id
			 **/
			erc20ToAssetId: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Option<u32>>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			/**
			 * The next available payment id for withdrawals and deposits
			 **/
			nextDelayedPaymentId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from asset_id to minimum amount and delay
			 **/
			paymentDelay: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u32]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The blocks with payments that are ready to be processed
			 **/
			readyBlocks: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The ROOT peg contract address on Ethereum
			 **/
			rootPegContractAddress: AugmentedQuery<ApiType, () => Observable<H160>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Whether withdrawals are active
			 **/
			withdrawalsActive: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Whether withdrawals delays are active, default is set to true
			 **/
			withdrawalsDelayActive: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ethBridge: {
			/**
			 * Flag to indicate whether authorities have been changed during the current era
			 **/
			authoritiesChangedThisEra: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Whether the bridge is paused (e.g. during validator transitions or by governance)
			 **/
			bridgePaused: AugmentedQuery<ApiType, () => Observable<PalletEthyBridgePauseStatus>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The (optimistic) challenge period after which a submitted event is considered valid
			 **/
			challengePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Maps from event claim id to challenger and bond amount paid
			 **/
			challengerAccount: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array
				) => Observable<Option<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * The bridge contract address on Ethereum
			 **/
			contractAddress: AugmentedQuery<ApiType, () => Observable<H160>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The maximum number of delayed events that can be processed in on_initialize()
			 **/
			delayedEventProofsPerBlock: AugmentedQuery<ApiType, () => Observable<u8>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * EthCallOracle notarizations keyed by (Id, Notary)
			 **/
			ethCallNotarizations: AugmentedQuery<
				ApiType,
				(
					arg1: u64 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array
				) => Observable<Option<PalletEthyCheckedEthCallResult>>,
				[u64, SeedPrimitivesEthyCryptoAppCryptoPublic]
			> &
				QueryableStorageEntry<ApiType, [u64, SeedPrimitivesEthyCryptoAppCryptoPublic]>;
			/**
			 * map from EthCallOracle notarizations to an aggregated count
			 **/
			ethCallNotarizationsAggregated: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array
				) => Observable<Option<BTreeMap<PalletEthyCheckedEthCallResult, u32>>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * EthCallOracle request info
			 **/
			ethCallRequestInfo: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletEthyCheckedEthCallRequest>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Queue of pending EthCallOracle requests
			 **/
			ethCallRequests: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum number of block confirmations needed to notarize an Ethereum event
			 **/
			eventBlockConfirmations: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Notarizations for queued events
			 * Either: None = no notarization exists OR Some(yay/nay)
			 **/
			eventNotarizations: AugmentedQuery<
				ApiType,
				(
					arg1: u64 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array
				) => Observable<Option<PalletEthyEventClaimResult>>,
				[u64, SeedPrimitivesEthyCryptoAppCryptoPublic]
			> &
				QueryableStorageEntry<ApiType, [u64, SeedPrimitivesEthyCryptoAppCryptoPublic]>;
			/**
			 * Map from block number to list of EventClaims that will be considered valid and should be
			 * forwarded to handlers (i.e after the optimistic challenge period has passed without issue)
			 **/
			messagesValidAt: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u64>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Tracks message Ids that are outside of the MessageId buffer and were not processed
			 * These message Ids can be either processed or cleared by the relayer
			 **/
			missedMessageIds: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The block in which we process the next authority change
			 **/
			nextAuthorityChange: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Subscription Id for EthCall requests
			 **/
			nextEthCallId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Id of the next event proof
			 **/
			nextEventProofId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Scheduled notary (validator) public keys for the next session
			 **/
			nextNotaryKeys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Active notary (validator) public keys
			 **/
			notaryKeys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current validator set id
			 **/
			notarySetId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The event proof Id generated by the previous validator set to notarize the current set.
			 * Useful for syncing the latest proof to Ethereum
			 **/
			notarySetProofId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Active xrpl notary (validator) public keys
			 **/
			notaryXrplKeys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * List of all event ids that are currently being challenged
			 **/
			pendingClaimChallenges: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Status of pending event claims
			 **/
			pendingClaimStatus: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletEthyEventClaimStatus>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Queued event claims, can be challenged within challenge period
			 **/
			pendingEventClaims: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletEthyEventClaim>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Queued event proofs to be processed once bridge has been re-enabled
			 **/
			pendingEventProofs: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletEthyEthySigningRequest>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Tracks processed message Ids (prevent replay)
			 * Must remain unbounded as this list will grow indefinitely
			 **/
			processedMessageIds: AugmentedQuery<ApiType, () => Observable<Vec<u64>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The permissioned relayer
			 **/
			relayer: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Maps from relayer account to their paid bond amount
			 **/
			relayerPaidBond: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<u128>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Door Signers set by sudo (white list)
			 **/
			xrplDoorSigners: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array) => Observable<bool>,
				[SeedPrimitivesEthyCryptoAppCryptoPublic]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesEthyCryptoAppCryptoPublic]>;
			/**
			 * The event proof Id generated by the previous validator set to notarize the current set.
			 * Useful for syncing the latest proof to Xrpl
			 **/
			xrplNotarySetProofId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ethereum: {
			blockHash: AugmentedQuery<
				ApiType,
				(arg: U256 | AnyNumber | Uint8Array) => Observable<H256>,
				[U256]
			> &
				QueryableStorageEntry<ApiType, [U256]>;
			/**
			 * The current Ethereum block.
			 **/
			currentBlock: AugmentedQuery<ApiType, () => Observable<Option<EthereumBlock>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current Ethereum receipts.
			 **/
			currentReceipts: AugmentedQuery<
				ApiType,
				() => Observable<Option<Vec<EthereumReceiptReceiptV3>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current transaction statuses.
			 **/
			currentTransactionStatuses: AugmentedQuery<
				ApiType,
				() => Observable<Option<Vec<FpRpcTransactionStatus>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current building block's transactions and receipts.
			 **/
			pending: AugmentedQuery<
				ApiType,
				() => Observable<
					Vec<
						ITuple<
							[EthereumTransactionTransactionV2, FpRpcTransactionStatus, EthereumReceiptReceiptV3]
						>
					>
				>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		evm: {
			accountCodes: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Bytes>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			accountCodesMetadata: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Option<PalletEvmCodeMetadata>>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			accountStorages: AugmentedQuery<
				ApiType,
				(arg1: H160 | string | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<H256>,
				[H160, H256]
			> &
				QueryableStorageEntry<ApiType, [H160, H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		evmChainId: {
			/**
			 * The EVM chain ID.
			 **/
			chainId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		feeControl: {
			data: AugmentedQuery<ApiType, () => Observable<PalletFeeControlFeeControlFeeConfig>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		futurepass: {
			/**
			 * Accounts which have set futurepass as default proxied on-chain account (delegate ->
			 * futurepass)
			 **/
			defaultProxy: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Futurepass holders (account -> futurepass)
			 **/
			holders: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The next available incrementing futurepass id
			 **/
			nextFuturepassId: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		grandpa: {
			/**
			 * The number of changes (both in terms of keys and underlying economic responsibilities)
			 * in the "set" of Grandpa validators from genesis.
			 **/
			currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * next block number where we can force a change.
			 **/
			nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Pending change: (signaled at, scheduled change).
			 **/
			pendingChange: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletGrandpaStoredPendingChange>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A mapping from grandpa set ID to the index of the *most recent* session for which its
			 * members were responsible.
			 *
			 * This is only used for validating equivocation proofs. An equivocation proof must
			 * contains a key-ownership proof for a given session, therefore we need a way to tie
			 * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
			 * was the owner of a given key on a given session, and what the active set ID was
			 * during that session.
			 *
			 * TWOX-NOTE: `SetId` is not under user control.
			 **/
			setIdSession: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * `true` if we are currently stalled.
			 **/
			stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * State of the current authority set.
			 **/
			state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		historical: {
			/**
			 * Mapping from historical session indices to session-data root hash and validator count.
			 **/
			historicalSessions: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[H256, u32]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The range of historical sessions we store. [first, last)
			 **/
			storedRange: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		imOnline: {
			/**
			 * For each session index, we keep a mapping of `ValidatorId<T>` to the
			 * number of blocks authored by the given authority.
			 **/
			authoredBlocks: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<u32>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The block number after which it's ok to send heartbeats in the current
			 * session.
			 *
			 * At the beginning of each session we set this to a value that should fall
			 * roughly in the middle of the session duration. The idea is to first wait for
			 * the validators to produce a block in the current session, so that the
			 * heartbeat later on will not be necessary.
			 *
			 * This value will only be used as a fallback if we fail to get a proper session
			 * progress estimate from `NextSessionRotation`, as those estimates should be
			 * more accurate then the value we calculate for `HeartbeatAfter`.
			 **/
			heartbeatAfter: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of keys that may issue a heartbeat.
			 **/
			keys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<PalletImOnlineSr25519AppSr25519Public>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex`.
			 **/
			receivedHeartbeats: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array
				) => Observable<Option<bool>>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		liquidityPools: {
			nextPoolId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			nextRolloverUnsignedAt: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			poolRelationships: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<Option<PalletLiquidityPoolsPoolRelationship>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			pools: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletLiquidityPoolsPoolInfo>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			poolUsers: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletLiquidityPoolsUserInfo>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			rolloverPivot: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		maintenanceMode: {
			/**
			 * Map from account to blocked status
			 **/
			blockedAccounts: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<bool>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Map from call to blocked status
			 * map (PalletNameBytes, FunctionNameBytes) => bool
			 **/
			blockedCalls: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array]
				) => Observable<bool>,
				[ITuple<[Bytes, Bytes]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[Bytes, Bytes]>]>;
			/**
			 * Map from EVM target address to blocked status
			 **/
			blockedEVMAddresses: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<bool>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			/**
			 * Map from pallet to blocked status
			 * map PalletNameBytes => bool
			 **/
			blockedPallets: AugmentedQuery<
				ApiType,
				(arg: Bytes | string | Uint8Array) => Observable<bool>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			/**
			 * Determines whether maintenance mode is currently active
			 **/
			maintenanceModeActive: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		marketplace: {
			/**
			 * The pallet id for the tx fee pot
			 **/
			feeTo: AugmentedQuery<
				ApiType,
				() => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Block numbers where listings will close. Value is `true` if at block number `listing_id` is
			 * scheduled to close.
			 **/
			listingEndSchedule: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u128 | AnyNumber | Uint8Array
				) => Observable<Option<bool>>,
				[u32, u128]
			> &
				QueryableStorageEntry<ApiType, [u32, u128]>;
			/**
			 * NFT sale/auction listings keyed by listing id
			 **/
			listings: AugmentedQuery<
				ApiType,
				(arg: u128 | AnyNumber | Uint8Array) => Observable<Option<PalletMarketplaceListing>>,
				[u128]
			> &
				QueryableStorageEntry<ApiType, [u128]>;
			/**
			 * Winning bids on open listings.
			 **/
			listingWinningBid: AugmentedQuery<
				ApiType,
				(
					arg: u128 | AnyNumber | Uint8Array
				) => Observable<Option<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>>,
				[u128]
			> &
				QueryableStorageEntry<ApiType, [u128]>;
			/**
			 * The next available listing Id
			 **/
			nextListingId: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The next available marketplace id
			 **/
			nextMarketplaceId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The next available offer_id
			 **/
			nextOfferId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from offer_id to the information related to the offer
			 **/
			offers: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletMarketplaceOfferType>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Map from collection to any open listings
			 **/
			openCollectionListings: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u128 | AnyNumber | Uint8Array
				) => Observable<Option<bool>>,
				[u32, u128]
			> &
				QueryableStorageEntry<ApiType, [u32, u128]>;
			/**
			 * Map from marketplace account_id to royalties schedule
			 **/
			registeredMarketplaces: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMarketplaceMarketplace>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Maps from token_id to a vector of offer_ids on that token
			 **/
			tokenOffers: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Option<Vec<u64>>>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		migration: {
			/**
			 * The delay between migration blocks
			 **/
			blockDelay: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The maximum number of individual items to migrate in a single block
			 * Will still respect maximum weight rules
			 **/
			blockLimit: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The last key that was migrated
			 **/
			lastKey: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Are we currently migrating data
			 **/
			migrationEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * What is the current status of the migration
			 **/
			status: AugmentedQuery<ApiType, () => Observable<PalletMigrationMigrationStatus>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		multisig: {
			/**
			 * The set of open multisig operations.
			 **/
			multisigs: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: U8aFixed | string | Uint8Array
				) => Observable<Option<PalletMultisigMultisig>>,
				[SeedPrimitivesSignatureAccountId20, U8aFixed]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20, U8aFixed]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		nfi: {
			/**
			 * The pallet id for the tx fee pot
			 **/
			feeTo: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The extra cost to cover
			 **/
			mintFee: AugmentedQuery<
				ApiType,
				(
					arg: PalletNfiNfiSubType | "NFI" | number | Uint8Array
				) => Observable<Option<PalletNfiFeeDetails>>,
				[PalletNfiNfiSubType]
			> &
				QueryableStorageEntry<ApiType, [PalletNfiNfiSubType]>;
			nfiData: AugmentedQuery<
				ApiType,
				(
					arg1:
						| PalletNfiMultiChainTokenId
						| { chainId?: any; collectionId?: any; serialNumber?: any }
						| string
						| Uint8Array,
					arg2: PalletNfiNfiSubType | "NFI" | number | Uint8Array
				) => Observable<Option<PalletNfiNfiDataType>>,
				[PalletNfiMultiChainTokenId, PalletNfiNfiSubType]
			> &
				QueryableStorageEntry<ApiType, [PalletNfiMultiChainTokenId, PalletNfiNfiSubType]>;
			/**
			 * Flag to enable NFI for collections across chains
			 **/
			nfiEnabled: AugmentedQuery<
				ApiType,
				(
					arg1:
						| ITuple<[u64, PalletNfiGenericCollectionId]>
						| [
								u64 | AnyNumber | Uint8Array,
								(
									| PalletNfiGenericCollectionId
									| { U32: any }
									| { U64: any }
									| { U128: any }
									| { H160: any }
									| { H256: any }
									| { Bytes: any }
									| { Empty: any }
									| { U256: any }
									| string
									| Uint8Array
								),
						  ],
					arg2: PalletNfiNfiSubType | "NFI" | number | Uint8Array
				) => Observable<bool>,
				[ITuple<[u64, PalletNfiGenericCollectionId]>, PalletNfiNfiSubType]
			> &
				QueryableStorageEntry<
					ApiType,
					[ITuple<[u64, PalletNfiGenericCollectionId]>, PalletNfiNfiSubType]
				>;
			/**
			 * The permission enabled relayer
			 **/
			relayer: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		nft: {
			/**
			 * Map from a token_id to additional token data. Useful for assigning extra information
			 * to a token outside the collection metadata.
			 **/
			additionalTokenData: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Bytes>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * Map from collection to its information
			 **/
			collectionInfo: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftCollectionInformation>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The next available incrementing collection id
			 **/
			nextCollectionId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * All tokens owned by a single account
			 **/
			ownedTokens: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array
				) => Observable<Option<Vec<u32>>>,
				[SeedPrimitivesSignatureAccountId20, u32]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20, u32]>;
			pendingIssuances: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<PalletNftCollectionPendingIssuances>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Map from collection to its public minting information
			 **/
			publicMintInfo: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<Option<SeedPalletCommonUtilsPublicMintInformation>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Map from a token to its information, including owner, lock_status and utility_flags
			 **/
			tokenInfo: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array
				) => Observable<Option<PalletNftTokenInformation>>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Map from a collection to additional utility flags
			 **/
			utilityFlags: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<SeedPalletCommonUtilsCollectionUtilityFlags>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		nftPeg: {
			blockedTokens: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNftPegBlockedTokenInfo>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			contractAddress: AugmentedQuery<ApiType, () => Observable<H160>, []> &
				QueryableStorageEntry<ApiType, []>;
			ethToRootNft: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Option<u32>>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			/**
			 * The next available BlockedMintId
			 **/
			nextBlockedMintId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			rootNftToErc721: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H160>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		offences: {
			/**
			 * A vector of reports of the same kind that happened at the same time slot.
			 **/
			concurrentReportsIndex: AugmentedQuery<
				ApiType,
				(
					arg1: U8aFixed | string | Uint8Array,
					arg2: Bytes | string | Uint8Array
				) => Observable<Vec<H256>>,
				[U8aFixed, Bytes]
			> &
				QueryableStorageEntry<ApiType, [U8aFixed, Bytes]>;
			/**
			 * The primary structure that holds all offence records keyed by report identifiers.
			 **/
			reports: AugmentedQuery<
				ApiType,
				(arg: H256 | string | Uint8Array) => Observable<Option<SpStakingOffenceOffenceDetails>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		partnerAttribution: {
			/**
			 * User-partner attributions
			 **/
			attributions: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<Option<u128>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The next available partner id
			 **/
			nextPartnerId: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Partner information
			 **/
			partners: AugmentedQuery<
				ApiType,
				(
					arg: u128 | AnyNumber | Uint8Array
				) => Observable<Option<PalletPartnerAttributionPartnerInformation>>,
				[u128]
			> &
				QueryableStorageEntry<ApiType, [u128]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		preimage: {
			preimageFor: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Option<Bytes>>,
				[ITuple<[H256, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>;
			/**
			 * The request status of a given hash.
			 **/
			statusFor: AugmentedQuery<
				ApiType,
				(arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		proxy: {
			/**
			 * The announcements made by the proxy (key).
			 **/
			announcements: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The set of account proxies. Maps the account which has delegated to the accounts
			 * which are being delegated to, together with the amount held on deposit.
			 **/
			proxies: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		recovery: {
			/**
			 * Active recovery attempts.
			 *
			 * First account is the account to be recovered, and the second account
			 * is the user trying to recover the account.
			 **/
			activeRecoveries: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletRecoveryActiveRecovery>>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			/**
			 * The list of allowed proxy accounts.
			 *
			 * Map from the user who can access it to the recovered account.
			 **/
			proxy: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The set of recoverable accounts and their recovery configuration.
			 **/
			recoverable: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletRecoveryRecoveryConfig>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		scheduler: {
			/**
			 * Items to be executed, indexed by the block number that they should be executed on.
			 **/
			agenda: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Lookup from a name to the block number and index of the task.
			 *
			 * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
			 * identities.
			 **/
			lookup: AugmentedQuery<
				ApiType,
				(arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>,
				[U8aFixed]
			> &
				QueryableStorageEntry<ApiType, [U8aFixed]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		session: {
			/**
			 * Current index of the session.
			 **/
			currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Indices of disabled validators.
			 *
			 * The vec is always kept sorted so that we can find whether a given validator is
			 * disabled using binary search. It gets cleared when `on_session_ending` returns
			 * a new set of identities.
			 **/
			disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The owner of a key. The key is the `KeyTypeId` + the encoded key.
			 **/
			keyOwner: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[SpCoreCryptoKeyTypeId, Bytes]>
						| [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
			/**
			 * The next session keys for a validator.
			 **/
			nextKeys: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<SeedRuntimeSessionKeys>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * True if the underlying economic identities or weighting behind the validators
			 * has changed in the queued validator set.
			 **/
			queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The queued keys for the next session. When the next session begins, these keys
			 * will be used to determine the validator's session keys.
			 **/
			queuedKeys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SeedRuntimeSessionKeys]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of validators.
			 **/
			validators: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SeedPrimitivesSignatureAccountId20>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		sft: {
			/**
			 * Map from a token_id to additional token data. Useful for assigning extra information
			 * to a token outside the collection metadata.
			 **/
			additionalTokenData: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Bytes>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * The next available incrementing issuance ID, unique across all pending issuances
			 **/
			nextIssuanceId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			pendingIssuances: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<PalletSftSftCollectionPendingIssuances>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Map from collection to its public minting information
			 **/
			publicMintInfo: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Option<SeedPalletCommonUtilsPublicMintInformation>>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * Map from collection to its information
			 **/
			sftCollectionInfo: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<Option<PalletSftSftCollectionInformation>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Map from token to its token information, including ownership information
			 **/
			tokenInfo: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Option<PalletSftSftTokenInformation>>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * Map from a token_id to transferable and burn authority flags
			 **/
			tokenUtilityFlags: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<SeedPalletCommonUtilsTokenUtilityFlags>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			/**
			 * Map from a collection to additional utility flags
			 **/
			utilityFlags: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<SeedPalletCommonUtilsCollectionUtilityFlags>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		staking: {
			/**
			 * The active era information, it holds index and start.
			 *
			 * The active era is the era being currently rewarded. Validator set of this era must be
			 * equal to [`SessionInterface::validators`].
			 **/
			activeEra: AugmentedQuery<ApiType, () => Observable<Option<PalletStakingActiveEraInfo>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from all locked "stash" accounts to the controller account.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			bonded: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * A mapping from still-bonded eras to the first session index of that era.
			 *
			 * Must contains information for eras for the range:
			 * `[active_era - bounding_duration; active_era]`
			 **/
			bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The amount of currency given to reporters of a slash event which was
			 * canceled by extraordinary circumstances (e.g. governance).
			 **/
			canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The threshold for when users can start calling `chill_other` for other validators /
			 * nominators. The threshold is compared to the actual number of validators / nominators
			 * (`CountFor*`) in the system compared to the configured max (`Max*Count`).
			 **/
			chillThreshold: AugmentedQuery<ApiType, () => Observable<Option<Percent>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Counter for the related counted storage map
			 **/
			counterForNominators: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Counter for the related counted storage map
			 **/
			counterForValidators: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current era index.
			 *
			 * This is the latest planned era, depending on how the Session pallet queues the validator
			 * set, it might be active or not.
			 **/
			currentEra: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The last planned session scheduled by the session pallet.
			 *
			 * This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
			 **/
			currentPlannedSession: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Rewards for the last `HISTORY_DEPTH` eras.
			 * If reward hasn't been set or has been removed then 0 reward is returned.
			 **/
			erasRewardPoints: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<PalletStakingEraRewardPoints>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Exposure of validator at era.
			 *
			 * This is keyed first by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 * If stakers hasn't been set or has been removed then empty exposure is returned.
			 **/
			erasStakers: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletStakingExposure>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Clipped Exposure of validator at era.
			 *
			 * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
			 * `T::MaxNominatorRewardedPerValidator` biggest stakers.
			 * (Note: the field `total` and `own` of the exposure remains unchanged).
			 * This is used to limit the i/o cost for the nominator payout.
			 *
			 * This is keyed fist by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 * If stakers hasn't been set or has been removed then empty exposure is returned.
			 **/
			erasStakersClipped: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletStakingExposure>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The session index at which the era start for the last `HISTORY_DEPTH` eras.
			 *
			 * Note: This tracks the starting session (i.e. session index when era start being active)
			 * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
			 **/
			erasStartSessionIndex: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The total amount staked for the last `HISTORY_DEPTH` eras.
			 * If total hasn't been set or has been removed then 0 stake is returned.
			 **/
			erasTotalStake: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Similar to `ErasStakers`, this holds the preferences of validators.
			 *
			 * This is keyed first by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 **/
			erasValidatorPrefs: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletStakingValidatorPrefs>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The total validator era payout for the last `HISTORY_DEPTH` eras.
			 *
			 * Eras that haven't finished yet or has been removed doesn't have reward.
			 **/
			erasValidatorReward: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Mode of era forcing.
			 **/
			forceEra: AugmentedQuery<ApiType, () => Observable<PalletStakingForcing>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
			 * easy to initialize and the performance hit is minimal (we expect no more than four
			 * invulnerables) and restricted to testnets.
			 **/
			invulnerables: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SeedPrimitivesSignatureAccountId20>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from all (unlocked) "controller" accounts to the info regarding the staking.
			 **/
			ledger: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletStakingStakingLedger>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The maximum nominator count before we stop allowing new validators to join.
			 *
			 * When this value is not set, no limits are enforced.
			 **/
			maxNominatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The maximum validator count before we stop allowing new validators to join.
			 *
			 * When this value is not set, no limits are enforced.
			 **/
			maxValidatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum amount of commission that validators can set.
			 *
			 * If set to `0`, no limit exists.
			 **/
			minCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active nominator stake of the last successful election.
			 **/
			minimumActiveStake: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Minimum number of staking participants before emergency conditions are imposed.
			 **/
			minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active bond to become and maintain the role of a nominator.
			 **/
			minNominatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active bond to become and maintain the role of a validator.
			 **/
			minValidatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The map from nominator stash key to their nomination preferences, namely the validators that
			 * they wish to support.
			 *
			 * Note that the keys of this storage map might become non-decodable in case the
			 * [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
			 * are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
			 * indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
			 * nominators will effectively not-exist, until they re-submit their preferences such that it
			 * is within the bounds of the newly set `Config::MaxNominations`.
			 *
			 * This implies that `::iter_keys().count()` and `::iter().count()` might return different
			 * values for this map. Moreover, the main `::count()` is aligned with the former, namely the
			 * number of keys that exist.
			 *
			 * Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
			 * [`Call::chill_other`] dispatchable by anyone.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			nominators: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletStakingNominations>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * All slashing events on nominators, mapped by era to the highest slash value of the era.
			 **/
			nominatorSlashInEra: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<u128>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Indices of validators that have offended in the active era and whether they are currently
			 * disabled.
			 *
			 * This value should be a superset of disabled validators since not all offences lead to the
			 * validator being disabled (if there was no slash). This is needed to track the percentage of
			 * validators that have offended in the current era, ensuring a new era is forced if
			 * `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
			 * whether a given validator has previously offended using binary search. It gets cleared when
			 * the era ends.
			 **/
			offendingValidators: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, bool]>>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Where the reward payment should be made. Keyed by stash.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			payee: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletStakingRewardDestination>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Slashing spans for stash accounts.
			 **/
			slashingSpans: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletStakingSlashingSlashingSpans>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * The percentage of the slash that is distributed to reporters.
			 *
			 * The rest of the slashed value is handled by the `Slash`.
			 **/
			slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Records information about the maximum slash of a stash within a slashing span,
			 * as well as how much reward has been paid out.
			 **/
			spanSlash: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[SeedPrimitivesSignatureAccountId20, u32]>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								u32 | AnyNumber | Uint8Array,
						  ]
				) => Observable<PalletStakingSlashingSpanRecord>,
				[ITuple<[SeedPrimitivesSignatureAccountId20, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[SeedPrimitivesSignatureAccountId20, u32]>]>;
			/**
			 * All unapplied slashes that are queued for later.
			 **/
			unappliedSlashes: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletStakingUnappliedSlash>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The ideal number of active validators.
			 **/
			validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The map from (wannabe) validator stash key to the preferences of that validator.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			validators: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<PalletStakingValidatorPrefs>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * All slashing events on validators, mapped by era to the highest slash proportion
			 * and slash value of the era.
			 **/
			validatorSlashInEra: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<ITuple<[Perbill, u128]>>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		sudo: {
			/**
			 * The `AccountId` of the sudo key.
			 **/
			key: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		syloActionPermissions: {
			/**
			 * Nonces that have already been used for token signatures.
			 **/
			tokenSignatureNonces: AugmentedQuery<
				ApiType,
				(arg: U256 | AnyNumber | Uint8Array) => Observable<bool>,
				[U256]
			> &
				QueryableStorageEntry<ApiType, [U256]>;
			/**
			 * Holds transact permission records.
			 **/
			transactPermissions: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletSyloActionPermissionsTransactPermission>>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		syloDataPermissions: {
			expiringPermissionRecords: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<
					Vec<
						ITuple<
							[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Bytes, u32]
						>
					>
				>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			expiringTaggedPermissionRecords: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array
				) => Observable<
					Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, u32]>>
				>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			nextPermissionRecordId: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<u32>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			permissionRecords: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg3: Bytes | string | Uint8Array
				) => Observable<Vec<ITuple<[u32, PalletSyloDataPermissionsPermissionRecord]>>>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Bytes]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Bytes]
				>;
			permissionReferences: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletSyloDataPermissionsPermissionReference>>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			taggedPermissionRecords: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Vec<ITuple<[u32, PalletSyloDataPermissionsTaggedPermissionRecord]>>>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
				>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		syloDataVerification: {
			resolvers: AugmentedQuery<
				ApiType,
				(arg: Bytes | string | Uint8Array) => Observable<Option<SeedPalletCommonSyloResolver>>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			syloAssetId: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			syloResolverMethod: AugmentedQuery<ApiType, () => Observable<Bytes>, []> &
				QueryableStorageEntry<ApiType, []>;
			validationRecords: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2: Bytes | string | Uint8Array
				) => Observable<Option<SeedPalletCommonSyloValidationRecord>>,
				[SeedPrimitivesSignatureAccountId20, Bytes]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20, Bytes]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		system: {
			/**
			 * The full account information for a particular account ID.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<FrameSystemAccountInfo>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Total length (in bytes) for all extrinsics put together, for the current block.
			 **/
			allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map of block numbers to block hashes.
			 **/
			blockHash: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<H256>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The current weight for the block.
			 **/
			blockWeight: AugmentedQuery<
				ApiType,
				() => Observable<FrameSupportDispatchPerDispatchClassWeight>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Digest of the current block, also part of the block header.
			 **/
			digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The number of events in the `Events<T>` list.
			 **/
			eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Events deposited for the current block.
			 *
			 * NOTE: The item is unbound and should therefore never be read on chain.
			 * It could otherwise inflate the PoV size of a block.
			 *
			 * Events have a large in-memory size. Box the events to not go out-of-memory
			 * just in case someone still reads them from within the runtime.
			 **/
			events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Mapping between a topic (represented by T::Hash) and a vector of indexes
			 * of events in the `<Events<T>>` list.
			 *
			 * All topic vectors have deterministic storage locations depending on the topic. This
			 * allows light-clients to leverage the changes trie storage tracking mechanism and
			 * in case of changes fetch the list of events of interest.
			 *
			 * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
			 * the `EventIndex` then in case if the topic has the same contents on the next block
			 * no notification will be triggered thus the event might be lost.
			 **/
			eventTopics: AugmentedQuery<
				ApiType,
				(arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * The execution phase of the block.
			 **/
			executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Total extrinsics count for the current block.
			 **/
			extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Extrinsics data for the current block (maps an extrinsic's index to its data).
			 **/
			extrinsicData: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
			 **/
			lastRuntimeUpgrade: AugmentedQuery<
				ApiType,
				() => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current block number being processed. Set by `execute_block`.
			 **/
			number: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Hash of the previous block.
			 **/
			parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
			 * (default) if not.
			 **/
			upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
			 **/
			upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		timestamp: {
			/**
			 * Did the timestamp get updated in this block?
			 **/
			didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current time for the current block.
			 **/
			now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		tokenApprovals: {
			erc1155ApprovalsForAll: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2:
						| ITuple<[u32, SeedPrimitivesSignatureAccountId20]>
						| [
								u32 | AnyNumber | Uint8Array,
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
						  ]
				) => Observable<Option<bool>>,
				[SeedPrimitivesSignatureAccountId20, ITuple<[u32, SeedPrimitivesSignatureAccountId20]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, ITuple<[u32, SeedPrimitivesSignatureAccountId20]>]
				>;
			erc20Approvals: AugmentedQuery<
				ApiType,
				(
					arg1:
						| ITuple<[SeedPrimitivesSignatureAccountId20, u32]>
						| [
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
								u32 | AnyNumber | Uint8Array,
						  ],
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<u128>>,
				[ITuple<[SeedPrimitivesSignatureAccountId20, u32]>, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<
					ApiType,
					[ITuple<[SeedPrimitivesSignatureAccountId20, u32]>, SeedPrimitivesSignatureAccountId20]
				>;
			erc721Approvals: AugmentedQuery<
				ApiType,
				(
					arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			erc721ApprovalsForAll: AugmentedQuery<
				ApiType,
				(
					arg1: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					arg2:
						| ITuple<[u32, SeedPrimitivesSignatureAccountId20]>
						| [
								u32 | AnyNumber | Uint8Array,
								SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
						  ]
				) => Observable<Option<bool>>,
				[SeedPrimitivesSignatureAccountId20, ITuple<[u32, SeedPrimitivesSignatureAccountId20]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[SeedPrimitivesSignatureAccountId20, ITuple<[u32, SeedPrimitivesSignatureAccountId20]>]
				>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		transactionPayment: {
			nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<PalletTransactionPaymentReleases>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		txFeePot: {
			/**
			 * Accrued transaction fees in the current staking Era
			 **/
			eraTxFees: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vortexDistribution: {
			adminAccount: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores asset prices for each vortex distribution
			 **/
			assetPrices: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array
				) => Observable<u128>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Stores balance consideration criteria, current or stored
			 **/
			considerCurrentBalance: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores disable redeem
			 **/
			disableRedeem: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores enabling manual reward input
			 **/
			enableManualRewardInput: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores Fee pot asset list for each vortex distribution
			 **/
			feePotAssetsList: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, u128]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores next unsigned tx block number
			 **/
			nextUnsignedAt: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			nextVortexId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores reward points for each account, each vortex distribution
			 **/
			rewardPoints: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<u128>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Stores total bootstrap reward for each distribution, this is in drops multiplied by PRECISION_MULTIPLIER
			 **/
			totalBootstrapReward: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores total network reward for each distribution, this is in drops multiplied by PRECISION_MULTIPLIER
			 **/
			totalNetworkReward: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores total Reward points for each cycle when the rewards are registered.
			 **/
			totalRewardPoints: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores total vortex amount for each distribution, this is in drops multiplied by PRECISION_MULTIPLIER
			 **/
			totalVortex: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores total work points for each cycle when the work points are registered.
			 **/
			totalWorkPoints: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores order books for each vortex distribution
			 **/
			vtxDistOrderbook: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<ITuple<[u128, bool]>>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Stores payout pivot block for each vortex distribution
			 **/
			vtxDistPayoutPivot: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores status of each vortex distribution
			 **/
			vtxDistStatuses: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<PalletVortexDistributionVtxDistStatus>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores Vtx price each vortex distribution
			 **/
			vtxPrice: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores reward calculation pivot block for each vortex distribution
			 **/
			vtxRewardCalculationPivot: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores Vtx total supply for each vortex distribution
			 **/
			vtxTotalSupply: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores Vortex vault asset list for each vortex distribution
			 **/
			vtxVaultAssetsList: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, u128]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores VtxVault latest asset id list that can be redeemed.
			 **/
			vtxVaultRedeemAssetList: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Stores work points for each account, each vortex distribution
			 **/
			workPoints: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<u128>,
				[u32, SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [u32, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		voterList: {
			/**
			 * Counter for the related counted storage map
			 **/
			counterForListNodes: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A bag stored in storage.
			 *
			 * Stores a `Bag` struct, which stores head and tail pointers to itself.
			 **/
			listBags: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletBagsListListBag>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * A single node, within some bag.
			 *
			 * Nodes store links forward and back within their respective bags.
			 **/
			listNodes: AugmentedQuery<
				ApiType,
				(
					arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => Observable<Option<PalletBagsListListNode>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		xls20: {
			/**
			 * Map from XLs-20 Collection to CollectionUuid
			 **/
			collectionMapping: AugmentedQuery<
				ApiType,
				(
					arg:
						| PalletXls20Xls20Collection
						| { issuerAddress?: any; taxon?: any }
						| string
						| Uint8Array
				) => Observable<Option<u32>>,
				[PalletXls20Xls20Collection]
			> &
				QueryableStorageEntry<ApiType, [PalletXls20Xls20Collection]>;
			/**
			 * The permissioned relayer
			 **/
			relayer: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The extra cost of minting an XLS-20 compatible NFT
			 **/
			xls20MintFee: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Maps from TRN native token_id to XLS-20 TokenId
			 **/
			xls20TokenMap: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array
				) => Observable<Option<U8aFixed>>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		xrplBridge: {
			/**
			 * Map TRN asset Id to XRPL symbol, storage to keep mapping between TRN -> XRPL tokens/assets
			 **/
			assetIdToXRPL: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletXrplBridgeXrplCurrency>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Challenge received for a transaction mapped by hash, will be cleared when validator
			 * validates
			 **/
			challengeXRPTransactionList: AugmentedQuery<
				ApiType,
				(arg: H512 | string | Uint8Array) => Observable<Option<SeedPrimitivesSignatureAccountId20>>,
				[H512]
			> &
				QueryableStorageEntry<ApiType, [H512]>;
			/**
			 * Map from DelayedPaymentId to (sender, WithdrawTx)
			 **/
			delayedPayments: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array
				) => Observable<Option<PalletXrplBridgeDelayedWithdrawal>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Map from block number to DelayedPaymentIds scheduled for that block
			 **/
			delayedPaymentSchedule: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<u64>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The door address on XRPL
			 **/
			doorAddress: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<Option<H160>>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * The current ticket sequence of the XRPL door accounts
			 **/
			doorTicketSequence: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<u32>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * The Ticket sequence params of the XRPL door accounts for the current allocation
			 **/
			doorTicketSequenceParams: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<PalletXrplBridgeXrplTicketSequenceParams>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * The Ticket sequence params of the XRPL door accounts for the next allocation
			 **/
			doorTicketSequenceParamsNext: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<PalletXrplBridgeXrplTicketSequenceParams>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * The flat fee for XRPL door txs
			 **/
			doorTxFee: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<u64>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * Highest pruned XRPL ledger index
			 **/
			highestPrunedLedgerIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Highest settled XRPL ledger index
			 **/
			highestSettledLedgerIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The next available delayedPaymentId
			 **/
			nextDelayedPaymentId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The highest block number that has had all delayed payments processed
			 **/
			nextDelayProcessBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Payment delay for any withdraw over the specified Balance threshold
			 **/
			paymentDelay: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u128, u32]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Temporary storage to set the transactions ready to be processed at specified block number
			 **/
			processXRPTransaction: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<H512>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores submitted transactions from XRPL waiting to be processed
			 * Transactions will be cleared according to the submission window after processing
			 **/
			processXRPTransactionDetails: AugmentedQuery<
				ApiType,
				(
					arg: H512 | string | Uint8Array
				) => Observable<
					Option<ITuple<[u64, PalletXrplBridgeXrpTransaction, SeedPrimitivesSignatureAccountId20]>>
				>,
				[H512]
			> &
				QueryableStorageEntry<ApiType, [H512]>;
			/**
			 * List of all XRP transaction relayers
			 **/
			relayer: AugmentedQuery<
				ApiType,
				(arg: SeedPrimitivesSignatureAccountId20 | string | Uint8Array) => Observable<Option<bool>>,
				[SeedPrimitivesSignatureAccountId20]
			> &
				QueryableStorageEntry<ApiType, [SeedPrimitivesSignatureAccountId20]>;
			/**
			 * Settled xrp transactions stored against XRPL ledger index
			 **/
			settledXRPTransactionDetails: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<H512>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Source tag to be used to indicate the transaction is happening from futureverse
			 **/
			sourceTag: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * XRPL transactions submission window width in ledger indexes
			 **/
			submissionWindowWidth: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Keeps track whether the TicketSequenceThresholdReached event is emitted for XRPL door accounts
			 **/
			ticketSequenceThresholdReachedEmitted: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplDoorAccount | "Main" | "NFT" | number | Uint8Array
				) => Observable<bool>,
				[PalletXrplBridgeXrplDoorAccount]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplDoorAccount]>;
			/**
			 * Map XRPL symbol to TRN asset Id, storage to keep mapping between XRPL -> TRN tokens/assets
			 **/
			xrplToAssetId: AugmentedQuery<
				ApiType,
				(
					arg: PalletXrplBridgeXrplCurrency | { symbol?: any; issuer?: any } | string | Uint8Array
				) => Observable<Option<u32>>,
				[PalletXrplBridgeXrplCurrency]
			> &
				QueryableStorageEntry<ApiType, [PalletXrplBridgeXrplCurrency]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
	} // AugmentedQueries
} // declare module
