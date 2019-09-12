/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SiteAdapter } from './site.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./site.adapter";
var SiteConnector = /** @class */ (function () {
    function SiteConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @return {?}
     */
    SiteConnector.prototype.getLanguages = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadLanguages();
    };
    /**
     * @return {?}
     */
    SiteConnector.prototype.getCurrencies = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadCurrencies();
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    SiteConnector.prototype.getCountries = /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        return this.adapter.loadCountries(type);
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    SiteConnector.prototype.getRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    };
    /**
     * @return {?}
     */
    SiteConnector.prototype.getBaseSite = /**
     * @return {?}
     */
    function () {
        return this.adapter.loadBaseSite();
    };
    SiteConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SiteConnector.ctorParameters = function () { return [
        { type: SiteAdapter }
    ]; };
    /** @nocollapse */ SiteConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.ɵɵinject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
    return SiteConnector;
}());
export { SiteConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SiteConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0M7SUFJRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7SUFFOUMsb0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsSUFBa0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGtDQUFVOzs7O0lBQVYsVUFBVyxjQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsV0FBVzs7O3dCQURwQjtDQStCQyxBQXpCRCxJQXlCQztTQXRCWSxhQUFhOzs7Ozs7SUFDWixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4vc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5LCBMYW5ndWFnZSwgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvdW50cnksIENvdW50cnlUeXBlLCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogU2l0ZUFkYXB0ZXIpIHt9XG5cbiAgZ2V0TGFuZ3VhZ2VzKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZExhbmd1YWdlcygpO1xuICB9XG5cbiAgZ2V0Q3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDdXJyZW5jaWVzKCk7XG4gIH1cblxuICBnZXRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDb3VudHJpZXModHlwZSk7XG4gIH1cblxuICBnZXRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSk7XG4gIH1cblxuICBnZXRCYXNlU2l0ZSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQmFzZVNpdGUoKTtcbiAgfVxufVxuIl19