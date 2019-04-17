/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProductReferenceConverterService = /** @class */ (function () {
    function ProductReferenceConverterService() {
    }
    /**
     * @param {?} product
     * @return {?}
     */
    ProductReferenceConverterService.prototype.convertProduct = /**
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (product.productReferences) {
            product.productReferences = this.populate(product.productReferences);
        }
    };
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    ProductReferenceConverterService.prototype.populate = /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_1, _a;
        /** @type {?} */
        var references = {};
        if (source) {
            try {
                for (var source_1 = tslib_1.__values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
                    var reference = source_1_1.value;
                    if (!references.hasOwnProperty(reference.referenceType)) {
                        references[reference.referenceType] = [];
                    }
                    references[reference.referenceType].push(reference);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (source_1_1 && !source_1_1.done && (_a = source_1.return)) _a.call(source_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return references;
    };
    ProductReferenceConverterService.decorators = [
        { type: Injectable }
    ];
    return ProductReferenceConverterService;
}());
export { ProductReferenceConverterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2UtY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLWNvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQUFBO0lBNEJBLENBQUM7Ozs7O0lBMUJDLHlEQUFjOzs7O0lBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7O0lBQ08sbURBQVE7Ozs7Ozs7Ozs7SUFBbEIsVUFBbUIsTUFBa0I7OztZQUM3QixVQUFVLEdBQUcsRUFBRTtRQUVyQixJQUFJLE1BQU0sRUFBRTs7Z0JBQ1YsS0FBd0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBM0IsSUFBTSxTQUFTLG1CQUFBO29CQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7d0JBQ3ZELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUMxQztvQkFDRCxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDckQ7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBM0JGLFVBQVU7O0lBNEJYLHVDQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlQ29udmVydGVyU2VydmljZSB7XG4gIGNvbnZlcnRQcm9kdWN0KHByb2R1Y3Q6IFByb2R1Y3QpOiB2b2lkIHtcbiAgICBpZiAocHJvZHVjdC5wcm9kdWN0UmVmZXJlbmNlcykge1xuICAgICAgcHJvZHVjdC5wcm9kdWN0UmVmZXJlbmNlcyA9IHRoaXMucG9wdWxhdGUocHJvZHVjdC5wcm9kdWN0UmVmZXJlbmNlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIHJlZmVyZW5jZSBzdHJ1Y3R1ZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCByZWZlcmVuY2VzIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuXG4gICAqIFdpdGggdGhhdCB3ZSBoYXZlIGEgc2VtYW50aWMgQVBJIGZvciB0aGUgY2xpZW50c1xuICAgKiAtIHByb2R1Y3QucmVmZXJlbmNlcy5TSU1JTEFSWzBdLmNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBwb3B1bGF0ZShzb3VyY2U6IEFycmF5PGFueT4pOiBhbnkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB7fTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlZmVyZW5jZXMuaGFzT3duUHJvcGVydHkocmVmZXJlbmNlLnJlZmVyZW5jZVR5cGUpKSB7XG4gICAgICAgICAgcmVmZXJlbmNlc1tyZWZlcmVuY2UucmVmZXJlbmNlVHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXS5wdXNoKHJlZmVyZW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG59XG4iXX0=