/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: [],
    country: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload.entities;
            /** @type {?} */
            var country = action.payload.country;
            if (entities) {
                return tslib_1.__assign({}, state, { entities: entities,
                    country: country });
            }
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBaUI7SUFDeEMsUUFBUSxFQUFFLEVBQUU7SUFDWixPQUFPLEVBQUUsSUFBSTtDQUNkOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUE0RDtJQUQ1RCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7Z0JBQzlCLFFBQVEsR0FBYSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7O2dCQUM1QyxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQzlDLElBQUksUUFBUSxFQUFFO2dCQUNaLDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUE7b0JBQ1IsT0FBTyxTQUFBLElBQ1A7YUFDSDtZQUNELE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpb25zU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaW9uc1N0YXRlID0ge1xuICBlbnRpdGllczogW10sXG4gIGNvdW50cnk6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5SZWdpb25zQWN0aW9uIHwgZnJvbUFjdGlvbi5DbGVhck1pc2NzRGF0YVxuKTogUmVnaW9uc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1JFR0lPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZW50aXRpZXM6IFJlZ2lvbltdID0gYWN0aW9uLnBheWxvYWQuZW50aXRpZXM7XG4gICAgICBjb25zdCBjb3VudHJ5OiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZC5jb3VudHJ5O1xuICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXMsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19