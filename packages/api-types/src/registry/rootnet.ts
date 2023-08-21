// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/types/registry";

import type {
	EthbloomBloom,
	EthereumBlock,
	EthereumHeader,
	EthereumLog,
	EthereumReceiptEip658ReceiptData,
	EthereumReceiptReceiptV3,
	EthereumTransactionAccessListItem,
	EthereumTransactionEip1559Transaction,
	EthereumTransactionEip2930Transaction,
	EthereumTransactionLegacyTransaction,
	EthereumTransactionTransactionAction,
	EthereumTransactionTransactionSignature,
	EthereumTransactionTransactionV2,
	EthereumTypesHashH64,
	EvmCoreErrorExitError,
	EvmCoreErrorExitFatal,
	EvmCoreErrorExitReason,
	EvmCoreErrorExitRevert,
	EvmCoreErrorExitSucceed,
	FinalityGrandpaEquivocationPrecommit,
	FinalityGrandpaEquivocationPrevote,
	FinalityGrandpaPrecommit,
	FinalityGrandpaPrevote,
	FpRpcTransactionStatus,
	FrameSupportDispatchRawOrigin,
	FrameSupportPalletId,
	FrameSupportScheduleLookupError,
	FrameSupportScheduleMaybeHashed,
	FrameSupportTokensMiscBalanceStatus,
	FrameSupportWeightsDispatchClass,
	FrameSupportWeightsDispatchInfo,
	FrameSupportWeightsPays,
	FrameSupportWeightsPerDispatchClassU32,
	FrameSupportWeightsPerDispatchClassU64,
	FrameSupportWeightsPerDispatchClassWeightsPerClass,
	FrameSupportWeightsRuntimeDbWeight,
	FrameSystemAccountInfo,
	FrameSystemCall,
	FrameSystemError,
	FrameSystemEvent,
	FrameSystemEventRecord,
	FrameSystemExtensionsCheckGenesis,
	FrameSystemExtensionsCheckNonce,
	FrameSystemExtensionsCheckNonZeroSender,
	FrameSystemExtensionsCheckSpecVersion,
	FrameSystemExtensionsCheckTxVersion,
	FrameSystemExtensionsCheckWeight,
	FrameSystemLastRuntimeUpgradeInfo,
	FrameSystemLimitsBlockLength,
	FrameSystemLimitsBlockWeights,
	FrameSystemLimitsWeightsPerClass,
	FrameSystemPhase,
	PalletAssetsApproval,
	PalletAssetsAssetAccount,
	PalletAssetsAssetDetails,
	PalletAssetsAssetMetadata,
	PalletAssetsCall,
	PalletAssetsDestroyWitness,
	PalletAssetsError,
	PalletAssetsEvent,
	PalletAssetsExistenceReason,
	PalletAssetsExtCall,
	PalletAssetsExtError,
	PalletAssetsExtEvent,
	PalletAuthorshipCall,
	PalletAuthorshipError,
	PalletAuthorshipUncleEntryItem,
	PalletBabeCall,
	PalletBabeError,
	PalletBagsListCall,
	PalletBagsListError,
	PalletBagsListEvent,
	PalletBagsListListBag,
	PalletBagsListListListError,
	PalletBagsListListNode,
	PalletBalancesAccountData,
	PalletBalancesBalanceLock,
	PalletBalancesCall,
	PalletBalancesError,
	PalletBalancesEvent,
	PalletBalancesReasons,
	PalletBalancesReleases,
	PalletBalancesReserveData,
	PalletDexCall,
	PalletDexError,
	PalletDexEvent,
	PalletDexTradingPair,
	PalletDexTradingPairStatus,
	PalletEchoCall,
	PalletEchoError,
	PalletEchoEvent,
	PalletElectionProviderMultiPhaseCall,
	PalletElectionProviderMultiPhaseElectionCompute,
	PalletElectionProviderMultiPhaseError,
	PalletElectionProviderMultiPhaseEvent,
	PalletElectionProviderMultiPhasePhase,
	PalletElectionProviderMultiPhaseRawSolution,
	PalletElectionProviderMultiPhaseReadySolution,
	PalletElectionProviderMultiPhaseRoundSnapshot,
	PalletElectionProviderMultiPhaseSignedSignedSubmission,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletErc20PegCall,
	PalletErc20PegErc20DepositEvent,
	PalletErc20PegError,
	PalletErc20PegPendingPayment,
	PalletErc20PegRawEvent,
	PalletErc20PegWithdrawMessage,
	PalletEthereumCall,
	PalletEthereumError,
	PalletEthereumEvent,
	PalletEthereumRawOrigin,
	PalletEthyCall,
	PalletEthyCheckedEthCallRequest,
	PalletEthyCheckedEthCallResult,
	PalletEthyError,
	PalletEthyEthereumEventInfo,
	PalletEthyEthySigningRequest,
	PalletEthyEventClaim,
	PalletEthyEventClaimResult,
	PalletEthyEventClaimStatus,
	PalletEthyNotarizationPayload,
	PalletEthyRawEvent,
	PalletEvmCall,
	PalletEvmChainIdCall,
	PalletEvmChainIdEvent,
	PalletEvmError,
	PalletEvmEvent,
	PalletFeeControlCall,
	PalletFeeControlEvent,
	PalletFeeControlFeeConfig,
	PalletFeeProxyCall,
	PalletFeeProxyError,
	PalletFeeProxyEvent,
	PalletFuturepassCall,
	PalletFuturepassError,
	PalletFuturepassEvent,
	PalletGrandpaCall,
	PalletGrandpaError,
	PalletGrandpaEvent,
	PalletGrandpaStoredPendingChange,
	PalletGrandpaStoredState,
	PalletImOnlineBoundedOpaqueNetworkState,
	PalletImOnlineCall,
	PalletImOnlineError,
	PalletImOnlineEvent,
	PalletImOnlineHeartbeat,
	PalletImOnlineSr25519AppSr25519Public,
	PalletImOnlineSr25519AppSr25519Signature,
	PalletMarketplaceCall,
	PalletNftAuctionClosureReason,
	PalletNftAuctionListing,
	PalletNftCall,
	PalletNftCollectionInformation,
	PalletNftCrossChainCompatibility,
	PalletNftError,
	PalletNftEvent,
	PalletNftFixedPriceClosureReason,
	PalletNftFixedPriceListing,
	PalletNftListing,
	PalletNftMarketplace,
	PalletNftOfferType,
	PalletNftPegCall,
	PalletNftPegError,
	PalletNftPegEvent,
	PalletNftSimpleOffer,
	PalletNftTokenLockReason,
	PalletNftTokenOwnership,
	PalletOffencesEvent,
	PalletProxyAnnouncement,
	PalletProxyCall,
	PalletProxyError,
	PalletProxyEvent,
	PalletProxyProxyDefinition,
	PalletRecoveryActiveRecovery,
	PalletRecoveryCall,
	PalletRecoveryError,
	PalletRecoveryEvent,
	PalletRecoveryRecoveryConfig,
	PalletSchedulerCall,
	PalletSchedulerError,
	PalletSchedulerEvent,
	PalletSchedulerScheduledV3,
	PalletSessionCall,
	PalletSessionError,
	PalletSessionEvent,
	PalletSftCall,
	PalletSftError,
	PalletSftEvent,
	PalletSftSftCollectionInformation,
	PalletSftSftTokenBalance,
	PalletSftSftTokenInformation,
	PalletStakingActiveEraInfo,
	PalletStakingEraRewardPoints,
	PalletStakingExposure,
	PalletStakingForcing,
	PalletStakingIndividualExposure,
	PalletStakingNominations,
	PalletStakingPalletCall,
	PalletStakingPalletConfigOpPerbill,
	PalletStakingPalletConfigOpPercent,
	PalletStakingPalletConfigOpU128,
	PalletStakingPalletConfigOpU32,
	PalletStakingPalletError,
	PalletStakingPalletEvent,
	PalletStakingReleases,
	PalletStakingRewardDestination,
	PalletStakingSlashingSlashingSpans,
	PalletStakingSlashingSpanRecord,
	PalletStakingStakingLedger,
	PalletStakingUnappliedSlash,
	PalletStakingUnlockChunk,
	PalletStakingValidatorPrefs,
	PalletSudoCall,
	PalletSudoError,
	PalletSudoEvent,
	PalletTimestampCall,
	PalletTokenApprovalsCall,
	PalletTokenApprovalsError,
	PalletTransactionPaymentChargeTransactionPayment,
	PalletTransactionPaymentEvent,
	PalletTransactionPaymentReleases,
	PalletUtilityCall,
	PalletUtilityError,
	PalletUtilityEvent,
	PalletXls20Call,
	PalletXls20Error,
	PalletXls20Event,
	PalletXrplBridgeCall,
	PalletXrplBridgeError,
	PalletXrplBridgeEvent,
	PalletXrplBridgeHelpersXrplTicketSequenceParams,
	PalletXrplBridgeHelpersXrplTxData,
	PalletXrplBridgeHelpersXrpTransaction,
	SeedPalletCommonEventRouterError,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesEthyCryptoAppCryptoSignature,
	SeedPrimitivesNftOriginChain,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesSignatureAccountId20,
	SeedPrimitivesSignatureEthereumSignature,
	SeedRuntimeImplsProxyType,
	SeedRuntimeNposCompactSolution16,
	SeedRuntimeOriginCaller,
	SeedRuntimeRuntime,
	SeedRuntimeSessionKeys,
	SpConsensusBabeAllowedSlots,
	SpConsensusBabeAppPublic,
	SpConsensusBabeBabeEpochConfiguration,
	SpConsensusBabeDigestsNextConfigDescriptor,
	SpConsensusBabeDigestsPreDigest,
	SpConsensusBabeDigestsPrimaryPreDigest,
	SpConsensusBabeDigestsSecondaryPlainPreDigest,
	SpConsensusBabeDigestsSecondaryVRFPreDigest,
	SpConsensusSlotsEquivocationProof,
	SpCoreCryptoKeyTypeId,
	SpCoreEcdsaPublic,
	SpCoreEcdsaSignature,
	SpCoreEd25519Public,
	SpCoreEd25519Signature,
	SpCoreOffchainOpaqueNetworkState,
	SpCoreSr25519Public,
	SpCoreSr25519Signature,
	SpCoreVoid,
	SpFinalityGrandpaAppPublic,
	SpFinalityGrandpaAppSignature,
	SpFinalityGrandpaEquivocation,
	SpFinalityGrandpaEquivocationProof,
	SpNposElectionsElectionScore,
	SpNposElectionsSupport,
	SpRuntimeArithmeticError,
	SpRuntimeBlakeTwo256,
	SpRuntimeDigest,
	SpRuntimeDigestDigestItem,
	SpRuntimeDispatchError,
	SpRuntimeHeader,
	SpRuntimeModuleError,
	SpRuntimeTokenError,
	SpRuntimeTransactionalError,
	SpSessionMembershipProof,
	SpStakingOffenceOffenceDetails,
	SpVersionRuntimeVersion,
} from "@polkadot/types/lookup";

