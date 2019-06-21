/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var initialEntityState = { entities: {} };
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
    function (state, action) {
        if (state === void 0) { state = initialEntityState; }
        /** @type {?} */
        var ids;
        /** @type {?} */
        var partitionPayload = false;
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
                    var removed_1 = false;
                    /** @type {?} */
                    var newEntities = Object.keys(state.entities).reduce((/**
                     * @param {?} acc
                     * @param {?} cur
                     * @return {?}
                     */
                    function (acc, cur) {
                        if (ids.includes(cur)) {
                            removed_1 = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }), {});
                    return removed_1 ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        /** @type {?} */
        var entityUpdates = {};
        for (var i = 0; i < ids.length; i++) {
            /** @type {?} */
            var id = ids[i];
            /** @type {?} */
            var subAction = partitionPayload
                ? tslib_1.__assign({}, action, { payload: action.payload[i] }) : action;
            /** @type {?} */
            var newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return tslib_1.__assign({}, state, { entities: tslib_1.__assign({}, state.entities, entityUpdates) });
        }
        return state;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzs7Ozs7Ozs7O0FBT3BFLE1BQU0sVUFBVSxhQUFhLENBQzNCLFVBQWtCLEVBQ2xCLE9BQXdDO0lBRXhDOzs7OztJQUFPLFVBQ0wsS0FBMEMsRUFDMUMsTUFBb0I7UUFEcEIsc0JBQUEsRUFBQSwwQkFBMEM7O1lBR3RDLEdBQWE7O1lBQ2IsZ0JBQWdCLEdBQUcsS0FBSztRQUM1QixJQUNFLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQ2xDO1lBQ0EsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QywyQkFBMkI7WUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLE9BQU8sa0JBQWtCLENBQUM7aUJBQzNCO3FCQUFNOzt3QkFDRCxTQUFPLEdBQUcsS0FBSzs7d0JBQ2IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7O29CQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQzlELElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDckIsU0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hDO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7b0JBRU4sT0FBTyxTQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3BEO2FBQ0Y7WUFFRCxnQkFBZ0I7Z0JBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7O1lBRUssYUFBYSxHQUF3QixFQUFFO1FBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDN0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2dCQUNYLFNBQVMsR0FBRyxnQkFBZ0I7Z0JBQ2hDLENBQUMsc0JBQU0sTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUN6QyxDQUFDLENBQUMsTUFBTTs7Z0JBQ0osUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztZQUN2RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qyw0QkFDSyxLQUFLLElBQ1IsUUFBUSx1QkFBTyxLQUFLLENBQUMsUUFBUSxFQUFLLGFBQWEsS0FDL0M7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuL2VudGl0eS1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbEVudGl0eVN0YXRlOiBFbnRpdHlTdGF0ZTxhbnk+ID0geyBlbnRpdGllczoge30gfTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciBmb3IgcmV1c2luZyByZWR1Y2VyIGxvZ2ljIGZvciBtdWx0aXBsZSBlbnRpdGllc1xuICpcbiAqIFV0aWxpemVzIGVudGl0eUlkIG1ldGEgZmllbGQgdG8gdGFyZ2V0IGVudGl0eSBieSBpZCBpbiBhY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI6IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbikge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBFbnRpdHlTdGF0ZTxUPiA9IGluaXRpYWxFbnRpdHlTdGF0ZSxcbiAgICBhY3Rpb246IEVudGl0eUFjdGlvblxuICApOiBFbnRpdHlTdGF0ZTxUPiA9PiB7XG4gICAgbGV0IGlkczogc3RyaW5nW107XG4gICAgbGV0IHBhcnRpdGlvblBheWxvYWQgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5SWQgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgaWRzID0gW10uY29uY2F0KGFjdGlvbi5tZXRhLmVudGl0eUlkKTtcblxuICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGVudGl0aWVzXG4gICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5UmVtb3ZlKSB7XG4gICAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBpbml0aWFsRW50aXR5U3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKGN1cikpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHJldHVybiByZW1vdmVkID8geyBlbnRpdGllczogbmV3RW50aXRpZXMgfSA6IHN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnRpdGlvblBheWxvYWQgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbi5tZXRhLmVudGl0eUlkKSAmJiBBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eVVwZGF0ZXM6IHsgW2lkOiBzdHJpbmddOiBUIH0gPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1tpXTtcbiAgICAgIGNvbnN0IHN1YkFjdGlvbiA9IHBhcnRpdGlvblBheWxvYWRcbiAgICAgICAgPyB7IC4uLmFjdGlvbiwgcGF5bG9hZDogYWN0aW9uLnBheWxvYWRbaV0gfVxuICAgICAgICA6IGFjdGlvbjtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZS5lbnRpdGllc1tpZF0sIHN1YkFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgZW50aXR5VXBkYXRlc1tpZF0gPSBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZW50aXR5VXBkYXRlcykubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7IC4uLnN0YXRlLmVudGl0aWVzLCAuLi5lbnRpdHlVcGRhdGVzIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==