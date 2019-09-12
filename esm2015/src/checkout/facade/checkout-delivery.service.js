/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, pluck, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/cart-data.service";
export class CheckoutDeliveryService {
    /**
     * @param {?} checkoutStore
     * @param {?} cartData
     */
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     * @return {?}
     */
    getSupportedDeliveryModes() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSupportedDeliveryModes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)))), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([, loadingState]) => {
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                this.loadSupportedDeliveryModes();
            }
        })), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Get selected delivery mode
     * @return {?}
     */
    getSelectedDeliveryMode() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryMode));
    }
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    getSelectedDeliveryModeCode() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryModeCode));
    }
    /**
     * Get delivery address
     * @return {?}
     */
    getDeliveryAddress() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getDeliveryAddress));
    }
    /**
     * Get status about successfully set Delivery Address
     * @return {?}
     */
    getSetDeliveryAddressProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_ADDRESS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Address
     * @return {?}
     */
    resetSetDeliveryAddressProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryAddressProcess());
    }
    /**
     * Get status about of set Delivery Mode process
     * @return {?}
     */
    getSetDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Mode
     * @return {?}
     */
    resetSetDeliveryModeProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryModeProcess());
    }
    /**
     * Clear info about process of setting Supported Delivery Modes
     * @return {?}
     */
    resetLoadSupportedDeliveryModesProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetLoadSupportedDeliveryModesProcess());
    }
    /**
     * Get status about of set supported Delivery Modes process
     * @return {?}
     */
    getLoadSupportedDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear supported delivery modes loaded in last checkout process
     * @return {?}
     */
    clearCheckoutDeliveryModes() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearSupportedDeliveryModes());
    }
    /**
     * Get address verification results
     * @return {?}
     */
    getAddressVerificationResults() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAddressVerificationResults), filter((/**
         * @param {?} results
         * @return {?}
         */
        results => Object.keys(results).length !== 0)));
    }
    /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    createAndSetAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.AddDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                address: address,
            }));
        }
    }
    /**
     * Load supported delivery modes
     * @return {?}
     */
    loadSupportedDeliveryModes() {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.LoadSupportedDeliveryModes({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
            }));
        }
    }
    /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    setDeliveryMode(mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode,
            }));
        }
    }
    /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    verifyAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.VerifyAddress({
                userId: this.cartData.userId,
                address,
            }));
        }
    }
    /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    setDeliveryAddress(address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address,
            }));
        }
    }
    /**
     * Clear address verification results
     * @return {?}
     */
    clearAddressVerificationResults() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearAddressVerificationResults());
    }
    /**
     * Clear address already setup in last checkout process
     * @return {?}
     */
    clearCheckoutDeliveryAddress() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryAddress({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
        }));
    }
    /**
     * Clear selected delivery mode setup in last checkout process
     * @return {?}
     */
    clearCheckoutDeliveryMode() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryMode({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
        }));
    }
    /**
     * Clear address and delivery mode already setup in last checkout process
     * @return {?}
     */
    clearCheckoutDeliveryDetails() {
        this.clearCheckoutDeliveryAddress();
        this.clearCheckoutDeliveryMode();
        this.clearCheckoutDeliveryModes();
    }
    /**
     * @protected
     * @return {?}
     */
    actionAllowed() {
        return this.cartData.userId !== ANONYMOUS_USERID;
    }
}
CheckoutDeliveryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
/** @nocollapse */ CheckoutDeliveryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.CartDataService)); }, token: CheckoutDeliveryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutDeliveryService.prototype.checkoutStore;
    /**
     * @type {?}
     * @protected
     */
    CheckoutDeliveryService.prototype.cartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLHFDQUFxQyxDQUFDO0FBRzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBRUwsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1QixzQ0FBc0MsR0FDdkMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQU0vRixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxZQUNZLGFBQWdFLEVBQ2hFLFFBQXlCO1FBRHpCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUNsQyxDQUFDOzs7OztJQUtKLHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLENBQUMsRUFDbkQsY0FBYyxDQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixNQUFNLENBQUMsc0JBQXNCLENBQUMs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VUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBN0JnQixLQUFLO1lBV3BCLGVBQWU7Ozs7Ozs7O0lBcUJiLGdEQUEwRTs7Ozs7SUFDMUUsMkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBTk9OWU1PVVNfVVNFUklELFxuICBDYXJ0RGF0YVNlcnZpY2UsXG59IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lELFxuICBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxuICBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGNhcnREYXRhOiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAqL1xuICBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcyksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGFwKChbLCBsb2FkaW5nU3RhdGVdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKGxvYWRpbmdTdGF0ZS5sb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZS5zdWNjZXNzIHx8IGxvYWRpbmdTdGF0ZS5lcnJvcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKDApLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGUgY29kZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAqL1xuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldERlbGl2ZXJ5QWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgc3VjY2Vzc2Z1bGx5IHNldCBEZWxpdmVyeSBBZGRyZXNzXG4gICAqL1xuICBnZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IEFkZHJlc3NcbiAgICovXG4gIHJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBEZWxpdmVyeSBNb2RlIHByb2Nlc3NcbiAgICovXG4gIGdldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgTW9kZVxuICAgKi9cbiAgcmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlc1xuICAgKi9cbiAgcmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBzdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgcHJvY2Vzc1xuICAgKi9cbiAgZ2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2RlcyBsb2FkZWQgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgKi9cbiAgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbiB8IHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyksXG4gICAgICBmaWx0ZXIocmVzdWx0cyA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHNldCBhIGRlbGl2ZXJ5IGFkZHJlc3MgdXNpbmcgdGhlIGFkZHJlc3MgcGFyYW1cbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgQWRkcmVzcyB0byBiZSBjcmVhdGVkIGFuZCBzZXRcbiAgICovXG4gIGNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWxpdmVyeSBtb2RlXG4gICAqIEBwYXJhbSBtb2RlIDogVGhlIGRlbGl2ZXJ5IG1vZGUgdG8gYmUgc2V0XG4gICAqL1xuICBzZXREZWxpdmVyeU1vZGUobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgc2VsZWN0ZWRNb2RlSWQ6IG1vZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyA6IHRoZSBhZGRyZXNzIHRvIGJlIHZlcmlmaWVkXG4gICAqL1xuICB2ZXJpZnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5WZXJpZnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyA6IFRoZSBhZGRyZXNzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnQuY29kZSxcbiAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgKi9cbiAgY2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGUgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyBhbmQgZGVsaXZlcnkgbW9kZSBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==