/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return function (state, action) {
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
                    var newEntities = Object.keys(state.entities).reduce(function (acc, cur) {
                        if (ids.indexOf(cur) > -1) {
                            removed_1 = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
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
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLE1BQU0sS0FBTyxrQkFBa0IsR0FBcUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzs7Ozs7Ozs7O0FBT3BFLE1BQU0sVUFBVSxhQUFhLENBQzNCLFVBQWtCLEVBQ2xCLE9BQXdDO0lBRXhDLE9BQU8sVUFDTCxLQUEwQyxFQUMxQyxNQUFvQjtRQURwQixzQkFBQSxFQUFBLDBCQUEwQzs7WUFHdEMsR0FBYTs7WUFDYixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLElBQ0UsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFDbEM7WUFDQSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRDLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDakMsT0FBTyxrQkFBa0IsQ0FBQztpQkFDM0I7cUJBQU07O3dCQUNELFNBQU8sR0FBRyxLQUFLOzt3QkFDYixXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQzlELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs0QkFDekIsU0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hDO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBRU4sT0FBTyxTQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3BEO2FBQ0Y7WUFFRCxnQkFBZ0I7Z0JBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7O1lBRUssYUFBYSxHQUF3QixFQUFFO1FBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDN0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O2dCQUNYLFNBQVMsR0FBRyxnQkFBZ0I7Z0JBQ2hDLENBQUMsc0JBQU0sTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUN6QyxDQUFDLENBQUMsTUFBTTs7Z0JBQ0osUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztZQUN2RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qyw0QkFDSyxLQUFLLElBQ1IsUUFBUSx1QkFBTyxLQUFLLENBQUMsUUFBUSxFQUFLLGFBQWEsS0FDL0M7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuL2VudGl0eS1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbEVudGl0eVN0YXRlOiBFbnRpdHlTdGF0ZTxhbnk+ID0geyBlbnRpdGllczoge30gfTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciBmb3IgcmV1c2luZyByZWR1Y2VyIGxvZ2ljIGZvciBtdWx0aXBsZSBlbnRpdGllc1xuICpcbiAqIFV0aWxpemVzIGVudGl0eUlkIG1ldGEgZmllbGQgdG8gdGFyZ2V0IGVudGl0eSBieSBpZCBpbiBhY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI6IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbikge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBFbnRpdHlTdGF0ZTxUPiA9IGluaXRpYWxFbnRpdHlTdGF0ZSxcbiAgICBhY3Rpb246IEVudGl0eUFjdGlvblxuICApOiBFbnRpdHlTdGF0ZTxUPiA9PiB7XG4gICAgbGV0IGlkczogc3RyaW5nW107XG4gICAgbGV0IHBhcnRpdGlvblBheWxvYWQgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5SWQgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgaWRzID0gW10uY29uY2F0KGFjdGlvbi5tZXRhLmVudGl0eUlkKTtcblxuICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGVudGl0aWVzXG4gICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5UmVtb3ZlKSB7XG4gICAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBpbml0aWFsRW50aXR5U3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YoY3VyKSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWNjW2N1cl0gPSBzdGF0ZS5lbnRpdGllc1tjdXJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICByZXR1cm4gcmVtb3ZlZCA/IHsgZW50aXRpZXM6IG5ld0VudGl0aWVzIH0gOiBzdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJ0aXRpb25QYXlsb2FkID1cbiAgICAgICAgQXJyYXkuaXNBcnJheShhY3Rpb24ubWV0YS5lbnRpdHlJZCkgJiYgQXJyYXkuaXNBcnJheShhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRpdHlVcGRhdGVzOiB7IFtpZDogc3RyaW5nXTogVCB9ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWQgPSBpZHNbaV07XG4gICAgICBjb25zdCBzdWJBY3Rpb24gPSBwYXJ0aXRpb25QYXlsb2FkXG4gICAgICAgID8geyAuLi5hY3Rpb24sIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkW2ldIH1cbiAgICAgICAgOiBhY3Rpb247XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUuZW50aXRpZXNbaWRdLCBzdWJBY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGVudGl0eVVwZGF0ZXNbaWRdID0gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVVwZGF0ZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllczogeyAuLi5zdGF0ZS5lbnRpdGllcywgLi4uZW50aXR5VXBkYXRlcyB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=