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
     * @param {?} userId
     * @param {?} orderCode an order code
     * @param {?} consignmentCode a consignment code
     * @return {?}
     */
    UserOrderAdapter.prototype.getConsignmentTracking = function (userId, orderCode, consignmentCode) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBOzs7O0lBQUE7SUE0RkEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQTVGRCxJQTRGQzs7Ozs7Ozs7Ozs7Ozs7SUFyRkMsbUVBQW9FOzs7Ozs7Ozs7OztJQVVwRSw0RkFLZ0M7Ozs7Ozs7OztJQU9oQyxzR0FJbUM7Ozs7Ozs7O0lBT25DLDJGQUc2Qjs7Ozs7Ozs7SUFPN0IsOEZBRzZCOzs7Ozs7Ozs7O0lBUzdCLHNHQUtpQzs7Ozs7Ozs7O0lBUWpDLHlGQUlrQjs7Ozs7Ozs7O0lBUWxCLHFIQUlrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQge1xuICBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyT3JkZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBUaGUgYG9yZGVyQ29kZWAgZm9yIGdpdmVuIG9yZGVyXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIGhpc3RvcnkgZm9yIGFuIHVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBwYWdlU2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2VcbiAgICogQHBhcmFtIHNvcnQgU29ydGluZyBtZXRob2RcbiAgICovXG4gIGFic3RyYWN0IGxvYWRIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gZ2V0IGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbHNcbiAgICogQHBhcmFtIG9yZGVyQ29kZSBhbiBvcmRlciBjb2RlXG4gICAqIEBwYXJhbSBjb25zaWdubWVudENvZGUgYSBjb25zaWdubWVudCBjb2RlXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdElucHV0IFJldHVybiByZXF1ZXN0IGVudHJ5IGlucHV0IGxpc3RcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZVJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxzXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkUmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdCBmb3IgYW4gdXNlci5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFnZVNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlXG4gICAqIEBwYXJhbSBzb3J0XG4gICAqL1xuICBhYnN0cmFjdCBsb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY2FuY2VsIG9yZGVyXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9yZGVyQ29kZVxuICAgKiBAcGFyYW0gY2FuY2VsUmVxdWVzdElucHV0IENhbmNlbCByZXF1ZXN0IGVudHJ5IGlucHV0IGxpc3RcbiAgICovXG4gIGFic3RyYWN0IGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY2FuY2VsIG9uZSByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgKi9cbiAgYWJzdHJhY3QgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=