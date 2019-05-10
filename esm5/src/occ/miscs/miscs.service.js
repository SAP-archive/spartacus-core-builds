/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../services/occ-endpoints.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../services/occ-endpoints.service";
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OccMiscsService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    /** @nocollapse */ OccMiscsService.ngInjectableDef = i0.defineInjectable({ factory: function OccMiscsService_Factory() { return new OccMiscsService(i0.inject(i1.HttpClient), i0.inject(i2.OccEndpointsService)); }, token: OccMiscsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvbWlzY3MvbWlzY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztJQUVsRSxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxlQUFlLEdBQUcsUUFBUTs7SUFDMUIsbUJBQW1CLEdBQUcsV0FBVzs7SUFDakMsZ0JBQWdCLEdBQUcsU0FBUzs7SUFDNUIsdUJBQXVCLEdBQUcsVUFBVTs7SUFDcEMsc0JBQXNCLEdBQUcsU0FBUztBQUV4QztJQUlFLHlCQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7SUFFSiwrQ0FBcUI7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDdkUsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztTQUM5RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELDhDQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUN2RSxNQUFNLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDO1NBQzdELENBQUM7YUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsb0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELHVDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQW1CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksY0FBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQ3BFO2FBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRU8seUNBQWU7Ozs7O0lBQXZCLFVBQXdCLGNBQXNCO1FBQzVDLE9BQVUsa0JBQWtCLFNBQUksY0FBYyxTQUFJLGdCQUFrQixDQUFDO0lBQ3ZFLENBQUM7O2dCQS9DRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhCUSxVQUFVO2dCQUtWLG1CQUFtQjs7OzBCQUw1QjtDQThEQyxBQWhERCxJQWdEQztTQTdDWSxlQUFlOzs7Ozs7SUFFeEIsK0JBQXdCOzs7OztJQUN4Qix1Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IEVORFBPSU5UX0NPVU5UUklFUyA9ICdjb3VudHJpZXMnO1xuY29uc3QgRU5EUE9JTlRfVElUTEVTID0gJ3RpdGxlcyc7XG5jb25zdCBFTkRQT0lOVF9DQVJEX1RZUEVTID0gJ2NhcmR0eXBlcyc7XG5jb25zdCBFTkRQT0lOVF9SRUdJT05TID0gJ3JlZ2lvbnMnO1xuY29uc3QgQ09VTlRSSUVTX1RZUEVfU0hJUFBJTkcgPSAnU0hJUFBJTkcnO1xuY29uc3QgQ09VTlRSSUVTX1RZUEVfQklMTElORyA9ICdCSUxMSU5HJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY01pc2NzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8T2NjLkNvdW50cnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX0NPVU5UUklFUyksIHtcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIENPVU5UUklFU19UWVBFX1NISVBQSU5HKSxcbiAgICAgIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8T2NjLkNvdW50cnlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX0NPVU5UUklFUyksIHtcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIENPVU5UUklFU19UWVBFX0JJTExJTkcpLFxuICAgICAgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPE9jYy5UaXRsZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5UaXRsZUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX1RJVExFUykpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRDYXJkVHlwZXMoKTogT2JzZXJ2YWJsZTxPY2MuQ2FyZFR5cGVMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FyZFR5cGVMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChFTkRQT0lOVF9DQVJEX1RZUEVTKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T2NjLlJlZ2lvbkxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5SZWdpb25MaXN0PihcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQodGhpcy5idWlsZFJlZ2lvbnNVcmwoY291bnRyeUlzb0NvZGUpKVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVnaW9uc1VybChjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7RU5EUE9JTlRfQ09VTlRSSUVTfS8ke2NvdW50cnlJc29Db2RlfS8ke0VORFBPSU5UX1JFR0lPTlN9YDtcbiAgfVxufVxuIl19