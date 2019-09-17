/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, pluck, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { CheckoutActions } from '../store/actions/index';
import { SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
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
        return this.cartData.userId !== OCC_USER_ID_ANONYMOUS;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUVMLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsc0NBQXNDLEdBQ3ZDLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFLdEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFDbEMsWUFDWSxhQUFnRSxFQUNoRSxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDaEUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQzs7Ozs7SUFLSix5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLEVBQ25ELGNBQWMsQ0FDWixJQUFJLENBQUMsYUFBYSxDQUFDLElB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cUJBQXFCLENBQUM7SUFDeEQsQ0FBQzs7O1lBN1BGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQTNCZ0IsS0FBSztZQVNiLGVBQWU7Ozs7Ozs7O0lBcUJwQixnREFBMEU7Ozs7O0lBQzFFLDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsXG4gIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG4gIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgY2FydERhdGE6IENhcnREYXRhU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICovXG4gIGdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB0YXAoKFssIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEobG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgcGx1Y2soMCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBjb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICovXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0RGVsaXZlcnlBZGRyZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBzdWNjZXNzZnVsbHkgc2V0IERlbGl2ZXJ5IEFkZHJlc3NcbiAgICovXG4gIGdldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgQWRkcmVzc1xuICAgKi9cbiAgcmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IERlbGl2ZXJ5IE1vZGUgcHJvY2Vzc1xuICAgKi9cbiAgZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBNb2RlXG4gICAqL1xuICByZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzXG4gICAqL1xuICByZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IHN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBwcm9jZXNzXG4gICAqL1xuICBnZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzIGxvYWRlZCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPEFkZHJlc3NWYWxpZGF0aW9uIHwgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKSxcbiAgICAgIGZpbHRlcihyZXN1bHRzID0+IE9iamVjdC5rZXlzKHJlc3VsdHMpLmxlbmd0aCAhPT0gMClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgc2V0IGEgZGVsaXZlcnkgYWRkcmVzcyB1c2luZyB0aGUgYWRkcmVzcyBwYXJhbVxuICAgKiBAcGFyYW0gYWRkcmVzcyA6IHRoZSBBZGRyZXNzIHRvIGJlIGNyZWF0ZWQgYW5kIHNldFxuICAgKi9cbiAgY3JlYXRlQW5kU2V0QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAqL1xuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGUoe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBzZWxlY3RlZE1vZGVJZDogbW9kZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIGFkZHJlc3MgdG8gYmUgdmVyaWZpZWRcbiAgICovXG4gIHZlcmlmeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogVGhlIGFkZHJlc3MgdG8gYmUgc2V0XG4gICAqL1xuICBzZXREZWxpdmVyeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5jb2RlLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBjbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhZGRyZXNzIGFscmVhZHkgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhZGRyZXNzIGFuZCBkZWxpdmVyeSBtb2RlIGFscmVhZHkgc2V0dXAgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlEZXRhaWxzKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcygpO1xuICAgIHRoaXMuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSgpO1xuICAgIHRoaXMuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhY3Rpb25BbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcnREYXRhLnVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICB9XG59XG4iXX0=