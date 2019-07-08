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
                const stateSlice = getStateSlice(Object.keys(keys), [], newState);
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
                    const transferredStateSlice = getStateSlice(Object.keys(keys), [], cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLDZCQUE2QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRDs7OztJQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FDM0MsYUFBNEIsRUFDNUIsSUFBMEM7SUFFMUM7Ozs7SUFBTyxVQUFTLE9BQU87UUFDckI7Ozs7O1FBQU8sVUFBUyxLQUFLLEVBQUUsTUFBVzs7a0JBQzFCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUN2QyxJQUFJLFFBQVEsRUFBRTs7c0JBQ04sVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2pFLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxhQUE0QixFQUM1QixJQUEwQztJQUUxQzs7OztJQUFPLFVBQVMsT0FBTztRQUNyQjs7Ozs7UUFBTyxVQUFTLEtBQUssRUFBRSxNQUFXO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ2hDOzs7c0JBR0ssU0FBUyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDOztzQkFDbEQsVUFBVSxHQUNkLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFL0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzswQkFDekMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7MEJBQ3JDLHFCQUFxQixHQUFHLGFBQWEsQ0FDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDakIsRUFBRSxFQUNGLEtBQUssQ0FDTjtvQkFFRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgbWFrZVN0YXRlS2V5LFxuICBTdGF0ZUtleSxcbiAgVHJhbnNmZXJTdGF0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJTklUIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQVVUSF9GRUFUVVJFLCBTdGF0ZVdpdGhBdXRoIH0gZnJvbSAnLi4vLi4vYXV0aC9zdG9yZS9hdXRoLXN0YXRlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdGF0ZVRyYW5zZmVyVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5cbmV4cG9ydCBjb25zdCBDWF9LRVk6IFN0YXRlS2V5PHN0cmluZz4gPSBtYWtlU3RhdGVLZXk8c3RyaW5nPignY3gtc3RhdGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICBwbGF0Zm9ybUlkLFxuICB0cmFuc2ZlclN0YXRlPzogVHJhbnNmZXJTdGF0ZSxcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbikge1xuICBpZiAoXG4gICAgdHJhbnNmZXJTdGF0ZSAmJlxuICAgIGNvbmZpZyAmJlxuICAgIGNvbmZpZy5zdGF0ZSAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2ZlciAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgICAgICAgdHJhbnNmZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UoT2JqZWN0LmtleXMoa2V5cyksIFtdLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRyYW5zZmVyU3RhdGUuc2V0KENYX0tFWSwgc3RhdGVTbGljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlIH1cbikge1xuICByZXR1cm4gZnVuY3Rpb24ocmVkdWNlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uOiBhbnkpIHtcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCkge1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugc2hvdWxkIG5vdCB1dGlsaXplIHRyYW5zZmVyIHN0YXRlIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAgICAgIGNvbnN0IGF1dGhTdGF0ZSA9IChzdGF0ZSBhcyBTdGF0ZVdpdGhBdXRoKVtBVVRIX0ZFQVRVUkVdO1xuICAgICAgICBjb25zdCBpc0xvZ2dlZEluID1cbiAgICAgICAgICBhdXRoU3RhdGUgJiYgYXV0aFN0YXRlLnVzZXJUb2tlbiAmJiBhdXRoU3RhdGUudXNlclRva2VuLnRva2VuO1xuXG4gICAgICAgIGlmICghaXNMb2dnZWRJbiAmJiB0cmFuc2ZlclN0YXRlLmhhc0tleShDWF9LRVkpKSB7XG4gICAgICAgICAgY29uc3QgY3hLZXkgPSB0cmFuc2ZlclN0YXRlLmdldChDWF9LRVksIHt9KTtcbiAgICAgICAgICBjb25zdCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5cyksXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIGN4S2V5XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHN0YXRlID0gZGVlcE1lcmdlKHt9LCBzdGF0ZSwgdHJhbnNmZXJyZWRTdGF0ZVNsaWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9O1xuICB9O1xufVxuIl19