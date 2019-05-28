/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutDeliveryAdapter } from './checkout-delivery.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-delivery.adapter";
var CheckoutDeliveryConnector = /** @class */ (function () {
    function CheckoutDeliveryConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    CheckoutDeliveryConnector.prototype.createAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (userId, cartId, address) {
        return this.adapter.createAddress(userId, cartId, address);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    CheckoutDeliveryConnector.prototype.setAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, cartId, addressId) {
        return this.adapter.setAddress(userId, cartId, addressId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    CheckoutDeliveryConnector.prototype.setMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    function (userId, cartId, deliveryModeId) {
        return this.adapter.setMode(userId, cartId, deliveryModeId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryConnector.prototype.getMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.getMode(userId, cartId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CheckoutDeliveryConnector.prototype.getSupportedModes = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.getSupportedModes(userId, cartId);
    };
    CheckoutDeliveryConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDeliveryConnector.ctorParameters = function () { return [
        { type: CheckoutDeliveryAdapter }
    ]; };
    /** @nocollapse */ CheckoutDeliveryConnector.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutDeliveryConnector_Factory() { return new CheckoutDeliveryConnector(i0.inject(i1.CheckoutDeliveryAdapter)); }, token: CheckoutDeliveryConnector, providedIn: "root" });
    return CheckoutDeliveryConnector;
}());
export { CheckoutDeliveryConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutDeliveryConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFJdEU7SUFJRSxtQ0FBc0IsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7SUFBRyxDQUFDOzs7Ozs7O0lBRW5ELGlEQUFhOzs7Ozs7SUFBcEIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLE9BQWdCO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU0sOENBQVU7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFTSwyQ0FBTzs7Ozs7O0lBQWQsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLGNBQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTSwyQ0FBTzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxNQUFjO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVNLHFEQUFpQjs7Ozs7SUFBeEIsVUFDRSxNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsdUJBQXVCOzs7b0NBRmhDO0NBOENDLEFBeENELElBd0NDO1NBckNZLHlCQUF5Qjs7Ozs7O0lBQ3hCLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGNyZWF0ZUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzczogQWRkcmVzc1xuICApOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZUFkZHJlc3ModXNlcklkLCBjYXJ0SWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgcHVibGljIHNldEFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldEFkZHJlc3ModXNlcklkLCBjYXJ0SWQsIGFkZHJlc3NJZCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZWxpdmVyeU1vZGVJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXRNb2RlKHVzZXJJZCwgY2FydElkLCBkZWxpdmVyeU1vZGVJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0TW9kZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VwcG9ydGVkTW9kZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0U3VwcG9ydGVkTW9kZXModXNlcklkLCBjYXJ0SWQpO1xuICB9XG59XG4iXX0=