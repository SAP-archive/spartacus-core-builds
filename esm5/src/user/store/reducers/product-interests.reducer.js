/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    results: [],
    pagination: {},
    sorts: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActions.LOAD_PRODUCT_INTERESTS_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
        case UserActions.LOAD_PRODUCT_INTERESTS_FAIL: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3Byb2R1Y3QtaW50ZXJlc3RzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBZ0M7SUFDdkQsT0FBTyxFQUFFLEVBQUU7SUFDWCxVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBRSxFQUFFO0NBQ1Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTBDO0lBRDFDLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO1FBQ0QsS0FBSyxXQUFXLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUM1QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QtaW50ZXJlc3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgPSB7XG4gIHJlc3VsdHM6IFtdLFxuICBwYWdpbmF0aW9uOiB7fSxcbiAgc29ydHM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLlByb2R1Y3RJbnRlcmVzdHNBY3Rpb25cbik6IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfUFJPRFVDVF9JTlRFUkVTVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9QUk9EVUNUX0lOVEVSRVNUU19GQUlMOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=