declare module "@polkadot/types/types/registry" {
	interface InterfaceTypes {
		EthbloomBloom: EthbloomBloom;
		EthereumBlock: EthereumBlock;
		EthereumHeader: EthereumHeader;
		EthereumLog: EthereumLog;
		EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
		EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
		EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
		EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
		EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
		EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
		EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
		EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
		EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
		EthereumTypesHashH64: EthereumTypesHashH64;
		EvmCoreErrorExitError: EvmCoreErrorExitError;
		EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
		EvmCoreErrorExitReason: EvmCoreErrorExitReason;
		EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
		EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
		FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
		FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
		FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
		FinalityGrandpaPrevote: FinalityGrandpaPrevote;
		FpRpcTransactionStatus: FpRpcTransactionStatus;
		FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
		FrameSupportPalletId: FrameSupportPalletId;
		FrameSupportScheduleLookupError: FrameSupportScheduleLookupError;
		FrameSupportScheduleMaybeHashed: FrameSupportScheduleMaybeHashed;
		FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
		FrameSupportWeightsDispatchClass: FrameSupportWeightsDispatchClass;
		FrameSupportWeightsDispatchInfo: FrameSupportWeightsDispatchInfo;
		FrameSupportWeightsPays: FrameSupportWeightsPays;
		FrameSupportWeightsPerDispatchClassU32: FrameSupportWeightsPerDispatchClassU32;
		FrameSupportWeightsPerDispatchClassU64: FrameSupportWeightsPerDispatchClassU64;
		FrameSupportWeightsPerDispatchClassWeightsPerClass:
			FrameSupportWeightsPerDispatchClassWeightsPerClass;
		FrameSupportWeightsRuntimeDbWeight: FrameSupportWeightsRuntimeDbWeight;
		FrameSystemAccountInfo: FrameSystemAccountInfo;
		FrameSystemCall: FrameSystemCall;
		FrameSystemError: FrameSystemError;
		FrameSystemEvent: FrameSystemEvent;
		FrameSystemEventRecord: FrameSystemEventRecord;
		FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
		FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
		FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
		FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
		FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
		FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
		FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
		FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
		FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
		FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
		FrameSystemPhase: FrameSystemPhase;
		PalletAssetsApproval: PalletAssetsApproval;
		PalletAssetsAssetAccount: PalletAssetsAssetAccount;
		PalletAssetsAssetDetails: PalletAssetsAssetDetails;
		PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
		PalletAssetsCall: PalletAssetsCall;
		PalletAssetsDestroyWitness: PalletAssetsDestroyWitness;
		PalletAssetsError: PalletAssetsError;
		PalletAssetsEvent: PalletAssetsEvent;
		PalletAssetsExistenceReason: PalletAssetsExistenceReason;
		PalletAssetsExtCall: PalletAssetsExtCall;
		PalletAssetsExtError: PalletAssetsExtError;
		PalletAssetsExtEvent: PalletAssetsExtEvent;
		PalletAuthorshipCall: PalletAuthorshipCall;
		PalletAuthorshipError: PalletAuthorshipError;
		PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
		PalletBabeCall: PalletBabeCall;
		PalletBabeError: PalletBabeError;
		PalletBagsListCall: PalletBagsListCall;
		PalletBagsListError: PalletBagsListError;
		PalletBagsListEvent: PalletBagsListEvent;
		PalletBagsListListBag: PalletBagsListListBag;
		PalletBagsListListListError: PalletBagsListListListError;
		PalletBagsListListNode: PalletBagsListListNode;
		PalletBalancesAccountData: PalletBalancesAccountData;
		PalletBalancesBalanceLock: PalletBalancesBalanceLock;
		PalletBalancesCall: PalletBalancesCall;
		PalletBalancesError: PalletBalancesError;
		PalletBalancesEvent: PalletBalancesEvent;
		PalletBalancesReasons: PalletBalancesReasons;
		PalletBalancesReleases: PalletBalancesReleases;
		PalletBalancesReserveData: PalletBalancesReserveData;
		PalletDexCall: PalletDexCall;
		PalletDexError: PalletDexError;
		PalletDexEvent: PalletDexEvent;
		PalletDexTradingPair: PalletDexTradingPair;
		PalletDexTradingPairStatus: PalletDexTradingPairStatus;
		PalletEchoCall: PalletEchoCall;
		PalletEchoError: PalletEchoError;
		PalletEchoEvent: PalletEchoEvent;
		PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
		PalletElectionProviderMultiPhaseElectionCompute:
			PalletElectionProviderMultiPhaseElectionCompute;
		PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
		PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
		PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
		PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
		PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
		PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
		PalletElectionProviderMultiPhaseSignedSignedSubmission:
			PalletElectionProviderMultiPhaseSignedSignedSubmission;
		PalletElectionProviderMultiPhaseSolutionOrSnapshotSize:
			PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
		PalletErc20PegCall: PalletErc20PegCall;
		PalletErc20PegErc20DepositEvent: PalletErc20PegErc20DepositEvent;
		PalletErc20PegError: PalletErc20PegError;
		PalletErc20PegPendingPayment: PalletErc20PegPendingPayment;
		PalletErc20PegRawEvent: PalletErc20PegRawEvent;
		PalletErc20PegWithdrawMessage: PalletErc20PegWithdrawMessage;
		PalletEthereumCall: PalletEthereumCall;
		PalletEthereumError: PalletEthereumError;
		PalletEthereumEvent: PalletEthereumEvent;
		PalletEthereumRawOrigin: PalletEthereumRawOrigin;
		PalletEthyCall: PalletEthyCall;
		PalletEthyCheckedEthCallRequest: PalletEthyCheckedEthCallRequest;
		PalletEthyCheckedEthCallResult: PalletEthyCheckedEthCallResult;
		PalletEthyError: PalletEthyError;
		PalletEthyEthereumEventInfo: PalletEthyEthereumEventInfo;
		PalletEthyEthySigningRequest: PalletEthyEthySigningRequest;
		PalletEthyEventClaim: PalletEthyEventClaim;
		PalletEthyEventClaimResult: PalletEthyEventClaimResult;
		PalletEthyEventClaimStatus: PalletEthyEventClaimStatus;
		PalletEthyNotarizationPayload: PalletEthyNotarizationPayload;
		PalletEthyRawEvent: PalletEthyRawEvent;
		PalletEvmCall: PalletEvmCall;
		PalletEvmChainIdCall: PalletEvmChainIdCall;
		PalletEvmChainIdEvent: PalletEvmChainIdEvent;
		PalletEvmError: PalletEvmError;
		PalletEvmEvent: PalletEvmEvent;
		PalletFeeControlCall: PalletFeeControlCall;
		PalletFeeControlEvent: PalletFeeControlEvent;
		PalletFeeControlFeeConfig: PalletFeeControlFeeConfig;
		PalletFeeProxyCall: PalletFeeProxyCall;
		PalletFeeProxyError: PalletFeeProxyError;
		PalletFeeProxyEvent: PalletFeeProxyEvent;
		PalletFuturepassCall: PalletFuturepassCall;
		PalletFuturepassError: PalletFuturepassError;
		PalletFuturepassEvent: PalletFuturepassEvent;
		PalletGrandpaCall: PalletGrandpaCall;
		PalletGrandpaError: PalletGrandpaError;
		PalletGrandpaEvent: PalletGrandpaEvent;
		PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
		PalletGrandpaStoredState: PalletGrandpaStoredState;
		PalletImOnlineBoundedOpaqueNetworkState: PalletImOnlineBoundedOpaqueNetworkState;
		PalletImOnlineCall: PalletImOnlineCall;
		PalletImOnlineError: PalletImOnlineError;
		PalletImOnlineEvent: PalletImOnlineEvent;
		PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
		PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
		PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
		PalletMarketplaceCall: PalletMarketplaceCall;
		PalletNftAuctionClosureReason: PalletNftAuctionClosureReason;
		PalletNftAuctionListing: PalletNftAuctionListing;
		PalletNftCall: PalletNftCall;
		PalletNftCollectionInformation: PalletNftCollectionInformation;
		PalletNftCrossChainCompatibility: PalletNftCrossChainCompatibility;
		PalletNftError: PalletNftError;
		PalletNftEvent: PalletNftEvent;
		PalletNftFixedPriceClosureReason: PalletNftFixedPriceClosureReason;
		PalletNftFixedPriceListing: PalletNftFixedPriceListing;
		PalletNftListing: PalletNftListing;
		PalletNftMarketplace: PalletNftMarketplace;
		PalletNftOfferType: PalletNftOfferType;
		PalletNftPegCall: PalletNftPegCall;
		PalletNftPegError: PalletNftPegError;
		PalletNftPegEvent: PalletNftPegEvent;
		PalletNftSimpleOffer: PalletNftSimpleOffer;
		PalletNftTokenLockReason: PalletNftTokenLockReason;
		PalletNftTokenOwnership: PalletNftTokenOwnership;
		PalletOffencesEvent: PalletOffencesEvent;
		PalletProxyAnnouncement: PalletProxyAnnouncement;
		PalletProxyCall: PalletProxyCall;
		PalletProxyError: PalletProxyError;
		PalletProxyEvent: PalletProxyEvent;
		PalletProxyProxyDefinition: PalletProxyProxyDefinition;
		PalletRecoveryActiveRecovery: PalletRecoveryActiveRecovery;
		PalletRecoveryCall: PalletRecoveryCall;
		PalletRecoveryError: PalletRecoveryError;
		PalletRecoveryEvent: PalletRecoveryEvent;
		PalletRecoveryRecoveryConfig: PalletRecoveryRecoveryConfig;
		PalletSchedulerCall: PalletSchedulerCall;
		PalletSchedulerError: PalletSchedulerError;
		PalletSchedulerEvent: PalletSchedulerEvent;
		PalletSchedulerScheduledV3: PalletSchedulerScheduledV3;
		PalletSessionCall: PalletSessionCall;
		PalletSessionError: PalletSessionError;
		PalletSessionEvent: PalletSessionEvent;
		PalletSftCall: PalletSftCall;
		PalletSftError: PalletSftError;
		PalletSftEvent: PalletSftEvent;
		PalletSftSftCollectionInformation: PalletSftSftCollectionInformation;
		PalletSftSftTokenBalance: PalletSftSftTokenBalance;
		PalletSftSftTokenInformation: PalletSftSftTokenInformation;
		PalletStakingActiveEraInfo: PalletStakingActiveEraInfo;
		PalletStakingEraRewardPoints: PalletStakingEraRewardPoints;
		PalletStakingExposure: PalletStakingExposure;
		PalletStakingForcing: PalletStakingForcing;
		PalletStakingIndividualExposure: PalletStakingIndividualExposure;
		PalletStakingNominations: PalletStakingNominations;
		PalletStakingPalletCall: PalletStakingPalletCall;
		PalletStakingPalletConfigOpPerbill: PalletStakingPalletConfigOpPerbill;
		PalletStakingPalletConfigOpPercent: PalletStakingPalletConfigOpPercent;
		PalletStakingPalletConfigOpU128: PalletStakingPalletConfigOpU128;
		PalletStakingPalletConfigOpU32: PalletStakingPalletConfigOpU32;
		PalletStakingPalletError: PalletStakingPalletError;
		PalletStakingPalletEvent: PalletStakingPalletEvent;
		PalletStakingReleases: PalletStakingReleases;
		PalletStakingRewardDestination: PalletStakingRewardDestination;
		PalletStakingSlashingSlashingSpans: PalletStakingSlashingSlashingSpans;
		PalletStakingSlashingSpanRecord: PalletStakingSlashingSpanRecord;
		PalletStakingStakingLedger: PalletStakingStakingLedger;
		PalletStakingUnappliedSlash: PalletStakingUnappliedSlash;
		PalletStakingUnlockChunk: PalletStakingUnlockChunk;
		PalletStakingValidatorPrefs: PalletStakingValidatorPrefs;
		PalletSudoCall: PalletSudoCall;
		PalletSudoError: PalletSudoError;
		PalletSudoEvent: PalletSudoEvent;
		PalletTimestampCall: PalletTimestampCall;
		PalletTokenApprovalsCall: PalletTokenApprovalsCall;
		PalletTokenApprovalsError: PalletTokenApprovalsError;
		PalletTransactionPaymentChargeTransactionPayment:
			PalletTransactionPaymentChargeTransactionPayment;
		PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
		PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
		PalletUtilityCall: PalletUtilityCall;
		PalletUtilityError: PalletUtilityError;
		PalletUtilityEvent: PalletUtilityEvent;
		PalletXls20Call: PalletXls20Call;
		PalletXls20Error: PalletXls20Error;
		PalletXls20Event: PalletXls20Event;
		PalletXrplBridgeCall: PalletXrplBridgeCall;
		PalletXrplBridgeError: PalletXrplBridgeError;
		PalletXrplBridgeEvent: PalletXrplBridgeEvent;
		PalletXrplBridgeHelpersXrpTransaction: PalletXrplBridgeHelpersXrpTransaction;
		PalletXrplBridgeHelpersXrplTicketSequenceParams:
			PalletXrplBridgeHelpersXrplTicketSequenceParams;
		PalletXrplBridgeHelpersXrplTxData: PalletXrplBridgeHelpersXrplTxData;
		SeedPalletCommonEventRouterError: SeedPalletCommonEventRouterError;
		SeedPrimitivesEthyCryptoAppCryptoPublic: SeedPrimitivesEthyCryptoAppCryptoPublic;
		SeedPrimitivesEthyCryptoAppCryptoSignature: SeedPrimitivesEthyCryptoAppCryptoSignature;
		SeedPrimitivesNftOriginChain: SeedPrimitivesNftOriginChain;
		SeedPrimitivesNftRoyaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		SeedPrimitivesSignatureAccountId20: SeedPrimitivesSignatureAccountId20;
		SeedPrimitivesSignatureEthereumSignature: SeedPrimitivesSignatureEthereumSignature;
		SeedRuntimeImplsProxyType: SeedRuntimeImplsProxyType;
		SeedRuntimeNposCompactSolution16: SeedRuntimeNposCompactSolution16;
		SeedRuntimeOriginCaller: SeedRuntimeOriginCaller;
		SeedRuntimeRuntime: SeedRuntimeRuntime;
		SeedRuntimeSessionKeys: SeedRuntimeSessionKeys;
		SpConsensusBabeAllowedSlots: SpConsensusBabeAllowedSlots;
		SpConsensusBabeAppPublic: SpConsensusBabeAppPublic;
		SpConsensusBabeBabeEpochConfiguration: SpConsensusBabeBabeEpochConfiguration;
		SpConsensusBabeDigestsNextConfigDescriptor: SpConsensusBabeDigestsNextConfigDescriptor;
		SpConsensusBabeDigestsPreDigest: SpConsensusBabeDigestsPreDigest;
		SpConsensusBabeDigestsPrimaryPreDigest: SpConsensusBabeDigestsPrimaryPreDigest;
		SpConsensusBabeDigestsSecondaryPlainPreDigest: SpConsensusBabeDigestsSecondaryPlainPreDigest;
		SpConsensusBabeDigestsSecondaryVRFPreDigest: SpConsensusBabeDigestsSecondaryVRFPreDigest;
		SpConsensusSlotsEquivocationProof: SpConsensusSlotsEquivocationProof;
		SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
		SpCoreEcdsaPublic: SpCoreEcdsaPublic;
		SpCoreEcdsaSignature: SpCoreEcdsaSignature;
		SpCoreEd25519Public: SpCoreEd25519Public;
		SpCoreEd25519Signature: SpCoreEd25519Signature;
		SpCoreOffchainOpaqueNetworkState: SpCoreOffchainOpaqueNetworkState;
		SpCoreSr25519Public: SpCoreSr25519Public;
		SpCoreSr25519Signature: SpCoreSr25519Signature;
		SpCoreVoid: SpCoreVoid;
		SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
		SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
		SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
		SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
		SpNposElectionsElectionScore: SpNposElectionsElectionScore;
		SpNposElectionsSupport: SpNposElectionsSupport;
		SpRuntimeArithmeticError: SpRuntimeArithmeticError;
		SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
		SpRuntimeDigest: SpRuntimeDigest;
		SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
		SpRuntimeDispatchError: SpRuntimeDispatchError;
		SpRuntimeHeader: SpRuntimeHeader;
		SpRuntimeModuleError: SpRuntimeModuleError;
		SpRuntimeTokenError: SpRuntimeTokenError;
		SpRuntimeTransactionalError: SpRuntimeTransactionalError;
		SpSessionMembershipProof: SpSessionMembershipProof;
		SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
		SpVersionRuntimeVersion: SpVersionRuntimeVersion;
	} // InterfaceTypes
} // declare module
