/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import * as fromCheckoutStore from '../store/index';
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getAllCardTypes));
    }
    /**
     * Get payment details
     * @return {?}
     */
    getPaymentDetails() {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getPaymentDetails));
    }
    /**
     * Load the supported card types
     * @return {?}
     */
    loadSupportedCardTypes() {
        this.checkoutStore.dispatch(new fromCheckoutStore.LoadCardTypes());
    }
    /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    createPaymentDetails(paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.CreatePaymentDetails({
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
            this.checkoutStore.dispatch(new fromCheckoutStore.SetPaymentDetails({
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
        return this.cartData.userId !== ANONYMOUS_USERID;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3BELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ1ksYUFBeUQsRUFDekQsUUFBeUI7UUFEekIsa0JBQWEsR0FBYixhQUFhLENBQTRDO1FBQ3pELGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQ2xDLENBQUM7Ozs7O0lBS0osWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFLRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7SUFLRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7OztJQU1ELG9CQUFvQixDQUFDLGNBQThCO1FBQ2pELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDO2dCQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixjQUFjO2FBQ2YsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLGNBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO2dCQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDL0IsY0FBYyxFQUFFLGNBQWM7YUFDL0IsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRVMsYUFBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7OztZQWhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYZ0IsS0FBSztZQUlwQixlQUFlOzs7Ozs7OztJQVViLCtDQUFtRTs7Ozs7SUFDbkUsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19VU0VSSUQsXG4gIENhcnREYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tQ2hlY2tvdXRTdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBheW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPGZyb21DaGVja291dFN0b3JlLlN0YXRlV2l0aENoZWNrb3V0PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBjYXJkIHR5cGVzXG4gICAqL1xuICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChmcm9tQ2hlY2tvdXRTdG9yZS5nZXRBbGxDYXJkVHlwZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGF5bWVudCBkZXRhaWxzXG4gICAqL1xuICBnZXRQYXltZW50RGV0YWlscygpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKHNlbGVjdChmcm9tQ2hlY2tvdXRTdG9yZS5nZXRQYXltZW50RGV0YWlscykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHN1cHBvcnRlZCBjYXJkIHR5cGVzXG4gICAqL1xuICBsb2FkU3VwcG9ydGVkQ2FyZFR5cGVzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgZnJvbUNoZWNrb3V0U3RvcmUuTG9hZENhcmRUeXBlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGF5bWVudCBkZXRhaWxzIHVzaW5nIHRoZSBnaXZlbiBwYXltZW50RGV0YWlscyBwYXJhbVxuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHM6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBjcmVhdGVkXG4gICAqL1xuICBjcmVhdGVQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLkNyZWF0ZVBheW1lbnREZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGF5bWVudCBkZXRhaWxzXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlscyA6IHRoZSBQYXltZW50RGV0YWlscyB0byBiZSBzZXRcbiAgICovXG4gIHNldFBheW1lbnREZXRhaWxzKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0U3RvcmUuU2V0UGF5bWVudERldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuY29kZSxcbiAgICAgICAgICBwYXltZW50RGV0YWlsczogcGF5bWVudERldGFpbHMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRDtcbiAgfVxufVxuIl19