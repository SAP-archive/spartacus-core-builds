/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
export const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
export const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
export class LoadRegions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
if (false) {
    /** @type {?} */
    LoadRegions.prototype.type;
    /** @type {?} */
    LoadRegions.prototype.payload;
}
export class LoadRegionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadRegionsFail.prototype.type;
    /** @type {?} */
    LoadRegionsFail.prototype.payload;
}
export class LoadRegionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadRegionsSuccess.prototype.type;
    /** @type {?} */
    LoadRegionsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLFlBQVksR0FBRyxxQkFBcUI7O0FBQ2pELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7QUFFM0QsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFdEIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFlBQVksQ0FBQztJQUNRLENBQUM7Q0FDdkM7OztJQUZDLDJCQUE2Qjs7SUFDakIsOEJBQXNCOztBQUdwQyxNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDQSxDQUFDO0NBQ3BDOzs7SUFGQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFHakMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUU3QixZQUFtQixPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRDNCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUNFLENBQUM7Q0FDekM7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlMgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX1NVQ0NFU1MgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBMT0FEX1JFR0lPTlNfRkFJTCA9ICdbVXNlcl0gTG9hZCBSZWdpb25zIEZhaWwnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVnaW9uW10pIHt9XG59XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbnNBY3Rpb24gPSBMb2FkUmVnaW9ucyB8IExvYWRSZWdpb25zRmFpbCB8IExvYWRSZWdpb25zU3VjY2VzcztcbiJdfQ==