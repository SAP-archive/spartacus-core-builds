/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (_this.activeBaseSite = value); }));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    OccAsmAdapter.prototype.customerSearch = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
        /** @type {?} */
        var params = new HttpParams()
            .set('baseSite', this.activeBaseSite)
            .set('query', options.query);
        /** @type {?} */
        var url = this.occEndpointsService.getRawEndpoint('asmCustomerSearch');
        return this.http
            .get(url, { headers: headers, params: params })
            .pipe(this.converterService.pipeable(CUSTOMER_SEARCH_PAGE_NORMALIZER));
    };
    OccAsmAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccAsmAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: AsmConfig },
        { type: BaseSiteService }
    ]; };
    return OccAsmAdapter;
}());
export { OccAsmAdapter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccAsmAdapter.prototype.activeBaseSite;
    /**
     * @type {?}
     * @protected
     */
    OccAsmAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccAsmAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccAsmAdapter.prototype.converterService;
    /**
     * @type {?}
     * @protected
     */
    OccAsmAdapter.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccAsmAdapter.prototype.baseSiteService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9hc20vb2NjLWFzbS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUV0QztJQUlFLHVCQUNZLElBQWdCLEVBQ2hCLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFDbEMsTUFBaUIsRUFDakIsZUFBZ0M7UUFMNUMsaUJBVUM7UUFUVyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUUxQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHNDQUFjOzs7O0lBQWQsVUFDRSxPQUE4Qjs7WUFFeEIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQzFDLGdDQUFnQyxFQUNoQyxJQUFJLEVBQ0osSUFBSSxXQUFXLEVBQUUsQ0FDbEI7O1lBRUssTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO2FBQ3hDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNwQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7O1lBRXhCLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBRXhFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQXFCLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7YUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQWxDRixVQUFVOzs7O2dCQWxCRixVQUFVO2dCQVlWLG1CQUFtQjtnQkFEbkIsZ0JBQWdCO2dCQVJoQixTQUFTO2dCQU9ULGVBQWU7O0lBMkN4QixvQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLGFBQWE7Ozs7OztJQUN4Qix1Q0FBK0I7Ozs7O0lBRzdCLDZCQUEwQjs7Ozs7SUFDMUIsNENBQWtEOzs7OztJQUNsRCx5Q0FBNEM7Ozs7O0lBQzVDLCtCQUEyQjs7Ozs7SUFDM0Isd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db25maWcgfSBmcm9tICcuLi8uLi8uLi9hc20vY29uZmlnL2FzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2FzbS9jb25uZWN0b3JzL2FzbS5hZGFwdGVyJztcbmltcG9ydCB7IENVU1RPTUVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi9hc20vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQXNtQWRhcHRlciBpbXBsZW1lbnRzIEFzbUFkYXB0ZXIge1xuICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXNtQ29uZmlnLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmFjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgfVxuXG4gIGN1c3RvbWVyU2VhcmNoKFxuICAgIG9wdGlvbnM6IEN1c3RvbWVyU2VhcmNoT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFxuICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICB0cnVlLFxuICAgICAgbmV3IEh0dHBIZWFkZXJzKClcbiAgICApO1xuXG4gICAgY29uc3QgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnYmFzZVNpdGUnLCB0aGlzLmFjdGl2ZUJhc2VTaXRlKVxuICAgICAgLnNldCgncXVlcnknLCBvcHRpb25zLnF1ZXJ5KTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRSYXdFbmRwb2ludCgnYXNtQ3VzdG9tZXJTZWFyY2gnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q3VzdG9tZXJTZWFyY2hQYWdlPih1cmwsIHsgaGVhZGVycywgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ1VTVE9NRVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUikpO1xuICB9XG59XG4iXX0=