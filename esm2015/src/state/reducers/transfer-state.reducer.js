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
export const CX_KEY = makeStateKey('cx-state');
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
    reducer => reducer);
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
            const newState = reducer(state, action);
            if (newState) {
                /** @type {?} */
                const stateSlice = getStateSlice(Object.keys(keys), newState);
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
                const authState = ((/** @type {?} */ (state)))[AUTH_FEATURE];
                /** @type {?} */
                const isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    /** @type {?} */
                    const cxKey = transferState.get(CX_KEY, {});
                    /** @type {?} */
                    const transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRDs7OztJQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FDM0MsYUFBNEIsRUFDNUIsSUFBMEM7SUFFMUM7Ozs7SUFBTyxVQUFTLE9BQU87UUFDckI7Ozs7O1FBQU8sVUFBUyxLQUFLLEVBQUUsTUFBVzs7a0JBQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUN2QyxJQUFJLFFBQVEsRUFBRTs7c0JBQ04sVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQztnQkFDN0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdkM7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQzVDLGFBQTRCLEVBQzVCLElBQTBDO0lBRTFDOzs7O0lBQU8sVUFBUyxPQUFPO1FBQ3JCOzs7OztRQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7WUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDaEM7OztzQkFHSyxTQUFTLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUM7O3NCQUNsRCxVQUFVLEdBQ2QsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLO2dCQUUvRCxJQUFJLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7OzBCQUN6QyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDOzswQkFDckMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO29CQUVyRSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgbWFrZVN0YXRlS2V5LFxuICBTdGF0ZUtleSxcbiAgVHJhbnNmZXJTdGF0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJTklUIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQVVUSF9GRUFUVVJFLCBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vLi4vYXV0aC9zdG9yZS9hdXRoLXN0YXRlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdGF0ZVRyYW5zZmVyVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5cbmV4cG9ydCBjb25zdCBDWF9LRVk6IFN0YXRlS2V5PHN0cmluZz4gPSBtYWtlU3RhdGVLZXk8c3RyaW5nPignY3gtc3RhdGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICBwbGF0Zm9ybUlkLFxuICB0cmFuc2ZlclN0YXRlPzogVHJhbnNmZXJTdGF0ZSxcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbikge1xuICBpZiAoXG4gICAgdHJhbnNmZXJTdGF0ZSAmJlxuICAgIGNvbmZpZyAmJlxuICAgIGNvbmZpZy5zdGF0ZSAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2ZlciAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgICAgICAgdHJhbnNmZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UoT2JqZWN0LmtleXMoa2V5cyksIG5ld1N0YXRlKTtcbiAgICAgICAgdHJhbnNmZXJTdGF0ZS5zZXQoQ1hfS0VZLCBzdGF0ZVNsaWNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RhdGVUcmFuc2ZlclR5cGUgfVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUKSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHV0aWxpemUgdHJhbnNmZXIgc3RhdGUgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgY29uc3QgYXV0aFN0YXRlID0gKHN0YXRlIGFzIFN0YXRlV2l0aEF1dGgpW0FVVEhfRkVBVFVSRV07XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPVxuICAgICAgICAgIGF1dGhTdGF0ZSAmJiBhdXRoU3RhdGUudXNlclRva2VuICYmIGF1dGhTdGF0ZS51c2VyVG9rZW4udG9rZW47XG5cbiAgICAgICAgaWYgKCFpc0xvZ2dlZEluICYmIHRyYW5zZmVyU3RhdGUuaGFzS2V5KENYX0tFWSkpIHtcbiAgICAgICAgICBjb25zdCBjeEtleSA9IHRyYW5zZmVyU3RhdGUuZ2V0KENYX0tFWSwge30pO1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVycmVkU3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UoT2JqZWN0LmtleXMoa2V5cyksIGN4S2V5KTtcblxuICAgICAgICAgIHN0YXRlID0gZGVlcE1lcmdlKHt9LCBzdGF0ZSwgdHJhbnNmZXJyZWRTdGF0ZVNsaWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9O1xuICB9O1xufVxuIl19