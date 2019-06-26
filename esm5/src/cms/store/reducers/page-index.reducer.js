/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CmsActions } from '../actions/index';
/** @type {?} */
export var initialState = undefined;
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
    function (state, action) {
        if (state === void 0) { state = initialState; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFOUMsTUFBTSxLQUFPLFlBQVksR0FBRyxTQUFTOzs7OztBQUVyQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixVQUFrQjtJQVFsQjs7Ozs7SUFBTyxVQUNMLEtBQW9CLEVBQ3BCLE1BR2tDO1FBSmxDLHNCQUFBLEVBQUEsb0JBQW9CO1FBTXBCLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDeEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2lCQUM5QjtnQkFFRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLFlBQVksQ0FBQztpQkFDckI7Z0JBRUQsS0FBSyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IChcbiAgc3RhdGU6IHN0cmluZyxcbiAgYWN0aW9uOlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YUZhaWxcbiAgICB8IENtc0FjdGlvbnMuQ21zU2V0UGFnZUZhaWxJbmRleFxuKSA9PiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjpcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhRmFpbFxuICAgICAgfCBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXhcbiAgKTogc3RyaW5nID0+IHtcbiAgICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSkge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1M6IHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucGFnZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX1BBR0VfREFUQV9GQUlMOiB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ21zQWN0aW9ucy5DTVNfU0VUX1BBR0VfRkFJTF9JTkRFWDoge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=