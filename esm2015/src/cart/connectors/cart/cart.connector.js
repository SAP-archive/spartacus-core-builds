/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?=} details
     * @return {?}
     */
    loadAll(userId, details) {
        return this.adapter.loadAll(userId, details);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    load(userId, cartId, details) {
        return this.adapter.load(userId, cartId, details);
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
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    create(userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
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
/** @nocollapse */ CartConnector.ngInjectableDef = i0.defineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.inject(i1.CartAdapter)); }, token: CartConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPN0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7OztJQUVyQyxPQUFPLENBQUMsTUFBYyxFQUFFLE9BQWlCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQ1QsTUFBYyxFQUNkLE1BQWMsRUFDZCxPQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU0sbUJBQW1CLENBQ3hCLE1BQWMsRUFDZCxNQUFjO1FBRWQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUNYLE1BQWMsRUFDZCxTQUFrQixFQUNsQixlQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBL0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFdBQVc7Ozs7Ozs7O0lBUU4sZ0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuL2NhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBVSUNhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGFwdGVyOiBDYXJ0QWRhcHRlcikge31cblxuICBwdWJsaWMgbG9hZEFsbCh1c2VySWQ6IHN0cmluZywgZGV0YWlscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFVJQ2FydFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQWxsKHVzZXJJZCwgZGV0YWlscyk7XG4gIH1cblxuICBwdWJsaWMgbG9hZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZXRhaWxzPzogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPFVJQ2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIGNhcnRJZCwgZGV0YWlscyk7XG4gIH1cblxuICBwdWJsaWMgbG9hZENoZWNrb3V0RGV0YWlscyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENoZWNrb3V0RGV0YWlscyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZENhcnRJZD86IHN0cmluZyxcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxVSUNhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZSh1c2VySWQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkKTtcbiAgfVxufVxuIl19