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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7SUFBQTtJQTRCQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDOzs7Ozs7Ozs7Ozs7O0lBdEJDLHNEQUFxRDs7Ozs7Ozs7O0lBUXJELDJEQUFnRTs7Ozs7Ozs7OztJQVNoRSxpRkFJb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJ0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGFsbCBjYXJ0c1xuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBjYXJ0LiBJZiB0b01lcmdlQ2FydEd1aWQgaXMgc3BlY2lmaWVkLCBjYXJ0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3Rpbmcgb25lXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9sZENhcnRJZFxuICAgKiBAcGFyYW0gdG9NZXJnZUNhcnRHdWlkXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+O1xufVxuIl19