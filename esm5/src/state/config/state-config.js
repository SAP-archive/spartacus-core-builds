/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var StorageSyncType = {
    NO_STORAGE: 'NO_STORAGE',
    LOCAL_STORAGE: 'LOCAL_STORAGE',
    SESSION_STORAGE: 'SESSION_STORAGE',
};
export { StorageSyncType };
/** @enum {string} */
var StateTransferType = {
    TRANSFER_STATE: 'SSR',
};
export { StateTransferType };
/**
 * @abstract
 */
var /**
 * @abstract
 */
StateConfig = /** @class */ (function () {
    function StateConfig() {
    }
    return StateConfig;
}());
/**
 * @abstract
 */
export { StateConfig };
if (false) {
    /** @type {?} */
    StateConfig.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsWUFBYSxZQUFZO0lBQ3pCLGVBQWdCLGVBQWU7SUFDL0IsaUJBQWtCLGlCQUFpQjs7Ozs7SUFJbkMsZ0JBQWlCLEtBQUs7Ozs7OztBQUd4Qjs7OztJQUFBO0lBNkJBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7Ozs7Ozs7SUE1QkMsNEJBMkJFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU3RvcmFnZVN5bmNUeXBlIHtcbiAgTk9fU1RPUkFHRSA9ICdOT19TVE9SQUdFJyxcbiAgTE9DQUxfU1RPUkFHRSA9ICdMT0NBTF9TVE9SQUdFJyxcbiAgU0VTU0lPTl9TVE9SQUdFID0gJ1NFU1NJT05fU1RPUkFHRScsXG59XG5cbmV4cG9ydCBlbnVtIFN0YXRlVHJhbnNmZXJUeXBlIHtcbiAgVFJBTlNGRVJfU1RBVEUgPSAnU1NSJyxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRlQ29uZmlnIHtcbiAgc3RhdGU/OiB7XG4gICAgc3RvcmFnZVN5bmM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIEEga2V5IG5hbWUgZm9yIHRoZSBkYXRhIHN0b3JlZCBpbiBgbG9jYWxTdG9yYWdlYC5cbiAgICAgICAqIERlZmF1bHQgaXMgYERFRkFVTFRfTE9DQUxfU1RPUkFHRV9LRVlgLlxuICAgICAgICovXG4gICAgICBsb2NhbFN0b3JhZ2VLZXlOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqXG4gICAgICAgKiBBIGtleSBuYW1lIGZvciB0aGUgZGF0YSBzdG9yZWQgaW4gYHNlc3Npb25TdG9yYWdlYC5cbiAgICAgICAqIERlZmF1bHQgaXMgYERFRkFVTFRfU0VTU0lPTl9TVE9SQUdFX0tFWWAuXG4gICAgICAgKi9cbiAgICAgIHNlc3Npb25TdG9yYWdlS2V5TmFtZT86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogQSBzZXQgb2Ygc3RhdGUga2V5cyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGJyb3dzZXIncyBzdG9yYWdlLlxuICAgICAgICovXG4gICAgICBrZXlzPzoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGU7XG4gICAgICB9O1xuICAgIH07XG4gICAgc3NyVHJhbnNmZXI/OiB7XG4gICAgICBrZXlzPzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZXQgb2Ygc3RhdGUga2V5cyB0aGF0IHNob3VsZCBiZSB0cmFuc2ZlcnJlZCBmcm9tIHNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFN0YXRlVHJhbnNmZXJUeXBlO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuIl19