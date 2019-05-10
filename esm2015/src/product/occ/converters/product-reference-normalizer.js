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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXJDLE9BQU8sQ0FBQyxNQUFtQixFQUFFLE1BQWdCO1FBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsTUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7OztJQVNTLFNBQVMsQ0FBQyxNQUE4Qjs7Y0FDMUMsVUFBVSxHQUFHLEVBQUU7UUFFckIsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN2RCxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDMUM7Z0JBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckQ7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OztZQWpDRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0UmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RSZWZlcmVuY2VzID0gdGhpcy5ub3JtYWxpemUoc291cmNlLnByb2R1Y3RSZWZlcmVuY2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiBDcmVhdGVzIHRoZSByZWZlcmVuY2Ugc3RydWN0dXJlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIHJlZmVyZW5jZXMgd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS5cbiAgICogV2l0aCB0aGF0IHdlIGhhdmUgYSBzZW1hbnRpYyBBUEkgZm9yIHRoZSBjbGllbnRzXG4gICAqIC0gcHJvZHVjdC5yZWZlcmVuY2VzLlNJTUlMQVJbMF0uY29kZVxuICAgKi9cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZShzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlW10pOiBQcm9kdWN0UmVmZXJlbmNlcyB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCByZWZlcmVuY2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGlmICghcmVmZXJlbmNlcy5oYXNPd25Qcm9wZXJ0eShyZWZlcmVuY2UucmVmZXJlbmNlVHlwZSkpIHtcbiAgICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdLnB1c2gocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cbn1cbiJdfQ==