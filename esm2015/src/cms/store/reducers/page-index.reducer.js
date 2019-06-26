/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CmsActions } from '../actions/index';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
export function reducer(entityType) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialState, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case CmsActions.LOAD_CMS_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case CmsActions.LOAD_CMS_PAGE_DATA_FAIL: {
                    return initialState;
                }
                case CmsActions.CMS_SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
            }
        }
        return state;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFOUMsTUFBTSxPQUFPLFlBQVksR0FBRyxTQUFTOzs7OztBQUVyQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixVQUFrQjtJQVFsQjs7Ozs7SUFBTyxDQUNMLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BR2tDLEVBQzFCLEVBQUU7UUFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3hELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBRUQsS0FBSyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxZQUFZLENBQUM7aUJBQ3JCO2dCQUVELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDdkI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgZW50aXR5VHlwZTogc3RyaW5nXG4pOiAoXG4gIHN0YXRlOiBzdHJpbmcsXG4gIGFjdGlvbjpcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhU3VjY2Vzc1xuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFGYWlsXG4gICAgfCBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXhcbikgPT4gc3RyaW5nIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhU3VjY2Vzc1xuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YUZhaWxcbiAgICAgIHwgQ21zQWN0aW9ucy5DbXNTZXRQYWdlRmFpbEluZGV4XG4gICk6IHN0cmluZyA9PiB7XG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUpIHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX1BBR0VfREFUQV9TVUNDRVNTOiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnBhZ2VJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19QQUdFX0RBVEFfRkFJTDoge1xuICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENtc0FjdGlvbnMuQ01TX1NFVF9QQUdFX0ZBSUxfSU5ERVg6IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19