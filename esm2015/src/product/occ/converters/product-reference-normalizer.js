/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ProductReferenceNormalizer {
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
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
     * @protected
     * @param {?} source
     * @return {?}
     */
    normalize(source) {
        /** @type {?} */
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
}
ProductReferenceNormalizer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXJDLE9BQU8sQ0FBQyxNQUFlLEVBQUUsTUFBa0I7UUFDekMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7Ozs7O0lBU1MsU0FBUyxDQUFDLE1BQTBCOztjQUN0QyxVQUFVLEdBQUcsRUFBRTtRQUVyQixJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3ZELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUMxQztnQkFDRCxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBakNGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVJUHJvZHVjdCwgVUlQcm9kdWN0UmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8UHJvZHVjdCwgVUlQcm9kdWN0PiB7XG4gIGNvbnZlcnQoc291cmNlOiBQcm9kdWN0LCB0YXJnZXQ/OiBVSVByb2R1Y3QpOiBVSVByb2R1Y3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnByb2R1Y3RSZWZlcmVuY2VzKSB7XG4gICAgICB0YXJnZXQucHJvZHVjdFJlZmVyZW5jZXMgPSB0aGlzLm5vcm1hbGl6ZShzb3VyY2UucHJvZHVjdFJlZmVyZW5jZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjXG4gICAqIENyZWF0ZXMgdGhlIHJlZmVyZW5jZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICogaGF2aW5nIGEgc2luZ2xlIGxpc3Qgd2l0aCBhbGwgcmVmZXJlbmNlcyB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLlxuICAgKiBXaXRoIHRoYXQgd2UgaGF2ZSBhIHNlbWFudGljIEFQSSBmb3IgdGhlIGNsaWVudHNcbiAgICogLSBwcm9kdWN0LnJlZmVyZW5jZXMuU0lNSUxBUlswXS5jb2RlXG4gICAqL1xuICBwcm90ZWN0ZWQgbm9ybWFsaXplKHNvdXJjZTogUHJvZHVjdFJlZmVyZW5jZVtdKTogVUlQcm9kdWN0UmVmZXJlbmNlcyB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCByZWZlcmVuY2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGlmICghcmVmZXJlbmNlcy5oYXNPd25Qcm9wZXJ0eShyZWZlcmVuY2UucmVmZXJlbmNlVHlwZSkpIHtcbiAgICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdLnB1c2gocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cbn1cbiJdfQ==