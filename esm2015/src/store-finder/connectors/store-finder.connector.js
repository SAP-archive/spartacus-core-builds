/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StoreFinderAdapter } from './store-finder.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./store-finder.adapter";
export class StoreFinderConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    search(query, searchConfig, longitudeLatitude) {
        return this.adapter.search(query, searchConfig, longitudeLatitude);
    }
    /**
     * @return {?}
     */
    getCounts() {
        return this.adapter.loadCounts();
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    get(storeId) {
        return this.adapter.load(storeId);
    }
}
StoreFinderConnector.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
StoreFinderConnector.ctorParameters = () => [
    { type: StoreFinderAdapter }
];
/** @nocollapse */ StoreFinderConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(i0.ɵɵinject(i1.StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StoreFinderConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTNUQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtJQUFHLENBQUM7Ozs7Ozs7SUFFckQsTUFBTSxDQUNKLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7UUFFNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQWxCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUnpCLGtCQUFrQjs7Ozs7Ozs7SUFVYix1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIFN0b3JlQ291bnQsXG4gIFN0b3JlRmluZGVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWwvc3RvcmUtZmluZGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBTdG9yZUZpbmRlckFkYXB0ZXIpIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZWFyY2gocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpO1xuICB9XG5cbiAgZ2V0Q291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ291bnRzKCk7XG4gIH1cblxuICBnZXQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChzdG9yZUlkKTtcbiAgfVxufVxuIl19