/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/store/actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { entityProcessesLoaderReducer } from '../../../state/utils/entity-processes-loader/entity-processes-loader.reducer';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { CART_DATA } from '../cart-state';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
import { reducer as cartReducer } from './cart.reducer';
import { activeCartReducer, cartEntitiesReducer, wishListReducer, } from './multi-cart.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        active: loaderReducer(CART_DATA, cartReducer),
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('CartReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCartState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT ||
            action.type === CheckoutActions.PLACE_ORDER_SUCCESS) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const metaReducers = [clearCartState];
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearMultiCartState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export const multiCartMetaReducers = [clearMultiCartState];
/** @type {?} */
export const multiCartReducerToken = new InjectionToken('MultiCartReducers');
/**
 * @return {?}
 */
export function getMultiCartReducers() {
    return {
        carts: entityProcessesLoaderReducer(MULTI_CART_FEATURE, cartEntitiesReducer),
        active: activeCartReducer,
        wishList: wishListReducer,
    };
}
/** @type {?} */
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQWtCLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFOUIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxhQUFhLENBQVksU0FBUyxFQUFFLFdBQVcsQ0FBQztLQUN6RCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBK0IsY0FBYyxDQUFDOztBQUVwRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLG1CQUFtQixFQUNuRDtZQUNBLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQzs7Ozs7QUFFaEUsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQXVCLENBQUMsbUJBQW1CLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxxQkFBcUIsR0FFOUIsSUFBSSxjQUFjLENBQW1DLG1CQUFtQixDQUFDOzs7O0FBRTdFLE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTztRQUNMLEtBQUssRUFBRSw0QkFBNEIsQ0FDakMsa0JBQWtCLEVBQ2xCLG1CQUFtQixDQUNwQjtRQUNELE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFhO0lBQ2hELE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsVUFBVSxFQUFFLG9CQUFvQjtDQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IGVudGl0eVByb2Nlc3Nlc0xvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgQ2FydHNTdGF0ZSwgQ2FydFN0YXRlLCBDQVJUX0RBVEEgfSBmcm9tICcuLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFN0YXRlLCBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgY2FydFJlZHVjZXIgfSBmcm9tICcuL2NhcnQucmVkdWNlcic7XG5pbXBvcnQge1xuICBhY3RpdmVDYXJ0UmVkdWNlcixcbiAgY2FydEVudGl0aWVzUmVkdWNlcixcbiAgd2lzaExpc3RSZWR1Y2VyLFxufSBmcm9tICcuL211bHRpLWNhcnQucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IGxvYWRlclJlZHVjZXI8Q2FydFN0YXRlPihDQVJUX0RBVEEsIGNhcnRSZWR1Y2VyKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPj4oJ0NhcnRSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhcnRTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVQgfHxcbiAgICAgIGFjdGlvbi50eXBlID09PSBDaGVja291dEFjdGlvbnMuUExBQ0VfT1JERVJfU1VDQ0VTU1xuICAgICkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJDYXJ0U3RhdGVdO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNdWx0aUNhcnRTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aUNhcnRNZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhck11bHRpQ2FydFN0YXRlXTtcblxuZXhwb3J0IGNvbnN0IG11bHRpQ2FydFJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8TXVsdGlDYXJ0U3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8TXVsdGlDYXJ0U3RhdGU+PignTXVsdGlDYXJ0UmVkdWNlcnMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE11bHRpQ2FydFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8TXVsdGlDYXJ0U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0czogZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVkdWNlcjxDYXJ0PihcbiAgICAgIE1VTFRJX0NBUlRfRkVBVFVSRSxcbiAgICAgIGNhcnRFbnRpdGllc1JlZHVjZXJcbiAgICApLFxuICAgIGFjdGl2ZTogYWN0aXZlQ2FydFJlZHVjZXIsXG4gICAgd2lzaExpc3Q6IHdpc2hMaXN0UmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpQ2FydFJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IG11bHRpQ2FydFJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0TXVsdGlDYXJ0UmVkdWNlcnMsXG59O1xuIl19