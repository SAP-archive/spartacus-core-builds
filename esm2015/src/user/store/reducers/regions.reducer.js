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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE0RDtJQUU1RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7a0JBQzlCLFFBQVEsR0FBYSxNQUFNLENBQUMsT0FBTztZQUN6QyxJQUFJLFFBQVEsRUFBRTtnQkFDWix5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVCLHlCQUNLLEtBQUssRUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyx5QkFDSyxZQUFZLEVBQ2Y7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lvbnNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uUmVnaW9uc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2xlYXJNaXNjc0RhdGFcbik6IFJlZ2lvbnNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9SRUdJT05TX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzOiBSZWdpb25bXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1JFR0lPTlM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=