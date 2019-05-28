/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SiteAdapter } from './site.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./site.adapter";
export class SiteConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    getLanguages() {
        return this.adapter.loadLanguages();
    }
    /**
     * @return {?}
     */
    getCurrencies() {
        return this.adapter.loadCurrencies();
    }
    /**
     * @return {?}
     */
    getBaseSite() {
        return this.adapter.loadBaseSite();
    }
}
SiteConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SiteConnector.ctorParameters = () => [
    { type: SiteAdapter }
];
/** @nocollapse */ SiteConnector.ngInjectableDef = i0.defineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.inject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SiteConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPN0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7SUFFOUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUFoQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsV0FBVzs7Ozs7Ozs7SUFRTixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4vc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5LCBMYW5ndWFnZSwgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogU2l0ZUFkYXB0ZXIpIHt9XG5cbiAgZ2V0TGFuZ3VhZ2VzKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZExhbmd1YWdlcygpO1xuICB9XG5cbiAgZ2V0Q3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDdXJyZW5jaWVzKCk7XG4gIH1cblxuICBnZXRCYXNlU2l0ZSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQmFzZVNpdGUoKTtcbiAgfVxufVxuIl19