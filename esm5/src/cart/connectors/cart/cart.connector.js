/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?=} details
     * @return {?}
     */
    CartConnector.prototype.loadAll = /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    function (userId, details) {
        return this.adapter.loadAll(userId, details);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    CartConnector.prototype.load = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    function (userId, cartId, details) {
        return this.adapter.load(userId, cartId, details);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    CartConnector.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
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
    CartConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartConnector.ctorParameters = function () { return [
        { type: CartAdapter }
    ]; };
    /** @nocollapse */ CartConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.inject(i1.CartAdapter)); }, token: CartConnector, providedIn: "root" });
    return CartConnector;
}());
export { CartConnector };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJN0M7SUFJRSx1QkFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7OztJQUVyQywrQkFBTzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxPQUFpQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBRU0sNEJBQUk7Ozs7OztJQUFYLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxPQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU0sMkNBQW1COzs7OztJQUExQixVQUNFLE1BQWMsRUFDZCxNQUFjO1FBRWQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7O0lBRU0sOEJBQU07Ozs7OztJQUFiLFVBQ0UsTUFBYyxFQUNkLFNBQWtCLEVBQ2xCLGVBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkEvQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxXQUFXOzs7d0JBRnBCO0NBc0NDLEFBaENELElBZ0NDO1NBN0JZLGFBQWE7Ozs7OztJQUNaLGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkYXB0ZXI6IENhcnRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nLCBkZXRhaWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Q2FydFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQWxsKHVzZXJJZCwgZGV0YWlscyk7XG4gIH1cblxuICBwdWJsaWMgbG9hZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZXRhaWxzPzogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBjYXJ0SWQsIGRldGFpbHMpO1xuICB9XG5cbiAgcHVibGljIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDaGVja291dERldGFpbHModXNlcklkLCBjYXJ0SWQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY3JlYXRlKHVzZXJJZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQpO1xuICB9XG59XG4iXX0=