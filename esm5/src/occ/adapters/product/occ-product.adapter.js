import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
var OccProductAdapter = /** @class */ (function () {
    function OccProductAdapter(http, occEndpoints, converter, requestsOptimizer) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.requestsOptimizer = requestsOptimizer;
    }
    OccProductAdapter.prototype.load = function (productCode, scope) {
        return this.http
            .get(this.getEndpoint(productCode, scope))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    };
    OccProductAdapter.prototype.loadMany = function (products) {
        var _this = this;
        var scopedDataWithUrls = products.map(function (model) { return ({
            scopedData: model,
            url: _this.getEndpoint(model.code, model.scope),
        }); });
        return this.requestsOptimizer
            .scopedDataLoad(scopedDataWithUrls)
            .map(function (scopedProduct) {
            return (__assign(__assign({}, scopedProduct), { data$: scopedProduct.data$.pipe(_this.converter.pipeable(PRODUCT_NORMALIZER)) }));
        });
    };
    OccProductAdapter.prototype.getEndpoint = function (code, scope) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        }, undefined, scope);
    };
    OccProductAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: OccRequestsOptimizerService }
    ]; };
    OccProductAdapter = __decorate([
        Injectable()
    ], OccProductAdapter);
    return OccProductAdapter;
}());
export { OccProductAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9vY2MtcHJvZHVjdC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUtwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUc1RjtJQUNFLDJCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCLEVBQzNCLGlCQUE4QztRQUg5QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCO0lBQ3ZELENBQUM7SUFFSixnQ0FBSSxHQUFKLFVBQUssV0FBbUIsRUFBRSxLQUFjO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFFBQTZCO1FBQXRDLGlCQWlCQztRQWhCQyxJQUFNLGtCQUFrQixHQUF3QixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztZQUNyRSxVQUFVLEVBQUUsS0FBSztZQUNqQixHQUFHLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDL0MsQ0FBQyxFQUhvRSxDQUdwRSxDQUFDLENBQUM7UUFFSixPQUFPLElBQUksQ0FBQyxpQkFBaUI7YUFDMUIsY0FBYyxDQUFjLGtCQUFrQixDQUFDO2FBQy9DLEdBQUcsQ0FDRixVQUFBLGFBQWE7WUFDWCxPQUFBLENBQUMsc0JBQ0ksYUFBYSxLQUNoQixLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQzVDLEdBQ29CLENBQUE7UUFMdkIsQ0FLdUIsQ0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFUyx1Q0FBVyxHQUFyQixVQUFzQixJQUFZLEVBQUUsS0FBYztRQUNoRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM3QixTQUFTLEVBQ1Q7WUFDRSxXQUFXLEVBQUUsSUFBSTtTQUNsQixFQUNELFNBQVMsRUFDVCxLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7O2dCQXhDaUIsVUFBVTtnQkFDRixtQkFBbUI7Z0JBQ3RCLGdCQUFnQjtnQkFDUiwyQkFBMkI7O0lBTC9DLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7T0FDQSxpQkFBaUIsQ0EyQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3Qvc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5pbXBvcnQgeyBTY29wZWREYXRhV2l0aFVybCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzJztcbmltcG9ydCB7IE9jY1JlcXVlc3RzT3B0aW1pemVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1yZXF1ZXN0cy1vcHRpbWl6ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0QWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXF1ZXN0c09wdGltaXplcjogT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlLCBzY29wZSkpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQUk9EVUNUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRNYW55KHByb2R1Y3RzOiBTY29wZWRQcm9kdWN0RGF0YVtdKTogU2NvcGVkUHJvZHVjdERhdGFbXSB7XG4gICAgY29uc3Qgc2NvcGVkRGF0YVdpdGhVcmxzOiBTY29wZWREYXRhV2l0aFVybFtdID0gcHJvZHVjdHMubWFwKG1vZGVsID0+ICh7XG4gICAgICBzY29wZWREYXRhOiBtb2RlbCxcbiAgICAgIHVybDogdGhpcy5nZXRFbmRwb2ludChtb2RlbC5jb2RlLCBtb2RlbC5zY29wZSksXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdHNPcHRpbWl6ZXJcbiAgICAgIC5zY29wZWREYXRhTG9hZDxPY2MuUHJvZHVjdD4oc2NvcGVkRGF0YVdpdGhVcmxzKVxuICAgICAgLm1hcChcbiAgICAgICAgc2NvcGVkUHJvZHVjdCA9PlxuICAgICAgICAgICh7XG4gICAgICAgICAgICAuLi5zY29wZWRQcm9kdWN0LFxuICAgICAgICAgICAgZGF0YSQ6IHNjb3BlZFByb2R1Y3QuZGF0YSQucGlwZShcbiAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9OT1JNQUxJWkVSKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9IGFzIFNjb3BlZFByb2R1Y3REYXRhKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChjb2RlOiBzdHJpbmcsIHNjb3BlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ3Byb2R1Y3QnLFxuICAgICAge1xuICAgICAgICBwcm9kdWN0Q29kZTogY29kZSxcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBzY29wZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==