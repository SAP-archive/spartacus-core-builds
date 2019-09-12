/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CmsActions } from '../actions/index';
/** @type {?} */
export var initialState = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                /** @type {?} */
                var components = action.payload.components;
                /** @type {?} */
                var newItem = components.reduce((/**
                 * @param {?} compItems
                 * @param {?} component
                 * @return {?}
                 */
                function (compItems, component) {
                    var _a;
                    return tslib_1.__assign({}, compItems, (_a = {}, _a[component.uid + "_AbstractCMSComponent"] = component, _a));
                }), tslib_1.__assign({}));
                return tslib_1.__assign({}, state, newItem);
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUU5QyxNQUFNLEtBQU8sWUFBWSxHQUFhLFNBQVM7Ozs7OztBQUUvQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUErQztJQUQvQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUNqRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztvQkFDdkIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVTs7b0JBQ3RDLE9BQU8sR0FBYSxVQUFVLENBQUMsTUFBTTs7Ozs7Z0JBQ3pDLFVBQUMsU0FBc0MsRUFBRSxTQUFjOztvQkFDckQsNEJBQ0ssU0FBUyxlQUNSLFNBQVMsQ0FBQyxHQUFHLDBCQUF1QixJQUFHLFNBQVMsT0FDcEQ7Z0JBQ0osQ0FBQyxvQkFFSSxFQUFFLEVBRVI7Z0JBRUQsNEJBQ0ssS0FBSyxFQUNMLE9BQU8sRUFDVjthQUNIO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTm9kZUl0ZW0gPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDbXNBY3Rpb25zLkNtc05hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb25cbik6IE5vZGVJdGVtIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5jb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBhY3Rpb24ucGF5bG9hZC5jb21wb25lbnRzO1xuICAgICAgICBjb25zdCBuZXdJdGVtOiBOb2RlSXRlbSA9IGNvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChjb21wSXRlbXM6IHsgW3VpZF90eXBlOiBzdHJpbmddOiBhbnkgfSwgY29tcG9uZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmNvbXBJdGVtcyxcbiAgICAgICAgICAgICAgW2Ake2NvbXBvbmVudC51aWR9X0Fic3RyYWN0Q01TQ29tcG9uZW50YF06IGNvbXBvbmVudCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi57fSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5uZXdJdGVtLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==