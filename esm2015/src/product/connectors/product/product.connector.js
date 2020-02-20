import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductAdapter } from './product.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product.adapter";
let ProductConnector = class ProductConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, scope = '') {
        return this.adapter.load(productCode, scope);
    }
    getMany(products) {
        if (!this.adapter.loadMany) {
            return products.map(product => (Object.assign(Object.assign({}, product), { data$: this.adapter.load(product.code, product.scope) })));
        }
        return this.adapter.loadMany(products);
    }
};
ProductConnector.ctorParameters = () => [
    { type: ProductAdapter }
];
ProductConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.ɵɵinject(i1.ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
ProductConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductConnector);
export { ProductConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBc0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBRyxDQUFDO0lBRWpELEdBQUcsQ0FBQyxXQUFtQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGlDQUMxQixPQUFPLEtBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUNyRCxDQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O1lBaEJnQyxjQUFjOzs7QUFEbEMsZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FpQjVCO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuL3Njb3BlZC1wcm9kdWN0LWRhdGEnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0QWRhcHRlcikge31cblxuICBnZXQocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGUgPSAnJyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSwgc2NvcGUpO1xuICB9XG5cbiAgZ2V0TWFueShwcm9kdWN0czogU2NvcGVkUHJvZHVjdERhdGFbXSk6IFNjb3BlZFByb2R1Y3REYXRhW10ge1xuICAgIGlmICghdGhpcy5hZGFwdGVyLmxvYWRNYW55KSB7XG4gICAgICByZXR1cm4gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgZGF0YSQ6IHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3QuY29kZSwgcHJvZHVjdC5zY29wZSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkTWFueShwcm9kdWN0cyk7XG4gIH1cbn1cbiJdfQ==