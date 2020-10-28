import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { PLACED_ORDER_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/user-auth/facade/user-id.service";
import * as i3 from "../../cart/facade/active-cart.service";
export class CheckoutService {
    constructor(checkoutStore, userIdService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.userIdService = userIdService;
        this.activeCartService = activeCartService;
    }
    /**
     * Places an order
     */
    placeOrder(termsChecked) {
        if (this.actionAllowed()) {
            let userId;
            this.userIdService
                .getUserId()
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
                    termsChecked,
                }));
            }
        }
    }
    /**
     * Schedule a replenishment order
     */
    scheduleReplenishmentOrder(scheduleReplenishmentForm, termsChecked) {
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .pipe(take(1))
            .subscribe((activeCartId) => (cartId = activeCartId));
        this.userIdService.invokeWithUserId((userId) => {
            if (Boolean(cartId) &&
                Boolean(userId) &&
                userId !== OCC_USER_ID_ANONYMOUS) {
                this.checkoutStore.dispatch(new CheckoutActions.ScheduleReplenishmentOrder({
                    cartId,
                    scheduleReplenishmentForm,
                    termsChecked,
                    userId,
                }));
            }
        });
    }
    /**
     * Returns the place or schedule replenishment order's loading flag
     */
    getPlaceOrderLoading() {
        return this.checkoutStore.pipe(select(getProcessLoadingFactory(PLACED_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the place or schedule replenishment order's success flag
     */
    getPlaceOrderSuccess() {
        return this.checkoutStore.pipe(select(getProcessSuccessFactory(PLACED_ORDER_PROCESS_ID)));
    }
    /**
     * Returns the place or schedule replenishment order's error flag
     */
    getPlaceOrderError() {
        return this.checkoutStore.pipe(select(getProcessErrorFactory(PLACED_ORDER_PROCESS_ID)));
    }
    /**
     * Resets the place or schedule replenishment order's processing state
     */
    clearPlaceOrderState() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearPlaceOrder());
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
        this.userIdService
            .getUserId()
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
    /**
     * Set checkout order type
     * @param orderType : an enum of types of order we are placing
     */
    setOrderType(orderType) {
        this.checkoutStore.dispatch(new CheckoutActions.SetOrderType(orderType));
    }
    /**
     * Get current checkout order type
     */
    getCurrentOrderType() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedOrderType));
    }
    actionAllowed() {
        let userId;
        this.userIdService
            .getUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
}
CheckoutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutService_Factory() { return new CheckoutService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.UserIdService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutService, providedIn: "root" });
CheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutService.ctorParameters = () => [
    { type: Store },
    { type: UserIdService },
    { type: ActiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU8xRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSx1REFBdUQsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLHVCQUF1QixHQUV4QixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs3RCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUNZLGFBQWdFLEVBQ2hFLGFBQTRCLEVBQzVCLGlCQUFvQztRQUZwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDaEUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUo7O09BRUc7SUFDSCxVQUFVLENBQUMsWUFBcUI7UUFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUM7WUFDWCxJ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cUJBQXFCLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7OztZQTNMRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTNCZ0IsS0FBSztZQUdiLGFBQWE7WUFDYixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL3VzZXItYXV0aC9mYWNhZGUvdXNlci1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIE9SREVSX1RZUEUsXG4gIFJlcGxlbmlzaG1lbnRPcmRlcixcbiAgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvcmVwbGVuaXNobWVudC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIFBMQUNFRF9PUkRFUl9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhbiBvcmRlclxuICAgKi9cbiAgcGxhY2VPcmRlcih0ZXJtc0NoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLnVzZXJJZFNlcnZpY2VcbiAgICAgICAgLmdldFVzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydElkO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGlmICh1c2VySWQgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXIoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgdGVybXNDaGVja2VkLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlIGEgcmVwbGVuaXNobWVudCBvcmRlclxuICAgKi9cbiAgc2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXIoXG4gICAgc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybTogU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbiAgICB0ZXJtc0NoZWNrZWQ6IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgbGV0IGNhcnRJZDtcblxuICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnRJZCkgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpO1xuXG4gICAgdGhpcy51c2VySWRTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBCb29sZWFuKGNhcnRJZCkgJiZcbiAgICAgICAgQm9vbGVhbih1c2VySWQpICYmXG4gICAgICAgIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXIoe1xuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbiAgICAgICAgICAgIHRlcm1zQ2hlY2tlZCxcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBsYWNlIG9yIHNjaGVkdWxlIHJlcGxlbmlzaG1lbnQgb3JkZXIncyBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGdldFBsYWNlT3JkZXJMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoUExBQ0VEX09SREVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGxhY2Ugb3Igc2NoZWR1bGUgcmVwbGVuaXNobWVudCBvcmRlcidzIHN1Y2Nlc3MgZmxhZ1xuICAgKi9cbiAgZ2V0UGxhY2VPcmRlclN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShQTEFDRURfT1JERVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwbGFjZSBvciBzY2hlZHVsZSByZXBsZW5pc2htZW50IG9yZGVyJ3MgZXJyb3IgZmxhZ1xuICAgKi9cbiAgZ2V0UGxhY2VPcmRlckVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KFBMQUNFRF9PUkRFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgcGxhY2Ugb3Igc2NoZWR1bGUgcmVwbGVuaXNobWVudCBvcmRlcidzIHByb2Nlc3Npbmcgc3RhdGVcbiAgICovXG4gIGNsZWFyUGxhY2VPcmRlclN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyUGxhY2VPcmRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBzdGVwXG4gICAqIEBwYXJhbSBzdGVwTnVtYmVyIDogdGhlIHN0ZXAgbnVtYmVyIHRvIGJlIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgY2hlY2tvdXQgZGV0YWlscyBkYXRhXG4gICAqIEBwYXJhbSBjYXJ0SWQgOiBzdHJpbmcgQ2FydCBJRCBvZiBsb2FkZWQgY2FydFxuICAgKi9cbiAgbG9hZENoZWNrb3V0RGV0YWlscyhjYXJ0SWQ6IHN0cmluZykge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlXG4gICAgICAuZ2V0VXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgb2YgY2hlY2tvdXQgZGV0YWlscyBsb2FkZWRcbiAgICovXG4gIGdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyIHwgUmVwbGVuaXNobWVudE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNoZWNrb3V0IG9yZGVyIHR5cGVcbiAgICogQHBhcmFtIG9yZGVyVHlwZSA6IGFuIGVudW0gb2YgdHlwZXMgb2Ygb3JkZXIgd2UgYXJlIHBsYWNpbmdcbiAgICovXG4gIHNldE9yZGVyVHlwZShvcmRlclR5cGU6IE9SREVSX1RZUEUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IENoZWNrb3V0QWN0aW9ucy5TZXRPcmRlclR5cGUob3JkZXJUeXBlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgY2hlY2tvdXQgb3JkZXIgdHlwZVxuICAgKi9cbiAgZ2V0Q3VycmVudE9yZGVyVHlwZSgpOiBPYnNlcnZhYmxlPE9SREVSX1RZUEU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRPcmRlclR5cGUpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy51c2VySWRTZXJ2aWNlXG4gICAgICAuZ2V0VXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgKHVzZXJJZCAmJiB1c2VySWQgIT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykgfHxcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuaXNHdWVzdENhcnQoKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==