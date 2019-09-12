/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UserActions } from '../actions/index';
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
        case UserActions.LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload.entities;
            /** @type {?} */
            var country = action.payload.country;
            if (entities || country) {
                return tslib_1.__assign({}, state, { entities: entities,
                    country: country });
            }
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLEtBQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQWtFO0lBRGxFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztnQkFDL0IsUUFBUSxHQUFhLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUTs7Z0JBQzVDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDOUMsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUN2Qiw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBO29CQUNSLE9BQU8sU0FBQSxJQUNQO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaW9uc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lvbnNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IFtdLFxuICBjb3VudHJ5OiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLlJlZ2lvbnNBY3Rpb24gfCBVc2VyQWN0aW9ucy5DbGVhclVzZXJNaXNjc0RhdGFcbik6IFJlZ2lvbnNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfUkVHSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBlbnRpdGllczogUmVnaW9uW10gPSBhY3Rpb24ucGF5bG9hZC5lbnRpdGllcztcbiAgICAgIGNvbnN0IGNvdW50cnk6IHN0cmluZyA9IGFjdGlvbi5wYXlsb2FkLmNvdW50cnk7XG4gICAgICBpZiAoZW50aXRpZXMgfHwgY291bnRyeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzLFxuICAgICAgICAgIGNvdW50cnksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==