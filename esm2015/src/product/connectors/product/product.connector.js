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
            return products.map((product) => (Object.assign(Object.assign({}, product), { data$: this.adapter.load(product.code, product.scope) })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFNbkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBc0IsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBRyxDQUFDO0lBRWpELEdBQUcsQ0FBQyxXQUFtQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsaUNBQzVCLE9BQU8sS0FDVixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ3JELENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTs7WUFoQmdDLGNBQWM7OztBQURsQyxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQWlCNUI7U0FqQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuL3Byb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBTY29wZWRQcm9kdWN0RGF0YSB9IGZyb20gJy4vc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RBZGFwdGVyKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZSA9ICcnKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHByb2R1Y3RDb2RlLCBzY29wZSk7XG4gIH1cblxuICBnZXRNYW55KHByb2R1Y3RzOiBTY29wZWRQcm9kdWN0RGF0YVtdKTogU2NvcGVkUHJvZHVjdERhdGFbXSB7XG4gICAgaWYgKCF0aGlzLmFkYXB0ZXIubG9hZE1hbnkpIHtcbiAgICAgIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XG4gICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgIGRhdGEkOiB0aGlzLmFkYXB0ZXIubG9hZChwcm9kdWN0LmNvZGUsIHByb2R1Y3Quc2NvcGUpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZE1hbnkocHJvZHVjdHMpO1xuICB9XG59XG4iXX0=