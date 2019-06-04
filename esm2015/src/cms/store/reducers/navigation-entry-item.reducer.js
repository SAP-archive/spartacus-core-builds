/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                const newItem = components.reduce((compItems, component) => {
                    return Object.assign({}, compItems, { [`${component.uid}_AbstractCMSComponent`]: component });
                }, Object.assign({}));
                return Object.assign({}, state, newItem);
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0seUNBQXlDLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxZQUFZLEdBQWEsU0FBUzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW9EO0lBRXBELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDckQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7c0JBQ3ZCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7O3NCQUN0QyxPQUFPLEdBQWEsVUFBVSxDQUFDLE1BQU0sQ0FDekMsQ0FBQyxTQUFzQyxFQUFFLFNBQWMsRUFBRSxFQUFFO29CQUN6RCx5QkFDSyxTQUFTLElBQ1osQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxJQUNwRDtnQkFDSixDQUFDLGdCQUVJLEVBQUUsRUFFUjtnQkFFRCx5QkFDSyxLQUFLLEVBQ0wsT0FBTyxFQUNWO2FBQ0g7U0FDRjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbU5hdmlnYXRpb25JdGVtIGZyb20gJy4uL2FjdGlvbnMvbmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IE5vZGVJdGVtID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbU5hdmlnYXRpb25JdGVtLk5hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb25cbik6IE5vZGVJdGVtIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU5hdmlnYXRpb25JdGVtLkxPQURfTkFWSUdBVElPTl9JVEVNU19TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cykge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cztcbiAgICAgICAgY29uc3QgbmV3SXRlbTogTm9kZUl0ZW0gPSBjb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoY29tcEl0ZW1zOiB7IFt1aWRfdHlwZTogc3RyaW5nXTogYW55IH0sIGNvbXBvbmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5jb21wSXRlbXMsXG4gICAgICAgICAgICAgIFtgJHtjb21wb25lbnQudWlkfV9BYnN0cmFjdENNU0NvbXBvbmVudGBdOiBjb21wb25lbnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ue30sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4ubmV3SXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=