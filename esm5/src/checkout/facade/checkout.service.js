/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import * as fromCheckoutActions from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
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
            this.checkoutStore.dispatch(new fromCheckoutActions.PlaceOrder({
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
        this.checkoutStore.dispatch(new fromCheckoutActions.ClearCheckoutData());
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
        this.checkoutStore.dispatch(new fromCheckoutActions.ClearCheckoutStep(stepNumber));
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    CheckoutService.prototype.loadCheckoutDetails = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        this.checkoutStore.dispatch(new fromCheckoutActions.LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId: cartId,
        }));
    };
    /**
     * @return {?}
     */
    CheckoutService.prototype.getCheckoutDetailsLoaded = /**
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
        return this.cartData.userId !== ANONYMOUS_USERID;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEtBQUssbUJBQW1CLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0Q7SUFFRSx5QkFDWSxhQUF1QyxFQUN2QyxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILG9DQUFVOzs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDN0IsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBaUI7Ozs7SUFBakI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBaUI7Ozs7O0lBQWpCLFVBQWtCLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw2Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsTUFBYztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztZQUMxQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQzVCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGtEQUF3Qjs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQ25ELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWU7Ozs7SUFBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUyx1Q0FBYTs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBaEVGLFVBQVU7Ozs7Z0JBWE0sS0FBSztnQkFJcEIsZUFBZTs7SUF3RWpCLHNCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVksZUFBZTs7Ozs7O0lBRXhCLHdDQUFpRDs7Ozs7SUFDakQsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19VU0VSSUQsXG4gIENhcnREYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tQ2hlY2tvdXRBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAqL1xuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IGZyb21DaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgc3RlcFxuICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBjbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbUNoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyKVxuICAgICk7XG4gIH1cblxuICBsb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21DaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==