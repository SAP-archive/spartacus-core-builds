/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
/** @type {?} */
export const initialState = {
    entities: [],
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
            const entities = action.payload;
            if (entities) {
                return Object.assign({}, state, { entities });
            }
            return initialState;
        }
        case fromAction.LOAD_REGIONS: {
            return Object.assign({}, state);
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return Object.assign({}, initialState);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE0RDtJQUU1RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7a0JBQzlCLFFBQVEsR0FBYSxNQUFNLENBQUMsT0FBTztZQUN6QyxJQUFJLFFBQVEsRUFBRTtnQkFDWix5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVCLHlCQUNLLEtBQUssRUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyx5QkFDSyxZQUFZLEVBQ2Y7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpb25zU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLlJlZ2lvbnNBY3Rpb24gfCBmcm9tQWN0aW9uLkNsZWFyTWlzY3NEYXRhXG4pOiBSZWdpb25zU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkxPQURfUkVHSU9OU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBlbnRpdGllczogUmVnaW9uW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmIChlbnRpdGllcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9SRUdJT05TOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19