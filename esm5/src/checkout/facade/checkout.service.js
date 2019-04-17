/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as fromCheckoutStore from '../store/index';
import { CartDataService, ANONYMOUS_USERID } from '../../cart/index';
var CheckoutService = /** @class */ (function () {
    function CheckoutService(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     */
    /**
     * Get supported delivery modes
     * @return {?}
     */
    CheckoutService.prototype.getSupportedDeliveryModes = /**
     * Get supported delivery modes
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSupportedDeliveryModes));
    };
    /**
     * Get selected delivery mode
     */
    /**
     * Get selected delivery mode
     * @return {?}
     */
    CheckoutService.prototype.getSelectedDeliveryMode = /**
     * Get selected delivery mode
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSelectedDeliveryMode));
    };
    /**
     * Get selected delivery mode code
     */
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    CheckoutService.prototype.getSelectedDeliveryModeCode = /**
     * Get selected delivery mode code
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSelectedCode));
    };
    /**
     * Get card types
     */
    /**
     * Get card types
     * @return {?}
     */
    CheckoutService.prototype.getCardTypes = /**
     * Get card types
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getAllCardTypes));
    };
    /**
     * Get delivery address
     */
    /**
     * Get delivery address
     * @return {?}
     */
    CheckoutService.prototype.getDeliveryAddress = /**
     * Get delivery address
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getDeliveryAddress));
    };
    /**
     * Get address verification results
     */
    /**
     * Get address verification results
     * @return {?}
     */
    CheckoutService.prototype.getAddressVerificationResults = /**
     * Get address verification results
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getAddressVerificationResults), filter(function (results) { return Object.keys(results).length !== 0; }));
    };
    /**
     * Get payment details
     */
    /**
     * Get payment details
     * @return {?}
     */
    CheckoutService.prototype.getPaymentDetails = /**
     * Get payment details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getPaymentDetails));
    };
    /**
     * Get order details
     */
    /**
     * Get order details
     * @return {?}
     */
    CheckoutService.prototype.getOrderDetails = /**
     * Get order details
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(fromCheckoutStore.getCheckoutOrderDetails));
    };
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    CheckoutService.prototype.createAndSetAddress = /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.AddDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                address: address,
            }));
        }
    };
    /**
     * Load supported delivery modes
     */
    /**
     * Load supported delivery modes
     * @return {?}
     */
    CheckoutService.prototype.loadSupportedDeliveryModes = /**
     * Load supported delivery modes
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.LoadSupportedDeliveryModes({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    };
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    CheckoutService.prototype.setDeliveryMode = /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    function (mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode,
            }));
        }
    };
    /**
     * Load the supported card types
     */
    /**
     * Load the supported card types
     * @return {?}
     */
    CheckoutService.prototype.loadSupportedCardTypes = /**
     * Load the supported card types
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new fromCheckoutStore.LoadCardTypes());
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
    CheckoutService.prototype.createPaymentDetails = /**
     * Create payment details using the given paymentDetails param
     * @param {?} paymentDetails
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.CreatePaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                paymentDetails: paymentDetails,
            }));
        }
    };
    /**
     * Places an order
     */
    /**
     * Places an order
     * @return {?}
     */
    CheckoutService.prototype.placeOrder = /**
     * Places an order
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.PlaceOrder({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    };
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    CheckoutService.prototype.verifyAddress = /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.VerifyAddress({
                userId: this.cartData.userId,
                address: address,
            }));
        }
    };
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    CheckoutService.prototype.setDeliveryAddress = /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address,
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
    CheckoutService.prototype.setPaymentDetails = /**
     * Set payment details
     * @param {?} paymentDetails : the PaymentDetails to be set
     * @return {?}
     */
    function (paymentDetails) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutStore.SetPaymentDetails({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                paymentDetails: paymentDetails,
            }));
        }
    };
    /**
     * Clear address verification results
     */
    /**
     * Clear address verification results
     * @return {?}
     */
    CheckoutService.prototype.clearAddressVerificationResults = /**
     * Clear address verification results
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearAddressVerificationResults());
    };
    /**
     * Clear checkout data
     */
    /**
     * Clear checkout data
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutData = /**
     * Clear checkout data
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearCheckoutData());
    };
    /**
     * Clear checkout step
     * @param stepNumber : the step number to be cleared
     */
    /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    CheckoutService.prototype.clearCheckoutStep = /**
     * Clear checkout step
     * @param {?} stepNumber : the step number to be cleared
     * @return {?}
     */
    function (stepNumber) {
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearCheckoutStep(stepNumber));
    };
    /**
     * @private
     * @return {?}
     */
    CheckoutService.prototype.actionAllowed = /**
     * @private
     * @return {?}
     */
    function () {
        return this.cartData.userId !== ANONYMOUS_USERID;
    };
    CheckoutService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CheckoutService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    return CheckoutService;
}());
export { CheckoutService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutService.prototype.checkoutStore;
    /**
     * @type {?}
     * @private
     */
    CheckoutService.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVVyRTtJQUVFLHlCQUNVLGFBQXFELEVBQ3JELFFBQXlCO1FBRHpCLGtCQUFhLEdBQWIsYUFBYSxDQUF3QztRQUNyRCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUNoQyxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsbURBQXlCOzs7O0lBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaURBQXVCOzs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscURBQTJCOzs7O0lBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lB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Z0JBTUwsZUFBZTs7SUFtUHhCLHNCQUFDO0NBQUEsQUF6T0QsSUF5T0M7U0F4T1ksZUFBZTs7Ozs7O0lBRXhCLHdDQUE2RDs7Ozs7SUFDN0QsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21DaGVja291dFN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSwgQU5PTllNT1VTX1VTRVJJRCB9IGZyb20gJy4uLy4uL2NhcnQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUGF5bWVudERldGFpbHMsXG4gIENhcmRUeXBlLFxuICBPcmRlcixcbiAgRGVsaXZlcnlNb2RlLFxuICBBZGRyZXNzVmFsaWRhdGlvbixcbiAgQWRkcmVzcyxcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFN0b3JlOiBTdG9yZTxmcm9tQ2hlY2tvdXRTdG9yZS5DaGVja291dFN0YXRlPixcbiAgICBwcml2YXRlIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAqL1xuICBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbUNoZWNrb3V0U3RvcmUuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tQ2hlY2tvdXRTdG9yZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoZnJvbUNoZWNrb3V0U3RvcmUuZ2V0U2VsZWN0ZWRDb2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhcmQgdHlwZXNcbiAgICovXG4gIGdldENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldEFsbENhcmRUeXBlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAqL1xuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldERlbGl2ZXJ5QWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPEFkZHJlc3NWYWxpZGF0aW9uIHwgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKSxcbiAgICAgIGZpbHRlcihyZXN1bHRzID0+IE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCAhPT0gMClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXltZW50IGRldGFpbHNcbiAgICovXG4gIGdldFBheW1lbnREZXRhaWxzKCk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldFBheW1lbnREZXRhaWxzKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yZGVyIGRldGFpbHNcbiAgICovXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldENoZWNrb3V0T3JkZXJEZXRhaWxzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBzZXQgYSBkZWxpdmVyeSBhZGRyZXNzIHVzaW5nIHRoZSBhZGRyZXNzIHBhcmFtXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIEFkZHJlc3MgdG8gYmUgY3JlYXRlZCBhbmQgc2V0XG4gICAqL1xuICBjcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLkFkZERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlNldERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIHNlbGVjdGVkTW9kZUlkOiBtb2RlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3VwcG9ydGVkIGNhcmQgdHlwZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWRDYXJkVHlwZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5Mb2FkQ2FyZFR5cGVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBwYXltZW50IGRldGFpbHMgdXNpbmcgdGhlIGdpdmVuIHBheW1lbnREZXRhaWxzIHBhcmFtXG4gICAqIEBwYXJhbSBwYXltZW50RGV0YWlsczogdGhlIFBheW1lbnREZXRhaWxzIHRvIGJlIGNyZWF0ZWRcbiAgICovXG4gIGNyZWF0ZVBheW1lbnREZXRhaWxzKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0U3RvcmUuQ3JlYXRlUGF5bWVudERldGFpbHMoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBwYXltZW50RGV0YWlscyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhbiBvcmRlclxuICAgKi9cbiAgcGxhY2VPcmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlBsYWNlT3JkZXIoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIGFkZHJlc3MgdG8gYmUgdmVyaWZpZWRcbiAgICovXG4gIHZlcmlmeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0U3RvcmUuVmVyaWZ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuY29kZSxcbiAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHBheW1lbnQgZGV0YWlsc1xuICAgKiBAcGFyYW0gcGF5bWVudERldGFpbHMgOiB0aGUgUGF5bWVudERldGFpbHMgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRQYXltZW50RGV0YWlscyhwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlNldFBheW1lbnREZXRhaWxzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0LmNvZGUsXG4gICAgICAgICAgcGF5bWVudERldGFpbHM6IHBheW1lbnREZXRhaWxzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgKi9cbiAgY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbUNoZWNrb3V0U3RvcmUuQ2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBjaGVja291dCBkYXRhXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2gobmV3IGZyb21DaGVja291dFN0b3JlLkNsZWFyQ2hlY2tvdXREYXRhKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNoZWNrb3V0IHN0ZXBcbiAgICogQHBhcmFtIHN0ZXBOdW1iZXIgOiB0aGUgc3RlcCBudW1iZXIgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgY2xlYXJDaGVja291dFN0ZXAoc3RlcE51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLkNsZWFyQ2hlY2tvdXRTdGVwKHN0ZXBOdW1iZXIpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==