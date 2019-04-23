/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    get(productCode) {
        return this.adapter.load(productCode);
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
/** @nocollapse */ ProductConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.inject(i1.ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFvQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBRS9DLEdBQUcsQ0FBQyxXQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQVJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGNBQWM7Ozs7Ozs7O0lBT1QsbUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuL3Byb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGFwdGVyOiBQcm9kdWN0QWRhcHRlcikge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSk7XG4gIH1cbn1cbiJdfQ==