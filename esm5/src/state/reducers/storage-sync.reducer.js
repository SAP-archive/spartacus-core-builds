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
                var localStorageStateSlices = getStateSlice(localStorageKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                /** @type {?} */
                var sessionStorageKeys = getKeysForStorage(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                /** @type {?} */
                var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, newState);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBeUIsSUFBSSxFQUFlLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQUV6RCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzlCO1FBQ0E7Ozs7UUFBTyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sRUFBUCxDQUFPLEVBQUM7S0FDM0I7O1FBRUssaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO0lBRWxEOzs7O0lBQU8sVUFBQyxPQUFpQztRQUN2Qzs7Ozs7UUFBTyxVQUFDLEtBQUssRUFBRSxNQUFNOztnQkFDYixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTs7b0JBQzVDLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztnQkFDakQsT0FBTyxT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QUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFNBQWlCLEVBQ2pCLEtBQWEsRUFDYixPQUFnQjtJQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7QUFDSCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQWdCLEVBQUUsR0FBVztJQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQixPQUFPO0tBQ1I7O1FBRUssWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTztLQUNSO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFnQjtJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIsIElOSVQsIE1ldGFSZWR1Y2VyLCBVUERBVEUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VTeW5jUmVkdWNlcjxUPihcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pOiBNZXRhUmVkdWNlcjxULCBBY3Rpb24+IHtcbiAgaWYgKFxuICAgICF3aW5SZWYubmF0aXZlV2luZG93IHx8XG4gICAgIWNvbmZpZyB8fFxuICAgICFjb25maWcuc3RhdGUgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5rZXlzXG4gICkge1xuICAgIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPik6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPiA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgYWN0aW9uKTogVCA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFKSB7XG4gICAgICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZShjb25maWcsIHdpblJlZik7XG4gICAgICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIG5ld1N0YXRlLCByZWh5ZHJhdGVkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGdldEtleXNGb3JTdG9yYWdlKFxuICAgICAgICAgIHN0b3JhZ2VTeW5jQ29uZmlnLmtleXMsXG4gICAgICAgICAgU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgIGxvY2FsU3RvcmFnZUtleXMsXG4gICAgICAgICAgbmV3U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMubG9jYWxTdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyxcbiAgICAgICAgICB3aW5SZWYubG9jYWxTdG9yYWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBjb25zdCBzZXNzaW9uU3RvcmFnZUtleXMgPSBnZXRLZXlzRm9yU3RvcmFnZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2VLZXlzLFxuICAgICAgICAgIG5ld1N0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZSxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZVN0YXRlU2xpY2VzLFxuICAgICAgICAgIHdpblJlZi5zZXNzaW9uU3RvcmFnZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleXNGb3JTdG9yYWdlKFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZSB9LFxuICBzdG9yYWdlVHlwZTogU3RvcmFnZVN5bmNUeXBlXG4pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoa2V5ID0+IGtleXNba2V5XSA9PT0gc3RvcmFnZVR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlPFQ+KGNvbmZpZzogU3RhdGVDb25maWcsIHdpblJlZjogV2luZG93UmVmKTogVCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5sb2NhbFN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWVcbiAgKTtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZVxuICApO1xuXG4gIHJldHVybiBkZWVwTWVyZ2UobG9jYWxTdG9yYWdlVmFsdWUsIHNlc3Npb25TdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzKHZhbHVlOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggIT09IDA7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZSxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IFN0b3JhZ2Uge1xuICBsZXQgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLk5PX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFRvU3RvcmFnZShcbiAgY29uZmlnS2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBPYmplY3QsXG4gIHN0b3JhZ2U6IFN0b3JhZ2Vcbik6IHZvaWQge1xuICBpZiAoIWlzU3NyKHN0b3JhZ2UpICYmIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXRJdGVtKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHN0b3JhZ2U6IFN0b3JhZ2UsIGtleTogc3RyaW5nKTogT2JqZWN0IHtcbiAgaWYgKGlzU3NyKHN0b3JhZ2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGlmICghc3RvcmFnZVZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3NyKHN0b3JhZ2U6IFN0b3JhZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuICFCb29sZWFuKHN0b3JhZ2UpO1xufVxuIl19