/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartActions } from '../actions/index';
/** @type {?} */
export var activeCartInitialState = '';
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function activeCartReducer(state, action) {
    if (state === void 0) { state = activeCartInitialState; }
    switch (action.type) {
        case CartActions.LOAD_MULTI_CART_SUCCESS:
        case CartActions.CREATE_MULTI_CART_SUCCESS:
        // point to `fresh` cart when we are creating/merging cart
        case CartActions.CREATE_MULTI_CART:
            if (action.payload &&
                action.payload.extraData &&
                action.payload.extraData.active) {
                return (/** @type {?} */ (action.meta.entityId));
            }
            else {
                return state;
            }
        case CartActions.REMOVE_CART:
            if (action.payload === state) {
                return activeCartInitialState;
            }
            else {
                return state;
            }
    }
    return state;
}
/** @type {?} */
export var cartEntitiesInitialState = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function cartEntitiesReducer(state, action) {
    if (state === void 0) { state = cartEntitiesInitialState; }
    switch (action.type) {
        case CartActions.LOAD_MULTI_CART_SUCCESS:
        case CartActions.CREATE_MULTI_CART_SUCCESS:
            return action.payload.cart;
        case CartActions.SET_FRESH_CART:
            return action.payload;
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvbXVsdGktY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxFQUFFOzs7Ozs7QUFFeEMsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixLQUE4QixFQUM5QixNQUE2RDtJQUQ3RCxzQkFBQSxFQUFBLDhCQUE4QjtJQUc5QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDekMsS0FBSyxXQUFXLENBQUMseUJBQXlCLENBQUM7UUFDM0MsMERBQTBEO1FBQzFELEtBQUssV0FBVyxDQUFDLGlCQUFpQjtZQUNoQyxJQUNFLE1BQU0sQ0FBQyxPQUFPO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUMvQjtnQkFDQSxPQUFPLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFVLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxzQkFBc0IsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLFNBQVM7Ozs7OztBQUVqRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEtBQWdDLEVBQ2hDLE1BQW9CO0lBRHBCLHNCQUFBLEVBQUEsZ0NBQWdDO0lBR2hDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUI7WUFDeEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLFdBQVcsQ0FBQyxjQUFjO1lBQzdCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUN6QjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlckFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVDYXJ0UmVkdWNlcihcbiAgc3RhdGUgPSBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBY3Rpb24gfCBDYXJ0QWN0aW9ucy5NdWx0aUNhcnRBY3Rpb25zXG4pOiBzdHJpbmcge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5MT0FEX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgLy8gcG9pbnQgdG8gYGZyZXNoYCBjYXJ0IHdoZW4gd2UgYXJlIGNyZWF0aW5nL21lcmdpbmcgY2FydFxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX01VTFRJX0NBUlQ6XG4gICAgICBpZiAoXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkICYmXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLmV4dHJhRGF0YSAmJlxuICAgICAgICBhY3Rpb24ucGF5bG9hZC5leHRyYURhdGEuYWN0aXZlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5tZXRhLmVudGl0eUlkIGFzIHN0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICBjYXNlIENhcnRBY3Rpb25zLlJFTU9WRV9DQVJUOlxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkID09PSBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gYWN0aXZlQ2FydEluaXRpYWxTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0RW50aXRpZXNJbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0RW50aXRpZXNSZWR1Y2VyKFxuICBzdGF0ZSA9IGNhcnRFbnRpdGllc0luaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBMb2FkZXJBY3Rpb25cbik6IENhcnQge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5MT0FEX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuY2FydDtcbiAgICBjYXNlIENhcnRBY3Rpb25zLlNFVF9GUkVTSF9DQVJUOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==