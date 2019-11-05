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
        if (!!options.pageSize) {
            params = params.set('pageSize', '' + options.pageSize);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9hc20vb2NjLWFzbS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUtyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUV0QztJQUlFLHVCQUNZLElBQWdCLEVBQ2hCLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFDbEMsTUFBaUIsRUFDakIsZUFBZ0M7UUFMNUMsaUJBVUM7UUFUVyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUUxQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHNDQUFjOzs7O0lBQWQsVUFDRSxPQUE4Qjs7WUFFeEIsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQzFDLGdDQUFnQyxFQUNoQyxJQUFJLEVBQ0osSUFBSSxXQUFXLEVBQUUsQ0FDbEI7O1lBQ0csTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO2FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUNwQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN0QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDs7WUFFSyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztRQUV4RSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFxQixHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO2FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOztnQkFyQ0YsVUFBVTs7OztnQkFsQkYsVUFBVTtnQkFZVixtQkFBbUI7Z0JBRG5CLGdCQUFnQjtnQkFSaEIsU0FBUztnQkFPVCxlQUFlOztJQThDeEIsb0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxhQUFhOzs7Ozs7SUFDeEIsdUNBQStCOzs7OztJQUc3Qiw2QkFBMEI7Ozs7O0lBQzFCLDRDQUFrRDs7Ozs7SUFDbEQseUNBQTRDOzs7OztJQUM1QywrQkFBMkI7Ozs7O0lBQzNCLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2NvbmZpZy9hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9hc20uYWRhcHRlcic7XG5pbXBvcnQgeyBDVVNUT01FUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDdXN0b21lclNlYXJjaE9wdGlvbnMsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vYXNtL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmNlcHRvci11dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0FzbUFkYXB0ZXIgaW1wbGVtZW50cyBBc21BZGFwdGVyIHtcbiAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb25maWc6IEFzbUNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiAodGhpcy5hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gIH1cblxuICBjdXN0b21lclNlYXJjaChcbiAgICBvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihcbiAgICAgIFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOLFxuICAgICAgdHJ1ZSxcbiAgICAgIG5ldyBIdHRwSGVhZGVycygpXG4gICAgKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnYmFzZVNpdGUnLCB0aGlzLmFjdGl2ZUJhc2VTaXRlKVxuICAgICAgLnNldCgncXVlcnknLCBvcHRpb25zLnF1ZXJ5KTtcblxuICAgIGlmICghIW9wdGlvbnMucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgJycgKyBvcHRpb25zLnBhZ2VTaXplKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0UmF3RW5kcG9pbnQoJ2FzbUN1c3RvbWVyU2VhcmNoJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PEN1c3RvbWVyU2VhcmNoUGFnZT4odXJsLCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENVU1RPTUVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19