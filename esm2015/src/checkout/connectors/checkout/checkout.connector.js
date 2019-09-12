/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutAdapter } from './checkout.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout.adapter";
export class CheckoutConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        return this.adapter.placeOrder(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    clearCheckoutDeliveryAddress(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    clearCheckoutDeliveryMode(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
    }
}
CheckoutConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutConnector.ctorParameters = () => [
    { type: CheckoutAdapter }
];
/** @nocollapse */ CheckoutConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(i0.ɵɵinject(i1.CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBT3JELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBc0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVNLG1CQUFtQixDQUN4QixNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRU0sNEJBQTRCLENBQ2pDLE1BQWMsRUFDZCxNQUFjO1FBRWQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFTSx5QkFBeUIsQ0FDOUIsTUFBYyxFQUNkLE1BQWM7UUFFZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxlQUFlOzs7Ozs7OztJQVFWLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dEFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIHBsYWNlT3JkZXIodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucGxhY2VPcmRlcih1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZENoZWNrb3V0RGV0YWlscyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENoZWNrb3V0RGV0YWlscyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cbn1cbiJdfQ==