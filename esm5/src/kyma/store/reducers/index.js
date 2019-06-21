/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { OPEN_ID_TOKEN_DATA } from '../kyma-state';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        openIdToken: loaderReducer(OPEN_ID_TOKEN_DATA),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('KymaReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearKymaState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === LOGOUT) {
            state = tslib_1.__assign({}, state, { openIdToken: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearKymaState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFPekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUzRSxPQUFPLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFOUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFdBQVcsRUFBRSxhQUFhLENBQWMsa0JBQWtCLENBQUM7S0FDNUQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUF5QztJQUV6Qzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyx3QkFDQSxLQUFLLElBQ1IsV0FBVyxFQUFFLFNBQVMsR0FDdkIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWV0YVJlZHVjZXIsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBLeW1hU3RhdGUsIE9QRU5fSURfVE9LRU5fREFUQSB9IGZyb20gJy4uL2t5bWEtc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxLeW1hU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBvcGVuSWRUb2tlbjogbG9hZGVyUmVkdWNlcjxPcGVuSWRUb2tlbj4oT1BFTl9JRF9UT0tFTl9EQVRBKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8S3ltYVN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPEt5bWFTdGF0ZT4+KCdLeW1hUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJLeW1hU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8S3ltYVN0YXRlLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPEt5bWFTdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3BlbklkVG9rZW46IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJLeW1hU3RhdGVdO1xuIl19