/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { deepEqualObjects } from '../../../util/compare-equal-objects';
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
            var message_1 = action.payload;
            if (state.entities[message_1.type] === undefined) {
                return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_a = {}, _a[message_1.type] = [message_1.text], _a)) });
            }
            else {
                /** @type {?} */
                var messages = state.entities[message_1.type];
                if (!messages.some((/**
                 * @param {?} msg
                 * @return {?}
                 */
                function (msg) { return deepEqualObjects(msg, message_1.text); }))) {
                    return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, (_b = {}, _b[message_1.type] = tslib_1.__spread(messages, [message_1.text]), _b)) });
                }
            }
            return state;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR3hELE1BQU0sS0FBTyxZQUFZLEdBQXVCO0lBQzlDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQWdEOztJQURoRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQy9CLFNBQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLFNBQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLFFBQVEsR0FBbUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLEVBQUU7b0JBQzlELDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLFNBQU8sQ0FBQyxJQUFJLHFCQUFPLFFBQVEsR0FBRSxTQUFPLENBQUMsSUFBSSxZQUU1QztpQkFDSDthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUNsQyxPQUFPLEdBQXNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7Z0JBQ2hELFFBQVEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDN0MsSUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUN4QjtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkOztnQkFFSyxRQUFRLG9CQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsdUJBQ0gsS0FBSyxDQUFDLFFBQVEsZUFDaEIsT0FBTyxJQUFHLFFBQVEsVUFFckI7U0FDSDtRQUVELEtBQUssb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Z0JBQzNDLFFBQVEsd0JBQ1QsS0FBSyxDQUFDLFFBQVEsZUFDaEIsTUFBTSxDQUFDLE9BQU8sSUFBRyxFQUFFLE1BQ3JCO1lBQ0QsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IGRlZXBFcXVhbE9iamVjdHMgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbXBhcmUtZXF1YWwtb2JqZWN0cyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkdsb2JhbE1lc3NhZ2VBY3Rpb25cbik6IEdsb2JhbE1lc3NhZ2VTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBHbG9iYWxNZXNzYWdlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGlmIChzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogW21lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBUcmFuc2xhdGFibGVbXSA9IHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV07XG4gICAgICAgIGlmICghbWVzc2FnZXMuc29tZShtc2cgPT4gZGVlcEVxdWFsT2JqZWN0cyhtc2csIG1lc3NhZ2UudGV4dCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbLi4ubWVzc2FnZXMsIG1lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJFTU9WRV9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtc2dUeXBlOiBHbG9iYWxNZXNzYWdlVHlwZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGU7XG4gICAgICBjb25zdCBtc2dJbmRleDogbnVtYmVyID0gYWN0aW9uLnBheWxvYWQuaW5kZXg7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgIXN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi5zdGF0ZS5lbnRpdGllc1ttc2dUeXBlXV07XG4gICAgICBtZXNzYWdlcy5zcGxpY2UobXNnSW5kZXgsIDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICBbbXNnVHlwZV06IG1lc3NhZ2VzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19