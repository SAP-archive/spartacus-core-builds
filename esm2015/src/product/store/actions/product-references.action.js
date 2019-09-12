/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
/** @type {?} */
export const LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
/** @type {?} */
export const LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
export class LoadProductReferences {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReferences.prototype.type;
    /** @type {?} */
    LoadProductReferences.prototype.payload;
}
export class LoadProductReferencesFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReferencesFail.prototype.type;
    /** @type {?} */
    LoadProductReferencesFail.prototype.payload;
}
export class LoadProductReferencesSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductReferencesSuccess.prototype.type;
    /** @type {?} */
    LoadProductReferencesSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyx3Q0FBd0M7O0FBQy9FLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMsNkNBQTZDOztBQUMvQyxNQUFNLE9BQU8sK0JBQStCLEdBQzFDLGdEQUFnRDtBQUVsRCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWhDLFlBQ1MsT0FJTjtRQUpNLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFPckMsQ0FBQztDQUNMOzs7SUFSQyxxQ0FBd0M7O0lBRXRDLHdDQUlDOztBQUlMLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFcEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDSixDQUFDO0NBQzNDOzs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUEwQjs7QUFHeEMsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQUV2QyxZQUNTLE9BR047UUFITSxZQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBTTdDLENBQUM7Q0FDTDs7O0lBUEMsNENBQWdEOztJQUU5QywrQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRUZFUkVOQ0VTID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmVmZXJlbmNlcyBEYXRhJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgUmVmZXJlbmNlcyBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZWZlcmVuY2VzIERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJlZmVyZW5jZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBsaXN0OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gICAgfVxuICApIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFJlZmVyZW5jZXNBY3Rpb24gPVxuICB8IExvYWRQcm9kdWN0UmVmZXJlbmNlc1xuICB8IExvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWxcbiAgfCBMb2FkUHJvZHVjdFJlZmVyZW5jZXNTdWNjZXNzO1xuIl19