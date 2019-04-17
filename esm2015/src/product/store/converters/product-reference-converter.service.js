/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ProductReferenceConverterService {
    /**
     * @param {?} product
     * @return {?}
     */
    convertProduct(product) {
        if (product.productReferences) {
            product.productReferences = this.populate(product.productReferences);
        }
    }
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
    populate(source) {
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
ProductReferenceConverterService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2UtY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9jb252ZXJ0ZXJzL3Byb2R1Y3QtcmVmZXJlbmNlLWNvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7O0lBQzNDLGNBQWMsQ0FBQyxPQUFnQjtRQUM3QixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7Ozs7Ozs7O0lBU1MsUUFBUSxDQUFDLE1BQWtCOztjQUM3QixVQUFVLEdBQUcsRUFBRTtRQUVyQixJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxFQUFFO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3ZELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUMxQztnQkFDRCxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBM0JGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VDb252ZXJ0ZXJTZXJ2aWNlIHtcbiAgY29udmVydFByb2R1Y3QocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQge1xuICAgIGlmIChwcm9kdWN0LnByb2R1Y3RSZWZlcmVuY2VzKSB7XG4gICAgICBwcm9kdWN0LnByb2R1Y3RSZWZlcmVuY2VzID0gdGhpcy5wb3B1bGF0ZShwcm9kdWN0LnByb2R1Y3RSZWZlcmVuY2VzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NcbiAgICogQ3JlYXRlcyB0aGUgcmVmZXJlbmNlIHN0cnVjdHVlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIHJlZmVyZW5jZXMgd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS5cbiAgICogV2l0aCB0aGF0IHdlIGhhdmUgYSBzZW1hbnRpYyBBUEkgZm9yIHRoZSBjbGllbnRzXG4gICAqIC0gcHJvZHVjdC5yZWZlcmVuY2VzLlNJTUlMQVJbMF0uY29kZVxuICAgKi9cbiAgcHJvdGVjdGVkIHBvcHVsYXRlKHNvdXJjZTogQXJyYXk8YW55Pik6IGFueSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCByZWZlcmVuY2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGlmICghcmVmZXJlbmNlcy5oYXNPd25Qcm9wZXJ0eShyZWZlcmVuY2UucmVmZXJlbmNlVHlwZSkpIHtcbiAgICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdLnB1c2gocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cbn1cbiJdfQ==