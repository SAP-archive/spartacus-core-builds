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
export class OccAsmAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpointsService
     * @param {?} converterService
     * @param {?} config
     * @param {?} baseSiteService
     */
    constructor(http, occEndpointsService, converterService, config, baseSiteService) {
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
        value => (this.activeBaseSite = value)));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    customerSearch(options) {
        /** @type {?} */
        const headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
        /** @type {?} */
        let params = new HttpParams()
            .set('baseSite', this.activeBaseSite)
            .set('sort', 'byNameAsc');
        if (typeof options['query'] !== 'undefined') {
            params = params.set('query', '' + options.query);
        }
        if (typeof options['pageSize'] !== 'undefined') {
            params = params.set('pageSize', '' + options.pageSize);
        }
        /** @type {?} */
        const url = this.occEndpointsService.getRawEndpoint('asmCustomerSearch');
        return this.http
            .get(url, { headers, params })
            .pipe(this.converterService.pipeable(CUSTOMER_SEARCH_PAGE_NORMALIZER));
    }
}
OccAsmAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccAsmAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService },
    { type: AsmConfig },
    { type: BaseSiteService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9hc20vb2NjLWFzbS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUd0QyxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFHeEIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLE1BQWlCLEVBQ2pCLGVBQWdDO1FBSmhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRTFDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLFNBQVMsRUFBRTthQUNYLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUNaLE9BQThCOztjQUV4QixPQUFPLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FDMUMsZ0NBQWdDLEVBQ2hDLElBQUksRUFDSixJQUFJLFdBQVcsRUFBRSxDQUNsQjs7WUFDRyxNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUU7YUFDdEMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO1FBRTNCLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDOUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7O2NBRUssR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFFeEUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBcUIsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7WUF6Q0YsVUFBVTs7OztZQWxCRixVQUFVO1lBWVYsbUJBQW1CO1lBRG5CLGdCQUFnQjtZQVJoQixTQUFTO1lBT1QsZUFBZTs7Ozs7OztJQVV0Qix1Q0FBK0I7Ozs7O0lBRzdCLDZCQUEwQjs7Ozs7SUFDMUIsNENBQWtEOzs7OztJQUNsRCx5Q0FBNEM7Ozs7O0lBQzVDLCtCQUEyQjs7Ozs7SUFDM0Isd0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db25maWcgfSBmcm9tICcuLi8uLi8uLi9hc20vY29uZmlnL2FzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2FzbS9jb25uZWN0b3JzL2FzbS5hZGFwdGVyJztcbmltcG9ydCB7IENVU1RPTUVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIEN1c3RvbWVyU2VhcmNoT3B0aW9ucyxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi9hc20vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQXNtQWRhcHRlciBpbXBsZW1lbnRzIEFzbUFkYXB0ZXIge1xuICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXNtQ29uZmlnLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmFjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgfVxuXG4gIGN1c3RvbWVyU2VhcmNoKFxuICAgIG9wdGlvbnM6IEN1c3RvbWVyU2VhcmNoT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFxuICAgICAgVVNFX0NVU1RPTUVSX1NVUFBPUlRfQUdFTlRfVE9LRU4sXG4gICAgICB0cnVlLFxuICAgICAgbmV3IEh0dHBIZWFkZXJzKClcbiAgICApO1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdiYXNlU2l0ZScsIHRoaXMuYWN0aXZlQmFzZVNpdGUpXG4gICAgICAuc2V0KCdzb3J0JywgJ2J5TmFtZUFzYycpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zWydxdWVyeSddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCAnJyArIG9wdGlvbnMucXVlcnkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc1sncGFnZVNpemUnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgJycgKyBvcHRpb25zLnBhZ2VTaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ2FzbUN1c3RvbWVyU2VhcmNoJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PEN1c3RvbWVyU2VhcmNoUGFnZT4odXJsLCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENVU1RPTUVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19