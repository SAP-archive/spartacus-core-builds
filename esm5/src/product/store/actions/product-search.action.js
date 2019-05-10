/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var SEARCH_PRODUCTS = '[Product] Search Products';
/** @type {?} */
export var SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
/** @type {?} */
export var SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
/** @type {?} */
export var GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
/** @type {?} */
export var CLEAN_PRODUCT_SEARCH = '[Product] Clean Product Search State';
var SearchProducts = /** @class */ (function () {
    function SearchProducts(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
    return SearchProducts;
}());
export { SearchProducts };
if (false) {
    /** @type {?} */
    SearchProducts.prototype.type;
    /** @type {?} */
    SearchProducts.prototype.payload;
    /** @type {?} */
    SearchProducts.prototype.auxiliary;
}
var SearchProductsFail = /** @class */ (function () {
    function SearchProductsFail(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
    return SearchProductsFail;
}());
export { SearchProductsFail };
if (false) {
    /** @type {?} */
    SearchProductsFail.prototype.type;
    /** @type {?} */
    SearchProductsFail.prototype.payload;
    /** @type {?} */
    SearchProductsFail.prototype.auxiliary;
}
var SearchProductsSuccess = /** @class */ (function () {
    function SearchProductsSuccess(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
    return SearchProductsSuccess;
}());
export { SearchProductsSuccess };
if (false) {
    /** @type {?} */
    SearchProductsSuccess.prototype.type;
    /** @type {?} */
    SearchProductsSuccess.prototype.payload;
    /** @type {?} */
    SearchProductsSuccess.prototype.auxiliary;
}
var GetProductSuggestions = /** @class */ (function () {
    function GetProductSuggestions(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
    return GetProductSuggestions;
}());
export { GetProductSuggestions };
if (false) {
    /** @type {?} */
    GetProductSuggestions.prototype.type;
    /** @type {?} */
    GetProductSuggestions.prototype.payload;
}
var GetProductSuggestionsSuccess = /** @class */ (function () {
    function GetProductSuggestionsSuccess(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
    return GetProductSuggestionsSuccess;
}());
export { GetProductSuggestionsSuccess };
if (false) {
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.type;
    /** @type {?} */
    GetProductSuggestionsSuccess.prototype.payload;
}
var GetProductSuggestionsFail = /** @class */ (function () {
    function GetProductSuggestionsFail(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
    return GetProductSuggestionsFail;
}());
export { GetProductSuggestionsFail };
if (false) {
    /** @type {?} */
    GetProductSuggestionsFail.prototype.type;
    /** @type {?} */
    GetProductSuggestionsFail.prototype.payload;
}
var CleanProductSearchState = /** @class */ (function () {
    function CleanProductSearchState() {
        this.type = CLEAN_PRODUCT_SEARCH;
    }
    return CleanProductSearchState;
}());
export { CleanProductSearchState };
if (false) {
    /** @type {?} */
    CleanProductSearchState.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxNQUFNLEtBQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0NBQXNDO0FBRTFFO0lBRUUsd0JBQ1MsT0FBMEQsRUFDMUQsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFDMUQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUhuQixTQUFJLEdBQUcsZUFBZSxDQUFDO0lBSTdCLENBQUM7SUFDTixxQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsOEJBQWdDOztJQUU5QixpQ0FBaUU7O0lBQ2pFLG1DQUEwQjs7QUFJOUI7SUFFRSw0QkFBbUIsT0FBbUIsRUFBUyxTQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUR6RCxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDZ0MsQ0FBQztJQUN4RSx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsa0NBQXFDOztJQUN6QixxQ0FBMEI7O0lBQUUsdUNBQTBCOztBQUdwRTtJQUVFLCtCQUFtQixPQUEwQixFQUFTLFNBQW1CO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQURoRSxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDb0MsQ0FBQztJQUMvRSw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBaUM7O0lBQUUsMENBQTBCOztBQUczRTtJQUVFLCtCQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQUQvRCxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDbUMsQ0FBQztJQUM5RSw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMscUNBQXdDOztJQUM1Qix3Q0FBNEQ7O0FBRzFFO0lBRUUsc0NBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBQ0wsQ0FBQztJQUM5QyxtQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsNENBQWdEOztJQUNwQywrQ0FBNEI7O0FBRzFDO0lBRUUsbUNBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEN0IsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ0osQ0FBQztJQUM1QyxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMseUNBQTZDOztJQUNqQyw0Q0FBMEI7O0FBR3hDO0lBRUU7UUFEUyxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDdEIsQ0FBQztJQUNsQiw4QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb24sXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFMgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyc7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTX0ZBSUwgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUyA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TID0gJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTCA9XG4gICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMgRmFpbCc7XG5leHBvcnQgY29uc3QgQ0xFQU5fUFJPRFVDVF9TRUFSQ0ggPSAnW1Byb2R1Y3RdIENsZWFuIFByb2R1Y3QgU2VhcmNoIFN0YXRlJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgcXVlcnlUZXh0OiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0sXG4gICAgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0U2VhcmNoUGFnZSwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlcm06IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFN1Z2dlc3Rpb25bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBTl9QUk9EVUNUX1NFQVJDSDtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RTZWFyY2hBY3Rpb24gPVxuICB8IFNlYXJjaFByb2R1Y3RzXG4gIHwgU2VhcmNoUHJvZHVjdHNGYWlsXG4gIHwgU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgfCBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZTtcbiJdfQ==