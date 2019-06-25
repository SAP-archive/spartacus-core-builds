/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { AuthActions } from '../../../auth/store/actions/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { REGIONS, USER_ADDRESSES, USER_CONSENTS, USER_ORDERS, USER_PAYMENT_METHODS, } from '../user-state';
import * as fromBillingCountriesReducer from './billing-countries.reducer';
import * as fromDeliveryCountries from './delivery-countries.reducer';
import * as fromOrderDetailsReducer from './order-details.reducer';
import * as fromPaymentReducer from './payment-methods.reducer';
import * as fromRegionsReducer from './regions.reducer';
import * as fromResetPasswordReducer from './reset-password.reducer';
import * as fromTitlesReducer from './titles.reducer';
import * as fromAddressesReducer from './user-addresses.reducer';
import * as fromUserConsentsReducer from './user-consents.reducer';
import * as fromUserDetailsReducer from './user-details.reducer';
import * as fromUserOrdersReducer from './user-orders.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        account: combineReducers({
            details: fromUserDetailsReducer.reducer,
        }),
        addresses: loaderReducer(USER_ADDRESSES, fromAddressesReducer.reducer),
        billingCountries: fromBillingCountriesReducer.reducer,
        consents: loaderReducer(USER_CONSENTS, fromUserConsentsReducer.reducer),
        payments: loaderReducer(USER_PAYMENT_METHODS, fromPaymentReducer.reducer),
        orders: loaderReducer(USER_ORDERS, fromUserOrdersReducer.reducer),
        order: fromOrderDetailsReducer.reducer,
        countries: fromDeliveryCountries.reducer,
        titles: fromTitlesReducer.reducer,
        regions: loaderReducer(REGIONS, fromRegionsReducer.reducer),
        resetPassword: fromResetPasswordReducer.reducer,
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('UserReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearUserState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [clearUserState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBR0wsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxPQUFPLEVBR1AsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsb0JBQW9CLEdBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSywyQkFBMkIsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxLQUFLLHVCQUF1QixNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxLQUFLLHdCQUF3QixNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxLQUFLLHVCQUF1QixNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sS0FBSyxzQkFBc0IsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFL0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE9BQU8sRUFBRSxlQUFlLENBQUM7WUFDdkIsT0FBTyxFQUFFLHNCQUFzQixDQUFDLE9BQU87U0FDeEMsQ0FBQztRQUNGLFNBQVMsRUFBRSxhQUFhLENBQ3RCLGNBQWMsRUFDZCxvQkFBb0IsQ0FBQyxPQUFPLENBQzdCO1FBQ0QsZ0JBQWdCLEVBQUUsMkJBQTJCLENBQUMsT0FBTztRQUNyRCxRQUFRLEVBQUUsYUFBYSxDQUNyQixhQUFhLEVBQ2IsdUJBQXVCLENBQUMsT0FBTyxDQUNoQztRQUNELFFBQVEsRUFBRSxhQUFhLENBQ3JCLG9CQUFvQixFQUNwQixrQkFBa0IsQ0FBQyxPQUFPLENBQzNCO1FBQ0QsTUFBTSxFQUFFLGFBQWEsQ0FDbkIsV0FBVyxFQUNYLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUI7UUFDRCxLQUFLLEVBQUUsdUJBQXVCLENBQUMsT0FBTztRQUN0QyxTQUFTLEVBQUUscUJBQXFCLENBQUMsT0FBTztRQUN4QyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTztRQUNqQyxPQUFPLEVBQUUsYUFBYSxDQUFlLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDekUsYUFBYSxFQUFFLHdCQUF3QixDQUFDLE9BQU87S0FDaEQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxPQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHtcbiAgUkVHSU9OUyxcbiAgUmVnaW9uc1N0YXRlLFxuICBVc2VyU3RhdGUsXG4gIFVTRVJfQUREUkVTU0VTLFxuICBVU0VSX0NPTlNFTlRTLFxuICBVU0VSX09SREVSUyxcbiAgVVNFUl9QQVlNRU5UX01FVEhPRFMsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUJpbGxpbmdDb3VudHJpZXNSZWR1Y2VyIGZyb20gJy4vYmlsbGluZy1jb3VudHJpZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tRGVsaXZlcnlDb3VudHJpZXMgZnJvbSAnLi9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzUmVkdWNlciBmcm9tICcuL29yZGVyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUGF5bWVudFJlZHVjZXIgZnJvbSAnLi9wYXltZW50LW1ldGhvZHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVnaW9uc1JlZHVjZXIgZnJvbSAnLi9yZWdpb25zLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVJlc2V0UGFzc3dvcmRSZWR1Y2VyIGZyb20gJy4vcmVzZXQtcGFzc3dvcmQucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVGl0bGVzUmVkdWNlciBmcm9tICcuL3RpdGxlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzZXNSZWR1Y2VyIGZyb20gJy4vdXNlci1hZGRyZXNzZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckNvbnNlbnRzUmVkdWNlciBmcm9tICcuL3VzZXItY29uc2VudHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vdXNlci1kZXRhaWxzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJPcmRlcnNSZWR1Y2VyIGZyb20gJy4vdXNlci1vcmRlcnMucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFVzZXJTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGFjY291bnQ6IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICBkZXRhaWxzOiBmcm9tVXNlckRldGFpbHNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgfSksXG4gICAgYWRkcmVzc2VzOiBsb2FkZXJSZWR1Y2VyPEFkZHJlc3NbXT4oXG4gICAgICBVU0VSX0FERFJFU1NFUyxcbiAgICAgIGZyb21BZGRyZXNzZXNSZWR1Y2VyLnJlZHVjZXJcbiAgICApLFxuICAgIGJpbGxpbmdDb3VudHJpZXM6IGZyb21CaWxsaW5nQ291bnRyaWVzUmVkdWNlci5yZWR1Y2VyLFxuICAgIGNvbnNlbnRzOiBsb2FkZXJSZWR1Y2VyPENvbnNlbnRUZW1wbGF0ZVtdPihcbiAgICAgIFVTRVJfQ09OU0VOVFMsXG4gICAgICBmcm9tVXNlckNvbnNlbnRzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBwYXltZW50czogbG9hZGVyUmVkdWNlcjxQYXltZW50RGV0YWlsc1tdPihcbiAgICAgIFVTRVJfUEFZTUVOVF9NRVRIT0RTLFxuICAgICAgZnJvbVBheW1lbnRSZWR1Y2VyLnJlZHVjZXJcbiAgICApLFxuICAgIG9yZGVyczogbG9hZGVyUmVkdWNlcjxPcmRlckhpc3RvcnlMaXN0PihcbiAgICAgIFVTRVJfT1JERVJTLFxuICAgICAgZnJvbVVzZXJPcmRlcnNSZWR1Y2VyLnJlZHVjZXJcbiAgICApLFxuICAgIG9yZGVyOiBmcm9tT3JkZXJEZXRhaWxzUmVkdWNlci5yZWR1Y2VyLFxuICAgIGNvdW50cmllczogZnJvbURlbGl2ZXJ5Q291bnRyaWVzLnJlZHVjZXIsXG4gICAgdGl0bGVzOiBmcm9tVGl0bGVzUmVkdWNlci5yZWR1Y2VyLFxuICAgIHJlZ2lvbnM6IGxvYWRlclJlZHVjZXI8UmVnaW9uc1N0YXRlPihSRUdJT05TLCBmcm9tUmVnaW9uc1JlZHVjZXIucmVkdWNlciksXG4gICAgcmVzZXRQYXNzd29yZDogZnJvbVJlc2V0UGFzc3dvcmRSZWR1Y2VyLnJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFVzZXJTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxVc2VyU3RhdGU+PignVXNlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVXNlclN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVQpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJVc2VyU3RhdGVdO1xuIl19