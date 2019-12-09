/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductAdapter } from './product.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product.adapter";
export class ProductConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} productCode
     * @param {?=} scope
     * @return {?}
     */
    get(productCode, scope = '') {
        return this.adapter.load(productCode, scope);
    }
    /**
     * @param {?} products
     * @return {?}
     */
    getMany(products) {
        if (!this.adapter.loadMany) {
            return products.map((/**
             * @param {?} product
             * @return {?}
             */
            product => (Object.assign({}, product, { data$: this.adapter.load(product.code, product.scope) }))));
        }
        return this.adapter.loadMany(products);
    }
}
ProductConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductConnector.ctorParameters = () => [
    { type: ProductAdapter }
];
/** @nocollapse */ ProductConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.ɵɵinject(i1.ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFzQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7Ozs7OztJQUVqRCxHQUFHLENBQUMsV0FBbUIsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxRQUE2QjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQzFCLE9BQU8sSUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3JELEVBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFuQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsY0FBYzs7Ozs7Ozs7SUFPVCxtQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi9zY29wZWQtcHJvZHVjdC1kYXRhJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdEFkYXB0ZXIpIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlID0gJycpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQocHJvZHVjdENvZGUsIHNjb3BlKTtcbiAgfVxuXG4gIGdldE1hbnkocHJvZHVjdHM6IFNjb3BlZFByb2R1Y3REYXRhW10pOiBTY29wZWRQcm9kdWN0RGF0YVtdIHtcbiAgICBpZiAoIXRoaXMuYWRhcHRlci5sb2FkTWFueSkge1xuICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgIGRhdGEkOiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0LmNvZGUsIHByb2R1Y3Quc2NvcGUpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZE1hbnkocHJvZHVjdHMpO1xuICB9XG59XG4iXX0=