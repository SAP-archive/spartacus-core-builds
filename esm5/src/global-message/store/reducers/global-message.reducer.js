/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b, _c, _d;
    switch (action.type) {
        case fromAction.ADD_MESSAGE: {
            /** @type {?} */
            var message = action.payload;
            if (state.entities[message.type] === undefined) {
                return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[message.type] = [message.text], _a)) });
            }
            else {
                /** @type {?} */
                var msgs = state.entities[message.type];
                if (!msgs.includes(message.text)) {
                    return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_b = {}, _b[message.type] = tslib_1.__spread(msgs, [message.text]), _b)) });
                }
            }
            return state;
        }
        case fromAction.REMOVE_MESSAGE: {
            /** @type {?} */
            var msgType = action.payload.type;
            /** @type {?} */
            var msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            /** @type {?} */
            var messages = tslib_1.__spread(state.entities[msgType]);
            messages.splice(msgIndex, 1);
            return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_c = {}, _c[msgType] = messages, _c)) });
        }
        case fromAction.REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            var entities = tslib_1.__assign({}, state.entities, (_d = {}, _d[action.payload] = [], _d));
            return tslib_1.__assign({}, state, { entities: entities });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMkI7SUFEM0Isc0JBQUEsRUFBQSxvQkFBb0I7O0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQ3JCLE9BQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDaEMsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsdUJBQ0gsS0FBSyxDQUFDLFFBQVEsZUFDaEIsT0FBTyxDQUFDLElBQUkscUJBQU8sSUFBSSxHQUFFLE9BQU8sQ0FBQyxJQUFJLFlBRXhDO2lCQUNIO2FBQ0Y7WUFFRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUN4QixPQUFPLEdBQXNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7Z0JBQ2hELFFBQVEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDN0MsSUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUN4QjtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkOztnQkFFSyxRQUFRLG9CQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsdUJBQ0gsS0FBSyxDQUFDLFFBQVEsZUFDaEIsT0FBTyxJQUFHLFFBQVEsVUFFckI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2dCQUNqQyxRQUFRLHdCQUNULEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE1BQU0sQ0FBQyxPQUFPLElBQUcsRUFBRSxNQUNyQjtZQUNELDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUEsSUFDUjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwtbWVzc2FnZS5hY3Rpb25zJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsTWVzc2FnZVN0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogR2xvYmFsTWVzc2FnZUFjdGlvblxuKTogR2xvYmFsTWVzc2FnZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5BRERfTUVTU0FHRToge1xuICAgICAgY29uc3QgbWVzc2FnZTogR2xvYmFsTWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBpZiAoc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFttZXNzYWdlLnRleHRdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtc2dzID0gc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXTtcblxuICAgICAgICBpZiAoIW1zZ3MuaW5jbHVkZXMobWVzc2FnZS50ZXh0KSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogWy4uLm1zZ3MsIG1lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRU1PVkVfTUVTU0FHRToge1xuICAgICAgY29uc3QgbXNnVHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC50eXBlO1xuICAgICAgY29uc3QgbXNnSW5kZXg6IG51bWJlciA9IGFjdGlvbi5wYXlsb2FkLmluZGV4O1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICFzdGF0ZS5lbnRpdGllc1ttc2dUeXBlXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4uc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1dO1xuICAgICAgbWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgW21zZ1R5cGVdOiBtZXNzYWdlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19