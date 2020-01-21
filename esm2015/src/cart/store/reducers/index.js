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
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @return {?}
 */
export function getReducers() {
    return {
        active: loaderReducer(CART_DATA, cartReducer),
    };
}
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const reducerToken = new InjectionToken('CartReducers');
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
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
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const metaReducers = [clearCartState];
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
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
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const multiCartMetaReducers = [clearMultiCartState];
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const multiCartReducerToken = new InjectionToken('MultiCartReducers');
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @return {?}
 */
export function getMultiCartReducers() {
    return {
        carts: entityProcessesLoaderReducer(MULTI_CART_FEATURE, cartEntitiesReducer),
        active: activeCartReducer,
        wishList: wishListReducer,
    };
}
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx reducers will no longer be a part of public API
 *
 * TODO(issue:#4507)
 * @type {?}
 */
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzVILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQWtCLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixlQUFlLEdBQ2hCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7OztBQVM5QixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBWSxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3pELENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBK0IsY0FBYyxDQUFDOzs7Ozs7Ozs7QUFTcEUsTUFBTSxPQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7Ozs7Ozs7OztBQVNELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLG1CQUFtQixFQUNuRDtZQUNBLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxPQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUM7Ozs7Ozs7Ozs7QUFTaEUsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUEyQjtJQUUzQjs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxPQUFPLHFCQUFxQixHQUF1QixDQUFDLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFTOUUsTUFBTSxPQUFPLHFCQUFxQixHQUU5QixJQUFJLGNBQWMsQ0FBbUMsbUJBQW1CLENBQUM7Ozs7Ozs7OztBQVM3RSxNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE9BQU87UUFDTCxLQUFLLEVBQUUsNEJBQTRCLENBQ2pDLGtCQUFrQixFQUNsQixtQkFBbUIsQ0FDcEI7UUFDRCxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7SUFDaEQsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixVQUFVLEVBQUUsb0JBQW9CO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBBY3Rpb25SZWR1Y2VyTWFwLCBNZXRhUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBDYXJ0c1N0YXRlLCBDYXJ0U3RhdGUsIENBUlRfREFUQSB9IGZyb20gJy4uL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGUsIE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIGFjdGl2ZUNhcnRSZWR1Y2VyLFxuICBjYXJ0RW50aXRpZXNSZWR1Y2VyLFxuICB3aXNoTGlzdFJlZHVjZXIsXG59IGZyb20gJy4vbXVsdGktY2FydC5yZWR1Y2VyJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IHJlZHVjZXJzIHdpbGwgbm8gbG9uZ2VyIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJXG4gKlxuICogVE9ETyhpc3N1ZTojNDUwNylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogbG9hZGVyUmVkdWNlcjxDYXJ0U3RhdGU+KENBUlRfREFUQSwgY2FydFJlZHVjZXIpLFxuICB9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggcmVkdWNlcnMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+PignQ2FydFJlZHVjZXJzJyk7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAqXG4gKiBzcGFydGFjdXMgbmdyeCByZWR1Y2VycyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IHJlZHVjZXJzIHdpbGwgbm8gbG9uZ2VyIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJXG4gKlxuICogVE9ETyhpc3N1ZTojNDUwNylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCB8fFxuICAgICAgYWN0aW9uLnR5cGUgPT09IENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUl9TVUNDRVNTXG4gICAgKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAqXG4gKiBzcGFydGFjdXMgbmdyeCByZWR1Y2VycyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckNhcnRTdGF0ZV07XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjVcbiAqXG4gKiBzcGFydGFjdXMgbmdyeCByZWR1Y2VycyB3aWxsIG5vIGxvbmdlciBiZSBhIHBhcnQgb2YgcHVibGljIEFQSVxuICpcbiAqIFRPRE8oaXNzdWU6IzQ1MDcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck11bHRpQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBBdXRoQWN0aW9ucy5MT0dPVVQpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IHJlZHVjZXJzIHdpbGwgbm8gbG9uZ2VyIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJXG4gKlxuICogVE9ETyhpc3N1ZTojNDUwNylcbiAqL1xuZXhwb3J0IGNvbnN0IG11bHRpQ2FydE1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyTXVsdGlDYXJ0U3RhdGVdO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggcmVkdWNlcnMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT4+KCdNdWx0aUNhcnRSZWR1Y2VycycpO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggcmVkdWNlcnMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlDYXJ0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxNdWx0aUNhcnRTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnRzOiBlbnRpdHlQcm9jZXNzZXNMb2FkZXJSZWR1Y2VyPENhcnQ+KFxuICAgICAgTVVMVElfQ0FSVF9GRUFUVVJFLFxuICAgICAgY2FydEVudGl0aWVzUmVkdWNlclxuICAgICksXG4gICAgYWN0aXZlOiBhY3RpdmVDYXJ0UmVkdWNlcixcbiAgICB3aXNoTGlzdDogd2lzaExpc3RSZWR1Y2VyLFxuICB9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gKlxuICogc3BhcnRhY3VzIG5ncnggcmVkdWNlcnMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRNdWx0aUNhcnRSZWR1Y2Vycyxcbn07XG4iXX0=