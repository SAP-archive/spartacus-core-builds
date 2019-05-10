/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartDeliveryAdapter } from './cart-delivery.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-delivery.adapter";
var CartDeliveryConnector = /** @class */ (function () {
    function CartDeliveryConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    CartDeliveryConnector.prototype.createAddress = /**
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
    CartDeliveryConnector.prototype.setAddress = /**
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
    CartDeliveryConnector.prototype.setMode = /**
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
    CartDeliveryConnector.prototype.getMode = /**
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
    CartDeliveryConnector.prototype.getSupportedModes = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.getSupportedModes(userId, cartId);
    };
    CartDeliveryConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartDeliveryConnector.ctorParameters = function () { return [
        { type: CartDeliveryAdapter }
    ]; };
    /** @nocollapse */ CartDeliveryConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartDeliveryConnector_Factory() { return new CartDeliveryConnector(i0.inject(i1.CartDeliveryAdapter)); }, token: CartDeliveryConnector, providedIn: "root" });
    return CartDeliveryConnector;
}());
export { CartDeliveryConnector };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartDeliveryConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZWxpdmVyeS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NhcnQtZGVsaXZlcnkuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFJOUQ7SUFJRSwrQkFBb0IsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFBRyxDQUFDOzs7Ozs7O0lBRTdDLDZDQUFhOzs7Ozs7SUFBcEIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLE9BQWdCO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU0sMENBQVU7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFTSx1Q0FBTzs7Ozs7O0lBQWQsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLGNBQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFTSx1Q0FBTzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxNQUFjO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVNLGlEQUFpQjs7Ozs7SUFBeEIsVUFDRSxNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsbUJBQW1COzs7Z0NBRjVCO0NBOENDLEFBeENELElBd0NDO1NBckNZLHFCQUFxQjs7Ozs7O0lBQ3BCLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuL2NhcnQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0RGVsaXZlcnlDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkYXB0ZXI6IENhcnREZWxpdmVyeUFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGNyZWF0ZUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzczogQWRkcmVzc1xuICApOiBPYnNlcnZhYmxlPEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZUFkZHJlc3ModXNlcklkLCBjYXJ0SWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgcHVibGljIHNldEFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldEFkZHJlc3ModXNlcklkLCBjYXJ0SWQsIGFkZHJlc3NJZCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZWxpdmVyeU1vZGVJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXRNb2RlKHVzZXJJZCwgY2FydElkLCBkZWxpdmVyeU1vZGVJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0TW9kZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3VwcG9ydGVkTW9kZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0U3VwcG9ydGVkTW9kZXModXNlcklkLCBjYXJ0SWQpO1xuICB9XG59XG4iXX0=