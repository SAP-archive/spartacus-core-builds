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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLEtBQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0NBQXNDO0FBRTFFO0lBRUUsd0JBQ1MsT0FBMEQsRUFDMUQsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFDMUQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUhuQixTQUFJLEdBQUcsZUFBZSxDQUFDO0lBSTdCLENBQUM7SUFDTixxQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsOEJBQWdDOztJQUU5QixpQ0FBaUU7O0lBQ2pFLG1DQUEwQjs7QUFJOUI7SUFFRSw0QkFBbUIsT0FBbUIsRUFBUyxTQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUR6RCxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDZ0MsQ0FBQztJQUN4RSx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsa0NBQXFDOztJQUN6QixxQ0FBMEI7O0lBQUUsdUNBQTBCOztBQUdwRTtJQUVFLCtCQUNTLE9BQTRCLEVBQzVCLFNBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFIbkIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBSXJDLENBQUM7SUFDTiw0QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMscUNBQXdDOztJQUV0Qyx3Q0FBbUM7O0lBQ25DLDBDQUEwQjs7QUFJOUI7SUFFRSwrQkFBbUIsT0FBcUQ7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBOEM7UUFEL0QsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ21DLENBQUM7SUFDOUUsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQTREOztBQUcxRTtJQUVFLHNDQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBRC9CLFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUNMLENBQUM7SUFDOUMsbUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDRDQUFnRDs7SUFDcEMsK0NBQTRCOztBQUcxQztJQUVFLG1DQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUNKLENBQUM7SUFDNUMsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHlDQUE2Qzs7SUFDakMsNENBQTBCOztBQUd4QztJQUVFO1FBRFMsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ3RCLENBQUM7SUFDbEIsOEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHVDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBFcnJvck1vZGVsLCBTdWdnZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgVUlQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLXBhZ2UnO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19GQUlMID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyA9ICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX0ZBSUwgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMRUFOX1BST0RVQ1RfU0VBUkNIID0gJ1tQcm9kdWN0XSBDbGVhbiBQcm9kdWN0IFNlYXJjaCBTdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0cyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHF1ZXJ5VGV4dDogc3RyaW5nOyBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyB9LFxuICAgIHB1YmxpYyBhdXhpbGlhcnk/OiBib29sZWFuXG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwsIHB1YmxpYyBhdXhpbGlhcnk/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogVUlQcm9kdWN0U2VhcmNoUGFnZSxcbiAgICBwdWJsaWMgYXV4aWxpYXJ5PzogYm9vbGVhblxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlcm06IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFN1Z2dlc3Rpb25bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBTl9QUk9EVUNUX1NFQVJDSDtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RTZWFyY2hBY3Rpb24gPVxuICB8IFNlYXJjaFByb2R1Y3RzXG4gIHwgU2VhcmNoUHJvZHVjdHNGYWlsXG4gIHwgU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgfCBDbGVhblByb2R1Y3RTZWFyY2hTdGF0ZTtcbiJdfQ==