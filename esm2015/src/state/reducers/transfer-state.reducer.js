/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
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
    return undefined;
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
export function getServerTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            /** @type {?} */
            const newState = reducer(state, action);
            if (newState) {
                /** @type {?} */
                const stateSlice = getStateSlice(Object.keys(keys), newState);
                transferState.set(CX_KEY, stateSlice);
            }
            return newState;
        };
    };
}
/**
 * @param {?} transferState
 * @param {?} keys
 * @return {?}
 */
export function getBrowserTransferStateReducer(transferState, keys) {
    return function (reducer) {
        return function (state, action) {
            if (action.type === INIT && transferState.hasKey(CX_KEY)) {
                /** @type {?} */
                const cxKey = transferState.get(CX_KEY, {});
                /** @type {?} */
                const transferredStateSlice = getStateSlice(Object.keys(keys), cxKey);
                state = deepMerge({}, state, transferredStateSlice);
            }
            return reducer(state, action);
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RCxNQUFNLE9BQU8sTUFBTSxHQUFxQixZQUFZLENBQVMsVUFBVSxDQUFDOzs7Ozs7O0FBRXhFLE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsVUFBVSxFQUNWLGFBQTZCLEVBQzdCLE1BQW9CO0lBRXBCLElBQ0UsYUFBYTtRQUNiLE1BQU07UUFDTixNQUFNLENBQUMsS0FBSztRQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQzdCO1FBQ0EsSUFBSSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqQyxPQUFPLDhCQUE4QixDQUNuQyxhQUFhLEVBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM5QixDQUFDO1NBQ0g7YUFBTSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sNkJBQTZCLENBQ2xDLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDtLQUNGO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDZCQUE2QixDQUMzQyxhQUE0QixFQUM1QixJQUEwQztJQUUxQyxPQUFPLFVBQVMsT0FBTztRQUNyQixPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7O2tCQUMxQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxRQUFRLEVBQUU7O3NCQUNOLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUM7Z0JBQzdELGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxhQUE0QixFQUM1QixJQUEwQztJQUUxQyxPQUFPLFVBQVMsT0FBTztRQUNyQixPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7WUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztzQkFDbEQsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQzs7c0JBQ3JDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQztnQkFFckUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSU5JVCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdGF0ZVRyYW5zZmVyVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5cbmV4cG9ydCBjb25zdCBDWF9LRVk6IFN0YXRlS2V5PHN0cmluZz4gPSBtYWtlU3RhdGVLZXk8c3RyaW5nPignY3gtc3RhdGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICBwbGF0Zm9ybUlkLFxuICB0cmFuc2ZlclN0YXRlPzogVHJhbnNmZXJTdGF0ZSxcbiAgY29uZmlnPzogU3RhdGVDb25maWdcbikge1xuICBpZiAoXG4gICAgdHJhbnNmZXJTdGF0ZSAmJlxuICAgIGNvbmZpZyAmJlxuICAgIGNvbmZpZy5zdGF0ZSAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2ZlciAmJlxuICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgICAgICAgdHJhbnNmZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1BsYXRmb3JtU2VydmVyKHBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZ2V0U2VydmVyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgICBjb25zdCBzdGF0ZVNsaWNlID0gZ2V0U3RhdGVTbGljZShPYmplY3Qua2V5cyhrZXlzKSwgbmV3U3RhdGUpO1xuICAgICAgICB0cmFuc2ZlclN0YXRlLnNldChDWF9LRVksIHN0YXRlU2xpY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IElOSVQgJiYgdHJhbnNmZXJTdGF0ZS5oYXNLZXkoQ1hfS0VZKSkge1xuICAgICAgICBjb25zdCBjeEtleSA9IHRyYW5zZmVyU3RhdGUuZ2V0KENYX0tFWSwge30pO1xuICAgICAgICBjb25zdCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKE9iamVjdC5rZXlzKGtleXMpLCBjeEtleSk7XG5cbiAgICAgICAgc3RhdGUgPSBkZWVwTWVyZ2Uoe30sIHN0YXRlLCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==