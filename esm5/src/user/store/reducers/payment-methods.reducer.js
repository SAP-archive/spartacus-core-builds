/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromPaymentMethodsAction from '../actions/payment-methods.action';
/** @type {?} */
export var initialState = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
        case fromPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS_FAIL: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9wYXltZW50LW1ldGhvZHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLHdCQUF3QixNQUFNLG1DQUFtQyxDQUFDOztBQUc5RSxNQUFNLEtBQU8sWUFBWSxHQUFxQixFQUFFOzs7Ozs7QUFFaEQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBeUQ7SUFEekQsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssd0JBQXdCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUMvRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtRQUVELEtBQUssd0JBQXdCLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM1RCxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbVBheW1lbnRNZXRob2RzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvcGF5bWVudC1tZXRob2RzLmFjdGlvbic7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUGF5bWVudERldGFpbHNbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVBheW1lbnRNZXRob2RzQWN0aW9uLlVzZXJQYXltZW50TWV0aG9kc0FjdGlvblxuKTogUGF5bWVudERldGFpbHNbXSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21QYXltZW50TWV0aG9kc0FjdGlvbi5MT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkIDogaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbVBheW1lbnRNZXRob2RzQWN0aW9uLkxPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19