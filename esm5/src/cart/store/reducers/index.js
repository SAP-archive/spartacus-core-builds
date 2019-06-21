/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { CART_DATA } from './../cart-state';
import { LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { PLACE_ORDER_SUCCESS } from '../../../checkout/store/actions/checkout.action';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { reducer as cartReducer } from './cart.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        active: loaderReducer(CART_DATA, cartReducer),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('CartReducers');
/** @type {?} */
export var reducerProvider = {
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
        if (action.type === LOGOUT || action.type === PLACE_ORDER_SUCCESS) {
            state = undefined;
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearCartState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4RCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBWSxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3pELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUErQixjQUFjLENBQUM7O0FBRXBFLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBMkI7SUFFM0I7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7WUFDakUsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAsIE1ldGFSZWR1Y2VyLCBBY3Rpb25SZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDYXJ0c1N0YXRlLCBDYXJ0U3RhdGUsIENBUlRfREFUQSB9IGZyb20gJy4vLi4vY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvbG9naW4tbG9nb3V0LmFjdGlvbic7XG5pbXBvcnQgeyBQTEFDRV9PUkRFUl9TVUNDRVNTIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvc3RvcmUvYWN0aW9ucy9jaGVja291dC5hY3Rpb24nO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5cbmltcG9ydCB7IHJlZHVjZXIgYXMgY2FydFJlZHVjZXIgfSBmcm9tICcuL2NhcnQucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IGxvYWRlclJlZHVjZXI8Q2FydFN0YXRlPihDQVJUX0RBVEEsIGNhcnRSZWR1Y2VyKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPj4oJ0NhcnRSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhcnRTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9HT1VUIHx8IGFjdGlvbi50eXBlID09PSBQTEFDRV9PUkRFUl9TVUNDRVNTKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckNhcnRTdGF0ZV07XG4iXX0=