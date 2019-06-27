/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export const initialState = {
    entities: [],
    country: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            const entities = action.payload.entities;
            /** @type {?} */
            const country = action.payload.country;
            if (entities) {
                return Object.assign({}, state, { entities,
                    country });
            }
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sT0FBTyxZQUFZLEdBQWlCO0lBQ3hDLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLElBQUk7Q0FDZDs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBa0U7SUFFbEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O2tCQUMvQixRQUFRLEdBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFROztrQkFDNUMsT0FBTyxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM5QyxJQUFJLFFBQVEsRUFBRTtnQkFDWix5QkFDSyxLQUFLLElBQ1IsUUFBUTtvQkFDUixPQUFPLElBQ1A7YUFDSDtZQUNELE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSZWdpb25zU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaW9uc1N0YXRlID0ge1xuICBlbnRpdGllczogW10sXG4gIGNvdW50cnk6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuUmVnaW9uc0FjdGlvbiB8IFVzZXJBY3Rpb25zLkNsZWFyVXNlck1pc2NzRGF0YVxuKTogUmVnaW9uc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9SRUdJT05TX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzOiBSZWdpb25bXSA9IGFjdGlvbi5wYXlsb2FkLmVudGl0aWVzO1xuICAgICAgY29uc3QgY291bnRyeTogc3RyaW5nID0gYWN0aW9uLnBheWxvYWQuY291bnRyeTtcbiAgICAgIGlmIChlbnRpdGllcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzLFxuICAgICAgICAgIGNvdW50cnksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==