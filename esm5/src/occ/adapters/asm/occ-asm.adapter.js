import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsmConfig } from '../../../asm/config/asm-config';
import { CUSTOMER_SEARCH_PAGE_NORMALIZER } from '../../../asm/connectors/converters';
import { BaseSiteService } from '../../../site-context/facade/base-site.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, } from '../../utils/interceptor-util';
var OccAsmAdapter = /** @class */ (function () {
    function OccAsmAdapter(http, occEndpointsService, converterService, config, baseSiteService) {
        var _this = this;
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.baseSiteService
            .getActive()
            .subscribe(function (value) { return (_this.activeBaseSite = value); });
    }
    OccAsmAdapter.prototype.customerSearch = function (options) {
        var headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
        var params = new HttpParams()
            .set('baseSite', this.activeBaseSite)
            .set('sort', 'byNameAsc');
        if (typeof options['query'] !== 'undefined') {
            params = params.set('query', '' + options.query);
        }
        if (typeof options['pageSize'] !== 'undefined') {
            params = params.set('pageSize', '' + options.pageSize);
        }
        var url = this.occEndpointsService.getRawEndpoint('asmCustomerSearch');
        return this.http
            .get(url, { headers: headers, params: params })
            .pipe(this.converterService.pipeable(CUSTOMER_SEARCH_PAGE_NORMALIZER));
    };
    OccAsmAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: AsmConfig },
        { type: BaseSiteService }
    ]; };
    OccAsmAdapter = __decorate([
        Injectable()
    ], OccAsmAdapter);
    return OccAsmAdapter;
}());
export { OccAsmAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9hc20vb2NjLWFzbS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUd0QztJQUdFLHVCQUNZLElBQWdCLEVBQ2hCLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFDbEMsTUFBaUIsRUFDakIsZUFBZ0M7UUFMNUMsaUJBVUM7UUFUVyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUUxQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUNFLE9BQThCO1FBRTlCLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQzFDLGdDQUFnQyxFQUNoQyxJQUFJLEVBQ0osSUFBSSxXQUFXLEVBQUUsQ0FDbEIsQ0FBQztRQUNGLElBQUksTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO2FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNwQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTVCLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDOUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFekUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBcUIsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Z0JBcENpQixVQUFVO2dCQUNLLG1CQUFtQjtnQkFDdEIsZ0JBQWdCO2dCQUMxQixTQUFTO2dCQUNBLGVBQWU7O0lBUmpDLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBLEFBekNELElBeUNDO1NBekNZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzbUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2FzbS9jb25maWcvYXNtLWNvbmZpZyc7XG5pbXBvcnQgeyBBc21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2Nvbm5lY3RvcnMvYXNtLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ1VTVE9NRVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2FzbS9jb25uZWN0b3JzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJTZWFyY2hPcHRpb25zLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uL2FzbS9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ1VTVE9NRVJfU1VQUE9SVF9BR0VOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NBc21BZGFwdGVyIGltcGxlbWVudHMgQXNtQWRhcHRlciB7XG4gIHByaXZhdGUgYWN0aXZlQmFzZVNpdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBBc21Db25maWcsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiAodGhpcy5hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gIH1cblxuICBjdXN0b21lclNlYXJjaChcbiAgICBvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgdHJ1ZSxcbiAgICAgIG5ldyBIdHRwSGVhZGVycygpXG4gICAgKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnYmFzZVNpdGUnLCB0aGlzLmFjdGl2ZUJhc2VTaXRlKVxuICAgICAgLnNldCgnc29ydCcsICdieU5hbWVBc2MnKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1sncXVlcnknXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3F1ZXJ5JywgJycgKyBvcHRpb25zLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnNbJ3BhZ2VTaXplJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsICcnICsgb3B0aW9ucy5wYWdlU2l6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFJhd0VuZHBvaW50KCdhc21DdXN0b21lclNlYXJjaCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDdXN0b21lclNlYXJjaFBhZ2U+KHVybCwgeyBoZWFkZXJzLCBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDVVNUT01FUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSKSk7XG4gIH1cbn1cbiJdfQ==