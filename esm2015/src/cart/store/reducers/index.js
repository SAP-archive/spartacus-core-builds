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
import { activeCartReducer, cartEntitiesReducer } from './multi-cart.reducer';
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
    };
}
/** @type {?} */
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQWtCLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUU5RSxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBWSxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3pELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUErQixjQUFjLENBQUM7O0FBRXBFLE1BQU0sT0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBMkI7SUFFM0I7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUNFLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU07WUFDbEMsTUFBTSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsbUJBQW1CLEVBQ25EO1lBQ0EsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDOzs7OztBQUVoRSxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxxQkFBcUIsR0FBdUIsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFOUUsTUFBTSxPQUFPLHFCQUFxQixHQUU5QixJQUFJLGNBQWMsQ0FBbUMsbUJBQW1CLENBQUM7Ozs7QUFFN0UsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLDRCQUE0QixDQUNqQyxrQkFBa0IsRUFDbEIsbUJBQW1CLENBQ3BCO1FBQ0QsTUFBTSxFQUFFLGlCQUFpQjtLQUMxQixDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7SUFDaEQsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixVQUFVLEVBQUUsb0JBQW9CO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBBY3Rpb25SZWR1Y2VyTWFwLCBNZXRhUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDYXJ0c1N0YXRlLCBDYXJ0U3RhdGUsIENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGUsIE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcbmltcG9ydCB7IGFjdGl2ZUNhcnRSZWR1Y2VyLCBjYXJ0RW50aXRpZXNSZWR1Y2VyIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgYWN0aXZlOiBsb2FkZXJSZWR1Y2VyPENhcnRTdGF0ZT4oQ0FSVF9EQVRBLCBjYXJ0UmVkdWNlciksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+XG4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT4+KCdDYXJ0UmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDYXJ0U3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PlxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoXG4gICAgICBhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUIHx8XG4gICAgICBhY3Rpb24udHlwZSA9PT0gQ2hlY2tvdXRBY3Rpb25zLlBMQUNFX09SREVSX1NVQ0NFU1NcbiAgICApIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyQ2FydFN0YXRlXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTXVsdGlDYXJ0U3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PlxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0TWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJNdWx0aUNhcnRTdGF0ZV07XG5cbmV4cG9ydCBjb25zdCBtdWx0aUNhcnRSZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPj4oJ011bHRpQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aUNhcnRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgY2FydHM6IGVudGl0eVByb2Nlc3Nlc0xvYWRlclJlZHVjZXI8Q2FydD4oXG4gICAgICBNVUxUSV9DQVJUX0ZFQVRVUkUsXG4gICAgICBjYXJ0RW50aXRpZXNSZWR1Y2VyXG4gICAgKSxcbiAgICBhY3RpdmU6IGFjdGl2ZUNhcnRSZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRNdWx0aUNhcnRSZWR1Y2Vycyxcbn07XG4iXX0=