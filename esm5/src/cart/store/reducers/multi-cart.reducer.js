/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CartActions } from '../actions/index';
/** @type {?} */
export var activeCartInitialState = '';
/** @type {?} */
export var wishListinitialState = '';
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
    if (state === void 0) { state = wishListinitialState; }
    switch (action.type) {
        case CartActions.CREATE_WISH_LIST_SUCCESS:
        case CartActions.LOAD_WISH_LIST_SUCCESS:
            return (/** @type {?} */ (action.meta.entityId));
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvbXVsdGktY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sS0FBTyxzQkFBc0IsR0FBRyxFQUFFOztBQUN4QyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsRUFBRTs7Ozs7O0FBRXRDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsS0FBOEIsRUFDOUIsTUFHZ0M7SUFKaEMsc0JBQUEsRUFBQSw4QkFBOEI7SUFNOUIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLHVCQUF1QixDQUFDO1FBQ3pDLEtBQUssV0FBVyxDQUFDLHlCQUF5QjtZQUN4QyxJQUNFLE1BQU0sQ0FBQyxPQUFPO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUMvQjtnQkFDQSxPQUFPLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFVLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILEtBQUssV0FBVyxDQUFDLFdBQVc7WUFDMUIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDNUIsT0FBTyxzQkFBc0IsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFHLFNBQVM7Ozs7OztBQUVqRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEtBQWdDLEVBQ2hDLE1BQW9CO0lBRHBCLHNCQUFBLEVBQUEsZ0NBQWdDO0lBR2hDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxLQUFLLFdBQVcsQ0FBQyxzQkFBc0I7WUFDckMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLFdBQVcsQ0FBQyxjQUFjO1lBQzdCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUN6QjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsS0FBNEIsRUFDNUIsTUFBbUM7SUFEbkMsc0JBQUEsRUFBQSw0QkFBNEI7SUFHNUIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLHdCQUF3QixDQUFDO1FBQzFDLEtBQUssV0FBVyxDQUFDLHNCQUFzQjtZQUNyQyxPQUFPLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFVLENBQUM7S0FDekM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2FydEluaXRpYWxTdGF0ZSA9ICcnO1xuZXhwb3J0IGNvbnN0IHdpc2hMaXN0aW5pdGlhbFN0YXRlID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmVDYXJ0UmVkdWNlcihcbiAgc3RhdGUgPSBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlLFxuICBhY3Rpb246XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWN0aW9uXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0RW50cnlBY3Rpb25cbiAgICB8IENhcnRBY3Rpb25zLk11bHRpQ2FydEFjdGlvbnNcbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICAgIGlmIChcbiAgICAgICAgYWN0aW9uLnBheWxvYWQgJiZcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuZXh0cmFEYXRhICYmXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLmV4dHJhRGF0YS5hY3RpdmVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYWN0aW9uLm1ldGEuZW50aXR5SWQgYXMgc3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIGNhc2UgQ2FydEFjdGlvbnMuUkVNT1ZFX0NBUlQ6XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRFbnRpdGllc0luaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRFbnRpdGllc1JlZHVjZXIoXG4gIHN0YXRlID0gY2FydEVudGl0aWVzSW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IExvYWRlckFjdGlvblxuKTogQ2FydCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfV0lTSF9MSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuY2FydDtcbiAgICBjYXNlIENhcnRBY3Rpb25zLlNFVF9GUkVTSF9DQVJUOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpc2hMaXN0UmVkdWNlcihcbiAgc3RhdGUgPSB3aXNoTGlzdGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDYXJ0QWN0aW9ucy5XaXNoTGlzdEFjdGlvbnNcbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfV0lTSF9MSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLm1ldGEuZW50aXR5SWQgYXMgc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==