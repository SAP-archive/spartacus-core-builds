/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, shareReplay, tap } from 'rxjs/operators';
import { ANONYMOUS_USERID, CartDataService, } from '../../cart/facade/cart-data.service';
import * as fromCheckoutStore from '../store/index';
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSupportedDeliveryModes), tap((/**
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSelectedDeliveryMode));
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getSelectedCode));
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getDeliveryAddress));
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
        return this.checkoutStore.pipe(select(fromCheckoutStore.getAddressVerificationResults), filter((/**
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
    CheckoutDeliveryService.prototype.loadSupportedDeliveryModes = /**
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
    CheckoutDeliveryService.prototype.setDeliveryMode = /**
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
    CheckoutDeliveryService.prototype.setDeliveryAddress = /**
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
        this.checkoutStore.dispatch(new fromCheckoutStore.ClearAddressVerificationResults());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9mYWNhZGUvY2hlY2tvdXQtZGVsaXZlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUc3QyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFcEQ7SUFJRSxpQ0FDWSxhQUF5RCxFQUN6RCxRQUF5QjtRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDekQsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDbEMsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILDJEQUF5Qjs7OztJQUF6QjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLEVBQ25ELEdBQUc7Ozs7UUFBQyxVQUFBLGFBQWE7WUFDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVH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QUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN6QixJQUFJLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDL0IsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxpRUFBK0I7Ozs7SUFBL0I7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxpQkFBaUIsQ0FBQywrQkFBK0IsRUFBRSxDQUN4RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUywrQ0FBYTs7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBbkpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYmdCLEtBQUs7Z0JBS3BCLGVBQWU7OztrQ0FOakI7Q0FnS0MsQUFwSkQsSUFvSkM7U0FqSlksdUJBQXVCOzs7Ozs7SUFFaEMsZ0RBQW1FOzs7OztJQUNuRSwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZVJlcGxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQU5PTllNT1VTX1VTRVJJRCxcbiAgQ2FydERhdGFTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi9jYXJ0L2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUNoZWNrb3V0U3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdG9yZTogU3RvcmU8ZnJvbUNoZWNrb3V0U3RvcmUuU3RhdGVXaXRoQ2hlY2tvdXQ+LFxuICAgIHByb3RlY3RlZCBjYXJ0RGF0YTogQ2FydERhdGFTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21DaGVja291dFN0b3JlLmdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMpLFxuICAgICAgdGFwKGRlbGl2ZXJ5TW9kZXMgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlXG4gICAqL1xuICBnZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSgpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tQ2hlY2tvdXRTdG9yZS5nZXRTZWxlY3RlZERlbGl2ZXJ5TW9kZSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBkZWxpdmVyeSBtb2RlIGNvZGVcbiAgICovXG4gIGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U3RvcmUucGlwZShzZWxlY3QoZnJvbUNoZWNrb3V0U3RvcmUuZ2V0U2VsZWN0ZWRDb2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlbGl2ZXJ5IGFkZHJlc3NcbiAgICovXG4gIGdldERlbGl2ZXJ5QWRkcmVzcygpOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbUNoZWNrb3V0U3RvcmUuZ2V0RGVsaXZlcnlBZGRyZXNzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFkZHJlc3MgdmVyaWZpY2F0aW9uIHJlc3VsdHNcbiAgICovXG4gIGdldEFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24gfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbUNoZWNrb3V0U3RvcmUuZ2V0QWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMpLFxuICAgICAgZmlsdGVyKHJlc3VsdHMgPT4gT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoICE9PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBzZXQgYSBkZWxpdmVyeSBhZGRyZXNzIHVzaW5nIHRoZSBhZGRyZXNzIHBhcmFtXG4gICAqIEBwYXJhbSBhZGRyZXNzIDogdGhlIEFkZHJlc3MgdG8gYmUgY3JlYXRlZCBhbmQgc2V0XG4gICAqL1xuICBjcmVhdGVBbmRTZXRBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLkFkZERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHN1cHBvcnRlZCBkZWxpdmVyeSBtb2Rlc1xuICAgKi9cbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRlbGl2ZXJ5IG1vZGVcbiAgICogQHBhcmFtIG1vZGUgOiBUaGUgZGVsaXZlcnkgbW9kZSB0byBiZSBzZXRcbiAgICovXG4gIHNldERlbGl2ZXJ5TW9kZShtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlNldERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydElkLFxuICAgICAgICAgIHNlbGVjdGVkTW9kZUlkOiBtb2RlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgOiB0aGUgYWRkcmVzcyB0byBiZSB2ZXJpZmllZFxuICAgKi9cbiAgdmVyaWZ5QWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uQWxsb3dlZCgpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5WZXJpZnlBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuY2FydERhdGEudXNlcklkLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGVsaXZlcnkgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyA6IFRoZSBhZGRyZXNzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0RGVsaXZlcnlBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3Rpb25BbGxvd2VkKCkpIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IGZyb21DaGVja291dFN0b3JlLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmNhcnREYXRhLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHRoaXMuY2FydERhdGEuY2FydC5jb2RlLFxuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhZGRyZXNzIHZlcmlmaWNhdGlvbiByZXN1bHRzXG4gICAqL1xuICBjbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tQ2hlY2tvdXRTdG9yZS5DbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFjdGlvbkFsbG93ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydERhdGEudXNlcklkICE9PSBBTk9OWU1PVVNfVVNFUklEO1xuICB9XG59XG4iXX0=