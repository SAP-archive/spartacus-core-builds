/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartActions } from '../actions/index';
/** @type {?} */
export var activeCartInitialState = '';
/** @type {?} */
export var wishListInitialState = '';
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
        case CartActions.CREATE_WISH_LIST_SUCCESS:
        case CartActions.LOAD_WISH_LIST_SUCCESS:
            return action.payload.cart;
        case CartActions.SET_FRESH_CART:
            return action.payload;
    }
    return state;
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function wishListReducer(state, action) {
    if (state === void 0) { state = wishListInitialState; }
    switch (action.type) {
        case CartActions.CREATE_WISH_LIST_SUCCESS:
        case CartActions.LOAD_WISH_LIST_SUCCESS:
            return (/** @type {?} */ (action.meta.entityId));
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvbXVsdGktY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxFQUFFOztBQUN4QyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsRUFBRTs7Ozs7O0FBRXRDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsS0FBOEIsRUFDOUIsTUFBNkQ7SUFEN0Qsc0JBQUEsRUFBQSw4QkFBOEI7SUFHOUIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLHVCQUF1QixDQUFDO1FBQ3pDLEtBQUssV0FBVyxDQUFDLHlCQUF5QixDQUFDO1FBQzNDLDBEQUEwRDtRQUMxRCxLQUFLLFdBQVcsQ0FBQyxpQkFBaUI7WUFDaEMsSUFDRSxNQUFNLENBQUMsT0FBTztnQkFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDL0I7Z0JBQ0EsT0FBTyxtQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBVSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sc0JBQXNCLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxTQUFTOzs7Ozs7QUFFakQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUFnQyxFQUNoQyxNQUFvQjtJQURwQixzQkFBQSxFQUFBLGdDQUFnQztJQUdoQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDekMsS0FBSyxXQUFXLENBQUMseUJBQXlCLENBQUM7UUFDM0MsS0FBSyxXQUFXLENBQUMsd0JBQXdCLENBQUM7UUFDMUMsS0FBSyxXQUFXLENBQUMsc0JBQXNCO1lBQ3JDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDN0IsS0FBSyxXQUFXLENBQUMsY0FBYztZQUM3QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDekI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLEtBQTRCLEVBQzVCLE1BQW1DO0lBRG5DLHNCQUFBLEVBQUEsNEJBQTRCO0lBRzVCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxLQUFLLFdBQVcsQ0FBQyxzQkFBc0I7WUFDckMsT0FBTyxtQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBVSxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNhcnRJbml0aWFsU3RhdGUgPSAnJztcbmV4cG9ydCBjb25zdCB3aXNoTGlzdEluaXRpYWxTdGF0ZSA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlQ2FydFJlZHVjZXIoXG4gIHN0YXRlID0gYWN0aXZlQ2FydEluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5DYXJ0QWN0aW9uIHwgQ2FydEFjdGlvbnMuTXVsdGlDYXJ0QWN0aW9uc1xuKTogc3RyaW5nIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIC8vIHBvaW50IHRvIGBmcmVzaGAgY2FydCB3aGVuIHdlIGFyZSBjcmVhdGluZy9tZXJnaW5nIGNhcnRcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9NVUxUSV9DQVJUOlxuICAgICAgaWYgKFxuICAgICAgICBhY3Rpb24ucGF5bG9hZCAmJlxuICAgICAgICBhY3Rpb24ucGF5bG9hZC5leHRyYURhdGEgJiZcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuZXh0cmFEYXRhLmFjdGl2ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ubWV0YS5lbnRpdHlJZCBhcyBzdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5SRU1PVkVfQ0FSVDpcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNhcnRJbml0aWFsU3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgY2FydEVudGl0aWVzSW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydEVudGl0aWVzUmVkdWNlcihcbiAgc3RhdGUgPSBjYXJ0RW50aXRpZXNJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogTG9hZGVyQWN0aW9uXG4pOiBDYXJ0IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jYXJ0O1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuU0VUX0ZSRVNIX0NBUlQ6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lzaExpc3RSZWR1Y2VyKFxuICBzdGF0ZSA9IHdpc2hMaXN0SW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENhcnRBY3Rpb25zLldpc2hMaXN0QWN0aW9uc1xuKTogc3RyaW5nIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX1dJU0hfTElTVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9XSVNIX0xJU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ubWV0YS5lbnRpdHlJZCBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19