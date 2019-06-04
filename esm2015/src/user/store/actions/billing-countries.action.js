/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_BILLING_COUNTRIES = '[User] Load Billing Countries';
/** @type {?} */
export const LOAD_BILLING_COUNTRIES_FAIL = '[User] Load Billing Countries Fail';
/** @type {?} */
export const LOAD_BILLING_COUNTRIES_SUCCESS = '[User] Load Billing Countries Success';
export class LoadBillingCountries {
    constructor() {
        this.type = LOAD_BILLING_COUNTRIES;
    }
}
if (false) {
    /** @type {?} */
    LoadBillingCountries.prototype.type;
}
export class LoadBillingCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadBillingCountriesFail.prototype.type;
    /** @type {?} */
    LoadBillingCountriesFail.prototype.payload;
}
export class LoadBillingCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadBillingCountriesSuccess.prototype.type;
    /** @type {?} */
    LoadBillingCountriesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9iaWxsaW5nLWNvdW50cmllcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsK0JBQStCOztBQUNyRSxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsb0NBQW9DOztBQUMvRSxNQUFNLE9BQU8sOEJBQThCLEdBQ3pDLHVDQUF1QztBQUV6QyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CO1FBRFMsU0FBSSxHQUFHLHNCQUFzQixDQUFDO0lBQ3hCLENBQUM7Q0FDakI7OztJQUZDLG9DQUF1Qzs7QUFJekMsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUVuQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFDVixDQUFDO0NBQ3BDOzs7SUFGQyx3Q0FBNEM7O0lBQ2hDLDJDQUFtQjs7QUFHakMsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUV0QyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsOEJBQThCLENBQUM7SUFDYixDQUFDO0NBQ3BDOzs7SUFGQywyQ0FBK0M7O0lBQ25DLDhDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQklMTElOR19DT1VOVFJJRVMgPSAnW1VzZXJdIExvYWQgQmlsbGluZyBDb3VudHJpZXMnO1xuZXhwb3J0IGNvbnN0IExPQURfQklMTElOR19DT1VOVFJJRVNfRkFJTCA9ICdbVXNlcl0gTG9hZCBCaWxsaW5nIENvdW50cmllcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0JJTExJTkdfQ09VTlRSSUVTX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgQmlsbGluZyBDb3VudHJpZXMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkQmlsbGluZ0NvdW50cmllcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JJTExJTkdfQ09VTlRSSUVTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQmlsbGluZ0NvdW50cmllc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CSUxMSU5HX0NPVU5UUklFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEJpbGxpbmdDb3VudHJpZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQklMTElOR19DT1VOVFJJRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IHR5cGUgQmlsbGluZ0NvdW50cmllc0FjdGlvbiA9XG4gIHwgTG9hZEJpbGxpbmdDb3VudHJpZXNcbiAgfCBMb2FkQmlsbGluZ0NvdW50cmllc0ZhaWxcbiAgfCBMb2FkQmlsbGluZ0NvdW50cmllc1N1Y2Nlc3M7XG4iXX0=