/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutDeliveryAdapter } from './checkout-delivery.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-delivery.adapter";
export class CheckoutDeliveryConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddress(userId, cartId, address) {
        return this.adapter.createAddress(userId, cartId, address);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setAddress(userId, cartId, addressId) {
        return this.adapter.setAddress(userId, cartId, addressId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    setMode(userId, cartId, deliveryModeId) {
        return this.adapter.setMode(userId, cartId, deliveryModeId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getMode(userId, cartId) {
        return this.adapter.getMode(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedModes(userId, cartId) {
        return this.adapter.getSupportedModes(userId, cartId);
    }
}
CheckoutDeliveryConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutDeliveryConnector.ctorParameters = () => [
    { type: CheckoutDeliveryAdapter }
];
/** @nocollapse */ CheckoutDeliveryConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDeliveryConnector_Factory() { return new CheckoutDeliveryConnector(i0.ɵɵinject(i1.CheckoutDeliveryAdapter)); }, token: CheckoutDeliveryConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutDeliveryConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFPdEUsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNwQyxZQUFzQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtJQUFHLENBQUM7Ozs7Ozs7SUFFbkQsYUFBYSxDQUNsQixNQUFjLEVBQ2QsTUFBYyxFQUNkLE9BQWdCO1FBRWhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU0sVUFBVSxDQUNmLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7SUFFTSxPQUFPLENBQ1osTUFBYyxFQUNkLE1BQWMsRUFDZCxjQUFzQjtRQUV0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRU0sT0FBTyxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVNLGlCQUFpQixDQUN0QixNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLHVCQUF1Qjs7Ozs7Ozs7SUFRbEIsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgfSBmcm9tICcuL2NoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dERlbGl2ZXJ5QWRhcHRlcikge31cblxuICBwdWJsaWMgY3JlYXRlQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlQWRkcmVzcyh1c2VySWQsIGNhcnRJZCwgYWRkcmVzcyk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2V0QWRkcmVzcyh1c2VySWQsIGNhcnRJZCwgYWRkcmVzc0lkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNb2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldE1vZGUodXNlcklkLCBjYXJ0SWQsIGRlbGl2ZXJ5TW9kZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRNb2RlKHVzZXJJZCwgY2FydElkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdXBwb3J0ZWRNb2RlcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPERlbGl2ZXJ5TW9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRTdXBwb3J0ZWRNb2Rlcyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cbn1cbiJdfQ==