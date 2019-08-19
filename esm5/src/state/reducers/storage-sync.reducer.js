/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { INIT, UPDATE } from '@ngrx/store';
import { deepMerge } from '../../config/utils/deep-merge';
import { StorageSyncType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
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
    /** @type {?} */
    var localStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
    /** @type {?} */
    var sessionStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
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
                var localStorageStateSlices = getStateSlice(localStorageKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, newState);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        });
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUUzRSxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0E7Ozs7UUFBTyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLEVBQUM7S0FDM0I7O1FBRUssaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXOztRQUM1QyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FDdkMsaUJBQWlCLENBQUMsSUFBSSxFQUN0QixlQUFlLENBQUMsYUFBYSxDQUM5Qjs7UUFDSyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FDekMsaUJBQWlCLENBQUMsSUFBSSxFQUN0QixlQUFlLENBQUMsZUFBZSxDQUNoQztJQUVEOzs7O0lBQU8sVUFBQyxPQUFpQztRQUN2Qzs7Ozs7UUFBTyxVQUFDLEtBQUssRUFBRSxNQUFNOztnQkFDYixRQUFRLEdBQUcs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LENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQWdCLEVBQUUsR0FBVztJQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQixPQUFPO0tBQ1I7O1FBRUssWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFnQjtJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIsIElOSVQsIE1ldGFSZWR1Y2VyLCBVUERBVEUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXJLZXlzQnlUeXBlLCBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VTeW5jUmVkdWNlcjxUPihcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pOiBNZXRhUmVkdWNlcjxULCBBY3Rpb24+IHtcbiAgaWYgKFxuICAgICF3aW5SZWYubmF0aXZlV2luZG93IHx8XG4gICAgIWNvbmZpZyB8fFxuICAgICFjb25maWcuc3RhdGUgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5rZXlzXG4gICkge1xuICAgIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcbiAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAgc3RvcmFnZVN5bmNDb25maWcua2V5cyxcbiAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICApO1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRVxuICApO1xuXG4gIHJldHVybiAocmVkdWNlcjogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+KTogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+ID0+IHtcbiAgICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pOiBUID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUIHx8IGFjdGlvbi50eXBlID09PSBVUERBVEUpIHtcbiAgICAgICAgY29uc3QgcmVoeWRyYXRlZFN0YXRlID0gcmVoeWRyYXRlKGNvbmZpZywgd2luUmVmKTtcbiAgICAgICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgbmV3U3RhdGUsIHJlaHlkcmF0ZWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSAhPT0gSU5JVCkge1xuICAgICAgICAvLyBoYW5kbGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgbG9jYWxTdG9yYWdlS2V5cyxcbiAgICAgICAgICBuZXdTdGF0ZVxuICAgICAgICApO1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5sb2NhbFN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5sb2NhbFN0b3JhZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBoYW5kbGUgc2Vzc2lvbiBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlS2V5cyxcbiAgICAgICAgICBuZXdTdGF0ZVxuICAgICAgICApO1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5zZXNzaW9uU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWh5ZHJhdGU8VD4oY29uZmlnOiBTdGF0ZUNvbmZpZywgd2luUmVmOiBXaW5kb3dSZWYpOiBUIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVmFsdWUgPSByZWFkRnJvbVN0b3JhZ2UoXG4gICAgd2luUmVmLmxvY2FsU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZVxuICApO1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lXG4gICk7XG5cbiAgcmV0dXJuIGRlZXBNZXJnZShsb2NhbFN0b3JhZ2VWYWx1ZSwgc2Vzc2lvblN0b3JhZ2VWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHModmFsdWU6IE9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlKFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlLFxuICB3aW5SZWY6IFdpbmRvd1JlZlxuKTogU3RvcmFnZSB7XG4gIGxldCBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN3aXRjaCAoc3RvcmFnZVR5cGUpIHtcbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLmxvY2FsU3RvcmFnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTk9fU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0VG9TdG9yYWdlKFxuICBjb25maWdLZXk6IHN0cmluZyxcbiAgdmFsdWU6IE9iamVjdCxcbiAgc3RvcmFnZTogU3RvcmFnZVxuKTogdm9pZCB7XG4gIGlmICghaXNTc3Ioc3RvcmFnZSkgJiYgdmFsdWUpIHtcbiAgICBzdG9yYWdlLnNldEl0ZW0oY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRnJvbVN0b3JhZ2Uoc3RvcmFnZTogU3RvcmFnZSwga2V5OiBzdHJpbmcpOiBPYmplY3Qge1xuICBpZiAoaXNTc3Ioc3RvcmFnZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgaWYgKCFzdG9yYWdlVmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTc3Ioc3RvcmFnZTogU3RvcmFnZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gIUJvb2xlYW4oc3RvcmFnZSk7XG59XG4iXX0=