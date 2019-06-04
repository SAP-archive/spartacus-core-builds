/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
/** @type {?} */
export var LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
/** @type {?} */
export var LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
var LoadBillingCountries = /** @class */ (function () {
    function LoadBillingCountries() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
    return LoadBillingCountries;
}());
export { LoadBillingCountries };
if (false) {
    /** @type {?} */
    LoadBillingCountries.prototype.type;
}
var LoadBillingCountriesFail = /** @class */ (function () {
    function LoadBillingCountriesFail(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
    return LoadBillingCountriesFail;
}());
export { LoadBillingCountriesFail };
if (false) {
    /** @type {?} */
    LoadBillingCountriesFail.prototype.type;
    /** @type {?} */
    LoadBillingCountriesFail.prototype.payload;
}
var LoadBillingCountriesSuccess = /** @class */ (function () {
    function LoadBillingCountriesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
    return LoadBillingCountriesSuccess;
}());
export { LoadBillingCountriesSuccess };
if (false) {
    /** @type {?} */
    LoadBillingCountriesSuccess.prototype.type;
    /** @type {?} */
    LoadBillingCountriesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9iaWxsaW5nLWNvdW50cmllcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUMvRSxNQUFNLEtBQU8sOEJBQThCLEdBQ3pDLHVDQUF1QztBQUV6QztJQUVFO1FBRFMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ3hCLENBQUM7SUFDbEIsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLG9DQUF1Qzs7QUFJekM7SUFFRSxrQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDJCQUEyQixDQUFDO0lBQ1YsQ0FBQztJQUNyQywrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsd0NBQTRDOztJQUNoQywyQ0FBbUI7O0FBR2pDO0lBRUUscUNBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQUNiLENBQUM7SUFDckMsa0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDJDQUErQzs7SUFDbkMsOENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9CSUxMSU5HX0NPVU5UUklFUyA9ICdbVXNlcl0gTG9hZCBCaWxsaW5nIENvdW50cmllcyc7XG5leHBvcnQgY29uc3QgTE9BRF9CSUxMSU5HX0NPVU5UUklFU19GQUlMID0gJ1tVc2VyXSBMb2FkIEJpbGxpbmcgQ291bnRyaWVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQklMTElOR19DT1VOVFJJRVNfU1VDQ0VTUyA9XG4gICdbVXNlcl0gTG9hZCBCaWxsaW5nIENvdW50cmllcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRCaWxsaW5nQ291bnRyaWVzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQklMTElOR19DT1VOVFJJRVM7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRCaWxsaW5nQ291bnRyaWVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JJTExJTkdfQ09VTlRSSUVTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQmlsbGluZ0NvdW50cmllc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CSUxMSU5HX0NPVU5UUklFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgdHlwZSBCaWxsaW5nQ291bnRyaWVzQWN0aW9uID1cbiAgfCBMb2FkQmlsbGluZ0NvdW50cmllc1xuICB8IExvYWRCaWxsaW5nQ291bnRyaWVzRmFpbFxuICB8IExvYWRCaWxsaW5nQ291bnRyaWVzU3VjY2VzcztcbiJdfQ==