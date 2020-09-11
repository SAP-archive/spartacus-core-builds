import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { COST_CENTER_NORMALIZER } from '../../../../cost-center/connectors/cost-center/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY29zdC1jZW50ZXIvY29udmVydGVycy9vY2MtY29zdC1jZW50ZXItbGlzdC1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR25HLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sb0NBQW9DLENBQUM7QUFJNUM7SUFFRSxxQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELDZDQUFPLEdBQVAsVUFDRSxNQUEyQixFQUMzQixNQUFrQztRQUZwQyxpQkFhQztRQVRDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHlCQUNBLE1BQWMsS0FDbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUEsY0FDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLHNCQUFzQixDQUFDLEVBQzdELEVBRjZDLENBRTdDLENBQUMsR0FDSixDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFmOEIsZ0JBQWdCOztJQUZwQywyQkFBMkI7UUFEdkMsVUFBVSxFQUFFO09BQ0EsMkJBQTJCLENBa0J2QztJQUFELGtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09TVF9DRU5URVJfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL2Nvc3QtY2VudGVyL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBFbnRpdGllc01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDb3N0Q2VudGVyTGlzdE5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNvc3RDZW50ZXJzTGlzdCwgRW50aXRpZXNNb2RlbDxDb3N0Q2VudGVyPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLkNvc3RDZW50ZXJzTGlzdCxcbiAgICB0YXJnZXQ/OiBFbnRpdGllc01vZGVsPENvc3RDZW50ZXI+XG4gICk6IEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj4ge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgICAgIHZhbHVlczogc291cmNlLmNvc3RDZW50ZXJzLm1hcCgoY29zdENlbnRlcikgPT4gKHtcbiAgICAgICAgICAuLi50aGlzLmNvbnZlcnRlci5jb252ZXJ0KGNvc3RDZW50ZXIsIENPU1RfQ0VOVEVSX05PUk1BTElaRVIpLFxuICAgICAgICB9KSksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG59XG4iXX0=