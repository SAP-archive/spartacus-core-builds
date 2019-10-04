/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { AuthActions } from '../actions/index';
import { CLIENT_TOKEN_DATA, CSAGENT_TOKEN_DATA, } from '../auth-state';
import * as fromUserTokenReducer from './user-token.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        userToken: combineReducers({ token: fromUserTokenReducer.reducer }),
        clientToken: loaderReducer(CLIENT_TOKEN_DATA),
        csagentToken: loaderReducer(CSAGENT_TOKEN_DATA),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('AuthReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearAuthState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT) {
            state = tslib_1.__assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    });
}
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCustomerSupportAgentAuthState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT_CUSTOMER_SUPPORT_AGENT) {
            state = tslib_1.__assign({}, state, { csagentToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [
    clearAuthState,
    clearCustomerSupportAgentAuthState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGVBQWUsR0FFaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLGtCQUFrQixHQUNuQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssb0JBQW9CLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFN0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkUsV0FBVyxFQUFFLGFBQWEsQ0FBYyxpQkFBaUIsQ0FBQztRQUMxRCxZQUFZLEVBQUUsYUFBYSxDQUFZLGtCQUFrQixDQUFDO0tBQzNELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUE4QixjQUFjLENBQUM7O0FBRW5FLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBeUM7SUFFekM7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxLQUFLLHdCQUNBLEtBQUssSUFDUixTQUFTLEVBQUUsU0FBUyxHQUNyQixDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0NBQWtDLENBQ2hELE9BQXlDO0lBRXpDOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRTtZQUM3RCxLQUFLLHdCQUNBLEtBQUssSUFDUixZQUFZLEVBQUUsU0FBUyxHQUN4QixDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFDRCxNQUFNLEtBQU8sWUFBWSxHQUF1QjtJQUM5QyxjQUFjO0lBQ2Qsa0NBQWtDO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEFjdGlvblJlZHVjZXIsXG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIGNvbWJpbmVSZWR1Y2VycyxcbiAgTWV0YVJlZHVjZXIsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4sIFVzZXJUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgQXV0aFN0YXRlLFxuICBDTElFTlRfVE9LRU5fREFUQSxcbiAgQ1NBR0VOVF9UT0tFTl9EQVRBLFxufSBmcm9tICcuLi9hdXRoLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyVG9rZW5SZWR1Y2VyIGZyb20gJy4vdXNlci10b2tlbi5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgdXNlclRva2VuOiBjb21iaW5lUmVkdWNlcnMoeyB0b2tlbjogZnJvbVVzZXJUb2tlblJlZHVjZXIucmVkdWNlciB9KSxcbiAgICBjbGllbnRUb2tlbjogbG9hZGVyUmVkdWNlcjxDbGllbnRUb2tlbj4oQ0xJRU5UX1RPS0VOX0RBVEEpLFxuICAgIGNzYWdlbnRUb2tlbjogbG9hZGVyUmVkdWNlcjxVc2VyVG9rZW4+KENTQUdFTlRfVE9LRU5fREFUQSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+PignQXV0aFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQXV0aFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJUb2tlbjogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckN1c3RvbWVyU3VwcG9ydEFnZW50QXV0aFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlQpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3NhZ2VudFRva2VuOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtcbiAgY2xlYXJBdXRoU3RhdGUsXG4gIGNsZWFyQ3VzdG9tZXJTdXBwb3J0QWdlbnRBdXRoU3RhdGUsXG5dO1xuIl19