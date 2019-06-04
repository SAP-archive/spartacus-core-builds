/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
import { deepMerge } from '../../config/utils/deep-merge';
import { getStateSlice } from '../utils/get-state-slice';
import { AUTH_FEATURE } from '../../auth/store/auth-state';
/** @type {?} */
export var CX_KEY = makeStateKey('cx-state');
/**
 * @param {?} platformId
 * @param {?=} transferState
 * @param {?=} config
 * @return {?}
 */
export function getTransferStateReducer(platformId, transferState, config) {
    if (transferState &&
        config &&
        config.state &&
        config.state.ssrTransfer &&
        config.state.ssrTransfer.keys) {
        if (isPlatformBrowser(platformId)) {
            return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
        else if (isPlatformServer(platformId)) {
            return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
    }
    return undefined;
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
export function getServerTransferStateReducer(transferState, keys) {
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
            if (newState) {
                /** @type {?} */
                var stateSlice = getStateSlice(Object.keys(keys), newState);
                transferState.set(CX_KEY, stateSlice);
            }
            return newState;
        });
    });
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
export function getBrowserTransferStateReducer(transferState, keys) {
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
            if (action.type === INIT) {
                if (!state) {
                    state = reducer(state, action);
                }
                // we should not utilize transfer state if user is logged in
                /** @type {?} */
                var authState = ((/** @type {?} */ (state)))[AUTH_FEATURE];
                /** @type {?} */
                var isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    /** @type {?} */
                    var cxKey = transferState.get(CX_KEY, {});
                    /** @type {?} */
                    var transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sNkJBQTZCLENBQUM7O0FBRTFFLE1BQU0sS0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQzNDLGFBQTRCLEVBQzVCLElBQTBDO0lBRTFDOzs7O0lBQU8sVUFBUyxPQUFPO1FBQ3JCOzs7OztRQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7O2dCQUMxQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDdkMsSUFBSSxRQUFRLEVBQUU7O29CQUNOLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUM7Z0JBQzdELGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxhQUE0QixFQUM1QixJQUEwQztJQUUxQzs7OztJQUFPLFVBQVMsT0FBTztRQUNyQjs7Ozs7UUFBTyxVQUFTLEtBQUssRUFBRSxNQUFXO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2hDOzs7b0JBR0ssU0FBUyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDOztvQkFDbEQsVUFBVSxHQUNkLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFL0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzt3QkFDekMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7d0JBQ3JDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQztvQkFFckUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSU5JVCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdGF0ZVRyYW5zZmVyVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5pbXBvcnQgeyBBVVRIX0ZFQVRVUkUsIFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi8uLi9hdXRoL3N0b3JlL2F1dGgtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1hfS0VZOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PHN0cmluZz4oJ2N4LXN0YXRlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgcGxhdGZvcm1JZCxcbiAgdHJhbnNmZXJTdGF0ZT86IFRyYW5zZmVyU3RhdGUsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pIHtcbiAgaWYgKFxuICAgIHRyYW5zZmVyU3RhdGUgJiZcbiAgICBjb25maWcgJiZcbiAgICBjb25maWcuc3RhdGUgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRCcm93c2VyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RhdGVUcmFuc2ZlclR5cGUgfVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKE9iamVjdC5rZXlzKGtleXMpLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRyYW5zZmVyU3RhdGUuc2V0KENYX0tFWSwgc3RhdGVTbGljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlIH1cbikge1xuICByZXR1cm4gZnVuY3Rpb24ocmVkdWNlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uOiBhbnkpIHtcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugc2hvdWxkIG5vdCB1dGlsaXplIHRyYW5zZmVyIHN0YXRlIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgICAgIGNvbnN0IGF1dGhTdGF0ZSA9IChzdGF0ZSBhcyBTdGF0ZVdpdGhBdXRoKVtBVVRIX0ZFQVRVUkVdO1xuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID1cbiAgICAgICAgICBhdXRoU3RhdGUgJiYgYXV0aFN0YXRlLnVzZXJUb2tlbiAmJiBhdXRoU3RhdGUudXNlclRva2VuLnRva2VuO1xuXG4gICAgICAgIGlmICghaXNMb2dnZWRJbiAmJiB0cmFuc2ZlclN0YXRlLmhhc0tleShDWF9LRVkpKSB7XG4gICAgICAgICAgY29uc3QgY3hLZXkgPSB0cmFuc2ZlclN0YXRlLmdldChDWF9LRVksIHt9KTtcbiAgICAgICAgICBjb25zdCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKE9iamVjdC5rZXlzKGtleXMpLCBjeEtleSk7XG5cbiAgICAgICAgICBzdGF0ZSA9IGRlZXBNZXJnZSh7fSwgc3RhdGUsIHRyYW5zZmVycmVkU3RhdGVTbGljZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==