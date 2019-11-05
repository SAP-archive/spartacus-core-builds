/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            state = Object.assign({}, state, { customerSearchResult: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [
    clearCustomerSupportAgentAsmState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXNtL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBT3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFZLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUVyRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsb0JBQW9CLEVBQUUsYUFBYSxDQUNqQyxvQkFBb0IsQ0FDckI7UUFDRCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztLQUNoQyxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBNkIsYUFBYSxDQUFDOztBQUVqRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUMsQ0FDL0MsT0FBd0M7SUFFeEM7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLDZCQUE2QixFQUFFO1lBQzdELEtBQUsscUJBQ0EsS0FBSyxJQUNSLG9CQUFvQixFQUFFLFNBQVMsR0FDaEMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FBdUI7SUFDOUMsaUNBQWlDO0NBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEFjdGlvblJlZHVjZXIsXG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbVN0YXRlLCBDVVNUT01FUl9TRUFSQ0hfREFUQSB9IGZyb20gJy4uL2FzbS1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQXNtVWlSZWR1Y2VyIGZyb20gJy4vYXNtLXVpLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBc21TdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGN1c3RvbWVyU2VhcmNoUmVzdWx0OiBsb2FkZXJSZWR1Y2VyPEN1c3RvbWVyU2VhcmNoUGFnZT4oXG4gICAgICBDVVNUT01FUl9TRUFSQ0hfREFUQVxuICAgICksXG4gICAgYXNtVWk6IGZyb21Bc21VaVJlZHVjZXIucmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8QXNtU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8QXNtU3RhdGU+PignQXNtUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDdXN0b21lclN1cHBvcnRBZ2VudEFzbVN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEFzbVN0YXRlLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPEFzbVN0YXRlLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVF9DVVNUT01FUl9TVVBQT1JUX0FHRU5UKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1c3RvbWVyU2VhcmNoUmVzdWx0OiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW1xuICBjbGVhckN1c3RvbWVyU3VwcG9ydEFnZW50QXNtU3RhdGUsXG5dO1xuIl19