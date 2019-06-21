/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CheckoutPaymentAdapter {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE1BQU0sT0FBZ0Isc0JBQXNCO0NBK0IzQzs7Ozs7Ozs7Ozs7SUF2QkMsd0ZBSThCOzs7Ozs7Ozs7O0lBUzlCLHVGQUltQjs7Ozs7O0lBS25CLGlFQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgcGF5bWVudCBkZXRhaWxzIG9uIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlsc1xuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlsc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gc2V0IHBheW1lbnQgZGV0YWlscyBvbiBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHNJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBhdmFpbGFibGUgY2FydCB0eXBlc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+O1xufVxuIl19