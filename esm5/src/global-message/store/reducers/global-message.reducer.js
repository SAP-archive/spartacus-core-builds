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
                if (msgs.indexOf(message.text) === -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxLQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMkI7SUFEM0Isc0JBQUEsRUFBQSxvQkFBb0I7O0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQ3JCLE9BQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBRXpDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sQ0FBQyxJQUFJLHFCQUFPLElBQUksR0FBRSxPQUFPLENBQUMsSUFBSSxZQUV4QztpQkFDSDthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztnQkFDeEIsT0FBTyxHQUFzQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7O2dCQUNoRCxRQUFRLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzdDLElBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3hDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDeEI7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDs7Z0JBRUssUUFBUSxvQkFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdCLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sSUFBRyxRQUFRLFVBRXJCO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDakMsUUFBUSx3QkFDVCxLQUFLLENBQUMsUUFBUSxlQUNoQixNQUFNLENBQUMsT0FBTyxJQUFHLEVBQUUsTUFDckI7WUFDRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEdsb2JhbE1lc3NhZ2VBY3Rpb25cbik6IEdsb2JhbE1lc3NhZ2VTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uQUREX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgaWYgKHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbXNncyA9IHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV07XG5cbiAgICAgICAgaWYgKG1zZ3MuaW5kZXhPZihtZXNzYWdlLnRleHQpID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogWy4uLm1zZ3MsIG1lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRU1PVkVfTUVTU0FHRToge1xuICAgICAgY29uc3QgbXNnVHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC50eXBlO1xuICAgICAgY29uc3QgbXNnSW5kZXg6IG51bWJlciA9IGFjdGlvbi5wYXlsb2FkLmluZGV4O1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICFzdGF0ZS5lbnRpdGllc1ttc2dUeXBlXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4uc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1dO1xuICAgICAgbWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgW21zZ1R5cGVdOiBtZXNzYWdlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19