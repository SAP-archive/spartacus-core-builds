/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { OrderAdapter } from './order.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./order.adapter";
export class OrderConnector {
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
    place(userId, cartId) {
        return this.adapter.place(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} orderCode
     * @return {?}
     */
    get(userId, orderCode) {
        return this.adapter.load(userId, orderCode);
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @return {?}
     */
    getHistory(userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    }
}
OrderConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderConnector.ctorParameters = () => [
    { type: OrderAdapter }
];
/** @nocollapse */ OrderConnector.ngInjectableDef = i0.defineInjectable({ factory: function OrderConnector_Factory() { return new OrderConnector(i0.inject(i1.OrderAdapter)); }, token: OrderConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OrderConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9vcmRlci5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFNL0MsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsWUFBc0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFHLENBQUM7Ozs7OztJQUV4QyxLQUFLLENBQUMsTUFBYyxFQUFFLE1BQWM7UUFDekMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBRU0sR0FBRyxDQUFDLE1BQWMsRUFBRSxTQUFpQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7OztJQUVNLFVBQVUsQ0FDZixNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYTtRQUViLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBckJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFlBQVk7Ozs7Ozs7O0lBT1AsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3JkZXJBZGFwdGVyIH0gZnJvbSAnLi9vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogT3JkZXJBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBwbGFjZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5wbGFjZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCBvcmRlckNvZGUpO1xuICB9XG5cbiAgcHVibGljIGdldEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxufVxuIl19