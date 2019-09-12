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
CheckoutAdapter = /** @class */ (function () {
    function CheckoutAdapter() {
    }
    return CheckoutAdapter;
}());
/**
 * @abstract
 */
export { CheckoutAdapter };
if (false) {
    /**
     * Abstract method used to place an order.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} cartId The `cartId` for cart used for placing order
     * @return {?}
     */
    CheckoutAdapter.prototype.placeOrder = function (userId, cartId) { };
    /**
     * Abstract method used to load checkout details
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutAdapter.prototype.loadCheckoutDetails = function (userId, cartId) { };
    /**
     * Abstract method used to clear checkout delivery address
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutAdapter.prototype.clearCheckoutDeliveryAddress = function (userId, cartId) { };
    /**
     * Abstract method used to clear checkout delivery mode
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutAdapter.prototype.clearCheckoutDeliveryMode = function (userId, cartId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NoZWNrb3V0LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUF5Q0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7Ozs7Ozs7Ozs7SUFsQ0MscUVBQXVFOzs7Ozs7Ozs7SUFRdkUsOEVBRytCOzs7Ozs7Ozs7SUFRL0IsdUZBR21COzs7Ozs7Ozs7SUFRbkIsb0ZBR21CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHBsYWNlIGFuIG9yZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gY2FydElkIFRoZSBgY2FydElkYCBmb3IgY2FydCB1c2VkIGZvciBwbGFjaW5nIG9yZGVyXG4gICAqL1xuICBhYnN0cmFjdCBwbGFjZU9yZGVyKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNoZWNrb3V0IGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQ2hlY2tvdXREZXRhaWxzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY2xlYXIgY2hlY2tvdXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjbGVhciBjaGVja291dCBkZWxpdmVyeSBtb2RlXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKi9cbiAgYWJzdHJhY3QgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=