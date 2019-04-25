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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTSxPQUFnQixXQUFXO0NBa0NoQzs7Ozs7Ozs7OztJQTNCQywrREFBMEU7Ozs7Ozs7Ozs7SUFTMUUsb0VBSXNCOzs7Ozs7Ozs7O0lBU3RCLGlGQUlzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVJQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FydEFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBhbGwgY2FydHNcbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gZGV0YWlscyBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiB3ZSB3YW50IHRvIGxvYWQgZGV0YWlsc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEFsbCh1c2VySWQ6IHN0cmluZywgZGV0YWlscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFVJQ2FydFtdPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIGNhcnRJZFxuICAgKiBAcGFyYW0gZGV0YWlscyBCb29sZWFuIGZsYWcgaW5kaWNhdGluZyBpZiB3ZSB3YW50IHRvIGxvYWQgZGV0YWlsc1xuICAgKi9cbiAgYWJzdHJhY3QgbG9hZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZXRhaWxzPzogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPFVJQ2FydD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBjYXJ0LiBJZiB0b01lcmdlQ2FydEd1aWQgaXMgc3BlY2lmaWVkLCBjYXJ0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3Rpbmcgb25lXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9sZENhcnRJZFxuICAgKiBAcGFyYW0gdG9NZXJnZUNhcnRHdWlkXG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFVJQ2FydD47XG59XG4iXX0=