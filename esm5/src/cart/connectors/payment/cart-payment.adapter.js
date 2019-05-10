/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CartPaymentAdapter = /** @class */ (function () {
    function CartPaymentAdapter() {
    }
    return CartPaymentAdapter;
}());
/**
 * @abstract
 */
export { CartPaymentAdapter };
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
    CartPaymentAdapter.prototype.create = function (userId, cartId, paymentDetails) { };
    /**
     * Abstract method used to set payment details on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    CartPaymentAdapter.prototype.set = function (userId, cartId, paymentDetailsId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL3BheW1lbnQvY2FydC1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUEwQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7Ozs7Ozs7Ozs7O0lBbEJDLG9GQUk4Qjs7Ozs7Ozs7OztJQVM5QixtRkFJbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FydFBheW1lbnRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBwYXltZW50IGRldGFpbHMgb24gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzXG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBzZXQgcGF5bWVudCBkZXRhaWxzIG9uIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlsc0lkXG4gICAqL1xuICBhYnN0cmFjdCBzZXQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHNJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==