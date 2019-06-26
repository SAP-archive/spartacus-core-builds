/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CmsActions } from '../actions/index';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CmsActions.LOAD_CMS_NAVIGATION_ITEMS_SUCCESS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRTlDLE1BQU0sT0FBTyxZQUFZLEdBQWEsU0FBUzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQStDO0lBRS9DLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O3NCQUN2QixVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVOztzQkFDdEMsT0FBTyxHQUFhLFVBQVUsQ0FBQyxNQUFNOzs7OztnQkFDekMsQ0FBQyxTQUFzQyxFQUFFLFNBQWMsRUFBRSxFQUFFO29CQUN6RCx5QkFDSyxTQUFTLElBQ1osQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxJQUNwRDtnQkFDSixDQUFDLGlCQUVJLEVBQUUsRUFFUjtnQkFFRCx5QkFDSyxLQUFLLEVBQ0wsT0FBTyxFQUNWO2FBQ0g7U0FDRjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBOb2RlSXRlbSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENtc0FjdGlvbnMuQ21zTmF2aWdhdGlvbkVudHJ5SXRlbUFjdGlvblxuKTogTm9kZUl0ZW0ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX05BVklHQVRJT05fSVRFTVNfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmNvbXBvbmVudHMpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGFjdGlvbi5wYXlsb2FkLmNvbXBvbmVudHM7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW06IE5vZGVJdGVtID0gY29tcG9uZW50cy5yZWR1Y2UoXG4gICAgICAgICAgKGNvbXBJdGVtczogeyBbdWlkX3R5cGU6IHN0cmluZ106IGFueSB9LCBjb21wb25lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uY29tcEl0ZW1zLFxuICAgICAgICAgICAgICBbYCR7Y29tcG9uZW50LnVpZH1fQWJzdHJhY3RDTVNDb21wb25lbnRgXTogY29tcG9uZW50LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLnt9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIC4uLm5ld0l0ZW0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19