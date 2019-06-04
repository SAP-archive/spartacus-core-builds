/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var getAddressVerificationResults = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.results; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBNkI7SUFDcEQsT0FBTyxFQUFFLEVBQUU7Q0FDWjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBNkM7SUFEN0Msc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFOUIsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sU0FBQSxJQUNQO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25DLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxJQUNmO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsRUFBRSxJQUNYO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQUcsVUFDM0MsS0FBK0IsSUFDNUIsT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEFkZHJlc3NWZXJpZmljYXRpb25TdGF0ZSA9IHtcbiAgcmVzdWx0czoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5BZGRyZXNzVmVyaWZpY2F0aW9uQWN0aW9uc1xuKTogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5WRVJJRllfQUREUkVTU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uVkVSSUZZX0FERFJFU1NfRkFJTDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHM6ICdGQUlMJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNMRUFSX0FERFJFU1NfVkVSSUZJQ0FUSU9OX1JFU1VMVFM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMgPSAoXG4gIHN0YXRlOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGVcbikgPT4gc3RhdGUucmVzdWx0cztcbiJdfQ==