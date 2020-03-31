import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccReturnRequestNormalizer = class OccReturnRequestNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.returnEntries) {
            target.returnEntries = source.returnEntries.map((entry) => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) })));
        }
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
};
OccReturnRequestNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccReturnRequestNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReturnRequestNormalizer_Factory() { return new OccReturnRequestNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccReturnRequestNormalizer, providedIn: "root" });
OccReturnRequestNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccReturnRequestNormalizer);
export { OccReturnRequestNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHdkYsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFFckMsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxNQUF5QixFQUFFLE1BQXNCO1FBQ3ZELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlDQUN0RCxLQUFLLEtBQ1IsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQ3BELENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQXNCO1FBQzlDLHVDQUNLLE1BQU0sS0FDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7Q0FDRixDQUFBOztZQXZCZ0MsZ0JBQWdCOzs7QUFGcEMsMEJBQTBCO0lBRHRDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QiwwQkFBMEIsQ0F5QnRDO1NBekJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSwgUmV0dXJuUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1JldHVyblJlcXVlc3ROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5SZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuUmV0dXJuUmVxdWVzdCwgdGFyZ2V0PzogUmV0dXJuUmVxdWVzdCk6IFJldHVyblJlcXVlc3Qge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnJldHVybkVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5yZXR1cm5FbnRyaWVzID0gc291cmNlLnJldHVybkVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgLi4uZW50cnksXG4gICAgICAgIG9yZGVyRW50cnk6IHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkub3JkZXJFbnRyeSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE9yZGVyRW50cnkoc291cmNlOiBPY2MuT3JkZXJFbnRyeSk6IE9yZGVyRW50cnkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zb3VyY2UsXG4gICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==