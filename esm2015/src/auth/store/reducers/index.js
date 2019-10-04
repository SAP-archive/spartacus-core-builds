/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const reducerToken = new InjectionToken('AuthReducers');
/** @type {?} */
export const reducerProvider = {
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
            state = Object.assign({}, state, { userToken: undefined });
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
            state = Object.assign({}, state, { csagentToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [
    clearAuthState,
    clearCustomerSupportAgentAuthState,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBSUwsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsa0JBQWtCLEdBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU3RCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsU0FBUyxFQUFFLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRSxXQUFXLEVBQUUsYUFBYSxDQUFjLGlCQUFpQixDQUFDO1FBQzFELFlBQVksRUFBRSxhQUFhLENBQVksa0JBQWtCLENBQUM7S0FDM0QsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxPQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUsscUJBQ0EsS0FBSyxJQUNSLFNBQVMsRUFBRSxTQUFTLEdBQ3JCLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxrQ0FBa0MsQ0FDaEQsT0FBeUM7SUFFekM7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLDZCQUE2QixFQUFFO1lBQzdELEtBQUsscUJBQ0EsS0FBSyxJQUNSLFlBQVksRUFBRSxTQUFTLEdBQ3hCLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUNELE1BQU0sT0FBTyxZQUFZLEdBQXVCO0lBQzlDLGNBQWM7SUFDZCxrQ0FBa0M7Q0FDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiwgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBBdXRoU3RhdGUsXG4gIENMSUVOVF9UT0tFTl9EQVRBLFxuICBDU0FHRU5UX1RPS0VOX0RBVEEsXG59IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJUb2tlblJlZHVjZXIgZnJvbSAnLi91c2VyLXRva2VuLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IGNvbWJpbmVSZWR1Y2Vycyh7IHRva2VuOiBmcm9tVXNlclRva2VuUmVkdWNlci5yZWR1Y2VyIH0pLFxuICAgIGNsaWVudFRva2VuOiBsb2FkZXJSZWR1Y2VyPENsaWVudFRva2VuPihDTElFTlRfVE9LRU5fREFUQSksXG4gICAgY3NhZ2VudFRva2VuOiBsb2FkZXJSZWR1Y2VyPFVzZXJUb2tlbj4oQ1NBR0VOVF9UT0tFTl9EQVRBKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT4+KCdBdXRoUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBdXRoU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8QXV0aFN0YXRlLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVQpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlclRva2VuOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ3VzdG9tZXJTdXBwb3J0QWdlbnRBdXRoU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8QXV0aFN0YXRlLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVRfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVCkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjc2FnZW50VG9rZW46IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW1xuICBjbGVhckF1dGhTdGF0ZSxcbiAgY2xlYXJDdXN0b21lclN1cHBvcnRBZ2VudEF1dGhTdGF0ZSxcbl07XG4iXX0=