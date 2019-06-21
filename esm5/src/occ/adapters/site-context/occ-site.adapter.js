/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), map((/**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), map((/**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), map((/**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), map((/**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztJQUVyRSxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxnQkFBZ0IsR0FBRyxTQUFTO0FBRWxDO0lBRUUsd0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7OztJQUVKLHNDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pFLElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUks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Ozs7UUFBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxFQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxRQUFRO1lBQ1YsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7O2dCQTNFRixVQUFVOzs7O2dCQXBCRixVQUFVO2dCQWVWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCOztJQW1GekIscUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTNFWSxjQUFjOzs7Ozs7SUFFdkIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBDb3VudHJ5VHlwZSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZSwgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDT1VOVFJZX05PUk1BTElaRVIsXG4gIENVUlJFTkNZX05PUk1BTElaRVIsXG4gIExBTkdVQUdFX05PUk1BTElaRVIsXG4gIFJFR0lPTl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgQ09VTlRSSUVTX0VORFBPSU5UID0gJ2NvdW50cmllcyc7XG5jb25zdCBSRUdJT05TX0VORFBPSU5UID0gJ3JlZ2lvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjU2l0ZUFkYXB0ZXIgaW1wbGVtZW50cyBTaXRlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5MYW5ndWFnZUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdsYW5ndWFnZXMnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAobGFuZ3VhZ2VMaXN0ID0+IGxhbmd1YWdlTGlzdC5sYW5ndWFnZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoTEFOR1VBR0VfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DdXJyZW5jeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KCdjdXJyZW5jaWVzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKGN1cnJlbmN5TGlzdCA9PiBjdXJyZW5jeUxpc3QuY3VycmVuY2llcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDVVJSRU5DWV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICBsZXQgcGFyYW1zO1xuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KENPVU5UUklFU19FTkRQT0lOVCksIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAoY291bnRyeUxpc3QgPT4gY291bnRyeUxpc3QuY291bnRyaWVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENPVU5UUllfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIGNvbnN0IHJlZ2lvbnNFbmRwb2ludCA9IGAke0NPVU5UUklFU19FTkRQT0lOVH0vJHtjb3VudHJ5SXNvQ29kZX0vJHtSRUdJT05TX0VORFBPSU5UfT9maWVsZHM9cmVnaW9ucyhuYW1lLGlzb2NvZGUsaXNvY29kZVNob3J0KWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuUmVnaW9uTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQocmVnaW9uc0VuZHBvaW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAocmVnaW9uTGlzdCA9PiByZWdpb25MaXN0LnJlZ2lvbnMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUkVHSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCk7XG4gICAgY29uc3QgdXJsU3BsaXRzID0gYmFzZVVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGFjdGl2ZVNpdGUgPSB1cmxTcGxpdHMucG9wKCk7XG4gICAgY29uc3QgdXJsID0gdXJsU3BsaXRzLmpvaW4oJy8nKSArICcvYmFzZXNpdGVzJztcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9RlVMTCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PHsgYmFzZVNpdGVzOiBCYXNlU2l0ZVtdIH0+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgbWFwKHNpdGVMaXN0ID0+IHtcbiAgICAgICAgICByZXR1cm4gc2l0ZUxpc3QuYmFzZVNpdGVzLmZpbmQoc2l0ZSA9PiBzaXRlLnVpZCA9PT0gYWN0aXZlU2l0ZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iXX0=