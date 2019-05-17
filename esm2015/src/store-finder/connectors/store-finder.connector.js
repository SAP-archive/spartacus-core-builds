/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StoreFinderAdapter } from './store-finder.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./store-finder.adapter";
/**
 * @abstract
 */
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
/** @nocollapse */ StoreFinderConnector.ngInjectableDef = i0.defineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(i0.inject(i1.StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StoreFinderConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFTNUQsTUFBTSxPQUFnQixvQkFBb0I7Ozs7SUFDeEMsWUFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7O0lBRXJELE1BQU0sQ0FDSixLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVJ6QixrQkFBa0I7Ozs7Ozs7O0lBVWIsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4vc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBTdG9yZUZpbmRlclNlYXJjaFBhZ2UsXG4gIFN0b3JlQ291bnQsXG59IGZyb20gJy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RvcmVGaW5kZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogU3RvcmVGaW5kZXJBZGFwdGVyKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludFxuICApOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlKTtcbiAgfVxuXG4gIGdldENvdW50cygpOiBPYnNlcnZhYmxlPFN0b3JlQ291bnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENvdW50cygpO1xuICB9XG5cbiAgZ2V0KHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQoc3RvcmVJZCk7XG4gIH1cbn1cbiJdfQ==