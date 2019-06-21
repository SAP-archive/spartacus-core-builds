/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CheckoutPaymentAdapter = /** @class */ (function () {
    function CheckoutPaymentAdapter() {
    }
    return CheckoutPaymentAdapter;
}());
/**
 * @abstract
 */
export { CheckoutPaymentAdapter };
if (false) {
    /**
     * Abstract method used to create payment details on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    CheckoutPaymentAdapter.prototype.create = function (userId, cartId, paymentDetails) { };
    /**
     * Abstract method used to set payment details on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    CheckoutPaymentAdapter.prototype.set = function (userId, cartId, paymentDetailsId) { };
    /**
     * Abstract method used to get available cart types
     * @abstract
     * @return {?}
     */
    CheckoutPaymentAdapter.prototype.loadCardTypes = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUErQkEsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7Ozs7Ozs7Ozs7Ozs7O0lBdkJDLHdGQUk4Qjs7Ozs7Ozs7OztJQVM5Qix1RkFJbUI7Ozs7OztJQUtuQixpRUFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkVHlwZSwgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoZWNrb3V0UGF5bWVudEFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIHBheW1lbnQgZGV0YWlscyBvbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHNcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHNldCBwYXltZW50IGRldGFpbHMgb24gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzSWRcbiAgICovXG4gIGFic3RyYWN0IHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgYXZhaWxhYmxlIGNhcnQgdHlwZXNcbiAgICovXG4gIGFic3RyYWN0IGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPjtcbn1cbiJdfQ==