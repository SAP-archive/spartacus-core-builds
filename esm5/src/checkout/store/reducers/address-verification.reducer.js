/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    results: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            return tslib_1.__assign({}, state, { results: results });
        }
        case fromAction.VERIFY_ADDRESS_FAIL: {
            return tslib_1.__assign({}, state, { results: 'FAIL' });
        }
        case fromAction.CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return tslib_1.__assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
export var getAddressVerificationResults = function (state) { return state.results; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBNkI7SUFDcEQsT0FBTyxFQUFFLEVBQUU7Q0FDWjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBNkM7SUFEN0Msc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFOUIsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sU0FBQSxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxJQUNmO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsRUFBRSxJQUNYO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCLEdBQUcsVUFDM0MsS0FBK0IsSUFDNUIsT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUgPSB7XG4gIHJlc3VsdHM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uQWRkcmVzc1ZlcmlmaWNhdGlvbkFjdGlvbnNcbik6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uVkVSSUZZX0FERFJFU1NfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlZFUklGWV9BRERSRVNTX0ZBSUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiAnRkFJTCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DTEVBUl9BRERSRVNTX1ZFUklGSUNBVElPTl9SRVNVTFRTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0czoge30sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzID0gKFxuICBzdGF0ZTogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlXG4pID0+IHN0YXRlLnJlc3VsdHM7XG4iXX0=