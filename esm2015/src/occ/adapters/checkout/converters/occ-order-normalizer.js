import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccOrderNormalizer = class OccOrderNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.entries) {
            target.entries = source.entries.map((entry) => this.convertOrderEntry(entry));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map((consignment) => (Object.assign(Object.assign({}, consignment), { entries: consignment.entries.map((entry) => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) }))) })));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map((entry) => this.convertOrderEntry(entry));
        }
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
};
OccOrderNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccOrderNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccOrderNormalizer_Factory() { return new OccOrderNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccOrderNormalizer, providedIn: "root" });
OccOrderNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccOrderNormalizer);
export { OccOrderNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7O0FBR3ZGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQUMsTUFBaUIsRUFBRSxNQUFjO1FBQ3ZDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQ0FDMUQsV0FBVyxLQUNkLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsaUNBQ3ZDLEtBQUssS0FDUixVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFDcEQsQ0FBQyxJQUNILENBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxNQUFzQjtRQUM5Qyx1Q0FDSyxNQUFNLEtBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbkU7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF0Q2dDLGdCQUFnQjs7O0FBRHBDLGtCQUFrQjtJQUQ5QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsa0JBQWtCLENBdUM5QjtTQXZDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjT3JkZXJOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5PcmRlciwgT3JkZXI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5PcmRlciwgdGFyZ2V0PzogT3JkZXIpOiBPcmRlciB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoKGVudHJ5KSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmNvbnNpZ25tZW50cykge1xuICAgICAgdGFyZ2V0LmNvbnNpZ25tZW50cyA9IHNvdXJjZS5jb25zaWdubWVudHMubWFwKChjb25zaWdubWVudCkgPT4gKHtcbiAgICAgICAgLi4uY29uc2lnbm1lbnQsXG4gICAgICAgIGVudHJpZXM6IGNvbnNpZ25tZW50LmVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICBvcmRlckVudHJ5OiB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5Lm9yZGVyRW50cnkpLFxuICAgICAgICB9KSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS51bmNvbnNpZ25lZEVudHJpZXMpIHtcbiAgICAgIHRhcmdldC51bmNvbnNpZ25lZEVudHJpZXMgPSBzb3VyY2UudW5jb25zaWduZWRFbnRyaWVzLm1hcCgoZW50cnkpID0+XG4gICAgICAgIHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRPcmRlckVudHJ5KHNvdXJjZTogT2NjLk9yZGVyRW50cnkpOiBPcmRlckVudHJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc291cmNlLFxuICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChzb3VyY2UucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICB9O1xuICB9XG59XG4iXX0=