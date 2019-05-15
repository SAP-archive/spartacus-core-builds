/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    SiteConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SiteConnector.ctorParameters = function () { return [
        { type: SiteAdapter }
    ]; };
    /** @nocollapse */ SiteConnector.ngInjectableDef = i0.defineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.inject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJN0M7SUFJRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7SUFFOUMsb0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBWkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxXQUFXOzs7d0JBRHBCO0NBa0JDLEFBYkQsSUFhQztTQVZZLGFBQWE7Ozs7OztJQUNaLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi9zaXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFNpdGVBZGFwdGVyKSB7fVxuXG4gIGdldExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRMYW5ndWFnZXMoKTtcbiAgfVxuXG4gIGdldEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ3VycmVuY2llcygpO1xuICB9XG59XG4iXX0=