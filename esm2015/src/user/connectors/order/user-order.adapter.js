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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLE1BQU0sT0FBZ0IsZ0JBQWdCO0NBNkZyQzs7Ozs7Ozs7OztJQXRGQyxtRUFBb0U7Ozs7Ozs7Ozs7O0lBVXBFLDRGQUtnQzs7Ozs7Ozs7O0lBUWhDLHNHQUltQzs7Ozs7Ozs7SUFPbkMsMkZBRzZCOzs7Ozs7OztJQU83Qiw4RkFHNkI7Ozs7Ozs7Ozs7SUFTN0Isc0dBS2lDOzs7Ozs7Ozs7SUFRakMseUZBSWtCOzs7Ozs7Ozs7SUFRbEIscUhBSWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJPcmRlckFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIFRoZSBgb3JkZXJDb2RlYCBmb3IgZ2l2ZW4gb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IGxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgaGlzdG9yeSBmb3IgYW4gdXNlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydCBTb3J0aW5nIG1ldGhvZFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICogQHBhcmFtIHVzZXJJZCB1c2VyIGlkIHJlbGF0ZWQgdG8gb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IGdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmcsXG4gICAgdXNlcklkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdElucHV0IFJldHVybiByZXF1ZXN0IGVudHJ5IGlucHV0IGxpc3RcbiAgICovXG4gIGFic3RyYWN0IGNyZWF0ZVJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciByZXR1cm4gcmVxdWVzdCBkZXRhaWxzXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAqL1xuICBhYnN0cmFjdCBsb2FkUmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgcmV0dXJuIHJlcXVlc3QgbGlzdCBmb3IgYW4gdXNlci5cbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcGFnZVNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlXG4gICAqIEBwYXJhbSBzb3J0XG4gICAqL1xuICBhYnN0cmFjdCBsb2FkUmV0dXJuUmVxdWVzdExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY2FuY2VsIG9yZGVyXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIG9yZGVyQ29kZVxuICAgKiBAcGFyYW0gY2FuY2VsUmVxdWVzdElucHV0IENhbmNlbCByZXF1ZXN0IGVudHJ5IGlucHV0IGxpc3RcbiAgICovXG4gIGFic3RyYWN0IGNhbmNlbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmRlckNvZGU6IHN0cmluZyxcbiAgICBjYW5jZWxSZXF1ZXN0SW5wdXQ6IENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPHt9PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY2FuY2VsIG9uZSByZXR1cm4gcmVxdWVzdFxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0Q29kZVxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICAgKi9cbiAgYWJzdHJhY3QgY2FuY2VsUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb25cbiAgKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=