/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class UserPaymentAdapter {
}
if (false) {
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    UserPaymentAdapter.prototype.loadAll = function (userId) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentAdapter.prototype.delete = function (userId, paymentMethodID) { };
    /**
     * @abstract
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    UserPaymentAdapter.prototype.setDefault = function (userId, paymentMethodID) { };
    /**
     * @abstract
     * @return {?}
     */
    UserPaymentAdapter.prototype.loadBillingCountries = function () { };
    /**
     * @abstract
     * @return {?}
     */
    UserPaymentAdapter.prototype.loadDeliveryCountries = function () { };
    /**
     * @abstract
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserPaymentAdapter.prototype.loadRegions = function (countryIsoCode) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0Isa0JBQWtCO0NBWXZDOzs7Ozs7O0lBWEMsNkRBQStEOzs7Ozs7O0lBRS9ELDZFQUF5RTs7Ozs7OztJQUV6RSxpRkFBNkU7Ozs7O0lBRTdFLG9FQUF1RDs7Ozs7SUFFdkQscUVBQXdEOzs7Ozs7SUFFeEQseUVBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvdW50cnksIFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXNlclBheW1lbnRBZGFwdGVyIHtcbiAgYWJzdHJhY3QgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG5cbiAgYWJzdHJhY3QgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuXG4gIGFic3RyYWN0IHNldERlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3QgbG9hZEJpbGxpbmdDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuXG4gIGFic3RyYWN0IGxvYWREZWxpdmVyeUNvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG5cbiAgYWJzdHJhY3QgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+O1xufVxuIl19