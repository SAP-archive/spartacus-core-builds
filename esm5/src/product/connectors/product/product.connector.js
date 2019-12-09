/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ProductAdapter } from './product.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product.adapter";
var ProductConnector = /** @class */ (function () {
    function ProductConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    ProductConnector.prototype.get = /**
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.adapter.load(productCode, scope);
    };
    /**
     * @param {?} products
     * @return {?}
     */
    ProductConnector.prototype.getMany = /**
     * @param {?} products
     * @return {?}
     */
    function (products) {
        var _this = this;
        if (!this.adapter.loadMany) {
            return products.map((/**
             * @param {?} product
             * @return {?}
             */
            function (product) { return (tslib_1.__assign({}, product, { data$: _this.adapter.load(product.code, product.scope) })); }));
        }
        return this.adapter.loadMany(products);
    };
    ProductConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductConnector.ctorParameters = function () { return [
        { type: ProductAdapter }
    ]; };
    /** @nocollapse */ ProductConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.ɵɵinject(i1.ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
    return ProductConnector;
}());
export { ProductConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBR25EO0lBSUUsMEJBQXNCLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUcsQ0FBQzs7Ozs7O0lBRWpELDhCQUFHOzs7OztJQUFILFVBQUksV0FBbUIsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsa0NBQU87Ozs7SUFBUCxVQUFRLFFBQTZCO1FBQXJDLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLHNCQUMxQixPQUFPLElBQ1YsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUNyRCxFQUg2QixDQUc3QixFQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsY0FBYzs7OzJCQUh2QjtDQTBCQyxBQXBCRCxJQW9CQztTQWpCWSxnQkFBZ0I7Ozs7OztJQUNmLG1DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuL3Njb3BlZC1wcm9kdWN0LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0QWRhcHRlcikge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSwgc2NvcGUpO1xuICB9XG5cbiAgZ2V0TWFueShwcm9kdWN0czogU2NvcGVkUHJvZHVjdERhdGFbXSk6IFNjb3BlZFByb2R1Y3REYXRhW10ge1xuICAgIGlmICghdGhpcy5hZGFwdGVyLmxvYWRNYW55KSB7XG4gICAgICByZXR1cm4gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgZGF0YSQ6IHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3QuY29kZSwgcHJvZHVjdC5zY29wZSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkTWFueShwcm9kdWN0cyk7XG4gIH1cbn1cbiJdfQ==