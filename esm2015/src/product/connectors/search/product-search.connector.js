/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductSearchAdapter } from './product-search.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./product-search.adapter";
export class ProductSearchConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig) {
        return this.adapter.search(query, searchConfig);
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    getSuggestions(term, pageSize) {
        return this.adapter.loadSuggestions(term, pageSize);
    }
}
ProductSearchConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProductSearchConnector.ctorParameters = () => [
    { type: ProductSearchAdapter }
];
/** @nocollapse */ ProductSearchConnector.ngInjectableDef = i0.defineInjectable({ factory: function ProductSearchConnector_Factory() { return new ProductSearchConnector(i0.inject(i1.ProductSearchAdapter)); }, token: ProductSearchConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductSearchConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFXaEUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUNqQyxZQUFzQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUFHLENBQUM7Ozs7OztJQUV2RCxNQUFNLENBQ0osS0FBYSxFQUNiLFlBQTJCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsb0JBQW9COzs7Ozs7OztJQVlmLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi9wcm9kdWN0LXNlYXJjaC5hZGFwdGVyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgU3VnZ2VzdGlvbixcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZWFyY2hDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogUHJvZHVjdFNlYXJjaEFkYXB0ZXIpIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnPzogU2VhcmNoQ29uZmlnXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIGdldFN1Z2dlc3Rpb25zKHRlcm06IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFN1Z2dlc3Rpb25zKHRlcm0sIHBhZ2VTaXplKTtcbiAgfVxufVxuIl19