/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { SET_PAYMENT_DETAILS_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/cart-data.service";
export class CheckoutPaymentService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get card types
     * @return {?}
     */
    getCardTypes() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllCardTypes));
    }
    /**
     * Get payment details
     * @return {?}
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getPaymentDetails));
    }
    /**
     * Get status about set Payment Details process
     * @return {?}
     */
    getSetPaymentDetailsResultProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_PAYMENT_DETAILS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Payment Details
     * @return {?}
     */
    resetSetPaymentDetailsProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetPaymentDetailsProcess());
    }
    /**
     * Load the supported card types
     * @return {?}
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails,
            }));
        }
    }
    /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    setPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails,
            }));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== OCC_USER_ID_ANONYMOUS;
    }
}
CheckoutPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPaymentService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
/** @nocollapse */ CheckoutPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.CartDataService)); }, token: CheckoutPaymentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutPaymentService.prototype.checkoutStore;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPaymentService.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBRUwsOEJBQThCLEdBQy9CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFLdEUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDWSxhQUFnRSxFQUNoRSxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDaEUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQzs7Ozs7SUFLSixZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUtELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUtELGlDQUFpQztRQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCw2QkFBNkI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLDZCQUE2QixFQUFFLENBQ3BELENBQUM7SUFDSixDQUFDOzs7OztJQUtELHNCQUFzQjtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQU1ELG9CQUFvQixDQUFDLGNBQThCO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsY0FBYzthQUNmLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFNRCxpQkFBaUIsQ0FBQyxjQUE4QjtRQUM5QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUMvQixjQUFjLEVBQUUsY0FBYzthQUMvQixDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxhQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUsscUJBQXFCLENBQUM7SUFDeEQsQ0FBQzs7O1lBbEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWpCZ0IsS0FBSztZQUViLGVBQWU7Ozs7Ozs7O0lBa0JwQiwrQ0FBMEU7Ozs7O0lBQzFFLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkVHlwZSwgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UGF5bWVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJkIHR5cGVzXG4gICAqL1xuICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBbGxDYXJkVHlwZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF5bWVudCBkZXRhaWxzXG4gICAqL1xuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRQYXltZW50RGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgc2V0IFBheW1lbnQgRGV0YWlscyBwcm9jZXNzXG4gICAqL1xuICBnZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBQYXltZW50IERldGFpbHNcbiAgICovXG4gIHJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3VwcG9ydGVkIGNhcmQgdHlwZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENhcmRUeXBlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGF5bWVudCBkZXRhaWxzIHVzaW5nIHRoZSBnaXZlbiBwYXltZW50RGV0YWlscyBwYXJhbVxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHM6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBjcmVhdGVkXG4gICAqL1xuICBjcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBheW1lbnQgZGV0YWlsc1xuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHMgOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5jb2RlLFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzOiBwYXltZW50RGV0YWlscyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydERhdGEudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIH1cbn1cbiJdfQ==