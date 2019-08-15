/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { COUNTRY_NORMALIZER, CURRENCY_NORMALIZER, LANGUAGE_NORMALIZER, REGION_NORMALIZER, } from '../../../site-context/connectors/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccSiteAdapter = /** @class */ (function () {
    function OccSiteAdapter(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadLanguages = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpointsService.getUrl('languages'))
            .pipe(map((/**
         * @param {?} languageList
         * @return {?}
         */
        function (languageList) { return languageList.languages; })), this.converterService.pipeableMany(LANGUAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadCurrencies = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpointsService.getUrl('currencies'))
            .pipe(map((/**
         * @param {?} currencyList
         * @return {?}
         */
        function (currencyList) { return currencyList.currencies; })), this.converterService.pipeableMany(CURRENCY_NORMALIZER));
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    OccSiteAdapter.prototype.loadCountries = /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        return this.http
            .get(this.occEndpointsService.getUrl('countries', undefined, type ? { type: type } : undefined))
            .pipe(map((/**
         * @param {?} countryList
         * @return {?}
         */
        function (countryList) { return countryList.countries; })), this.converterService.pipeableMany(COUNTRY_NORMALIZER));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccSiteAdapter.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.http
            .get(this.occEndpointsService.getUrl('regions', { isoCode: countryIsoCode }))
            .pipe(map((/**
         * @param {?} regionList
         * @return {?}
         */
        function (regionList) { return regionList.regions; })), this.converterService.pipeableMany(REGION_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadBaseSite = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var baseUrl = this.occEndpointsService.getBaseEndpoint();
        /** @type {?} */
        var urlSplits = baseUrl.split('/');
        /** @type {?} */
        var activeSite = urlSplits.pop();
        /** @type {?} */
        var url = urlSplits.join('/') + '/basesites';
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(map((/**
         * @param {?} siteList
         * @return {?}
         */
        function (siteList) {
            return siteList.baseSites.find((/**
             * @param {?} site
             * @return {?}
             */
            function (site) { return site.uid === activeSite; }));
        })));
    };
    OccSiteAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccSiteAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccSiteAdapter;
}());
export { OccSiteAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFO0lBRUUsd0JBQ1ksSUFBZ0IsRUFDaEIsbUJBQXdDLEVBQ3hDLGdCQUFrQztRQUZsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMzQyxDQUFDOzs7O0lBRUosc0NBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLFNBQVMsRUFBdEIsQ0FBc0IsRUFBQyxFQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ3hELENBQUM7SUFDTixDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNwRSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLFVBQVUsRUFBdkIsQ0FBdUIsRUFBQyxFQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ3hELENBQUM7SUFDTixDQUFDOzs7OztJQUVELHNDQUFhOzs7O0lBQWIsVUFBYyxJQUFrQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQzdCLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDNUIsQ0FDRjthQUNBLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsU0FBUyxFQUFyQixDQUFxQixFQUFDLEVBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FDdkQsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLGNBQXNCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FDeEU7YUFDQSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBbEIsQ0FBa0IsRUFBQyxFQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQ3RELENBQUM7SUFDTixDQUFDOzs7O0lBRUQscUNBQVk7OztJQUFaOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFOztZQUNwRCxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFOztZQUM1QixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZOztZQUV4QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsUUFBUTtZQUNWLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1FBQ2xFLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOztnQkFyRUYsVUFBVTs7OztnQkFqQkYsVUFBVTtnQkFlVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUEwRXpCLHFCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FyRVksY0FBYzs7Ozs7O0lBRXZCLDhCQUEwQjs7Ozs7SUFDMUIsNkNBQWtEOzs7OztJQUNsRCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVR5cGUsIFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGUsIEN1cnJlbmN5LCBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ09VTlRSWV9OT1JNQUxJWkVSLFxuICBDVVJSRU5DWV9OT1JNQUxJWkVSLFxuICBMQU5HVUFHRV9OT1JNQUxJWkVSLFxuICBSRUdJT05fTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTaXRlQWRhcHRlciBpbXBsZW1lbnRzIFNpdGVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuTGFuZ3VhZ2VMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdsYW5ndWFnZXMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2VMaXN0ID0+IGxhbmd1YWdlTGlzdC5sYW5ndWFnZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KExBTkdVQUdFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VycmVuY3lMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjdXJyZW5jaWVzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbmN5TGlzdCA9PiBjdXJyZW5jeUxpc3QuY3VycmVuY2llcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoQ1VSUkVOQ1lfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ291bnRyaWVzKHR5cGU/OiBDb3VudHJ5VHlwZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKFxuICAgICAgICAgICdjb3VudHJpZXMnLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICB0eXBlID8geyB0eXBlIH0gOiB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChjb3VudHJ5TGlzdCA9PiBjb3VudHJ5TGlzdC5jb3VudHJpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlJlZ2lvbkxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdyZWdpb25zJywgeyBpc29Db2RlOiBjb3VudHJ5SXNvQ29kZSB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChyZWdpb25MaXN0ID0+IHJlZ2lvbkxpc3QucmVnaW9ucyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoUkVHSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldEJhc2VFbmRwb2ludCgpO1xuICAgIGNvbnN0IHVybFNwbGl0cyA9IGJhc2VVcmwuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBhY3RpdmVTaXRlID0gdXJsU3BsaXRzLnBvcCgpO1xuICAgIGNvbnN0IHVybCA9IHVybFNwbGl0cy5qb2luKCcvJykgKyAnL2Jhc2VzaXRlcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDx7IGJhc2VTaXRlczogQmFzZVNpdGVbXSB9Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2l0ZUxpc3QgPT4ge1xuICAgICAgICAgIHJldHVybiBzaXRlTGlzdC5iYXNlU2l0ZXMuZmluZChzaXRlID0+IHNpdGUudWlkID09PSBhY3RpdmVTaXRlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==