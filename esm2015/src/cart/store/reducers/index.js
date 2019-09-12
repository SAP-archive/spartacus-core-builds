/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/store/actions/index';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { CART_DATA } from './../cart-state';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLElBQUksV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxhQUFhLENBQVksU0FBUyxFQUFFLFdBQVcsQ0FBQztLQUN6RCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBK0IsY0FBYyxDQUFDOztBQUVwRSxNQUFNLE9BQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQzVCLE9BQTJCO0lBRTNCOzs7OztJQUFPLFVBQVMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFDRSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLG1CQUFtQixFQUNuRDtZQUNBLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUF1QixDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgQ2FydHNTdGF0ZSwgQ2FydFN0YXRlLCBDQVJUX0RBVEEgfSBmcm9tICcuLy4uL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0UmVkdWNlciB9IGZyb20gJy4vY2FydC5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2FydHNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogbG9hZGVyUmVkdWNlcjxDYXJ0U3RhdGU+KENBUlRfREFUQSwgY2FydFJlZHVjZXIpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxDYXJ0c1N0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENhcnRzU3RhdGU+PignQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2FydFN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCB8fFxuICAgICAgYWN0aW9uLnR5cGUgPT09IENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUl9TVUNDRVNTXG4gICAgKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhckNhcnRTdGF0ZV07XG4iXX0=