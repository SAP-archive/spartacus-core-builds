import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductAdapter } from './product.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product.adapter";
var ProductConnector = /** @class */ (function () {
    function ProductConnector(adapter) {
        this.adapter = adapter;
    }
    ProductConnector.prototype.get = function (productCode, scope) {
        if (scope === void 0) { scope = ''; }
        return this.adapter.load(productCode, scope);
    };
    ProductConnector.prototype.getMany = function (products) {
        var _this = this;
        if (!this.adapter.loadMany) {
            return products.map(function (product) { return (__assign(__assign({}, product), { data$: _this.adapter.load(product.code, product.scope) })); });
        }
        return this.adapter.loadMany(products);
    };
    ProductConnector.ctorParameters = function () { return [
        { type: ProductAdapter }
    ]; };
    ProductConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductConnector_Factory() { return new ProductConnector(i0.ɵɵinject(i1.ProductAdapter)); }, token: ProductConnector, providedIn: "root" });
    ProductConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductConnector);
    return ProductConnector;
}());
export { ProductConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQ7SUFDRSwwQkFBc0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBRyxDQUFDO0lBRWpELDhCQUFHLEdBQUgsVUFBSSxXQUFtQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDakMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxRQUE2QjtRQUFyQyxpQkFTQztRQVJDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSx1QkFDNUIsT0FBTyxLQUNWLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFDckQsRUFIK0IsQ0FHL0IsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQWY4QixjQUFjOzs7SUFEbEMsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FpQjVCOzJCQTFCRDtDQTBCQyxBQWpCRCxJQWlCQztTQWpCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi9zY29wZWQtcHJvZHVjdC1kYXRhJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdEFkYXB0ZXIpIHt9XG5cbiAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlID0gJycpOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQocHJvZHVjdENvZGUsIHNjb3BlKTtcbiAgfVxuXG4gIGdldE1hbnkocHJvZHVjdHM6IFNjb3BlZFByb2R1Y3REYXRhW10pOiBTY29wZWRQcm9kdWN0RGF0YVtdIHtcbiAgICBpZiAoIXRoaXMuYWRhcHRlci5sb2FkTWFueSkge1xuICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgZGF0YSQ6IHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3QuY29kZSwgcHJvZHVjdC5zY29wZSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkTWFueShwcm9kdWN0cyk7XG4gIH1cbn1cbiJdfQ==