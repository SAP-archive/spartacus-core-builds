/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: [],
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
            var entities = action.payload;
            if (entities) {
                return tslib_1.__assign({}, state, { entities: entities });
            }
            return initialState;
        }
        case fromAction.LOAD_REGIONS: {
            return tslib_1.__assign({}, state);
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return tslib_1.__assign({}, initialState);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBaUI7SUFDeEMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBNEQ7SUFENUQsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O2dCQUM5QixRQUFRLEdBQWEsTUFBTSxDQUFDLE9BQU87WUFDekMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO2FBQ0g7WUFDRCxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVCLDRCQUNLLEtBQUssRUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyw0QkFDSyxZQUFZLEVBQ2Y7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaW9uc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lvbnNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uUmVnaW9uc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2xlYXJNaXNjc0RhdGFcbik6IFJlZ2lvbnNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9SRUdJT05TX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzOiBSZWdpb25bXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1JFR0lPTlM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=