import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, shareReplay, tap, pluck, withLatestFrom, } from 'rxjs/operators';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/cart-data.service";
let CheckoutDeliveryService = class CheckoutDeliveryService {
    constructor(checkoutStore, cartData) {
        this.checkoutStore = checkoutStore;
        this.cartData = cartData;
    }
    /**
     * Get supported delivery modes
     */
    getSupportedDeliveryModes() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSupportedDeliveryModes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)))), tap(([, loadingState]) => {
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                this.loadSupportedDeliveryModes();
            }
        }), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Get selected delivery mode
     */
    getSelectedDeliveryMode() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryMode));
    }
    /**
     * Get selected delivery mode code
     */
    getSelectedDeliveryModeCode() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryModeCode));
    }
    /**
     * Get delivery address
     */
    getDeliveryAddress() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getDeliveryAddress));
    }
    /**
     * Get status about successfully set Delivery Address
     */
    getSetDeliveryAddressProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_ADDRESS_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Address
     */
    resetSetDeliveryAddressProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryAddressProcess());
    }
    /**
     * Get status about of set Delivery Mode process
     */
    getSetDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear info about process of setting Delivery Mode
     */
    resetSetDeliveryModeProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryModeProcess());
    }
    /**
     * Clear info about process of setting Supported Delivery Modes
     */
    resetLoadSupportedDeliveryModesProcess() {
        this.checkoutStore.dispatch(new CheckoutActions.ResetLoadSupportedDeliveryModesProcess());
    }
    /**
     * Get status about of set supported Delivery Modes process
     */
    getLoadSupportedDeliveryModeProcess() {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)));
    }
    /**
     * Clear supported delivery modes loaded in last checkout process
     */
    clearCheckoutDeliveryModes() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearSupportedDeliveryModes());
    }
    /**
     * Get address verification results
     */
    getAddressVerificationResults() {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAddressVerificationResults), filter(results => Object.keys(results).length !== 0));
    }
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
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
     * @param mode : The delivery mode to be set
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
     * @param address : the address to be verified
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
     * @param address : The address to be set
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
     */
    clearAddressVerificationResults() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearAddressVerificationResults());
    }
    /**
     * Clear address already setup in last checkout process
     */
    clearCheckoutDeliveryAddress() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryAddress({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
        }));
    }
    /**
     * Clear selected delivery mode setup in last checkout process
     */
    clearCheckoutDeliveryMode() {
        this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryMode({
            userId: this.cartData.userId,
            cartId: this.cartData.cartId,
        }));
    }
    /**
     * Clear address and delivery mode already setup in last checkout process
     */
    clearCheckoutDeliveryDetails() {
        this.clearCheckoutDeliveryAddress();
        this.clearCheckoutDeliveryMode();
        this.clearCheckoutDeliveryModes();
    }
    actionAllowed() {
        return (this.cartData.userId !== OCC_USER_ID_ANONYMOUS ||
            this.cartData.isGuestCart);
    }
};
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: CartDataService }
];
CheckoutDeliveryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.CartDataService)); }, token: CheckoutDeliveryService, providedIn: "root" });
CheckoutDeliveryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDeliveryService);
export { CheckoutDeliveryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxHQUFHLEVBQ0gsS0FBSyxFQUNMLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUUvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsc0NBQXNDLEdBRXZDLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLN0QsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFDWSxhQUFnRSxFQUNoRSxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDaEUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHO0lBQ0gseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUNuRCxjQUFjLENBQ1osSUFBSSxDQUFD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QUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLGFBQWE7UUFDckIsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLHFCQUFxQjtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDMUIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQTVQNEIsS0FBSztZQUNWLGVBQWU7OztBQUgxQix1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQThQbkM7U0E5UFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbiAgcGx1Y2ssXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCxcbiAgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERlbGl2ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMpLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRhcCgoWywgbG9hZGluZ1N0YXRlXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShsb2FkaW5nU3RhdGUubG9hZGluZyB8fCBsb2FkaW5nU3RhdGUuc3VjY2VzcyB8fCBsb2FkaW5nU3RhdGUuZXJyb3IpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBwbHVjaygwKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXREZWxpdmVyeUFkZHJlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IHN1Y2Nlc3NmdWxseSBzZXQgRGVsaXZlcnkgQWRkcmVzc1xuICAgKi9cbiAgZ2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBBZGRyZXNzXG4gICAqL1xuICByZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgRGVsaXZlcnkgTW9kZSBwcm9jZXNzXG4gICAqL1xuICBnZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IE1vZGVcbiAgICovXG4gIHJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXNcbiAgICovXG4gIHJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgc3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIHByb2Nlc3NcbiAgICovXG4gIGdldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXMgbG9hZGVkIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24gfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMpLFxuICAgICAgZmlsdGVyKHJlc3VsdHMgPT4gT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoICE9PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBzZXQgYSBkZWxpdmVyeSBhZGRyZXNzIHVzaW5nIHRoZSBhZGRyZXNzIHBhcmFtXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIEFkZHJlc3MgdG8gYmUgY3JlYXRlZCBhbmQgc2V0XG4gICAqL1xuICBjcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVsaXZlcnkgbW9kZVxuICAgKiBAcGFyYW0gbW9kZSA6IFRoZSBkZWxpdmVyeSBtb2RlIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0RGVsaXZlcnlNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIHNlbGVjdGVkTW9kZUlkOiBtb2RlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgYWRkcmVzcyB0byBiZSB2ZXJpZmllZFxuICAgKi9cbiAgdmVyaWZ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0LmNvZGUsXG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoe1xuICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYW5kIGRlbGl2ZXJ5IG1vZGUgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY2FydERhdGEudXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfHxcbiAgICAgIHRoaXMuY2FydERhdGEuaXNHdWVzdENhcnRcbiAgICApO1xuICB9XG59XG4iXX0=