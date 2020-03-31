import { __decorate, __param } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable, isDevMode, Optional } from '@angular/core';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "../../site-context/facade/base-site.service";
let OccEndpointsService = class OccEndpointsService {
    constructor(config, baseSiteService) {
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.SCOPE_SUFFIX = '_scopes';
        this.activeBaseSite =
            getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID) || '';
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe((value) => (this.activeBaseSite = value));
        }
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
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
     * @param endpoint Endpoint suffix
     */
    getEndpoint(endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    }
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param endpoint Name of the OCC endpoint key config
     * @param urlParams  URL parameters
     * @param queryParams Query parameters
     * @param scope
     */
    getUrl(endpoint, urlParams, queryParams, scope = '') {
        endpoint = this.getEndpointForScope(endpoint, scope);
        if (urlParams) {
            Object.keys(urlParams).forEach((key) => {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            });
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            let httpParamsOptions;
            if (endpoint.includes('?')) {
                let queryParamsFromEndpoint;
                [endpoint, queryParamsFromEndpoint] = endpoint.split('?');
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
            }
            let httpParams = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach((key) => {
                const value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams = httpParams.delete(key);
                    }
                    else {
                        httpParams = httpParams.set(key, value);
                    }
                }
            });
            const params = httpParams.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    }
    getEndpointForScope(endpoint, scope) {
        const endpointsConfig = this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints;
        if (scope) {
            const endpointConfig = endpointsConfig[`${endpoint}${this.SCOPE_SUFFIX}`];
            if (endpointConfig && endpointConfig[scope]) {
                return endpointConfig[scope];
            }
            if (isDevMode()) {
                console.warn(`${endpoint} endpoint configuration missing for scope "${scope}"`);
            }
        }
        return endpointsConfig[endpoint] || endpoint;
    }
};
OccEndpointsService.ctorParameters = () => [
    { type: OccConfig },
    { type: BaseSiteService, decorators: [{ type: Optional }] }
];
OccEndpointsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
OccEndpointsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional())
], OccEndpointsService);
export { OccEndpointsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLakQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFLOUIsWUFDVSxNQUFpQixFQUNMLGVBQWdDO1FBRDVDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDTCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKckMsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFNeEMsSUFBSSxDQUFDLGNBQWM7WUFDakIsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVEOzs7T0FH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QW5ELFFBQVE7OztBQVBBLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBUUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQVBGLG1CQUFtQixDQXVJL0I7U0F2SVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9keW5hbWljLXRlbXBsYXRlJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NFbmRwb2ludHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgU0NPUEVfU1VGRklYID0gJ19zY29wZXMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlID1cbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRCkgfHwgJyc7XG5cbiAgICBpZiAodGhpcy5iYXNlU2l0ZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gKHRoaXMuYWN0aXZlQmFzZVNpdGUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuZCBlbmRwb2ludCBzdGFydGluZyBmcm9tIHRoZSBPQ0MgYmFzZVVybCAobm8gYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldFJhd0VuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVuZHBvaW50ID0gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzW2VuZHBvaW50XTtcblxuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBiYXNlIE9DQyBlbmRwb2ludCAoYmFzZVVybCArIHByZWZpeCArIGJhc2VTaXRlKVxuICAgKi9cbiAgZ2V0QmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuYmFja2VuZCB8fCAhdGhpcy5jb25maWcuYmFja2VuZC5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICtcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLnByZWZpeCArXG4gICAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9DQyBlbmRwb2ludCBpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGVcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEJhc2VFbmRwb2ludCgpICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHF1YWxpZmllZCBPQ0MgVXJsIChpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBOYW1lIG9mIHRoZSBPQ0MgZW5kcG9pbnQga2V5IGNvbmZpZ1xuICAgKiBAcGFyYW0gdXJsUGFyYW1zICBVUkwgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgUXVlcnkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIGdldFVybChcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIHVybFBhcmFtcz86IG9iamVjdCxcbiAgICBxdWVyeVBhcmFtcz86IG9iamVjdCxcbiAgICBzY29wZSA9ICcnXG4gICk6IHN0cmluZyB7XG4gICAgZW5kcG9pbnQgPSB0aGlzLmdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQsIHNjb3BlKTtcblxuICAgIGlmICh1cmxQYXJhbXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHVybFBhcmFtc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybFBhcmFtc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgZW5kcG9pbnQgPSBEeW5hbWljVGVtcGxhdGUucmVzb2x2ZShlbmRwb2ludCwgdXJsUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgIGxldCBodHRwUGFyYW1zT3B0aW9ucztcblxuICAgICAgaWYgKGVuZHBvaW50LmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50O1xuICAgICAgICBbZW5kcG9pbnQsIHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50XSA9IGVuZHBvaW50LnNwbGl0KCc/Jyk7XG5cbiAgICAgICAgaHR0cFBhcmFtc09wdGlvbnMgPSB7IGZyb21TdHJpbmc6IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50IH07XG4gICAgICB9XG5cbiAgICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoaHR0cFBhcmFtc09wdGlvbnMpO1xuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZHBvaW50ICs9ICc/JyArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQ6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnRzQ29uZmlnID1cbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHM7XG5cbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgIGNvbnN0IGVuZHBvaW50Q29uZmlnID0gZW5kcG9pbnRzQ29uZmlnW2Ake2VuZHBvaW50fSR7dGhpcy5TQ09QRV9TVUZGSVh9YF07XG4gICAgICBpZiAoZW5kcG9pbnRDb25maWcgJiYgZW5kcG9pbnRDb25maWdbc2NvcGVdKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZ1tzY29wZV07XG4gICAgICB9XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGAke2VuZHBvaW50fSBlbmRwb2ludCBjb25maWd1cmF0aW9uIG1pc3NpbmcgZm9yIHNjb3BlIFwiJHtzY29wZX1cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kcG9pbnRzQ29uZmlnW2VuZHBvaW50XSB8fCBlbmRwb2ludDtcbiAgfVxufVxuIl19