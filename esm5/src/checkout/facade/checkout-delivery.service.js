/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, shareReplay, tap } from 'rxjs/operators';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import * as fromCheckoutActions from '../store/actions/index';
import { CheckoutSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../cart/facade/cart-data.service";
var CheckoutDeliveryService = /** @class */ (function () {
    function CheckoutDeliveryService(checkoutStore, cartData) {
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
    CheckoutDeliveryService.prototype.getSupportedDeliveryModes = /**
     * Get supported delivery modes
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSupportedDeliveryModes), tap((/**
         * @param {?} deliveryModes
         * @return {?}
         */
        function (deliveryModes) {
            if (Object.keys(deliveryModes).length === 0) {
                _this.loadSupportedDeliveryModes();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Get selected delivery mode
     */
    /**
     * Get selected delivery mode
     * @return {?}
     */
    CheckoutDeliveryService.prototype.getSelectedDeliveryMode = /**
     * Get selected delivery mode
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryMode));
    };
    /**
     * Get selected delivery mode code
     */
    /**
     * Get selected delivery mode code
     * @return {?}
     */
    CheckoutDeliveryService.prototype.getSelectedDeliveryModeCode = /**
     * Get selected delivery mode code
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getSelectedDeliveryModeCode));
    };
    /**
     * Get delivery address
     */
    /**
     * Get delivery address
     * @return {?}
     */
    CheckoutDeliveryService.prototype.getDeliveryAddress = /**
     * Get delivery address
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getDeliveryAddress));
    };
    /**
     * Get address verification results
     */
    /**
     * Get address verification results
     * @return {?}
     */
    CheckoutDeliveryService.prototype.getAddressVerificationResults = /**
     * Get address verification results
     * @return {?}
     */
    function () {
        return this.checkoutStore.pipe(select(CheckoutSelectors.getAddressVerificationResults), filter((/**
         * @param {?} results
         * @return {?}
         */
        function (results) { return Object.keys(results).length !== 0; })));
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
    CheckoutDeliveryService.prototype.createAndSetAddress = /**
     * Create and set a delivery address using the address param
     * @param {?} address : the Address to be created and set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutActions.AddDeliveryAddress({
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
    CheckoutDeliveryService.prototype.loadSupportedDeliveryModes = /**
     * Load supported delivery modes
     * @return {?}
     */
    function () {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutActions.LoadSupportedDeliveryModes({
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
    CheckoutDeliveryService.prototype.setDeliveryMode = /**
     * Set delivery mode
     * @param {?} mode : The delivery mode to be set
     * @return {?}
     */
    function (mode) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutActions.SetDeliveryMode({
                userId: this.cartData.userId,
                cartId: this.cartData.cartId,
                selectedModeId: mode,
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
    CheckoutDeliveryService.prototype.verifyAddress = /**
     * Verifies the address
     * @param {?} address : the address to be verified
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutActions.VerifyAddress({
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
    CheckoutDeliveryService.prototype.setDeliveryAddress = /**
     * Set delivery address
     * @param {?} address : The address to be set
     * @return {?}
     */
    function (address) {
        if (this.actionAllowed()) {
            this.checkoutStore.dispatch(new fromCheckoutActions.SetDeliveryAddress({
                userId: this.cartData.userId,
                cartId: this.cartData.cart.code,
                address: address,
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
    CheckoutDeliveryService.prototype.clearAddressVerificationResults = /**
     * Clear address verification results
     * @return {?}
     */
    function () {
        this.checkoutStore.dispatch(new fromCheckoutActions.ClearAddressVerificationResults());
    };
    /**
     * @protected
     * @return {?}
     */
    CheckoutDeliveryService.prototype.actionAllowed = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.cartData.userId !== ANONYMOUS_USERID;
    };
    CheckoutDeliveryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDeliveryService.ctorParameters = function () { return [
        { type: Store },
        { type: CartDataService }
    ]; };
    /** @nocollapse */ CheckoutDeliveryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryService_Factory() { return new CheckoutDeliveryService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.CartDataService)); }, token: CheckoutDeliveryService, providedIn: "root" });
    return CheckoutDeliveryService;
}());
export { CheckoutDeliveryService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUc3QyxPQUFPLEtBQUssbUJBQW1CLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFN0Q7SUFJRSxpQ0FDWSxhQUF1QyxFQUN2QyxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILDJEQUF5Qjs7OztJQUF6QjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLEVBQ25ELEdBQUc7Ozs7UUFBQyxVQUFBLGFBQWE7WUFDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHlEQUF1Qjs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDZEQUEyQjs7OztJQUEzQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9EQUFrQjs7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILCtEQUE2Qjs7OztJQUE3QjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsQ0FBQyxFQUN2RCxNQUFNOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHFEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsT0FBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3pDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNERBQTBCOzs7O0lBQTFCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksbUJBQW1CLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07YUFDN0IsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGlEQUFlOzs7OztJQUFmLFVBQWdCLElBQVk7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3pCLElBQUksbUJBQW1CLENBQUMsZUFBZSxDQUFDO2dCQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixjQUFjLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsK0NBQWE7Ozs7O0lBQWIsVUFBYyxPQUFnQjtRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQzVCLE9BQU8sU0FBQTthQUNSLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxvREFBa0I7Ozs7O0lBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO2dCQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDL0IsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpRUFBK0I7Ozs7SUFBL0I7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxtQkFBbUIsQ0FBQywrQkFBK0IsRUFBRSxDQUMxRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUywrQ0FBYTs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBckpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZmdCLEtBQUs7Z0JBS3BCLGVBQWU7OztrQ0FOakI7Q0FvS0MsQUF0SkQsSUFzSkM7U0FuSlksdUJBQXVCOzs7Ozs7SUFFaEMsZ0RBQWlEOzs7OztJQUNqRCwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX1VTRVJJRCxcbiAgQ2FydERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUNoZWNrb3V0QWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENoZWNrb3V0IH0gZnJvbSAnLi4vc3RvcmUvY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8U3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENoZWNrb3V0U2VsZWN0b3JzLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMpLFxuICAgICAgdGFwKGRlbGl2ZXJ5TW9kZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZUNvZGUpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlBZGRyZXNzKCk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXREZWxpdmVyeUFkZHJlc3MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWRkcmVzcyB2ZXJpZmljYXRpb24gcmVzdWx0c1xuICAgKi9cbiAgZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbiB8IHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDaGVja291dFNlbGVjdG9ycy5nZXRBZGRyZXNzVmVyaWZpY2F0aW9uUmVzdWx0cyksXG4gICAgICBmaWx0ZXIocmVzdWx0cyA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHNldCBhIGRlbGl2ZXJ5IGFkZHJlc3MgdXNpbmcgdGhlIGFkZHJlc3MgcGFyYW1cbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgQWRkcmVzcyB0byBiZSBjcmVhdGVkIGFuZCBzZXRcbiAgICovXG4gIGNyZWF0ZUFuZFNldEFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5jYXJ0RGF0YS51c2VySWQsXG4gICAgICAgICAgY2FydElkOiB0aGlzLmNhcnREYXRhLmNhcnRJZCxcbiAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBzdXBwb3J0ZWQgZGVsaXZlcnkgbW9kZXNcbiAgICovXG4gIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbkFsbG93ZWQoKSkge1xuICAgICAgdGhpcy5jaGVja291dFN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgZnJvbUNoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogdGhpcy5jYXJ0RGF0YS5jYXJ0SWQsXG4gICAgICAgICAgc2VsZWN0ZWRNb2RlSWQ6IG1vZGUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGUgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyA6IHRoZSBhZGRyZXNzIHRvIGJlIHZlcmlmaWVkXG4gICAqL1xuICB2ZXJpZnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dEFjdGlvbnMuVmVyaWZ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiBUaGUgYWRkcmVzcyB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5jb2RlLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBjbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWN0aW9uQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0RGF0YS51c2VySWQgIT09IEFOT05ZTU9VU19VU0VSSUQ7XG4gIH1cbn1cbiJdfQ==