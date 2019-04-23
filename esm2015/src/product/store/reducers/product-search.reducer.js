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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFJdkUsTUFBTSxPQUFPLFlBQVksR0FBd0I7SUFDL0MsT0FBTyxFQUFFLEVBQUU7SUFDWCxXQUFXLEVBQUUsRUFBRTtJQUNmLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUN6QyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87O2tCQUN4QixHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFO1lBQ3BFLHlCQUNLLEtBQUssRUFDTCxHQUFHLEVBQ047U0FDSDtRQUVELEtBQUssa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7a0JBQ2pELFdBQVcsR0FBaUIsTUFBTSxDQUFDLE9BQU87WUFFaEQseUJBQ0ssS0FBSyxJQUNSLFdBQVcsSUFDWDtTQUNIO1FBRUQsS0FBSyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLENBQzlCLEtBQTBCLEVBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPOztBQUN2QyxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsQ0FDakMsS0FBMEIsRUFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7O0FBQzFDLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxDQUNuQyxLQUEwQixFQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RzU2VhcmNoU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Qcm9kdWN0c1NlYXJjaCBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3Qtc2VhcmNoLmFjdGlvbic7XG5pbXBvcnQgeyBTdWdnZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgVUlQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLXBhZ2UnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tUHJvZHVjdHNTZWFyY2guUHJvZHVjdFNlYXJjaEFjdGlvblxuKTogUHJvZHVjdHNTZWFyY2hTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5TRUFSQ0hfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcmVzID0gYWN0aW9uLmF1eGlsaWFyeSA/IHsgYXV4UmVzdWx0czogcmVzdWx0cyB9IDogeyByZXN1bHRzIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucmVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21Qcm9kdWN0c1NlYXJjaC5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tUHJvZHVjdHNTZWFyY2guQ0xFQU5fUFJPRFVDVF9TRUFSQ0g6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFJlc3VsdHMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBVSVByb2R1Y3RTZWFyY2hQYWdlID0+IHN0YXRlLnJlc3VsdHM7XG5leHBvcnQgY29uc3QgZ2V0QXV4U2VhcmNoUmVzdWx0cyA9IChcbiAgc3RhdGU6IFByb2R1Y3RzU2VhcmNoU3RhdGVcbik6IFVJUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=