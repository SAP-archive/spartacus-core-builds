/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { AuthActions } from '../../../auth/store/actions/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { REGIONS, USER_ADDRESSES, USER_CONSENTS, USER_ORDERS, USER_PAYMENT_METHODS, NOTIFICATION_PREFERENCES, PRODUCT_INTERESTS, USER_RETURN_REQUESTS, USER_ORDER_DETAILS, USER_RETURN_REQUEST_DETAILS, } from '../user-state';
import * as fromBillingCountriesReducer from './billing-countries.reducer';
import * as fromConsignmentTrackingReducer from './consignment-tracking.reducer';
import * as fromDeliveryCountries from './delivery-countries.reducer';
import * as fromNotificationPreferenceReducer from './notification-preference.reducer';
import * as fromOrderDetailsReducer from './order-details.reducer';
import * as fromPaymentReducer from './payment-methods.reducer';
import * as fromRegionsReducer from './regions.reducer';
import * as fromResetPasswordReducer from './reset-password.reducer';
import * as fromTitlesReducer from './titles.reducer';
import * as fromAddressesReducer from './user-addresses.reducer';
import * as fromUserConsentsReducer from './user-consents.reducer';
import * as fromUserDetailsReducer from './user-details.reducer';
import * as fromUserOrdersReducer from './user-orders.reducer';
import * as fromInterestsReducer from './product-interests.reducer';
import * as fromOrderReturnRequestReducer from './order-return-request.reducer';
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
        order: loaderReducer(USER_ORDER_DETAILS, fromOrderDetailsReducer.reducer),
        orderReturn: loaderReducer(USER_RETURN_REQUEST_DETAILS),
        orderReturnList: loaderReducer(USER_RETURN_REQUESTS, fromOrderReturnRequestReducer.reducer),
        countries: fromDeliveryCountries.reducer,
        titles: fromTitlesReducer.reducer,
        regions: loaderReducer(REGIONS, fromRegionsReducer.reducer),
        resetPassword: fromResetPasswordReducer.reducer,
        consignmentTracking: fromConsignmentTrackingReducer.reducer,
        notificationPreferences: loaderReducer(NOTIFICATION_PREFERENCES, fromNotificationPreferenceReducer.reducer),
        productInterests: loaderReducer(PRODUCT_INTERESTS, fromInterestsReducer.reducer),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBR0wsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFZaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxPQUFPLEVBR1AsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLHdCQUF3QixFQUN4QixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQiwyQkFBMkIsR0FDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLDJCQUEyQixNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sS0FBSyw4QkFBOEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRixPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxLQUFLLGlDQUFpQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyx1QkFBdUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxLQUFLLGtCQUFrQixNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sS0FBSyx3QkFBd0IsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEtBQUssaUJBQWlCLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxLQUFLLG9CQUFvQixNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sS0FBSyx1QkFBdUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEtBQUssc0JBQXNCLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEtBQUssNkJBQTZCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFFaEYsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE9BQU8sRUFBRSxlQUFlLENBQUM7WUFDdkIsT0FBTyxFQUFFLHNCQUFzQixDQUFDLE9BQU87U0FDeEMsQ0FBQztRQUNGLFNBQVMsRUFBRSxhQUFhLENBQ3RCLGNBQWMsRUFDZCxvQkFBb0IsQ0FBQyxPQUFPLENBQzdCO1FBQ0QsZ0JBQWdCLEVBQUUsMkJBQTJCLENBQUMsT0FBTztRQUNyRCxRQUFRLEVBQUUsYUFBYSxDQUNyQixhQUFhLEVBQ2IsdUJBQXVCLENBQUMsT0FBTyxDQUNoQztRQUNELFFBQVEsRUFBRSxhQUFhLENBQ3JCLG9CQUFvQixFQUNwQixrQkFBa0IsQ0FBQyxPQUFPLENBQzNCO1FBQ0QsTUFBTSxFQUFFLGFBQWEsQ0FDbkIsV0FBVyxFQUNYLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUI7UUFDRCxLQUFLLEVBQUUsYUFBYSxDQUNsQixrQkFBa0IsRUFDbEIsdUJBQXVCLENBQUMsT0FBTyxDQUNoQztRQUNELFdBQVcsRUFBRSxhQUFhLENBQWdCLDJCQUEyQixDQUFDO1FBQ3RFLGVBQWUsRUFBRSxhQUFhLENBQzVCLG9CQUFvQixFQUNwQiw2QkFBNkIsQ0FBQyxPQUFPLENBQ3RDO1FBQ0QsU0FBUyxFQUFFLHFCQUFxQixDQUFDLE9BQU87UUFDeEMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLE9BQU87UUFDakMsT0FBTyxFQUFFLGFBQWEsQ0FBZSxPQUFPLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1FBQ3pFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxPQUFPO1FBQy9DLG1CQUFtQixFQUFFLDhCQUE4QixDQUFDLE9BQU87UUFDM0QsdUJBQXVCLEVBQUUsYUFBYSxDQUNwQyx3QkFBd0IsRUFDeEIsaUNBQWlDLENBQUMsT0FBTyxDQUMxQztRQUNELGdCQUFnQixFQUFFLGFBQWEsQ0FDN0IsaUJBQWlCLEVBQ2pCLG9CQUFvQixDQUFDLE9BQU8sQ0FDN0I7S0FDRixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBOEIsY0FBYyxDQUFDOztBQUVuRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5pbXBvcnQge1xuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdCxcbiAgT3JkZXIsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHtcbiAgUkVHSU9OUyxcbiAgUmVnaW9uc1N0YXRlLFxuICBVc2VyU3RhdGUsXG4gIFVTRVJfQUREUkVTU0VTLFxuICBVU0VSX0NPTlNFTlRTLFxuICBVU0VSX09SREVSUyxcbiAgVVNFUl9QQVlNRU5UX01FVEhPRFMsXG4gIE5PVElGSUNBVElPTl9QUkVGRVJFTkNFUyxcbiAgUFJPRFVDVF9JTlRFUkVTVFMsXG4gIFVTRVJfUkVUVVJOX1JFUVVFU1RTLFxuICBVU0VSX09SREVSX0RFVEFJTFMsXG4gIFVTRVJfUkVUVVJOX1JFUVVFU1RfREVUQUlMUyxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQmlsbGluZ0NvdW50cmllc1JlZHVjZXIgZnJvbSAnLi9iaWxsaW5nLWNvdW50cmllcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Db25zaWdubWVudFRyYWNraW5nUmVkdWNlciBmcm9tICcuL2NvbnNpZ25tZW50LXRyYWNraW5nLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbURlbGl2ZXJ5Q291bnRyaWVzIGZyb20gJy4vZGVsaXZlcnktY291bnRyaWVzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbU5vdGlmaWNhdGlvblByZWZlcmVuY2VSZWR1Y2VyIGZyb20gJy4vbm90aWZpY2F0aW9uLXByZWZlcmVuY2UucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzUmVkdWNlciBmcm9tICcuL29yZGVyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUGF5bWVudFJlZHVjZXIgZnJvbSAnLi9wYXltZW50LW1ldGhvZHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVnaW9uc1JlZHVjZXIgZnJvbSAnLi9yZWdpb25zLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVJlc2V0UGFzc3dvcmRSZWR1Y2VyIGZyb20gJy4vcmVzZXQtcGFzc3dvcmQucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVGl0bGVzUmVkdWNlciBmcm9tICcuL3RpdGxlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzZXNSZWR1Y2VyIGZyb20gJy4vdXNlci1hZGRyZXNzZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckNvbnNlbnRzUmVkdWNlciBmcm9tICcuL3VzZXItY29uc2VudHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vdXNlci1kZXRhaWxzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJPcmRlcnNSZWR1Y2VyIGZyb20gJy4vdXNlci1vcmRlcnMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tSW50ZXJlc3RzUmVkdWNlciBmcm9tICcuL3Byb2R1Y3QtaW50ZXJlc3RzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbU9yZGVyUmV0dXJuUmVxdWVzdFJlZHVjZXIgZnJvbSAnLi9vcmRlci1yZXR1cm4tcmVxdWVzdC5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGRldGFpbHM6IGZyb21Vc2VyRGV0YWlsc1JlZHVjZXIucmVkdWNlcixcbiAgICB9KSxcbiAgICBhZGRyZXNzZXM6IGxvYWRlclJlZHVjZXI8QWRkcmVzc1tdPihcbiAgICAgIFVTRVJfQUREUkVTU0VTLFxuICAgICAgZnJvbUFkZHJlc3Nlc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgYmlsbGluZ0NvdW50cmllczogZnJvbUJpbGxpbmdDb3VudHJpZXNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgY29uc2VudHM6IGxvYWRlclJlZHVjZXI8Q29uc2VudFRlbXBsYXRlW10+KFxuICAgICAgVVNFUl9DT05TRU5UUyxcbiAgICAgIGZyb21Vc2VyQ29uc2VudHNSZWR1Y2VyLnJlZHVjZXJcbiAgICApLFxuICAgIHBheW1lbnRzOiBsb2FkZXJSZWR1Y2VyPFBheW1lbnREZXRhaWxzW10+KFxuICAgICAgVVNFUl9QQVlNRU5UX01FVEhPRFMsXG4gICAgICBmcm9tUGF5bWVudFJlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXJzOiBsb2FkZXJSZWR1Y2VyPE9yZGVySGlzdG9yeUxpc3Q+KFxuICAgICAgVVNFUl9PUkRFUlMsXG4gICAgICBmcm9tVXNlck9yZGVyc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXI6IGxvYWRlclJlZHVjZXI8T3JkZXI+KFxuICAgICAgVVNFUl9PUkRFUl9ERVRBSUxTLFxuICAgICAgZnJvbU9yZGVyRGV0YWlsc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXJSZXR1cm46IGxvYWRlclJlZHVjZXI8UmV0dXJuUmVxdWVzdD4oVVNFUl9SRVRVUk5fUkVRVUVTVF9ERVRBSUxTKSxcbiAgICBvcmRlclJldHVybkxpc3Q6IGxvYWRlclJlZHVjZXI8UmV0dXJuUmVxdWVzdExpc3Q+KFxuICAgICAgVVNFUl9SRVRVUk5fUkVRVUVTVFMsXG4gICAgICBmcm9tT3JkZXJSZXR1cm5SZXF1ZXN0UmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBjb3VudHJpZXM6IGZyb21EZWxpdmVyeUNvdW50cmllcy5yZWR1Y2VyLFxuICAgIHRpdGxlczogZnJvbVRpdGxlc1JlZHVjZXIucmVkdWNlcixcbiAgICByZWdpb25zOiBsb2FkZXJSZWR1Y2VyPFJlZ2lvbnNTdGF0ZT4oUkVHSU9OUywgZnJvbVJlZ2lvbnNSZWR1Y2VyLnJlZHVjZXIpLFxuICAgIHJlc2V0UGFzc3dvcmQ6IGZyb21SZXNldFBhc3N3b3JkUmVkdWNlci5yZWR1Y2VyLFxuICAgIGNvbnNpZ25tZW50VHJhY2tpbmc6IGZyb21Db25zaWdubWVudFRyYWNraW5nUmVkdWNlci5yZWR1Y2VyLFxuICAgIG5vdGlmaWNhdGlvblByZWZlcmVuY2VzOiBsb2FkZXJSZWR1Y2VyPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4oXG4gICAgICBOT1RJRklDQVRJT05fUFJFRkVSRU5DRVMsXG4gICAgICBmcm9tTm90aWZpY2F0aW9uUHJlZmVyZW5jZVJlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgcHJvZHVjdEludGVyZXN0czogbG9hZGVyUmVkdWNlcjxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+KFxuICAgICAgUFJPRFVDVF9JTlRFUkVTVFMsXG4gICAgICBmcm9tSW50ZXJlc3RzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFVzZXJTdGF0ZT4+KCdVc2VyUmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJVc2VyU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PlxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhclVzZXJTdGF0ZV07XG4iXX0=