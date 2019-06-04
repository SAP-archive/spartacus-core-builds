/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        return undefined;
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
            var newState = tslib_1.__assign({}, state);
            if (action.type === INIT && !exists(newState)) {
                newState = reducer(state, action);
            }
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                var rehydratedState = rehydrate(config, winRef);
                return deepMerge(newState, rehydratedState);
            }
            newState = reducer(newState, action);
            if (action.type !== INIT) {
                // handle local storage
                /** @type {?} */
                var localStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                var localStorageStateSlices = getStateSlice(localStorageKeys, state);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                var sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXlCLElBQUksRUFBZSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFFekQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxNQUFpQixFQUNqQixNQUFvQjtJQUVwQixJQUNFLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFDcEIsQ0FBQyxNQUFNO1FBQ1AsQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNiLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3pCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM5QjtRQUNBLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztRQUVLLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztJQUVsRDs7OztJQUFPLFVBQUMsT0FBaUM7UUFDdkM7Ozs7O1FBQU8sVUFBQyxLQUFLLEVBQUUsTUFBTTs7Z0JBQ2YsUUFBUSx3QkFBUSxLQUFLLENBQUU7WUFFM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0MsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJ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QUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3BCLE1BQU07U0FDUDtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDakM7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixPQUFnQjtJQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQWdCLEVBQUUsR0FBVztJQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQixPQUFPO0tBQ1I7O1FBRUssWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFnQjtJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIsIElOSVQsIE1ldGFSZWR1Y2VyLCBVUERBVEUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VTeW5jUmVkdWNlcjxUPihcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pOiBNZXRhUmVkdWNlcjxULCBBY3Rpb24+IHtcbiAgaWYgKFxuICAgICF3aW5SZWYubmF0aXZlV2luZG93IHx8XG4gICAgIWNvbmZpZyB8fFxuICAgICFjb25maWcuc3RhdGUgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5rZXlzXG4gICkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPik6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPiA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgYWN0aW9uKTogVCA9PiB7XG4gICAgICBsZXQgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCAmJiAhZXhpc3RzKG5ld1N0YXRlKSkge1xuICAgICAgICBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFKSB7XG4gICAgICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZShjb25maWcsIHdpblJlZik7XG4gICAgICAgIHJldHVybiBkZWVwTWVyZ2UobmV3U3RhdGUsIHJlaHlkcmF0ZWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKGFjdGlvbi50eXBlICE9PSBJTklUKSB7XG4gICAgICAgIC8vIGhhbmRsZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUtleXMgPSBnZXRLZXlzRm9yU3RvcmFnZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZVN0YXRlU2xpY2VzID0gZ2V0U3RhdGVTbGljZShsb2NhbFN0b3JhZ2VLZXlzLCBzdGF0ZSk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLmxvY2FsU3RvcmFnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGhhbmRsZSBzZXNzaW9uIHN0b3JhZ2VcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VLZXlzID0gZ2V0S2V5c0ZvclN0b3JhZ2UoXG4gICAgICAgICAgc3RvcmFnZVN5bmNDb25maWcua2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlS2V5cyxcbiAgICAgICAgICBzdGF0ZVxuICAgICAgICApO1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5zZXNzaW9uU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlzRm9yU3RvcmFnZShcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGUgfSxcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZVxuKTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoa2V5cykuZmlsdGVyKGtleSA9PiBrZXlzW2tleV0gPT09IHN0b3JhZ2VUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlaHlkcmF0ZTxUPihjb25maWc6IFN0YXRlQ29uZmlnLCB3aW5SZWY6IFdpbmRvd1JlZik6IFQge1xuICBjb25zdCBsb2NhbFN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYubG9jYWxTdG9yYWdlLFxuICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5sb2NhbFN0b3JhZ2VLZXlOYW1lXG4gICk7XG4gIGNvbnN0IHNlc3Npb25TdG9yYWdlVmFsdWUgPSByZWFkRnJvbVN0b3JhZ2UoXG4gICAgd2luUmVmLnNlc3Npb25TdG9yYWdlLFxuICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5zZXNzaW9uU3RvcmFnZUtleU5hbWVcbiAgKTtcblxuICByZXR1cm4gZGVlcE1lcmdlKGxvY2FsU3RvcmFnZVZhbHVlLCBzZXNzaW9uU3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0cyh2YWx1ZTogT2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoICE9PSAwO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoXG4gIHN0b3JhZ2VUeXBlOiBTdG9yYWdlU3luY1R5cGUsXG4gIHdpblJlZjogV2luZG93UmVmXG4pOiBTdG9yYWdlIHtcbiAgbGV0IHN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgc3dpdGNoIChzdG9yYWdlVHlwZSkge1xuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYubG9jYWxTdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5OT19TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gdW5kZWZpbmVkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RvcmFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RUb1N0b3JhZ2UoXG4gIGNvbmZpZ0tleTogc3RyaW5nLFxuICB2YWx1ZTogT2JqZWN0LFxuICBzdG9yYWdlOiBTdG9yYWdlXG4pOiB2b2lkIHtcbiAgaWYgKCFpc1NzcihzdG9yYWdlKSAmJiB2YWx1ZSkge1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGcm9tU3RvcmFnZShzdG9yYWdlOiBTdG9yYWdlLCBrZXk6IHN0cmluZyk6IE9iamVjdCB7XG4gIGlmIChpc1NzcihzdG9yYWdlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2VWYWx1ZSA9IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBpZiAoIXN0b3JhZ2VWYWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKHN0b3JhZ2VWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NzcihzdG9yYWdlOiBTdG9yYWdlKTogYm9vbGVhbiB7XG4gIHJldHVybiAhQm9vbGVhbihzdG9yYWdlKTtcbn1cbiJdfQ==