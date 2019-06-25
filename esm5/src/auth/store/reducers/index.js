/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { AuthActions } from '../actions/index';
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
/** @type {?} */
export var metaReducers = [clearAuthState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGVBQWUsR0FFaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxLQUFLLG9CQUFvQixNQUFNLHNCQUFzQixDQUFDOzs7O0FBRTdELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxTQUFTLEVBQUUsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25FLFdBQVcsRUFBRSxhQUFhLENBQWMsaUJBQWlCLENBQUM7S0FDM0QsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssd0JBQ0EsS0FBSyxJQUNSLFNBQVMsRUFBRSxTQUFTLEdBQ3JCLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEFjdGlvblJlZHVjZXIsXG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIGNvbWJpbmVSZWR1Y2VycyxcbiAgTWV0YVJlZHVjZXIsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEF1dGhTdGF0ZSwgQ0xJRU5UX1RPS0VOX0RBVEEgfSBmcm9tICcuLi9hdXRoLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyVG9rZW5SZWR1Y2VyIGZyb20gJy4vdXNlci10b2tlbi5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgdXNlclRva2VuOiBjb21iaW5lUmVkdWNlcnMoeyB0b2tlbjogZnJvbVVzZXJUb2tlblJlZHVjZXIucmVkdWNlciB9KSxcbiAgICBjbGllbnRUb2tlbjogbG9hZGVyUmVkdWNlcjxDbGllbnRUb2tlbj4oQ0xJRU5UX1RPS0VOX0RBVEEpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8QXV0aFN0YXRlPj4oJ0F1dGhSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckF1dGhTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj5cbik6IEFjdGlvblJlZHVjZXI8QXV0aFN0YXRlLCBBY3Rpb24+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyVG9rZW46IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJBdXRoU3RhdGVdO1xuIl19