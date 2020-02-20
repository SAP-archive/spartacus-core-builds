import { __assign, __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
var ProductReferenceNormalizer = /** @class */ (function () {
    function ProductReferenceNormalizer() {
    }
    ProductReferenceNormalizer.prototype.convert = function (source, target) {
        if (target === undefined) {
            target = __assign({}, source);
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
    ProductReferenceNormalizer.prototype.normalize = function (source) {
        var e_1, _a;
        var references = {};
        if (source) {
            try {
                for (var source_1 = __values(source), source_1_1 = source_1.next(); !source_1_1.done; source_1_1 = source_1.next()) {
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
    ProductReferenceNormalizer = __decorate([
        Injectable()
    ], ProductReferenceNormalizer);
    return ProductReferenceNormalizer;
}());
export { ProductReferenceNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0M7SUFBQTtJQWlDQSxDQUFDO0lBL0JDLDRDQUFPLEdBQVAsVUFBUSxNQUFtQixFQUFFLE1BQWdCO1FBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGdCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sOENBQVMsR0FBbkIsVUFBb0IsTUFBOEI7O1FBQ2hELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFJLE1BQU0sRUFBRTs7Z0JBQ1YsS0FBd0IsSUFBQSxXQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUEzQixJQUFNLFNBQVMsbUJBQUE7b0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTt3QkFDdkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQzFDO29CQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNyRDs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBaENVLDBCQUEwQjtRQUR0QyxVQUFVLEVBQUU7T0FDQSwwQkFBMEIsQ0FpQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UucHJvZHVjdFJlZmVyZW5jZXMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0UmVmZXJlbmNlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5wcm9kdWN0UmVmZXJlbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgcmVmZXJlbmNlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCByZWZlcmVuY2VzIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuXG4gICAqIFdpdGggdGhhdCB3ZSBoYXZlIGEgc2VtYW50aWMgQVBJIGZvciB0aGUgY2xpZW50c1xuICAgKiAtIHByb2R1Y3QucmVmZXJlbmNlcy5TSU1JTEFSWzBdLmNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemUoc291cmNlOiBPY2MuUHJvZHVjdFJlZmVyZW5jZVtdKTogUHJvZHVjdFJlZmVyZW5jZXMge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB7fTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlZmVyZW5jZXMuaGFzT3duUHJvcGVydHkocmVmZXJlbmNlLnJlZmVyZW5jZVR5cGUpKSB7XG4gICAgICAgICAgcmVmZXJlbmNlc1tyZWZlcmVuY2UucmVmZXJlbmNlVHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXS5wdXNoKHJlZmVyZW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG59XG4iXX0=