import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SAVE_CART_NORMALIZER } from '../../../cart/connectors/save-cart/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccSaveCartAdapter = /** @class */ (function () {
    function OccSaveCartAdapter(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    OccSaveCartAdapter.prototype.saveCart = function (userId, cartId, saveCartName, saveCartDescription) {
        var httpParams = new HttpParams();
        if (Boolean(saveCartName)) {
            httpParams = httpParams.set('saveCartName', saveCartName);
        }
        if (Boolean(saveCartDescription)) {
            httpParams = httpParams.set('saveCartDescription', saveCartDescription);
        }
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(this.occEndpointsService.getUrl('saveCart', { userId: userId, cartId: cartId }), httpParams, { headers: headers })
            .pipe(this.converterService.pipeable(SAVE_CART_NORMALIZER));
    };
    OccSaveCartAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccSaveCartAdapter = __decorate([
        Injectable()
    ], OccSaveCartAdapter);
    return OccSaveCartAdapter;
}());
export { OccSaveCartAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNhdmUtY2FydC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jYXJ0L29jYy1zYXZlLWNhcnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUdyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRTtJQUNFLDRCQUNZLElBQWdCLEVBQ2hCLG1CQUF3QyxFQUN4QyxnQkFBa0M7UUFGbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDM0MsQ0FBQztJQUVHLHFDQUFRLEdBQWYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQXFCLEVBQ3JCLG1CQUE0QjtRQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRWxDLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3pCLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDaEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FDSixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsRUFDL0QsVUFBVSxFQUNWLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FDWjthQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkFoQ2lCLFVBQVU7Z0JBQ0ssbUJBQW1CO2dCQUN0QixnQkFBZ0I7O0lBSm5DLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7T0FDQSxrQkFBa0IsQ0FtQzlCO0lBQUQseUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQW5DWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNBVkVfQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL3NhdmUtY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFNhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgU2F2ZUNhcnRSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1NhdmVDYXJ0QWRhcHRlciBpbXBsZW1lbnRzIFNhdmVDYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgc2F2ZUNhcnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgc2F2ZUNhcnROYW1lPzogc3RyaW5nLFxuICAgIHNhdmVDYXJ0RGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxTYXZlQ2FydFJlc3VsdD4ge1xuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcblxuICAgIGlmIChCb29sZWFuKHNhdmVDYXJ0TmFtZSkpIHtcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCgnc2F2ZUNhcnROYW1lJywgc2F2ZUNhcnROYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoQm9vbGVhbihzYXZlQ2FydERlc2NyaXB0aW9uKSkge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KCdzYXZlQ2FydERlc2NyaXB0aW9uJywgc2F2ZUNhcnREZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2g8T2NjLlNhdmVDYXJ0UmVzdWx0PihcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgnc2F2ZUNhcnQnLCB7IHVzZXJJZCwgY2FydElkIH0pLFxuICAgICAgICBodHRwUGFyYW1zLFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKFNBVkVfQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cbn1cbiJdfQ==