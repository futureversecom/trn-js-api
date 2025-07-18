// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
	/**
	 * Lookup0: seed_primitives::signature::AccountId20
	 **/
	SeedPrimitivesSignatureAccountId20: "[u8;20]",
	/**
	 * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
	 **/
	FrameSystemAccountInfo: {
		nonce: "u32",
		consumers: "u32",
		providers: "u32",
		sufficients: "u32",
		data: "PalletBalancesAccountData",
	},
	/**
	 * Lookup5: pallet_balances::types::AccountData<Balance>
	 **/
	PalletBalancesAccountData: {
		free: "u128",
		reserved: "u128",
		frozen: "u128",
		flags: "u128",
	},
	/**
	 * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
	 **/
	FrameSupportDispatchPerDispatchClassWeight: {
		normal: "SpWeightsWeightV2Weight",
		operational: "SpWeightsWeightV2Weight",
		mandatory: "SpWeightsWeightV2Weight",
	},
	/**
	 * Lookup9: sp_weights::weight_v2::Weight
	 **/
	SpWeightsWeightV2Weight: {
		refTime: "Compact<u64>",
		proofSize: "Compact<u64>",
	},
	/**
	 * Lookup15: sp_runtime::generic::digest::Digest
	 **/
	SpRuntimeDigest: {
		logs: "Vec<SpRuntimeDigestDigestItem>",
	},
	/**
	 * Lookup17: sp_runtime::generic::digest::DigestItem
	 **/
	SpRuntimeDigestDigestItem: {
		_enum: {
			Other: "Bytes",
			__Unused1: "Null",
			__Unused2: "Null",
			__Unused3: "Null",
			Consensus: "([u8;4],Bytes)",
			Seal: "([u8;4],Bytes)",
			PreRuntime: "([u8;4],Bytes)",
			__Unused7: "Null",
			RuntimeEnvironmentUpdated: "Null",
		},
	},
	/**
	 * Lookup20: frame_system::EventRecord<seed_runtime::RuntimeEvent, primitive_types::H256>
	 **/
	FrameSystemEventRecord: {
		phase: "FrameSystemPhase",
		event: "Event",
		topics: "Vec<H256>",
	},
	/**
	 * Lookup22: frame_system::pallet::Event<T>
	 **/
	FrameSystemEvent: {
		_enum: {
			ExtrinsicSuccess: {
				dispatchInfo: "FrameSupportDispatchDispatchInfo",
			},
			ExtrinsicFailed: {
				dispatchError: "SpRuntimeDispatchError",
				dispatchInfo: "FrameSupportDispatchDispatchInfo",
			},
			CodeUpdated: "Null",
			NewAccount: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			KilledAccount: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			Remarked: {
				_alias: {
					hash_: "hash",
				},
				sender: "SeedPrimitivesSignatureAccountId20",
				hash_: "H256",
			},
		},
	},
	/**
	 * Lookup23: frame_support::dispatch::DispatchInfo
	 **/
	FrameSupportDispatchDispatchInfo: {
		weight: "SpWeightsWeightV2Weight",
		class: "FrameSupportDispatchDispatchClass",
		paysFee: "FrameSupportDispatchPays",
	},
	/**
	 * Lookup24: frame_support::dispatch::DispatchClass
	 **/
	FrameSupportDispatchDispatchClass: {
		_enum: ["Normal", "Operational", "Mandatory"],
	},
	/**
	 * Lookup25: frame_support::dispatch::Pays
	 **/
	FrameSupportDispatchPays: {
		_enum: ["Yes", "No"],
	},
	/**
	 * Lookup26: sp_runtime::DispatchError
	 **/
	SpRuntimeDispatchError: {
		_enum: {
			Other: "Null",
			CannotLookup: "Null",
			BadOrigin: "Null",
			Module: "SpRuntimeModuleError",
			ConsumerRemaining: "Null",
			NoProviders: "Null",
			TooManyConsumers: "Null",
			Token: "SpRuntimeTokenError",
			Arithmetic: "SpArithmeticArithmeticError",
			Transactional: "SpRuntimeTransactionalError",
			Exhausted: "Null",
			Corruption: "Null",
			Unavailable: "Null",
			RootNotAllowed: "Null",
		},
	},
	/**
	 * Lookup27: sp_runtime::ModuleError
	 **/
	SpRuntimeModuleError: {
		index: "u8",
		error: "[u8;4]",
	},
	/**
	 * Lookup28: sp_runtime::TokenError
	 **/
	SpRuntimeTokenError: {
		_enum: [
			"FundsUnavailable",
			"OnlyProvider",
			"BelowMinimum",
			"CannotCreate",
			"UnknownAsset",
			"Frozen",
			"Unsupported",
			"CannotCreateHold",
			"NotExpendable",
			"Blocked",
		],
	},
	/**
	 * Lookup29: sp_arithmetic::ArithmeticError
	 **/
	SpArithmeticArithmeticError: {
		_enum: ["Underflow", "Overflow", "DivisionByZero"],
	},
	/**
	 * Lookup30: sp_runtime::TransactionalError
	 **/
	SpRuntimeTransactionalError: {
		_enum: ["LimitReached", "NoLayer"],
	},
	/**
	 * Lookup31: pallet_scheduler::pallet::Event<T>
	 **/
	PalletSchedulerEvent: {
		_enum: {
			Scheduled: {
				when: "u32",
				index: "u32",
			},
			Canceled: {
				when: "u32",
				index: "u32",
			},
			Dispatched: {
				task: "(u32,u32)",
				id: "Option<[u8;32]>",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			CallUnavailable: {
				task: "(u32,u32)",
				id: "Option<[u8;32]>",
			},
			PeriodicFailed: {
				task: "(u32,u32)",
				id: "Option<[u8;32]>",
			},
			PermanentlyOverweight: {
				task: "(u32,u32)",
				id: "Option<[u8;32]>",
			},
		},
	},
	/**
	 * Lookup36: pallet_utility::pallet::Event
	 **/
	PalletUtilityEvent: {
		_enum: {
			BatchInterrupted: {
				index: "u32",
				error: "SpRuntimeDispatchError",
			},
			BatchCompleted: "Null",
			BatchCompletedWithErrors: "Null",
			ItemCompleted: "Null",
			ItemFailed: {
				error: "SpRuntimeDispatchError",
			},
			DispatchedAs: {
				result: "Result<Null, SpRuntimeDispatchError>",
			},
		},
	},
	/**
	 * Lookup37: pallet_recovery::pallet::Event<T>
	 **/
	PalletRecoveryEvent: {
		_enum: {
			RecoveryCreated: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			RecoveryInitiated: {
				lostAccount: "SeedPrimitivesSignatureAccountId20",
				rescuerAccount: "SeedPrimitivesSignatureAccountId20",
			},
			RecoveryVouched: {
				lostAccount: "SeedPrimitivesSignatureAccountId20",
				rescuerAccount: "SeedPrimitivesSignatureAccountId20",
				sender: "SeedPrimitivesSignatureAccountId20",
			},
			RecoveryClosed: {
				lostAccount: "SeedPrimitivesSignatureAccountId20",
				rescuerAccount: "SeedPrimitivesSignatureAccountId20",
			},
			AccountRecovered: {
				lostAccount: "SeedPrimitivesSignatureAccountId20",
				rescuerAccount: "SeedPrimitivesSignatureAccountId20",
			},
			RecoveryRemoved: {
				lostAccount: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup38: pallet_multisig::pallet::Event<T>
	 **/
	PalletMultisigEvent: {
		_enum: {
			NewMultisig: {
				approving: "SeedPrimitivesSignatureAccountId20",
				multisig: "SeedPrimitivesSignatureAccountId20",
				callHash: "[u8;32]",
			},
			MultisigApproval: {
				approving: "SeedPrimitivesSignatureAccountId20",
				timepoint: "PalletMultisigTimepoint",
				multisig: "SeedPrimitivesSignatureAccountId20",
				callHash: "[u8;32]",
			},
			MultisigExecuted: {
				approving: "SeedPrimitivesSignatureAccountId20",
				timepoint: "PalletMultisigTimepoint",
				multisig: "SeedPrimitivesSignatureAccountId20",
				callHash: "[u8;32]",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			MultisigCancelled: {
				cancelling: "SeedPrimitivesSignatureAccountId20",
				timepoint: "PalletMultisigTimepoint",
				multisig: "SeedPrimitivesSignatureAccountId20",
				callHash: "[u8;32]",
			},
		},
	},
	/**
	 * Lookup39: pallet_multisig::Timepoint<BlockNumber>
	 **/
	PalletMultisigTimepoint: {
		height: "u32",
		index: "u32",
	},
	/**
	 * Lookup40: pallet_balances::pallet::Event<T, I>
	 **/
	PalletBalancesEvent: {
		_enum: {
			Endowed: {
				account: "SeedPrimitivesSignatureAccountId20",
				freeBalance: "u128",
			},
			DustLost: {
				account: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Transfer: {
				from: "SeedPrimitivesSignatureAccountId20",
				to: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			BalanceSet: {
				who: "SeedPrimitivesSignatureAccountId20",
				free: "u128",
			},
			Reserved: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Unreserved: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			ReserveRepatriated: {
				from: "SeedPrimitivesSignatureAccountId20",
				to: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
				destinationStatus: "FrameSupportTokensMiscBalanceStatus",
			},
			Deposit: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Withdraw: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Slashed: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Minted: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Burned: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Suspended: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Restored: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Upgraded: {
				who: "SeedPrimitivesSignatureAccountId20",
			},
			Issued: {
				amount: "u128",
			},
			Rescinded: {
				amount: "u128",
			},
			Locked: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Unlocked: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Frozen: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Thawed: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
		},
	},
	/**
	 * Lookup41: frame_support::traits::tokens::misc::BalanceStatus
	 **/
	FrameSupportTokensMiscBalanceStatus: {
		_enum: ["Free", "Reserved"],
	},
	/**
	 * Lookup42: pallet_assets::pallet::Event<T, I>
	 **/
	PalletAssetsEvent: {
		_enum: {
			Created: {
				assetId: "u32",
				creator: "SeedPrimitivesSignatureAccountId20",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			Issued: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Transferred: {
				assetId: "u32",
				from: "SeedPrimitivesSignatureAccountId20",
				to: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Burned: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				balance: "u128",
			},
			TeamChanged: {
				assetId: "u32",
				issuer: "SeedPrimitivesSignatureAccountId20",
				admin: "SeedPrimitivesSignatureAccountId20",
				freezer: "SeedPrimitivesSignatureAccountId20",
			},
			OwnerChanged: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			Frozen: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			Thawed: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			AssetFrozen: {
				assetId: "u32",
			},
			AssetThawed: {
				assetId: "u32",
			},
			AccountsDestroyed: {
				assetId: "u32",
				accountsDestroyed: "u32",
				accountsRemaining: "u32",
			},
			ApprovalsDestroyed: {
				assetId: "u32",
				approvalsDestroyed: "u32",
				approvalsRemaining: "u32",
			},
			DestructionStarted: {
				assetId: "u32",
			},
			Destroyed: {
				assetId: "u32",
			},
			ForceCreated: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			MetadataSet: {
				assetId: "u32",
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
				isFrozen: "bool",
			},
			MetadataCleared: {
				assetId: "u32",
			},
			ApprovedTransfer: {
				assetId: "u32",
				source: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			ApprovalCancelled: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			TransferredApproved: {
				assetId: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
				destination: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			AssetStatusChanged: {
				assetId: "u32",
			},
			AssetMinBalanceChanged: {
				assetId: "u32",
				newMinBalance: "u128",
			},
			Touched: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				depositor: "SeedPrimitivesSignatureAccountId20",
			},
			Blocked: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup44: pallet_assets_ext::pallet::Event<T>
	 **/
	PalletAssetsExtEvent: {
		_enum: {
			PlaceHold: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
				palletId: "[u8;8]",
			},
			ReleaseHold: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
				palletId: "[u8;8]",
			},
			SpendHold: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				spends: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
				palletId: "[u8;8]",
			},
			SplitTransfer: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				transfers: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			CreateAsset: {
				assetId: "u32",
				creator: "SeedPrimitivesSignatureAccountId20",
				initialBalance: "u128",
			},
			InternalWithdraw: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			InternalDeposit: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			AssetDepositSet: {
				assetDeposit: "u128",
			},
		},
	},
	/**
	 * Lookup48: pallet_staking::pallet::pallet::Event<T>
	 **/
	PalletStakingPalletEvent: {
		_enum: {
			EraPaid: {
				eraIndex: "u32",
				validatorPayout: "u128",
				remainder: "u128",
			},
			Rewarded: {
				stash: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Slashed: {
				staker: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			SlashReported: {
				validator: "SeedPrimitivesSignatureAccountId20",
				fraction: "Perbill",
				slashEra: "u32",
			},
			OldSlashingReportDiscarded: {
				sessionIndex: "u32",
			},
			StakersElected: "Null",
			Bonded: {
				stash: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Unbonded: {
				stash: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Withdrawn: {
				stash: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			Kicked: {
				nominator: "SeedPrimitivesSignatureAccountId20",
				stash: "SeedPrimitivesSignatureAccountId20",
			},
			StakingElectionFailed: "Null",
			Chilled: {
				stash: "SeedPrimitivesSignatureAccountId20",
			},
			PayoutStarted: {
				eraIndex: "u32",
				validatorStash: "SeedPrimitivesSignatureAccountId20",
			},
			ValidatorPrefsSet: {
				stash: "SeedPrimitivesSignatureAccountId20",
				prefs: "PalletStakingValidatorPrefs",
			},
			ForceEra: {
				mode: "PalletStakingForcing",
			},
		},
	},
	/**
	 * Lookup50: pallet_staking::ValidatorPrefs
	 **/
	PalletStakingValidatorPrefs: {
		commission: "Compact<Perbill>",
		blocked: "bool",
	},
	/**
	 * Lookup52: pallet_staking::Forcing
	 **/
	PalletStakingForcing: {
		_enum: ["NotForcing", "ForceNew", "ForceNone", "ForceAlways"],
	},
	/**
	 * Lookup53: pallet_offences::pallet::Event
	 **/
	PalletOffencesEvent: {
		_enum: {
			Offence: {
				kind: "[u8;16]",
				timeslot: "Bytes",
			},
		},
	},
	/**
	 * Lookup55: pallet_session::pallet::Event
	 **/
	PalletSessionEvent: {
		_enum: {
			NewSession: {
				sessionIndex: "u32",
			},
		},
	},
	/**
	 * Lookup56: pallet_grandpa::pallet::Event
	 **/
	PalletGrandpaEvent: {
		_enum: {
			NewAuthorities: {
				authoritySet: "Vec<(SpConsensusGrandpaAppPublic,u64)>",
			},
			Paused: "Null",
			Resumed: "Null",
		},
	},
	/**
	 * Lookup59: sp_consensus_grandpa::app::Public
	 **/
	SpConsensusGrandpaAppPublic: "SpCoreEd25519Public",
	/**
	 * Lookup60: sp_core::ed25519::Public
	 **/
	SpCoreEd25519Public: "[u8;32]",
	/**
	 * Lookup61: pallet_im_online::pallet::Event<T>
	 **/
	PalletImOnlineEvent: {
		_enum: {
			HeartbeatReceived: {
				authorityId: "PalletImOnlineSr25519AppSr25519Public",
			},
			AllGood: "Null",
			SomeOffline: {
				offline: "Vec<(SeedPrimitivesSignatureAccountId20,PalletStakingExposure)>",
			},
		},
	},
	/**
	 * Lookup62: pallet_im_online::sr25519::app_sr25519::Public
	 **/
	PalletImOnlineSr25519AppSr25519Public: "SpCoreSr25519Public",
	/**
	 * Lookup63: sp_core::sr25519::Public
	 **/
	SpCoreSr25519Public: "[u8;32]",
	/**
	 * Lookup66: pallet_staking::Exposure<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingExposure: {
		total: "Compact<u128>",
		own: "Compact<u128>",
		others: "Vec<PalletStakingIndividualExposure>",
	},
	/**
	 * Lookup69: pallet_staking::IndividualExposure<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingIndividualExposure: {
		who: "SeedPrimitivesSignatureAccountId20",
		value: "Compact<u128>",
	},
	/**
	 * Lookup70: pallet_sudo::pallet::Event<T>
	 **/
	PalletSudoEvent: {
		_enum: {
			Sudid: {
				sudoResult: "Result<Null, SpRuntimeDispatchError>",
			},
			KeyChanged: {
				oldSudoer: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			SudoAsDone: {
				sudoResult: "Result<Null, SpRuntimeDispatchError>",
			},
		},
	},
	/**
	 * Lookup72: pallet_transaction_payment::pallet::Event<T>
	 **/
	PalletTransactionPaymentEvent: {
		_enum: {
			TransactionFeePaid: {
				who: "SeedPrimitivesSignatureAccountId20",
				actualFee: "u128",
				tip: "u128",
			},
		},
	},
	/**
	 * Lookup73: pallet_dex::pallet::Event<T>
	 **/
	PalletDexEvent: {
		_enum: {
			FeeToSet: "Option<SeedPrimitivesSignatureAccountId20>",
			AddProvision: "(SeedPrimitivesSignatureAccountId20,u32,u128,u32,u128)",
			AddLiquidity:
				"(SeedPrimitivesSignatureAccountId20,u32,u128,u32,u128,u128,SeedPrimitivesSignatureAccountId20)",
			RemoveLiquidity:
				"(SeedPrimitivesSignatureAccountId20,u32,u128,u32,u128,u128,SeedPrimitivesSignatureAccountId20)",
			Swap: "(SeedPrimitivesSignatureAccountId20,Vec<u32>,u128,u128,SeedPrimitivesSignatureAccountId20)",
			EnableTradingPair: "PalletDexTradingPair",
			DisableTradingPair: "PalletDexTradingPair",
			ProvisioningToEnabled: "(PalletDexTradingPair,u128,u128,u128)",
		},
	},
	/**
	 * Lookup75: pallet_dex::types::TradingPair
	 **/
	PalletDexTradingPair: "(u32,u32)",
	/**
	 * Lookup76: pallet_nft::pallet::Event<T>
	 **/
	PalletNftEvent: {
		_enum: {
			CollectionCreate: {
				collectionUuid: "u32",
				initialIssuance: "u32",
				maxIssuance: "Option<u32>",
				collectionOwner: "SeedPrimitivesSignatureAccountId20",
				metadataScheme: "Bytes",
				name: "Bytes",
				royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
				originChain: "SeedPrimitivesNftOriginChain",
				compatibility: "SeedPrimitivesNftCrossChainCompatibility",
			},
			PublicMintToggle: {
				collectionId: "u32",
				enabled: "bool",
			},
			Mint: {
				collectionId: "u32",
				start: "u32",
				end: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			MintFeePaid: {
				who: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				paymentAsset: "u32",
				paymentAmount: "u128",
				tokenCount: "u32",
			},
			MintPriceSet: {
				collectionId: "u32",
				paymentAsset: "Option<u32>",
				mintPrice: "Option<u128>",
			},
			BridgedMint: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			OwnerSet: {
				collectionId: "u32",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			MaxIssuanceSet: {
				collectionId: "u32",
				maxIssuance: "u32",
			},
			BaseUriSet: {
				collectionId: "u32",
				baseUri: "Bytes",
			},
			NameSet: {
				collectionId: "u32",
				name: "Bytes",
			},
			RoyaltiesScheduleSet: {
				collectionId: "u32",
				royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
			},
			Transfer: {
				previousOwner: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			Burn: {
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				serialNumber: "u32",
			},
			CollectionClaimed: {
				account: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
			},
			UtilityFlagsSet: {
				collectionId: "u32",
				utilityFlags: "SeedPalletCommonUtilsCollectionUtilityFlags",
			},
			TokenTransferableFlagSet: {
				tokenId: "(u32,u32)",
				transferable: "bool",
			},
			PendingIssuanceCreated: {
				collectionId: "u32",
				issuanceId: "u32",
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				quantity: "u32",
				burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
			},
			Issued: {
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				start: "u32",
				end: "u32",
				burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
			},
			AdditionalDataSet: {
				tokenId: "(u32,u32)",
				additionalData: "Option<Bytes>",
			},
		},
	},
	/**
	 * Lookup81: seed_primitives::nft::RoyaltiesSchedule<seed_primitives::signature::AccountId20>
	 **/
	SeedPrimitivesNftRoyaltiesSchedule: {
		entitlements: "Vec<(SeedPrimitivesSignatureAccountId20,Permill)>",
	},
	/**
	 * Lookup86: seed_primitives::nft::OriginChain
	 **/
	SeedPrimitivesNftOriginChain: {
		_enum: ["Ethereum", "Root", "XRPL"],
	},
	/**
	 * Lookup87: seed_primitives::nft::CrossChainCompatibility
	 **/
	SeedPrimitivesNftCrossChainCompatibility: {
		xrpl: "bool",
	},
	/**
	 * Lookup91: seed_pallet_common::utils::CollectionUtilityFlags
	 **/
	SeedPalletCommonUtilsCollectionUtilityFlags: {
		transferable: "bool",
		burnable: "bool",
		mintable: "bool",
	},
	/**
	 * Lookup92: seed_pallet_common::utils::TokenBurnAuthority
	 **/
	SeedPalletCommonUtilsTokenBurnAuthority: {
		_enum: ["CollectionOwner", "TokenOwner", "Both", "Neither"],
	},
	/**
	 * Lookup95: pallet_sft::pallet::Event<T>
	 **/
	PalletSftEvent: {
		_enum: {
			CollectionCreate: {
				collectionId: "u32",
				collectionOwner: "SeedPrimitivesSignatureAccountId20",
				metadataScheme: "Bytes",
				name: "Bytes",
				royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
				originChain: "SeedPrimitivesNftOriginChain",
			},
			PublicMintToggle: {
				tokenId: "(u32,u32)",
				enabled: "bool",
			},
			Mint: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			MintFeePaid: {
				who: "SeedPrimitivesSignatureAccountId20",
				tokenId: "(u32,u32)",
				paymentAsset: "u32",
				paymentAmount: "u128",
				tokenCount: "u128",
			},
			MintPriceSet: {
				tokenId: "(u32,u32)",
				paymentAsset: "Option<u32>",
				mintPrice: "Option<u128>",
			},
			OwnerSet: {
				collectionId: "u32",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			MaxIssuanceSet: {
				tokenId: "(u32,u32)",
				maxIssuance: "u128",
			},
			BaseUriSet: {
				collectionId: "u32",
				metadataScheme: "Bytes",
			},
			NameSet: {
				collectionId: "u32",
				collectionName: "Bytes",
			},
			TokenNameSet: {
				tokenId: "(u32,u32)",
				tokenName: "Bytes",
			},
			RoyaltiesScheduleSet: {
				collectionId: "u32",
				royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
			},
			TokenCreate: {
				tokenId: "(u32,u32)",
				initialIssuance: "u128",
				maxIssuance: "Option<u128>",
				tokenName: "Bytes",
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
			},
			Transfer: {
				previousOwner: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			Burn: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			UtilityFlagsSet: {
				collectionId: "u32",
				utilityFlags: "SeedPalletCommonUtilsCollectionUtilityFlags",
			},
			TokenTransferableFlagSet: {
				tokenId: "(u32,u32)",
				transferable: "bool",
			},
			TokenBurnAuthoritySet: {
				tokenId: "(u32,u32)",
				burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
			},
			PendingIssuanceCreated: {
				collectionId: "u32",
				issuanceId: "u32",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
			},
			Issued: {
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
			},
			AdditionalDataSet: {
				tokenId: "(u32,u32)",
				additionalData: "Option<Bytes>",
			},
		},
	},
	/**
	 * Lookup101: pallet_xrpl_bridge::pallet::Event<T>
	 **/
	PalletXrplBridgeEvent: {
		_enum: {
			TransactionAdded: "(u64,H512)",
			TransactionChallenge: "(u64,H512)",
			PaymentDelaySet: {
				assetId: "u32",
				paymentThreshold: "u128",
				delay: "u32",
			},
			PaymentDelayRemoved: {
				assetId: "u32",
			},
			ProcessingOk: "(u64,H512)",
			ProcessingFailed: "(u64,H512,SpRuntimeDispatchError)",
			NotSupportedTransaction: "Null",
			WithdrawRequest: {
				proofId: "u64",
				sender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
				destination: "H160",
			},
			WithdrawDelayed: {
				sender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
				destination: "H160",
				delayedPaymentId: "u64",
				paymentBlock: "u32",
			},
			RelayerAdded: "SeedPrimitivesSignatureAccountId20",
			RelayerRemoved: "SeedPrimitivesSignatureAccountId20",
			DoorAddressSet: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				address: "Option<H160>",
			},
			DoorNextTicketSequenceParamSet: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				ticketSequenceStartNext: "u32",
				ticketBucketSizeNext: "u32",
			},
			DoorTicketSequenceParamSet: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				ticketSequence: "u32",
				ticketSequenceStart: "u32",
				ticketBucketSize: "u32",
			},
			LedgerIndexManualPrune: {
				ledgerIndex: "u32",
				totalCleared: "u32",
			},
			TicketSequenceThresholdReached: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				currentTicket: "u32",
			},
			XrplAssetMapSet: {
				assetId: "u32",
				xrplCurrency: "PalletXrplBridgeXrplCurrency",
			},
			XrplAssetMapRemoved: {
				assetId: "u32",
				xrplCurrency: "PalletXrplBridgeXrplCurrency",
			},
			XrplTxSignRequest: {
				proofId: "u64",
				tx: "PalletXrplBridgeXrplTransaction",
			},
		},
	},
	/**
	 * Lookup105: pallet_xrpl_bridge::types::XRPLDoorAccount
	 **/
	PalletXrplBridgeXrplDoorAccount: {
		_enum: ["Main", "NFT"],
	},
	/**
	 * Lookup107: pallet_xrpl_bridge::types::XRPLCurrency
	 **/
	PalletXrplBridgeXrplCurrency: {
		symbol: "PalletXrplBridgeXrplCurrencyType",
		issuer: "H160",
	},
	/**
	 * Lookup108: pallet_xrpl_bridge::types::XRPLCurrencyType
	 **/
	PalletXrplBridgeXrplCurrencyType: {
		_enum: {
			Standard: "[u8;3]",
			NonStandard: "[u8;20]",
		},
	},
	/**
	 * Lookup110: pallet_xrpl_bridge::types::XrplTransaction
	 **/
	PalletXrplBridgeXrplTransaction: {
		_enum: {
			NFTokenAcceptOffer: "PalletXrplBridgeNfTokenAcceptOfferTransaction",
			NFTokenCreateOffer: "PalletXrplBridgeNfTokenCreateOfferTransaction",
		},
	},
	/**
	 * Lookup111: pallet_xrpl_bridge::types::NFTokenAcceptOfferTransaction
	 **/
	PalletXrplBridgeNfTokenAcceptOfferTransaction: {
		nftokenSellOffer: "[u8;32]",
		txFee: "u64",
		txTicketSequence: "u32",
		account: "H160",
	},
	/**
	 * Lookup112: pallet_xrpl_bridge::types::NFTokenCreateOfferTransaction
	 **/
	PalletXrplBridgeNfTokenCreateOfferTransaction: {
		nftokenId: "[u8;32]",
		txFee: "u64",
		txTicketSequence: "u32",
		account: "H160",
		destination: "H160",
	},
	/**
	 * Lookup113: pallet_xrpl::pallet::Event<T>
	 **/
	PalletXrplEvent: {
		_enum: {
			XRPLExtrinsicExecuted: {
				publicKey: "PalletXrplXrplPublicKey",
				caller: "SeedPrimitivesSignatureAccountId20",
				rAddress: "Text",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup114: pallet_xrpl::types::XrplPublicKey
	 **/
	PalletXrplXrplPublicKey: {
		_enum: {
			ED25519: "SpCoreEd25519Public",
			ECDSA: "SpCoreEcdsaPublic",
		},
	},
	/**
	 * Lookup115: sp_core::ecdsa::Public
	 **/
	SpCoreEcdsaPublic: "[u8;33]",
	/**
	 * Lookup119: frame_system::pallet::Call<T>
	 **/
	FrameSystemCall: {
		_enum: {
			remark: {
				remark: "Bytes",
			},
			set_heap_pages: {
				pages: "u64",
			},
			set_code: {
				code: "Bytes",
			},
			set_code_without_checks: {
				code: "Bytes",
			},
			set_storage: {
				items: "Vec<(Bytes,Bytes)>",
			},
			kill_storage: {
				_alias: {
					keys_: "keys",
				},
				keys_: "Vec<Bytes>",
			},
			kill_prefix: {
				prefix: "Bytes",
				subkeys: "u32",
			},
			remark_with_event: {
				remark: "Bytes",
			},
		},
	},
	/**
	 * Lookup123: pallet_babe::pallet::Call<T>
	 **/
	PalletBabeCall: {
		_enum: {
			report_equivocation: {
				equivocationProof: "SpConsensusSlotsEquivocationProof",
				keyOwnerProof: "SpSessionMembershipProof",
			},
			report_equivocation_unsigned: {
				equivocationProof: "SpConsensusSlotsEquivocationProof",
				keyOwnerProof: "SpSessionMembershipProof",
			},
			plan_config_change: {
				config: "SpConsensusBabeDigestsNextConfigDescriptor",
			},
		},
	},
	/**
	 * Lookup124: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
	 **/
	SpConsensusSlotsEquivocationProof: {
		offender: "SpConsensusBabeAppPublic",
		slot: "u64",
		firstHeader: "SpRuntimeHeader",
		secondHeader: "SpRuntimeHeader",
	},
	/**
	 * Lookup125: sp_runtime::generic::header::Header<Number, Hash>
	 **/
	SpRuntimeHeader: {
		parentHash: "H256",
		number: "Compact<u32>",
		stateRoot: "H256",
		extrinsicsRoot: "H256",
		digest: "SpRuntimeDigest",
	},
	/**
	 * Lookup127: sp_consensus_babe::app::Public
	 **/
	SpConsensusBabeAppPublic: "SpCoreSr25519Public",
	/**
	 * Lookup129: sp_session::MembershipProof
	 **/
	SpSessionMembershipProof: {
		session: "u32",
		trieNodes: "Vec<Bytes>",
		validatorCount: "u32",
	},
	/**
	 * Lookup130: sp_consensus_babe::digests::NextConfigDescriptor
	 **/
	SpConsensusBabeDigestsNextConfigDescriptor: {
		_enum: {
			__Unused0: "Null",
			V1: {
				c: "(u64,u64)",
				allowedSlots: "SpConsensusBabeAllowedSlots",
			},
		},
	},
	/**
	 * Lookup132: sp_consensus_babe::AllowedSlots
	 **/
	SpConsensusBabeAllowedSlots: {
		_enum: ["PrimarySlots", "PrimaryAndSecondaryPlainSlots", "PrimaryAndSecondaryVRFSlots"],
	},
	/**
	 * Lookup133: pallet_timestamp::pallet::Call<T>
	 **/
	PalletTimestampCall: {
		_enum: {
			set: {
				now: "Compact<u64>",
			},
		},
	},
	/**
	 * Lookup134: pallet_scheduler::pallet::Call<T>
	 **/
	PalletSchedulerCall: {
		_enum: {
			schedule: {
				when: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "Call",
			},
			cancel: {
				when: "u32",
				index: "u32",
			},
			schedule_named: {
				id: "[u8;32]",
				when: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "Call",
			},
			cancel_named: {
				id: "[u8;32]",
			},
			schedule_after: {
				after: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "Call",
			},
			schedule_named_after: {
				id: "[u8;32]",
				after: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup136: pallet_utility::pallet::Call<T>
	 **/
	PalletUtilityCall: {
		_enum: {
			batch: {
				calls: "Vec<Call>",
			},
			as_derivative: {
				index: "u16",
				call: "Call",
			},
			batch_all: {
				calls: "Vec<Call>",
			},
			dispatch_as: {
				asOrigin: "SeedRuntimeOriginCaller",
				call: "Call",
			},
			force_batch: {
				calls: "Vec<Call>",
			},
			with_weight: {
				call: "Call",
				weight: "SpWeightsWeightV2Weight",
			},
		},
	},
	/**
	 * Lookup139: seed_runtime::OriginCaller
	 **/
	SeedRuntimeOriginCaller: {
		_enum: {
			system: "FrameSupportDispatchRawOrigin",
			__Unused1: "Null",
			__Unused2: "Null",
			Void: "SpCoreVoid",
			__Unused4: "Null",
			__Unused5: "Null",
			__Unused6: "Null",
			__Unused7: "Null",
			__Unused8: "Null",
			__Unused9: "Null",
			__Unused10: "Null",
			__Unused11: "Null",
			__Unused12: "Null",
			__Unused13: "Null",
			__Unused14: "Null",
			__Unused15: "Null",
			__Unused16: "Null",
			__Unused17: "Null",
			__Unused18: "Null",
			__Unused19: "Null",
			__Unused20: "Null",
			__Unused21: "Null",
			__Unused22: "Null",
			__Unused23: "Null",
			__Unused24: "Null",
			__Unused25: "Null",
			Ethereum: "PalletEthereumRawOrigin",
			__Unused27: "Null",
			__Unused28: "Null",
			__Unused29: "Null",
			__Unused30: "Null",
			__Unused31: "Null",
			__Unused32: "Null",
			__Unused33: "Null",
			__Unused34: "Null",
			Xrpl: "SeedPrimitivesSignatureAccountId20",
		},
	},
	/**
	 * Lookup140: frame_support::dispatch::RawOrigin<seed_primitives::signature::AccountId20>
	 **/
	FrameSupportDispatchRawOrigin: {
		_enum: {
			Root: "Null",
			Signed: "SeedPrimitivesSignatureAccountId20",
			None: "Null",
		},
	},
	/**
	 * Lookup141: pallet_ethereum::RawOrigin
	 **/
	PalletEthereumRawOrigin: {
		_enum: {
			EthereumTransaction: "H160",
		},
	},
	/**
	 * Lookup142: sp_core::Void
	 **/
	SpCoreVoid: "Null",
	/**
	 * Lookup143: pallet_recovery::pallet::Call<T>
	 **/
	PalletRecoveryCall: {
		_enum: {
			as_recovered: {
				account: "SeedPrimitivesSignatureAccountId20",
				call: "Call",
			},
			set_recovered: {
				lost: "SeedPrimitivesSignatureAccountId20",
				rescuer: "SeedPrimitivesSignatureAccountId20",
			},
			create_recovery: {
				friends: "Vec<SeedPrimitivesSignatureAccountId20>",
				threshold: "u16",
				delayPeriod: "u32",
			},
			initiate_recovery: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			vouch_recovery: {
				lost: "SeedPrimitivesSignatureAccountId20",
				rescuer: "SeedPrimitivesSignatureAccountId20",
			},
			claim_recovery: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			close_recovery: {
				rescuer: "SeedPrimitivesSignatureAccountId20",
			},
			remove_recovery: "Null",
			cancel_recovered: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup145: pallet_multisig::pallet::Call<T>
	 **/
	PalletMultisigCall: {
		_enum: {
			as_multi_threshold_1: {
				otherSignatories: "Vec<SeedPrimitivesSignatureAccountId20>",
				call: "Call",
			},
			as_multi: {
				threshold: "u16",
				otherSignatories: "Vec<SeedPrimitivesSignatureAccountId20>",
				maybeTimepoint: "Option<PalletMultisigTimepoint>",
				call: "Call",
				maxWeight: "SpWeightsWeightV2Weight",
			},
			approve_as_multi: {
				threshold: "u16",
				otherSignatories: "Vec<SeedPrimitivesSignatureAccountId20>",
				maybeTimepoint: "Option<PalletMultisigTimepoint>",
				callHash: "[u8;32]",
				maxWeight: "SpWeightsWeightV2Weight",
			},
			cancel_as_multi: {
				threshold: "u16",
				otherSignatories: "Vec<SeedPrimitivesSignatureAccountId20>",
				timepoint: "PalletMultisigTimepoint",
				callHash: "[u8;32]",
			},
		},
	},
	/**
	 * Lookup147: pallet_balances::pallet::Call<T, I>
	 **/
	PalletBalancesCall: {
		_enum: {
			transfer_allow_death: {
				dest: "SeedPrimitivesSignatureAccountId20",
				value: "Compact<u128>",
			},
			set_balance_deprecated: {
				who: "SeedPrimitivesSignatureAccountId20",
				newFree: "Compact<u128>",
				oldReserved: "Compact<u128>",
			},
			force_transfer: {
				source: "SeedPrimitivesSignatureAccountId20",
				dest: "SeedPrimitivesSignatureAccountId20",
				value: "Compact<u128>",
			},
			transfer_keep_alive: {
				dest: "SeedPrimitivesSignatureAccountId20",
				value: "Compact<u128>",
			},
			transfer_all: {
				dest: "SeedPrimitivesSignatureAccountId20",
				keepAlive: "bool",
			},
			force_unreserve: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			upgrade_accounts: {
				who: "Vec<SeedPrimitivesSignatureAccountId20>",
			},
			transfer: {
				dest: "SeedPrimitivesSignatureAccountId20",
				value: "Compact<u128>",
			},
			force_set_balance: {
				who: "SeedPrimitivesSignatureAccountId20",
				newFree: "Compact<u128>",
			},
		},
	},
	/**
	 * Lookup148: pallet_assets::pallet::Call<T, I>
	 **/
	PalletAssetsCall: {
		_enum: {
			create: {
				id: "u32",
				admin: "SeedPrimitivesSignatureAccountId20",
				minBalance: "u128",
			},
			force_create: {
				id: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				isSufficient: "bool",
				minBalance: "Compact<u128>",
			},
			start_destroy: {
				id: "u32",
			},
			destroy_accounts: {
				id: "u32",
			},
			destroy_approvals: {
				id: "u32",
			},
			finish_destroy: {
				id: "u32",
			},
			mint: {
				id: "u32",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			burn: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			transfer: {
				id: "u32",
				target: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			transfer_keep_alive: {
				id: "u32",
				target: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			force_transfer: {
				id: "u32",
				source: "SeedPrimitivesSignatureAccountId20",
				dest: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			freeze: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			thaw: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			freeze_asset: {
				id: "u32",
			},
			thaw_asset: {
				id: "u32",
			},
			transfer_ownership: {
				id: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			set_team: {
				id: "u32",
				issuer: "SeedPrimitivesSignatureAccountId20",
				admin: "SeedPrimitivesSignatureAccountId20",
				freezer: "SeedPrimitivesSignatureAccountId20",
			},
			set_metadata: {
				id: "u32",
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
			},
			clear_metadata: {
				id: "u32",
			},
			force_set_metadata: {
				id: "u32",
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
				isFrozen: "bool",
			},
			force_clear_metadata: {
				id: "u32",
			},
			force_asset_status: {
				id: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				issuer: "SeedPrimitivesSignatureAccountId20",
				admin: "SeedPrimitivesSignatureAccountId20",
				freezer: "SeedPrimitivesSignatureAccountId20",
				minBalance: "Compact<u128>",
				isSufficient: "bool",
				isFrozen: "bool",
			},
			approve_transfer: {
				id: "u32",
				delegate: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			cancel_approval: {
				id: "u32",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			force_cancel_approval: {
				id: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			transfer_approved: {
				id: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
				destination: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			touch: {
				id: "u32",
			},
			refund: {
				id: "u32",
				allowBurn: "bool",
			},
			set_min_balance: {
				id: "u32",
				minBalance: "u128",
			},
			touch_other: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			refund_other: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			block: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup149: pallet_assets_ext::pallet::Call<T>
	 **/
	PalletAssetsExtCall: {
		_enum: {
			set_asset_deposit: {
				assetDeposit: "u128",
			},
			create_asset: {
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
				minBalance: "Option<u128>",
				owner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			mint: {
				assetId: "u32",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			transfer: {
				assetId: "u32",
				destination: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
				keepAlive: "bool",
			},
			burn_from: {
				assetId: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
		},
	},
	/**
	 * Lookup150: pallet_staking::pallet::pallet::Call<T>
	 **/
	PalletStakingPalletCall: {
		_enum: {
			bond: {
				value: "Compact<u128>",
				payee: "PalletStakingRewardDestination",
			},
			bond_extra: {
				maxAdditional: "Compact<u128>",
			},
			unbond: {
				value: "Compact<u128>",
			},
			withdraw_unbonded: {
				numSlashingSpans: "u32",
			},
			validate: {
				prefs: "PalletStakingValidatorPrefs",
			},
			nominate: {
				targets: "Vec<SeedPrimitivesSignatureAccountId20>",
			},
			chill: "Null",
			set_payee: {
				payee: "PalletStakingRewardDestination",
			},
			set_controller: "Null",
			set_validator_count: {
				_alias: {
					new_: "new",
				},
				new_: "Compact<u32>",
			},
			increase_validator_count: {
				additional: "Compact<u32>",
			},
			scale_validator_count: {
				factor: "Percent",
			},
			force_no_eras: "Null",
			force_new_era: "Null",
			set_invulnerables: {
				invulnerables: "Vec<SeedPrimitivesSignatureAccountId20>",
			},
			force_unstake: {
				stash: "SeedPrimitivesSignatureAccountId20",
				numSlashingSpans: "u32",
			},
			force_new_era_always: "Null",
			cancel_deferred_slash: {
				era: "u32",
				slashIndices: "Vec<u32>",
			},
			payout_stakers: {
				validatorStash: "SeedPrimitivesSignatureAccountId20",
				era: "u32",
			},
			rebond: {
				value: "Compact<u128>",
			},
			reap_stash: {
				stash: "SeedPrimitivesSignatureAccountId20",
				numSlashingSpans: "u32",
			},
			kick: {
				who: "Vec<SeedPrimitivesSignatureAccountId20>",
			},
			set_staking_configs: {
				minNominatorBond: "PalletStakingPalletConfigOpU128",
				minValidatorBond: "PalletStakingPalletConfigOpU128",
				maxNominatorCount: "PalletStakingPalletConfigOpU32",
				maxValidatorCount: "PalletStakingPalletConfigOpU32",
				chillThreshold: "PalletStakingPalletConfigOpPercent",
				minCommission: "PalletStakingPalletConfigOpPerbill",
			},
			chill_other: {
				controller: "SeedPrimitivesSignatureAccountId20",
			},
			force_apply_min_commission: {
				validatorStash: "SeedPrimitivesSignatureAccountId20",
			},
			set_min_commission: {
				_alias: {
					new_: "new",
				},
				new_: "Perbill",
			},
		},
	},
	/**
	 * Lookup151: pallet_staking::RewardDestination<seed_primitives::signature::AccountId20>
	 **/
	PalletStakingRewardDestination: {
		_enum: {
			Staked: "Null",
			Stash: "Null",
			Controller: "Null",
			Account: "SeedPrimitivesSignatureAccountId20",
			None: "Null",
		},
	},
	/**
	 * Lookup153: pallet_staking::pallet::pallet::ConfigOp<T>
	 **/
	PalletStakingPalletConfigOpU128: {
		_enum: {
			Noop: "Null",
			Set: "u128",
			Remove: "Null",
		},
	},
	/**
	 * Lookup154: pallet_staking::pallet::pallet::ConfigOp<T>
	 **/
	PalletStakingPalletConfigOpU32: {
		_enum: {
			Noop: "Null",
			Set: "u32",
			Remove: "Null",
		},
	},
	/**
	 * Lookup155: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
	 **/
	PalletStakingPalletConfigOpPercent: {
		_enum: {
			Noop: "Null",
			Set: "Percent",
			Remove: "Null",
		},
	},
	/**
	 * Lookup156: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
	 **/
	PalletStakingPalletConfigOpPerbill: {
		_enum: {
			Noop: "Null",
			Set: "Perbill",
			Remove: "Null",
		},
	},
	/**
	 * Lookup157: pallet_session::pallet::Call<T>
	 **/
	PalletSessionCall: {
		_enum: {
			set_keys: {
				_alias: {
					keys_: "keys",
				},
				keys_: "SeedRuntimeSessionKeys",
				proof: "Bytes",
			},
			purge_keys: "Null",
		},
	},
	/**
	 * Lookup158: seed_runtime::SessionKeys
	 **/
	SeedRuntimeSessionKeys: {
		babe: "SpConsensusBabeAppPublic",
		imOnline: "PalletImOnlineSr25519AppSr25519Public",
		grandpa: "SpConsensusGrandpaAppPublic",
		ethy: "SeedPrimitivesEthyCryptoAppCryptoPublic",
	},
	/**
	 * Lookup159: seed_primitives::ethy::crypto::app_crypto::Public
	 **/
	SeedPrimitivesEthyCryptoAppCryptoPublic: "SpCoreEcdsaPublic",
	/**
	 * Lookup160: pallet_grandpa::pallet::Call<T>
	 **/
	PalletGrandpaCall: {
		_enum: {
			report_equivocation: {
				equivocationProof: "SpConsensusGrandpaEquivocationProof",
				keyOwnerProof: "SpSessionMembershipProof",
			},
			report_equivocation_unsigned: {
				equivocationProof: "SpConsensusGrandpaEquivocationProof",
				keyOwnerProof: "SpSessionMembershipProof",
			},
			note_stalled: {
				delay: "u32",
				bestFinalizedBlockNumber: "u32",
			},
		},
	},
	/**
	 * Lookup161: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
	 **/
	SpConsensusGrandpaEquivocationProof: {
		setId: "u64",
		equivocation: "SpConsensusGrandpaEquivocation",
	},
	/**
	 * Lookup162: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
	 **/
	SpConsensusGrandpaEquivocation: {
		_enum: {
			Prevote: "FinalityGrandpaEquivocationPrevote",
			Precommit: "FinalityGrandpaEquivocationPrecommit",
		},
	},
	/**
	 * Lookup163: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
	 **/
	FinalityGrandpaEquivocationPrevote: {
		roundNumber: "u64",
		identity: "SpConsensusGrandpaAppPublic",
		first: "(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)",
		second: "(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)",
	},
	/**
	 * Lookup164: finality_grandpa::Prevote<primitive_types::H256, N>
	 **/
	FinalityGrandpaPrevote: {
		targetHash: "H256",
		targetNumber: "u32",
	},
	/**
	 * Lookup165: sp_consensus_grandpa::app::Signature
	 **/
	SpConsensusGrandpaAppSignature: "SpCoreEd25519Signature",
	/**
	 * Lookup166: sp_core::ed25519::Signature
	 **/
	SpCoreEd25519Signature: "[u8;64]",
	/**
	 * Lookup168: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
	 **/
	FinalityGrandpaEquivocationPrecommit: {
		roundNumber: "u64",
		identity: "SpConsensusGrandpaAppPublic",
		first: "(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)",
		second: "(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)",
	},
	/**
	 * Lookup169: finality_grandpa::Precommit<primitive_types::H256, N>
	 **/
	FinalityGrandpaPrecommit: {
		targetHash: "H256",
		targetNumber: "u32",
	},
	/**
	 * Lookup171: pallet_im_online::pallet::Call<T>
	 **/
	PalletImOnlineCall: {
		_enum: {
			heartbeat: {
				heartbeat: "PalletImOnlineHeartbeat",
				signature: "PalletImOnlineSr25519AppSr25519Signature",
			},
		},
	},
	/**
	 * Lookup172: pallet_im_online::Heartbeat<BlockNumber>
	 **/
	PalletImOnlineHeartbeat: {
		blockNumber: "u32",
		sessionIndex: "u32",
		authorityIndex: "u32",
		validatorsLen: "u32",
	},
	/**
	 * Lookup173: pallet_im_online::sr25519::app_sr25519::Signature
	 **/
	PalletImOnlineSr25519AppSr25519Signature: "SpCoreSr25519Signature",
	/**
	 * Lookup174: sp_core::sr25519::Signature
	 **/
	SpCoreSr25519Signature: "[u8;64]",
	/**
	 * Lookup175: pallet_sudo::pallet::Call<T>
	 **/
	PalletSudoCall: {
		_enum: {
			sudo: {
				call: "Call",
			},
			sudo_unchecked_weight: {
				call: "Call",
				weight: "SpWeightsWeightV2Weight",
			},
			set_key: {
				_alias: {
					new_: "new",
				},
				new_: "SeedPrimitivesSignatureAccountId20",
			},
			sudo_as: {
				who: "SeedPrimitivesSignatureAccountId20",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup176: pallet_dex::pallet::Call<T>
	 **/
	PalletDexCall: {
		_enum: {
			set_fee_to: {
				feeTo: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			swap_with_exact_supply: {
				amountIn: "Compact<u128>",
				amountOutMin: "Compact<u128>",
				path: "Vec<u32>",
				to: "Option<SeedPrimitivesSignatureAccountId20>",
				deadline: "Option<u32>",
			},
			swap_with_exact_target: {
				amountOut: "Compact<u128>",
				amountInMax: "Compact<u128>",
				path: "Vec<u32>",
				to: "Option<SeedPrimitivesSignatureAccountId20>",
				deadline: "Option<u32>",
			},
			add_liquidity: {
				tokenA: "u32",
				tokenB: "u32",
				amountADesired: "Compact<u128>",
				amountBDesired: "Compact<u128>",
				amountAMin: "Compact<u128>",
				amountBMin: "Compact<u128>",
				to: "Option<SeedPrimitivesSignatureAccountId20>",
				deadline: "Option<u32>",
			},
			remove_liquidity: {
				tokenA: "u32",
				tokenB: "u32",
				liquidity: "Compact<u128>",
				amountAMin: "Compact<u128>",
				amountBMin: "Compact<u128>",
				to: "Option<SeedPrimitivesSignatureAccountId20>",
				deadline: "Option<u32>",
			},
			reenable_trading_pair: {
				tokenA: "u32",
				tokenB: "u32",
			},
			disable_trading_pair: {
				tokenA: "u32",
				tokenB: "u32",
			},
		},
	},
	/**
	 * Lookup177: pallet_nft::pallet::Call<T>
	 **/
	PalletNftCall: {
		_enum: {
			claim_unowned_collection: {
				collectionId: "u32",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			set_owner: {
				collectionId: "u32",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			set_max_issuance: {
				collectionId: "u32",
				maxIssuance: "u32",
			},
			set_base_uri: {
				collectionId: "u32",
				baseUri: "Bytes",
			},
			create_collection: {
				name: "Bytes",
				initialIssuance: "u32",
				maxIssuance: "Option<u32>",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
				metadataScheme: "Bytes",
				royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
				crossChainCompatibility: "SeedPrimitivesNftCrossChainCompatibility",
			},
			toggle_public_mint: {
				collectionId: "u32",
				enabled: "bool",
			},
			set_mint_fee: {
				collectionId: "u32",
				pricingDetails: "Option<(u32,u128)>",
			},
			mint: {
				collectionId: "u32",
				quantity: "u32",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			transfer: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			burn: {
				tokenId: "(u32,u32)",
			},
			set_name: {
				collectionId: "u32",
				name: "Bytes",
			},
			set_royalties_schedule: {
				collectionId: "u32",
				royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
			},
			set_utility_flags: {
				collectionId: "u32",
				utilityFlags: "SeedPalletCommonUtilsCollectionUtilityFlags",
			},
			set_token_transferable_flag: {
				tokenId: "(u32,u32)",
				transferable: "bool",
			},
			issue_soulbound: {
				collectionId: "u32",
				quantity: "u32",
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
			},
			accept_soulbound_issuance: {
				collectionId: "u32",
				issuanceId: "u32",
			},
			set_additional_data: {
				tokenId: "(u32,u32)",
				additionalData: "Option<Bytes>",
			},
			mint_with_additional_data: {
				collectionId: "u32",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
				additionalData: "Bytes",
			},
		},
	},
	/**
	 * Lookup181: pallet_sft::pallet::Call<T>
	 **/
	PalletSftCall: {
		_enum: {
			create_collection: {
				collectionName: "Bytes",
				collectionOwner: "Option<SeedPrimitivesSignatureAccountId20>",
				metadataScheme: "Bytes",
				royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
			},
			create_token: {
				collectionId: "u32",
				tokenName: "Bytes",
				initialIssuance: "u128",
				maxIssuance: "Option<u128>",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			mint: {
				collectionId: "u32",
				serialNumbers: "Vec<(u32,u128)>",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			transfer: {
				collectionId: "u32",
				serialNumbers: "Vec<(u32,u128)>",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			burn: {
				collectionId: "u32",
				serialNumbers: "Vec<(u32,u128)>",
			},
			set_owner: {
				collectionId: "u32",
				newOwner: "SeedPrimitivesSignatureAccountId20",
			},
			set_max_issuance: {
				tokenId: "(u32,u32)",
				maxIssuance: "u128",
			},
			set_base_uri: {
				collectionId: "u32",
				metadataScheme: "Bytes",
			},
			set_name: {
				collectionId: "u32",
				collectionName: "Bytes",
			},
			set_royalties_schedule: {
				collectionId: "u32",
				royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
			},
			toggle_public_mint: {
				tokenId: "(u32,u32)",
				enabled: "bool",
			},
			set_mint_fee: {
				tokenId: "(u32,u32)",
				pricingDetails: "Option<(u32,u128)>",
			},
			set_utility_flags: {
				collectionId: "u32",
				utilityFlags: "SeedPalletCommonUtilsCollectionUtilityFlags",
			},
			set_token_name: {
				tokenId: "(u32,u32)",
				tokenName: "Bytes",
			},
			set_token_transferable_flag: {
				tokenId: "(u32,u32)",
				transferable: "bool",
			},
			set_token_burn_authority: {
				tokenId: "(u32,u32)",
				burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
			},
			burn_as_collection_owner: {
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				serialNumbers: "Vec<(u32,u128)>",
			},
			issue_soulbound: {
				collectionId: "u32",
				serialNumbers: "Vec<(u32,u128)>",
				tokenOwner: "SeedPrimitivesSignatureAccountId20",
			},
			accept_soulbound_issuance: {
				collectionId: "u32",
				issuanceId: "u32",
			},
			set_additional_data: {
				tokenId: "(u32,u32)",
				additionalData: "Option<Bytes>",
			},
			create_token_with_additional_data: {
				collectionId: "u32",
				tokenName: "Bytes",
				initialIssuance: "u128",
				maxIssuance: "Option<u128>",
				tokenOwner: "Option<SeedPrimitivesSignatureAccountId20>",
				additionalData: "Bytes",
			},
		},
	},
	/**
	 * Lookup184: pallet_xrpl_bridge::pallet::Call<T>
	 **/
	PalletXrplBridgeCall: {
		_enum: {
			submit_transaction: {
				ledgerIndex: "u64",
				transactionHash: "H512",
				transaction: "PalletXrplBridgeXrplTxData",
				timestamp: "u64",
			},
			submit_challenge: {
				transactionHash: "H512",
			},
			set_payment_delay: {
				assetId: "u32",
				paymentDelay: "Option<(u128,u32)>",
			},
			withdraw_xrp: {
				amount: "u128",
				destination: "H160",
			},
			withdraw_xrp_with_destination_tag: {
				amount: "u128",
				destination: "H160",
				destinationTag: "u32",
			},
			add_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			remove_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			set_door_tx_fee: {
				doorType: "PalletXrplBridgeXrplDoorAccount",
				fee: "u64",
			},
			set_xrp_source_tag: {
				sourceTag: "u32",
			},
			set_door_address: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				doorAddress: "Option<H160>",
			},
			set_ticket_sequence_next_allocation: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				startTicketSequence: "u32",
				ticketBucketSize: "u32",
			},
			set_ticket_sequence_current_allocation: {
				doorAccount: "PalletXrplBridgeXrplDoorAccount",
				ticketSequence: "u32",
				startTicketSequence: "u32",
				ticketBucketSize: "u32",
			},
			reset_settled_xrpl_tx_data: {
				highestSettledLedgerIndex: "u32",
				submissionWindowWidth: "u32",
				highestPrunedLedgerIndex: "Option<u32>",
				settledTxData:
					"Option<Vec<(H512,u32,PalletXrplBridgeXrpTransaction,SeedPrimitivesSignatureAccountId20)>>",
			},
			prune_settled_ledger_index: {
				ledgerIndex: "u32",
			},
			set_xrpl_asset_map: {
				assetId: "u32",
				xrplCurrency: "Option<PalletXrplBridgeXrplCurrency>",
			},
			withdraw: {
				assetId: "u32",
				amount: "u128",
				destination: "H160",
				destinationTag: "Option<u32>",
			},
			generate_nft_accept_offer: {
				nftokenSellOffer: "[u8;32]",
			},
			withdraw_nft: {
				tokenId: "(u32,u32)",
				destination: "H160",
			},
		},
	},
	/**
	 * Lookup185: pallet_xrpl_bridge::types::XrplTxData
	 **/
	PalletXrplBridgeXrplTxData: {
		_enum: {
			Payment: {
				amount: "u128",
				address: "H160",
			},
			CurrencyPayment: {
				amount: "u128",
				address: "H160",
				currency: "PalletXrplBridgeXrplCurrency",
			},
			Xls20: {
				tokenId: "[u8;32]",
				address: "H160",
			},
		},
	},
	/**
	 * Lookup191: pallet_xrpl_bridge::types::XrpTransaction
	 **/
	PalletXrplBridgeXrpTransaction: {
		transactionHash: "H512",
		transaction: "PalletXrplBridgeXrplTxData",
		timestamp: "u64",
	},
	/**
	 * Lookup193: pallet_xrpl::pallet::Call<T>
	 **/
	PalletXrplCall: {
		_enum: {
			transact: {
				encodedMsg: "Bytes",
				signature: "Bytes",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup196: pallet_token_approvals::pallet::Call<T>
	 **/
	PalletTokenApprovalsCall: {
		_enum: {
			erc721_approval: {
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				tokenId: "(u32,u32)",
			},
			erc721_remove_approval: {
				tokenId: "(u32,u32)",
			},
			erc20_approval: {
				spender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
			},
			erc20_update_approval: {
				spender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
			},
			erc721_approval_for_all: {
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				collectionUuid: "u32",
				approved: "bool",
			},
			erc1155_approval_for_all: {
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				collectionUuid: "u32",
				approved: "bool",
			},
		},
	},
	/**
	 * Lookup197: pallet_echo::pallet::Call<T>
	 **/
	PalletEchoCall: {
		_enum: {
			ping: {
				destination: "H160",
			},
		},
	},
	/**
	 * Lookup198: pallet_marketplace::pallet::Call<T>
	 **/
	PalletMarketplaceCall: {
		_enum: {
			register_marketplace: {
				marketplaceAccount: "Option<SeedPrimitivesSignatureAccountId20>",
				entitlement: "Permill",
			},
			sell_nft: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				buyer: "Option<SeedPrimitivesSignatureAccountId20>",
				paymentAsset: "u32",
				fixedPrice: "u128",
				duration: "Option<u32>",
				marketplaceId: "Option<u32>",
			},
			sell: {
				tokens: "PalletMarketplaceListingTokens",
				buyer: "Option<SeedPrimitivesSignatureAccountId20>",
				paymentAsset: "u32",
				fixedPrice: "u128",
				duration: "Option<u32>",
				marketplaceId: "Option<u32>",
			},
			update_fixed_price: {
				listingId: "u128",
				newPrice: "u128",
			},
			buy: {
				listingId: "u128",
			},
			buy_multi: {
				listingIds: "Vec<u128>",
			},
			auction_nft: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				paymentAsset: "u32",
				reservePrice: "u128",
				duration: "Option<u32>",
				marketplaceId: "Option<u32>",
			},
			auction: {
				tokens: "PalletMarketplaceListingTokens",
				paymentAsset: "u32",
				reservePrice: "u128",
				duration: "Option<u32>",
				marketplaceId: "Option<u32>",
			},
			bid: {
				listingId: "u128",
				amount: "u128",
			},
			cancel_sale: {
				listingId: "u128",
			},
			make_simple_offer: {
				tokenId: "(u32,u32)",
				amount: "u128",
				assetId: "u32",
				marketplaceId: "Option<u32>",
			},
			cancel_offer: {
				offerId: "u64",
			},
			accept_offer: {
				offerId: "u64",
			},
			set_fee_to: {
				feeTo: "Option<SeedPrimitivesSignatureAccountId20>",
			},
		},
	},
	/**
	 * Lookup200: pallet_marketplace::types::ListingTokens<T>
	 **/
	PalletMarketplaceListingTokens: {
		_enum: {
			Nft: "PalletMarketplaceNftListing",
			Sft: "PalletMarketplaceSftListing",
		},
	},
	/**
	 * Lookup201: pallet_marketplace::types::NftListing<T>
	 **/
	PalletMarketplaceNftListing: {
		collectionId: "u32",
		serialNumbers: "Vec<u32>",
	},
	/**
	 * Lookup202: pallet_marketplace::types::SftListing<T>
	 **/
	PalletMarketplaceSftListing: {
		collectionId: "u32",
		serialNumbers: "Vec<(u32,u128)>",
	},
	/**
	 * Lookup205: pallet_preimage::pallet::Call<T>
	 **/
	PalletPreimageCall: {
		_enum: {
			note_preimage: {
				bytes: "Bytes",
			},
			unnote_preimage: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
			request_preimage: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
			unrequest_preimage: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
		},
	},
	/**
	 * Lookup206: pallet_vortex_distribution::pallet::Call<T>
	 **/
	PalletVortexDistributionCall: {
		_enum: {
			set_admin: {
				_alias: {
					new_: "new",
				},
				new_: "SeedPrimitivesSignatureAccountId20",
			},
			create_vtx_dist: "Null",
			disable_vtx_dist: {
				id: "u32",
			},
			set_fee_pot_asset_balances: {
				id: "u32",
				assetsBalances: "Vec<(u32,u128)>",
			},
			set_vtx_vault_asset_balances: {
				id: "u32",
				assetsBalances: "Vec<(u32,u128)>",
			},
			set_vtx_total_supply: {
				id: "u32",
				supply: "u128",
			},
			register_reward_points: {
				id: "u32",
				rewardPoints: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			register_work_points: {
				id: "u32",
				workPoints: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			set_consider_current_balance: {
				value: "bool",
			},
			set_disable_redeem: {
				value: "bool",
			},
			set_enable_manual_reward_input: {
				value: "bool",
			},
			set_asset_prices: {
				id: "u32",
				assetPrices: "Vec<(u32,u128)>",
			},
			trigger_vtx_distribution: {
				id: "u32",
			},
			set_vtx_vault_redeem_asset_list: {
				assetsList: "Vec<u32>",
			},
			start_vtx_dist: {
				id: "u32",
			},
			pay_unsigned: {
				id: "u32",
				currentBlock: "u32",
			},
			redeem_tokens_from_vault: {
				vortexTokenAmount: "u128",
			},
			register_rewards: {
				id: "u32",
				rewards: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
		},
	},
	/**
	 * Lookup210: pallet_partner_attribution::pallet::Call<T>
	 **/
	PalletPartnerAttributionCall: {
		_enum: {
			register_partner_account: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			update_partner_account: {
				partnerId: "Compact<u128>",
				partnerAccount: "SeedPrimitivesSignatureAccountId20",
			},
			attribute_account: {
				partnerId: "u128",
			},
			upgrade_partner: {
				partnerId: "Compact<u128>",
				feePercentage: "Compact<Permill>",
			},
			create_futurepass_with_partner: {
				partnerId: "u128",
				account: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup212: pallet_fee_proxy::pallet::Call<T>
	 **/
	PalletFeeProxyCall: {
		_enum: {
			call_with_fee_preferences: {
				paymentAsset: "u32",
				maxPayment: "u128",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup213: pallet_fee_control::pallet::Call<T>
	 **/
	PalletFeeControlCall: {
		_enum: {
			set_evm_base_fee: {
				value: "U256",
			},
			set_weight_multiplier: {
				value: "Perbill",
			},
			set_length_multiplier: {
				value: "u128",
			},
		},
	},
	/**
	 * Lookup216: pallet_xls20::pallet::Call<T>
	 **/
	PalletXls20Call: {
		_enum: {
			set_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			set_xls20_fee: {
				newFee: "u128",
			},
			enable_xls20_compatibility: {
				collectionId: "u32",
			},
			re_request_xls20_mint: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
			},
			fulfill_xls20_mint: {
				collectionId: "u32",
				tokenMappings: "Vec<(u32,[u8;32])>",
			},
			set_collection_mappings: {
				mappings: "Vec<(u32,PalletXls20Xls20Collection)>",
			},
		},
	},
	/**
	 * Lookup223: pallet_xls20::types::Xls20Collection
	 **/
	PalletXls20Xls20Collection: {
		issuerAddress: "H160",
		taxon: "u32",
	},
	/**
	 * Lookup224: pallet_doughnut::pallet::Call<T>
	 **/
	PalletDoughnutCall: {
		_enum: {
			transact: {
				call: "Call",
				doughnut: "Bytes",
				nonce: "u32",
				genesisHash: "H256",
				tip: "u64",
				signature: "Bytes",
			},
			revoke_doughnut: {
				doughnut: "Bytes",
				revoke: "bool",
			},
			revoke_holder: {
				holder: "SeedPrimitivesSignatureAccountId20",
				revoke: "bool",
			},
			update_whitelisted_holders: {
				holder: "SeedPrimitivesSignatureAccountId20",
				add: "bool",
			},
		},
	},
	/**
	 * Lookup225: pallet_maintenance_mode::pallet::Call<T>
	 **/
	PalletMaintenanceModeCall: {
		_enum: {
			enable_maintenance_mode: {
				enabled: "bool",
			},
			block_account: {
				account: "SeedPrimitivesSignatureAccountId20",
				blocked: "bool",
			},
			block_evm_target: {
				targetAddress: "H160",
				blocked: "bool",
			},
			block_call: {
				palletName: "Bytes",
				callName: "Bytes",
				blocked: "bool",
			},
			block_pallet: {
				palletName: "Bytes",
				blocked: "bool",
			},
		},
	},
	/**
	 * Lookup227: pallet_crowdsale::pallet::Call<T>
	 **/
	PalletCrowdsaleCall: {
		_enum: {
			initialize: {
				paymentAssetId: "u32",
				collectionId: "u32",
				softCapPrice: "u128",
				saleDuration: "u32",
				voucherName: "Option<Bytes>",
				voucherSymbol: "Option<Bytes>",
			},
			enable: {
				saleId: "u64",
			},
			participate: {
				saleId: "u64",
				amount: "u128",
			},
			distribute_crowdsale_rewards: "Null",
			claim_voucher: {
				saleId: "u64",
			},
			redeem_voucher: {
				saleId: "u64",
				quantity: "u32",
			},
			proxy_vault_call: {
				saleId: "u64",
				call: "Call",
			},
			try_force_distribution: {
				saleId: "u64",
			},
		},
	},
	/**
	 * Lookup229: pallet_nfi::pallet::Call<T>
	 **/
	PalletNfiCall: {
		_enum: {
			set_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			set_fee_to: {
				feeTo: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			set_fee_details: {
				subType: "PalletNfiNfiSubType",
				feeDetails: "Option<PalletNfiFeeDetails>",
			},
			enable_nfi_for_trn_collection: {
				collectionId: "u32",
				subType: "PalletNfiNfiSubType",
			},
			manual_data_request: {
				tokenId: "PalletNfiMultiChainTokenId",
				subType: "PalletNfiNfiSubType",
			},
			submit_nfi_data: {
				tokenId: "PalletNfiMultiChainTokenId",
				dataItem: "PalletNfiNfiDataType",
			},
		},
	},
	/**
	 * Lookup230: pallet_nfi::types::NFISubType
	 **/
	PalletNfiNfiSubType: {
		_enum: ["NFI"],
	},
	/**
	 * Lookup232: pallet_nfi::types::FeeDetails<seed_primitives::signature::AccountId20>
	 **/
	PalletNfiFeeDetails: {
		assetId: "u32",
		amount: "u128",
		receiver: "SeedPrimitivesSignatureAccountId20",
	},
	/**
	 * Lookup233: pallet_nfi::types::MultiChainTokenId<MaxByteLength>
	 **/
	PalletNfiMultiChainTokenId: {
		chainId: "u64",
		collectionId: "PalletNfiGenericCollectionId",
		serialNumber: "PalletNfiGenericSerialNumber",
	},
	/**
	 * Lookup234: pallet_nfi::types::GenericCollectionId<MaxByteLength>
	 **/
	PalletNfiGenericCollectionId: {
		_enum: {
			U32: "u32",
			U64: "u64",
			U128: "u128",
			H160: "H160",
			H256: "H256",
			Bytes: "Bytes",
			Empty: "Null",
			U256: "U256",
		},
	},
	/**
	 * Lookup236: pallet_nfi::types::GenericSerialNumber<MaxByteLength>
	 **/
	PalletNfiGenericSerialNumber: {
		_enum: {
			U32: "u32",
			U64: "u64",
			U128: "u128",
			Bytes: "Bytes",
			U256: "U256",
		},
	},
	/**
	 * Lookup237: pallet_nfi::types::NFIDataType<MaxDataLength>
	 **/
	PalletNfiNfiDataType: {
		_enum: {
			NFI: "PalletNfiNfiMatrix",
		},
	},
	/**
	 * Lookup238: pallet_nfi::types::NFIMatrix<MaxDataLength>
	 **/
	PalletNfiNfiMatrix: {
		metadataLink: "Bytes",
		verificationHash: "H256",
	},
	/**
	 * Lookup240: pallet_migration::pallet::Call<T>
	 **/
	PalletMigrationCall: {
		_enum: {
			enable_migration: {
				enabled: "bool",
			},
			set_block_delay: {
				blockDelay: "Option<u32>",
			},
			set_block_limit: {
				blockLimit: "u32",
			},
		},
	},
	/**
	 * Lookup241: pallet_sylo_data_verification::pallet::Call<T>
	 **/
	PalletSyloDataVerificationCall: {
		_enum: {
			set_payment_asset: {
				paymentAsset: "u32",
			},
			set_sylo_resolver_method: {
				resolverMethod: "Bytes",
			},
			register_resolver: {
				identifier: "Bytes",
				serviceEndpoints: "Vec<Bytes>",
			},
			update_resolver: {
				identifier: "Bytes",
				serviceEndpoints: "Vec<Bytes>",
			},
			deregister_resolver: {
				identifier: "Bytes",
			},
			create_validation_record: {
				dataId: "Bytes",
				resolvers: "Vec<SeedPalletCommonSyloResolverId>",
				dataType: "Bytes",
				tags: "Vec<Bytes>",
				checksum: "H256",
			},
			add_validation_record_entry: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				dataId: "Bytes",
				checksum: "H256",
			},
			update_validation_record: {
				dataId: "Bytes",
				resolvers: "Option<Vec<SeedPalletCommonSyloResolverId>>",
				dataType: "Option<Bytes>",
				tags: "Option<Vec<Bytes>>",
			},
			delete_validation_record: {
				dataId: "Bytes",
			},
		},
	},
	/**
	 * Lookup246: seed_pallet_common::sylo::ResolverId<StringLimit>
	 **/
	SeedPalletCommonSyloResolverId: {
		method: "Bytes",
		identifier: "Bytes",
	},
	/**
	 * Lookup252: pallet_liquidity_pools::pallet::Call<T>
	 **/
	PalletLiquidityPoolsCall: {
		_enum: {
			create_pool: {
				rewardAssetId: "u32",
				stakedAssetId: "u32",
				interestRate: "u32",
				maxTokens: "u128",
				lockStartBlock: "u32",
				lockEndBlock: "u32",
			},
			set_pool_succession: {
				predecessorPoolId: "u32",
				successorPoolId: "u32",
			},
			set_pool_rollover: {
				id: "u32",
				shouldRollover: "bool",
			},
			close_pool: {
				id: "u32",
			},
			enter_pool: {
				poolId: "u32",
				amount: "u128",
			},
			exit_pool: {
				id: "u32",
			},
			claim_reward: {
				id: "u32",
			},
			rollover_unsigned: {
				id: "u32",
				currentBlock: "u32",
			},
		},
	},
	/**
	 * Lookup253: pallet_sylo_data_permissions::pallet::Call<T>
	 **/
	PalletSyloDataPermissionsCall: {
		_enum: {
			grant_data_permissions: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				dataIds: "Vec<Bytes>",
				permission: "SeedPalletCommonSyloDataPermission",
				expiry: "Option<u32>",
				irrevocable: "bool",
			},
			revoke_data_permission: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				permissionId: "u32",
				grantee: "SeedPrimitivesSignatureAccountId20",
				dataId: "Bytes",
			},
			grant_tagged_permissions: {
				grantee: "SeedPrimitivesSignatureAccountId20",
				permission: "SeedPalletCommonSyloDataPermission",
				tags: "Vec<Bytes>",
				expiry: "Option<u32>",
				irrevocable: "bool",
			},
			revoke_tagged_permission: {
				grantee: "SeedPrimitivesSignatureAccountId20",
				permissionId: "u32",
			},
			grant_permission_reference: {
				grantee: "SeedPrimitivesSignatureAccountId20",
				permissionRecordId: "Bytes",
			},
			revoke_permission_reference: {
				grantee: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup255: seed_pallet_common::sylo::DataPermission
	 **/
	SeedPalletCommonSyloDataPermission: {
		_enum: ["VIEW", "MODIFY", "DISTRIBUTE"],
	},
	/**
	 * Lookup256: pallet_sylo_action_permissions::pallet::Call<T>
	 **/
	PalletSyloActionPermissionsCall: {
		_enum: {
			grant_transact_permission: {
				grantee: "SeedPrimitivesSignatureAccountId20",
				spender: "PalletSyloActionPermissionsSpender",
				spendingBalance: "Option<u128>",
				allowedCalls: "BTreeSet<(Bytes,Bytes)>",
				expiry: "Option<u32>",
			},
			update_transact_permission: {
				grantee: "SeedPrimitivesSignatureAccountId20",
				spender: "Option<PalletSyloActionPermissionsSpender>",
				spendingBalance: "Option<Option<u128>>",
				allowedCalls: "Option<BTreeSet<(Bytes,Bytes)>>",
				expiry: "Option<Option<u32>>",
			},
			revoke_transact_permission: {
				grantee: "SeedPrimitivesSignatureAccountId20",
			},
			accept_transact_permission: {
				permissionToken: "PalletSyloActionPermissionsTransactPermissionToken",
				tokenSignature: "PalletSyloActionPermissionsTransactPermissionTokenSignature",
			},
			transact: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup257: pallet_sylo_action_permissions::types::Spender
	 **/
	PalletSyloActionPermissionsSpender: {
		_enum: ["GRANTOR", "GRANTEE"],
	},
	/**
	 * Lookup266: pallet_sylo_action_permissions::types::TransactPermissionToken<seed_primitives::signature::AccountId20, BlockNumber, MaxCallIds, StringLimit>
	 **/
	PalletSyloActionPermissionsTransactPermissionToken: {
		grantee: "SeedPrimitivesSignatureAccountId20",
		useFuturepass: "bool",
		spender: "PalletSyloActionPermissionsSpender",
		spendingBalance: "Option<u128>",
		allowedCalls: "BTreeSet<(Bytes,Bytes)>",
		expiry: "Option<u32>",
		nonce: "U256",
	},
	/**
	 * Lookup267: pallet_sylo_action_permissions::types::TransactPermissionTokenSignature<XrplMaxMessageLength, XrplMaxSignatureLength>
	 **/
	PalletSyloActionPermissionsTransactPermissionTokenSignature: {
		_enum: {
			EIP191: "[u8;65]",
			XRPL: "PalletSyloActionPermissionsXrplTokenSignature",
		},
	},
	/**
	 * Lookup269: pallet_sylo_action_permissions::types::XrplTokenSignature<XrplMaxMessageLength, XrplMaxSignatureLength>
	 **/
	PalletSyloActionPermissionsXrplTokenSignature: {
		encodedMsg: "Bytes",
		signature: "Bytes",
	},
	/**
	 * Lookup272: pallet_election_provider_multi_phase::pallet::Call<T>
	 **/
	PalletElectionProviderMultiPhaseCall: {
		_enum: {
			submit_unsigned: {
				rawSolution: "PalletElectionProviderMultiPhaseRawSolution",
				witness: "PalletElectionProviderMultiPhaseSolutionOrSnapshotSize",
			},
			set_minimum_untrusted_score: {
				maybeNextScore: "Option<SpNposElectionsElectionScore>",
			},
			set_emergency_election_result: {
				supports: "Vec<(SeedPrimitivesSignatureAccountId20,SpNposElectionsSupport)>",
			},
			submit: {
				rawSolution: "PalletElectionProviderMultiPhaseRawSolution",
			},
			governance_fallback: {
				maybeMaxVoters: "Option<u32>",
				maybeMaxTargets: "Option<u32>",
			},
		},
	},
	/**
	 * Lookup273: pallet_election_provider_multi_phase::RawSolution<seed_runtime::NposCompactSolution16>
	 **/
	PalletElectionProviderMultiPhaseRawSolution: {
		solution: "SeedRuntimeNposCompactSolution16",
		score: "SpNposElectionsElectionScore",
		round: "u32",
	},
	/**
	 * Lookup274: seed_runtime::NposCompactSolution16
	 **/
	SeedRuntimeNposCompactSolution16: {
		votes1: "Vec<(Compact<u32>,Compact<u16>)>",
		votes2: "Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>",
		votes3: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>",
		votes4: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>",
		votes5: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>",
		votes6: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>",
		votes7: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>",
		votes8: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>",
		votes9: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>",
		votes10: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>",
		votes11: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>",
		votes12: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>",
		votes13: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>",
		votes14: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>",
		votes15: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>",
		votes16: "Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>",
	},
	/**
	 * Lookup325: sp_npos_elections::ElectionScore
	 **/
	SpNposElectionsElectionScore: {
		minimalStake: "u128",
		sumStake: "u128",
		sumStakeSquared: "u128",
	},
	/**
	 * Lookup326: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
	 **/
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
		voters: "Compact<u32>",
		targets: "Compact<u32>",
	},
	/**
	 * Lookup330: sp_npos_elections::Support<seed_primitives::signature::AccountId20>
	 **/
	SpNposElectionsSupport: {
		total: "u128",
		voters: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
	},
	/**
	 * Lookup331: pallet_bags_list::pallet::Call<T, I>
	 **/
	PalletBagsListCall: {
		_enum: {
			rebag: {
				dislocated: "SeedPrimitivesSignatureAccountId20",
			},
			put_in_front_of: {
				lighter: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup332: pallet_ethereum::pallet::Call<T>
	 **/
	PalletEthereumCall: {
		_enum: {
			transact: {
				transaction: "EthereumTransactionTransactionV2",
			},
		},
	},
	/**
	 * Lookup333: ethereum::transaction::TransactionV2
	 **/
	EthereumTransactionTransactionV2: {
		_enum: {
			Legacy: "EthereumTransactionLegacyTransaction",
			EIP2930: "EthereumTransactionEip2930Transaction",
			EIP1559: "EthereumTransactionEip1559Transaction",
		},
	},
	/**
	 * Lookup334: ethereum::transaction::LegacyTransaction
	 **/
	EthereumTransactionLegacyTransaction: {
		nonce: "U256",
		gasPrice: "U256",
		gasLimit: "U256",
		action: "EthereumTransactionTransactionAction",
		value: "U256",
		input: "Bytes",
		signature: "EthereumTransactionTransactionSignature",
	},
	/**
	 * Lookup335: ethereum::transaction::TransactionAction
	 **/
	EthereumTransactionTransactionAction: {
		_enum: {
			Call: "H160",
			Create: "Null",
		},
	},
	/**
	 * Lookup336: ethereum::transaction::TransactionSignature
	 **/
	EthereumTransactionTransactionSignature: {
		v: "u64",
		r: "H256",
		s: "H256",
	},
	/**
	 * Lookup338: ethereum::transaction::EIP2930Transaction
	 **/
	EthereumTransactionEip2930Transaction: {
		chainId: "u64",
		nonce: "U256",
		gasPrice: "U256",
		gasLimit: "U256",
		action: "EthereumTransactionTransactionAction",
		value: "U256",
		input: "Bytes",
		accessList: "Vec<EthereumTransactionAccessListItem>",
		oddYParity: "bool",
		r: "H256",
		s: "H256",
	},
	/**
	 * Lookup340: ethereum::transaction::AccessListItem
	 **/
	EthereumTransactionAccessListItem: {
		address: "H160",
		storageKeys: "Vec<H256>",
	},
	/**
	 * Lookup342: ethereum::transaction::EIP1559Transaction
	 **/
	EthereumTransactionEip1559Transaction: {
		chainId: "u64",
		nonce: "U256",
		maxPriorityFeePerGas: "U256",
		maxFeePerGas: "U256",
		gasLimit: "U256",
		action: "EthereumTransactionTransactionAction",
		value: "U256",
		input: "Bytes",
		accessList: "Vec<EthereumTransactionAccessListItem>",
		oddYParity: "bool",
		r: "H256",
		s: "H256",
	},
	/**
	 * Lookup343: pallet_evm::pallet::Call<T>
	 **/
	PalletEvmCall: {
		_enum: {
			withdraw: {
				address: "H160",
				value: "u128",
			},
			call: {
				source: "H160",
				target: "H160",
				input: "Bytes",
				value: "U256",
				gasLimit: "u64",
				maxFeePerGas: "U256",
				maxPriorityFeePerGas: "Option<U256>",
				nonce: "Option<U256>",
				accessList: "Vec<(H160,Vec<H256>)>",
			},
			create: {
				source: "H160",
				init: "Bytes",
				value: "U256",
				gasLimit: "u64",
				maxFeePerGas: "U256",
				maxPriorityFeePerGas: "Option<U256>",
				nonce: "Option<U256>",
				accessList: "Vec<(H160,Vec<H256>)>",
			},
			create2: {
				source: "H160",
				init: "Bytes",
				salt: "H256",
				value: "U256",
				gasLimit: "u64",
				maxFeePerGas: "U256",
				maxPriorityFeePerGas: "Option<U256>",
				nonce: "Option<U256>",
				accessList: "Vec<(H160,Vec<H256>)>",
			},
		},
	},
	/**
	 * Lookup347: pallet_evm_chain_id::pallet::Call<T>
	 **/
	PalletEvmChainIdCall: {
		_enum: {
			set_chain_id: {
				chainId: "Compact<u64>",
			},
		},
	},
	/**
	 * Lookup348: pallet_ethy::pallet::Call<T>
	 **/
	PalletEthyCall: {
		_enum: {
			set_xrpl_door_signers: {
				newSigners: "Vec<(SeedPrimitivesEthyCryptoAppCryptoPublic,bool)>",
			},
			set_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			deposit_relayer_bond: "Null",
			withdraw_relayer_bond: "Null",
			set_event_block_confirmations: {
				confirmations: "u64",
			},
			set_delayed_event_proofs_per_block: {
				count: "u8",
			},
			set_challenge_period: {
				blocks: "u32",
			},
			set_contract_address: {
				contractAddress: "H160",
			},
			set_bridge_paused: {
				paused: "bool",
			},
			finalise_authorities_change: {
				nextNotaryKeys: "Vec<SeedPrimitivesEthyCryptoAppCryptoPublic>",
			},
			remove_missing_event_id: {
				eventIdRange: "(u64,u64)",
			},
			submit_missing_event: {
				txHash: "H256",
				event: "Bytes",
			},
			submit_event: {
				txHash: "H256",
				event: "Bytes",
			},
			submit_challenge: {
				eventClaimId: "u64",
			},
			submit_notarization: {
				payload: "PalletEthyNotarizationPayload",
				signature: "SeedPrimitivesEthyCryptoAppCryptoSignature",
			},
		},
	},
	/**
	 * Lookup353: pallet_ethy::types::NotarizationPayload
	 **/
	PalletEthyNotarizationPayload: {
		_enum: {
			Call: {
				callId: "u64",
				authorityIndex: "u16",
				result: "PalletEthyCheckedEthCallResult",
			},
			Event: {
				eventClaimId: "u64",
				authorityIndex: "u16",
				result: "PalletEthyEventClaimResult",
			},
		},
	},
	/**
	 * Lookup354: pallet_ethy::types::CheckedEthCallResult
	 **/
	PalletEthyCheckedEthCallResult: {
		_enum: {
			Ok: "([u8;32],u64,u64)",
			ReturnDataExceedsLimit: "Null",
			ReturnDataEmpty: "Null",
			DataProviderErr: "Null",
			InvalidEthBlock: "Null",
			InvalidTimestamp: "Null",
		},
	},
	/**
	 * Lookup355: pallet_ethy::types::EventClaimResult
	 **/
	PalletEthyEventClaimResult: {
		_enum: [
			"Valid",
			"DataProviderErr",
			"TxStatusFailed",
			"UnexpectedContractAddress",
			"NoTxLogs",
			"NotEnoughConfirmations",
			"UnexpectedData",
			"NoTxReceipt",
			"UnexpectedSource",
		],
	},
	/**
	 * Lookup356: seed_primitives::ethy::crypto::app_crypto::Signature
	 **/
	SeedPrimitivesEthyCryptoAppCryptoSignature: "SpCoreEcdsaSignature",
	/**
	 * Lookup357: sp_core::ecdsa::Signature
	 **/
	SpCoreEcdsaSignature: "[u8;65]",
	/**
	 * Lookup358: pallet_erc20_peg::pallet::Call<T>
	 **/
	PalletErc20PegCall: {
		_enum: {
			activate_deposits: {
				activate: "bool",
			},
			activate_withdrawals: {
				activate: "bool",
			},
			activate_deposits_delay: {
				activate: "bool",
			},
			activate_withdrawals_delay: {
				activate: "bool",
			},
			withdraw: {
				assetId: "u32",
				amount: "u128",
				beneficiary: "H160",
			},
			set_erc20_peg_address: {
				ethAddress: "H160",
			},
			set_root_peg_address: {
				ethAddress: "H160",
			},
			set_erc20_meta: {
				details: "Vec<(H160,Bytes,u8)>",
			},
			set_erc20_asset_map: {
				assetId: "u32",
				ethAddress: "H160",
			},
			set_payment_delay: {
				assetId: "u32",
				minBalance: "u128",
				delay: "u32",
			},
			claim_delayed_payment: {
				blockNumber: "u32",
				paymentId: "u64",
			},
		},
	},
	/**
	 * Lookup361: pallet_nft_peg::pallet::Call<T>
	 **/
	PalletNftPegCall: {
		_enum: {
			set_contract_address: {
				contract: "H160",
			},
			withdraw: {
				collectionIds: "Vec<u32>",
				serialNumbers: "Vec<Vec<u32>>",
				destination: "H160",
			},
			reclaim_blocked_nfts: {
				blockedMintId: "u32",
				destination: "H160",
			},
		},
	},
	/**
	 * Lookup366: pallet_proxy::pallet::Call<T>
	 **/
	PalletProxyCall: {
		_enum: {
			proxy: {
				real: "SeedPrimitivesSignatureAccountId20",
				forceProxyType: "Option<SeedRuntimeImplsProxyType>",
				call: "Call",
			},
			add_proxy: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				delay: "u32",
			},
			remove_proxy: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				delay: "u32",
			},
			remove_proxies: "Null",
			create_pure: {
				proxyType: "SeedRuntimeImplsProxyType",
				delay: "u32",
				index: "u16",
			},
			kill_pure: {
				spawner: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				index: "u16",
				height: "Compact<u32>",
				extIndex: "Compact<u32>",
			},
			announce: {
				real: "SeedPrimitivesSignatureAccountId20",
				callHash: "H256",
			},
			remove_announcement: {
				real: "SeedPrimitivesSignatureAccountId20",
				callHash: "H256",
			},
			reject_announcement: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				callHash: "H256",
			},
			proxy_announced: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				real: "SeedPrimitivesSignatureAccountId20",
				forceProxyType: "Option<SeedRuntimeImplsProxyType>",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup368: seed_runtime::impls::ProxyType
	 **/
	SeedRuntimeImplsProxyType: {
		_enum: [
			"NoPermission",
			"Any",
			"NonTransfer",
			"Governance",
			"Staking",
			"__Unused5",
			"__Unused6",
			"__Unused7",
			"__Unused8",
			"__Unused9",
			"__Unused10",
			"__Unused11",
			"__Unused12",
			"__Unused13",
			"__Unused14",
			"__Unused15",
			"__Unused16",
			"__Unused17",
			"__Unused18",
			"__Unused19",
			"__Unused20",
			"__Unused21",
			"__Unused22",
			"__Unused23",
			"__Unused24",
			"__Unused25",
			"__Unused26",
			"__Unused27",
			"__Unused28",
			"__Unused29",
			"__Unused30",
			"__Unused31",
			"__Unused32",
			"__Unused33",
			"__Unused34",
			"__Unused35",
			"__Unused36",
			"__Unused37",
			"__Unused38",
			"__Unused39",
			"__Unused40",
			"__Unused41",
			"__Unused42",
			"__Unused43",
			"__Unused44",
			"__Unused45",
			"__Unused46",
			"__Unused47",
			"__Unused48",
			"__Unused49",
			"__Unused50",
			"__Unused51",
			"__Unused52",
			"__Unused53",
			"__Unused54",
			"__Unused55",
			"__Unused56",
			"__Unused57",
			"__Unused58",
			"__Unused59",
			"__Unused60",
			"__Unused61",
			"__Unused62",
			"__Unused63",
			"__Unused64",
			"__Unused65",
			"__Unused66",
			"__Unused67",
			"__Unused68",
			"__Unused69",
			"__Unused70",
			"__Unused71",
			"__Unused72",
			"__Unused73",
			"__Unused74",
			"__Unused75",
			"__Unused76",
			"__Unused77",
			"__Unused78",
			"__Unused79",
			"__Unused80",
			"__Unused81",
			"__Unused82",
			"__Unused83",
			"__Unused84",
			"__Unused85",
			"__Unused86",
			"__Unused87",
			"__Unused88",
			"__Unused89",
			"__Unused90",
			"__Unused91",
			"__Unused92",
			"__Unused93",
			"__Unused94",
			"__Unused95",
			"__Unused96",
			"__Unused97",
			"__Unused98",
			"__Unused99",
			"__Unused100",
			"__Unused101",
			"__Unused102",
			"__Unused103",
			"__Unused104",
			"__Unused105",
			"__Unused106",
			"__Unused107",
			"__Unused108",
			"__Unused109",
			"__Unused110",
			"__Unused111",
			"__Unused112",
			"__Unused113",
			"__Unused114",
			"__Unused115",
			"__Unused116",
			"__Unused117",
			"__Unused118",
			"__Unused119",
			"__Unused120",
			"__Unused121",
			"__Unused122",
			"__Unused123",
			"__Unused124",
			"__Unused125",
			"__Unused126",
			"__Unused127",
			"__Unused128",
			"__Unused129",
			"__Unused130",
			"__Unused131",
			"__Unused132",
			"__Unused133",
			"__Unused134",
			"__Unused135",
			"__Unused136",
			"__Unused137",
			"__Unused138",
			"__Unused139",
			"__Unused140",
			"__Unused141",
			"__Unused142",
			"__Unused143",
			"__Unused144",
			"__Unused145",
			"__Unused146",
			"__Unused147",
			"__Unused148",
			"__Unused149",
			"__Unused150",
			"__Unused151",
			"__Unused152",
			"__Unused153",
			"__Unused154",
			"__Unused155",
			"__Unused156",
			"__Unused157",
			"__Unused158",
			"__Unused159",
			"__Unused160",
			"__Unused161",
			"__Unused162",
			"__Unused163",
			"__Unused164",
			"__Unused165",
			"__Unused166",
			"__Unused167",
			"__Unused168",
			"__Unused169",
			"__Unused170",
			"__Unused171",
			"__Unused172",
			"__Unused173",
			"__Unused174",
			"__Unused175",
			"__Unused176",
			"__Unused177",
			"__Unused178",
			"__Unused179",
			"__Unused180",
			"__Unused181",
			"__Unused182",
			"__Unused183",
			"__Unused184",
			"__Unused185",
			"__Unused186",
			"__Unused187",
			"__Unused188",
			"__Unused189",
			"__Unused190",
			"__Unused191",
			"__Unused192",
			"__Unused193",
			"__Unused194",
			"__Unused195",
			"__Unused196",
			"__Unused197",
			"__Unused198",
			"__Unused199",
			"__Unused200",
			"__Unused201",
			"__Unused202",
			"__Unused203",
			"__Unused204",
			"__Unused205",
			"__Unused206",
			"__Unused207",
			"__Unused208",
			"__Unused209",
			"__Unused210",
			"__Unused211",
			"__Unused212",
			"__Unused213",
			"__Unused214",
			"__Unused215",
			"__Unused216",
			"__Unused217",
			"__Unused218",
			"__Unused219",
			"__Unused220",
			"__Unused221",
			"__Unused222",
			"__Unused223",
			"__Unused224",
			"__Unused225",
			"__Unused226",
			"__Unused227",
			"__Unused228",
			"__Unused229",
			"__Unused230",
			"__Unused231",
			"__Unused232",
			"__Unused233",
			"__Unused234",
			"__Unused235",
			"__Unused236",
			"__Unused237",
			"__Unused238",
			"__Unused239",
			"__Unused240",
			"__Unused241",
			"__Unused242",
			"__Unused243",
			"__Unused244",
			"__Unused245",
			"__Unused246",
			"__Unused247",
			"__Unused248",
			"__Unused249",
			"__Unused250",
			"__Unused251",
			"__Unused252",
			"__Unused253",
			"__Unused254",
			"Owner",
		],
	},
	/**
	 * Lookup369: pallet_futurepass::pallet::Call<T>
	 **/
	PalletFuturepassCall: {
		_enum: {
			create: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			register_delegate_with_signature: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				deadline: "u32",
				signature: "[u8;65]",
			},
			unregister_delegate: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			transfer_futurepass: {
				currentOwner: "SeedPrimitivesSignatureAccountId20",
				newOwner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			proxy_extrinsic: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				call: "Call",
			},
		},
	},
	/**
	 * Lookup370: pallet_echo::pallet::Event
	 **/
	PalletEchoEvent: {
		_enum: {
			PingSent: {
				sessionId: "u64",
				source: "H160",
				destination: "H160",
				eventProofId: "u64",
			},
			PongReceived: {
				sessionId: "u64",
				source: "H160",
				data: "Bytes",
			},
			PingReceived: {
				sessionId: "u64",
				source: "H160",
				data: "Bytes",
			},
			PongSent: {
				sessionId: "u64",
				source: "H160",
				destination: "H160",
				eventProofId: "u64",
			},
		},
	},
	/**
	 * Lookup371: pallet_marketplace::pallet::Event<T>
	 **/
	PalletMarketplaceEvent: {
		_enum: {
			FixedPriceSaleList: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				price: "u128",
				paymentAsset: "u32",
				seller: "SeedPrimitivesSignatureAccountId20",
				close: "u32",
			},
			FixedPriceSaleComplete: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				price: "u128",
				paymentAsset: "u32",
				buyer: "SeedPrimitivesSignatureAccountId20",
				seller: "SeedPrimitivesSignatureAccountId20",
			},
			FixedPriceSaleClose: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				reason: "PalletMarketplaceFixedPriceClosureReason",
			},
			FixedPriceSalePriceUpdate: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				newPrice: "u128",
			},
			AuctionOpen: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				paymentAsset: "u32",
				reservePrice: "u128",
				seller: "SeedPrimitivesSignatureAccountId20",
				close: "u32",
			},
			AuctionSold: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				paymentAsset: "u32",
				hammerPrice: "u128",
				winner: "SeedPrimitivesSignatureAccountId20",
			},
			AuctionClose: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				reason: "PalletMarketplaceAuctionClosureReason",
			},
			Bid: {
				tokens: "PalletMarketplaceListingTokens",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				amount: "u128",
				bidder: "SeedPrimitivesSignatureAccountId20",
			},
			MarketplaceRegister: {
				account: "SeedPrimitivesSignatureAccountId20",
				entitlement: "Permill",
				marketplaceId: "u32",
			},
			Offer: {
				offerId: "u64",
				amount: "u128",
				assetId: "u32",
				marketplaceId: "Option<u32>",
				buyer: "SeedPrimitivesSignatureAccountId20",
			},
			OfferCancel: {
				offerId: "u64",
				marketplaceId: "Option<u32>",
				tokenId: "(u32,u32)",
			},
			OfferAccept: {
				offerId: "u64",
				marketplaceId: "Option<u32>",
				tokenId: "(u32,u32)",
				amount: "u128",
				assetId: "u32",
			},
			FeeToSet: {
				account: "Option<SeedPrimitivesSignatureAccountId20>",
			},
		},
	},
	/**
	 * Lookup372: pallet_marketplace::types::FixedPriceClosureReason
	 **/
	PalletMarketplaceFixedPriceClosureReason: {
		_enum: ["VendorCancelled", "Expired", "OfferAccepted"],
	},
	/**
	 * Lookup373: pallet_marketplace::types::AuctionClosureReason
	 **/
	PalletMarketplaceAuctionClosureReason: {
		_enum: ["ExpiredNoBids", "SettlementFailed", "VendorCancelled"],
	},
	/**
	 * Lookup374: pallet_preimage::pallet::Event<T>
	 **/
	PalletPreimageEvent: {
		_enum: {
			Noted: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
			Requested: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
			Cleared: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
		},
	},
	/**
	 * Lookup375: pallet_vortex_distribution::pallet::Event<T>
	 **/
	PalletVortexDistributionEvent: {
		_enum: {
			AdminAccountChanged: {
				oldKey: "Option<SeedPrimitivesSignatureAccountId20>",
				newKey: "SeedPrimitivesSignatureAccountId20",
			},
			VtxDistCreated: {
				id: "u32",
			},
			VtxDistDisabled: {
				id: "u32",
			},
			VtxDistDone: {
				id: "u32",
			},
			VtxDistPaidOut: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			VtxDistPayFailed: {
				id: "u32",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			VtxDistStarted: {
				id: "u32",
			},
			SetFeePotAssetBalances: {
				id: "u32",
				assetsBalances: "Vec<(u32,u128)>",
			},
			SetVtxVaultAssetBalances: {
				id: "u32",
				assetsBalances: "Vec<(u32,u128)>",
			},
			SetAssetPrices: {
				id: "u32",
				assetPrices: "Vec<(u32,u128)>",
			},
			VtxWorkPointRegistered: {
				id: "u32",
				workPoints: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			VtxRewardPointRegistered: {
				id: "u32",
				rewardPoints: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			VtxDistributionTriggered: {
				id: "u32",
			},
			VtxDistributionTriggering: {
				id: "u32",
			},
			SetVtxTotalSupply: {
				id: "u32",
				totalSupply: "u128",
			},
			SetConsiderCurrentBalance: {
				value: "bool",
			},
			SetDisableRedeem: {
				value: "bool",
			},
			SetVtxVaultRedeemAssetList: {
				assetList: "Vec<u32>",
			},
			VtxRedeemed: {
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			SetEnableManualRewardInput: {
				value: "bool",
			},
			RewardRegistered: {
				id: "u32",
				rewards: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
			},
			PivotStringTooLong: {
				id: "u32",
			},
		},
	},
	/**
	 * Lookup376: pallet_partner_attribution::pallet::Event<T>
	 **/
	PalletPartnerAttributionEvent: {
		_enum: {
			PartnerRegistered: {
				partnerId: "u128",
				partner: "PalletPartnerAttributionPartnerInformation",
			},
			PartnerUpdated: {
				partnerId: "u128",
				account: "SeedPrimitivesSignatureAccountId20",
			},
			PartnerRemoved: {
				partnerId: "u128",
				account: "SeedPrimitivesSignatureAccountId20",
			},
			PartnerUpgraded: {
				partnerId: "u128",
				account: "SeedPrimitivesSignatureAccountId20",
				feePercentage: "Permill",
			},
			AccountAttributed: {
				partnerId: "u128",
				account: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup377: pallet_partner_attribution::PartnerInformation<seed_primitives::signature::AccountId20>
	 **/
	PalletPartnerAttributionPartnerInformation: {
		owner: "SeedPrimitivesSignatureAccountId20",
		account: "SeedPrimitivesSignatureAccountId20",
		feePercentage: "Option<Permill>",
		accumulatedFees: "u128",
	},
	/**
	 * Lookup379: pallet_fee_proxy::pallet::Event<T>
	 **/
	PalletFeeProxyEvent: {
		_enum: {
			CallWithFeePreferences: {
				who: "SeedPrimitivesSignatureAccountId20",
				paymentAsset: "u32",
				maxPayment: "u128",
			},
		},
	},
	/**
	 * Lookup380: pallet_fee_control::pallet::Event<T>
	 **/
	PalletFeeControlEvent: {
		_enum: {
			EvmBaseFeeSet: {
				baseFee: "U256",
			},
			WeightMultiplierSet: {
				weightMultiplier: "Perbill",
			},
			LengthMultiplierSet: {
				lengthMultiplier: "u128",
			},
		},
	},
	/**
	 * Lookup381: pallet_xls20::pallet::Event<T>
	 **/
	PalletXls20Event: {
		_enum: {
			Xls20MintRequest: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				tokenUris: "Vec<Bytes>",
			},
			RelayerSet: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
			Xls20MintFeeSet: {
				newFee: "u128",
			},
			Xls20MappingSet: {
				collectionId: "u32",
				mappings: "Vec<(u32,[u8;32])>",
			},
			Xls20CollectionMappingsSet: {
				mappings: "Vec<(u32,PalletXls20Xls20Collection)>",
			},
			Xls20CompatibilityEnabled: {
				collectionId: "u32",
			},
			Xls20MintFeePaid: {
				collectionOwner: "SeedPrimitivesSignatureAccountId20",
				totalFee: "u128",
			},
		},
	},
	/**
	 * Lookup382: pallet_doughnut::pallet::Event<T>
	 **/
	PalletDoughnutEvent: {
		_enum: {
			DoughnutCallExecuted: {
				doughnut: "Bytes",
				call: "Call",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			WhitelistedHoldersUpdated: {
				holder: "SeedPrimitivesSignatureAccountId20",
				enabled: "bool",
			},
			DoughnutRevokeStateUpdated: {
				doughnutHash: "[u8;32]",
				revoked: "bool",
			},
			HolderRevokeStateUpdated: {
				issuer: "SeedPrimitivesSignatureAccountId20",
				holder: "SeedPrimitivesSignatureAccountId20",
				revoked: "bool",
			},
		},
	},
	/**
	 * Lookup383: pallet_maintenance_mode::pallet::Event<T>
	 **/
	PalletMaintenanceModeEvent: {
		_enum: {
			MaintenanceModeActivated: {
				enabled: "bool",
			},
			AccountBlocked: {
				account: "SeedPrimitivesSignatureAccountId20",
				blocked: "bool",
			},
			EVMTargetBlocked: {
				targetAddress: "H160",
				blocked: "bool",
			},
			CallBlocked: {
				palletName: "Bytes",
				callName: "Bytes",
				blocked: "bool",
			},
			PalletBlocked: {
				palletName: "Bytes",
				blocked: "bool",
			},
		},
	},
	/**
	 * Lookup384: pallet_crowdsale::pallet::Event<T>
	 **/
	PalletCrowdsaleEvent: {
		_enum: {
			CrowdsaleCreated: {
				saleId: "u64",
				info: "PalletCrowdsaleSaleInformation",
			},
			VaultCallProxied: {
				saleId: "u64",
				who: "SeedPrimitivesSignatureAccountId20",
				vault: "SeedPrimitivesSignatureAccountId20",
				call: "Call",
			},
			CrowdsaleEnabled: {
				saleId: "u64",
				info: "PalletCrowdsaleSaleInformation",
				endBlock: "u32",
			},
			CrowdsaleParticipated: {
				saleId: "u64",
				who: "SeedPrimitivesSignatureAccountId20",
				asset: "u32",
				amount: "u128",
			},
			CrowdsaleNFTRedeemed: {
				saleId: "u64",
				who: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				quantity: "u32",
			},
			CrowdsaleClosed: {
				saleId: "u64",
				info: "PalletCrowdsaleSaleInformation",
			},
			CrowdsaleManualDistribution: {
				saleId: "u64",
				info: "PalletCrowdsaleSaleInformation",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			CrowdsaleVouchersClaimed: {
				saleId: "u64",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
			},
			CrowdsaleDistributionComplete: {
				saleId: "u64",
				vouchersDistributed: "u128",
			},
		},
	},
	/**
	 * Lookup385: pallet_crowdsale::types::SaleInformation<seed_primitives::signature::AccountId20, BlockNumber>
	 **/
	PalletCrowdsaleSaleInformation: {
		status: "PalletCrowdsaleSaleStatus",
		admin: "SeedPrimitivesSignatureAccountId20",
		vault: "SeedPrimitivesSignatureAccountId20",
		paymentAssetId: "u32",
		rewardCollectionId: "u32",
		softCapPrice: "u128",
		fundsRaised: "u128",
		participantCount: "u64",
		voucherAssetId: "u32",
		duration: "u32",
	},
	/**
	 * Lookup386: pallet_crowdsale::types::SaleStatus<BlockNumber>
	 **/
	PalletCrowdsaleSaleStatus: {
		_enum: {
			Pending: "u32",
			Enabled: "u32",
			Distributing: "(u32,u128)",
			Ended: "u32",
			DistributionFailed: "u32",
		},
	},
	/**
	 * Lookup387: pallet_nfi::pallet::Event<T>
	 **/
	PalletNfiEvent: {
		_enum: {
			DataRequestNew: {
				subType: "PalletNfiNfiSubType",
				caller: "SeedPrimitivesSignatureAccountId20",
				tokenId: "PalletNfiMultiChainTokenId",
			},
			DataRequestExisting: {
				subType: "PalletNfiNfiSubType",
				caller: "SeedPrimitivesSignatureAccountId20",
				tokenId: "PalletNfiMultiChainTokenId",
			},
			DataSet: {
				subType: "PalletNfiNfiSubType",
				tokenId: "PalletNfiMultiChainTokenId",
				dataItem: "PalletNfiNfiDataType",
			},
			DataRemoved: {
				tokenId: "PalletNfiMultiChainTokenId",
			},
			FeeDetailsSet: {
				subType: "PalletNfiNfiSubType",
				feeDetails: "Option<PalletNfiFeeDetails>",
			},
			FeeToSet: {
				account: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			MintFeePaid: {
				subType: "PalletNfiNfiSubType",
				who: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				totalFee: "u128",
			},
			NfiEnabled: {
				subType: "PalletNfiNfiSubType",
				collectionId: "PalletNfiGenericCollectionId",
			},
			RelayerSet: {
				account: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup388: pallet_migration::pallet::Event
	 **/
	PalletMigrationEvent: {
		_enum: {
			MigrationRuntimeUpgrade: "Null",
			MigrationEnabled: "Null",
			MigrationDisabled: "Null",
			MigrationComplete: {
				itemsMigrated: "u32",
			},
			MigrationSet: "Null",
			BlockDelaySet: {
				blockDelay: "Option<u32>",
			},
			BlockLimitSet: {
				blockLimit: "u32",
			},
		},
	},
	/**
	 * Lookup389: pallet_sylo_data_verification::pallet::Event<T>
	 **/
	PalletSyloDataVerificationEvent: {
		_enum: {
			PaymentAssetSet: {
				assetId: "u32",
			},
			SyloResolverMethodSet: {
				method: "Bytes",
			},
			ResolverRegistered: {
				id: "Bytes",
				controller: "SeedPrimitivesSignatureAccountId20",
				serviceEndpoints: "Vec<Bytes>",
			},
			ResolverUpdated: {
				id: "Bytes",
				controller: "SeedPrimitivesSignatureAccountId20",
				serviceEndpoints: "Vec<Bytes>",
			},
			ResolverDeregistered: {
				id: "Bytes",
			},
			ValidationRecordCreated: {
				author: "SeedPrimitivesSignatureAccountId20",
				id: "Bytes",
			},
			ValidationEntryAdded: {
				author: "SeedPrimitivesSignatureAccountId20",
				id: "Bytes",
				checksum: "H256",
			},
			ValidationRecordUpdated: {
				author: "SeedPrimitivesSignatureAccountId20",
				id: "Bytes",
				resolvers: "Option<Vec<Bytes>>",
				dataType: "Option<Bytes>",
				tags: "Option<Vec<Bytes>>",
			},
			ValidationRecordDeleted: {
				author: "SeedPrimitivesSignatureAccountId20",
				id: "Bytes",
			},
		},
	},
	/**
	 * Lookup392: pallet_liquidity_pools::pallet::Event<T>
	 **/
	PalletLiquidityPoolsEvent: {
		_enum: {
			PoolOpen: {
				poolId: "u32",
				rewardAssetId: "u32",
				stakedAssetId: "u32",
				interestRate: "u32",
				maxTokens: "u128",
				lockStartBlock: "u32",
				lockEndBlock: "u32",
			},
			PoolStarted: {
				poolId: "u32",
			},
			PoolRenewing: {
				poolId: "u32",
			},
			PoolMatured: {
				poolId: "u32",
			},
			PoolClosed: {
				poolId: "u32",
				rewardAssetAmount: "u128",
				stakedAssetAmount: "u128",
				receiver: "SeedPrimitivesSignatureAccountId20",
			},
			SetSuccession: {
				predecessorPoolId: "u32",
				successorPoolId: "u32",
			},
			UserInfoUpdated: {
				poolId: "u32",
				accountId: "SeedPrimitivesSignatureAccountId20",
				shouldRollover: "bool",
			},
			UserJoined: {
				accountId: "SeedPrimitivesSignatureAccountId20",
				poolId: "u32",
				amount: "u128",
			},
			UserExited: {
				accountId: "SeedPrimitivesSignatureAccountId20",
				poolId: "u32",
				amount: "u128",
			},
			UserRolledOver: {
				accountId: "SeedPrimitivesSignatureAccountId20",
				poolId: "u32",
				rolledToPoolId: "u32",
				amount: "u128",
			},
			RewardsClaimed: {
				accountId: "SeedPrimitivesSignatureAccountId20",
				poolId: "u32",
				amount: "u128",
			},
		},
	},
	/**
	 * Lookup393: pallet_sylo_data_permissions::pallet::Event<T>
	 **/
	PalletSyloDataPermissionsEvent: {
		_enum: {
			DataPermissionGranted: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				dataId: "Bytes",
				permission: "SeedPalletCommonSyloDataPermission",
				expiry: "Option<u32>",
				irrevocable: "bool",
			},
			DataPermissionRevoked: {
				revoker: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permission: "SeedPalletCommonSyloDataPermission",
				dataId: "Bytes",
			},
			TaggedDataPermissionsGranted: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permission: "SeedPalletCommonSyloDataPermission",
				tags: "Vec<Bytes>",
				expiry: "Option<u32>",
				irrevocable: "bool",
			},
			TaggedDataPermissionsRevoked: {
				revoker: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permission: "SeedPalletCommonSyloDataPermission",
				tags: "Vec<Bytes>",
			},
			PermissionReferenceGranted: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permissionRecordId: "Bytes",
			},
			PermissionReferenceRevoked: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permissionRecordId: "Bytes",
			},
			ExpiredDataPermissionRemoved: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				dataId: "Bytes",
				permissionId: "u32",
			},
			ExpiredTaggedPermissionRemoved: {
				dataAuthor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				permissionId: "u32",
			},
		},
	},
	/**
	 * Lookup394: pallet_sylo_action_permissions::pallet::Event<T>
	 **/
	PalletSyloActionPermissionsEvent: {
		_enum: {
			TransactPermissionGranted: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				spender: "PalletSyloActionPermissionsSpender",
				spendingBalance: "Option<u128>",
				allowedCalls: "Vec<(Bytes,Bytes)>",
				expiry: "Option<u32>",
			},
			PermissionTransactExecuted: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
			},
			TransactPermissionUpdated: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
				spender: "PalletSyloActionPermissionsSpender",
				spendingBalance: "Option<u128>",
				allowedCalls: "Vec<(Bytes,Bytes)>",
				expiry: "Option<u32>",
			},
			TransactPermissionRevoked: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
			},
			TransactPermissionAccepted: {
				grantor: "SeedPrimitivesSignatureAccountId20",
				grantee: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup395: pallet_election_provider_multi_phase::pallet::Event<T>
	 **/
	PalletElectionProviderMultiPhaseEvent: {
		_enum: {
			SolutionStored: {
				compute: "PalletElectionProviderMultiPhaseElectionCompute",
				origin: "Option<SeedPrimitivesSignatureAccountId20>",
				prevEjected: "bool",
			},
			ElectionFinalized: {
				compute: "PalletElectionProviderMultiPhaseElectionCompute",
				score: "SpNposElectionsElectionScore",
			},
			ElectionFailed: "Null",
			Rewarded: {
				account: "SeedPrimitivesSignatureAccountId20",
				value: "u128",
			},
			Slashed: {
				account: "SeedPrimitivesSignatureAccountId20",
				value: "u128",
			},
			PhaseTransitioned: {
				from: "PalletElectionProviderMultiPhasePhase",
				to: "PalletElectionProviderMultiPhasePhase",
				round: "u32",
			},
		},
	},
	/**
	 * Lookup396: pallet_election_provider_multi_phase::ElectionCompute
	 **/
	PalletElectionProviderMultiPhaseElectionCompute: {
		_enum: ["OnChain", "Signed", "Unsigned", "Fallback", "Emergency"],
	},
	/**
	 * Lookup397: pallet_election_provider_multi_phase::Phase<Bn>
	 **/
	PalletElectionProviderMultiPhasePhase: {
		_enum: {
			Off: "Null",
			Signed: "Null",
			Unsigned: "(bool,u32)",
			Emergency: "Null",
		},
	},
	/**
	 * Lookup399: pallet_bags_list::pallet::Event<T, I>
	 **/
	PalletBagsListEvent: {
		_enum: {
			Rebagged: {
				who: "SeedPrimitivesSignatureAccountId20",
				from: "u64",
				to: "u64",
			},
			ScoreUpdated: {
				who: "SeedPrimitivesSignatureAccountId20",
				newScore: "u64",
			},
		},
	},
	/**
	 * Lookup400: pallet_ethereum::pallet::Event
	 **/
	PalletEthereumEvent: {
		_enum: {
			Executed: {
				from: "H160",
				to: "H160",
				transactionHash: "H256",
				exitReason: "EvmCoreErrorExitReason",
				extraData: "Bytes",
			},
		},
	},
	/**
	 * Lookup401: evm_core::error::ExitReason
	 **/
	EvmCoreErrorExitReason: {
		_enum: {
			Succeed: "EvmCoreErrorExitSucceed",
			Error: "EvmCoreErrorExitError",
			Revert: "EvmCoreErrorExitRevert",
			Fatal: "EvmCoreErrorExitFatal",
		},
	},
	/**
	 * Lookup402: evm_core::error::ExitSucceed
	 **/
	EvmCoreErrorExitSucceed: {
		_enum: ["Stopped", "Returned", "Suicided"],
	},
	/**
	 * Lookup403: evm_core::error::ExitError
	 **/
	EvmCoreErrorExitError: {
		_enum: {
			StackUnderflow: "Null",
			StackOverflow: "Null",
			InvalidJump: "Null",
			InvalidRange: "Null",
			DesignatedInvalid: "Null",
			CallTooDeep: "Null",
			CreateCollision: "Null",
			CreateContractLimit: "Null",
			OutOfOffset: "Null",
			OutOfGas: "Null",
			OutOfFund: "Null",
			PCUnderflow: "Null",
			CreateEmpty: "Null",
			Other: "Text",
			MaxNonce: "Null",
			InvalidCode: "u8",
		},
	},
	/**
	 * Lookup406: evm_core::error::ExitRevert
	 **/
	EvmCoreErrorExitRevert: {
		_enum: ["Reverted"],
	},
	/**
	 * Lookup407: evm_core::error::ExitFatal
	 **/
	EvmCoreErrorExitFatal: {
		_enum: {
			NotSupported: "Null",
			UnhandledInterrupt: "Null",
			CallErrorAsFatal: "EvmCoreErrorExitError",
			Other: "Text",
		},
	},
	/**
	 * Lookup408: pallet_evm::pallet::Event<T>
	 **/
	PalletEvmEvent: {
		_enum: {
			Log: {
				log: "EthereumLog",
			},
			Created: {
				address: "H160",
			},
			CreatedFailed: {
				address: "H160",
			},
			Executed: {
				address: "H160",
			},
			ExecutedFailed: {
				address: "H160",
			},
		},
	},
	/**
	 * Lookup409: ethereum::log::Log
	 **/
	EthereumLog: {
		address: "H160",
		topics: "Vec<H256>",
		data: "Bytes",
	},
	/**
	 * Lookup410: pallet_evm_chain_id::pallet::Event<T>
	 **/
	PalletEvmChainIdEvent: {
		_enum: {
			ChainIdSet: "u64",
		},
	},
	/**
	 * Lookup411: pallet_ethy::pallet::Event<T>
	 **/
	PalletEthyEvent: {
		_enum: {
			Verified: {
				eventClaimId: "u64",
			},
			Invalid: {
				eventClaimId: "u64",
			},
			AuthoritySetChange: {
				eventProofId: "u64",
				validatorSetId: "u64",
			},
			XrplAuthoritySetChange: {
				eventProofIds: "Vec<u64>",
				validatorSetId: "u64",
			},
			ProofDelayed: {
				eventProofId: "u64",
			},
			ProcessingOk: {
				eventClaimId: "u64",
			},
			ProcessingFailed: {
				eventClaimId: "u64",
				routerError: "SeedPalletCommonEventRouterError",
			},
			Challenged: {
				eventClaimId: "u64",
				challenger: "SeedPrimitivesSignatureAccountId20",
			},
			ProcessAtExtended: {
				eventClaimId: "u64",
				processAt: "u32",
			},
			EventSend: {
				eventProofId: "u64",
				signingRequest: "PalletEthyEthySigningRequest",
			},
			EventSubmit: {
				eventClaimId: "u64",
				eventClaim: "PalletEthyEventClaim",
				processAt: "u32",
			},
			RelayerBondDeposit: {
				relayer: "SeedPrimitivesSignatureAccountId20",
				bond: "u128",
			},
			RelayerBondWithdraw: {
				relayer: "SeedPrimitivesSignatureAccountId20",
				bond: "u128",
			},
			RelayerSet: {
				relayer: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			XrplDoorSignersSet: {
				newSigners: "Vec<(SeedPrimitivesEthyCryptoAppCryptoPublic,bool)>",
			},
			FinaliseScheduleFail: {
				scheduledBlock: "u32",
			},
			SetContractAddress: {
				address: "H160",
			},
			XrplAuthoritySetChangeRequestFailed: {
				error: "SpRuntimeDispatchError",
			},
			EventBlockConfirmationsSet: {
				confirmations: "u64",
			},
			DelayedEventProofsPerBlockSet: {
				count: "u8",
			},
			ChallengePeriodSet: {
				period: "u32",
			},
			BridgeManualPause: {
				paused: "bool",
			},
			MissingEventIdsRemoved: {
				range: "(u64,u64)",
			},
		},
	},
	/**
	 * Lookup413: seed_pallet_common::EventRouterError
	 **/
	SeedPalletCommonEventRouterError: {
		_enum: {
			FailedProcessing: "SpRuntimeDispatchError",
			NoReceiver: "Null",
		},
	},
	/**
	 * Lookup414: pallet_ethy::types::EthySigningRequest<MaxEthData>
	 **/
	PalletEthyEthySigningRequest: {
		_enum: {
			Ethereum: "PalletEthyEthereumEventInfo",
			XrplTx: "Bytes",
		},
	},
	/**
	 * Lookup415: pallet_ethy::types::EthereumEventInfo<MaxEthData>
	 **/
	PalletEthyEthereumEventInfo: {
		source: "H160",
		destination: "H160",
		message: "Bytes",
		validatorSetId: "u64",
		eventProofId: "u64",
	},
	/**
	 * Lookup417: pallet_ethy::types::EventClaim<MaxEthData>
	 **/
	PalletEthyEventClaim: {
		txHash: "H256",
		source: "H160",
		destination: "H160",
		data: "Bytes",
	},
	/**
	 * Lookup418: pallet_erc20_peg::pallet::Event<T>
	 **/
	PalletErc20PegEvent: {
		_enum: {
			Erc20DepositDelayed: {
				paymentId: "u64",
				scheduledBlock: "u32",
				amount: "u128",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
			},
			Erc20WithdrawalDelayed: {
				paymentId: "u64",
				scheduledBlock: "u32",
				amount: "u128",
				beneficiary: "H160",
				assetId: "u32",
				source: "SeedPrimitivesSignatureAccountId20",
			},
			Erc20DelayFailed: {
				paymentId: "u64",
				scheduledBlock: "u32",
				assetId: "u32",
				source: "SeedPrimitivesSignatureAccountId20",
			},
			DelayedErc20DepositFailed: {
				paymentId: "u64",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
			},
			DelayedErc20WithdrawalFailed: {
				assetId: "u32",
				beneficiary: "H160",
			},
			Erc20Deposit: {
				assetId: "u32",
				amount: "u128",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
			},
			Erc20Withdraw: {
				assetId: "u32",
				amount: "u128",
				beneficiary: "H160",
				source: "SeedPrimitivesSignatureAccountId20",
			},
			Erc20DepositFail: {
				source: "H160",
				abiData: "Bytes",
			},
			SetContractAddress: {
				address: "H160",
			},
			SetRootPegContract: {
				address: "H160",
			},
			PaymentDelaySet: {
				assetId: "u32",
				minBalance: "u128",
				delay: "u32",
			},
			NoAvailableDelayedPaymentIds: "Null",
			ActivateDepositDelay: {
				active: "bool",
			},
			ActivateWithdrawalDelay: {
				active: "bool",
			},
			ActivateDeposits: {
				active: "bool",
			},
			ActivateWithdrawals: {
				active: "bool",
			},
		},
	},
	/**
	 * Lookup419: pallet_nft_peg::pallet::Event<T>
	 **/
	PalletNftPegEvent: {
		_enum: {
			Erc721Deposit: {
				destination: "SeedPrimitivesSignatureAccountId20",
			},
			Erc721Mint: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			ERC721Blocked: {
				blockedMintId: "u32",
				destinationAddress: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
			},
			Erc721Withdraw: {
				origin: "SeedPrimitivesSignatureAccountId20",
				collectionIds: "Vec<u32>",
				serialNumbers: "Vec<Vec<u32>>",
				destination: "H160",
			},
			ContractAddressSet: {
				contract: "H160",
			},
		},
	},
	/**
	 * Lookup421: pallet_proxy::pallet::Event<T>
	 **/
	PalletProxyEvent: {
		_enum: {
			ProxyExecuted: {
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			PureCreated: {
				pure: "SeedPrimitivesSignatureAccountId20",
				who: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				disambiguationIndex: "u16",
			},
			Announced: {
				real: "SeedPrimitivesSignatureAccountId20",
				proxy: "SeedPrimitivesSignatureAccountId20",
				callHash: "H256",
			},
			ProxyAdded: {
				delegator: "SeedPrimitivesSignatureAccountId20",
				delegatee: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				delay: "u32",
			},
			ProxyRemoved: {
				delegator: "SeedPrimitivesSignatureAccountId20",
				delegatee: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
				delay: "u32",
			},
		},
	},
	/**
	 * Lookup422: pallet_futurepass::pallet::Event<T>
	 **/
	PalletFuturepassEvent: {
		_enum: {
			FuturepassCreated: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			DelegateRegistered: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
				proxyType: "SeedRuntimeImplsProxyType",
			},
			DelegateUnregistered: {
				futurepass: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			FuturepassTransferred: {
				oldOwner: "SeedPrimitivesSignatureAccountId20",
				newOwner: "Option<SeedPrimitivesSignatureAccountId20>",
				futurepass: "SeedPrimitivesSignatureAccountId20",
			},
			ProxyExecuted: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
		},
	},
	/**
	 * Lookup423: frame_system::Phase
	 **/
	FrameSystemPhase: {
		_enum: {
			ApplyExtrinsic: "u32",
			Finalization: "Null",
			Initialization: "Null",
		},
	},
	/**
	 * Lookup425: frame_system::LastRuntimeUpgradeInfo
	 **/
	FrameSystemLastRuntimeUpgradeInfo: {
		specVersion: "Compact<u32>",
		specName: "Text",
	},
	/**
	 * Lookup426: frame_system::limits::BlockWeights
	 **/
	FrameSystemLimitsBlockWeights: {
		baseBlock: "SpWeightsWeightV2Weight",
		maxBlock: "SpWeightsWeightV2Weight",
		perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
	},
	/**
	 * Lookup427: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
	 **/
	FrameSupportDispatchPerDispatchClassWeightsPerClass: {
		normal: "FrameSystemLimitsWeightsPerClass",
		operational: "FrameSystemLimitsWeightsPerClass",
		mandatory: "FrameSystemLimitsWeightsPerClass",
	},
	/**
	 * Lookup428: frame_system::limits::WeightsPerClass
	 **/
	FrameSystemLimitsWeightsPerClass: {
		baseExtrinsic: "SpWeightsWeightV2Weight",
		maxExtrinsic: "Option<SpWeightsWeightV2Weight>",
		maxTotal: "Option<SpWeightsWeightV2Weight>",
		reserved: "Option<SpWeightsWeightV2Weight>",
	},
	/**
	 * Lookup430: frame_system::limits::BlockLength
	 **/
	FrameSystemLimitsBlockLength: {
		max: "FrameSupportDispatchPerDispatchClassU32",
	},
	/**
	 * Lookup431: frame_support::dispatch::PerDispatchClass<T>
	 **/
	FrameSupportDispatchPerDispatchClassU32: {
		normal: "u32",
		operational: "u32",
		mandatory: "u32",
	},
	/**
	 * Lookup432: sp_weights::RuntimeDbWeight
	 **/
	SpWeightsRuntimeDbWeight: {
		read: "u64",
		write: "u64",
	},
	/**
	 * Lookup433: sp_version::RuntimeVersion
	 **/
	SpVersionRuntimeVersion: {
		specName: "Text",
		implName: "Text",
		authoringVersion: "u32",
		specVersion: "u32",
		implVersion: "u32",
		apis: "Vec<([u8;8],u32)>",
		transactionVersion: "u32",
		stateVersion: "u8",
	},
	/**
	 * Lookup437: frame_system::pallet::Error<T>
	 **/
	FrameSystemError: {
		_enum: [
			"InvalidSpecName",
			"SpecVersionNeedsToIncrease",
			"FailedToExtractRuntimeVersion",
			"NonDefaultComposite",
			"NonZeroRefCount",
			"CallFiltered",
		],
	},
	/**
	 * Lookup444: sp_consensus_babe::digests::PreDigest
	 **/
	SpConsensusBabeDigestsPreDigest: {
		_enum: {
			__Unused0: "Null",
			Primary: "SpConsensusBabeDigestsPrimaryPreDigest",
			SecondaryPlain: "SpConsensusBabeDigestsSecondaryPlainPreDigest",
			SecondaryVRF: "SpConsensusBabeDigestsSecondaryVRFPreDigest",
		},
	},
	/**
	 * Lookup445: sp_consensus_babe::digests::PrimaryPreDigest
	 **/
	SpConsensusBabeDigestsPrimaryPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
		vrfSignature: "SpCoreSr25519VrfVrfSignature",
	},
	/**
	 * Lookup446: sp_core::sr25519::vrf::VrfSignature
	 **/
	SpCoreSr25519VrfVrfSignature: {
		output: "[u8;32]",
		proof: "[u8;64]",
	},
	/**
	 * Lookup447: sp_consensus_babe::digests::SecondaryPlainPreDigest
	 **/
	SpConsensusBabeDigestsSecondaryPlainPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
	},
	/**
	 * Lookup448: sp_consensus_babe::digests::SecondaryVRFPreDigest
	 **/
	SpConsensusBabeDigestsSecondaryVRFPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
		vrfSignature: "SpCoreSr25519VrfVrfSignature",
	},
	/**
	 * Lookup449: sp_consensus_babe::BabeEpochConfiguration
	 **/
	SpConsensusBabeBabeEpochConfiguration: {
		c: "(u64,u64)",
		allowedSlots: "SpConsensusBabeAllowedSlots",
	},
	/**
	 * Lookup453: pallet_babe::pallet::Error<T>
	 **/
	PalletBabeError: {
		_enum: [
			"InvalidEquivocationProof",
			"InvalidKeyOwnershipProof",
			"DuplicateOffenceReport",
			"InvalidConfiguration",
		],
	},
	/**
	 * Lookup456: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<seed_runtime::RuntimeCall>, BlockNumber, seed_runtime::OriginCaller, seed_primitives::signature::AccountId20>
	 **/
	PalletSchedulerScheduled: {
		maybeId: "Option<[u8;32]>",
		priority: "u8",
		call: "FrameSupportPreimagesBounded",
		maybePeriodic: "Option<(u32,u32)>",
		origin: "SeedRuntimeOriginCaller",
	},
	/**
	 * Lookup457: frame_support::traits::preimages::Bounded<seed_runtime::RuntimeCall>
	 **/
	FrameSupportPreimagesBounded: {
		_enum: {
			Legacy: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
			},
			Inline: "Bytes",
			Lookup: {
				_alias: {
					hash_: "hash",
				},
				hash_: "H256",
				len: "u32",
			},
		},
	},
	/**
	 * Lookup460: pallet_scheduler::pallet::Error<T>
	 **/
	PalletSchedulerError: {
		_enum: [
			"FailedToSchedule",
			"NotFound",
			"TargetBlockNumberInPast",
			"RescheduleNoChange",
			"Named",
		],
	},
	/**
	 * Lookup461: pallet_utility::pallet::Error<T>
	 **/
	PalletUtilityError: {
		_enum: ["TooManyCalls"],
	},
	/**
	 * Lookup462: pallet_recovery::RecoveryConfig<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<seed_primitives::signature::AccountId20, S>>
	 **/
	PalletRecoveryRecoveryConfig: {
		delayPeriod: "u32",
		deposit: "u128",
		friends: "Vec<SeedPrimitivesSignatureAccountId20>",
		threshold: "u16",
	},
	/**
	 * Lookup465: pallet_recovery::ActiveRecovery<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<seed_primitives::signature::AccountId20, S>>
	 **/
	PalletRecoveryActiveRecovery: {
		created: "u32",
		deposit: "u128",
		friends: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup466: pallet_recovery::pallet::Error<T>
	 **/
	PalletRecoveryError: {
		_enum: [
			"NotAllowed",
			"ZeroThreshold",
			"NotEnoughFriends",
			"MaxFriends",
			"NotSorted",
			"NotRecoverable",
			"AlreadyRecoverable",
			"AlreadyStarted",
			"NotStarted",
			"NotFriend",
			"DelayPeriod",
			"AlreadyVouched",
			"Threshold",
			"StillActive",
			"AlreadyProxy",
			"BadState",
		],
	},
	/**
	 * Lookup468: pallet_multisig::Multisig<BlockNumber, Balance, seed_primitives::signature::AccountId20, MaxApprovals>
	 **/
	PalletMultisigMultisig: {
		when: "PalletMultisigTimepoint",
		deposit: "u128",
		depositor: "SeedPrimitivesSignatureAccountId20",
		approvals: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup470: pallet_multisig::pallet::Error<T>
	 **/
	PalletMultisigError: {
		_enum: [
			"MinimumThreshold",
			"AlreadyApproved",
			"NoApprovalsNeeded",
			"TooFewSignatories",
			"TooManySignatories",
			"SignatoriesOutOfOrder",
			"SenderInSignatories",
			"NotFound",
			"NotOwner",
			"NoTimepoint",
			"WrongTimepoint",
			"UnexpectedTimepoint",
			"MaxWeightTooLow",
			"AlreadyStored",
		],
	},
	/**
	 * Lookup472: pallet_balances::types::BalanceLock<Balance>
	 **/
	PalletBalancesBalanceLock: {
		id: "[u8;8]",
		amount: "u128",
		reasons: "PalletBalancesReasons",
	},
	/**
	 * Lookup473: pallet_balances::types::Reasons
	 **/
	PalletBalancesReasons: {
		_enum: ["Fee", "Misc", "All"],
	},
	/**
	 * Lookup476: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
	 **/
	PalletBalancesReserveData: {
		id: "[u8;8]",
		amount: "u128",
	},
	/**
	 * Lookup479: pallet_balances::types::IdAmount<Id, Balance>
	 **/
	PalletBalancesIdAmount: {
		id: "Null",
		amount: "u128",
	},
	/**
	 * Lookup481: pallet_balances::pallet::Error<T, I>
	 **/
	PalletBalancesError: {
		_enum: [
			"VestingBalance",
			"LiquidityRestrictions",
			"InsufficientBalance",
			"ExistentialDeposit",
			"Expendability",
			"ExistingVestingSchedule",
			"DeadAccount",
			"TooManyReserves",
			"TooManyHolds",
			"TooManyFreezes",
		],
	},
	/**
	 * Lookup482: pallet_assets::types::AssetDetails<Balance, seed_primitives::signature::AccountId20, DepositBalance>
	 **/
	PalletAssetsAssetDetails: {
		owner: "SeedPrimitivesSignatureAccountId20",
		issuer: "SeedPrimitivesSignatureAccountId20",
		admin: "SeedPrimitivesSignatureAccountId20",
		freezer: "SeedPrimitivesSignatureAccountId20",
		supply: "u128",
		deposit: "u128",
		minBalance: "u128",
		isSufficient: "bool",
		accounts: "u32",
		sufficients: "u32",
		approvals: "u32",
		status: "PalletAssetsAssetStatus",
	},
	/**
	 * Lookup483: pallet_assets::types::AssetStatus
	 **/
	PalletAssetsAssetStatus: {
		_enum: ["Live", "Frozen", "Destroying"],
	},
	/**
	 * Lookup485: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, seed_primitives::signature::AccountId20>
	 **/
	PalletAssetsAssetAccount: {
		balance: "u128",
		status: "PalletAssetsAccountStatus",
		reason: "PalletAssetsExistenceReason",
		extra: "Null",
	},
	/**
	 * Lookup486: pallet_assets::types::AccountStatus
	 **/
	PalletAssetsAccountStatus: {
		_enum: ["Liquid", "Frozen", "Blocked"],
	},
	/**
	 * Lookup487: pallet_assets::types::ExistenceReason<Balance, seed_primitives::signature::AccountId20>
	 **/
	PalletAssetsExistenceReason: {
		_enum: {
			Consumer: "Null",
			Sufficient: "Null",
			DepositHeld: "u128",
			DepositRefunded: "Null",
			DepositFrom: "(SeedPrimitivesSignatureAccountId20,u128)",
		},
	},
	/**
	 * Lookup489: pallet_assets::types::Approval<Balance, DepositBalance>
	 **/
	PalletAssetsApproval: {
		amount: "u128",
		deposit: "u128",
	},
	/**
	 * Lookup490: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
	 **/
	PalletAssetsAssetMetadata: {
		deposit: "u128",
		name: "Bytes",
		symbol: "Bytes",
		decimals: "u8",
		isFrozen: "bool",
	},
	/**
	 * Lookup491: pallet_assets::pallet::Error<T, I>
	 **/
	PalletAssetsError: {
		_enum: [
			"BalanceLow",
			"NoAccount",
			"NoPermission",
			"Unknown",
			"Frozen",
			"InUse",
			"BadWitness",
			"MinBalanceZero",
			"UnavailableConsumer",
			"BadMetadata",
			"Unapproved",
			"WouldDie",
			"AlreadyExists",
			"NoDeposit",
			"WouldBurn",
			"LiveAsset",
			"AssetNotLive",
			"IncorrectStatus",
			"NotFrozen",
			"CallbackFailed",
		],
	},
	/**
	 * Lookup495: frame_support::PalletId
	 **/
	FrameSupportPalletId: "[u8;8]",
	/**
	 * Lookup496: pallet_assets_ext::pallet::Error<T>
	 **/
	PalletAssetsExtError: {
		_enum: [
			"DecimalsTooHigh",
			"NoAvailableIds",
			"NoPermission",
			"BalanceLow",
			"NoAccount",
			"Overflow",
			"MaxHolds",
			"CreateAssetFailed",
		],
	},
	/**
	 * Lookup497: pallet_staking::StakingLedger<T>
	 **/
	PalletStakingStakingLedger: {
		stash: "SeedPrimitivesSignatureAccountId20",
		total: "Compact<u128>",
		active: "Compact<u128>",
		unlocking: "Vec<PalletStakingUnlockChunk>",
		claimedRewards: "Vec<u32>",
	},
	/**
	 * Lookup499: pallet_staking::UnlockChunk<Balance>
	 **/
	PalletStakingUnlockChunk: {
		value: "Compact<u128>",
		era: "Compact<u32>",
	},
	/**
	 * Lookup502: pallet_staking::Nominations<T>
	 **/
	PalletStakingNominations: {
		targets: "Vec<SeedPrimitivesSignatureAccountId20>",
		submittedIn: "u32",
		suppressed: "bool",
	},
	/**
	 * Lookup504: pallet_staking::ActiveEraInfo
	 **/
	PalletStakingActiveEraInfo: {
		index: "u32",
		start: "Option<u64>",
	},
	/**
	 * Lookup506: pallet_staking::EraRewardPoints<seed_primitives::signature::AccountId20>
	 **/
	PalletStakingEraRewardPoints: {
		total: "u32",
		individual: "BTreeMap<SeedPrimitivesSignatureAccountId20, u32>",
	},
	/**
	 * Lookup511: pallet_staking::UnappliedSlash<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingUnappliedSlash: {
		validator: "SeedPrimitivesSignatureAccountId20",
		own: "u128",
		others: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
		reporters: "Vec<SeedPrimitivesSignatureAccountId20>",
		payout: "u128",
	},
	/**
	 * Lookup513: pallet_staking::slashing::SlashingSpans
	 **/
	PalletStakingSlashingSlashingSpans: {
		spanIndex: "u32",
		lastStart: "u32",
		lastNonzeroSlash: "u32",
		prior: "Vec<u32>",
	},
	/**
	 * Lookup514: pallet_staking::slashing::SpanRecord<Balance>
	 **/
	PalletStakingSlashingSpanRecord: {
		slashed: "u128",
		paidOut: "u128",
	},
	/**
	 * Lookup517: pallet_staking::pallet::pallet::Error<T>
	 **/
	PalletStakingPalletError: {
		_enum: [
			"NotController",
			"NotStash",
			"AlreadyBonded",
			"AlreadyPaired",
			"EmptyTargets",
			"DuplicateIndex",
			"InvalidSlashIndex",
			"InsufficientBond",
			"NoMoreChunks",
			"NoUnlockChunk",
			"FundedTarget",
			"InvalidEraToReward",
			"InvalidNumberOfNominations",
			"NotSortedAndUnique",
			"AlreadyClaimed",
			"IncorrectHistoryDepth",
			"IncorrectSlashingSpans",
			"BadState",
			"TooManyTargets",
			"BadTarget",
			"CannotChillOther",
			"TooManyNominators",
			"TooManyValidators",
			"CommissionTooLow",
			"BoundNotMet",
		],
	},
	/**
	 * Lookup518: sp_staking::offence::OffenceDetails<seed_primitives::signature::AccountId20, Offender>
	 **/
	SpStakingOffenceOffenceDetails: {
		offender: "(SeedPrimitivesSignatureAccountId20,PalletStakingExposure)",
		reporters: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup523: sp_core::crypto::KeyTypeId
	 **/
	SpCoreCryptoKeyTypeId: "[u8;4]",
	/**
	 * Lookup524: pallet_session::pallet::Error<T>
	 **/
	PalletSessionError: {
		_enum: ["InvalidProof", "NoAssociatedValidatorId", "DuplicatedKey", "NoKeys", "NoAccount"],
	},
	/**
	 * Lookup525: pallet_grandpa::StoredState<N>
	 **/
	PalletGrandpaStoredState: {
		_enum: {
			Live: "Null",
			PendingPause: {
				scheduledAt: "u32",
				delay: "u32",
			},
			Paused: "Null",
			PendingResume: {
				scheduledAt: "u32",
				delay: "u32",
			},
		},
	},
	/**
	 * Lookup526: pallet_grandpa::StoredPendingChange<N, Limit>
	 **/
	PalletGrandpaStoredPendingChange: {
		scheduledAt: "u32",
		delay: "u32",
		nextAuthorities: "Vec<(SpConsensusGrandpaAppPublic,u64)>",
		forced: "Option<u32>",
	},
	/**
	 * Lookup528: pallet_grandpa::pallet::Error<T>
	 **/
	PalletGrandpaError: {
		_enum: [
			"PauseFailed",
			"ResumeFailed",
			"ChangePending",
			"TooSoon",
			"InvalidKeyOwnershipProof",
			"InvalidEquivocationProof",
			"DuplicateOffenceReport",
		],
	},
	/**
	 * Lookup531: pallet_im_online::pallet::Error<T>
	 **/
	PalletImOnlineError: {
		_enum: ["InvalidKey", "DuplicatedHeartbeat"],
	},
	/**
	 * Lookup532: pallet_sudo::pallet::Error<T>
	 **/
	PalletSudoError: {
		_enum: ["RequireSudo"],
	},
	/**
	 * Lookup534: pallet_transaction_payment::Releases
	 **/
	PalletTransactionPaymentReleases: {
		_enum: ["V1Ancient", "V2"],
	},
	/**
	 * Lookup536: pallet_dex::TradingPairStatus
	 **/
	PalletDexTradingPairStatus: {
		_enum: ["NotEnabled", "Enabled"],
	},
	/**
	 * Lookup538: pallet_dex::pallet::Error<T>
	 **/
	PalletDexError: {
		_enum: [
			"MustBeEnabled",
			"MustBeNotEnabled",
			"InsufficientInputAmount",
			"InvalidInputAmounts",
			"InsufficientAmount",
			"InsufficientAmountA",
			"InsufficientAmountB",
			"InsufficientLiquidityBurnt",
			"InsufficientWithdrawnAmountA",
			"InsufficientWithdrawnAmountB",
			"InsufficientOutputAmount",
			"InvalidLiquidityIncrement",
			"InvalidConstantProduct",
			"IdenticalTokenAddress",
			"InvalidAssetId",
			"InvalidTradingPathLength",
			"InsufficientTargetAmount",
			"ExcessiveSupplyAmount",
			"InsufficientLiquidity",
			"ZeroSupplyAmount",
			"ZeroTargetAmount",
			"LiquidityProviderTokenNotCreated",
			"ExpiredDeadline",
		],
	},
	/**
	 * Lookup539: pallet_nft::types::CollectionInformation<seed_primitives::signature::AccountId20, StringLimit>
	 **/
	PalletNftCollectionInformation: {
		owner: "SeedPrimitivesSignatureAccountId20",
		name: "Bytes",
		metadataScheme: "Bytes",
		royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
		maxIssuance: "Option<u32>",
		originChain: "SeedPrimitivesNftOriginChain",
		nextSerialNumber: "u32",
		collectionIssuance: "u32",
		crossChainCompatibility: "SeedPrimitivesNftCrossChainCompatibility",
	},
	/**
	 * Lookup540: pallet_nft::types::TokenInformation<seed_primitives::signature::AccountId20>
	 **/
	PalletNftTokenInformation: {
		owner: "SeedPrimitivesSignatureAccountId20",
		lockStatus: "Option<SeedPrimitivesNftTokenLockReason>",
		utilityFlags: "SeedPalletCommonUtilsTokenUtilityFlags",
	},
	/**
	 * Lookup542: seed_primitives::nft::TokenLockReason
	 **/
	SeedPrimitivesNftTokenLockReason: {
		_enum: {
			Listed: "u128",
		},
	},
	/**
	 * Lookup543: seed_pallet_common::utils::TokenUtilityFlags
	 **/
	SeedPalletCommonUtilsTokenUtilityFlags: {
		transferable: "bool",
		burnAuthority: "Option<SeedPalletCommonUtilsTokenBurnAuthority>",
	},
	/**
	 * Lookup545: seed_pallet_common::utils::PublicMintInformation
	 **/
	SeedPalletCommonUtilsPublicMintInformation: {
		enabled: "bool",
		pricingDetails: "Option<(u32,u128)>",
	},
	/**
	 * Lookup546: pallet_nft::types::CollectionPendingIssuances<seed_primitives::signature::AccountId20, MaxPendingIssuances>
	 **/
	PalletNftCollectionPendingIssuances: {
		nextIssuanceId: "u32",
		pendingIssuances: "Vec<(SeedPrimitivesSignatureAccountId20,Vec<PalletNftPendingIssuance>)>",
	},
	/**
	 * Lookup550: pallet_nft::types::PendingIssuance
	 **/
	PalletNftPendingIssuance: {
		issuanceId: "u32",
		quantity: "u32",
		burnAuthority: "SeedPalletCommonUtilsTokenBurnAuthority",
	},
	/**
	 * Lookup553: pallet_nft::pallet::Error<T>
	 **/
	PalletNftError: {
		_enum: [
			"CollectionNameInvalid",
			"NoAvailableIds",
			"NotTokenOwner",
			"NoToken",
			"NotCollectionOwner",
			"PublicMintDisabled",
			"TokenLocked",
			"RoyaltiesInvalid",
			"NoCollectionFound",
			"InvalidMetadataPath",
			"InvalidNewOwner",
			"InvalidAdditionalData",
			"TokenLimitExceeded",
			"MintLimitExceeded",
			"InvalidMaxIssuance",
			"MaxIssuanceAlreadySet",
			"MaxIssuanceReached",
			"AttemptedMintOnBridgedToken",
			"CannotClaimNonClaimableCollections",
			"CannotUpdateMetadata",
			"InitialIssuanceNotZero",
			"CollectionIssuanceNotZero",
			"BlockedMint",
			"MintUtilityBlocked",
			"TransferUtilityBlocked",
			"BurnUtilityBlocked",
			"PendingIssuanceLimitExceeded",
			"InvalidPendingIssuance",
			"CannotUpdateTokenUtility",
			"InvalidBurnAuthority",
			"SerialNumbersNotUnique",
		],
	},
	/**
	 * Lookup554: pallet_sft::types::SftCollectionInformation<seed_primitives::signature::AccountId20, StringLimit>
	 **/
	PalletSftSftCollectionInformation: {
		collectionOwner: "SeedPrimitivesSignatureAccountId20",
		collectionName: "Bytes",
		metadataScheme: "Bytes",
		royaltiesSchedule: "Option<SeedPrimitivesNftRoyaltiesSchedule>",
		originChain: "SeedPrimitivesNftOriginChain",
		nextSerialNumber: "u32",
	},
	/**
	 * Lookup555: pallet_sft::types::SftTokenInformation<seed_primitives::signature::AccountId20, StringLimit, MaxOwnersPerSftToken>
	 **/
	PalletSftSftTokenInformation: {
		tokenName: "Bytes",
		maxIssuance: "Option<u128>",
		tokenIssuance: "u128",
		ownedTokens: "Vec<(SeedPrimitivesSignatureAccountId20,PalletSftSftTokenBalance)>",
	},
	/**
	 * Lookup558: pallet_sft::types::SftTokenBalance
	 **/
	PalletSftSftTokenBalance: {
		freeBalance: "u128",
		reservedBalance: "u128",
	},
	/**
	 * Lookup560: pallet_sft::types::SftCollectionPendingIssuances<seed_primitives::signature::AccountId20, MaxSerialsPerMint, MaxPendingIssuances>
	 **/
	PalletSftSftCollectionPendingIssuances: {
		nextIssuanceId: "u32",
		pendingIssuances: "Vec<(SeedPrimitivesSignatureAccountId20,Vec<PalletSftSftPendingIssuance>)>",
	},
	/**
	 * Lookup564: pallet_sft::types::SftPendingIssuance<MaxSerialsPerMint>
	 **/
	PalletSftSftPendingIssuance: {
		issuanceId: "u32",
		serialNumbers: "Vec<(u32,u128)>",
	},
	/**
	 * Lookup567: pallet_sft::pallet::Error<T>
	 **/
	PalletSftError: {
		_enum: [
			"NameInvalid",
			"NoToken",
			"NotCollectionOwner",
			"RoyaltiesInvalid",
			"NoCollectionFound",
			"InsufficientBalance",
			"InvalidQuantity",
			"InvalidMaxIssuance",
			"InvalidNewOwner",
			"InvalidAdditionalData",
			"MaxIssuanceAlreadySet",
			"MaxIssuanceReached",
			"MaxOwnersReached",
			"Overflow",
			"PublicMintDisabled",
			"TokenLimitExceeded",
			"MintUtilityBlocked",
			"TransferUtilityBlocked",
			"BurnUtilityBlocked",
			"BurnAuthorityAlreadySet",
			"TokenAlreadyIssued",
			"PendingIssuanceLimitExceeded",
			"NoBurnAuthority",
			"InvalidPendingIssuance",
			"CannotUpdateTokenUtility",
			"InvalidBurnAuthority",
			"SerialNumbersNotUnique",
		],
	},
	/**
	 * Lookup572: pallet_xrpl_bridge::types::DelayedWithdrawal<seed_primitives::signature::AccountId20>
	 **/
	PalletXrplBridgeDelayedWithdrawal: {
		sender: "SeedPrimitivesSignatureAccountId20",
		destinationTag: "Option<u32>",
		withdrawTx: "PalletXrplBridgeWithdrawTransaction",
	},
	/**
	 * Lookup573: pallet_xrpl_bridge::types::WithdrawTransaction
	 **/
	PalletXrplBridgeWithdrawTransaction: {
		_enum: {
			XRP: "PalletXrplBridgeXrpWithdrawTransaction",
			Asset: "PalletXrplBridgeAssetWithdrawTransaction",
		},
	},
	/**
	 * Lookup574: pallet_xrpl_bridge::types::XrpWithdrawTransaction
	 **/
	PalletXrplBridgeXrpWithdrawTransaction: {
		txFee: "u64",
		txNonce: "u32",
		txTicketSequence: "u32",
		amount: "u128",
		destination: "H160",
	},
	/**
	 * Lookup575: pallet_xrpl_bridge::types::AssetWithdrawTransaction
	 **/
	PalletXrplBridgeAssetWithdrawTransaction: {
		txFee: "u64",
		txNonce: "u32",
		txTicketSequence: "u32",
		amount: "u128",
		destination: "H160",
		assetId: "u32",
		currency: "PalletXrplBridgeXrplCurrencyType",
		issuer: "H160",
	},
	/**
	 * Lookup577: pallet_xrpl_bridge::types::XrplTicketSequenceParams
	 **/
	PalletXrplBridgeXrplTicketSequenceParams: {
		startSequence: "u32",
		bucketSize: "u32",
	},
	/**
	 * Lookup578: pallet_xrpl_bridge::pallet::Error<T>
	 **/
	PalletXrplBridgeError: {
		_enum: [
			"AssetNotSupported",
			"NotPermitted",
			"NoAvailablePaymentIds",
			"DelayScheduleAtCapacity",
			"NoTransactionDetails",
			"RelayerDoesNotExists",
			"WithdrawInvalidAmount",
			"DoorAddressNotSet",
			"TooManySigners",
			"InvalidAssetDecimals",
			"InvalidCurrencyCode",
			"InvalidMantissaExponentConversion",
			"InvalidSigners",
			"InvalidHighestPrunedIndex",
			"TxReplay",
			"NextTicketSequenceParamsNotSet",
			"NextTicketSequenceParamsInvalid",
			"TicketSequenceParamsInvalid",
			"CannotProcessMoreTransactionsAtThatBlock",
			"CannotPruneActiveLedgerIndex",
			"OutSideSubmissionWindow",
			"TooManyTransactionsPerLedger",
			"InvalidSymbolMapping",
			"AssetRoundingTooHigh",
			"Xls20Incompatible",
			"Xls20TokenIDNotFound",
			"TestErrorRemoveAfterUsing",
		],
	},
	/**
	 * Lookup579: pallet_xrpl::pallet::Error<T>
	 **/
	PalletXrplError: {
		_enum: ["XRPLTransaction", "XRPLTransactionAccount", "CallFiltered"],
	},
	/**
	 * Lookup582: pallet_token_approvals::pallet::Error<T>
	 **/
	PalletTokenApprovalsError: {
		_enum: [
			"NoToken",
			"NotTokenOwner",
			"NotTokenOwnerOrApproved",
			"CallerNotOperator",
			"ApprovedAmountTooLow",
			"CallerNotApproved",
			"AlreadyApproved",
			"ApprovalDoesntExist",
		],
	},
	/**
	 * Lookup584: pallet_echo::pallet::Error<T>
	 **/
	PalletEchoError: {
		_enum: ["NoAvailableIds", "InvalidParameter", "InvalidAbiEncoding"],
	},
	/**
	 * Lookup585: pallet_marketplace::types::Marketplace<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceMarketplace: {
		account: "SeedPrimitivesSignatureAccountId20",
		entitlement: "Permill",
	},
	/**
	 * Lookup586: pallet_marketplace::types::Listing<T>
	 **/
	PalletMarketplaceListing: {
		_enum: {
			FixedPrice: "PalletMarketplaceFixedPriceListing",
			Auction: "PalletMarketplaceAuctionListing",
		},
	},
	/**
	 * Lookup587: pallet_marketplace::types::FixedPriceListing<T>
	 **/
	PalletMarketplaceFixedPriceListing: {
		paymentAsset: "u32",
		fixedPrice: "u128",
		close: "u32",
		buyer: "Option<SeedPrimitivesSignatureAccountId20>",
		seller: "SeedPrimitivesSignatureAccountId20",
		tokens: "PalletMarketplaceListingTokens",
		royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup588: pallet_marketplace::types::AuctionListing<T>
	 **/
	PalletMarketplaceAuctionListing: {
		paymentAsset: "u32",
		reservePrice: "u128",
		close: "u32",
		seller: "SeedPrimitivesSignatureAccountId20",
		tokens: "PalletMarketplaceListingTokens",
		royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup589: pallet_marketplace::types::OfferType<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceOfferType: {
		_enum: {
			Simple: "PalletMarketplaceSimpleOffer",
		},
	},
	/**
	 * Lookup590: pallet_marketplace::types::SimpleOffer<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceSimpleOffer: {
		tokenId: "(u32,u32)",
		assetId: "u32",
		amount: "u128",
		buyer: "SeedPrimitivesSignatureAccountId20",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup592: pallet_marketplace::pallet::Error<T>
	 **/
	PalletMarketplaceError: {
		_enum: [
			"NoAvailableIds",
			"NotTokenOwner",
			"NotForFixedPriceSale",
			"NotForAuction",
			"NotCollectionOwner",
			"TokenNotListed",
			"MaxOffersReached",
			"TokenLocked",
			"RoyaltiesInvalid",
			"BidTooLow",
			"MixedBundleSale",
			"MarketplaceNotRegistered",
			"InvalidMetadataPath",
			"InvalidOffer",
			"NotBuyer",
			"NotSeller",
			"IsTokenOwner",
			"ZeroOffer",
			"ZeroBalance",
			"TokenOnAuction",
			"EmptyTokens",
			"NoToken",
			"DurationTooShort",
			"DuplicateTokens",
		],
	},
	/**
	 * Lookup593: pallet_preimage::RequestStatus<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletPreimageRequestStatus: {
		_enum: {
			Unrequested: {
				deposit: "(SeedPrimitivesSignatureAccountId20,u128)",
				len: "u32",
			},
			Requested: {
				deposit: "Option<(SeedPrimitivesSignatureAccountId20,u128)>",
				count: "u32",
				len: "Option<u32>",
			},
		},
	},
	/**
	 * Lookup596: pallet_preimage::pallet::Error<T>
	 **/
	PalletPreimageError: {
		_enum: ["TooBig", "AlreadyNoted", "NotAuthorized", "NotNoted", "Requested", "NotRequested"],
	},
	/**
	 * Lookup597: pallet_vortex_distribution::VtxDistStatus
	 **/
	PalletVortexDistributionVtxDistStatus: {
		_enum: ["Disabled", "Enabled", "Triggering", "Triggered", "Paying", "Done"],
	},
	/**
	 * Lookup600: pallet_vortex_distribution::pallet::Error<T>
	 **/
	PalletVortexDistributionError: {
		_enum: [
			"RequireAdmin",
			"VtxDistIdNotAvailable",
			"VtxDistAlreadyEnabled",
			"VtxDistDisabled",
			"NoVtxAssetMinted",
			"InvalidAmount",
			"VtxDistIdInUse",
			"NotAValidator",
			"VortexPeriodNotSet",
			"PivotStringTooLong",
			"AssetsShouldNotIncludeVtxAsset",
			"CannotTrigger",
			"CannotRedeem",
			"NotTriggered",
			"ExceededMaxRewards",
			"VortexPriceIsZero",
			"RootPriceIsZero",
			"VtxRedeemDisabled",
			"ManualRewardInputDisabled",
			"VtxRewardPayoutFailed",
			"RewardPointsNotRegistered",
		],
	},
	/**
	 * Lookup601: pallet_partner_attribution::pallet::Error<T>
	 **/
	PalletPartnerAttributionError: {
		_enum: [
			"NoAvailableIds",
			"PartnerNotFound",
			"PartnerAlreadyExists",
			"Unauthorized",
			"CallerNotFuturepass",
			"AccountAlreadyAttributed",
		],
	},
	/**
	 * Lookup602: pallet_fee_proxy::pallet::Error<T>
	 **/
	PalletFeeProxyError: {
		_enum: ["NestedFeePreferenceCall", "FeeTokenIsGasToken"],
	},
	/**
	 * Lookup603: pallet_fee_control::FeeControlFeeConfig
	 **/
	PalletFeeControlFeeControlFeeConfig: {
		evmBaseFeePerGas: "U256",
		weightMultiplier: "Perbill",
		lengthMultiplier: "u128",
	},
	/**
	 * Lookup604: pallet_xls20::pallet::Error<T>
	 **/
	PalletXls20Error: {
		_enum: [
			"NotRelayer",
			"MappingAlreadyExists",
			"Xls20MintFeeTooLow",
			"NotXLS20Compatible",
			"NoToken",
			"NotCollectionOwner",
			"CouldNotDecodeXls20Token",
			"CannotBridgeBurnableToken",
		],
	},
	/**
	 * Lookup605: pallet_doughnut::pallet::Error<T>
	 **/
	PalletDoughnutError: {
		_enum: [
			"DoughnutDecodeFailed",
			"UnsupportedDoughnutVersion",
			"DoughnutVerifyFailed",
			"UnauthorizedSender",
			"CallerNotIssuer",
			"DoughnutRevoked",
			"HolderRevoked",
			"ToppingDecodeFailed",
			"TRNDomainNotfound",
			"ToppingPermissionDenied",
			"UnsupportedInnerCall",
			"HolderNotWhitelisted",
		],
	},
	/**
	 * Lookup607: pallet_maintenance_mode::pallet::Error<T>
	 **/
	PalletMaintenanceModeError: {
		_enum: [
			"AccountBlocked",
			"MaintenanceModeActive",
			"InvalidPalletName",
			"InvalidCallName",
			"CannotBlock",
		],
	},
	/**
	 * Lookup611: pallet_crowdsale::pallet::Error<T>
	 **/
	PalletCrowdsaleError: {
		_enum: [
			"AccessDenied",
			"NoAvailableIds",
			"InvalidBlockRange",
			"CrowdsaleNotFound",
			"InvalidCrowdsaleStatus",
			"CrowdsaleNotEnabled",
			"InvalidSoftCapPrice",
			"InvalidAsset",
			"InvalidMaxIssuance",
			"InvalidAmount",
			"InvalidQuantity",
			"VoucherClaimFailed",
			"MaxIssuanceNotSet",
			"CollectionIssuanceNotZero",
			"CollectionPublicMintable",
			"TooManySales",
			"VouchersAlreadyClaimed",
			"SaleDistributionFailed",
			"SaleDurationTooLong",
			"ExtrinsicForbidden",
		],
	},
	/**
	 * Lookup615: pallet_nfi::pallet::Error<T>
	 **/
	PalletNfiError: {
		_enum: [
			"InvalidMintFee",
			"InvalidTokenFormat",
			"NotEnabled",
			"NotRelayer",
			"NotCollectionOwner",
			"NotTokenOwner",
			"NoToken",
		],
	},
	/**
	 * Lookup616: pallet_migration::MigrationStatus
	 **/
	PalletMigrationMigrationStatus: {
		_enum: {
			NoMigrationInProgress: "Null",
			InProgress: {
				stepsDone: "u32",
			},
			Completed: "Null",
		},
	},
	/**
	 * Lookup617: pallet_migration::pallet::Error<T>
	 **/
	PalletMigrationError: {
		_enum: ["MigrationInProgress", "InvalidBlockDelay", "InvalidBlockLimit"],
	},
	/**
	 * Lookup618: seed_pallet_common::sylo::Resolver<seed_primitives::signature::AccountId20, MaxServiceEndpoints, StringLimit>
	 **/
	SeedPalletCommonSyloResolver: {
		controller: "SeedPrimitivesSignatureAccountId20",
		serviceEndpoints: "Vec<Bytes>",
	},
	/**
	 * Lookup620: seed_pallet_common::sylo::ValidationRecord<seed_primitives::signature::AccountId20, BlockNumber, MaxResolvers, MaxTags, MaxEntries, StringLimit>
	 **/
	SeedPalletCommonSyloValidationRecord: {
		_alias: {
			entries_: "entries",
		},
		author: "SeedPrimitivesSignatureAccountId20",
		resolvers: "Vec<SeedPalletCommonSyloResolverId>",
		dataType: "Bytes",
		tags: "Vec<Bytes>",
		entries_: "Vec<SeedPalletCommonSyloValidationEntry>",
	},
	/**
	 * Lookup622: seed_pallet_common::sylo::ValidationEntry<BlockNumber>
	 **/
	SeedPalletCommonSyloValidationEntry: {
		checksum: "H256",
		block: "u32",
	},
	/**
	 * Lookup624: pallet_sylo_data_verification::pallet::Error<T>
	 **/
	PalletSyloDataVerificationError: {
		_enum: [
			"ResolverAlreadyRegistered",
			"ResolverNotRegistered",
			"NotController",
			"RecordAlreadyCreated",
			"NoValidationRecord",
			"MissingModifyPermission",
		],
	},
	/**
	 * Lookup625: pallet_liquidity_pools::types::PoolInfo<PoolId, AssetId, Balance, BlockNumber>
	 **/
	PalletLiquidityPoolsPoolInfo: {
		id: "u32",
		creator: "SeedPrimitivesSignatureAccountId20",
		rewardAssetId: "u32",
		stakedAssetId: "u32",
		interestRate: "u32",
		maxTokens: "u128",
		lastUpdated: "u32",
		lockStartBlock: "u32",
		lockEndBlock: "u32",
		lockedAmount: "u128",
		poolStatus: "PalletLiquidityPoolsPoolStatus",
	},
	/**
	 * Lookup626: pallet_liquidity_pools::types::PoolStatus
	 **/
	PalletLiquidityPoolsPoolStatus: {
		_enum: ["Closed", "Open", "Started", "Renewing", "Matured"],
	},
	/**
	 * Lookup627: pallet_liquidity_pools::types::UserInfo<Balance>
	 **/
	PalletLiquidityPoolsUserInfo: {
		amount: "u128",
		rewardDebt: "u128",
		shouldRollover: "bool",
		rolledOver: "bool",
	},
	/**
	 * Lookup628: pallet_liquidity_pools::types::PoolRelationship<PoolId>
	 **/
	PalletLiquidityPoolsPoolRelationship: {
		successorId: "Option<u32>",
	},
	/**
	 * Lookup629: pallet_liquidity_pools::pallet::Error<T>
	 **/
	PalletLiquidityPoolsError: {
		_enum: [
			"NotPoolCreator",
			"InvalidBlockRange",
			"PoolAlreadyExists",
			"PoolDoesNotExist",
			"SuccessorPoolDoesNotExist",
			"PredecessorPoolDoesNotExist",
			"SuccessorPoolSizeShouldBeGreaterThanPredecessor",
			"SuccessorPoolSizeShouldBeLockedAfterPredecessor",
			"RolloverPoolsShouldBeTheSameAsset",
			"NoTokensStaked",
			"PoolNotOpen",
			"NotReadyForClaimingReward",
			"NoAvailablePoolId",
			"StakingLimitExceeded",
			"OffchainErrNotValidator",
			"OffchainErrTooEarly",
			"OffchainErrSubmitTransaction",
			"OffchainErrWrongTransactionSource",
			"PivotStringTooLong",
		],
	},
	/**
	 * Lookup633: pallet_sylo_data_permissions::types::PermissionRecord<seed_primitives::signature::AccountId20, BlockNumber>
	 **/
	PalletSyloDataPermissionsPermissionRecord: {
		grantor: "SeedPrimitivesSignatureAccountId20",
		permission: "SeedPalletCommonSyloDataPermission",
		block: "u32",
		expiry: "Option<u32>",
		irrevocable: "bool",
	},
	/**
	 * Lookup640: pallet_sylo_data_permissions::types::TaggedPermissionRecord<BlockNumber, MaxTags, StringLimit>
	 **/
	PalletSyloDataPermissionsTaggedPermissionRecord: {
		permission: "SeedPalletCommonSyloDataPermission",
		tags: "Vec<Bytes>",
		block: "u32",
		expiry: "Option<u32>",
		irrevocable: "bool",
	},
	/**
	 * Lookup645: pallet_sylo_data_permissions::types::PermissionReference<StringLimit>
	 **/
	PalletSyloDataPermissionsPermissionReference: {
		permissionRecordId: "Bytes",
	},
	/**
	 * Lookup646: pallet_sylo_data_permissions::pallet::Error<T>
	 **/
	PalletSyloDataPermissionsError: {
		_enum: [
			"DataRecordDoesNotExist",
			"IrrevocableCannotBeExpirable",
			"InvalidExpiry",
			"ExceededMaxPermissions",
			"MissingDistributePermission",
			"CannotGrantDistributePermission",
			"CannotGrantIrrevocablePermission",
			"PermissionIrrevocable",
			"NotPermissionGrantor",
			"PermissionNotFound",
			"MissingValidationRecord",
			"PermissionReferenceAlreadyExists",
			"ExceededMaxExpiringPermissions",
			"InvalidString",
		],
	},
	/**
	 * Lookup647: pallet_sylo_action_permissions::types::TransactPermission<BlockNumber, MaxCallIds, StringLimit>
	 **/
	PalletSyloActionPermissionsTransactPermission: {
		spender: "PalletSyloActionPermissionsSpender",
		spendingBalance: "Option<u128>",
		allowedCalls: "BTreeSet<(Bytes,Bytes)>",
		block: "u32",
		expiry: "Option<u32>",
	},
	/**
	 * Lookup648: pallet_sylo_action_permissions::pallet::Error<T>
	 **/
	PalletSyloActionPermissionsError: {
		_enum: [
			"PermissionNotGranted",
			"NotAuthorizedCall",
			"PermissionExpired",
			"InvalidExpiry",
			"PermissionAlreadyExists",
			"InvalidSpendingBalance",
			"InvalidTokenSignature",
			"GranteeDoesNotMatch",
			"NonceAlreadyUsed",
			"InvalidFuturepassInToken",
			"InsufficientSpendingBalance",
		],
	},
	/**
	 * Lookup649: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
	 **/
	PalletElectionProviderMultiPhaseReadySolution: {
		supports: "Vec<(SeedPrimitivesSignatureAccountId20,SpNposElectionsSupport)>",
		score: "SpNposElectionsElectionScore",
		compute: "PalletElectionProviderMultiPhaseElectionCompute",
	},
	/**
	 * Lookup651: pallet_election_provider_multi_phase::RoundSnapshot<seed_primitives::signature::AccountId20, DataProvider>
	 **/
	PalletElectionProviderMultiPhaseRoundSnapshot: {
		voters: "Vec<(SeedPrimitivesSignatureAccountId20,u64,Vec<SeedPrimitivesSignatureAccountId20>)>",
		targets: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup657: pallet_election_provider_multi_phase::signed::SignedSubmission<seed_primitives::signature::AccountId20, Balance, seed_runtime::NposCompactSolution16>
	 **/
	PalletElectionProviderMultiPhaseSignedSignedSubmission: {
		who: "SeedPrimitivesSignatureAccountId20",
		deposit: "u128",
		rawSolution: "PalletElectionProviderMultiPhaseRawSolution",
		callFee: "u128",
	},
	/**
	 * Lookup658: pallet_election_provider_multi_phase::pallet::Error<T>
	 **/
	PalletElectionProviderMultiPhaseError: {
		_enum: [
			"PreDispatchEarlySubmission",
			"PreDispatchWrongWinnerCount",
			"PreDispatchWeakSubmission",
			"SignedQueueFull",
			"SignedCannotPayDeposit",
			"SignedInvalidWitness",
			"SignedTooMuchWeight",
			"OcwCallWrongEra",
			"MissingSnapshotMetadata",
			"InvalidSubmissionIndex",
			"CallNotAllowed",
			"FallbackFailed",
			"BoundNotMet",
			"TooManyWinners",
		],
	},
	/**
	 * Lookup659: pallet_bags_list::list::Node<T, I>
	 **/
	PalletBagsListListNode: {
		id: "SeedPrimitivesSignatureAccountId20",
		prev: "Option<SeedPrimitivesSignatureAccountId20>",
		next: "Option<SeedPrimitivesSignatureAccountId20>",
		bagUpper: "u64",
		score: "u64",
	},
	/**
	 * Lookup660: pallet_bags_list::list::Bag<T, I>
	 **/
	PalletBagsListListBag: {
		head: "Option<SeedPrimitivesSignatureAccountId20>",
		tail: "Option<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup661: pallet_bags_list::pallet::Error<T, I>
	 **/
	PalletBagsListError: {
		_enum: {
			List: "PalletBagsListListListError",
		},
	},
	/**
	 * Lookup662: pallet_bags_list::list::ListError
	 **/
	PalletBagsListListListError: {
		_enum: ["Duplicate", "NotHeavier", "NotInSameBag", "NodeNotFound"],
	},
	/**
	 * Lookup665: fp_rpc::TransactionStatus
	 **/
	FpRpcTransactionStatus: {
		transactionHash: "H256",
		transactionIndex: "u32",
		from: "H160",
		to: "Option<H160>",
		contractAddress: "Option<H160>",
		logs: "Vec<EthereumLog>",
		logsBloom: "EthbloomBloom",
	},
	/**
	 * Lookup667: ethbloom::Bloom
	 **/
	EthbloomBloom: "[u8;256]",
	/**
	 * Lookup669: ethereum::receipt::ReceiptV3
	 **/
	EthereumReceiptReceiptV3: {
		_enum: {
			Legacy: "EthereumReceiptEip658ReceiptData",
			EIP2930: "EthereumReceiptEip658ReceiptData",
			EIP1559: "EthereumReceiptEip658ReceiptData",
		},
	},
	/**
	 * Lookup670: ethereum::receipt::EIP658ReceiptData
	 **/
	EthereumReceiptEip658ReceiptData: {
		statusCode: "u8",
		usedGas: "U256",
		logsBloom: "EthbloomBloom",
		logs: "Vec<EthereumLog>",
	},
	/**
	 * Lookup671: ethereum::block::Block<ethereum::transaction::TransactionV2>
	 **/
	EthereumBlock: {
		header: "EthereumHeader",
		transactions: "Vec<EthereumTransactionTransactionV2>",
		ommers: "Vec<EthereumHeader>",
	},
	/**
	 * Lookup672: ethereum::header::Header
	 **/
	EthereumHeader: {
		parentHash: "H256",
		ommersHash: "H256",
		beneficiary: "H160",
		stateRoot: "H256",
		transactionsRoot: "H256",
		receiptsRoot: "H256",
		logsBloom: "EthbloomBloom",
		difficulty: "U256",
		number: "U256",
		gasLimit: "U256",
		gasUsed: "U256",
		timestamp: "u64",
		extraData: "Bytes",
		mixHash: "H256",
		nonce: "EthereumTypesHashH64",
	},
	/**
	 * Lookup673: ethereum_types::hash::H64
	 **/
	EthereumTypesHashH64: "[u8;8]",
	/**
	 * Lookup678: pallet_ethereum::pallet::Error<T>
	 **/
	PalletEthereumError: {
		_enum: [
			"InvalidSignature",
			"PreLogExists",
			"GasLimitTooLow",
			"GasLimitTooHigh",
			"GasPriceTooLow",
			"BalanceLow",
			"InvalidNonce",
			"Undefined",
		],
	},
	/**
	 * Lookup679: pallet_evm::CodeMetadata
	 **/
	PalletEvmCodeMetadata: {
		_alias: {
			size_: "size",
			hash_: "hash",
		},
		size_: "u64",
		hash_: "H256",
	},
	/**
	 * Lookup681: pallet_evm::pallet::Error<T>
	 **/
	PalletEvmError: {
		_enum: [
			"BalanceLow",
			"FeeOverflow",
			"PaymentOverflow",
			"WithdrawFailed",
			"GasPriceTooLow",
			"InvalidNonce",
			"GasLimitTooLow",
			"GasLimitTooHigh",
			"Undefined",
			"Reentrancy",
			"TransactionMustComeFromEOA",
		],
	},
	/**
	 * Lookup682: pallet_ethy::types::BridgePauseStatus
	 **/
	PalletEthyBridgePauseStatus: {
		manualPause: "bool",
		authoritiesChange: "bool",
	},
	/**
	 * Lookup685: pallet_ethy::types::EventClaimStatus
	 **/
	PalletEthyEventClaimStatus: {
		_enum: ["Pending", "Challenged", "ProvenValid"],
	},
	/**
	 * Lookup692: pallet_ethy::types::CheckedEthCallRequest<MaxEthData>
	 **/
	PalletEthyCheckedEthCallRequest: {
		input: "Bytes",
		target: "H160",
		timestamp: "u64",
		maxBlockLookBehind: "u64",
		tryBlockNumber: "u64",
		checkTimestamp: "u64",
	},
	/**
	 * Lookup693: pallet_ethy::pallet::Error<T>
	 **/
	PalletEthyError: {
		_enum: [
			"NoLocalSigningAccount",
			"OffchainUnsignedTxSignedPayload",
			"InvalidNotarization",
			"HttpFetch",
			"InvalidClaim",
			"OcwConfig",
			"EventReplayPending",
			"EventReplayProcessed",
			"BridgePaused",
			"Internal",
			"NoPermission",
			"NoClaim",
			"ClaimAlreadyChallenged",
			"CantUnbondRelayer",
			"CantBondRelayer",
			"NoBondPaid",
			"MaxNewSignersExceeded",
			"MaxChallengesExceeded",
			"MessageTooLarge",
		],
	},
	/**
	 * Lookup695: pallet_erc20_peg::types::PendingPayment<seed_primitives::signature::AccountId20>
	 **/
	PalletErc20PegPendingPayment: {
		_enum: {
			Deposit: "PalletErc20PegErc20DepositEvent",
			Withdrawal: "(SeedPrimitivesSignatureAccountId20,PalletErc20PegWithdrawMessage)",
		},
	},
	/**
	 * Lookup696: pallet_erc20_peg::types::Erc20DepositEvent
	 **/
	PalletErc20PegErc20DepositEvent: {
		tokenAddress: "H160",
		amount: "U256",
		beneficiary: "H160",
	},
	/**
	 * Lookup698: pallet_erc20_peg::types::WithdrawMessage
	 **/
	PalletErc20PegWithdrawMessage: {
		tokenAddress: "H160",
		amount: "U256",
		beneficiary: "H160",
	},
	/**
	 * Lookup701: pallet_erc20_peg::pallet::Error<T>
	 **/
	PalletErc20PegError: {
		_enum: [
			"CreateAssetFailed",
			"InvalidAmount",
			"InvalidPalletId",
			"InvalidSourceAddress",
			"DepositsPaused",
			"WithdrawalsPaused",
			"UnsupportedAsset",
			"EvmWithdrawalFailed",
			"InvalidAbiEncoding",
			"PaymentIdNotFound",
		],
	},
	/**
	 * Lookup702: pallet_nft_peg::types::BlockedTokenInfo<T>
	 **/
	PalletNftPegBlockedTokenInfo: {
		collectionId: "u32",
		destinationAddress: "SeedPrimitivesSignatureAccountId20",
		serialNumbers: "Vec<u32>",
	},
	/**
	 * Lookup703: pallet_nft_peg::pallet::Error<T>
	 **/
	PalletNftPegError: {
		_enum: [
			"ExceedsMaxAddresses",
			"ExceedsMaxTokens",
			"InvalidAbiEncoding",
			"InvalidAbiPrefix",
			"NoCollectionFound",
			"NoMappedTokenExists",
			"NoPermissionToBridge",
			"StateSyncDisabled",
			"TokenListLengthMismatch",
			"ExceedsMaxVecLength",
			"NoBlockedTokensFound",
			"NotBlockedTokenDestination",
		],
	},
	/**
	 * Lookup706: pallet_proxy::ProxyDefinition<seed_primitives::signature::AccountId20, seed_runtime::impls::ProxyType, BlockNumber>
	 **/
	PalletProxyProxyDefinition: {
		delegate: "SeedPrimitivesSignatureAccountId20",
		proxyType: "SeedRuntimeImplsProxyType",
		delay: "u32",
	},
	/**
	 * Lookup710: pallet_proxy::Announcement<seed_primitives::signature::AccountId20, primitive_types::H256, BlockNumber>
	 **/
	PalletProxyAnnouncement: {
		real: "SeedPrimitivesSignatureAccountId20",
		callHash: "H256",
		height: "u32",
	},
	/**
	 * Lookup712: pallet_proxy::pallet::Error<T>
	 **/
	PalletProxyError: {
		_enum: [
			"TooMany",
			"NotFound",
			"NotProxy",
			"Unproxyable",
			"Duplicate",
			"NoPermission",
			"Unannounced",
			"NoSelfProxy",
		],
	},
	/**
	 * Lookup713: pallet_futurepass::pallet::Error<T>
	 **/
	PalletFuturepassError: {
		_enum: [
			"AccountAlreadyRegistered",
			"DelegateNotRegistered",
			"DelegateAlreadyExists",
			"BlacklistedExtrinsic",
			"NotFuturepassOwner",
			"OwnerCannotUnregister",
			"PermissionDenied",
			"InvalidProxyType",
			"ExpiredDeadline",
			"InvalidSignature",
			"AccountParsingFailure",
			"RegisterDelegateSignerMismatch",
		],
	},
	/**
	 * Lookup715: seed_primitives::signature::EthereumSignature
	 **/
	SeedPrimitivesSignatureEthereumSignature: "SpCoreEcdsaSignature",
	/**
	 * Lookup717: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
	 **/
	FrameSystemExtensionsCheckNonZeroSender: "Null",
	/**
	 * Lookup718: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
	 **/
	FrameSystemExtensionsCheckSpecVersion: "Null",
	/**
	 * Lookup719: frame_system::extensions::check_tx_version::CheckTxVersion<T>
	 **/
	FrameSystemExtensionsCheckTxVersion: "Null",
	/**
	 * Lookup720: frame_system::extensions::check_genesis::CheckGenesis<T>
	 **/
	FrameSystemExtensionsCheckGenesis: "Null",
	/**
	 * Lookup723: frame_system::extensions::check_nonce::CheckNonce<T>
	 **/
	FrameSystemExtensionsCheckNonce: "Compact<u32>",
	/**
	 * Lookup724: frame_system::extensions::check_weight::CheckWeight<T>
	 **/
	FrameSystemExtensionsCheckWeight: "Null",
	/**
	 * Lookup725: pallet_maintenance_mode::MaintenanceChecker<T>
	 **/
	PalletMaintenanceModeMaintenanceChecker: "Null",
	/**
	 * Lookup726: pallet_transaction_payment::ChargeTransactionPayment<T>
	 **/
	PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
	/**
	 * Lookup728: seed_runtime::Runtime
	 **/
	SeedRuntimeRuntime: "Null",
};
