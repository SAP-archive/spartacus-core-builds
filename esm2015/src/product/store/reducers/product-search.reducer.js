/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        case fromProductsSearch.CLEAN_PRODUCT_SEARCH: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export const getSearchResults = (state) => state.results;
/** @type {?} */
export const getAuxSearchResults = (state) => state.auxResults;
/** @type {?} */
export const getProductSuggestions = (state) => state.suggestions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHdkUsTUFBTSxPQUFPLFlBQVksR0FBd0I7SUFDL0MsT0FBTyxFQUFFLEVBQUU7SUFDWCxXQUFXLEVBQUUsRUFBRTtJQUNmLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUN6QyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87O2tCQUN4QixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFO1lBQ3BFLHlCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7a0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQseUJBQ0ssS0FBSyxJQUNSLFdBQVcsSUFDWDtTQUNIO1FBRUQsS0FBSyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLENBQzlCLEtBQTBCLEVBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPOztBQUNyQyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsQ0FDakMsS0FBMEIsRUFDUCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7O0FBQ3hDLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxDQUNuQyxLQUEwQixFQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RzU2VhcmNoU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0c1NlYXJjaCBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBTdWdnZXN0aW9uLCBQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZSA9IHtcbiAgcmVzdWx0czoge30sXG4gIHN1Z2dlc3Rpb25zOiBbXSxcbiAgYXV4UmVzdWx0czoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVByb2R1Y3RzU2VhcmNoLlByb2R1Y3RTZWFyY2hBY3Rpb25cbik6IFByb2R1Y3RzU2VhcmNoU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IHJlcyA9IGFjdGlvbi5hdXhpbGlhcnkgPyB7IGF1eFJlc3VsdHM6IHJlc3VsdHMgfSA6IHsgcmVzdWx0cyB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnJlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25bXSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3VnZ2VzdGlvbnMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVByb2R1Y3RzU2VhcmNoLkNMRUFOX1BST0RVQ1RfU0VBUkNIOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUucmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRBdXhTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=