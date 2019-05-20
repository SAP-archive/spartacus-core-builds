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
    /**
     * Abstract method used to get available cart types
     * @abstract
     * @return {?}
     */
    CartPaymentAdapter.prototype.loadCardTypes = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL3BheW1lbnQvY2FydC1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBQUE7SUErQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7Ozs7Ozs7Ozs7Ozs7O0lBdkJDLG9GQUk4Qjs7Ozs7Ozs7OztJQVM5QixtRkFJbUI7Ozs7OztJQUtuQiw2REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkVHlwZSwgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcnRQYXltZW50QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgcGF5bWVudCBkZXRhaWxzIG9uIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlsc1xuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlsc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gc2V0IHBheW1lbnQgZGV0YWlscyBvbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHNJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBhdmFpbGFibGUgY2FydCB0eXBlc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xufVxuIl19