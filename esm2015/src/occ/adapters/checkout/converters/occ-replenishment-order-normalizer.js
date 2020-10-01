import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccReplenishmentOrderNormalizer {
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
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
}
OccReplenishmentOrderNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReplenishmentOrderNormalizer_Factory() { return new OccReplenishmentOrderNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccReplenishmentOrderNormalizer, providedIn: "root" });
OccReplenishmentOrderNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccReplenishmentOrderNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jaGVja291dC9jb252ZXJ0ZXJzL29jYy1yZXBsZW5pc2htZW50LW9yZGVyLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7OztBQUk1QyxNQUFNLE9BQU8sK0JBQStCO0lBRTFDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQ0wsTUFBOEIsRUFDOUIsTUFBMkI7UUFFM0IsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQXNCO1FBQzlDLHVDQUNLLE1BQU0sS0FDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7Ozs7WUEzQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBSmhDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9yZXBsZW5pc2htZW50LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUmVwbGVuaXNobWVudE9yZGVyTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuUmVwbGVuaXNobWVudE9yZGVyLCBSZXBsZW5pc2htZW50T3JkZXI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5SZXBsZW5pc2htZW50T3JkZXIsXG4gICAgdGFyZ2V0PzogUmVwbGVuaXNobWVudE9yZGVyXG4gICk6IFJlcGxlbmlzaG1lbnRPcmRlciB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoKGVudHJ5KSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeShzb3VyY2U6IE9jYy5PcmRlckVudHJ5KTogT3JkZXJFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoc291cmNlLnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgfTtcbiAgfVxufVxuIl19