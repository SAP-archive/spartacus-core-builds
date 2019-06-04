/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromNavigationItem from '../actions/navigation-entry-item.action';
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
        case fromNavigationItem.LOAD_NAVIGATION_ITEMS_SUCCESS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxLQUFLLGtCQUFrQixNQUFNLHlDQUF5QyxDQUFDOztBQUU5RSxNQUFNLEtBQU8sWUFBWSxHQUFhLFNBQVM7Ozs7OztBQUUvQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFvRDtJQURwRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O29CQUN2QixVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVOztvQkFDdEMsT0FBTyxHQUFhLFVBQVUsQ0FBQyxNQUFNOzs7OztnQkFDekMsVUFBQyxTQUFzQyxFQUFFLFNBQWM7O29CQUNyRCw0QkFDSyxTQUFTLGVBQ1IsU0FBUyxDQUFDLEdBQUcsMEJBQXVCLElBQUcsU0FBUyxPQUNwRDtnQkFDSixDQUFDLG9CQUVJLEVBQUUsRUFFUjtnQkFFRCw0QkFDSyxLQUFLLEVBQ0wsT0FBTyxFQUNWO2FBQ0g7U0FDRjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbU5hdmlnYXRpb25JdGVtIGZyb20gJy4uL2FjdGlvbnMvbmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IE5vZGVJdGVtID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbU5hdmlnYXRpb25JdGVtLk5hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb25cbik6IE5vZGVJdGVtIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU5hdmlnYXRpb25JdGVtLkxPQURfTkFWSUdBVElPTl9JVEVNU19TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cykge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cztcbiAgICAgICAgY29uc3QgbmV3SXRlbTogTm9kZUl0ZW0gPSBjb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoY29tcEl0ZW1zOiB7IFt1aWRfdHlwZTogc3RyaW5nXTogYW55IH0sIGNvbXBvbmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5jb21wSXRlbXMsXG4gICAgICAgICAgICAgIFtgJHtjb21wb25lbnQudWlkfV9BYnN0cmFjdENNU0NvbXBvbmVudGBdOiBjb21wb25lbnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ue30sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4ubmV3SXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=