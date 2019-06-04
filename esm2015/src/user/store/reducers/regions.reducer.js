/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
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
        case fromAction.LOAD_REGIONS_SUCCESS: {
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
        case fromAction.LOAD_REGIONS: {
            return Object.assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTREO0lBRTVELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztrQkFDOUIsUUFBUSxHQUFhLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUTs7a0JBQzVDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDOUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1oseUJBQ0ssS0FBSyxJQUNSLFFBQVE7b0JBQ1IsT0FBTyxJQUNQO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVCLHlCQUNLLEtBQUssRUFDUjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpb25zU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaW9uc1N0YXRlID0ge1xuICBlbnRpdGllczogW10sXG4gIGNvdW50cnk6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5SZWdpb25zQWN0aW9uIHwgZnJvbUFjdGlvbi5DbGVhck1pc2NzRGF0YVxuKTogUmVnaW9uc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1JFR0lPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZW50aXRpZXM6IFJlZ2lvbltdID0gYWN0aW9uLnBheWxvYWQuZW50aXRpZXM7XG4gICAgICBjb25zdCBjb3VudHJ5OiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZC5jb3VudHJ5O1xuICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXMsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUkVHSU9OUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==