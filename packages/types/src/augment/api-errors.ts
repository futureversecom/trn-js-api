// Auto-generated via `yarn polkadot-types-from-chain`, do not edit

/* eslint-disable */
// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import type { ApiTypes, AugmentedError } from "@polkadot/api-base/types";
import "@polkadot/api-base/types/errors";

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module "@polkadot/api-base/types/errors" {
	interface AugmentedErrors<ApiType extends ApiTypes> {
		assets: {
			/**
			 * The asset-account already exists.
			 **/
			AlreadyExists: AugmentedError<ApiType>;
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
			 * The origin account is frozen.
			 **/
			Frozen: AugmentedError<ApiType>;
			/**
			 * The asset ID is already taken.
			 **/
			InUse: AugmentedError<ApiType>;
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
			 * Unable to increment the consumer reference counters on the account. Either no provider
			 * reference exists to allow a non-zero balance of a non-self-sufficient asset, or the
			 * maximum number of consumers has been reached.
			 **/
			NoProvider: AugmentedError<ApiType>;
			/**
			 * No approval exists that would allow the transfer.
			 **/
			Unapproved: AugmentedError<ApiType>;
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
			 * Operation would overflow
			 **/
			Overflow: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		authorship: {
			/**
			 * The uncle is genesis.
			 **/
			GenesisUncle: AugmentedError<ApiType>;
			/**
			 * The uncle parent not in the chain.
			 **/
			InvalidUncleParent: AugmentedError<ApiType>;
			/**
			 * The uncle isn't recent enough to be included.
			 **/
			OldUncle: AugmentedError<ApiType>;
			/**
			 * The uncle is too high in chain.
			 **/
			TooHighUncle: AugmentedError<ApiType>;
			/**
			 * Too many uncles.
			 **/
			TooManyUncles: AugmentedError<ApiType>;
			/**
			 * The uncle is already included.
			 **/
			UncleAlreadyIncluded: AugmentedError<ApiType>;
			/**
			 * Uncles already set in the block.
			 **/
			UnclesAlreadySet: AugmentedError<ApiType>;
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
			 * Beneficiary account must pre-exist
			 **/
			DeadAccount: AugmentedError<ApiType>;
			/**
			 * Value too low to create account due to existential deposit
			 **/
			ExistentialDeposit: AugmentedError<ApiType>;
			/**
			 * A vesting schedule already exists for this account
			 **/
			ExistingVestingSchedule: AugmentedError<ApiType>;
			/**
			 * Balance too low to send value
			 **/
			InsufficientBalance: AugmentedError<ApiType>;
			/**
			 * Transfer/payment would kill account
			 **/
			KeepAlive: AugmentedError<ApiType>;
			/**
			 * Account liquidity restrictions prevent withdrawal
			 **/
			LiquidityRestrictions: AugmentedError<ApiType>;
			/**
			 * Number of named reserves exceed MaxReserves
			 **/
			TooManyReserves: AugmentedError<ApiType>;
			/**
			 * Vesting balance too high to send value
			 **/
			VestingBalance: AugmentedError<ApiType>;
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
			 * The share increment is unacceptable
			 **/
			UnacceptableShareIncrement: AugmentedError<ApiType>;
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
			 * Someone tried to set a greater amount of validators than allowed
			 **/
			MaxNewSignersExceeded: AugmentedError<ApiType>;
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
			 * Account already exists as a delegate
			 **/
			DelegateAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Account is not futurepass delegate
			 **/
			DelegateNotRegistered: AugmentedError<ApiType>;
			/**
			 * Futurepass migrator admin account is not set
			 **/
			MigratorNotSet: AugmentedError<ApiType>;
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
		nft: {
			/**
			 * Attemped to mint a token that was bridged from a different chain
			 **/
			AttemptedMintOnBridgedToken: AugmentedError<ApiType>;
			/**
			 * Auction bid was lower than reserve or current highest bid
			 **/
			BidTooLow: AugmentedError<ApiType>;
			/**
			 * Cannot claim already claimed collections
			 **/
			CannotClaimNonClaimableCollections: AugmentedError<ApiType>;
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
			 * Max issuance needs to be greater than 0 and initial_issuance
			 * Cannot exceed MaxTokensPerCollection
			 **/
			InvalidMaxIssuance: AugmentedError<ApiType>;
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
			 * The max issuance has already been set and can't be changed
			 **/
			MaxIssuanceAlreadySet: AugmentedError<ApiType>;
			/**
			 * The collection max issuance has been reached and no more tokens can be minted
			 **/
			MaxIssuanceReached: AugmentedError<ApiType>;
			/**
			 * The maximum number of offers on this token has been reached
			 **/
			MaxOffersReached: AugmentedError<ApiType>;
			/**
			 * The quantity exceeds the max tokens per mint limit
			 **/
			MintLimitExceeded: AugmentedError<ApiType>;
			/**
			 * Selling tokens from different collection is not allowed
			 **/
			MixedBundleSale: AugmentedError<ApiType>;
			/**
			 * No more Ids are available, they've been exhausted
			 **/
			NoAvailableIds: AugmentedError<ApiType>;
			/**
			 * The collection does not exist
			 **/
			NoCollectionFound: AugmentedError<ApiType>;
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
			 * The number of tokens have exceeded the max tokens allowed
			 **/
			TokenLimitExceeded: AugmentedError<ApiType>;
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
			 * Offer amount needs to be greater than 0
			 **/
			ZeroOffer: AugmentedError<ApiType>;
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
			 * No collection info exists
			 **/
			NoCollectionFound: AugmentedError<ApiType>;
			/**
			 * No mapped token was stored for bridging the token back to the bridged chain
			 * chain(Should not happen)
			 **/
			NoMappedTokenExists: AugmentedError<ApiType>;
			/**
			 * Tried to bridge a token that originates from Root, which is not yet supported
			 **/
			NoPermissionToBridge: AugmentedError<ApiType>;
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
			 * There are too many validators in the system. Governance needs to adjust the staking
			 * settings to keep things safe for the runtime.
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
		xrplBridge: {
			/**
			 * Cannot process more transactions at that block
			 **/
			CannotProcessMoreTransactionsAtThatBlock: AugmentedError<ApiType>;
			/**
			 * The door address has not been configured
			 **/
			DoorAddressNotSet: AugmentedError<ApiType>;
			/**
			 * The signers are not known by ethy
			 **/
			InvalidSigners: AugmentedError<ApiType>;
			/**
			 * The NextTicketSequenceParams is invalid
			 **/
			NextTicketSequenceParamsInvalid: AugmentedError<ApiType>;
			/**
			 * The NextTicketSequenceParams has not been set
			 **/
			NextTicketSequenceParamsNotSet: AugmentedError<ApiType>;
			NotPermitted: AugmentedError<ApiType>;
			RelayerDoesNotExists: AugmentedError<ApiType>;
			/**
			 * The TicketSequenceParams is invalid
			 **/
			TicketSequenceParamsInvalid: AugmentedError<ApiType>;
			/**
			 * XRPL does not allow more than 8 signers for door address
			 **/
			TooManySigners: AugmentedError<ApiType>;
			/**
			 * Submitted a duplicate transaction hash
			 **/
			TxReplay: AugmentedError<ApiType>;
			/**
			 * Withdraw amount must be non-zero and <= u64
			 **/
			WithdrawInvalidAmount: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
	} // AugmentedErrors
} // declare module
