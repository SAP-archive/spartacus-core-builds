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
        case CartActions.SET_ACTIVE_CART_ID:
            return action.payload;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvbXVsdGktY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxFQUFFOzs7Ozs7QUFFeEMsTUFBTSxVQUFVLGlCQUFpQixDQUMvQixLQUFLLEdBQUcsc0JBQXNCLEVBQzlCLE1BQTZEO0lBRTdELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN6QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUI7WUFDeEMsSUFDRSxNQUFNLENBQUMsT0FBTztnQkFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVM7Z0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDL0I7Z0JBQ0EsT0FBTyxtQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBVSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxLQUFLLFdBQVcsQ0FBQyxXQUFXO1lBQzFCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sc0JBQXNCLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtRQUNILEtBQUssV0FBVyxDQUFDLGtCQUFrQjtZQUNqQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDekI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFHLFNBQVM7Ozs7OztBQUVqRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEtBQUssR0FBRyx3QkFBd0IsRUFDaEMsTUFBb0I7SUFFcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLHVCQUF1QixDQUFDO1FBQ3pDLEtBQUssV0FBVyxDQUFDLHlCQUF5QjtZQUN4QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssV0FBVyxDQUFDLGNBQWM7WUFDN0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNhcnRJbml0aWFsU3RhdGUgPSAnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZUNhcnRSZWR1Y2VyKFxuICBzdGF0ZSA9IGFjdGl2ZUNhcnRJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFjdGlvbiB8IENhcnRBY3Rpb25zLk11bHRpQ2FydEFjdGlvbnNcbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICAgIGlmIChcbiAgICAgICAgYWN0aW9uLnBheWxvYWQgJiZcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuZXh0cmFEYXRhICYmXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLmV4dHJhRGF0YS5hY3RpdmVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gYWN0aW9uLm1ldGEuZW50aXR5SWQgYXMgc3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIGNhc2UgQ2FydEFjdGlvbnMuUkVNT1ZFX0NBUlQ6XG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIGNhc2UgQ2FydEFjdGlvbnMuU0VUX0FDVElWRV9DQVJUX0lEOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRFbnRpdGllc0luaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRFbnRpdGllc1JlZHVjZXIoXG4gIHN0YXRlID0gY2FydEVudGl0aWVzSW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IExvYWRlckFjdGlvblxuKTogQ2FydCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLkxPQURfTVVMVElfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ1JFQVRFX01VTFRJX0NBUlRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5jYXJ0O1xuICAgIGNhc2UgQ2FydEFjdGlvbnMuU0VUX0ZSRVNIX0NBUlQ6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19