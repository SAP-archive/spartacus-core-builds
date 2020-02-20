import { __assign } from "tslib";
export var initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 */
export function entityReducer(entityType, reducer) {
    return function (state, action) {
        if (state === void 0) { state = initialEntityState; }
        var ids;
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
                    var removed_1 = false;
                    var newEntities = Object.keys(state.entities).reduce(function (acc, cur) {
                        if (ids.includes(cur)) {
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
        var entityUpdates = {};
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            var subAction = partitionPayload
                ? __assign(__assign({}, action), { payload: action.payload[i] }) : action;
            var newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return __assign(__assign({}, state), { entities: __assign(__assign({}, state.entities), entityUpdates) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxNQUFNLENBQUMsSUFBTSxrQkFBa0IsR0FBcUIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFFckU7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQzNCLFVBQWtCLEVBQ2xCLE9BQXdDO0lBRXhDLE9BQU8sVUFDTCxLQUEwQyxFQUMxQyxNQUFvQjtRQURwQixzQkFBQSxFQUFBLDBCQUEwQztRQUcxQyxJQUFJLEdBQWEsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixJQUNFLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQ2xDO1lBQ0EsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0QywyQkFBMkI7WUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLE9BQU8sa0JBQWtCLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLElBQUksU0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7d0JBQzlELElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDckIsU0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ0wsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hDO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFFUCxPQUFPLFNBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDcEQ7YUFDRjtZQUVELGdCQUFnQjtnQkFDZCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQztRQUVELElBQU0sYUFBYSxHQUF3QixFQUFFLENBQUM7UUFFOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQU0sU0FBUyxHQUFHLGdCQUFnQjtnQkFDaEMsQ0FBQyx1QkFBTSxNQUFNLEtBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQ3pDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDWCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qyw2QkFDSyxLQUFLLEtBQ1IsUUFBUSx3QkFBTyxLQUFLLENBQUMsUUFBUSxHQUFLLGFBQWEsS0FDL0M7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuL2VudGl0eS1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbEVudGl0eVN0YXRlOiBFbnRpdHlTdGF0ZTxhbnk+ID0geyBlbnRpdGllczoge30gfTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciBmb3IgcmV1c2luZyByZWR1Y2VyIGxvZ2ljIGZvciBtdWx0aXBsZSBlbnRpdGllc1xuICpcbiAqIFV0aWxpemVzIGVudGl0eUlkIG1ldGEgZmllbGQgdG8gdGFyZ2V0IGVudGl0eSBieSBpZCBpbiBhY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI6IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbikge1xuICByZXR1cm4gKFxuICAgIHN0YXRlOiBFbnRpdHlTdGF0ZTxUPiA9IGluaXRpYWxFbnRpdHlTdGF0ZSxcbiAgICBhY3Rpb246IEVudGl0eUFjdGlvblxuICApOiBFbnRpdHlTdGF0ZTxUPiA9PiB7XG4gICAgbGV0IGlkczogc3RyaW5nW107XG4gICAgbGV0IHBhcnRpdGlvblBheWxvYWQgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBhY3Rpb24ubWV0YSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5SWQgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgaWRzID0gW10uY29uY2F0KGFjdGlvbi5tZXRhLmVudGl0eUlkKTtcblxuICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGVudGl0aWVzXG4gICAgICBpZiAoYWN0aW9uLm1ldGEuZW50aXR5UmVtb3ZlKSB7XG4gICAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBpbml0aWFsRW50aXR5U3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKGN1cikpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NbY3VyXSA9IHN0YXRlLmVudGl0aWVzW2N1cl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHJldHVybiByZW1vdmVkID8geyBlbnRpdGllczogbmV3RW50aXRpZXMgfSA6IHN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcnRpdGlvblBheWxvYWQgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbi5tZXRhLmVudGl0eUlkKSAmJiBBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eVVwZGF0ZXM6IHsgW2lkOiBzdHJpbmddOiBUIH0gPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGlkc1tpXTtcbiAgICAgIGNvbnN0IHN1YkFjdGlvbiA9IHBhcnRpdGlvblBheWxvYWRcbiAgICAgICAgPyB7IC4uLmFjdGlvbiwgcGF5bG9hZDogYWN0aW9uLnBheWxvYWRbaV0gfVxuICAgICAgICA6IGFjdGlvbjtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZS5lbnRpdGllc1tpZF0sIHN1YkFjdGlvbik7XG4gICAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgICAgZW50aXR5VXBkYXRlc1tpZF0gPSBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZW50aXR5VXBkYXRlcykubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiB7IC4uLnN0YXRlLmVudGl0aWVzLCAuLi5lbnRpdHlVcGRhdGVzIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==