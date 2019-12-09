/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/store/actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { entityLoaderReducer } from '../../../state/utils/entity-loader/entity-loader.reducer';
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
        carts: entityLoaderReducer(MULTI_CART_FEATURE, cartEntitiesReducer),
        active: activeCartReducer,
        wishList: wishListReducer,
    };
}
/** @type {?} */
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQWtCLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFOUIsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxhQUFhLENBQVksU0FBUyxFQUFFLFdBQVcsQ0FBQztLQUN6RCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBK0IsY0FBYyxDQUFDOztBQUVwRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLG1CQUFtQixFQUNuRDtZQUNBLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQzs7Ozs7QUFFaEUsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQXVCLENBQUMsbUJBQW1CLENBQUM7O0FBRTlFLE1BQU0sT0FBTyxxQkFBcUIsR0FFOUIsSUFBSSxjQUFjLENBQW1DLG1CQUFtQixDQUFDOzs7O0FBRTdFLE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTztRQUNMLEtBQUssRUFBRSxtQkFBbUIsQ0FBTyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztRQUN6RSxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyx3QkFBd0IsR0FBYTtJQUNoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFVBQVUsRUFBRSxvQkFBb0I7Q0FDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXIsIEFjdGlvblJlZHVjZXJNYXAsIE1ldGFSZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBlbnRpdHlMb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDYXJ0c1N0YXRlLCBDYXJ0U3RhdGUsIENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGUsIE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIGFjdGl2ZUNhcnRSZWR1Y2VyLFxuICBjYXJ0RW50aXRpZXNSZWR1Y2VyLFxuICB3aXNoTGlzdFJlZHVjZXIsXG59IGZyb20gJy4vbXVsdGktY2FydC5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogbG9hZGVyUmVkdWNlcjxDYXJ0U3RhdGU+KENBUlRfREFUQSwgY2FydFJlZHVjZXIpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+PignQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCB8fFxuICAgICAgYWN0aW9uLnR5cGUgPT09IENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUl9TVUNDRVNTXG4gICAgKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckNhcnRTdGF0ZV07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck11bHRpQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVQpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpQ2FydE1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyTXVsdGlDYXJ0U3RhdGVdO1xuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT4+KCdNdWx0aUNhcnRSZWR1Y2VycycpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlDYXJ0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnRzOiBlbnRpdHlMb2FkZXJSZWR1Y2VyPENhcnQ+KE1VTFRJX0NBUlRfRkVBVFVSRSwgY2FydEVudGl0aWVzUmVkdWNlciksXG4gICAgYWN0aXZlOiBhY3RpdmVDYXJ0UmVkdWNlcixcbiAgICB3aXNoTGlzdDogd2lzaExpc3RSZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRNdWx0aUNhcnRSZWR1Y2Vycyxcbn07XG4iXX0=