/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
import { deepEqualObjects } from '../../../util/compare-equal-objects';
/** @type {?} */
export const initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.ADD_MESSAGE: {
            /** @type {?} */
            const message = action.payload;
            if (state.entities[message.type] === undefined) {
                return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [message.text] }) });
            }
            else {
                /** @type {?} */
                const messages = state.entities[message.type];
                if (!messages.some((/**
                 * @param {?} msg
                 * @return {?}
                 */
                msg => deepEqualObjects(msg, message.text)))) {
                    return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [...messages, message.text] }) });
                }
            }
            return state;
        }
        case fromAction.REMOVE_MESSAGE: {
            /** @type {?} */
            const msgType = action.payload.type;
            /** @type {?} */
            const msgIndex = action.payload.index;
            if (Object.keys(state.entities).length === 0 ||
                !state.entities[msgType]) {
                return state;
            }
            /** @type {?} */
            const messages = [...state.entities[msgType]];
            messages.splice(msgIndex, 1);
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [msgType]: messages }) });
        }
        case fromAction.REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [action.payload]: [] });
            return Object.assign({}, state, { entities });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUV2RSxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEyQjtJQUUzQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2tCQUNyQixPQUFPLEdBQWtCLE1BQU0sQ0FBQyxPQUFPO1lBRTdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5Qyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFaEM7YUFDSDtpQkFBTTs7c0JBQ0MsUUFBUSxHQUFtQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztnQkFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRTtvQkFDOUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQ0gsS0FBSyxDQUFDLFFBQVEsSUFDakIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BRTdDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O2tCQUN4QixPQUFPLEdBQXNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSTs7a0JBQ2hELFFBQVEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDN0MsSUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDeEMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUN4QjtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkOztrQkFFSyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0IseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQ0gsS0FBSyxDQUFDLFFBQVEsSUFDakIsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLE9BRXJCO1NBQ0g7UUFFRCxLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDakMsUUFBUSxxQkFDVCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEdBQ3JCO1lBQ0QseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwtbWVzc2FnZS5hY3Rpb25zJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IGRlZXBFcXVhbE9iamVjdHMgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbXBhcmUtZXF1YWwtb2JqZWN0cyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEdsb2JhbE1lc3NhZ2VBY3Rpb25cbik6IEdsb2JhbE1lc3NhZ2VTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uQUREX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgaWYgKHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IFRyYW5zbGF0YWJsZVtdID0gc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgaWYgKCFtZXNzYWdlcy5zb21lKG1zZyA9PiBkZWVwRXF1YWxPYmplY3RzKG1zZywgbWVzc2FnZS50ZXh0KSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFsuLi5tZXNzYWdlcywgbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5SRU1PVkVfTUVTU0FHRToge1xuICAgICAgY29uc3QgbXNnVHlwZTogR2xvYmFsTWVzc2FnZVR5cGUgPSBhY3Rpb24ucGF5bG9hZC50eXBlO1xuICAgICAgY29uc3QgbXNnSW5kZXg6IG51bWJlciA9IGFjdGlvbi5wYXlsb2FkLmluZGV4O1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICFzdGF0ZS5lbnRpdGllc1ttc2dUeXBlXVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbLi4uc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1dO1xuICAgICAgbWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgW21zZ1R5cGVdOiBtZXNzYWdlcyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFU19CWV9UWVBFOiB7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHtcbiAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIFthY3Rpb24ucGF5bG9hZF06IFtdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19