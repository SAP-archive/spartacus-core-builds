/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
export const SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
export const SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
export const GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
export const CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
export class SearchProducts {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
}
if (false) {
    /** @type {?} */
    SearchProducts.prototype.type;
    /** @type {?} */
    SearchProducts.prototype.payload;
    /** @type {?} */
    SearchProducts.prototype.auxiliary;
}
export class SearchProductsFail {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    SearchProductsFail.prototype.type;
    /** @type {?} */
    SearchProductsFail.prototype.payload;
    /** @type {?} */
    SearchProductsFail.prototype.auxiliary;
}
export class SearchProductsSuccess {
    /**
     * @param {?} payload
     * @param {?=} auxiliary
     */
    constructor(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    SearchProductsSuccess.prototype.type;
    /** @type {?} */
    SearchProductsSuccess.prototype.payload;
    /** @type {?} */
    SearchProductsSuccess.prototype.auxiliary;
}
export class GetProductSuggestions {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestions.prototype.type;
    /** @type {?} */
    GetProductSuggestions.prototype.payload;
}
export class GetProductSuggestionsSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.type;
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.payload;
}
export class GetProductSuggestionsFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    GetProductSuggestionsFail.prototype.type;
    /** @type {?} */
    GetProductSuggestionsFail.prototype.payload;
}
export class CleanProductSearchState {
    constructor() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
}
if (false) {
    /** @type {?} */
    CleanProductSearchState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLE9BQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsc0NBQXNDO0FBRTFFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUV6QixZQUNTLE9BQTBELEVBQzFELFNBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQW1EO1FBQzFELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFIbkIsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUk3QixDQUFDO0NBQ0w7OztJQUxDLDhCQUFnQzs7SUFFOUIsaUNBQWlFOztJQUNqRSxtQ0FBMEI7O0FBSTlCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBRTdCLFlBQW1CLE9BQW1CLEVBQVMsU0FBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEekQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ2dDLENBQUM7Q0FDdkU7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQTBCOztJQUFFLHVDQUEwQjs7QUFHcEUsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFFaEMsWUFDUyxPQUE0QixFQUM1QixTQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUM1QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBSG5CLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUlyQyxDQUFDO0NBQ0w7OztJQUxDLHFDQUF3Qzs7SUFFdEMsd0NBQW1DOztJQUNuQywwQ0FBMEI7O0FBSTlCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFaEMsWUFBbUIsT0FBcUQ7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBOEM7UUFEL0QsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ21DLENBQUM7Q0FDN0U7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQTREOztBQUcxRSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXZDLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBQ0wsQ0FBQztDQUM3Qzs7O0lBRkMsNENBQWdEOztJQUNwQywrQ0FBNEI7O0FBRzFDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFcEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDSixDQUFDO0NBQzNDOzs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUEwQjs7QUFHeEMsTUFBTSxPQUFPLHVCQUF1QjtJQUVsQztRQURTLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUN0QixDQUFDO0NBQ2pCOzs7SUFGQyx1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCwgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcbmltcG9ydCB7IFVJUHJvZHVjdFNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC1wYWdlJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUUyA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzJztcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFNfRkFJTCA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19TVUNDRVNTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMgPSAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBTl9QUk9EVUNUX1NFQVJDSCA9ICdbUHJvZHVjdF0gQ2xlYW4gUHJvZHVjdCBTZWFyY2ggU3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyBxdWVyeVRleHQ6IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSxcbiAgICBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhblxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFcnJvck1vZGVsLCBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhbikge31cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IFVJUHJvZHVjdFNlYXJjaFBhZ2UsXG4gICAgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0ZXJtOiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTdWdnZXN0aW9uW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFcnJvck1vZGVsKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYW5Qcm9kdWN0U2VhcmNoU3RhdGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQU5fUFJPRFVDVF9TRUFSQ0g7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0U2VhcmNoQWN0aW9uID1cbiAgfCBTZWFyY2hQcm9kdWN0c1xuICB8IFNlYXJjaFByb2R1Y3RzRmFpbFxuICB8IFNlYXJjaFByb2R1Y3RzU3VjY2Vzc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3NcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsXG4gIHwgQ2xlYW5Qcm9kdWN0U2VhcmNoU3RhdGU7XG4iXX0=