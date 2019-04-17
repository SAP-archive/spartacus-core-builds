/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../services/occ-endpoints.service';
/** @type {?} */
var ENDPOINT_COUNTRIES = 'countries';
/** @type {?} */
var ENDPOINT_TITLES = 'titles';
/** @type {?} */
var ENDPOINT_CARD_TYPES = 'cardtypes';
/** @type {?} */
var ENDPOINT_REGIONS = 'regions';
/** @type {?} */
var COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
/** @type {?} */
var COUNTRIES_TYPE_BILLING = 'BILLING';
var OccMiscsService = /** @class */ (function () {
    function OccMiscsService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadDeliveryCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadBillingCountries = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_COUNTRIES), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING),
        })
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_TITLES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @return {?}
     */
    OccMiscsService.prototype.loadCardTypes = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_CARD_TYPES))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.loadRegions = /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return this.http
            .get(this.occEndpoints.getEndpoint(this.buildRegionsUrl(countryIsoCode)))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    OccMiscsService.prototype.buildRegionsUrl = /**
     * @private
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        return ENDPOINT_COUNTRIES + "/" + countryIsoCode + "/" + ENDPOINT_REGIONS;
    };
    OccMiscsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccMiscsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return OccMiscsService;
}());
export { OccMiscsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccMiscsService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccMiscsService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvbWlzY3MvbWlzY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQUVsRSxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxlQUFlLEdBQUcsUUFBUTs7SUFDMUIsbUJBQW1CLEdBQUcsV0FBVzs7SUFDakMsZ0JBQWdCLEdBQUcsU0FBUzs7SUFDNUIsdUJBQXVCLEdBQUcsVUFBVTs7SUFDcEMsc0JBQXNCLEdBQUcsU0FBUztBQUV4QztJQUVFLHlCQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7SUFFSiwrQ0FBcUI7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRSxNQUFNLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDO1NBQzlELENBQUM7YUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsOENBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDbkUsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztTQUM3RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELHVDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxjQUFzQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDcEU7YUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsY0FBc0I7UUFDNUMsT0FBVSxrQkFBa0IsU0FBSSxjQUFjLFNBQUksZ0JBQWtCLENBQUM7SUFDdkUsQ0FBQzs7Z0JBN0NGLFVBQVU7Ozs7Z0JBakJGLFVBQVU7Z0JBUVYsbUJBQW1COztJQXVENUIsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTdDWSxlQUFlOzs7Ozs7SUFFeEIsK0JBQXdCOzs7OztJQUN4Qix1Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENvdW50cnlMaXN0LFxuICBUaXRsZUxpc3QsXG4gIENhcmRUeXBlTGlzdCxcbiAgUmVnaW9uTGlzdCxcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IEVORFBPSU5UX0NPVU5UUklFUyA9ICdjb3VudHJpZXMnO1xuY29uc3QgRU5EUE9JTlRfVElUTEVTID0gJ3RpdGxlcyc7XG5jb25zdCBFTkRQT0lOVF9DQVJEX1RZUEVTID0gJ2NhcmR0eXBlcyc7XG5jb25zdCBFTkRQT0lOVF9SRUdJT05TID0gJ3JlZ2lvbnMnO1xuY29uc3QgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcgPSAnU0hJUFBJTkcnO1xuY29uc3QgQ09VTlRSSUVTX1RZUEVfQklMTElORyA9ICdCSUxMSU5HJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY01pc2NzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENvdW50cnlMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChFTkRQT0lOVF9DT1VOVFJJRVMpLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3R5cGUnLCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyksXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkQmlsbGluZ0NvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb3VudHJ5TGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ09VTlRSSUVTKSwge1xuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgQ09VTlRSSUVTX1RZUEVfQklMTElORyksXG4gICAgICB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUaXRsZUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX1RJVExFUykpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxDYXJkVHlwZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENhcmRUeXBlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfQ0FSRF9UWVBFUykpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbkxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFJlZ2lvbkxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludCh0aGlzLmJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZSkpXG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZWdpb25zVXJsKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtFTkRQT0lOVF9DT1VOVFJJRVN9LyR7Y291bnRyeUlzb0NvZGV9LyR7RU5EUE9JTlRfUkVHSU9OU31gO1xuICB9XG59XG4iXX0=