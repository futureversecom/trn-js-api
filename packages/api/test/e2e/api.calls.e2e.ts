// Copyright 2019-2021 Centrality Investments Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Hash, Block, AccountId } from "@therootnetwork/types/interfaces";
import { createHeaderExtended } from '@polkadot/api-derive/type';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@therootnetwork/api';

describe('e2e api calls', () => {
  let api;
  let blockHash: Hash;
  beforeAll(async () => {
    const providerUrl = 'wss://porcini.rootnet.app/archive/ws';
    const provider = new WsProvider(providerUrl);
    console.log('providerUrl', providerUrl);
    api = new ApiPromise(options({ provider }));
    await api.isReady;
    blockHash = await api.rpc.chain.getBlockHash();
  });

  afterAll(async () => {
    if (api) {
      return await api.disconnect();
    }
  });

  it('Get correct block', async () => {
    const block: Block = await api.rpc.chain.getBlock(blockHash).then((r: any) => r.block);
    expect(block.header.hash.toString()).toEqual(blockHash.toString());
  });

  it('Get correct validators', async () => {
    const validators: AccountId[] = (await api.query.session.validators.at(blockHash)) as any;
    expect(validators.length).toBeGreaterThan(0);
  });

  it('Expect author is in validators', async () => {
    const block: Block = await api.rpc.chain.getBlock(blockHash).then((r: any) => r.block);
    const header = block.header;
    const validators: AccountId[] = (await api.query.session.validators.at(blockHash)) as any;
    // console.log('validators:',validators);
    const extHeader = createHeaderExtended(api.registry, header, validators);
    const author: AccountId = extHeader.author;
    expect(validators).toEqual(expect.arrayContaining([expect.objectContaining(author)]));
  });

  it('Expect at least one event', async () => {
    const events = (await api.query.system.events.at(blockHash)) as any;
    expect(events.length).toBeGreaterThan(0);
  });

  describe('Get session info', () => {
    it('Get correct session information (length, last length, era, current index, session per era', async () => {
      const currentSession = await api.derive.session.info();
      expect(currentSession.currentEra.toNumber()).toBeGreaterThanOrEqual(0);
      expect(currentSession.currentIndex.toNumber()).toBeGreaterThanOrEqual(0);
      expect(currentSession.eraLength.toNumber()).toBeGreaterThanOrEqual(0);
      expect(currentSession.isEpoch).toBe(true);
      expect(currentSession.sessionLength.toNumber()).toBeGreaterThanOrEqual(0);
      expect(currentSession.sessionsPerEra.toNumber()).toBeGreaterThanOrEqual(0);
      expect(currentSession.validatorCount.toNumber()).toBeGreaterThanOrEqual(0);
    });
  });

});
