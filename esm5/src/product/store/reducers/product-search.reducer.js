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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sa0NBQWtDLENBQUM7O0FBSXZFLE1BQU0sS0FBTyxZQUFZLEdBQXdCO0lBQy9DLE9BQU8sRUFBRSxFQUFFO0lBQ1gsV0FBVyxFQUFFLEVBQUU7SUFDZixVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDekMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPOztnQkFDeEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFO1lBQ3BFLDRCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsYUFBQSxJQUNYO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDNUMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBMEIsSUFDRixPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFDdkMsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQ2pDLEtBQTBCLElBQ0YsT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQjs7QUFDMUMsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFVBQ25DLEtBQTBCLElBQ1QsT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RzU2VhcmNoU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0c1NlYXJjaCBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBTdWdnZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgVUlQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLXBhZ2UnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdHNTZWFyY2guUHJvZHVjdFNlYXJjaEFjdGlvblxuKTogUHJvZHVjdHNTZWFyY2hTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5TRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcmVzID0gYWN0aW9uLmF1eGlsaWFyeSA/IHsgYXV4UmVzdWx0czogcmVzdWx0cyB9IDogeyByZXN1bHRzIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucmVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guQ0xFQU5fUFJPRFVDVF9TRUFSQ0g6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFJlc3VsdHMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBVSVByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLnJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0QXV4U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFVJUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=