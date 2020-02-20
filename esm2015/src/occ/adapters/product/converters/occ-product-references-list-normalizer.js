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
            target = source.references.map(reference => (Object.assign(Object.assign({}, reference), { target: this.converter.convert(reference.target, PRODUCT_NORMALIZER) })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFHNUMsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFFN0MsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FDTCxNQUFnQyxFQUNoQyxTQUE2QixFQUFFO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxpQ0FDdkMsU0FBUyxLQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLElBQ3BFLENBQUMsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQmdDLGdCQUFnQjs7O0FBRnBDLGtDQUFrQztJQUQ5QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsa0NBQWtDLENBcUI5QztTQXJCWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzTGlzdE5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3RSZWZlcmVuY2VMaXN0LCBQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlTGlzdCxcbiAgICB0YXJnZXQ6IFByb2R1Y3RSZWZlcmVuY2VbXSA9IFtdXG4gICk6IFByb2R1Y3RSZWZlcmVuY2VbXSB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnJlZmVyZW5jZXMpIHtcbiAgICAgIHRhcmdldCA9IHNvdXJjZS5yZWZlcmVuY2VzLm1hcChyZWZlcmVuY2UgPT4gKHtcbiAgICAgICAgLi4ucmVmZXJlbmNlLFxuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udmVydGVyLmNvbnZlcnQocmVmZXJlbmNlLnRhcmdldCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==