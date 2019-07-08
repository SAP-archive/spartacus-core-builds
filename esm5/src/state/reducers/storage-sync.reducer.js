/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { INIT, UPDATE } from '@ngrx/store';
import { deepMerge } from '../../config/utils/deep-merge';
import { StorageSyncType } from '../config/state-config';
import { getStateSlice } from '../utils/get-state-slice';
/**
 * @template T
 * @param {?} winRef
 * @param {?=} config
 * @return {?}
 */
export function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        !config.state.storageSync.keys) {
        return (/**
         * @param {?} reducer
         * @return {?}
         */
        function (reducer) { return reducer; });
    }
    /** @type {?} */
    var storageSyncConfig = config.state.storageSync;
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    function (reducer) {
        return (/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        function (state, action) {
            /** @type {?} */
            var newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                var rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                /** @type {?} */
                var localStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                var localStorageExclusionKeys = getKeysForStorage(storageSyncConfig.excludeKeys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                var localStorageStateSlices = getStateSlice(localStorageKeys, localStorageExclusionKeys, state);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                var sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                var sessionStorageExclusionKeys = getKeysForStorage(storageSyncConfig.excludeKeys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, sessionStorageExclusionKeys, state);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        });
    });
}
/**
 * @param {?} keys
 * @param {?} storageType
 * @return {?}
 */
export function getKeysForStorage(keys, storageType) {
    if (!keys) {
        return [];
    }
    return Object.keys(keys).filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return keys[key] === storageType; }));
}
/**
 * @template T
 * @param {?} config
 * @param {?} winRef
 * @return {?}
 */
export function rehydrate(config, winRef) {
    /** @type {?} */
    var localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    /** @type {?} */
    var sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
    return deepMerge(localStorageValue, sessionStorageValue);
}
/**
 * @param {?} value
 * @return {?}
 */
export function exists(value) {
    if (value != null) {
        if (typeof value === 'object') {
            return Object.keys(value).length !== 0;
        }
        else if (value === '') {
            return false;
        }
        else {
            return true;
        }
    }
    return false;
}
/**
 * @param {?} storageType
 * @param {?} winRef
 * @return {?}
 */
export function getStorage(storageType, winRef) {
    /** @type {?} */
    var storage;
    switch (storageType) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
        case StorageSyncType.NO_STORAGE: {
            storage = undefined;
            break;
        }
        default: {
            storage = winRef.sessionStorage;
        }
    }
    return storage;
}
/**
 * @param {?} configKey
 * @param {?} value
 * @param {?} storage
 * @return {?}
 */
export function persistToStorage(configKey, value, storage) {
    if (!isSsr(storage) && value) {
        storage.setItem(configKey, JSON.stringify(value));
    }
}
/**
 * @param {?} storage
 * @param {?} key
 * @return {?}
 */
export function readFromStorage(storage, key) {
    if (isSsr(storage)) {
        return;
    }
    /** @type {?} */
    var storageValue = storage.getItem(key);
    if (!storageValue) {
        return;
    }
    return JSON.parse(storageValue);
}
/**
 * @param {?} storage
 * @return {?}
 */
