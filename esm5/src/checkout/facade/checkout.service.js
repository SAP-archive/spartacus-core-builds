import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
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
    CheckoutService.prototype.placeOrder = function () {
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
    CheckoutService.prototype.clearCheckoutData = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutData());
    };
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    CheckoutService.prototype.clearCheckoutStep = function (stepNumber) {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutStep(stepNumber));
    };
    /**
     * Load checkout details data
     * @param cartId : string Cart ID of loaded cart
     */
    CheckoutService.prototype.loadCheckoutDetails = function (cartId) {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCheckoutDetails({
            userId: this.cartData.userId,
            cartId: cartId,
        }));
    };
    /**
     * Get status of checkout details loaded
     */
    CheckoutService.prototype.getCheckoutDetailsLoaded = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutDetailsLoaded));
    };
    /**
     * Get order details
     */
    CheckoutService.prototype.getOrderDetails = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutOrderDetails));
    };
    CheckoutService.prototype.actionAllowed = function () {
        return (this.cartData.userId !== OCC_USER_ID_ANONYMOUS ||
            this.cartData.isGuestCart);
    };
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    CheckoutService = __decorate([
        Injectable()
    ], CheckoutService);
    return CheckoutService;
}());
export { CheckoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzdEO0lBQ0UseUJBQ1ksYUFBdUMsRUFDdkMsUUFBeUI7UUFEekIsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2xDLENBQUM7SUFFSjs7T0FFRztJQUNILG9DQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQzdCLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJDQUFpQixHQUFqQixVQUFrQixVQUFrQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkNBQW1CLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDNUIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrREFBd0IsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFUyx1Q0FBYSxHQUF2QjtRQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxxQkFBcUI7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQzFCLENBQUM7SUFDSixDQUFDOztnQkF2RTBCLEtBQUs7Z0JBQ1YsZUFBZTs7SUFIMUIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBMEUzQjtJQUFELHNCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0ExRVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUGxhY2VzIGFuIG9yZGVyXG4gICAqL1xuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IGRhdGFcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICogQHBhcmFtIHN0ZXBOdW1iZXIgOiB0aGUgc3RlcCBudW1iZXIgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBjaGVja291dCBkZXRhaWxzIGRhdGFcbiAgICogQHBhcmFtIGNhcnRJZCA6IHN0cmluZyBDYXJ0IElEIG9mIGxvYWRlZCBjYXJ0XG4gICAqL1xuICBsb2FkQ2hlY2tvdXREZXRhaWxzKGNhcnRJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICovXG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB8fFxuICAgICAgdGhpcy5jYXJ0RGF0YS5pc0d1ZXN0Q2FydFxuICAgICk7XG4gIH1cbn1cbiJdfQ==