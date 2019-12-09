/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "@angular/common/http";
export class OccSitesConfigLoader {
    /**
     * @param {?} config
     * @param {?} http
     */
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.endpoint = 'basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))';
    }
    /**
     * @private
     * @return {?}
     */
    get baseEndpoint() {
        return ((this.config.backend.occ.baseUrl || '') + this.config.backend.occ.prefix);
    }
    /**
     * @private
     * @return {?}
     */
    get url() {
        return `${this.baseEndpoint}${this.endpoint}`;
    }
    /**
     * @return {?}
     */
    load() {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return throwError(new Error(`Missing config for OCC backend!`));
        }
        return this.http
            .get(this.url)
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ baseSites }) => baseSites)));
    }
}
OccSitesConfigLoader.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccSitesConfigLoader.ctorParameters = () => [
    { type: OccConfig },
    { type: HttpClient }
];
/** @nocollapse */ OccSitesConfigLoader.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccSitesConfigLoader_Factory() { return new OccSitesConfigLoader(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.HttpClient)); }, token: OccSitesConfigLoader, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccSitesConfigLoader.prototype.endpoint;
    /**
     * @type {?}
     * @protected
     */
    OccSitesConfigLoader.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccSitesConfigLoader.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2NvbmZpZy1sb2FkZXIvb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUlqRCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUFzQixNQUFpQixFQUFZLElBQWdCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRWhELGFBQVEsR0FDekIsNkxBQTZMLENBQUM7SUFIMUgsQ0FBQzs7Ozs7SUFLdkUsSUFBWSxZQUFZO1FBQ3RCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDekUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFBWSxHQUFHO1FBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXpCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLFNBQVM7WUFMVCxVQUFVOzs7Ozs7OztJQVlqQix3Q0FDZ007Ozs7O0lBSHBMLHNDQUEyQjs7Ozs7SUFBRSxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjU2l0ZXNDb25maWdMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcsIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBlbmRwb2ludCA9XG4gICAgJ2Jhc2VzaXRlcz9maWVsZHM9YmFzZVNpdGVzKHVpZCxkZWZhdWx0TGFuZ3VhZ2UoaXNvY29kZSksdXJsRW5jb2RpbmdBdHRyaWJ1dGVzLHVybFBhdHRlcm5zLHN0b3JlcyhjdXJyZW5jaWVzKGlzb2NvZGUpLGRlZmF1bHRDdXJyZW5jeShpc29jb2RlKSxsYW5ndWFnZXMoaXNvY29kZSksZGVmYXVsdExhbmd1YWdlKGlzb2NvZGUpKSknO1xuXG4gIHByaXZhdGUgZ2V0IGJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgKyB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXhcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuYmFzZUVuZHBvaW50fSR7dGhpcy5lbmRwb2ludH1gO1xuICB9XG5cbiAgbG9hZCgpOiBPYnNlcnZhYmxlPEJhc2VTaXRlW10+IHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKGBNaXNzaW5nIGNvbmZpZyBmb3IgT0NDIGJhY2tlbmQhYCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkJhc2VTaXRlcz4odGhpcy51cmwpXG4gICAgICAucGlwZShtYXAoKHsgYmFzZVNpdGVzIH0pID0+IGJhc2VTaXRlcykpO1xuICB9XG59XG4iXX0=