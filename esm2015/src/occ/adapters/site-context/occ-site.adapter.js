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
const COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
const REGIONS_ENDPOINT = 'regions';
export class OccSiteAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @return {?}
     */
    loadLanguages() {
        return this.http
            .get(this.occEndpoints.getEndpoint('languages'))
            .pipe(map((/**
         * @param {?} languageList
         * @return {?}
         */
        languageList => languageList.languages)), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCurrencies() {
        return this.http
            .get(this.occEndpoints.getEndpoint('currencies'))
            .pipe(map((/**
         * @param {?} currencyList
         * @return {?}
         */
        currencyList => currencyList.currencies)), this.converter.pipeableMany(CURRENCY_NORMALIZER));
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    loadCountries(type) {
        /** @type {?} */
        let params;
        if (type) {
            params = new HttpParams().set('type', type);
        }
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params,
        })
            .pipe(map((/**
         * @param {?} countryList
         * @return {?}
         */
        countryList => countryList.countries)), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        /** @type {?} */
        const regionsEndpoint = `${COUNTRIES_ENDPOINT}/${countryIsoCode}/${REGIONS_ENDPOINT}?fields=regions(name,isocode,isocodeShort)`;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(map((/**
         * @param {?} regionList
         * @return {?}
         */
        regionList => regionList.regions)), this.converter.pipeableMany(REGION_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadBaseSite() {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getBaseEndpoint();
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
    OccSiteAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccSiteAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztNQUVyRSxrQkFBa0IsR0FBRyxXQUFXOztNQUNoQyxnQkFBZ0IsR0FBRyxTQUFTO0FBR2xDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7O0lBRUosYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFDLEVBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ2pELENBQUM7SUFDTixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFDLEVBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQ2pELENBQUM7SUFDTixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFrQjs7WUFDMUIsTUFBTTtRQUVWLElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdkUsTUFBTTtTQUNQLENBQUM7YUFDRCxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBQyxFQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUNoRCxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsY0FBc0I7O2NBQzFCLGVBQWUsR0FBRyxHQUFHLGtCQUFrQixJQUFJLGNBQWMsSUFBSSxnQkFBZ0IsNENBQTRDO1FBQy9ILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ25FLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLEVBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQy9DLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7O2NBQzdDLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Y0FDOUIsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O2NBQzVCLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVk7O2NBRXhDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsYUFBYTtTQUMxQixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBNEIsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUU7WUFDYixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7O1lBdEVGLFVBQVU7Ozs7WUFwQkYsVUFBVTtZQWVWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFVckIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBDb3VudHJ5VHlwZSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZSwgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDT1VOVFJZX05PUk1BTElaRVIsXG4gIENVUlJFTkNZX05PUk1BTElaRVIsXG4gIExBTkdVQUdFX05PUk1BTElaRVIsXG4gIFJFR0lPTl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgQ09VTlRSSUVTX0VORFBPSU5UID0gJ2NvdW50cmllcyc7XG5jb25zdCBSRUdJT05TX0VORFBPSU5UID0gJ3JlZ2lvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU2l0ZUFkYXB0ZXIgaW1wbGVtZW50cyBTaXRlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5MYW5ndWFnZUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdsYW5ndWFnZXMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2VMaXN0ID0+IGxhbmd1YWdlTGlzdC5sYW5ndWFnZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoTEFOR1VBR0VfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DdXJyZW5jeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdjdXJyZW5jaWVzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGN1cnJlbmN5TGlzdCA9PiBjdXJyZW5jeUxpc3QuY3VycmVuY2llcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDVVJSRU5DWV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICBsZXQgcGFyYW1zO1xuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KENPVU5UUklFU19FTkRQT0lOVCksIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoY291bnRyeUxpc3QgPT4gY291bnRyeUxpc3QuY291bnRyaWVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIGNvbnN0IHJlZ2lvbnNFbmRwb2ludCA9IGAke0NPVU5UUklFU19FTkRQT0lOVH0vJHtjb3VudHJ5SXNvQ29kZX0vJHtSRUdJT05TX0VORFBPSU5UfT9maWVsZHM9cmVnaW9ucyhuYW1lLGlzb2NvZGUsaXNvY29kZVNob3J0KWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuUmVnaW9uTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQocmVnaW9uc0VuZHBvaW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocmVnaW9uTGlzdCA9PiByZWdpb25MaXN0LnJlZ2lvbnMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUkVHSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCk7XG4gICAgY29uc3QgdXJsU3BsaXRzID0gYmFzZVVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGFjdGl2ZVNpdGUgPSB1cmxTcGxpdHMucG9wKCk7XG4gICAgY29uc3QgdXJsID0gdXJsU3BsaXRzLmpvaW4oJy8nKSArICcvYmFzZXNpdGVzJztcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9RlVMTCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PHsgYmFzZVNpdGVzOiBCYXNlU2l0ZVtdIH0+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzaXRlTGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNpdGVMaXN0LmJhc2VTaXRlcy5maW5kKHNpdGUgPT4gc2l0ZS51aWQgPT09IGFjdGl2ZVNpdGUpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIl19