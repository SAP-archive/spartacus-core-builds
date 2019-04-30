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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFBQTtJQTZDQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7Ozs7Ozs7OztJQXRDQywrREFBMEU7Ozs7Ozs7Ozs7SUFTMUUsb0VBSXNCOzs7Ozs7Ozs7SUFRdEIsMEVBRytCOzs7Ozs7Ozs7O0lBUy9CLGlGQUlzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVJQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcnRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgYWxsIGNhcnRzXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGRldGFpbHMgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgaWYgd2Ugd2FudCB0byBsb2FkIGRldGFpbHNcbiAgICovXG4gIGFic3RyYWN0IGxvYWRBbGwodXNlcklkOiBzdHJpbmcsIGRldGFpbHM/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxVSUNhcnRbXT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGRldGFpbHMgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgaWYgd2Ugd2FudCB0byBsb2FkIGRldGFpbHNcbiAgICovXG4gIGFic3RyYWN0IGxvYWQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxVSUNhcnQ+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNoZWNrb3V0IGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQ2hlY2tvdXREZXRhaWxzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIGNhcnQuIElmIHRvTWVyZ2VDYXJ0R3VpZCBpcyBzcGVjaWZpZWQsIGNhcnQgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBvbmVcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gb2xkQ2FydElkXG4gICAqIEBwYXJhbSB0b01lcmdlQ2FydEd1aWRcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8VUlDYXJ0Pjtcbn1cbiJdfQ==