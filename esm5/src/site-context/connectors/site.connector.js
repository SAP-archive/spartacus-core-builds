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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJN0M7SUFJRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7Ozs7SUFFOUMsb0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkFoQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxXQUFXOzs7d0JBRHBCO0NBc0JDLEFBakJELElBaUJDO1NBZFksYUFBYTs7Ozs7O0lBQ1osZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSwgTGFuZ3VhZ2UsIEJhc2VTaXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFNpdGVBZGFwdGVyKSB7fVxuXG4gIGdldExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRMYW5ndWFnZXMoKTtcbiAgfVxuXG4gIGdldEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ3VycmVuY2llcygpO1xuICB9XG5cbiAgZ2V0QmFzZVNpdGUoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEJhc2VTaXRlKCk7XG4gIH1cbn1cbiJdfQ==