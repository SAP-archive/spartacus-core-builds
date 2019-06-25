/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CheckoutActions } from '../actions/index';
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
        case CheckoutActions.VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            var results = action.payload;
            return tslib_1.__assign({}, state, { results: results });
        }
        case CheckoutActions.VERIFY_ADDRESS_FAIL: {
            return tslib_1.__assign({}, state, { results: 'FAIL' });
        }
        case CheckoutActions.CLEAR_ADDRESS_VERIFICATION_RESULTS: {
            return tslib_1.__assign({}, state, { results: {} });
        }
    }
    return state;
}
/** @type {?} */
export var getAddressVerificationResults = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.results; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUduRCxNQUFNLEtBQU8sWUFBWSxHQUE2QjtJQUNwRCxPQUFPLEVBQUUsRUFBRTtDQUNaOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFrRDtJQURsRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7Z0JBQ3JDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUU5Qiw0QkFDSyxLQUFLLElBQ1IsT0FBTyxTQUFBLElBQ1A7U0FDSDtRQUVELEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxNQUFNLElBQ2Y7U0FDSDtRQUVELEtBQUssZUFBZSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDdkQsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxFQUFFLElBQ1g7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUMzQyxLQUErQixJQUM1QixPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSA9IHtcbiAgcmVzdWx0czoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkFkZHJlc3NWZXJpZmljYXRpb25BY3Rpb25zXG4pOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuVkVSSUZZX0FERFJFU1NfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzdWx0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuVkVSSUZZX0FERFJFU1NfRkFJTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHM6ICdGQUlMJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0xFQVJfQUREUkVTU19WRVJJRklDQVRJT05fUkVTVUxUUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHM6IHt9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyA9IChcbiAgc3RhdGU6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZVxuKSA9PiBzdGF0ZS5yZXN1bHRzO1xuIl19