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
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTREO0lBRTVELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztrQkFDOUIsUUFBUSxHQUFhLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUTs7a0JBQzVDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDOUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1oseUJBQ0ssS0FBSyxJQUNSLFFBQVE7b0JBQ1IsT0FBTyxJQUNQO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lvbnNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IFtdLFxuICBjb3VudHJ5OiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uUmVnaW9uc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2xlYXJNaXNjc0RhdGFcbik6IFJlZ2lvbnNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9SRUdJT05TX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzOiBSZWdpb25bXSA9IGFjdGlvbi5wYXlsb2FkLmVudGl0aWVzO1xuICAgICAgY29uc3QgY291bnRyeTogc3RyaW5nID0gYWN0aW9uLnBheWxvYWQuY291bnRyeTtcbiAgICAgIGlmIChlbnRpdGllcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzLFxuICAgICAgICAgIGNvdW50cnksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==