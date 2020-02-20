import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProductReferenceNormalizer = class ProductReferenceNormalizer {
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.productReferences) {
            target.productReferences = this.normalize(source.productReferences);
        }
        return target;
    }
    /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    normalize(source) {
        const references = {};
        if (source) {
            for (const reference of source) {
                if (!references.hasOwnProperty(reference.referenceType)) {
                    references[reference.referenceType] = [];
                }
                references[reference.referenceType].push(reference);
            }
        }
        return references;
    }
};
ProductReferenceNormalizer = __decorate([
    Injectable()
], ProductReferenceNormalizer);
export { ProductReferenceNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFFckMsT0FBTyxDQUFDLE1BQW1CLEVBQUUsTUFBZ0I7UUFDM0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxTQUFTLENBQUMsTUFBOEI7UUFDaEQsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzFDO2dCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQTtBQWpDWSwwQkFBMEI7SUFEdEMsVUFBVSxFQUFFO0dBQ0EsMEJBQTBCLENBaUN0QztTQWpDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UucHJvZHVjdFJlZmVyZW5jZXMpIHtcbiAgICAgIHRhcmdldC5wcm9kdWN0UmVmZXJlbmNlcyA9IHRoaXMubm9ybWFsaXplKHNvdXJjZS5wcm9kdWN0UmVmZXJlbmNlcyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgcmVmZXJlbmNlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCByZWZlcmVuY2VzIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuXG4gICAqIFdpdGggdGhhdCB3ZSBoYXZlIGEgc2VtYW50aWMgQVBJIGZvciB0aGUgY2xpZW50c1xuICAgKiAtIHByb2R1Y3QucmVmZXJlbmNlcy5TSU1JTEFSWzBdLmNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemUoc291cmNlOiBPY2MuUHJvZHVjdFJlZmVyZW5jZVtdKTogUHJvZHVjdFJlZmVyZW5jZXMge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB7fTtcblxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHNvdXJjZSkge1xuICAgICAgICBpZiAoIXJlZmVyZW5jZXMuaGFzT3duUHJvcGVydHkocmVmZXJlbmNlLnJlZmVyZW5jZVR5cGUpKSB7XG4gICAgICAgICAgcmVmZXJlbmNlc1tyZWZlcmVuY2UucmVmZXJlbmNlVHlwZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXS5wdXNoKHJlZmVyZW5jZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG59XG4iXX0=