/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProductActions } from '../actions/index';
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
        case ProductActions.SEARCH_PRODUCTS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            /** @type {?} */
            var res = action.auxiliary ? { auxResults: results } : { results: results };
            return tslib_1.__assign({}, state, res);
        }
        case ProductActions.GET_PRODUCT_SUGGESTIONS_SUCCESS: {
            /** @type {?} */
            var suggestions = action.payload;
            return tslib_1.__assign({}, state, { suggestions: suggestions });
        }
        case ProductActions.CLEAR_PRODUCT_SEARCH_RESULT: {
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
export var getSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.results; });
/** @type {?} */
export var getAuxSearchResults = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.auxResults; });
/** @type {?} */
export var getProductSuggestions = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.suggestions; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2gucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3Qtc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR2xELE1BQU0sS0FBTyxZQUFZLEdBQXdCO0lBQy9DLE9BQU8sRUFBRSxFQUFFO0lBQ1gsV0FBVyxFQUFFLEVBQUU7SUFDZixVQUFVLEVBQUUsRUFBRTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUEwQztJQUQxQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBQ3JDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTzs7Z0JBQ3hCLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRTtZQUNwRSw0QkFDSyxLQUFLLEVBQ0wsR0FBRyxFQUNOO1NBQ0g7UUFFRCxLQUFLLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOztnQkFDN0MsV0FBVyxHQUFpQixNQUFNLENBQUMsT0FBTztZQUVoRCw0QkFDSyxLQUFLLElBQ1IsV0FBVyxhQUFBLElBQ1g7U0FDSDtRQUVELEtBQUssY0FBYyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDL0MsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzdELFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtvQkFDL0MsQ0FBQyxDQUFDLEVBQUU7b0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ3JCLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtvQkFDOUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQ3BCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCOzs7O0FBQUcsVUFDOUIsS0FBMEIsSUFDSixPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBOztBQUNyQyxNQUFNLEtBQU8sbUJBQW1COzs7O0FBQUcsVUFDakMsS0FBMEIsSUFDSixPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCLENBQUE7O0FBQ3hDLE1BQU0sS0FBTyxxQkFBcUI7Ozs7QUFBRyxVQUNuQyxLQUEwQixJQUNULE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdHNTZWFyY2hTdGF0ZSB9IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbiAgc3VnZ2VzdGlvbnM6IFtdLFxuICBhdXhSZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBQcm9kdWN0QWN0aW9ucy5Qcm9kdWN0U2VhcmNoQWN0aW9uXG4pOiBQcm9kdWN0c1NlYXJjaFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUHJvZHVjdEFjdGlvbnMuU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IHJlcyA9IGFjdGlvbi5hdXhpbGlhcnkgPyB7IGF1eFJlc3VsdHM6IHJlc3VsdHMgfSA6IHsgcmVzdWx0cyB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnJlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5HRVRfUFJPRFVDVF9TVUdHRVNUSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBQcm9kdWN0QWN0aW9ucy5DTEVBUl9QUk9EVUNUX1NFQVJDSF9SRVNVTFQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiBhY3Rpb24ucGF5bG9hZC5jbGVhclBhZ2VSZXN1bHRzID8ge30gOiBzdGF0ZS5yZXN1bHRzLFxuICAgICAgICBzdWdnZXN0aW9uczogYWN0aW9uLnBheWxvYWQuY2xlYXJTZWFyY2hib3hSZXN1bHRzXG4gICAgICAgICAgPyBbXVxuICAgICAgICAgIDogc3RhdGUuc3VnZ2VzdGlvbnMsXG4gICAgICAgIGF1eFJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkLmNsZWFyU2VhcmNoYm94UmVzdWx0c1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHN0YXRlLmF1eFJlc3VsdHMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUucmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRBdXhTZWFyY2hSZXN1bHRzID0gKFxuICBzdGF0ZTogUHJvZHVjdHNTZWFyY2hTdGF0ZVxuKTogUHJvZHVjdFNlYXJjaFBhZ2UgPT4gc3RhdGUuYXV4UmVzdWx0cztcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMgPSAoXG4gIHN0YXRlOiBQcm9kdWN0c1NlYXJjaFN0YXRlXG4pOiBTdWdnZXN0aW9uW10gPT4gc3RhdGUuc3VnZ2VzdGlvbnM7XG4iXX0=