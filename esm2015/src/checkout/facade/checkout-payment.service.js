import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { SET_PAYMENT_DETAILS_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
let CheckoutPaymentService = class CheckoutPaymentService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get card types
     */
    getCardTypes() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllCardTypes));
    }
    /**
     * Get payment details
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getPaymentDetails));
    }
    /**
     * Get status about set Payment Details process
     */
    getSetPaymentDetailsResultProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_PAYMENT_DETAILS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Payment Details
     */
    resetSetPaymentDetailsProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetPaymentDetailsProcess());
    }
    /**
     * Load the supported card types
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe(occUserId => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe(activeCartId => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.CreatePaymentDetails({
                    userId,
                    cartId,
                    paymentDetails,
                }));
            }
        }
    }
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    setPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe(occUserId => (userId = occUserId))
                .unsubscribe();
            let cart;
            this.activeCartService
                .getActive()
                .subscribe(activeCart => (cart = activeCart))
                .unsubscribe();
            if (userId && cart) {
                this.checkoutStore.dispatch(new CheckoutActions.SetPaymentDetails({
                    userId,
                    cartId: cart.code,
                    paymentDetails: paymentDetails,
                }));
            }
        }
    }
    /**
     * Sets payment loading to true without having the flicker issue (GH-3102)
     */
    paymentProcessSuccess() {
        this.checkoutStore.dispatch(new CheckoutActions.PaymentProcessSuccess());
    }
    actionAllowed() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe(occUserId => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
};
CheckoutPaymentService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutPaymentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutPaymentService, providedIn: "root" });
CheckoutPaymentService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutPaymentService);
export { CheckoutPaymentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsOEJBQThCLEdBRS9CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBQ2pDLFlBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBaUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUE2QjtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsNkJBQTZCLEVBQUUsQ0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQjtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0IsQ0FBQyxjQUE4QjtRQUNqRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUksQ0FBQyxXQUFXO2lCQUNiLFlBQVksRUFBRTtpQkFDZCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztpQkFDNUMsV0FBVyxFQUFFLENBQUM7WUFFakIsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLENBQUMsaUJBQWlCO2lCQUNuQixlQUFlLEVBQUU7aUJBQ2pCLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDO2lCQUNsRCxXQUFXLEVBQUUsQ0FBQztZQUVqQixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDdkMsTUFBTTtvQkFDTixNQUFNO29CQUNOLGNBQWM7aUJBQ2YsQ0FBQyxDQUNILENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLGNBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksTUFBTSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsWUFBWSxFQUFFO2lCQUNkLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2lCQUM1QyxXQUFXLEVBQUUsQ0FBQztZQUVqQixJQUFJLElBQUksQ0FBQztZQUNULElBQUksQ0FBQyxpQkFBaUI7aUJBQ25CLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQztpQkFDNUMsV0FBVyxFQUFFLENBQUM7WUFDakIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUM7b0JBQ3BDLE1BQU07b0JBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNqQixjQUFjLEVBQUUsY0FBYztpQkFDL0IsQ0FBQyxDQUNILENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDNUMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUNMLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF6SDRCLEtBQUs7WUFDUCxXQUFXO1lBQ0wsaUJBQWlCOzs7QUFKckMsc0JBQXNCO0lBSGxDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxzQkFBc0IsQ0EySGxDO1NBM0hZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBheW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IGNhcmQgdHlwZXNcbiAgICovXG4gIGdldENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldEFsbENhcmRUeXBlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXltZW50IGRldGFpbHNcbiAgICovXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFBheW1lbnREZXRhaWxzKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBzZXQgUGF5bWVudCBEZXRhaWxzIHByb2Nlc3NcbiAgICovXG4gIGdldFNldFBheW1lbnREZXRhaWxzUmVzdWx0UHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIFBheW1lbnQgRGV0YWlsc1xuICAgKi9cbiAgcmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBzdXBwb3J0ZWQgY2FyZCB0eXBlc1xuICAgKi9cbiAgbG9hZFN1cHBvcnRlZENhcmRUeXBlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2FyZFR5cGVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBwYXltZW50IGRldGFpbHMgdXNpbmcgdGhlIGdpdmVuIHBheW1lbnREZXRhaWxzIHBhcmFtXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlsczogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIGNyZWF0ZWRcbiAgICovXG4gIGNyZWF0ZVBheW1lbnREZXRhaWxzKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnRJZDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ2FydElkID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHMoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBheW1lbnQgZGV0YWlsc1xuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHMgOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0O1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZShhY3RpdmVDYXJ0ID0+IChjYXJ0ID0gYWN0aXZlQ2FydCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHVzZXJJZCAmJiBjYXJ0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnREZXRhaWxzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZDogY2FydC5jb2RlLFxuICAgICAgICAgICAgcGF5bWVudERldGFpbHM6IHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcGF5bWVudCBsb2FkaW5nIHRvIHRydWUgd2l0aG91dCBoYXZpbmcgdGhlIGZsaWNrZXIgaXNzdWUgKEdILTMxMDIpXG4gICAqL1xuICBwYXltZW50UHJvY2Vzc1N1Y2Nlc3MoKSB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuUGF5bWVudFByb2Nlc3NTdWNjZXNzKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHx8XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICApO1xuICB9XG59XG4iXX0=