/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialEntityState, action) => {
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
                    const newEntities = Object.keys(state.entities).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    (acc, cur) => {
                        if (ids.includes(cur)) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }), {});
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
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsTUFBTSxPQUFPLGtCQUFrQixHQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7QUFPcEUsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBd0M7SUFFeEM7Ozs7O0lBQU8sQ0FDTCxRQUF3QixrQkFBa0IsRUFDMUMsTUFBb0IsRUFDSixFQUFFOztZQUNkLEdBQWE7O1lBQ2IsZ0JBQWdCLEdBQUcsS0FBSztRQUM1QixJQUNFLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQ2xDO1lBQ0EsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QywyQkFBMkI7WUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLE9BQU8sa0JBQWtCLENBQUM7aUJBQzNCO3FCQUFNOzt3QkFDRCxPQUFPLEdBQUcsS0FBSzs7MEJBQ2IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7O29CQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNsRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNMLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNoQzt3QkFDRCxPQUFPLEdBQUcsQ0FBQztvQkFDYixDQUFDLEdBQUUsRUFBRSxDQUFDO29CQUVOLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUNwRDthQUNGO1lBRUQsZ0JBQWdCO2dCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DOztjQUVLLGFBQWEsR0FBd0IsRUFBRTtRQUU3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzdCLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOztrQkFDWCxTQUFTLEdBQUcsZ0JBQWdCO2dCQUNoQyxDQUFDLG1CQUFNLE1BQU0sSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFDekMsQ0FBQyxDQUFDLE1BQU07O2tCQUNKLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7WUFDdkQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMseUJBQ0ssS0FBSyxJQUNSLFFBQVEsb0JBQU8sS0FBSyxDQUFDLFFBQVEsRUFBSyxhQUFhLEtBQy9DO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEVudGl0eVN0YXRlIH0gZnJvbSAnLi9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHkuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxFbnRpdHlTdGF0ZTogRW50aXR5U3RhdGU8YW55PiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgZm9yIHJldXNpbmcgcmVkdWNlciBsb2dpYyBmb3IgbXVsdGlwbGUgZW50aXRpZXNcbiAqXG4gKiBVdGlsaXplcyBlbnRpdHlJZCBtZXRhIGZpZWxkIHRvIHRhcmdldCBlbnRpdHkgYnkgaWQgaW4gYWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyOiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogRW50aXR5U3RhdGU8VD4gPSBpbml0aWFsRW50aXR5U3RhdGUsXG4gICAgYWN0aW9uOiBFbnRpdHlBY3Rpb25cbiAgKTogRW50aXR5U3RhdGU8VD4gPT4ge1xuICAgIGxldCBpZHM6IHN0cmluZ1tdO1xuICAgIGxldCBwYXJ0aXRpb25QYXlsb2FkID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGlkcyA9IFtdLmNvbmNhdChhY3Rpb24ubWV0YS5lbnRpdHlJZCk7XG5cbiAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBlbnRpdGllc1xuICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eVJlbW92ZSkge1xuICAgICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5SWQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gaW5pdGlhbEVudGl0eVN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKGlkcy5pbmNsdWRlcyhjdXIpKSB7XG4gICAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICByZXR1cm4gcmVtb3ZlZCA/IHsgZW50aXRpZXM6IG5ld0VudGl0aWVzIH0gOiBzdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJ0aXRpb25QYXlsb2FkID1cbiAgICAgICAgQXJyYXkuaXNBcnJheShhY3Rpb24ubWV0YS5lbnRpdHlJZCkgJiYgQXJyYXkuaXNBcnJheShhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRpdHlVcGRhdGVzOiB7IFtpZDogc3RyaW5nXTogVCB9ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWQgPSBpZHNbaV07XG4gICAgICBjb25zdCBzdWJBY3Rpb24gPSBwYXJ0aXRpb25QYXlsb2FkXG4gICAgICAgID8geyAuLi5hY3Rpb24sIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkW2ldIH1cbiAgICAgICAgOiBhY3Rpb247XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUuZW50aXRpZXNbaWRdLCBzdWJBY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGVudGl0eVVwZGF0ZXNbaWRdID0gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVVwZGF0ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczogeyAuLi5zdGF0ZS5lbnRpdGllcywgLi4uZW50aXR5VXBkYXRlcyB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=