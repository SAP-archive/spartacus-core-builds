/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromOrderDetailsAction from '../actions/order-details.action';
/** @type {?} */
export const initialState = {
    order: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromOrderDetailsAction.LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            const order = action.payload;
            return Object.assign({}, state, { order });
        }
        case fromOrderDetailsAction.CLEAR_ORDER_DETAILS: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvb3JkZXItZGV0YWlscy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssc0JBQXNCLE1BQU0saUNBQWlDLENBQUM7O0FBSTFFLE1BQU0sT0FBTyxZQUFZLEdBQXNCO0lBQzdDLEtBQUssRUFBRSxFQUFFO0NBQ1Y7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQWlEO0lBRWpELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUM7O2tCQUNoRCxLQUFLLEdBQVUsTUFBTSxDQUFDLE9BQU87WUFFbkMseUJBQ0ssS0FBSyxJQUNSLEtBQUssSUFDTDtTQUNIO1FBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBPcmRlckRldGFpbHNTdGF0ZSA9IHtcbiAgb3JkZXI6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4pOiBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IG9yZGVyOiBPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3JkZXIsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21PcmRlckRldGFpbHNBY3Rpb24uQ0xFQVJfT1JERVJfREVUQUlMUzoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19