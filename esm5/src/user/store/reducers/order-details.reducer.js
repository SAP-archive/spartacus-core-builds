/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromOrderDetailsAction from '../actions/order-details.action';
/** @type {?} */
export var initialState = {
    order: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromOrderDetailsAction.LOAD_ORDER_DETAILS_SUCCESS: {
            /** @type {?} */
            var order = action.payload;
            return tslib_1.__assign({}, state, { order: order });
        }
        case fromOrderDetailsAction.CLEAR_ORDER_DETAILS: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvb3JkZXItZGV0YWlscy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLHNCQUFzQixNQUFNLGlDQUFpQyxDQUFDOztBQUkxRSxNQUFNLEtBQU8sWUFBWSxHQUFzQjtJQUM3QyxLQUFLLEVBQUUsRUFBRTtDQUNWOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFpRDtJQURqRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxzQkFBc0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztnQkFDaEQsS0FBSyxHQUFVLE1BQU0sQ0FBQyxPQUFPO1lBRW5DLDRCQUNLLEtBQUssSUFDUixLQUFLLE9BQUEsSUFDTDtTQUNIO1FBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvb3JkZXItZGV0YWlscy5hY3Rpb24nO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBPcmRlckRldGFpbHNTdGF0ZSA9IHtcbiAgb3JkZXI6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21PcmRlckRldGFpbHNBY3Rpb24uT3JkZXJEZXRhaWxzQWN0aW9uXG4pOiBPcmRlckRldGFpbHNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21PcmRlckRldGFpbHNBY3Rpb24uTE9BRF9PUkRFUl9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IG9yZGVyOiBPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3JkZXIsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGZyb21PcmRlckRldGFpbHNBY3Rpb24uQ0xFQVJfT1JERVJfREVUQUlMUzoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19