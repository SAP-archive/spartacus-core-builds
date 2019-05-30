/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { catchError, map } from 'rxjs/operators';
import { ConverterService } from '../../../util/converter.service';
import { COUNTRY_NORMALIZER, REGION_NORMALIZER, } from '../../../site-context/connectors/converters';
import { CURRENCY_NORMALIZER, LANGUAGE_NORMALIZER, } from '../../../site-context/connectors/converters';
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
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (languageList) { return languageList.languages; }), this.converter.pipeableMany(LANGUAGE_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (currencyList) { return currencyList.currencies; }), this.converter.pipeableMany(CURRENCY_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (countryList) { return countryList.countries; }), this.converter.pipeableMany(COUNTRY_NORMALIZER));
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
        var regionsEndpoint = COUNTRIES_ENDPOINT + "/" + countryIsoCode + "/" + REGIONS_ENDPOINT;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (regionList) { return regionList.regions; }), this.converter.pipeableMany(REGION_NORMALIZER));
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
            .pipe(catchError(function (error) { return throwError(error); }), map(function (siteList) {
            return siteList.baseSites.find(function (site) { return site.uid === activeSite; });
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvc2l0ZS1jb250ZXh0L29jYy1zaXRlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNwQixNQUFNLDZDQUE2QyxDQUFDOztJQUUvQyxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxnQkFBZ0IsR0FBRyxTQUFTO0FBRWxDO0lBRUUsd0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7OztJQUVKLHNDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2pFLElBQUksQ0FDSCxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUss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VSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVixPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Z0JBM0VGLFVBQVU7Ozs7Z0JBbEJGLFVBQVU7Z0JBQ1YsbUJBQW1CO2dCQUduQixnQkFBZ0I7O0lBMEZ6QixxQkFBQztDQUFBLEFBNUVELElBNEVDO1NBM0VZLGNBQWM7Ozs7OztJQUV2Qiw4QkFBMEI7Ozs7O0lBQzFCLHNDQUEyQzs7Ozs7SUFDM0MsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVuY3ksIExhbmd1YWdlLCBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvdW50cnksIENvdW50cnlUeXBlLCBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7XG4gIENPVU5UUllfTk9STUFMSVpFUixcbiAgUkVHSU9OX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ1VSUkVOQ1lfTk9STUFMSVpFUixcbiAgTEFOR1VBR0VfTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvY29udmVydGVycyc7XG5cbmNvbnN0IENPVU5UUklFU19FTkRQT0lOVCA9ICdjb3VudHJpZXMnO1xuY29uc3QgUkVHSU9OU19FTkRQT0lOVCA9ICdyZWdpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1NpdGVBZGFwdGVyIGltcGxlbWVudHMgU2l0ZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuTGFuZ3VhZ2VMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnbGFuZ3VhZ2VzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKGxhbmd1YWdlTGlzdCA9PiBsYW5ndWFnZUxpc3QubGFuZ3VhZ2VzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KExBTkdVQUdFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VycmVuY3lMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCgnY3VycmVuY2llcycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChjdXJyZW5jeUxpc3QgPT4gY3VycmVuY3lMaXN0LmN1cnJlbmNpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ1VSUkVOQ1lfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ291bnRyaWVzKHR5cGU/OiBDb3VudHJ5VHlwZSk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgbGV0IHBhcmFtcztcblxuICAgIGlmICh0eXBlKSB7XG4gICAgICBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNvdW50cnlMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChDT1VOVFJJRVNfRU5EUE9JTlQpLCB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKGNvdW50cnlMaXN0ID0+IGNvdW50cnlMaXN0LmNvdW50cmllcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDT1VOVFJZX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICBjb25zdCByZWdpb25zRW5kcG9pbnQgPSBgJHtDT1VOVFJJRVNfRU5EUE9JTlR9LyR7Y291bnRyeUlzb0NvZGV9LyR7UkVHSU9OU19FTkRQT0lOVH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlJlZ2lvbkxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KHJlZ2lvbnNFbmRwb2ludCkpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKHJlZ2lvbkxpc3QgPT4gcmVnaW9uTGlzdC5yZWdpb25zKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFJFR0lPTl9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRCYXNlU2l0ZSgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlPiB7XG4gICAgY29uc3QgYmFzZVVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpO1xuICAgIGNvbnN0IHVybFNwbGl0cyA9IGJhc2VVcmwuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBhY3RpdmVTaXRlID0gdXJsU3BsaXRzLnBvcCgpO1xuICAgIGNvbnN0IHVybCA9IHVybFNwbGl0cy5qb2luKCcvJykgKyAnL2Jhc2VzaXRlcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPUZVTEwnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDx7IGJhc2VTaXRlczogQmFzZVNpdGVbXSB9Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIG1hcChzaXRlTGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNpdGVMaXN0LmJhc2VTaXRlcy5maW5kKHNpdGUgPT4gc2l0ZS51aWQgPT09IGFjdGl2ZVNpdGUpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIl19