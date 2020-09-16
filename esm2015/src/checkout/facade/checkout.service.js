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
export class CheckoutService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Places an order
     */
    placeOrder() {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.PlaceOrder({
                    userId,
                    cartId,
                }));
            }
        }
    }
    /**
     * Clear checkout data
     */
    clearCheckoutData() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutData());
    }
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    clearCheckoutStep(stepNumber) {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutStep(stepNumber));
    }
    /**
     * Load checkout details data
     * @param cartId : string Cart ID of loaded cart
     */
    loadCheckoutDetails(cartId) {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        if (userId) {
            this.checkoutStore.dispatch(new CheckoutActions.LoadCheckoutDetails({
                userId,
                cartId,
            }));
        }
    }
    /**
     * Get status of checkout details loaded
     */
    getCheckoutDetailsLoaded() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutDetailsLoaded));
    }
    /**
     * Get order details
     */
    getOrderDetails() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getCheckoutOrderDetails));
    }
    actionAllowed() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
}
CheckoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutService_Factory() { return new CheckoutService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutService, providedIn: "root" });
CheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFLN0QsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFDWSxhQUF1QyxFQUN2QyxXQUF3QixFQUN4QixpQkFBb0M7UUFGcEMsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKOztPQUVHO0lBQ0gsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7aUJBQzlDLFdBQVcsRUFBRSxDQUFDO1lBRWpCLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQjtpQkFDbkIsZUFBZSxFQUFFO2lCQUNqQixTQUFTLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDO2lCQUNwRCxXQUFXLEVBQUUsQ0FBQztZQUVqQixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLE1BQU07b0JBQ04sTUFBTTtpQkFDUCxDQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxNQUFjO1FBQ2hDLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzlDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG1CQUFtQixDQUFDO2dCQUN0QyxNQUFNO2dCQUNOLE1BQU07YUFDUCxDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVTLGFBQWE7UUFDckIsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDOUMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUNMLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQ3JDLENBQUM7SUFDSixDQUFDOzs7O1lBdkdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWmdCLEtBQUs7WUFFYixXQUFXO1lBQ1gsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2hlY2tvdXQgfSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhbiBvcmRlclxuICAgKi9cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnRJZDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnRJZCkgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBzdGVwXG4gICAqIEBwYXJhbSBzdGVwTnVtYmVyIDogdGhlIHN0ZXAgbnVtYmVyIHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2hlY2tvdXQgZGV0YWlscyBkYXRhXG4gICAqIEBwYXJhbSBjYXJ0SWQgOiBzdHJpbmcgQ2FydCBJRCBvZiBsb2FkZWQgY2FydFxuICAgKi9cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQ6IHN0cmluZykge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIG9mIGNoZWNrb3V0IGRldGFpbHMgbG9hZGVkXG4gICAqL1xuICBnZXRDaGVja291dERldGFpbHNMb2FkZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvcmRlciBkZXRhaWxzXG4gICAqL1xuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRDaGVja291dE9yZGVyRGV0YWlscylcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgKHVzZXJJZCAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykgfHxcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==