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
	FrameSupportScheduleLookupError,
	FrameSupportTokensMiscBalanceStatus,
	PalletDexTradingPair,
	PalletElectionProviderMultiPhaseElectionCompute,
	PalletEthyEthySigningRequest,
	PalletEthyEventClaim,
	PalletImOnlineSr25519AppSr25519Public,
	PalletMarketplaceAuctionClosureReason,
	PalletMarketplaceFixedPriceClosureReason,
	PalletMultisigTimepoint,
	PalletNftCrossChainCompatibility,
	PalletStakingExposure,
	PalletStakingValidatorPrefs,
	SeedPalletCommonEventRouterError,
	SeedPrimitivesNftOriginChain,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesSignatureAccountId20,
	SeedRuntimeImplsProxyType,
	SpFinalityGrandpaAppPublic,
	SpNposElectionsElectionScore,
	SpRuntimeDispatchError,
} from "@polkadot/types/lookup";
import type {
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
			 * An asset has had its attributes changed by the `Force` origin.
			 **/
			AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
			/**
			 * Some asset `asset_id` was thawed.
			 **/
			AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
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
				[assetId: u32, owner: SeedPrimitivesSignatureAccountId20, totalSupply: u128],
				{ assetId: u32; owner: SeedPrimitivesSignatureAccountId20; totalSupply: u128 }
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
				[who: SeedPrimitivesSignatureAccountId20, free: u128, reserved: u128],
				{ who: SeedPrimitivesSignatureAccountId20; free: u128; reserved: u128 }
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
			 * Some amount was removed from the account (e.g. for misbehavior).
			 **/
			Slashed: AugmentedEvent<
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
			 * Some balance was unreserved (moved from reserved to free).
			 **/
			Unreserved: AugmentedEvent<
				ApiType,
				[who: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ who: SeedPrimitivesSignatureAccountId20; amount: u128 }
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
			 * An account has been rewarded for their signed submission being finalized.
			 **/
			Rewarded: AugmentedEvent<
				ApiType,
				[account: SeedPrimitivesSignatureAccountId20, value: u128],
				{ account: SeedPrimitivesSignatureAccountId20; value: u128 }
			>;
			/**
			 * The signed phase of the given round has started.
			 **/
			SignedPhaseStarted: AugmentedEvent<ApiType, [round: u32], { round: u32 }>;
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
			 * If the solution is signed, this means that it hasn't yet been processed. If the
			 * solution is unsigned, this means that it has also been processed.
			 *
			 * The `bool` is `true` when a previous solution was ejected to make room for this one.
			 **/
			SolutionStored: AugmentedEvent<
				ApiType,
				[compute: PalletElectionProviderMultiPhaseElectionCompute, prevEjected: bool],
				{ compute: PalletElectionProviderMultiPhaseElectionCompute; prevEjected: bool }
			>;
			/**
			 * The unsigned phase of the given round has started.
			 **/
			UnsignedPhaseStarted: AugmentedEvent<ApiType, [round: u32], { round: u32 }>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		erc20Peg: {
			/**
			 * A delayed erc20 deposit has failed (payment_id, beneficiary)
			 **/
			DelayedErc20DepositFailed: AugmentedEvent<ApiType, [u64, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * A delayed erc20 withdrawal has failed (asset_id, beneficiary)
			 **/
			DelayedErc20WithdrawalFailed: AugmentedEvent<ApiType, [u32, H160]>;
			/**
			 * A bridged erc20 deposit succeeded. (asset, amount, beneficiary)
			 **/
			Erc20Deposit: AugmentedEvent<ApiType, [u32, u128, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * An erc20 deposit has been delayed.(payment_id, scheduled block, amount, beneficiary)
			 **/
			Erc20DepositDelayed: AugmentedEvent<
				ApiType,
				[u64, u32, u128, SeedPrimitivesSignatureAccountId20]
			>;
			/**
			 * A bridged erc20 deposit failed. (source address, abi data)
			 **/
			Erc20DepositFail: AugmentedEvent<ApiType, [H160, Bytes]>;
			/**
			 * Tokens were burnt for withdrawal on Ethereum as ERC20s (asset, amount, beneficiary)
			 **/
			Erc20Withdraw: AugmentedEvent<ApiType, [u32, u128, H160]>;
			/**
			 * A withdrawal has been delayed.(payment_id, scheduled block, amount, beneficiary)
			 **/
			Erc20WithdrawalDelayed: AugmentedEvent<ApiType, [u64, u32, u128, H160]>;
			/**
			 * There are no more payment ids available, they've been exhausted
			 **/
			NoAvailableDelayedPaymentIds: AugmentedEvent<ApiType, []>;
			/**
			 * A delay was added for an asset_id (asset_id, min_balance, delay)
			 **/
			PaymentDelaySet: AugmentedEvent<ApiType, [u32, u128, u32]>;
			/**
			 * The peg contract address has been set
			 **/
			SetContractAddress: AugmentedEvent<ApiType, [H160]>;
			/**
			 * The ROOT peg contract address has been set
			 **/
			SetRootPegContract: AugmentedEvent<ApiType, [H160]>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
		ethBridge: {
			/**
			 * A notary (validator) set change is in motion (event_id, new_validator_set_id)
			 * A proof for the change will be generated with the given `event_id`
			 **/
			AuthoritySetChange: AugmentedEvent<ApiType, [u64, u64]>;
			/**
			 * An event has been challenged (claim_id, challenger)
			 **/
			Challenged: AugmentedEvent<ApiType, [u64, SeedPrimitivesSignatureAccountId20]>;
			/**
			 * An event proof has been sent for signing by ethy-gadget
			 **/
			EventSend: AugmentedEvent<
				ApiType,
				[eventProofId: u64, signingRequest: PalletEthyEthySigningRequest],
				{ eventProofId: u64; signingRequest: PalletEthyEthySigningRequest }
			>;
			/**
			 * An event has been submitted from Ethereum (event_claim_id, event_claim, process_at)
			 **/
			EventSubmit: AugmentedEvent<ApiType, [u64, PalletEthyEventClaim, u32]>;
			/**
			 * The schedule to unpause the bridge has failed (scheduled_block)
			 **/
			FinaliseScheduleFail: AugmentedEvent<ApiType, [u32]>;
			/**
			 * Verifying an event failed
			 **/
			Invalid: AugmentedEvent<ApiType, [u64]>;
			/**
			 * The event is still awaiting consensus. Process block pushed out (claim_id, process_at)
			 **/
			ProcessAtExtended: AugmentedEvent<ApiType, [u64, u32]>;
			/**
			 * Processing an event failed
			 **/
			ProcessingFailed: AugmentedEvent<ApiType, [u64, SeedPalletCommonEventRouterError]>;
			/**
			 * Processing an event succeeded
			 **/
			ProcessingOk: AugmentedEvent<ApiType, [u64]>;
			/**
			 * Generating event proof delayed as bridge is paused
			 **/
			ProofDelayed: AugmentedEvent<ApiType, [u64]>;
			/**
			 * An account has deposited a relayer bond
			 **/
			RelayerBondDeposit: AugmentedEvent<ApiType, [SeedPrimitivesSignatureAccountId20, u128]>;
			/**
			 * An account has withdrawn a relayer bond
			 **/
			RelayerBondWithdraw: AugmentedEvent<ApiType, [SeedPrimitivesSignatureAccountId20, u128]>;
			/**
			 * A new relayer has been set
			 **/
			RelayerSet: AugmentedEvent<ApiType, [Option<SeedPrimitivesSignatureAccountId20>]>;
			/**
			 * The bridge contract address has been set
			 **/
			SetContractAddress: AugmentedEvent<ApiType, [H160]>;
			/**
			 * Verifying an event succeeded
			 **/
			Verified: AugmentedEvent<ApiType, [u64]>;
			/**
			 * A notary (validator) set change for Xrpl is in motion (event_id, new_validator_set_id)
			 * A proof for the change will be generated with the given `event_id`
			 **/
			XrplAuthoritySetChange: AugmentedEvent<ApiType, [u64, u64]>;
			/**
			 * Xrpl authority set change request failed
			 **/
			XrplAuthoritySetChangeRequestFailed: AugmentedEvent<ApiType, []>;
			/**
			 * Xrpl Door signers are set
			 **/
			XrplDoorSignersSet: AugmentedEvent<ApiType, []>;
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
				[from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason],
				{ from: H160; to: H160; transactionHash: H256; exitReason: EvmCoreErrorExitReason }
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
			 * Futurepass set as default proxy
			 **/
			DefaultFuturepassSet: AugmentedEvent<
				ApiType,
				[
					delegate: SeedPrimitivesSignatureAccountId20,
					futurepass: Option<SeedPrimitivesSignatureAccountId20>,
				],
				{
					delegate: SeedPrimitivesSignatureAccountId20;
					futurepass: Option<SeedPrimitivesSignatureAccountId20>;
				}
			>;
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
			 * Migration of Futurepass assets
			 **/
			FuturepassAssetsMigrated: AugmentedEvent<
				ApiType,
				[
					evmFuturepass: SeedPrimitivesSignatureAccountId20,
					futurepass: SeedPrimitivesSignatureAccountId20,
					assets: Vec<u32>,
					collections: Vec<u32>,
				],
				{
					evmFuturepass: SeedPrimitivesSignatureAccountId20;
					futurepass: SeedPrimitivesSignatureAccountId20;
					assets: Vec<u32>;
					collections: Vec<u32>;
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
			 * Updating Futurepass migrator account
			 **/
			FuturepassMigratorSet: AugmentedEvent<
				ApiType,
				[migrator: SeedPrimitivesSignatureAccountId20],
				{ migrator: SeedPrimitivesSignatureAccountId20 }
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
				[authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>],
				{ authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>> }
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
		marketplace: {
			/**
			 * An auction has closed without selling
			 **/
			AuctionClose: AugmentedEvent<
				ApiType,
				[collectionId: u32, listingId: u128, reason: PalletMarketplaceAuctionClosureReason],
				{ collectionId: u32; listingId: u128; reason: PalletMarketplaceAuctionClosureReason }
			>;
			/**
			 * An auction has opened
			 **/
			AuctionOpen: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					serialNumbers: Vec<u32>,
					paymentAsset: u32,
					reservePrice: u128,
					listingId: u128,
					marketplaceId: Option<u32>,
					seller: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					paymentAsset: u32;
					reservePrice: u128;
					listingId: u128;
					marketplaceId: Option<u32>;
					seller: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * An auction has sold
			 **/
			AuctionSold: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					listingId: u128,
					paymentAsset: u32,
					hammerPrice: u128,
					winner: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					listingId: u128;
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
					collectionId: u32,
					serialNumbers: Vec<u32>,
					listingId: u128,
					amount: u128,
					bidder: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					listingId: u128;
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
					collectionId: u32,
					serialNumbers: Vec<u32>,
					listingId: u128,
					reason: PalletMarketplaceFixedPriceClosureReason,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					listingId: u128;
					reason: PalletMarketplaceFixedPriceClosureReason;
				}
			>;
			/**
			 * A fixed price sale has completed
			 **/
			FixedPriceSaleComplete: AugmentedEvent<
				ApiType,
				[
					collectionId: u32,
					serialNumbers: Vec<u32>,
					listingId: u128,
					price: u128,
					paymentAsset: u32,
					buyer: SeedPrimitivesSignatureAccountId20,
					seller: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					listingId: u128;
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
					collectionId: u32,
					serialNumbers: Vec<u32>,
					listingId: u128,
					marketplaceId: Option<u32>,
					price: u128,
					paymentAsset: u32,
					seller: SeedPrimitivesSignatureAccountId20,
				],
				{
					collectionId: u32;
					serialNumbers: Vec<u32>;
					listingId: u128;
					marketplaceId: Option<u32>;
					price: u128;
					paymentAsset: u32;
					seller: SeedPrimitivesSignatureAccountId20;
				}
			>;
			/**
			 * A fixed price sale has had its price updated
			 **/
			FixedPriceSalePriceUpdate: AugmentedEvent<
				ApiType,
				[collectionId: u32, serialNumbers: Vec<u32>, listingId: u128, newPrice: u128],
				{ collectionId: u32; serialNumbers: Vec<u32>; listingId: u128; newPrice: u128 }
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
				[offerId: u64, tokenId: ITuple<[u32, u32]>, amount: u128, assetId: u32],
				{ offerId: u64; tokenId: ITuple<[u32, u32]>; amount: u128; assetId: u32 }
			>;
			/**
			 * An offer has been cancelled
			 **/
			OfferCancel: AugmentedEvent<
				ApiType,
				[offerId: u64, tokenId: ITuple<[u32, u32]>],
				{ offerId: u64; tokenId: ITuple<[u32, u32]> }
			>;
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
		nft: {
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
				[collectionId: u32, serialNumber: u32],
				{ collectionId: u32; serialNumber: u32 }
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
					compatibility: PalletNftCrossChainCompatibility,
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
					compatibility: PalletNftCrossChainCompatibility;
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
			CallLookupFailed: AugmentedEvent<
				ApiType,
				[task: ITuple<[u32, u32]>, id: Option<Bytes>, error: FrameSupportScheduleLookupError],
				{ task: ITuple<[u32, u32]>; id: Option<Bytes>; error: FrameSupportScheduleLookupError }
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
				[task: ITuple<[u32, u32]>, id: Option<Bytes>, result: Result<Null, SpRuntimeDispatchError>],
				{
					task: ITuple<[u32, u32]>;
					id: Option<Bytes>;
					result: Result<Null, SpRuntimeDispatchError>;
				}
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
			 * One staker (and potentially its nominators) has been slashed by the given amount.
			 **/
			Slashed: AugmentedEvent<
				ApiType,
				[staker: SeedPrimitivesSignatureAccountId20, amount: u128],
				{ staker: SeedPrimitivesSignatureAccountId20; amount: u128 }
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
			 * Set distribution eras
			 **/
			SetVtxDistEras: AugmentedEvent<
				ApiType,
				[id: u32, startEra: u32, endEra: u32],
				{ id: u32; startEra: u32; endEra: u32 }
			>;
			/**
			 * Trigger distribution calculation
			 **/
			TriggerVtxDistribution: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
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
			 * Distribution started
			 **/
			VtxDistStarted: AugmentedEvent<ApiType, [id: u32], { id: u32 }>;
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
		xrplBridge: {
			DoorAddressSet: AugmentedEvent<ApiType, [H160]>;
			DoorNextTicketSequenceParamSet: AugmentedEvent<
				ApiType,
				[ticketSequenceStartNext: u32, ticketBucketSizeNext: u32],
				{ ticketSequenceStartNext: u32; ticketBucketSizeNext: u32 }
			>;
			DoorTicketSequenceParamSet: AugmentedEvent<
				ApiType,
				[ticketSequence: u32, ticketSequenceStart: u32, ticketBucketSize: u32],
				{ ticketSequence: u32; ticketSequenceStart: u32; ticketBucketSize: u32 }
			>;
			/**
			 * Transaction not supported
			 **/
			NotSupportedTransaction: AugmentedEvent<ApiType, []>;
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
			TicketSequenceThresholdReached: AugmentedEvent<ApiType, [u32]>;
			TransactionAdded: AugmentedEvent<ApiType, [u64, H512]>;
			TransactionChallenge: AugmentedEvent<ApiType, [u64, H512]>;
			/**
			 * Request to withdraw some XRP amount to XRPL
			 **/
			WithdrawRequest: AugmentedEvent<
				ApiType,
				[proofId: u64, sender: SeedPrimitivesSignatureAccountId20, amount: u128, destination: H160],
				{
					proofId: u64;
					sender: SeedPrimitivesSignatureAccountId20;
					amount: u128;
					destination: H160;
				}
			>;
			/**
			 * Generic event
			 **/
			[key: string]: AugmentedEvent<ApiType>;
		};
	} // AugmentedEvents
} // declare module
