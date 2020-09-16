import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, pluck, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { ActiveCartService } from '../../cart/facade/active-cart.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { CheckoutActions } from '../store/actions/index';
import { SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, } from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
import * as i3 from "../../cart/facade/active-cart.service";
export class CheckoutDeliveryService {
    constructor(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
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
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAddressVerificationResults), filter((results) => Object.keys(results).length !== 0));
    }
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    createAndSetAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.AddDeliveryAddress({
                    userId,
                    cartId,
                    address: address,
                }));
            }
        }
    }
    /**
     * Load supported delivery modes
     */
    loadSupportedDeliveryModes() {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.LoadSupportedDeliveryModes({
                    userId,
                    cartId,
                }));
            }
        }
    }
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    setDeliveryMode(mode) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (userId && cartId) {
                this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryMode({
                    userId,
                    cartId,
                    selectedModeId: mode,
                }));
            }
        }
    }
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    verifyAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            if (userId) {
                this.checkoutStore.dispatch(new CheckoutActions.VerifyAddress({
                    userId,
                    address,
                }));
            }
        }
    }
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    setDeliveryAddress(address) {
        if (this.actionAllowed()) {
            let userId;
            this.authService
                .getOccUserId()
                .subscribe((occUserId) => (userId = occUserId))
                .unsubscribe();
            let cartId;
            this.activeCartService
                .getActiveCartId()
                .subscribe((activeCartId) => (cartId = activeCartId))
                .unsubscribe();
            if (cartId && userId) {
                this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryAddress({
                    userId,
                    cartId,
                    address: address,
                }));
            }
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
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe((activeCartId) => (cartId = activeCartId))
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryAddress({
                userId,
                cartId,
            }));
        }
    }
    /**
     * Clear selected delivery mode setup in last checkout process
     */
    clearCheckoutDeliveryMode() {
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        let cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe((activeCartId) => (cartId = activeCartId))
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryMode({
                userId,
                cartId,
            }));
        }
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
        let userId;
        this.authService
            .getOccUserId()
            .subscribe((occUserId) => (userId = occUserId))
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    }
}
CheckoutDeliveryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutDeliveryService, providedIn: "root" });
CheckoutDeliveryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2ZhY2FkZS9jaGVja291dC1kZWxpdmVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsNEJBQTRCLEVBQzVCLHNDQUFzQyxHQUV2QyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUs3RCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILHlCQUF5QjtRQUN2QixPQUFPLElB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QUM1QyxNQUFNO2dCQUNOLE1BQU07YUFDUCxDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQTRCO1FBQzFCLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxhQUFhO1FBQ3JCLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzlDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FDTCxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUsscUJBQXFCLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUNyQyxDQUFDO0lBQ0osQ0FBQzs7OztZQTNWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTVCZ0IsS0FBSztZQVNiLFdBQVc7WUFDWCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy1ncm91cC5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCxcbiAgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG4gIFN0YXRlV2l0aENoZWNrb3V0LFxufSBmcm9tICcuLi9zdG9yZS9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERlbGl2ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjaGVja291dFN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDaGVja291dCB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICovXG4gIGdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB0YXAoKFssIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEobG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgcGx1Y2soMCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBjb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICovXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0RGVsaXZlcnlBZGRyZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBzdWNjZXNzZnVsbHkgc2V0IERlbGl2ZXJ5IEFkZHJlc3NcbiAgICovXG4gIGdldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgQWRkcmVzc1xuICAgKi9cbiAgcmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IERlbGl2ZXJ5IE1vZGUgcHJvY2Vzc1xuICAgKi9cbiAgZ2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBNb2RlXG4gICAqL1xuICByZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzXG4gICAqL1xuICByZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgb2Ygc2V0IHN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBwcm9jZXNzXG4gICAqL1xuICBnZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzIGxvYWRlZCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBnZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPEFkZHJlc3NWYWxpZGF0aW9uIHwgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKSxcbiAgICAgIGZpbHRlcigocmVzdWx0cykgPT4gT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoICE9PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBzZXQgYSBkZWxpdmVyeSBhZGRyZXNzIHVzaW5nIHRoZSBhZGRyZXNzIHBhcmFtXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIEFkZHJlc3MgdG8gYmUgY3JlYXRlZCBhbmQgc2V0XG4gICAqL1xuICBjcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnRJZDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnRJZCkgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydElkO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnRJZDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUNhcnRJZCkgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICAgIHNlbGVjdGVkTW9kZUlkOiBtb2RlLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIGFkZHJlc3MgdG8gYmUgdmVyaWZpZWRcbiAgICovXG4gIHZlcmlmeUFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5WZXJpZnlBZGRyZXNzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChjYXJ0SWQgJiYgdXNlcklkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTogdm9pZCB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyBhbmQgZGVsaXZlcnkgbW9kZSBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICBsZXQgdXNlcklkO1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB8fFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKTtcbiAgfVxufVxuIl19