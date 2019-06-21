/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
/** @type {?} */
export var LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
/** @type {?} */
export var LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
var LoadDeliveryCountries = /** @class */ (function () {
    function LoadDeliveryCountries() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
    return LoadDeliveryCountries;
}());
export { LoadDeliveryCountries };
if (false) {
    /** @type {?} */
    LoadDeliveryCountries.prototype.type;
}
var LoadDeliveryCountriesFail = /** @class */ (function () {
    function LoadDeliveryCountriesFail(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
    return LoadDeliveryCountriesFail;
}());
export { LoadDeliveryCountriesFail };
if (false) {
    /** @type {?} */
    LoadDeliveryCountriesFail.prototype.type;
    /** @type {?} */
    LoadDeliveryCountriesFail.prototype.payload;
}
var LoadDeliveryCountriesSuccess = /** @class */ (function () {
    function LoadDeliveryCountriesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
    return LoadDeliveryCountriesSuccess;
}());
export { LoadDeliveryCountriesSuccess };
if (false) {
    /** @type {?} */
    LoadDeliveryCountriesSuccess.prototype.type;
    /** @type {?} */
    LoadDeliveryCountriesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMscUNBQXFDOztBQUN2QyxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLHdDQUF3QztBQUUxQztJQUVFO1FBRFMsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ3pCLENBQUM7SUFDbEIsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUF3Qzs7QUFJMUM7SUFFRSxtQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ1gsQ0FBQztJQUNyQyxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMseUNBQTZDOztJQUNqQyw0Q0FBbUI7O0FBR2pDO0lBRUUsc0NBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBQ1IsQ0FBQztJQUMzQyxtQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsNENBQWdEOztJQUNwQywrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0RFTElWRVJZX0NPVU5UUklFUyA9ICdbVXNlcl0gTG9hZCBEZWxpdmVyeSBDb3VudHJpZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfREVMSVZFUllfQ09VTlRSSUVTX0ZBSUwgPVxuICAnW1VzZXJdIExvYWQgRGVsaXZlcnkgQ291bnRyaWVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfREVMSVZFUllfQ09VTlRSSUVTX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgRGVsaXZlcnkgQ291bnRyaWVzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZERlbGl2ZXJ5Q291bnRyaWVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfREVMSVZFUllfQ09VTlRSSUVTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkRGVsaXZlcnlDb3VudHJpZXNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfREVMSVZFUllfQ09VTlRSSUVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkRGVsaXZlcnlDb3VudHJpZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfREVMSVZFUllfQ09VTlRSSUVTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb3VudHJ5W10pIHt9XG59XG5cbmV4cG9ydCB0eXBlIERlbGl2ZXJ5Q291bnRyaWVzQWN0aW9uID1cbiAgfCBMb2FkRGVsaXZlcnlDb3VudHJpZXNcbiAgfCBMb2FkRGVsaXZlcnlDb3VudHJpZXNGYWlsXG4gIHwgTG9hZERlbGl2ZXJ5Q291bnRyaWVzU3VjY2VzcztcbiJdfQ==