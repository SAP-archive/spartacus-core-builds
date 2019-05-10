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
CartAdapter = /** @class */ (function () {
    function CartAdapter() {
    }
    return CartAdapter;
}());
/**
 * @abstract
 */
export { CartAdapter };
if (false) {
    /**
     * Abstract method used to load all carts
     *
     * @abstract
     * @param {?} userId
     * @param {?=} details Boolean flag indicating if we want to load details
     * @return {?}
     */
    CartAdapter.prototype.loadAll = function (userId, details) { };
    /**
     * Abstract method used to load cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details Boolean flag indicating if we want to load details
     * @return {?}
     */
    CartAdapter.prototype.load = function (userId, cartId, details) { };
    /**
     * Abstract method used to load checkout details
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartAdapter.prototype.loadCheckoutDetails = function (userId, cartId) { };
    /**
     * Abstract method used to create cart. If toMergeCartGuid is specified, cart will be merged with existing one
     *
     * @abstract
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    CartAdapter.prototype.create = function (userId, oldCartId, toMergeCartGuid) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFBQTtJQTZDQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7Ozs7Ozs7OztJQXRDQywrREFBd0U7Ozs7Ozs7Ozs7SUFTeEUsb0VBSW9COzs7Ozs7Ozs7SUFRcEIsMEVBRytCOzs7Ozs7Ozs7O0lBUy9CLGlGQUlvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGFsbCBjYXJ0c1xuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBkZXRhaWxzIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIGlmIHdlIHdhbnQgdG8gbG9hZCBkZXRhaWxzXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQWxsKHVzZXJJZDogc3RyaW5nLCBkZXRhaWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Q2FydFtdPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZGV0YWlscyBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiB3ZSB3YW50IHRvIGxvYWQgZGV0YWlsc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZXRhaWxzPzogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNoZWNrb3V0IGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQ2hlY2tvdXREZXRhaWxzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIGNhcnQuIElmIHRvTWVyZ2VDYXJ0R3VpZCBpcyBzcGVjaWZpZWQsIGNhcnQgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBvbmVcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gb2xkQ2FydElkXG4gICAqIEBwYXJhbSB0b01lcmdlQ2FydEd1aWRcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD47XG59XG4iXX0=