export function isSsr(storage) {
    return !Boolean(storage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUV6RCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0E7Ozs7UUFBTyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLEVBQUM7S0FDM0I7O1FBRUssaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO0lBRWxEOzs7O0lBQU8sVUFBQyxPQUFpQztRQUN2Qzs7Ozs7UUFBTyxVQUFDLEtBQUssRUFBRSxNQUFNOztnQkFDYixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTs7b0JBQzVDLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztnQkFDakQsT0FBTyxT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RCxLQUFLLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwQyxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUNoQyxNQUFNO1NBQ1A7UUFDRCxLQUFLLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3BCLE1BQU07U0FDUDtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDakM7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixPQUFnQjtJQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQWdCLEVBQUUsR0FBVztJQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQixPQUFPO0tBQ1I7O1FBRUssWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFnQjtJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIsIElOSVQsIE1ldGFSZWR1Y2VyLCBVUERBVEUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VTeW5jUmVkdWNlcjxUPihcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pOiBNZXRhUmVkdWNlcjxULCBBY3Rpb24+IHtcbiAgaWYgKFxuICAgICF3aW5SZWYubmF0aXZlV2luZG93IHx8XG4gICAgIWNvbmZpZyB8fFxuICAgICFjb25maWcuc3RhdGUgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5rZXlzXG4gICkge1xuICAgIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPik6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPiA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgYWN0aW9uKTogVCA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFKSB7XG4gICAgICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZShjb25maWcsIHdpblJlZik7XG4gICAgICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIG5ld1N0YXRlLCByZWh5ZHJhdGVkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlRXhjbHVzaW9uS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmV4Y2x1ZGVLZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZVN0YXRlU2xpY2VzID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VLZXlzLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZUV4Y2x1c2lvbktleXMsXG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYubG9jYWxTdG9yYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBnZXRLZXlzRm9yU3RvcmFnZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VFeGNsdXNpb25LZXlzID0gZ2V0S2V5c0ZvclN0b3JhZ2UoXG4gICAgICAgICAgc3RvcmFnZVN5bmNDb25maWcuZXhjbHVkZUtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZUtleXMsXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VFeGNsdXNpb25LZXlzLFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXNGb3JTdG9yYWdlKFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZSB9LFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlXG4pOiBzdHJpbmdbXSB7XG4gIGlmICgha2V5cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoa2V5cykuZmlsdGVyKGtleSA9PiBrZXlzW2tleV0gPT09IHN0b3JhZ2VUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlaHlkcmF0ZTxUPihjb25maWc6IFN0YXRlQ29uZmlnLCB3aW5SZWY6IFdpbmRvd1JlZik6IFQge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYubG9jYWxTdG9yYWdlLFxuICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5sb2NhbFN0b3JhZ2VLZXlOYW1lXG4gICk7XG4gIGNvbnN0IHNlc3Npb25TdG9yYWdlVmFsdWUgPSByZWFkRnJvbVN0b3JhZ2UoXG4gICAgd2luUmVmLnNlc3Npb25TdG9yYWdlLFxuICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5zZXNzaW9uU3RvcmFnZUtleU5hbWVcbiAgKTtcblxuICByZXR1cm4gZGVlcE1lcmdlKGxvY2FsU3RvcmFnZVZhbHVlLCBzZXNzaW9uU3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0cyh2YWx1ZTogT2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoICE9PSAwO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoXG4gIHN0b3JhZ2VUeXBlOiBTdG9yYWdlU3luY1R5cGUsXG4gIHdpblJlZjogV2luZG93UmVmXG4pOiBTdG9yYWdlIHtcbiAgbGV0IHN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgc3dpdGNoIChzdG9yYWdlVHlwZSkge1xuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYubG9jYWxTdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5OT19TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gdW5kZWZpbmVkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RvcmFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RUb1N0b3JhZ2UoXG4gIGNvbmZpZ0tleTogc3RyaW5nLFxuICB2YWx1ZTogT2JqZWN0LFxuICBzdG9yYWdlOiBTdG9yYWdlXG4pOiB2b2lkIHtcbiAgaWYgKCFpc1NzcihzdG9yYWdlKSAmJiB2YWx1ZSkge1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGcm9tU3RvcmFnZShzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZyk6IE9iamVjdCB7XG4gIGlmIChpc1NzcihzdG9yYWdlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2VWYWx1ZSA9IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBpZiAoIXN0b3JhZ2VWYWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NzcihzdG9yYWdlOiBTdG9yYWdlKTogYm9vbGVhbiB7XG4gIHJldHVybiAhQm9vbGVhbihzdG9yYWdlKTtcbn1cbiJdfQ==