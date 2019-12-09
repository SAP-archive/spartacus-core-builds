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
        this.endpoint = '/basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2NvbmZpZy1sb2FkZXIvb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUlqRCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUFzQixNQUFpQixFQUFZLElBQWdCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRWhELGFBQVEsR0FDekIsOExBQThMLENBQUM7SUFIM0gsQ0FBQzs7Ozs7SUFLdkUsSUFBWSxZQUFZO1FBQ3RCLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDekUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFBWSxHQUFHO1FBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXpCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLFNBQVM7WUFMVCxVQUFVOzs7Ozs7OztJQVlqQix3Q0FDaU07Ozs7O0lBSHJMLHNDQUEyQjs7Ozs7SUFBRSxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFzZVNpdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjU2l0ZXNDb25maWdMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWcsIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHByb3RlY3RlZCByZWFkb25seSBlbmRwb2ludCA9XG4gICAgJy9iYXNlc2l0ZXM/ZmllbGRzPWJhc2VTaXRlcyh1aWQsZGVmYXVsdExhbmd1YWdlKGlzb2NvZGUpLHVybEVuY29kaW5nQXR0cmlidXRlcyx1cmxQYXR0ZXJucyxzdG9yZXMoY3VycmVuY2llcyhpc29jb2RlKSxkZWZhdWx0Q3VycmVuY3koaXNvY29kZSksbGFuZ3VhZ2VzKGlzb2NvZGUpLGRlZmF1bHRMYW5ndWFnZShpc29jb2RlKSkpJztcblxuICBwcml2YXRlIGdldCBiYXNlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICsgdGhpcy5jb25maWcuYmFja2VuZC5vY2MucHJlZml4XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmJhc2VFbmRwb2ludH0ke3RoaXMuZW5kcG9pbnR9YDtcbiAgfVxuXG4gIGxvYWQoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZVtdPiB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuYmFja2VuZCB8fCAhdGhpcy5jb25maWcuYmFja2VuZC5vY2MpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcihgTWlzc2luZyBjb25maWcgZm9yIE9DQyBiYWNrZW5kIWApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5CYXNlU2l0ZXM+KHRoaXMudXJsKVxuICAgICAgLnBpcGUobWFwKCh7IGJhc2VTaXRlcyB9KSA9PiBiYXNlU2l0ZXMpKTtcbiAgfVxufVxuIl19