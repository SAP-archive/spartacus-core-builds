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
/** @type {?} */
var COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
var REGIONS_ENDPOINT = 'regions';
var OccSiteAdapter = /** @class */ (function () {
    function OccSiteAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadLanguages = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(map((/**
         * @param {?} languageList
         * @return {?}
         */
        function (languageList) { return languageList.languages; })), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadCurrencies = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(map((/**
         * @param {?} currencyList
         * @return {?}
         */
        function (currencyList) { return currencyList.currencies; })), this.converter.pipeableMany(CURRENCY_NORMALIZER));
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
        /** @type {?} */
        var params;
        if (type) {
            params = new HttpParams().set('type', type);
        }
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: params,
        })
            .pipe(map((/**
         * @param {?} countryList
         * @return {?}
         */
        function (countryList) { return countryList.countries; })), this.converter.pipeableMany(COUNTRY_NORMALIZER));
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
        /** @type {?} */
        var regionsEndpoint = COUNTRIES_ENDPOINT + "/" + countryIsoCode + "/" + REGIONS_ENDPOINT + "?fields=regions(name,isocode,isocodeShort)";
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(map((/**
         * @param {?} regionList
         * @return {?}
         */
        function (regionList) { return regionList.regions; })), this.converter.pipeableMany(REGION_NORMALIZER));
    };
    /**
     * @return {?}
     */
    OccSiteAdapter.prototype.loadBaseSite = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var baseUrl = this.occEndpoints.getBaseEndpoint();
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
    OccSiteAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztJQUVyRSxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxnQkFBZ0IsR0FBRyxTQUFTO0FBRWxDO0lBRUUsd0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7OztJQUVKLHNDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsU0FBUyxFQUF0QixDQUFzQixFQUFDLEVBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ2pELENBQUM7SUFDTixDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxVQUFVLEVBQXZCLENBQXVCLEVBQUMsRUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLElBQWtCOztZQUMxQixNQUFNO1FBRVYsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUN2RSxNQUFNLFFBQUE7U0FDUCxDQUFDO2FBQ0QsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxTQUFTLEVBQXJCLENBQXFCLEVBQUMsRUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FDaEQsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLGNBQXNCOztZQUMxQixlQUFlLEdBQU0sa0JBQWtCLFNBQUksY0FBYyxTQUFJLGdCQUFnQiwrQ0FBNEM7UUFDL0gsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbkUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQWxCLENBQWtCLEVBQUMsRUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxxQ0FBWTs7O0lBQVo7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFOztZQUM3QyxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFOztZQUM1QixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZOztZQUV4QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUEsUUFBUTtZQUNWLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1FBQ2xFLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOztnQkF0RUYsVUFBVTs7OztnQkFwQkYsVUFBVTtnQkFlVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUE4RXpCLHFCQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0F0RVksY0FBYzs7Ozs7O0lBRXZCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQTJDOzs7OztJQUMzQyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVR5cGUsIFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGUsIEN1cnJlbmN5LCBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ09VTlRSWV9OT1JNQUxJWkVSLFxuICBDVVJSRU5DWV9OT1JNQUxJWkVSLFxuICBMQU5HVUFHRV9OT1JNQUxJWkVSLFxuICBSRUdJT05fTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IENPVU5UUklFU19FTkRQT0lOVCA9ICdjb3VudHJpZXMnO1xuY29uc3QgUkVHSU9OU19FTkRQT0lOVCA9ICdyZWdpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1NpdGVBZGFwdGVyIGltcGxlbWVudHMgU2l0ZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuTGFuZ3VhZ2VMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnbGFuZ3VhZ2VzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGxhbmd1YWdlTGlzdCA9PiBsYW5ndWFnZUxpc3QubGFuZ3VhZ2VzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KExBTkdVQUdFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VycmVuY3lMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY3VycmVuY2llcycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChjdXJyZW5jeUxpc3QgPT4gY3VycmVuY3lMaXN0LmN1cnJlbmNpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ1VSUkVOQ1lfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ291bnRyaWVzKHR5cGU/OiBDb3VudHJ5VHlwZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgbGV0IHBhcmFtcztcblxuICAgIGlmICh0eXBlKSB7XG4gICAgICBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNvdW50cnlMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChDT1VOVFJJRVNfRU5EUE9JTlQpLCB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGNvdW50cnlMaXN0ID0+IGNvdW50cnlMaXN0LmNvdW50cmllcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDT1VOVFJZX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICBjb25zdCByZWdpb25zRW5kcG9pbnQgPSBgJHtDT1VOVFJJRVNfRU5EUE9JTlR9LyR7Y291bnRyeUlzb0NvZGV9LyR7UkVHSU9OU19FTkRQT0lOVH0/ZmllbGRzPXJlZ2lvbnMobmFtZSxpc29jb2RlLGlzb2NvZGVTaG9ydClgO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlJlZ2lvbkxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KHJlZ2lvbnNFbmRwb2ludCkpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHJlZ2lvbkxpc3QgPT4gcmVnaW9uTGlzdC5yZWdpb25zKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFJFR0lPTl9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRCYXNlU2l0ZSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpO1xuICAgIGNvbnN0IHVybFNwbGl0cyA9IGJhc2VVcmwuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBhY3RpdmVTaXRlID0gdXJsU3BsaXRzLnBvcCgpO1xuICAgIGNvbnN0IHVybCA9IHVybFNwbGl0cy5qb2luKCcvJykgKyAnL2Jhc2VzaXRlcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDx7IGJhc2VTaXRlczogQmFzZVNpdGVbXSB9Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2l0ZUxpc3QgPT4ge1xuICAgICAgICAgIHJldHVybiBzaXRlTGlzdC5iYXNlU2l0ZXMuZmluZChzaXRlID0+IHNpdGUudWlkID09PSBhY3RpdmVTaXRlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==