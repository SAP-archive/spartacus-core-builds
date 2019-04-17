/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const getAddressVerificationResults = (state) => state.results;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUE2QjtJQUNwRCxPQUFPLEVBQUUsRUFBRTtDQUNaOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUE2QztJQUU3QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUU5Qix5QkFDSyxLQUFLLElBQ1IsT0FBTyxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxJQUNmO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsRUFBRSxJQUNYO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsQ0FDM0MsS0FBK0IsRUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSB9IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlID0ge1xuICByZXN1bHRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkFkZHJlc3NWZXJpZmljYXRpb25BY3Rpb25zXG4pOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLlZFUklGWV9BRERSRVNTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5WRVJJRllfQUREUkVTU19GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0czogJ0ZBSUwnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uQ0xFQVJfQUREUkVTU19WRVJJRklDQVRJT05fUkVTVUxUUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHM6IHt9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyA9IChcbiAgc3RhdGU6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZVxuKSA9PiBzdGF0ZS5yZXN1bHRzO1xuIl19