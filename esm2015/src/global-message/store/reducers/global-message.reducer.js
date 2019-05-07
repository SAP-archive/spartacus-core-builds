/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
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
                const msgs = state.entities[message.type];
                if (!msgs.includes(message.text)) {
                    return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [...msgs, message.text] }) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEyQjtJQUUzQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2tCQUNyQixPQUFPLEdBQWtCLE1BQU0sQ0FBQyxPQUFPO1lBRTdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5Qyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFaEM7YUFDSDtpQkFBTTs7c0JBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoQyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFekM7aUJBQ0g7YUFDRjtZQUVELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7a0JBQ3hCLE9BQU8sR0FBc0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztrQkFDaEQsUUFBUSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM3QyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN4QyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3hCO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3Qix5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsT0FFckI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUNqQyxRQUFRLHFCQUNULEtBQUssQ0FBQyxRQUFRLElBQ2pCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FDckI7WUFDRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0YXRlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBHbG9iYWxNZXNzYWdlU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBHbG9iYWxNZXNzYWdlQWN0aW9uXG4pOiBHbG9iYWxNZXNzYWdlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9uLkFERF9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBHbG9iYWxNZXNzYWdlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGlmIChzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogW21lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdO1xuXG4gICAgICAgIGlmICghbXNncy5pbmNsdWRlcyhtZXNzYWdlLnRleHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbLi4ubXNncywgbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtc2dUeXBlOiBHbG9iYWxNZXNzYWdlVHlwZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGU7XG4gICAgICBjb25zdCBtc2dJbmRleDogbnVtYmVyID0gYWN0aW9uLnBheWxvYWQuaW5kZXg7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgIXN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi5zdGF0ZS5lbnRpdGllc1ttc2dUeXBlXV07XG4gICAgICBtZXNzYWdlcy5zcGxpY2UobXNnSW5kZXgsIDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICBbbXNnVHlwZV06IG1lc3NhZ2VzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUkVNT1ZFX01FU1NBR0VTX0JZX1RZUEU6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkXTogW10sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=