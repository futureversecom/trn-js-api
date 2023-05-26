/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';

import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import rootnetVersioned from './spec/rootnet';
import porciniVersioned from './spec/porcini';
import dex from './dex';
import ethy from './ethy';
import ethWallet from './ethWallet';
import xrplBridge from './xrplBridge';
import nft from './nft';
import runtime from './runtime';

const rootDefs = {
  dex,
  ethy,
  ethWallet,
  xrplBridge,
  nft,
  runtime,
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(rootDefs),
};

export const rpc = jsonrpcFromDefs(rootDefs, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(rootDefs, { ...ormlAlias });

function getBundle (versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: { council: ['generalCouncil'] },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    root: getBundle(rootnetVersioned),
    porcini: getBundle(porciniVersioned),
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    root: getBundle(rootnetVersioned),
    porcini: getBundle(porciniVersioned),
  }
};

