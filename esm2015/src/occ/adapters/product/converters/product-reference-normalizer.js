import { Injectable } from '@angular/core';
export class ProductReferenceNormalizer {
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
}
ProductReferenceNormalizer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L2NvbnZlcnRlcnMvcHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUFFckMsT0FBTyxDQUFDLE1BQW1CLEVBQUUsTUFBZ0I7UUFDM0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxTQUFTLENBQUMsTUFBOEI7UUFDaEQsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksTUFBTSxFQUFFO1lBQ1YsS0FBSyxNQUFNLFNBQVMsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDdkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzFDO2dCQUNELFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7WUFqQ0YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdCwgUHJvZHVjdD4ge1xuICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5wcm9kdWN0UmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0LnByb2R1Y3RSZWZlcmVuY2VzID0gdGhpcy5ub3JtYWxpemUoc291cmNlLnByb2R1Y3RSZWZlcmVuY2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY1xuICAgKiBDcmVhdGVzIHRoZSByZWZlcmVuY2Ugc3RydWN0dXJlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIHJlZmVyZW5jZXMgd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS5cbiAgICogV2l0aCB0aGF0IHdlIGhhdmUgYSBzZW1hbnRpYyBBUEkgZm9yIHRoZSBjbGllbnRzXG4gICAqIC0gcHJvZHVjdC5yZWZlcmVuY2VzLlNJTUlMQVJbMF0uY29kZVxuICAgKi9cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZShzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlW10pOiBQcm9kdWN0UmVmZXJlbmNlcyB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yIChjb25zdCByZWZlcmVuY2Ugb2Ygc291cmNlKSB7XG4gICAgICAgIGlmICghcmVmZXJlbmNlcy5oYXNPd25Qcm9wZXJ0eShyZWZlcmVuY2UucmVmZXJlbmNlVHlwZSkpIHtcbiAgICAgICAgICByZWZlcmVuY2VzW3JlZmVyZW5jZS5yZWZlcmVuY2VUeXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlZmVyZW5jZXNbcmVmZXJlbmNlLnJlZmVyZW5jZVR5cGVdLnB1c2gocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cbn1cbiJdfQ==