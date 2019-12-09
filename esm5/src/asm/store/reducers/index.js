/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
            state = tslib_1.__assign({}, state, { customerSearchResult: undefined, csagentToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [
    clearCustomerSupportAgentAsmState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQU96RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsb0JBQW9CLEdBQ3JCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUdyRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsb0JBQW9CLEVBQUUsYUFBYSxDQUNqQyxvQkFBb0IsQ0FDckI7UUFDRCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztRQUMvQixZQUFZLEVBQUUsYUFBYSxDQUFZLGtCQUFrQixDQUFDO0tBQzNELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUE2QixhQUFhLENBQUM7O0FBRWpFLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGlDQUFpQyxDQUMvQyxPQUF3QztJQUV4Qzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsNkJBQTZCLEVBQUU7WUFDN0QsS0FBSyx3QkFDQSxLQUFLLElBQ1Isb0JBQW9CLEVBQUUsU0FBUyxFQUMvQixZQUFZLEVBQUUsU0FBUyxHQUN4QixDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUF1QjtJQUM5QyxpQ0FBaUM7Q0FDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWV0YVJlZHVjZXIsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgQXNtU3RhdGUsXG4gIENTQUdFTlRfVE9LRU5fREFUQSxcbiAgQ1VTVE9NRVJfU0VBUkNIX0RBVEEsXG59IGZyb20gJy4uL2FzbS1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQXNtVWlSZWR1Y2VyIGZyb20gJy4vYXNtLXVpLnJlZHVjZXInO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBc21TdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGN1c3RvbWVyU2VhcmNoUmVzdWx0OiBsb2FkZXJSZWR1Y2VyPEN1c3RvbWVyU2VhcmNoUGFnZT4oXG4gICAgICBDVVNUT01FUl9TRUFSQ0hfREFUQVxuICAgICksXG4gICAgYXNtVWk6IGZyb21Bc21VaVJlZHVjZXIucmVkdWNlcixcbiAgICBjc2FnZW50VG9rZW46IGxvYWRlclJlZHVjZXI8VXNlclRva2VuPihDU0FHRU5UX1RPS0VOX0RBVEEpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxBc21TdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxBc21TdGF0ZT4+KCdBc21SZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckN1c3RvbWVyU3VwcG9ydEFnZW50QXNtU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8QXNtU3RhdGUsIEFjdGlvbj5cbik6IEFjdGlvblJlZHVjZXI8QXNtU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlQpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VzdG9tZXJTZWFyY2hSZXN1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY3NhZ2VudFRva2VuOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW1xuICBjbGVhckN1c3RvbWVyU3VwcG9ydEFnZW50QXNtU3RhdGUsXG5dO1xuIl19