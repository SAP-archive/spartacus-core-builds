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
        case fromProductsSearch.CLEAR_PRODUCT_SEARCH_RESULT: {
            return tslib_1.__assign({}, state, { results: action.payload.clearPageResults ? {} : state.results, suggestions: action.payload.clearSearchboxResults
                    ? []
                    : state.suggestions, auxResults: action.payload.clearSearchboxResults
                    ? {}
                    : state.auxResults });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0sa0NBQWtDLENBQUM7O0FBR3ZFLE1BQU0sS0FBTyxZQUFZLEdBQXdCO0lBQy9DLE9BQU8sRUFBRSxFQUFFO0lBQ1gsV0FBVyxFQUFFLEVBQUU7SUFDZixVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE4QztJQUQ5QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDekMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPOztnQkFDeEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFO1lBQ3BFLDRCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7Z0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQsNEJBQ0ssS0FBSyxJQUNSLFdBQVcsYUFBQSxJQUNYO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDbkQsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzdELFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtvQkFDL0MsQ0FBQyxDQUFDLEVBQUU7b0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ3JCLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtvQkFDOUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQ3BCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBMEIsSUFDSixPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFDckMsTUFBTSxLQUFPLG1CQUFtQixHQUFHLFVBQ2pDLEtBQTBCLElBQ0osT0FBQSxLQUFLLENBQUMsVUFBVSxFQUFoQixDQUFnQjs7QUFDeEMsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFVBQ25DLEtBQTBCLElBQ1QsT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdHNTZWFyY2ggZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24nO1xuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdHNTZWFyY2guUHJvZHVjdFNlYXJjaEFjdGlvblxuKTogUHJvZHVjdHNTZWFyY2hTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5TRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcmVzID0gYWN0aW9uLmF1eGlsaWFyeSA/IHsgYXV4UmVzdWx0czogcmVzdWx0cyB9IDogeyByZXN1bHRzIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucmVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfUkVTVUxUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0czogYWN0aW9uLnBheWxvYWQuY2xlYXJQYWdlUmVzdWx0cyA/IHt9IDogc3RhdGUucmVzdWx0cyxcbiAgICAgICAgc3VnZ2VzdGlvbnM6IGFjdGlvbi5wYXlsb2FkLmNsZWFyU2VhcmNoYm94UmVzdWx0c1xuICAgICAgICAgID8gW11cbiAgICAgICAgICA6IHN0YXRlLnN1Z2dlc3Rpb25zLFxuICAgICAgICBhdXhSZXN1bHRzOiBhY3Rpb24ucGF5bG9hZC5jbGVhclNlYXJjaGJveFJlc3VsdHNcbiAgICAgICAgICA/IHt9XG4gICAgICAgICAgOiBzdGF0ZS5hdXhSZXN1bHRzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLnJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0QXV4U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLmF1eFJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogU3VnZ2VzdGlvbltdID0+IHN0YXRlLnN1Z2dlc3Rpb25zO1xuIl19