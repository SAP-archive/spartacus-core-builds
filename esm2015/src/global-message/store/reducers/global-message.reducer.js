/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { deepEqualObjects } from '../../../util/compare-equal-objects';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUt2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHeEQsTUFBTSxPQUFPLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBZ0Q7SUFFaEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7O2tCQUMvQixPQUFPLEdBQWtCLE1BQU0sQ0FBQyxPQUFPO1lBRTdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5Qyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFaEM7YUFDSDtpQkFBTTs7c0JBQ0MsUUFBUSxHQUFtQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztnQkFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRTtvQkFDOUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQ0gsS0FBSyxDQUFDLFFBQVEsSUFDakIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BRTdDO2lCQUNIO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsS0FBSyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7a0JBQ2xDLE9BQU8sR0FBc0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztrQkFDaEQsUUFBUSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM3QyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN4QyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3hCO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3Qix5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsT0FFckI7U0FDSDtRQUVELEtBQUssb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7a0JBQzNDLFFBQVEscUJBQ1QsS0FBSyxDQUFDLFFBQVEsSUFDakIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUNyQjtZQUNELHlCQUNLLEtBQUssSUFDUixRQUFRLElBQ1I7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgZGVlcEVxdWFsT2JqZWN0cyB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdGF0ZSB9IGZyb20gJy4uL2dsb2JhbC1tZXNzYWdlLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsTWVzc2FnZVN0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogR2xvYmFsTWVzc2FnZUFjdGlvbnMuR2xvYmFsTWVzc2FnZUFjdGlvblxuKTogR2xvYmFsTWVzc2FnZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQUREX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IEdsb2JhbE1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgaWYgKHN0YXRlLmVudGl0aWVzW21lc3NhZ2UudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgIFttZXNzYWdlLnR5cGVdOiBbbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXM6IFRyYW5zbGF0YWJsZVtdID0gc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXTtcbiAgICAgICAgaWYgKCFtZXNzYWdlcy5zb21lKG1zZyA9PiBkZWVwRXF1YWxPYmplY3RzKG1zZywgbWVzc2FnZS50ZXh0KSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFsuLi5tZXNzYWdlcywgbWVzc2FnZS50ZXh0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUkVNT1ZFX01FU1NBR0U6IHtcbiAgICAgIGNvbnN0IG1zZ1R5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlID0gYWN0aW9uLnBheWxvYWQudHlwZTtcbiAgICAgIGNvbnN0IG1zZ0luZGV4OiBudW1iZXIgPSBhY3Rpb24ucGF5bG9hZC5pbmRleDtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAhc3RhdGUuZW50aXRpZXNbbXNnVHlwZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gWy4uLnN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXTtcbiAgICAgIG1lc3NhZ2VzLnNwbGljZShtc2dJbmRleCwgMSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgIFttc2dUeXBlXTogbWVzc2FnZXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgR2xvYmFsTWVzc2FnZUFjdGlvbnMuUkVNT1ZFX01FU1NBR0VTX0JZX1RZUEU6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkXTogW10sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=