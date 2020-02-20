import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
var OccProductReferencesListNormalizer = /** @class */ (function () {
    function OccProductReferencesListNormalizer(converter) {
        this.converter = converter;
    }
    OccProductReferencesListNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === void 0) { target = []; }
        if (target === undefined) {
            target = __assign({}, source);
        }
        if (source && source.references) {
            target = source.references.map(function (reference) { return (__assign(__assign({}, reference), { target: _this.converter.convert(reference.target, PRODUCT_NORMALIZER) })); });
            return target;
        }
    };
    OccProductReferencesListNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccProductReferencesListNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccProductReferencesListNormalizer_Factory() { return new OccProductReferencesListNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccProductReferencesListNormalizer, providedIn: "root" });
    OccProductReferencesListNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccProductReferencesListNormalizer);
    return OccProductReferencesListNormalizer;
}());
export { OccProductReferencesListNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy1saXN0LW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN2RixPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFHNUM7SUFFRSw0Q0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELG9EQUFPLEdBQVAsVUFDRSxNQUFnQyxFQUNoQyxNQUErQjtRQUZqQyxpQkFnQkM7UUFkQyx1QkFBQSxFQUFBLFdBQStCO1FBRS9CLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGdCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSx1QkFDdkMsU0FBUyxLQUNaLE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLElBQ3BFLEVBSDBDLENBRzFDLENBQUMsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOztnQkFsQjhCLGdCQUFnQjs7O0lBRnBDLGtDQUFrQztRQUQ5QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsa0NBQWtDLENBcUI5Qzs2Q0EvQkQ7Q0ErQkMsQUFyQkQsSUFxQkM7U0FyQlksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0UmVmZXJlbmNlTGlzdCwgUHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuUHJvZHVjdFJlZmVyZW5jZUxpc3QsXG4gICAgdGFyZ2V0OiBQcm9kdWN0UmVmZXJlbmNlW10gPSBbXVxuICApOiBQcm9kdWN0UmVmZXJlbmNlW10ge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5yZWZlcmVuY2VzKSB7XG4gICAgICB0YXJnZXQgPSBzb3VyY2UucmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+ICh7XG4gICAgICAgIC4uLnJlZmVyZW5jZSxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHJlZmVyZW5jZS50YXJnZXQsIFBST0RVQ1RfTk9STUFMSVpFUiksXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICB9XG59XG4iXX0=