/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
/** @type {?} */
export var LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
/** @type {?} */
export var LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
/** @type {?} */
export var CLEAN_PRODUCT_REFERENCES = '[Product] Clean Product References';
var LoadProductReferences = /** @class */ (function () {
    function LoadProductReferences(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
    return LoadProductReferences;
}());
export { LoadProductReferences };
if (false) {
    /** @type {?} */
    LoadProductReferences.prototype.type;
    /** @type {?} */
    LoadProductReferences.prototype.payload;
}
var LoadProductReferencesFail = /** @class */ (function () {
    function LoadProductReferencesFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
    return LoadProductReferencesFail;
}());
export { LoadProductReferencesFail };
if (false) {
    /** @type {?} */
    LoadProductReferencesFail.prototype.type;
    /** @type {?} */
    LoadProductReferencesFail.prototype.payload;
}
var LoadProductReferencesSuccess = /** @class */ (function () {
    function LoadProductReferencesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
    return LoadProductReferencesSuccess;
}());
export { LoadProductReferencesSuccess };
if (false) {
    /** @type {?} */
    LoadProductReferencesSuccess.prototype.type;
    /** @type {?} */
    LoadProductReferencesSuccess.prototype.payload;
}
var CleanProductReferences = /** @class */ (function () {
    function CleanProductReferences() {
        this.type = CLEAN_PRODUCT_REFERENCES;
    }
    return CleanProductReferences;
}());
export { CleanProductReferences };
if (false) {
    /** @type {?} */
    CleanProductReferences.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyx3Q0FBd0M7O0FBQy9FLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsNkNBQTZDOztBQUMvQyxNQUFNLEtBQU8sK0JBQStCLEdBQzFDLGdEQUFnRDs7QUFDbEQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLG9DQUFvQztBQUU1RTtJQUVFLCtCQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBT3JDLENBQUM7SUFDTiw0QkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkMscUNBQXdDOztJQUV0Qyx3Q0FJQzs7QUFJTDtJQUVFLG1DQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUNKLENBQUM7SUFDNUMsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHlDQUE2Qzs7SUFDakMsNENBQTBCOztBQUd4QztJQUVFLHNDQUNTLE9BR047UUFITSxZQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBTTdDLENBQUM7SUFDTixtQ0FBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsNENBQWdEOztJQUU5QywrQ0FHQzs7QUFJTDtJQUFBO1FBQ1csU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBQzNDLENBQUM7SUFBRCw2QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVMgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZWZlcmVuY2VzIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX0ZBSUwgPVxuICAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZWZlcmVuY2VzIERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IFJlZmVyZW5jZXMgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBTl9QUk9EVUNUX1JFRkVSRU5DRVMgPSAnW1Byb2R1Y3RdIENsZWFuIFByb2R1Y3QgUmVmZXJlbmNlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJlZmVyZW5jZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBsaXN0OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblByb2R1Y3RSZWZlcmVuY2VzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFOX1BST0RVQ1RfUkVGRVJFTkNFUztcbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0UmVmZXJlbmNlc0FjdGlvbiA9XG4gIHwgTG9hZFByb2R1Y3RSZWZlcmVuY2VzXG4gIHwgTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbFxuICB8IExvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3NcbiAgfCBDbGVhblByb2R1Y3RSZWZlcmVuY2VzO1xuIl19