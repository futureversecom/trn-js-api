import type { ApiOptions } from '@polkadot/api/types';
import type { RegistryTypes } from '@polkadot/types/types';

import { lookupTypes as rootnetLookupTypes, rpc as rootnetRpc, types as rootnetTypes, typesAlias as rootnetTypesAlias, typesBundle as rootnetTypesBundle } from '@therootnetwork/types';

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
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      rootnet: {
        ...rootnetTypesBundle?.spec?.rootnet,
        ...typesBundle?.spec?.rootnet
      },
      porcini: {
        ...rootnetTypesBundle?.spec?.porcini,
        ...typesBundle?.spec?.porcini
      },
    }
  },
  // runtime: {
  //   ...rootnetRuntime,
  //   ...runtime
  // },
  ...otherOptions
});
