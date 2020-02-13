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
     * @param {?=} userId user id related to order
     * @return {?}
     */
    UserOrderAdapter.prototype.getConsignmentTracking = function (orderCode, consignmentCode, userId) { };
    /**
     * Abstract method used to create return request
     * @abstract
     * @param {?} userId The `userId` for given user
     * @param {?} returnRequestInput Return request entry input list
     * @return {?}
     */
    UserOrderAdapter.prototype.createReturnRequest = function (userId, returnRequestInput) { };
    /**
     * Abstract method used to load order return request details
     * @abstract
     * @param {?} userId
     * @param {?} returnRequestCode
     * @return {?}
     */
    UserOrderAdapter.prototype.loadReturnRequestDetail = function (userId, returnRequestCode) { };
    /**
     * Abstract method used to load order return request list for an user.
     * @abstract
     * @param {?} userId
     * @param {?} pageSize
     * @param {?} currentPage
     * @param {?} sort
     * @return {?}
     */
    UserOrderAdapter.prototype.loadReturnRequestList = function (userId, pageSize, currentPage, sort) { };
    /**
     * Abstract method used to cancel order
     * @abstract
     * @param {?} userId
     * @param {?} orderCode
     * @param {?} cancelRequestInput Cancel request entry input list
     * @return {?}
     */
    UserOrderAdapter.prototype.cancel = function (userId, orderCode, cancelRequestInput) { };
    /**
     * Abstract method used to cancel one return request
     * @abstract
     * @param {?} userId
     * @param {?} returnRequestCode
     * @param {?} returnRequestModification
     * @return {?}
     */
    UserOrderAdapter.prototype.cancelReturnRequest = function (userId, returnRequestCode, returnRequestModification) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBOzs7O0lBQUE7SUE2RkEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQTdGRCxJQTZGQzs7Ozs7Ozs7Ozs7Ozs7SUF0RkMsbUVBQW9FOzs7Ozs7Ozs7OztJQVVwRSw0RkFLZ0M7Ozs7Ozs7OztJQVFoQyxzR0FJbUM7Ozs7Ozs7O0lBT25DLDJGQUc2Qjs7Ozs7Ozs7SUFPN0IsOEZBRzZCOzs7Ozs7Ozs7O0lBUzdCLHNHQUtpQzs7Ozs7Ozs7O0lBUWpDLHlGQUlrQjs7Ozs7Ozs7O0lBUWxCLHFIQUlrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQge1xuICBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyT3JkZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBUaGUgYG9yZGVyQ29kZWAgZm9yIGdpdmVuIG9yZGVyXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIGhpc3RvcnkgZm9yIGFuIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBwYWdlU2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2VcbiAgICogQHBhcmFtIHNvcnQgU29ydGluZyBtZXRob2RcbiAgICovXG4gIGFic3RyYWN0IGxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAqIEBwYXJhbSB1c2VySWQgdXNlciBpZCByZWxhdGVkIHRvIG9yZGVyXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLFxuICAgIHVzZXJJZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgcmV0dXJuIHJlcXVlc3RcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RJbnB1dCBSZXR1cm4gcmVxdWVzdCBlbnRyeSBpbnB1dCBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGVSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsc1xuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZFJldHVyblJlcXVlc3REZXRhaWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3QgZm9yIGFuIHVzZXIuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZFJldHVyblJlcXVlc3RMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNhbmNlbCBvcmRlclxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBvcmRlckNvZGVcbiAgICogQHBhcmFtIGNhbmNlbFJlcXVlc3RJbnB1dCBDYW5jZWwgcmVxdWVzdCBlbnRyeSBpbnB1dCBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBjYW5jZWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNhbmNlbCBvbmUgcmV0dXJuIHJlcXVlc3RcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdENvZGVcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgICovXG4gIGFic3RyYWN0IGNhbmNlbFJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICk6IE9ic2VydmFibGU8e30+O1xufVxuIl19