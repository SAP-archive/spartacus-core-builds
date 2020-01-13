/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromActions from '../actions/customer-coupon.action';
/** @type {?} */
export var initialState = {
    coupons: [],
    sorts: [],
    pagination: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromActions.LOAD_CUSTOMER_COUPONS_SUCCESS: {
            return action.payload;
        }
        case fromActions.SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            /** @type {?} */
            var updatedCustomerCoupon_1 = action.payload.coupon;
            /** @type {?} */
            var customerCoupons_1 = new Array(state.coupons.length);
            state.coupons.forEach((/**
             * @param {?} customerCoupon
             * @param {?} index
             * @return {?}
             */
            function (customerCoupon, index) {
                return customerCoupon.couponId === updatedCustomerCoupon_1.couponId
                    ? (customerCoupons_1[index] = updatedCustomerCoupon_1)
                    : (customerCoupons_1[index] = customerCoupon);
            }));
            return tslib_1.__assign({}, state, { coupons: customerCoupons_1 });
        }
        case fromActions.UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            /** @type {?} */
            var updatedCouponCode_1 = action.payload;
            /** @type {?} */
            var customerCoupons_2 = new Array(state.coupons.length);
            state.coupons.forEach((/**
             * @param {?} customerCoupon
             * @param {?} index
             * @return {?}
             */
            function (customerCoupon, index) {
                return customerCoupon.couponId === updatedCouponCode_1
                    ? (customerCoupons_2[index] = tslib_1.__assign({}, customerCoupon, { notificationOn: false }))
                    : (customerCoupons_2[index] = customerCoupon);
            }));
            return tslib_1.__assign({}, state, { coupons: customerCoupons_2 });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9jdXN0b21lci1jb3Vwb24ucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxXQUFXLE1BQU0sbUNBQW1DLENBQUM7O0FBTWpFLE1BQU0sS0FBTyxZQUFZLEdBQStCO0lBQ3RELE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFDRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF3QztJQUR4QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM5QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkI7UUFFRCxLQUFLLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDOztnQkFDNUMsdUJBQXFCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNOztnQkFDN0MsaUJBQWUsR0FBRyxJQUFJLEtBQUssQ0FBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDdkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsY0FBOEIsRUFBRSxLQUFLO2dCQUMxRCxPQUFBLGNBQWMsQ0FBQyxRQUFRLEtBQUssdUJBQXFCLENBQUMsUUFBUTtvQkFDeEQsQ0FBQyxDQUFDLENBQUMsaUJBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyx1QkFBcUIsQ0FBQztvQkFDbEQsQ0FBQyxDQUFDLENBQUMsaUJBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUM7WUFGN0MsQ0FFNkMsRUFDOUMsQ0FBQztZQUNGLDRCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsaUJBQWUsSUFBRztTQUMvQztRQUVELEtBQUssV0FBVyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O2dCQUM5QyxtQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTzs7Z0JBQ2xDLGlCQUFlLEdBQUcsSUFBSSxLQUFLLENBQWlCLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLGNBQThCLEVBQUUsS0FBSztnQkFDMUQsT0FBQSxjQUFjLENBQUMsUUFBUSxLQUFLLG1CQUFpQjtvQkFDM0MsQ0FBQyxDQUFDLENBQUMsaUJBQWUsQ0FBQyxLQUFLLENBQUMsd0JBQ2xCLGNBQWMsSUFDakIsY0FBYyxFQUFFLEtBQUssR0FDdEIsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQyxpQkFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUw3QyxDQUs2QyxFQUM5QyxDQUFDO1lBQ0YsNEJBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxpQkFBZSxJQUFHO1NBQy9DO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2N1c3RvbWVyLWNvdXBvbi5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb24sXG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jdXN0b21lci1jb3Vwb24ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCA9IHtcbiAgY291cG9uczogW10sXG4gIHNvcnRzOiBbXSxcbiAgcGFnaW5hdGlvbjoge30sXG59O1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb25zLkN1c3RvbWVyQ291cG9uQWN0aW9uXG4pOiBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb25zLkxPQURfQ1VTVE9NRVJfQ09VUE9OU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9ucy5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lckNvdXBvbiA9IGFjdGlvbi5wYXlsb2FkLmNvdXBvbjtcbiAgICAgIGNvbnN0IGN1c3RvbWVyQ291cG9ucyA9IG5ldyBBcnJheTxDdXN0b21lckNvdXBvbj4oc3RhdGUuY291cG9ucy5sZW5ndGgpO1xuICAgICAgc3RhdGUuY291cG9ucy5mb3JFYWNoKChjdXN0b21lckNvdXBvbjogQ3VzdG9tZXJDb3Vwb24sIGluZGV4KSA9PlxuICAgICAgICBjdXN0b21lckNvdXBvbi5jb3Vwb25JZCA9PT0gdXBkYXRlZEN1c3RvbWVyQ291cG9uLmNvdXBvbklkXG4gICAgICAgICAgPyAoY3VzdG9tZXJDb3Vwb25zW2luZGV4XSA9IHVwZGF0ZWRDdXN0b21lckNvdXBvbilcbiAgICAgICAgICA6IChjdXN0b21lckNvdXBvbnNbaW5kZXhdID0gY3VzdG9tZXJDb3Vwb24pXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdXBvbnM6IGN1c3RvbWVyQ291cG9ucyB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbnMuVU5TVUJTQ1JJQkVfQ1VTVE9NRVJfQ09VUE9OX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb3Vwb25Db2RlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBjdXN0b21lckNvdXBvbnMgPSBuZXcgQXJyYXk8Q3VzdG9tZXJDb3Vwb24+KHN0YXRlLmNvdXBvbnMubGVuZ3RoKTtcbiAgICAgIHN0YXRlLmNvdXBvbnMuZm9yRWFjaCgoY3VzdG9tZXJDb3Vwb246IEN1c3RvbWVyQ291cG9uLCBpbmRleCkgPT5cbiAgICAgICAgY3VzdG9tZXJDb3Vwb24uY291cG9uSWQgPT09IHVwZGF0ZWRDb3Vwb25Db2RlXG4gICAgICAgICAgPyAoY3VzdG9tZXJDb3Vwb25zW2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgLi4uY3VzdG9tZXJDb3Vwb24sXG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbk9uOiBmYWxzZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiAoY3VzdG9tZXJDb3Vwb25zW2luZGV4XSA9IGN1c3RvbWVyQ291cG9uKVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vwb25zOiBjdXN0b21lckNvdXBvbnMgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19