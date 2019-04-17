/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 * @template T
 * @param {?} entityType
 * @param {?} reducer
 * @return {?}
 */
export function entityReducer(entityType, reducer) {
    return (state = initialEntityState, action) => {
        /** @type {?} */
        let ids;
        /** @type {?} */
        let partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            ids = [].concat(action.meta.entityId);
            // remove selected entities
            if (action.meta.entityRemove) {
                if (action.meta.entityId === null) {
                    return initialEntityState;
                }
                else {
                    /** @type {?} */
                    let removed = false;
                    /** @type {?} */
                    const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                        if (ids.indexOf(cur) > -1) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            /** @type {?} */
            const id = ids[i];
            /** @type {?} */
            const subAction = partitionPayload
                ? Object.assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, entityUpdates) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsTUFBTSxPQUFPLGtCQUFrQixHQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7QUFPcEUsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBd0M7SUFFeEMsT0FBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7O1lBQ2QsR0FBYTs7WUFDYixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFDbEM7WUFDQSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDakMsT0FBTyxrQkFBa0IsQ0FBQztpQkFDM0I7cUJBQU07O3dCQUNELE9BQU8sR0FBRyxLQUFLOzswQkFDYixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNsRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7NEJBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNoQzt3QkFDRCxPQUFPLEdBQUcsQ0FBQztvQkFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUVOLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUNwRDthQUNGO1lBRUQsZ0JBQWdCO2dCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DOztjQUVLLGFBQWEsR0FBd0IsRUFBRTtRQUU3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzdCLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztrQkFDWCxTQUFTLEdBQUcsZ0JBQWdCO2dCQUNoQyxDQUFDLG1CQUFNLE1BQU0sSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFDekMsQ0FBQyxDQUFDLE1BQU07O2tCQUNKLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7WUFDdkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQU8sS0FBSyxDQUFDLFFBQVEsRUFBSyxhQUFhLEtBQy9DO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSAnLi9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxFbnRpdHlTdGF0ZTogRW50aXR5U3RhdGU8YW55PiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgZm9yIHJldXNpbmcgcmVkdWNlciBsb2dpYyBmb3IgbXVsdGlwbGUgZW50aXRpZXNcbiAqXG4gKiBVdGlsaXplcyBlbnRpdHlJZCBtZXRhIGZpZWxkIHRvIHRhcmdldCBlbnRpdHkgYnkgaWQgaW4gYWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyOiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogRW50aXR5U3RhdGU8VD4gPSBpbml0aWFsRW50aXR5U3RhdGUsXG4gICAgYWN0aW9uOiBFbnRpdHlBY3Rpb25cbiAgKTogRW50aXR5U3RhdGU8VD4gPT4ge1xuICAgIGxldCBpZHM6IHN0cmluZ1tdO1xuICAgIGxldCBwYXJ0aXRpb25QYXlsb2FkID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGlkcyA9IFtdLmNvbmNhdChhY3Rpb24ubWV0YS5lbnRpdHlJZCk7XG5cbiAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBlbnRpdGllc1xuICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eVJlbW92ZSkge1xuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5SWQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbEVudGl0eVN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKGN1cikgPiAtMSkge1xuICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgcmV0dXJuIHJlbW92ZWQgPyB7IGVudGl0aWVzOiBuZXdFbnRpdGllcyB9IDogc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFydGl0aW9uUGF5bG9hZCA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoYWN0aW9uLm1ldGEuZW50aXR5SWQpICYmIEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5VXBkYXRlczogeyBbaWQ6IHN0cmluZ106IFQgfSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzW2ldO1xuICAgICAgY29uc3Qgc3ViQWN0aW9uID0gcGFydGl0aW9uUGF5bG9hZFxuICAgICAgICA/IHsgLi4uYWN0aW9uLCBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZFtpXSB9XG4gICAgICAgIDogYWN0aW9uO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLmVudGl0aWVzW2lkXSwgc3ViQWN0aW9uKTtcbiAgICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgICBlbnRpdHlVcGRhdGVzW2lkXSA9IG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdHlVcGRhdGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHsgLi4uc3RhdGUuZW50aXRpZXMsIC4uLmVudGl0eVVwZGF0ZXMgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19