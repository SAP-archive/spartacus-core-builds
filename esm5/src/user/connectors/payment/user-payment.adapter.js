/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
UserPaymentAdapter = /** @class */ (function () {
    function UserPaymentAdapter() {
    }
    return UserPaymentAdapter;
}());
/**
 * @abstract
 */
export { UserPaymentAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7SUFZQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7Ozs7Ozs7Ozs7SUFYQyw2REFBK0Q7Ozs7Ozs7SUFFL0QsNkVBQXlFOzs7Ozs7O0lBRXpFLGlGQUE2RTs7Ozs7SUFFN0Usb0VBQXVEOzs7OztJQUV2RCxxRUFBd0Q7Ozs7OztJQUV4RCx5RUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVc2VyUGF5bWVudEFkYXB0ZXIge1xuICBhYnN0cmFjdCBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcblxuICBhYnN0cmFjdCBkZWxldGUodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG5cbiAgYWJzdHJhY3Qgc2V0RGVmYXVsdCh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcblxuICBhYnN0cmFjdCBsb2FkQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG5cbiAgYWJzdHJhY3QgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPjtcblxuICBhYnN0cmFjdCBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG59XG4iXX0=