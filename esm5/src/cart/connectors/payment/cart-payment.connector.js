/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartPaymentAdapter } from './cart-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-payment.adapter";
var CartPaymentConnector = /** @class */ (function () {
    function CartPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    CartPaymentConnector.prototype.create = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetails
     * @return {?}
     */
    function (userId, cartId, paymentDetails) {
        return this.adapter.create(userId, cartId, paymentDetails);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    CartPaymentConnector.prototype.set = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    function (userId, cartId, paymentDetailsId) {
        return this.adapter.set(userId, cartId, paymentDetailsId);
    };
    /**
     * @return {?}
     */
    CartPaymentConnector.prototype.getCardTypes = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadCardTypes();
    };
    CartPaymentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartPaymentConnector.ctorParameters = function () { return [
        { type: CartPaymentAdapter }
    ]; };
    /** @nocollapse */ CartPaymentConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartPaymentConnector_Factory() { return new CartPaymentConnector(i0.inject(i1.CartPaymentAdapter)); }, token: CartPaymentConnector, providedIn: "root" });
    return CartPaymentConnector;
}());
export { CartPaymentConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartPaymentConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2Nvbm5lY3RvcnMvcGF5bWVudC9jYXJ0LXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHNUQ7SUFJRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLHFDQUFNOzs7Ozs7SUFBYixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsY0FBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFTSxrQ0FBRzs7Ozs7O0lBQVYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLGdCQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLGtCQUFrQjs7OytCQUYzQjtDQThCQyxBQXpCRCxJQXlCQztTQXRCWSxvQkFBb0I7Ozs7OztJQUNuQix1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0UGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL2NhcnQtcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IENhcmRUeXBlLCBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFBheW1lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2FydFBheW1lbnRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzXG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZSh1c2VySWQsIGNhcnRJZCwgcGF5bWVudERldGFpbHMpO1xuICB9XG5cbiAgcHVibGljIHNldChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50RGV0YWlsc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldCh1c2VySWQsIGNhcnRJZCwgcGF5bWVudERldGFpbHNJZCk7XG4gIH1cblxuICBnZXRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ2FyZFR5cGVzKCk7XG4gIH1cbn1cbiJdfQ==