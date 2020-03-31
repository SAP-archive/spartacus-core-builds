import { __decorate } from "tslib";
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
let CheckoutDeliveryService = class CheckoutDeliveryService {
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
            let cart;
            this.activeCartService
                .getActive()
                .subscribe((activeCart) => (cart = activeCart))
                .unsubscribe();
            if (cart && userId) {
                this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryAddress({
                    userId,
                    cartId: cart.code,
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
};
CheckoutDeliveryService.ctorParameters = () => [
    { type: Store },
    { type: AuthService },
    { type: ActiveCartService }
];
CheckoutDeliveryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutDeliveryService, providedIn: "root" });
CheckoutDeliveryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutDeliveryService);
export { CheckoutDeliveryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUUvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsc0NBQXNDLEdBRXZDLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILHlCQUF5QjtRQUN2QixPQUFP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QUFlLENBQUMseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07Z0JBQ04sTUFBTTthQUNQLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw0QkFBNEI7UUFDMUIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLGFBQWE7UUFDckIsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDOUMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUNMLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF2VjRCLEtBQUs7WUFDUCxXQUFXO1lBQ0wsaUJBQWlCOzs7QUFKckMsdUJBQXVCO0lBSG5DLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx1QkFBdUIsQ0F5Vm5DO1NBelZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxuICB3aXRoTGF0ZXN0RnJvbSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQge1xuICBTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lELFxuICBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxuICBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG59IGZyb20gJy4uL3N0b3JlL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RvcmU6IFN0b3JlPFN0YXRlV2l0aENoZWNrb3V0IHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMpLFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHRhcCgoWywgbG9hZGluZ1N0YXRlXSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShsb2FkaW5nU3RhdGUubG9hZGluZyB8fCBsb2FkaW5nU3RhdGUuc3VjY2VzcyB8fCBsb2FkaW5nU3RhdGUuZXJyb3IpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBwbHVjaygwKSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXREZWxpdmVyeUFkZHJlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IHN1Y2Nlc3NmdWxseSBzZXQgRGVsaXZlcnkgQWRkcmVzc1xuICAgKi9cbiAgZ2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiBPYnNlcnZhYmxlPExvYWRlclN0YXRlPHZvaWQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBEZWxpdmVyeSBBZGRyZXNzXG4gICAqL1xuICByZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgRGVsaXZlcnkgTW9kZSBwcm9jZXNzXG4gICAqL1xuICBnZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IE1vZGVcbiAgICovXG4gIHJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBpbmZvIGFib3V0IHByb2Nlc3Mgb2Ygc2V0dGluZyBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXNcbiAgICovXG4gIHJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXR1cyBhYm91dCBvZiBzZXQgc3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIHByb2Nlc3NcbiAgICovXG4gIGdldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXMgbG9hZGVkIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24gfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMpLFxuICAgICAgZmlsdGVyKChyZXN1bHRzKSA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHNldCBhIGRlbGl2ZXJ5IGFkZHJlc3MgdXNpbmcgdGhlIGFkZHJlc3MgcGFyYW1cbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgQWRkcmVzcyB0byBiZSBjcmVhdGVkIGFuZCBzZXRcbiAgICovXG4gIGNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydElkO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmICh1c2VySWQgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVsaXZlcnkgbW9kZVxuICAgKiBAcGFyYW0gbW9kZSA6IFRoZSBkZWxpdmVyeSBtb2RlIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0RGVsaXZlcnlNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydElkO1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlQ2FydElkKClcbiAgICAgICAgLnN1YnNjcmliZSgoYWN0aXZlQ2FydElkKSA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGUoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgc2VsZWN0ZWRNb2RlSWQ6IG1vZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgYWRkcmVzcyB0byBiZSB2ZXJpZmllZFxuICAgKi9cbiAgdmVyaWZ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3Moe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyA6IFRoZSBhZGRyZXNzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKChvY2NVc2VySWQpID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0KSA9PiAoY2FydCA9IGFjdGl2ZUNhcnQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChjYXJ0ICYmIHVzZXJJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgc2VsZWN0ZWQgZGVsaXZlcnkgbW9kZSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTogdm9pZCB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUoKG9jY1VzZXJJZCkgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDYXJ0SWQpID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0SWQpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWRkcmVzcyBhbmQgZGVsaXZlcnkgbW9kZSBhbHJlYWR5IHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5RGV0YWlscygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoKTtcbiAgICB0aGlzLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICBsZXQgdXNlcklkO1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnN1YnNjcmliZSgob2NjVXNlcklkKSA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAodXNlcklkICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB8fFxuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgKTtcbiAgfVxufVxuIl19