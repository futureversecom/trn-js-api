import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import { derive as rootnetDerives } from '@therootnetwork/api-derive';
import { lookupTypes as rootnetLookupTypes, rpc as rootnetRpc, signedExtensions as rootnetSignedExtensions, types as rootnetTypes, typesAlias as rootnetTypesAlias, typesBundle as rootnetTypesBundle } from '@therootnetwork/types';
import { derive as ormlDerives } from '@open-web3/orml-api-derive';

// import { runtime as rootnetRuntime } from './runtime';

export const defaultOptions: ApiOptions = {
  types: rootnetTypes,
  rpc: rootnetRpc
};

export const options = ({ rpc = {},
  runtime = {},
  signedExtensions,
  types = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions }: ApiOptions = {}): ApiOptions => ({
  types: {
    ...rootnetTypes,
    ...(rootnetLookupTypes as unknown as RegistryTypes), // TODO: RegistryTypes's own issue?
    ...types
  },
  rpc: {
    ...rootnetRpc,
    ...rpc
  },
  typesAlias: {
    ...rootnetTypesAlias,
    ...typesAlias
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  derives: {
    ...rootnetDerives,
    ...ormlDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      rootnet: {
        ...rootnetTypesBundle?.spec?.rootnet,
        ...typesBundle?.spec?.rootnet
      },
      mandala: {
        ...rootnetTypesBundle?.spec?.mandala,
        ...typesBundle?.spec?.mandala
      },
      karura: {
        ...rootnetTypesBundle?.spec?.karura,
        ...typesBundle?.spec?.mandala
      }
    }
  },
  signedExtensions: {
    ...rootnetSignedExtensions,
    ...signedExtensions
  },
  // runtime: {
  //   ...rootnetRuntime,
  //   ...runtime
  // },
  ...otherOptions
});
