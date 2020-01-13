/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CustomerCouponAdapter {
}
if (false) {
    /**
     * @abstract
     * @param {?} userId
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort
     * @return {?}
     */
    CustomerCouponAdapter.prototype.getCustomerCoupons = function (userId, pageSize, currentPage, sort) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    CustomerCouponAdapter.prototype.turnOnNotification = function (userId, couponCode) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    CustomerCouponAdapter.prototype.turnOffNotification = function (userId, couponCode) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} couponCode
     * @return {?}
     */
    CustomerCouponAdapter.prototype.claimCustomerCoupon = function (userId, couponCode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItY291cG9uLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTSxPQUFnQixxQkFBcUI7Q0FzQjFDOzs7Ozs7Ozs7O0lBckJDLHdHQUswQzs7Ozs7OztJQUUxQyx1RkFHMEM7Ozs7Ozs7SUFFMUMsd0ZBR2tCOzs7Ozs7O0lBRWxCLHdGQUd1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0LFxuICBDdXN0b21lckNvdXBvbk5vdGlmaWNhdGlvbixcbiAgQ3VzdG9tZXJDb3Vwb24yQ3VzdG9tZXIsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL2N1c3RvbWVyLWNvdXBvbi5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXN0b21lckNvdXBvbkFkYXB0ZXIge1xuICBhYnN0cmFjdCBnZXRDdXN0b21lckNvdXBvbnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0PjtcblxuICBhYnN0cmFjdCB0dXJuT25Ob3RpZmljYXRpb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24+O1xuXG4gIGFic3RyYWN0IHR1cm5PZmZOb3RpZmljYXRpb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IGNsYWltQ3VzdG9tZXJDb3Vwb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb24yQ3VzdG9tZXI+O1xufVxuIl19