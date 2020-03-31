import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccProductReferencesListNormalizer = class OccProductReferencesListNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target = []) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.references) {
            target = source.references.map((reference) => (Object.assign(Object.assign({}, reference), { target: this.converter.convert(reference.target, PRODUCT_NORMALIZER) })));
            return target;
        }
    }
};
OccProductReferencesListNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccProductReferencesListNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductReferencesListNormalizer_Factory() { return new OccProductReferencesListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductReferencesListNormalizer, providedIn: "root" });
OccProductReferencesListNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccProductReferencesListNormalizer);
export { OccProductReferencesListNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFHNUMsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFFN0MsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FDTCxNQUFnQyxFQUNoQyxTQUE2QixFQUFFO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLGlDQUN6QyxTQUFTLEtBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsSUFDcEUsQ0FBQyxDQUFDO1lBRUosT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRixDQUFBOztZQW5CZ0MsZ0JBQWdCOzs7QUFGcEMsa0NBQWtDO0lBRDlDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixrQ0FBa0MsQ0FxQjlDO1NBckJZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LFxuICAgIHRhcmdldDogUHJvZHVjdFJlZmVyZW5jZVtdID0gW11cbiAgKTogUHJvZHVjdFJlZmVyZW5jZVtdIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucmVmZXJlbmNlcykge1xuICAgICAgdGFyZ2V0ID0gc291cmNlLnJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+ICh7XG4gICAgICAgIC4uLnJlZmVyZW5jZSxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJlZmVyZW5jZS50YXJnZXQsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICB9XG59XG4iXX0=