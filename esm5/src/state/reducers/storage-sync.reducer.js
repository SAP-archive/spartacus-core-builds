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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUV6RCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0E7Ozs7UUFBTyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLEVBQUM7S0FDM0I7O1FBRUssaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO0lBRWxEOzs7O0lBQU8sVUFBQyxPQUFpQztRQUN2Qzs7Ozs7UUFBTyxVQUFDLEtBQUssRUFBRSxNQUFNOztnQkFDYixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTs7b0JBQzVDLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztnQkFDakQsT0FBTyxT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RUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsU0FBaUIsRUFDakIsS0FBYSxFQUNiLE9BQWdCO0lBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNuRDtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBZ0IsRUFBRSxHQUFXO0lBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2xCLE9BQU87S0FDUjs7UUFFSyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPO0tBQ1I7SUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFDLE9BQWdCO0lBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciwgSU5JVCwgTWV0YVJlZHVjZXIsIFVQREFURSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyPFQ+KFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbik6IE1ldGFSZWR1Y2VyPFQsIEFjdGlvbj4ge1xuICBpZiAoXG4gICAgIXdpblJlZi5uYXRpdmVXaW5kb3cgfHxcbiAgICAhY29uZmlnIHx8XG4gICAgIWNvbmZpZy5zdGF0ZSB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmtleXNcbiAgKSB7XG4gICAgcmV0dXJuIHJlZHVjZXIgPT4gcmVkdWNlcjtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2VTeW5jQ29uZmlnID0gY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jO1xuXG4gIHJldHVybiAocmVkdWNlcjogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+KTogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+ID0+IHtcbiAgICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pOiBUID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUIHx8IGFjdGlvbi50eXBlID09PSBVUERBVEUpIHtcbiAgICAgICAgY29uc3QgcmVoeWRyYXRlZFN0YXRlID0gcmVoeWRyYXRlKGNvbmZpZywgd2luUmVmKTtcbiAgICAgICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgbmV3U3RhdGUsIHJlaHlkcmF0ZWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSAhPT0gSU5JVCkge1xuICAgICAgICAvLyBoYW5kbGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VLZXlzID0gZ2V0S2V5c0ZvclN0b3JhZ2UoXG4gICAgICAgICAgc3RvcmFnZVN5bmNDb25maWcua2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UobG9jYWxTdG9yYWdlS2V5cywgc3RhdGUpO1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5sb2NhbFN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5sb2NhbFN0b3JhZ2VcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBoYW5kbGUgc2Vzc2lvbiBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZUtleXMsXG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLnNlc3Npb25TdG9yYWdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5c0ZvclN0b3JhZ2UoXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RvcmFnZVN5bmNUeXBlIH0sXG4gIHN0b3JhZ2VUeXBlOiBTdG9yYWdlU3luY1R5cGVcbik6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGtleXMpLmZpbHRlcihrZXkgPT4ga2V5c1trZXldID09PSBzdG9yYWdlVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWh5ZHJhdGU8VD4oY29uZmlnOiBTdGF0ZUNvbmZpZywgd2luUmVmOiBXaW5kb3dSZWYpOiBUIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVmFsdWUgPSByZWFkRnJvbVN0b3JhZ2UoXG4gICAgd2luUmVmLmxvY2FsU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZVxuICApO1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lXG4gICk7XG5cbiAgcmV0dXJuIGRlZXBNZXJnZShsb2NhbFN0b3JhZ2VWYWx1ZSwgc2Vzc2lvblN0b3JhZ2VWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHModmFsdWU6IE9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlKFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlLFxuICB3aW5SZWY6IFdpbmRvd1JlZlxuKTogU3RvcmFnZSB7XG4gIGxldCBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN3aXRjaCAoc3RvcmFnZVR5cGUpIHtcbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLmxvY2FsU3RvcmFnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTk9fU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0VG9TdG9yYWdlKFxuICBjb25maWdLZXk6IHN0cmluZyxcbiAgdmFsdWU6IE9iamVjdCxcbiAgc3RvcmFnZTogU3RvcmFnZVxuKTogdm9pZCB7XG4gIGlmICghaXNTc3Ioc3RvcmFnZSkgJiYgdmFsdWUpIHtcbiAgICBzdG9yYWdlLnNldEl0ZW0oY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRnJvbVN0b3JhZ2Uoc3RvcmFnZTogU3RvcmFnZSwga2V5OiBzdHJpbmcpOiBPYmplY3Qge1xuICBpZiAoaXNTc3Ioc3RvcmFnZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgaWYgKCFzdG9yYWdlVmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTc3Ioc3RvcmFnZTogU3RvcmFnZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gIUJvb2xlYW4oc3RvcmFnZSk7XG59XG4iXX0=