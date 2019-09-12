/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
import { AUTH_FEATURE } from '../../auth/store/auth-state';
import { deepMerge } from '../../config/utils/deep-merge';
import { StateTransferType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
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
    /** @type {?} */
    const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
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
                const stateSlice = getStateSlice(transferStateKeys, [], newState);
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
    /** @type {?} */
    const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
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
                    const transferredStateSlice = getStateSlice(transferStateKeys, [], cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTNFLE1BQU0sT0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRDs7OztJQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FDM0MsYUFBNEIsRUFDNUIsSUFBMEM7O1VBRXBDLGlCQUFpQixHQUFHLGdCQUFnQixDQUN4QyxJQUFJLEVBQ0osaUJBQWlCLENBQUMsY0FBYyxDQUNqQztJQUVEOzs7O0lBQU8sVUFBUyxPQUFPO1FBQ3JCOzs7OztRQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7O2tCQUMxQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDdkMsSUFBSSxRQUFRLEVBQUU7O3NCQUNOLFVBQVUsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDakUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdkM7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQzVDLGFBQTRCLEVBQzVCLElBQTBDOztVQUVwQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FDeEMsSUFBSSxFQUNKLGlCQUFpQixDQUFDLGNBQWMsQ0FDakM7SUFFRDs7OztJQUFPLFVBQVMsT0FBTztRQUNyQjs7Ozs7UUFBTyxVQUFTLEtBQUssRUFBRSxNQUFXO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2hDOzs7c0JBR0ssU0FBUyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDOztzQkFDbEQsVUFBVSxHQUNkLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFL0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzswQkFDekMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7MEJBQ3JDLHFCQUFxQixHQUFHLGFBQWEsQ0FDekMsaUJBQWlCLEVBQ2pCLEVBQUUsRUFDRixLQUFLLENBQ047b0JBRUQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSU5JVCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFVVEhfRkVBVFVSRSwgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uLy4uL2F1dGgvc3RvcmUvYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RhdGVUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGZpbHRlcktleXNCeVR5cGUsIGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgY29uc3QgQ1hfS0VZOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PHN0cmluZz4oJ2N4LXN0YXRlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgcGxhdGZvcm1JZCxcbiAgdHJhbnNmZXJTdGF0ZT86IFRyYW5zZmVyU3RhdGUsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pIHtcbiAgaWYgKFxuICAgIHRyYW5zZmVyU3RhdGUgJiZcbiAgICBjb25maWcgJiZcbiAgICBjb25maWcuc3RhdGUgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRCcm93c2VyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVkdWNlciA9PiByZWR1Y2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG4gIGtleXM6IHsgW2tleTogc3RyaW5nXTogU3RhdGVUcmFuc2ZlclR5cGUgfVxuKSB7XG4gIGNvbnN0IHRyYW5zZmVyU3RhdGVLZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICBrZXlzLFxuICAgIFN0YXRlVHJhbnNmZXJUeXBlLlRSQU5TRkVSX1NUQVRFXG4gICk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UodHJhbnNmZXJTdGF0ZUtleXMsIFtdLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRyYW5zZmVyU3RhdGUuc2V0KENYX0tFWSwgc3RhdGVTbGljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlIH1cbikge1xuICBjb25zdCB0cmFuc2ZlclN0YXRlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAga2V5cyxcbiAgICBTdGF0ZVRyYW5zZmVyVHlwZS5UUkFOU0ZFUl9TVEFURVxuICApO1xuXG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUKSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHV0aWxpemUgdHJhbnNmZXIgc3RhdGUgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgY29uc3QgYXV0aFN0YXRlID0gKHN0YXRlIGFzIFN0YXRlV2l0aEF1dGgpW0FVVEhfRkVBVFVSRV07XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPVxuICAgICAgICAgIGF1dGhTdGF0ZSAmJiBhdXRoU3RhdGUudXNlclRva2VuICYmIGF1dGhTdGF0ZS51c2VyVG9rZW4udG9rZW47XG5cbiAgICAgICAgaWYgKCFpc0xvZ2dlZEluICYmIHRyYW5zZmVyU3RhdGUuaGFzS2V5KENYX0tFWSkpIHtcbiAgICAgICAgICBjb25zdCBjeEtleSA9IHRyYW5zZmVyU3RhdGUuZ2V0KENYX0tFWSwge30pO1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVycmVkU3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlS2V5cyxcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgY3hLZXlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgc3RhdGUgPSBkZWVwTWVyZ2Uoe30sIHN0YXRlLCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH07XG4gIH07XG59XG4iXX0=