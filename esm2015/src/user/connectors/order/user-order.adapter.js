/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class UserOrderAdapter {
}
if (false) {
    /**
     * Abstract method used to load order data.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} orderCode The `orderCode` for given order
     * @return {?}
     */
    UserOrderAdapter.prototype.load = function (userId, orderCode) { };
    /**
     * Abstract method used to load order history for an user.
     *
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort Sorting method
     * @return {?}
     */
    UserOrderAdapter.prototype.loadHistory = function (userId, pageSize, currentPage, sort) { };
    /**
     * Abstract method used to get consignment tracking details
     * @abstract
     * @param {?} orderCode an order code
     * @param {?} consignmentCode a consignment code
     * @return {?}
     */
    UserOrderAdapter.prototype.getConsignmentTracking = function (orderCode, consignmentCode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsZ0JBQWdCO0NBaUNyQzs7Ozs7Ozs7OztJQTFCQyxtRUFBb0U7Ozs7Ozs7Ozs7O0lBVXBFLDRGQUtnQzs7Ozs7Ozs7SUFPaEMsOEZBR21DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlck9yZGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgVGhlIGBvcmRlckNvZGVgIGZvciBnaXZlbiBvcmRlclxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciBoaXN0b3J5IGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcGFnZVNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlXG4gICAqIEBwYXJhbSBzb3J0IFNvcnRpbmcgbWV0aG9kXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgc29ydDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjb25zaWdubWVudENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xufVxuIl19