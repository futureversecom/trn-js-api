// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/lookup";

import type {
	BTreeMap,
	Bytes,
	Compact,
	Enum,
	Null,
	Option,
	Result,
	Struct,
	Text,
	U256,
	U8aFixed,
	Vec,
	WrapperKeepOpaque,
	bool,
	u128,
	u16,
	u32,
	u64,
	u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type { OpaqueMultiaddr, OpaquePeerId } from "@polkadot/types/interfaces/imOnline";
import type {
	Call,
	H160,
	H256,
	H512,
	PerU16,
	Perbill,
	Percent,
	Permill,
	WeightV1,
} from "@polkadot/types/interfaces/runtime";
import type { Event } from "@polkadot/types/interfaces/system";

declare module "@polkadot/types/lookup" {
	/** @name SeedPrimitivesSignatureAccountId20 (0) */
	interface SeedPrimitivesSignatureAccountId20 extends U8aFixed {}

	/** @name FrameSystemAccountInfo (3) */
	interface FrameSystemAccountInfo extends Struct {
		readonly nonce: u32;
		readonly consumers: u32;
		readonly providers: u32;
		readonly sufficients: u32;
		readonly data: PalletBalancesAccountData;
	}

	/** @name PalletBalancesAccountData (5) */
	interface PalletBalancesAccountData extends Struct {
		readonly free: u128;
		readonly reserved: u128;
		readonly miscFrozen: u128;
		readonly feeFrozen: u128;
	}

	/** @name FrameSupportDispatchPerDispatchClassWeight (7) */
	interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
		readonly normal: WeightV1;
		readonly operational: WeightV1;
		readonly mandatory: WeightV1;
	}

	/** @name SpRuntimeDigest (13) */
	interface SpRuntimeDigest extends Struct {
		readonly logs: Vec<SpRuntimeDigestDigestItem>;
	}

	/** @name SpRuntimeDigestDigestItem (15) */
	interface SpRuntimeDigestDigestItem extends Enum {
		readonly isOther: boolean;
		readonly asOther: Bytes;
		readonly isConsensus: boolean;
		readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
		readonly isSeal: boolean;
		readonly asSeal: ITuple<[U8aFixed, Bytes]>;
		readonly isPreRuntime: boolean;
		readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
		readonly isRuntimeEnvironmentUpdated: boolean;
		readonly type: "Other" | "Consensus" | "Seal" | "PreRuntime" | "RuntimeEnvironmentUpdated";
	}

	/** @name FrameSystemEventRecord (18) */
	interface FrameSystemEventRecord extends Struct {
		readonly phase: FrameSystemPhase;
		readonly event: Event;
		readonly topics: Vec<H256>;
	}

	/** @name FrameSystemEvent (20) */
	interface FrameSystemEvent extends Enum {
		readonly isExtrinsicSuccess: boolean;
		readonly asExtrinsicSuccess: {
			readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
		} & Struct;
		readonly isExtrinsicFailed: boolean;
		readonly asExtrinsicFailed: {
			readonly dispatchError: SpRuntimeDispatchError;
			readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
		} & Struct;
		readonly isCodeUpdated: boolean;
		readonly isNewAccount: boolean;
		readonly asNewAccount: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isKilledAccount: boolean;
		readonly asKilledAccount: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRemarked: boolean;
		readonly asRemarked: {
			readonly sender: SeedPrimitivesSignatureAccountId20;
			readonly hash_: H256;
		} & Struct;
		readonly type:
			| "ExtrinsicSuccess"
			| "ExtrinsicFailed"
			| "CodeUpdated"
			| "NewAccount"
			| "KilledAccount"
			| "Remarked";
	}

	/** @name FrameSupportDispatchDispatchInfo (21) */
	interface FrameSupportDispatchDispatchInfo extends Struct {
		readonly weight: WeightV1;
		readonly class: FrameSupportDispatchDispatchClass;
		readonly paysFee: FrameSupportDispatchPays;
	}

	/** @name FrameSupportDispatchDispatchClass (22) */
	interface FrameSupportDispatchDispatchClass extends Enum {
		readonly isNormal: boolean;
		readonly isOperational: boolean;
		readonly isMandatory: boolean;
		readonly type: "Normal" | "Operational" | "Mandatory";
	}

	/** @name FrameSupportDispatchPays (23) */
	interface FrameSupportDispatchPays extends Enum {
		readonly isYes: boolean;
		readonly isNo: boolean;
		readonly type: "Yes" | "No";
	}

	/** @name SpRuntimeDispatchError (24) */
	interface SpRuntimeDispatchError extends Enum {
		readonly isOther: boolean;
		readonly isCannotLookup: boolean;
		readonly isBadOrigin: boolean;
		readonly isModule: boolean;
		readonly asModule: SpRuntimeModuleError;
		readonly isConsumerRemaining: boolean;
		readonly isNoProviders: boolean;
		readonly isTooManyConsumers: boolean;
		readonly isToken: boolean;
		readonly asToken: SpRuntimeTokenError;
		readonly isArithmetic: boolean;
		readonly asArithmetic: SpRuntimeArithmeticError;
		readonly isTransactional: boolean;
		readonly asTransactional: SpRuntimeTransactionalError;
		readonly type:
			| "Other"
			| "CannotLookup"
			| "BadOrigin"
			| "Module"
			| "ConsumerRemaining"
			| "NoProviders"
			| "TooManyConsumers"
			| "Token"
			| "Arithmetic"
			| "Transactional";
	}

	/** @name SpRuntimeModuleError (25) */
	interface SpRuntimeModuleError extends Struct {
		readonly index: u8;
		readonly error: U8aFixed;
	}

	/** @name SpRuntimeTokenError (26) */
	interface SpRuntimeTokenError extends Enum {
		readonly isNoFunds: boolean;
		readonly isWouldDie: boolean;
		readonly isBelowMinimum: boolean;
		readonly isCannotCreate: boolean;
		readonly isUnknownAsset: boolean;
		readonly isFrozen: boolean;
		readonly isUnsupported: boolean;
		readonly type:
			| "NoFunds"
			| "WouldDie"
			| "BelowMinimum"
			| "CannotCreate"
			| "UnknownAsset"
			| "Frozen"
			| "Unsupported";
	}

	/** @name SpRuntimeArithmeticError (27) */
	interface SpRuntimeArithmeticError extends Enum {
		readonly isUnderflow: boolean;
		readonly isOverflow: boolean;
		readonly isDivisionByZero: boolean;
		readonly type: "Underflow" | "Overflow" | "DivisionByZero";
	}

	/** @name SpRuntimeTransactionalError (28) */
	interface SpRuntimeTransactionalError extends Enum {
		readonly isLimitReached: boolean;
		readonly isNoLayer: boolean;
		readonly type: "LimitReached" | "NoLayer";
	}

	/** @name PalletSchedulerEvent (29) */
	interface PalletSchedulerEvent extends Enum {
		readonly isScheduled: boolean;
		readonly asScheduled: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isCanceled: boolean;
		readonly asCanceled: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isDispatched: boolean;
		readonly asDispatched: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<Bytes>;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isCallLookupFailed: boolean;
		readonly asCallLookupFailed: {
			readonly task: ITuple<[u32, u32]>;
			readonly id: Option<Bytes>;
			readonly error: FrameSupportScheduleLookupError;
		} & Struct;
		readonly type: "Scheduled" | "Canceled" | "Dispatched" | "CallLookupFailed";
	}

	/** @name FrameSupportScheduleLookupError (34) */
	interface FrameSupportScheduleLookupError extends Enum {
		readonly isUnknown: boolean;
		readonly isBadFormat: boolean;
		readonly type: "Unknown" | "BadFormat";
	}

	/** @name PalletUtilityEvent (35) */
	interface PalletUtilityEvent extends Enum {
		readonly isBatchInterrupted: boolean;
		readonly asBatchInterrupted: {
			readonly index: u32;
			readonly error: SpRuntimeDispatchError;
		} & Struct;
		readonly isBatchCompleted: boolean;
		readonly isBatchCompletedWithErrors: boolean;
		readonly isItemCompleted: boolean;
		readonly isItemFailed: boolean;
		readonly asItemFailed: {
			readonly error: SpRuntimeDispatchError;
		} & Struct;
		readonly isDispatchedAs: boolean;
		readonly asDispatchedAs: {
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly type:
			| "BatchInterrupted"
			| "BatchCompleted"
			| "BatchCompletedWithErrors"
			| "ItemCompleted"
			| "ItemFailed"
			| "DispatchedAs";
	}

	/** @name PalletRecoveryEvent (36) */
	interface PalletRecoveryEvent extends Enum {
		readonly isRecoveryCreated: boolean;
		readonly asRecoveryCreated: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRecoveryInitiated: boolean;
		readonly asRecoveryInitiated: {
			readonly lostAccount: SeedPrimitivesSignatureAccountId20;
			readonly rescuerAccount: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRecoveryVouched: boolean;
		readonly asRecoveryVouched: {
			readonly lostAccount: SeedPrimitivesSignatureAccountId20;
			readonly rescuerAccount: SeedPrimitivesSignatureAccountId20;
			readonly sender: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRecoveryClosed: boolean;
		readonly asRecoveryClosed: {
			readonly lostAccount: SeedPrimitivesSignatureAccountId20;
			readonly rescuerAccount: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isAccountRecovered: boolean;
		readonly asAccountRecovered: {
			readonly lostAccount: SeedPrimitivesSignatureAccountId20;
			readonly rescuerAccount: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRecoveryRemoved: boolean;
		readonly asRecoveryRemoved: {
			readonly lostAccount: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type:
			| "RecoveryCreated"
			| "RecoveryInitiated"
			| "RecoveryVouched"
			| "RecoveryClosed"
			| "AccountRecovered"
			| "RecoveryRemoved";
	}

	/** @name PalletMultisigEvent (37) */
	interface PalletMultisigEvent extends Enum {
		readonly isNewMultisig: boolean;
		readonly asNewMultisig: {
			readonly approving: SeedPrimitivesSignatureAccountId20;
			readonly multisig: SeedPrimitivesSignatureAccountId20;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly isMultisigApproval: boolean;
		readonly asMultisigApproval: {
			readonly approving: SeedPrimitivesSignatureAccountId20;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: SeedPrimitivesSignatureAccountId20;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly isMultisigExecuted: boolean;
		readonly asMultisigExecuted: {
			readonly approving: SeedPrimitivesSignatureAccountId20;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: SeedPrimitivesSignatureAccountId20;
			readonly callHash: U8aFixed;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isMultisigCancelled: boolean;
		readonly asMultisigCancelled: {
			readonly cancelling: SeedPrimitivesSignatureAccountId20;
			readonly timepoint: PalletMultisigTimepoint;
			readonly multisig: SeedPrimitivesSignatureAccountId20;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly type: "NewMultisig" | "MultisigApproval" | "MultisigExecuted" | "MultisigCancelled";
	}

	/** @name PalletMultisigTimepoint (38) */
	interface PalletMultisigTimepoint extends Struct {
		readonly height: u32;
		readonly index: u32;
	}

	/** @name PalletBalancesEvent (39) */
	interface PalletBalancesEvent extends Enum {
		readonly isEndowed: boolean;
		readonly asEndowed: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly freeBalance: u128;
		} & Struct;
		readonly isDustLost: boolean;
		readonly asDustLost: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly from: SeedPrimitivesSignatureAccountId20;
			readonly to: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isBalanceSet: boolean;
		readonly asBalanceSet: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly free: u128;
			readonly reserved: u128;
		} & Struct;
		readonly isReserved: boolean;
		readonly asReserved: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isUnreserved: boolean;
		readonly asUnreserved: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isReserveRepatriated: boolean;
		readonly asReserveRepatriated: {
			readonly from: SeedPrimitivesSignatureAccountId20;
			readonly to: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
			readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
		} & Struct;
		readonly isDeposit: boolean;
		readonly asDeposit: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isWithdraw: boolean;
		readonly asWithdraw: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isSlashed: boolean;
		readonly asSlashed: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| "Endowed"
			| "DustLost"
			| "Transfer"
			| "BalanceSet"
			| "Reserved"
			| "Unreserved"
			| "ReserveRepatriated"
			| "Deposit"
			| "Withdraw"
			| "Slashed";
	}

	/** @name FrameSupportTokensMiscBalanceStatus (40) */
	interface FrameSupportTokensMiscBalanceStatus extends Enum {
		readonly isFree: boolean;
		readonly isReserved: boolean;
		readonly type: "Free" | "Reserved";
	}

	/** @name PalletAssetsEvent (41) */
	interface PalletAssetsEvent extends Enum {
		readonly isCreated: boolean;
		readonly asCreated: {
			readonly assetId: u32;
			readonly creator: SeedPrimitivesSignatureAccountId20;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isIssued: boolean;
		readonly asIssued: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly totalSupply: u128;
		} & Struct;
		readonly isTransferred: boolean;
		readonly asTransferred: {
			readonly assetId: u32;
			readonly from: SeedPrimitivesSignatureAccountId20;
			readonly to: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isBurned: boolean;
		readonly asBurned: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly balance: u128;
		} & Struct;
		readonly isTeamChanged: boolean;
		readonly asTeamChanged: {
			readonly assetId: u32;
			readonly issuer: SeedPrimitivesSignatureAccountId20;
			readonly admin: SeedPrimitivesSignatureAccountId20;
			readonly freezer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isOwnerChanged: boolean;
		readonly asOwnerChanged: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isFrozen: boolean;
		readonly asFrozen: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isThawed: boolean;
		readonly asThawed: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isAssetFrozen: boolean;
		readonly asAssetFrozen: {
			readonly assetId: u32;
		} & Struct;
		readonly isAssetThawed: boolean;
		readonly asAssetThawed: {
			readonly assetId: u32;
		} & Struct;
		readonly isDestroyed: boolean;
		readonly asDestroyed: {
			readonly assetId: u32;
		} & Struct;
		readonly isForceCreated: boolean;
		readonly asForceCreated: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMetadataSet: boolean;
		readonly asMetadataSet: {
			readonly assetId: u32;
			readonly name: Bytes;
			readonly symbol: Bytes;
			readonly decimals: u8;
			readonly isFrozen: bool;
		} & Struct;
		readonly isMetadataCleared: boolean;
		readonly asMetadataCleared: {
			readonly assetId: u32;
		} & Struct;
		readonly isApprovedTransfer: boolean;
		readonly asApprovedTransfer: {
			readonly assetId: u32;
			readonly source: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isApprovalCancelled: boolean;
		readonly asApprovalCancelled: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isTransferredApproved: boolean;
		readonly asTransferredApproved: {
			readonly assetId: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly destination: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isAssetStatusChanged: boolean;
		readonly asAssetStatusChanged: {
			readonly assetId: u32;
		} & Struct;
		readonly type:
			| "Created"
			| "Issued"
			| "Transferred"
			| "Burned"
			| "TeamChanged"
			| "OwnerChanged"
			| "Frozen"
			| "Thawed"
			| "AssetFrozen"
			| "AssetThawed"
			| "Destroyed"
			| "ForceCreated"
			| "MetadataSet"
			| "MetadataCleared"
			| "ApprovedTransfer"
			| "ApprovalCancelled"
			| "TransferredApproved"
			| "AssetStatusChanged";
	}

	/** @name PalletAssetsExtEvent (43) */
	interface PalletAssetsExtEvent extends Enum {
		readonly isPlaceHold: boolean;
		readonly asPlaceHold: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
			readonly palletId: U8aFixed;
		} & Struct;
		readonly isReleaseHold: boolean;
		readonly asReleaseHold: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
			readonly palletId: U8aFixed;
		} & Struct;
		readonly isSpendHold: boolean;
		readonly asSpendHold: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly spends: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
			readonly palletId: U8aFixed;
		} & Struct;
		readonly isSplitTransfer: boolean;
		readonly asSplitTransfer: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly transfers: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
		} & Struct;
		readonly isCreateAsset: boolean;
		readonly asCreateAsset: {
			readonly assetId: u32;
			readonly creator: SeedPrimitivesSignatureAccountId20;
			readonly initialBalance: u128;
		} & Struct;
		readonly isInternalWithdraw: boolean;
		readonly asInternalWithdraw: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isInternalDeposit: boolean;
		readonly asInternalDeposit: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isAssetDepositSet: boolean;
		readonly asAssetDepositSet: {
			readonly assetDeposit: u128;
		} & Struct;
		readonly type:
			| "PlaceHold"
			| "ReleaseHold"
			| "SpendHold"
			| "SplitTransfer"
			| "CreateAsset"
			| "InternalWithdraw"
			| "InternalDeposit"
			| "AssetDepositSet";
	}

	/** @name PalletStakingPalletEvent (47) */
	interface PalletStakingPalletEvent extends Enum {
		readonly isEraPaid: boolean;
		readonly asEraPaid: {
			readonly eraIndex: u32;
			readonly validatorPayout: u128;
			readonly remainder: u128;
		} & Struct;
		readonly isRewarded: boolean;
		readonly asRewarded: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isSlashed: boolean;
		readonly asSlashed: {
			readonly staker: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isOldSlashingReportDiscarded: boolean;
		readonly asOldSlashingReportDiscarded: {
			readonly sessionIndex: u32;
		} & Struct;
		readonly isStakersElected: boolean;
		readonly isBonded: boolean;
		readonly asBonded: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isUnbonded: boolean;
		readonly asUnbonded: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isWithdrawn: boolean;
		readonly asWithdrawn: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isKicked: boolean;
		readonly asKicked: {
			readonly nominator: SeedPrimitivesSignatureAccountId20;
			readonly stash: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isStakingElectionFailed: boolean;
		readonly isChilled: boolean;
		readonly asChilled: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isPayoutStarted: boolean;
		readonly asPayoutStarted: {
			readonly eraIndex: u32;
			readonly validatorStash: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isValidatorPrefsSet: boolean;
		readonly asValidatorPrefsSet: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly prefs: PalletStakingValidatorPrefs;
		} & Struct;
		readonly type:
			| "EraPaid"
			| "Rewarded"
			| "Slashed"
			| "OldSlashingReportDiscarded"
			| "StakersElected"
			| "Bonded"
			| "Unbonded"
			| "Withdrawn"
			| "Kicked"
			| "StakingElectionFailed"
			| "Chilled"
			| "PayoutStarted"
			| "ValidatorPrefsSet";
	}

	/** @name PalletStakingValidatorPrefs (48) */
	interface PalletStakingValidatorPrefs extends Struct {
		readonly commission: Compact<Perbill>;
		readonly blocked: bool;
	}

	/** @name PalletOffencesEvent (51) */
	interface PalletOffencesEvent extends Enum {
		readonly isOffence: boolean;
		readonly asOffence: {
			readonly kind: U8aFixed;
			readonly timeslot: Bytes;
		} & Struct;
		readonly type: "Offence";
	}

	/** @name PalletSessionEvent (53) */
	interface PalletSessionEvent extends Enum {
		readonly isNewSession: boolean;
		readonly asNewSession: {
			readonly sessionIndex: u32;
		} & Struct;
		readonly type: "NewSession";
	}

	/** @name PalletGrandpaEvent (54) */
	interface PalletGrandpaEvent extends Enum {
		readonly isNewAuthorities: boolean;
		readonly asNewAuthorities: {
			readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
		} & Struct;
		readonly isPaused: boolean;
		readonly isResumed: boolean;
		readonly type: "NewAuthorities" | "Paused" | "Resumed";
	}

	/** @name SpFinalityGrandpaAppPublic (57) */
	interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

	/** @name SpCoreEd25519Public (58) */
	interface SpCoreEd25519Public extends U8aFixed {}

	/** @name PalletImOnlineEvent (59) */
	interface PalletImOnlineEvent extends Enum {
		readonly isHeartbeatReceived: boolean;
		readonly asHeartbeatReceived: {
			readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
		} & Struct;
		readonly isAllGood: boolean;
		readonly isSomeOffline: boolean;
		readonly asSomeOffline: {
			readonly offline: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, PalletStakingExposure]>>;
		} & Struct;
		readonly type: "HeartbeatReceived" | "AllGood" | "SomeOffline";
	}

	/** @name PalletImOnlineSr25519AppSr25519Public (60) */
	interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

	/** @name SpCoreSr25519Public (61) */
	interface SpCoreSr25519Public extends U8aFixed {}

	/** @name PalletStakingExposure (64) */
	interface PalletStakingExposure extends Struct {
		readonly total: Compact<u128>;
		readonly own: Compact<u128>;
		readonly others: Vec<PalletStakingIndividualExposure>;
	}

	/** @name PalletStakingIndividualExposure (67) */
	interface PalletStakingIndividualExposure extends Struct {
		readonly who: SeedPrimitivesSignatureAccountId20;
		readonly value: Compact<u128>;
	}

	/** @name PalletSudoEvent (68) */
	interface PalletSudoEvent extends Enum {
		readonly isSudid: boolean;
		readonly asSudid: {
			readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isKeyChanged: boolean;
		readonly asKeyChanged: {
			readonly oldSudoer: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isSudoAsDone: boolean;
		readonly asSudoAsDone: {
			readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly type: "Sudid" | "KeyChanged" | "SudoAsDone";
	}

	/** @name PalletTransactionPaymentEvent (70) */
	interface PalletTransactionPaymentEvent extends Enum {
		readonly isTransactionFeePaid: boolean;
		readonly asTransactionFeePaid: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly actualFee: u128;
			readonly tip: u128;
		} & Struct;
		readonly type: "TransactionFeePaid";
	}

	/** @name PalletDexEvent (71) */
	interface PalletDexEvent extends Enum {
		readonly isFeeToSet: boolean;
		readonly asFeeToSet: Option<SeedPrimitivesSignatureAccountId20>;
		readonly isAddProvision: boolean;
		readonly asAddProvision: ITuple<[SeedPrimitivesSignatureAccountId20, u32, u128, u32, u128]>;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: ITuple<
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
		readonly isRemoveLiquidity: boolean;
		readonly asRemoveLiquidity: ITuple<
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
		readonly isSwap: boolean;
		readonly asSwap: ITuple<
			[SeedPrimitivesSignatureAccountId20, Vec<u32>, u128, u128, SeedPrimitivesSignatureAccountId20]
		>;
		readonly isEnableTradingPair: boolean;
		readonly asEnableTradingPair: PalletDexTradingPair;
		readonly isDisableTradingPair: boolean;
		readonly asDisableTradingPair: PalletDexTradingPair;
		readonly isProvisioningToEnabled: boolean;
		readonly asProvisioningToEnabled: ITuple<[PalletDexTradingPair, u128, u128, u128]>;
		readonly type:
			| "FeeToSet"
			| "AddProvision"
			| "AddLiquidity"
			| "RemoveLiquidity"
			| "Swap"
			| "EnableTradingPair"
			| "DisableTradingPair"
			| "ProvisioningToEnabled";
	}

	/** @name PalletDexTradingPair (73) */
	interface PalletDexTradingPair extends ITuple<[u32, u32]> {}

	/** @name PalletNftEvent (74) */
	interface PalletNftEvent extends Enum {
		readonly isCollectionCreate: boolean;
		readonly asCollectionCreate: {
			readonly collectionUuid: u32;
			readonly initialIssuance: u32;
			readonly maxIssuance: Option<u32>;
			readonly collectionOwner: SeedPrimitivesSignatureAccountId20;
			readonly metadataScheme: Bytes;
			readonly name: Bytes;
			readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
			readonly originChain: SeedPrimitivesNftOriginChain;
			readonly compatibility: PalletNftCrossChainCompatibility;
		} & Struct;
		readonly isPublicMintToggle: boolean;
		readonly asPublicMintToggle: {
			readonly collectionId: u32;
			readonly enabled: bool;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly collectionId: u32;
			readonly start: u32;
			readonly end: u32;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMintFeePaid: boolean;
		readonly asMintFeePaid: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
			readonly paymentAsset: u32;
			readonly paymentAmount: u128;
			readonly tokenCount: u32;
		} & Struct;
		readonly isMintPriceSet: boolean;
		readonly asMintPriceSet: {
			readonly collectionId: u32;
			readonly paymentAsset: Option<u32>;
			readonly mintPrice: Option<u128>;
		} & Struct;
		readonly isBridgedMint: boolean;
		readonly asBridgedMint: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isOwnerSet: boolean;
		readonly asOwnerSet: {
			readonly collectionId: u32;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMaxIssuanceSet: boolean;
		readonly asMaxIssuanceSet: {
			readonly collectionId: u32;
			readonly maxIssuance: u32;
		} & Struct;
		readonly isBaseUriSet: boolean;
		readonly asBaseUriSet: {
			readonly collectionId: u32;
			readonly baseUri: Bytes;
		} & Struct;
		readonly isNameSet: boolean;
		readonly asNameSet: {
			readonly collectionId: u32;
			readonly name: Bytes;
		} & Struct;
		readonly isRoyaltiesScheduleSet: boolean;
		readonly asRoyaltiesScheduleSet: {
			readonly collectionId: u32;
			readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly previousOwner: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isBurn: boolean;
		readonly asBurn: {
			readonly collectionId: u32;
			readonly serialNumber: u32;
		} & Struct;
		readonly isCollectionClaimed: boolean;
		readonly asCollectionClaimed: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
		} & Struct;
		readonly type:
			| "CollectionCreate"
			| "PublicMintToggle"
			| "Mint"
			| "MintFeePaid"
			| "MintPriceSet"
			| "BridgedMint"
			| "OwnerSet"
			| "MaxIssuanceSet"
			| "BaseUriSet"
			| "NameSet"
			| "RoyaltiesScheduleSet"
			| "Transfer"
			| "Burn"
			| "CollectionClaimed";
	}

	/** @name SeedPrimitivesNftRoyaltiesSchedule (79) */
	interface SeedPrimitivesNftRoyaltiesSchedule extends Struct {
		readonly entitlements: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, Permill]>>;
	}

	/** @name SeedPrimitivesNftOriginChain (84) */
	interface SeedPrimitivesNftOriginChain extends Enum {
		readonly isEthereum: boolean;
		readonly isRoot: boolean;
		readonly type: "Ethereum" | "Root";
	}

	/** @name PalletNftCrossChainCompatibility (85) */
	interface PalletNftCrossChainCompatibility extends Struct {
		readonly xrpl: bool;
	}

	/** @name PalletSftEvent (89) */
	interface PalletSftEvent extends Enum {
		readonly isCollectionCreate: boolean;
		readonly asCollectionCreate: {
			readonly collectionId: u32;
			readonly collectionOwner: SeedPrimitivesSignatureAccountId20;
			readonly metadataScheme: Bytes;
			readonly name: Bytes;
			readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
			readonly originChain: SeedPrimitivesNftOriginChain;
		} & Struct;
		readonly isPublicMintToggle: boolean;
		readonly asPublicMintToggle: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly enabled: bool;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly balances: Vec<u128>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMintFeePaid: boolean;
		readonly asMintFeePaid: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly tokenId: ITuple<[u32, u32]>;
			readonly paymentAsset: u32;
			readonly paymentAmount: u128;
			readonly tokenCount: u128;
		} & Struct;
		readonly isMintPriceSet: boolean;
		readonly asMintPriceSet: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly paymentAsset: Option<u32>;
			readonly mintPrice: Option<u128>;
		} & Struct;
		readonly isOwnerSet: boolean;
		readonly asOwnerSet: {
			readonly collectionId: u32;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMaxIssuanceSet: boolean;
		readonly asMaxIssuanceSet: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly maxIssuance: u128;
		} & Struct;
		readonly isBaseUriSet: boolean;
		readonly asBaseUriSet: {
			readonly collectionId: u32;
			readonly metadataScheme: Bytes;
		} & Struct;
		readonly isNameSet: boolean;
		readonly asNameSet: {
			readonly collectionId: u32;
			readonly collectionName: Bytes;
		} & Struct;
		readonly isRoyaltiesScheduleSet: boolean;
		readonly asRoyaltiesScheduleSet: {
			readonly collectionId: u32;
			readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		} & Struct;
		readonly isTokenCreate: boolean;
		readonly asTokenCreate: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly initialIssuance: u128;
			readonly maxIssuance: Option<u128>;
			readonly tokenName: Bytes;
			readonly tokenOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly previousOwner: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly balances: Vec<u128>;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isBurn: boolean;
		readonly asBurn: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly balances: Vec<u128>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type:
			| "CollectionCreate"
			| "PublicMintToggle"
			| "Mint"
			| "MintFeePaid"
			| "MintPriceSet"
			| "OwnerSet"
			| "MaxIssuanceSet"
			| "BaseUriSet"
			| "NameSet"
			| "RoyaltiesScheduleSet"
			| "TokenCreate"
			| "Transfer"
			| "Burn";
	}

	/** @name PalletXrplBridgeEvent (93) */
	interface PalletXrplBridgeEvent extends Enum {
		readonly isTransactionAdded: boolean;
		readonly asTransactionAdded: ITuple<[u64, H512]>;
		readonly isTransactionChallenge: boolean;
		readonly asTransactionChallenge: ITuple<[u64, H512]>;
		readonly isPaymentDelaySet: boolean;
		readonly asPaymentDelaySet: {
			readonly paymentThreshold: u128;
			readonly delay: u32;
		} & Struct;
		readonly isPaymentDelayRemoved: boolean;
		readonly isProcessingOk: boolean;
		readonly asProcessingOk: ITuple<[u64, H512]>;
		readonly isProcessingFailed: boolean;
		readonly asProcessingFailed: ITuple<[u64, H512, SpRuntimeDispatchError]>;
		readonly isNotSupportedTransaction: boolean;
		readonly isWithdrawRequest: boolean;
		readonly asWithdrawRequest: {
			readonly proofId: u64;
			readonly sender: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
			readonly destination: H160;
		} & Struct;
		readonly isWithdrawDelayed: boolean;
		readonly asWithdrawDelayed: {
			readonly sender: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
			readonly destination: H160;
			readonly delayedPaymentId: u64;
			readonly paymentBlock: u32;
		} & Struct;
		readonly isRelayerAdded: boolean;
		readonly asRelayerAdded: SeedPrimitivesSignatureAccountId20;
		readonly isRelayerRemoved: boolean;
		readonly asRelayerRemoved: SeedPrimitivesSignatureAccountId20;
		readonly isDoorAddressSet: boolean;
		readonly asDoorAddressSet: H160;
		readonly isDoorNextTicketSequenceParamSet: boolean;
		readonly asDoorNextTicketSequenceParamSet: {
			readonly ticketSequenceStartNext: u32;
			readonly ticketBucketSizeNext: u32;
		} & Struct;
		readonly isDoorTicketSequenceParamSet: boolean;
		readonly asDoorTicketSequenceParamSet: {
			readonly ticketSequence: u32;
			readonly ticketSequenceStart: u32;
			readonly ticketBucketSize: u32;
		} & Struct;
		readonly isLedgerIndexManualPrune: boolean;
		readonly asLedgerIndexManualPrune: {
			readonly ledgerIndex: u32;
			readonly totalCleared: u32;
		} & Struct;
		readonly isTicketSequenceThresholdReached: boolean;
		readonly asTicketSequenceThresholdReached: u32;
		readonly type:
			| "TransactionAdded"
			| "TransactionChallenge"
			| "PaymentDelaySet"
			| "PaymentDelayRemoved"
			| "ProcessingOk"
			| "ProcessingFailed"
			| "NotSupportedTransaction"
			| "WithdrawRequest"
			| "WithdrawDelayed"
			| "RelayerAdded"
			| "RelayerRemoved"
			| "DoorAddressSet"
			| "DoorNextTicketSequenceParamSet"
			| "DoorTicketSequenceParamSet"
			| "LedgerIndexManualPrune"
			| "TicketSequenceThresholdReached";
	}

	/** @name PalletXrplEvent (97) */
	interface PalletXrplEvent extends Enum {
		readonly isXrplExtrinsicExecuted: boolean;
		readonly asXrplExtrinsicExecuted: {
			readonly publicKey: U8aFixed;
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly rAddress: Text;
			readonly call: Call;
		} & Struct;
		readonly type: "XrplExtrinsicExecuted";
	}

	/** @name FrameSystemCall (101) */
	interface FrameSystemCall extends Enum {
		readonly isFillBlock: boolean;
		readonly asFillBlock: {
			readonly ratio: Perbill;
		} & Struct;
		readonly isRemark: boolean;
		readonly asRemark: {
			readonly remark: Bytes;
		} & Struct;
		readonly isSetHeapPages: boolean;
		readonly asSetHeapPages: {
			readonly pages: u64;
		} & Struct;
		readonly isSetCode: boolean;
		readonly asSetCode: {
			readonly code: Bytes;
		} & Struct;
		readonly isSetCodeWithoutChecks: boolean;
		readonly asSetCodeWithoutChecks: {
			readonly code: Bytes;
		} & Struct;
		readonly isSetStorage: boolean;
		readonly asSetStorage: {
			readonly items: Vec<ITuple<[Bytes, Bytes]>>;
		} & Struct;
		readonly isKillStorage: boolean;
		readonly asKillStorage: {
			readonly keys_: Vec<Bytes>;
		} & Struct;
		readonly isKillPrefix: boolean;
		readonly asKillPrefix: {
			readonly prefix: Bytes;
			readonly subkeys: u32;
		} & Struct;
		readonly isRemarkWithEvent: boolean;
		readonly asRemarkWithEvent: {
			readonly remark: Bytes;
		} & Struct;
		readonly type:
			| "FillBlock"
			| "Remark"
			| "SetHeapPages"
			| "SetCode"
			| "SetCodeWithoutChecks"
			| "SetStorage"
			| "KillStorage"
			| "KillPrefix"
			| "RemarkWithEvent";
	}

	/** @name PalletBabeCall (105) */
	interface PalletBabeCall extends Enum {
		readonly isReportEquivocation: boolean;
		readonly asReportEquivocation: {
			readonly equivocationProof: SpConsensusSlotsEquivocationProof;
			readonly keyOwnerProof: SpSessionMembershipProof;
		} & Struct;
		readonly isReportEquivocationUnsigned: boolean;
		readonly asReportEquivocationUnsigned: {
			readonly equivocationProof: SpConsensusSlotsEquivocationProof;
			readonly keyOwnerProof: SpSessionMembershipProof;
		} & Struct;
		readonly isPlanConfigChange: boolean;
		readonly asPlanConfigChange: {
			readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
		} & Struct;
		readonly type: "ReportEquivocation" | "ReportEquivocationUnsigned" | "PlanConfigChange";
	}

	/** @name SpConsensusSlotsEquivocationProof (106) */
	interface SpConsensusSlotsEquivocationProof extends Struct {
		readonly offender: SpConsensusBabeAppPublic;
		readonly slot: u64;
		readonly firstHeader: SpRuntimeHeader;
		readonly secondHeader: SpRuntimeHeader;
	}

	/** @name SpRuntimeHeader (107) */
	interface SpRuntimeHeader extends Struct {
		readonly parentHash: H256;
		readonly number: Compact<u32>;
		readonly stateRoot: H256;
		readonly extrinsicsRoot: H256;
		readonly digest: SpRuntimeDigest;
	}

	/** @name SpRuntimeBlakeTwo256 (108) */
	type SpRuntimeBlakeTwo256 = Null;

	/** @name SpConsensusBabeAppPublic (110) */
	interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

	/** @name SpSessionMembershipProof (112) */
	interface SpSessionMembershipProof extends Struct {
		readonly session: u32;
		readonly trieNodes: Vec<Bytes>;
		readonly validatorCount: u32;
	}

	/** @name SpConsensusBabeDigestsNextConfigDescriptor (113) */
	interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
		readonly isV1: boolean;
		readonly asV1: {
			readonly c: ITuple<[u64, u64]>;
			readonly allowedSlots: SpConsensusBabeAllowedSlots;
		} & Struct;
		readonly type: "V1";
	}

	/** @name SpConsensusBabeAllowedSlots (115) */
	interface SpConsensusBabeAllowedSlots extends Enum {
		readonly isPrimarySlots: boolean;
		readonly isPrimaryAndSecondaryPlainSlots: boolean;
		readonly isPrimaryAndSecondaryVRFSlots: boolean;
		readonly type: "PrimarySlots" | "PrimaryAndSecondaryPlainSlots" | "PrimaryAndSecondaryVRFSlots";
	}

	/** @name PalletTimestampCall (116) */
	interface PalletTimestampCall extends Enum {
		readonly isSet: boolean;
		readonly asSet: {
			readonly now: Compact<u64>;
		} & Struct;
		readonly type: "Set";
	}

	/** @name PalletSchedulerCall (118) */
	interface PalletSchedulerCall extends Enum {
		readonly isSchedule: boolean;
		readonly asSchedule: {
			readonly when: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: FrameSupportScheduleMaybeHashed;
		} & Struct;
		readonly isCancel: boolean;
		readonly asCancel: {
			readonly when: u32;
			readonly index: u32;
		} & Struct;
		readonly isScheduleNamed: boolean;
		readonly asScheduleNamed: {
			readonly id: Bytes;
			readonly when: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: FrameSupportScheduleMaybeHashed;
		} & Struct;
		readonly isCancelNamed: boolean;
		readonly asCancelNamed: {
			readonly id: Bytes;
		} & Struct;
		readonly isScheduleAfter: boolean;
		readonly asScheduleAfter: {
			readonly after: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: FrameSupportScheduleMaybeHashed;
		} & Struct;
		readonly isScheduleNamedAfter: boolean;
		readonly asScheduleNamedAfter: {
			readonly id: Bytes;
			readonly after: u32;
			readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
			readonly priority: u8;
			readonly call: FrameSupportScheduleMaybeHashed;
		} & Struct;
		readonly type:
			| "Schedule"
			| "Cancel"
			| "ScheduleNamed"
			| "CancelNamed"
			| "ScheduleAfter"
			| "ScheduleNamedAfter";
	}

	/** @name FrameSupportScheduleMaybeHashed (120) */
	interface FrameSupportScheduleMaybeHashed extends Enum {
		readonly isValue: boolean;
		readonly asValue: Call;
		readonly isHash: boolean;
		readonly asHash: H256;
		readonly type: "Value" | "Hash";
	}

	/** @name PalletUtilityCall (121) */
	interface PalletUtilityCall extends Enum {
		readonly isBatch: boolean;
		readonly asBatch: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly isAsDerivative: boolean;
		readonly asAsDerivative: {
			readonly index: u16;
			readonly call: Call;
		} & Struct;
		readonly isBatchAll: boolean;
		readonly asBatchAll: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly isDispatchAs: boolean;
		readonly asDispatchAs: {
			readonly asOrigin: SeedRuntimeOriginCaller;
			readonly call: Call;
		} & Struct;
		readonly isForceBatch: boolean;
		readonly asForceBatch: {
			readonly calls: Vec<Call>;
		} & Struct;
		readonly type: "Batch" | "AsDerivative" | "BatchAll" | "DispatchAs" | "ForceBatch";
	}

	/** @name SeedRuntimeOriginCaller (124) */
	interface SeedRuntimeOriginCaller extends Enum {
		readonly isSystem: boolean;
		readonly asSystem: FrameSupportDispatchRawOrigin;
		readonly isVoid: boolean;
		readonly isEthereum: boolean;
		readonly asEthereum: PalletEthereumRawOrigin;
		readonly isXrpl: boolean;
		readonly asXrpl: SeedPrimitivesSignatureAccountId20;
		readonly type: "System" | "Void" | "Ethereum" | "Xrpl";
	}

	/** @name FrameSupportDispatchRawOrigin (125) */
	interface FrameSupportDispatchRawOrigin extends Enum {
		readonly isRoot: boolean;
		readonly isSigned: boolean;
		readonly asSigned: SeedPrimitivesSignatureAccountId20;
		readonly isNone: boolean;
		readonly type: "Root" | "Signed" | "None";
	}

	/** @name PalletEthereumRawOrigin (126) */
	interface PalletEthereumRawOrigin extends Enum {
		readonly isEthereumTransaction: boolean;
		readonly asEthereumTransaction: H160;
		readonly type: "EthereumTransaction";
	}

	/** @name SpCoreVoid (127) */
	type SpCoreVoid = Null;

	/** @name PalletRecoveryCall (128) */
	interface PalletRecoveryCall extends Enum {
		readonly isAsRecovered: boolean;
		readonly asAsRecovered: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly call: Call;
		} & Struct;
		readonly isSetRecovered: boolean;
		readonly asSetRecovered: {
			readonly lost: SeedPrimitivesSignatureAccountId20;
			readonly rescuer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isCreateRecovery: boolean;
		readonly asCreateRecovery: {
			readonly friends: Vec<SeedPrimitivesSignatureAccountId20>;
			readonly threshold: u16;
			readonly delayPeriod: u32;
		} & Struct;
		readonly isInitiateRecovery: boolean;
		readonly asInitiateRecovery: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isVouchRecovery: boolean;
		readonly asVouchRecovery: {
			readonly lost: SeedPrimitivesSignatureAccountId20;
			readonly rescuer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isClaimRecovery: boolean;
		readonly asClaimRecovery: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isCloseRecovery: boolean;
		readonly asCloseRecovery: {
			readonly rescuer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRemoveRecovery: boolean;
		readonly isCancelRecovered: boolean;
		readonly asCancelRecovered: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type:
			| "AsRecovered"
			| "SetRecovered"
			| "CreateRecovery"
			| "InitiateRecovery"
			| "VouchRecovery"
			| "ClaimRecovery"
			| "CloseRecovery"
			| "RemoveRecovery"
			| "CancelRecovered";
	}

	/** @name PalletMultisigCall (130) */
	interface PalletMultisigCall extends Enum {
		readonly isAsMultiThreshold1: boolean;
		readonly asAsMultiThreshold1: {
			readonly otherSignatories: Vec<SeedPrimitivesSignatureAccountId20>;
			readonly call: Call;
		} & Struct;
		readonly isAsMulti: boolean;
		readonly asAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<SeedPrimitivesSignatureAccountId20>;
			readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
			readonly call: WrapperKeepOpaque<Call>;
			readonly storeCall: bool;
			readonly maxWeight: WeightV1;
		} & Struct;
		readonly isApproveAsMulti: boolean;
		readonly asApproveAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<SeedPrimitivesSignatureAccountId20>;
			readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
			readonly callHash: U8aFixed;
			readonly maxWeight: WeightV1;
		} & Struct;
		readonly isCancelAsMulti: boolean;
		readonly asCancelAsMulti: {
			readonly threshold: u16;
			readonly otherSignatories: Vec<SeedPrimitivesSignatureAccountId20>;
			readonly timepoint: PalletMultisigTimepoint;
			readonly callHash: U8aFixed;
		} & Struct;
		readonly type: "AsMultiThreshold1" | "AsMulti" | "ApproveAsMulti" | "CancelAsMulti";
	}

	/** @name PalletBalancesCall (133) */
	interface PalletBalancesCall extends Enum {
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly dest: SeedPrimitivesSignatureAccountId20;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isSetBalance: boolean;
		readonly asSetBalance: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly newFree: Compact<u128>;
			readonly newReserved: Compact<u128>;
		} & Struct;
		readonly isForceTransfer: boolean;
		readonly asForceTransfer: {
			readonly source: SeedPrimitivesSignatureAccountId20;
			readonly dest: SeedPrimitivesSignatureAccountId20;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isTransferKeepAlive: boolean;
		readonly asTransferKeepAlive: {
			readonly dest: SeedPrimitivesSignatureAccountId20;
			readonly value: Compact<u128>;
		} & Struct;
		readonly isTransferAll: boolean;
		readonly asTransferAll: {
			readonly dest: SeedPrimitivesSignatureAccountId20;
			readonly keepAlive: bool;
		} & Struct;
		readonly isForceUnreserve: boolean;
		readonly asForceUnreserve: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly type:
			| "Transfer"
			| "SetBalance"
			| "ForceTransfer"
			| "TransferKeepAlive"
			| "TransferAll"
			| "ForceUnreserve";
	}

	/** @name PalletAssetsCall (134) */
	interface PalletAssetsCall extends Enum {
		readonly isCreate: boolean;
		readonly asCreate: {
			readonly id: Compact<u32>;
			readonly admin: SeedPrimitivesSignatureAccountId20;
			readonly minBalance: u128;
		} & Struct;
		readonly isForceCreate: boolean;
		readonly asForceCreate: {
			readonly id: Compact<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly isSufficient: bool;
			readonly minBalance: Compact<u128>;
		} & Struct;
		readonly isDestroy: boolean;
		readonly asDestroy: {
			readonly id: Compact<u32>;
			readonly witness: PalletAssetsDestroyWitness;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly id: Compact<u32>;
			readonly beneficiary: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isBurn: boolean;
		readonly asBurn: {
			readonly id: Compact<u32>;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly id: Compact<u32>;
			readonly target: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransferKeepAlive: boolean;
		readonly asTransferKeepAlive: {
			readonly id: Compact<u32>;
			readonly target: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isForceTransfer: boolean;
		readonly asForceTransfer: {
			readonly id: Compact<u32>;
			readonly source: SeedPrimitivesSignatureAccountId20;
			readonly dest: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isFreeze: boolean;
		readonly asFreeze: {
			readonly id: Compact<u32>;
			readonly who: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isThaw: boolean;
		readonly asThaw: {
			readonly id: Compact<u32>;
			readonly who: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isFreezeAsset: boolean;
		readonly asFreezeAsset: {
			readonly id: Compact<u32>;
		} & Struct;
		readonly isThawAsset: boolean;
		readonly asThawAsset: {
			readonly id: Compact<u32>;
		} & Struct;
		readonly isTransferOwnership: boolean;
		readonly asTransferOwnership: {
			readonly id: Compact<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetTeam: boolean;
		readonly asSetTeam: {
			readonly id: Compact<u32>;
			readonly issuer: SeedPrimitivesSignatureAccountId20;
			readonly admin: SeedPrimitivesSignatureAccountId20;
			readonly freezer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetMetadata: boolean;
		readonly asSetMetadata: {
			readonly id: Compact<u32>;
			readonly name: Bytes;
			readonly symbol: Bytes;
			readonly decimals: u8;
		} & Struct;
		readonly isClearMetadata: boolean;
		readonly asClearMetadata: {
			readonly id: Compact<u32>;
		} & Struct;
		readonly isForceSetMetadata: boolean;
		readonly asForceSetMetadata: {
			readonly id: Compact<u32>;
			readonly name: Bytes;
			readonly symbol: Bytes;
			readonly decimals: u8;
			readonly isFrozen: bool;
		} & Struct;
		readonly isForceClearMetadata: boolean;
		readonly asForceClearMetadata: {
			readonly id: Compact<u32>;
		} & Struct;
		readonly isForceAssetStatus: boolean;
		readonly asForceAssetStatus: {
			readonly id: Compact<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly issuer: SeedPrimitivesSignatureAccountId20;
			readonly admin: SeedPrimitivesSignatureAccountId20;
			readonly freezer: SeedPrimitivesSignatureAccountId20;
			readonly minBalance: Compact<u128>;
			readonly isSufficient: bool;
			readonly isFrozen: bool;
		} & Struct;
		readonly isApproveTransfer: boolean;
		readonly asApproveTransfer: {
			readonly id: Compact<u32>;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isCancelApproval: boolean;
		readonly asCancelApproval: {
			readonly id: Compact<u32>;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isForceCancelApproval: boolean;
		readonly asForceCancelApproval: {
			readonly id: Compact<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isTransferApproved: boolean;
		readonly asTransferApproved: {
			readonly id: Compact<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly destination: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTouch: boolean;
		readonly asTouch: {
			readonly id: Compact<u32>;
		} & Struct;
		readonly isRefund: boolean;
		readonly asRefund: {
			readonly id: Compact<u32>;
			readonly allowBurn: bool;
		} & Struct;
		readonly type:
			| "Create"
			| "ForceCreate"
			| "Destroy"
			| "Mint"
			| "Burn"
			| "Transfer"
			| "TransferKeepAlive"
			| "ForceTransfer"
			| "Freeze"
			| "Thaw"
			| "FreezeAsset"
			| "ThawAsset"
			| "TransferOwnership"
			| "SetTeam"
			| "SetMetadata"
			| "ClearMetadata"
			| "ForceSetMetadata"
			| "ForceClearMetadata"
			| "ForceAssetStatus"
			| "ApproveTransfer"
			| "CancelApproval"
			| "ForceCancelApproval"
			| "TransferApproved"
			| "Touch"
			| "Refund";
	}

	/** @name PalletAssetsDestroyWitness (135) */
	interface PalletAssetsDestroyWitness extends Struct {
		readonly accounts: Compact<u32>;
		readonly sufficients: Compact<u32>;
		readonly approvals: Compact<u32>;
	}

	/** @name PalletAssetsExtCall (136) */
	interface PalletAssetsExtCall extends Enum {
		readonly isSetAssetDeposit: boolean;
		readonly asSetAssetDeposit: {
			readonly assetDeposit: u128;
		} & Struct;
		readonly isCreateAsset: boolean;
		readonly asCreateAsset: {
			readonly name: Bytes;
			readonly symbol: Bytes;
			readonly decimals: u8;
			readonly minBalance: Option<u128>;
			readonly owner: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly assetId: u32;
			readonly beneficiary: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly assetId: u32;
			readonly destination: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
			readonly keepAlive: bool;
		} & Struct;
		readonly isBurnFrom: boolean;
		readonly asBurnFrom: {
			readonly assetId: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: Compact<u128>;
		} & Struct;
		readonly type: "SetAssetDeposit" | "CreateAsset" | "Mint" | "Transfer" | "BurnFrom";
	}

	/** @name PalletAuthorshipCall (137) */
	interface PalletAuthorshipCall extends Enum {
		readonly isSetUncles: boolean;
		readonly asSetUncles: {
			readonly newUncles: Vec<SpRuntimeHeader>;
		} & Struct;
		readonly type: "SetUncles";
	}

	/** @name PalletStakingPalletCall (139) */
	interface PalletStakingPalletCall extends Enum {
		readonly isBond: boolean;
		readonly asBond: {
			readonly controller: SeedPrimitivesSignatureAccountId20;
			readonly value: Compact<u128>;
			readonly payee: PalletStakingRewardDestination;
		} & Struct;
		readonly isBondExtra: boolean;
		readonly asBondExtra: {
			readonly maxAdditional: Compact<u128>;
		} & Struct;
		readonly isUnbond: boolean;
		readonly asUnbond: {
			readonly value: Compact<u128>;
		} & Struct;
		readonly isWithdrawUnbonded: boolean;
		readonly asWithdrawUnbonded: {
			readonly numSlashingSpans: u32;
		} & Struct;
		readonly isValidate: boolean;
		readonly asValidate: {
			readonly prefs: PalletStakingValidatorPrefs;
		} & Struct;
		readonly isNominate: boolean;
		readonly asNominate: {
			readonly targets: Vec<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isChill: boolean;
		readonly isSetPayee: boolean;
		readonly asSetPayee: {
			readonly payee: PalletStakingRewardDestination;
		} & Struct;
		readonly isSetController: boolean;
		readonly asSetController: {
			readonly controller: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetValidatorCount: boolean;
		readonly asSetValidatorCount: {
			readonly new_: Compact<u32>;
		} & Struct;
		readonly isIncreaseValidatorCount: boolean;
		readonly asIncreaseValidatorCount: {
			readonly additional: Compact<u32>;
		} & Struct;
		readonly isScaleValidatorCount: boolean;
		readonly asScaleValidatorCount: {
			readonly factor: Percent;
		} & Struct;
		readonly isForceNoEras: boolean;
		readonly isForceNewEra: boolean;
		readonly isSetInvulnerables: boolean;
		readonly asSetInvulnerables: {
			readonly invulnerables: Vec<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isForceUnstake: boolean;
		readonly asForceUnstake: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly numSlashingSpans: u32;
		} & Struct;
		readonly isForceNewEraAlways: boolean;
		readonly isCancelDeferredSlash: boolean;
		readonly asCancelDeferredSlash: {
			readonly era: u32;
			readonly slashIndices: Vec<u32>;
		} & Struct;
		readonly isPayoutStakers: boolean;
		readonly asPayoutStakers: {
			readonly validatorStash: SeedPrimitivesSignatureAccountId20;
			readonly era: u32;
		} & Struct;
		readonly isRebond: boolean;
		readonly asRebond: {
			readonly value: Compact<u128>;
		} & Struct;
		readonly isReapStash: boolean;
		readonly asReapStash: {
			readonly stash: SeedPrimitivesSignatureAccountId20;
			readonly numSlashingSpans: u32;
		} & Struct;
		readonly isKick: boolean;
		readonly asKick: {
			readonly who: Vec<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isSetStakingConfigs: boolean;
		readonly asSetStakingConfigs: {
			readonly minNominatorBond: PalletStakingPalletConfigOpU128;
			readonly minValidatorBond: PalletStakingPalletConfigOpU128;
			readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
			readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
			readonly chillThreshold: PalletStakingPalletConfigOpPercent;
			readonly minCommission: PalletStakingPalletConfigOpPerbill;
		} & Struct;
		readonly isChillOther: boolean;
		readonly asChillOther: {
			readonly controller: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isForceApplyMinCommission: boolean;
		readonly asForceApplyMinCommission: {
			readonly validatorStash: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type:
			| "Bond"
			| "BondExtra"
			| "Unbond"
			| "WithdrawUnbonded"
			| "Validate"
			| "Nominate"
			| "Chill"
			| "SetPayee"
			| "SetController"
			| "SetValidatorCount"
			| "IncreaseValidatorCount"
			| "ScaleValidatorCount"
			| "ForceNoEras"
			| "ForceNewEra"
			| "SetInvulnerables"
			| "ForceUnstake"
			| "ForceNewEraAlways"
			| "CancelDeferredSlash"
			| "PayoutStakers"
			| "Rebond"
			| "ReapStash"
			| "Kick"
			| "SetStakingConfigs"
			| "ChillOther"
			| "ForceApplyMinCommission";
	}

	/** @name PalletStakingRewardDestination (140) */
	interface PalletStakingRewardDestination extends Enum {
		readonly isStaked: boolean;
		readonly isStash: boolean;
		readonly isController: boolean;
		readonly isAccount: boolean;
		readonly asAccount: SeedPrimitivesSignatureAccountId20;
		readonly isNone: boolean;
		readonly type: "Staked" | "Stash" | "Controller" | "Account" | "None";
	}

	/** @name PalletStakingPalletConfigOpU128 (142) */
	interface PalletStakingPalletConfigOpU128 extends Enum {
		readonly isNoop: boolean;
		readonly isSet: boolean;
		readonly asSet: u128;
		readonly isRemove: boolean;
		readonly type: "Noop" | "Set" | "Remove";
	}

	/** @name PalletStakingPalletConfigOpU32 (143) */
	interface PalletStakingPalletConfigOpU32 extends Enum {
		readonly isNoop: boolean;
		readonly isSet: boolean;
		readonly asSet: u32;
		readonly isRemove: boolean;
		readonly type: "Noop" | "Set" | "Remove";
	}

	/** @name PalletStakingPalletConfigOpPercent (144) */
	interface PalletStakingPalletConfigOpPercent extends Enum {
		readonly isNoop: boolean;
		readonly isSet: boolean;
		readonly asSet: Percent;
		readonly isRemove: boolean;
		readonly type: "Noop" | "Set" | "Remove";
	}

	/** @name PalletStakingPalletConfigOpPerbill (145) */
	interface PalletStakingPalletConfigOpPerbill extends Enum {
		readonly isNoop: boolean;
		readonly isSet: boolean;
		readonly asSet: Perbill;
		readonly isRemove: boolean;
		readonly type: "Noop" | "Set" | "Remove";
	}

	/** @name PalletSessionCall (146) */
	interface PalletSessionCall extends Enum {
		readonly isSetKeys: boolean;
		readonly asSetKeys: {
			readonly keys_: SeedRuntimeSessionKeys;
			readonly proof: Bytes;
		} & Struct;
		readonly isPurgeKeys: boolean;
		readonly type: "SetKeys" | "PurgeKeys";
	}

	/** @name SeedRuntimeSessionKeys (147) */
	interface SeedRuntimeSessionKeys extends Struct {
		readonly babe: SpConsensusBabeAppPublic;
		readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
		readonly grandpa: SpFinalityGrandpaAppPublic;
		readonly ethy: SeedPrimitivesEthyCryptoAppCryptoPublic;
	}

	/** @name SeedPrimitivesEthyCryptoAppCryptoPublic (148) */
	interface SeedPrimitivesEthyCryptoAppCryptoPublic extends SpCoreEcdsaPublic {}

	/** @name SpCoreEcdsaPublic (149) */
	interface SpCoreEcdsaPublic extends U8aFixed {}

	/** @name PalletGrandpaCall (150) */
	interface PalletGrandpaCall extends Enum {
		readonly isReportEquivocation: boolean;
		readonly asReportEquivocation: {
			readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
			readonly keyOwnerProof: SpCoreVoid;
		} & Struct;
		readonly isReportEquivocationUnsigned: boolean;
		readonly asReportEquivocationUnsigned: {
			readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
			readonly keyOwnerProof: SpCoreVoid;
		} & Struct;
		readonly isNoteStalled: boolean;
		readonly asNoteStalled: {
			readonly delay: u32;
			readonly bestFinalizedBlockNumber: u32;
		} & Struct;
		readonly type: "ReportEquivocation" | "ReportEquivocationUnsigned" | "NoteStalled";
	}

	/** @name SpFinalityGrandpaEquivocationProof (151) */
	interface SpFinalityGrandpaEquivocationProof extends Struct {
		readonly setId: u64;
		readonly equivocation: SpFinalityGrandpaEquivocation;
	}

	/** @name SpFinalityGrandpaEquivocation (152) */
	interface SpFinalityGrandpaEquivocation extends Enum {
		readonly isPrevote: boolean;
		readonly asPrevote: FinalityGrandpaEquivocationPrevote;
		readonly isPrecommit: boolean;
		readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
		readonly type: "Prevote" | "Precommit";
	}

	/** @name FinalityGrandpaEquivocationPrevote (153) */
	interface FinalityGrandpaEquivocationPrevote extends Struct {
		readonly roundNumber: u64;
		readonly identity: SpFinalityGrandpaAppPublic;
		readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
		readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
	}

	/** @name FinalityGrandpaPrevote (154) */
	interface FinalityGrandpaPrevote extends Struct {
		readonly targetHash: H256;
		readonly targetNumber: u32;
	}

	/** @name SpFinalityGrandpaAppSignature (155) */
	interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

	/** @name SpCoreEd25519Signature (156) */
	interface SpCoreEd25519Signature extends U8aFixed {}

	/** @name FinalityGrandpaEquivocationPrecommit (158) */
	interface FinalityGrandpaEquivocationPrecommit extends Struct {
		readonly roundNumber: u64;
		readonly identity: SpFinalityGrandpaAppPublic;
		readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
		readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
	}

	/** @name FinalityGrandpaPrecommit (159) */
	interface FinalityGrandpaPrecommit extends Struct {
		readonly targetHash: H256;
		readonly targetNumber: u32;
	}

	/** @name PalletImOnlineCall (161) */
	interface PalletImOnlineCall extends Enum {
		readonly isHeartbeat: boolean;
		readonly asHeartbeat: {
			readonly heartbeat: PalletImOnlineHeartbeat;
			readonly signature: PalletImOnlineSr25519AppSr25519Signature;
		} & Struct;
		readonly type: "Heartbeat";
	}

	/** @name PalletImOnlineHeartbeat (162) */
	interface PalletImOnlineHeartbeat extends Struct {
		readonly blockNumber: u32;
		readonly networkState: SpCoreOffchainOpaqueNetworkState;
		readonly sessionIndex: u32;
		readonly authorityIndex: u32;
		readonly validatorsLen: u32;
	}

	/** @name SpCoreOffchainOpaqueNetworkState (163) */
	interface SpCoreOffchainOpaqueNetworkState extends Struct {
		readonly peerId: OpaquePeerId;
		readonly externalAddresses: Vec<OpaqueMultiaddr>;
	}

	/** @name PalletImOnlineSr25519AppSr25519Signature (167) */
	interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

	/** @name SpCoreSr25519Signature (168) */
	interface SpCoreSr25519Signature extends U8aFixed {}

	/** @name PalletSudoCall (169) */
	interface PalletSudoCall extends Enum {
		readonly isSudo: boolean;
		readonly asSudo: {
			readonly call: Call;
		} & Struct;
		readonly isSudoUncheckedWeight: boolean;
		readonly asSudoUncheckedWeight: {
			readonly call: Call;
			readonly weight: WeightV1;
		} & Struct;
		readonly isSetKey: boolean;
		readonly asSetKey: {
			readonly new_: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSudoAs: boolean;
		readonly asSudoAs: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly call: Call;
		} & Struct;
		readonly type: "Sudo" | "SudoUncheckedWeight" | "SetKey" | "SudoAs";
	}

	/** @name PalletDexCall (170) */
	interface PalletDexCall extends Enum {
		readonly isSetFeeTo: boolean;
		readonly asSetFeeTo: {
			readonly feeTo: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isSwapWithExactSupply: boolean;
		readonly asSwapWithExactSupply: {
			readonly amountIn: Compact<u128>;
			readonly amountOutMin: Compact<u128>;
			readonly path: Vec<u32>;
			readonly to: Option<SeedPrimitivesSignatureAccountId20>;
			readonly deadline: Option<u32>;
		} & Struct;
		readonly isSwapWithExactTarget: boolean;
		readonly asSwapWithExactTarget: {
			readonly amountOut: Compact<u128>;
			readonly amountInMax: Compact<u128>;
			readonly path: Vec<u32>;
			readonly to: Option<SeedPrimitivesSignatureAccountId20>;
			readonly deadline: Option<u32>;
		} & Struct;
		readonly isAddLiquidity: boolean;
		readonly asAddLiquidity: {
			readonly tokenA: u32;
			readonly tokenB: u32;
			readonly amountADesired: Compact<u128>;
			readonly amountBDesired: Compact<u128>;
			readonly amountAMin: Compact<u128>;
			readonly amountBMin: Compact<u128>;
			readonly to: Option<SeedPrimitivesSignatureAccountId20>;
			readonly deadline: Option<u32>;
		} & Struct;
		readonly isRemoveLiquidity: boolean;
		readonly asRemoveLiquidity: {
			readonly tokenA: u32;
			readonly tokenB: u32;
			readonly liquidity: Compact<u128>;
			readonly amountAMin: Compact<u128>;
			readonly amountBMin: Compact<u128>;
			readonly to: Option<SeedPrimitivesSignatureAccountId20>;
			readonly deadline: Option<u32>;
		} & Struct;
		readonly isReenableTradingPair: boolean;
		readonly asReenableTradingPair: {
			readonly tokenA: u32;
			readonly tokenB: u32;
		} & Struct;
		readonly isDisableTradingPair: boolean;
		readonly asDisableTradingPair: {
			readonly tokenA: u32;
			readonly tokenB: u32;
		} & Struct;
		readonly type:
			| "SetFeeTo"
			| "SwapWithExactSupply"
			| "SwapWithExactTarget"
			| "AddLiquidity"
			| "RemoveLiquidity"
			| "ReenableTradingPair"
			| "DisableTradingPair";
	}

	/** @name PalletNftCall (171) */
	interface PalletNftCall extends Enum {
		readonly isClaimUnownedCollection: boolean;
		readonly asClaimUnownedCollection: {
			readonly collectionId: u32;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetOwner: boolean;
		readonly asSetOwner: {
			readonly collectionId: u32;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetMaxIssuance: boolean;
		readonly asSetMaxIssuance: {
			readonly collectionId: u32;
			readonly maxIssuance: u32;
		} & Struct;
		readonly isSetBaseUri: boolean;
		readonly asSetBaseUri: {
			readonly collectionId: u32;
			readonly baseUri: Bytes;
		} & Struct;
		readonly isCreateCollection: boolean;
		readonly asCreateCollection: {
			readonly name: Bytes;
			readonly initialIssuance: u32;
			readonly maxIssuance: Option<u32>;
			readonly tokenOwner: Option<SeedPrimitivesSignatureAccountId20>;
			readonly metadataScheme: Bytes;
			readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
			readonly crossChainCompatibility: PalletNftCrossChainCompatibility;
		} & Struct;
		readonly isTogglePublicMint: boolean;
		readonly asTogglePublicMint: {
			readonly collectionId: u32;
			readonly enabled: bool;
		} & Struct;
		readonly isSetMintFee: boolean;
		readonly asSetMintFee: {
			readonly collectionId: u32;
			readonly pricingDetails: Option<ITuple<[u32, u128]>>;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly collectionId: u32;
			readonly quantity: u32;
			readonly tokenOwner: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isBurn: boolean;
		readonly asBurn: {
			readonly tokenId: ITuple<[u32, u32]>;
		} & Struct;
		readonly isSetName: boolean;
		readonly asSetName: {
			readonly collectionId: u32;
			readonly name: Bytes;
		} & Struct;
		readonly isSetRoyaltiesSchedule: boolean;
		readonly asSetRoyaltiesSchedule: {
			readonly collectionId: u32;
			readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		} & Struct;
		readonly type:
			| "ClaimUnownedCollection"
			| "SetOwner"
			| "SetMaxIssuance"
			| "SetBaseUri"
			| "CreateCollection"
			| "TogglePublicMint"
			| "SetMintFee"
			| "Mint"
			| "Transfer"
			| "Burn"
			| "SetName"
			| "SetRoyaltiesSchedule";
	}

	/** @name PalletSftCall (174) */
	interface PalletSftCall extends Enum {
		readonly isCreateCollection: boolean;
		readonly asCreateCollection: {
			readonly collectionName: Bytes;
			readonly collectionOwner: Option<SeedPrimitivesSignatureAccountId20>;
			readonly metadataScheme: Bytes;
			readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
		} & Struct;
		readonly isCreateToken: boolean;
		readonly asCreateToken: {
			readonly collectionId: u32;
			readonly tokenName: Bytes;
			readonly initialIssuance: u128;
			readonly maxIssuance: Option<u128>;
			readonly tokenOwner: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isMint: boolean;
		readonly asMint: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<ITuple<[u32, u128]>>;
			readonly tokenOwner: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isTransfer: boolean;
		readonly asTransfer: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<ITuple<[u32, u128]>>;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isBurn: boolean;
		readonly asBurn: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<ITuple<[u32, u128]>>;
		} & Struct;
		readonly isSetOwner: boolean;
		readonly asSetOwner: {
			readonly collectionId: u32;
			readonly newOwner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetMaxIssuance: boolean;
		readonly asSetMaxIssuance: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly maxIssuance: u128;
		} & Struct;
		readonly isSetBaseUri: boolean;
		readonly asSetBaseUri: {
			readonly collectionId: u32;
			readonly metadataScheme: Bytes;
		} & Struct;
		readonly isSetName: boolean;
		readonly asSetName: {
			readonly collectionId: u32;
			readonly collectionName: Bytes;
		} & Struct;
		readonly isSetRoyaltiesSchedule: boolean;
		readonly asSetRoyaltiesSchedule: {
			readonly collectionId: u32;
			readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		} & Struct;
		readonly isTogglePublicMint: boolean;
		readonly asTogglePublicMint: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly enabled: bool;
		} & Struct;
		readonly isSetMintFee: boolean;
		readonly asSetMintFee: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly pricingDetails: Option<ITuple<[u32, u128]>>;
		} & Struct;
		readonly type:
			| "CreateCollection"
			| "CreateToken"
			| "Mint"
			| "Transfer"
			| "Burn"
			| "SetOwner"
			| "SetMaxIssuance"
			| "SetBaseUri"
			| "SetName"
			| "SetRoyaltiesSchedule"
			| "TogglePublicMint"
			| "SetMintFee";
	}

	/** @name PalletXrplBridgeCall (177) */
	interface PalletXrplBridgeCall extends Enum {
		readonly isSubmitTransaction: boolean;
		readonly asSubmitTransaction: {
			readonly ledgerIndex: u64;
			readonly transactionHash: H512;
			readonly transaction: PalletXrplBridgeXrplTxData;
			readonly timestamp: u64;
		} & Struct;
		readonly isSubmitChallenge: boolean;
		readonly asSubmitChallenge: {
			readonly transactionHash: H512;
		} & Struct;
		readonly isSetPaymentDelay: boolean;
		readonly asSetPaymentDelay: {
			readonly paymentDelay: Option<ITuple<[u128, u32]>>;
		} & Struct;
		readonly isWithdrawXrp: boolean;
		readonly asWithdrawXrp: {
			readonly amount: u128;
			readonly destination: H160;
		} & Struct;
		readonly isWithdrawXrpWithDestinationTag: boolean;
		readonly asWithdrawXrpWithDestinationTag: {
			readonly amount: u128;
			readonly destination: H160;
			readonly destinationTag: u32;
		} & Struct;
		readonly isAddRelayer: boolean;
		readonly asAddRelayer: {
			readonly relayer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRemoveRelayer: boolean;
		readonly asRemoveRelayer: {
			readonly relayer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetDoorTxFee: boolean;
		readonly asSetDoorTxFee: {
			readonly fee: u64;
		} & Struct;
		readonly isSetXrpSourceTag: boolean;
		readonly asSetXrpSourceTag: {
			readonly sourceTag: u32;
		} & Struct;
		readonly isSetDoorAddress: boolean;
		readonly asSetDoorAddress: {
			readonly doorAddress: H160;
		} & Struct;
		readonly isSetTicketSequenceNextAllocation: boolean;
		readonly asSetTicketSequenceNextAllocation: {
			readonly startTicketSequence: u32;
			readonly ticketBucketSize: u32;
		} & Struct;
		readonly isSetTicketSequenceCurrentAllocation: boolean;
		readonly asSetTicketSequenceCurrentAllocation: {
			readonly ticketSequence: u32;
			readonly startTicketSequence: u32;
			readonly ticketBucketSize: u32;
		} & Struct;
		readonly isResetSettledXrplTxData: boolean;
		readonly asResetSettledXrplTxData: {
			readonly highestSettledLedgerIndex: u32;
			readonly submissionWindowWidth: u32;
			readonly highestPrunedLedgerIndex: Option<u32>;
			readonly settledTxData: Option<
				Vec<ITuple<[H512, u32, PalletXrplBridgeXrpTransaction, SeedPrimitivesSignatureAccountId20]>>
			>;
		} & Struct;
		readonly isPruneSettledLedgerIndex: boolean;
		readonly asPruneSettledLedgerIndex: {
			readonly ledgerIndex: u32;
		} & Struct;
		readonly type:
			| "SubmitTransaction"
			| "SubmitChallenge"
			| "SetPaymentDelay"
			| "WithdrawXrp"
			| "WithdrawXrpWithDestinationTag"
			| "AddRelayer"
			| "RemoveRelayer"
			| "SetDoorTxFee"
			| "SetXrpSourceTag"
			| "SetDoorAddress"
			| "SetTicketSequenceNextAllocation"
			| "SetTicketSequenceCurrentAllocation"
			| "ResetSettledXrplTxData"
			| "PruneSettledLedgerIndex";
	}

	/** @name PalletXrplBridgeXrplTxData (178) */
	interface PalletXrplBridgeXrplTxData extends Enum {
		readonly isPayment: boolean;
		readonly asPayment: {
			readonly amount: u128;
			readonly address: H160;
		} & Struct;
		readonly isCurrencyPayment: boolean;
		readonly asCurrencyPayment: {
			readonly amount: u128;
			readonly address: H160;
			readonly currencyId: H256;
		} & Struct;
		readonly isXls20: boolean;
		readonly type: "Payment" | "CurrencyPayment" | "Xls20";
	}

	/** @name PalletXrplBridgeXrpTransaction (184) */
	interface PalletXrplBridgeXrpTransaction extends Struct {
		readonly transactionHash: H512;
		readonly transaction: PalletXrplBridgeXrplTxData;
		readonly timestamp: u64;
	}

	/** @name PalletXrplCall (185) */
	interface PalletXrplCall extends Enum {
		readonly isTransact: boolean;
		readonly asTransact: {
			readonly encodedMsg: Bytes;
			readonly signature: Bytes;
			readonly call: Call;
		} & Struct;
		readonly type: "Transact";
	}

	/** @name PalletTokenApprovalsCall (188) */
	interface PalletTokenApprovalsCall extends Enum {
		readonly isErc721Approval: boolean;
		readonly asErc721Approval: {
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly operatorAccount: SeedPrimitivesSignatureAccountId20;
			readonly tokenId: ITuple<[u32, u32]>;
		} & Struct;
		readonly isErc721RemoveApproval: boolean;
		readonly asErc721RemoveApproval: {
			readonly tokenId: ITuple<[u32, u32]>;
		} & Struct;
		readonly isErc20Approval: boolean;
		readonly asErc20Approval: {
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly spender: SeedPrimitivesSignatureAccountId20;
			readonly assetId: u32;
			readonly amount: u128;
		} & Struct;
		readonly isErc20UpdateApproval: boolean;
		readonly asErc20UpdateApproval: {
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly spender: SeedPrimitivesSignatureAccountId20;
			readonly assetId: u32;
			readonly amount: u128;
		} & Struct;
		readonly isErc721ApprovalForAll: boolean;
		readonly asErc721ApprovalForAll: {
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly operatorAccount: SeedPrimitivesSignatureAccountId20;
			readonly collectionUuid: u32;
			readonly approved: bool;
		} & Struct;
		readonly isErc1155ApprovalForAll: boolean;
		readonly asErc1155ApprovalForAll: {
			readonly caller: SeedPrimitivesSignatureAccountId20;
			readonly operatorAccount: SeedPrimitivesSignatureAccountId20;
			readonly collectionUuid: u32;
			readonly approved: bool;
		} & Struct;
		readonly type:
			| "Erc721Approval"
			| "Erc721RemoveApproval"
			| "Erc20Approval"
			| "Erc20UpdateApproval"
			| "Erc721ApprovalForAll"
			| "Erc1155ApprovalForAll";
	}

	/** @name PalletEchoCall (189) */
	interface PalletEchoCall extends Enum {
		readonly isPing: boolean;
		readonly asPing: {
			readonly destination: H160;
		} & Struct;
		readonly type: "Ping";
	}

	/** @name PalletMarketplaceCall (190) */
	interface PalletMarketplaceCall extends Enum {
		readonly isRegisterMarketplace: boolean;
		readonly asRegisterMarketplace: {
			readonly marketplaceAccount: Option<SeedPrimitivesSignatureAccountId20>;
			readonly entitlement: Permill;
		} & Struct;
		readonly isSellNft: boolean;
		readonly asSellNft: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly buyer: Option<SeedPrimitivesSignatureAccountId20>;
			readonly paymentAsset: u32;
			readonly fixedPrice: u128;
			readonly duration: Option<u32>;
			readonly marketplaceId: Option<u32>;
		} & Struct;
		readonly isSell: boolean;
		readonly asSell: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly buyer: Option<SeedPrimitivesSignatureAccountId20>;
			readonly paymentAsset: u32;
			readonly fixedPrice: u128;
			readonly duration: Option<u32>;
			readonly marketplaceId: Option<u32>;
		} & Struct;
		readonly isUpdateFixedPrice: boolean;
		readonly asUpdateFixedPrice: {
			readonly listingId: u128;
			readonly newPrice: u128;
		} & Struct;
		readonly isBuy: boolean;
		readonly asBuy: {
			readonly listingId: u128;
		} & Struct;
		readonly isBuyMulti: boolean;
		readonly asBuyMulti: {
			readonly listingIds: Vec<u128>;
		} & Struct;
		readonly isAuctionNft: boolean;
		readonly asAuctionNft: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly paymentAsset: u32;
			readonly reservePrice: u128;
			readonly duration: Option<u32>;
			readonly marketplaceId: Option<u32>;
		} & Struct;
		readonly isAuction: boolean;
		readonly asAuction: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly paymentAsset: u32;
			readonly reservePrice: u128;
			readonly duration: Option<u32>;
			readonly marketplaceId: Option<u32>;
		} & Struct;
		readonly isBid: boolean;
		readonly asBid: {
			readonly listingId: u128;
			readonly amount: u128;
		} & Struct;
		readonly isCancelSale: boolean;
		readonly asCancelSale: {
			readonly listingId: u128;
		} & Struct;
		readonly isMakeSimpleOffer: boolean;
		readonly asMakeSimpleOffer: {
			readonly tokenId: ITuple<[u32, u32]>;
			readonly amount: u128;
			readonly assetId: u32;
			readonly marketplaceId: Option<u32>;
		} & Struct;
		readonly isCancelOffer: boolean;
		readonly asCancelOffer: {
			readonly offerId: u64;
		} & Struct;
		readonly isAcceptOffer: boolean;
		readonly asAcceptOffer: {
			readonly offerId: u64;
		} & Struct;
		readonly isSetFeeTo: boolean;
		readonly asSetFeeTo: {
			readonly feeTo: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly type:
			| "RegisterMarketplace"
			| "SellNft"
			| "Sell"
			| "UpdateFixedPrice"
			| "Buy"
			| "BuyMulti"
			| "AuctionNft"
			| "Auction"
			| "Bid"
			| "CancelSale"
			| "MakeSimpleOffer"
			| "CancelOffer"
			| "AcceptOffer"
			| "SetFeeTo";
	}

	/** @name PalletMarketplaceListingTokens (192) */
	interface PalletMarketplaceListingTokens extends Enum {
		readonly isNft: boolean;
		readonly asNft: PalletMarketplaceNftListing;
		readonly isSft: boolean;
		readonly asSft: PalletMarketplaceSftListing;
		readonly type: "Nft" | "Sft";
	}

	/** @name PalletMarketplaceNftListing (193) */
	interface PalletMarketplaceNftListing extends Struct {
		readonly collectionId: u32;
		readonly serialNumbers: Vec<u32>;
	}

	/** @name PalletMarketplaceSftListing (194) */
	interface PalletMarketplaceSftListing extends Struct {
		readonly collectionId: u32;
		readonly serialNumbers: Vec<ITuple<[u32, u128]>>;
	}

	/** @name PalletPreimageCall (197) */
	interface PalletPreimageCall extends Enum {
		readonly isNotePreimage: boolean;
		readonly asNotePreimage: {
			readonly bytes: Bytes;
		} & Struct;
		readonly isUnnotePreimage: boolean;
		readonly asUnnotePreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly isRequestPreimage: boolean;
		readonly asRequestPreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly isUnrequestPreimage: boolean;
		readonly asUnrequestPreimage: {
			readonly hash_: H256;
		} & Struct;
		readonly type: "NotePreimage" | "UnnotePreimage" | "RequestPreimage" | "UnrequestPreimage";
	}

	/** @name PalletVortexCall (198) */
	interface PalletVortexCall extends Enum {
		readonly isSetAdmin: boolean;
		readonly asSetAdmin: {
			readonly new_: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isCreateVtxDist: boolean;
		readonly isDisableVtxDist: boolean;
		readonly asDisableVtxDist: {
			readonly id: u32;
		} & Struct;
		readonly isStartVtxDist: boolean;
		readonly asStartVtxDist: {
			readonly id: u32;
		} & Struct;
		readonly isPayUnsigned: boolean;
		readonly asPayUnsigned: {
			readonly id: u32;
			readonly currentBlock: u32;
		} & Struct;
		readonly isSetVtxDistEras: boolean;
		readonly asSetVtxDistEras: {
			readonly id: u32;
			readonly startEra: u32;
			readonly endEra: u32;
		} & Struct;
		readonly isSetAssetPrices: boolean;
		readonly asSetAssetPrices: {
			readonly assetPrices: Vec<ITuple<[u32, u128]>>;
			readonly id: u32;
		} & Struct;
		readonly isRegisterRewards: boolean;
		readonly asRegisterRewards: {
			readonly id: u32;
			readonly rewards: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
		} & Struct;
		readonly isTriggerVtxDistribution: boolean;
		readonly asTriggerVtxDistribution: {
			readonly id: u32;
		} & Struct;
		readonly isRedeemTokensFromVault: boolean;
		readonly asRedeemTokensFromVault: {
			readonly id: u32;
			readonly vortexTokenAmount: u128;
		} & Struct;
		readonly type:
			| "SetAdmin"
			| "CreateVtxDist"
			| "DisableVtxDist"
			| "StartVtxDist"
			| "PayUnsigned"
			| "SetVtxDistEras"
			| "SetAssetPrices"
			| "RegisterRewards"
			| "TriggerVtxDistribution"
			| "RedeemTokensFromVault";
	}

	/** @name PalletFeeProxyCall (201) */
	interface PalletFeeProxyCall extends Enum {
		readonly isCallWithFeePreferences: boolean;
		readonly asCallWithFeePreferences: {
			readonly paymentAsset: u32;
			readonly maxPayment: u128;
			readonly call: Call;
		} & Struct;
		readonly type: "CallWithFeePreferences";
	}

	/** @name PalletFeeControlCall (202) */
	interface PalletFeeControlCall extends Enum {
		readonly isSetEvmBaseFee: boolean;
		readonly asSetEvmBaseFee: {
			readonly value: U256;
		} & Struct;
		readonly isSetWeightMultiplier: boolean;
		readonly asSetWeightMultiplier: {
			readonly value: Perbill;
		} & Struct;
		readonly isSetLengthMultiplier: boolean;
		readonly asSetLengthMultiplier: {
			readonly value: u128;
		} & Struct;
		readonly type: "SetEvmBaseFee" | "SetWeightMultiplier" | "SetLengthMultiplier";
	}

	/** @name PalletXls20Call (205) */
	interface PalletXls20Call extends Enum {
		readonly isSetRelayer: boolean;
		readonly asSetRelayer: {
			readonly relayer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isSetXls20Fee: boolean;
		readonly asSetXls20Fee: {
			readonly newFee: u128;
		} & Struct;
		readonly isEnableXls20Compatibility: boolean;
		readonly asEnableXls20Compatibility: {
			readonly collectionId: u32;
		} & Struct;
		readonly isReRequestXls20Mint: boolean;
		readonly asReRequestXls20Mint: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
		} & Struct;
		readonly isFulfillXls20Mint: boolean;
		readonly asFulfillXls20Mint: {
			readonly collectionId: u32;
			readonly tokenMappings: Vec<ITuple<[u32, U8aFixed]>>;
		} & Struct;
		readonly type:
			| "SetRelayer"
			| "SetXls20Fee"
			| "EnableXls20Compatibility"
			| "ReRequestXls20Mint"
			| "FulfillXls20Mint";
	}

	/** @name PalletDoughnutCall (210) */
	interface PalletDoughnutCall extends Enum {
		readonly isTransact: boolean;
		readonly asTransact: {
			readonly call: Call;
			readonly doughnut: Bytes;
			readonly nonce: u32;
			readonly genesisHash: H256;
			readonly tip: u64;
			readonly signature: Bytes;
		} & Struct;
		readonly isRevokeDoughnut: boolean;
		readonly asRevokeDoughnut: {
			readonly doughnut: Bytes;
			readonly revoke: bool;
		} & Struct;
		readonly isRevokeHolder: boolean;
		readonly asRevokeHolder: {
			readonly holder: SeedPrimitivesSignatureAccountId20;
			readonly revoke: bool;
		} & Struct;
		readonly isUpdateWhitelistedHolders: boolean;
		readonly asUpdateWhitelistedHolders: {
			readonly holder: SeedPrimitivesSignatureAccountId20;
			readonly add: bool;
		} & Struct;
		readonly type: "Transact" | "RevokeDoughnut" | "RevokeHolder" | "UpdateWhitelistedHolders";
	}

	/** @name PalletMaintenanceModeCall (211) */
	interface PalletMaintenanceModeCall extends Enum {
		readonly isEnableMaintenanceMode: boolean;
		readonly asEnableMaintenanceMode: {
			readonly enabled: bool;
		} & Struct;
		readonly isBlockAccount: boolean;
		readonly asBlockAccount: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly blocked: bool;
		} & Struct;
		readonly isBlockEvmTarget: boolean;
		readonly asBlockEvmTarget: {
			readonly targetAddress: H160;
			readonly blocked: bool;
		} & Struct;
		readonly isBlockCall: boolean;
		readonly asBlockCall: {
			readonly palletName: Bytes;
			readonly callName: Bytes;
			readonly blocked: bool;
		} & Struct;
		readonly isBlockPallet: boolean;
		readonly asBlockPallet: {
			readonly palletName: Bytes;
			readonly blocked: bool;
		} & Struct;
		readonly type:
			| "EnableMaintenanceMode"
			| "BlockAccount"
			| "BlockEvmTarget"
			| "BlockCall"
			| "BlockPallet";
	}

	/** @name PalletCrowdsaleCall (213) */
	interface PalletCrowdsaleCall extends Enum {
		readonly isInitialize: boolean;
		readonly asInitialize: {
			readonly paymentAssetId: u32;
			readonly collectionId: u32;
			readonly softCapPrice: u128;
			readonly saleDuration: u32;
			readonly voucherName: Option<Bytes>;
			readonly voucherSymbol: Option<Bytes>;
		} & Struct;
		readonly isEnable: boolean;
		readonly asEnable: {
			readonly saleId: u64;
		} & Struct;
		readonly isParticipate: boolean;
		readonly asParticipate: {
			readonly saleId: u64;
			readonly amount: u128;
		} & Struct;
		readonly isDistributeCrowdsaleRewards: boolean;
		readonly isClaimVoucher: boolean;
		readonly asClaimVoucher: {
			readonly saleId: u64;
		} & Struct;
		readonly isRedeemVoucher: boolean;
		readonly asRedeemVoucher: {
			readonly saleId: u64;
			readonly quantity: u32;
		} & Struct;
		readonly isProxyVaultCall: boolean;
		readonly asProxyVaultCall: {
			readonly saleId: u64;
			readonly call: Call;
		} & Struct;
		readonly isTryForceDistribution: boolean;
		readonly asTryForceDistribution: {
			readonly saleId: u64;
		} & Struct;
		readonly type:
			| "Initialize"
			| "Enable"
			| "Participate"
			| "DistributeCrowdsaleRewards"
			| "ClaimVoucher"
			| "RedeemVoucher"
			| "ProxyVaultCall"
			| "TryForceDistribution";
	}

	/** @name PalletElectionProviderMultiPhaseCall (215) */
	interface PalletElectionProviderMultiPhaseCall extends Enum {
		readonly isSubmitUnsigned: boolean;
		readonly asSubmitUnsigned: {
			readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
			readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
		} & Struct;
		readonly isSetMinimumUntrustedScore: boolean;
		readonly asSetMinimumUntrustedScore: {
			readonly maybeNextScore: Option<SpNposElectionsElectionScore>;
		} & Struct;
		readonly isSetEmergencyElectionResult: boolean;
		readonly asSetEmergencyElectionResult: {
			readonly supports: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SpNposElectionsSupport]>>;
		} & Struct;
		readonly isSubmit: boolean;
		readonly asSubmit: {
			readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
		} & Struct;
		readonly isGovernanceFallback: boolean;
		readonly asGovernanceFallback: {
			readonly maybeMaxVoters: Option<u32>;
			readonly maybeMaxTargets: Option<u32>;
		} & Struct;
		readonly type:
			| "SubmitUnsigned"
			| "SetMinimumUntrustedScore"
			| "SetEmergencyElectionResult"
			| "Submit"
			| "GovernanceFallback";
	}

	/** @name PalletElectionProviderMultiPhaseRawSolution (216) */
	interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
		readonly solution: SeedRuntimeNposCompactSolution16;
		readonly score: SpNposElectionsElectionScore;
		readonly round: u32;
	}

	/** @name SeedRuntimeNposCompactSolution16 (217) */
	interface SeedRuntimeNposCompactSolution16 extends Struct {
		readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
		readonly votes2: Vec<
			ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>
		>;
		readonly votes3: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes4: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes5: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes6: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes7: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes8: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes9: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes10: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes11: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes12: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes13: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes14: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes15: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
		readonly votes16: Vec<
			ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>
		>;
	}

	/** @name SpNposElectionsElectionScore (268) */
	interface SpNposElectionsElectionScore extends Struct {
		readonly minimalStake: u128;
		readonly sumStake: u128;
		readonly sumStakeSquared: u128;
	}

	/** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (269) */
	interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
		readonly voters: Compact<u32>;
		readonly targets: Compact<u32>;
	}

	/** @name SpNposElectionsSupport (273) */
	interface SpNposElectionsSupport extends Struct {
		readonly total: u128;
		readonly voters: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
	}

	/** @name PalletBagsListCall (274) */
	interface PalletBagsListCall extends Enum {
		readonly isRebag: boolean;
		readonly asRebag: {
			readonly dislocated: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isPutInFrontOf: boolean;
		readonly asPutInFrontOf: {
			readonly lighter: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type: "Rebag" | "PutInFrontOf";
	}

	/** @name PalletEthereumCall (275) */
	interface PalletEthereumCall extends Enum {
		readonly isTransact: boolean;
		readonly asTransact: {
			readonly transaction: EthereumTransactionTransactionV2;
		} & Struct;
		readonly type: "Transact";
	}

	/** @name EthereumTransactionTransactionV2 (276) */
	interface EthereumTransactionTransactionV2 extends Enum {
		readonly isLegacy: boolean;
		readonly asLegacy: EthereumTransactionLegacyTransaction;
		readonly isEip2930: boolean;
		readonly asEip2930: EthereumTransactionEip2930Transaction;
		readonly isEip1559: boolean;
		readonly asEip1559: EthereumTransactionEip1559Transaction;
		readonly type: "Legacy" | "Eip2930" | "Eip1559";
	}

	/** @name EthereumTransactionLegacyTransaction (277) */
	interface EthereumTransactionLegacyTransaction extends Struct {
		readonly nonce: U256;
		readonly gasPrice: U256;
		readonly gasLimit: U256;
		readonly action: EthereumTransactionTransactionAction;
		readonly value: U256;
		readonly input: Bytes;
		readonly signature: EthereumTransactionTransactionSignature;
	}

	/** @name EthereumTransactionTransactionAction (278) */
	interface EthereumTransactionTransactionAction extends Enum {
		readonly isCall: boolean;
		readonly asCall: H160;
		readonly isCreate: boolean;
		readonly type: "Call" | "Create";
	}

	/** @name EthereumTransactionTransactionSignature (279) */
	interface EthereumTransactionTransactionSignature extends Struct {
		readonly v: u64;
		readonly r: H256;
		readonly s: H256;
	}

	/** @name EthereumTransactionEip2930Transaction (281) */
	interface EthereumTransactionEip2930Transaction extends Struct {
		readonly chainId: u64;
		readonly nonce: U256;
		readonly gasPrice: U256;
		readonly gasLimit: U256;
		readonly action: EthereumTransactionTransactionAction;
		readonly value: U256;
		readonly input: Bytes;
		readonly accessList: Vec<EthereumTransactionAccessListItem>;
		readonly oddYParity: bool;
		readonly r: H256;
		readonly s: H256;
	}

	/** @name EthereumTransactionAccessListItem (283) */
	interface EthereumTransactionAccessListItem extends Struct {
		readonly address: H160;
		readonly storageKeys: Vec<H256>;
	}

	/** @name EthereumTransactionEip1559Transaction (285) */
	interface EthereumTransactionEip1559Transaction extends Struct {
		readonly chainId: u64;
		readonly nonce: U256;
		readonly maxPriorityFeePerGas: U256;
		readonly maxFeePerGas: U256;
		readonly gasLimit: U256;
		readonly action: EthereumTransactionTransactionAction;
		readonly value: U256;
		readonly input: Bytes;
		readonly accessList: Vec<EthereumTransactionAccessListItem>;
		readonly oddYParity: bool;
		readonly r: H256;
		readonly s: H256;
	}

	/** @name PalletEvmCall (286) */
	interface PalletEvmCall extends Enum {
		readonly isWithdraw: boolean;
		readonly asWithdraw: {
			readonly address: H160;
			readonly value: u128;
		} & Struct;
		readonly isCall: boolean;
		readonly asCall: {
			readonly source: H160;
			readonly target: H160;
			readonly input: Bytes;
			readonly value: U256;
			readonly gasLimit: u64;
			readonly maxFeePerGas: U256;
			readonly maxPriorityFeePerGas: Option<U256>;
			readonly nonce: Option<U256>;
			readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
		} & Struct;
		readonly isCreate: boolean;
		readonly asCreate: {
			readonly source: H160;
			readonly init: Bytes;
			readonly value: U256;
			readonly gasLimit: u64;
			readonly maxFeePerGas: U256;
			readonly maxPriorityFeePerGas: Option<U256>;
			readonly nonce: Option<U256>;
			readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
		} & Struct;
		readonly isCreate2: boolean;
		readonly asCreate2: {
			readonly source: H160;
			readonly init: Bytes;
			readonly salt: H256;
			readonly value: U256;
			readonly gasLimit: u64;
			readonly maxFeePerGas: U256;
			readonly maxPriorityFeePerGas: Option<U256>;
			readonly nonce: Option<U256>;
			readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
		} & Struct;
		readonly type: "Withdraw" | "Call" | "Create" | "Create2";
	}

	/** @name PalletEvmChainIdCall (290) */
	interface PalletEvmChainIdCall extends Enum {
		readonly isSetChainId: boolean;
		readonly asSetChainId: {
			readonly chainId: Compact<u64>;
		} & Struct;
		readonly type: "SetChainId";
	}

	/** @name PalletEthyCall (291) */
	interface PalletEthyCall extends Enum {
		readonly isSetXrplDoorSigners: boolean;
		readonly asSetXrplDoorSigners: {
			readonly newSigners: Vec<ITuple<[SeedPrimitivesEthyCryptoAppCryptoPublic, bool]>>;
		} & Struct;
		readonly isSetRelayer: boolean;
		readonly asSetRelayer: {
			readonly relayer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isDepositRelayerBond: boolean;
		readonly isWithdrawRelayerBond: boolean;
		readonly isSetEventBlockConfirmations: boolean;
		readonly asSetEventBlockConfirmations: {
			readonly confirmations: u64;
		} & Struct;
		readonly isSetDelayedEventProofsPerBlock: boolean;
		readonly asSetDelayedEventProofsPerBlock: {
			readonly count: u8;
		} & Struct;
		readonly isSetChallengePeriod: boolean;
		readonly asSetChallengePeriod: {
			readonly blocks: u32;
		} & Struct;
		readonly isSetContractAddress: boolean;
		readonly asSetContractAddress: {
			readonly contractAddress: H160;
		} & Struct;
		readonly isSetBridgePaused: boolean;
		readonly asSetBridgePaused: {
			readonly paused: bool;
		} & Struct;
		readonly isFinaliseAuthoritiesChange: boolean;
		readonly asFinaliseAuthoritiesChange: {
			readonly nextNotaryKeys: Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>;
		} & Struct;
		readonly isSubmitEvent: boolean;
		readonly asSubmitEvent: {
			readonly txHash: H256;
			readonly event: Bytes;
		} & Struct;
		readonly isSubmitChallenge: boolean;
		readonly asSubmitChallenge: {
			readonly eventClaimId: u64;
		} & Struct;
		readonly isSubmitNotarization: boolean;
		readonly asSubmitNotarization: {
			readonly payload: PalletEthyNotarizationPayload;
			readonly signature: SeedPrimitivesEthyCryptoAppCryptoSignature;
		} & Struct;
		readonly type:
			| "SetXrplDoorSigners"
			| "SetRelayer"
			| "DepositRelayerBond"
			| "WithdrawRelayerBond"
			| "SetEventBlockConfirmations"
			| "SetDelayedEventProofsPerBlock"
			| "SetChallengePeriod"
			| "SetContractAddress"
			| "SetBridgePaused"
			| "FinaliseAuthoritiesChange"
			| "SubmitEvent"
			| "SubmitChallenge"
			| "SubmitNotarization";
	}

	/** @name PalletEthyNotarizationPayload (295) */
	interface PalletEthyNotarizationPayload extends Enum {
		readonly isCall: boolean;
		readonly asCall: {
			readonly callId: u64;
			readonly authorityIndex: u16;
			readonly result: PalletEthyCheckedEthCallResult;
		} & Struct;
		readonly isEvent: boolean;
		readonly asEvent: {
			readonly eventClaimId: u64;
			readonly authorityIndex: u16;
			readonly result: PalletEthyEventClaimResult;
		} & Struct;
		readonly type: "Call" | "Event";
	}

	/** @name PalletEthyCheckedEthCallResult (296) */
	interface PalletEthyCheckedEthCallResult extends Enum {
		readonly isOk: boolean;
		readonly asOk: ITuple<[U8aFixed, u64, u64]>;
		readonly isReturnDataExceedsLimit: boolean;
		readonly isReturnDataEmpty: boolean;
		readonly isDataProviderErr: boolean;
		readonly isInvalidEthBlock: boolean;
		readonly isInvalidTimestamp: boolean;
		readonly type:
			| "Ok"
			| "ReturnDataExceedsLimit"
			| "ReturnDataEmpty"
			| "DataProviderErr"
			| "InvalidEthBlock"
			| "InvalidTimestamp";
	}

	/** @name PalletEthyEventClaimResult (297) */
	interface PalletEthyEventClaimResult extends Enum {
		readonly isValid: boolean;
		readonly isDataProviderErr: boolean;
		readonly isTxStatusFailed: boolean;
		readonly isUnexpectedContractAddress: boolean;
		readonly isNoTxLogs: boolean;
		readonly isNotEnoughConfirmations: boolean;
		readonly isUnexpectedData: boolean;
		readonly isNoTxReceipt: boolean;
		readonly isUnexpectedSource: boolean;
		readonly type:
			| "Valid"
			| "DataProviderErr"
			| "TxStatusFailed"
			| "UnexpectedContractAddress"
			| "NoTxLogs"
			| "NotEnoughConfirmations"
			| "UnexpectedData"
			| "NoTxReceipt"
			| "UnexpectedSource";
	}

	/** @name SeedPrimitivesEthyCryptoAppCryptoSignature (298) */
	interface SeedPrimitivesEthyCryptoAppCryptoSignature extends SpCoreEcdsaSignature {}

	/** @name SpCoreEcdsaSignature (299) */
	interface SpCoreEcdsaSignature extends U8aFixed {}

	/** @name PalletErc20PegCall (301) */
	interface PalletErc20PegCall extends Enum {
		readonly isActivateDeposits: boolean;
		readonly asActivateDeposits: {
			readonly activate: bool;
		} & Struct;
		readonly isActivateWithdrawals: boolean;
		readonly asActivateWithdrawals: {
			readonly activate: bool;
		} & Struct;
		readonly isWithdraw: boolean;
		readonly asWithdraw: {
			readonly assetId: u32;
			readonly amount: u128;
			readonly beneficiary: H160;
		} & Struct;
		readonly isSetErc20PegAddress: boolean;
		readonly asSetErc20PegAddress: {
			readonly ethAddress: H160;
		} & Struct;
		readonly isSetRootPegAddress: boolean;
		readonly asSetRootPegAddress: {
			readonly ethAddress: H160;
		} & Struct;
		readonly isSetErc20Meta: boolean;
		readonly asSetErc20Meta: {
			readonly details: Vec<ITuple<[H160, Bytes, u8]>>;
		} & Struct;
		readonly isSetErc20AssetMap: boolean;
		readonly asSetErc20AssetMap: {
			readonly assetId: u32;
			readonly ethAddress: H160;
		} & Struct;
		readonly isSetPaymentDelay: boolean;
		readonly asSetPaymentDelay: {
			readonly assetId: u32;
			readonly minBalance: u128;
			readonly delay: u32;
		} & Struct;
		readonly type:
			| "ActivateDeposits"
			| "ActivateWithdrawals"
			| "Withdraw"
			| "SetErc20PegAddress"
			| "SetRootPegAddress"
			| "SetErc20Meta"
			| "SetErc20AssetMap"
			| "SetPaymentDelay";
	}

	/** @name PalletNftPegCall (304) */
	interface PalletNftPegCall extends Enum {
		readonly isSetContractAddress: boolean;
		readonly asSetContractAddress: {
			readonly contract: H160;
		} & Struct;
		readonly isWithdraw: boolean;
		readonly asWithdraw: {
			readonly collectionIds: Vec<u32>;
			readonly serialNumbers: Vec<Vec<u32>>;
			readonly destination: H160;
		} & Struct;
		readonly isReclaimBlockedNfts: boolean;
		readonly asReclaimBlockedNfts: {
			readonly blockedMintId: u32;
			readonly destination: H160;
		} & Struct;
		readonly type: "SetContractAddress" | "Withdraw" | "ReclaimBlockedNfts";
	}

	/** @name PalletProxyCall (309) */
	interface PalletProxyCall extends Enum {
		readonly isProxy: boolean;
		readonly asProxy: {
			readonly real: SeedPrimitivesSignatureAccountId20;
			readonly forceProxyType: Option<SeedRuntimeImplsProxyType>;
			readonly call: Call;
		} & Struct;
		readonly isAddProxy: boolean;
		readonly asAddProxy: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isRemoveProxy: boolean;
		readonly asRemoveProxy: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isRemoveProxies: boolean;
		readonly isCreatePure: boolean;
		readonly asCreatePure: {
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly delay: u32;
			readonly index: u16;
		} & Struct;
		readonly isKillPure: boolean;
		readonly asKillPure: {
			readonly spawner: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly index: u16;
			readonly height: Compact<u32>;
			readonly extIndex: Compact<u32>;
		} & Struct;
		readonly isAnnounce: boolean;
		readonly asAnnounce: {
			readonly real: SeedPrimitivesSignatureAccountId20;
			readonly callHash: H256;
		} & Struct;
		readonly isRemoveAnnouncement: boolean;
		readonly asRemoveAnnouncement: {
			readonly real: SeedPrimitivesSignatureAccountId20;
			readonly callHash: H256;
		} & Struct;
		readonly isRejectAnnouncement: boolean;
		readonly asRejectAnnouncement: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly callHash: H256;
		} & Struct;
		readonly isProxyAnnounced: boolean;
		readonly asProxyAnnounced: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly real: SeedPrimitivesSignatureAccountId20;
			readonly forceProxyType: Option<SeedRuntimeImplsProxyType>;
			readonly call: Call;
		} & Struct;
		readonly type:
			| "Proxy"
			| "AddProxy"
			| "RemoveProxy"
			| "RemoveProxies"
			| "CreatePure"
			| "KillPure"
			| "Announce"
			| "RemoveAnnouncement"
			| "RejectAnnouncement"
			| "ProxyAnnounced";
	}

	/** @name SeedRuntimeImplsProxyType (311) */
	interface SeedRuntimeImplsProxyType extends Enum {
		readonly isNoPermission: boolean;
		readonly isAny: boolean;
		readonly isNonTransfer: boolean;
		readonly isGovernance: boolean;
		readonly isStaking: boolean;
		readonly isOwner: boolean;
		readonly type: "NoPermission" | "Any" | "NonTransfer" | "Governance" | "Staking" | "Owner";
	}

	/** @name PalletFuturepassCall (312) */
	interface PalletFuturepassCall extends Enum {
		readonly isCreate: boolean;
		readonly asCreate: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRegisterDelegateWithSignature: boolean;
		readonly asRegisterDelegateWithSignature: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly deadline: u32;
			readonly signature: U8aFixed;
		} & Struct;
		readonly isUnregisterDelegate: boolean;
		readonly asUnregisterDelegate: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isTransferFuturepass: boolean;
		readonly asTransferFuturepass: {
			readonly currentOwner: SeedPrimitivesSignatureAccountId20;
			readonly newOwner: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isProxyExtrinsic: boolean;
		readonly asProxyExtrinsic: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly call: Call;
		} & Struct;
		readonly isSetFuturepassMigrator: boolean;
		readonly asSetFuturepassMigrator: {
			readonly migrator: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMigrateEvmFuturepass: boolean;
		readonly asMigrateEvmFuturepass: {
			readonly owner: SeedPrimitivesSignatureAccountId20;
			readonly evmFuturepass: SeedPrimitivesSignatureAccountId20;
			readonly assetIds: Vec<u32>;
			readonly collectionIds: Vec<u32>;
		} & Struct;
		readonly type:
			| "Create"
			| "RegisterDelegateWithSignature"
			| "UnregisterDelegate"
			| "TransferFuturepass"
			| "ProxyExtrinsic"
			| "SetFuturepassMigrator"
			| "MigrateEvmFuturepass";
	}

	/** @name PalletEchoEvent (313) */
	interface PalletEchoEvent extends Enum {
		readonly isPingSent: boolean;
		readonly asPingSent: {
			readonly sessionId: u64;
			readonly source: H160;
			readonly destination: H160;
			readonly eventProofId: u64;
		} & Struct;
		readonly isPongReceived: boolean;
		readonly asPongReceived: {
			readonly sessionId: u64;
			readonly source: H160;
			readonly data: Bytes;
		} & Struct;
		readonly isPingReceived: boolean;
		readonly asPingReceived: {
			readonly sessionId: u64;
			readonly source: H160;
			readonly data: Bytes;
		} & Struct;
		readonly isPongSent: boolean;
		readonly asPongSent: {
			readonly sessionId: u64;
			readonly source: H160;
			readonly destination: H160;
			readonly eventProofId: u64;
		} & Struct;
		readonly type: "PingSent" | "PongReceived" | "PingReceived" | "PongSent";
	}

	/** @name PalletMarketplaceEvent (314) */
	interface PalletMarketplaceEvent extends Enum {
		readonly isFixedPriceSaleList: boolean;
		readonly asFixedPriceSaleList: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly price: u128;
			readonly paymentAsset: u32;
			readonly seller: SeedPrimitivesSignatureAccountId20;
			readonly close: u32;
		} & Struct;
		readonly isFixedPriceSaleComplete: boolean;
		readonly asFixedPriceSaleComplete: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly price: u128;
			readonly paymentAsset: u32;
			readonly buyer: SeedPrimitivesSignatureAccountId20;
			readonly seller: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isFixedPriceSaleClose: boolean;
		readonly asFixedPriceSaleClose: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly reason: PalletMarketplaceFixedPriceClosureReason;
		} & Struct;
		readonly isFixedPriceSalePriceUpdate: boolean;
		readonly asFixedPriceSalePriceUpdate: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly newPrice: u128;
		} & Struct;
		readonly isAuctionOpen: boolean;
		readonly asAuctionOpen: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly paymentAsset: u32;
			readonly reservePrice: u128;
			readonly seller: SeedPrimitivesSignatureAccountId20;
			readonly close: u32;
		} & Struct;
		readonly isAuctionSold: boolean;
		readonly asAuctionSold: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly paymentAsset: u32;
			readonly hammerPrice: u128;
			readonly winner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isAuctionClose: boolean;
		readonly asAuctionClose: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly reason: PalletMarketplaceAuctionClosureReason;
		} & Struct;
		readonly isBid: boolean;
		readonly asBid: {
			readonly tokens: PalletMarketplaceListingTokens;
			readonly listingId: u128;
			readonly marketplaceId: Option<u32>;
			readonly amount: u128;
			readonly bidder: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isMarketplaceRegister: boolean;
		readonly asMarketplaceRegister: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly entitlement: Permill;
			readonly marketplaceId: u32;
		} & Struct;
		readonly isOffer: boolean;
		readonly asOffer: {
			readonly offerId: u64;
			readonly amount: u128;
			readonly assetId: u32;
			readonly marketplaceId: Option<u32>;
			readonly buyer: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isOfferCancel: boolean;
		readonly asOfferCancel: {
			readonly offerId: u64;
			readonly marketplaceId: Option<u32>;
			readonly tokenId: ITuple<[u32, u32]>;
		} & Struct;
		readonly isOfferAccept: boolean;
		readonly asOfferAccept: {
			readonly offerId: u64;
			readonly marketplaceId: Option<u32>;
			readonly tokenId: ITuple<[u32, u32]>;
			readonly amount: u128;
			readonly assetId: u32;
		} & Struct;
		readonly isFeeToSet: boolean;
		readonly asFeeToSet: {
			readonly account: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly type:
			| "FixedPriceSaleList"
			| "FixedPriceSaleComplete"
			| "FixedPriceSaleClose"
			| "FixedPriceSalePriceUpdate"
			| "AuctionOpen"
			| "AuctionSold"
			| "AuctionClose"
			| "Bid"
			| "MarketplaceRegister"
			| "Offer"
			| "OfferCancel"
			| "OfferAccept"
			| "FeeToSet";
	}

	/** @name PalletMarketplaceFixedPriceClosureReason (315) */
	interface PalletMarketplaceFixedPriceClosureReason extends Enum {
		readonly isVendorCancelled: boolean;
		readonly isExpired: boolean;
		readonly type: "VendorCancelled" | "Expired";
	}

	/** @name PalletMarketplaceAuctionClosureReason (316) */
	interface PalletMarketplaceAuctionClosureReason extends Enum {
		readonly isExpiredNoBids: boolean;
		readonly isSettlementFailed: boolean;
		readonly isVendorCancelled: boolean;
		readonly type: "ExpiredNoBids" | "SettlementFailed" | "VendorCancelled";
	}

	/** @name PalletPreimageEvent (317) */
	interface PalletPreimageEvent extends Enum {
		readonly isNoted: boolean;
		readonly asNoted: {
			readonly hash_: H256;
		} & Struct;
		readonly isRequested: boolean;
		readonly asRequested: {
			readonly hash_: H256;
		} & Struct;
		readonly isCleared: boolean;
		readonly asCleared: {
			readonly hash_: H256;
		} & Struct;
		readonly type: "Noted" | "Requested" | "Cleared";
	}

	/** @name PalletVortexEvent (318) */
	interface PalletVortexEvent extends Enum {
		readonly isAdminAccountChanged: boolean;
		readonly asAdminAccountChanged: {
			readonly oldKey: Option<SeedPrimitivesSignatureAccountId20>;
			readonly newKey: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isRewardRegistered: boolean;
		readonly asRewardRegistered: {
			readonly id: u32;
			readonly rewards: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
		} & Struct;
		readonly isVtxDistCreated: boolean;
		readonly asVtxDistCreated: {
			readonly id: u32;
		} & Struct;
		readonly isVtxDistDisabled: boolean;
		readonly asVtxDistDisabled: {
			readonly id: u32;
		} & Struct;
		readonly isVtxDistDone: boolean;
		readonly asVtxDistDone: {
			readonly id: u32;
		} & Struct;
		readonly isVtxDistPaidOut: boolean;
		readonly asVtxDistPaidOut: {
			readonly id: u32;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isVtxDistStarted: boolean;
		readonly asVtxDistStarted: {
			readonly id: u32;
		} & Struct;
		readonly isSetVtxDistEras: boolean;
		readonly asSetVtxDistEras: {
			readonly id: u32;
			readonly startEra: u32;
			readonly endEra: u32;
		} & Struct;
		readonly isSetAssetPrices: boolean;
		readonly asSetAssetPrices: {
			readonly id: u32;
			readonly assetPrices: Vec<ITuple<[u32, u128]>>;
		} & Struct;
		readonly isTriggerVtxDistribution: boolean;
		readonly asTriggerVtxDistribution: {
			readonly id: u32;
		} & Struct;
		readonly type:
			| "AdminAccountChanged"
			| "RewardRegistered"
			| "VtxDistCreated"
			| "VtxDistDisabled"
			| "VtxDistDone"
			| "VtxDistPaidOut"
			| "VtxDistStarted"
			| "SetVtxDistEras"
			| "SetAssetPrices"
			| "TriggerVtxDistribution";
	}

	/** @name PalletFeeProxyEvent (319) */
	interface PalletFeeProxyEvent extends Enum {
		readonly isCallWithFeePreferences: boolean;
		readonly asCallWithFeePreferences: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly paymentAsset: u32;
			readonly maxPayment: u128;
		} & Struct;
		readonly type: "CallWithFeePreferences";
	}

	/** @name PalletFeeControlEvent (320) */
	interface PalletFeeControlEvent extends Enum {
		readonly isEvmBaseFeeSet: boolean;
		readonly asEvmBaseFeeSet: {
			readonly baseFee: U256;
		} & Struct;
		readonly isWeightMultiplierSet: boolean;
		readonly asWeightMultiplierSet: {
			readonly weightMultiplier: Perbill;
		} & Struct;
		readonly isLengthMultiplierSet: boolean;
		readonly asLengthMultiplierSet: {
			readonly lengthMultiplier: u128;
		} & Struct;
		readonly type: "EvmBaseFeeSet" | "WeightMultiplierSet" | "LengthMultiplierSet";
	}

	/** @name PalletXls20Event (321) */
	interface PalletXls20Event extends Enum {
		readonly isXls20MintRequest: boolean;
		readonly asXls20MintRequest: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly tokenUris: Vec<Bytes>;
		} & Struct;
		readonly isRelayerSet: boolean;
		readonly asRelayerSet: {
			readonly account: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isXls20MintFeeSet: boolean;
		readonly asXls20MintFeeSet: {
			readonly newFee: u128;
		} & Struct;
		readonly isXls20MappingSet: boolean;
		readonly asXls20MappingSet: {
			readonly collectionId: u32;
			readonly mappings: Vec<ITuple<[u32, U8aFixed]>>;
		} & Struct;
		readonly isXls20CompatibilityEnabled: boolean;
		readonly asXls20CompatibilityEnabled: {
			readonly collectionId: u32;
		} & Struct;
		readonly isXls20MintFeePaid: boolean;
		readonly asXls20MintFeePaid: {
			readonly collectionOwner: SeedPrimitivesSignatureAccountId20;
			readonly totalFee: u128;
		} & Struct;
		readonly type:
			| "Xls20MintRequest"
			| "RelayerSet"
			| "Xls20MintFeeSet"
			| "Xls20MappingSet"
			| "Xls20CompatibilityEnabled"
			| "Xls20MintFeePaid";
	}

	/** @name PalletDoughnutEvent (322) */
	interface PalletDoughnutEvent extends Enum {
		readonly isDoughnutCallExecuted: boolean;
		readonly asDoughnutCallExecuted: {
			readonly doughnut: Bytes;
			readonly call: Call;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isWhitelistedHoldersUpdated: boolean;
		readonly asWhitelistedHoldersUpdated: {
			readonly holder: SeedPrimitivesSignatureAccountId20;
			readonly enabled: bool;
		} & Struct;
		readonly isDoughnutRevokeStateUpdated: boolean;
		readonly asDoughnutRevokeStateUpdated: {
			readonly doughnutHash: U8aFixed;
			readonly revoked: bool;
		} & Struct;
		readonly isHolderRevokeStateUpdated: boolean;
		readonly asHolderRevokeStateUpdated: {
			readonly issuer: SeedPrimitivesSignatureAccountId20;
			readonly holder: SeedPrimitivesSignatureAccountId20;
			readonly revoked: bool;
		} & Struct;
		readonly type:
			| "DoughnutCallExecuted"
			| "WhitelistedHoldersUpdated"
			| "DoughnutRevokeStateUpdated"
			| "HolderRevokeStateUpdated";
	}

	/** @name PalletMaintenanceModeEvent (323) */
	interface PalletMaintenanceModeEvent extends Enum {
		readonly isMaintenanceModeActivated: boolean;
		readonly asMaintenanceModeActivated: {
			readonly enabled: bool;
		} & Struct;
		readonly isAccountBlocked: boolean;
		readonly asAccountBlocked: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly blocked: bool;
		} & Struct;
		readonly isEvmTargetBlocked: boolean;
		readonly asEvmTargetBlocked: {
			readonly targetAddress: H160;
			readonly blocked: bool;
		} & Struct;
		readonly isCallBlocked: boolean;
		readonly asCallBlocked: {
			readonly palletName: Bytes;
			readonly callName: Bytes;
			readonly blocked: bool;
		} & Struct;
		readonly isPalletBlocked: boolean;
		readonly asPalletBlocked: {
			readonly palletName: Bytes;
			readonly blocked: bool;
		} & Struct;
		readonly type:
			| "MaintenanceModeActivated"
			| "AccountBlocked"
			| "EvmTargetBlocked"
			| "CallBlocked"
			| "PalletBlocked";
	}

	/** @name PalletCrowdsaleEvent (324) */
	interface PalletCrowdsaleEvent extends Enum {
		readonly isCrowdsaleCreated: boolean;
		readonly asCrowdsaleCreated: {
			readonly saleId: u64;
			readonly info: PalletCrowdsaleSaleInformation;
		} & Struct;
		readonly isVaultCallProxied: boolean;
		readonly asVaultCallProxied: {
			readonly saleId: u64;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly vault: SeedPrimitivesSignatureAccountId20;
			readonly call: Call;
		} & Struct;
		readonly isCrowdsaleEnabled: boolean;
		readonly asCrowdsaleEnabled: {
			readonly saleId: u64;
			readonly info: PalletCrowdsaleSaleInformation;
			readonly endBlock: u32;
		} & Struct;
		readonly isCrowdsaleParticipated: boolean;
		readonly asCrowdsaleParticipated: {
			readonly saleId: u64;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly asset: u32;
			readonly amount: u128;
		} & Struct;
		readonly isCrowdsaleNFTRedeemed: boolean;
		readonly asCrowdsaleNFTRedeemed: {
			readonly saleId: u64;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
			readonly quantity: u32;
		} & Struct;
		readonly isCrowdsaleClosed: boolean;
		readonly asCrowdsaleClosed: {
			readonly saleId: u64;
			readonly info: PalletCrowdsaleSaleInformation;
		} & Struct;
		readonly isCrowdsaleManualDistribution: boolean;
		readonly asCrowdsaleManualDistribution: {
			readonly saleId: u64;
			readonly info: PalletCrowdsaleSaleInformation;
			readonly who: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isCrowdsaleVouchersClaimed: boolean;
		readonly asCrowdsaleVouchersClaimed: {
			readonly saleId: u64;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly amount: u128;
		} & Struct;
		readonly isCrowdsaleDistributionComplete: boolean;
		readonly asCrowdsaleDistributionComplete: {
			readonly saleId: u64;
			readonly vouchersDistributed: u128;
		} & Struct;
		readonly type:
			| "CrowdsaleCreated"
			| "VaultCallProxied"
			| "CrowdsaleEnabled"
			| "CrowdsaleParticipated"
			| "CrowdsaleNFTRedeemed"
			| "CrowdsaleClosed"
			| "CrowdsaleManualDistribution"
			| "CrowdsaleVouchersClaimed"
			| "CrowdsaleDistributionComplete";
	}

	/** @name PalletCrowdsaleSaleInformation (325) */
	interface PalletCrowdsaleSaleInformation extends Struct {
		readonly status: PalletCrowdsaleSaleStatus;
		readonly admin: SeedPrimitivesSignatureAccountId20;
		readonly vault: SeedPrimitivesSignatureAccountId20;
		readonly paymentAssetId: u32;
		readonly rewardCollectionId: u32;
		readonly softCapPrice: u128;
		readonly fundsRaised: u128;
		readonly participantCount: u64;
		readonly voucherAssetId: u32;
		readonly duration: u32;
	}

	/** @name PalletCrowdsaleSaleStatus (326) */
	interface PalletCrowdsaleSaleStatus extends Enum {
		readonly isPending: boolean;
		readonly asPending: u32;
		readonly isEnabled: boolean;
		readonly asEnabled: u32;
		readonly isDistributing: boolean;
		readonly asDistributing: ITuple<[u32, u128]>;
		readonly isEnded: boolean;
		readonly asEnded: u32;
		readonly isDistributionFailed: boolean;
		readonly asDistributionFailed: u32;
		readonly type: "Pending" | "Enabled" | "Distributing" | "Ended" | "DistributionFailed";
	}

	/** @name PalletElectionProviderMultiPhaseEvent (327) */
	interface PalletElectionProviderMultiPhaseEvent extends Enum {
		readonly isSolutionStored: boolean;
		readonly asSolutionStored: {
			readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
			readonly prevEjected: bool;
		} & Struct;
		readonly isElectionFinalized: boolean;
		readonly asElectionFinalized: {
			readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
			readonly score: SpNposElectionsElectionScore;
		} & Struct;
		readonly isElectionFailed: boolean;
		readonly isRewarded: boolean;
		readonly asRewarded: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly value: u128;
		} & Struct;
		readonly isSlashed: boolean;
		readonly asSlashed: {
			readonly account: SeedPrimitivesSignatureAccountId20;
			readonly value: u128;
		} & Struct;
		readonly isSignedPhaseStarted: boolean;
		readonly asSignedPhaseStarted: {
			readonly round: u32;
		} & Struct;
		readonly isUnsignedPhaseStarted: boolean;
		readonly asUnsignedPhaseStarted: {
			readonly round: u32;
		} & Struct;
		readonly type:
			| "SolutionStored"
			| "ElectionFinalized"
			| "ElectionFailed"
			| "Rewarded"
			| "Slashed"
			| "SignedPhaseStarted"
			| "UnsignedPhaseStarted";
	}

	/** @name PalletElectionProviderMultiPhaseElectionCompute (328) */
	interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
		readonly isOnChain: boolean;
		readonly isSigned: boolean;
		readonly isUnsigned: boolean;
		readonly isFallback: boolean;
		readonly isEmergency: boolean;
		readonly type: "OnChain" | "Signed" | "Unsigned" | "Fallback" | "Emergency";
	}

	/** @name PalletBagsListEvent (329) */
	interface PalletBagsListEvent extends Enum {
		readonly isRebagged: boolean;
		readonly asRebagged: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly from: u64;
			readonly to: u64;
		} & Struct;
		readonly isScoreUpdated: boolean;
		readonly asScoreUpdated: {
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly newScore: u64;
		} & Struct;
		readonly type: "Rebagged" | "ScoreUpdated";
	}

	/** @name PalletEthereumEvent (330) */
	interface PalletEthereumEvent extends Enum {
		readonly isExecuted: boolean;
		readonly asExecuted: {
			readonly from: H160;
			readonly to: H160;
			readonly transactionHash: H256;
			readonly exitReason: EvmCoreErrorExitReason;
		} & Struct;
		readonly type: "Executed";
	}

	/** @name EvmCoreErrorExitReason (331) */
	interface EvmCoreErrorExitReason extends Enum {
		readonly isSucceed: boolean;
		readonly asSucceed: EvmCoreErrorExitSucceed;
		readonly isError: boolean;
		readonly asError: EvmCoreErrorExitError;
		readonly isRevert: boolean;
		readonly asRevert: EvmCoreErrorExitRevert;
		readonly isFatal: boolean;
		readonly asFatal: EvmCoreErrorExitFatal;
		readonly type: "Succeed" | "Error" | "Revert" | "Fatal";
	}

	/** @name EvmCoreErrorExitSucceed (332) */
	interface EvmCoreErrorExitSucceed extends Enum {
		readonly isStopped: boolean;
		readonly isReturned: boolean;
		readonly isSuicided: boolean;
		readonly type: "Stopped" | "Returned" | "Suicided";
	}

	/** @name EvmCoreErrorExitError (333) */
	interface EvmCoreErrorExitError extends Enum {
		readonly isStackUnderflow: boolean;
		readonly isStackOverflow: boolean;
		readonly isInvalidJump: boolean;
		readonly isInvalidRange: boolean;
		readonly isDesignatedInvalid: boolean;
		readonly isCallTooDeep: boolean;
		readonly isCreateCollision: boolean;
		readonly isCreateContractLimit: boolean;
		readonly isOutOfOffset: boolean;
		readonly isOutOfGas: boolean;
		readonly isOutOfFund: boolean;
		readonly isPcUnderflow: boolean;
		readonly isCreateEmpty: boolean;
		readonly isOther: boolean;
		readonly asOther: Text;
		readonly isInvalidCode: boolean;
		readonly asInvalidCode: u8;
		readonly type:
			| "StackUnderflow"
			| "StackOverflow"
			| "InvalidJump"
			| "InvalidRange"
			| "DesignatedInvalid"
			| "CallTooDeep"
			| "CreateCollision"
			| "CreateContractLimit"
			| "OutOfOffset"
			| "OutOfGas"
			| "OutOfFund"
			| "PcUnderflow"
			| "CreateEmpty"
			| "Other"
			| "InvalidCode";
	}

	/** @name EvmCoreErrorExitRevert (336) */
	interface EvmCoreErrorExitRevert extends Enum {
		readonly isReverted: boolean;
		readonly type: "Reverted";
	}

	/** @name EvmCoreErrorExitFatal (337) */
	interface EvmCoreErrorExitFatal extends Enum {
		readonly isNotSupported: boolean;
		readonly isUnhandledInterrupt: boolean;
		readonly isCallErrorAsFatal: boolean;
		readonly asCallErrorAsFatal: EvmCoreErrorExitError;
		readonly isOther: boolean;
		readonly asOther: Text;
		readonly type: "NotSupported" | "UnhandledInterrupt" | "CallErrorAsFatal" | "Other";
	}

	/** @name PalletEvmEvent (338) */
	interface PalletEvmEvent extends Enum {
		readonly isLog: boolean;
		readonly asLog: {
			readonly log: EthereumLog;
		} & Struct;
		readonly isCreated: boolean;
		readonly asCreated: {
			readonly address: H160;
		} & Struct;
		readonly isCreatedFailed: boolean;
		readonly asCreatedFailed: {
			readonly address: H160;
		} & Struct;
		readonly isExecuted: boolean;
		readonly asExecuted: {
			readonly address: H160;
		} & Struct;
		readonly isExecutedFailed: boolean;
		readonly asExecutedFailed: {
			readonly address: H160;
		} & Struct;
		readonly type: "Log" | "Created" | "CreatedFailed" | "Executed" | "ExecutedFailed";
	}

	/** @name EthereumLog (339) */
	interface EthereumLog extends Struct {
		readonly address: H160;
		readonly topics: Vec<H256>;
		readonly data: Bytes;
	}

	/** @name PalletEvmChainIdEvent (340) */
	interface PalletEvmChainIdEvent extends Enum {
		readonly isChainIdSet: boolean;
		readonly asChainIdSet: u64;
		readonly type: "ChainIdSet";
	}

	/** @name PalletEthyRawEvent (341) */
	interface PalletEthyRawEvent extends Enum {
		readonly isVerified: boolean;
		readonly asVerified: u64;
		readonly isInvalid: boolean;
		readonly asInvalid: u64;
		readonly isAuthoritySetChange: boolean;
		readonly asAuthoritySetChange: ITuple<[u64, u64]>;
		readonly isXrplAuthoritySetChange: boolean;
		readonly asXrplAuthoritySetChange: ITuple<[u64, u64]>;
		readonly isProofDelayed: boolean;
		readonly asProofDelayed: u64;
		readonly isProcessingOk: boolean;
		readonly asProcessingOk: u64;
		readonly isProcessingFailed: boolean;
		readonly asProcessingFailed: ITuple<[u64, SeedPalletCommonEventRouterError]>;
		readonly isChallenged: boolean;
		readonly asChallenged: ITuple<[u64, SeedPrimitivesSignatureAccountId20]>;
		readonly isProcessAtExtended: boolean;
		readonly asProcessAtExtended: ITuple<[u64, u32]>;
		readonly isEventSend: boolean;
		readonly asEventSend: {
			readonly eventProofId: u64;
			readonly signingRequest: PalletEthyEthySigningRequest;
		} & Struct;
		readonly isEventSubmit: boolean;
		readonly asEventSubmit: ITuple<[u64, PalletEthyEventClaim, u32]>;
		readonly isRelayerBondDeposit: boolean;
		readonly asRelayerBondDeposit: ITuple<[SeedPrimitivesSignatureAccountId20, u128]>;
		readonly isRelayerBondWithdraw: boolean;
		readonly asRelayerBondWithdraw: ITuple<[SeedPrimitivesSignatureAccountId20, u128]>;
		readonly isRelayerSet: boolean;
		readonly asRelayerSet: Option<SeedPrimitivesSignatureAccountId20>;
		readonly isXrplDoorSignersSet: boolean;
		readonly isFinaliseScheduleFail: boolean;
		readonly asFinaliseScheduleFail: u32;
		readonly isSetContractAddress: boolean;
		readonly asSetContractAddress: H160;
		readonly isXrplAuthoritySetChangeRequestFailed: boolean;
		readonly type:
			| "Verified"
			| "Invalid"
			| "AuthoritySetChange"
			| "XrplAuthoritySetChange"
			| "ProofDelayed"
			| "ProcessingOk"
			| "ProcessingFailed"
			| "Challenged"
			| "ProcessAtExtended"
			| "EventSend"
			| "EventSubmit"
			| "RelayerBondDeposit"
			| "RelayerBondWithdraw"
			| "RelayerSet"
			| "XrplDoorSignersSet"
			| "FinaliseScheduleFail"
			| "SetContractAddress"
			| "XrplAuthoritySetChangeRequestFailed";
	}

	/** @name SeedPalletCommonEventRouterError (342) */
	interface SeedPalletCommonEventRouterError extends Enum {
		readonly isFailedProcessing: boolean;
		readonly asFailedProcessing: SpRuntimeDispatchError;
		readonly isNoReceiver: boolean;
		readonly type: "FailedProcessing" | "NoReceiver";
	}

	/** @name PalletEthyEthySigningRequest (343) */
	interface PalletEthyEthySigningRequest extends Enum {
		readonly isEthereum: boolean;
		readonly asEthereum: PalletEthyEthereumEventInfo;
		readonly isXrplTx: boolean;
		readonly asXrplTx: Bytes;
		readonly type: "Ethereum" | "XrplTx";
	}

	/** @name PalletEthyEthereumEventInfo (344) */
	interface PalletEthyEthereumEventInfo extends Struct {
		readonly source: H160;
		readonly destination: H160;
		readonly message: Bytes;
		readonly validatorSetId: u64;
		readonly eventProofId: u64;
	}

	/** @name PalletEthyEventClaim (345) */
	interface PalletEthyEventClaim extends Struct {
		readonly txHash: H256;
		readonly source: H160;
		readonly destination: H160;
		readonly data: Bytes;
	}

	/** @name PalletErc20PegRawEvent (346) */
	interface PalletErc20PegRawEvent extends Enum {
		readonly isErc20DepositDelayed: boolean;
		readonly asErc20DepositDelayed: ITuple<[u64, u32, u128, SeedPrimitivesSignatureAccountId20]>;
		readonly isErc20WithdrawalDelayed: boolean;
		readonly asErc20WithdrawalDelayed: ITuple<[u64, u32, u128, H160]>;
		readonly isDelayedErc20DepositFailed: boolean;
		readonly asDelayedErc20DepositFailed: ITuple<[u64, SeedPrimitivesSignatureAccountId20]>;
		readonly isDelayedErc20WithdrawalFailed: boolean;
		readonly asDelayedErc20WithdrawalFailed: ITuple<[u32, H160]>;
		readonly isErc20Deposit: boolean;
		readonly asErc20Deposit: ITuple<[u32, u128, SeedPrimitivesSignatureAccountId20]>;
		readonly isErc20Withdraw: boolean;
		readonly asErc20Withdraw: ITuple<[u32, u128, H160]>;
		readonly isErc20DepositFail: boolean;
		readonly asErc20DepositFail: ITuple<[H160, Bytes]>;
		readonly isSetContractAddress: boolean;
		readonly asSetContractAddress: H160;
		readonly isSetRootPegContract: boolean;
		readonly asSetRootPegContract: H160;
		readonly isPaymentDelaySet: boolean;
		readonly asPaymentDelaySet: ITuple<[u32, u128, u32]>;
		readonly isNoAvailableDelayedPaymentIds: boolean;
		readonly type:
			| "Erc20DepositDelayed"
			| "Erc20WithdrawalDelayed"
			| "DelayedErc20DepositFailed"
			| "DelayedErc20WithdrawalFailed"
			| "Erc20Deposit"
			| "Erc20Withdraw"
			| "Erc20DepositFail"
			| "SetContractAddress"
			| "SetRootPegContract"
			| "PaymentDelaySet"
			| "NoAvailableDelayedPaymentIds";
	}

	/** @name PalletNftPegEvent (347) */
	interface PalletNftPegEvent extends Enum {
		readonly isErc721Deposit: boolean;
		readonly asErc721Deposit: {
			readonly destination: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isErc721Mint: boolean;
		readonly asErc721Mint: {
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
			readonly owner: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isErc721Blocked: boolean;
		readonly asErc721Blocked: {
			readonly blockedMintId: u32;
			readonly destinationAddress: SeedPrimitivesSignatureAccountId20;
			readonly collectionId: u32;
			readonly serialNumbers: Vec<u32>;
		} & Struct;
		readonly isErc721Withdraw: boolean;
		readonly asErc721Withdraw: {
			readonly origin: SeedPrimitivesSignatureAccountId20;
			readonly collectionIds: Vec<u32>;
			readonly serialNumbers: Vec<Vec<u32>>;
			readonly destination: H160;
		} & Struct;
		readonly isContractAddressSet: boolean;
		readonly asContractAddressSet: {
			readonly contract: H160;
		} & Struct;
		readonly type:
			| "Erc721Deposit"
			| "Erc721Mint"
			| "Erc721Blocked"
			| "Erc721Withdraw"
			| "ContractAddressSet";
	}

	/** @name PalletProxyEvent (349) */
	interface PalletProxyEvent extends Enum {
		readonly isProxyExecuted: boolean;
		readonly asProxyExecuted: {
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isPureCreated: boolean;
		readonly asPureCreated: {
			readonly pure: SeedPrimitivesSignatureAccountId20;
			readonly who: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly disambiguationIndex: u16;
		} & Struct;
		readonly isAnnounced: boolean;
		readonly asAnnounced: {
			readonly real: SeedPrimitivesSignatureAccountId20;
			readonly proxy: SeedPrimitivesSignatureAccountId20;
			readonly callHash: H256;
		} & Struct;
		readonly isProxyAdded: boolean;
		readonly asProxyAdded: {
			readonly delegator: SeedPrimitivesSignatureAccountId20;
			readonly delegatee: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly delay: u32;
		} & Struct;
		readonly isProxyRemoved: boolean;
		readonly asProxyRemoved: {
			readonly delegator: SeedPrimitivesSignatureAccountId20;
			readonly delegatee: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
			readonly delay: u32;
		} & Struct;
		readonly type: "ProxyExecuted" | "PureCreated" | "Announced" | "ProxyAdded" | "ProxyRemoved";
	}

	/** @name PalletFuturepassEvent (350) */
	interface PalletFuturepassEvent extends Enum {
		readonly isFuturepassCreated: boolean;
		readonly asFuturepassCreated: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isDelegateRegistered: boolean;
		readonly asDelegateRegistered: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly proxyType: SeedRuntimeImplsProxyType;
		} & Struct;
		readonly isDelegateUnregistered: boolean;
		readonly asDelegateUnregistered: {
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly delegate: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isFuturepassTransferred: boolean;
		readonly asFuturepassTransferred: {
			readonly oldOwner: SeedPrimitivesSignatureAccountId20;
			readonly newOwner: Option<SeedPrimitivesSignatureAccountId20>;
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly isDefaultFuturepassSet: boolean;
		readonly asDefaultFuturepassSet: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly futurepass: Option<SeedPrimitivesSignatureAccountId20>;
		} & Struct;
		readonly isProxyExecuted: boolean;
		readonly asProxyExecuted: {
			readonly delegate: SeedPrimitivesSignatureAccountId20;
			readonly result: Result<Null, SpRuntimeDispatchError>;
		} & Struct;
		readonly isFuturepassAssetsMigrated: boolean;
		readonly asFuturepassAssetsMigrated: {
			readonly evmFuturepass: SeedPrimitivesSignatureAccountId20;
			readonly futurepass: SeedPrimitivesSignatureAccountId20;
			readonly assets: Vec<u32>;
			readonly collections: Vec<u32>;
		} & Struct;
		readonly isFuturepassMigratorSet: boolean;
		readonly asFuturepassMigratorSet: {
			readonly migrator: SeedPrimitivesSignatureAccountId20;
		} & Struct;
		readonly type:
			| "FuturepassCreated"
			| "DelegateRegistered"
			| "DelegateUnregistered"
			| "FuturepassTransferred"
			| "DefaultFuturepassSet"
			| "ProxyExecuted"
			| "FuturepassAssetsMigrated"
			| "FuturepassMigratorSet";
	}

	/** @name FrameSystemPhase (351) */
	interface FrameSystemPhase extends Enum {
		readonly isApplyExtrinsic: boolean;
		readonly asApplyExtrinsic: u32;
		readonly isFinalization: boolean;
		readonly isInitialization: boolean;
		readonly type: "ApplyExtrinsic" | "Finalization" | "Initialization";
	}

	/** @name FrameSystemLastRuntimeUpgradeInfo (353) */
	interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
		readonly specVersion: Compact<u32>;
		readonly specName: Text;
	}

	/** @name FrameSystemLimitsBlockWeights (354) */
	interface FrameSystemLimitsBlockWeights extends Struct {
		readonly baseBlock: WeightV1;
		readonly maxBlock: WeightV1;
		readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
	}

	/** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (355) */
	interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
		readonly normal: FrameSystemLimitsWeightsPerClass;
		readonly operational: FrameSystemLimitsWeightsPerClass;
		readonly mandatory: FrameSystemLimitsWeightsPerClass;
	}

	/** @name FrameSystemLimitsWeightsPerClass (356) */
	interface FrameSystemLimitsWeightsPerClass extends Struct {
		readonly baseExtrinsic: WeightV1;
		readonly maxExtrinsic: Option<WeightV1>;
		readonly maxTotal: Option<WeightV1>;
		readonly reserved: Option<WeightV1>;
	}

	/** @name FrameSystemLimitsBlockLength (358) */
	interface FrameSystemLimitsBlockLength extends Struct {
		readonly max: FrameSupportDispatchPerDispatchClassU32;
	}

	/** @name FrameSupportDispatchPerDispatchClassU32 (359) */
	interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
		readonly normal: u32;
		readonly operational: u32;
		readonly mandatory: u32;
	}

	/** @name SpWeightsRuntimeDbWeight (360) */
	interface SpWeightsRuntimeDbWeight extends Struct {
		readonly read: u64;
		readonly write: u64;
	}

	/** @name SpVersionRuntimeVersion (361) */
	interface SpVersionRuntimeVersion extends Struct {
		readonly specName: Text;
		readonly implName: Text;
		readonly authoringVersion: u32;
		readonly specVersion: u32;
		readonly implVersion: u32;
		readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
		readonly transactionVersion: u32;
		readonly stateVersion: u8;
	}

	/** @name FrameSystemError (365) */
	interface FrameSystemError extends Enum {
		readonly isInvalidSpecName: boolean;
		readonly isSpecVersionNeedsToIncrease: boolean;
		readonly isFailedToExtractRuntimeVersion: boolean;
		readonly isNonDefaultComposite: boolean;
		readonly isNonZeroRefCount: boolean;
		readonly isCallFiltered: boolean;
		readonly type:
			| "InvalidSpecName"
			| "SpecVersionNeedsToIncrease"
			| "FailedToExtractRuntimeVersion"
			| "NonDefaultComposite"
			| "NonZeroRefCount"
			| "CallFiltered";
	}

	/** @name SpConsensusBabeDigestsPreDigest (372) */
	interface SpConsensusBabeDigestsPreDigest extends Enum {
		readonly isPrimary: boolean;
		readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
		readonly isSecondaryPlain: boolean;
		readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
		readonly isSecondaryVRF: boolean;
		readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
		readonly type: "Primary" | "SecondaryPlain" | "SecondaryVRF";
	}

	/** @name SpConsensusBabeDigestsPrimaryPreDigest (373) */
	interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
		readonly authorityIndex: u32;
		readonly slot: u64;
		readonly vrfOutput: U8aFixed;
		readonly vrfProof: U8aFixed;
	}

	/** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (374) */
	interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
		readonly authorityIndex: u32;
		readonly slot: u64;
	}

	/** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (375) */
	interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
		readonly authorityIndex: u32;
		readonly slot: u64;
		readonly vrfOutput: U8aFixed;
		readonly vrfProof: U8aFixed;
	}

	/** @name SpConsensusBabeBabeEpochConfiguration (377) */
	interface SpConsensusBabeBabeEpochConfiguration extends Struct {
		readonly c: ITuple<[u64, u64]>;
		readonly allowedSlots: SpConsensusBabeAllowedSlots;
	}

	/** @name PalletBabeError (378) */
	interface PalletBabeError extends Enum {
		readonly isInvalidEquivocationProof: boolean;
		readonly isInvalidKeyOwnershipProof: boolean;
		readonly isDuplicateOffenceReport: boolean;
		readonly isInvalidConfiguration: boolean;
		readonly type:
			| "InvalidEquivocationProof"
			| "InvalidKeyOwnershipProof"
			| "DuplicateOffenceReport"
			| "InvalidConfiguration";
	}

	/** @name PalletSchedulerScheduledV3 (381) */
	interface PalletSchedulerScheduledV3 extends Struct {
		readonly maybeId: Option<Bytes>;
		readonly priority: u8;
		readonly call: FrameSupportScheduleMaybeHashed;
		readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
		readonly origin: SeedRuntimeOriginCaller;
	}

	/** @name PalletSchedulerError (382) */
	interface PalletSchedulerError extends Enum {
		readonly isFailedToSchedule: boolean;
		readonly isNotFound: boolean;
		readonly isTargetBlockNumberInPast: boolean;
		readonly isRescheduleNoChange: boolean;
		readonly type:
			| "FailedToSchedule"
			| "NotFound"
			| "TargetBlockNumberInPast"
			| "RescheduleNoChange";
	}

	/** @name PalletUtilityError (383) */
	interface PalletUtilityError extends Enum {
		readonly isTooManyCalls: boolean;
		readonly type: "TooManyCalls";
	}

	/** @name PalletRecoveryRecoveryConfig (384) */
	interface PalletRecoveryRecoveryConfig extends Struct {
		readonly delayPeriod: u32;
		readonly deposit: u128;
		readonly friends: Vec<SeedPrimitivesSignatureAccountId20>;
		readonly threshold: u16;
	}

	/** @name PalletRecoveryActiveRecovery (387) */
	interface PalletRecoveryActiveRecovery extends Struct {
		readonly created: u32;
		readonly deposit: u128;
		readonly friends: Vec<SeedPrimitivesSignatureAccountId20>;
	}

	/** @name PalletRecoveryError (388) */
	interface PalletRecoveryError extends Enum {
		readonly isNotAllowed: boolean;
		readonly isZeroThreshold: boolean;
		readonly isNotEnoughFriends: boolean;
		readonly isMaxFriends: boolean;
		readonly isNotSorted: boolean;
		readonly isNotRecoverable: boolean;
		readonly isAlreadyRecoverable: boolean;
		readonly isAlreadyStarted: boolean;
		readonly isNotStarted: boolean;
		readonly isNotFriend: boolean;
		readonly isDelayPeriod: boolean;
		readonly isAlreadyVouched: boolean;
		readonly isThreshold: boolean;
		readonly isStillActive: boolean;
		readonly isAlreadyProxy: boolean;
		readonly isBadState: boolean;
		readonly type:
			| "NotAllowed"
			| "ZeroThreshold"
			| "NotEnoughFriends"
			| "MaxFriends"
			| "NotSorted"
			| "NotRecoverable"
			| "AlreadyRecoverable"
			| "AlreadyStarted"
			| "NotStarted"
			| "NotFriend"
			| "DelayPeriod"
			| "AlreadyVouched"
			| "Threshold"
			| "StillActive"
			| "AlreadyProxy"
			| "BadState";
	}

	/** @name PalletMultisigMultisig (390) */
	interface PalletMultisigMultisig extends Struct {
		readonly when: PalletMultisigTimepoint;
		readonly deposit: u128;
		readonly depositor: SeedPrimitivesSignatureAccountId20;
		readonly approvals: Vec<SeedPrimitivesSignatureAccountId20>;
	}

	/** @name PalletMultisigError (392) */
	interface PalletMultisigError extends Enum {
		readonly isMinimumThreshold: boolean;
		readonly isAlreadyApproved: boolean;
		readonly isNoApprovalsNeeded: boolean;
		readonly isTooFewSignatories: boolean;
		readonly isTooManySignatories: boolean;
		readonly isSignatoriesOutOfOrder: boolean;
		readonly isSenderInSignatories: boolean;
		readonly isNotFound: boolean;
		readonly isNotOwner: boolean;
		readonly isNoTimepoint: boolean;
		readonly isWrongTimepoint: boolean;
		readonly isUnexpectedTimepoint: boolean;
		readonly isMaxWeightTooLow: boolean;
		readonly isAlreadyStored: boolean;
		readonly type:
			| "MinimumThreshold"
			| "AlreadyApproved"
			| "NoApprovalsNeeded"
			| "TooFewSignatories"
			| "TooManySignatories"
			| "SignatoriesOutOfOrder"
			| "SenderInSignatories"
			| "NotFound"
			| "NotOwner"
			| "NoTimepoint"
			| "WrongTimepoint"
			| "UnexpectedTimepoint"
			| "MaxWeightTooLow"
			| "AlreadyStored";
	}

	/** @name PalletBalancesBalanceLock (394) */
	interface PalletBalancesBalanceLock extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
		readonly reasons: PalletBalancesReasons;
	}

	/** @name PalletBalancesReasons (395) */
	interface PalletBalancesReasons extends Enum {
		readonly isFee: boolean;
		readonly isMisc: boolean;
		readonly isAll: boolean;
		readonly type: "Fee" | "Misc" | "All";
	}

	/** @name PalletBalancesReserveData (398) */
	interface PalletBalancesReserveData extends Struct {
		readonly id: U8aFixed;
		readonly amount: u128;
	}

	/** @name PalletBalancesReleases (400) */
	interface PalletBalancesReleases extends Enum {
		readonly isV100: boolean;
		readonly isV200: boolean;
		readonly type: "V100" | "V200";
	}

	/** @name PalletBalancesError (401) */
	interface PalletBalancesError extends Enum {
		readonly isVestingBalance: boolean;
		readonly isLiquidityRestrictions: boolean;
		readonly isInsufficientBalance: boolean;
		readonly isExistentialDeposit: boolean;
		readonly isKeepAlive: boolean;
		readonly isExistingVestingSchedule: boolean;
		readonly isDeadAccount: boolean;
		readonly isTooManyReserves: boolean;
		readonly type:
			| "VestingBalance"
			| "LiquidityRestrictions"
			| "InsufficientBalance"
			| "ExistentialDeposit"
			| "KeepAlive"
			| "ExistingVestingSchedule"
			| "DeadAccount"
			| "TooManyReserves";
	}

	/** @name PalletAssetsAssetDetails (402) */
	interface PalletAssetsAssetDetails extends Struct {
		readonly owner: SeedPrimitivesSignatureAccountId20;
		readonly issuer: SeedPrimitivesSignatureAccountId20;
		readonly admin: SeedPrimitivesSignatureAccountId20;
		readonly freezer: SeedPrimitivesSignatureAccountId20;
		readonly supply: u128;
		readonly deposit: u128;
		readonly minBalance: u128;
		readonly isSufficient: bool;
		readonly accounts: u32;
		readonly sufficients: u32;
		readonly approvals: u32;
		readonly isFrozen: bool;
	}

	/** @name PalletAssetsAssetAccount (404) */
	interface PalletAssetsAssetAccount extends Struct {
		readonly balance: u128;
		readonly isFrozen: bool;
		readonly reason: PalletAssetsExistenceReason;
		readonly extra: Null;
	}

	/** @name PalletAssetsExistenceReason (405) */
	interface PalletAssetsExistenceReason extends Enum {
		readonly isConsumer: boolean;
		readonly isSufficient: boolean;
		readonly isDepositHeld: boolean;
		readonly asDepositHeld: u128;
		readonly isDepositRefunded: boolean;
		readonly type: "Consumer" | "Sufficient" | "DepositHeld" | "DepositRefunded";
	}

	/** @name PalletAssetsApproval (407) */
	interface PalletAssetsApproval extends Struct {
		readonly amount: u128;
		readonly deposit: u128;
	}

	/** @name PalletAssetsAssetMetadata (408) */
	interface PalletAssetsAssetMetadata extends Struct {
		readonly deposit: u128;
		readonly name: Bytes;
		readonly symbol: Bytes;
		readonly decimals: u8;
		readonly isFrozen: bool;
	}

	/** @name PalletAssetsError (409) */
	interface PalletAssetsError extends Enum {
		readonly isBalanceLow: boolean;
		readonly isNoAccount: boolean;
		readonly isNoPermission: boolean;
		readonly isUnknown: boolean;
		readonly isFrozen: boolean;
		readonly isInUse: boolean;
		readonly isBadWitness: boolean;
		readonly isMinBalanceZero: boolean;
		readonly isNoProvider: boolean;
		readonly isBadMetadata: boolean;
		readonly isUnapproved: boolean;
		readonly isWouldDie: boolean;
		readonly isAlreadyExists: boolean;
		readonly isNoDeposit: boolean;
		readonly isWouldBurn: boolean;
		readonly type:
			| "BalanceLow"
			| "NoAccount"
			| "NoPermission"
			| "Unknown"
			| "Frozen"
			| "InUse"
			| "BadWitness"
			| "MinBalanceZero"
			| "NoProvider"
			| "BadMetadata"
			| "Unapproved"
			| "WouldDie"
			| "AlreadyExists"
			| "NoDeposit"
			| "WouldBurn";
	}

	/** @name FrameSupportPalletId (413) */
	interface FrameSupportPalletId extends U8aFixed {}

	/** @name PalletAssetsExtError (414) */
	interface PalletAssetsExtError extends Enum {
		readonly isDecimalsTooHigh: boolean;
		readonly isNoAvailableIds: boolean;
		readonly isNoPermission: boolean;
		readonly isBalanceLow: boolean;
		readonly isNoAccount: boolean;
		readonly isOverflow: boolean;
		readonly isMaxHolds: boolean;
		readonly isCreateAssetFailed: boolean;
		readonly type:
			| "DecimalsTooHigh"
			| "NoAvailableIds"
			| "NoPermission"
			| "BalanceLow"
			| "NoAccount"
			| "Overflow"
			| "MaxHolds"
			| "CreateAssetFailed";
	}

	/** @name PalletAuthorshipUncleEntryItem (416) */
	interface PalletAuthorshipUncleEntryItem extends Enum {
		readonly isInclusionHeight: boolean;
		readonly asInclusionHeight: u32;
		readonly isUncle: boolean;
		readonly asUncle: ITuple<[H256, Option<SeedPrimitivesSignatureAccountId20>]>;
		readonly type: "InclusionHeight" | "Uncle";
	}

	/** @name PalletAuthorshipError (418) */
	interface PalletAuthorshipError extends Enum {
		readonly isInvalidUncleParent: boolean;
		readonly isUnclesAlreadySet: boolean;
		readonly isTooManyUncles: boolean;
		readonly isGenesisUncle: boolean;
		readonly isTooHighUncle: boolean;
		readonly isUncleAlreadyIncluded: boolean;
		readonly isOldUncle: boolean;
		readonly type:
			| "InvalidUncleParent"
			| "UnclesAlreadySet"
			| "TooManyUncles"
			| "GenesisUncle"
			| "TooHighUncle"
			| "UncleAlreadyIncluded"
			| "OldUncle";
	}

	/** @name PalletStakingStakingLedger (419) */
	interface PalletStakingStakingLedger extends Struct {
		readonly stash: SeedPrimitivesSignatureAccountId20;
		readonly total: Compact<u128>;
		readonly active: Compact<u128>;
		readonly unlocking: Vec<PalletStakingUnlockChunk>;
		readonly claimedRewards: Vec<u32>;
	}

	/** @name PalletStakingUnlockChunk (421) */
	interface PalletStakingUnlockChunk extends Struct {
		readonly value: Compact<u128>;
		readonly era: Compact<u32>;
	}

	/** @name PalletStakingNominations (424) */
	interface PalletStakingNominations extends Struct {
		readonly targets: Vec<SeedPrimitivesSignatureAccountId20>;
		readonly submittedIn: u32;
		readonly suppressed: bool;
	}

	/** @name PalletStakingActiveEraInfo (426) */
	interface PalletStakingActiveEraInfo extends Struct {
		readonly index: u32;
		readonly start: Option<u64>;
	}

	/** @name PalletStakingEraRewardPoints (428) */
	interface PalletStakingEraRewardPoints extends Struct {
		readonly total: u32;
		readonly individual: BTreeMap<SeedPrimitivesSignatureAccountId20, u32>;
	}

	/** @name PalletStakingForcing (432) */
	interface PalletStakingForcing extends Enum {
		readonly isNotForcing: boolean;
		readonly isForceNew: boolean;
		readonly isForceNone: boolean;
		readonly isForceAlways: boolean;
		readonly type: "NotForcing" | "ForceNew" | "ForceNone" | "ForceAlways";
	}

	/** @name PalletStakingUnappliedSlash (434) */
	interface PalletStakingUnappliedSlash extends Struct {
		readonly validator: SeedPrimitivesSignatureAccountId20;
		readonly own: u128;
		readonly others: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
		readonly reporters: Vec<SeedPrimitivesSignatureAccountId20>;
		readonly payout: u128;
	}

	/** @name PalletStakingSlashingSlashingSpans (436) */
	interface PalletStakingSlashingSlashingSpans extends Struct {
		readonly spanIndex: u32;
		readonly lastStart: u32;
		readonly lastNonzeroSlash: u32;
		readonly prior: Vec<u32>;
	}

	/** @name PalletStakingSlashingSpanRecord (437) */
	interface PalletStakingSlashingSpanRecord extends Struct {
		readonly slashed: u128;
		readonly paidOut: u128;
	}

	/** @name PalletStakingReleases (440) */
	interface PalletStakingReleases extends Enum {
		readonly isV100Ancient: boolean;
		readonly isV200: boolean;
		readonly isV300: boolean;
		readonly isV400: boolean;
		readonly isV500: boolean;
		readonly isV600: boolean;
		readonly isV700: boolean;
		readonly isV800: boolean;
		readonly isV900: boolean;
		readonly isV1000: boolean;
		readonly isV1100: boolean;
		readonly isV1200: boolean;
		readonly type:
			| "V100Ancient"
			| "V200"
			| "V300"
			| "V400"
			| "V500"
			| "V600"
			| "V700"
			| "V800"
			| "V900"
			| "V1000"
			| "V1100"
			| "V1200";
	}

	/** @name PalletStakingPalletError (441) */
	interface PalletStakingPalletError extends Enum {
		readonly isNotController: boolean;
		readonly isNotStash: boolean;
		readonly isAlreadyBonded: boolean;
		readonly isAlreadyPaired: boolean;
		readonly isEmptyTargets: boolean;
		readonly isDuplicateIndex: boolean;
		readonly isInvalidSlashIndex: boolean;
		readonly isInsufficientBond: boolean;
		readonly isNoMoreChunks: boolean;
		readonly isNoUnlockChunk: boolean;
		readonly isFundedTarget: boolean;
		readonly isInvalidEraToReward: boolean;
		readonly isInvalidNumberOfNominations: boolean;
		readonly isNotSortedAndUnique: boolean;
		readonly isAlreadyClaimed: boolean;
		readonly isIncorrectHistoryDepth: boolean;
		readonly isIncorrectSlashingSpans: boolean;
		readonly isBadState: boolean;
		readonly isTooManyTargets: boolean;
		readonly isBadTarget: boolean;
		readonly isCannotChillOther: boolean;
		readonly isTooManyNominators: boolean;
		readonly isTooManyValidators: boolean;
		readonly isCommissionTooLow: boolean;
		readonly isBoundNotMet: boolean;
		readonly type:
			| "NotController"
			| "NotStash"
			| "AlreadyBonded"
			| "AlreadyPaired"
			| "EmptyTargets"
			| "DuplicateIndex"
			| "InvalidSlashIndex"
			| "InsufficientBond"
			| "NoMoreChunks"
			| "NoUnlockChunk"
			| "FundedTarget"
			| "InvalidEraToReward"
			| "InvalidNumberOfNominations"
			| "NotSortedAndUnique"
			| "AlreadyClaimed"
			| "IncorrectHistoryDepth"
			| "IncorrectSlashingSpans"
			| "BadState"
			| "TooManyTargets"
			| "BadTarget"
			| "CannotChillOther"
			| "TooManyNominators"
			| "TooManyValidators"
			| "CommissionTooLow"
			| "BoundNotMet";
	}

	/** @name SpStakingOffenceOffenceDetails (442) */
	interface SpStakingOffenceOffenceDetails extends Struct {
		readonly offender: ITuple<[SeedPrimitivesSignatureAccountId20, PalletStakingExposure]>;
		readonly reporters: Vec<SeedPrimitivesSignatureAccountId20>;
	}

	/** @name SpCoreCryptoKeyTypeId (447) */
	interface SpCoreCryptoKeyTypeId extends U8aFixed {}

	/** @name PalletSessionError (448) */
	interface PalletSessionError extends Enum {
		readonly isInvalidProof: boolean;
		readonly isNoAssociatedValidatorId: boolean;
		readonly isDuplicatedKey: boolean;
		readonly isNoKeys: boolean;
		readonly isNoAccount: boolean;
		readonly type:
			| "InvalidProof"
			| "NoAssociatedValidatorId"
			| "DuplicatedKey"
			| "NoKeys"
			| "NoAccount";
	}

	/** @name PalletGrandpaStoredState (449) */
	interface PalletGrandpaStoredState extends Enum {
		readonly isLive: boolean;
		readonly isPendingPause: boolean;
		readonly asPendingPause: {
			readonly scheduledAt: u32;
			readonly delay: u32;
		} & Struct;
		readonly isPaused: boolean;
		readonly isPendingResume: boolean;
		readonly asPendingResume: {
			readonly scheduledAt: u32;
			readonly delay: u32;
		} & Struct;
		readonly type: "Live" | "PendingPause" | "Paused" | "PendingResume";
	}

	/** @name PalletGrandpaStoredPendingChange (450) */
	interface PalletGrandpaStoredPendingChange extends Struct {
		readonly scheduledAt: u32;
		readonly delay: u32;
		readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
		readonly forced: Option<u32>;
	}

	/** @name PalletGrandpaError (452) */
	interface PalletGrandpaError extends Enum {
		readonly isPauseFailed: boolean;
		readonly isResumeFailed: boolean;
		readonly isChangePending: boolean;
		readonly isTooSoon: boolean;
		readonly isInvalidKeyOwnershipProof: boolean;
		readonly isInvalidEquivocationProof: boolean;
		readonly isDuplicateOffenceReport: boolean;
		readonly type:
			| "PauseFailed"
			| "ResumeFailed"
			| "ChangePending"
			| "TooSoon"
			| "InvalidKeyOwnershipProof"
			| "InvalidEquivocationProof"
			| "DuplicateOffenceReport";
	}

	/** @name PalletImOnlineBoundedOpaqueNetworkState (456) */
	interface PalletImOnlineBoundedOpaqueNetworkState extends Struct {
		readonly peerId: Bytes;
		readonly externalAddresses: Vec<Bytes>;
	}

	/** @name PalletImOnlineError (460) */
	interface PalletImOnlineError extends Enum {
		readonly isInvalidKey: boolean;
		readonly isDuplicatedHeartbeat: boolean;
		readonly type: "InvalidKey" | "DuplicatedHeartbeat";
	}

	/** @name PalletSudoError (461) */
	interface PalletSudoError extends Enum {
		readonly isRequireSudo: boolean;
		readonly type: "RequireSudo";
	}

	/** @name PalletTransactionPaymentReleases (463) */
	interface PalletTransactionPaymentReleases extends Enum {
		readonly isV1Ancient: boolean;
		readonly isV2: boolean;
		readonly type: "V1Ancient" | "V2";
	}

	/** @name PalletDexTradingPairStatus (465) */
	interface PalletDexTradingPairStatus extends Enum {
		readonly isNotEnabled: boolean;
		readonly isEnabled: boolean;
		readonly type: "NotEnabled" | "Enabled";
	}

	/** @name PalletDexError (467) */
	interface PalletDexError extends Enum {
		readonly isMustBeEnabled: boolean;
		readonly isMustBeNotEnabled: boolean;
		readonly isInsufficientInputAmount: boolean;
		readonly isInvalidInputAmounts: boolean;
		readonly isInsufficientAmount: boolean;
		readonly isInsufficientAmountA: boolean;
		readonly isInsufficientAmountB: boolean;
		readonly isInsufficientLiquidityBurnt: boolean;
		readonly isInsufficientWithdrawnAmountA: boolean;
		readonly isInsufficientWithdrawnAmountB: boolean;
		readonly isInsufficientOutputAmount: boolean;
		readonly isInvalidLiquidityIncrement: boolean;
		readonly isInvalidConstantProduct: boolean;
		readonly isIdenticalTokenAddress: boolean;
		readonly isInvalidAssetId: boolean;
		readonly isInvalidTradingPathLength: boolean;
		readonly isInsufficientTargetAmount: boolean;
		readonly isExcessiveSupplyAmount: boolean;
		readonly isInsufficientLiquidity: boolean;
		readonly isZeroSupplyAmount: boolean;
		readonly isZeroTargetAmount: boolean;
		readonly isLiquidityProviderTokenNotCreated: boolean;
		readonly isExpiredDeadline: boolean;
		readonly type:
			| "MustBeEnabled"
			| "MustBeNotEnabled"
			| "InsufficientInputAmount"
			| "InvalidInputAmounts"
			| "InsufficientAmount"
			| "InsufficientAmountA"
			| "InsufficientAmountB"
			| "InsufficientLiquidityBurnt"
			| "InsufficientWithdrawnAmountA"
			| "InsufficientWithdrawnAmountB"
			| "InsufficientOutputAmount"
			| "InvalidLiquidityIncrement"
			| "InvalidConstantProduct"
			| "IdenticalTokenAddress"
			| "InvalidAssetId"
			| "InvalidTradingPathLength"
			| "InsufficientTargetAmount"
			| "ExcessiveSupplyAmount"
			| "InsufficientLiquidity"
			| "ZeroSupplyAmount"
			| "ZeroTargetAmount"
			| "LiquidityProviderTokenNotCreated"
			| "ExpiredDeadline";
	}

	/** @name PalletNftCollectionInformation (468) */
	interface PalletNftCollectionInformation extends Struct {
		readonly owner: SeedPrimitivesSignatureAccountId20;
		readonly name: Bytes;
		readonly metadataScheme: Bytes;
		readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
		readonly maxIssuance: Option<u32>;
		readonly originChain: SeedPrimitivesNftOriginChain;
		readonly nextSerialNumber: u32;
		readonly collectionIssuance: u32;
		readonly crossChainCompatibility: PalletNftCrossChainCompatibility;
		readonly ownedTokens: Vec<PalletNftTokenOwnership>;
	}

	/** @name PalletNftTokenOwnership (470) */
	interface PalletNftTokenOwnership extends Struct {
		readonly owner: SeedPrimitivesSignatureAccountId20;
		readonly ownedSerials: Vec<u32>;
	}

	/** @name SeedPalletCommonUtilsPublicMintInformation (472) */
	interface SeedPalletCommonUtilsPublicMintInformation extends Struct {
		readonly enabled: bool;
		readonly pricingDetails: Option<ITuple<[u32, u128]>>;
	}

	/** @name SeedPrimitivesNftTokenLockReason (473) */
	interface SeedPrimitivesNftTokenLockReason extends Enum {
		readonly isListed: boolean;
		readonly asListed: u128;
		readonly type: "Listed";
	}

	/** @name PalletNftError (474) */
	interface PalletNftError extends Enum {
		readonly isCollectionNameInvalid: boolean;
		readonly isNoAvailableIds: boolean;
		readonly isNotTokenOwner: boolean;
		readonly isNoToken: boolean;
		readonly isNotCollectionOwner: boolean;
		readonly isPublicMintDisabled: boolean;
		readonly isTokenLocked: boolean;
		readonly isRoyaltiesInvalid: boolean;
		readonly isNoCollectionFound: boolean;
		readonly isInvalidMetadataPath: boolean;
		readonly isInvalidNewOwner: boolean;
		readonly isTokenLimitExceeded: boolean;
		readonly isMintLimitExceeded: boolean;
		readonly isInvalidMaxIssuance: boolean;
		readonly isMaxIssuanceAlreadySet: boolean;
		readonly isMaxIssuanceReached: boolean;
		readonly isAttemptedMintOnBridgedToken: boolean;
		readonly isCannotClaimNonClaimableCollections: boolean;
		readonly isInitialIssuanceNotZero: boolean;
		readonly isCollectionIssuanceNotZero: boolean;
		readonly isBlockedMint: boolean;
		readonly type:
			| "CollectionNameInvalid"
			| "NoAvailableIds"
			| "NotTokenOwner"
			| "NoToken"
			| "NotCollectionOwner"
			| "PublicMintDisabled"
			| "TokenLocked"
			| "RoyaltiesInvalid"
			| "NoCollectionFound"
			| "InvalidMetadataPath"
			| "InvalidNewOwner"
			| "TokenLimitExceeded"
			| "MintLimitExceeded"
			| "InvalidMaxIssuance"
			| "MaxIssuanceAlreadySet"
			| "MaxIssuanceReached"
			| "AttemptedMintOnBridgedToken"
			| "CannotClaimNonClaimableCollections"
			| "InitialIssuanceNotZero"
			| "CollectionIssuanceNotZero"
			| "BlockedMint";
	}

	/** @name PalletSftSftCollectionInformation (475) */
	interface PalletSftSftCollectionInformation extends Struct {
		readonly collectionOwner: SeedPrimitivesSignatureAccountId20;
		readonly collectionName: Bytes;
		readonly metadataScheme: Bytes;
		readonly royaltiesSchedule: Option<SeedPrimitivesNftRoyaltiesSchedule>;
		readonly originChain: SeedPrimitivesNftOriginChain;
		readonly nextSerialNumber: u32;
	}

	/** @name PalletSftSftTokenInformation (476) */
	interface PalletSftSftTokenInformation extends Struct {
		readonly tokenName: Bytes;
		readonly maxIssuance: Option<u128>;
		readonly tokenIssuance: u128;
		readonly ownedTokens: Vec<
			ITuple<[SeedPrimitivesSignatureAccountId20, PalletSftSftTokenBalance]>
		>;
	}

	/** @name PalletSftSftTokenBalance (479) */
	interface PalletSftSftTokenBalance extends Struct {
		readonly freeBalance: u128;
		readonly reservedBalance: u128;
	}

	/** @name PalletSftError (481) */
	interface PalletSftError extends Enum {
		readonly isNameInvalid: boolean;
		readonly isNoToken: boolean;
		readonly isNotCollectionOwner: boolean;
		readonly isRoyaltiesInvalid: boolean;
		readonly isNoCollectionFound: boolean;
		readonly isInsufficientBalance: boolean;
		readonly isInvalidQuantity: boolean;
		readonly isInvalidMaxIssuance: boolean;
		readonly isInvalidNewOwner: boolean;
		readonly isMaxIssuanceAlreadySet: boolean;
		readonly isMaxIssuanceReached: boolean;
		readonly isMaxOwnersReached: boolean;
		readonly isOverflow: boolean;
		readonly isPublicMintDisabled: boolean;
		readonly isTokenLimitExceeded: boolean;
		readonly type:
			| "NameInvalid"
			| "NoToken"
			| "NotCollectionOwner"
			| "RoyaltiesInvalid"
			| "NoCollectionFound"
			| "InsufficientBalance"
			| "InvalidQuantity"
			| "InvalidMaxIssuance"
			| "InvalidNewOwner"
			| "MaxIssuanceAlreadySet"
			| "MaxIssuanceReached"
			| "MaxOwnersReached"
			| "Overflow"
			| "PublicMintDisabled"
			| "TokenLimitExceeded";
	}

	/** @name PalletXrplBridgeDelayedWithdrawal (486) */
	interface PalletXrplBridgeDelayedWithdrawal extends Struct {
		readonly sender: SeedPrimitivesSignatureAccountId20;
		readonly destinationTag: Option<u32>;
		readonly withdrawTx: PalletXrplBridgeXrpWithdrawTransaction;
	}

	/** @name PalletXrplBridgeXrpWithdrawTransaction (487) */
	interface PalletXrplBridgeXrpWithdrawTransaction extends Struct {
		readonly txFee: u64;
		readonly txNonce: u32;
		readonly txTicketSequence: u32;
		readonly amount: u128;
		readonly destination: H160;
	}

	/** @name PalletXrplBridgeXrplTicketSequenceParams (490) */
	interface PalletXrplBridgeXrplTicketSequenceParams extends Struct {
		readonly startSequence: u32;
		readonly bucketSize: u32;
	}

	/** @name PalletXrplBridgeError (491) */
	interface PalletXrplBridgeError extends Enum {
		readonly isNotPermitted: boolean;
		readonly isNoAvailablePaymentIds: boolean;
		readonly isDelayScheduleAtCapacity: boolean;
		readonly isNoTransactionDetails: boolean;
		readonly isRelayerDoesNotExists: boolean;
		readonly isWithdrawInvalidAmount: boolean;
		readonly isDoorAddressNotSet: boolean;
		readonly isTooManySigners: boolean;
		readonly isInvalidSigners: boolean;
		readonly isInvalidHighestPrunedIndex: boolean;
		readonly isTxReplay: boolean;
		readonly isNextTicketSequenceParamsNotSet: boolean;
		readonly isNextTicketSequenceParamsInvalid: boolean;
		readonly isTicketSequenceParamsInvalid: boolean;
		readonly isCannotProcessMoreTransactionsAtThatBlock: boolean;
		readonly isCannotPruneActiveLedgerIndex: boolean;
		readonly isOutSideSubmissionWindow: boolean;
		readonly isTooManyTransactionsPerLedger: boolean;
		readonly type:
			| "NotPermitted"
			| "NoAvailablePaymentIds"
			| "DelayScheduleAtCapacity"
			| "NoTransactionDetails"
			| "RelayerDoesNotExists"
			| "WithdrawInvalidAmount"
			| "DoorAddressNotSet"
			| "TooManySigners"
			| "InvalidSigners"
			| "InvalidHighestPrunedIndex"
			| "TxReplay"
			| "NextTicketSequenceParamsNotSet"
			| "NextTicketSequenceParamsInvalid"
			| "TicketSequenceParamsInvalid"
			| "CannotProcessMoreTransactionsAtThatBlock"
			| "CannotPruneActiveLedgerIndex"
			| "OutSideSubmissionWindow"
			| "TooManyTransactionsPerLedger";
	}

	/** @name PalletXrplError (492) */
	interface PalletXrplError extends Enum {
		readonly isXrplTransaction: boolean;
		readonly isXrplTransactionAccount: boolean;
		readonly isCallFiltered: boolean;
		readonly type: "XrplTransaction" | "XrplTransactionAccount" | "CallFiltered";
	}

	/** @name PalletTokenApprovalsError (495) */
	interface PalletTokenApprovalsError extends Enum {
		readonly isNoToken: boolean;
		readonly isNotTokenOwner: boolean;
		readonly isNotTokenOwnerOrApproved: boolean;
		readonly isCallerNotOperator: boolean;
		readonly isApprovedAmountTooLow: boolean;
		readonly isCallerNotApproved: boolean;
		readonly isAlreadyApproved: boolean;
		readonly isApprovalDoesntExist: boolean;
		readonly type:
			| "NoToken"
			| "NotTokenOwner"
			| "NotTokenOwnerOrApproved"
			| "CallerNotOperator"
			| "ApprovedAmountTooLow"
			| "CallerNotApproved"
			| "AlreadyApproved"
			| "ApprovalDoesntExist";
	}

	/** @name PalletEchoError (497) */
	interface PalletEchoError extends Enum {
		readonly isNoAvailableIds: boolean;
		readonly isInvalidParameter: boolean;
		readonly isInvalidAbiEncoding: boolean;
		readonly type: "NoAvailableIds" | "InvalidParameter" | "InvalidAbiEncoding";
	}

	/** @name PalletMarketplaceMarketplace (498) */
	interface PalletMarketplaceMarketplace extends Struct {
		readonly account: SeedPrimitivesSignatureAccountId20;
		readonly entitlement: Permill;
	}

	/** @name PalletMarketplaceListing (499) */
	interface PalletMarketplaceListing extends Enum {
		readonly isFixedPrice: boolean;
		readonly asFixedPrice: PalletMarketplaceFixedPriceListing;
		readonly isAuction: boolean;
		readonly asAuction: PalletMarketplaceAuctionListing;
		readonly type: "FixedPrice" | "Auction";
	}

	/** @name PalletMarketplaceFixedPriceListing (500) */
	interface PalletMarketplaceFixedPriceListing extends Struct {
		readonly paymentAsset: u32;
		readonly fixedPrice: u128;
		readonly close: u32;
		readonly buyer: Option<SeedPrimitivesSignatureAccountId20>;
		readonly seller: SeedPrimitivesSignatureAccountId20;
		readonly tokens: PalletMarketplaceListingTokens;
		readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		readonly marketplaceId: Option<u32>;
	}

	/** @name PalletMarketplaceAuctionListing (501) */
	interface PalletMarketplaceAuctionListing extends Struct {
		readonly paymentAsset: u32;
		readonly reservePrice: u128;
		readonly close: u32;
		readonly seller: SeedPrimitivesSignatureAccountId20;
		readonly tokens: PalletMarketplaceListingTokens;
		readonly royaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		readonly marketplaceId: Option<u32>;
	}

	/** @name PalletMarketplaceOfferType (502) */
	interface PalletMarketplaceOfferType extends Enum {
		readonly isSimple: boolean;
		readonly asSimple: PalletMarketplaceSimpleOffer;
		readonly type: "Simple";
	}

	/** @name PalletMarketplaceSimpleOffer (503) */
	interface PalletMarketplaceSimpleOffer extends Struct {
		readonly tokenId: ITuple<[u32, u32]>;
		readonly assetId: u32;
		readonly amount: u128;
		readonly buyer: SeedPrimitivesSignatureAccountId20;
		readonly marketplaceId: Option<u32>;
	}

	/** @name PalletMarketplaceError (505) */
	interface PalletMarketplaceError extends Enum {
		readonly isNoAvailableIds: boolean;
		readonly isNotTokenOwner: boolean;
		readonly isNotForFixedPriceSale: boolean;
		readonly isNotForAuction: boolean;
		readonly isNotCollectionOwner: boolean;
		readonly isTokenNotListed: boolean;
		readonly isMaxOffersReached: boolean;
		readonly isTokenLocked: boolean;
		readonly isRoyaltiesInvalid: boolean;
		readonly isBidTooLow: boolean;
		readonly isMixedBundleSale: boolean;
		readonly isMarketplaceNotRegistered: boolean;
		readonly isInvalidMetadataPath: boolean;
		readonly isInvalidOffer: boolean;
		readonly isNotBuyer: boolean;
		readonly isNotSeller: boolean;
		readonly isIsTokenOwner: boolean;
		readonly isZeroOffer: boolean;
		readonly isZeroBalance: boolean;
		readonly isTokenOnAuction: boolean;
		readonly isEmptyTokens: boolean;
		readonly type:
			| "NoAvailableIds"
			| "NotTokenOwner"
			| "NotForFixedPriceSale"
			| "NotForAuction"
			| "NotCollectionOwner"
			| "TokenNotListed"
			| "MaxOffersReached"
			| "TokenLocked"
			| "RoyaltiesInvalid"
			| "BidTooLow"
			| "MixedBundleSale"
			| "MarketplaceNotRegistered"
			| "InvalidMetadataPath"
			| "InvalidOffer"
			| "NotBuyer"
			| "NotSeller"
			| "IsTokenOwner"
			| "ZeroOffer"
			| "ZeroBalance"
			| "TokenOnAuction"
			| "EmptyTokens";
	}

	/** @name PalletPreimageRequestStatus (506) */
	interface PalletPreimageRequestStatus extends Enum {
		readonly isUnrequested: boolean;
		readonly asUnrequested: Option<ITuple<[SeedPrimitivesSignatureAccountId20, u128]>>;
		readonly isRequested: boolean;
		readonly asRequested: u32;
		readonly type: "Unrequested" | "Requested";
	}

	/** @name PalletPreimageError (509) */
	interface PalletPreimageError extends Enum {
		readonly isTooLarge: boolean;
		readonly isAlreadyNoted: boolean;
		readonly isNotAuthorized: boolean;
		readonly isNotNoted: boolean;
		readonly isRequested: boolean;
		readonly isNotRequested: boolean;
		readonly type:
			| "TooLarge"
			| "AlreadyNoted"
			| "NotAuthorized"
			| "NotNoted"
			| "Requested"
			| "NotRequested";
	}

	/** @name PalletVortexVtxDistStatus (510) */
	interface PalletVortexVtxDistStatus extends Enum {
		readonly isDisabled: boolean;
		readonly isEnabled: boolean;
		readonly isTriggered: boolean;
		readonly isPaying: boolean;
		readonly isDone: boolean;
		readonly type: "Disabled" | "Enabled" | "Triggered" | "Paying" | "Done";
	}

	/** @name PalletVortexError (513) */
	interface PalletVortexError extends Enum {
		readonly isRequireAdmin: boolean;
		readonly isVtxDistIdNotAvailable: boolean;
		readonly isVtxDistAlreadyEnabled: boolean;
		readonly isVtxDistDisabled: boolean;
		readonly isInvalidEndBlock: boolean;
		readonly isNoVtxAssetMinted: boolean;
		readonly isInvalidAmount: boolean;
		readonly isVtxDistIdInUse: boolean;
		readonly isNotAValidator: boolean;
		readonly isVortexPeriodNotSet: boolean;
		readonly isPivotStringTooLong: boolean;
		readonly isAssetsShouldNotIncludeVtxAsset: boolean;
		readonly isCannotTrigger: boolean;
		readonly isCannotRedeem: boolean;
		readonly isNotTriggered: boolean;
		readonly type:
			| "RequireAdmin"
			| "VtxDistIdNotAvailable"
			| "VtxDistAlreadyEnabled"
			| "VtxDistDisabled"
			| "InvalidEndBlock"
			| "NoVtxAssetMinted"
			| "InvalidAmount"
			| "VtxDistIdInUse"
			| "NotAValidator"
			| "VortexPeriodNotSet"
			| "PivotStringTooLong"
			| "AssetsShouldNotIncludeVtxAsset"
			| "CannotTrigger"
			| "CannotRedeem"
			| "NotTriggered";
	}

	/** @name PalletFeeProxyError (514) */
	interface PalletFeeProxyError extends Enum {
		readonly isNestedFeePreferenceCall: boolean;
		readonly isFeeTokenIsGasToken: boolean;
		readonly type: "NestedFeePreferenceCall" | "FeeTokenIsGasToken";
	}

	/** @name PalletFeeControlFeeControlFeeConfig (515) */
	interface PalletFeeControlFeeControlFeeConfig extends Struct {
		readonly evmBaseFeePerGas: U256;
		readonly weightMultiplier: Perbill;
		readonly lengthMultiplier: u128;
	}

	/** @name PalletXls20Error (516) */
	interface PalletXls20Error extends Enum {
		readonly isNotRelayer: boolean;
		readonly isMappingAlreadyExists: boolean;
		readonly isXls20MintFeeTooLow: boolean;
		readonly isNotXLS20Compatible: boolean;
		readonly isNoToken: boolean;
		readonly isNotCollectionOwner: boolean;
		readonly type:
			| "NotRelayer"
			| "MappingAlreadyExists"
			| "Xls20MintFeeTooLow"
			| "NotXLS20Compatible"
			| "NoToken"
			| "NotCollectionOwner";
	}

	/** @name PalletDoughnutError (517) */
	interface PalletDoughnutError extends Enum {
		readonly isDoughnutDecodeFailed: boolean;
		readonly isUnsupportedDoughnutVersion: boolean;
		readonly isDoughnutVerifyFailed: boolean;
		readonly isUnauthorizedSender: boolean;
		readonly isCallerNotIssuer: boolean;
		readonly isDoughnutRevoked: boolean;
		readonly isHolderRevoked: boolean;
		readonly isToppingDecodeFailed: boolean;
		readonly isTrnDomainNotfound: boolean;
		readonly isToppingPermissionDenied: boolean;
		readonly isUnsupportedInnerCall: boolean;
		readonly isHolderNotWhitelisted: boolean;
		readonly type:
			| "DoughnutDecodeFailed"
			| "UnsupportedDoughnutVersion"
			| "DoughnutVerifyFailed"
			| "UnauthorizedSender"
			| "CallerNotIssuer"
			| "DoughnutRevoked"
			| "HolderRevoked"
			| "ToppingDecodeFailed"
			| "TrnDomainNotfound"
			| "ToppingPermissionDenied"
			| "UnsupportedInnerCall"
			| "HolderNotWhitelisted";
	}

	/** @name PalletMaintenanceModeError (519) */
	interface PalletMaintenanceModeError extends Enum {
		readonly isAccountBlocked: boolean;
		readonly isMaintenanceModeActive: boolean;
		readonly isInvalidPalletName: boolean;
		readonly isInvalidCallName: boolean;
		readonly isCannotBlock: boolean;
		readonly type:
			| "AccountBlocked"
			| "MaintenanceModeActive"
			| "InvalidPalletName"
			| "InvalidCallName"
			| "CannotBlock";
	}

	/** @name PalletCrowdsaleError (523) */
	interface PalletCrowdsaleError extends Enum {
		readonly isAccessDenied: boolean;
		readonly isNoAvailableIds: boolean;
		readonly isInvalidBlockRange: boolean;
		readonly isCrowdsaleNotFound: boolean;
		readonly isInvalidCrowdsaleStatus: boolean;
		readonly isCrowdsaleNotEnabled: boolean;
		readonly isInvalidSoftCapPrice: boolean;
		readonly isInvalidAsset: boolean;
		readonly isInvalidMaxIssuance: boolean;
		readonly isInvalidAmount: boolean;
		readonly isInvalidQuantity: boolean;
		readonly isVoucherClaimFailed: boolean;
		readonly isMaxIssuanceNotSet: boolean;
		readonly isCollectionIssuanceNotZero: boolean;
		readonly isCollectionPublicMintable: boolean;
		readonly isTooManySales: boolean;
		readonly isVouchersAlreadyClaimed: boolean;
		readonly isSaleDistributionFailed: boolean;
		readonly isSaleDurationTooLong: boolean;
		readonly isExtrinsicForbidden: boolean;
		readonly type:
			| "AccessDenied"
			| "NoAvailableIds"
			| "InvalidBlockRange"
			| "CrowdsaleNotFound"
			| "InvalidCrowdsaleStatus"
			| "CrowdsaleNotEnabled"
			| "InvalidSoftCapPrice"
			| "InvalidAsset"
			| "InvalidMaxIssuance"
			| "InvalidAmount"
			| "InvalidQuantity"
			| "VoucherClaimFailed"
			| "MaxIssuanceNotSet"
			| "CollectionIssuanceNotZero"
			| "CollectionPublicMintable"
			| "TooManySales"
			| "VouchersAlreadyClaimed"
			| "SaleDistributionFailed"
			| "SaleDurationTooLong"
			| "ExtrinsicForbidden";
	}

	/** @name PalletElectionProviderMultiPhasePhase (524) */
	interface PalletElectionProviderMultiPhasePhase extends Enum {
		readonly isOff: boolean;
		readonly isSigned: boolean;
		readonly isUnsigned: boolean;
		readonly asUnsigned: ITuple<[bool, u32]>;
		readonly isEmergency: boolean;
		readonly type: "Off" | "Signed" | "Unsigned" | "Emergency";
	}

	/** @name PalletElectionProviderMultiPhaseReadySolution (526) */
	interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
		readonly supports: Vec<ITuple<[SeedPrimitivesSignatureAccountId20, SpNposElectionsSupport]>>;
		readonly score: SpNposElectionsElectionScore;
		readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
	}

	/** @name PalletElectionProviderMultiPhaseRoundSnapshot (527) */
	interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
		readonly voters: Vec<
			ITuple<[SeedPrimitivesSignatureAccountId20, u64, Vec<SeedPrimitivesSignatureAccountId20>]>
		>;
		readonly targets: Vec<SeedPrimitivesSignatureAccountId20>;
	}

	/** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (534) */
	interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
		readonly who: SeedPrimitivesSignatureAccountId20;
		readonly deposit: u128;
		readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
		readonly callFee: u128;
	}

	/** @name PalletElectionProviderMultiPhaseError (535) */
	interface PalletElectionProviderMultiPhaseError extends Enum {
		readonly isPreDispatchEarlySubmission: boolean;
		readonly isPreDispatchWrongWinnerCount: boolean;
		readonly isPreDispatchWeakSubmission: boolean;
		readonly isSignedQueueFull: boolean;
		readonly isSignedCannotPayDeposit: boolean;
		readonly isSignedInvalidWitness: boolean;
		readonly isSignedTooMuchWeight: boolean;
		readonly isOcwCallWrongEra: boolean;
		readonly isMissingSnapshotMetadata: boolean;
		readonly isInvalidSubmissionIndex: boolean;
		readonly isCallNotAllowed: boolean;
		readonly isFallbackFailed: boolean;
		readonly type:
			| "PreDispatchEarlySubmission"
			| "PreDispatchWrongWinnerCount"
			| "PreDispatchWeakSubmission"
			| "SignedQueueFull"
			| "SignedCannotPayDeposit"
			| "SignedInvalidWitness"
			| "SignedTooMuchWeight"
			| "OcwCallWrongEra"
			| "MissingSnapshotMetadata"
			| "InvalidSubmissionIndex"
			| "CallNotAllowed"
			| "FallbackFailed";
	}

	/** @name PalletBagsListListNode (536) */
	interface PalletBagsListListNode extends Struct {
		readonly id: SeedPrimitivesSignatureAccountId20;
		readonly prev: Option<SeedPrimitivesSignatureAccountId20>;
		readonly next: Option<SeedPrimitivesSignatureAccountId20>;
		readonly bagUpper: u64;
		readonly score: u64;
	}

	/** @name PalletBagsListListBag (537) */
	interface PalletBagsListListBag extends Struct {
		readonly head: Option<SeedPrimitivesSignatureAccountId20>;
		readonly tail: Option<SeedPrimitivesSignatureAccountId20>;
	}

	/** @name PalletBagsListError (538) */
	interface PalletBagsListError extends Enum {
		readonly isList: boolean;
		readonly asList: PalletBagsListListListError;
		readonly type: "List";
	}

	/** @name PalletBagsListListListError (539) */
	interface PalletBagsListListListError extends Enum {
		readonly isDuplicate: boolean;
		readonly isNotHeavier: boolean;
		readonly isNotInSameBag: boolean;
		readonly isNodeNotFound: boolean;
		readonly type: "Duplicate" | "NotHeavier" | "NotInSameBag" | "NodeNotFound";
	}

	/** @name FpRpcTransactionStatus (542) */
	interface FpRpcTransactionStatus extends Struct {
		readonly transactionHash: H256;
		readonly transactionIndex: u32;
		readonly from: H160;
		readonly to: Option<H160>;
		readonly contractAddress: Option<H160>;
		readonly logs: Vec<EthereumLog>;
		readonly logsBloom: EthbloomBloom;
	}

	/** @name EthbloomBloom (545) */
	interface EthbloomBloom extends U8aFixed {}

	/** @name EthereumReceiptReceiptV3 (547) */
	interface EthereumReceiptReceiptV3 extends Enum {
		readonly isLegacy: boolean;
		readonly asLegacy: EthereumReceiptEip658ReceiptData;
		readonly isEip2930: boolean;
		readonly asEip2930: EthereumReceiptEip658ReceiptData;
		readonly isEip1559: boolean;
		readonly asEip1559: EthereumReceiptEip658ReceiptData;
		readonly type: "Legacy" | "Eip2930" | "Eip1559";
	}

	/** @name EthereumReceiptEip658ReceiptData (548) */
	interface EthereumReceiptEip658ReceiptData extends Struct {
		readonly statusCode: u8;
		readonly usedGas: U256;
		readonly logsBloom: EthbloomBloom;
		readonly logs: Vec<EthereumLog>;
	}

	/** @name EthereumBlock (549) */
	interface EthereumBlock extends Struct {
		readonly header: EthereumHeader;
		readonly transactions: Vec<EthereumTransactionTransactionV2>;
		readonly ommers: Vec<EthereumHeader>;
	}

	/** @name EthereumHeader (550) */
	interface EthereumHeader extends Struct {
		readonly parentHash: H256;
		readonly ommersHash: H256;
		readonly beneficiary: H160;
		readonly stateRoot: H256;
		readonly transactionsRoot: H256;
		readonly receiptsRoot: H256;
		readonly logsBloom: EthbloomBloom;
		readonly difficulty: U256;
		readonly number: U256;
		readonly gasLimit: U256;
		readonly gasUsed: U256;
		readonly timestamp: u64;
		readonly extraData: Bytes;
		readonly mixHash: H256;
		readonly nonce: EthereumTypesHashH64;
	}

	/** @name EthereumTypesHashH64 (551) */
	interface EthereumTypesHashH64 extends U8aFixed {}

	/** @name PalletEthereumError (556) */
	interface PalletEthereumError extends Enum {
		readonly isInvalidSignature: boolean;
		readonly isPreLogExists: boolean;
		readonly isGasLimitTooLow: boolean;
		readonly isGasLimitTooHigh: boolean;
		readonly isGasPriceTooLow: boolean;
		readonly isBalanceLow: boolean;
		readonly isInvalidNonce: boolean;
		readonly isUndefined: boolean;
		readonly type:
			| "InvalidSignature"
			| "PreLogExists"
			| "GasLimitTooLow"
			| "GasLimitTooHigh"
			| "GasPriceTooLow"
			| "BalanceLow"
			| "InvalidNonce"
			| "Undefined";
	}

	/** @name PalletEvmError (558) */
	interface PalletEvmError extends Enum {
		readonly isBalanceLow: boolean;
		readonly isFeeOverflow: boolean;
		readonly isPaymentOverflow: boolean;
		readonly isWithdrawFailed: boolean;
		readonly isGasPriceTooLow: boolean;
		readonly isInvalidNonce: boolean;
		readonly isGasLimitTooLow: boolean;
		readonly isGasLimitTooHigh: boolean;
		readonly isUndefined: boolean;
		readonly isReentrancy: boolean;
		readonly type:
			| "BalanceLow"
			| "FeeOverflow"
			| "PaymentOverflow"
			| "WithdrawFailed"
			| "GasPriceTooLow"
			| "InvalidNonce"
			| "GasLimitTooLow"
			| "GasLimitTooHigh"
			| "Undefined"
			| "Reentrancy";
	}

	/** @name PalletEthyEventClaimStatus (560) */
	interface PalletEthyEventClaimStatus extends Enum {
		readonly isPending: boolean;
		readonly isChallenged: boolean;
		readonly isProvenValid: boolean;
		readonly type: "Pending" | "Challenged" | "ProvenValid";
	}

	/** @name PalletEthyCheckedEthCallRequest (564) */
	interface PalletEthyCheckedEthCallRequest extends Struct {
		readonly input: Bytes;
		readonly target: H160;
		readonly timestamp: u64;
		readonly maxBlockLookBehind: u64;
		readonly tryBlockNumber: u64;
		readonly checkTimestamp: u64;
	}

	/** @name PalletEthyError (565) */
	interface PalletEthyError extends Enum {
		readonly isNoLocalSigningAccount: boolean;
		readonly isOffchainUnsignedTxSignedPayload: boolean;
		readonly isInvalidNotarization: boolean;
		readonly isHttpFetch: boolean;
		readonly isInvalidClaim: boolean;
		readonly isOcwConfig: boolean;
		readonly isEventReplayPending: boolean;
		readonly isEventReplayProcessed: boolean;
		readonly isBridgePaused: boolean;
		readonly isInternal: boolean;
		readonly isNoPermission: boolean;
		readonly isNoClaim: boolean;
		readonly isClaimAlreadyChallenged: boolean;
		readonly isCantUnbondRelayer: boolean;
		readonly isCantBondRelayer: boolean;
		readonly isNoBondPaid: boolean;
		readonly isMaxNewSignersExceeded: boolean;
		readonly type:
			| "NoLocalSigningAccount"
			| "OffchainUnsignedTxSignedPayload"
			| "InvalidNotarization"
			| "HttpFetch"
			| "InvalidClaim"
			| "OcwConfig"
			| "EventReplayPending"
			| "EventReplayProcessed"
			| "BridgePaused"
			| "Internal"
			| "NoPermission"
			| "NoClaim"
			| "ClaimAlreadyChallenged"
			| "CantUnbondRelayer"
			| "CantBondRelayer"
			| "NoBondPaid"
			| "MaxNewSignersExceeded";
	}

	/** @name PalletErc20PegPendingPayment (567) */
	interface PalletErc20PegPendingPayment extends Enum {
		readonly isDeposit: boolean;
		readonly asDeposit: PalletErc20PegErc20DepositEvent;
		readonly isWithdrawal: boolean;
		readonly asWithdrawal: PalletErc20PegWithdrawMessage;
		readonly type: "Deposit" | "Withdrawal";
	}

	/** @name PalletErc20PegErc20DepositEvent (568) */
	interface PalletErc20PegErc20DepositEvent extends Struct {
		readonly tokenAddress: H160;
		readonly amount: U256;
		readonly beneficiary: H160;
	}

	/** @name PalletErc20PegWithdrawMessage (569) */
	interface PalletErc20PegWithdrawMessage extends Struct {
		readonly tokenAddress: H160;
		readonly amount: U256;
		readonly beneficiary: H160;
	}

	/** @name PalletErc20PegError (570) */
	interface PalletErc20PegError extends Enum {
		readonly isCreateAssetFailed: boolean;
		readonly isInvalidAmount: boolean;
		readonly isInvalidPalletId: boolean;
		readonly isInvalidSourceAddress: boolean;
		readonly isDepositsPaused: boolean;
		readonly isWithdrawalsPaused: boolean;
		readonly isUnsupportedAsset: boolean;
		readonly isEvmWithdrawalFailed: boolean;
		readonly isInvalidAbiEncoding: boolean;
		readonly type:
			| "CreateAssetFailed"
			| "InvalidAmount"
			| "InvalidPalletId"
			| "InvalidSourceAddress"
			| "DepositsPaused"
			| "WithdrawalsPaused"
			| "UnsupportedAsset"
			| "EvmWithdrawalFailed"
			| "InvalidAbiEncoding";
	}

	/** @name PalletNftPegBlockedTokenInfo (571) */
	interface PalletNftPegBlockedTokenInfo extends Struct {
		readonly collectionId: u32;
		readonly destinationAddress: SeedPrimitivesSignatureAccountId20;
		readonly serialNumbers: Vec<u32>;
	}

	/** @name PalletNftPegError (572) */
	interface PalletNftPegError extends Enum {
		readonly isExceedsMaxAddresses: boolean;
		readonly isExceedsMaxTokens: boolean;
		readonly isInvalidAbiEncoding: boolean;
		readonly isInvalidAbiPrefix: boolean;
		readonly isNoCollectionFound: boolean;
		readonly isNoMappedTokenExists: boolean;
		readonly isNoPermissionToBridge: boolean;
		readonly isStateSyncDisabled: boolean;
		readonly isTokenListLengthMismatch: boolean;
		readonly isExceedsMaxVecLength: boolean;
		readonly isNoBlockedTokensFound: boolean;
		readonly isNotBlockedTokenDestination: boolean;
		readonly type:
			| "ExceedsMaxAddresses"
			| "ExceedsMaxTokens"
			| "InvalidAbiEncoding"
			| "InvalidAbiPrefix"
			| "NoCollectionFound"
			| "NoMappedTokenExists"
			| "NoPermissionToBridge"
			| "StateSyncDisabled"
			| "TokenListLengthMismatch"
			| "ExceedsMaxVecLength"
			| "NoBlockedTokensFound"
			| "NotBlockedTokenDestination";
	}

	/** @name PalletProxyProxyDefinition (575) */
	interface PalletProxyProxyDefinition extends Struct {
		readonly delegate: SeedPrimitivesSignatureAccountId20;
		readonly proxyType: SeedRuntimeImplsProxyType;
		readonly delay: u32;
	}

	/** @name PalletProxyAnnouncement (579) */
	interface PalletProxyAnnouncement extends Struct {
		readonly real: SeedPrimitivesSignatureAccountId20;
		readonly callHash: H256;
		readonly height: u32;
	}

	/** @name PalletProxyError (581) */
	interface PalletProxyError extends Enum {
		readonly isTooMany: boolean;
		readonly isNotFound: boolean;
		readonly isNotProxy: boolean;
		readonly isUnproxyable: boolean;
		readonly isDuplicate: boolean;
		readonly isNoPermission: boolean;
		readonly isUnannounced: boolean;
		readonly isNoSelfProxy: boolean;
		readonly type:
			| "TooMany"
			| "NotFound"
			| "NotProxy"
			| "Unproxyable"
			| "Duplicate"
			| "NoPermission"
			| "Unannounced"
			| "NoSelfProxy";
	}

	/** @name PalletFuturepassError (582) */
	interface PalletFuturepassError extends Enum {
		readonly isAccountAlreadyRegistered: boolean;
		readonly isDelegateNotRegistered: boolean;
		readonly isDelegateAlreadyExists: boolean;
		readonly isBlacklistedExtrinsic: boolean;
		readonly isNotFuturepassOwner: boolean;
		readonly isOwnerCannotUnregister: boolean;
		readonly isPermissionDenied: boolean;
		readonly isMigratorNotSet: boolean;
		readonly isInvalidProxyType: boolean;
		readonly isExpiredDeadline: boolean;
		readonly isInvalidDeadline: boolean;
		readonly isInvalidSignature: boolean;
		readonly isAccountParsingFailure: boolean;
		readonly isRegisterDelegateSignerMismatch: boolean;
		readonly type:
			| "AccountAlreadyRegistered"
			| "DelegateNotRegistered"
			| "DelegateAlreadyExists"
			| "BlacklistedExtrinsic"
			| "NotFuturepassOwner"
			| "OwnerCannotUnregister"
			| "PermissionDenied"
			| "MigratorNotSet"
			| "InvalidProxyType"
			| "ExpiredDeadline"
			| "InvalidDeadline"
			| "InvalidSignature"
			| "AccountParsingFailure"
			| "RegisterDelegateSignerMismatch";
	}

	/** @name SeedPrimitivesSignatureEthereumSignature (584) */
	interface SeedPrimitivesSignatureEthereumSignature extends SpCoreEcdsaSignature {}

	/** @name FrameSystemExtensionsCheckNonZeroSender (586) */
	type FrameSystemExtensionsCheckNonZeroSender = Null;

	/** @name FrameSystemExtensionsCheckSpecVersion (587) */
	type FrameSystemExtensionsCheckSpecVersion = Null;

	/** @name FrameSystemExtensionsCheckTxVersion (588) */
	type FrameSystemExtensionsCheckTxVersion = Null;

	/** @name FrameSystemExtensionsCheckGenesis (589) */
	type FrameSystemExtensionsCheckGenesis = Null;

	/** @name FrameSystemExtensionsCheckNonce (592) */
	interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

	/** @name FrameSystemExtensionsCheckWeight (593) */
	type FrameSystemExtensionsCheckWeight = Null;

	/** @name PalletMaintenanceModeMaintenanceChecker (594) */
	type PalletMaintenanceModeMaintenanceChecker = Null;

	/** @name PalletTransactionPaymentChargeTransactionPayment (595) */
	interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

	/** @name SeedRuntimeRuntime (597) */
	type SeedRuntimeRuntime = Null;
} // declare module
