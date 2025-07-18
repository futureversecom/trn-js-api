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
	FrameSupportDispatchDispatchClass,
	FrameSupportDispatchDispatchInfo,
	FrameSupportDispatchPays,
	FrameSupportDispatchPerDispatchClassU32,
	FrameSupportDispatchPerDispatchClassWeight,
	FrameSupportDispatchPerDispatchClassWeightsPerClass,
	FrameSupportDispatchRawOrigin,
	FrameSupportPalletId,
	FrameSupportPreimagesBounded,
	FrameSupportTokensMiscBalanceStatus,
	FrameSystemAccountInfo,
	FrameSystemCall,
	FrameSystemError,
	FrameSystemEvent,
	FrameSystemEventRecord,
	FrameSystemExtensionsCheckGenesis,
	FrameSystemExtensionsCheckNonZeroSender,
	FrameSystemExtensionsCheckNonce,
	FrameSystemExtensionsCheckSpecVersion,
	FrameSystemExtensionsCheckTxVersion,
	FrameSystemExtensionsCheckWeight,
	FrameSystemLastRuntimeUpgradeInfo,
	FrameSystemLimitsBlockLength,
	FrameSystemLimitsBlockWeights,
	FrameSystemLimitsWeightsPerClass,
	FrameSystemPhase,
	PalletAssetsAccountStatus,
	PalletAssetsApproval,
	PalletAssetsAssetAccount,
	PalletAssetsAssetDetails,
	PalletAssetsAssetMetadata,
	PalletAssetsAssetStatus,
	PalletAssetsCall,
	PalletAssetsError,
	PalletAssetsEvent,
	PalletAssetsExistenceReason,
	PalletAssetsExtCall,
	PalletAssetsExtError,
	PalletAssetsExtEvent,
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
	PalletBalancesIdAmount,
	PalletBalancesReasons,
	PalletBalancesReserveData,
	PalletCrowdsaleCall,
	PalletCrowdsaleError,
	PalletCrowdsaleEvent,
	PalletCrowdsaleSaleInformation,
	PalletCrowdsaleSaleStatus,
	PalletDexCall,
	PalletDexError,
	PalletDexEvent,
	PalletDexTradingPair,
	PalletDexTradingPairStatus,
	PalletDoughnutCall,
	PalletDoughnutError,
	PalletDoughnutEvent,
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
	PalletErc20PegEvent,
	PalletErc20PegPendingPayment,
	PalletErc20PegWithdrawMessage,
	PalletEthereumCall,
	PalletEthereumError,
	PalletEthereumEvent,
	PalletEthereumRawOrigin,
	PalletEthyBridgePauseStatus,
	PalletEthyCall,
	PalletEthyCheckedEthCallRequest,
	PalletEthyCheckedEthCallResult,
	PalletEthyError,
	PalletEthyEthereumEventInfo,
	PalletEthyEthySigningRequest,
	PalletEthyEvent,
	PalletEthyEventClaim,
	PalletEthyEventClaimResult,
	PalletEthyEventClaimStatus,
	PalletEthyNotarizationPayload,
	PalletEvmCall,
	PalletEvmChainIdCall,
	PalletEvmChainIdEvent,
	PalletEvmCodeMetadata,
	PalletEvmError,
	PalletEvmEvent,
	PalletFeeControlCall,
	PalletFeeControlEvent,
	PalletFeeControlFeeControlFeeConfig,
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
	PalletImOnlineCall,
	PalletImOnlineError,
	PalletImOnlineEvent,
	PalletImOnlineHeartbeat,
	PalletImOnlineSr25519AppSr25519Public,
	PalletImOnlineSr25519AppSr25519Signature,
	PalletLiquidityPoolsCall,
	PalletLiquidityPoolsError,
	PalletLiquidityPoolsEvent,
	PalletLiquidityPoolsPoolInfo,
	PalletLiquidityPoolsPoolRelationship,
	PalletLiquidityPoolsPoolStatus,
	PalletLiquidityPoolsUserInfo,
	PalletMaintenanceModeCall,
	PalletMaintenanceModeError,
	PalletMaintenanceModeEvent,
	PalletMaintenanceModeMaintenanceChecker,
	PalletMarketplaceAuctionClosureReason,
	PalletMarketplaceAuctionListing,
	PalletMarketplaceCall,
	PalletMarketplaceError,
	PalletMarketplaceEvent,
	PalletMarketplaceFixedPriceClosureReason,
	PalletMarketplaceFixedPriceListing,
	PalletMarketplaceListing,
	PalletMarketplaceListingTokens,
	PalletMarketplaceMarketplace,
	PalletMarketplaceNftListing,
	PalletMarketplaceOfferType,
	PalletMarketplaceSftListing,
	PalletMarketplaceSimpleOffer,
	PalletMigrationCall,
	PalletMigrationError,
	PalletMigrationEvent,
	PalletMigrationMigrationStatus,
	PalletMultisigCall,
	PalletMultisigError,
	PalletMultisigEvent,
	PalletMultisigMultisig,
	PalletMultisigTimepoint,
	PalletNfiCall,
	PalletNfiError,
	PalletNfiEvent,
	PalletNfiFeeDetails,
	PalletNfiGenericCollectionId,
	PalletNfiGenericSerialNumber,
	PalletNfiMultiChainTokenId,
	PalletNfiNfiDataType,
	PalletNfiNfiMatrix,
	PalletNfiNfiSubType,
	PalletNftCall,
	PalletNftCollectionInformation,
	PalletNftCollectionPendingIssuances,
	PalletNftError,
	PalletNftEvent,
	PalletNftPegBlockedTokenInfo,
	PalletNftPegCall,
	PalletNftPegError,
	PalletNftPegEvent,
	PalletNftPendingIssuance,
	PalletNftTokenInformation,
	PalletOffencesEvent,
	PalletPartnerAttributionCall,
	PalletPartnerAttributionError,
	PalletPartnerAttributionEvent,
	PalletPartnerAttributionPartnerInformation,
	PalletPreimageCall,
	PalletPreimageError,
	PalletPreimageEvent,
	PalletPreimageRequestStatus,
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
	PalletSchedulerScheduled,
	PalletSessionCall,
	PalletSessionError,
	PalletSessionEvent,
	PalletSftCall,
	PalletSftError,
	PalletSftEvent,
	PalletSftSftCollectionInformation,
	PalletSftSftCollectionPendingIssuances,
	PalletSftSftPendingIssuance,
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
	PalletSyloActionPermissionsCall,
	PalletSyloActionPermissionsError,
	PalletSyloActionPermissionsEvent,
	PalletSyloActionPermissionsSpender,
	PalletSyloActionPermissionsTransactPermission,
	PalletSyloActionPermissionsTransactPermissionToken,
	PalletSyloActionPermissionsTransactPermissionTokenSignature,
	PalletSyloActionPermissionsXrplTokenSignature,
	PalletSyloDataPermissionsCall,
	PalletSyloDataPermissionsError,
	PalletSyloDataPermissionsEvent,
	PalletSyloDataPermissionsPermissionRecord,
	PalletSyloDataPermissionsPermissionReference,
	PalletSyloDataPermissionsTaggedPermissionRecord,
	PalletSyloDataVerificationCall,
	PalletSyloDataVerificationError,
	PalletSyloDataVerificationEvent,
	PalletTimestampCall,
	PalletTokenApprovalsCall,
	PalletTokenApprovalsError,
	PalletTransactionPaymentChargeTransactionPayment,
	PalletTransactionPaymentEvent,
	PalletTransactionPaymentReleases,
	PalletUtilityCall,
	PalletUtilityError,
	PalletUtilityEvent,
	PalletVortexDistributionCall,
	PalletVortexDistributionError,
	PalletVortexDistributionEvent,
	PalletVortexDistributionVtxDistStatus,
	PalletXls20Call,
	PalletXls20Error,
	PalletXls20Event,
	PalletXls20Xls20Collection,
	PalletXrplBridgeAssetWithdrawTransaction,
	PalletXrplBridgeCall,
	PalletXrplBridgeDelayedWithdrawal,
	PalletXrplBridgeError,
	PalletXrplBridgeEvent,
	PalletXrplBridgeNfTokenAcceptOfferTransaction,
	PalletXrplBridgeNfTokenCreateOfferTransaction,
	PalletXrplBridgeWithdrawTransaction,
	PalletXrplBridgeXrpTransaction,
	PalletXrplBridgeXrpWithdrawTransaction,
	PalletXrplBridgeXrplCurrency,
	PalletXrplBridgeXrplCurrencyType,
	PalletXrplBridgeXrplDoorAccount,
	PalletXrplBridgeXrplTicketSequenceParams,
	PalletXrplBridgeXrplTransaction,
	PalletXrplBridgeXrplTxData,
	PalletXrplCall,
	PalletXrplError,
	PalletXrplEvent,
	PalletXrplXrplPublicKey,
	SeedPalletCommonEventRouterError,
	SeedPalletCommonSyloDataPermission,
	SeedPalletCommonSyloResolver,
	SeedPalletCommonSyloResolverId,
	SeedPalletCommonSyloValidationEntry,
	SeedPalletCommonSyloValidationRecord,
	SeedPalletCommonUtilsCollectionUtilityFlags,
	SeedPalletCommonUtilsPublicMintInformation,
	SeedPalletCommonUtilsTokenBurnAuthority,
	SeedPalletCommonUtilsTokenUtilityFlags,
	SeedPrimitivesEthyCryptoAppCryptoPublic,
	SeedPrimitivesEthyCryptoAppCryptoSignature,
	SeedPrimitivesNftCrossChainCompatibility,
	SeedPrimitivesNftOriginChain,
	SeedPrimitivesNftRoyaltiesSchedule,
	SeedPrimitivesNftTokenLockReason,
	SeedPrimitivesSignatureAccountId20,
	SeedPrimitivesSignatureEthereumSignature,
	SeedRuntimeImplsProxyType,
	SeedRuntimeNposCompactSolution16,
	SeedRuntimeOriginCaller,
	SeedRuntimeRuntime,
	SeedRuntimeSessionKeys,
	SpArithmeticArithmeticError,
	SpConsensusBabeAllowedSlots,
	SpConsensusBabeAppPublic,
	SpConsensusBabeBabeEpochConfiguration,
	SpConsensusBabeDigestsNextConfigDescriptor,
	SpConsensusBabeDigestsPreDigest,
	SpConsensusBabeDigestsPrimaryPreDigest,
	SpConsensusBabeDigestsSecondaryPlainPreDigest,
	SpConsensusBabeDigestsSecondaryVRFPreDigest,
	SpConsensusGrandpaAppPublic,
	SpConsensusGrandpaAppSignature,
	SpConsensusGrandpaEquivocation,
	SpConsensusGrandpaEquivocationProof,
	SpConsensusSlotsEquivocationProof,
	SpCoreCryptoKeyTypeId,
	SpCoreEcdsaPublic,
	SpCoreEcdsaSignature,
	SpCoreEd25519Public,
	SpCoreEd25519Signature,
	SpCoreSr25519Public,
	SpCoreSr25519Signature,
	SpCoreSr25519VrfVrfSignature,
	SpCoreVoid,
	SpNposElectionsElectionScore,
	SpNposElectionsSupport,
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
	SpWeightsRuntimeDbWeight,
	SpWeightsWeightV2Weight,
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
		FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
		FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
		FrameSupportDispatchPays: FrameSupportDispatchPays;
		FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
		FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
		FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
		FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
		FrameSupportPalletId: FrameSupportPalletId;
		FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
		FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
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
		PalletAssetsAccountStatus: PalletAssetsAccountStatus;
		PalletAssetsApproval: PalletAssetsApproval;
		PalletAssetsAssetAccount: PalletAssetsAssetAccount;
		PalletAssetsAssetDetails: PalletAssetsAssetDetails;
		PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
		PalletAssetsAssetStatus: PalletAssetsAssetStatus;
		PalletAssetsCall: PalletAssetsCall;
		PalletAssetsError: PalletAssetsError;
		PalletAssetsEvent: PalletAssetsEvent;
		PalletAssetsExistenceReason: PalletAssetsExistenceReason;
		PalletAssetsExtCall: PalletAssetsExtCall;
		PalletAssetsExtError: PalletAssetsExtError;
		PalletAssetsExtEvent: PalletAssetsExtEvent;
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
		PalletBalancesIdAmount: PalletBalancesIdAmount;
		PalletBalancesReasons: PalletBalancesReasons;
		PalletBalancesReserveData: PalletBalancesReserveData;
		PalletCrowdsaleCall: PalletCrowdsaleCall;
		PalletCrowdsaleError: PalletCrowdsaleError;
		PalletCrowdsaleEvent: PalletCrowdsaleEvent;
		PalletCrowdsaleSaleInformation: PalletCrowdsaleSaleInformation;
		PalletCrowdsaleSaleStatus: PalletCrowdsaleSaleStatus;
		PalletDexCall: PalletDexCall;
		PalletDexError: PalletDexError;
		PalletDexEvent: PalletDexEvent;
		PalletDexTradingPair: PalletDexTradingPair;
		PalletDexTradingPairStatus: PalletDexTradingPairStatus;
		PalletDoughnutCall: PalletDoughnutCall;
		PalletDoughnutError: PalletDoughnutError;
		PalletDoughnutEvent: PalletDoughnutEvent;
		PalletEchoCall: PalletEchoCall;
		PalletEchoError: PalletEchoError;
		PalletEchoEvent: PalletEchoEvent;
		PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
		PalletElectionProviderMultiPhaseElectionCompute: PalletElectionProviderMultiPhaseElectionCompute;
		PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
		PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
		PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
		PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
		PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
		PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
		PalletElectionProviderMultiPhaseSignedSignedSubmission: PalletElectionProviderMultiPhaseSignedSignedSubmission;
		PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
		PalletErc20PegCall: PalletErc20PegCall;
		PalletErc20PegErc20DepositEvent: PalletErc20PegErc20DepositEvent;
		PalletErc20PegError: PalletErc20PegError;
		PalletErc20PegEvent: PalletErc20PegEvent;
		PalletErc20PegPendingPayment: PalletErc20PegPendingPayment;
		PalletErc20PegWithdrawMessage: PalletErc20PegWithdrawMessage;
		PalletEthereumCall: PalletEthereumCall;
		PalletEthereumError: PalletEthereumError;
		PalletEthereumEvent: PalletEthereumEvent;
		PalletEthereumRawOrigin: PalletEthereumRawOrigin;
		PalletEthyBridgePauseStatus: PalletEthyBridgePauseStatus;
		PalletEthyCall: PalletEthyCall;
		PalletEthyCheckedEthCallRequest: PalletEthyCheckedEthCallRequest;
		PalletEthyCheckedEthCallResult: PalletEthyCheckedEthCallResult;
		PalletEthyError: PalletEthyError;
		PalletEthyEthereumEventInfo: PalletEthyEthereumEventInfo;
		PalletEthyEthySigningRequest: PalletEthyEthySigningRequest;
		PalletEthyEvent: PalletEthyEvent;
		PalletEthyEventClaim: PalletEthyEventClaim;
		PalletEthyEventClaimResult: PalletEthyEventClaimResult;
		PalletEthyEventClaimStatus: PalletEthyEventClaimStatus;
		PalletEthyNotarizationPayload: PalletEthyNotarizationPayload;
		PalletEvmCall: PalletEvmCall;
		PalletEvmChainIdCall: PalletEvmChainIdCall;
		PalletEvmChainIdEvent: PalletEvmChainIdEvent;
		PalletEvmCodeMetadata: PalletEvmCodeMetadata;
		PalletEvmError: PalletEvmError;
		PalletEvmEvent: PalletEvmEvent;
		PalletFeeControlCall: PalletFeeControlCall;
		PalletFeeControlEvent: PalletFeeControlEvent;
		PalletFeeControlFeeControlFeeConfig: PalletFeeControlFeeControlFeeConfig;
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
		PalletImOnlineCall: PalletImOnlineCall;
		PalletImOnlineError: PalletImOnlineError;
		PalletImOnlineEvent: PalletImOnlineEvent;
		PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
		PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
		PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
		PalletLiquidityPoolsCall: PalletLiquidityPoolsCall;
		PalletLiquidityPoolsError: PalletLiquidityPoolsError;
		PalletLiquidityPoolsEvent: PalletLiquidityPoolsEvent;
		PalletLiquidityPoolsPoolInfo: PalletLiquidityPoolsPoolInfo;
		PalletLiquidityPoolsPoolRelationship: PalletLiquidityPoolsPoolRelationship;
		PalletLiquidityPoolsPoolStatus: PalletLiquidityPoolsPoolStatus;
		PalletLiquidityPoolsUserInfo: PalletLiquidityPoolsUserInfo;
		PalletMaintenanceModeCall: PalletMaintenanceModeCall;
		PalletMaintenanceModeError: PalletMaintenanceModeError;
		PalletMaintenanceModeEvent: PalletMaintenanceModeEvent;
		PalletMaintenanceModeMaintenanceChecker: PalletMaintenanceModeMaintenanceChecker;
		PalletMarketplaceAuctionClosureReason: PalletMarketplaceAuctionClosureReason;
		PalletMarketplaceAuctionListing: PalletMarketplaceAuctionListing;
		PalletMarketplaceCall: PalletMarketplaceCall;
		PalletMarketplaceError: PalletMarketplaceError;
		PalletMarketplaceEvent: PalletMarketplaceEvent;
		PalletMarketplaceFixedPriceClosureReason: PalletMarketplaceFixedPriceClosureReason;
		PalletMarketplaceFixedPriceListing: PalletMarketplaceFixedPriceListing;
		PalletMarketplaceListing: PalletMarketplaceListing;
		PalletMarketplaceListingTokens: PalletMarketplaceListingTokens;
		PalletMarketplaceMarketplace: PalletMarketplaceMarketplace;
		PalletMarketplaceNftListing: PalletMarketplaceNftListing;
		PalletMarketplaceOfferType: PalletMarketplaceOfferType;
		PalletMarketplaceSftListing: PalletMarketplaceSftListing;
		PalletMarketplaceSimpleOffer: PalletMarketplaceSimpleOffer;
		PalletMigrationCall: PalletMigrationCall;
		PalletMigrationError: PalletMigrationError;
		PalletMigrationEvent: PalletMigrationEvent;
		PalletMigrationMigrationStatus: PalletMigrationMigrationStatus;
		PalletMultisigCall: PalletMultisigCall;
		PalletMultisigError: PalletMultisigError;
		PalletMultisigEvent: PalletMultisigEvent;
		PalletMultisigMultisig: PalletMultisigMultisig;
		PalletMultisigTimepoint: PalletMultisigTimepoint;
		PalletNfiCall: PalletNfiCall;
		PalletNfiError: PalletNfiError;
		PalletNfiEvent: PalletNfiEvent;
		PalletNfiFeeDetails: PalletNfiFeeDetails;
		PalletNfiGenericCollectionId: PalletNfiGenericCollectionId;
		PalletNfiGenericSerialNumber: PalletNfiGenericSerialNumber;
		PalletNfiMultiChainTokenId: PalletNfiMultiChainTokenId;
		PalletNfiNfiDataType: PalletNfiNfiDataType;
		PalletNfiNfiMatrix: PalletNfiNfiMatrix;
		PalletNfiNfiSubType: PalletNfiNfiSubType;
		PalletNftCall: PalletNftCall;
		PalletNftCollectionInformation: PalletNftCollectionInformation;
		PalletNftCollectionPendingIssuances: PalletNftCollectionPendingIssuances;
		PalletNftError: PalletNftError;
		PalletNftEvent: PalletNftEvent;
		PalletNftPegBlockedTokenInfo: PalletNftPegBlockedTokenInfo;
		PalletNftPegCall: PalletNftPegCall;
		PalletNftPegError: PalletNftPegError;
		PalletNftPegEvent: PalletNftPegEvent;
		PalletNftPendingIssuance: PalletNftPendingIssuance;
		PalletNftTokenInformation: PalletNftTokenInformation;
		PalletOffencesEvent: PalletOffencesEvent;
		PalletPartnerAttributionCall: PalletPartnerAttributionCall;
		PalletPartnerAttributionError: PalletPartnerAttributionError;
		PalletPartnerAttributionEvent: PalletPartnerAttributionEvent;
		PalletPartnerAttributionPartnerInformation: PalletPartnerAttributionPartnerInformation;
		PalletPreimageCall: PalletPreimageCall;
		PalletPreimageError: PalletPreimageError;
		PalletPreimageEvent: PalletPreimageEvent;
		PalletPreimageRequestStatus: PalletPreimageRequestStatus;
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
		PalletSchedulerScheduled: PalletSchedulerScheduled;
		PalletSessionCall: PalletSessionCall;
		PalletSessionError: PalletSessionError;
		PalletSessionEvent: PalletSessionEvent;
		PalletSftCall: PalletSftCall;
		PalletSftError: PalletSftError;
		PalletSftEvent: PalletSftEvent;
		PalletSftSftCollectionInformation: PalletSftSftCollectionInformation;
		PalletSftSftCollectionPendingIssuances: PalletSftSftCollectionPendingIssuances;
		PalletSftSftPendingIssuance: PalletSftSftPendingIssuance;
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
		PalletSyloActionPermissionsCall: PalletSyloActionPermissionsCall;
		PalletSyloActionPermissionsError: PalletSyloActionPermissionsError;
		PalletSyloActionPermissionsEvent: PalletSyloActionPermissionsEvent;
		PalletSyloActionPermissionsSpender: PalletSyloActionPermissionsSpender;
		PalletSyloActionPermissionsTransactPermission: PalletSyloActionPermissionsTransactPermission;
		PalletSyloActionPermissionsTransactPermissionToken: PalletSyloActionPermissionsTransactPermissionToken;
		PalletSyloActionPermissionsTransactPermissionTokenSignature: PalletSyloActionPermissionsTransactPermissionTokenSignature;
		PalletSyloActionPermissionsXrplTokenSignature: PalletSyloActionPermissionsXrplTokenSignature;
		PalletSyloDataPermissionsCall: PalletSyloDataPermissionsCall;
		PalletSyloDataPermissionsError: PalletSyloDataPermissionsError;
		PalletSyloDataPermissionsEvent: PalletSyloDataPermissionsEvent;
		PalletSyloDataPermissionsPermissionRecord: PalletSyloDataPermissionsPermissionRecord;
		PalletSyloDataPermissionsPermissionReference: PalletSyloDataPermissionsPermissionReference;
		PalletSyloDataPermissionsTaggedPermissionRecord: PalletSyloDataPermissionsTaggedPermissionRecord;
		PalletSyloDataVerificationCall: PalletSyloDataVerificationCall;
		PalletSyloDataVerificationError: PalletSyloDataVerificationError;
		PalletSyloDataVerificationEvent: PalletSyloDataVerificationEvent;
		PalletTimestampCall: PalletTimestampCall;
		PalletTokenApprovalsCall: PalletTokenApprovalsCall;
		PalletTokenApprovalsError: PalletTokenApprovalsError;
		PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
		PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
		PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
		PalletUtilityCall: PalletUtilityCall;
		PalletUtilityError: PalletUtilityError;
		PalletUtilityEvent: PalletUtilityEvent;
		PalletVortexDistributionCall: PalletVortexDistributionCall;
		PalletVortexDistributionError: PalletVortexDistributionError;
		PalletVortexDistributionEvent: PalletVortexDistributionEvent;
		PalletVortexDistributionVtxDistStatus: PalletVortexDistributionVtxDistStatus;
		PalletXls20Call: PalletXls20Call;
		PalletXls20Error: PalletXls20Error;
		PalletXls20Event: PalletXls20Event;
		PalletXls20Xls20Collection: PalletXls20Xls20Collection;
		PalletXrplBridgeAssetWithdrawTransaction: PalletXrplBridgeAssetWithdrawTransaction;
		PalletXrplBridgeCall: PalletXrplBridgeCall;
		PalletXrplBridgeDelayedWithdrawal: PalletXrplBridgeDelayedWithdrawal;
		PalletXrplBridgeError: PalletXrplBridgeError;
		PalletXrplBridgeEvent: PalletXrplBridgeEvent;
		PalletXrplBridgeNfTokenAcceptOfferTransaction: PalletXrplBridgeNfTokenAcceptOfferTransaction;
		PalletXrplBridgeNfTokenCreateOfferTransaction: PalletXrplBridgeNfTokenCreateOfferTransaction;
		PalletXrplBridgeWithdrawTransaction: PalletXrplBridgeWithdrawTransaction;
		PalletXrplBridgeXrpTransaction: PalletXrplBridgeXrpTransaction;
		PalletXrplBridgeXrpWithdrawTransaction: PalletXrplBridgeXrpWithdrawTransaction;
		PalletXrplBridgeXrplCurrency: PalletXrplBridgeXrplCurrency;
		PalletXrplBridgeXrplCurrencyType: PalletXrplBridgeXrplCurrencyType;
		PalletXrplBridgeXrplDoorAccount: PalletXrplBridgeXrplDoorAccount;
		PalletXrplBridgeXrplTicketSequenceParams: PalletXrplBridgeXrplTicketSequenceParams;
		PalletXrplBridgeXrplTransaction: PalletXrplBridgeXrplTransaction;
		PalletXrplBridgeXrplTxData: PalletXrplBridgeXrplTxData;
		PalletXrplCall: PalletXrplCall;
		PalletXrplError: PalletXrplError;
		PalletXrplEvent: PalletXrplEvent;
		PalletXrplXrplPublicKey: PalletXrplXrplPublicKey;
		SeedPalletCommonEventRouterError: SeedPalletCommonEventRouterError;
		SeedPalletCommonSyloDataPermission: SeedPalletCommonSyloDataPermission;
		SeedPalletCommonSyloResolver: SeedPalletCommonSyloResolver;
		SeedPalletCommonSyloResolverId: SeedPalletCommonSyloResolverId;
		SeedPalletCommonSyloValidationEntry: SeedPalletCommonSyloValidationEntry;
		SeedPalletCommonSyloValidationRecord: SeedPalletCommonSyloValidationRecord;
		SeedPalletCommonUtilsCollectionUtilityFlags: SeedPalletCommonUtilsCollectionUtilityFlags;
		SeedPalletCommonUtilsPublicMintInformation: SeedPalletCommonUtilsPublicMintInformation;
		SeedPalletCommonUtilsTokenBurnAuthority: SeedPalletCommonUtilsTokenBurnAuthority;
		SeedPalletCommonUtilsTokenUtilityFlags: SeedPalletCommonUtilsTokenUtilityFlags;
		SeedPrimitivesEthyCryptoAppCryptoPublic: SeedPrimitivesEthyCryptoAppCryptoPublic;
		SeedPrimitivesEthyCryptoAppCryptoSignature: SeedPrimitivesEthyCryptoAppCryptoSignature;
		SeedPrimitivesNftCrossChainCompatibility: SeedPrimitivesNftCrossChainCompatibility;
		SeedPrimitivesNftOriginChain: SeedPrimitivesNftOriginChain;
		SeedPrimitivesNftRoyaltiesSchedule: SeedPrimitivesNftRoyaltiesSchedule;
		SeedPrimitivesNftTokenLockReason: SeedPrimitivesNftTokenLockReason;
		SeedPrimitivesSignatureAccountId20: SeedPrimitivesSignatureAccountId20;
		SeedPrimitivesSignatureEthereumSignature: SeedPrimitivesSignatureEthereumSignature;
		SeedRuntimeImplsProxyType: SeedRuntimeImplsProxyType;
		SeedRuntimeNposCompactSolution16: SeedRuntimeNposCompactSolution16;
		SeedRuntimeOriginCaller: SeedRuntimeOriginCaller;
		SeedRuntimeRuntime: SeedRuntimeRuntime;
		SeedRuntimeSessionKeys: SeedRuntimeSessionKeys;
		SpArithmeticArithmeticError: SpArithmeticArithmeticError;
		SpConsensusBabeAllowedSlots: SpConsensusBabeAllowedSlots;
		SpConsensusBabeAppPublic: SpConsensusBabeAppPublic;
		SpConsensusBabeBabeEpochConfiguration: SpConsensusBabeBabeEpochConfiguration;
		SpConsensusBabeDigestsNextConfigDescriptor: SpConsensusBabeDigestsNextConfigDescriptor;
		SpConsensusBabeDigestsPreDigest: SpConsensusBabeDigestsPreDigest;
		SpConsensusBabeDigestsPrimaryPreDigest: SpConsensusBabeDigestsPrimaryPreDigest;
		SpConsensusBabeDigestsSecondaryPlainPreDigest: SpConsensusBabeDigestsSecondaryPlainPreDigest;
		SpConsensusBabeDigestsSecondaryVRFPreDigest: SpConsensusBabeDigestsSecondaryVRFPreDigest;
		SpConsensusGrandpaAppPublic: SpConsensusGrandpaAppPublic;
		SpConsensusGrandpaAppSignature: SpConsensusGrandpaAppSignature;
		SpConsensusGrandpaEquivocation: SpConsensusGrandpaEquivocation;
		SpConsensusGrandpaEquivocationProof: SpConsensusGrandpaEquivocationProof;
		SpConsensusSlotsEquivocationProof: SpConsensusSlotsEquivocationProof;
		SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
		SpCoreEcdsaPublic: SpCoreEcdsaPublic;
		SpCoreEcdsaSignature: SpCoreEcdsaSignature;
		SpCoreEd25519Public: SpCoreEd25519Public;
		SpCoreEd25519Signature: SpCoreEd25519Signature;
		SpCoreSr25519Public: SpCoreSr25519Public;
		SpCoreSr25519Signature: SpCoreSr25519Signature;
		SpCoreSr25519VrfVrfSignature: SpCoreSr25519VrfVrfSignature;
		SpCoreVoid: SpCoreVoid;
		SpNposElectionsElectionScore: SpNposElectionsElectionScore;
		SpNposElectionsSupport: SpNposElectionsSupport;
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
		SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
		SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
	} // InterfaceTypes
} // declare module
