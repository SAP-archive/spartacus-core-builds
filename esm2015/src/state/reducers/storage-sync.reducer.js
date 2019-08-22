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
        reducer => reducer);
    }
    /** @type {?} */
    const storageSyncConfig = config.state.storageSync;
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    (reducer) => {
        return (/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        (state, action) => {
            /** @type {?} */
            const newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                const rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                /** @type {?} */
                const localStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                const localStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                const localStorageStateSlices = getStateSlice(localStorageKeys, localStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                const sessionStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                const sessionStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                const sessionStorageStateSlices = getStateSlice(sessionStorageKeys, sessionStorageExclusionKeys, newState);
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
    const localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    /** @type {?} */
    const sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
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
        return value !== '';
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
    let storage;
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
    const storageValue = storage.getItem(key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUUzRSxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0E7Ozs7UUFBTyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQztLQUMzQjs7VUFFSyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7SUFFbEQ7Ozs7SUFBTyxDQUFDLE9BQWlDLEVBQTRCLEVBQUU7UUFDckU7Ozs7O1FBQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFLLEVBQUU7O2tCQUNwQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTs7c0JBQzVDLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFF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VUFBVSxnQkFBZ0IsQ0FDOUIsU0FBaUIsRUFDakIsS0FBYSxFQUNiLE9BQWdCO0lBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNuRDtBQUNILENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBZ0IsRUFBRSxHQUFXO0lBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2xCLE9BQU87S0FDUjs7VUFFSyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPO0tBQ1I7SUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFDLE9BQWdCO0lBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciwgSU5JVCwgTWV0YVJlZHVjZXIsIFVQREFURSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGZpbHRlcktleXNCeVR5cGUsIGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyPFQ+KFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbik6IE1ldGFSZWR1Y2VyPFQsIEFjdGlvbj4ge1xuICBpZiAoXG4gICAgIXdpblJlZi5uYXRpdmVXaW5kb3cgfHxcbiAgICAhY29uZmlnIHx8XG4gICAgIWNvbmZpZy5zdGF0ZSB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmtleXNcbiAgKSB7XG4gICAgcmV0dXJuIHJlZHVjZXIgPT4gcmVkdWNlcjtcbiAgfVxuXG4gIGNvbnN0IHN0b3JhZ2VTeW5jQ29uZmlnID0gY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jO1xuXG4gIHJldHVybiAocmVkdWNlcjogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+KTogQWN0aW9uUmVkdWNlcjxULCBBY3Rpb24+ID0+IHtcbiAgICByZXR1cm4gKHN0YXRlLCBhY3Rpb24pOiBUID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUIHx8IGFjdGlvbi50eXBlID09PSBVUERBVEUpIHtcbiAgICAgICAgY29uc3QgcmVoeWRyYXRlZFN0YXRlID0gcmVoeWRyYXRlKGNvbmZpZywgd2luUmVmKTtcbiAgICAgICAgcmV0dXJuIGRlZXBNZXJnZSh7fSwgbmV3U3RhdGUsIHJlaHlkcmF0ZWRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSAhPT0gSU5JVCkge1xuICAgICAgICAvLyBoYW5kbGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VLZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUV4Y2x1c2lvbktleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmV4Y2x1ZGVLZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZVN0YXRlU2xpY2VzID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VLZXlzLFxuICAgICAgICAgIGxvY2FsU3RvcmFnZUV4Y2x1c2lvbktleXMsXG4gICAgICAgICAgbmV3U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYubG9jYWxTdG9yYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLlNFU1NJT05fU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUV4Y2x1c2lvbktleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmV4Y2x1ZGVLZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VLZXlzLFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlRXhjbHVzaW9uS2V5cyxcbiAgICAgICAgICBuZXdTdGF0ZVxuICAgICAgICApO1xuICAgICAgICBwZXJzaXN0VG9TdG9yYWdlKFxuICAgICAgICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5zZXNzaW9uU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWh5ZHJhdGU8VD4oY29uZmlnOiBTdGF0ZUNvbmZpZywgd2luUmVmOiBXaW5kb3dSZWYpOiBUIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlVmFsdWUgPSByZWFkRnJvbVN0b3JhZ2UoXG4gICAgd2luUmVmLmxvY2FsU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZVxuICApO1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZSxcbiAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lXG4gICk7XG5cbiAgcmV0dXJuIGRlZXBNZXJnZShsb2NhbFN0b3JhZ2VWYWx1ZSwgc2Vzc2lvblN0b3JhZ2VWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHModmFsdWU6IE9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCAhPT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlICE9PSAnJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlKFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlLFxuICB3aW5SZWY6IFdpbmRvd1JlZlxuKTogU3RvcmFnZSB7XG4gIGxldCBzdG9yYWdlOiBTdG9yYWdlO1xuXG4gIHN3aXRjaCAoc3RvcmFnZVR5cGUpIHtcbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLmxvY2FsU3RvcmFnZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTk9fU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHVuZGVmaW5lZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0VG9TdG9yYWdlKFxuICBjb25maWdLZXk6IHN0cmluZyxcbiAgdmFsdWU6IE9iamVjdCxcbiAgc3RvcmFnZTogU3RvcmFnZVxuKTogdm9pZCB7XG4gIGlmICghaXNTc3Ioc3RvcmFnZSkgJiYgdmFsdWUpIHtcbiAgICBzdG9yYWdlLnNldEl0ZW0oY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRnJvbVN0b3JhZ2Uoc3RvcmFnZTogU3RvcmFnZSwga2V5OiBzdHJpbmcpOiBPYmplY3Qge1xuICBpZiAoaXNTc3Ioc3RvcmFnZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdG9yYWdlVmFsdWUgPSBzdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgaWYgKCFzdG9yYWdlVmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gSlNPTi5wYXJzZShzdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTc3Ioc3RvcmFnZTogU3RvcmFnZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gIUJvb2xlYW4oc3RvcmFnZSk7XG59XG4iXX0=