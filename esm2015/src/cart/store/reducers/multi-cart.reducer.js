/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartActions } from '../actions/index';
/** @type {?} */
export const activeCartInitialState = '';
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function activeCartReducer(state = activeCartInitialState, action) {
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
export const cartEntitiesInitialState = undefined;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function cartEntitiesReducer(state = cartEntitiesInitialState, action) {
    switch (action.type) {
        case CartActions.LOAD_MULTI_CART_SUCCESS:
        case CartActions.CREATE_MULTI_CART_SUCCESS:
            return action.payload.cart;
        case CartActions.SET_FRESH_CART:
            return action.payload;
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvbXVsdGktY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxFQUFFOzs7Ozs7QUFFeEMsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixLQUFLLEdBQUcsc0JBQXNCLEVBQzlCLE1BQTZEO0lBRTdELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQywwREFBMEQ7UUFDMUQsS0FBSyxXQUFXLENBQUMsaUJBQWlCO1lBQ2hDLElBQ0UsTUFBTSxDQUFDLE9BQU87Z0JBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTO2dCQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQy9CO2dCQUNBLE9BQU8sbUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQVUsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsS0FBSyxXQUFXLENBQUMsV0FBVztZQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixPQUFPLHNCQUFzQixDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsU0FBUzs7Ozs7O0FBRWpELE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsS0FBSyxHQUFHLHdCQUF3QixFQUNoQyxNQUFvQjtJQUVwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDekMsS0FBSyxXQUFXLENBQUMseUJBQXlCO1lBQ3hDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0IsS0FBSyxXQUFXLENBQUMsY0FBYztZQUM3QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDekI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2FydEluaXRpYWxTdGF0ZSA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlQ2FydFJlZHVjZXIoXG4gIHN0YXRlID0gYWN0aXZlQ2FydEluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWN0aW9uIHwgQ2FydEFjdGlvbnMuTXVsdGlDYXJ0QWN0aW9uc1xuKTogc3RyaW5nIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIC8vIHBvaW50IHRvIGBmcmVzaGAgY2FydCB3aGVuIHdlIGFyZSBjcmVhdGluZy9tZXJnaW5nIGNhcnRcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9NVUxUSV9DQVJUOlxuICAgICAgaWYgKFxuICAgICAgICBhY3Rpb24ucGF5bG9hZCAmJlxuICAgICAgICBhY3Rpb24ucGF5bG9hZC5leHRyYURhdGEgJiZcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuZXh0cmFEYXRhLmFjdGl2ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ubWV0YS5lbnRpdHlJZCBhcyBzdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5SRU1PVkVfQ0FSVDpcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNhcnRJbml0aWFsU3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgY2FydEVudGl0aWVzSW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydEVudGl0aWVzUmVkdWNlcihcbiAgc3RhdGUgPSBjYXJ0RW50aXRpZXNJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogTG9hZGVyQWN0aW9uXG4pOiBDYXJ0IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmNhcnQ7XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5TRVRfRlJFU0hfQ0FSVDpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=