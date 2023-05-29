
import {ApiPromise, Keyring, WsProvider} from "@polkadot/api";
import {options} from "@therootnetwork/api";
import {hexToU8a} from "@polkadot/util";

export const ALITH_PRIVATE_KEY = "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133";
export const BOB_PRIVATE_KEY = "0x79c3b7fc0b7697b9414cb87adcb37317d1cab32818ae18c0e97ad76395d1fdcf";
const TOKEN_ID = 1124;
export const GAS_TOKEN_ID = 2;

describe('DEX RPC calls testing', () => {
  let api;
  let alith, bob;
  beforeAll(async () => {
    const providerUrl = 'ws://127.0.0.1:9944/';
    const provider = new WsProvider(providerUrl);
    console.log('providerUrl', providerUrl);
    api = new ApiPromise(options({ provider }));
    await api.isReady;
    const keyring = new Keyring({ type: "ethereum" });
    alith = keyring.addFromSeed(hexToU8a(ALITH_PRIVATE_KEY));
    bob = keyring.addFromSeed(hexToU8a(BOB_PRIVATE_KEY));
  });

  afterAll(async () => {
    api.disconnect();
  });

  describe('Queries()', () => {

    it.skip("Deposit liquidity in DEX asset's pool",  async () => {
      const txs = [
        api.tx.assetsExt.createAsset("test", "TEST", 18, 1, alith.address), // create asset
        api.tx.assets.mint(TOKEN_ID, alith.address, "10000000000000000"),
        api.tx.dex.addLiquidity(
            // provide liquidity
            TOKEN_ID,
            GAS_TOKEN_ID,
            "1000000000000000",
            250_000_000,
            "10000000000000000",
            250_000_000,
            0,
        ),
      ];

      await new Promise<void>((resolve, reject) => {
        api.tx.utility
            .batch(txs)
            .signAndSend(alith, ({ events, status }) => {
              if (status.isInBlock) {
                console.log(`setup block hash: ${status.asInBlock}`);
                  for (const {event} of events) {
                    if (event.method === 'AddLiquidity') {
                      resolve();
                    }
                  }
              }
            })
            .catch((err) => reject(err));
      });

      console.log("done setting up dex liquidity.");
          });

    it("getAmountsOut rpc works", async () => {
      const result = await (api.rpc as any).dex.getAmountsOut(100, [GAS_TOKEN_ID, TOKEN_ID]);
      expect(result.toJSON()).toEqual({"Ok":[100, 398799840]});
    });

    it("quote rpc works", async () => {
      const result = await api.rpc.dex.quote(1, 5, 10);
      expect(result.toJSON()).toEqual({"Ok":2});
    });

    /// TODO add more test for happy and sad flow
  });
});
