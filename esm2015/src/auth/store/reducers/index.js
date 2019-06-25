/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
export const metaReducers = [clearAuthState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBSUwsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFN0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkUsV0FBVyxFQUFFLGFBQWEsQ0FBYyxpQkFBaUIsQ0FBQztLQUMzRCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBOEIsY0FBYyxDQUFDOztBQUVuRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQXlDO0lBRXpDOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsS0FBSyxxQkFDQSxLQUFLLElBQ1IsU0FBUyxFQUFFLFNBQVMsR0FDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFN0YXRlLCBDTElFTlRfVE9LRU5fREFUQSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJUb2tlblJlZHVjZXIgZnJvbSAnLi91c2VyLXRva2VuLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyVG9rZW46IGNvbWJpbmVSZWR1Y2Vycyh7IHRva2VuOiBmcm9tVXNlclRva2VuUmVkdWNlci5yZWR1Y2VyIH0pLFxuICAgIGNsaWVudFRva2VuOiBsb2FkZXJSZWR1Y2VyPENsaWVudFRva2VuPihDTElFTlRfVE9LRU5fREFUQSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPEF1dGhTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxBdXRoU3RhdGU+PignQXV0aFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQXV0aFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEF1dGhTdGF0ZSwgQWN0aW9uPlxuKTogQWN0aW9uUmVkdWNlcjxBdXRoU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJUb2tlbjogdW5kZWZpbmVkLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckF1dGhTdGF0ZV07XG4iXX0=