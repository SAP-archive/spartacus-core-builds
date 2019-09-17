/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
var CheckoutService = /** @class */ (function () {
    function CheckoutService(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Places an order
     */
    /**
     * Places an order
     * @return {?}
     */
    CheckoutService.prototype.placeOrder = /**
     * Places an order
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    };
    /**
     * Clear checkout data
     */
    /**
     * Clear checkout data
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutData = /**
     * Clear checkout data
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutData());
    };
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutStep = /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    function (stepNumber) {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutStep(stepNumber));
    };
    /**
     * Load checkout details data
     * @param cartId : string Cart ID of loaded cart
     */
    /**
     * Load checkout details data
     * @param {?} cartId : string Cart ID of loaded cart
     * @return {?}
     */
    CheckoutService.prototype.loadCheckoutDetails = /**
     * Load checkout details data
     * @param {?} cartId : string Cart ID of loaded cart
     * @return {?}
     */
    function (cartId) {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId: cartId,
        }));
    };
    /**
     * Get status of checkout details loaded
     */
    /**
     * Get status of checkout details loaded
     * @return {?}
     */
    CheckoutService.prototype.getCheckoutDetailsLoaded = /**
     * Get status of checkout details loaded
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutDetailsLoaded));
    };
    /**
     * Get order details
     */
    /**
     * Get order details
     * @return {?}
     */
    CheckoutService.prototype.getOrderDetails = /**
     * Get order details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutOrderDetails));
    };
    /**
     * @protected
     * @return {?}
     */
    CheckoutService.prototype.actionAllowed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.cartData.userId !== OCC_USER_ID_ANONYMOUS;
    };
    CheckoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    return CheckoutService;
}());
export { CheckoutService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFO0lBRUUseUJBQ1ksYUFBdUMsRUFDdkMsUUFBeUI7UUFEekIsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2xDLENBQUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCxvQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTthQUM3QixDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFpQjs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDZDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsTUFBYztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsbUJBQW1CLENBQUM7WUFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM1QixNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBd0I7Ozs7SUFBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBZTs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDOzs7OztJQUVTLHVDQUFhOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztJQUN4RCxDQUFDOztnQkF2RUYsVUFBVTs7OztnQkFUTSxLQUFLO2dCQUViLGVBQWU7O0lBK0V4QixzQkFBQztDQUFBLEFBeEVELElBd0VDO1NBdkVZLGVBQWU7Ozs7OztJQUV4Qix3Q0FBaUQ7Ozs7O0lBQ2pELG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAqL1xuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICogQHBhcmFtIHN0ZXBOdW1iZXIgOiB0aGUgc3RlcCBudW1iZXIgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjaGVja291dCBkZXRhaWxzIGRhdGFcbiAgICogQHBhcmFtIGNhcnRJZCA6IHN0cmluZyBDYXJ0IElEIG9mIGxvYWRlZCBjYXJ0XG4gICAqL1xuICBsb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICovXG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUztcbiAgfVxufVxuIl19