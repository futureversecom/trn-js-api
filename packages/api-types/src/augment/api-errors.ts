// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/errors";

import type { ApiTypes, AugmentedError } from "@polkadot/api-base/types";

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module "@polkadot/api-base/types/errors" {
	interface AugmentedErrors<ApiType extends ApiTypes> {
		assets: {
			/**
			 * The asset-account already exists.
			 **/
			AlreadyExists: AugmentedError<ApiType>;
			/**
			 * The asset is not live, and likely being destroyed.
			 **/
			AssetNotLive: AugmentedError<ApiType>;
			/**
			 * Invalid metadata given.
			 **/
			BadMetadata: AugmentedError<ApiType>;
			/**
			 * Invalid witness data given.
			 **/
			BadWitness: AugmentedError<ApiType>;
			/**
			 * Account balance must be greater than or equal to the transfer amount.
			 **/
			BalanceLow: AugmentedError<ApiType>;
			/**
			 * Callback action resulted in error
			 **/
			CallbackFailed: AugmentedError<ApiType>;
			/**
			 * The origin account is frozen.
			 **/
			Frozen: AugmentedError<ApiType>;
			/**
			 * The asset status is not the expected status.
			 **/
			IncorrectStatus: AugmentedError<ApiType>;
			/**
			 * The asset ID is already taken.
			 **/
			InUse: AugmentedError<ApiType>;
			/**
			 * The asset is a live asset and is actively being used. Usually emit for operations such
			 * as `start_destroy` which require the asset to be in a destroying state.
			 **/
			LiveAsset: AugmentedError<ApiType>;
			/**
			 * Minimum balance should be non-zero.
			 **/
			MinBalanceZero: AugmentedError<ApiType>;
			/**
			 * The account to alter does not exist.
			 **/
			NoAccount: AugmentedError<ApiType>;
			/**
			 * The asset-account doesn't have an associated deposit.
			 **/
			NoDeposit: AugmentedError<ApiType>;
			/**
			 * The signing account has no permission to do the operation.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * The asset should be frozen before the given operation.
			 **/
			NotFrozen: AugmentedError<ApiType>;
			/**
			 * No approval exists that would allow the transfer.
			 **/
			Unapproved: AugmentedError<ApiType>;
			/**
			 * Unable to increment the consumer reference counters on the account. Either no provider
			 * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
			 * fewer then the maximum number of consumers has been reached.
			 **/
			UnavailableConsumer: AugmentedError<ApiType>;
			/**
			 * The given asset ID is unknown.
			 **/
			Unknown: AugmentedError<ApiType>;
			/**
			 * The operation would result in funds being burned.
			 **/
			WouldBurn: AugmentedError<ApiType>;
			/**
			 * The source account would not survive the transfer and it needs to stay alive.
			 **/
			WouldDie: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		assetsExt: {
			/**
			 * Hold balance is less then the required amount
			 **/
			BalanceLow: AugmentedError<ApiType>;
			/**
			 * Failed to create a new asset
			 **/
			CreateAssetFailed: AugmentedError<ApiType>;
			/**
			 * Decimals cannot be higher than 18
			 **/
			DecimalsTooHigh: AugmentedError<ApiType>;
			/**
			 * Maximum holds placed on this asset/account pair
			 **/
			MaxHolds: AugmentedError<ApiType>;
			/**
			 * The account to alter does not exist
			 **/
			NoAccount: AugmentedError<ApiType>;
			/**
			 * No more Ids are available, they've been exhausted
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * The signer does not have permission to perform this action
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * Operation would overflow
			 **/
			Overflow: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		babe: {
			/**
			 * A given equivocation report is valid but already previously reported.
			 **/
			DuplicateOffenceReport: AugmentedError<ApiType>;
			/**
			 * Submitted configuration is invalid.
			 **/
			InvalidConfiguration: AugmentedError<ApiType>;
			/**
			 * An equivocation proof provided as part of an equivocation report is invalid.
			 **/
			InvalidEquivocationProof: AugmentedError<ApiType>;
			/**
			 * A key ownership proof provided as part of an equivocation report is invalid.
			 **/
			InvalidKeyOwnershipProof: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		balances: {
			/**
			 * Beneficiary account must pre-exist.
			 **/
			DeadAccount: AugmentedError<ApiType>;
			/**
			 * Value too low to create account due to existential deposit.
			 **/
			ExistentialDeposit: AugmentedError<ApiType>;
			/**
			 * A vesting schedule already exists for this account.
			 **/
			ExistingVestingSchedule: AugmentedError<ApiType>;
			/**
			 * Transfer/payment would kill account.
			 **/
			Expendability: AugmentedError<ApiType>;
			/**
			 * Balance too low to send value.
			 **/
			InsufficientBalance: AugmentedError<ApiType>;
			/**
			 * Account liquidity restrictions prevent withdrawal.
			 **/
			LiquidityRestrictions: AugmentedError<ApiType>;
			/**
			 * Number of freezes exceed `MaxFreezes`.
			 **/
			TooManyFreezes: AugmentedError<ApiType>;
			/**
			 * Number of holds exceed `MaxHolds`.
			 **/
			TooManyHolds: AugmentedError<ApiType>;
			/**
			 * Number of named reserves exceed `MaxReserves`.
			 **/
			TooManyReserves: AugmentedError<ApiType>;
			/**
			 * Vesting balance too high to send value.
			 **/
			VestingBalance: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		crowdsale: {
			/**
			 * Access denied
			 **/
			AccessDenied: AugmentedError<ApiType>;
			/**
			 * The NFT collection must not contain any minted NFTs
			 **/
			CollectionIssuanceNotZero: AugmentedError<ApiType>;
			/**
			 * The NFT collection must not be mintable
			 **/
			CollectionPublicMintable: AugmentedError<ApiType>;
			/**
			 * Crowdsale is not enabled
			 **/
			CrowdsaleNotEnabled: AugmentedError<ApiType>;
			/**
			 * Crowdsale was not found
			 **/
			CrowdsaleNotFound: AugmentedError<ApiType>;
			/**
			 * Extrinsic not allowed
			 **/
			ExtrinsicForbidden: AugmentedError<ApiType>;
			/**
			 * The amount must not be zero
			 **/
			InvalidAmount: AugmentedError<ApiType>;
			/**
			 * Invalid asset id
			 **/
			InvalidAsset: AugmentedError<ApiType>;
			/**
			 * The start block is greater than the end block
			 **/
			InvalidBlockRange: AugmentedError<ApiType>;
			/**
			 * Invalid crowdsale status
			 **/
			InvalidCrowdsaleStatus: AugmentedError<ApiType>;
			/**
			 * The collection max issuance is too high
			 **/
			InvalidMaxIssuance: AugmentedError<ApiType>;
			/**
			 * Redemption quantity must not be zero
			 **/
			InvalidQuantity: AugmentedError<ApiType>;
			/**
			 * The soft cap price must be greater than zero
			 **/
			InvalidSoftCapPrice: AugmentedError<ApiType>;
			/**
			 * The NFT collection max issuance is not set
			 **/
			MaxIssuanceNotSet: AugmentedError<ApiType>;
			/**
			 * There are no remaining sale ids
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * Automatic trigger of sales distribution has failed
			 **/
			SaleDistributionFailed: AugmentedError<ApiType>;
			/**
			 * The sale duration is too long
			 **/
			SaleDurationTooLong: AugmentedError<ApiType>;
			/**
			 * There are too many sales queued for this block, try again on a different block
			 **/
			TooManySales: AugmentedError<ApiType>;
			/**
			 * The voucher claim could not be completed due to invalid voucher supply
			 **/
			VoucherClaimFailed: AugmentedError<ApiType>;
			/**
			 * Vouchers have already been claimed
			 **/
			VouchersAlreadyClaimed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		dex: {
			/**
			 * Supply amount is more than max_supply_amount
			 **/
			ExcessiveSupplyAmount: AugmentedError<ApiType>;
			/**
			 * The deadline has been missed
			 **/
			ExpiredDeadline: AugmentedError<ApiType>;
			IdenticalTokenAddress: AugmentedError<ApiType>;
			/**
			 * Insufficent amount
			 **/
			InsufficientAmount: AugmentedError<ApiType>;
			/**
			 * Insufficient asset_a liquidity amount
			 **/
			InsufficientAmountA: AugmentedError<ApiType>;
			/**
			 * Insufficient asset_b liquidity amount
			 **/
			InsufficientAmountB: AugmentedError<ApiType>;
			/**
			 * Insufficient input amount
			 **/
			InsufficientInputAmount: AugmentedError<ApiType>;
			/**
			 * Liquidity is not enough
			 **/
			InsufficientLiquidity: AugmentedError<ApiType>;
			/**
			 * Insufficient liquidity burnt
			 **/
			InsufficientLiquidityBurnt: AugmentedError<ApiType>;
			/**
			 * Insufficient output amount
			 **/
			InsufficientOutputAmount: AugmentedError<ApiType>;
			/**
			 * Target amount is less to min_target_amount
			 **/
			InsufficientTargetAmount: AugmentedError<ApiType>;
			/**
			 * Insufficient withdraw amount for token A
			 **/
			InsufficientWithdrawnAmountA: AugmentedError<ApiType>;
			/**
			 * Insufficient withdraw amount for token B
			 **/
			InsufficientWithdrawnAmountB: AugmentedError<ApiType>;
			/**
			 * Invalid Asset id
			 **/
			InvalidAssetId: AugmentedError<ApiType>;
			/**
			 * Invalid constant product K
			 **/
			InvalidConstantProduct: AugmentedError<ApiType>;
			/**
			 * Must provide non-zero amount of liquidity
			 **/
			InvalidInputAmounts: AugmentedError<ApiType>;
			/**
			 * The increment of liquidity is invalid
			 **/
			InvalidLiquidityIncrement: AugmentedError<ApiType>;
			/**
			 * Invalid trading path length
			 **/
			InvalidTradingPathLength: AugmentedError<ApiType>;
			/**
			 * The Liquidity Provider token does not exist
			 **/
			LiquidityProviderTokenNotCreated: AugmentedError<ApiType>;
			/**
			 * Trading pair must be in Enabled status
			 **/
			MustBeEnabled: AugmentedError<ApiType>;
			/**
			 * Trading pair must be in NotEnabled status
			 **/
			MustBeNotEnabled: AugmentedError<ApiType>;
			/**
			 * The supply amount is zero
			 **/
			ZeroSupplyAmount: AugmentedError<ApiType>;
			/**
			 * The target amount is zero
			 **/
			ZeroTargetAmount: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		doughnut: {
			/**
			 * Cannot revoke doughnut that does was issued by another account
			 **/
			CallerNotIssuer: AugmentedError<ApiType>;
			/**
			 * Doguhnut decode failed.
			 **/
			DoughnutDecodeFailed: AugmentedError<ApiType>;
			/**
			 * The doughnut has been revoked by the issuer
			 **/
			DoughnutRevoked: AugmentedError<ApiType>;
			/**
			 * Doughnut verify failed
			 **/
			DoughnutVerifyFailed: AugmentedError<ApiType>;
			/**
			 * Holder not whitelisted
			 **/
			HolderNotWhitelisted: AugmentedError<ApiType>;
			/**
			 * The holder address has been revoked by the issuer
			 **/
			HolderRevoked: AugmentedError<ApiType>;
			/**
			 * Topping decode failed.
			 **/
			ToppingDecodeFailed: AugmentedError<ApiType>;
			/**
			 * Topping permissions denied.
			 **/
			ToppingPermissionDenied: AugmentedError<ApiType>;
			/**
			 * Unable to find TRN domain.
			 **/
			TRNDomainNotfound: AugmentedError<ApiType>;
			/**
			 * Sender is not authorized to use the doughnut
			 **/
			UnauthorizedSender: AugmentedError<ApiType>;
			/**
			 * Unsupported doughnut version
			 **/
			UnsupportedDoughnutVersion: AugmentedError<ApiType>;
			/**
			 * Inner call is not whitelisted
			 **/
			UnsupportedInnerCall: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		echo: {
			/**
			 * The abi received does not match the encoding scheme
			 **/
			InvalidAbiEncoding: AugmentedError<ApiType>;
			/**
			 * Invalid ping_or_pong parameter, must be 0 or 1
			 **/
			InvalidParameter: AugmentedError<ApiType>;
			/**
			 * There are no remaining session ids
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * Some bound not met
			 **/
			BoundNotMet: AugmentedError<ApiType>;
			/**
			 * The call is not allowed at this point.
			 **/
			CallNotAllowed: AugmentedError<ApiType>;
			/**
			 * The fallback failed
			 **/
			FallbackFailed: AugmentedError<ApiType>;
			/**
			 * `Self::insert_submission` returned an invalid index.
			 **/
			InvalidSubmissionIndex: AugmentedError<ApiType>;
			/**
			 * Snapshot metadata should exist but didn't.
			 **/
			MissingSnapshotMetadata: AugmentedError<ApiType>;
			/**
			 * OCW submitted solution for wrong round
			 **/
			OcwCallWrongEra: AugmentedError<ApiType>;
			/**
			 * Submission was too early.
			 **/
			PreDispatchEarlySubmission: AugmentedError<ApiType>;
			/**
			 * Submission was too weak, score-wise.
			 **/
			PreDispatchWeakSubmission: AugmentedError<ApiType>;
			/**
			 * Wrong number of winners presented.
			 **/
			PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
			/**
			 * The origin failed to pay the deposit.
			 **/
			SignedCannotPayDeposit: AugmentedError<ApiType>;
			/**
			 * Witness data to dispatchable is invalid.
			 **/
			SignedInvalidWitness: AugmentedError<ApiType>;
			/**
			 * The queue was full, and the solution was not better than any of the existing ones.
			 **/
			SignedQueueFull: AugmentedError<ApiType>;
			/**
			 * The signed submission consumes too much weight
			 **/
			SignedTooMuchWeight: AugmentedError<ApiType>;
			/**
			 * Submitted solution has too many winners
			 **/
			TooManyWinners: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		erc20Peg: {
			/**
			 * Could not create the bridged asset
			 **/
			CreateAssetFailed: AugmentedError<ApiType>;
			/**
			 * Deposits are inactive
			 **/
			DepositsPaused: AugmentedError<ApiType>;
			/**
			 * Withdrawals over the set payment delay for EVM calls are disabled
			 **/
			EvmWithdrawalFailed: AugmentedError<ApiType>;
			/**
			 * The abi received does not match the encoding scheme
			 **/
			InvalidAbiEncoding: AugmentedError<ApiType>;
			/**
			 * Deposit has bad amount
			 **/
			InvalidAmount: AugmentedError<ApiType>;
			/**
			 * Could not convert pallet id to account
			 **/
			InvalidPalletId: AugmentedError<ApiType>;
			/**
			 * The peg source address is incorrect for the token being bridged
			 **/
			InvalidSourceAddress: AugmentedError<ApiType>;
			/**
			 * Supplied payment id not in storage
			 **/
			PaymentIdNotFound: AugmentedError<ApiType>;
			/**
			 * Withdrawals of this asset are not supported
			 **/
			UnsupportedAsset: AugmentedError<ApiType>;
			/**
			 * Withdrawals are inactive
			 **/
			WithdrawalsPaused: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		ethBridge: {
			/**
			 * The bridge is paused pending validator set changes (once every era / 24 hours)
			 * It will reactive after ~10 minutes
			 **/
			BridgePaused: AugmentedError<ApiType>;
			/**
			 * The relayer already has a bonded amount
			 **/
			CantBondRelayer: AugmentedError<ApiType>;
			/**
			 * The relayer is active and cant unbond the specified amount
			 **/
			CantUnbondRelayer: AugmentedError<ApiType>;
			/**
			 * There is already a challenge for this claim
			 **/
			ClaimAlreadyChallenged: AugmentedError<ApiType>;
			/**
			 * Event was already submitted and is pending
			 **/
			EventReplayPending: AugmentedError<ApiType>;
			/**
			 * Event was already submitted and is complete
			 **/
			EventReplayProcessed: AugmentedError<ApiType>;
			HttpFetch: AugmentedError<ApiType>;
			/**
			 * Some internal operation failed
			 **/
			Internal: AugmentedError<ApiType>;
			/**
			 * Claim was invalid e.g. not properly ABI encoded
			 **/
			InvalidClaim: AugmentedError<ApiType>;
			/**
			 * A notarization was invalid
			 **/
			InvalidNotarization: AugmentedError<ApiType>;
			/**
			 * No more challenges are allowed for this claim_id
			 **/
			MaxChallengesExceeded: AugmentedError<ApiType>;
			/**
			 * Someone tried to set a greater amount of validators than allowed
			 **/
			MaxNewSignersExceeded: AugmentedError<ApiType>;
			/**
			 * The supplied message length is above the specified bounds
			 **/
			MessageTooLarge: AugmentedError<ApiType>;
			/**
			 * The relayer hasn't paid the relayer bond so can't be set as the active relayer
			 **/
			NoBondPaid: AugmentedError<ApiType>;
			/**
			 * There is no event claim associated with the supplied claim_id
			 **/
			NoClaim: AugmentedError<ApiType>;
			NoLocalSigningAccount: AugmentedError<ApiType>;
			/**
			 * Caller does not have permission for that action
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * offchain worker not configured properly
			 **/
			OcwConfig: AugmentedError<ApiType>;
			OffchainUnsignedTxSignedPayload: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		ethereum: {
			BalanceLow: AugmentedError<ApiType>;
			GasLimitTooHigh: AugmentedError<ApiType>;
			GasLimitTooLow: AugmentedError<ApiType>;
			GasPriceTooLow: AugmentedError<ApiType>;
			InvalidNonce: AugmentedError<ApiType>;
			/**
			 * Signature is invalid.
			 **/
			InvalidSignature: AugmentedError<ApiType>;
			/**
			 * Pre-log is present, therefore transact is not allowed.
			 **/
			PreLogExists: AugmentedError<ApiType>;
			Undefined: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		evm: {
			/**
			 * Not enough balance to perform action
			 **/
			BalanceLow: AugmentedError<ApiType>;
			/**
			 * Calculating total fee overflowed
			 **/
			FeeOverflow: AugmentedError<ApiType>;
			/**
			 * Gas limit is too high.
			 **/
			GasLimitTooHigh: AugmentedError<ApiType>;
			/**
			 * Gas limit is too low.
			 **/
			GasLimitTooLow: AugmentedError<ApiType>;
			/**
			 * Gas price is too low.
			 **/
			GasPriceTooLow: AugmentedError<ApiType>;
			/**
			 * Nonce is invalid
			 **/
			InvalidNonce: AugmentedError<ApiType>;
			/**
			 * Calculating total payment overflowed
			 **/
			PaymentOverflow: AugmentedError<ApiType>;
			/**
			 * EVM reentrancy
			 **/
			Reentrancy: AugmentedError<ApiType>;
			/**
			 * EIP-3607,
			 **/
			TransactionMustComeFromEOA: AugmentedError<ApiType>;
			/**
			 * Undefined error.
			 **/
			Undefined: AugmentedError<ApiType>;
			/**
			 * Withdraw fee failed
			 **/
			WithdrawFailed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		feeProxy: {
			/**
			 * The selected fee token is equal to the native gas token
			 **/
			FeeTokenIsGasToken: AugmentedError<ApiType>;
			/**
			 * The inner call is a fee preference call
			 **/
			NestedFeePreferenceCall: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		futurepass: {
			/**
			 * Account is already futurepass holder
			 **/
			AccountAlreadyRegistered: AugmentedError<ApiType>;
			/**
			 * AccountParsingFailure
			 **/
			AccountParsingFailure: AugmentedError<ApiType>;
			/**
			 * Blacklisted extrinsic
			 **/
			BlacklistedExtrinsic: AugmentedError<ApiType>;
			/**
			 * Account already exists as a delegate
			 **/
			DelegateAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Account is not futurepass delegate
			 **/
			DelegateNotRegistered: AugmentedError<ApiType>;
			/**
			 * ExpiredDeadline
			 **/
			ExpiredDeadline: AugmentedError<ApiType>;
			/**
			 * Invalid proxy type
			 **/
			InvalidProxyType: AugmentedError<ApiType>;
			/**
			 * Invalid signature
			 **/
			InvalidSignature: AugmentedError<ApiType>;
			/**
			 * Account is not futurepass owner
			 **/
			NotFuturepassOwner: AugmentedError<ApiType>;
			/**
			 * Futurepass owner cannot remove themselves
			 **/
			OwnerCannotUnregister: AugmentedError<ApiType>;
			/**
			 * Account does not have permission to call this function
			 **/
			PermissionDenied: AugmentedError<ApiType>;
			/**
			 * RegisterDelegateSignerMismatch
			 **/
			RegisterDelegateSignerMismatch: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		grandpa: {
			/**
			 * Attempt to signal GRANDPA change with one already pending.
			 **/
			ChangePending: AugmentedError<ApiType>;
			/**
			 * A given equivocation report is valid but already previously reported.
			 **/
			DuplicateOffenceReport: AugmentedError<ApiType>;
			/**
			 * An equivocation proof provided as part of an equivocation report is invalid.
			 **/
			InvalidEquivocationProof: AugmentedError<ApiType>;
			/**
			 * A key ownership proof provided as part of an equivocation report is invalid.
			 **/
			InvalidKeyOwnershipProof: AugmentedError<ApiType>;
			/**
			 * Attempt to signal GRANDPA pause when the authority set isn't live
			 * (either paused or already pending pause).
			 **/
			PauseFailed: AugmentedError<ApiType>;
			/**
			 * Attempt to signal GRANDPA resume when the authority set isn't paused
			 * (either live or already pending resume).
			 **/
			ResumeFailed: AugmentedError<ApiType>;
			/**
			 * Cannot signal forced change so soon after last.
			 **/
			TooSoon: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		imOnline: {
			/**
			 * Duplicated heartbeat.
			 **/
			DuplicatedHeartbeat: AugmentedError<ApiType>;
			/**
			 * Non existent public key.
			 **/
			InvalidKey: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		liquidityPools: {
			/**
			 * Invalid block range
			 **/
			InvalidBlockRange: AugmentedError<ApiType>;
			/**
			 * Exceeds max pool id
			 **/
			NoAvailablePoolId: AugmentedError<ApiType>;
			/**
			 * Cannot exit pool, no tokens staked
			 **/
			NoTokensStaked: AugmentedError<ApiType>;
			/**
			 * Not pool creator
			 **/
			NotPoolCreator: AugmentedError<ApiType>;
			/**
			 * Reward pool is not ready for reward
			 **/
			NotReadyForClaimingReward: AugmentedError<ApiType>;
			/**
			 * Offchain error not a validator
			 **/
			OffchainErrNotValidator: AugmentedError<ApiType>;
			/**
			 * Offchain error on submitting transaction
			 **/
			OffchainErrSubmitTransaction: AugmentedError<ApiType>;
			/**
			 * Offchain error too early
			 **/
			OffchainErrTooEarly: AugmentedError<ApiType>;
			/**
			 * Offchain error wrong transaction source
			 **/
			OffchainErrWrongTransactionSource: AugmentedError<ApiType>;
			/**
			 * Pivot string too long
			 **/
			PivotStringTooLong: AugmentedError<ApiType>;
			/**
			 * Pool already exists
			 **/
			PoolAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Pool does not exist
			 **/
			PoolDoesNotExist: AugmentedError<ApiType>;
			/**
			 * Reward pool is not open
			 **/
			PoolNotOpen: AugmentedError<ApiType>;
			/**
			 * Predecessor pool does not exist
			 **/
			PredecessorPoolDoesNotExist: AugmentedError<ApiType>;
			/**
			 * Rollover pools should be the same asset
			 **/
			RolloverPoolsShouldBeTheSameAsset: AugmentedError<ApiType>;
			/**
			 * Staking limit exceeded
			 **/
			StakingLimitExceeded: AugmentedError<ApiType>;
			/**
			 * Successor pool does not exist
			 **/
			SuccessorPoolDoesNotExist: AugmentedError<ApiType>;
			/**
			 * Successor pool size should be greater than predecessor
			 **/
			SuccessorPoolSizeShouldBeGreaterThanPredecessor: AugmentedError<ApiType>;
			/**
			 * Successor pool size should be locked after predecessor
			 **/
			SuccessorPoolSizeShouldBeLockedAfterPredecessor: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		maintenanceMode: {
			/**
			 * This account is not authorized to execute this transaction
			 **/
			AccountBlocked: AugmentedError<ApiType>;
			/**
			 * This pallet or call cannot be blocked
			 **/
			CannotBlock: AugmentedError<ApiType>;
			/**
			 * The call name is not valid utf-8 characters
			 **/
			InvalidCallName: AugmentedError<ApiType>;
			/**
			 * The pallet name is not valid utf-8 characters
			 **/
			InvalidPalletName: AugmentedError<ApiType>;
			/**
			 * This call is disabled as the chain is in maintenance mode
			 **/
			MaintenanceModeActive: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		marketplace: {
			/**
			 * Auction bid was lower than reserve or current highest bid
			 **/
			BidTooLow: AugmentedError<ApiType>;
			/**
			 * The listing contains duplicate tokens
			 **/
			DuplicateTokens: AugmentedError<ApiType>;
			/**
			 * The listing duration is too short
			 **/
			DurationTooShort: AugmentedError<ApiType>;
			/**
			 * No tokens were specified in the listing
			 **/
			EmptyTokens: AugmentedError<ApiType>;
			/**
			 * The metadata path is invalid (non-utf8 or empty)
			 **/
			InvalidMetadataPath: AugmentedError<ApiType>;
			/**
			 * No offer exists for the given OfferId
			 **/
			InvalidOffer: AugmentedError<ApiType>;
			/**
			 * The caller owns the token and can't make an offer
			 **/
			IsTokenOwner: AugmentedError<ApiType>;
			/**
			 * The account_id hasn't been registered as a marketplace
			 **/
			MarketplaceNotRegistered: AugmentedError<ApiType>;
			/**
			 * The maximum number of offers on this token has been reached
			 **/
			MaxOffersReached: AugmentedError<ApiType>;
			/**
			 * Selling tokens from different collection is not allowed
			 **/
			MixedBundleSale: AugmentedError<ApiType>;
			/**
			 * No more Ids are available, they've been exhausted
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * The caller is not the specified buyer
			 **/
			NotBuyer: AugmentedError<ApiType>;
			/**
			 * Origin is not the collection owner and is not permitted to perform the operation
			 **/
			NotCollectionOwner: AugmentedError<ApiType>;
			/**
			 * The token is not listed for auction sale
			 **/
			NotForAuction: AugmentedError<ApiType>;
			/**
			 * The token is not listed for fixed price sale
			 **/
			NotForFixedPriceSale: AugmentedError<ApiType>;
			/**
			 * The token does not exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * The caller is not the seller of the NFT
			 **/
			NotSeller: AugmentedError<ApiType>;
			/**
			 * Origin does not own the NFT
			 **/
			NotTokenOwner: AugmentedError<ApiType>;
			/**
			 * Total royalties would exceed 100% of sale or an empty vec is supplied
			 **/
			RoyaltiesInvalid: AugmentedError<ApiType>;
			/**
			 * Cannot operate on a listed NFT
			 **/
			TokenLocked: AugmentedError<ApiType>;
			/**
			 * The token is not listed for sale
			 **/
			TokenNotListed: AugmentedError<ApiType>;
			/**
			 * Cannot make an offer on a token up for auction
			 **/
			TokenOnAuction: AugmentedError<ApiType>;
			/**
			 * The balance of tokens within the listing must be greater than zero
			 **/
			ZeroBalance: AugmentedError<ApiType>;
			/**
			 * Offer amount needs to be greater than 0
			 **/
			ZeroOffer: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		migration: {
			/**
			 * The block delay must be set to None or a value greater than 1
			 **/
			InvalidBlockDelay: AugmentedError<ApiType>;
			/**
			 * The block limit must be greater than 0
			 **/
			InvalidBlockLimit: AugmentedError<ApiType>;
			/**
			 * The extrinsic cannot be executed while an active multi-block migration is in progress
			 **/
			MigrationInProgress: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		multisig: {
			/**
			 * Call is already approved by this signatory.
			 **/
			AlreadyApproved: AugmentedError<ApiType>;
			/**
			 * The data to be stored is already stored.
			 **/
			AlreadyStored: AugmentedError<ApiType>;
			/**
			 * The maximum weight information provided was too low.
			 **/
			MaxWeightTooLow: AugmentedError<ApiType>;
			/**
			 * Threshold must be 2 or greater.
			 **/
			MinimumThreshold: AugmentedError<ApiType>;
			/**
			 * Call doesn't need any (more) approvals.
			 **/
			NoApprovalsNeeded: AugmentedError<ApiType>;
			/**
			 * Multisig operation not found when attempting to cancel.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * No timepoint was given, yet the multisig operation is already underway.
			 **/
			NoTimepoint: AugmentedError<ApiType>;
			/**
			 * Only the account that originally created the multisig is able to cancel it.
			 **/
			NotOwner: AugmentedError<ApiType>;
			/**
			 * The sender was contained in the other signatories; it shouldn't be.
			 **/
			SenderInSignatories: AugmentedError<ApiType>;
			/**
			 * The signatories were provided out of order; they should be ordered.
			 **/
			SignatoriesOutOfOrder: AugmentedError<ApiType>;
			/**
			 * There are too few signatories in the list.
			 **/
			TooFewSignatories: AugmentedError<ApiType>;
			/**
			 * There are too many signatories in the list.
			 **/
			TooManySignatories: AugmentedError<ApiType>;
			/**
			 * A timepoint was given, yet no multisig operation is underway.
			 **/
			UnexpectedTimepoint: AugmentedError<ApiType>;
			/**
			 * A different timepoint was given to the multisig operation that is underway.
			 **/
			WrongTimepoint: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		nfi: {
			/**
			 * The mint fee must be a valid integer above 0
			 **/
			InvalidMintFee: AugmentedError<ApiType>;
			/**
			 * The token format for TRN tokens is invalid
			 **/
			InvalidTokenFormat: AugmentedError<ApiType>;
			/**
			 * No the owner of the collection
			 **/
			NotCollectionOwner: AugmentedError<ApiType>;
			/**
			 * NFI storage is not enabled for this collection
			 **/
			NotEnabled: AugmentedError<ApiType>;
			/**
			 * The token does not exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * The caller is not the relayer and does not have permission to perform this action
			 **/
			NotRelayer: AugmentedError<ApiType>;
			/**
			 * The caller is not the owner of the token
			 **/
			NotTokenOwner: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		nft: {
			/**
			 * Attemped to mint a token that was bridged from a different chain
			 **/
			AttemptedMintOnBridgedToken: AugmentedError<ApiType>;
			/**
			 * Token(s) blocked from minting during the bridging process
			 **/
			BlockedMint: AugmentedError<ApiType>;
			/**
			 * Burning has been disabled for tokens within this collection
			 **/
			BurnUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * Cannot claim already claimed collections
			 **/
			CannotClaimNonClaimableCollections: AugmentedError<ApiType>;
			/**
			 * Only Root originated NFTs that are not XLS-20 compatible can have their metadata updated
			 **/
			CannotUpdateMetadata: AugmentedError<ApiType>;
			/**
			 * Attempted to update the token utility flags for a soulbound token
			 **/
			CannotUpdateTokenUtility: AugmentedError<ApiType>;
			/**
			 * Total issuance of collection must be zero to add xls20 compatibility
			 **/
			CollectionIssuanceNotZero: AugmentedError<ApiType>;
			/**
			 * Given collection name is invalid (invalid utf-8, too long, empty)
			 **/
			CollectionNameInvalid: AugmentedError<ApiType>;
			/**
			 * Initial issuance on XLS-20 compatible collections must be zero
			 **/
			InitialIssuanceNotZero: AugmentedError<ApiType>;
			/**
			 * The additional data cannot be an empty vec
			 **/
			InvalidAdditionalData: AugmentedError<ApiType>;
			/**
			 * Attempted to burn a token from an account that does not adhere to
			 * the token's burn authority
			 **/
			InvalidBurnAuthority: AugmentedError<ApiType>;
			/**
			 * Max issuance needs to be greater than 0 and initial_issuance
			 * Cannot exceed MaxTokensPerCollection
			 **/
			InvalidMaxIssuance: AugmentedError<ApiType>;
			/**
			 * The metadata path is invalid (non-utf8 or empty)
			 **/
			InvalidMetadataPath: AugmentedError<ApiType>;
			/**
			 * The caller can not be the new owner
			 **/
			InvalidNewOwner: AugmentedError<ApiType>;
			/**
			 * Attempted to accept an issuance that does not exist, or is not
			 * set for the caller
			 **/
			InvalidPendingIssuance: AugmentedError<ApiType>;
			/**
			 * The max issuance has already been set and can't be changed
			 **/
			MaxIssuanceAlreadySet: AugmentedError<ApiType>;
			/**
			 * The collection max issuance has been reached and no more tokens can be minted
			 **/
			MaxIssuanceReached: AugmentedError<ApiType>;
			/**
			 * The quantity exceeds the max tokens per mint limit
			 **/
			MintLimitExceeded: AugmentedError<ApiType>;
			/**
			 * Minting has been disabled for tokens within this collection
			 **/
			MintUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * No more Ids are available, they've been exhausted
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * The collection does not exist
			 **/
			NoCollectionFound: AugmentedError<ApiType>;
			/**
			 * Origin is not the collection owner and is not permitted to perform the operation
			 **/
			NotCollectionOwner: AugmentedError<ApiType>;
			/**
			 * The token does not exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * Origin does not own the NFT
			 **/
			NotTokenOwner: AugmentedError<ApiType>;
			/**
			 * The number of pending issuances has exceeded the max for a collection
			 **/
			PendingIssuanceLimitExceeded: AugmentedError<ApiType>;
			/**
			 * This collection has not allowed public minting
			 **/
			PublicMintDisabled: AugmentedError<ApiType>;
			/**
			 * Total royalties would exceed 100% of sale or an empty vec is supplied
			 **/
			RoyaltiesInvalid: AugmentedError<ApiType>;
			/**
			 * The SerialNumbers attempting to be transferred are not unique
			 **/
			SerialNumbersNotUnique: AugmentedError<ApiType>;
			/**
			 * The number of tokens have exceeded the max tokens allowed
			 **/
			TokenLimitExceeded: AugmentedError<ApiType>;
			/**
			 * Cannot operate on a listed NFT
			 **/
			TokenLocked: AugmentedError<ApiType>;
			/**
			 * Transfer has been disabled for tokens within this collection
			 **/
			TransferUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		nftPeg: {
			/**
			 * Send more addresses than are allowed
			 **/
			ExceedsMaxAddresses: AugmentedError<ApiType>;
			/**
			 * Sent more tokens than are allowed
			 **/
			ExceedsMaxTokens: AugmentedError<ApiType>;
			/**
			 * The length of the given vec exceeds the maximal allowed length limit
			 **/
			ExceedsMaxVecLength: AugmentedError<ApiType>;
			/**
			 * The abi data passed in could not be decoded
			 **/
			InvalidAbiEncoding: AugmentedError<ApiType>;
			/**
			 * The prefix uint in the abi encoded data was invalid
			 **/
			InvalidAbiPrefix: AugmentedError<ApiType>;
			/**
			 * No blocked tokens for the given id
			 **/
			NoBlockedTokensFound: AugmentedError<ApiType>;
			/**
			 * No collection info exists
			 **/
			NoCollectionFound: AugmentedError<ApiType>;
			/**
			 * No mapped token was stored for bridging the token back to the bridged chain
			 **/
			NoMappedTokenExists: AugmentedError<ApiType>;
			/**
			 * Tried to bridge a token that originates from Root, which is not yet supported
			 **/
			NoPermissionToBridge: AugmentedError<ApiType>;
			/**
			 * Blocked tokens can only be reclaimed by the destination address
			 **/
			NotBlockedTokenDestination: AugmentedError<ApiType>;
			/**
			 * The state sync decoding feature is not implemented
			 **/
			StateSyncDisabled: AugmentedError<ApiType>;
			/**
			 * Multiple tokens were passed from contract, but amounts were unqeual per each array
			 **/
			TokenListLengthMismatch: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		partnerAttribution: {
			/**
			 * Account already attributed to another partner
			 **/
			AccountAlreadyAttributed: AugmentedError<ApiType>;
			/**
			 * Caller is not a futurepass account
			 **/
			CallerNotFuturepass: AugmentedError<ApiType>;
			/**
			 * No available ids
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * Partner already exists
			 **/
			PartnerAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Partner not found
			 **/
			PartnerNotFound: AugmentedError<ApiType>;
			/**
			 * Unauthorized
			 **/
			Unauthorized: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		preimage: {
			/**
			 * Preimage has already been noted on-chain.
			 **/
			AlreadyNoted: AugmentedError<ApiType>;
			/**
			 * The user is not authorized to perform this action.
			 **/
			NotAuthorized: AugmentedError<ApiType>;
			/**
			 * The preimage cannot be removed since it has not yet been noted.
			 **/
			NotNoted: AugmentedError<ApiType>;
			/**
			 * The preimage request cannot be removed since no outstanding requests exist.
			 **/
			NotRequested: AugmentedError<ApiType>;
			/**
			 * A preimage may not be removed when there are outstanding requests.
			 **/
			Requested: AugmentedError<ApiType>;
			/**
			 * Preimage is too large to store on-chain.
			 **/
			TooBig: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		proxy: {
			/**
			 * Account is already a proxy.
			 **/
			Duplicate: AugmentedError<ApiType>;
			/**
			 * Call may not be made by proxy because it may escalate its privileges.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * Cannot add self as proxy.
			 **/
			NoSelfProxy: AugmentedError<ApiType>;
			/**
			 * Proxy registration not found.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * Sender is not a proxy of the account to be proxied.
			 **/
			NotProxy: AugmentedError<ApiType>;
			/**
			 * There are too many proxies registered or too many announcements pending.
			 **/
			TooMany: AugmentedError<ApiType>;
			/**
			 * Announcement, if made at all, was made too recently.
			 **/
			Unannounced: AugmentedError<ApiType>;
			/**
			 * A call which is incompatible with the proxy type's filter was attempted.
			 **/
			Unproxyable: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		recovery: {
			/**
			 * This account is already set up for recovery
			 **/
			AlreadyProxy: AugmentedError<ApiType>;
			/**
			 * This account is already set up for recovery
			 **/
			AlreadyRecoverable: AugmentedError<ApiType>;
			/**
			 * A recovery process has already started for this account
			 **/
			AlreadyStarted: AugmentedError<ApiType>;
			/**
			 * This user has already vouched for this recovery
			 **/
			AlreadyVouched: AugmentedError<ApiType>;
			/**
			 * Some internal state is broken.
			 **/
			BadState: AugmentedError<ApiType>;
			/**
			 * The friend must wait until the delay period to vouch for this recovery
			 **/
			DelayPeriod: AugmentedError<ApiType>;
			/**
			 * Friends list must be less than max friends
			 **/
			MaxFriends: AugmentedError<ApiType>;
			/**
			 * User is not allowed to make a call on behalf of this account
			 **/
			NotAllowed: AugmentedError<ApiType>;
			/**
			 * Friends list must be greater than zero and threshold
			 **/
			NotEnoughFriends: AugmentedError<ApiType>;
			/**
			 * This account is not a friend who can vouch
			 **/
			NotFriend: AugmentedError<ApiType>;
			/**
			 * This account is not set up for recovery
			 **/
			NotRecoverable: AugmentedError<ApiType>;
			/**
			 * Friends list must be sorted and free of duplicates
			 **/
			NotSorted: AugmentedError<ApiType>;
			/**
			 * A recovery process has not started for this rescuer
			 **/
			NotStarted: AugmentedError<ApiType>;
			/**
			 * There are still active recovery attempts that need to be closed
			 **/
			StillActive: AugmentedError<ApiType>;
			/**
			 * The threshold for recovering this account has not been met
			 **/
			Threshold: AugmentedError<ApiType>;
			/**
			 * Threshold must be greater than zero
			 **/
			ZeroThreshold: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		scheduler: {
			/**
			 * Failed to schedule a call
			 **/
			FailedToSchedule: AugmentedError<ApiType>;
			/**
			 * Attempt to use a non-named function on a named task.
			 **/
			Named: AugmentedError<ApiType>;
			/**
			 * Cannot find the scheduled call.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * Reschedule failed because it does not change scheduled time.
			 **/
			RescheduleNoChange: AugmentedError<ApiType>;
			/**
			 * Given target block number is in the past.
			 **/
			TargetBlockNumberInPast: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		session: {
			/**
			 * Registered duplicate key.
			 **/
			DuplicatedKey: AugmentedError<ApiType>;
			/**
			 * Invalid ownership proof.
			 **/
			InvalidProof: AugmentedError<ApiType>;
			/**
			 * Key setting account is not live, so it's impossible to associate keys.
			 **/
			NoAccount: AugmentedError<ApiType>;
			/**
			 * No associated validator ID for account.
			 **/
			NoAssociatedValidatorId: AugmentedError<ApiType>;
			/**
			 * No keys are associated with this account.
			 **/
			NoKeys: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		sft: {
			/**
			 * The burn authority for has already been and can't be changed
			 **/
			BurnAuthorityAlreadySet: AugmentedError<ApiType>;
			/**
			 * Burning has been disabled for tokens within this collection
			 **/
			BurnUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * Attempted to update the token utility flags for a soulbound token
			 **/
			CannotUpdateTokenUtility: AugmentedError<ApiType>;
			/**
			 * The user does not own enough of this token to perform the operation
			 **/
			InsufficientBalance: AugmentedError<ApiType>;
			/**
			 * The additional data cannot be an empty vec
			 **/
			InvalidAdditionalData: AugmentedError<ApiType>;
			/**
			 * Attempted to burn a token from an account that does not adhere to
			 * the token's burn authority
			 **/
			InvalidBurnAuthority: AugmentedError<ApiType>;
			/**
			 * Max issuance needs to be greater than 0 and initial_issuance
			 * Cannot exceed MaxTokensPerCollection
			 **/
			InvalidMaxIssuance: AugmentedError<ApiType>;
			/**
			 * Caller can not be the new owner
			 **/
			InvalidNewOwner: AugmentedError<ApiType>;
			/**
			 * Attempted to accept an issuance that does not exist, or is not
			 * set for the caller
			 **/
			InvalidPendingIssuance: AugmentedError<ApiType>;
			/**
			 * The specified quantity must be greater than 0
			 **/
			InvalidQuantity: AugmentedError<ApiType>;
			/**
			 * The max issuance has already been set and can't be changed
			 **/
			MaxIssuanceAlreadySet: AugmentedError<ApiType>;
			/**
			 * The collection max issuance has been reached and no more tokens can be minted
			 **/
			MaxIssuanceReached: AugmentedError<ApiType>;
			/**
			 * The max amount of owners per token has been reached
			 **/
			MaxOwnersReached: AugmentedError<ApiType>;
			/**
			 * Minting has been disabled for tokens within this collection
			 **/
			MintUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * Given collection or token name is invalid (invalid utf-8, empty)
			 **/
			NameInvalid: AugmentedError<ApiType>;
			/**
			 * Attempted to issue a soulbound token where the burn authority
			 * has not been set
			 **/
			NoBurnAuthority: AugmentedError<ApiType>;
			/**
			 * The collection does not exist
			 **/
			NoCollectionFound: AugmentedError<ApiType>;
			/**
			 * Origin is not the collection owner and is not permitted to perform the operation
			 **/
			NotCollectionOwner: AugmentedError<ApiType>;
			/**
			 * The token does not exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * The operation would cause a numeric overflow
			 **/
			Overflow: AugmentedError<ApiType>;
			/**
			 * The number of pending issuances has exceeded the max for a collection
			 **/
			PendingIssuanceLimitExceeded: AugmentedError<ApiType>;
			/**
			 * This collection has not allowed public minting
			 **/
			PublicMintDisabled: AugmentedError<ApiType>;
			/**
			 * Total royalties would exceed 100% of sale or an empty vec is supplied
			 **/
			RoyaltiesInvalid: AugmentedError<ApiType>;
			/**
			 * The SerialNumbers attempting to be transferred are not unique
			 **/
			SerialNumbersNotUnique: AugmentedError<ApiType>;
			/**
			 * Attempted to set burn authority for a token that has already
			 * been issued
			 **/
			TokenAlreadyIssued: AugmentedError<ApiType>;
			/**
			 * The number of tokens have exceeded the max tokens allowed
			 **/
			TokenLimitExceeded: AugmentedError<ApiType>;
			/**
			 * Transfer has been disabled for tokens within this collection
			 **/
			TransferUtilityBlocked: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		staking: {
			/**
			 * Stash is already bonded.
			 **/
			AlreadyBonded: AugmentedError<ApiType>;
			/**
			 * Rewards for this era have already been claimed for this validator.
			 **/
			AlreadyClaimed: AugmentedError<ApiType>;
			/**
			 * Controller is already paired.
			 **/
			AlreadyPaired: AugmentedError<ApiType>;
			/**
			 * Internal state has become somehow corrupted and the operation cannot continue.
			 **/
			BadState: AugmentedError<ApiType>;
			/**
			 * A nomination target was supplied that was blocked or otherwise not a validator.
			 **/
			BadTarget: AugmentedError<ApiType>;
			/**
			 * Some bound is not met.
			 **/
			BoundNotMet: AugmentedError<ApiType>;
			/**
			 * The user has enough bond and thus cannot be chilled forcefully by an external person.
			 **/
			CannotChillOther: AugmentedError<ApiType>;
			/**
			 * Commission is too low. Must be at least `MinCommission`.
			 **/
			CommissionTooLow: AugmentedError<ApiType>;
			/**
			 * Duplicate index.
			 **/
			DuplicateIndex: AugmentedError<ApiType>;
			/**
			 * Targets cannot be empty.
			 **/
			EmptyTargets: AugmentedError<ApiType>;
			/**
			 * Attempting to target a stash that still has funds.
			 **/
			FundedTarget: AugmentedError<ApiType>;
			/**
			 * Incorrect previous history depth input provided.
			 **/
			IncorrectHistoryDepth: AugmentedError<ApiType>;
			/**
			 * Incorrect number of slashing spans provided.
			 **/
			IncorrectSlashingSpans: AugmentedError<ApiType>;
			/**
			 * Cannot have a validator or nominator role, with value less than the minimum defined by
			 * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
			 * intention, `chill` first to remove one's role as validator/nominator.
			 **/
			InsufficientBond: AugmentedError<ApiType>;
			/**
			 * Invalid era to reward.
			 **/
			InvalidEraToReward: AugmentedError<ApiType>;
			/**
			 * Invalid number of nominations.
			 **/
			InvalidNumberOfNominations: AugmentedError<ApiType>;
			/**
			 * Slash record index out of bounds.
			 **/
			InvalidSlashIndex: AugmentedError<ApiType>;
			/**
			 * Can not schedule more unlock chunks.
			 **/
			NoMoreChunks: AugmentedError<ApiType>;
			/**
			 * Not a controller account.
			 **/
			NotController: AugmentedError<ApiType>;
			/**
			 * Items are not sorted and unique.
			 **/
			NotSortedAndUnique: AugmentedError<ApiType>;
			/**
			 * Not a stash account.
			 **/
			NotStash: AugmentedError<ApiType>;
			/**
			 * Can not rebond without unlocking chunks.
			 **/
			NoUnlockChunk: AugmentedError<ApiType>;
			/**
			 * There are too many nominators in the system. Governance needs to adjust the staking
			 * settings to keep things safe for the runtime.
			 **/
			TooManyNominators: AugmentedError<ApiType>;
			/**
			 * Too many nomination targets supplied.
			 **/
			TooManyTargets: AugmentedError<ApiType>;
			/**
			 * There are too many validator candidates in the system. Governance needs to adjust the
			 * staking settings to keep things safe for the runtime.
			 **/
			TooManyValidators: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		sudo: {
			/**
			 * Sender must be the Sudo account
			 **/
			RequireSudo: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		syloActionPermissions: {
			/**
			 * The grantee in the token does not match the caller.
			 **/
			GranteeDoesNotMatch: AugmentedError<ApiType>;
			/**
			 * The spending balance is insufficient to cover the transaction fee.
			 **/
			InsufficientSpendingBalance: AugmentedError<ApiType>;
			/**
			 * The provided expiry block is in the past.
			 **/
			InvalidExpiry: AugmentedError<ApiType>;
			/**
			 * The futurepass in the token is not owned by the grantor.
			 **/
			InvalidFuturepassInToken: AugmentedError<ApiType>;
			/**
			 * The specified spending balance is not allowed.
			 **/
			InvalidSpendingBalance: AugmentedError<ApiType>;
			/**
			 * The provided token signature is invalid or cannot be verified.
			 **/
			InvalidTokenSignature: AugmentedError<ApiType>;
			/**
			 * The nonce provided in the token has already been used.
			 **/
			NonceAlreadyUsed: AugmentedError<ApiType>;
			/**
			 * The call is not authorized under the granted permission.
			 **/
			NotAuthorizedCall: AugmentedError<ApiType>;
			/**
			 * A permission already exists and has not yet expired.
			 **/
			PermissionAlreadyExists: AugmentedError<ApiType>;
			/**
			 * The permission has expired and is no longer valid.
			 **/
			PermissionExpired: AugmentedError<ApiType>;
			/**
			 * The permission does not exist or has not been granted.
			 **/
			PermissionNotGranted: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		syloDataPermissions: {
			/**
			 * Distribute permissions can only be granted by the data author
			 **/
			CannotGrantDistributePermission: AugmentedError<ApiType>;
			/**
			 * Irrevocable permissions can only be granted by the data author
			 **/
			CannotGrantIrrevocablePermission: AugmentedError<ApiType>;
			/**
			 * Attempted to grant permissions for a data record that does not exist
			 **/
			DataRecordDoesNotExist: AugmentedError<ApiType>;
			/**
			 * Exceeded the maximum number of permissions that can expired on the same
			 * block
			 **/
			ExceededMaxExpiringPermissions: AugmentedError<ApiType>;
			/**
			 * Exceeded the maximum number of record permissions granted to a given
			 * account
			 **/
			ExceededMaxPermissions: AugmentedError<ApiType>;
			/**
			 * Expiry value for permission record is invalid
			 **/
			InvalidExpiry: AugmentedError<ApiType>;
			/**
			 * String values in an RPC call, in either the inputs or outputs are
			 * invalid
			 **/
			InvalidString: AugmentedError<ApiType>;
			/**
			 * A permission that is set to irrevocable cannot also set to have an
			 * expiry
			 **/
			IrrevocableCannotBeExpirable: AugmentedError<ApiType>;
			/**
			 * Attempted to grant a permission as a delegate without the required
			 * DISTRIBUTE permission
			 **/
			MissingDistributePermission: AugmentedError<ApiType>;
			/**
			 * An accompanying verification record for the offchain permission does
			 * not exist
			 **/
			MissingValidationRecord: AugmentedError<ApiType>;
			/**
			 * Only the account that granted a permission or the data author
			 * themselves can revoke a permission
			 **/
			NotPermissionGrantor: AugmentedError<ApiType>;
			/**
			 * An irrevocable permission can not be revoked
			 **/
			PermissionIrrevocable: AugmentedError<ApiType>;
			/**
			 * Cannot revoke a permission that does not exist
			 **/
			PermissionNotFound: AugmentedError<ApiType>;
			/**
			 * An existing permission reference has already been granted
			 **/
			PermissionReferenceAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		syloDataVerification: {
			/**
			 * The account does not have the permission to update the validation
			 * record
			 **/
			MissingModifyPermission: AugmentedError<ApiType>;
			/**
			 * Account is not controller of resolver
			 **/
			NotController: AugmentedError<ApiType>;
			/**
			 * The validation record to be updated has not been created
			 **/
			NoValidationRecord: AugmentedError<ApiType>;
			/**
			 * A validation record with the given data id has already been created
			 **/
			RecordAlreadyCreated: AugmentedError<ApiType>;
			/**
			 * The Resolver identifier is already in use
			 **/
			ResolverAlreadyRegistered: AugmentedError<ApiType>;
			/**
			 * The Resolver has not been registered
			 **/
			ResolverNotRegistered: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		system: {
			/**
			 * The origin filter prevent the call to be dispatched.
			 **/
			CallFiltered: AugmentedError<ApiType>;
			/**
			 * Failed to extract the runtime version from the new runtime.
			 *
			 * Either calling `Core_version` or decoding `RuntimeVersion` failed.
			 **/
			FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
			/**
			 * The name of specification does not match between the current runtime
			 * and the new runtime.
			 **/
			InvalidSpecName: AugmentedError<ApiType>;
			/**
			 * Suicide called when the account has non-default composite data.
			 **/
			NonDefaultComposite: AugmentedError<ApiType>;
			/**
			 * There is a non-zero reference count preventing the account from being purged.
			 **/
			NonZeroRefCount: AugmentedError<ApiType>;
			/**
			 * The specification version is not allowed to decrease between the current runtime
			 * and the new runtime.
			 **/
			SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		tokenApprovals: {
			/**
			 * Address is already approved
			 **/
			AlreadyApproved: AugmentedError<ApiType>;
			/**
			 * There is no approval set for this token
			 **/
			ApprovalDoesntExist: AugmentedError<ApiType>;
			/**
			 * The caller is not approved for the requested amount
			 **/
			ApprovedAmountTooLow: AugmentedError<ApiType>;
			/**
			 * The caller isn't approved for any amount
			 **/
			CallerNotApproved: AugmentedError<ApiType>;
			/**
			 * The caller account can't be the same as the operator account
			 **/
			CallerNotOperator: AugmentedError<ApiType>;
			/**
			 * The token doesn't exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * The account is not the owner of the token
			 **/
			NotTokenOwner: AugmentedError<ApiType>;
			/**
			 * The account is not the owner of the token or an approved account
			 **/
			NotTokenOwnerOrApproved: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		utility: {
			/**
			 * Too many calls batched.
			 **/
			TooManyCalls: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		vortexDistribution: {
			/**
			 * Assets should not include vortex asset
			 **/
			AssetsShouldNotIncludeVtxAsset: AugmentedError<ApiType>;
			/**
			 * Vortex distribution is not ready to be redeemed
			 **/
			CannotRedeem: AugmentedError<ApiType>;
			/**
			 * Vortex distribution is not ready to be triggered
			 **/
			CannotTrigger: AugmentedError<ApiType>;
			/**
			 * out of max reward vecotor bound
			 **/
			ExceededMaxRewards: AugmentedError<ApiType>;
			/**
			 * Invalid amount
			 **/
			InvalidAmount: AugmentedError<ApiType>;
			/**
			 * Manual reward input is disabled
			 **/
			ManualRewardInputDisabled: AugmentedError<ApiType>;
			/**
			 * Not a validator
			 **/
			NotAValidator: AugmentedError<ApiType>;
			/**
			 * Vortex distribution not triggered
			 **/
			NotTriggered: AugmentedError<ApiType>;
			/**
			 * No Vtx asset minted
			 **/
			NoVtxAssetMinted: AugmentedError<ApiType>;
			/**
			 * Pivot string too long
			 **/
			PivotStringTooLong: AugmentedError<ApiType>;
			/**
			 * Require to be previous admin
			 **/
			RequireAdmin: AugmentedError<ApiType>;
			/**
			 * Reward points not registered
			 **/
			RewardPointsNotRegistered: AugmentedError<ApiType>;
			/**
			 * root price is zero
			 **/
			RootPriceIsZero: AugmentedError<ApiType>;
			/**
			 * Vortex period not set
			 **/
			VortexPeriodNotSet: AugmentedError<ApiType>;
			/**
			 * vortex price is zero
			 **/
			VortexPriceIsZero: AugmentedError<ApiType>;
			/**
			 * Vortex distribution already enabled
			 **/
			VtxDistAlreadyEnabled: AugmentedError<ApiType>;
			/**
			 * Vortex distribution disabled
			 **/
			VtxDistDisabled: AugmentedError<ApiType>;
			/**
			 * ID already in use
			 **/
			VtxDistIdInUse: AugmentedError<ApiType>;
			/**
			 * No available Dist id
			 **/
			VtxDistIdNotAvailable: AugmentedError<ApiType>;
			/**
			 * Vtx redeem disabled
			 **/
			VtxRedeemDisabled: AugmentedError<ApiType>;
			/**
			 * Vtx reward payout failed
			 **/
			VtxRewardPayoutFailed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		voterList: {
			/**
			 * A error in the list interface implementation.
			 **/
			List: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xls20: {
			/**
			 * The token is burnable and cannot be bridged
			 **/
			CannotBridgeBurnableToken: AugmentedError<ApiType>;
			/**
			 * The XLS20 token ID failed to decode
			 **/
			CouldNotDecodeXls20Token: AugmentedError<ApiType>;
			/**
			 * There is already a Root native -> XLS-20 mapping for this token
			 **/
			MappingAlreadyExists: AugmentedError<ApiType>;
			/**
			 * No the owner of the collection
			 **/
			NotCollectionOwner: AugmentedError<ApiType>;
			/**
			 * The NFT does not exist
			 **/
			NoToken: AugmentedError<ApiType>;
			/**
			 * The caller is not the relayer and does not have permission to perform this action
			 **/
			NotRelayer: AugmentedError<ApiType>;
			/**
			 * The collection is not compatible with XLS-20
			 **/
			NotXLS20Compatible: AugmentedError<ApiType>;
			/**
			 * The supplied fee for minting XLS-20 tokens is too low
			 **/
			Xls20MintFeeTooLow: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xrpl: {
			/**
			 * Call filtered
			 **/
			CallFiltered: AugmentedError<ApiType>;
			/**
			 * Failed to decode XRPL transaction
			 **/
			XRPLTransaction: AugmentedError<ApiType>;
			/**
			 * Failed to get account from XRPL transaction
			 **/
			XRPLTransactionAccount: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xrplBridge: {
			/**
			 * This asset is not supported by the bridge
			 **/
			AssetNotSupported: AugmentedError<ApiType>;
			/**
			 * The asset rounding due to saturation is too high, reduce the significant digits
			 **/
			AssetRoundingTooHigh: AugmentedError<ApiType>;
			/**
			 * Cannot process more transactions at that block
			 **/
			CannotProcessMoreTransactionsAtThatBlock: AugmentedError<ApiType>;
			/**
			 * This ledger index is within the submission window and can't be pruned
			 **/
			CannotPruneActiveLedgerIndex: AugmentedError<ApiType>;
			/**
			 * The scheduled block cannot hold any more delayed payments
			 **/
			DelayScheduleAtCapacity: AugmentedError<ApiType>;
			/**
			 * The door address has not been configured
			 **/
			DoorAddressNotSet: AugmentedError<ApiType>;
			/**
			 * The asset decimals are too high to bridge to XRPL
			 **/
			InvalidAssetDecimals: AugmentedError<ApiType>;
			/**
			 * The issued amount currency code is invalid
			 **/
			InvalidCurrencyCode: AugmentedError<ApiType>;
			/**
			 * highest_pruned_ledger_index must be less than highest_settled_ledger_index -
			 * submission_window_width
			 **/
			InvalidHighestPrunedIndex: AugmentedError<ApiType>;
			/**
			 * Could not convert Balance to Mantissa Exponent
			 **/
			InvalidMantissaExponentConversion: AugmentedError<ApiType>;
			/**
			 * The signers are not known by ethy
			 **/
			InvalidSigners: AugmentedError<ApiType>;
			/**
			 * XRPL symbol to TRN asset id mapping is invalid
			 **/
			InvalidSymbolMapping: AugmentedError<ApiType>;
			/**
			 * The NextTicketSequenceParams is invalid
			 **/
			NextTicketSequenceParamsInvalid: AugmentedError<ApiType>;
			/**
			 * The NextTicketSequenceParams has not been set
			 **/
			NextTicketSequenceParamsNotSet: AugmentedError<ApiType>;
			/**
			 * The paymentIds have been exhausted
			 **/
			NoAvailablePaymentIds: AugmentedError<ApiType>;
			/**
			 * Only the active relayer is permitted to perform this action
			 **/
			NotPermitted: AugmentedError<ApiType>;
			/**
			 * There is no settledXRPTransactionDetails for this ledger index
			 **/
			NoTransactionDetails: AugmentedError<ApiType>;
			/**
			 * Transaction submitted is outside the submission window
			 **/
			OutSideSubmissionWindow: AugmentedError<ApiType>;
			/**
			 * The relayer account does not exist
			 **/
			RelayerDoesNotExists: AugmentedError<ApiType>;
			TestErrorRemoveAfterUsing: AugmentedError<ApiType>;
			/**
			 * The TicketSequenceParams is invalid
			 **/
			TicketSequenceParamsInvalid: AugmentedError<ApiType>;
			/**
			 * XRPL does not allow more than 8 signers for door address
			 **/
			TooManySigners: AugmentedError<ApiType>;
			/**
			 * Too Many transactions per ledger
			 **/
			TooManyTransactionsPerLedger: AugmentedError<ApiType>;
			/**
			 * Submitted a duplicate transaction hash
			 **/
			TxReplay: AugmentedError<ApiType>;
			/**
			 * Withdraw amount must be non-zero and <= u64
			 **/
			WithdrawInvalidAmount: AugmentedError<ApiType>;
			/**
			 * XLS20 incompatible NFT
			 **/
			Xls20Incompatible: AugmentedError<ApiType>;
			/**
			 * XLS20 token id not found
			 **/
			Xls20TokenIDNotFound: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
	} // AugmentedErrors
} // declare module
