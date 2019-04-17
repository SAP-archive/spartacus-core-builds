/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                var newItem = components.reduce(function (compItems, component) {
                    var _a;
                    return tslib_1.__assign({}, compItems, (_a = {}, _a[component.uid + "_AbstractCMSComponent"] = component, _a));
                }, tslib_1.__assign({}));
                return tslib_1.__assign({}, state, newItem);
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLGtCQUFrQixNQUFNLHlDQUF5QyxDQUFDOztBQUc5RSxNQUFNLEtBQU8sWUFBWSxHQUFhLFNBQVM7Ozs7OztBQUUvQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFvRDtJQURwRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxrQkFBa0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O29CQUN2QixVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVOztvQkFFdEMsT0FBTyxHQUFhLFVBQVUsQ0FBQyxNQUFNLENBQ3pDLFVBQUMsU0FBc0MsRUFBRSxTQUFjOztvQkFDckQsNEJBQ0ssU0FBUyxlQUNSLFNBQVMsQ0FBQyxHQUFHLDBCQUF1QixJQUFHLFNBQVMsT0FDcEQ7Z0JBQ0osQ0FBQyxtQkFFSSxFQUFFLEVBRVI7Z0JBRUQsNEJBQ0ssS0FBSyxFQUNMLE9BQU8sRUFDVjthQUNIO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21OYXZpZ2F0aW9uSXRlbSBmcm9tICcuLi9hY3Rpb25zL25hdmlnYXRpb24tZW50cnktaXRlbS5hY3Rpb24nO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBOb2RlSXRlbSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21OYXZpZ2F0aW9uSXRlbS5OYXZpZ2F0aW9uRW50cnlJdGVtQWN0aW9uXG4pOiBOb2RlSXRlbSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21OYXZpZ2F0aW9uSXRlbS5MT0FEX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmNvbXBvbmVudHMpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGFjdGlvbi5wYXlsb2FkLmNvbXBvbmVudHM7XG5cbiAgICAgICAgY29uc3QgbmV3SXRlbTogTm9kZUl0ZW0gPSBjb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoY29tcEl0ZW1zOiB7IFt1aWRfdHlwZTogc3RyaW5nXTogYW55IH0sIGNvbXBvbmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5jb21wSXRlbXMsXG4gICAgICAgICAgICAgIFtgJHtjb21wb25lbnQudWlkfV9BYnN0cmFjdENNU0NvbXBvbmVudGBdOiBjb21wb25lbnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ue30sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4ubmV3SXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=