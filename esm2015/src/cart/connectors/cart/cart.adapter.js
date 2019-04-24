/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class CartAdapter {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTSxPQUFnQixXQUFXO0NBa0NoQzs7Ozs7Ozs7OztJQTNCQywrREFBd0U7Ozs7Ozs7Ozs7SUFTeEUsb0VBSW9COzs7Ozs7Ozs7O0lBU3BCLGlGQUlvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcnRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgYWxsIGNhcnRzXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGRldGFpbHMgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgaWYgd2Ugd2FudCB0byBsb2FkIGRldGFpbHNcbiAgICovXG4gIGFic3RyYWN0IGxvYWRBbGwodXNlcklkOiBzdHJpbmcsIGRldGFpbHM/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqIEBwYXJhbSBkZXRhaWxzIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIGlmIHdlIHdhbnQgdG8gbG9hZCBkZXRhaWxzXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRldGFpbHM/OiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBjYXJ0LiBJZiB0b01lcmdlQ2FydEd1aWQgaXMgc3BlY2lmaWVkLCBjYXJ0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3Rpbmcgb25lXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9sZENhcnRJZFxuICAgKiBAcGFyYW0gdG9NZXJnZUNhcnRHdWlkXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+O1xufVxuIl19