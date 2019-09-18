/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartAdapter } from './cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart.adapter";
var CartConnector = /** @class */ (function () {
    function CartConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    CartConnector.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.adapter.loadAll(userId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartConnector.prototype.load = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.load(userId, cartId);
    };
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    CartConnector.prototype.create = /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    function (userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartConnector.prototype.delete = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.delete(userId, cartId);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} email
     * @return {?}
     */
    CartConnector.prototype.addEmail = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} email
     * @return {?}
     */
    function (userId, cartId, email) {
        return this.adapter.addEmail(userId, cartId, email);
    };
    CartConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartConnector.ctorParameters = function () { return [
        { type: CartAdapter }
    ]; };
    /** @nocollapse */ CartConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.ɵɵinject(i1.CartAdapter)); }, token: CartConnector, providedIn: "root" });
    return CartConnector;
}());
export { CartConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CartConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFN0M7SUFJRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7O0lBRXZDLCtCQUFPOzs7O0lBQWQsVUFBZSxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU0sNEJBQUk7Ozs7O0lBQVgsVUFBWSxNQUFjLEVBQUUsTUFBYztRQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRU0sOEJBQU07Ozs7OztJQUFiLFVBQ0UsTUFBYyxFQUNkLFNBQWtCLEVBQ2xCLGVBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTSw4QkFBTTs7Ozs7SUFBYixVQUFjLE1BQWMsRUFBRSxNQUFjO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7SUFFTSxnQ0FBUTs7Ozs7O0lBQWYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLEtBQWE7UUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsV0FBVzs7O3dCQUhwQjtDQXNDQyxBQWpDRCxJQWlDQztTQTlCWSxhQUFhOzs7Ozs7SUFDWixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4vY2FydC5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2FydEFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgcHVibGljIGxvYWQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHVzZXJJZCwgY2FydElkKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZSh1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZGVsZXRlKHVzZXJJZCwgY2FydElkKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFkZEVtYWlsKHVzZXJJZCwgY2FydElkLCBlbWFpbCk7XG4gIH1cbn1cbiJdfQ==