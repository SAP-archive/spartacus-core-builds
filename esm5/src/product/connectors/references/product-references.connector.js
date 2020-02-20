import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ProductReferencesAdapter } from './product-references.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-references.adapter";
var ProductReferencesConnector = /** @class */ (function () {
    function ProductReferencesConnector(adapter) {
        this.adapter = adapter;
    }
    ProductReferencesConnector.prototype.get = function (productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    };
    ProductReferencesConnector.ctorParameters = function () { return [
        { type: ProductReferencesAdapter }
    ]; };
    ProductReferencesConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(i0.ɵɵinject(i1.ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });
    ProductReferencesConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductReferencesConnector);
    return ProductReferencesConnector;
}());
export { ProductReferencesConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFLeEU7SUFDRSxvQ0FBc0IsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7SUFBRyxDQUFDO0lBRTNELHdDQUFHLEdBQUgsVUFDRSxXQUFtQixFQUNuQixhQUFzQixFQUN0QixRQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0JBUjhCLHdCQUF3Qjs7O0lBRDVDLDBCQUEwQjtRQUh0QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMEJBQTBCLENBVXRDO3FDQWxCRDtDQWtCQyxBQVZELElBVUM7U0FWWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIgfSBmcm9tICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlcikge31cblxuICBnZXQoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlPzogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3RDb2RlLCByZWZlcmVuY2VUeXBlLCBwYWdlU2l6ZSk7XG4gIH1cbn1cbiJdfQ==