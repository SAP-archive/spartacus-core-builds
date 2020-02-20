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
            target.entries = source.entries.map(entry => this.convertOrderEntry(entry));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map(consignment => (Object.assign(Object.assign({}, consignment), { entries: consignment.entries.map(entry => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) }))) })));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map(entry => this.convertOrderEntry(entry));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7O0FBR3ZGLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQUMsTUFBaUIsRUFBRSxNQUFjO1FBQ3ZDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGlDQUN4RCxXQUFXLEtBQ2QsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsaUNBQ3JDLEtBQUssS0FDUixVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFDcEQsQ0FBQyxJQUNILENBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDO1NBQ0g7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8saUJBQWlCLENBQUMsTUFBc0I7UUFDOUMsdUNBQ0ssTUFBTSxLQUNULE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQ25FO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBdENnQyxnQkFBZ0I7OztBQURwQyxrQkFBa0I7SUFEOUIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGtCQUFrQixDQXVDOUI7U0F2Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlciwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY09yZGVyTm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuT3JkZXIsIE9yZGVyPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuT3JkZXIsIHRhcmdldD86IE9yZGVyKTogT3JkZXIge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5lbnRyaWVzID0gc291cmNlLmVudHJpZXMubWFwKGVudHJ5ID0+XG4gICAgICAgIHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuY29uc2lnbm1lbnRzKSB7XG4gICAgICB0YXJnZXQuY29uc2lnbm1lbnRzID0gc291cmNlLmNvbnNpZ25tZW50cy5tYXAoY29uc2lnbm1lbnQgPT4gKHtcbiAgICAgICAgLi4uY29uc2lnbm1lbnQsXG4gICAgICAgIGVudHJpZXM6IGNvbnNpZ25tZW50LmVudHJpZXMubWFwKGVudHJ5ID0+ICh7XG4gICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgb3JkZXJFbnRyeTogdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeS5vcmRlckVudHJ5KSxcbiAgICAgICAgfSkpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UudW5jb25zaWduZWRFbnRyaWVzKSB7XG4gICAgICB0YXJnZXQudW5jb25zaWduZWRFbnRyaWVzID0gc291cmNlLnVuY29uc2lnbmVkRW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE9yZGVyRW50cnkoc291cmNlOiBPY2MuT3JkZXJFbnRyeSk6IE9yZGVyRW50cnkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zb3VyY2UsXG4gICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==