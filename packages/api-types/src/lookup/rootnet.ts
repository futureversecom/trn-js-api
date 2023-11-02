// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
	/**
	 * Lookup0: seed_primitives::signature::AccountId20
	 **/
	SeedPrimitivesSignatureAccountId20: "[u8;20]",
	/**
	 * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
	 **/
	FrameSystemAccountInfo: {
		nonce: "u32",
		consumers: "u32",
		providers: "u32",
		sufficients: "u32",
		data: "PalletBalancesAccountData",
	},
	/**
	 * Lookup5: pallet_balances::AccountData<Balance>
	 **/
	PalletBalancesAccountData: {
		free: "u128",
		reserved: "u128",
		miscFrozen: "u128",
		feeFrozen: "u128",
	},
	/**
	 * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
	 **/
	FrameSupportDispatchPerDispatchClassWeight: {
		normal: "WeightV1",
		operational: "WeightV1",
		mandatory: "WeightV1",
	},
	/**
	 * Lookup13: sp_runtime::generic::digest::Digest
	 **/
	SpRuntimeDigest: {
		logs: "Vec<SpRuntimeDigestDigestItem>",
	},
	/**
	 * Lookup15: sp_runtime::generic::digest::DigestItem
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
	 * Lookup18: frame_system::EventRecord<seed_runtime::RuntimeEvent, primitive_types::H256>
	 **/
	FrameSystemEventRecord: {
		phase: "FrameSystemPhase",
		event: "Event",
		topics: "Vec<H256>",
	},
	/**
	 * Lookup20: frame_system::pallet::Event<T>
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
	 * Lookup21: frame_support::dispatch::DispatchInfo
	 **/
	FrameSupportDispatchDispatchInfo: {
		weight: "WeightV1",
		class: "FrameSupportDispatchDispatchClass",
		paysFee: "FrameSupportDispatchPays",
	},
	/**
	 * Lookup22: frame_support::dispatch::DispatchClass
	 **/
	FrameSupportDispatchDispatchClass: {
		_enum: ["Normal", "Operational", "Mandatory"],
	},
	/**
	 * Lookup23: frame_support::dispatch::Pays
	 **/
	FrameSupportDispatchPays: {
		_enum: ["Yes", "No"],
	},
	/**
	 * Lookup24: sp_runtime::DispatchError
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
			Arithmetic: "SpRuntimeArithmeticError",
			Transactional: "SpRuntimeTransactionalError",
		},
	},
	/**
	 * Lookup25: sp_runtime::ModuleError
	 **/
	SpRuntimeModuleError: {
		index: "u8",
		error: "[u8;4]",
	},
	/**
	 * Lookup26: sp_runtime::TokenError
	 **/
	SpRuntimeTokenError: {
		_enum: [
			"NoFunds",
			"WouldDie",
			"BelowMinimum",
			"CannotCreate",
			"UnknownAsset",
			"Frozen",
			"Unsupported",
		],
	},
	/**
	 * Lookup27: sp_runtime::ArithmeticError
	 **/
	SpRuntimeArithmeticError: {
		_enum: ["Underflow", "Overflow", "DivisionByZero"],
	},
	/**
	 * Lookup28: sp_runtime::TransactionalError
	 **/
	SpRuntimeTransactionalError: {
		_enum: ["LimitReached", "NoLayer"],
	},
	/**
	 * Lookup29: pallet_scheduler::pallet::Event<T>
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
				id: "Option<Bytes>",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			CallLookupFailed: {
				task: "(u32,u32)",
				id: "Option<Bytes>",
				error: "FrameSupportScheduleLookupError",
			},
		},
	},
	/**
	 * Lookup34: frame_support::traits::schedule::LookupError
	 **/
	FrameSupportScheduleLookupError: {
		_enum: ["Unknown", "BadFormat"],
	},
	/**
	 * Lookup35: pallet_utility::pallet::Event
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
	 * Lookup36: pallet_recovery::pallet::Event<T>
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
	 * Lookup37: pallet_preimage::pallet::Event<T>
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
	 * Lookup38: pallet_balances::pallet::Event<T, I>
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
				reserved: "u128",
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
		},
	},
	/**
	 * Lookup39: frame_support::traits::tokens::misc::BalanceStatus
	 **/
	FrameSupportTokensMiscBalanceStatus: {
		_enum: ["Free", "Reserved"],
	},
	/**
	 * Lookup40: pallet_assets::pallet::Event<T, I>
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
				totalSupply: "u128",
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
		},
	},
	/**
	 * Lookup42: pallet_assets_ext::pallet::Event<T>
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
		},
	},
	/**
	 * Lookup46: pallet_staking::pallet::pallet::Event<T>
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
		},
	},
	/**
	 * Lookup47: pallet_staking::ValidatorPrefs
	 **/
	PalletStakingValidatorPrefs: {
		commission: "Compact<Perbill>",
		blocked: "bool",
	},
	/**
	 * Lookup50: pallet_offences::pallet::Event
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
	 * Lookup52: pallet_session::pallet::Event
	 **/
	PalletSessionEvent: {
		_enum: {
			NewSession: {
				sessionIndex: "u32",
			},
		},
	},
	/**
	 * Lookup53: pallet_grandpa::pallet::Event
	 **/
	PalletGrandpaEvent: {
		_enum: {
			NewAuthorities: {
				authoritySet: "Vec<(SpFinalityGrandpaAppPublic,u64)>",
			},
			Paused: "Null",
			Resumed: "Null",
		},
	},
	/**
	 * Lookup56: sp_finality_grandpa::app::Public
	 **/
	SpFinalityGrandpaAppPublic: "SpCoreEd25519Public",
	/**
	 * Lookup57: sp_core::ed25519::Public
	 **/
	SpCoreEd25519Public: "[u8;32]",
	/**
	 * Lookup58: pallet_im_online::pallet::Event<T>
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
	 * Lookup59: pallet_im_online::sr25519::app_sr25519::Public
	 **/
	PalletImOnlineSr25519AppSr25519Public: "SpCoreSr25519Public",
	/**
	 * Lookup60: sp_core::sr25519::Public
	 **/
	SpCoreSr25519Public: "[u8;32]",
	/**
	 * Lookup63: pallet_staking::Exposure<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingExposure: {
		total: "Compact<u128>",
		own: "Compact<u128>",
		others: "Vec<PalletStakingIndividualExposure>",
	},
	/**
	 * Lookup66: pallet_staking::IndividualExposure<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingIndividualExposure: {
		who: "SeedPrimitivesSignatureAccountId20",
		value: "Compact<u128>",
	},
	/**
	 * Lookup67: pallet_sudo::pallet::Event<T>
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
	 * Lookup69: pallet_transaction_payment::pallet::Event<T>
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
	 * Lookup70: pallet_dex::pallet::Event<T>
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
	 * Lookup72: pallet_dex::types::TradingPair
	 **/
	PalletDexTradingPair: "(u32,u32)",
	/**
	 * Lookup73: pallet_nft::pallet::Event<T>
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
				compatibility: "PalletNftCrossChainCompatibility",
			},
			Mint: {
				collectionId: "u32",
				start: "u32",
				end: "u32",
				owner: "SeedPrimitivesSignatureAccountId20",
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
				collectionId: "u32",
				serialNumber: "u32",
			},
			CollectionClaimed: {
				account: "SeedPrimitivesSignatureAccountId20",
				collectionId: "u32",
			},
		},
	},
	/**
	 * Lookup78: seed_primitives::nft::RoyaltiesSchedule<seed_primitives::signature::AccountId20>
	 **/
	SeedPrimitivesNftRoyaltiesSchedule: {
		entitlements: "Vec<(SeedPrimitivesSignatureAccountId20,Permill)>",
	},
	/**
	 * Lookup83: seed_primitives::nft::OriginChain
	 **/
	SeedPrimitivesNftOriginChain: {
		_enum: ["Ethereum", "Root"],
	},
	/**
	 * Lookup84: pallet_nft::types::CrossChainCompatibility
	 **/
	PalletNftCrossChainCompatibility: {
		xrpl: "bool",
	},
	/**
	 * Lookup87: pallet_sft::pallet::Event<T>
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
			Mint: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				balances: "Vec<u128>",
				owner: "SeedPrimitivesSignatureAccountId20",
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
		},
	},
	/**
	 * Lookup92: pallet_xrpl_bridge::pallet::Event<T>
	 **/
	PalletXrplBridgeEvent: {
		_enum: {
			TransactionAdded: "(u64,H512)",
			TransactionChallenge: "(u64,H512)",
			ProcessingOk: "(u64,H512)",
			ProcessingFailed: "(u64,H512,SpRuntimeDispatchError)",
			NotSupportedTransaction: "Null",
			WithdrawRequest: {
				proofId: "u64",
				sender: "SeedPrimitivesSignatureAccountId20",
				amount: "u128",
				destination: "H160",
			},
			RelayerAdded: "SeedPrimitivesSignatureAccountId20",
			RelayerRemoved: "SeedPrimitivesSignatureAccountId20",
			DoorAddressSet: "H160",
			DoorNextTicketSequenceParamSet: {
				ticketSequenceStartNext: "u32",
				ticketBucketSizeNext: "u32",
			},
			DoorTicketSequenceParamSet: {
				ticketSequence: "u32",
				ticketSequenceStart: "u32",
				ticketBucketSize: "u32",
			},
			TicketSequenceThresholdReached: "u32",
		},
	},
	/**
	 * Lookup96: pallet_echo::pallet::Event
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
	 * Lookup97: pallet_marketplace::pallet::Event<T>
	 **/
	PalletMarketplaceEvent: {
		_enum: {
			FixedPriceSaleList: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				price: "u128",
				paymentAsset: "u32",
				seller: "SeedPrimitivesSignatureAccountId20",
			},
			FixedPriceSaleComplete: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				listingId: "u128",
				price: "u128",
				paymentAsset: "u32",
				buyer: "SeedPrimitivesSignatureAccountId20",
				seller: "SeedPrimitivesSignatureAccountId20",
			},
			FixedPriceSaleClose: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				listingId: "u128",
				reason: "PalletMarketplaceFixedPriceClosureReason",
			},
			FixedPriceSalePriceUpdate: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				listingId: "u128",
				newPrice: "u128",
			},
			AuctionOpen: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				paymentAsset: "u32",
				reservePrice: "u128",
				listingId: "u128",
				marketplaceId: "Option<u32>",
				seller: "SeedPrimitivesSignatureAccountId20",
			},
			AuctionSold: {
				collectionId: "u32",
				listingId: "u128",
				paymentAsset: "u32",
				hammerPrice: "u128",
				winner: "SeedPrimitivesSignatureAccountId20",
			},
			AuctionClose: {
				collectionId: "u32",
				listingId: "u128",
				reason: "PalletMarketplaceAuctionClosureReason",
			},
			Bid: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
				listingId: "u128",
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
				tokenId: "(u32,u32)",
			},
			OfferAccept: {
				offerId: "u64",
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
	 * Lookup98: pallet_marketplace::types::FixedPriceClosureReason
	 **/
	PalletMarketplaceFixedPriceClosureReason: {
		_enum: ["VendorCancelled", "Expired"],
	},
	/**
	 * Lookup99: pallet_marketplace::types::AuctionClosureReason
	 **/
	PalletMarketplaceAuctionClosureReason: {
		_enum: ["ExpiredNoBids", "SettlementFailed", "VendorCancelled"],
	},
	/**
	 * Lookup100: pallet_election_provider_multi_phase::pallet::Event<T>
	 **/
	PalletElectionProviderMultiPhaseEvent: {
		_enum: {
			SolutionStored: {
				compute: "PalletElectionProviderMultiPhaseElectionCompute",
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
			SignedPhaseStarted: {
				round: "u32",
			},
			UnsignedPhaseStarted: {
				round: "u32",
			},
		},
	},
	/**
	 * Lookup101: pallet_election_provider_multi_phase::ElectionCompute
	 **/
	PalletElectionProviderMultiPhaseElectionCompute: {
		_enum: ["OnChain", "Signed", "Unsigned", "Fallback", "Emergency"],
	},
	/**
	 * Lookup102: sp_npos_elections::ElectionScore
	 **/
	SpNposElectionsElectionScore: {
		minimalStake: "u128",
		sumStake: "u128",
		sumStakeSquared: "u128",
	},
	/**
	 * Lookup103: pallet_bags_list::pallet::Event<T, I>
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
	 * Lookup104: pallet_ethy::RawEvent<seed_primitives::signature::AccountId20, BlockNumber>
	 **/
	PalletEthyRawEvent: {
		_enum: {
			Verified: "u64",
			Invalid: "u64",
			AuthoritySetChange: "(u64,u64)",
			XrplAuthoritySetChange: "(u64,u64)",
			ProofDelayed: "u64",
			ProcessingOk: "u64",
			ProcessingFailed: "(u64,SeedPalletCommonEventRouterError)",
			Challenged: "(u64,SeedPrimitivesSignatureAccountId20)",
			ProcessAtExtended: "(u64,u32)",
			EventSend: {
				eventProofId: "u64",
				signingRequest: "PalletEthyEthySigningRequest",
			},
			EventSubmit: "(u64,PalletEthyEventClaim,u32)",
			RelayerBondDeposit: "(SeedPrimitivesSignatureAccountId20,u128)",
			RelayerBondWithdraw: "(SeedPrimitivesSignatureAccountId20,u128)",
			RelayerSet: "Option<SeedPrimitivesSignatureAccountId20>",
			XrplDoorSignersSet: "Null",
			FinaliseScheduleFail: "u32",
			SetContractAddress: "H160",
			XrplAuthoritySetChangeRequestFailed: "Null",
		},
	},
	/**
	 * Lookup105: seed_pallet_common::EventRouterError
	 **/
	SeedPalletCommonEventRouterError: {
		_enum: {
			FailedProcessing: "SpRuntimeDispatchError",
			NoReceiver: "Null",
		},
	},
	/**
	 * Lookup106: pallet_ethy::types::EthySigningRequest
	 **/
	PalletEthyEthySigningRequest: {
		_enum: {
			Ethereum: "PalletEthyEthereumEventInfo",
			XrplTx: "Bytes",
		},
	},
	/**
	 * Lookup107: pallet_ethy::types::EthereumEventInfo
	 **/
	PalletEthyEthereumEventInfo: {
		source: "H160",
		destination: "H160",
		message: "Bytes",
		validatorSetId: "u64",
		eventProofId: "u64",
	},
	/**
	 * Lookup108: pallet_ethy::types::EventClaim
	 **/
	PalletEthyEventClaim: {
		txHash: "H256",
		source: "H160",
		destination: "H160",
		data: "Bytes",
	},
	/**
	 * Lookup109: pallet_ethereum::pallet::Event
	 **/
	PalletEthereumEvent: {
		_enum: {
			Executed: {
				from: "H160",
				to: "H160",
				transactionHash: "H256",
				exitReason: "EvmCoreErrorExitReason",
			},
		},
	},
	/**
	 * Lookup110: evm_core::error::ExitReason
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
	 * Lookup111: evm_core::error::ExitSucceed
	 **/
	EvmCoreErrorExitSucceed: {
		_enum: ["Stopped", "Returned", "Suicided"],
	},
	/**
	 * Lookup112: evm_core::error::ExitError
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
			__Unused14: "Null",
			InvalidCode: "u8",
		},
	},
	/**
	 * Lookup116: evm_core::error::ExitRevert
	 **/
	EvmCoreErrorExitRevert: {
		_enum: ["Reverted"],
	},
	/**
	 * Lookup117: evm_core::error::ExitFatal
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
	 * Lookup118: pallet_evm::pallet::Event<T>
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
	 * Lookup119: ethereum::log::Log
	 **/
	EthereumLog: {
		address: "H160",
		topics: "Vec<H256>",
		data: "Bytes",
	},
	/**
	 * Lookup121: pallet_evm_chain_id::pallet::Event<T>
	 **/
	PalletEvmChainIdEvent: {
		_enum: {
			ChainIdSet: "u64",
		},
	},
	/**
	 * Lookup122: pallet_erc20_peg::RawEvent<seed_primitives::signature::AccountId20, BlockNumber>
	 **/
	PalletErc20PegRawEvent: {
		_enum: {
			Erc20DepositDelayed: "(u64,u32,u128,SeedPrimitivesSignatureAccountId20)",
			Erc20WithdrawalDelayed: "(u64,u32,u128,H160)",
			DelayedErc20DepositFailed: "(u64,SeedPrimitivesSignatureAccountId20)",
			DelayedErc20WithdrawalFailed: "(u32,H160)",
			Erc20Deposit: "(u32,u128,SeedPrimitivesSignatureAccountId20)",
			Erc20Withdraw: "(u32,u128,H160)",
			Erc20DepositFail: "(H160,Bytes)",
			SetContractAddress: "H160",
			PaymentDelaySet: "(u32,u128,u32)",
			NoAvailableDelayedPaymentIds: "Null",
		},
	},
	/**
	 * Lookup123: pallet_nft_peg::pallet::Event<T>
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
	 * Lookup129: pallet_fee_proxy::pallet::Event<T>
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
	 * Lookup130: pallet_fee_control::pallet::Event<T>
	 **/
	PalletFeeControlEvent: "Null",
	/**
	 * Lookup131: pallet_xls20::pallet::Event<T>
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
				mappings: "Vec<(u32,[u8;64])>",
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
	 * Lookup135: pallet_proxy::pallet::Event<T>
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
	 * Lookup136: seed_runtime::impls::ProxyType
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
	 * Lookup138: pallet_futurepass::pallet::Event<T>
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
			DefaultFuturepassSet: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				futurepass: "Option<SeedPrimitivesSignatureAccountId20>",
			},
			ProxyExecuted: {
				delegate: "SeedPrimitivesSignatureAccountId20",
				result: "Result<Null, SpRuntimeDispatchError>",
			},
			FuturepassAssetsMigrated: {
				evmFuturepass: "SeedPrimitivesSignatureAccountId20",
				futurepass: "SeedPrimitivesSignatureAccountId20",
				assets: "Vec<u32>",
				collections: "Vec<u32>",
			},
			FuturepassMigratorSet: {
				migrator: "SeedPrimitivesSignatureAccountId20",
			},
		},
	},
	/**
	 * Lookup139: frame_system::Phase
	 **/
	FrameSystemPhase: {
		_enum: {
			ApplyExtrinsic: "u32",
			Finalization: "Null",
			Initialization: "Null",
		},
	},
	/**
	 * Lookup141: frame_system::LastRuntimeUpgradeInfo
	 **/
	FrameSystemLastRuntimeUpgradeInfo: {
		specVersion: "Compact<u32>",
		specName: "Text",
	},
	/**
	 * Lookup143: frame_system::pallet::Call<T>
	 **/
	FrameSystemCall: {
		_enum: {
			fill_block: {
				ratio: "Perbill",
			},
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
	 * Lookup146: frame_system::limits::BlockWeights
	 **/
	FrameSystemLimitsBlockWeights: {
		baseBlock: "WeightV1",
		maxBlock: "WeightV1",
		perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
	},
	/**
	 * Lookup147: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
	 **/
	FrameSupportDispatchPerDispatchClassWeightsPerClass: {
		normal: "FrameSystemLimitsWeightsPerClass",
		operational: "FrameSystemLimitsWeightsPerClass",
		mandatory: "FrameSystemLimitsWeightsPerClass",
	},
	/**
	 * Lookup148: frame_system::limits::WeightsPerClass
	 **/
	FrameSystemLimitsWeightsPerClass: {
		baseExtrinsic: "WeightV1",
		maxExtrinsic: "Option<WeightV1>",
		maxTotal: "Option<WeightV1>",
		reserved: "Option<WeightV1>",
	},
	/**
	 * Lookup150: frame_system::limits::BlockLength
	 **/
	FrameSystemLimitsBlockLength: {
		max: "FrameSupportDispatchPerDispatchClassU32",
	},
	/**
	 * Lookup151: frame_support::dispatch::PerDispatchClass<T>
	 **/
	FrameSupportDispatchPerDispatchClassU32: {
		normal: "u32",
		operational: "u32",
		mandatory: "u32",
	},
	/**
	 * Lookup152: sp_weights::RuntimeDbWeight
	 **/
	SpWeightsRuntimeDbWeight: {
		read: "u64",
		write: "u64",
	},
	/**
	 * Lookup153: sp_version::RuntimeVersion
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
	 * Lookup157: frame_system::pallet::Error<T>
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
	 * Lookup160: sp_consensus_babe::app::Public
	 **/
	SpConsensusBabeAppPublic: "SpCoreSr25519Public",
	/**
	 * Lookup163: sp_consensus_babe::digests::NextConfigDescriptor
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
	 * Lookup165: sp_consensus_babe::AllowedSlots
	 **/
	SpConsensusBabeAllowedSlots: {
		_enum: ["PrimarySlots", "PrimaryAndSecondaryPlainSlots", "PrimaryAndSecondaryVRFSlots"],
	},
	/**
	 * Lookup169: sp_consensus_babe::digests::PreDigest
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
	 * Lookup170: sp_consensus_babe::digests::PrimaryPreDigest
	 **/
	SpConsensusBabeDigestsPrimaryPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
		vrfOutput: "[u8;32]",
		vrfProof: "[u8;64]",
	},
	/**
	 * Lookup171: sp_consensus_babe::digests::SecondaryPlainPreDigest
	 **/
	SpConsensusBabeDigestsSecondaryPlainPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
	},
	/**
	 * Lookup172: sp_consensus_babe::digests::SecondaryVRFPreDigest
	 **/
	SpConsensusBabeDigestsSecondaryVRFPreDigest: {
		authorityIndex: "u32",
		slot: "u64",
		vrfOutput: "[u8;32]",
		vrfProof: "[u8;64]",
	},
	/**
	 * Lookup174: sp_consensus_babe::BabeEpochConfiguration
	 **/
	SpConsensusBabeBabeEpochConfiguration: {
		c: "(u64,u64)",
		allowedSlots: "SpConsensusBabeAllowedSlots",
	},
	/**
	 * Lookup175: pallet_babe::pallet::Call<T>
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
	 * Lookup176: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
	 **/
	SpConsensusSlotsEquivocationProof: {
		offender: "SpConsensusBabeAppPublic",
		slot: "u64",
		firstHeader: "SpRuntimeHeader",
		secondHeader: "SpRuntimeHeader",
	},
	/**
	 * Lookup177: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
	 **/
	SpRuntimeHeader: {
		parentHash: "H256",
		number: "Compact<u32>",
		stateRoot: "H256",
		extrinsicsRoot: "H256",
		digest: "SpRuntimeDigest",
	},
	/**
	 * Lookup178: sp_runtime::traits::BlakeTwo256
	 **/
	SpRuntimeBlakeTwo256: "Null",
	/**
	 * Lookup179: sp_session::MembershipProof
	 **/
	SpSessionMembershipProof: {
		session: "u32",
		trieNodes: "Vec<Bytes>",
		validatorCount: "u32",
	},
	/**
	 * Lookup180: pallet_babe::pallet::Error<T>
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
	 * Lookup181: pallet_timestamp::pallet::Call<T>
	 **/
	PalletTimestampCall: {
		_enum: {
			set: {
				now: "Compact<u64>",
			},
		},
	},
	/**
	 * Lookup185: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<seed_runtime::RuntimeCall, primitive_types::H256>, BlockNumber, seed_runtime::OriginCaller, seed_primitives::signature::AccountId20>
	 **/
	PalletSchedulerScheduledV3: {
		maybeId: "Option<Bytes>",
		priority: "u8",
		call: "FrameSupportScheduleMaybeHashed",
		maybePeriodic: "Option<(u32,u32)>",
		origin: "SeedRuntimeOriginCaller",
	},
	/**
	 * Lookup186: frame_support::traits::schedule::MaybeHashed<seed_runtime::RuntimeCall, primitive_types::H256>
	 **/
	FrameSupportScheduleMaybeHashed: {
		_enum: {
			Value: "Call",
			Hash: "H256",
		},
	},
	/**
	 * Lookup188: pallet_scheduler::pallet::Call<T>
	 **/
	PalletSchedulerCall: {
		_enum: {
			schedule: {
				when: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "FrameSupportScheduleMaybeHashed",
			},
			cancel: {
				when: "u32",
				index: "u32",
			},
			schedule_named: {
				id: "Bytes",
				when: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "FrameSupportScheduleMaybeHashed",
			},
			cancel_named: {
				id: "Bytes",
			},
			schedule_after: {
				after: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "FrameSupportScheduleMaybeHashed",
			},
			schedule_named_after: {
				id: "Bytes",
				after: "u32",
				maybePeriodic: "Option<(u32,u32)>",
				priority: "u8",
				call: "FrameSupportScheduleMaybeHashed",
			},
		},
	},
	/**
	 * Lookup190: pallet_utility::pallet::Call<T>
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
		},
	},
	/**
	 * Lookup192: seed_runtime::OriginCaller
	 **/
	SeedRuntimeOriginCaller: {
		_enum: {
			system: "FrameSupportDispatchRawOrigin",
			__Unused1: "Null",
			Void: "SpCoreVoid",
			__Unused3: "Null",
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
		},
	},
	/**
	 * Lookup193: frame_support::dispatch::RawOrigin<seed_primitives::signature::AccountId20>
	 **/
	FrameSupportDispatchRawOrigin: {
		_enum: {
			Root: "Null",
			Signed: "SeedPrimitivesSignatureAccountId20",
			None: "Null",
		},
	},
	/**
	 * Lookup194: pallet_ethereum::RawOrigin
	 **/
	PalletEthereumRawOrigin: {
		_enum: {
			EthereumTransaction: "H160",
		},
	},
	/**
	 * Lookup195: sp_core::Void
	 **/
	SpCoreVoid: "Null",
	/**
	 * Lookup196: pallet_recovery::pallet::Call<T>
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
	 * Lookup198: pallet_preimage::pallet::Call<T>
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
	 * Lookup199: pallet_balances::pallet::Call<T, I>
	 **/
	PalletBalancesCall: {
		_enum: {
			transfer: {
				dest: "SeedPrimitivesSignatureAccountId20",
				value: "Compact<u128>",
			},
			set_balance: {
				who: "SeedPrimitivesSignatureAccountId20",
				newFree: "Compact<u128>",
				newReserved: "Compact<u128>",
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
		},
	},
	/**
	 * Lookup200: pallet_assets::pallet::Call<T, I>
	 **/
	PalletAssetsCall: {
		_enum: {
			create: {
				id: "Compact<u32>",
				admin: "SeedPrimitivesSignatureAccountId20",
				minBalance: "u128",
			},
			force_create: {
				id: "Compact<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
				isSufficient: "bool",
				minBalance: "Compact<u128>",
			},
			destroy: {
				id: "Compact<u32>",
				witness: "PalletAssetsDestroyWitness",
			},
			mint: {
				id: "Compact<u32>",
				beneficiary: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			burn: {
				id: "Compact<u32>",
				who: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			transfer: {
				id: "Compact<u32>",
				target: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			transfer_keep_alive: {
				id: "Compact<u32>",
				target: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			force_transfer: {
				id: "Compact<u32>",
				source: "SeedPrimitivesSignatureAccountId20",
				dest: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			freeze: {
				id: "Compact<u32>",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			thaw: {
				id: "Compact<u32>",
				who: "SeedPrimitivesSignatureAccountId20",
			},
			freeze_asset: {
				id: "Compact<u32>",
			},
			thaw_asset: {
				id: "Compact<u32>",
			},
			transfer_ownership: {
				id: "Compact<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
			},
			set_team: {
				id: "Compact<u32>",
				issuer: "SeedPrimitivesSignatureAccountId20",
				admin: "SeedPrimitivesSignatureAccountId20",
				freezer: "SeedPrimitivesSignatureAccountId20",
			},
			set_metadata: {
				id: "Compact<u32>",
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
			},
			clear_metadata: {
				id: "Compact<u32>",
			},
			force_set_metadata: {
				id: "Compact<u32>",
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
				isFrozen: "bool",
			},
			force_clear_metadata: {
				id: "Compact<u32>",
			},
			force_asset_status: {
				id: "Compact<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
				issuer: "SeedPrimitivesSignatureAccountId20",
				admin: "SeedPrimitivesSignatureAccountId20",
				freezer: "SeedPrimitivesSignatureAccountId20",
				minBalance: "Compact<u128>",
				isSufficient: "bool",
				isFrozen: "bool",
			},
			approve_transfer: {
				id: "Compact<u32>",
				delegate: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			cancel_approval: {
				id: "Compact<u32>",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			force_cancel_approval: {
				id: "Compact<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
				delegate: "SeedPrimitivesSignatureAccountId20",
			},
			transfer_approved: {
				id: "Compact<u32>",
				owner: "SeedPrimitivesSignatureAccountId20",
				destination: "SeedPrimitivesSignatureAccountId20",
				amount: "Compact<u128>",
			},
			touch: {
				id: "Compact<u32>",
			},
			refund: {
				id: "Compact<u32>",
				allowBurn: "bool",
			},
		},
	},
	/**
	 * Lookup201: pallet_assets::types::DestroyWitness
	 **/
	PalletAssetsDestroyWitness: {
		accounts: "Compact<u32>",
		sufficients: "Compact<u32>",
		approvals: "Compact<u32>",
	},
	/**
	 * Lookup202: pallet_assets_ext::pallet::Call<T>
	 **/
	PalletAssetsExtCall: {
		_enum: {
			create_asset: {
				name: "Bytes",
				symbol: "Bytes",
				decimals: "u8",
				minBalance: "Option<u128>",
				owner: "Option<SeedPrimitivesSignatureAccountId20>",
			},
		},
	},
	/**
	 * Lookup203: pallet_authorship::pallet::Call<T>
	 **/
	PalletAuthorshipCall: {
		_enum: {
			set_uncles: {
				newUncles: "Vec<SpRuntimeHeader>",
			},
		},
	},
	/**
	 * Lookup205: pallet_staking::pallet::pallet::Call<T>
	 **/
	PalletStakingPalletCall: {
		_enum: {
			bond: {
				controller: "SeedPrimitivesSignatureAccountId20",
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
			set_controller: {
				controller: "SeedPrimitivesSignatureAccountId20",
			},
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
		},
	},
	/**
	 * Lookup206: pallet_staking::RewardDestination<seed_primitives::signature::AccountId20>
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
	 * Lookup208: pallet_staking::pallet::pallet::ConfigOp<T>
	 **/
	PalletStakingPalletConfigOpU128: {
		_enum: {
			Noop: "Null",
			Set: "u128",
			Remove: "Null",
		},
	},
	/**
	 * Lookup209: pallet_staking::pallet::pallet::ConfigOp<T>
	 **/
	PalletStakingPalletConfigOpU32: {
		_enum: {
			Noop: "Null",
			Set: "u32",
			Remove: "Null",
		},
	},
	/**
	 * Lookup210: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
	 **/
	PalletStakingPalletConfigOpPercent: {
		_enum: {
			Noop: "Null",
			Set: "Percent",
			Remove: "Null",
		},
	},
	/**
	 * Lookup211: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
	 **/
	PalletStakingPalletConfigOpPerbill: {
		_enum: {
			Noop: "Null",
			Set: "Perbill",
			Remove: "Null",
		},
	},
	/**
	 * Lookup212: pallet_session::pallet::Call<T>
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
	 * Lookup213: seed_runtime::SessionKeys
	 **/
	SeedRuntimeSessionKeys: {
		babe: "SpConsensusBabeAppPublic",
		imOnline: "PalletImOnlineSr25519AppSr25519Public",
		grandpa: "SpFinalityGrandpaAppPublic",
		ethy: "SeedPrimitivesEthyCryptoAppCryptoPublic",
	},
	/**
	 * Lookup214: seed_primitives::ethy::crypto::app_crypto::Public
	 **/
	SeedPrimitivesEthyCryptoAppCryptoPublic: "SpCoreEcdsaPublic",
	/**
	 * Lookup215: sp_core::ecdsa::Public
	 **/
	SpCoreEcdsaPublic: "[u8;33]",
	/**
	 * Lookup217: pallet_grandpa::pallet::Call<T>
	 **/
	PalletGrandpaCall: {
		_enum: {
			report_equivocation: {
				equivocationProof: "SpFinalityGrandpaEquivocationProof",
				keyOwnerProof: "SpCoreVoid",
			},
			report_equivocation_unsigned: {
				equivocationProof: "SpFinalityGrandpaEquivocationProof",
				keyOwnerProof: "SpCoreVoid",
			},
			note_stalled: {
				delay: "u32",
				bestFinalizedBlockNumber: "u32",
			},
		},
	},
	/**
	 * Lookup218: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
	 **/
	SpFinalityGrandpaEquivocationProof: {
		setId: "u64",
		equivocation: "SpFinalityGrandpaEquivocation",
	},
	/**
	 * Lookup219: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
	 **/
	SpFinalityGrandpaEquivocation: {
		_enum: {
			Prevote: "FinalityGrandpaEquivocationPrevote",
			Precommit: "FinalityGrandpaEquivocationPrecommit",
		},
	},
	/**
	 * Lookup220: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
	 **/
	FinalityGrandpaEquivocationPrevote: {
		roundNumber: "u64",
		identity: "SpFinalityGrandpaAppPublic",
		first: "(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)",
		second: "(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)",
	},
	/**
	 * Lookup221: finality_grandpa::Prevote<primitive_types::H256, N>
	 **/
	FinalityGrandpaPrevote: {
		targetHash: "H256",
		targetNumber: "u32",
	},
	/**
	 * Lookup222: sp_finality_grandpa::app::Signature
	 **/
	SpFinalityGrandpaAppSignature: "SpCoreEd25519Signature",
	/**
	 * Lookup223: sp_core::ed25519::Signature
	 **/
	SpCoreEd25519Signature: "[u8;64]",
	/**
	 * Lookup225: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
	 **/
	FinalityGrandpaEquivocationPrecommit: {
		roundNumber: "u64",
		identity: "SpFinalityGrandpaAppPublic",
		first: "(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)",
		second: "(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)",
	},
	/**
	 * Lookup226: finality_grandpa::Precommit<primitive_types::H256, N>
	 **/
	FinalityGrandpaPrecommit: {
		targetHash: "H256",
		targetNumber: "u32",
	},
	/**
	 * Lookup228: pallet_im_online::pallet::Call<T>
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
	 * Lookup229: pallet_im_online::Heartbeat<BlockNumber>
	 **/
	PalletImOnlineHeartbeat: {
		blockNumber: "u32",
		networkState: "SpCoreOffchainOpaqueNetworkState",
		sessionIndex: "u32",
		authorityIndex: "u32",
		validatorsLen: "u32",
	},
	/**
	 * Lookup230: sp_core::offchain::OpaqueNetworkState
	 **/
	SpCoreOffchainOpaqueNetworkState: {
		peerId: "OpaquePeerId",
		externalAddresses: "Vec<OpaqueMultiaddr>",
	},
	/**
	 * Lookup234: pallet_im_online::sr25519::app_sr25519::Signature
	 **/
	PalletImOnlineSr25519AppSr25519Signature: "SpCoreSr25519Signature",
	/**
	 * Lookup235: sp_core::sr25519::Signature
	 **/
	SpCoreSr25519Signature: "[u8;64]",
	/**
	 * Lookup236: pallet_sudo::pallet::Call<T>
	 **/
	PalletSudoCall: {
		_enum: {
			sudo: {
				call: "Call",
			},
			sudo_unchecked_weight: {
				call: "Call",
				weight: "WeightV1",
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
	 * Lookup237: pallet_dex::pallet::Call<T>
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
	 * Lookup238: pallet_nft::pallet::Call<T>
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
				crossChainCompatibility: "PalletNftCrossChainCompatibility",
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
		},
	},
	/**
	 * Lookup239: pallet_sft::pallet::Call<T>
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
		},
	},
	/**
	 * Lookup243: pallet_xrpl_bridge::pallet::Call<T>
	 **/
	PalletXrplBridgeCall: {
		_enum: {
			submit_transaction: {
				ledgerIndex: "u64",
				transactionHash: "H512",
				transaction: "PalletXrplBridgeHelpersXrplTxData",
				timestamp: "u64",
			},
			submit_challenge: {
				transactionHash: "H512",
			},
			withdraw_xrp: {
				amount: "u128",
				destination: "H160",
			},
			add_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			remove_relayer: {
				relayer: "SeedPrimitivesSignatureAccountId20",
			},
			set_door_tx_fee: {
				fee: "u64",
			},
			set_door_address: {
				doorAddress: "H160",
			},
			set_ticket_sequence_next_allocation: {
				startTicketSequence: "u32",
				ticketBucketSize: "u32",
			},
			set_ticket_sequence_current_allocation: {
				ticketSequence: "u32",
				startTicketSequence: "u32",
				ticketBucketSize: "u32",
			},
			reset_settled_xrpl_tx_data: {
				highestSettledLedgerIndex: "u32",
				submissionWindowWidth: "u32",
				settledTxData:
					"Option<Vec<(H512,u32,PalletXrplBridgeHelpersXrpTransaction,SeedPrimitivesSignatureAccountId20)>>",
			},
		},
	},
	/**
	 * Lookup244: pallet_xrpl_bridge::helpers::XrplTxData
	 **/
	PalletXrplBridgeHelpersXrplTxData: {
		_enum: {
			Payment: {
				amount: "u128",
				address: "H160",
			},
			CurrencyPayment: {
				amount: "u128",
				address: "H160",
				currencyId: "H256",
			},
			Xls20: "Null",
		},
	},
	/**
	 * Lookup248: pallet_xrpl_bridge::helpers::XrpTransaction
	 **/
	PalletXrplBridgeHelpersXrpTransaction: {
		transactionHash: "H512",
		transaction: "PalletXrplBridgeHelpersXrplTxData",
		timestamp: "u64",
	},
	/**
	 * Lookup249: pallet_token_approvals::pallet::Call<T>
	 **/
	PalletTokenApprovalsCall: {
		_enum: {
			erc721_approval: {
				caller: "SeedPrimitivesSignatureAccountId20",
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				tokenId: "(u32,u32)",
			},
			erc721_remove_approval: {
				tokenId: "(u32,u32)",
			},
			erc20_approval: {
				caller: "SeedPrimitivesSignatureAccountId20",
				spender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
			},
			erc20_update_approval: {
				caller: "SeedPrimitivesSignatureAccountId20",
				spender: "SeedPrimitivesSignatureAccountId20",
				assetId: "u32",
				amount: "u128",
			},
			erc721_approval_for_all: {
				caller: "SeedPrimitivesSignatureAccountId20",
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				collectionUuid: "u32",
				approved: "bool",
			},
			erc1155_approval_for_all: {
				caller: "SeedPrimitivesSignatureAccountId20",
				operatorAccount: "SeedPrimitivesSignatureAccountId20",
				collectionUuid: "u32",
				approved: "bool",
			},
		},
	},
	/**
	 * Lookup250: pallet_echo::pallet::Call<T>
	 **/
	PalletEchoCall: {
		_enum: {
			ping: {
				destination: "H160",
			},
		},
	},
	/**
	 * Lookup251: pallet_marketplace::pallet::Call<T>
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
			update_fixed_price: {
				listingId: "u128",
				newPrice: "u128",
			},
			buy: {
				listingId: "u128",
			},
			auction_nft: {
				collectionId: "u32",
				serialNumbers: "Vec<u32>",
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
	 * Lookup253: pallet_election_provider_multi_phase::pallet::Call<T>
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
	 * Lookup254: pallet_election_provider_multi_phase::RawSolution<seed_runtime::NposCompactSolution16>
	 **/
	PalletElectionProviderMultiPhaseRawSolution: {
		solution: "SeedRuntimeNposCompactSolution16",
		score: "SpNposElectionsElectionScore",
		round: "u32",
	},
	/**
	 * Lookup255: seed_runtime::NposCompactSolution16
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
	 * Lookup306: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
	 **/
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
		voters: "Compact<u32>",
		targets: "Compact<u32>",
	},
	/**
	 * Lookup310: sp_npos_elections::Support<seed_primitives::signature::AccountId20>
	 **/
	SpNposElectionsSupport: {
		total: "u128",
		voters: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
	},
	/**
	 * Lookup311: pallet_bags_list::pallet::Call<T, I>
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
	 * Lookup312: pallet_ethy::Call<T>
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
	 * Lookup316: pallet_ethy::types::NotarizationPayload
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
	 * Lookup317: pallet_ethy::types::CheckedEthCallResult
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
	 * Lookup318: pallet_ethy::types::EventClaimResult
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
	 * Lookup319: seed_primitives::ethy::crypto::app_crypto::Signature
	 **/
	SeedPrimitivesEthyCryptoAppCryptoSignature: "SpCoreEcdsaSignature",
	/**
	 * Lookup320: sp_core::ecdsa::Signature
	 **/
	SpCoreEcdsaSignature: "[u8;65]",
	/**
	 * Lookup322: pallet_ethereum::pallet::Call<T>
	 **/
	PalletEthereumCall: {
		_enum: {
			transact: {
				transaction: "EthereumTransactionTransactionV2",
			},
		},
	},
	/**
	 * Lookup323: ethereum::transaction::TransactionV2
	 **/
	EthereumTransactionTransactionV2: {
		_enum: {
			Legacy: "EthereumTransactionLegacyTransaction",
			EIP2930: "EthereumTransactionEip2930Transaction",
			EIP1559: "EthereumTransactionEip1559Transaction",
		},
	},
	/**
	 * Lookup324: ethereum::transaction::LegacyTransaction
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
	 * Lookup327: ethereum::transaction::TransactionAction
	 **/
	EthereumTransactionTransactionAction: {
		_enum: {
			Call: "H160",
			Create: "Null",
		},
	},
	/**
	 * Lookup328: ethereum::transaction::TransactionSignature
	 **/
	EthereumTransactionTransactionSignature: {
		v: "u64",
		r: "H256",
		s: "H256",
	},
	/**
	 * Lookup330: ethereum::transaction::EIP2930Transaction
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
	 * Lookup332: ethereum::transaction::AccessListItem
	 **/
	EthereumTransactionAccessListItem: {
		address: "H160",
		storageKeys: "Vec<H256>",
	},
	/**
	 * Lookup333: ethereum::transaction::EIP1559Transaction
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
	 * Lookup334: pallet_evm::pallet::Call<T>
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
	 * Lookup338: pallet_evm_chain_id::pallet::Call<T>
	 **/
	PalletEvmChainIdCall: {
		_enum: {
			set_chain_id: {
				chainId: "Compact<u64>",
			},
		},
	},
	/**
	 * Lookup339: pallet_erc20_peg::Call<T>
	 **/
	PalletErc20PegCall: {
		_enum: {
			activate_deposits: {
				activate: "bool",
			},
			activate_withdrawals: {
				activate: "bool",
			},
			withdraw: {
				assetId: "u32",
				amount: "u128",
				beneficiary: "H160",
			},
			set_contract_address: {
				ethAddress: "H160",
			},
			set_erc20_meta: {
				details: "Vec<(H160,Bytes,u8)>",
			},
			set_payment_delay: {
				assetId: "u32",
				minBalance: "u128",
				delay: "u32",
			},
		},
	},
	/**
	 * Lookup342: pallet_nft_peg::pallet::Call<T>
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
	 * Lookup343: pallet_fee_proxy::pallet::Call<T>
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
	 * Lookup344: pallet_fee_control::pallet::Call<T>
	 **/
	PalletFeeControlCall: {
		_enum: {
			set_evm_base_fee: {
				value: "U256",
			},
			set_weight_multiplier: {
				value: "Perbill",
			},
		},
	},
	/**
	 * Lookup345: pallet_xls20::pallet::Call<T>
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
				tokenMappings: "Vec<(u32,[u8;64])>",
			},
		},
	},
	/**
	 * Lookup348: pallet_proxy::pallet::Call<T>
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
	 * Lookup350: pallet_futurepass::pallet::Call<T>
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
			set_futurepass_migrator: {
				migrator: "SeedPrimitivesSignatureAccountId20",
			},
			migrate_evm_futurepass: {
				owner: "SeedPrimitivesSignatureAccountId20",
				evmFuturepass: "SeedPrimitivesSignatureAccountId20",
				assetIds: "Vec<u32>",
				collectionIds: "Vec<u32>",
			},
		},
	},
	/**
	 * Lookup351: pallet_scheduler::pallet::Error<T>
	 **/
	PalletSchedulerError: {
		_enum: ["FailedToSchedule", "NotFound", "TargetBlockNumberInPast", "RescheduleNoChange"],
	},
	/**
	 * Lookup352: pallet_utility::pallet::Error<T>
	 **/
	PalletUtilityError: {
		_enum: ["TooManyCalls"],
	},
	/**
	 * Lookup353: pallet_recovery::RecoveryConfig<BlockNumber, Balance, sp_core::bounded::bounded_vec::BoundedVec<seed_primitives::signature::AccountId20, S>>
	 **/
	PalletRecoveryRecoveryConfig: {
		delayPeriod: "u32",
		deposit: "u128",
		friends: "Vec<SeedPrimitivesSignatureAccountId20>",
		threshold: "u16",
	},
	/**
	 * Lookup356: pallet_recovery::ActiveRecovery<BlockNumber, Balance, sp_core::bounded::bounded_vec::BoundedVec<seed_primitives::signature::AccountId20, S>>
	 **/
	PalletRecoveryActiveRecovery: {
		created: "u32",
		deposit: "u128",
		friends: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup357: pallet_recovery::pallet::Error<T>
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
	 * Lookup358: pallet_preimage::RequestStatus<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletPreimageRequestStatus: {
		_enum: {
			Unrequested: "Option<(SeedPrimitivesSignatureAccountId20,u128)>",
			Requested: "u32",
		},
	},
	/**
	 * Lookup361: pallet_preimage::pallet::Error<T>
	 **/
	PalletPreimageError: {
		_enum: ["TooLarge", "AlreadyNoted", "NotAuthorized", "NotNoted", "Requested", "NotRequested"],
	},
	/**
	 * Lookup363: pallet_balances::BalanceLock<Balance>
	 **/
	PalletBalancesBalanceLock: {
		id: "[u8;8]",
		amount: "u128",
		reasons: "PalletBalancesReasons",
	},
	/**
	 * Lookup364: pallet_balances::Reasons
	 **/
	PalletBalancesReasons: {
		_enum: ["Fee", "Misc", "All"],
	},
	/**
	 * Lookup367: pallet_balances::ReserveData<ReserveIdentifier, Balance>
	 **/
	PalletBalancesReserveData: {
		id: "[u8;8]",
		amount: "u128",
	},
	/**
	 * Lookup369: pallet_balances::Releases
	 **/
	PalletBalancesReleases: {
		_enum: ["V1_0_0", "V2_0_0"],
	},
	/**
	 * Lookup370: pallet_balances::pallet::Error<T, I>
	 **/
	PalletBalancesError: {
		_enum: [
			"VestingBalance",
			"LiquidityRestrictions",
			"InsufficientBalance",
			"ExistentialDeposit",
			"KeepAlive",
			"ExistingVestingSchedule",
			"DeadAccount",
			"TooManyReserves",
		],
	},
	/**
	 * Lookup371: pallet_assets::types::AssetDetails<Balance, seed_primitives::signature::AccountId20, DepositBalance>
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
		isFrozen: "bool",
	},
	/**
	 * Lookup373: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
	 **/
	PalletAssetsAssetAccount: {
		balance: "u128",
		isFrozen: "bool",
		reason: "PalletAssetsExistenceReason",
		extra: "Null",
	},
	/**
	 * Lookup374: pallet_assets::types::ExistenceReason<Balance>
	 **/
	PalletAssetsExistenceReason: {
		_enum: {
			Consumer: "Null",
			Sufficient: "Null",
			DepositHeld: "u128",
			DepositRefunded: "Null",
		},
	},
	/**
	 * Lookup376: pallet_assets::types::Approval<Balance, DepositBalance>
	 **/
	PalletAssetsApproval: {
		amount: "u128",
		deposit: "u128",
	},
	/**
	 * Lookup377: pallet_assets::types::AssetMetadata<DepositBalance, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
	 **/
	PalletAssetsAssetMetadata: {
		deposit: "u128",
		name: "Bytes",
		symbol: "Bytes",
		decimals: "u8",
		isFrozen: "bool",
	},
	/**
	 * Lookup379: pallet_assets::pallet::Error<T, I>
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
			"NoProvider",
			"BadMetadata",
			"Unapproved",
			"WouldDie",
			"AlreadyExists",
			"NoDeposit",
			"WouldBurn",
		],
	},
	/**
	 * Lookup383: frame_support::PalletId
	 **/
	FrameSupportPalletId: "[u8;8]",
	/**
	 * Lookup384: pallet_assets_ext::pallet::Error<T>
	 **/
	PalletAssetsExtError: {
		_enum: [
			"NoAvailableIds",
			"BalanceLow",
			"NoAccount",
			"Overflow",
			"MaxHolds",
			"CreateAssetFailed",
		],
	},
	/**
	 * Lookup386: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, seed_primitives::signature::AccountId20>
	 **/
	PalletAuthorshipUncleEntryItem: {
		_enum: {
			InclusionHeight: "u32",
			Uncle: "(H256,Option<SeedPrimitivesSignatureAccountId20>)",
		},
	},
	/**
	 * Lookup388: pallet_authorship::pallet::Error<T>
	 **/
	PalletAuthorshipError: {
		_enum: [
			"InvalidUncleParent",
			"UnclesAlreadySet",
			"TooManyUncles",
			"GenesisUncle",
			"TooHighUncle",
			"UncleAlreadyIncluded",
			"OldUncle",
		],
	},
	/**
	 * Lookup389: pallet_staking::StakingLedger<T>
	 **/
	PalletStakingStakingLedger: {
		stash: "SeedPrimitivesSignatureAccountId20",
		total: "Compact<u128>",
		active: "Compact<u128>",
		unlocking: "Vec<PalletStakingUnlockChunk>",
		claimedRewards: "Vec<u32>",
	},
	/**
	 * Lookup391: pallet_staking::UnlockChunk<Balance>
	 **/
	PalletStakingUnlockChunk: {
		value: "Compact<u128>",
		era: "Compact<u32>",
	},
	/**
	 * Lookup394: pallet_staking::Nominations<T>
	 **/
	PalletStakingNominations: {
		targets: "Vec<SeedPrimitivesSignatureAccountId20>",
		submittedIn: "u32",
		suppressed: "bool",
	},
	/**
	 * Lookup396: pallet_staking::ActiveEraInfo
	 **/
	PalletStakingActiveEraInfo: {
		index: "u32",
		start: "Option<u64>",
	},
	/**
	 * Lookup398: pallet_staking::EraRewardPoints<seed_primitives::signature::AccountId20>
	 **/
	PalletStakingEraRewardPoints: {
		total: "u32",
		individual: "BTreeMap<SeedPrimitivesSignatureAccountId20, u32>",
	},
	/**
	 * Lookup402: pallet_staking::Forcing
	 **/
	PalletStakingForcing: {
		_enum: ["NotForcing", "ForceNew", "ForceNone", "ForceAlways"],
	},
	/**
	 * Lookup404: pallet_staking::UnappliedSlash<seed_primitives::signature::AccountId20, Balance>
	 **/
	PalletStakingUnappliedSlash: {
		validator: "SeedPrimitivesSignatureAccountId20",
		own: "u128",
		others: "Vec<(SeedPrimitivesSignatureAccountId20,u128)>",
		reporters: "Vec<SeedPrimitivesSignatureAccountId20>",
		payout: "u128",
	},
	/**
	 * Lookup406: pallet_staking::slashing::SlashingSpans
	 **/
	PalletStakingSlashingSlashingSpans: {
		spanIndex: "u32",
		lastStart: "u32",
		lastNonzeroSlash: "u32",
		prior: "Vec<u32>",
	},
	/**
	 * Lookup407: pallet_staking::slashing::SpanRecord<Balance>
	 **/
	PalletStakingSlashingSpanRecord: {
		slashed: "u128",
		paidOut: "u128",
	},
	/**
	 * Lookup410: pallet_staking::Releases
	 **/
	PalletStakingReleases: {
		_enum: [
			"V1_0_0Ancient",
			"V2_0_0",
			"V3_0_0",
			"V4_0_0",
			"V5_0_0",
			"V6_0_0",
			"V7_0_0",
			"V8_0_0",
			"V9_0_0",
			"V10_0_0",
			"V11_0_0",
			"V12_0_0",
		],
	},
	/**
	 * Lookup411: pallet_staking::pallet::pallet::Error<T>
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
	 * Lookup412: sp_staking::offence::OffenceDetails<seed_primitives::signature::AccountId20, Offender>
	 **/
	SpStakingOffenceOffenceDetails: {
		offender: "(SeedPrimitivesSignatureAccountId20,PalletStakingExposure)",
		reporters: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup417: sp_core::crypto::KeyTypeId
	 **/
	SpCoreCryptoKeyTypeId: "[u8;4]",
	/**
	 * Lookup418: pallet_session::pallet::Error<T>
	 **/
	PalletSessionError: {
		_enum: ["InvalidProof", "NoAssociatedValidatorId", "DuplicatedKey", "NoKeys", "NoAccount"],
	},
	/**
	 * Lookup419: pallet_grandpa::StoredState<N>
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
	 * Lookup420: pallet_grandpa::StoredPendingChange<N, Limit>
	 **/
	PalletGrandpaStoredPendingChange: {
		scheduledAt: "u32",
		delay: "u32",
		nextAuthorities: "Vec<(SpFinalityGrandpaAppPublic,u64)>",
		forced: "Option<u32>",
	},
	/**
	 * Lookup422: pallet_grandpa::pallet::Error<T>
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
	 * Lookup426: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
	 **/
	PalletImOnlineBoundedOpaqueNetworkState: {
		peerId: "Bytes",
		externalAddresses: "Vec<Bytes>",
	},
	/**
	 * Lookup430: pallet_im_online::pallet::Error<T>
	 **/
	PalletImOnlineError: {
		_enum: ["InvalidKey", "DuplicatedHeartbeat"],
	},
	/**
	 * Lookup431: pallet_sudo::pallet::Error<T>
	 **/
	PalletSudoError: {
		_enum: ["RequireSudo"],
	},
	/**
	 * Lookup433: pallet_transaction_payment::Releases
	 **/
	PalletTransactionPaymentReleases: {
		_enum: ["V1Ancient", "V2"],
	},
	/**
	 * Lookup435: pallet_dex::TradingPairStatus
	 **/
	PalletDexTradingPairStatus: {
		_enum: ["NotEnabled", "Enabled"],
	},
	/**
	 * Lookup437: pallet_dex::pallet::Error<T>
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
	 * Lookup438: pallet_nft::types::CollectionInformation<seed_primitives::signature::AccountId20, MaxTokensPerCollection, StringLimit>
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
		crossChainCompatibility: "PalletNftCrossChainCompatibility",
		ownedTokens: "Vec<PalletNftTokenOwnership>",
	},
	/**
	 * Lookup440: pallet_nft::types::TokenOwnership<seed_primitives::signature::AccountId20, MaxTokensPerCollection>
	 **/
	PalletNftTokenOwnership: {
		owner: "SeedPrimitivesSignatureAccountId20",
		ownedSerials: "Vec<u32>",
	},
	/**
	 * Lookup442: seed_primitives::nft::TokenLockReason
	 **/
	SeedPrimitivesNftTokenLockReason: {
		_enum: {
			Listed: "u128",
		},
	},
	/**
	 * Lookup443: pallet_nft::pallet::Error<T>
	 **/
	PalletNftError: {
		_enum: [
			"CollectionNameInvalid",
			"NoAvailableIds",
			"NotTokenOwner",
			"NoToken",
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
			"NoCollectionFound",
			"InvalidMetadataPath",
			"InvalidOffer",
			"NotBuyer",
			"NotSeller",
			"IsTokenOwner",
			"InvalidNewOwner",
			"ZeroOffer",
			"TokenLimitExceeded",
			"MintLimitExceeded",
			"TokenOnAuction",
			"InvalidMaxIssuance",
			"MaxIssuanceAlreadySet",
			"MaxIssuanceReached",
			"AttemptedMintOnBridgedToken",
			"FailedMintOnBridgedToken",
			"CannotClaimNonClaimableCollections",
			"InitialIssuanceNotZero",
			"CollectionIssuanceNotZero",
			"BlockedMint",
		],
	},
	/**
	 * Lookup444: pallet_sft::types::SftCollectionInformation<seed_primitives::signature::AccountId20, StringLimit>
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
	 * Lookup445: pallet_sft::types::SftTokenInformation<seed_primitives::signature::AccountId20, StringLimit, MaxOwnersPerSftToken>
	 **/
	PalletSftSftTokenInformation: {
		tokenName: "Bytes",
		maxIssuance: "Option<u128>",
		tokenIssuance: "u128",
		ownedTokens: "Vec<(SeedPrimitivesSignatureAccountId20,PalletSftSftTokenBalance)>",
	},
	/**
	 * Lookup448: pallet_sft::types::SftTokenBalance
	 **/
	PalletSftSftTokenBalance: {
		freeBalance: "u128",
		reservedBalance: "u128",
	},
	/**
	 * Lookup450: pallet_sft::pallet::Error<T>
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
			"MaxIssuanceAlreadySet",
			"MaxIssuanceReached",
			"MaxOwnersReached",
			"Overflow",
		],
	},
	/**
	 * Lookup455: pallet_xrpl_bridge::helpers::XrplTicketSequenceParams
	 **/
	PalletXrplBridgeHelpersXrplTicketSequenceParams: {
		startSequence: "u32",
		bucketSize: "u32",
	},
	/**
	 * Lookup456: pallet_xrpl_bridge::pallet::Error<T>
	 **/
	PalletXrplBridgeError: {
		_enum: [
			"NotPermitted",
			"RelayerDoesNotExists",
			"WithdrawInvalidAmount",
			"DoorAddressNotSet",
			"TooManySigners",
			"InvalidSigners",
			"TxReplay",
			"NextTicketSequenceParamsNotSet",
			"NextTicketSequenceParamsInvalid",
			"TicketSequenceParamsInvalid",
			"CannotProcessMoreTransactionsAtThatBlock",
			"OutSideSubmissionWindow",
			"TooManyTransactionsPerLedger",
		],
	},
	/**
	 * Lookup459: pallet_token_approvals::pallet::Error<T>
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
	 * Lookup460: pallet_echo::pallet::Error<T>
	 **/
	PalletEchoError: {
		_enum: ["NoAvailableIds", "InvalidParameter", "InvalidAbiEncoding"],
	},
	/**
	 * Lookup461: pallet_marketplace::types::Marketplace<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceMarketplace: {
		account: "SeedPrimitivesSignatureAccountId20",
		entitlement: "Permill",
	},
	/**
	 * Lookup462: pallet_marketplace::types::Listing<T>
	 **/
	PalletMarketplaceListing: {
		_enum: {
			FixedPrice: "PalletMarketplaceFixedPriceListing",
			Auction: "PalletMarketplaceAuctionListing",
		},
	},
	/**
	 * Lookup463: pallet_marketplace::types::FixedPriceListing<T>
	 **/
	PalletMarketplaceFixedPriceListing: {
		paymentAsset: "u32",
		fixedPrice: "u128",
		close: "u32",
		buyer: "Option<SeedPrimitivesSignatureAccountId20>",
		seller: "SeedPrimitivesSignatureAccountId20",
		collectionId: "u32",
		serialNumbers: "Vec<u32>",
		royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup464: pallet_marketplace::types::AuctionListing<T>
	 **/
	PalletMarketplaceAuctionListing: {
		paymentAsset: "u32",
		reservePrice: "u128",
		close: "u32",
		seller: "SeedPrimitivesSignatureAccountId20",
		collectionId: "u32",
		serialNumbers: "Vec<u32>",
		royaltiesSchedule: "SeedPrimitivesNftRoyaltiesSchedule",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup465: pallet_marketplace::types::OfferType<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceOfferType: {
		_enum: {
			Simple: "PalletMarketplaceSimpleOffer",
		},
	},
	/**
	 * Lookup466: pallet_marketplace::types::SimpleOffer<seed_primitives::signature::AccountId20>
	 **/
	PalletMarketplaceSimpleOffer: {
		tokenId: "(u32,u32)",
		assetId: "u32",
		amount: "u128",
		buyer: "SeedPrimitivesSignatureAccountId20",
		marketplaceId: "Option<u32>",
	},
	/**
	 * Lookup469: pallet_marketplace::pallet::Error<T>
	 **/
	PalletMarketplaceError: {
		_enum: [
			"NoAvailableIds",
			"NotTokenOwner",
			"NoToken",
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
			"NoCollectionFound",
			"InvalidMetadataPath",
			"InvalidOffer",
			"NotBuyer",
			"NotSeller",
			"IsTokenOwner",
			"ZeroOffer",
			"TokenOnAuction",
		],
	},
	/**
	 * Lookup470: pallet_election_provider_multi_phase::Phase<Bn>
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
	 * Lookup472: pallet_election_provider_multi_phase::ReadySolution<seed_primitives::signature::AccountId20>
	 **/
	PalletElectionProviderMultiPhaseReadySolution: {
		supports: "Vec<(SeedPrimitivesSignatureAccountId20,SpNposElectionsSupport)>",
		score: "SpNposElectionsElectionScore",
		compute: "PalletElectionProviderMultiPhaseElectionCompute",
	},
	/**
	 * Lookup473: pallet_election_provider_multi_phase::RoundSnapshot<T>
	 **/
	PalletElectionProviderMultiPhaseRoundSnapshot: {
		voters: "Vec<(SeedPrimitivesSignatureAccountId20,u64,Vec<SeedPrimitivesSignatureAccountId20>)>",
		targets: "Vec<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup480: pallet_election_provider_multi_phase::signed::SignedSubmission<seed_primitives::signature::AccountId20, Balance, seed_runtime::NposCompactSolution16>
	 **/
	PalletElectionProviderMultiPhaseSignedSignedSubmission: {
		who: "SeedPrimitivesSignatureAccountId20",
		deposit: "u128",
		rawSolution: "PalletElectionProviderMultiPhaseRawSolution",
		callFee: "u128",
	},
	/**
	 * Lookup481: pallet_election_provider_multi_phase::pallet::Error<T>
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
		],
	},
	/**
	 * Lookup482: pallet_bags_list::list::Node<T, I>
	 **/
	PalletBagsListListNode: {
		id: "SeedPrimitivesSignatureAccountId20",
		prev: "Option<SeedPrimitivesSignatureAccountId20>",
		next: "Option<SeedPrimitivesSignatureAccountId20>",
		bagUpper: "u64",
		score: "u64",
	},
	/**
	 * Lookup483: pallet_bags_list::list::Bag<T, I>
	 **/
	PalletBagsListListBag: {
		head: "Option<SeedPrimitivesSignatureAccountId20>",
		tail: "Option<SeedPrimitivesSignatureAccountId20>",
	},
	/**
	 * Lookup484: pallet_bags_list::pallet::Error<T, I>
	 **/
	PalletBagsListError: {
		_enum: {
			List: "PalletBagsListListListError",
		},
	},
	/**
	 * Lookup485: pallet_bags_list::list::ListError
	 **/
	PalletBagsListListListError: {
		_enum: ["Duplicate", "NotHeavier", "NotInSameBag", "NodeNotFound"],
	},
	/**
	 * Lookup487: pallet_ethy::types::EventClaimStatus
	 **/
	PalletEthyEventClaimStatus: {
		_enum: ["Pending", "Challenged", "ProvenValid"],
	},
	/**
	 * Lookup491: pallet_ethy::types::CheckedEthCallRequest
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
	 * Lookup492: pallet_ethy::Error<T>
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
		],
	},
	/**
	 * Lookup495: fp_rpc::TransactionStatus
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
	 * Lookup498: ethbloom::Bloom
	 **/
	EthbloomBloom: "[u8;256]",
	/**
	 * Lookup500: ethereum::receipt::ReceiptV3
	 **/
	EthereumReceiptReceiptV3: {
		_enum: {
			Legacy: "EthereumReceiptEip658ReceiptData",
			EIP2930: "EthereumReceiptEip658ReceiptData",
			EIP1559: "EthereumReceiptEip658ReceiptData",
		},
	},
	/**
	 * Lookup501: ethereum::receipt::EIP658ReceiptData
	 **/
	EthereumReceiptEip658ReceiptData: {
		statusCode: "u8",
		usedGas: "U256",
		logsBloom: "EthbloomBloom",
		logs: "Vec<EthereumLog>",
	},
	/**
	 * Lookup502: ethereum::block::Block<ethereum::transaction::TransactionV2>
	 **/
	EthereumBlock: {
		header: "EthereumHeader",
		transactions: "Vec<EthereumTransactionTransactionV2>",
		ommers: "Vec<EthereumHeader>",
	},
	/**
	 * Lookup503: ethereum::header::Header
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
	 * Lookup504: ethereum_types::hash::H64
	 **/
	EthereumTypesHashH64: "[u8;8]",
	/**
	 * Lookup509: pallet_ethereum::pallet::Error<T>
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
	 * Lookup511: pallet_evm::pallet::Error<T>
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
		],
	},
	/**
	 * Lookup514: pallet_erc20_peg::types::PendingPayment
	 **/
	PalletErc20PegPendingPayment: {
		_enum: {
			Deposit: "PalletErc20PegErc20DepositEvent",
			Withdrawal: "PalletErc20PegWithdrawMessage",
		},
	},
	/**
	 * Lookup515: pallet_erc20_peg::types::Erc20DepositEvent
	 **/
	PalletErc20PegErc20DepositEvent: {
		tokenAddress: "H160",
		amount: "U256",
		beneficiary: "H160",
	},
	/**
	 * Lookup516: pallet_erc20_peg::types::WithdrawMessage
	 **/
	PalletErc20PegWithdrawMessage: {
		tokenAddress: "H160",
		amount: "U256",
		beneficiary: "H160",
	},
	/**
	 * Lookup517: pallet_erc20_peg::Error<T>
	 **/
	PalletErc20PegError: {
		_enum: [
			"CreateAssetFailed",
			"InvalidAmount",
			"InvalidPalletId",
			"DepositsPaused",
			"WithdrawalsPaused",
			"UnsupportedAsset",
			"EvmWithdrawalFailed",
			"InvalidAbiEncoding",
		],
	},
	/**
	 * Lookup518: pallet_nft_peg::types::BlockedTokenInfo<T>
	 **/
	PalletNftPegBlockedTokenInfo: {
		collectionId: "u32",
		destinationAddress: "SeedPrimitivesSignatureAccountId20",
		serialNumbers: "Vec<u32>",
	},
	/**
	 * Lookup519: pallet_nft_peg::pallet::Error<T>
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
	 * Lookup520: pallet_fee_proxy::pallet::Error<T>
	 **/
	PalletFeeProxyError: {
		_enum: ["NestedFeePreferenceCall", "FeeTokenIsGasToken"],
	},
	/**
	 * Lookup521: pallet_fee_control::FeeControlFeeConfig
	 **/
	PalletFeeControlFeeControlFeeConfig: {
		evmBaseFeePerGas: "U256",
		weightMultiplier: "Perbill",
		lengthMultiplier: "u128",
	},
	/**
	 * Lookup522: pallet_xls20::pallet::Error<T>
	 **/
	PalletXls20Error: {
		_enum: [
			"NotRelayer",
			"MappingAlreadyExists",
			"Xls20MintFeeTooLow",
			"NotXLS20Compatible",
			"NoToken",
			"NotCollectionOwner",
		],
	},
	/**
	 * Lookup525: pallet_proxy::ProxyDefinition<seed_primitives::signature::AccountId20, seed_runtime::impls::ProxyType, BlockNumber>
	 **/
	PalletProxyProxyDefinition: {
		delegate: "SeedPrimitivesSignatureAccountId20",
		proxyType: "SeedRuntimeImplsProxyType",
		delay: "u32",
	},
	/**
	 * Lookup529: pallet_proxy::Announcement<seed_primitives::signature::AccountId20, primitive_types::H256, BlockNumber>
	 **/
	PalletProxyAnnouncement: {
		real: "SeedPrimitivesSignatureAccountId20",
		callHash: "H256",
		height: "u32",
	},
	/**
	 * Lookup531: pallet_proxy::pallet::Error<T>
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
	 * Lookup532: pallet_futurepass::pallet::Error<T>
	 **/
	PalletFuturepassError: {
		_enum: [
			"AccountAlreadyRegistered",
			"DelegateNotRegistered",
			"DelegateAlreadyExists",
			"NotFuturepassOwner",
			"OwnerCannotUnregister",
			"PermissionDenied",
			"MigratorNotSet",
			"InvalidProxyType",
			"ExpiredDeadline",
			"InvalidDeadline",
			"InvalidSignature",
			"AccountParsingFailure",
			"RegisterDelegateSignerMismatch",
		],
	},
	/**
	 * Lookup534: seed_primitives::signature::EthereumSignature
	 **/
	SeedPrimitivesSignatureEthereumSignature: "SpCoreEcdsaSignature",
	/**
	 * Lookup536: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
	 **/
	FrameSystemExtensionsCheckNonZeroSender: "Null",
	/**
	 * Lookup537: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
	 **/
	FrameSystemExtensionsCheckSpecVersion: "Null",
	/**
	 * Lookup538: frame_system::extensions::check_tx_version::CheckTxVersion<T>
	 **/
	FrameSystemExtensionsCheckTxVersion: "Null",
	/**
	 * Lookup539: frame_system::extensions::check_genesis::CheckGenesis<T>
	 **/
	FrameSystemExtensionsCheckGenesis: "Null",
	/**
	 * Lookup542: frame_system::extensions::check_nonce::CheckNonce<T>
	 **/
	FrameSystemExtensionsCheckNonce: "Compact<u32>",
	/**
	 * Lookup543: frame_system::extensions::check_weight::CheckWeight<T>
	 **/
	FrameSystemExtensionsCheckWeight: "Null",
	/**
	 * Lookup544: pallet_transaction_payment::ChargeTransactionPayment<T>
	 **/
	PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
	/**
	 * Lookup546: seed_runtime::Runtime
	 **/
	SeedRuntimeRuntime: "Null",
};
