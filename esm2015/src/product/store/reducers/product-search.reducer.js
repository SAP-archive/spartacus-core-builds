/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProductActions } from '../actions/index';
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
        case ProductActions.SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            /** @type {?} */
            const res = action.auxiliary ? { auxResults: results } : { results };
            return Object.assign({}, state, res);
        }
        case ProductActions.GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            const suggestions = action.payload;
            return Object.assign({}, state, { suggestions });
        }
        case ProductActions.CLEAR_PRODUCT_SEARCH_RESULT: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbEQsTUFBTSxPQUFPLFlBQVksR0FBd0I7SUFDL0MsT0FBTyxFQUFFLEVBQUU7SUFDWCxXQUFXLEVBQUUsRUFBRTtJQUNmLFVBQVUsRUFBRSxFQUFFO0NBQ2Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTBDO0lBRTFDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDckMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPOztrQkFDeEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRTtZQUNwRSx5QkFDSyxLQUFLLEVBQ0wsR0FBRyxFQUNOO1NBQ0g7UUFFRCxLQUFLLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztrQkFDN0MsV0FBVyxHQUFpQixNQUFNLENBQUMsT0FBTztZQUVoRCx5QkFDSyxLQUFLLElBQ1IsV0FBVyxJQUNYO1NBQ0g7UUFFRCxLQUFLLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQy9DLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUM3RCxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUI7b0JBQy9DLENBQUMsQ0FBQyxFQUFFO29CQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUNyQixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUI7b0JBQzlDLENBQUMsQ0FBQyxFQUFFO29CQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUNwQjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxPQUFPLGdCQUFnQjs7OztBQUFHLENBQzlCLEtBQTBCLEVBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7O0FBQ3JDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7QUFBRyxDQUNqQyxLQUEwQixFQUNQLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBOztBQUN4QyxNQUFNLE9BQU8scUJBQXFCOzs7O0FBQUcsQ0FDbkMsS0FBMEIsRUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qcm9kdWN0U2VhcmNoQWN0aW9uXG4pOiBQcm9kdWN0c1NlYXJjaFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IHJlcyA9IGFjdGlvbi5hdXhpbGlhcnkgPyB7IGF1eFJlc3VsdHM6IHJlc3VsdHMgfSA6IHsgcmVzdWx0cyB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnJlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5DTEVBUl9QUk9EVUNUX1NFQVJDSF9SRVNVTFQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiBhY3Rpb24ucGF5bG9hZC5jbGVhclBhZ2VSZXN1bHRzID8ge30gOiBzdGF0ZS5yZXN1bHRzLFxuICAgICAgICBzdWdnZXN0aW9uczogYWN0aW9uLnBheWxvYWQuY2xlYXJTZWFyY2hib3hSZXN1bHRzXG4gICAgICAgICAgPyBbXVxuICAgICAgICAgIDogc3RhdGUuc3VnZ2VzdGlvbnMsXG4gICAgICAgIGF1eFJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkLmNsZWFyU2VhcmNoYm94UmVzdWx0c1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHN0YXRlLmF1eFJlc3VsdHMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUucmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRBdXhTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=