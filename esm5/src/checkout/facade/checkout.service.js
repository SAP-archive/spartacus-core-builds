import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { CheckoutActions } from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
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
    CheckoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutService_Factory() { return new CheckoutService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutService, providedIn: "root" });
    CheckoutService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutService);
    return CheckoutService;
}());
export { CheckoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs3RDtJQUNFLHlCQUNZLGFBQXVDLEVBQ3ZDLFdBQXdCLEVBQ3hCLGlCQUFvQztRQUZwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUo7O09BRUc7SUFDSCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxRQUFNLENBQUM7WUFDWCxJQUFJLENBQUMsV0FBVztpQkFDYixZQUFZLEVBQUU7aUJBQ2QsU0FBUyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxRQUFNLEdBQUcsU0FBUyxDQUFDLEVBQXBCLENBQW9CLENBQUM7aUJBQzlDLFdBQVcsRUFBRSxDQUFDO1lBRWpCLElBQUksUUFBTSxDQUFDO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQjtpQkFDbkIsZUFBZSxFQUFFO2lCQUNqQixTQUFTLENBQUMsVUFBQyxZQUFZLElBQUssT0FBQSxDQUFDLFFBQU0sR0FBRyxZQUFZLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztpQkFDcEQsV0FBVyxFQUFFLENBQUM7WUFFakIsSUFBSSxRQUFNLElBQUksUUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDO29CQUM3QixNQUFNLFVBQUE7b0JBQ04sTUFBTSxVQUFBO2lCQUNQLENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILDJDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkNBQWlCLEdBQWpCLFVBQWtCLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCw2Q0FBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUNoQyxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQXBCLENBQW9CLENBQUM7YUFDOUMsV0FBVyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RDLE1BQU0sUUFBQTtnQkFDTixNQUFNLFFBQUE7YUFDUCxDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0RBQXdCLEdBQXhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQ25ELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCx5Q0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRVMsdUNBQWEsR0FBdkI7UUFDRSxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQXBCLENBQW9CLENBQUM7YUFDOUMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUNMLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQ3JDLENBQUM7SUFDSixDQUFDOztnQkFsRzBCLEtBQUs7Z0JBQ1AsV0FBVztnQkFDTCxpQkFBaUI7OztJQUpyQyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBcUczQjswQkFuSEQ7Q0FtSEMsQUFyR0QsSUFxR0M7U0FyR1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBQbGFjZXMgYW4gb3JkZXJcbiAgICovXG4gIHBsYWNlT3JkZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlcih7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgZGF0YVxuICAgKi9cbiAgY2xlYXJDaGVja291dERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgY2hlY2tvdXQgc3RlcFxuICAgKiBAcGFyYW0gc3RlcE51bWJlciA6IHRoZSBzdGVwIG51bWJlciB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBjbGVhckNoZWNrb3V0U3RlcChzdGVwTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNoZWNrb3V0IGRldGFpbHMgZGF0YVxuICAgKiBAcGFyYW0gY2FydElkIDogc3RyaW5nIENhcnQgSUQgb2YgbG9hZGVkIGNhcnRcbiAgICovXG4gIGxvYWRDaGVja291dERldGFpbHMoY2FydElkOiBzdHJpbmcpIHtcbiAgICBsZXQgdXNlcklkO1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBvZiBjaGVja291dCBkZXRhaWxzIGxvYWRlZFxuICAgKi9cbiAgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRDaGVja291dERldGFpbHNMb2FkZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JkZXIgZGV0YWlsc1xuICAgKi9cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXRPcmRlckRldGFpbHMpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHx8XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICApO1xuICB9XG59XG4iXX0=