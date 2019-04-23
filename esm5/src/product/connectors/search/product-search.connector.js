/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductSearchAdapter } from './product-search.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-search.adapter";
var ProductSearchConnector = /** @class */ (function () {
    function ProductSearchConnector(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchConnector.prototype.search = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        return this.adapter.search(query, searchConfig);
    };
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    ProductSearchConnector.prototype.getSuggestions = /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    function (term, pageSize) {
        return this.adapter.loadSuggestions(term, pageSize);
    };
    ProductSearchConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProductSearchConnector.ctorParameters = function () { return [
        { type: ProductSearchAdapter }
    ]; };
    /** @nocollapse */ ProductSearchConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(i0.inject(i1.ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
    return ProductSearchConnector;
}());
export { ProductSearchConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductSearchConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFNaEU7SUFJRSxnQ0FBc0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7SUFFdkQsdUNBQU07Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBMkI7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsK0NBQWM7Ozs7O0lBQWQsVUFBZSxJQUFZLEVBQUUsUUFBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxvQkFBb0I7OztpQ0FEN0I7Q0F1QkMsQUFoQkQsSUFnQkM7U0FiWSxzQkFBc0I7Ozs7OztJQUNyQix5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBTdWdnZXN0aW9uTGlzdCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVSVByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gtcGFnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RTZWFyY2hBZGFwdGVyKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPFVJUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zKHRlcm06IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25MaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkU3VnZ2VzdGlvbnModGVybSwgcGFnZVNpemUpO1xuICB9XG59XG4iXX0=