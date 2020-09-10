import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import { COST_CENTER_NORMALIZER } from '../../../../organization/connectors/cost-center/converters';
var OccCostCenterListNormalizer = /** @class */ (function () {
    function OccCostCenterListNormalizer(converter) {
        this.converter = converter;
    }
    OccCostCenterListNormalizer.prototype.convert = function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = __assign(__assign({}, source), { values: source.costCenters.map(function (costCenter) { return (__assign({}, _this.converter.convert(costCenter, COST_CENTER_NORMALIZER))); }) });
        }
        return target;
    };
    OccCostCenterListNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    OccCostCenterListNormalizer = __decorate([
        Injectable()
    ], OccCostCenterListNormalizer);
    return OccCostCenterListNormalizer;
}());
export { OccCostCenterListNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvb3JnYW5pemF0aW9uL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBS3BHO0lBRUUscUNBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCw2Q0FBTyxHQUFQLFVBQ0UsTUFBMkIsRUFDM0IsTUFBa0M7UUFGcEMsaUJBYUM7UUFUQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSx5QkFDQSxNQUFjLEtBQ2xCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFVBQVUsSUFBSyxPQUFBLGNBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxFQUM3RCxFQUY2QyxDQUU3QyxDQUFDLEdBQ0osQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBZjhCLGdCQUFnQjs7SUFGcEMsMkJBQTJCO1FBRHZDLFVBQVUsRUFBRTtPQUNBLDJCQUEyQixDQWtCdkM7SUFBRCxrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ09TVF9DRU5URVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL29yZ2FuaXphdGlvbi9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgRW50aXRpZXNNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Nvc3RDZW50ZXJMaXN0Tm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ29zdENlbnRlcnNMaXN0LCBFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuQ29zdENlbnRlcnNMaXN0LFxuICAgIHRhcmdldD86IEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj5cbiAgKTogRW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPiB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7XG4gICAgICAgIC4uLihzb3VyY2UgYXMgYW55KSxcbiAgICAgICAgdmFsdWVzOiBzb3VyY2UuY29zdENlbnRlcnMubWFwKChjb3N0Q2VudGVyKSA9PiAoe1xuICAgICAgICAgIC4uLnRoaXMuY29udmVydGVyLmNvbnZlcnQoY29zdENlbnRlciwgQ09TVF9DRU5URVJfTk9STUFMSVpFUiksXG4gICAgICAgIH0pKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==