/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                if (!messages.some(msg => deepEqualObjects(msg, message.text))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtbWVzc2FnZS9zdG9yZS9yZWR1Y2Vycy9nbG9iYWwtbWVzc2FnZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEtBQUssVUFBVSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUV2RSxNQUFNLE9BQU8sWUFBWSxHQUF1QjtJQUM5QyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEyQjtJQUUzQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O2tCQUNyQixPQUFPLEdBQWtCLE1BQU0sQ0FBQyxPQUFPO1lBRTdDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5Qyx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFaEM7YUFDSDtpQkFBTTs7c0JBQ0MsUUFBUSxHQUFtQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUM5RCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FFN0M7aUJBQ0g7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxLQUFLLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7a0JBQ3hCLE9BQU8sR0FBc0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJOztrQkFDaEQsUUFBUSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM3QyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUN4QyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQ3hCO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7O2tCQUVLLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU3Qix5QkFDSyxLQUFLLElBQ1IsUUFBUSxvQkFDSCxLQUFLLENBQUMsUUFBUSxJQUNqQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsT0FFckI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUNqQyxRQUFRLHFCQUNULEtBQUssQ0FBQyxRQUFRLElBQ2pCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FDckI7WUFDRCx5QkFDSyxLQUFLLElBQ1IsUUFBUSxJQUNSO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2dsb2JhbC1tZXNzYWdlLmFjdGlvbnMnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uL21vZGVscy9nbG9iYWwtbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVN0YXRlIH0gZnJvbSAnLi4vZ2xvYmFsLW1lc3NhZ2Utc3RhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi90cmFuc2xhdGFibGUnO1xuaW1wb3J0IHsgZGVlcEVxdWFsT2JqZWN0cyB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsTWVzc2FnZVN0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogR2xvYmFsTWVzc2FnZUFjdGlvblxuKTogR2xvYmFsTWVzc2FnZVN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5BRERfTUVTU0FHRToge1xuICAgICAgY29uc3QgbWVzc2FnZTogR2xvYmFsTWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBpZiAoc3RhdGUuZW50aXRpZXNbbWVzc2FnZS50eXBlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgW21lc3NhZ2UudHlwZV06IFttZXNzYWdlLnRleHRdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXNzYWdlczogVHJhbnNsYXRhYmxlW10gPSBzdGF0ZS5lbnRpdGllc1ttZXNzYWdlLnR5cGVdO1xuICAgICAgICBpZiAoIW1lc3NhZ2VzLnNvbWUobXNnID0+IGRlZXBFcXVhbE9iamVjdHMobXNnLCBtZXNzYWdlLnRleHQpKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICAgICAgICBbbWVzc2FnZS50eXBlXTogWy4uLm1lc3NhZ2VzLCBtZXNzYWdlLnRleHRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9NRVNTQUdFOiB7XG4gICAgICBjb25zdCBtc2dUeXBlOiBHbG9iYWxNZXNzYWdlVHlwZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGU7XG4gICAgICBjb25zdCBtc2dJbmRleDogbnVtYmVyID0gYWN0aW9uLnBheWxvYWQuaW5kZXg7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgIXN0YXRlLmVudGl0aWVzW21zZ1R5cGVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi5zdGF0ZS5lbnRpdGllc1ttc2dUeXBlXV07XG4gICAgICBtZXNzYWdlcy5zcGxpY2UobXNnSW5kZXgsIDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgICBbbXNnVHlwZV06IG1lc3NhZ2VzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uUkVNT1ZFX01FU1NBR0VTX0JZX1RZUEU6IHtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0ge1xuICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkXTogW10sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=