/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    return function (state, action) {
        if (action.type === LOGOUT || action.type === PLACE_ORDER_SUCCESS) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearCartState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4RCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBWSxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3pELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUErQixjQUFjLENBQUM7O0FBRXBFLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBMkI7SUFFM0IsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtZQUNqRSxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUIsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIsIEFjdGlvblJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IENhcnRzU3RhdGUsIENhcnRTdGF0ZSwgQ0FSVF9EQVRBIH0gZnJvbSAnLi8uLi9jYXJ0LXN0YXRlJztcbmltcG9ydCB7IExPR09VVCB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9sb2dpbi1sb2dvdXQuYWN0aW9uJztcbmltcG9ydCB7IFBMQUNFX09SREVSX1NVQ0NFU1MgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2NoZWNrb3V0LmFjdGlvbic7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcblxuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogbG9hZGVyUmVkdWNlcjxDYXJ0U3RhdGU+KENBUlRfREFUQSwgY2FydFJlZHVjZXIpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+PignQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQgfHwgYWN0aW9uLnR5cGUgPT09IFBMQUNFX09SREVSX1NVQ0NFU1MpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW2NsZWFyQ2FydFN0YXRlXTtcbiJdfQ==