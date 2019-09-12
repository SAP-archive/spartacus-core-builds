/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0Q7SUFFRSx5QkFDWSxhQUF1QyxFQUN2QyxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILG9DQUFVOzs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQzdCLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMkNBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDJDQUFpQjs7Ozs7SUFBakIsVUFBa0IsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNkNBQW1COzs7OztJQUFuQixVQUFvQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztZQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQzVCLE1BQU0sUUFBQTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtEQUF3Qjs7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFlOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsdUNBQWE7Ozs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7O2dCQXZFRixVQUFVOzs7O2dCQVhNLEtBQUs7Z0JBSXBCLGVBQWU7O0lBK0VqQixzQkFBQztDQUFBLEFBeEVELElBd0VDO1NBdkVZLGVBQWU7Ozs7OztJQUV4Qix3Q0FBaUQ7Ozs7O0lBQ2pELG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfVVNFUklELFxuICBDYXJ0RGF0YVNlcnZpY2UsXG59IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDaGVja291dCB9IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dD4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBQbGFjZXMgYW4gb3JkZXJcbiAgICovXG4gIHBsYWNlT3JkZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlcih7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgZGF0YVxuICAgKi9cbiAgY2xlYXJDaGVja291dERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgc3RlcFxuICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBjbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNoZWNrb3V0IGRldGFpbHMgZGF0YVxuICAgKiBAcGFyYW0gY2FydElkIDogc3RyaW5nIENhcnQgSUQgb2YgbG9hZGVkIGNhcnRcbiAgICovXG4gIGxvYWRDaGVja291dERldGFpbHMoY2FydElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBvZiBjaGVja291dCBkZXRhaWxzIGxvYWRlZFxuICAgKi9cbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRDaGVja291dERldGFpbHNMb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JkZXIgZGV0YWlsc1xuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXRPcmRlckRldGFpbHMpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRDtcbiAgfVxufVxuIl19