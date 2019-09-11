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
UserOrderAdapter = /** @class */ (function () {
    function UserOrderAdapter() {
    }
    return UserOrderAdapter;
}());
/**
 * @abstract
 */
export { UserOrderAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUFpQ0EsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7Ozs7Ozs7Ozs7SUExQkMsbUVBQW9FOzs7Ozs7Ozs7OztJQVVwRSw0RkFLZ0M7Ozs7Ozs7O0lBT2hDLDhGQUdtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJIaXN0b3J5TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJPcmRlckFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIFRoZSBgb3JkZXJDb2RlYCBmb3IgZ2l2ZW4gb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IGxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgaGlzdG9yeSBmb3IgYW4gdXNlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydCBTb3J0aW5nIG1ldGhvZFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICovXG4gIGFic3RyYWN0IGdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbn1cbiJdfQ==