/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartAdapter } from './cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart.adapter";
export class CartConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        return this.adapter.loadAll(userId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    load(userId, cartId) {
        return this.adapter.load(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    create(userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    delete(userId, cartId) {
        return this.adapter.delete(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} email
     * @return {?}
     */
    addEmail(userId, cartId, email) {
        return this.adapter.addEmail(userId, cartId, email);
    }
}
CartConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartConnector.ctorParameters = () => [
    { type: CartAdapter }
];
/** @nocollapse */ CartConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.ɵɵinject(i1.CartAdapter)); }, token: CartConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7O0lBRXZDLE9BQU8sQ0FBQyxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQ1gsTUFBYyxFQUNkLFNBQWtCLEVBQ2xCLGVBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVNLFFBQVEsQ0FDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLEtBQWE7UUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLFdBQVc7Ozs7Ozs7O0lBTU4sZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuL2NhcnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbGwodXNlcklkKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZENhcnRJZD86IHN0cmluZyxcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jcmVhdGUodXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgYWRkRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGRFbWFpbCh1c2VySWQsIGNhcnRJZCwgZW1haWwpO1xuICB9XG59XG4iXX0=