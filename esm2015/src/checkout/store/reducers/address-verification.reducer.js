/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
/** @type {?} */
export const initialState = {
    results: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            return Object.assign({}, state, { results });
        }
        case fromAction.VERIFY_ADDRESS_FAIL: {
            return Object.assign({}, state, { results: 'FAIL' });
        }
        case fromAction.CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return Object.assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
export const getAddressVerificationResults = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.results);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUE2QjtJQUNwRCxPQUFPLEVBQUUsRUFBRTtDQUNaOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE2QztJQUU3QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUU5Qix5QkFDSyxLQUFLLElBQ1IsT0FBTyxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxJQUNmO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsRUFBRSxJQUNYO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQUcsQ0FDM0MsS0FBK0IsRUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUgPSB7XG4gIHJlc3VsdHM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb24uQWRkcmVzc1ZlcmlmaWNhdGlvbkFjdGlvbnNcbik6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uVkVSSUZZX0FERFJFU1NfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlZFUklGWV9BRERSRVNTX0ZBSUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiAnRkFJTCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DTEVBUl9BRERSRVNTX1ZFUklGSUNBVElPTl9SRVNVTFRTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0czoge30sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzID0gKFxuICBzdGF0ZTogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlXG4pID0+IHN0YXRlLnJlc3VsdHM7XG4iXX0=