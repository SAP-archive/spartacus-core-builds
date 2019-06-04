/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { OPEN_ID_TOKEN_DATA } from '../kyma-state';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        openIdToken: loaderReducer(OPEN_ID_TOKEN_DATA),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('KymaReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearKymaState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = tslib_1.__assign({}, state, { openIdToken: undefined });
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearKymaState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFPekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRSxPQUFPLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFOUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFdBQVcsRUFBRSxhQUFhLENBQWMsa0JBQWtCLENBQUM7S0FDNUQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUF5QztJQUV6QyxPQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixLQUFLLHdCQUNBLEtBQUssSUFDUixXQUFXLEVBQUUsU0FBUyxHQUN2QixDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEt5bWFTdGF0ZSwgT1BFTl9JRF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4va3ltYS1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPEt5bWFTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIG9wZW5JZFRva2VuOiBsb2FkZXJSZWR1Y2VyPE9wZW5JZFRva2VuPihPUEVOX0lEX1RPS0VOX0RBVEEpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxLeW1hU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8S3ltYVN0YXRlPj4oJ0t5bWFSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckt5bWFTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxLeW1hU3RhdGUsIEFjdGlvbj5cbik6IEFjdGlvblJlZHVjZXI8S3ltYVN0YXRlLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IExPR09VVCkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuSWRUb2tlbjogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckt5bWFTdGF0ZV07XG4iXX0=