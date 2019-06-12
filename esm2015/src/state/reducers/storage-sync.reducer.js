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
        return undefined;
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
            let newState = Object.assign({}, state);
            if (action.type === INIT && !exists(newState)) {
                newState = reducer(state, action);
            }
            if (action.type === INIT || action.type === UPDATE) {
                /** @type {?} */
                const rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            newState = reducer(newState, action);
            if (action.type !== INIT) {
                // handle local storage
                /** @type {?} */
                const localStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                /** @type {?} */
                const localStorageStateSlices = getStateSlice(localStorageKeys, state);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                const sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                const sessionStorageStateSlices = getStateSlice(sessionStorageKeys, state);
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
    key => keys[key] === storageType));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUV6RCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0EsT0FBTyxTQUFTLENBQUM7S0FDbEI7O1VBRUssaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO0lBRWxEOzs7O0lBQU8sQ0FBQyxPQUFpQyxFQUE0QixFQUFFO1FBQ3JFOzs7OztRQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBSyxFQUFFOztnQkFDdEIsUUFBUSxxQkFBUSxLQUFLLENBQUU7WUFFM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0MsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFB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SyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUNwQixNQUFNO1NBQ1A7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ2pDO0tBQ0Y7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixTQUFpQixFQUNqQixLQUFhLEVBQ2IsT0FBZ0I7SUFFaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFnQixFQUFFLEdBQVc7SUFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEIsT0FBTztLQUNSOztVQUVLLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU87S0FDUjtJQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsT0FBZ0I7SUFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25SZWR1Y2VyLCBJTklULCBNZXRhUmVkdWNlciwgVVBEQVRFIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlU3luY1JlZHVjZXI8VD4oXG4gIHdpblJlZjogV2luZG93UmVmLFxuICBjb25maWc/OiBTdGF0ZUNvbmZpZ1xuKTogTWV0YVJlZHVjZXI8VCwgQWN0aW9uPiB7XG4gIGlmIChcbiAgICAhd2luUmVmLm5hdGl2ZVdpbmRvdyB8fFxuICAgICFjb25maWcgfHxcbiAgICAhY29uZmlnLnN0YXRlIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYyB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMua2V5c1xuICApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVN5bmNDb25maWcgPSBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmM7XG5cbiAgcmV0dXJuIChyZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQsIEFjdGlvbj4pOiBBY3Rpb25SZWR1Y2VyPFQsIEFjdGlvbj4gPT4ge1xuICAgIHJldHVybiAoc3RhdGUsIGFjdGlvbik6IFQgPT4ge1xuICAgICAgbGV0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IElOSVQgJiYgIWV4aXN0cyhuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IElOSVQgfHwgYWN0aW9uLnR5cGUgPT09IFVQREFURSkge1xuICAgICAgICBjb25zdCByZWh5ZHJhdGVkU3RhdGUgPSByZWh5ZHJhdGUoY29uZmlnLCB3aW5SZWYpO1xuICAgICAgICByZXR1cm4gZGVlcE1lcmdlKHt9LCBuZXdTdGF0ZSwgcmVoeWRyYXRlZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGUgPSByZWR1Y2VyKG5ld1N0YXRlLCBhY3Rpb24pO1xuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKGxvY2FsU3RvcmFnZUtleXMsIHN0YXRlKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYubG9jYWxTdG9yYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBnZXRLZXlzRm9yU3RvcmFnZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VLZXlzLFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXNGb3JTdG9yYWdlKFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZSB9LFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoa2V5ID0+IGtleXNba2V5XSA9PT0gc3RvcmFnZVR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlPFQ+KGNvbmZpZzogU3RhdGVDb25maWcsIHdpblJlZjogV2luZG93UmVmKTogVCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5sb2NhbFN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWVcbiAgKTtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZVxuICApO1xuXG4gIHJldHVybiBkZWVwTWVyZ2UobG9jYWxTdG9yYWdlVmFsdWUsIHNlc3Npb25TdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzKHZhbHVlOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggIT09IDA7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZSxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IFN0b3JhZ2Uge1xuICBsZXQgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLk5PX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFRvU3RvcmFnZShcbiAgY29uZmlnS2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBPYmplY3QsXG4gIHN0b3JhZ2U6IFN0b3JhZ2Vcbik6IHZvaWQge1xuICBpZiAoIWlzU3NyKHN0b3JhZ2UpICYmIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXRJdGVtKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHN0b3JhZ2U6IFN0b3JhZ2UsIGtleTogc3RyaW5nKTogT2JqZWN0IHtcbiAgaWYgKGlzU3NyKHN0b3JhZ2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGlmICghc3RvcmFnZVZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3NyKHN0b3JhZ2U6IFN0b3JhZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuICFCb29sZWFuKHN0b3JhZ2UpO1xufVxuIl19