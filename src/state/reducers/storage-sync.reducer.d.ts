import { Action, MetaReducer } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { StateConfig, StorageSyncType } from '../config/state-config';
export declare function getStorageSyncReducer<T>(winRef: WindowRef, config?: StateConfig): MetaReducer<T, Action>;
export declare function getKeysForStorage(keys: {
    [key: string]: StorageSyncType;
}, storageType: StorageSyncType): string[];
export declare function rehydrate<T>(config: StateConfig, winRef: WindowRef): T;
export declare function exists(value: Object): boolean;
export declare function getStorage(storageType: StorageSyncType, winRef: WindowRef): Storage;
export declare function persistToStorage(configKey: string, value: Object, storage: Storage): void;
export declare function readFromStorage(storage: Storage, key: string): Object;
export declare function isSsr(storage: Storage): boolean;
