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
            target.results = source.results.map(result => (Object.assign(Object.assign({}, result), { product: this.converter.convert(result.product, PRODUCT_NORMALIZER) })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFJNUMsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFHckMsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FDTCxNQUF1QyxFQUN2QyxNQUFvQztRQUVwQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlDQUN6QyxNQUFNLEtBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbkUsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7WUFsQmdDLGdCQUFnQjs7O0FBSHBDLDBCQUEwQjtJQUR0QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsMEJBQTBCLENBcUJ0QztTQXJCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjVXNlckludGVyZXN0c05vcm1hbGl6ZXJcbiAgaW1wbGVtZW50c1xuICAgIENvbnZlcnRlcjxPY2MuUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LCBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsXG4gICAgdGFyZ2V0PzogUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0XG4gICk6IFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5yZXN1bHRzKSB7XG4gICAgICB0YXJnZXQucmVzdWx0cyA9IHNvdXJjZS5yZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJlc3VsdC5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==