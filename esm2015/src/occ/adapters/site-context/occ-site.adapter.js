/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { COUNTRY_NORMALIZER, CURRENCY_NORMALIZER, LANGUAGE_NORMALIZER, REGION_NORMALIZER, } from '../../../site-context/connectors/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccSiteAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpointsService
     * @param {?} converterService
     */
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    /**
     * @return {?}
     */
    loadLanguages() {
        return this.http
            .get(this.occEndpointsService.getUrl('languages'))
            .pipe(map((/**
         * @param {?} languageList
         * @return {?}
         */
        languageList => languageList.languages)), this.converterService.pipeableMany(LANGUAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCurrencies() {
        return this.http
            .get(this.occEndpointsService.getUrl('currencies'))
            .pipe(map((/**
         * @param {?} currencyList
         * @return {?}
         */
        currencyList => currencyList.currencies)), this.converterService.pipeableMany(CURRENCY_NORMALIZER));
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    loadCountries(type) {
        return this.http
            .get(this.occEndpointsService.getUrl('countries', undefined, type ? { type } : undefined))
            .pipe(map((/**
         * @param {?} countryList
         * @return {?}
         */
        countryList => countryList.countries)), this.converterService.pipeableMany(COUNTRY_NORMALIZER));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        return this.http
            .get(this.occEndpointsService.getUrl('regions', { isoCode: countryIsoCode }))
            .pipe(map((/**
         * @param {?} regionList
         * @return {?}
         */
        regionList => regionList.regions)), this.converterService.pipeableMany(REGION_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadBaseSite() {
        /** @type {?} */
        const baseUrl = this.occEndpointsService.getBaseEndpoint();
        /** @type {?} */
        const urlSplits = baseUrl.split('/');
        /** @type {?} */
        const activeSite = urlSplits.pop();
        /** @type {?} */
        const url = urlSplits.join('/') + '/basesites';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'fields=FULL',
        });
        return this.http
            .get(url, { params: params })
            .pipe(map((/**
         * @param {?} siteList
         * @return {?}
         */
        siteList => {
            return siteList.baseSites.find((/**
             * @param {?} site
             * @return {?}
             */
            site => site.uid === activeSite));
        })));
    }
}
OccSiteAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccSiteAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7Ozs7SUFFSixhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuRSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ3hELENBQUM7SUFDTixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDcEUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsRUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBa0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUM3QixXQUFXLEVBQ1gsU0FBUyxFQUNULElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUM1QixDQUNGO2FBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUMsRUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUN2RCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUN4RTthQUNBLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLEVBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FDdEQsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFOztjQUNwRCxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQzlCLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFOztjQUM1QixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZOztjQUV4QyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7OztZQXJFRixVQUFVOzs7O1lBakJGLFVBQVU7WUFlVixtQkFBbUI7WUFGbkIsZ0JBQWdCOzs7Ozs7O0lBT3JCLDhCQUEwQjs7Ozs7SUFDMUIsNkNBQWtEOzs7OztJQUNsRCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVR5cGUsIFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGUsIEN1cnJlbmN5LCBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ09VTlRSWV9OT1JNQUxJWkVSLFxuICBDVVJSRU5DWV9OT1JNQUxJWkVSLFxuICBMQU5HVUFHRV9OT1JNQUxJWkVSLFxuICBSRUdJT05fTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTaXRlQWRhcHRlciBpbXBsZW1lbnRzIFNpdGVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuTGFuZ3VhZ2VMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdsYW5ndWFnZXMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2VMaXN0ID0+IGxhbmd1YWdlTGlzdC5sYW5ndWFnZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KExBTkdVQUdFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VycmVuY3lMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjdXJyZW5jaWVzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbmN5TGlzdCA9PiBjdXJyZW5jeUxpc3QuY3VycmVuY2llcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoQ1VSUkVOQ1lfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ291bnRyaWVzKHR5cGU/OiBDb3VudHJ5VHlwZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKFxuICAgICAgICAgICdjb3VudHJpZXMnLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICB0eXBlID8geyB0eXBlIH0gOiB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChjb3VudHJ5TGlzdCA9PiBjb3VudHJ5TGlzdC5jb3VudHJpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlJlZ2lvbkxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdyZWdpb25zJywgeyBpc29Db2RlOiBjb3VudHJ5SXNvQ29kZSB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChyZWdpb25MaXN0ID0+IHJlZ2lvbkxpc3QucmVnaW9ucyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoUkVHSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldEJhc2VFbmRwb2ludCgpO1xuICAgIGNvbnN0IHVybFNwbGl0cyA9IGJhc2VVcmwuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBhY3RpdmVTaXRlID0gdXJsU3BsaXRzLnBvcCgpO1xuICAgIGNvbnN0IHVybCA9IHVybFNwbGl0cy5qb2luKCcvJykgKyAnL2Jhc2VzaXRlcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDx7IGJhc2VTaXRlczogQmFzZVNpdGVbXSB9Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoc2l0ZUxpc3QgPT4ge1xuICAgICAgICAgIHJldHVybiBzaXRlTGlzdC5iYXNlU2l0ZXMuZmluZChzaXRlID0+IHNpdGUudWlkID09PSBhY3RpdmVTaXRlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==