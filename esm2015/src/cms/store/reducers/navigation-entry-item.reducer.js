/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromNavigationItem from '../actions/navigation-entry-item.action';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromNavigationItem.LOAD_NAVIGATION_ITEMS_SUCCESS: {
            if (action.payload.components) {
                /** @type {?} */
                const components = action.payload.components;
                /** @type {?} */
                const newItem = components.reduce((/**
                 * @param {?} compItems
                 * @param {?} component
                 * @return {?}
                 */
                (compItems, component) => {
                    return Object.assign({}, compItems, { [`${component.uid}_AbstractCMSComponent`]: component });
                }), Object.assign({}));
                return Object.assign({}, state, newItem);
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0seUNBQXlDLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxZQUFZLEdBQWEsU0FBUzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW9EO0lBRXBELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDckQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7c0JBQ3ZCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7O3NCQUN0QyxPQUFPLEdBQWEsVUFBVSxDQUFDLE1BQU07Ozs7O2dCQUN6QyxDQUFDLFNBQXNDLEVBQUUsU0FBYyxFQUFFLEVBQUU7b0JBQ3pELHlCQUNLLFNBQVMsSUFDWixDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxTQUFTLElBQ3BEO2dCQUNKLENBQUMsaUJBRUksRUFBRSxFQUVSO2dCQUVELHlCQUNLLEtBQUssRUFDTCxPQUFPLEVBQ1Y7YUFDSDtTQUNGO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uLy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTm9kZUl0ZW0gPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tTmF2aWdhdGlvbkl0ZW0uTmF2aWdhdGlvbkVudHJ5SXRlbUFjdGlvblxuKTogTm9kZUl0ZW0ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tTmF2aWdhdGlvbkl0ZW0uTE9BRF9OQVZJR0FUSU9OX0lURU1TX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5jb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBhY3Rpb24ucGF5bG9hZC5jb21wb25lbnRzO1xuICAgICAgICBjb25zdCBuZXdJdGVtOiBOb2RlSXRlbSA9IGNvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChjb21wSXRlbXM6IHsgW3VpZF90eXBlOiBzdHJpbmddOiBhbnkgfSwgY29tcG9uZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmNvbXBJdGVtcyxcbiAgICAgICAgICAgICAgW2Ake2NvbXBvbmVudC51aWR9X0Fic3RyYWN0Q01TQ29tcG9uZW50YF06IGNvbXBvbmVudCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi57fSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5uZXdJdGVtLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==