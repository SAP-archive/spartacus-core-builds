/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class OccEndpointsService {
    /**
     * @param {?} config
     * @param {?} baseSiteService
     */
    constructor(config, baseSiteService) {
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
            value => (this.activeBaseSite = value)));
        }
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    getRawEndpoint(endpoint) {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        endpoint = this.config.backend.occ.endpoints[endpoint];
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.config.backend.occ.baseUrl + endpoint;
    }
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     * @return {?}
     */
    getBaseEndpoint() {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return '';
        }
        return ((this.config.backend.occ.baseUrl || '') +
            this.config.backend.occ.prefix +
            this.activeBaseSite);
    }
    /**
     * Returns an OCC endpoint including baseUrl and baseSite
     * @param {?} endpoint Endpoint suffix
     * @return {?}
     */
    getEndpoint(endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    }
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param {?} endpoint Name of the OCC endpoint key config
     * @param {?=} urlParams  URL parameters
     * @param {?=} queryParams Query parameters
     * @return {?}
     */
    getUrl(endpoint, urlParams, queryParams) {
        if (this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints[endpoint]) {
            endpoint = this.config.backend.occ.endpoints[endpoint];
        }
        if (urlParams) {
            Object.keys(urlParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            }));
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            /** @type {?} */
            let httpParamsOptions;
            if (endpoint.includes('?')) {
                /** @type {?} */
                let queryParamsFromEndpoint;
                [endpoint, queryParamsFromEndpoint] = endpoint.split('?');
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
            }
            /** @type {?} */
            let httpParams = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams = httpParams.delete(key);
                    }
                    else {
                        httpParams = httpParams.set(key, value);
                    }
                }
            }));
            /** @type {?} */
            const params = httpParams.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    }
}
OccEndpointsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OccEndpointsService.ctorParameters = () => [
    { type: OccConfig },
    { type: BaseSiteService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ OccEndpointsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUc5QixZQUNVLE1BQWlCLEVBQ0wsZUFBZ0M7UUFENUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLENBQUMsY0FBYztZQUNqQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsY0FBYyxDQUFDLFFBQWdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFB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QUssU0FBUyxFQUFFO29CQUN2QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7d0JBQ2xCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQzt5QkFBTTt3QkFDTCxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ3pDO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7O2tCQUVHLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ3BDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsUUFBUSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDMUI7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUFsSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsU0FBUztZQUZULGVBQWUsdUJBWW5CLFFBQVE7Ozs7Ozs7O0lBSlgsNkNBQStCOzs7OztJQUc3QixxQ0FBeUI7Ozs7O0lBQ3pCLDhDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2R5bmFtaWMtdGVtcGxhdGUnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0VuZHBvaW50c1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYWN0aXZlQmFzZVNpdGUgPVxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKSB8fCAnJztcblxuICAgIGlmICh0aGlzLmJhc2VTaXRlU2VydmljZSkge1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gKHRoaXMuYWN0aXZlQmFzZVNpdGUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuZCBlbmRwb2ludCBzdGFydGluZyBmcm9tIHRoZSBPQ0MgYmFzZVVybCAobm8gYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldFJhd0VuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVuZHBvaW50ID0gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzW2VuZHBvaW50XTtcblxuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBiYXNlIE9DQyBlbmRwb2ludCAoYmFzZVVybCArIHByZWZpeCArIGJhc2VTaXRlKVxuICAgKi9cbiAgZ2V0QmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuYmFja2VuZCB8fCAhdGhpcy5jb25maWcuYmFja2VuZC5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICtcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLnByZWZpeCArXG4gICAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9DQyBlbmRwb2ludCBpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGVcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEJhc2VFbmRwb2ludCgpICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHF1YWxpZmllZCBPQ0MgVXJsIChpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBOYW1lIG9mIHRoZSBPQ0MgZW5kcG9pbnQga2V5IGNvbmZpZ1xuICAgKiBAcGFyYW0gdXJsUGFyYW1zICBVUkwgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgUXVlcnkgcGFyYW1ldGVyc1xuICAgKi9cbiAgZ2V0VXJsKGVuZHBvaW50OiBzdHJpbmcsIHVybFBhcmFtcz86IG9iamVjdCwgcXVlcnlQYXJhbXM/OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHNbZW5kcG9pbnRdXG4gICAgKSB7XG4gICAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50c1tlbmRwb2ludF07XG4gICAgfVxuXG4gICAgaWYgKHVybFBhcmFtcykge1xuICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIHVybFBhcmFtc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybFBhcmFtc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgZW5kcG9pbnQgPSBEeW5hbWljVGVtcGxhdGUucmVzb2x2ZShlbmRwb2ludCwgdXJsUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgIGxldCBodHRwUGFyYW1zT3B0aW9ucztcblxuICAgICAgaWYgKGVuZHBvaW50LmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50O1xuICAgICAgICBbZW5kcG9pbnQsIHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50XSA9IGVuZHBvaW50LnNwbGl0KCc/Jyk7XG5cbiAgICAgICAgaHR0cFBhcmFtc09wdGlvbnMgPSB7IGZyb21TdHJpbmc6IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50IH07XG4gICAgICB9XG5cbiAgICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoaHR0cFBhcmFtc09wdGlvbnMpO1xuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSBodHRwUGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBlbmRwb2ludCArPSAnPycgKyBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG59XG4iXX0=