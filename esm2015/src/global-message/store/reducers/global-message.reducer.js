/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GlobalMessageActions } from '../actions/index';
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
        case GlobalMessageActions.ADD_MESSAGE: {
            /** @type {?} */
            const message = action.payload;
            if (state.entities[message.type] === undefined) {
                return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [message.text] }) });
            }
            else {
                /** @type {?} */
                const messages = state.entities[message.type];
                return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [message.type]: [...messages, message.text] }) });
            }
        }
        case GlobalMessageActions.REMOVE_MESSAGE: {
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
        case GlobalMessageActions.REMOVE_MESSAGES_BY_TYPE: {
            /** @type {?} */
            const entities = Object.assign({}, state.entities, { [action.payload]: [] });
            return Object.assign({}, state, { entities });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHeEQsTUFBTSxPQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBZ0Q7SUFFaEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7O2tCQUMvQixPQUFPLEdBQWtCLE1BQU0sQ0FBQyxPQUFPO1lBRTdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5Qyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFaEM7YUFDSDtpQkFBTTs7c0JBQ0MsUUFBUSxHQUFtQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzdELHlCQUNLLEtBQUssSUFDUixRQUFRLG9CQUNILEtBQUssQ0FBQyxRQUFRLElBQ2pCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUU3QzthQUNIO1NBQ0Y7UUFFRCxLQUFLLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDOztrQkFDbEMsT0FBTyxHQUFzQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7O2tCQUNoRCxRQUFRLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzdDLElBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3hDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDeEI7Z0JBQ0EsT0FBTyxLQUFLLENBQUM7YUFDZDs7a0JBRUssUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTdCLHlCQUNLLEtBQUssSUFDUixRQUFRLG9CQUNILEtBQUssQ0FBQyxRQUFRLElBQ2pCLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxPQUVyQjtTQUNIO1FBRUQsS0FBSyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztrQkFDM0MsUUFBUSxxQkFDVCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEdBQ3JCO1lBQ0QseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9pMThuL3RyYW5zbGF0YWJsZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkdsb2JhbE1lc3NhZ2VBY3Rpb25cbik6IEdsb2JhbE1lc3NhZ2VTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFERF9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtZXNzYWdlOiBHbG9iYWxNZXNzYWdlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGlmIChzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogW21lc3NhZ2UudGV4dF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBUcmFuc2xhdGFibGVbXSA9IHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFsuLi5tZXNzYWdlcywgbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUkVNT1ZFX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1zZ1R5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlID0gYWN0aW9uLnBheWxvYWQudHlwZTtcbiAgICAgIGNvbnN0IG1zZ0luZGV4OiBudW1iZXIgPSBhY3Rpb24ucGF5bG9hZC5pbmRleDtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAhc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXTtcbiAgICAgIG1lc3NhZ2VzLnNwbGljZShtc2dJbmRleCwgMSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgIFttc2dUeXBlXTogbWVzc2FnZXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUkVNT1ZFX01FU1NBR0VTX0JZX1RZUEU6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkXTogW10sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=