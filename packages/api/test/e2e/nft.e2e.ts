import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { hexToU8a, stringToHex } from "@polkadot/util";
import { options } from "@therootnetwork/api";

export const ALITH_PRIVATE_KEY =
	"0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133";
export const BOB_PRIVATE_KEY = "0x79c3b7fc0b7697b9414cb87adcb37317d1cab32818ae18c0e97ad76395d1fdcf";
const TOKEN_ID = 1124;
export const GAS_TOKEN_ID = 2;
let collectionOwner, tokenOwner;
let globalCollectionId;
let globalTokenIds;

describe("DEX RPC calls testing", () => {
	let api;
	let alith, bob;
	beforeAll(async () => {
		const providerUrl = "ws://127.0.0.1:9944/";
		const provider = new WsProvider(providerUrl);
		api = new ApiPromise(options({ provider }));
		await api.isReady;
		const keyring = new Keyring({ type: "ethereum" });
		alith = keyring.addFromSeed(hexToU8a(ALITH_PRIVATE_KEY));
		bob = keyring.addFromSeed(hexToU8a(BOB_PRIVATE_KEY));
		collectionOwner = alith;
	});

	afterAll(async () => {
		api.disconnect();
	});

	describe("NFTs", () => {
		let collectionId: number;

		beforeEach(async () => {
			// Create collection and series for each test to use
			const collectionName = "global-example-collection";
			const quantity = 3;
			const maxIssuance = null;
			const tokenOwner = null;
			const royalty = null;
			const crossChainCompatibility = { xrpl: false };
			globalTokenIds = [...Array(quantity)];
			const metadataSchema = "http://example.com/nft/metadata";
			await api.tx.nft
				.createCollection(
					collectionName,
					quantity,
					maxIssuance,
					tokenOwner,
					metadataSchema,
					royalty,
					crossChainCompatibility
				)
				.signAndSend(collectionOwner, async ({ status, events }) => {
					if (status.isInBlock) {
						events.forEach(({ event: { data, method } }) => {
							if (method == "CreateCollection") {
								globalCollectionId = data[0].toNumber();
							}
						});

						await api.tx.nft
							.mint(globalCollectionId, quantity, tokenOwner.address)
							.signAndSend(collectionOwner, { nonce: -1 }, async ({ status, events }) => {
								if (status.isInBlock) {
									events.forEach(({ event: { data, method } }) => {
										if (method == "Mint") {
											const collectionId = data[0].toNumber();
											let seriesId = data[1].toNumber();
											globalTokenIds = globalTokenIds.map((_, serialNumber) => [
												collectionId,
												seriesId,
												serialNumber,
											]);
										}
									});
								}
							});
					}
				});
		});

		it("creates a collection", async () => {
			const collectionName = "example-collection";
			const quantity = 3;
			const maxIssuance = null;
			const tokenOwner = null;
			const royalty = null;
			const crossChainCompatibility = { xrpl: false };
			const metadataSchema = "http://example.com/nft/metadata";
			await api.tx.nft
				.createCollection(
					collectionName,
					quantity,
					maxIssuance,
					tokenOwner,
					metadataSchema,
					royalty,
					crossChainCompatibility
				)
				.signAndSend(collectionOwner, { nonce: -1 }, async ({ status, events }) => {
					if (status.isInBlock) {
						events.forEach(({ phase, event: { data, method, section } }) => {
							console.log("\t", phase.toString(), `: ${section}.${method}`, data.toString());
							if (method == "CreateCollection") {
								collectionId = data[0].toNumber();
								console.log(`got collection: ${collectionId}`);
							}
						});
						const info = await api.query.nft.collectionInfo(collectionId);
						expect(info.owner).toBe(collectionOwner.address);
						expect(info.name).toBe(stringToHex(collectionName));
					}
				});
		});

		it("burn second token from series", async () => {
			const serialNumber = 1;
			const tokenId = [1124, serialNumber];
			await api.tx.nft
				.burn(tokenId)
				.signAndSend(collectionOwner, { nonce: -1 }, async ({ status, events }) => {
					if (status.isInBlock) {
						events.forEach(({ event: { data, method } }) => {
							if (method == "Burn") {
								const [collId, serialNo] = data;
								expect(collId.toNumber()).toEqual(globalCollectionId);
								expect(serialNo.toNumber()).toEqual(serialNumber);
							}
						});
					}
				});
		});

		it.skip("finds collected tokens", async () => {
			const cursor = 0;
			const limit = 5;
			const ownedTokens = (
				await api.rpc.nft.ownedTokens(globalCollectionId, collectionOwner.address, cursor, limit)
			).toJSON();
			console.log("ownedTokens::", ownedTokens);
			expect(ownedTokens[2]).toEqual([0, 1, 2]);
		});
	});

	/// TODO - add more test for listing buy/sell
});
