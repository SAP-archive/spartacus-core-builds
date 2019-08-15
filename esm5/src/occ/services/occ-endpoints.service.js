/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "../../site-context/facade/base-site.service";
var OccEndpointsService = /** @class */ (function () {
    function OccEndpointsService(config, baseSiteService) {
        var _this = this;
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.activeBaseSite =
            getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID) || '';
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return (_this.activeBaseSite = value); }));
        }
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    OccEndpointsService.prototype.getRawEndpoint = /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    function (endpoint) {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        endpoint = this.config.backend.occ.endpoints[endpoint];
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.config.backend.occ.baseUrl + endpoint;
    };
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     */
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     * @return {?}
     */
    OccEndpointsService.prototype.getBaseEndpoint = /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     * @return {?}
     */
    function () {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        return ((this.config.backend.occ.baseUrl || '') +
            this.config.backend.occ.prefix +
            this.activeBaseSite);
    };
    /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param endpoint Endpoint suffix
     */
    /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    OccEndpointsService.prototype.getEndpoint = /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    function (endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    };
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param endpoint Name of the OCC endpoint key config
     * @param urlParams  URL parameters
     * @param queryParams Query parameters
     */
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param {?} endpoint Name of the OCC endpoint key config
     * @param {?=} urlParams  URL parameters
     * @param {?=} queryParams Query parameters
     * @return {?}
     */
    OccEndpointsService.prototype.getUrl = /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param {?} endpoint Name of the OCC endpoint key config
     * @param {?=} urlParams  URL parameters
     * @param {?=} queryParams Query parameters
     * @return {?}
     */
    function (endpoint, urlParams, queryParams) {
        var _a;
        if (this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints[endpoint]) {
            endpoint = this.config.backend.occ.endpoints[endpoint];
        }
        if (urlParams) {
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            /** @type {?} */
            var httpParamsOptions = void 0;
            if (endpoint.includes('?')) {
                /** @type {?} */
                var queryParamsFromEndpoint = void 0;
                _a = tslib_1.__read(endpoint.split('?'), 2), endpoint = _a[0], queryParamsFromEndpoint = _a[1];
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
            }
            /** @type {?} */
            var httpParams_1 = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams_1 = httpParams_1.delete(key);
                    }
                    else {
                        httpParams_1 = httpParams_1.set(key, value);
                    }
                }
            }));
            /** @type {?} */
            var params = httpParams_1.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    };
    OccEndpointsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OccEndpointsService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BaseSiteService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ OccEndpointsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
    return OccEndpointsService;
}());
export { OccEndpointsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccEndpointsService.prototype.activeBaseSite;
    /**
     * @type {?}
     * @private
     */
    OccEndpointsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    OccEndpointsService.prototype.baseSiteService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFakQ7SUFNRSw2QkFDVSxNQUFpQixFQUNMLGVBQWdDO1FBRnRELGlCQVlDO1FBWFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLENBQUMsY0FBYztZQUNqQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNENBQWM7Ozs7O0lBQWQsVUFBZSxRQUFnQjtRQUM3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QUM7cUJBQ3JDO3lCQUFNO3dCQUNMLFlBQVUsR0FBRyxZQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQzs7Z0JBRUcsTUFBTSxHQUFHLFlBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNqQixRQUFRLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUMxQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQS9HRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFNBQVM7Z0JBRlQsZUFBZSx1QkFZbkIsUUFBUTs7OzhCQWhCYjtDQXdIQyxBQWhIRCxJQWdIQztTQTdHWSxtQkFBbUI7Ozs7OztJQUM5Qiw2Q0FBK0I7Ozs7O0lBRzdCLHFDQUF5Qjs7Ozs7SUFDekIsOENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRW5kcG9pbnRzU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlQmFzZVNpdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hY3RpdmVCYXNlU2l0ZSA9XG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgQkFTRV9TSVRFX0NPTlRFWFRfSUQpIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuYmFzZVNpdGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiAodGhpcy5hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW5kIGVuZHBvaW50IHN0YXJ0aW5nIGZyb20gdGhlIE9DQyBiYXNlVXJsIChubyBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0UmF3RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuYmFja2VuZCB8fCAhdGhpcy5jb25maWcuYmFja2VuZC5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHNbZW5kcG9pbnRdO1xuXG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJhc2UgT0NDIGVuZHBvaW50IChiYXNlVXJsICsgcHJlZml4ICsgYmFzZVNpdGUpXG4gICAqL1xuICBnZXRCYXNlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MucHJlZml4ICtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZVNpdGVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT0NDIGVuZHBvaW50IGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZUVuZHBvaW50KCkgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgcXVhbGlmaWVkIE9DQyBVcmwgKGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IE5hbWUgb2YgdGhlIE9DQyBlbmRwb2ludCBrZXkgY29uZmlnXG4gICAqIEBwYXJhbSB1cmxQYXJhbXMgIFVSTCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyBRdWVyeSBwYXJhbWV0ZXJzXG4gICAqL1xuICBnZXRVcmwoZW5kcG9pbnQ6IHN0cmluZywgdXJsUGFyYW1zPzogb2JqZWN0LCBxdWVyeVBhcmFtcz86IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50c1tlbmRwb2ludF1cbiAgICApIHtcbiAgICAgIGVuZHBvaW50ID0gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzW2VuZHBvaW50XTtcbiAgICB9XG5cbiAgICBpZiAodXJsUGFyYW1zKSB7XG4gICAgICBlbmRwb2ludCA9IER5bmFtaWNUZW1wbGF0ZS5yZXNvbHZlKGVuZHBvaW50LCB1cmxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgbGV0IGh0dHBQYXJhbXNPcHRpb25zO1xuXG4gICAgICBpZiAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQ7XG4gICAgICAgIFtlbmRwb2ludCwgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnRdID0gZW5kcG9pbnQuc3BsaXQoJz8nKTtcblxuICAgICAgICBodHRwUGFyYW1zT3B0aW9ucyA9IHsgZnJvbVN0cmluZzogcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyhodHRwUGFyYW1zT3B0aW9ucyk7XG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZHBvaW50ICs9ICc/JyArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cbn1cbiJdfQ==