/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
/** @type {?} */
export const LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
/** @type {?} */
export const LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
export class LoadDeliveryCountries {
    constructor() {
        this.type = LOAD_DELIVERY_COUNTRIES;
    }
}
if (false) {
    /** @type {?} */
    LoadDeliveryCountries.prototype.type;
}
export class LoadDeliveryCountriesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadDeliveryCountriesFail.prototype.type;
    /** @type {?} */
    LoadDeliveryCountriesFail.prototype.payload;
}
export class LoadDeliveryCountriesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadDeliveryCountriesSuccess.prototype.type;
    /** @type {?} */
    LoadDeliveryCountriesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMscUNBQXFDOztBQUN2QyxNQUFNLE9BQU8sK0JBQStCLEdBQzFDLHdDQUF3QztBQUUxQyxNQUFNLE9BQU8scUJBQXFCO0lBRWhDO1FBRFMsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ3pCLENBQUM7Q0FDakI7OztJQUZDLHFDQUF3Qzs7QUFJMUMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVwQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDWCxDQUFDO0NBQ3BDOzs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUFtQjs7QUFHakMsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV2QyxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUNSLENBQUM7Q0FDMUM7OztJQUZDLDRDQUFnRDs7SUFDcEMsK0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9ERUxJVkVSWV9DT1VOVFJJRVMgPSAnW1VzZXJdIExvYWQgRGVsaXZlcnkgQ291bnRyaWVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19GQUlMID1cbiAgJ1tVc2VyXSBMb2FkIERlbGl2ZXJ5IENvdW50cmllcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIERlbGl2ZXJ5IENvdW50cmllcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWREZWxpdmVyeUNvdW50cmllcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZERlbGl2ZXJ5Q291bnRyaWVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZERlbGl2ZXJ5Q291bnRyaWVzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ291bnRyeVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEZWxpdmVyeUNvdW50cmllc0FjdGlvbiA9XG4gIHwgTG9hZERlbGl2ZXJ5Q291bnRyaWVzXG4gIHwgTG9hZERlbGl2ZXJ5Q291bnRyaWVzRmFpbFxuICB8IExvYWREZWxpdmVyeUNvdW50cmllc1N1Y2Nlc3M7XG4iXX0=