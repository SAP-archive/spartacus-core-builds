import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccReturnRequestNormalizer = /** @class */ (function () {
    function OccReturnRequestNormalizer(converter) {
        this.converter = converter;
    }
    OccReturnRequestNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = __assign({}, source);
        }
        if (source.returnEntries) {
            target.returnEntries = source.returnEntries.map(function (entry) { return (__assign(__assign({}, entry), { orderEntry: _this.convertOrderEntry(entry.orderEntry) })); });
        }
        return target;
    };
    OccReturnRequestNormalizer.prototype.convertOrderEntry = function (source) {
        return __assign(__assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    };
    OccReturnRequestNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccReturnRequestNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReturnRequestNormalizer_Factory() { return new OccReturnRequestNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccReturnRequestNormalizer, providedIn: "root" });
    OccReturnRequestNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccReturnRequestNormalizer);
    return OccReturnRequestNormalizer;
}());
export { OccReturnRequestNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJldHVybi1yZXF1ZXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHdkY7SUFFRSxvQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELDRDQUFPLEdBQVAsVUFBUSxNQUF5QixFQUFFLE1BQXNCO1FBQXpELGlCQWFDO1FBWkMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sZ0JBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDeEIsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLHVCQUN0RCxLQUFLLEtBQ1IsVUFBVSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQ3BELEVBSHlELENBR3pELENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHNEQUFpQixHQUF6QixVQUEwQixNQUFzQjtRQUM5Qyw2QkFDSyxNQUFNLEtBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbkU7SUFDSixDQUFDOztnQkF0QjhCLGdCQUFnQjs7O0lBRnBDLDBCQUEwQjtRQUR0QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsMEJBQTBCLENBeUJ0QztxQ0FuQ0Q7Q0FtQ0MsQUF6QkQsSUF5QkM7U0F6QlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlckVudHJ5LCBSZXR1cm5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlJldHVyblJlcXVlc3QsIFJldHVyblJlcXVlc3Q+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5SZXR1cm5SZXF1ZXN0LCB0YXJnZXQ/OiBSZXR1cm5SZXF1ZXN0KTogUmV0dXJuUmVxdWVzdCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UucmV0dXJuRW50cmllcykge1xuICAgICAgdGFyZ2V0LnJldHVybkVudHJpZXMgPSBzb3VyY2UucmV0dXJuRW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgb3JkZXJFbnRyeTogdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeS5vcmRlckVudHJ5KSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0T3JkZXJFbnRyeShzb3VyY2U6IE9jYy5PcmRlckVudHJ5KTogT3JkZXJFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoc291cmNlLnByb2R1Y3QsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgfTtcbiAgfVxufVxuIl19