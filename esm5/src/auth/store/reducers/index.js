/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        if (action.type === LOGOUT) {
            state = tslib_1.__assign({}, state, { userToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearAuthState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGVBQWUsR0FFaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxLQUFLLG9CQUFvQixNQUFNLHNCQUFzQixDQUFDOzs7O0FBRTdELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxTQUFTLEVBQUUsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25FLFdBQVcsRUFBRSxhQUFhLENBQWMsaUJBQWlCLENBQUM7S0FDM0QsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyx3QkFDQSxLQUFLLElBQ1IsU0FBUyxFQUFFLFNBQVMsR0FDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgQXV0aFN0YXRlLCBDTElFTlRfVE9LRU5fREFUQSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJUb2tlblJlZHVjZXIgZnJvbSAnLi91c2VyLXRva2VuLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IGNvbWJpbmVSZWR1Y2Vycyh7IHRva2VuOiBmcm9tVXNlclRva2VuUmVkdWNlci5yZWR1Y2VyIH0pLFxuICAgIGNsaWVudFRva2VuOiBsb2FkZXJSZWR1Y2VyPENsaWVudFRva2VuPihDTElFTlRfVE9LRU5fREFUQSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+PignQXV0aFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQXV0aFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJUb2tlbjogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckF1dGhTdGF0ZV07XG4iXX0=