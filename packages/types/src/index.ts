import '@polkadot/types/lookup';
import './augment/api';
import './lookup/rootnet';

import type { DefinitionRpc, DefinitionRpcSub, OverrideBundleType, OverrideModuleType, RegistryTypes } from '@polkadot/types/types';

import { rpc as rootnetRpc, types as rootnetTypes, typesAlias as rootnetTypeAlias, typesBundle as rootnetTypesBundle } from '@therootnetwork/type-definitions';

export * as lookupTypes from './lookup/rootnet';

export const types: RegistryTypes = rootnetTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = rootnetRpc;

export const typesAlias: Record<string, OverrideModuleType> = rootnetTypeAlias;

export const typesBundle = rootnetTypesBundle as unknown as OverrideBundleType;

// export const signedExtensions = rootnetSignedExtensions;
