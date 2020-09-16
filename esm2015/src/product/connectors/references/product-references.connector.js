import { Injectable } from '@angular/core';
import { ProductReferencesAdapter } from './product-references.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-references.adapter";
export class ProductReferencesConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(productCode, referenceType, pageSize) {
        return this.adapter.load(productCode, referenceType, pageSize);
    }
}
ProductReferencesConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductReferencesConnector_Factory() { return new ProductReferencesConnector(i0.ɵɵinject(i1.ProductReferencesAdapter)); }, token: ProductReferencesConnector, providedIn: "root" });
ProductReferencesConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductReferencesConnector.ctorParameters = () => [
    { type: ProductReferencesAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBS3hFLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFBc0IsT0FBaUM7UUFBakMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7SUFBRyxDQUFDO0lBRTNELEdBQUcsQ0FDRCxXQUFtQixFQUNuQixhQUFzQixFQUN0QixRQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIpIHt9XG5cbiAgZ2V0KFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0Q29kZSwgcmVmZXJlbmNlVHlwZSwgcGFnZVNpemUpO1xuICB9XG59XG4iXX0=