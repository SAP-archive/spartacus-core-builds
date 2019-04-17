/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { localStorageSync } from 'ngrx-store-localstorage';
import { StorageSyncType } from '../config/state-config';
/**
 * @param {?} config
 * @param {?} winRef
 * @return {?}
 */
function storageConfig(config, winRef) {
    /** @type {?} */
    var storage;
    switch (config.state.storageSync.type) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
    }
    return {
        keys: config.state.storageSync.keys,
        rehydrate: true,
        storage: storage ? storage : winRef.sessionStorage,
    };
}
/**
 * @param {?} winRef
 * @param {?=} config
 * @return {?}
 */
export function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        config.state.storageSync.type === StorageSyncType.NO_STORAGE ||
        !config.state.storageSync.keys) {
        return undefined;
    }
    /** @type {?} */
    var storage = storageConfig(config, winRef);
    return function (reducer) {
        return localStorageSync(storage)(reducer);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtc3luYy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3JlZHVjZXJzL3N0b3JlLXN5bmMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFzQixNQUFNLHlCQUF5QixDQUFDO0FBRS9FLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBRXRFLFNBQVMsYUFBYSxDQUNwQixNQUFtQixFQUNuQixNQUFpQjs7UUFFYixPQUFPO0lBQ1gsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDckMsS0FBSyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUIsTUFBTTtTQUNQO1FBQ0QsS0FBSyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDaEMsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUk7UUFDbkMsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjO0tBQ25ELENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLE1BQWlCLEVBQ2pCLE1BQW9CO0lBRXBCLElBQ0UsQ0FBQyxNQUFNLENBQUMsWUFBWTtRQUNwQixDQUFDLE1BQU07UUFDUCxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxVQUFVO1FBQzVELENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM5QjtRQUNBLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztRQUVLLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUU3QyxPQUFPLFVBQ0wsT0FBbUM7UUFFbkMsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgTWV0YVJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVN5bmMsIExvY2FsU3RvcmFnZUNvbmZpZyB9IGZyb20gJ25ncngtc3RvcmUtbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcblxuZnVuY3Rpb24gc3RvcmFnZUNvbmZpZyhcbiAgY29uZmlnOiBTdGF0ZUNvbmZpZyxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IExvY2FsU3RvcmFnZUNvbmZpZyB7XG4gIGxldCBzdG9yYWdlO1xuICBzd2l0Y2ggKGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy50eXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAga2V5czogY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmtleXMsXG4gICAgcmVoeWRyYXRlOiB0cnVlLFxuICAgIHN0b3JhZ2U6IHN0b3JhZ2UgPyBzdG9yYWdlIDogd2luUmVmLnNlc3Npb25TdG9yYWdlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyKFxuICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbik6IE1ldGFSZWR1Y2VyPGFueSwgQWN0aW9uPiB7XG4gIGlmIChcbiAgICAhd2luUmVmLm5hdGl2ZVdpbmRvdyB8fFxuICAgICFjb25maWcgfHxcbiAgICAhY29uZmlnLnN0YXRlIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYyB8fFxuICAgIGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy50eXBlID09PSBTdG9yYWdlU3luY1R5cGUuTk9fU1RPUkFHRSB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMua2V5c1xuICApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VDb25maWcoY29uZmlnLCB3aW5SZWYpO1xuXG4gIHJldHVybiBmdW5jdGlvbihcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueSwgQWN0aW9uPlxuICApOiBBY3Rpb25SZWR1Y2VyPGFueSwgQWN0aW9uPiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVN5bmMoc3RvcmFnZSkocmVkdWNlcik7XG4gIH07XG59XG4iXX0=