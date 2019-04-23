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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDO0lBQUE7SUFrQ0EsQ0FBQzs7Ozs7O0lBL0JDLDRDQUFPOzs7OztJQUFQLFVBQVEsTUFBZSxFQUFFLE1BQWtCO1FBQ3pDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7OztJQUNPLDhDQUFTOzs7Ozs7Ozs7O0lBQW5CLFVBQW9CLE1BQTBCOzs7WUFDdEMsVUFBVSxHQUFHLEVBQUU7UUFFckIsSUFBSSxNQUFNLEVBQUU7O2dCQUNWLEtBQXdCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQTNCLElBQU0sU0FBUyxtQkFBQTtvQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUN2RCxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDMUM7b0JBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3JEOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7O2dCQWpDRixVQUFVOztJQWtDWCxpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBakNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVUlQcm9kdWN0LCBVSVByb2R1Y3RSZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC1tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxQcm9kdWN0LCBVSVByb2R1Y3Q+IHtcbiAgY29udmVydChzb3VyY2U6IFByb2R1Y3QsIHRhcmdldD86IFVJUHJvZHVjdCk6IFVJUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UucHJvZHVjdFJlZmVyZW5jZXMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0UmVmZXJlbmNlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5wcm9kdWN0UmVmZXJlbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgcmVmZXJlbmNlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCByZWZlcmVuY2VzIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuXG4gICAqIFdpdGggdGhhdCB3ZSBoYXZlIGEgc2VtYW50aWMgQVBJIGZvciB0aGUgY2xpZW50c1xuICAgKiAtIHByb2R1Y3QucmVmZXJlbmNlcy5TSU1JTEFSWzBdLmNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemUoc291cmNlOiBQcm9kdWN0UmVmZXJlbmNlW10pOiBVSVByb2R1Y3RSZWZlcmVuY2VzIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0ge307XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBmb3IgKGNvbnN0IHJlZmVyZW5jZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKCFyZWZlcmVuY2VzLmhhc093blByb3BlcnR5KHJlZmVyZW5jZS5yZWZlcmVuY2VUeXBlKSkge1xuICAgICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmVmZXJlbmNlc1tyZWZlcmVuY2UucmVmZXJlbmNlVHlwZV0ucHVzaChyZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxufVxuIl19