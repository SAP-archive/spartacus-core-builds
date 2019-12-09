/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/store/actions/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { CSAGENT_TOKEN_DATA, CUSTOMER_SEARCH_DATA, } from '../asm-state';
import * as fromAsmUiReducer from './asm-ui.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        customerSearchResult: loaderReducer(CUSTOMER_SEARCH_DATA),
        asmUi: fromAsmUiReducer.reducer,
        csagentToken: loaderReducer(CSAGENT_TOKEN_DATA),
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('AsmReducers');
/** @type {?} */
export const reducerProvider = {
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
            state = Object.assign({}, state, { customerSearchResult: undefined, csagentToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [
    clearCustomerSupportAgentAsmState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBT3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxLQUFLLGdCQUFnQixNQUFNLGtCQUFrQixDQUFDOzs7O0FBR3JELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxvQkFBb0IsRUFBRSxhQUFhLENBQ2pDLG9CQUFvQixDQUNyQjtRQUNELEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO1FBQy9CLFlBQVksRUFBRSxhQUFhLENBQVksa0JBQWtCLENBQUM7S0FDM0QsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQTZCLGFBQWEsQ0FBQzs7QUFFakUsTUFBTSxPQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsaUNBQWlDLENBQy9DLE9BQXdDO0lBRXhDOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRTtZQUM3RCxLQUFLLHFCQUNBLEtBQUssSUFDUixvQkFBb0IsRUFBRSxTQUFTLEVBQy9CLFlBQVksRUFBRSxTQUFTLEdBQ3hCLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQXVCO0lBQzlDLGlDQUFpQztDQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDdXN0b21lclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQge1xuICBBc21TdGF0ZSxcbiAgQ1NBR0VOVF9UT0tFTl9EQVRBLFxuICBDVVNUT01FUl9TRUFSQ0hfREFUQSxcbn0gZnJvbSAnLi4vYXNtLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Bc21VaVJlZHVjZXIgZnJvbSAnLi9hc20tdWkucmVkdWNlcic7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi8uLi9hdXRoL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPEFzbVN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgY3VzdG9tZXJTZWFyY2hSZXN1bHQ6IGxvYWRlclJlZHVjZXI8Q3VzdG9tZXJTZWFyY2hQYWdlPihcbiAgICAgIENVU1RPTUVSX1NFQVJDSF9EQVRBXG4gICAgKSxcbiAgICBhc21VaTogZnJvbUFzbVVpUmVkdWNlci5yZWR1Y2VyLFxuICAgIGNzYWdlbnRUb2tlbjogbG9hZGVyUmVkdWNlcjxVc2VyVG9rZW4+KENTQUdFTlRfVE9LRU5fREFUQSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPEFzbVN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPEFzbVN0YXRlPj4oJ0FzbVJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ3VzdG9tZXJTdXBwb3J0QWdlbnRBc21TdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxBc21TdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBc21TdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVRfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVCkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lclNlYXJjaFJlc3VsdDogdW5kZWZpbmVkLFxuICAgICAgICBjc2FnZW50VG9rZW46IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbXG4gIGNsZWFyQ3VzdG9tZXJTdXBwb3J0QWdlbnRBc21TdGF0ZSxcbl07XG4iXX0=