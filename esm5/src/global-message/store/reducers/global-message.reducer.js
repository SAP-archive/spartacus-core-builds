/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GlobalMessageActions } from '../actions/index';
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
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case GlobalMessageActions.ADD_MESSAGE: {
            /** @type {?} */
            var message = action.payload;
            if (state.entities[message.type] === undefined) {
                return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[message.type] = [message.text], _a)) });
            }
            else {
                /** @type {?} */
                var messages = state.entities[message.type];
                return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_b = {}, _b[message.type] = tslib_1.__spread(messages, [message.text]), _b)) });
            }
        }
        case GlobalMessageActions.REMOVE_MESSAGE: {
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
        case GlobalMessageActions.REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            var entities = tslib_1.__assign({}, state.entities, (_d = {}, _d[action.payload] = [], _d));
            return tslib_1.__assign({}, state, { entities: entities });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR3hELE1BQU0sS0FBTyxZQUFZLEdBQXVCO0lBQzlDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQWdEOztJQURoRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQy9CLE9BQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLFFBQVEsR0FBbUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM3RCw0QkFDSyxLQUFLLElBQ1IsUUFBUSx1QkFDSCxLQUFLLENBQUMsUUFBUSxlQUNoQixPQUFPLENBQUMsSUFBSSxxQkFBTyxRQUFRLEdBQUUsT0FBTyxDQUFDLElBQUksWUFFNUM7YUFDSDtTQUNGO1FBRUQsS0FBSyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Z0JBQ2xDLE9BQU8sR0FBc0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztnQkFDaEQsUUFBUSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM3QyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN4QyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3hCO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2dCQUVLLFFBQVEsb0JBQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3Qiw0QkFDSyxLQUFLLElBQ1IsUUFBUSx1QkFDSCxLQUFLLENBQUMsUUFBUSxlQUNoQixPQUFPLElBQUcsUUFBUSxVQUVyQjtTQUNIO1FBRUQsS0FBSyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDM0MsUUFBUSx3QkFDVCxLQUFLLENBQUMsUUFBUSxlQUNoQixNQUFNLENBQUMsT0FBTyxJQUFHLEVBQUUsTUFDckI7WUFDRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0YXRlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBHbG9iYWxNZXNzYWdlU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBHbG9iYWxNZXNzYWdlQWN0aW9ucy5HbG9iYWxNZXNzYWdlQWN0aW9uXG4pOiBHbG9iYWxNZXNzYWdlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BRERfTUVTU0FHRToge1xuICAgICAgY29uc3QgbWVzc2FnZTogR2xvYmFsTWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBpZiAoc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFttZXNzYWdlLnRleHRdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXNzYWdlczogVHJhbnNsYXRhYmxlW10gPSBzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbLi4ubWVzc2FnZXMsIG1lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJFTU9WRV9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtc2dUeXBlOiBHbG9iYWxNZXNzYWdlVHlwZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGU7XG4gICAgICBjb25zdCBtc2dJbmRleDogbnVtYmVyID0gYWN0aW9uLnBheWxvYWQuaW5kZXg7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgIXN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi5zdGF0ZS5lbnRpdGllc1ttc2dUeXBlXV07XG4gICAgICBtZXNzYWdlcy5zcGxpY2UobXNnSW5kZXgsIDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICBbbXNnVHlwZV06IG1lc3NhZ2VzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19