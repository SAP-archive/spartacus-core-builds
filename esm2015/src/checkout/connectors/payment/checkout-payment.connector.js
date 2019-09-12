/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutPaymentAdapter } from './checkout-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-payment.adapter";
export class CheckoutPaymentConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    create(userId, cartId, paymentDetails) {
        return this.adapter.create(userId, cartId, paymentDetails);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    set(userId, cartId, paymentDetailsId) {
        return this.adapter.set(userId, cartId, paymentDetailsId);
    }
    /**
     * @return {?}
     */
    getCardTypes() {
        return this.adapter.loadCardTypes();
    }
}
CheckoutPaymentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPaymentConnector.ctorParameters = () => [
    { type: CheckoutPaymentAdapter }
];
/** @nocollapse */ CheckoutPaymentConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentConnector_Factory() { return new CheckoutPaymentConnector(i0.ɵɵinject(i1.CheckoutPaymentAdapter)); }, token: CheckoutPaymentConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutPaymentConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNcEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUFzQixPQUErQjtRQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUFHLENBQUM7Ozs7Ozs7SUFFbEQsTUFBTSxDQUNYLE1BQWMsRUFDZCxNQUFjLEVBQ2QsY0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFTSxHQUFHLENBQ1IsTUFBYyxFQUNkLE1BQWMsRUFDZCxnQkFBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7O1lBeEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLHNCQUFzQjs7Ozs7Ozs7SUFPakIsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENoZWNrb3V0UGF5bWVudEFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHNcbiAgKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlKHVzZXJJZCwgY2FydElkLCBwYXltZW50RGV0YWlscyk7XG4gIH1cblxuICBwdWJsaWMgc2V0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2V0KHVzZXJJZCwgY2FydElkLCBwYXltZW50RGV0YWlsc0lkKTtcbiAgfVxuXG4gIGdldENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDYXJkVHlwZXMoKTtcbiAgfVxufVxuIl19