import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
var CheckoutService = /** @class */ (function () {
    function CheckoutService(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Places an order
     */
    CheckoutService.prototype.placeOrder = function () {
        if (this.actionAllowed()) {
            var userId_1;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_1 = occUserId); })
                .unsubscribe();
            var cartId_1;
            this.activeCartService
                .getActiveCartId()
                .subscribe(function (activeCartId) { return (cartId_1 = activeCartId); })
                .unsubscribe();
            if (userId_1 && cartId_1) {
                this.checkoutStore.dispatch(new CheckoutActions.PlaceOrder({
                    userId: userId_1,
                    cartId: cartId_1,
                }));
            }
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
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        if (userId) {
            this.checkoutStore.dispatch(new CheckoutActions.LoadCheckoutDetails({
                userId: userId,
                cartId: cartId,
            }));
        }
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
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    };
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CheckoutService = __decorate([
        Injectable()
    ], CheckoutService);
    return CheckoutService;
}());
export { CheckoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzdEO0lBQ0UseUJBQ1ksYUFBdUMsRUFDdkMsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILG9DQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLFFBQU0sQ0FBQztZQUNYLElBQUksQ0FBQyxXQUFXO2lCQUNiLFlBQVksRUFBRTtpQkFDZCxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDLFFBQU0sR0FBRyxTQUFTLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztpQkFDNUMsV0FBVyxFQUFFLENBQUM7WUFFakIsSUFBSSxRQUFNLENBQUM7WUFDWCxJQUFJLENBQUMsaUJBQWlCO2lCQUNuQixlQUFlLEVBQUU7aUJBQ2pCLFNBQVMsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLENBQUMsUUFBTSxHQUFHLFlBQVksQ0FBQyxFQUF2QixDQUF1QixDQUFDO2lCQUNsRCxXQUFXLEVBQUUsQ0FBQztZQUVqQixJQUFJLFFBQU0sSUFBSSxRQUFNLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLE1BQU0sVUFBQTtvQkFDTixNQUFNLFVBQUE7aUJBQ1AsQ0FBQyxDQUNILENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQ0FBaUIsR0FBakIsVUFBa0IsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILDZDQUFtQixHQUFuQixVQUFvQixNQUFjO1FBQ2hDLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQzthQUM1QyxXQUFXLEVBQUUsQ0FBQztRQUNqQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEMsTUFBTSxRQUFBO2dCQUNOLE1BQU0sUUFBQTthQUNQLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrREFBd0IsR0FBeEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFUyx1Q0FBYSxHQUF2QjtRQUNFLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQzthQUM1QyxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQ0wsQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLHFCQUFxQixDQUFDO1lBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FDckMsQ0FBQztJQUNKLENBQUM7O2dCQWxHMEIsS0FBSztnQkFDUCxXQUFXO2dCQUNMLGlCQUFpQjs7SUFKckMsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBcUczQjtJQUFELHNCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FyR1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBQbGFjZXMgYW4gb3JkZXJcbiAgICovXG4gIHBsYWNlT3JkZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydElkO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICAgLnN1YnNjcmliZShhY3RpdmVDYXJ0SWQgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBzdGVwXG4gICAqIEBwYXJhbSBzdGVwTnVtYmVyIDogdGhlIHN0ZXAgbnVtYmVyIHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2hlY2tvdXQgZGV0YWlscyBkYXRhXG4gICAqIEBwYXJhbSBjYXJ0SWQgOiBzdHJpbmcgQ2FydCBJRCBvZiBsb2FkZWQgY2FydFxuICAgKi9cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQ6IHN0cmluZykge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBvZiBjaGVja291dCBkZXRhaWxzIGxvYWRlZFxuICAgKi9cbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRDaGVja291dERldGFpbHNMb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JkZXIgZGV0YWlsc1xuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXRPcmRlckRldGFpbHMpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB8fFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKTtcbiAgfVxufVxuIl19