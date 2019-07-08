/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
import { AUTH_FEATURE } from '../../auth/store/auth-state';
import { deepMerge } from '../../config/utils/deep-merge';
import { getStateSlice } from '../utils/get-state-slice';
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
    return (/**
     * @param {?} reducer
     * @return {?}
     */
    function (reducer) { return reducer; });
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
                var stateSlice = getStateSlice(Object.keys(keys), [], newState);
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
                    var transferredStateSlice = getStateSlice(Object.keys(keys), [], cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sS0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRDs7OztJQUFPLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU8sRUFBQztBQUM1QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQzNDLGFBQTRCLEVBQzVCLElBQTBDO0lBRTFDOzs7O0lBQU8sVUFBUyxPQUFPO1FBQ3JCOzs7OztRQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7O2dCQUMxQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDdkMsSUFBSSxRQUFRLEVBQUU7O29CQUNOLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNqRSxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN2QztZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsRUFBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsYUFBNEIsRUFDNUIsSUFBMEM7SUFFMUM7Ozs7SUFBTyxVQUFTLE9BQU87UUFDckI7Ozs7O1FBQU8sVUFBUyxLQUFLLEVBQUUsTUFBVztZQUNoQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQzs7O29CQUdLLFNBQVMsR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQzs7b0JBQ2xELFVBQVUsR0FDZCxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBRS9ELElBQUksQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTs7d0JBQ3pDLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7O3dCQUNyQyxxQkFBcUIsR0FBRyxhQUFhLENBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2pCLEVBQUUsRUFDRixLQUFLLENBQ047b0JBRUQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSU5JVCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFVVEhfRkVBVFVSRSwgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uLy4uL2F1dGgvc3RvcmUvYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RhdGVUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgY29uc3QgQ1hfS0VZOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PHN0cmluZz4oJ2N4LXN0YXRlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgcGxhdGZvcm1JZCxcbiAgdHJhbnNmZXJTdGF0ZT86IFRyYW5zZmVyU3RhdGUsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pIHtcbiAgaWYgKFxuICAgIHRyYW5zZmVyU3RhdGUgJiZcbiAgICBjb25maWcgJiZcbiAgICBjb25maWcuc3RhdGUgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRCcm93c2VyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdWNlciA9PiByZWR1Y2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RhdGVUcmFuc2ZlclR5cGUgfVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKE9iamVjdC5rZXlzKGtleXMpLCBbXSwgbmV3U3RhdGUpO1xuICAgICAgICB0cmFuc2ZlclN0YXRlLnNldChDWF9LRVksIHN0YXRlU2xpY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IElOSVQpIHtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHNob3VsZCBub3QgdXRpbGl6ZSB0cmFuc2ZlciBzdGF0ZSBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgICBjb25zdCBhdXRoU3RhdGUgPSAoc3RhdGUgYXMgU3RhdGVXaXRoQXV0aClbQVVUSF9GRUFUVVJFXTtcbiAgICAgICAgY29uc3QgaXNMb2dnZWRJbiA9XG4gICAgICAgICAgYXV0aFN0YXRlICYmIGF1dGhTdGF0ZS51c2VyVG9rZW4gJiYgYXV0aFN0YXRlLnVzZXJUb2tlbi50b2tlbjtcblxuICAgICAgICBpZiAoIWlzTG9nZ2VkSW4gJiYgdHJhbnNmZXJTdGF0ZS5oYXNLZXkoQ1hfS0VZKSkge1xuICAgICAgICAgIGNvbnN0IGN4S2V5ID0gdHJhbnNmZXJTdGF0ZS5nZXQoQ1hfS0VZLCB7fSk7XG4gICAgICAgICAgY29uc3QgdHJhbnNmZXJyZWRTdGF0ZVNsaWNlID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGtleXMpLFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICBjeEtleVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBzdGF0ZSA9IGRlZXBNZXJnZSh7fSwgc3RhdGUsIHRyYW5zZmVycmVkU3RhdGVTbGljZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==