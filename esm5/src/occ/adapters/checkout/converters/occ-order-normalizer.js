import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccOrderNormalizer = /** @class */ (function () {
    function OccOrderNormalizer(converter) {
        this.converter = converter;
    }
    OccOrderNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = __assign({}, source);
        }
        if (source.entries) {
            target.entries = source.entries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
        }
        if (source.consignments) {
            target.consignments = source.consignments.map(function (consignment) { return (__assign(__assign({}, consignment), { entries: consignment.entries.map(function (entry) { return (__assign(__assign({}, entry), { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); }) })); });
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map(function (entry) {
                return _this.convertOrderEntry(entry);
            });
        }
        return target;
    };
    OccOrderNormalizer.prototype.convertOrderEntry = function (source) {
        return __assign(__assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    };
    OccOrderNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccOrderNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccOrderNormalizer_Factory() { return new OccOrderNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccOrderNormalizer, providedIn: "root" });
    OccOrderNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccOrderNormalizer);
    return OccOrderNormalizer;
}());
export { OccOrderNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLW9yZGVyLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7O0FBR3ZGO0lBQ0UsNEJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxvQ0FBTyxHQUFQLFVBQVEsTUFBaUIsRUFBRSxNQUFjO1FBQXpDLGlCQTRCQztRQTNCQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxnQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDdkMsT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQTdCLENBQTZCLENBQzlCLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsdUJBQ3hELFdBQVcsS0FDZCxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFDckMsS0FBSyxLQUNSLFVBQVUsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUNwRCxFQUh3QyxDQUd4QyxDQUFDLElBQ0gsRUFOMkQsQ0FNM0QsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzdELE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztZQUE3QixDQUE2QixDQUM5QixDQUFDO1NBQ0g7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sOENBQWlCLEdBQXpCLFVBQTBCLE1BQXNCO1FBQzlDLDZCQUNLLE1BQU0sS0FDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7O2dCQXJDOEIsZ0JBQWdCOzs7SUFEcEMsa0JBQWtCO1FBRDlCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixrQkFBa0IsQ0F1QzlCOzZCQWpERDtDQWlEQyxBQXZDRCxJQXVDQztTQXZDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyLCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjT3JkZXJOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5PcmRlciwgT3JkZXI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5PcmRlciwgdGFyZ2V0PzogT3JkZXIpOiBPcmRlciB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5jb25zaWdubWVudHMpIHtcbiAgICAgIHRhcmdldC5jb25zaWdubWVudHMgPSBzb3VyY2UuY29uc2lnbm1lbnRzLm1hcChjb25zaWdubWVudCA9PiAoe1xuICAgICAgICAuLi5jb25zaWdubWVudCxcbiAgICAgICAgZW50cmllczogY29uc2lnbm1lbnQuZW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICBvcmRlckVudHJ5OiB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5Lm9yZGVyRW50cnkpLFxuICAgICAgICB9KSksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS51bmNvbnNpZ25lZEVudHJpZXMpIHtcbiAgICAgIHRhcmdldC51bmNvbnNpZ25lZEVudHJpZXMgPSBzb3VyY2UudW5jb25zaWduZWRFbnRyaWVzLm1hcChlbnRyeSA9PlxuICAgICAgICB0aGlzLmNvbnZlcnRPcmRlckVudHJ5KGVudHJ5KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeShzb3VyY2U6IE9jYy5PcmRlckVudHJ5KTogT3JkZXJFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoc291cmNlLnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgfTtcbiAgfVxufVxuIl19