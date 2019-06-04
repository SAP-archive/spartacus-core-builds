/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialState; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsTUFBTSxLQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBMkI7O0lBRDNCLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQ3JCLFNBQU8sR0FBa0IsTUFBTSxDQUFDLE9BQU87WUFFN0MsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLFNBQU8sQ0FBQyxJQUFJLElBQUcsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDLFVBRWhDO2FBQ0g7aUJBQU07O29CQUNDLFFBQVEsR0FBbUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFPLENBQUMsSUFBSSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLEVBQUU7b0JBQzlELDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLFNBQU8sQ0FBQyxJQUFJLHFCQUFPLFFBQVEsR0FBRSxTQUFPLENBQUMsSUFBSSxZQUU1QztpQkFDSDthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztnQkFDeEIsT0FBTyxHQUFzQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7O2dCQUNoRCxRQUFRLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzdDLElBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3hDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDeEI7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDs7Z0JBRUssUUFBUSxvQkFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdCLDRCQUNLLEtBQUssSUFDUixRQUFRLHVCQUNILEtBQUssQ0FBQyxRQUFRLGVBQ2hCLE9BQU8sSUFBRyxRQUFRLFVBRXJCO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDakMsUUFBUSx3QkFDVCxLQUFLLENBQUMsUUFBUSxlQUNoQixNQUFNLENBQUMsT0FBTyxJQUFHLEVBQUUsTUFDckI7WUFDRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQgeyBkZWVwRXF1YWxPYmplY3RzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21wYXJlLWVxdWFsLW9iamVjdHMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBHbG9iYWxNZXNzYWdlU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBHbG9iYWxNZXNzYWdlQWN0aW9uXG4pOiBHbG9iYWxNZXNzYWdlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkFERF9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBHbG9iYWxNZXNzYWdlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGlmIChzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogW21lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBUcmFuc2xhdGFibGVbXSA9IHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV07XG4gICAgICAgIGlmICghbWVzc2FnZXMuc29tZShtc2cgPT4gZGVlcEVxdWFsT2JqZWN0cyhtc2csIG1lc3NhZ2UudGV4dCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbLi4ubWVzc2FnZXMsIG1lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUkVNT1ZFX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1zZ1R5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlID0gYWN0aW9uLnBheWxvYWQudHlwZTtcbiAgICAgIGNvbnN0IG1zZ0luZGV4OiBudW1iZXIgPSBhY3Rpb24ucGF5bG9hZC5pbmRleDtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAhc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXTtcbiAgICAgIG1lc3NhZ2VzLnNwbGljZShtc2dJbmRleCwgMSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgIFttc2dUeXBlXTogbWVzc2FnZXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRU1PVkVfTUVTU0FHRVNfQllfVFlQRToge1xuICAgICAgY29uc3QgZW50aXRpZXMgPSB7XG4gICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWRdOiBbXSxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==