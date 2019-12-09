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
            .set('query', options.query);
        if (!!options.pageSize) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9hc20vb2NjLWFzbS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUd0QyxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFHeEIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLE1BQWlCLEVBQ2pCLGVBQWdDO1FBSmhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRTFDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLFNBQVMsRUFBRTthQUNYLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUNaLE9BQThCOztjQUV4QixPQUFPLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FDMUMsZ0NBQWdDLEVBQ2hDLElBQUksRUFDSixJQUFJLFdBQVcsRUFBRSxDQUNsQjs7WUFDRyxNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUU7YUFDdEMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU5QixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEOztjQUVLLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBRXhFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQXFCLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7O1lBckNGLFVBQVU7Ozs7WUFsQkYsVUFBVTtZQVlWLG1CQUFtQjtZQURuQixnQkFBZ0I7WUFSaEIsU0FBUztZQU9ULGVBQWU7Ozs7Ozs7SUFVdEIsdUNBQStCOzs7OztJQUc3Qiw2QkFBMEI7Ozs7O0lBQzFCLDRDQUFrRDs7Ozs7SUFDbEQseUNBQTRDOzs7OztJQUM1QywrQkFBMkI7Ozs7O0lBQzNCLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2NvbmZpZy9hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9hc20uYWRhcHRlcic7XG5pbXBvcnQgeyBDVVNUT01FUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDdXN0b21lclNlYXJjaE9wdGlvbnMsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vYXNtL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmNlcHRvci11dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0FzbUFkYXB0ZXIgaW1wbGVtZW50cyBBc21BZGFwdGVyIHtcbiAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb25maWc6IEFzbUNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiAodGhpcy5hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gIH1cblxuICBjdXN0b21lclNlYXJjaChcbiAgICBvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgdHJ1ZSxcbiAgICAgIG5ldyBIdHRwSGVhZGVycygpXG4gICAgKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnYmFzZVNpdGUnLCB0aGlzLmFjdGl2ZUJhc2VTaXRlKVxuICAgICAgLnNldCgncXVlcnknLCBvcHRpb25zLnF1ZXJ5KTtcblxuICAgIGlmICghIW9wdGlvbnMucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgJycgKyBvcHRpb25zLnBhZ2VTaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ2FzbUN1c3RvbWVyU2VhcmNoJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PEN1c3RvbWVyU2VhcmNoUGFnZT4odXJsLCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENVU1RPTUVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19