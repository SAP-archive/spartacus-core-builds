import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccUserInterestsNormalizer = class OccUserInterestsNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.results) {
            target.results = source.results.map((result) => (Object.assign(Object.assign({}, result), { product: this.converter.convert(result.product, PRODUCT_NORMALIZER) })));
        }
        return target;
    }
};
OccUserInterestsNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccUserInterestsNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccUserInterestsNormalizer_Factory() { return new OccUserInterestsNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccUserInterestsNormalizer, providedIn: "root" });
OccUserInterestsNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccUserInterestsNormalizer);
export { OccUserInterestsNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFJNUMsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFHckMsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FDTCxNQUF1QyxFQUN2QyxNQUFvQztRQUVwQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsaUNBQzNDLE1BQU0sS0FDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRSxDQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBOztZQWxCZ0MsZ0JBQWdCOzs7QUFIcEMsMEJBQTBCO0lBRHRDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QiwwQkFBMEIsQ0FxQnRDO1NBckJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplclxuICBpbXBsZW1lbnRzXG4gICAgQ29udmVydGVyPE9jYy5Qcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgICB0YXJnZXQ/OiBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHRcbiAgKTogUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnJlc3VsdHMpIHtcbiAgICAgIHRhcmdldC5yZXN1bHRzID0gc291cmNlLnJlc3VsdHMubWFwKChyZXN1bHQpID0+ICh7XG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChyZXN1bHQucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=