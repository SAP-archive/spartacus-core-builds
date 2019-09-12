/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
CheckoutDeliveryAdapter = /** @class */ (function () {
    function CheckoutDeliveryAdapter() {
    }
    return CheckoutDeliveryAdapter;
}());
/**
 * @abstract
 */
export { CheckoutDeliveryAdapter };
if (false) {
    /**
     * Abstract method used to create address in cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.createAddress = function (userId, cartId, address) { };
    /**
     * Abstract method used to set adress for delivery
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.setAddress = function (userId, cartId, addressId) { };
    /**
     * Abstract method used to set delivery mode on cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.setMode = function (userId, cartId, deliveryModeId) { };
    /**
     * Abstract method used to get current delivery mode from cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.getMode = function (userId, cartId) { };
    /**
     * Abstract method used to get supported delivery modes for cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryAdapter.prototype.getSupportedModes = function (userId, cartId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUEwREEsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQzs7Ozs7Ozs7Ozs7Ozs7O0lBbERDLHlGQUl1Qjs7Ozs7Ozs7OztJQVN2Qix3RkFJbUI7Ozs7Ozs7Ozs7SUFTbkIsMEZBSW1COzs7Ozs7Ozs7SUFRbkIsMEVBQTJFOzs7Ozs7Ozs7SUFRM0Usb0ZBRzhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIGFkZHJlc3MgaW4gY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGFkZHJlc3NcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzczogQWRkcmVzc1xuICApOiBPYnNlcnZhYmxlPEFkZHJlc3M+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBzZXQgYWRyZXNzIGZvciBkZWxpdmVyeVxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGFkZHJlc3NJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIHNldCBkZWxpdmVyeSBtb2RlIG9uIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBkZWxpdmVyeU1vZGVJZFxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZWxpdmVyeU1vZGVJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IGN1cnJlbnQgZGVsaXZlcnkgbW9kZSBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBnZXRNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2RlcyBmb3IgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGdldFN1cHBvcnRlZE1vZGVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+O1xufVxuIl19