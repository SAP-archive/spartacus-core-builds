/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return function (reducer) {
        return function (state, action) {
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
        };
    };
}
/**
 * @param {?} keys
 * @param {?} storageType
 * @return {?}
 */
export function getKeysForStorage(keys, storageType) {
    return Object.keys(keys).filter(function (key) { return keys[key] === storageType; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXlCLElBQUksRUFBZSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFFekQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxNQUFpQixFQUNqQixNQUFvQjtJQUVwQixJQUNFLENBQUMsTUFBTSxDQUFDLFlBQVk7UUFDcEIsQ0FBQyxNQUFNO1FBQ1AsQ0FBQyxNQUFNLENBQUMsS0FBSztRQUNiLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3pCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM5QjtRQUNBLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztRQUVLLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztJQUVsRCxPQUFPLFVBQUMsT0FBaUM7UUFDdkMsT0FBTyxVQUFDLEtBQUssRUFBRSxNQUFNOztnQkFDZixRQUFRLHdCQUFRLEtBQUssQ0FBRTtZQUUzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM3QyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNuQztZQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxN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Qy9CLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDcEIsTUFBTTtTQUNQO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUNqQztLQUNGO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsU0FBaUIsRUFDakIsS0FBYSxFQUNiLE9BQWdCO0lBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNuRDtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBZ0IsRUFBRSxHQUFXO0lBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2xCLE9BQU87S0FDUjs7UUFFSyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPO0tBQ1I7SUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFDLE9BQWdCO0lBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciwgSU5JVCwgTWV0YVJlZHVjZXIsIFVQREFURSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyPFQ+KFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbik6IE1ldGFSZWR1Y2VyPFQsIEFjdGlvbj4ge1xuICBpZiAoXG4gICAgIXdpblJlZi5uYXRpdmVXaW5kb3cgfHxcbiAgICAhY29uZmlnIHx8XG4gICAgIWNvbmZpZy5zdGF0ZSB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmtleXNcbiAgKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2VTeW5jQ29uZmlnID0gY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jO1xuXG4gIHJldHVybiAocmVkdWNlcjogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+KTogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+ID0+IHtcbiAgICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pOiBUID0+IHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcblxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUICYmICFleGlzdHMobmV3U3RhdGUpKSB7XG4gICAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUIHx8IGFjdGlvbi50eXBlID09PSBVUERBVEUpIHtcbiAgICAgICAgY29uc3QgcmVoeWRyYXRlZFN0YXRlID0gcmVoeWRyYXRlKGNvbmZpZywgd2luUmVmKTtcbiAgICAgICAgcmV0dXJuIGRlZXBNZXJnZShuZXdTdGF0ZSwgcmVoeWRyYXRlZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGUgPSByZWR1Y2VyKG5ld1N0YXRlLCBhY3Rpb24pO1xuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKGxvY2FsU3RvcmFnZUtleXMsIHN0YXRlKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYubG9jYWxTdG9yYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBnZXRLZXlzRm9yU3RvcmFnZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VLZXlzLFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXNGb3JTdG9yYWdlKFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZSB9LFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoa2V5ID0+IGtleXNba2V5XSA9PT0gc3RvcmFnZVR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlPFQ+KGNvbmZpZzogU3RhdGVDb25maWcsIHdpblJlZjogV2luZG93UmVmKTogVCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5sb2NhbFN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWVcbiAgKTtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZVxuICApO1xuXG4gIHJldHVybiBkZWVwTWVyZ2UobG9jYWxTdG9yYWdlVmFsdWUsIHNlc3Npb25TdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzKHZhbHVlOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggIT09IDA7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZSxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IFN0b3JhZ2Uge1xuICBsZXQgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLk5PX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFRvU3RvcmFnZShcbiAgY29uZmlnS2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBPYmplY3QsXG4gIHN0b3JhZ2U6IFN0b3JhZ2Vcbik6IHZvaWQge1xuICBpZiAoIWlzU3NyKHN0b3JhZ2UpICYmIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXRJdGVtKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHN0b3JhZ2U6IFN0b3JhZ2UsIGtleTogc3RyaW5nKTogT2JqZWN0IHtcbiAgaWYgKGlzU3NyKHN0b3JhZ2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGlmICghc3RvcmFnZVZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3NyKHN0b3JhZ2U6IFN0b3JhZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuICFCb29sZWFuKHN0b3JhZ2UpO1xufVxuIl19