/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/store/actions/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { CUSTOMER_SEARCH_DATA } from '../asm-state';
import * as fromAsmUiReducer from './asm-ui.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        customerSearchResult: loaderReducer(CUSTOMER_SEARCH_DATA),
        asmUi: fromAsmUiReducer.reducer,
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('AsmReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCustomerSupportAgentAsmState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT_CUSTOMER_SUPPORT_AGENT) {
            state = tslib_1.__assign({}, state, { customerSearchResult: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [
    clearCustomerSupportAgentAsmState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQU96RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFBWSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFckQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLG9CQUFvQixFQUFFLGFBQWEsQ0FDakMsb0JBQW9CLENBQ3JCO1FBQ0QsS0FBSyxFQUFFLGdCQUFnQixDQUFDLE9BQU87S0FDaEMsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQTZCLGFBQWEsQ0FBQzs7QUFFakUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsaUNBQWlDLENBQy9DLE9BQXdDO0lBRXhDOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRTtZQUM3RCxLQUFLLHdCQUNBLEtBQUssSUFDUixvQkFBb0IsRUFBRSxTQUFTLEdBQ2hDLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCO0lBQzlDLGlDQUFpQztDQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDdXN0b21lclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21TdGF0ZSwgQ1VTVE9NRVJfU0VBUkNIX0RBVEEgfSBmcm9tICcuLi9hc20tc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFzbVVpUmVkdWNlciBmcm9tICcuL2FzbS11aS5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8QXNtU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBjdXN0b21lclNlYXJjaFJlc3VsdDogbG9hZGVyUmVkdWNlcjxDdXN0b21lclNlYXJjaFBhZ2U+KFxuICAgICAgQ1VTVE9NRVJfU0VBUkNIX0RBVEFcbiAgICApLFxuICAgIGFzbVVpOiBmcm9tQXNtVWlSZWR1Y2VyLnJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPEFzbVN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPEFzbVN0YXRlPj4oJ0FzbVJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ3VzdG9tZXJTdXBwb3J0QWdlbnRBc21TdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxBc21TdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBc21TdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVRfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVCkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lclNlYXJjaFJlc3VsdDogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtcbiAgY2xlYXJDdXN0b21lclN1cHBvcnRBZ2VudEFzbVN0YXRlLFxuXTtcbiJdfQ==