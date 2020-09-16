import { Injectable } from '@angular/core';
import { ProductSearchAdapter } from './product-search.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-search.adapter";
export class ProductSearchConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    search(query, searchConfig) {
        return this.adapter.search(query, searchConfig);
    }
    getSuggestions(term, pageSize) {
        return this.adapter.loadSuggestions(term, pageSize);
    }
}
ProductSearchConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(i0.ɵɵinject(i1.ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
ProductSearchConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductSearchConnector.ctorParameters = () => [
    { type: ProductSearchAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcHJvZHVjdC9jb25uZWN0b3JzL3NlYXJjaC9wcm9kdWN0LXNlYXJjaC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBV2hFLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBc0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRXZELE1BQU0sQ0FDSixLQUFhLEVBQ2IsWUFBMkI7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVlEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaEFkYXB0ZXIgfSBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBTdWdnZXN0aW9uLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlYXJjaENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBQcm9kdWN0U2VhcmNoQWRhcHRlcikge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hDb25maWcpO1xuICB9XG5cbiAgZ2V0U3VnZ2VzdGlvbnModGVybTogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkU3VnZ2VzdGlvbnModGVybSwgcGFnZVNpemUpO1xuICB9XG59XG4iXX0=