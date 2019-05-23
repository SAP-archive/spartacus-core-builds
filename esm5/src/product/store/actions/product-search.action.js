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
export var CLEAR_PRODUCT_SEARCH_RESULT = '[Product] Clear Product Search Result';
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
var ClearProductSearchResult = /** @class */ (function () {
    function ClearProductSearchResult(payload) {
        if (payload === void 0) { payload = {
            clearPageResults: false,
            clearSearchboxResults: false,
        }; }
        this.payload = payload;
        this.type = CLEAR_PRODUCT_SEARCH_RESULT;
    }
    return ClearProductSearchResult;
}());
export { ClearProductSearchResult };
if (false) {
    /** @type {?} */
    ClearProductSearchResult.prototype.type;
    /** @type {?} */
    ClearProductSearchResult.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxNQUFNLEtBQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxLQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sS0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLEtBQU8sMkJBQTJCLEdBQ3RDLHVDQUF1QztBQUV6QztJQUVFLHdCQUNTLE9BQTBELEVBQzFELFNBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQW1EO1FBQzFELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFIbkIsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUk3QixDQUFDO0lBQ04scUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLDhCQUFnQzs7SUFFOUIsaUNBQWlFOztJQUNqRSxtQ0FBMEI7O0FBSTlCO0lBRUUsNEJBQW1CLE9BQW1CLEVBQVMsU0FBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEekQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ2dDLENBQUM7SUFDeEUseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGtDQUFxQzs7SUFDekIscUNBQTBCOztJQUFFLHVDQUEwQjs7QUFHcEU7SUFFRSwrQkFBbUIsT0FBMEIsRUFBUyxTQUFtQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEaEUsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ29DLENBQUM7SUFDL0UsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQWlDOztJQUFFLDBDQUEwQjs7QUFHM0U7SUFFRSwrQkFBbUIsT0FBcUQ7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBOEM7UUFEL0QsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ21DLENBQUM7SUFDOUUsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQTREOztBQUcxRTtJQUVFLHNDQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBRC9CLFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUNMLENBQUM7SUFDOUMsbUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDRDQUFnRDs7SUFDcEMsK0NBQTRCOztBQUcxQztJQUVFLG1DQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRDdCLFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUNKLENBQUM7SUFDNUMsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHlDQUE2Qzs7SUFDakMsNENBQTBCOztBQUd4QztJQUVFLGtDQUNTLE9BR047UUFITSx3QkFBQSxFQUFBO1lBQ0wsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixxQkFBcUIsRUFBRSxLQUFLO1NBQzdCO1FBSE0sWUFBTyxHQUFQLE9BQU8sQ0FHYjtRQUxNLFNBQUksR0FBRywyQkFBMkIsQ0FBQztJQU16QyxDQUFDO0lBQ04sK0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHdDQUE0Qzs7SUFFMUMsMkNBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDbGVhclNlYXJjaCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFN1Z2dlc3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19GQUlMID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyA9ICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX0ZBSUwgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfU0VBUkNIX1JFU1VMVCA9XG4gICdbUHJvZHVjdF0gQ2xlYXIgUHJvZHVjdCBTZWFyY2ggUmVzdWx0JztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgcXVlcnlUZXh0OiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0sXG4gICAgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0U2VhcmNoUGFnZSwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlcm06IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFN1Z2dlc3Rpb25bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfUkVTVUxUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogQ2xlYXJTZWFyY2ggPSB7XG4gICAgICBjbGVhclBhZ2VSZXN1bHRzOiBmYWxzZSxcbiAgICAgIGNsZWFyU2VhcmNoYm94UmVzdWx0czogZmFsc2UsXG4gICAgfVxuICApIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFNlYXJjaEFjdGlvbiA9XG4gIHwgU2VhcmNoUHJvZHVjdHNcbiAgfCBTZWFyY2hQcm9kdWN0c0ZhaWxcbiAgfCBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3NcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICB8IENsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdDtcbiJdfQ==