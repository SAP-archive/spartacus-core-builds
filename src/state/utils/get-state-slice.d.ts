import { StateTransferType, StorageSyncType } from '../config/state-config';
export declare function getStateSliceValue<T, E>(keys: string, state: T): E;
export declare function createShellObject<T, E>(key: string, value: T): E;
export declare function getStateSlice<T, E>(keys: string[], state: T): E;
export declare function filterKeysByType(keys: {
    [key: string]: StorageSyncType | StateTransferType;
}, type: StorageSyncType | StateTransferType): string[];
