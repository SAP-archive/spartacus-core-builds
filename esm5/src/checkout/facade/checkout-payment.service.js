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
var CheckoutPaymentService = /** @class */ (function () {
    function CheckoutPaymentService(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get card types
     */
    CheckoutPaymentService.prototype.getCardTypes = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllCardTypes));
    };
    /**
     * Get payment details
     */
    CheckoutPaymentService.prototype.getPaymentDetails = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getPaymentDetails));
    };
    /**
     * Get status about set Payment Details process
     */
    CheckoutPaymentService.prototype.getSetPaymentDetailsResultProcess = function () {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_PAYMENT_DETAILS_PROCESS_ID)));
    };
    /**
     * Clear info about process of setting Payment Details
     */
    CheckoutPaymentService.prototype.resetSetPaymentDetailsProcess = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetPaymentDetailsProcess());
    };
    /**
     * Load the supported card types
     */
    CheckoutPaymentService.prototype.loadSupportedCardTypes = function () {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCardTypes());
    };
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    CheckoutPaymentService.prototype.createPaymentDetails = function (paymentDetails) {
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
                this.checkoutStore.dispatch(new CheckoutActions.CreatePaymentDetails({
                    userId: userId_1,
                    cartId: cartId_1,
                    paymentDetails: paymentDetails,
                }));
            }
        }
    };
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    CheckoutPaymentService.prototype.setPaymentDetails = function (paymentDetails) {
        if (this.actionAllowed()) {
            var userId_2;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_2 = occUserId); })
                .unsubscribe();
            var cart_1;
            this.activeCartService
                .getActive()
                .subscribe(function (activeCart) { return (cart_1 = activeCart); })
                .unsubscribe();
            if (userId_2 && cart_1) {
                this.checkoutStore.dispatch(new CheckoutActions.SetPaymentDetails({
                    userId: userId_2,
                    cartId: cart_1.code,
                    paymentDetails: paymentDetails,
                }));
            }
        }
    };
    /**
     * Sets payment loading to true without having the flicker issue (GH-3102)
     */
    CheckoutPaymentService.prototype.paymentProcessSuccess = function () {
        this.checkoutStore.dispatch(new CheckoutActions.PaymentProcessSuccess());
    };
    CheckoutPaymentService.prototype.actionAllowed = function () {
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    };
    CheckoutPaymentService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CheckoutPaymentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutPaymentService, providedIn: "root" });
    CheckoutPaymentService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutPaymentService);
    return CheckoutPaymentService;
}());
export { CheckoutPaymentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsOEJBQThCLEdBRS9CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdEO0lBQ0UsZ0NBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILDZDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRztJQUNILGtEQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEs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QVMsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO2FBQzVDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FDTCxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEgwQixLQUFLO2dCQUNQLFdBQVc7Z0JBQ0wsaUJBQWlCOzs7SUFKckMsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0EySGxDO2lDQS9JRDtDQStJQyxBQTNIRCxJQTJIQztTQTNIWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYXltZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJkIHR5cGVzXG4gICAqL1xuICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBbGxDYXJkVHlwZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF5bWVudCBkZXRhaWxzXG4gICAqL1xuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRQYXltZW50RGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgc2V0IFBheW1lbnQgRGV0YWlscyBwcm9jZXNzXG4gICAqL1xuICBnZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBQYXltZW50IERldGFpbHNcbiAgICovXG4gIHJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3VwcG9ydGVkIGNhcmQgdHlwZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENhcmRUeXBlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGF5bWVudCBkZXRhaWxzIHVzaW5nIHRoZSBnaXZlbiBwYXltZW50RGV0YWlscyBwYXJhbVxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHM6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBjcmVhdGVkXG4gICAqL1xuICBjcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKGFjdGl2ZUNhcnRJZCA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGlmICh1c2VySWQgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwYXltZW50IGRldGFpbHNcbiAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzIDogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0UGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ2FydCA9PiAoY2FydCA9IGFjdGl2ZUNhcnQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmICh1c2VySWQgJiYgY2FydCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlscyh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQ6IGNhcnQuY29kZSxcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzOiBwYXltZW50RGV0YWlscyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHBheW1lbnQgbG9hZGluZyB0byB0cnVlIHdpdGhvdXQgaGF2aW5nIHRoZSBmbGlja2VyIGlzc3VlIChHSC0zMTAyKVxuICAgKi9cbiAgcGF5bWVudFByb2Nlc3NTdWNjZXNzKCkge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLlBheW1lbnRQcm9jZXNzU3VjY2VzcygpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIGxldCB1c2VySWQ7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB8fFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKTtcbiAgfVxufVxuIl19