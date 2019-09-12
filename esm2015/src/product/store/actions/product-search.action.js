/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const CLEAR_PRODUCT_SEARCH_RESULT = '[Product] Clear Product Search Result';
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
export class ClearProductSearchResult {
    /**
     * @param {?=} payload
     */
    constructor(payload = {
        clearPageResults: false,
        clearSearchboxResults: false,
    }) {
        this.payload = payload;
        this.type = CLEAR_PRODUCT_SEARCH_RESULT;
    }
}
if (false) {
    /** @type {?} */
    ClearProductSearchResult.prototype.type;
    /** @type {?} */
    ClearProductSearchResult.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxNQUFNLE9BQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLGdDQUFnQzs7QUFDcEUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQzs7QUFDMUUsTUFBTSxPQUFPLCtCQUErQixHQUMxQywyQ0FBMkM7O0FBQzdDLE1BQU0sT0FBTyw0QkFBNEIsR0FDdkMsd0NBQXdDOztBQUMxQyxNQUFNLE9BQU8sMkJBQTJCLEdBQ3RDLHVDQUF1QztBQUV6QyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFFekIsWUFDUyxPQUEwRCxFQUMxRCxTQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFtRDtRQUMxRCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBSG5CLFNBQUksR0FBRyxlQUFlLENBQUM7SUFJN0IsQ0FBQztDQUNMOzs7SUFMQyw4QkFBZ0M7O0lBRTlCLGlDQUFpRTs7SUFDakUsbUNBQTBCOztBQUk5QixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUU3QixZQUFtQixPQUFtQixFQUFTLFNBQW1CO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBRHpELFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUNnQyxDQUFDO0NBQ3ZFOzs7SUFGQyxrQ0FBcUM7O0lBQ3pCLHFDQUEwQjs7SUFBRSx1Q0FBMEI7O0FBR3BFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBRWhDLFlBQW1CLE9BQTBCLEVBQVMsU0FBbUI7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBRGhFLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNvQyxDQUFDO0NBQzlFOzs7SUFGQyxxQ0FBd0M7O0lBQzVCLHdDQUFpQzs7SUFBRSwwQ0FBMEI7O0FBRzNFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFaEMsWUFBbUIsT0FBcUQ7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBOEM7UUFEL0QsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ21DLENBQUM7Q0FDN0U7OztJQUZDLHFDQUF3Qzs7SUFDNUIsd0NBQTREOztBQUcxRSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXZDLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBQ0wsQ0FBQztDQUM3Qzs7O0lBRkMsNENBQWdEOztJQUNwQywrQ0FBNEI7O0FBRzFDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFFcEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDSixDQUFDO0NBQzNDOzs7SUFGQyx5Q0FBNkM7O0lBQ2pDLDRDQUEwQjs7QUFHeEMsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUVuQyxZQUNTLFVBQXVCO1FBQzVCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIscUJBQXFCLEVBQUUsS0FBSztLQUM3QjtRQUhNLFlBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFNekMsQ0FBQztDQUNMOzs7SUFQQyx3Q0FBNEM7O0lBRTFDLDJDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ2xlYXJTZWFyY2gsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUUyA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzJztcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVFNfRkFJTCA9ICdbUHJvZHVjdF0gU2VhcmNoIFByb2R1Y3RzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19TVUNDRVNTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VHR0VTVElPTlMgPSAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19GQUlMID1cbiAgJ1tQcm9kdWN0XSBHZXQgUHJvZHVjdCBTdWdnZXN0aW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX1NFQVJDSF9SRVNVTFQgPVxuICAnW1Byb2R1Y3RdIENsZWFyIFByb2R1Y3QgU2VhcmNoIFJlc3VsdCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0cyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHF1ZXJ5VGV4dDogc3RyaW5nOyBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyB9LFxuICAgIHB1YmxpYyBhdXhpbGlhcnk/OiBib29sZWFuXG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRUFSQ0hfUFJPRFVDVFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwsIHB1YmxpYyBhdXhpbGlhcnk/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZHVjdFNlYXJjaFBhZ2UsIHB1YmxpYyBhdXhpbGlhcnk/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0ZXJtOiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTdWdnZXN0aW9uW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFcnJvck1vZGVsKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJQcm9kdWN0U2VhcmNoUmVzdWx0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX1BST0RVQ1RfU0VBUkNIX1JFU1VMVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IENsZWFyU2VhcmNoID0ge1xuICAgICAgY2xlYXJQYWdlUmVzdWx0czogZmFsc2UsXG4gICAgICBjbGVhclNlYXJjaGJveFJlc3VsdHM6IGZhbHNlLFxuICAgIH1cbiAgKSB7fVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFByb2R1Y3RTZWFyY2hBY3Rpb24gPVxuICB8IFNlYXJjaFByb2R1Y3RzXG4gIHwgU2VhcmNoUHJvZHVjdHNGYWlsXG4gIHwgU2VhcmNoUHJvZHVjdHNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zU3VjY2Vzc1xuICB8IEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWxcbiAgfCBDbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQ7XG4iXX0=