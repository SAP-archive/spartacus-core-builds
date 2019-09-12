/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
export class CheckoutService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Places an order
     * @return {?}
     */
    placeOrder() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * Clear checkout data
     * @return {?}
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutStep(stepNumber));
    }
    /**
     * Load checkout details data
     * @param {?} cartId : string Cart ID of loaded cart
     * @return {?}
     */
    loadCheckoutDetails(cartId) {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId,
        }));
    }
    /**
     * Get status of checkout details loaded
     * @return {?}
     */
    getCheckoutDetailsLoaded() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutDetailsLoaded));
    }
    /**
     * Get order details
     * @return {?}
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutOrderDetails));
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutService.prototype.checkoutStore;
    /**
     * @type {?}
     * @protected
     */
    CheckoutService.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHN0QsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQzFCLFlBQ1ksYUFBdUMsRUFDdkMsUUFBeUI7UUFEekIsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2xDLENBQUM7Ozs7O0lBS0osVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDN0IsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELG1CQUFtQixDQUFDLE1BQWM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQ25ELENBQUM7SUFDSixDQUFDOzs7OztJQUtELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsYUFBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7OztZQXZFRixVQUFVOzs7O1lBWE0sS0FBSztZQUlwQixlQUFlOzs7Ozs7O0lBVWIsd0NBQWlEOzs7OztJQUNqRCxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX1VTRVJJRCxcbiAgQ2FydERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAqL1xuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICogQHBhcmFtIHN0ZXBOdW1iZXIgOiB0aGUgc3RlcCBudW1iZXIgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjaGVja291dCBkZXRhaWxzIGRhdGFcbiAgICogQHBhcmFtIGNhcnRJZCA6IHN0cmluZyBDYXJ0IElEIG9mIGxvYWRlZCBjYXJ0XG4gICAqL1xuICBsb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICovXG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==