/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { SET_PAYMENT_DETAILS_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCw4QkFBOEIsR0FDL0IsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQU0vRixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUNqQyxZQUNZLGFBQWdFLEVBQ2hFLFFBQXlCO1FBRHpCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUNsQyxDQUFDOzs7OztJQUtKLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBS0QsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBS0QsaUNBQWlDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDOzs7OztJQUtELDZCQUE2QjtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxlQUFlLENBQUMsNkJBQTZCLEVBQUUsQ0FDcEQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0Qsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBTUQsb0JBQW9CLENBQUMsY0FBOEI7UUFDakQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixjQUFjO2FBQ2YsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLGNBQThCO1FBQzlDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQy9CLGNBQWMsRUFBRSxjQUFjO2FBQy9CLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkJnQixLQUFLO1lBSXBCLGVBQWU7Ozs7Ozs7O0lBa0JiLCtDQUEwRTs7Ozs7SUFDMUUsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEFOT05ZTU9VU19VU0VSSUQsXG4gIENhcnREYXRhU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3MtZ3JvdXAuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBheW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgY2FyZCB0eXBlc1xuICAgKi9cbiAgZ2V0Q2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0QWxsQ2FyZFR5cGVzKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBheW1lbnQgZGV0YWlsc1xuICAgKi9cbiAgZ2V0UGF5bWVudERldGFpbHMoKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0UGF5bWVudERldGFpbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IHNldCBQYXltZW50IERldGFpbHMgcHJvY2Vzc1xuICAgKi9cbiAgZ2V0U2V0UGF5bWVudERldGFpbHNSZXN1bHRQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgUGF5bWVudCBEZXRhaWxzXG4gICAqL1xuICByZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHN1cHBvcnRlZCBjYXJkIHR5cGVzXG4gICAqL1xuICBsb2FkU3VwcG9ydGVkQ2FyZFR5cGVzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDYXJkVHlwZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHBheW1lbnQgZGV0YWlscyB1c2luZyB0aGUgZ2l2ZW4gcGF5bWVudERldGFpbHMgcGFyYW1cbiAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgY3JlYXRlZFxuICAgKi9cbiAgY3JlYXRlUGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBwYXltZW50RGV0YWlscyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwYXltZW50IGRldGFpbHNcbiAgICogQHBhcmFtIHBheW1lbnREZXRhaWxzIDogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0UGF5bWVudERldGFpbHMocGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuY29kZSxcbiAgICAgICAgICBwYXltZW50RGV0YWlsczogcGF5bWVudERldGFpbHMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gQU5PTllNT1VTX1VTRVJJRDtcbiAgfVxufVxuIl19