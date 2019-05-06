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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvbWlzY3MvbWlzY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztJQUVsRSxrQkFBa0IsR0FBRyxXQUFXOztJQUNoQyxlQUFlLEdBQUcsUUFBUTs7SUFDMUIsbUJBQW1CLEdBQUcsV0FBVzs7SUFDakMsZ0JBQWdCLEdBQUcsU0FBUzs7SUFDNUIsdUJBQXVCLEdBQUcsVUFBVTs7SUFDcEMsc0JBQXNCLEdBQUcsU0FBUztBQUV4QztJQUlFLHlCQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7SUFFSiwrQ0FBcUI7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRSxNQUFNLEVBQUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDO1NBQzlELENBQUM7YUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsOENBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDbkUsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztTQUM3RCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELHVDQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxjQUFzQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDcEU7YUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7SUFFTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsY0FBc0I7UUFDNUMsT0FBVSxrQkFBa0IsU0FBSSxjQUFjLFNBQUksZ0JBQWtCLENBQUM7SUFDdkUsQ0FBQzs7Z0JBL0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBckJRLFVBQVU7Z0JBVVYsbUJBQW1COzs7MEJBVjVCO0NBbUVDLEFBaERELElBZ0RDO1NBN0NZLGVBQWU7Ozs7OztJQUV4QiwrQkFBd0I7Ozs7O0lBQ3hCLHVDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ2FyZFR5cGVMaXN0LFxuICBDb3VudHJ5TGlzdCxcbiAgUmVnaW9uTGlzdCxcbiAgVGl0bGVMaXN0LFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgRU5EUE9JTlRfQ09VTlRSSUVTID0gJ2NvdW50cmllcyc7XG5jb25zdCBFTkRQT0lOVF9USVRMRVMgPSAndGl0bGVzJztcbmNvbnN0IEVORFBPSU5UX0NBUkRfVFlQRVMgPSAnY2FyZHR5cGVzJztcbmNvbnN0IEVORFBPSU5UX1JFR0lPTlMgPSAncmVnaW9ucyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyA9ICdTSElQUElORyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HID0gJ0JJTExJTkcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjTWlzY3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q291bnRyeUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX0NPVU5UUklFUyksIHtcbiAgICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcygpLnNldCgndHlwZScsIENPVU5UUklFU19UWVBFX1NISVBQSU5HKSxcbiAgICAgIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRCaWxsaW5nQ291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENvdW50cnlMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChFTkRQT0lOVF9DT1VOVFJJRVMpLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3R5cGUnLCBDT1VOVFJJRVNfVFlQRV9CSUxMSU5HKSxcbiAgICAgIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIGxvYWRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFRpdGxlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRU5EUE9JTlRfVElUTEVTKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZENhcmRUeXBlcygpOiBPYnNlcnZhYmxlPENhcmRUeXBlTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q2FyZFR5cGVMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChFTkRQT0lOVF9DQVJEX1RZUEVTKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8UmVnaW9uTGlzdD4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KHRoaXMuYnVpbGRSZWdpb25zVXJsKGNvdW50cnlJc29Db2RlKSlcbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlZ2lvbnNVcmwoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke0VORFBPSU5UX0NPVU5UUklFU30vJHtjb3VudHJ5SXNvQ29kZX0vJHtFTkRQT0lOVF9SRUdJT05TfWA7XG4gIH1cbn1cbiJdfQ==