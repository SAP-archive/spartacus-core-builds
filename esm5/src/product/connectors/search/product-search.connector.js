/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */ ProductSearchConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(i0.ɵɵinject(i1.ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFRaEU7SUFJRSxnQ0FBc0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7SUFFdkQsdUNBQU07Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBMkI7UUFFM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsK0NBQWM7Ozs7O0lBQWQsVUFBZSxJQUFZLEVBQUUsUUFBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxvQkFBb0I7OztpQ0FEN0I7Q0F5QkMsQUFoQkQsSUFnQkM7U0FiWSxzQkFBc0I7Ozs7OztJQUNyQix5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4vcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb24sXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VhcmNoQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFByb2R1Y3RTZWFyY2hBZGFwdGVyKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZWFyY2gocXVlcnksIHNlYXJjaENvbmZpZyk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9ucyh0ZXJtOiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRTdWdnZXN0aW9ucyh0ZXJtLCBwYWdlU2l6ZSk7XG4gIH1cbn1cbiJdfQ==