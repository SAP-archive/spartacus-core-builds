/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromProductsSearch from '../actions/product-search.action';
/** @type {?} */
export const initialState = {
    results: {},
    suggestions: [],
    auxResults: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromProductsSearch.SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            /** @type {?} */
            const res = action.auxiliary ? { auxResults: results } : { results };
            return Object.assign({}, state, res);
        }
        case fromProductsSearch.GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            const suggestions = action.payload;
            return Object.assign({}, state, { suggestions });
        }
        case fromProductsSearch.CLEAR_PRODUCT_SEARCH_RESULT: {
            return Object.assign({}, state, { results: action.payload.clearPageResults ? {} : state.results, suggestions: action.payload.clearSearchboxResults
                    ? []
                    : state.suggestions, auxResults: action.payload.clearSearchboxResults
                    ? {}
                    : state.auxResults });
        }
    }
    return state;
}
/** @type {?} */
export const getSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.results);
/** @type {?} */
export const getAuxSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.auxResults);
/** @type {?} */
export const getProductSuggestions = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.suggestions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHdkUsTUFBTSxPQUFPLFlBQVksR0FBd0I7SUFDL0MsT0FBTyxFQUFFLEVBQUU7SUFDWCxXQUFXLEVBQUUsRUFBRTtJQUNmLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUN6QyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87O2tCQUN4QixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFO1lBQ3BFLHlCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7a0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQseUJBQ0ssS0FBSyxJQUNSLFdBQVcsSUFDWDtTQUNIO1FBRUQsS0FBSyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ25ELHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUM3RCxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUI7b0JBQy9DLENBQUMsQ0FBQyxFQUFFO29CQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUNyQixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUI7b0JBQzlDLENBQUMsQ0FBQyxFQUFFO29CQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUNwQjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7OztBQUFHLENBQzlCLEtBQTBCLEVBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7O0FBQ3JDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7QUFBRyxDQUNqQyxLQUEwQixFQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBOztBQUN4QyxNQUFNLE9BQU8scUJBQXFCOzs7O0FBQUcsQ0FDbkMsS0FBMEIsRUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdHNTZWFyY2ggZnJvbSAnLi4vYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24nO1xuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdHNTZWFyY2guUHJvZHVjdFNlYXJjaEFjdGlvblxuKTogUHJvZHVjdHNTZWFyY2hTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5TRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcmVzID0gYWN0aW9uLmF1eGlsaWFyeSA/IHsgYXV4UmVzdWx0czogcmVzdWx0cyB9IDogeyByZXN1bHRzIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucmVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfUkVTVUxUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0czogYWN0aW9uLnBheWxvYWQuY2xlYXJQYWdlUmVzdWx0cyA/IHt9IDogc3RhdGUucmVzdWx0cyxcbiAgICAgICAgc3VnZ2VzdGlvbnM6IGFjdGlvbi5wYXlsb2FkLmNsZWFyU2VhcmNoYm94UmVzdWx0c1xuICAgICAgICAgID8gW11cbiAgICAgICAgICA6IHN0YXRlLnN1Z2dlc3Rpb25zLFxuICAgICAgICBhdXhSZXN1bHRzOiBhY3Rpb24ucGF5bG9hZC5jbGVhclNlYXJjaGJveFJlc3VsdHNcbiAgICAgICAgICA/IHt9XG4gICAgICAgICAgOiBzdGF0ZS5hdXhSZXN1bHRzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLnJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0QXV4U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLmF1eFJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogU3VnZ2VzdGlvbltdID0+IHN0YXRlLnN1Z2dlc3Rpb25zO1xuIl19