/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { LOGOUT } from '../../../auth/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { USER_ADDRESSES, USER_CONSENTS, USER_ORDERS, USER_PAYMENT_METHODS, REGIONS, } from '../user-state';
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
export var reducerToken = new InjectionToken('UserReducers');
/** @type {?} */
export var reducerProvider = {
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
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearUserState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBR0wsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxvQkFBb0IsRUFFcEIsT0FBTyxHQUVSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSywyQkFBMkIsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxLQUFLLHVCQUF1QixNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxLQUFLLHdCQUF3QixNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sS0FBSyxpQkFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxLQUFLLHVCQUF1QixNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sS0FBSyxzQkFBc0IsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHL0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE9BQU8sRUFBRSxlQUFlLENBQUM7WUFDdkIsT0FBTyxFQUFFLHNCQUFzQixDQUFDLE9BQU87U0FDeEMsQ0FBQztRQUNGLFNBQVMsRUFBRSxhQUFhLENBQ3RCLGNBQWMsRUFDZCxvQkFBb0IsQ0FBQyxPQUFPLENBQzdCO1FBQ0QsZ0JBQWdCLEVBQUUsMkJBQTJCLENBQUMsT0FBTztRQUNyRCxRQUFRLEVBQUUsYUFBYSxDQUNyQixhQUFhLEVBQ2IsdUJBQXVCLENBQUMsT0FBTyxDQUNoQztRQUNELFFBQVEsRUFBRSxhQUFhLENBQ3JCLG9CQUFvQixFQUNwQixrQkFBa0IsQ0FBQyxPQUFPLENBQzNCO1FBQ0QsTUFBTSxFQUFFLGFBQWEsQ0FDbkIsV0FBVyxFQUNYLHFCQUFxQixDQUFDLE9BQU8sQ0FDOUI7UUFDRCxLQUFLLEVBQUUsdUJBQXVCLENBQUMsT0FBTztRQUN0QyxTQUFTLEVBQUUscUJBQXFCLENBQUMsT0FBTztRQUN4QyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTztRQUNqQyxPQUFPLEVBQUUsYUFBYSxDQUFlLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7UUFDekUsYUFBYSxFQUFFLHdCQUF3QixDQUFDLE9BQU87S0FDaEQsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQThCLGNBQWMsQ0FBQzs7QUFFbkUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQge1xuICBVU0VSX0FERFJFU1NFUyxcbiAgVVNFUl9DT05TRU5UUyxcbiAgVVNFUl9PUkRFUlMsXG4gIFVTRVJfUEFZTUVOVF9NRVRIT0RTLFxuICBVc2VyU3RhdGUsXG4gIFJFR0lPTlMsXG4gIFJlZ2lvbnNTdGF0ZSxcbn0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQmlsbGluZ0NvdW50cmllc1JlZHVjZXIgZnJvbSAnLi9iaWxsaW5nLWNvdW50cmllcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21EZWxpdmVyeUNvdW50cmllcyBmcm9tICcuL2RlbGl2ZXJ5LWNvdW50cmllcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21PcmRlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vb3JkZXItZGV0YWlscy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21QYXltZW50UmVkdWNlciBmcm9tICcuL3BheW1lbnQtbWV0aG9kcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21SZWdpb25zUmVkdWNlciBmcm9tICcuL3JlZ2lvbnMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVzZXRQYXNzd29yZFJlZHVjZXIgZnJvbSAnLi9yZXNldC1wYXNzd29yZC5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21UaXRsZXNSZWR1Y2VyIGZyb20gJy4vdGl0bGVzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbUFkZHJlc3Nlc1JlZHVjZXIgZnJvbSAnLi91c2VyLWFkZHJlc3Nlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyQ29uc2VudHNSZWR1Y2VyIGZyb20gJy4vdXNlci1jb25zZW50cy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyRGV0YWlsc1JlZHVjZXIgZnJvbSAnLi91c2VyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlck9yZGVyc1JlZHVjZXIgZnJvbSAnLi91c2VyLW9yZGVycy5yZWR1Y2VyJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxVc2VyU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50OiBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgZGV0YWlsczogZnJvbVVzZXJEZXRhaWxzUmVkdWNlci5yZWR1Y2VyLFxuICAgIH0pLFxuICAgIGFkZHJlc3NlczogbG9hZGVyUmVkdWNlcjxBZGRyZXNzW10+KFxuICAgICAgVVNFUl9BRERSRVNTRVMsXG4gICAgICBmcm9tQWRkcmVzc2VzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBiaWxsaW5nQ291bnRyaWVzOiBmcm9tQmlsbGluZ0NvdW50cmllc1JlZHVjZXIucmVkdWNlcixcbiAgICBjb25zZW50czogbG9hZGVyUmVkdWNlcjxDb25zZW50VGVtcGxhdGVbXT4oXG4gICAgICBVU0VSX0NPTlNFTlRTLFxuICAgICAgZnJvbVVzZXJDb25zZW50c1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgcGF5bWVudHM6IGxvYWRlclJlZHVjZXI8UGF5bWVudERldGFpbHNbXT4oXG4gICAgICBVU0VSX1BBWU1FTlRfTUVUSE9EUyxcbiAgICAgIGZyb21QYXltZW50UmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBvcmRlcnM6IGxvYWRlclJlZHVjZXI8T3JkZXJIaXN0b3J5TGlzdD4oXG4gICAgICBVU0VSX09SREVSUyxcbiAgICAgIGZyb21Vc2VyT3JkZXJzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBvcmRlcjogZnJvbU9yZGVyRGV0YWlsc1JlZHVjZXIucmVkdWNlcixcbiAgICBjb3VudHJpZXM6IGZyb21EZWxpdmVyeUNvdW50cmllcy5yZWR1Y2VyLFxuICAgIHRpdGxlczogZnJvbVRpdGxlc1JlZHVjZXIucmVkdWNlcixcbiAgICByZWdpb25zOiBsb2FkZXJSZWR1Y2VyPFJlZ2lvbnNTdGF0ZT4oUkVHSU9OUywgZnJvbVJlZ2lvbnNSZWR1Y2VyLnJlZHVjZXIpLFxuICAgIHJlc2V0UGFzc3dvcmQ6IGZyb21SZXNldFBhc3N3b3JkUmVkdWNlci5yZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxVc2VyU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPj4oJ1VzZXJSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclVzZXJTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyVXNlclN0YXRlXTtcbiJdfQ==