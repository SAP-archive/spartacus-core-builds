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
     * @return {?}
     */
    CartAdapter.prototype.loadAll = function (userId) { };
    /**
     * Abstract method used to load cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartAdapter.prototype.load = function (userId, cartId) { };
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
    /**
     * Abstract method used to delete cart
     *
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartAdapter.prototype.delete = function (userId, cartId) { };
    /**
     * Abstract method to assign an email to the cart. This step is required to make a guest checkout
     * @abstract
     * @param {?} userId
     * @param {?} cartId
     * @param {?} email
     * @return {?}
     */
    CartAdapter.prototype.addEmail = function (userId, cartId, email) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7SUFBQTtJQWdEQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDOzs7Ozs7Ozs7Ozs7O0lBMUNDLHNEQUFxRDs7Ozs7Ozs7O0lBUXJELDJEQUFnRTs7Ozs7Ozs7OztJQVNoRSxpRkFJb0I7Ozs7Ozs7OztJQVFwQiw2REFBZ0U7Ozs7Ozs7OztJQVFoRSxzRUFJa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGFsbCBjYXJ0c1xuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBjYXJ0LiBJZiB0b01lcmdlQ2FydEd1aWQgaXMgc3BlY2lmaWVkLCBjYXJ0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3Rpbmcgb25lXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9sZENhcnRJZFxuICAgKiBAcGFyYW0gdG9NZXJnZUNhcnRHdWlkXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBkZWxldGUgY2FydFxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICovXG4gIGFic3RyYWN0IGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHRvIGFzc2lnbiBhbiBlbWFpbCB0byB0aGUgY2FydC4gVGhpcyBzdGVwIGlzIHJlcXVpcmVkIHRvIG1ha2UgYSBndWVzdCBjaGVja291dFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBjYXJ0SWRcbiAgICogQHBhcmFtIGVtYWlsXG4gICAqL1xuICBhYnN0cmFjdCBhZGRFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+O1xufVxuIl19