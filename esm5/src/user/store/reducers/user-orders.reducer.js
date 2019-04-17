/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromUserOrdersAction from '../actions/user-orders.action';
/** @type {?} */
export var initialState = {
    orders: [],
    pagination: {},
    sorts: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromUserOrdersAction.LOAD_USER_ORDERS_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
        case fromUserOrdersAction.LOAD_USER_ORDERS_FAIL: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3VzZXItb3JkZXJzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHdEUsTUFBTSxLQUFPLFlBQVksR0FBcUI7SUFDNUMsTUFBTSxFQUFFLEVBQUU7SUFDVixVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBRSxFQUFFO0NBQ1Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTZDO0lBRDdDLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7UUFDRCxLQUFLLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0MsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21Vc2VyT3JkZXJzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1vcmRlcnMuYWN0aW9uJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9vY2MnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBPcmRlckhpc3RvcnlMaXN0ID0ge1xuICBvcmRlcnM6IFtdLFxuICBwYWdpbmF0aW9uOiB7fSxcbiAgc29ydHM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21Vc2VyT3JkZXJzQWN0aW9uLlVzZXJPcmRlcnNBY3Rpb25cbik6IE9yZGVySGlzdG9yeUxpc3Qge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tVXNlck9yZGVyc0FjdGlvbi5MT0FEX1VTRVJfT1JERVJTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkIDogaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgICBjYXNlIGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxPQURfVVNFUl9PUkRFUlNfRkFJTDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=