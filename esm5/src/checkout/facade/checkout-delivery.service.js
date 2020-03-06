import { __decorate, __read } from "tslib";
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
var CheckoutDeliveryService = /** @class */ (function () {
    function CheckoutDeliveryService(checkoutStore, authService, activeCartService) {
        this.checkoutStore = checkoutStore;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    /**
     * Get supported delivery modes
     */
    CheckoutDeliveryService.prototype.getSupportedDeliveryModes = function () {
        var _this = this;
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSupportedDeliveryModes), withLatestFrom(this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)))), tap(function (_a) {
            var _b = __read(_a, 2), loadingState = _b[1];
            if (!(loadingState.loading || loadingState.success || loadingState.error)) {
                _this.loadSupportedDeliveryModes();
            }
        }), pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Get selected delivery mode
     */
    CheckoutDeliveryService.prototype.getSelectedDeliveryMode = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryMode));
    };
    /**
     * Get selected delivery mode code
     */
    CheckoutDeliveryService.prototype.getSelectedDeliveryModeCode = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryModeCode));
    };
    /**
     * Get delivery address
     */
    CheckoutDeliveryService.prototype.getDeliveryAddress = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getDeliveryAddress));
    };
    /**
     * Get status about successfully set Delivery Address
     */
    CheckoutDeliveryService.prototype.getSetDeliveryAddressProcess = function () {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_ADDRESS_PROCESS_ID)));
    };
    /**
     * Clear info about process of setting Delivery Address
     */
    CheckoutDeliveryService.prototype.resetSetDeliveryAddressProcess = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryAddressProcess());
    };
    /**
     * Get status about of set Delivery Mode process
     */
    CheckoutDeliveryService.prototype.getSetDeliveryModeProcess = function () {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_DELIVERY_MODE_PROCESS_ID)));
    };
    /**
     * Clear info about process of setting Delivery Mode
     */
    CheckoutDeliveryService.prototype.resetSetDeliveryModeProcess = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ResetSetDeliveryModeProcess());
    };
    /**
     * Clear info about process of setting Supported Delivery Modes
     */
    CheckoutDeliveryService.prototype.resetLoadSupportedDeliveryModesProcess = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ResetLoadSupportedDeliveryModesProcess());
    };
    /**
     * Get status about of set supported Delivery Modes process
     */
    CheckoutDeliveryService.prototype.getLoadSupportedDeliveryModeProcess = function () {
        return this.checkoutStore.pipe(select(getProcessStateFactory(SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID)));
    };
    /**
     * Clear supported delivery modes loaded in last checkout process
     */
    CheckoutDeliveryService.prototype.clearCheckoutDeliveryModes = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ClearSupportedDeliveryModes());
    };
    /**
     * Get address verification results
     */
    CheckoutDeliveryService.prototype.getAddressVerificationResults = function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAddressVerificationResults), filter(function (results) { return Object.keys(results).length !== 0; }));
    };
    /**
     * Create and set a delivery address using the address param
     * @param address : the Address to be created and set
     */
    CheckoutDeliveryService.prototype.createAndSetAddress = function (address) {
        if (this.actionAllowed()) {
            var userId_1;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_1 = occUserId); })
                .unsubscribe();
            var cartId_1;
            this.activeCartService
                .getActiveCartId()
                .subscribe(function (activeCartId) { return (cartId_1 = activeCartId); })
                .unsubscribe();
            if (userId_1 && cartId_1) {
                this.checkoutStore.dispatch(new CheckoutActions.AddDeliveryAddress({
                    userId: userId_1,
                    cartId: cartId_1,
                    address: address,
                }));
            }
        }
    };
    /**
     * Load supported delivery modes
     */
    CheckoutDeliveryService.prototype.loadSupportedDeliveryModes = function () {
        if (this.actionAllowed()) {
            var userId_2;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_2 = occUserId); })
                .unsubscribe();
            var cartId_2;
            this.activeCartService
                .getActiveCartId()
                .subscribe(function (activeCartId) { return (cartId_2 = activeCartId); })
                .unsubscribe();
            if (userId_2 && cartId_2) {
                this.checkoutStore.dispatch(new CheckoutActions.LoadSupportedDeliveryModes({
                    userId: userId_2,
                    cartId: cartId_2,
                }));
            }
        }
    };
    /**
     * Set delivery mode
     * @param mode : The delivery mode to be set
     */
    CheckoutDeliveryService.prototype.setDeliveryMode = function (mode) {
        if (this.actionAllowed()) {
            var userId_3;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_3 = occUserId); })
                .unsubscribe();
            var cartId_3;
            this.activeCartService
                .getActiveCartId()
                .subscribe(function (activeCartId) { return (cartId_3 = activeCartId); })
                .unsubscribe();
            if (userId_3 && cartId_3) {
                this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryMode({
                    userId: userId_3,
                    cartId: cartId_3,
                    selectedModeId: mode,
                }));
            }
        }
    };
    /**
     * Verifies the address
     * @param address : the address to be verified
     */
    CheckoutDeliveryService.prototype.verifyAddress = function (address) {
        if (this.actionAllowed()) {
            var userId_4;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_4 = occUserId); })
                .unsubscribe();
            if (userId_4) {
                this.checkoutStore.dispatch(new CheckoutActions.VerifyAddress({
                    userId: userId_4,
                    address: address,
                }));
            }
        }
    };
    /**
     * Set delivery address
     * @param address : The address to be set
     */
    CheckoutDeliveryService.prototype.setDeliveryAddress = function (address) {
        if (this.actionAllowed()) {
            var userId_5;
            this.authService
                .getOccUserId()
                .subscribe(function (occUserId) { return (userId_5 = occUserId); })
                .unsubscribe();
            var cart_1;
            this.activeCartService
                .getActive()
                .subscribe(function (activeCart) { return (cart_1 = activeCart); })
                .unsubscribe();
            if (cart_1 && userId_5) {
                this.checkoutStore.dispatch(new CheckoutActions.SetDeliveryAddress({
                    userId: userId_5,
                    cartId: cart_1.code,
                    address: address,
                }));
            }
        }
    };
    /**
     * Clear address verification results
     */
    CheckoutDeliveryService.prototype.clearAddressVerificationResults = function () {
        this.checkoutStore.dispatch(new CheckoutActions.ClearAddressVerificationResults());
    };
    /**
     * Clear address already setup in last checkout process
     */
    CheckoutDeliveryService.prototype.clearCheckoutDeliveryAddress = function () {
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        var cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe(function (activeCartId) { return (cartId = activeCartId); })
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryAddress({
                userId: userId,
                cartId: cartId,
            }));
        }
    };
    /**
     * Clear selected delivery mode setup in last checkout process
     */
    CheckoutDeliveryService.prototype.clearCheckoutDeliveryMode = function () {
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        var cartId;
        this.activeCartService
            .getActiveCartId()
            .subscribe(function (activeCartId) { return (cartId = activeCartId); })
            .unsubscribe();
        if (userId && cartId) {
            this.checkoutStore.dispatch(new CheckoutActions.ClearCheckoutDeliveryMode({
                userId: userId,
                cartId: cartId,
            }));
        }
    };
    /**
     * Clear address and delivery mode already setup in last checkout process
     */
    CheckoutDeliveryService.prototype.clearCheckoutDeliveryDetails = function () {
        this.clearCheckoutDeliveryAddress();
        this.clearCheckoutDeliveryMode();
        this.clearCheckoutDeliveryModes();
    };
    CheckoutDeliveryService.prototype.actionAllowed = function () {
        var userId;
        this.authService
            .getOccUserId()
            .subscribe(function (occUserId) { return (userId = occUserId); })
            .unsubscribe();
        return ((userId && userId !== OCC_USER_ID_ANONYMOUS) ||
            this.activeCartService.isGuestCart());
    };
    CheckoutDeliveryService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CheckoutDeliveryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ActiveCartService)); }, token: CheckoutDeliveryService, providedIn: "root" });
    CheckoutDeliveryService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDeliveryService);
    return CheckoutDeliveryService;
}());
export { CheckoutDeliveryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUUvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUNMLCtCQUErQixFQUMvQiw0QkFBNEIsRUFDNUIsc0NBQXNDLEdBRXZDLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzdEO0lBQ0UsaUNBQ1ksYUFBZ0UsRUFDaEUsV0FBd0IsRUFDeEIsaUJBQW9DO1FBRnBDLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzdDLENBQUM7SUFFSjs7T0FFRztJQUNILDJEQUF5QixHQUF6QjtRQUFBLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxh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VlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2NhcnQvZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3MtZ3JvdXAuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQsXG4gIFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQsXG4gIFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lELFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAqL1xuICBnZXRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ2hlY2tvdXRTZWxlY3RvcnMuZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcyksXG4gICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkoU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGFwKChbLCBsb2FkaW5nU3RhdGVdKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKGxvYWRpbmdTdGF0ZS5sb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZS5zdWNjZXNzIHx8IGxvYWRpbmdTdGF0ZS5lcnJvcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKDApLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKCk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIGRlbGl2ZXJ5IG1vZGUgY29kZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGVDb2RlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWxpdmVyeSBhZGRyZXNzXG4gICAqL1xuICBnZXREZWxpdmVyeUFkZHJlc3MoKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldERlbGl2ZXJ5QWRkcmVzcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGF0dXMgYWJvdXQgc3VjY2Vzc2Z1bGx5IHNldCBEZWxpdmVyeSBBZGRyZXNzXG4gICAqL1xuICBnZXRTZXREZWxpdmVyeUFkZHJlc3NQcm9jZXNzKCk6IE9ic2VydmFibGU8TG9hZGVyU3RhdGU8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N0YXRlRmFjdG9yeShTRVRfREVMSVZFUllfQUREUkVTU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIERlbGl2ZXJ5IEFkZHJlc3NcbiAgICovXG4gIHJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0U2V0RGVsaXZlcnlBZGRyZXNzUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBEZWxpdmVyeSBNb2RlIHByb2Nlc3NcbiAgICovXG4gIGdldFNldERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5mbyBhYm91dCBwcm9jZXNzIG9mIHNldHRpbmcgRGVsaXZlcnkgTW9kZVxuICAgKi9cbiAgcmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGluZm8gYWJvdXQgcHJvY2VzcyBvZiBzZXR0aW5nIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlc1xuICAgKi9cbiAgcmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhdHVzIGFib3V0IG9mIHNldCBzdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgcHJvY2Vzc1xuICAgKi9cbiAgZ2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZVByb2Nlc3MoKTogT2JzZXJ2YWJsZTxMb2FkZXJTdGF0ZTx2b2lkPj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KFNFVF9TVVBQT1JURURfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2RlcyBsb2FkZWQgaW4gbGFzdCBjaGVja291dCBwcm9jZXNzXG4gICAqL1xuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgKi9cbiAgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbiB8IHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyksXG4gICAgICBmaWx0ZXIocmVzdWx0cyA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHNldCBhIGRlbGl2ZXJ5IGFkZHJlc3MgdXNpbmcgdGhlIGFkZHJlc3MgcGFyYW1cbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgQWRkcmVzcyB0byBiZSBjcmVhdGVkIGFuZCBzZXRcbiAgICovXG4gIGNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgbGV0IHVzZXJJZDtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgICAgbGV0IGNhcnRJZDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ2FydElkID0+IChjYXJ0SWQgPSBhY3RpdmVDYXJ0SWQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmICh1c2VySWQgJiYgY2FydElkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgc3VwcG9ydGVkIGRlbGl2ZXJ5IG1vZGVzXG4gICAqL1xuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKGFjdGl2ZUNhcnRJZCA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIGxldCB1c2VySWQ7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgICAuc3Vic2NyaWJlKG9jY1VzZXJJZCA9PiAodXNlcklkID0gb2NjVXNlcklkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIGxldCBjYXJ0SWQ7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgICAuc3Vic2NyaWJlKGFjdGl2ZUNhcnRJZCA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGUoe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkLFxuICAgICAgICAgICAgc2VsZWN0ZWRNb2RlSWQ6IG1vZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgYWRkcmVzcyB0byBiZSB2ZXJpZmllZFxuICAgKi9cbiAgdmVyaWZ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5WZXJpZnlBZGRyZXNzKHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICBsZXQgdXNlcklkO1xuICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuXG4gICAgICBsZXQgY2FydDtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ2FydCA9PiAoY2FydCA9IGFjdGl2ZUNhcnQpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChjYXJ0ICYmIHVzZXJJZCkge1xuICAgICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY2FydElkOiBjYXJ0LmNvZGUsXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoKTogdm9pZCB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG5cbiAgICBsZXQgY2FydElkO1xuICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmVDYXJ0SWQoKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVDYXJ0SWQgPT4gKGNhcnRJZCA9IGFjdGl2ZUNhcnRJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodXNlcklkICYmIGNhcnRJZCkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIHNldHVwIGluIGxhc3QgY2hlY2tvdXQgcHJvY2Vzc1xuICAgKi9cbiAgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSgpOiB2b2lkIHtcbiAgICBsZXQgdXNlcklkO1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRPY2NVc2VySWQoKVxuICAgICAgLnN1YnNjcmliZShvY2NVc2VySWQgPT4gKHVzZXJJZCA9IG9jY1VzZXJJZCkpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCBjYXJ0SWQ7XG4gICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZUNhcnRJZCgpXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUNhcnRJZCA9PiAoY2FydElkID0gYWN0aXZlQ2FydElkKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh1c2VySWQgJiYgY2FydElkKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGNhcnRJZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFkZHJlc3MgYW5kIGRlbGl2ZXJ5IG1vZGUgYWxyZWFkeSBzZXR1cCBpbiBsYXN0IGNoZWNrb3V0IHByb2Nlc3NcbiAgICovXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeURldGFpbHMoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKCk7XG4gICAgdGhpcy5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IHVzZXJJZDtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5zdWJzY3JpYmUob2NjVXNlcklkID0+ICh1c2VySWQgPSBvY2NVc2VySWQpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICh1c2VySWQgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHx8XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICApO1xuICB9XG59XG4iXX0=