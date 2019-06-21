/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var PRODUCT_FEATURE = 'product';
/** @type {?} */
export var PRODUCT_DETAIL_ENTITY = '[Product] Detail Entity';
/**
 * @record
 */
export function StateWithProduct() { }
if (false) {
    /* Skipping unnamed member:
    [PRODUCT_FEATURE]: ProductsState;*/
}
/**
 * @record
 */
export function ProductsState() { }
if (false) {
    /** @type {?} */
    ProductsState.prototype.details;
    /** @type {?} */
    ProductsState.prototype.search;
    /** @type {?} */
    ProductsState.prototype.reviews;
    /** @type {?} */
    ProductsState.prototype.references;
}
/**
 * @record
 */
export function ProductsSearchState() { }
if (false) {
    /** @type {?} */
    ProductsSearchState.prototype.results;
    /** @type {?} */
    ProductsSearchState.prototype.suggestions;
    /** @type {?} */
    ProductsSearchState.prototype.auxResults;
}
/**
 * @record
 */
export function ProductReviewsState() { }
if (false) {
    /** @type {?} */
    ProductReviewsState.prototype.productCode;
    /** @type {?} */
    ProductReviewsState.prototype.list;
}
/**
 * @record
 */
export function ProductReferencesState() { }
if (false) {
    /** @type {?} */
    ProductReferencesState.prototype.productCode;
    /** @type {?} */
    ProductReferencesState.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3Byb2R1Y3Qtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxNQUFNLEtBQU8sZUFBZSxHQUFHLFNBQVM7O0FBQ3hDLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx5QkFBeUI7Ozs7QUFFOUQsc0NBRUM7Ozs7Ozs7O0FBRUQsbUNBS0M7OztJQUpDLGdDQUFvQzs7SUFDcEMsK0JBQTRCOztJQUM1QixnQ0FBNkI7O0lBQzdCLG1DQUFtQzs7Ozs7QUFHckMseUNBSUM7OztJQUhDLHNDQUEyQjs7SUFDM0IsMENBQTBCOztJQUMxQix5Q0FBOEI7Ozs7O0FBR2hDLHlDQUdDOzs7SUFGQywwQ0FBb0I7O0lBQ3BCLG1DQUFlOzs7OztBQUdqQiw0Q0FHQzs7O0lBRkMsNkNBQW9COztJQUNwQixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgU3VnZ2VzdGlvbixcbn0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZSwgUmV2aWV3IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBQUk9EVUNUX0ZFQVRVUkUgPSAncHJvZHVjdCc7XG5leHBvcnQgY29uc3QgUFJPRFVDVF9ERVRBSUxfRU5USVRZID0gJ1tQcm9kdWN0XSBEZXRhaWwgRW50aXR5JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVdpdGhQcm9kdWN0IHtcbiAgW1BST0RVQ1RfRkVBVFVSRV06IFByb2R1Y3RzU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNTdGF0ZSB7XG4gIGRldGFpbHM6IEVudGl0eUxvYWRlclN0YXRlPFByb2R1Y3Q+O1xuICBzZWFyY2g6IFByb2R1Y3RzU2VhcmNoU3RhdGU7XG4gIHJldmlld3M6IFByb2R1Y3RSZXZpZXdzU3RhdGU7XG4gIHJlZmVyZW5jZXM6IFByb2R1Y3RSZWZlcmVuY2VzU3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdHNTZWFyY2hTdGF0ZSB7XG4gIHJlc3VsdHM6IFByb2R1Y3RTZWFyY2hQYWdlO1xuICBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdO1xuICBhdXhSZXN1bHRzOiBQcm9kdWN0U2VhcmNoUGFnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UmV2aWV3c1N0YXRlIHtcbiAgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgbGlzdDogUmV2aWV3W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSB7XG4gIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIGxpc3Q6IFByb2R1Y3RSZWZlcmVuY2VbXTtcbn1cbiJdfQ==