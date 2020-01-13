/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/customer-coupon.action';
/** @type {?} */
export const initialState = {
    coupons: [],
    sorts: [],
    pagination: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.LOAD_CUSTOMER_COUPONS_SUCCESS: {
            return action.payload;
        }
        case fromActions.SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            /** @type {?} */
            const updatedCustomerCoupon = action.payload.coupon;
            /** @type {?} */
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((/**
             * @param {?} customerCoupon
             * @param {?} index
             * @return {?}
             */
            (customerCoupon, index) => customerCoupon.couponId === updatedCustomerCoupon.couponId
                ? (customerCoupons[index] = updatedCustomerCoupon)
                : (customerCoupons[index] = customerCoupon)));
            return Object.assign({}, state, { coupons: customerCoupons });
        }
        case fromActions.UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
            /** @type {?} */
            const updatedCouponCode = action.payload;
            /** @type {?} */
            const customerCoupons = new Array(state.coupons.length);
            state.coupons.forEach((/**
             * @param {?} customerCoupon
             * @param {?} index
             * @return {?}
             */
            (customerCoupon, index) => customerCoupon.couponId === updatedCouponCode
                ? (customerCoupons[index] = Object.assign({}, customerCoupon, { notificationOn: false }))
                : (customerCoupons[index] = customerCoupon)));
            return Object.assign({}, state, { coupons: customerCoupons });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9jdXN0b21lci1jb3Vwb24ucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFNakUsTUFBTSxPQUFPLFlBQVksR0FBK0I7SUFDdEQsT0FBTyxFQUFFLEVBQUU7SUFDWCxLQUFLLEVBQUUsRUFBRTtJQUNULFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUNELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXdDO0lBRXhDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELEtBQUssV0FBVyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7O2tCQUM1QyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07O2tCQUM3QyxlQUFlLEdBQUcsSUFBSSxLQUFLLENBQWlCLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLGNBQThCLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDOUQsY0FBYyxDQUFDLFFBQVEsS0FBSyxxQkFBcUIsQ0FBQyxRQUFRO2dCQUN4RCxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcscUJBQXFCLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUMsRUFDOUMsQ0FBQztZQUNGLHlCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsZUFBZSxJQUFHO1NBQy9DO1FBRUQsS0FBSyxXQUFXLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7a0JBQzlDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPOztrQkFDbEMsZUFBZSxHQUFHLElBQUksS0FBSyxDQUFpQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN2RSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxjQUE4QixFQUFFLEtBQUssRUFBRSxFQUFFLENBQzlELGNBQWMsQ0FBQyxRQUFRLEtBQUssaUJBQWlCO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLHFCQUNsQixjQUFjLElBQ2pCLGNBQWMsRUFBRSxLQUFLLEdBQ3RCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUM5QyxDQUFDO1lBQ0YseUJBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxlQUFlLElBQUc7U0FDL0M7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY3VzdG9tZXItY291cG9uLmFjdGlvbic7XG5pbXBvcnQge1xuICBDdXN0b21lckNvdXBvbixcbiAgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0ID0ge1xuICBjb3Vwb25zOiBbXSxcbiAgc29ydHM6IFtdLFxuICBwYWdpbmF0aW9uOiB7fSxcbn07XG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbnMuQ3VzdG9tZXJDb3Vwb25BY3Rpb25cbik6IEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbnMuTE9BRF9DVVNUT01FUl9DT1VQT05TX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb25zLlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdXBkYXRlZEN1c3RvbWVyQ291cG9uID0gYWN0aW9uLnBheWxvYWQuY291cG9uO1xuICAgICAgY29uc3QgY3VzdG9tZXJDb3Vwb25zID0gbmV3IEFycmF5PEN1c3RvbWVyQ291cG9uPihzdGF0ZS5jb3Vwb25zLmxlbmd0aCk7XG4gICAgICBzdGF0ZS5jb3Vwb25zLmZvckVhY2goKGN1c3RvbWVyQ291cG9uOiBDdXN0b21lckNvdXBvbiwgaW5kZXgpID0+XG4gICAgICAgIGN1c3RvbWVyQ291cG9uLmNvdXBvbklkID09PSB1cGRhdGVkQ3VzdG9tZXJDb3Vwb24uY291cG9uSWRcbiAgICAgICAgICA/IChjdXN0b21lckNvdXBvbnNbaW5kZXhdID0gdXBkYXRlZEN1c3RvbWVyQ291cG9uKVxuICAgICAgICAgIDogKGN1c3RvbWVyQ291cG9uc1tpbmRleF0gPSBjdXN0b21lckNvdXBvbilcbiAgICAgICk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uczogY3VzdG9tZXJDb3Vwb25zIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9ucy5VTlNVQlNDUklCRV9DVVNUT01FUl9DT1VQT05fU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdXBkYXRlZENvdXBvbkNvZGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGN1c3RvbWVyQ291cG9ucyA9IG5ldyBBcnJheTxDdXN0b21lckNvdXBvbj4oc3RhdGUuY291cG9ucy5sZW5ndGgpO1xuICAgICAgc3RhdGUuY291cG9ucy5mb3JFYWNoKChjdXN0b21lckNvdXBvbjogQ3VzdG9tZXJDb3Vwb24sIGluZGV4KSA9PlxuICAgICAgICBjdXN0b21lckNvdXBvbi5jb3Vwb25JZCA9PT0gdXBkYXRlZENvdXBvbkNvZGVcbiAgICAgICAgICA/IChjdXN0b21lckNvdXBvbnNbaW5kZXhdID0ge1xuICAgICAgICAgICAgICAuLi5jdXN0b21lckNvdXBvbixcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uT246IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IChjdXN0b21lckNvdXBvbnNbaW5kZXhdID0gY3VzdG9tZXJDb3Vwb24pXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdXBvbnM6IGN1c3RvbWVyQ291cG9ucyB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=