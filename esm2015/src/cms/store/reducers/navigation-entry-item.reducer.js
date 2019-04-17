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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL25hdmlnYXRpb24tZW50cnktaXRlbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssa0JBQWtCLE1BQU0seUNBQXlDLENBQUM7O0FBRzlFLE1BQU0sT0FBTyxZQUFZLEdBQWEsU0FBUzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW9EO0lBRXBELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDckQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7c0JBQ3ZCLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7O3NCQUV0QyxPQUFPLEdBQWEsVUFBVSxDQUFDLE1BQU0sQ0FDekMsQ0FBQyxTQUFzQyxFQUFFLFNBQWMsRUFBRSxFQUFFO29CQUN6RCx5QkFDSyxTQUFTLElBQ1osQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxJQUNwRDtnQkFDSixDQUFDLGdCQUVJLEVBQUUsRUFFUjtnQkFFRCx5QkFDSyxLQUFLLEVBQ0wsT0FBTyxFQUNWO2FBQ0g7U0FDRjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbU5hdmlnYXRpb25JdGVtIGZyb20gJy4uL2FjdGlvbnMvbmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbic7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uLy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IE5vZGVJdGVtID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbU5hdmlnYXRpb25JdGVtLk5hdmlnYXRpb25FbnRyeUl0ZW1BY3Rpb25cbik6IE5vZGVJdGVtIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbU5hdmlnYXRpb25JdGVtLkxPQURfTkFWSUdBVElPTl9JVEVNU19TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cykge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gYWN0aW9uLnBheWxvYWQuY29tcG9uZW50cztcblxuICAgICAgICBjb25zdCBuZXdJdGVtOiBOb2RlSXRlbSA9IGNvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChjb21wSXRlbXM6IHsgW3VpZF90eXBlOiBzdHJpbmddOiBhbnkgfSwgY29tcG9uZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmNvbXBJdGVtcyxcbiAgICAgICAgICAgICAgW2Ake2NvbXBvbmVudC51aWR9X0Fic3RyYWN0Q01TQ29tcG9uZW50YF06IGNvbXBvbmVudCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi57fSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5uZXdJdGVtLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==