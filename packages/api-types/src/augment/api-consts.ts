// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/consts";

import type { ApiTypes, AugmentedConst } from "@polkadot/api-base/types";
import type { Option, Vec, u128, u16, u32, u64, u8 } from "@polkadot/types-codec";
import type { Codec, ITuple } from "@polkadot/types-codec/types";
import type {
	FrameSupportPalletId,
	FrameSystemLimitsBlockLength,
	FrameSystemLimitsBlockWeights,
	SpVersionRuntimeVersion,
	SpWeightsRuntimeDbWeight,
	SpWeightsWeightV2Weight,
} from "@polkadot/types/lookup";
import type { Perbill, Percent, Permill } from "@therootnetwork/api-types/interfaces/runtime";

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module "@polkadot/api-base/types/consts" {
	interface AugmentedConsts<ApiType extends ApiTypes> {
		assets: {
			/**
			 * The amount of funds that must be reserved when creating a new approval.
			 **/
			approvalDeposit: u128 & AugmentedConst<ApiType>;
			/**
			 * The amount of funds that must be reserved for a non-provider asset account to be
			 * maintained.
			 **/
			assetAccountDeposit: u128 & AugmentedConst<ApiType>;
			/**
			 * The basic amount of funds that must be reserved for an asset.
			 **/
			assetDeposit: u128 & AugmentedConst<ApiType>;
			/**
			 * The basic amount of funds that must be reserved when adding metadata to your asset.
			 **/
			metadataDepositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * The additional funds that must be reserved for the number of bytes you store in your
			 * metadata.
			 **/
			metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
			/**
			 * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
			 *
			 * Must be configured to result in a weight that makes each call fit in a block.
			 **/
			removeItemsLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum length of a name or symbol stored on-chain.
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		assetsExt: {
			/**
			 * The maximum * of holds per asset & account
			 **/
			maxHolds: u32 & AugmentedConst<ApiType>;
			/**
			 * The native token asset Id (managed by pallet-balances)
			 **/
			nativeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		babe: {
			/**
			 * The amount of time, in slots, that each epoch should last.
			 * NOTE: Currently it is not possible to change the epoch duration after
			 * the chain has started. Attempting to do so will brick block production.
			 **/
			epochDuration: u64 & AugmentedConst<ApiType>;
			/**
			 * The expected average block time at which BABE should be creating
			 * blocks. Since BABE is probabilistic it is not trivial to figure out
			 * what the expected average block time should be based on the slot
			 * duration and the security parameter `c` (where `1 - c` represents
			 * the probability of a slot being empty).
			 **/
			expectedBlockTime: u64 & AugmentedConst<ApiType>;
			/**
			 * Max number of authorities allowed
			 **/
			maxAuthorities: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		balances: {
			/**
			 * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
			 *
			 * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
			 * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
			 * In case you have multiple sources of provider references, you may also get unexpected
			 * behaviour if you set this to zero.
			 *
			 * Bottom line: Do yourself a favour and make it at least one!
			 **/
			existentialDeposit: u128 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of individual freeze locks that can exist on an account at any time.
			 **/
			maxFreezes: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of holds that can exist on an account at any time.
			 **/
			maxHolds: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of locks that should exist on an account.
			 * Not strictly enforced, but used for weight estimation.
			 **/
			maxLocks: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of named reserves that can exist on an account.
			 **/
			maxReserves: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		crowdsale: {
			/**
			 * The maximum number of sales that can be active at one time
			 **/
			maxConsecutiveSales: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of payments that can be processed in the offchain worker per block
			 **/
			maxPaymentsPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum duration of a sale
			 **/
			maxSaleDuration: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of sales that can be queued for completion in a single block
			 **/
			maxSalesPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * The maximum length of a intermediary sale voucher asset name and symbol
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Unsigned transaction interval
			 **/
			unsignedInterval: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		dex: {
			/**
			 * The default FeeTo account
			 **/
			defaultFeeTo: Option<FrameSupportPalletId> & AugmentedConst<ApiType>;
			/**
			 * The DEX's burn id, to provide for a redundant, unredeemable minter/burner address.
			 **/
			dexBurnPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Trading fee rate
			 * The first item of the tuple is the numerator of the fee rate, second
			 * item is the denominator, fee_rate = numerator / denominator,
			 * use (u32, u32) over `Rate` type to minimize internal division
			 * operation.
			 **/
			getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
			/**
			 * Liquidity pair default token decimals
			 **/
			lpTokenDecimals: u8 & AugmentedConst<ApiType>;
			/**
			 * The limit for length of trading path
			 **/
			tradingPathLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		echo: {
			/**
			 * This pallet's ID, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		electionProviderMultiPhase: {
			/**
			 * The minimum amount of improvement to the solution score that defines a solution as
			 * "better" in the Signed phase.
			 **/
			betterSignedThreshold: Perbill & AugmentedConst<ApiType>;
			/**
			 * The minimum amount of improvement to the solution score that defines a solution as
			 * "better" in the Unsigned phase.
			 **/
			betterUnsignedThreshold: Perbill & AugmentedConst<ApiType>;
			/**
			 * The maximum number of electable targets to put in the snapshot.
			 **/
			maxElectableTargets: u16 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of electing voters to put in the snapshot. At the moment, snapshots
			 * are only over a single block, but once multi-block elections are introduced they will
			 * take place over multiple blocks.
			 **/
			maxElectingVoters: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of winners that can be elected by this `ElectionProvider`
			 * implementation.
			 *
			 * Note: This must always be greater or equal to `T::DataProvider::desired_targets()`.
			 **/
			maxWinners: u32 & AugmentedConst<ApiType>;
			minerMaxLength: u32 & AugmentedConst<ApiType>;
			minerMaxVotesPerVoter: u32 & AugmentedConst<ApiType>;
			minerMaxWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
			minerMaxWinners: u32 & AugmentedConst<ApiType>;
			/**
			 * The priority of the unsigned transaction submitted in the unsigned-phase
			 **/
			minerTxPriority: u64 & AugmentedConst<ApiType>;
			/**
			 * The repeat threshold of the offchain worker.
			 *
			 * For example, if it is 5, that means that at least 5 blocks will elapse between attempts
			 * to submit the worker's solution.
			 **/
			offchainRepeat: u32 & AugmentedConst<ApiType>;
			/**
			 * Base deposit for a signed solution.
			 **/
			signedDepositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * Per-byte deposit for a signed solution.
			 **/
			signedDepositByte: u128 & AugmentedConst<ApiType>;
			/**
			 * Per-weight deposit for a signed solution.
			 **/
			signedDepositWeight: u128 & AugmentedConst<ApiType>;
			/**
			 * The maximum amount of unchecked solutions to refund the call fee for.
			 **/
			signedMaxRefunds: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of signed submissions that can be queued.
			 *
			 * It is best to avoid adjusting this during an election, as it impacts downstream data
			 * structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you
			 * update this value during an election, you _must_ ensure that
			 * `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,
			 * attempts to submit new solutions may cause a runtime panic.
			 **/
			signedMaxSubmissions: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum weight of a signed solution.
			 *
			 * If [`Config::MinerConfig`] is being implemented to submit signed solutions (outside of
			 * this pallet), then [`MinerConfig::solution_weight`] is used to compare against
			 * this value.
			 **/
			signedMaxWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
			/**
			 * Duration of the signed phase.
			 **/
			signedPhase: u32 & AugmentedConst<ApiType>;
			/**
			 * Base reward for a signed solution
			 **/
			signedRewardBase: u128 & AugmentedConst<ApiType>;
			/**
			 * Duration of the unsigned phase.
			 **/
			unsignedPhase: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		erc20Peg: {
			/**
			 * The maximum number of delayed payments allowed per block
			 **/
			maxDelaysPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of ready blocks allowed per storage
			 **/
			maxReadyBlocks: u32 & AugmentedConst<ApiType>;
			/**
			 * The native token asset Id (managed by pallet-balances)
			 **/
			nativeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum length of an ERC20 token symbol
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		ethBridge: {
			/**
			 * Length of time the bridge will be paused while the authority set changes
			 **/
			authorityChangeDelay: u32 & AugmentedConst<ApiType>;
			/**
			 * The pallet bridge address (destination for incoming messages, source for outgoing)
			 **/
			bridgePalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Bond required by challenger to make a challenge
			 **/
			challengeBond: u128 & AugmentedConst<ApiType>;
			epochDuration: u64 & AugmentedConst<ApiType>;
			/**
			 * Maximum count of notary keys
			 **/
			maxAuthorities: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of Eth Call Requests
			 **/
			maxCallRequests: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of pending challenges
			 **/
			maxChallenges: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum size of eth abi and message data
			 **/
			maxEthData: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of valid messages per block
			 **/
			maxMessagesPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * Max amount of new signers that can be set an in extrinsic
			 **/
			maxNewSigners: u8 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of processed message Ids that will we keep as a buffer to prevent
			 * replays.
			 **/
			maxProcessedMessageIds: u32 & AugmentedConst<ApiType>;
			/**
			 * Max Xrpl notary (validator) public keys
			 **/
			maxXrplKeys: u8 & AugmentedConst<ApiType>;
			/**
			 * The native token asset Id (managed by pallet-balances)
			 **/
			nativeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * The threshold of notarizations required to approve an Ethereum event
			 **/
			notarizationThreshold: Percent & AugmentedConst<ApiType>;
			/**
			 * Bond required for an account to act as relayer
			 **/
			relayerBond: u128 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		feeProxy: {
			/**
			 * The native token asset Id (managed by pallet-balances)
			 **/
			feeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		grandpa: {
			/**
			 * Max Authorities in use
			 **/
			maxAuthorities: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of entries to keep in the set id to session index mapping.
			 *
			 * Since the `SetIdSession` map is only used for validating equivocations this
			 * value should relate to the bonding duration of whatever staking system is
			 * being used (if any). If equivocation handling is not enabled then this value
			 * can be zero.
			 **/
			maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		imOnline: {
			/**
			 * A configuration for base priority of unsigned transactions.
			 *
			 * This is exposed so that it can be tuned for particular runtime, when
			 * multiple pallets send unsigned transactions.
			 **/
			unsignedPriority: u64 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		liquidityPools: {
			/**
			 * Interest rate for 100% base point. Use the base point to calculate actual interest rate.
			 * e.g. when 10000 is base points, and interest rate is 1000 when creating pool, then the
			 * actual interest rate is 10% (1000 / 10000).
			 **/
			interestRateBasePoint: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Max number of users to rollover per block
			 **/
			rolloverBatchSize: u32 & AugmentedConst<ApiType>;
			/**
			 * Unsigned transaction interval
			 **/
			unsignedInterval: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		maintenanceMode: {
			/**
			 * The maximum length of a pallet or call name, stored on-chain
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		marketplace: {
			/**
			 * The default account which collects network fees from marketplace sales
			 **/
			defaultFeeTo: Option<FrameSupportPalletId> & AugmentedConst<ApiType>;
			/**
			 * Default auction / sale length in blocks
			 **/
			defaultListingDuration: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		migration: {
			/**
			 * The maximum weight this pallet can use in on_idle
			 **/
			maxMigrationWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		multisig: {
			/**
			 * The base amount of currency needed to reserve for creating a multisig execution or to
			 * store a dispatch call for later.
			 *
			 * This is held for an additional storage item whose value size is
			 * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
			 * `32 + sizeof(AccountId)` bytes.
			 **/
			depositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * The amount of currency needed per unit threshold when creating a multisig execution.
			 *
			 * This is held for adding 32 bytes more into a pre-existing storage value.
			 **/
			depositFactor: u128 & AugmentedConst<ApiType>;
			/**
			 * The maximum amount of signatories allowed in the multisig.
			 **/
			maxSignatories: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		nfi: {
			/**
			 * Max length of bytes stored for MultiChainTokenId
			 **/
			maxByteLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Max length of data stored per token
			 **/
			maxDataLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Percentage of sale price to charge for network fee
			 **/
			networkFeePercentage: Permill & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		nft: {
			/**
			 * The maximum length of the stored additional data for a token
			 **/
			maxDataLength: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * The maximum length of a collection name, stored on-chain
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		nftPeg: {
			delayLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		proxy: {
			/**
			 * The base amount of currency needed to reserve for creating an announcement.
			 *
			 * This is held when a new storage item holding a `Balance` is created (typically 16
			 * bytes).
			 **/
			announcementDepositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * The amount of currency needed per announcement made.
			 *
			 * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
			 * into a pre-existing storage value.
			 **/
			announcementDepositFactor: u128 & AugmentedConst<ApiType>;
			/**
			 * The maximum amount of time-delayed announcements that are allowed to be pending.
			 **/
			maxPending: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum amount of proxies allowed for a single account.
			 **/
			maxProxies: u32 & AugmentedConst<ApiType>;
			/**
			 * The base amount of currency needed to reserve for creating a proxy.
			 *
			 * This is held for an additional storage item whose value size is
			 * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
			 **/
			proxyDepositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * The amount of currency needed per proxy added.
			 *
			 * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
			 * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
			 * into account `32 + proxy_type.encode().len()` bytes of data.
			 **/
			proxyDepositFactor: u128 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		recovery: {
			/**
			 * The base amount of currency needed to reserve for creating a recovery configuration.
			 *
			 * This is held for an additional storage item whose value size is
			 * `2 + sizeof(BlockNumber, Balance)` bytes.
			 **/
			configDepositBase: u128 & AugmentedConst<ApiType>;
			/**
			 * The amount of currency needed per additional user when creating a recovery
			 * configuration.
			 *
			 * This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage
			 * value.
			 **/
			friendDepositFactor: u128 & AugmentedConst<ApiType>;
			/**
			 * The maximum amount of friends allowed in a recovery configuration.
			 *
			 * NOTE: The threshold programmed in this Pallet uses u16, so it does
			 * not really make sense to have a limit here greater than u16::MAX.
			 * But also, that is a lot more than you should probably set this value
			 * to anyway...
			 **/
			maxFriends: u32 & AugmentedConst<ApiType>;
			/**
			 * The base amount of currency needed to reserve for starting a recovery.
			 *
			 * This is primarily held for deterring malicious recovery attempts, and should
			 * have a value large enough that a bad actor would choose not to place this
			 * deposit. It also acts to fund additional storage item whose value size is
			 * `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable
			 * threshold.
			 **/
			recoveryDeposit: u128 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		scheduler: {
			/**
			 * The maximum weight that may be scheduled per block for any dispatchables.
			 **/
			maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
			/**
			 * The maximum number of scheduled calls in the queue for a single block.
			 *
			 * NOTE:
			 * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
			 * higher limit under `runtime-benchmarks` feature.
			 **/
			maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		sft: {
			/**
			 * The maximum length of the stored additional data for a token
			 **/
			maxDataLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Max unique owners that can own an SFT token
			 **/
			maxOwnersPerSftToken: u32 & AugmentedConst<ApiType>;
			/**
			 * Max tokens that can be minted in one transaction
			 **/
			maxSerialsPerMint: u32 & AugmentedConst<ApiType>;
			/**
			 * Max tokens that a collection can contain
			 **/
			maxTokensPerSftCollection: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * The maximum length of a collection or token name, stored on-chain
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		staking: {
			/**
			 * Number of eras that staked funds must remain bonded for.
			 **/
			bondingDuration: u32 & AugmentedConst<ApiType>;
			/**
			 * Number of eras to keep in history.
			 *
			 * Following information is kept for eras in `[current_era -
			 * HistoryDepth, current_era]`: `ErasStakers`, `ErasStakersClipped`,
			 * `ErasValidatorPrefs`, `ErasValidatorReward`, `ErasRewardPoints`,
			 * `ErasTotalStake`, `ErasStartSessionIndex`,
			 * `StakingLedger.claimed_rewards`.
			 *
			 * Must be more than the number of eras delayed by session.
			 * I.e. active era must always be in history. I.e. `active_era >
			 * current_era - history_depth` must be guaranteed.
			 *
			 * If migrating an existing pallet from storage value to config value,
			 * this should be set to same value or greater as in storage.
			 *
			 * Note: `HistoryDepth` is used as the upper bound for the `BoundedVec`
			 * item `StakingLedger.claimed_rewards`. Setting this value lower than
			 * the existing value can lead to inconsistencies in the
			 * `StakingLedger` and will need to be handled properly in a migration.
			 * The test `reducing_history_depth_abrupt` shows this effect.
			 **/
			historyDepth: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of nominations per nominator.
			 **/
			maxNominations: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of nominators rewarded for each validator.
			 *
			 * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can
			 * claim their reward. This used to limit the i/o cost for the nominator payout.
			 **/
			maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of `unlocking` chunks a [`StakingLedger`] can
			 * have. Effectively determines how many unique eras a staker may be
			 * unbonding in.
			 *
			 * Note: `MaxUnlockingChunks` is used as the upper bound for the
			 * `BoundedVec` item `StakingLedger.unlocking`. Setting this value
			 * lower than the existing value can lead to inconsistencies in the
			 * `StakingLedger` and will need to be handled properly in a runtime
			 * migration. The test `reducing_max_unlocking_chunks_abrupt` shows
			 * this effect.
			 **/
			maxUnlockingChunks: u32 & AugmentedConst<ApiType>;
			/**
			 * Number of sessions per era.
			 **/
			sessionsPerEra: u32 & AugmentedConst<ApiType>;
			/**
			 * Number of eras that slashes are deferred by, after computation.
			 *
			 * This should be less than the bonding duration. Set to 0 if slashes
			 * should be applied immediately, without opportunity for intervention.
			 **/
			slashDeferDuration: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		syloActionPermissions: {
			/**
			 * The maximum number of modules allowed in a transact permission.
			 **/
			maxCallIds: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of modules allowed in a transact permission.
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum bounded length for the XRPL signed message/transaction.
			 **/
			xrplMaxMessageLength: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum bounded length for the XRPL signature.
			 **/
			xrplMaxSignatureLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		syloDataPermissions: {
			/**
			 * The maximum number of entries in a validation record.
			 **/
			maxEntries: u32 & AugmentedConst<ApiType>;
			/**
			 * Limits the number of permissions that can expire on the same block
			 **/
			maxExpiringPermissions: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of tagged permission records that can be granted
			 * to an account
			 **/
			maxPermissionRecords: u32 & AugmentedConst<ApiType>;
			/**
			 * Limit on the number of permissions that can be granted at once
			 **/
			maxPermissions: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximim number of resolvers in a validation record.
			 **/
			maxResolvers: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of service endpoints for a registered resolver.
			 **/
			maxServiceEndpoints: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of tags that can be used in a tagged permission
			 * record
			 **/
			maxTags: u32 & AugmentedConst<ApiType>;
			/**
			 * The number of blocks an expired permission will persist on-chain
			 * before being automatically removed
			 **/
			permissionRemovalDelay: u32 & AugmentedConst<ApiType>;
			/**
			 * The max length used for data ids
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		syloDataVerification: {
			/**
			 * The maximum number of validation entries in a record.
			 **/
			maxEntries: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximim number of resolvers in a validation record.
			 **/
			maxResolvers: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of service endpoints for a registered resolver.
			 **/
			maxServiceEndpoints: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum number of tags in a validation record.
			 **/
			maxTags: u32 & AugmentedConst<ApiType>;
			/**
			 * The max length of strings used within the Sylo Pallet. This limits
			 * the maximum size for resolver identifiers, data identifier, service
			 * endpoint strings, and tag strings.
			 **/
			stringLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		system: {
			/**
			 * Maximum number of block number to block hash mappings to keep (oldest pruned first).
			 **/
			blockHashCount: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum length of a block (in bytes).
			 **/
			blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
			/**
			 * Block & extrinsics weights: base values and limits.
			 **/
			blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
			/**
			 * The weight of runtime database operations the runtime can invoke.
			 **/
			dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
			/**
			 * The designated SS58 prefix of this chain.
			 *
			 * This replaces the "ss58Format" property declared in the chain spec. Reason is
			 * that the runtime should know about the prefix in order to make use of it as
			 * an identifier of the chain.
			 **/
			ss58Prefix: u16 & AugmentedConst<ApiType>;
			/**
			 * Get the chain's current version.
			 **/
			version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		timestamp: {
			/**
			 * The minimum period between blocks. Beware that this is different to the *expected*
			 * period that the block production apparatus provides. Your chosen consensus system will
			 * generally work with this to determine a sensible block time. e.g. For Aura, it will be
			 * double this period on default settings.
			 **/
			minimumPeriod: u64 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		transactionPayment: {
			/**
			 * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
			 * `priority`
			 *
			 * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
			 * added to a tip component in regular `priority` calculations.
			 * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
			 * extrinsic (with no tip), by including a tip value greater than the virtual tip.
			 *
			 * ```rust,ignore
			 * // For `Normal`
			 * let priority = priority_calc(tip);
			 *
			 * // For `Operational`
			 * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
			 * let priority = priority_calc(tip + virtual_tip);
			 * ```
			 *
			 * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
			 * sent with the transaction. So, not only does the transaction get a priority bump based
			 * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
			 * transactions.
			 **/
			operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		txFeePot: {
			txFeePotId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		utility: {
			/**
			 * The limit on the number of batched calls.
			 **/
			batchedCallsLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		vortexDistribution: {
			/**
			 * History depth
			 **/
			historyDepth: u32 & AugmentedConst<ApiType>;
			/**
			 * The native token asset Id (managed by pallet-balances)
			 **/
			nativeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * Payout batch size
			 **/
			payoutBatchSize: u32 & AugmentedConst<ApiType>;
			/**
			 * Vortex root pot id
			 **/
			rootPotId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Tx fee pot id
			 **/
			txFeePotId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Unsigned transaction interval
			 **/
			unsignedInterval: u32 & AugmentedConst<ApiType>;
			/**
			 * Vortex token asset Id
			 **/
			vtxAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * Vortex distribution pot id
			 **/
			vtxDistPotId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Vortex vault pot id that holds fresh minted vortex
			 **/
			vtxHeldPotId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		voterList: {
			/**
			 * The list of thresholds separating the various bags.
			 *
			 * Ids are separated into unsorted bags according to their score. This specifies the
			 * thresholds separating the bags. An id's bag is the largest bag for which the id's score
			 * is less than or equal to its upper threshold.
			 *
			 * When ids are iterated, higher bags are iterated completely before lower bags. This means
			 * that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
			 * score, but peer ids within a particular bag are sorted in insertion order.
			 *
			 * # Expressing the constant
			 *
			 * This constant must be sorted in strictly increasing order. Duplicate items are not
			 * permitted.
			 *
			 * There is an implied upper limit of `Score::MAX`; that value does not need to be
			 * specified within the bag. For any two threshold lists, if one ends with
			 * `Score::MAX`, the other one does not, and they are otherwise equal, the two
			 * lists will behave identically.
			 *
			 * # Calculation
			 *
			 * It is recommended to generate the set of thresholds in a geometric series, such that
			 * there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
			 * constant_ratio).max(threshold[k] + 1)` for all `k`.
			 *
			 * The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
			 *
			 * # Examples
			 *
			 * - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
			 * iteration is strictly in insertion order.
			 * - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
			 * the procedure given above, then the constant ratio is equal to 2.
			 * - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
			 * the procedure given above, then the constant ratio is approximately equal to 1.248.
			 * - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
			 * into bag 0, an id with score 2 will fall into bag 1, etc.
			 *
			 * # Migration
			 *
			 * In the event that this list ever changes, a copy of the old bags list must be retained.
			 * With that `List::migrate` can be called, which will perform the appropriate migration.
			 **/
			bagThresholds: Vec<u64> & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		xls20: {
			/**
			 * This pallet's ID, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		xrpl: {
			/**
			 * The maximum bounded length for the XRPL signed message/transaction.
			 **/
			maxMessageLength: u32 & AugmentedConst<ApiType>;
			/**
			 * The maximum bounded length for the XRPL signature.
			 **/
			maxSignatureLength: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
		xrplBridge: {
			/**
			 * Challenge Period to wait for a challenge before processing the transaction
			 **/
			challengePeriod: u32 & AugmentedConst<ApiType>;
			/**
			 * Upper limit to the number of blocks we can check per block for delayed payments
			 **/
			delayedPaymentBlockLimit: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of delayed transactions that can be processed in a single block
			 **/
			maxDelayedPaymentsPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * Maximum number of transactions that can be pruned in on_idle
			 **/
			maxPrunedTransactionsPerBlock: u32 & AugmentedConst<ApiType>;
			/**
			 * ROOT AssetId set at runtime
			 **/
			nativeAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * This pallet's Id, used for deriving a sovereign account ID
			 **/
			palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
			/**
			 * XRP Asset Id set at runtime
			 **/
			xrpAssetId: u32 & AugmentedConst<ApiType>;
			/**
			 * Generic const
			 **/
			[key: string]: Codec;
		};
	} // AugmentedConsts
} // declare module
