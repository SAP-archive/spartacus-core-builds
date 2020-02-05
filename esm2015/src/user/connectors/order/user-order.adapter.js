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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLE1BQU0sT0FBZ0IsZ0JBQWdCO0NBNEZyQzs7Ozs7Ozs7OztJQXJGQyxtRUFBb0U7Ozs7Ozs7Ozs7O0lBVXBFLDRGQUtnQzs7Ozs7Ozs7O0lBT2hDLHNHQUltQzs7Ozs7Ozs7SUFPbkMsMkZBRzZCOzs7Ozs7OztJQU83Qiw4RkFHNkI7Ozs7Ozs7Ozs7SUFTN0Isc0dBS2lDOzs7Ozs7Ozs7SUFRakMseUZBSWtCOzs7Ozs7Ozs7SUFRbEIscUhBSWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVzZXJPcmRlckFkYXB0ZXIge1xuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcklkIFRoZSBgdXNlcklkYCBmb3IgZ2l2ZW4gdXNlclxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIFRoZSBgb3JkZXJDb2RlYCBmb3IgZ2l2ZW4gb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IGxvYWQodXNlcklkOiBzdHJpbmcsIG9yZGVyQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IG1ldGhvZCB1c2VkIHRvIGxvYWQgb3JkZXIgaGlzdG9yeSBmb3IgYW4gdXNlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBUaGUgYHVzZXJJZGAgZm9yIGdpdmVuIHVzZXJcbiAgICogQHBhcmFtIHBhZ2VTaXplXG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydCBTb3J0aW5nIG1ldGhvZFxuICAgKi9cbiAgYWJzdHJhY3QgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIHNvcnQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICovXG4gIGFic3RyYWN0IGdldENvbnNpZ25tZW50VHJhY2tpbmcoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JkZXJDb2RlOiBzdHJpbmcsXG4gICAgY29uc2lnbm1lbnRDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIHJldHVybiByZXF1ZXN0XG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIGB1c2VySWRgIGZvciBnaXZlbiB1c2VyXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0SW5wdXQgUmV0dXJuIHJlcXVlc3QgZW50cnkgaW5wdXQgbGlzdFxuICAgKi9cbiAgYWJzdHJhY3QgY3JlYXRlUmV0dXJuUmVxdWVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0SW5wdXQ6IFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdFxuICApOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBsb2FkIG9yZGVyIHJldHVybiByZXF1ZXN0IGRldGFpbHNcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gcmV0dXJuUmVxdWVzdENvZGVcbiAgICovXG4gIGFic3RyYWN0IGxvYWRSZXR1cm5SZXF1ZXN0RGV0YWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PjtcblxuICAvKipcbiAgICogQWJzdHJhY3QgbWV0aG9kIHVzZWQgdG8gbG9hZCBvcmRlciByZXR1cm4gcmVxdWVzdCBsaXN0IGZvciBhbiB1c2VyLlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYWdlU2l6ZVxuICAgKiBAcGFyYW0gY3VycmVudFBhZ2VcbiAgICogQHBhcmFtIHNvcnRcbiAgICovXG4gIGFic3RyYWN0IGxvYWRSZXR1cm5SZXF1ZXN0TGlzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgc29ydDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdExpc3Q+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjYW5jZWwgb3JkZXJcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKiBAcGFyYW0gb3JkZXJDb2RlXG4gICAqIEBwYXJhbSBjYW5jZWxSZXF1ZXN0SW5wdXQgQ2FuY2VsIHJlcXVlc3QgZW50cnkgaW5wdXQgbGlzdFxuICAgKi9cbiAgYWJzdHJhY3QgY2FuY2VsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8e30+O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBjYW5jZWwgb25lIHJldHVybiByZXF1ZXN0XG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHJldHVyblJlcXVlc3RDb2RlXG4gICAqIEBwYXJhbSByZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICAqL1xuICBhYnN0cmFjdCBjYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==