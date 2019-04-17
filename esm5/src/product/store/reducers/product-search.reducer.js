/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromProductsSearch from '../actions/product-search.action';
/** @type {?} */
export var initialState = {
    results: {},
    suggestions: [],
    auxResults: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromProductsSearch.SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            /** @type {?} */
            var res = action.auxiliary ? { auxResults: results } : { results: results };
            return tslib_1.__assign({}, state, res);
        }
        case fromProductsSearch.GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            var suggestions = action.payload;
            return tslib_1.__assign({}, state, { suggestions: suggestions });
        }
        case fromProductsSearch.CLEAN_PRODUCT_SEARCH: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export var getSearchResults = function (state) { return state.results; };
/** @type {?} */
export var getAuxSearchResults = function (state) { return state.auxResults; };
/** @type {?} */
export var getProductSuggestions = function (state) { return state.suggestions; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sa0NBQWtDLENBQUM7O0FBR3ZFLE1BQU0sS0FBTyxZQUFZLEdBQXdCO0lBQy9DLE9BQU8sRUFBRSxFQUFFO0lBQ1gsV0FBVyxFQUFFLEVBQUU7SUFDZixVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDekMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPOztnQkFDeEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFO1lBQ3BFLDRCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsYUFBQSxJQUNYO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBMEIsSUFDSixPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFDckMsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQ2pDLEtBQTBCLElBQ0osT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQjs7QUFDeEMsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFVBQ25DLEtBQTBCLElBQ1QsT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RzU2VhcmNoU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0c1NlYXJjaCBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBTdWdnZXN0aW9uLCBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZSA9IHtcbiAgcmVzdWx0czoge30sXG4gIHN1Z2dlc3Rpb25zOiBbXSxcbiAgYXV4UmVzdWx0czoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVByb2R1Y3RzU2VhcmNoLlByb2R1Y3RTZWFyY2hBY3Rpb25cbik6IFByb2R1Y3RzU2VhcmNoU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IHJlcyA9IGFjdGlvbi5hdXhpbGlhcnkgPyB7IGF1eFJlc3VsdHM6IHJlc3VsdHMgfSA6IHsgcmVzdWx0cyB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnJlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25bXSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVByb2R1Y3RzU2VhcmNoLkNMRUFOX1BST0RVQ1RfU0VBUkNIOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUucmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRBdXhTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=