/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
import { AUTH_FEATURE } from '../../auth/store/auth-state';
import { deepMerge } from '../../config/utils/deep-merge';
import { StateTransferType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
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
    /** @type {?} */
    var transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
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
                var stateSlice = getStateSlice(transferStateKeys, newState);
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
    var transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
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
                    var transferredStateSlice = getStateSlice(transferStateKeys, cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTNFLE1BQU0sS0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRDs7OztJQUFPLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU8sRUFBQztBQUM1QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQzNDLGFBQTRCLEVBQzVCLElBQTBDOztRQUVwQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FDeEMsSUFBSSxFQUNKLGlCQUFpQixDQUFDLGNBQWMsQ0FDakM7SUFFRDs7OztJQUFPLFVBQVMsT0FBTztRQUNyQjs7Ozs7UUFBTyxVQUFTLEtBQUssRUFBRSxNQUFXOztnQkFDMUIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3ZDLElBQUksUUFBUSxFQUFFOztvQkFDTixVQUFVLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztnQkFDN0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdkM7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQzVDLGFBQTRCLEVBQzVCLElBQTBDOztRQUVwQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FDeEMsSUFBSSxFQUNKLGlCQUFpQixDQUFDLGNBQWMsQ0FDakM7SUFFRDs7OztJQUFPLFVBQVMsT0FBTztRQUNyQjs7Ozs7UUFBTyxVQUFTLEtBQUssRUFBRSxNQUFXO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2hDOzs7b0JBR0ssU0FBUyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDOztvQkFDbEQsVUFBVSxHQUNkLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFL0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzt3QkFDekMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7d0JBQ3JDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7b0JBRXJFLEtBQUssR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2lCQUNyRDtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5LFxuICBUcmFuc2ZlclN0YXRlLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElOSVQgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBVVRIX0ZFQVRVUkUsIFN0YXRlV2l0aEF1dGggfSBmcm9tICcuLi8uLi9hdXRoL3N0b3JlL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0YXRlVHJhbnNmZXJUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXJLZXlzQnlUeXBlLCBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGNvbnN0IENYX0tFWTogU3RhdGVLZXk8c3RyaW5nPiA9IG1ha2VTdGF0ZUtleTxzdHJpbmc+KCdjeC1zdGF0ZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHBsYXRmb3JtSWQsXG4gIHRyYW5zZmVyU3RhdGU/OiBUcmFuc2ZlclN0YXRlLFxuICBjb25maWc/OiBTdGF0ZUNvbmZpZ1xuKSB7XG4gIGlmIChcbiAgICB0cmFuc2ZlclN0YXRlICYmXG4gICAgY29uZmlnICYmXG4gICAgY29uZmlnLnN0YXRlICYmXG4gICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyICYmXG4gICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgICAgICAgdHJhbnNmZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXIgPT4gcmVkdWNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlIH1cbikge1xuICBjb25zdCB0cmFuc2ZlclN0YXRlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAga2V5cyxcbiAgICBTdGF0ZVRyYW5zZmVyVHlwZS5UUkFOU0ZFUl9TVEFURVxuICApO1xuXG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKHRyYW5zZmVyU3RhdGVLZXlzLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRyYW5zZmVyU3RhdGUuc2V0KENYX0tFWSwgc3RhdGVTbGljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlIH1cbikge1xuICBjb25zdCB0cmFuc2ZlclN0YXRlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAga2V5cyxcbiAgICBTdGF0ZVRyYW5zZmVyVHlwZS5UUkFOU0ZFUl9TVEFURVxuICApO1xuXG4gIHJldHVybiBmdW5jdGlvbihyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUKSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHV0aWxpemUgdHJhbnNmZXIgc3RhdGUgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgY29uc3QgYXV0aFN0YXRlID0gKHN0YXRlIGFzIFN0YXRlV2l0aEF1dGgpW0FVVEhfRkVBVFVSRV07XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPVxuICAgICAgICAgIGF1dGhTdGF0ZSAmJiBhdXRoU3RhdGUudXNlclRva2VuICYmIGF1dGhTdGF0ZS51c2VyVG9rZW4udG9rZW47XG5cbiAgICAgICAgaWYgKCFpc0xvZ2dlZEluICYmIHRyYW5zZmVyU3RhdGUuaGFzS2V5KENYX0tFWSkpIHtcbiAgICAgICAgICBjb25zdCBjeEtleSA9IHRyYW5zZmVyU3RhdGUuZ2V0KENYX0tFWSwge30pO1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVycmVkU3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UodHJhbnNmZXJTdGF0ZUtleXMsIGN4S2V5KTtcblxuICAgICAgICAgIHN0YXRlID0gZGVlcE1lcmdlKHt9LCBzdGF0ZSwgdHJhbnNmZXJyZWRTdGF0ZVNsaWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9O1xuICB9O1xufVxuIl19