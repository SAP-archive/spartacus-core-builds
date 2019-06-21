/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { LOGOUT } from '../actions/login-logout.action';
import { CLIENT_TOKEN_DATA } from '../auth-state';
import * as fromUserTokenReducer from './user-token.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        userToken: combineReducers({ token: fromUserTokenReducer.reducer }),
        clientToken: loaderReducer(CLIENT_TOKEN_DATA),
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
        if (action.type === LOGOUT) {
            state = Object.assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [clearAuthState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBSUwsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hELE9BQU8sRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFN0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkUsV0FBVyxFQUFFLGFBQWEsQ0FBYyxpQkFBaUIsQ0FBQztLQUMzRCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBOEIsY0FBYyxDQUFDOztBQUVuRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQXlDO0lBRXpDOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixLQUFLLHFCQUNBLEtBQUssSUFDUixTQUFTLEVBQUUsU0FBUyxHQUNyQixDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IExPR09VVCB9IGZyb20gJy4uL2FjdGlvbnMvbG9naW4tbG9nb3V0LmFjdGlvbic7XG5pbXBvcnQgeyBBdXRoU3RhdGUsIENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlclRva2VuUmVkdWNlciBmcm9tICcuL3VzZXItdG9rZW4ucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJUb2tlbjogY29tYmluZVJlZHVjZXJzKHsgdG9rZW46IGZyb21Vc2VyVG9rZW5SZWR1Y2VyLnJlZHVjZXIgfSksXG4gICAgY2xpZW50VG9rZW46IGxvYWRlclJlZHVjZXI8Q2xpZW50VG9rZW4+KENMSUVOVF9UT0tFTl9EQVRBKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT4+KCdBdXRoUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBdXRoU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8QXV0aFN0YXRlLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlclRva2VuOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyQXV0aFN0YXRlXTtcbiJdfQ==