/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { makeStateKey, } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { deepMerge } from '../../config/utils/deep-merge';
import { getStateSlice } from '../utils/get-state-slice';
/** @type {?} */
export var INIT_ACTION = '@ngrx/store/init';
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
    return function (reducer) {
        return function (state, action) {
            /** @type {?} */
            var newState = reducer(state, action);
            if (newState) {
                transferState.set(CX_KEY, getStateSlice(newState, keys));
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
            if (action.type === INIT_ACTION && transferState.hasKey(CX_KEY)) {
                /** @type {?} */
                var transferedState = getStateSlice(transferState.get(CX_KEY, {}), keys);
                state = deepMerge({}, state, transferedState);
            }
            return reducer(state, action);
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsWUFBWSxHQUdiLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFekQsTUFBTSxLQUFPLFdBQVcsR0FBRyxrQkFBa0I7O0FBQzdDLE1BQU0sS0FBTyxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUM7Ozs7Ozs7QUFFeEUsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFVLEVBQ1YsYUFBNkIsRUFDN0IsTUFBb0I7SUFFcEIsSUFDRSxhQUFhO1FBQ2IsTUFBTTtRQUNOLE1BQU0sQ0FBQyxLQUFLO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDN0I7UUFDQSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sOEJBQThCLENBQ25DLGFBQWEsRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlCLENBQUM7U0FDSDthQUFNLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsT0FBTyw2QkFBNkIsQ0FDbEMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQzNDLGFBQTRCLEVBQzVCLElBQVk7SUFFWixPQUFPLFVBQVMsT0FBTztRQUNyQixPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQVc7O2dCQUMxQixRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFFdkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxhQUE0QixFQUM1QixJQUFTO0lBRVQsT0FBTyxVQUFTLE9BQU87UUFDckIsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFXO1lBQ2hDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTs7b0JBQ3pELGVBQWUsR0FBRyxhQUFhLENBQ25DLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUM3QixJQUFJLENBQ0w7Z0JBQ0QsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5LFxuICBUcmFuc2ZlclN0YXRlLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGNvbnN0IElOSVRfQUNUSU9OID0gJ0BuZ3J4L3N0b3JlL2luaXQnO1xuZXhwb3J0IGNvbnN0IENYX0tFWTogU3RhdGVLZXk8c3RyaW5nPiA9IG1ha2VTdGF0ZUtleTxzdHJpbmc+KCdjeC1zdGF0ZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gIHBsYXRmb3JtSWQsXG4gIHRyYW5zZmVyU3RhdGU/OiBUcmFuc2ZlclN0YXRlLFxuICBjb25maWc/OiBTdGF0ZUNvbmZpZ1xuKSB7XG4gIGlmIChcbiAgICB0cmFuc2ZlclN0YXRlICYmXG4gICAgY29uZmlnICYmXG4gICAgY29uZmlnLnN0YXRlICYmXG4gICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyICYmXG4gICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZ2V0QnJvd3NlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgICAgICAgdHJhbnNmZXJTdGF0ZSxcbiAgICAgICAgY29uZmlnLnN0YXRlLnNzclRyYW5zZmVyLmtleXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuICBrZXlzOiBvYmplY3Rcbikge1xuICByZXR1cm4gZnVuY3Rpb24ocmVkdWNlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uOiBhbnkpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIHRyYW5zZmVyU3RhdGUuc2V0KENYX0tFWSwgZ2V0U3RhdGVTbGljZShuZXdTdGF0ZSwga2V5cykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogYW55XG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbjogYW55KSB7XG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IElOSVRfQUNUSU9OICYmIHRyYW5zZmVyU3RhdGUuaGFzS2V5KENYX0tFWSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmZXJlZFN0YXRlID0gZ2V0U3RhdGVTbGljZShcbiAgICAgICAgICB0cmFuc2ZlclN0YXRlLmdldChDWF9LRVksIHt9KSxcbiAgICAgICAgICBrZXlzXG4gICAgICAgICk7XG4gICAgICAgIHN0YXRlID0gZGVlcE1lcmdlKHt9LCBzdGF0ZSwgdHJhbnNmZXJlZFN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH07XG4gIH07XG59XG4iXX0=