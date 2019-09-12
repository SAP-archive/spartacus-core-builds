/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { POINT_OF_SERVICE_NORMALIZER, STORE_COUNT_NORMALIZER, STORE_FINDER_SEARCH_PAGE_NORMALIZER, } from '../../../store-finder/connectors';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccStoreFinderAdapter = /** @class */ (function () {
    function OccStoreFinderAdapter(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.search = /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converterService.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.loadCounts = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpointsService.getUrl('storescounts'))
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var countriesAndRegionsStoreCount = _a.countriesAndRegionsStoreCount;
            return countriesAndRegionsStoreCount;
        })), this.converterService.pipeableMany(STORE_COUNT_NORMALIZER));
    };
    /**
     * @param {?} storeId
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.load = /**
     * @param {?} storeId
     * @return {?}
     */
    function (storeId) {
        return this.http
            .get(this.occEndpointsService.getUrl('store', { storeId: storeId }))
            .pipe(this.converterService.pipeable(POINT_OF_SERVICE_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    OccStoreFinderAdapter.prototype.callOccFindStores = /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    function (query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        var params = {};
        if (longitudeLatitude) {
            params['longitude'] = String(longitudeLatitude.longitude);
            params['latitude'] = String(longitudeLatitude.latitude);
            params['radius'] = String('10000000');
        }
        else {
            params['query'] = query;
        }
        if (searchConfig.pageSize) {
            params['pageSize'] = String(searchConfig.pageSize);
        }
        if (searchConfig.currentPage) {
            params['currentPage'] = String(searchConfig.currentPage);
        }
        if (searchConfig.sort) {
            params['sort'] = searchConfig.sort;
        }
        return this.http.get(this.occEndpointsService.getUrl('stores', undefined, params));
    };
    OccStoreFinderAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccStoreFinderAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccStoreFinderAdapter;
}());
export { OccStoreFinderAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsT0FBTyxFQUNMLDJCQUEyQixFQUMzQixzQkFBc0IsRUFDdEIsbUNBQW1DLEdBQ3BDLE1BQU0sa0NBQWtDLENBQUM7QUFHMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFFRSwrQkFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7Ozs7Ozs7SUFFSixzQ0FBTTs7Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FDcEUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hFLElBQUksQ0FDSCxHQUFHOzs7O1FBQ0QsVUFBQyxFQUFpQztnQkFBL0IsZ0VBQTZCO1lBQU8sT0FBQSw2QkFBNkI7UUFBN0IsQ0FBNkIsRUFDckUsRUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQzNELENBQUM7SUFDTixDQUFDOzs7OztJQUVELG9DQUFJOzs7O0lBQUosVUFBSyxPQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQ3REO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7O0lBRVMsaURBQWlCOzs7Ozs7O0lBQTNCLFVBQ0UsS0FBYSxFQUNiLFlBQXFDLEVBQ3JDLGlCQUE0Qjs7WUFFdEIsTUFBTSxHQUFHLEVBQUU7UUFFakIsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUNELElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztTQUNwQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7O2dCQWhFRixVQUFVOzs7O2dCQXJCRixVQUFVO2dCQW1CVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUFxRXpCLDRCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVkscUJBQXFCOzs7Ozs7SUFFOUIscUNBQTBCOzs7OztJQUMxQixvREFBa0Q7Ozs7O0lBQ2xELGlEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7XG4gIFN0b3JlQ291bnQsXG4gIFN0b3JlRmluZGVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc3RvcmUtZmluZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUixcbiAgU1RPUkVfQ09VTlRfTk9STUFMSVpFUixcbiAgU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL21vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1N0b3JlRmluZGVyQWRhcHRlciBpbXBsZW1lbnRzIFN0b3JlRmluZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsT2NjRmluZFN0b3JlcyhxdWVyeSwgc2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZSkucGlwZShcbiAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShTVE9SRV9GSU5ERVJfU0VBUkNIX1BBR0VfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgbG9hZENvdW50cygpOiBPYnNlcnZhYmxlPFN0b3JlQ291bnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlN0b3JlQ291bnRMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdzdG9yZXNjb3VudHMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKHsgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQgfSkgPT4gY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnRcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlTWFueShTVE9SRV9DT1VOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlBvaW50T2ZTZXJ2aWNlPihcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgnc3RvcmUnLCB7IHN0b3JlSWQgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShQT0lOVF9PRl9TRVJWSUNFX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYWxsT2NjRmluZFN0b3JlcyhcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludFxuICApOiBPYnNlcnZhYmxlPE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zWydsb25naXR1ZGUnXSA9IFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sb25naXR1ZGUpO1xuICAgICAgcGFyYW1zWydsYXRpdHVkZSddID0gU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxhdGl0dWRlKTtcbiAgICAgIHBhcmFtc1sncmFkaXVzJ10gPSBTdHJpbmcoJzEwMDAwMDAwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1sncXVlcnknXSA9IHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXNbJ3BhZ2VTaXplJ10gPSBTdHJpbmcoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zWydjdXJyZW50UGFnZSddID0gU3RyaW5nKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzZWFyY2hDb25maWcuc29ydDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPihcbiAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ3N0b3JlcycsIHVuZGVmaW5lZCwgcGFyYW1zKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==