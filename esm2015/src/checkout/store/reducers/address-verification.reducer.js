/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CheckoutActions } from '../actions/index';
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
        case CheckoutActions.VERIFY_ADDRESS_SUCCESS: {
            /** @type {?} */
            const results = action.payload;
            return Object.assign({}, state, { results });
        }
        case CheckoutActions.VERIFY_ADDRESS_FAIL: {
            return Object.assign({}, state, { results: 'FAIL' });
        }
        case CheckoutActions.CLEAR_ADDRESS_VERIFICATION_RESULTS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9hZGRyZXNzLXZlcmlmaWNhdGlvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR25ELE1BQU0sT0FBTyxZQUFZLEdBQTZCO0lBQ3BELE9BQU8sRUFBRSxFQUFFO0NBQ1o7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQWtEO0lBRWxELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztrQkFDckMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBRTlCLHlCQUNLLEtBQUssSUFDUixPQUFPLElBQ1A7U0FDSDtRQUVELEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxNQUFNLElBQ2Y7U0FDSDtRQUVELEtBQUssZUFBZSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDdkQseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxFQUFFLElBQ1g7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyw2QkFBNkI7Ozs7QUFBRyxDQUMzQyxLQUErQixFQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGUgPSB7XG4gIHJlc3VsdHM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5BZGRyZXNzVmVyaWZpY2F0aW9uQWN0aW9uc1xuKTogQWRkcmVzc1ZlcmlmaWNhdGlvblN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlZFUklGWV9BRERSRVNTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3VsdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlZFUklGWV9BRERSRVNTX0ZBSUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiAnRkFJTCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0FERFJFU1NfVkVSSUZJQ0FUSU9OX1JFU1VMVFM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHRzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMgPSAoXG4gIHN0YXRlOiBBZGRyZXNzVmVyaWZpY2F0aW9uU3RhdGVcbikgPT4gc3RhdGUucmVzdWx0cztcbiJdfQ==