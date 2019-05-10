/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProductReferenceNormalizer = /** @class */ (function () {
    function ProductReferenceNormalizer() {
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    ProductReferenceNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source.productReferences) {
            target.productReferences = this.normalize(source.productReferences);
        }
        return target;
    };
    /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     * @protected
     * @param {?} source
     * @return {?}
     */
    ProductReferenceNormalizer.prototype.normalize = /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
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
    ProductReferenceNormalizer.decorators = [
        { type: Injectable }
    ];
    return ProductReferenceNormalizer;
}());
export { ProductReferenceNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDO0lBQUE7SUFrQ0EsQ0FBQzs7Ozs7O0lBL0JDLDRDQUFPOzs7OztJQUFQLFVBQVEsTUFBbUIsRUFBRSxNQUFnQjtRQUMzQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx3QkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7Ozs7SUFDTyw4Q0FBUzs7Ozs7Ozs7OztJQUFuQixVQUFvQixNQUE4Qjs7O1lBQzFDLFVBQVUsR0FBRyxFQUFFO1FBRXJCLElBQUksTUFBTSxFQUFFOztnQkFDVixLQUF3QixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUEzQixJQUFNLFNBQVMsbUJBQUE7b0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTt3QkFDdkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQzFDO29CQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNyRDs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztnQkFqQ0YsVUFBVTs7SUFrQ1gsaUNBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0LCBQcm9kdWN0PiB7XG4gIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdCwgdGFyZ2V0PzogUHJvZHVjdCk6IFByb2R1Y3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnByb2R1Y3RSZWZlcmVuY2VzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdFJlZmVyZW5jZXMgPSB0aGlzLm5vcm1hbGl6ZShzb3VyY2UucHJvZHVjdFJlZmVyZW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIHJlZmVyZW5jZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICogaGF2aW5nIGEgc2luZ2xlIGxpc3Qgd2l0aCBhbGwgcmVmZXJlbmNlcyB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLlxuICAgKiBXaXRoIHRoYXQgd2UgaGF2ZSBhIHNlbWFudGljIEFQSSBmb3IgdGhlIGNsaWVudHNcbiAgICogLSBwcm9kdWN0LnJlZmVyZW5jZXMuU0lNSUxBUlswXS5jb2RlXG4gICAqL1xuICBwcm90ZWN0ZWQgbm9ybWFsaXplKHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VbXSk6IFByb2R1Y3RSZWZlcmVuY2VzIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0ge307XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBmb3IgKGNvbnN0IHJlZmVyZW5jZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZWZlcmVuY2VzLmhhc093blByb3BlcnR5KHJlZmVyZW5jZS5yZWZlcmVuY2VUeXBlKSkge1xuICAgICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmVmZXJlbmNlc1tyZWZlcmVuY2UucmVmZXJlbmNlVHlwZV0ucHVzaChyZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxufVxuIl19