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
var CheckoutPaymentService = /** @class */ (function () {
    function CheckoutPaymentService(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get card types
     */
    /**
     * Get card types
     * @return {?}
     */
    CheckoutPaymentService.prototype.getCardTypes = /**
     * Get card types
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAllCardTypes));
    };
    /**
     * Get payment details
     */
    /**
     * Get payment details
     * @return {?}
     */
    CheckoutPaymentService.prototype.getPaymentDetails = /**
     * Get payment details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getPaymentDetails));
    };
    /**
     * Get status about set Payment Details process
     */
    /**
     * Get status about set Payment Details process
     * @return {?}
     */
    CheckoutPaymentService.prototype.getSetPaymentDetailsResultProcess = /**
     * Get status about set Payment Details process
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_PAYMENT_DETAILS_PROCESS_ID)));
    };
    /**
     * Clear info about process of setting Payment Details
     */
    /**
     * Clear info about process of setting Payment Details
     * @return {?}
     */
    CheckoutPaymentService.prototype.resetSetPaymentDetailsProcess = /**
     * Clear info about process of setting Payment Details
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetPaymentDetailsProcess());
    };
    /**
     * Load the supported card types
     */
    /**
     * Load the supported card types
     * @return {?}
     */
    CheckoutPaymentService.prototype.loadSupportedCardTypes = /**
     * Load the supported card types
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new CheckoutActions.LoadCardTypes());
    };
    /**
     * Create payment details using the given paymentDetails param
     * @param paymentDetails: the PaymentDetails to be created
     */
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    CheckoutPaymentService.prototype.createPaymentDetails = /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails: paymentDetails,
            }));
        }
    };
    /**
     * Set payment details
     * @param paymentDetails : the PaymentDetails to be set
     */
    /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    CheckoutPaymentService.prototype.setPaymentDetails = /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails,
            }));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CheckoutPaymentService.prototype.actionAllowed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.cartData.userId !== OCC_USER_ID_ANONYMOUS;
    };
    CheckoutPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutPaymentService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    /** @nocollapse */ CheckoutPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentService_Factory() { return new CheckoutPaymentService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.CartDataService)); }, token: CheckoutPaymentService, providedIn: "root" });
    return CheckoutPaymentService;
}());
export { CheckoutPaymentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBRUwsOEJBQThCLEdBQy9CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFdEU7SUFJRSxnQ0FDWSxhQUFnRSxFQUNoRSxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDaEUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILDZDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrREFBaUI7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGtFQUFpQzs7OztJQUFqQztRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOERBQTZCOzs7O0lBQTdCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLDZCQUE2QixFQUFFLENBQ3BELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdURBQXNCOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxxREFBb0I7Ozs7O0lBQXBCLFVBQXFCLGNBQThCO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsY0FBYyxnQkFBQTthQUNmLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxrREFBaUI7Ozs7O0lBQWpCLFVBQWtCLGNBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQy9CLGNBQWMsRUFBRSxjQUFjO2FBQy9CLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVTLDhDQUFhOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztJQUN4RCxDQUFDOztnQkFsRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFqQmdCLEtBQUs7Z0JBRWIsZUFBZTs7O2lDQUh4QjtDQW1HQyxBQW5GRCxJQW1GQztTQWhGWSxzQkFBc0I7Ozs7OztJQUUvQiwrQ0FBMEU7Ozs7O0lBQzFFLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJkVHlwZSwgUGF5bWVudERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UGF5bWVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJkIHR5cGVzXG4gICAqL1xuICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBbGxDYXJkVHlwZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF5bWVudCBkZXRhaWxzXG4gICAqL1xuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRQYXltZW50RGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgc2V0IFBheW1lbnQgRGV0YWlscyBwcm9jZXNzXG4gICAqL1xuICBnZXRTZXRQYXltZW50RGV0YWlsc1Jlc3VsdFByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBQYXltZW50IERldGFpbHNcbiAgICovXG4gIHJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXRQYXltZW50RGV0YWlsc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3VwcG9ydGVkIGNhcmQgdHlwZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENhcmRUeXBlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGF5bWVudCBkZXRhaWxzIHVzaW5nIHRoZSBnaXZlbiBwYXltZW50RGV0YWlscyBwYXJhbVxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHM6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBjcmVhdGVkXG4gICAqL1xuICBjcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBheW1lbnQgZGV0YWlsc1xuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHMgOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlscyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5jb2RlLFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzOiBwYXltZW50RGV0YWlscyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydERhdGEudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVM7XG4gIH1cbn1cbiJdfQ==