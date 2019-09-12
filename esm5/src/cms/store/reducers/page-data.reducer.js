/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CmsActions } from '../actions/index';
/** @type {?} */
export var initialState = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    var _a;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_PAGE_DATA_SUCCESS: {
            /** @type {?} */
            var page = action.payload;
            return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[page.pageId] = page, _a)) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1kYXRhLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL3BhZ2UtZGF0YS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUU5QyxNQUFNLEtBQU8sWUFBWSxHQUFzQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Ozs7OztBQUUvRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUF5Qzs7SUFEekMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2dCQUNwQyxJQUFJLEdBQVMsTUFBTSxDQUFDLE9BQU87WUFDakMsNEJBQVksS0FBSyxJQUFFLFFBQVEsdUJBQU8sS0FBSyxDQUFDLFFBQVEsZUFBRyxJQUFJLENBQUMsTUFBTSxJQUFHLElBQUksVUFBSztTQUMzRTtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRW50aXR5U3RhdGU8UGFnZT4gPSB7IGVudGl0aWVzOiB7fSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGFTdWNjZXNzXG4pOiBFbnRpdHlTdGF0ZTxQYWdlPiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfUEFHRV9EQVRBX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbnRpdGllczogeyAuLi5zdGF0ZS5lbnRpdGllcywgW3BhZ2UucGFnZUlkXTogcGFnZSB9IH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==