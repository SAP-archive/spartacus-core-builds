/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
import { deepEqualObjects } from '../../../util/compare-equal-objects';
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
            var message_1 = action.payload;
            if (state.entities[message_1.type] === undefined) {
                return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[message_1.type] = [message_1.text], _a)) });
            }
            else {
                /** @type {?} */
                var messages = state.entities[message_1.type];
                if (!messages.some(function (msg) { return deepEqualObjects(msg, message_1.text); })) {
                    return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_b = {}, _b[message_1.type] = tslib_1.__spread(messages, [message_1.text]), _b)) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsTUFBTSxLQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMkI7SUFEM0Isc0JBQUEsRUFBQSxvQkFBb0I7O0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQ3JCLFNBQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLFNBQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLFFBQVEsR0FBbUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxTQUFPLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsRUFBRTtvQkFDOUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsdUJBQ0gsS0FBSyxDQUFDLFFBQVEsZUFDaEIsU0FBTyxDQUFDLElBQUkscUJBQU8sUUFBUSxHQUFFLFNBQU8sQ0FBQyxJQUFJLFlBRTVDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUN4QixPQUFPLEdBQXNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7Z0JBQ2hELFFBQVEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDN0MsSUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUN4QjtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkOztnQkFFSyxRQUFRLG9CQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsdUJBQ0gsS0FBSyxDQUFDLFFBQVEsZUFDaEIsT0FBTyxJQUFHLFFBQVEsVUFFckI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2dCQUNqQyxRQUFRLHdCQUNULEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE1BQU0sQ0FBQyxPQUFPLElBQUcsRUFBRSxNQUNyQjtZQUNELDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUEsSUFDUjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwtbWVzc2FnZS5hY3Rpb25zJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IGRlZXBFcXVhbE9iamVjdHMgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbXBhcmUtZXF1YWwtb2JqZWN0cyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEdsb2JhbE1lc3NhZ2VBY3Rpb25cbik6IEdsb2JhbE1lc3NhZ2VTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uQUREX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgaWYgKHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IFRyYW5zbGF0YWJsZVtdID0gc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgaWYgKCFtZXNzYWdlcy5zb21lKG1zZyA9PiBkZWVwRXF1YWxPYmplY3RzKG1zZywgbWVzc2FnZS50ZXh0KSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFsuLi5tZXNzYWdlcywgbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRU1PVkVfTUVTU0FHRToge1xuICAgICAgY29uc3QgbXNnVHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC50eXBlO1xuICAgICAgY29uc3QgbXNnSW5kZXg6IG51bWJlciA9IGFjdGlvbi5wYXlsb2FkLmluZGV4O1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICFzdGF0ZS5lbnRpdGllc1ttc2dUeXBlXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4uc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1dO1xuICAgICAgbWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgW21zZ1R5cGVdOiBtZXNzYWdlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19