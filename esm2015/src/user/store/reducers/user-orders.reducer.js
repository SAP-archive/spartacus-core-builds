/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromUserOrdersAction from '../actions/user-orders.action';
/** @type {?} */
export const initialState = {
    orders: [],
    pagination: {},
    sorts: [],
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3VzZXItb3JkZXJzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHdEUsTUFBTSxPQUFPLFlBQVksR0FBcUI7SUFDNUMsTUFBTSxFQUFFLEVBQUU7SUFDVixVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBRSxFQUFFO0NBQ1Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQTZDO0lBRTdDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7UUFDRCxLQUFLLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0MsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21Vc2VyT3JkZXJzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1vcmRlcnMuYWN0aW9uJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUxpc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IE9yZGVySGlzdG9yeUxpc3QgPSB7XG4gIG9yZGVyczogW10sXG4gIHBhZ2luYXRpb246IHt9LFxuICBzb3J0czogW10sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbVVzZXJPcmRlcnNBY3Rpb24uVXNlck9yZGVyc0FjdGlvblxuKTogT3JkZXJIaXN0b3J5TGlzdCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21Vc2VyT3JkZXJzQWN0aW9uLkxPQURfVVNFUl9PUkRFUlNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgZnJvbVVzZXJPcmRlcnNBY3Rpb24uTE9BRF9VU0VSX09SREVSU19GQUlMOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==