/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLE1BQU0sT0FBZ0IsZ0JBQWdCO0NBMkZyQzs7Ozs7Ozs7OztJQXBGQyxtRUFBb0U7Ozs7Ozs7Ozs7O0lBVXBFLDRGQUtnQzs7Ozs7Ozs7SUFPaEMsOEZBR21DOzs7Ozs7OztJQU9uQywyRkFHNkI7Ozs7Ozs7O0lBTzdCLDhGQUc2Qjs7Ozs7Ozs7OztJQVM3QixzR0FLaUM7Ozs7Ozs7OztJQVFqQyx5RkFJa0I7Ozs7Ozs7OztJQVFsQixxSEFJa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2lnbm1lbnQtdHJhY2tpbmcubW9kZWwnO1xuaW1wb3J0IHtcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlck9yZGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgVGhlIGBvcmRlckNvZGVgIGZvciBnaXZlbiBvcmRlclxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciBoaXN0b3J5IGZvciBhbiB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcGFnZVNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlXG4gICAqIEBwYXJhbSBzb3J0IFNvcnRpbmcgbWV0aG9kXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgc29ydDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGdldCBjb25zaWdubWVudCB0cmFja2luZyBkZXRhaWxzXG4gICAqIEBwYXJhbSBvcmRlckNvZGUgYW4gb3JkZXIgY29kZVxuICAgKiBAcGFyYW0gY29uc2lnbm1lbnRDb2RlIGEgY29uc2lnbm1lbnQgY29kZVxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29uc2lnbm1lbnRUcmFja2luZyhcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjb25zaWdubWVudENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjcmVhdGUgcmV0dXJuIHJlcXVlc3RcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RJbnB1dCBSZXR1cm4gcmVxdWVzdCBlbnRyeSBpbnB1dCBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBjcmVhdGVSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RJbnB1dDogUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgZGV0YWlsc1xuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZFJldHVyblJlcXVlc3REZXRhaWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIHJldHVybiByZXF1ZXN0IGxpc3QgZm9yIGFuIHVzZXIuXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZFJldHVyblJlcXVlc3RMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNhbmNlbCBvcmRlclxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBvcmRlckNvZGVcbiAgICogQHBhcmFtIGNhbmNlbFJlcXVlc3RJbnB1dCBDYW5jZWwgcmVxdWVzdCBlbnRyeSBpbnB1dCBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBjYW5jZWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNhbmNlbCBvbmUgcmV0dXJuIHJlcXVlc3RcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdENvZGVcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgICovXG4gIGFic3RyYWN0IGNhbmNlbFJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uOiBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICk6IE9ic2VydmFibGU8e30+O1xufVxuIl19