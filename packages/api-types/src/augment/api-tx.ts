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
	bool,
	Bytes,
	Compact,
	Option,
	u128,
	u16,
	U256,
	u32,
	u64,
	u8,
	U8aFixed,
	Vec,
} from "@polkadot/types-codec";
import type { AnyNumber, IMethod, ITuple } from "@polkadot/types-codec/types";
import type {
	EthereumTransactionTransactionV2,
	FrameSupportScheduleMaybeHashed,
	PalletAssetsDestroyWitness,
	PalletElectionProviderMultiPhaseRawSolution,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletEthyNotarizationPayload,
	PalletImOnlineHeartbeat,
	PalletImOnlineSr25519AppSr25519Signature,
	PalletNftCrossChainCompatibility,
	PalletStakingPalletConfigOpPerbill,
	PalletStakingPalletConfigOpPercent,
	PalletStakingPalletConfigOpU128,
	PalletStakingPalletConfigOpU32,
	PalletStakingRewardDestination,
	PalletStakingValidatorPrefs,
	PalletXrplBridgeHelpersXrplTxData,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesEthyCryptoAppCryptoSignature,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesSignatureAccountId20,
	SeedRuntimeImplsProxyType,
	SeedRuntimeOriginCaller,
	SeedRuntimeSessionKeys,
	SpConsensusBabeDigestsNextConfigDescriptor,
	SpConsensusSlotsEquivocationProof,
	SpCoreVoid,
	SpFinalityGrandpaEquivocationProof,
	SpNposElectionsElectionScore,
	SpNposElectionsSupport,
	SpRuntimeHeader,
	SpSessionMembershipProof,
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
			 * Approve an amount of asset for transfer by a delegated third-party account.
			 *
			 * Origin must be Signed.
			 *
			 * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
			 * for the purpose of holding the approval. If some non-zero amount of assets is already
			 * approved from signing account to `delegate`, then it is topped up or unreserved to
			 * meet the right value.
			 *
			 * NOTE: The signing account does not need to own `amount` of assets at the point of
			 * making this call.
			 *
			 * - `id`: The identifier of the asset.
			 * - `delegate`: The account to delegate permission to transfer asset.
			 * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
			 * already an approval in place, then this acts additively.
			 *
			 * Emits `ApprovedTransfer` on success.
			 *
			 * Weight: `O(1)`
			 */
			approveTransfer: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
			 *
			 * Origin must be Signed and the sender should be the Manager of the asset `id`.
			 *
			 * Bails with `NoAccount` if the `who` is already dead.
			 *
			 * - `id`: The identifier of the asset to have some amount burned.
			 * - `who`: The account to be debited from.
			 * - `amount`: The maximum amount by which `who`'s balance should be reduced.
			 *
			 * Emits `Burned` with the actual amount burned. If this takes the balance to below the
			 * minimum for the asset, then the amount burned is increased to take it to zero.
			 *
			 * Weight: `O(1)`
			 * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
			 */
			burn: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Cancel all of some asset approved for delegated transfer by a third-party account.
			 *
			 * Origin must be Signed and there must be an approval in place between signer and
			 * `delegate`.
			 *
			 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
			 *
			 * - `id`: The identifier of the asset.
			 * - `delegate`: The account delegated permission to transfer asset.
			 *
			 * Emits `ApprovalCancelled` on success.
			 *
			 * Weight: `O(1)`
			 */
			cancelApproval: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Clear the metadata for an asset.
			 *
			 * Origin must be Signed and the sender should be the Owner of the asset `id`.
			 *
			 * Any deposit is freed for the asset owner.
			 *
			 * - `id`: The identifier of the asset to clear.
			 *
			 * Emits `MetadataCleared`.
			 *
			 * Weight: `O(1)`
			 */
			clearMetadata: AugmentedSubmittable<
				(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Issue a new class of fungible assets from a public origin.
			 *
			 * This new asset class has no assets initially and its owner is the origin.
			 *
			 * The origin must be Signed and the sender must have sufficient funds free.
			 *
			 * Funds of sender are reserved by `AssetDeposit`.
			 *
			 * Parameters:
			 * - `id`: The identifier of the new asset. This must not be currently in use to identify
			 * an existing asset.
			 * - `admin`: The admin of this class of assets. The admin is the initial address of each
			 * member of the asset class's admin team.
			 * - `min_balance`: The minimum balance of this new asset that any single account must
			 * have. If an account's balance is reduced below this, then it collapses to zero.
			 *
			 * Emits `Created` event when successful.
			 *
			 * Weight: `O(1)`
			 */
			create: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					minBalance: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, u128]
			>;
			/**
			 * Destroy a class of fungible assets.
			 *
			 * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
			 * owner of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be destroyed. This must identify an existing
			 * asset.
			 *
			 * Emits `Destroyed` event when successful.
			 *
			 * NOTE: It can be helpful to first freeze an asset before destroying it so that you
			 * can provide accurate witness information and prevent users from manipulating state
			 * in a way that can make it harder to destroy.
			 *
			 * Weight: `O(c + p + a)` where:
			 * - `c = (witness.accounts - witness.sufficients)`
			 * - `s = witness.sufficients`
			 * - `a = witness.approvals`
			 */
			destroy: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					witness:
						| PalletAssetsDestroyWitness
						| { accounts?: any; sufficients?: any; approvals?: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, PalletAssetsDestroyWitness]
			>;
			/**
			 * Alter the attributes of a given asset.
			 *
			 * Origin must be `ForceOrigin`.
			 *
			 * - `id`: The identifier of the asset.
			 * - `owner`: The new Owner of this asset.
			 * - `issuer`: The new Issuer of this asset.
			 * - `admin`: The new Admin of this asset.
			 * - `freezer`: The new Freezer of this asset.
			 * - `min_balance`: The minimum balance of this new asset that any single account must
			 * have. If an account's balance is reduced below this, then it collapses to zero.
			 * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
			 * value to account for the state bloat associated with its balance storage. If set to
			 * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
			 * an ED in the Balances pallet or whatever else is used to control user-account state
			 * growth).
			 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
			 * instructions.
			 *
			 * Emits `AssetStatusChanged` with the identity of the asset.
			 *
			 * Weight: `O(1)`
			 */
			forceAssetStatus: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					issuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					freezer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					minBalance: Compact<u128> | AnyNumber | Uint8Array,
					isSufficient: bool | boolean | Uint8Array,
					isFrozen: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u32>,
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
			 * Cancel all of some asset approved for delegated transfer by a third-party account.
			 *
			 * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
			 * account of the asset `id`.
			 *
			 * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
			 *
			 * - `id`: The identifier of the asset.
			 * - `delegate`: The account delegated permission to transfer asset.
			 *
			 * Emits `ApprovalCancelled` on success.
			 *
			 * Weight: `O(1)`
			 */
			forceCancelApproval: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Clear the metadata for an asset.
			 *
			 * Origin must be ForceOrigin.
			 *
			 * Any deposit is returned.
			 *
			 * - `id`: The identifier of the asset to clear.
			 *
			 * Emits `MetadataCleared`.
			 *
			 * Weight: `O(1)`
			 */
			forceClearMetadata: AugmentedSubmittable<
				(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Issue a new class of fungible assets from a privileged origin.
			 *
			 * This new asset class has no assets initially.
			 *
			 * The origin must conform to `ForceOrigin`.
			 *
			 * Unlike `create`, no funds are reserved.
			 *
			 * - `id`: The identifier of the new asset. This must not be currently in use to identify
			 * an existing asset.
			 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
			 * over this asset, but may later change and configure the permissions using
			 * `transfer_ownership` and `set_team`.
			 * - `min_balance`: The minimum balance of this new asset that any single account must
			 * have. If an account's balance is reduced below this, then it collapses to zero.
			 *
			 * Emits `ForceCreated` event when successful.
			 *
			 * Weight: `O(1)`
			 */
			forceCreate: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					isSufficient: bool | boolean | Uint8Array,
					minBalance: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, bool, Compact<u128>]
			>;
			/**
			 * Force the metadata for an asset to some value.
			 *
			 * Origin must be ForceOrigin.
			 *
			 * Any deposit is left alone.
			 *
			 * - `id`: The identifier of the asset to update.
			 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
			 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
			 * - `decimals`: The number of decimals this asset uses to represent one unit.
			 *
			 * Emits `MetadataSet`.
			 *
			 * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
			 */
			forceSetMetadata: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array,
					symbol: Bytes | string | Uint8Array,
					decimals: u8 | AnyNumber | Uint8Array,
					isFrozen: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Bytes, Bytes, u8, bool]
			>;
			/**
			 * Move some assets from one account to another.
			 *
			 * Origin must be Signed and the sender should be the Admin of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to have some amount transferred.
			 * - `source`: The account to be debited.
			 * - `dest`: The account to be credited.
			 * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
			 * `dest`'s balance increased. The amount actually transferred may be slightly greater in
			 * the case that the transfer would otherwise take the `source` balance above zero but
			 * below the minimum balance. Must be greater than zero.
			 *
			 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
			 * to below the minimum for the asset, then the amount transferred is increased to take it
			 * to zero.
			 *
			 * Weight: `O(1)`
			 * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
			 * `dest`.
			 */
			forceTransfer: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					source: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u32>,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					Compact<u128>,
				]
			>;
			/**
			 * Disallow further unprivileged transfers from an account.
			 *
			 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be frozen.
			 * - `who`: The account to be frozen.
			 *
			 * Emits `Frozen`.
			 *
			 * Weight: `O(1)`
			 */
			freeze: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Disallow further unprivileged transfers for the asset class.
			 *
			 * Origin must be Signed and the sender should be the Freezer of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be frozen.
			 *
			 * Emits `Frozen`.
			 *
			 * Weight: `O(1)`
			 */
			freezeAsset: AugmentedSubmittable<
				(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Mint assets of a particular class.
			 *
			 * The origin must be Signed and the sender must be the Issuer of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to have some amount minted.
			 * - `beneficiary`: The account to be credited with the minted assets.
			 * - `amount`: The amount of the asset to be minted.
			 *
			 * Emits `Issued` event when successful.
			 *
			 * Weight: `O(1)`
			 * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
			 */
			mint: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					beneficiary: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Return the deposit (if any) of an asset account.
			 *
			 * The origin must be Signed.
			 *
			 * - `id`: The identifier of the asset for the account to be created.
			 * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
			 *
			 * Emits `Refunded` event when successful.
			 */
			refund: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					allowBurn: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, bool]
			>;
			/**
			 * Set the metadata for an asset.
			 *
			 * Origin must be Signed and the sender should be the Owner of the asset `id`.
			 *
			 * Funds of sender are reserved according to the formula:
			 * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
			 * account any already reserved funds.
			 *
			 * - `id`: The identifier of the asset to update.
			 * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
			 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
			 * - `decimals`: The number of decimals this asset uses to represent one unit.
			 *
			 * Emits `MetadataSet`.
			 *
			 * Weight: `O(1)`
			 */
			setMetadata: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array,
					symbol: Bytes | string | Uint8Array,
					decimals: u8 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Bytes, Bytes, u8]
			>;
			/**
			 * Change the Issuer, Admin and Freezer of an asset.
			 *
			 * Origin must be Signed and the sender should be the Owner of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be frozen.
			 * - `issuer`: The new Issuer of this asset.
			 * - `admin`: The new Admin of this asset.
			 * - `freezer`: The new Freezer of this asset.
			 *
			 * Emits `TeamChanged`.
			 *
			 * Weight: `O(1)`
			 */
			setTeam: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					issuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					admin: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					freezer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u32>,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
				]
			>;
			/**
			 * Allow unprivileged transfers from an account again.
			 *
			 * Origin must be Signed and the sender should be the Admin of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be frozen.
			 * - `who`: The account to be unfrozen.
			 *
			 * Emits `Thawed`.
			 *
			 * Weight: `O(1)`
			 */
			thaw: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Allow unprivileged transfers for the asset again.
			 *
			 * Origin must be Signed and the sender should be the Admin of the asset `id`.
			 *
			 * - `id`: The identifier of the asset to be thawed.
			 *
			 * Emits `Thawed`.
			 *
			 * Weight: `O(1)`
			 */
			thawAsset: AugmentedSubmittable<
				(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Create an asset account for non-provider assets.
			 *
			 * A deposit will be taken from the signer account.
			 *
			 * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
			 * to be taken.
			 * - `id`: The identifier of the asset for the account to be created.
			 *
			 * Emits `Touched` event when successful.
			 */
			touch: AugmentedSubmittable<
				(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Move some assets from the sender account to another.
			 *
			 * Origin must be Signed.
			 *
			 * - `id`: The identifier of the asset to have some amount transferred.
			 * - `target`: The account to be credited.
			 * - `amount`: The amount by which the sender's balance of assets should be reduced and
			 * `target`'s balance increased. The amount actually transferred may be slightly greater in
			 * the case that the transfer would otherwise take the sender balance above zero but below
			 * the minimum balance. Must be greater than zero.
			 *
			 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
			 * to below the minimum for the asset, then the amount transferred is increased to take it
			 * to zero.
			 *
			 * Weight: `O(1)`
			 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
			 * `target`.
			 */
			transfer: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					target: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Transfer some asset balance from a previously delegated account to some third-party
			 * account.
			 *
			 * Origin must be Signed and there must be an approval in place by the `owner` to the
			 * signer.
			 *
			 * If the entire amount approved for transfer is transferred, then any deposit previously
			 * reserved by `approve_transfer` is unreserved.
			 *
			 * - `id`: The identifier of the asset.
			 * - `owner`: The account which previously approved for a transfer of at least `amount` and
			 * from which the asset balance will be withdrawn.
			 * - `destination`: The account to which the asset balance of `amount` will be transferred.
			 * - `amount`: The amount of assets to transfer.
			 *
			 * Emits `TransferredApproved` on success.
			 *
			 * Weight: `O(1)`
			 */
			transferApproved: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					destination: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u32>,
					SeedPrimitivesSignatureAccountId20,
					SeedPrimitivesSignatureAccountId20,
					Compact<u128>,
				]
			>;
			/**
			 * Move some assets from the sender account to another, keeping the sender account alive.
			 *
			 * Origin must be Signed.
			 *
			 * - `id`: The identifier of the asset to have some amount transferred.
			 * - `target`: The account to be credited.
			 * - `amount`: The amount by which the sender's balance of assets should be reduced and
			 * `target`'s balance increased. The amount actually transferred may be slightly greater in
			 * the case that the transfer would otherwise take the sender balance above zero but below
			 * the minimum balance. Must be greater than zero.
			 *
			 * Emits `Transferred` with the actual amount transferred. If this takes the source balance
			 * to below the minimum for the asset, then the amount transferred is increased to take it
			 * to zero.
			 *
			 * Weight: `O(1)`
			 * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
			 * `target`.
			 */
			transferKeepAlive: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					target: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Change the Owner of an asset.
			 *
			 * Origin must be Signed and the sender should be the Owner of the asset `id`.
			 *
			 * - `id`: The identifier of the asset.
			 * - `owner`: The new Owner of this asset.
			 *
			 * Emits `OwnerChanged`.
			 *
			 * Weight: `O(1)`
			 */
			transferOwnership: AugmentedSubmittable<
				(
					id: Compact<u32> | AnyNumber | Uint8Array,
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		assetsExt: {
			/**
			 * Creates a new asset with unique ID according to the network asset id scheme.
			 */
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
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		authorship: {
			/**
			 * Provide a set of uncles.
			 */
			setUncles: AugmentedSubmittable<
				(
					newUncles:
						| Vec<SpRuntimeHeader>
						| (
								| SpRuntimeHeader
								| {
										parentHash?: any;
										number?: any;
										stateRoot?: any;
										extrinsicsRoot?: any;
										digest?: any;
								  }
								| string
								| Uint8Array
						  )[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SpRuntimeHeader>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		babe: {
			/**
			 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
			 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
			 * Multiple calls to this method will replace any existing planned config change that had
			 * not been enacted yet.
			 */
			planConfigChange: AugmentedSubmittable<
				(
					config: SpConsensusBabeDigestsNextConfigDescriptor | { V1: any } | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SpConsensusBabeDigestsNextConfigDescriptor]
			>;
			/**
			 * Report authority equivocation/misbehavior. This method will verify
			 * the equivocation proof and validate the given key ownership proof
			 * against the extracted offender. If both are valid, the offence will
			 * be reported.
			 */
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
			 * Report authority equivocation/misbehavior. This method will verify
			 * the equivocation proof and validate the given key ownership proof
			 * against the extracted offender. If both are valid, the offence will
			 * be reported.
			 * This extrinsic must be called unsigned and it is expected that only
			 * block authors will call it (validated in `ValidateUnsigned`), as such
			 * if the block author is defined it will be defined as the equivocation
			 * reporter.
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		balances: {
			/**
			 * Exactly as `transfer`, except the origin must be root and the source account may be
			 * specified.
			 * # <weight>
			 * - Same as transfer, but additional read and write because the source account is not
			 * assumed to be in the overlay.
			 * # </weight>
			 */
			forceTransfer: AugmentedSubmittable<
				(
					source: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Unreserve some balance from a user by force.
			 *
			 * Can only be called by ROOT.
			 */
			forceUnreserve: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u128]
			>;
			/**
			 * Set the balances of a given account.
			 *
			 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
			 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
			 * If the new free or reserved balance is below the existential deposit,
			 * it will reset the account nonce (`frame_system::AccountNonce`).
			 *
			 * The dispatch origin for this call is `root`.
			 */
			setBalance: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					newFree: Compact<u128> | AnyNumber | Uint8Array,
					newReserved: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>, Compact<u128>]
			>;
			/**
			 * Transfer some liquid free balance to another account.
			 *
			 * `transfer` will set the `FreeBalance` of the sender and receiver.
			 * If the sender's account is below the existential deposit as a result
			 * of the transfer, the account will be reaped.
			 *
			 * The dispatch origin for this call must be `Signed` by the transactor.
			 *
			 * # <weight>
			 * - Dependent on arguments but not critical, given proper implementations for input config
			 * types. See related functions below.
			 * - It contains a limited number of reads and writes internally and no complex
			 * computation.
			 *
			 * Related functions:
			 *
			 * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
			 * - Transferring balances to accounts that did not exist before will cause
			 * `T::OnNewAccount::on_new_account` to be called.
			 * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
			 * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
			 * that the transfer will not kill the origin account.
			 * ---------------------------------
			 * - Origin account is already in memory, so no DB operations for them.
			 * # </weight>
			 */
			transfer: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Transfer the entire transferable balance from the caller account.
			 *
			 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
			 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
			 * transferred by this function. To ensure that this function results in a killed account,
			 * you might need to prepare the account by removing any reference counters, storage
			 * deposits, etc...
			 *
			 * The dispatch origin of this call must be Signed.
			 *
			 * - `dest`: The recipient of the transfer.
			 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
			 * of the funds the account has, causing the sender account to be killed (false), or
			 * transfer everything except at least the existential deposit, which will guarantee to
			 * keep the sender account alive (true). # <weight>
			 * - O(1). Just like transfer, but reading the user's transferable balance first.
			 * #</weight>
			 */
			transferAll: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					keepAlive: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, bool]
			>;
			/**
			 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
			 * origin account.
			 *
			 * 99% of the time you want [`transfer`] instead.
			 *
			 * [`transfer`]: struct.Pallet.html#method.transfer
			 */
			transferKeepAlive: AugmentedSubmittable<
				(
					dest: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Compact<u128>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		dex: {
			/**
			 * Add liquidity to Enabled trading pair, or add provision to Provisioning trading pair.
			 * - Add liquidity success will issue shares in current price which decided by the
			 * liquidity scale. Shares are temporarily not
			 * allowed to transfer and trade, it represents the proportion of
			 * assets in liquidity pool.
			 * - Add provision success will record the provision, issue shares to caller in the initial
			 * price when trading pair convert to Enabled.
			 * - Creates and enables TradingPair LP token if it does not exist for trading pair.
			 * - Fails to add liquidity for `NotEnabled` trading pair.
			 *
			 * - `token_a`: Asset id A.
			 * - `token_b`: Asset id B.
			 * - `amount_a_desired`: amount a desired to add.
			 * - `amount_b_desired`: amount b desired to add.
			 * - `amount_a_min`: amount a minimum willing to add.
			 * - `amount_b_min`: amount b minimum willing to add.
			 * - `to`: The recipient of the LP token. The caller is the default recipient if it is set
			 * to None.
			 * - `deadline`: The deadline of executing this extrinsic. The deadline won't be checked if
			 * it is set to None
			 */
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
			 * Disable an `Enabled` trading pair.
			 * - Requires LP token to be created and in the `Enabled` status
			 * - Only root can disable trading pair
			 *
			 * - `token_a`: Asset id A.
			 * - `token_b`: Asset id B.
			 */
			disableTradingPair: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Re enable a `NotEnabled` trading pair.
			 * - Requires LP token to be created and in the `NotEnabled` status
			 * - Only root can enable a disabled trading pair
			 *
			 * - `token_a`: Asset id A.
			 * - `token_b`: Asset id B.
			 */
			reenableTradingPair: AugmentedSubmittable<
				(
					tokenA: u32 | AnyNumber | Uint8Array,
					tokenB: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Remove liquidity from specific liquidity pool in the form of burning
			 * shares, and withdrawing currencies in trading pairs from liquidity
			 * pool in proportion, and withdraw liquidity incentive interest.
			 * - note: liquidity can still be withdrawn for `NotEnabled` trading pairs.
			 *
			 * - `token_a`: Asset id A.
			 * - `token_b`: Asset id B.
			 * - `liquidity`: liquidity amount to remove.
			 * - `amount_a_min`: minimum amount of asset A to be withdrawn from LP token.
			 * - `amount_b_min`: minimum amount of asset B to be withdrawn from LP token.
			 * - `to`: The recipient of the withdrawn token assets. The caller is the default recipient
			 * if it is set to None.
			 * - `deadline`: The deadline of executing this extrinsic. The deadline won't be checked if
			 * it is set to None
			 */
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
			 * Set the `FeeTo` account. This operation requires root access.
			 * - note: analogous to Uniswapv2 `setFeeTo`
			 *
			 * - `fee_to`: the new account or None assigned to FeeTo.
			 */
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
			 * Trading with DEX, swap with exact supply amount. Specify your input; retrieve variable
			 * output.
			 * - note: analogous to Uniswapv2 `swapExactTokensForTokens`
			 *
			 * - `path`: trading path.
			 * - `amount_in`: exact supply amount.
			 * - `amount_out_min`: acceptable minimum target amount.
			 * - `to`: The recipient of the swapped token asset. The caller is the default recipient if
			 * it is set to None.
			 * - `deadline`: The deadline of executing this extrinsic. The deadline won't be checked if
			 * it is set to None
			 */
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
			 * Trading with DEX, swap with exact target amount. Specify your output; supply variable
			 * input.
			 * - note: analogous to Uniswapv2 `swapTokensForExactTokens`
			 *
			 * - `amount_out`: exact target amount.
			 * - `amount_in_max`: acceptable maximum supply amount.
			 * - `path`: trading path.
			 * - `to`: The recipient of the swapped token asset. The caller is the default recipient if
			 * it is set to None.
			 * - `deadline`: The deadline of executing this extrinsic. The deadline won't be checked if
			 * it is set to None
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		echo: {
			/**
			 * Ping extrinsic sends an event to the bridge containing a message
			 */
			ping: AugmentedSubmittable<
				(destination: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * Trigger the governance fallback.
			 *
			 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
			 * calling [`Call::set_emergency_election_result`].
			 */
			governanceFallback: AugmentedSubmittable<
				(
					maybeMaxVoters: Option<u32> | null | Uint8Array | u32 | AnyNumber,
					maybeMaxTargets: Option<u32> | null | Uint8Array | u32 | AnyNumber
				) => SubmittableExtrinsic<ApiType>,
				[Option<u32>, Option<u32>]
			>;
			/**
			 * Set a solution in the queue, to be handed out to the client of this pallet in the next
			 * call to `ElectionProvider::elect`.
			 *
			 * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
			 *
			 * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
			 * feasibility check itself can in principle cause the election process to fail (due to
			 * memory/weight constrains).
			 */
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
			 * Set a new value for `MinimumUntrustedScore`.
			 *
			 * Dispatch origin must be aligned with `T::ForceOrigin`.
			 *
			 * This check can be turned off by setting the value to `None`.
			 */
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
			 * Submit a solution for the signed phase.
			 *
			 * The dispatch origin fo this call must be __signed__.
			 *
			 * The solution is potentially queued, based on the claimed score and processed at the end
			 * of the signed phase.
			 *
			 * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
			 * might be rewarded, slashed, or get all or a part of the deposit back.
			 */
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
			 * Submit a solution for the unsigned phase.
			 *
			 * The dispatch origin fo this call must be __none__.
			 *
			 * This submission is checked on the fly. Moreover, this unsigned solution is only
			 * validated when submitted to the pool from the **local** node. Effectively, this means
			 * that only active validators can submit this transaction when authoring a block (similar
			 * to an inherent).
			 *
			 * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
			 * panic if the solution submitted by the validator is invalid in any way, effectively
			 * putting their authoring reward at risk.
			 *
			 * No deposit or reward is associated with this submission.
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		erc20Peg: {
			/**
			 * Activate/deactivate deposits (root only)
			 */
			activateDeposits: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * Activate/deactivate withdrawals (root only)
			 */
			activateWithdrawals: AugmentedSubmittable<
				(activate: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			setContractAddress: AugmentedSubmittable<
				(ethAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
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
			setPaymentDelay: AugmentedSubmittable<
				(
					assetId: u32 | AnyNumber | Uint8Array,
					minBalance: u128 | AnyNumber | Uint8Array,
					delay: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u32]
			>;
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		ethBridge: {
			depositRelayerBond: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			finaliseAuthoritiesChange: AugmentedSubmittable<
				(
					nextNotaryKeys:
						| Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>
						| (SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>]
			>;
			setBridgePaused: AugmentedSubmittable<
				(paused: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			setChallengePeriod: AugmentedSubmittable<
				(blocks: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			setContractAddress: AugmentedSubmittable<
				(contractAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			setDelayedEventProofsPerBlock: AugmentedSubmittable<
				(count: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u8]
			>;
			setEventBlockConfirmations: AugmentedSubmittable<
				(confirmations: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			setRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			setXrplDoorSigners: AugmentedSubmittable<
				(
					newSigners:
						| Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>
						| (SeedPrimitivesEthyCryptoAppCryptoPublic | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>]
			>;
			submitChallenge: AugmentedSubmittable<
				(eventClaimId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			submitEvent: AugmentedSubmittable<
				(
					txHash: H256 | string | Uint8Array,
					event: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H256, Bytes]
			>;
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
			withdrawRelayerBond: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		ethereum: {
			/**
			 * Transact an Ethereum transaction.
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		evm: {
			/**
			 * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
			 */
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
			 * Issue an EVM create operation. This is similar to a contract creation transaction in
			 * Ethereum.
			 */
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
			 * Issue an EVM create2 operation.
			 */
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
			 * Withdraw balance from EVM into currency/balances pallet.
			 */
			withdraw: AugmentedSubmittable<
				(
					address: H160 | string | Uint8Array,
					value: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[H160, u128]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		evmChainId: {
			setChainId: AugmentedSubmittable<
				(chainId: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u64>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		feeControl: {
			setEvmBaseFee: AugmentedSubmittable<
				(value: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[U256]
			>;
			setWeightMultiplier: AugmentedSubmittable<
				(value: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Perbill]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		feeProxy: {
			/**
			 * Call an internal call with specified gas token
			 * payment_asset: The token to be used for paying gas fees. This is exchanged in
			 * OnChargeTransaction::withdraw_fee()
			 * max_payment: The limit of how many tokens will be used to perform the exchange
			 * call: The inner call to be performed after the exchange
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		futurepass: {
			/**
			 * Create a futurepass account for the delegator that is able to make calls on behalf of
			 * futurepass.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `account`: The delegated account for the futurepass.
			 */
			create: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * This extrinsic migrates EVM-based Futurepass assets to the Substrate-based Futurepass
			 * (native).
			 *
			 * Parameters:
			 * - `owner` - The account ID of the owner of the EVM-based Futurepass.
			 * - `evm_futurepass` - The account ID of the EVM-based Futurepass.
			 * - `asset_ids` - A vector of asset IDs representing the assets to be migrated.
			 * - `collection_ids` - A vector of collection IDs representing the NFTs collections to be
			 * migrated.
			 *
			 * # <weight>
			 * Weight is a function of the number of collections migrated; not the tokens migrated.
			 * # </weight>
			 */
			migrateEvmFuturepass: AugmentedSubmittable<
				(
					owner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					evmFuturepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					assetIds: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					collectionIds: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, Vec<u32>, Vec<u32>]
			>;
			/**
			 * Dispatch the given call through Futurepass account. Transaction fees will be paid by the
			 * Futurepass The dispatch origin for this call must be _Signed_
			 *
			 * Parameters:
			 * - `futurepass`: The Futurepass account though which the call is dispatched
			 * - `call`: The Call that needs to be dispatched through the Futurepass account
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has.
			 * # </weight>
			 */
			proxyExtrinsic: AugmentedSubmittable<
				(
					futurepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * Register a delegator to an existing futurepass account given message parameters for a
			 * respective signature. Note: Only futurepass owner account can add more delegates.
			 * Note: The signer is recovered from signature given the message parameters (which is used
			 * to reconstruct the message).
			 * - You can assume the message is constructed like so:
			 * ---
			 * ```solidity
			 * bytes32 message = keccak256(abi.encodePacked(futurepass, delegate, proxyType, deadline));
			 * ethSignedMessage = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));
			 * ```
			 * ---
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `futurepass`: Futurepass account to register the account as delegate; 20 bytes.
			 * - `delegate`: The delegated account for the futurepass; 20 bytes.
			 * - `proxy_type`: Delegate permission level; 1 byte.
			 * - `deadline`: Deadline for the signature; 4 bytes.
			 * - `signature`: Signature of the message parameters.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has.
			 * # </weight>
			 */
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
			 * Update futurepass native assets migrator admin account.
			 *
			 * The dispatch origin for this call must be sudo/root origin.
			 *
			 * Parameters:
			 * - `migrator`: The new account that will become the futurepass asset migrator.
			 */
			setFuturepassMigrator: AugmentedSubmittable<
				(
					migrator: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Transfer ownership of a futurepass to a new account.
			 * The new owner must not already own a futurepass.
			 * This removes all delegates from the futurepass.
			 * The new owner will be the only delegate; they can add more delegates.
			 *
			 * The dispatch origin for this call must be _Signed_ and must be the current owner of the
			 * futurepass.
			 *
			 * Parameters:
			 * - `current_owner`: The current owner of the futurepass.
			 * - `new_owner`: The new account that will become the owner of the futurepass.
			 */
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
			 * Unregister a delegate from a futurepass account.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `futurepass`: Futurepass account to unregister the delegate from.
			 * - `delegate`: The delegated account for the futurepass. Note: if caller is futurepass
			 * holder onwer,
			 * they can remove any delegate (including themselves); otherwise the caller must be the
			 * delegate (can only remove themself).
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has.
			 * # </weight>
			 */
			unregisterDelegate: AugmentedSubmittable<
				(
					futurepass: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		grandpa: {
			/**
			 * Note that the current authority set of the GRANDPA finality gadget has stalled.
			 *
			 * This will trigger a forced authority set change at the beginning of the next session, to
			 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
			 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
			 * The block production rate (which may be slowed down because of finality lagging) should
			 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
			 * authority will start voting on top of `best_finalized_block_number` for new finalized
			 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
			 * block of all validators of the new authority set.
			 *
			 * Only callable by root.
			 */
			noteStalled: AugmentedSubmittable<
				(
					delay: u32 | AnyNumber | Uint8Array,
					bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Report voter equivocation/misbehavior. This method will verify the
			 * equivocation proof and validate the given key ownership proof
			 * against the extracted offender. If both are valid, the offence
			 * will be reported.
			 */
			reportEquivocation: AugmentedSubmittable<
				(
					equivocationProof:
						| SpFinalityGrandpaEquivocationProof
						| { setId?: any; equivocation?: any }
						| string
						| Uint8Array,
					keyOwnerProof: SpCoreVoid | null
				) => SubmittableExtrinsic<ApiType>,
				[SpFinalityGrandpaEquivocationProof, SpCoreVoid]
			>;
			/**
			 * Report voter equivocation/misbehavior. This method will verify the
			 * equivocation proof and validate the given key ownership proof
			 * against the extracted offender. If both are valid, the offence
			 * will be reported.
			 *
			 * This extrinsic must be called unsigned and it is expected that only
			 * block authors will call it (validated in `ValidateUnsigned`), as such
			 * if the block author is defined it will be defined as the equivocation
			 * reporter.
			 */
			reportEquivocationUnsigned: AugmentedSubmittable<
				(
					equivocationProof:
						| SpFinalityGrandpaEquivocationProof
						| { setId?: any; equivocation?: any }
						| string
						| Uint8Array,
					keyOwnerProof: SpCoreVoid | null
				) => SubmittableExtrinsic<ApiType>,
				[SpFinalityGrandpaEquivocationProof, SpCoreVoid]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		imOnline: {
			/**
			 * # <weight>
			 * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
			 * length of `heartbeat.network_state.external_address`
			 * - `O(K)`: decoding of length `K`
			 * - `O(E)`: decoding/encoding of length `E`
			 * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
			 * `ReceivedHeartbeats`
			 * - DbWrites: `ReceivedHeartbeats`
			 * # </weight>
			 */
			heartbeat: AugmentedSubmittable<
				(
					heartbeat:
						| PalletImOnlineHeartbeat
						| {
								blockNumber?: any;
								networkState?: any;
								sessionIndex?: any;
								authorityIndex?: any;
								validatorsLen?: any;
						  }
						| string
						| Uint8Array,
					signature: PalletImOnlineSr25519AppSr25519Signature | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		marketplace: {
			/**
			 * Accepts an offer on a token
			 * Caller must be token owner
			 */
			acceptOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Auction a bundle of tokens on the open market to the highest bidder
			 * - Tokens must be from the same collection
			 * - Tokens with individual royalties schedules cannot be sold in bundles
			 *
			 * Caller must be the token owner
			 * - `payment_asset` fungible asset Id to receive payment with
			 * - `reserve_price` winning bid must be over this threshold
			 * - `duration` length of the auction (in blocks), uses default duration if unspecified
			 */
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
			 * Place a bid on an open auction
			 * - `amount` to bid (in the seller's requested payment asset)
			 */
			bid: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * Buy a token listing for its specified price
			 */
			buy: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Cancels an offer on a token
			 * Caller must be the offer buyer
			 */
			cancelOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Close a sale or auction returning tokens
			 * Requires no successful bids have been made for an auction.
			 * Caller must be the listed seller
			 */
			cancelSale: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Create an offer on a token
			 * Locks funds until offer is accepted, rejected or cancelled
			 * An offer can't be made on a token currently in an auction
			 * (This follows the behaviour of Opensea and forces the buyer to bid rather than create an
			 * offer)
			 */
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
			 * Flag an account as a marketplace
			 *
			 * `marketplace_account` - if specified, this account will be registered
			 * `entitlement` - Permill, percentage of sales to go to the marketplace
			 * If no marketplace is specified the caller will be registered
			 */
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
			 * Sell a bundle of tokens at a fixed price
			 * - Tokens must be from the same collection
			 * - Tokens with individual royalties schedules cannot be sold with this method
			 *
			 * `buyer` optionally, the account to receive the NFT. If unspecified, then any account may
			 * purchase `asset_id` fungible asset Id to receive as payment for the NFT
			 * `fixed_price` ask price
			 * `duration` listing duration time in blocks from now
			 * Caller must be the token owner
			 */
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
			 * Update fixed price for a single token sale
			 *
			 * `listing_id` id of the fixed price listing
			 * `new_price` new fixed price
			 * Caller must be the token owner
			 */
			updateFixedPrice: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					newPrice: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		nft: {
			/**
			 * Accepts an offer on a token
			 * Caller must be token owner
			 */
			acceptOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Auction a bundle of tokens on the open market to the highest bidder
			 * - Tokens must be from the same collection
			 * - Tokens with individual royalties schedules cannot be sold in bundles
			 *
			 * Caller must be the token owner
			 * - `payment_asset` fungible asset Id to receive payment with
			 * - `reserve_price` winning bid must be over this threshold
			 * - `duration` length of the auction (in blocks), uses default duration if unspecified
			 */
			auction: AugmentedSubmittable<
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
			 * Place a bid on an open auction
			 * - `amount` to bid (in the seller's requested payment asset)
			 */
			bid: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * Burn a token 🔥
			 *
			 * Caller must be the token owner
			 */
			burn: AugmentedSubmittable<
				(
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>]
			>;
			/**
			 * Buy a token listing for its specified price
			 */
			buy: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Cancels an offer on a token
			 * Caller must be the offer buyer
			 */
			cancelOffer: AugmentedSubmittable<
				(offerId: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Close a sale or auction returning tokens
			 * Requires no successful bids have been made for an auction.
			 * Caller must be the listed seller
			 */
			cancelSale: AugmentedSubmittable<
				(listingId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Bridged collections from Ethereum will initially lack an owner. These collections will
			 * be assigned to the pallet. This allows for claiming those collections assuming they were
			 * assigned to the pallet
			 */
			claimUnownedCollection: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Create a new collection
			 * Additional tokens can be minted via `mint_additional`
			 *
			 * `name` - the name of the collection
			 * `initial_issuance` - number of tokens to mint now
			 * `max_issuance` - maximum number of tokens allowed in collection
			 * `token_owner` - the token owner, defaults to the caller
			 * `metadata_scheme` - The off-chain metadata referencing scheme for tokens in this
			 * `royalties_schedule` - defacto royalties plan for secondary sales, this will
			 * apply to all tokens in the collection by default.
			 */
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
						| PalletNftCrossChainCompatibility
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
					PalletNftCrossChainCompatibility,
				]
			>;
			/**
			 * Create an offer on a token
			 * Locks funds until offer is accepted, rejected or cancelled
			 * An offer can't be made on a token currently in an auction
			 * (This follows the behaviour of Opensea and forces the buyer to bid rather than create an
			 * offer)
			 */
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
			 * Mint tokens for an existing collection
			 *
			 * `collection_id` - the collection to mint tokens in
			 * `quantity` - how many tokens to mint
			 * `token_owner` - the token owner, defaults to the caller if unspecified
			 * Caller must be the collection owner
			 * -----------
			 * Weight is O(N) where N is `quantity`
			 */
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
			 * Flag an account as a marketplace
			 *
			 * `marketplace_account` - if specified, this account will be registered
			 * `entitlement` - Permill, percentage of sales to go to the marketplace
			 * If no marketplace is specified the caller will be registered
			 */
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
			 * Sell a bundle of tokens at a fixed price
			 * - Tokens must be from the same collection
			 * - Tokens with individual royalties schedules cannot be sold with this method
			 *
			 * `buyer` optionally, the account to receive the NFT. If unspecified, then any account may
			 * purchase `asset_id` fungible asset Id to receive as payment for the NFT
			 * `fixed_price` ask price
			 * `duration` listing duration time in blocks from now
			 * Caller must be the token owner
			 */
			sell: AugmentedSubmittable<
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
			 * Set the base URI of a collection
			 * Caller must be the current collection owner
			 */
			setBaseUri: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					baseUri: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * Set the `FeeTo` account. This operation requires root access.
			 *
			 * - `fee_to`: the new account or None assigned to FeeTo.
			 */
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
			 * Set the max issuance of a collection
			 * Caller must be the current collection owner
			 */
			setMaxIssuance: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					maxIssuance: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Set the name of a collection
			 * Caller must be the current collection owner
			 */
			setName: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					name: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * Set the owner of a collection
			 * Caller must be the current collection owner
			 */
			setOwner: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Transfer ownership of an NFT
			 * Caller must be the token owner
			 */
			transfer: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Update fixed price for a single token sale
			 *
			 * `listing_id` id of the fixed price listing
			 * `new_price` new fixed price
			 * Caller must be the token owner
			 */
			updateFixedPrice: AugmentedSubmittable<
				(
					listingId: u128 | AnyNumber | Uint8Array,
					newPrice: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		nftPeg: {
			setContractAddress: AugmentedSubmittable<
				(contract: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		proxy: {
			/**
			 * Register a proxy account for the sender that is able to make calls on its behalf.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `proxy`: The account that the `caller` would like to make a proxy.
			 * - `proxy_type`: The permissions allowed for this proxy account.
			 * - `delay`: The announcement period required of the initial proxy. Will generally be
			 * zero.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 */
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
			 * Publish the hash of a proxy-call that will be made in the future.
			 *
			 * This must be called some number of blocks before the corresponding `proxy` is attempted
			 * if the delay associated with the proxy relationship is greater than zero.
			 *
			 * No more than `MaxPending` announcements may be made at any one time.
			 *
			 * This will take a deposit of `AnnouncementDepositFactor` as well as
			 * `AnnouncementDepositBase` if there are no other pending announcements.
			 *
			 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
			 *
			 * Parameters:
			 * - `real`: The account that the proxy will make a call on behalf of.
			 * - `call_hash`: The hash of the call to be made by the `real` account.
			 *
			 * # <weight>
			 * Weight is a function of:
			 * - A: the number of announcements made.
			 * - P: the number of proxies the user has.
			 * # </weight>
			 */
			announce: AugmentedSubmittable<
				(
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
			 * initialize it with a proxy of `proxy_type` for `origin` sender.
			 *
			 * Requires a `Signed` origin.
			 *
			 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
			 * new account. This will almost always be the most permissive `ProxyType` possible to
			 * allow for maximum flexibility.
			 * - `index`: A disambiguation index, in case this is called multiple times in the same
			 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
			 * want to use `0`.
			 * - `delay`: The announcement period required of the initial proxy. Will generally be
			 * zero.
			 *
			 * Fails with `Duplicate` if this has already been called in this transaction, from the
			 * same sender, with the same parameters.
			 *
			 * Fails if there are insufficient funds to pay for deposit.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 * TODO: Might be over counting 1 read
			 */
			anonymous: AugmentedSubmittable<
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
			 * Removes a previously spawned anonymous proxy.
			 *
			 * WARNING: **All access to this account will be lost.** Any funds held in it will be
			 * inaccessible.
			 *
			 * Requires a `Signed` origin, and the sender account must have been created by a call to
			 * `anonymous` with corresponding parameters.
			 *
			 * - `spawner`: The account that originally called `anonymous` to create this account.
			 * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
			 * - `proxy_type`: The proxy type originally passed to `anonymous`.
			 * - `height`: The height of the chain when the call to `anonymous` was processed.
			 * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
			 *
			 * Fails with `NoPermission` in case the caller is not a previously created anonymous
			 * account whose `anonymous` call has corresponding parameters.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 */
			killAnonymous: AugmentedSubmittable<
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
			 * Dispatch the given `call` from an account that the sender is authorised for through
			 * `add_proxy`.
			 *
			 * Removes any corresponding announcement(s).
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `real`: The account that the proxy will make a call on behalf of.
			 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
			 * - `call`: The call to be made by the `real` account.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 */
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
			 * Dispatch the given `call` from an account that the sender is authorized for through
			 * `add_proxy`.
			 *
			 * Removes any corresponding announcement(s).
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `real`: The account that the proxy will make a call on behalf of.
			 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
			 * - `call`: The call to be made by the `real` account.
			 *
			 * # <weight>
			 * Weight is a function of:
			 * - A: the number of announcements made.
			 * - P: the number of proxies the user has.
			 * # </weight>
			 */
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
			 * Remove the given announcement of a delegate.
			 *
			 * May be called by a target (proxied) account to remove a call that one of their delegates
			 * (`delegate`) has announced they want to execute. The deposit is returned.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `delegate`: The account that previously announced the call.
			 * - `call_hash`: The hash of the call to be made.
			 *
			 * # <weight>
			 * Weight is a function of:
			 * - A: the number of announcements made.
			 * - P: the number of proxies the user has.
			 * # </weight>
			 */
			rejectAnnouncement: AugmentedSubmittable<
				(
					delegate: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * Remove a given announcement.
			 *
			 * May be called by a proxy account to remove a call they previously announced and return
			 * the deposit.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `real`: The account that the proxy will make a call on behalf of.
			 * - `call_hash`: The hash of the call to be made by the `real` account.
			 *
			 * # <weight>
			 * Weight is a function of:
			 * - A: the number of announcements made.
			 * - P: the number of proxies the user has.
			 * # </weight>
			 */
			removeAnnouncement: AugmentedSubmittable<
				(
					real: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					callHash: H256 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, H256]
			>;
			/**
			 * Unregister all proxy accounts for the sender.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * WARNING: This may be called on accounts created by `anonymous`, however if done, then
			 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 */
			removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Unregister a proxy account for the sender.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `proxy`: The account that the `caller` would like to remove as a proxy.
			 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
			 *
			 * # <weight>
			 * Weight is a function of the number of proxies the user has (P).
			 * # </weight>
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		recovery: {
			/**
			 * Send a call through a recovered account.
			 *
			 * The dispatch origin for this call must be _Signed_ and registered to
			 * be able to make calls on behalf of the recovered account.
			 *
			 * Parameters:
			 * - `account`: The recovered account you want to make a call on-behalf-of.
			 * - `call`: The call you want to make with the recovered account.
			 */
			asRecovered: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * Cancel the ability to use `as_recovered` for `account`.
			 *
			 * The dispatch origin for this call must be _Signed_ and registered to
			 * be able to make calls on behalf of the recovered account.
			 *
			 * Parameters:
			 * - `account`: The recovered account you are able to call on-behalf-of.
			 */
			cancelRecovered: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Allow a successful rescuer to claim their recovered account.
			 *
			 * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
			 * who has successfully completed the account recovery process: collected
			 * `threshold` or more vouches, waited `delay_period` blocks since initiation.
			 *
			 * Parameters:
			 * - `account`: The lost account that you want to claim has been successfully recovered by
			 * you.
			 */
			claimRecovery: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * As the controller of a recoverable account, close an active recovery
			 * process for your account.
			 *
			 * Payment: By calling this function, the recoverable account will receive
			 * the recovery deposit `RecoveryDeposit` placed by the rescuer.
			 *
			 * The dispatch origin for this call must be _Signed_ and must be a
			 * recoverable account with an active recovery process for it.
			 *
			 * Parameters:
			 * - `rescuer`: The account trying to rescue this recoverable account.
			 */
			closeRecovery: AugmentedSubmittable<
				(
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Create a recovery configuration for your account. This makes your account recoverable.
			 *
			 * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
			 * will be reserved for storing the recovery configuration. This deposit is returned
			 * in full when the user calls `remove_recovery`.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
			 * ordered and contain no duplicate values.
			 * - `threshold`: The number of friends that must vouch for a recovery attempt before the
			 * account can be recovered. Should be less than or equal to the length of the list of
			 * friends.
			 * - `delay_period`: The number of blocks after a recovery attempt is initialized that
			 * needs to pass before the account can be recovered.
			 */
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
			 * Initiate the process for recovering a recoverable account.
			 *
			 * Payment: `RecoveryDeposit` balance will be reserved for initiating the
			 * recovery process. This deposit will always be repatriated to the account
			 * trying to be recovered. See `close_recovery`.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * Parameters:
			 * - `account`: The lost account that you want to recover. This account needs to be
			 * recoverable (i.e. have a recovery configuration).
			 */
			initiateRecovery: AugmentedSubmittable<
				(
					account: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Remove the recovery process for your account. Recovered accounts are still accessible.
			 *
			 * NOTE: The user must make sure to call `close_recovery` on all active
			 * recovery attempts before calling this function else it will fail.
			 *
			 * Payment: By calling this function the recoverable account will unreserve
			 * their recovery configuration deposit.
			 * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
			 *
			 * The dispatch origin for this call must be _Signed_ and must be a
			 * recoverable account (i.e. has a recovery configuration).
			 */
			removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Allow ROOT to bypass the recovery process and set an a rescuer account
			 * for a lost account directly.
			 *
			 * The dispatch origin for this call must be _ROOT_.
			 *
			 * Parameters:
			 * - `lost`: The "lost account" to be recovered.
			 * - `rescuer`: The "rescuer account" which can call as the lost account.
			 */
			setRecovered: AugmentedSubmittable<
				(
					lost: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Allow a "friend" of a recoverable account to vouch for an active recovery
			 * process for that account.
			 *
			 * The dispatch origin for this call must be _Signed_ and must be a "friend"
			 * for the recoverable account.
			 *
			 * Parameters:
			 * - `lost`: The lost account that you want to recover.
			 * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
			 *
			 * The combination of these two parameters must point to an active recovery
			 * process.
			 */
			vouchRecovery: AugmentedSubmittable<
				(
					lost: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					rescuer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		scheduler: {
			/**
			 * Cancel an anonymously scheduled task.
			 */
			cancel: AugmentedSubmittable<
				(
					when: u32 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Cancel a named scheduled task.
			 */
			cancelNamed: AugmentedSubmittable<
				(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Anonymously schedule a task.
			 */
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
					call:
						| FrameSupportScheduleMaybeHashed
						| { Value: any }
						| { Hash: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, FrameSupportScheduleMaybeHashed]
			>;
			/**
			 * Anonymously schedule a task after a delay.
			 *
			 * # <weight>
			 * Same as [`schedule`].
			 * # </weight>
			 */
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
					call:
						| FrameSupportScheduleMaybeHashed
						| { Value: any }
						| { Hash: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, FrameSupportScheduleMaybeHashed]
			>;
			/**
			 * Schedule a named task.
			 */
			scheduleNamed: AugmentedSubmittable<
				(
					id: Bytes | string | Uint8Array,
					when: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call:
						| FrameSupportScheduleMaybeHashed
						| { Value: any }
						| { Hash: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, u32, Option<ITuple<[u32, u32]>>, u8, FrameSupportScheduleMaybeHashed]
			>;
			/**
			 * Schedule a named task after a delay.
			 *
			 * # <weight>
			 * Same as [`schedule_named`](Self::schedule_named).
			 * # </weight>
			 */
			scheduleNamedAfter: AugmentedSubmittable<
				(
					id: Bytes | string | Uint8Array,
					after: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call:
						| FrameSupportScheduleMaybeHashed
						| { Value: any }
						| { Hash: any }
						| string
						| Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, u32, Option<ITuple<[u32, u32]>>, u8, FrameSupportScheduleMaybeHashed]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		session: {
			/**
			 * Removes any session key(s) of the function caller.
			 *
			 * This doesn't take effect until the next session.
			 *
			 * The dispatch origin of this function must be Signed and the account must be either be
			 * convertible to a validator ID using the chain's typical addressing system (this usually
			 * means being a controller account) or directly convertible into a validator ID (which
			 * usually means being a stash account).
			 *
			 * # <weight>
			 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
			 * of `T::Keys::key_ids()` which is fixed.
			 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
			 * - DbWrites: `NextKeys`, `origin account`
			 * - DbWrites per key id: `KeyOwner`
			 * # </weight>
			 */
			purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Sets the session key(s) of the function caller to `keys`.
			 * Allows an account to set its session key prior to becoming a validator.
			 * This doesn't take effect until the next session.
			 *
			 * The dispatch origin of this function must be signed.
			 *
			 * # <weight>
			 * - Complexity: `O(1)`. Actual cost depends on the number of length of
			 * `T::Keys::key_ids()` which is fixed.
			 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
			 * - DbWrites: `origin account`, `NextKeys`
			 * - DbReads per key id: `KeyOwner`
			 * - DbWrites per key id: `KeyOwner`
			 * # </weight>
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		sft: {
			/**
			 * Burn a token 🔥
			 *
			 * Caller must be the token owner
			 */
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
			 * Create a new collection to group multiple semi-fungible tokens
			 * Tokens can be created within the collection by calling create_token
			 *
			 * `collection_name` - the name of the collection
			 * `collection_owner` - the collection owner, defaults to the caller
			 * `metadata_scheme` - The off-chain metadata referencing scheme for tokens in this
			 * `royalties_schedule` - defacto royalties plan for secondary sales, this will
			 * apply to all tokens in the collection by default.
			 *
			 * The collectionUuid used to store the SFT CollectionInfo is retrieved from the NFT
			 * pallet. This is so that CollectionUuids are unique across all collections, regardless
			 * of if they are SFT or NFT collections.
			 */
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
			 * Create additional tokens for an existing collection
			 * These tokens act similar to tokens within an ERC1155 contract
			 * Each token has individual issuance, max_issuance,
			 */
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
			 * Mints some balances into some serial numbers for an account
			 * This acts as a batch mint function and allows for multiple serial numbers and quantities
			 * to be passed in simultaneously.
			 * Must be called by the collection owner
			 *
			 * `collection_id` - the SFT collection to mint into
			 * `serial_numbers` - A list of serial numbers to mint into
			 * `quantities` - A list of quantities to mint into each serial number
			 * `token_owner` - The owner of the tokens, defaults to the caller
			 */
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
			 * Set the base URI of a collection (MetadataScheme)
			 * Caller must be the current collection owner
			 */
			setBaseUri: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					metadataScheme: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * Set the max issuance of a collection
			 * Caller must be the current collection owner
			 */
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
			 * Set the name of a collection
			 * Caller must be the current collection owner
			 */
			setName: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					collectionName: Bytes | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, Bytes]
			>;
			/**
			 * Set the owner of a collection
			 * Caller must be the current collection owner
			 */
			setOwner: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					newOwner: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Transfer ownership of an SFT
			 * Caller must be the token owner
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		staking: {
			/**
			 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
			 * be the account that controls it.
			 *
			 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
			 *
			 * The dispatch origin for this call must be _Signed_ by the stash account.
			 *
			 * Emits `Bonded`.
			 * # <weight>
			 * - Independent of the arguments. Moderate complexity.
			 * - O(1).
			 * - Three extra DB entries.
			 *
			 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
			 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
			 * ------------------
			 * # </weight>
			 */
			bond: AugmentedSubmittable<
				(
					controller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
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
				[SeedPrimitivesSignatureAccountId20, Compact<u128>, PalletStakingRewardDestination]
			>;
			/**
			 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
			 * for staking.
			 *
			 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
			 *
			 * Use this if there are additional funds in your stash account that you wish to bond.
			 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
			 * any limitation on the amount that can be added.
			 *
			 * Emits `Bonded`.
			 *
			 * # <weight>
			 * - Independent of the arguments. Insignificant complexity.
			 * - O(1).
			 * # </weight>
			 */
			bondExtra: AugmentedSubmittable<
				(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * Cancel enactment of a deferred slash.
			 *
			 * Can be called by the `T::SlashCancelOrigin`.
			 *
			 * Parameters: era and indices of the slashes for that era to kill.
			 */
			cancelDeferredSlash: AugmentedSubmittable<
				(
					era: u32 | AnyNumber | Uint8Array,
					slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>]
			>;
			/**
			 * Declare no desire to either validate or nominate.
			 *
			 * Effects will be felt at the beginning of the next era.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 *
			 * # <weight>
			 * - Independent of the arguments. Insignificant complexity.
			 * - Contains one read.
			 * - Writes are limited to the `origin` account key.
			 * # </weight>
			 */
			chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Declare a `controller` to stop participating as either a validator or nominator.
			 *
			 * Effects will be felt at the beginning of the next era.
			 *
			 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
			 *
			 * If the caller is the same as the controller being targeted, then no further checks are
			 * enforced, and this function behaves just like `chill`.
			 *
			 * If the caller is different than the controller being targeted, the following conditions
			 * must be met:
			 *
			 * * `controller` must belong to a nominator who has become non-decodable,
			 *
			 * Or:
			 *
			 * * A `ChillThreshold` must be set and checked which defines how close to the max
			 * nominators or validators we must reach before users can start chilling one-another.
			 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
			 * how close we are to the threshold.
			 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
			 * if this is a person that should be chilled because they have not met the threshold
			 * bond required.
			 *
			 * This can be helpful if bond requirements are updated, and we need to remove old users
			 * who do not satisfy these requirements.
			 */
			chillOther: AugmentedSubmittable<
				(
					controller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Force a validator to have at least the minimum commission. This will not affect a
			 * validator who already has a commission greater than or equal to the minimum. Any account
			 * can call this.
			 */
			forceApplyMinCommission: AugmentedSubmittable<
				(
					validatorStash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Force there to be a new era at the end of the next session. After this, it will be
			 * reset to normal (non-forced) behaviour.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # Warning
			 *
			 * The election process starts multiple blocks before the end of the era.
			 * If this is called just before a new era is triggered, the election process may not
			 * have enough blocks to get a result.
			 *
			 * # <weight>
			 * - No arguments.
			 * - Weight: O(1)
			 * - Write ForceEra
			 * # </weight>
			 */
			forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Force there to be a new era at the end of sessions indefinitely.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # Warning
			 *
			 * The election process starts multiple blocks before the end of the era.
			 * If this is called just before a new era is triggered, the election process may not
			 * have enough blocks to get a result.
			 */
			forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Force there to be no new eras indefinitely.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # Warning
			 *
			 * The election process starts multiple blocks before the end of the era.
			 * Thus the election process may be ongoing when this is called. In this case the
			 * election will continue until the next era is triggered.
			 *
			 * # <weight>
			 * - No arguments.
			 * - Weight: O(1)
			 * - Write: ForceEra
			 * # </weight>
			 */
			forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * Force a current staker to become completely unstaked, immediately.
			 *
			 * The dispatch origin must be Root.
			 */
			forceUnstake: AugmentedSubmittable<
				(
					stash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					numSlashingSpans: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * Increments the ideal number of validators.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # <weight>
			 * Same as [`Self::set_validator_count`].
			 * # </weight>
			 */
			increaseValidatorCount: AugmentedSubmittable<
				(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Remove the given nominations from the calling validator.
			 *
			 * Effects will be felt at the beginning of the next era.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 *
			 * - `who`: A list of nominator stash accounts who are nominating this validator which
			 * should no longer be nominating this validator.
			 *
			 * Note: Making this call only makes sense if you first set the validator preferences to
			 * block any further nominations.
			 */
			kick: AugmentedSubmittable<
				(
					who:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * Declare the desire to nominate `targets` for the origin controller.
			 *
			 * Effects will be felt at the beginning of the next era.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 *
			 * # <weight>
			 * - The transaction's complexity is proportional to the size of `targets` (N)
			 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
			 * - Both the reads and writes follow a similar pattern.
			 * # </weight>
			 */
			nominate: AugmentedSubmittable<
				(
					targets:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * Pay out all the stakers behind a single validator for a single era.
			 *
			 * - `validator_stash` is the stash account of the validator. Their nominators, up to
			 * `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
			 * - `era` may be any era between `[current_era - history_depth; current_era]`.
			 *
			 * The origin of this call must be _Signed_. Any account can call this function, even if
			 * it is not one of the stakers.
			 *
			 * # <weight>
			 * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
			 * - Contains a limited number of reads and writes.
			 * -----------
			 * N is the Number of payouts for the validator (including the validator)
			 * Weight:
			 * - Reward Destination Staked: O(N)
			 * - Reward Destination Controller (Creating): O(N)
			 *
			 * NOTE: weights are assuming that payouts are made to alive stash account (Staked).
			 * Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
			 * # </weight>
			 */
			payoutStakers: AugmentedSubmittable<
				(
					validatorStash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					era: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * Remove all data structures concerning a staker/stash once it is at a state where it can
			 * be considered `dust` in the staking system. The requirements are:
			 *
			 * 1. the `total_balance` of the stash is below existential deposit.
			 * 2. or, the `ledger.total` of the stash is below existential deposit.
			 *
			 * The former can happen in cases like a slash; the latter when a fully unbonded account
			 * is still receiving staking rewards in `RewardDestination::Staked`.
			 *
			 * It can be called by anyone, as long as `stash` meets the above requirements.
			 *
			 * Refunds the transaction fees upon successful execution.
			 */
			reapStash: AugmentedSubmittable<
				(
					stash: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					numSlashingSpans: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, u32]
			>;
			/**
			 * Rebond a portion of the stash scheduled to be unlocked.
			 *
			 * The dispatch origin must be signed by the controller.
			 *
			 * # <weight>
			 * - Time complexity: O(L), where L is unlocking chunks
			 * - Bounded by `MaxUnlockingChunks`.
			 * - Storage changes: Can't increase storage, only decrease it.
			 * # </weight>
			 */
			rebond: AugmentedSubmittable<
				(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * Scale up the ideal number of validators by a factor.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # <weight>
			 * Same as [`Self::set_validator_count`].
			 * # </weight>
			 */
			scaleValidatorCount: AugmentedSubmittable<
				(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Percent]
			>;
			/**
			 * (Re-)set the controller of a stash.
			 *
			 * Effects will be felt instantly (as soon as this function is completed successfully).
			 *
			 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
			 *
			 * # <weight>
			 * - Independent of the arguments. Insignificant complexity.
			 * - Contains a limited number of reads.
			 * - Writes are limited to the `origin` account key.
			 * ----------
			 * Weight: O(1)
			 * DB Weight:
			 * - Read: Bonded, Ledger New Controller, Ledger Old Controller
			 * - Write: Bonded, Ledger New Controller, Ledger Old Controller
			 * # </weight>
			 */
			setController: AugmentedSubmittable<
				(
					controller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Set `HistoryDepth` value. This function will delete any history information
			 * when `HistoryDepth` is reduced.
			 *
			 * Parameters:
			 * - `new_history_depth`: The new history depth you would like to set.
			 * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
			 * should report all the storage items that will be deleted by clearing old era history.
			 * Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
			 * accurate number.
			 *
			 * Origin must be root.
			 *
			 * # <weight>
			 * - E: Number of history depths removed, i.e. 10 -> 7 = 3
			 * - Weight: O(E)
			 * - DB Weight:
			 * - Reads: Current Era, History Depth
			 * - Writes: History Depth
			 * - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
			 * - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
			 * ErasStartSessionIndex
			 * # </weight>
			 */
			setHistoryDepth: AugmentedSubmittable<
				(
					newHistoryDepth: Compact<u32> | AnyNumber | Uint8Array,
					eraItemsDeleted: Compact<u32> | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Compact<u32>]
			>;
			/**
			 * Set the validators who cannot be slashed (if any).
			 *
			 * The dispatch origin must be Root.
			 */
			setInvulnerables: AugmentedSubmittable<
				(
					invulnerables:
						| Vec<SeedPrimitivesSignatureAccountId20>
						| (SeedPrimitivesSignatureAccountId20 | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<SeedPrimitivesSignatureAccountId20>]
			>;
			/**
			 * (Re-)set the payment target for a controller.
			 *
			 * Effects will be felt instantly (as soon as this function is completed successfully).
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 *
			 * # <weight>
			 * - Independent of the arguments. Insignificant complexity.
			 * - Contains a limited number of reads.
			 * - Writes are limited to the `origin` account key.
			 * ---------
			 * - Weight: O(1)
			 * - DB Weight:
			 * - Read: Ledger
			 * - Write: Payee
			 * # </weight>
			 */
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
			 * Update the various staking configurations .
			 *
			 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
			 * * `min_validator_bond`: The minimum active bond needed to be a validator.
			 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
			 * set to `None`, no limit is enforced.
			 * * `max_validator_count`: The max number of users who can be a validator at once. When
			 * set to `None`, no limit is enforced.
			 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
			 * should be filled in order for the `chill_other` transaction to work.
			 * * `min_commission`: The minimum amount of commission that each validators must maintain.
			 * This is checked only upon calling `validate`. Existing validators are not affected.
			 *
			 * Origin must be Root to call this function.
			 *
			 * NOTE: Existing nominators and validators will not be affected by this update.
			 * to kick people under the new limits, `chill_other` should be called.
			 */
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
			 * Sets the ideal number of validators.
			 *
			 * The dispatch origin must be Root.
			 *
			 * # <weight>
			 * Weight: O(1)
			 * Write: Validator Count
			 * # </weight>
			 */
			setValidatorCount: AugmentedSubmittable<
				(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
			 * period ends. If this leaves an amount actively bonded less than
			 * T::Currency::minimum_balance(), then it is increased to the full amount.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 *
			 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
			 * the funds out of management ready for transfer.
			 *
			 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
			 * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
			 * to be called first to remove some of the chunks (if possible).
			 *
			 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
			 * they should call `chill` first in order to free up their bonded funds.
			 *
			 * Emits `Unbonded`.
			 *
			 * See also [`Call::withdraw_unbonded`].
			 */
			unbond: AugmentedSubmittable<
				(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>]
			>;
			/**
			 * Declare the desire to validate for the origin controller.
			 *
			 * Effects will be felt at the beginning of the next era.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
			 */
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
			 * Remove any unlocked chunks from the `unlocking` queue from our management.
			 *
			 * This essentially frees up that balance to be used by the stash account to do
			 * whatever it wants.
			 *
			 * The dispatch origin for this call must be _Signed_ by the controller.
			 *
			 * Emits `Withdrawn`.
			 *
			 * See also [`Call::unbond`].
			 *
			 * # <weight>
			 * Complexity O(S) where S is the number of slashing spans to remove
			 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
			 * # </weight>
			 */
			withdrawUnbonded: AugmentedSubmittable<
				(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		sudo: {
			/**
			 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
			 * key.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * # <weight>
			 * - O(1).
			 * - Limited storage reads.
			 * - One DB change.
			 * # </weight>
			 */
			setKey: AugmentedSubmittable<
				(
					updated: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Authenticates the sudo key and dispatches a function call with `Root` origin.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * # <weight>
			 * - O(1).
			 * - Limited storage reads.
			 * - One DB write (event).
			 * - Weight of derivative `call` execution + 10,000.
			 * # </weight>
			 */
			sudo: AugmentedSubmittable<
				(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Call]
			>;
			/**
			 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
			 * a given account.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * # <weight>
			 * - O(1).
			 * - Limited storage reads.
			 * - One DB write (event).
			 * - Weight of derivative `call` execution + 10,000.
			 * # </weight>
			 */
			sudoAs: AugmentedSubmittable<
				(
					who: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, Call]
			>;
			/**
			 * Authenticates the sudo key and dispatches a function call with `Root` origin.
			 * This function does not check the weight of the call, and instead allows the
			 * Sudo user to specify the weight of the call.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 *
			 * # <weight>
			 * - O(1).
			 * - The weight of this call is defined by the caller.
			 * # </weight>
			 */
			sudoUncheckedWeight: AugmentedSubmittable<
				(
					call: Call | IMethod | string | Uint8Array,
					weight: u64 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Call, u64]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		system: {
			/**
			 * A dispatch that will fill the block weight up to the given ratio.
			 */
			fillBlock: AugmentedSubmittable<
				(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Perbill]
			>;
			/**
			 * Kill all storage items with a key that starts with the given prefix.
			 *
			 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
			 * the prefix we are removing to accurately calculate the weight of this function.
			 */
			killPrefix: AugmentedSubmittable<
				(
					prefix: Bytes | string | Uint8Array,
					subkeys: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, u32]
			>;
			/**
			 * Kill some items from storage.
			 */
			killStorage: AugmentedSubmittable<
				(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
				[Vec<Bytes>]
			>;
			/**
			 * Make some on-chain remark.
			 *
			 * # <weight>
			 * - `O(1)`
			 * # </weight>
			 */
			remark: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Make some on-chain remark and emit event.
			 */
			remarkWithEvent: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Set the new runtime code.
			 *
			 * # <weight>
			 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
			 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
			 * expensive).
			 * - 1 storage write (codec `O(C)`).
			 * - 1 digest item.
			 * - 1 event.
			 * The weight of this function is dependent on the runtime, but generally this is very
			 * expensive. We will treat this as a full block.
			 * # </weight>
			 */
			setCode: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Set the new runtime code without doing any checks of the given `code`.
			 *
			 * # <weight>
			 * - `O(C)` where `C` length of `code`
			 * - 1 storage write (codec `O(C)`).
			 * - 1 digest item.
			 * - 1 event.
			 * The weight of this function is dependent on the runtime. We will treat this as a full
			 * block. # </weight>
			 */
			setCodeWithoutChecks: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Set the number of pages in the WebAssembly environment's heap.
			 */
			setHeapPages: AugmentedSubmittable<
				(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Set some items of storage.
			 */
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
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		timestamp: {
			/**
			 * Set the current time.
			 *
			 * This call should be invoked exactly once per block. It will panic at the finalization
			 * phase, if this call hasn't been invoked by that time.
			 *
			 * The timestamp should be greater than the previous one by the amount specified by
			 * `MinimumPeriod`.
			 *
			 * The dispatch origin for this call must be `Inherent`.
			 *
			 * # <weight>
			 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
			 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
			 * `on_finalize`)
			 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
			 * # </weight>
			 */
			set: AugmentedSubmittable<
				(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u64>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		tokenApprovals: {
			/**
			 * Set approval for an account (or contract) to transfer any tokens from an SFT collection
			 * mapping(address => mapping(address => bool)) private _operatorApprovals;
			 */
			erc1155ApprovalForAll: AugmentedSubmittable<
				(
					caller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					collectionUuid: u32 | AnyNumber | Uint8Array,
					approved: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, u32, bool]
			>;
			/**
			 * Set approval for an account to transfer an amount of tokens on behalf of the caller
			 * Mapping from caller to spender and amount
			 * mapping(address => mapping(address => uint256)) private _allowances;
			 */
			erc20Approval: AugmentedSubmittable<
				(
					caller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					spender: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, u32, u128]
			>;
			/**
			 * Removes an approval over an account and asset_id
			 * mapping(address => mapping(address => uint256)) private _allowances;
			 */
			erc20UpdateApproval: AugmentedSubmittable<
				(
					caller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					spender: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, u32, u128]
			>;
			/**
			 * Set approval for a single NFT
			 * Mapping from token_id to operator
			 * clears approval on transfer
			 * mapping(uint256 => address) private _tokenApprovals;
			 */
			erc721Approval: AugmentedSubmittable<
				(
					caller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, ITuple<[u32, u32]>]
			>;
			/**
			 * Set approval for an account (or contract) to transfer any tokens from a collection
			 * mapping(address => mapping(address => bool)) private _operatorApprovals;
			 */
			erc721ApprovalForAll: AugmentedSubmittable<
				(
					caller: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					operatorAccount: SeedPrimitivesSignatureAccountId20 | string | Uint8Array,
					collectionUuid: u32 | AnyNumber | Uint8Array,
					approved: bool | boolean | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20, SeedPrimitivesSignatureAccountId20, u32, bool]
			>;
			/**
			 * Public method which allows users to remove approvals on a token they own
			 */
			erc721RemoveApproval: AugmentedSubmittable<
				(
					tokenId: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]
				) => SubmittableExtrinsic<ApiType>,
				[ITuple<[u32, u32]>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		utility: {
			/**
			 * Send a call through an indexed pseudonym of the sender.
			 *
			 * Filter from origin are passed along. The call will be dispatched with an origin which
			 * use the same filter as the origin of this call.
			 *
			 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
			 * because you expect `proxy` to have been used prior in the call stack and you do not want
			 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
			 * in the Multisig pallet instead.
			 *
			 * NOTE: Prior to version *12, this was called `as_limited_sub`.
			 *
			 * The dispatch origin for this call must be _Signed_.
			 */
			asDerivative: AugmentedSubmittable<
				(
					index: u16 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u16, Call]
			>;
			/**
			 * Send a batch of dispatch calls.
			 *
			 * May be called from any origin.
			 *
			 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
			 * exceed the constant: `batched_calls_limit` (available in constant metadata).
			 *
			 * If origin is root then call are dispatch without checking origin filter. (This includes
			 * bypassing `frame_system::Config::BaseCallFilter`).
			 *
			 * # <weight>
			 * - Complexity: O(C) where C is the number of calls to be batched.
			 * # </weight>
			 *
			 * This will return `Ok` in all circumstances. To determine the success of the batch, an
			 * event is deposited. If a call failed and the batch was interrupted, then the
			 * `BatchInterrupted` event is deposited, along with the number of successful calls made
			 * and the error of the failed call. If all were successful, then the `BatchCompleted`
			 * event is deposited.
			 */
			batch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * Send a batch of dispatch calls and atomically execute them.
			 * The whole transaction will rollback and fail if any of the calls failed.
			 *
			 * May be called from any origin.
			 *
			 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
			 * exceed the constant: `batched_calls_limit` (available in constant metadata).
			 *
			 * If origin is root then call are dispatch without checking origin filter. (This includes
			 * bypassing `frame_system::Config::BaseCallFilter`).
			 *
			 * # <weight>
			 * - Complexity: O(C) where C is the number of calls to be batched.
			 * # </weight>
			 */
			batchAll: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * Dispatches a function call with a provided origin.
			 *
			 * The dispatch origin for this call must be _Root_.
			 *
			 * # <weight>
			 * - O(1).
			 * - Limited storage reads.
			 * - One DB write (event).
			 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
			 * # </weight>
			 */
			dispatchAs: AugmentedSubmittable<
				(
					asOrigin:
						| SeedRuntimeOriginCaller
						| { system: any }
						| { Void: any }
						| { Ethereum: any }
						| string
						| Uint8Array,
					call: Call | IMethod | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedRuntimeOriginCaller, Call]
			>;
			/**
			 * Send a batch of dispatch calls.
			 * Unlike `batch`, it allows errors and won't interrupt.
			 *
			 * May be called from any origin.
			 *
			 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
			 * exceed the constant: `batched_calls_limit` (available in constant metadata).
			 *
			 * If origin is root then call are dispatch without checking origin filter. (This includes
			 * bypassing `frame_system::Config::BaseCallFilter`).
			 *
			 * # <weight>
			 * - Complexity: O(C) where C is the number of calls to be batched.
			 * # </weight>
			 */
			forceBatch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		voterList: {
			/**
			 * Move the caller's Id directly in front of `lighter`.
			 *
			 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
			 * the account going in front of `lighter`.
			 *
			 * Only works if
			 * - both nodes are within the same bag,
			 * - and `origin` has a greater `Score` than `lighter`.
			 */
			putInFrontOf: AugmentedSubmittable<
				(
					lighter: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
			 * changed its score that it should properly fall into a different bag than its current
			 * one.
			 *
			 * Anyone can call this function about any potentially dislocated account.
			 *
			 * Will always update the stored score of `dislocated` to the correct score, based on
			 * `ScoreProvider`.
			 *
			 * If `dislocated` does not exists, it returns an error.
			 */
			rebag: AugmentedSubmittable<
				(
					dislocated: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xls20: {
			/**
			 * Enables XLS-20 compatibility on a collection
			 * - Collection must not have any tokens minted
			 * - Caller must be collection owner
			 */
			enableXls20Compatibility: AugmentedSubmittable<
				(collectionId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Submit XLS-20 token ids to The Root Network
			 * Only callable by the trusted relayer account
			 * Can apply multiple mappings from the same collection in one transaction
			 */
			fulfillXls20Mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					tokenMappings:
						| Vec<ITuple<[u32, U8aFixed]>>
						| [u32 | AnyNumber | Uint8Array, U8aFixed | string | Uint8Array][]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[u32, U8aFixed]>>]
			>;
			reRequestXls20Mint: AugmentedSubmittable<
				(
					collectionId: u32 | AnyNumber | Uint8Array,
					serialNumbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u32>]
			>;
			/**
			 * Set the relayer address
			 */
			setRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Set the xls20 mint fee which is paid per token by the collection owner
			 * This covers the additional costs incurred by the relayer for the following:
			 * - Minting the token on XRPL
			 * - Calling fulfill_xls20_mint on The Root Network
			 */
			setXls20Fee: AugmentedSubmittable<
				(newFee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xrplBridge: {
			/**
			 * add a relayer
			 */
			addRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * remove a relayer
			 */
			removeRelayer: AugmentedSubmittable<
				(
					relayer: SeedPrimitivesSignatureAccountId20 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * Set XRPL door address managed by this pallet
			 */
			setDoorAddress: AugmentedSubmittable<
				(doorAddress: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H160]
			>;
			/**
			 * Set the door tx fee amount
			 */
			setDoorTxFee: AugmentedSubmittable<
				(fee: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * Set the door account current ticket sequence params for current allocation - force set
			 */
			setTicketSequenceCurrentAllocation: AugmentedSubmittable<
				(
					ticketSequence: u32 | AnyNumber | Uint8Array,
					startTicketSequence: u32 | AnyNumber | Uint8Array,
					ticketBucketSize: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32]
			>;
			/**
			 * Set the door account ticket sequence params for the next allocation
			 */
			setTicketSequenceNextAllocation: AugmentedSubmittable<
				(
					startTicketSequence: u32 | AnyNumber | Uint8Array,
					ticketBucketSize: u32 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * Submit xrp transaction challenge
			 */
			submitChallenge: AugmentedSubmittable<
				(transactionHash: H512 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H512]
			>;
			/**
			 * Submit xrp transaction
			 */
			submitTransaction: AugmentedSubmittable<
				(
					ledgerIndex: u64 | AnyNumber | Uint8Array,
					transactionHash: H512 | string | Uint8Array,
					transaction:
						| PalletXrplBridgeHelpersXrplTxData
						| { Payment: any }
						| { CurrencyPayment: any }
						| { Xls20: any }
						| string
						| Uint8Array,
					timestamp: u64 | AnyNumber | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u64, H512, PalletXrplBridgeHelpersXrplTxData, u64]
			>;
			/**
			 * Withdraw xrp transaction
			 */
			withdrawXrp: AugmentedSubmittable<
				(
					amount: u128 | AnyNumber | Uint8Array,
					destination: H160 | string | Uint8Array
				) => SubmittableExtrinsic<ApiType>,
				[u128, H160]
			>;
			/**
			 * Generic tx
			 */
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
	} // AugmentedSubmittables
} // declare module
