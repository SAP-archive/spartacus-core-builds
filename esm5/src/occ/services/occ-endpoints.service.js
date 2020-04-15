import { __assign, __decorate, __param, __read } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable, isDevMode, Optional } from '@angular/core';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { CustomEncoder } from '../adapters/cart/custom.encoder';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "../../site-context/facade/base-site.service";
var OccEndpointsService = /** @class */ (function () {
    function OccEndpointsService(config, baseSiteService) {
        var _this = this;
        this.config = config;
        this.baseSiteService = baseSiteService;
        this.SCOPE_SUFFIX = '_scopes';
        this.activeBaseSite =
            getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID) || '';
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe(function (value) { return (_this.activeBaseSite = value); });
        }
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    OccEndpointsService.prototype.getRawEndpoint = function (endpoint) {
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
    OccEndpointsService.prototype.getBaseEndpoint = function () {
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
    OccEndpointsService.prototype.getEndpoint = function (endpoint) {
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
     * @param scope
     */
    OccEndpointsService.prototype.getUrl = function (endpoint, urlParams, queryParams, scope) {
        var _a;
        if (scope === void 0) { scope = ''; }
        endpoint = this.getEndpointForScope(endpoint, scope);
        if (urlParams) {
            Object.keys(urlParams).forEach(function (key) {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            });
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            var httpParamsOptions = { encoder: new CustomEncoder() };
            if (endpoint.includes('?')) {
                var queryParamsFromEndpoint = void 0;
                _a = __read(endpoint.split('?'), 2), endpoint = _a[0], queryParamsFromEndpoint = _a[1];
                httpParamsOptions = __assign(__assign({}, httpParamsOptions), { fromString: queryParamsFromEndpoint });
            }
            var httpParams_1 = new HttpParams(httpParamsOptions);
            Object.keys(queryParams).forEach(function (key) {
                var value = queryParams[key];
                if (value !== undefined) {
                    if (value === null) {
                        httpParams_1 = httpParams_1.delete(key);
                    }
                    else {
                        httpParams_1 = httpParams_1.set(key, value);
                    }
                }
            });
            var params = httpParams_1.toString();
            if (params.length) {
                endpoint += '?' + params;
            }
        }
        return this.getEndpoint(endpoint);
    };
    OccEndpointsService.prototype.getEndpointForScope = function (endpoint, scope) {
        var endpointsConfig = this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints;
        if (scope) {
            var endpointConfig = endpointsConfig["" + endpoint + this.SCOPE_SUFFIX];
            if (endpointConfig && endpointConfig[scope]) {
                return endpointConfig[scope];
            }
            if (isDevMode()) {
                console.warn(endpoint + " endpoint configuration missing for scope \"" + scope + "\"");
            }
        }
        return endpointsConfig[endpoint] || endpoint;
    };
    OccEndpointsService.ctorParameters = function () { return [
        { type: OccConfig },
        { type: BaseSiteService, decorators: [{ type: Optional }] }
    ]; };
    OccEndpointsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
    OccEndpointsService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(1, Optional())
    ], OccEndpointsService);
    return OccEndpointsService;
}());
export { OccEndpointsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBS2pEO0lBS0UsNkJBQ1UsTUFBaUIsRUFDTCxlQUFnQztRQUZ0RCxpQkFZQztRQVhTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDTCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKckMsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFNeEMsSUFBSSxDQUFDLGNBQWM7WUFDakIsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMs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LENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDO0lBQy9DLENBQUM7O2dCQW5JaUIsU0FBUztnQkFDWSxlQUFlLHVCQUFuRCxRQUFROzs7SUFQQSxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQVFHLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FQRixtQkFBbUIsQ0EwSS9COzhCQXRKRDtDQXNKQyxBQTFJRCxJQTBJQztTQTFJWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2R5bmFtaWMtdGVtcGxhdGUnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi9hZGFwdGVycy9jYXJ0L2N1c3RvbS5lbmNvZGVyJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0VuZHBvaW50c1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBTQ09QRV9TVUZGSVggPSAnX3Njb3Blcyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYWN0aXZlQmFzZVNpdGUgPVxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKSB8fCAnJztcblxuICAgIGlmICh0aGlzLmJhc2VTaXRlU2VydmljZSkge1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiAodGhpcy5hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW5kIGVuZHBvaW50IHN0YXJ0aW5nIGZyb20gdGhlIE9DQyBiYXNlVXJsIChubyBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0UmF3RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcuYmFja2VuZCB8fCAhdGhpcy5jb25maWcuYmFja2VuZC5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHNbZW5kcG9pbnRdO1xuXG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJhc2UgT0NDIGVuZHBvaW50IChiYXNlVXJsICsgcHJlZml4ICsgYmFzZVNpdGUpXG4gICAqL1xuICBnZXRCYXNlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MucHJlZml4ICtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZVNpdGVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT0NDIGVuZHBvaW50IGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZUVuZHBvaW50KCkgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgcXVhbGlmaWVkIE9DQyBVcmwgKGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IE5hbWUgb2YgdGhlIE9DQyBlbmRwb2ludCBrZXkgY29uZmlnXG4gICAqIEBwYXJhbSB1cmxQYXJhbXMgIFVSTCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyBRdWVyeSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgZ2V0VXJsKFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgdXJsUGFyYW1zPzogb2JqZWN0LFxuICAgIHF1ZXJ5UGFyYW1zPzogb2JqZWN0LFxuICAgIHNjb3BlID0gJydcbiAgKTogc3RyaW5nIHtcbiAgICBlbmRwb2ludCA9IHRoaXMuZ2V0RW5kcG9pbnRGb3JTY29wZShlbmRwb2ludCwgc2NvcGUpO1xuXG4gICAgaWYgKHVybFBhcmFtcykge1xuICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdXJsUGFyYW1zW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBlbmRwb2ludCA9IER5bmFtaWNUZW1wbGF0ZS5yZXNvbHZlKGVuZHBvaW50LCB1cmxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgbGV0IGh0dHBQYXJhbXNPcHRpb25zID0geyBlbmNvZGVyOiBuZXcgQ3VzdG9tRW5jb2RlcigpIH07XG5cbiAgICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludDtcbiAgICAgICAgW2VuZHBvaW50LCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludF0gPSBlbmRwb2ludC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGh0dHBQYXJhbXNPcHRpb25zID0ge1xuICAgICAgICAgIC4uLmh0dHBQYXJhbXNPcHRpb25zLFxuICAgICAgICAgIC4uLnsgZnJvbVN0cmluZzogcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyhodHRwUGFyYW1zT3B0aW9ucyk7XG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFyYW1zID0gaHR0cFBhcmFtcy50b1N0cmluZygpO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgZW5kcG9pbnQgKz0gJz8nICsgcGFyYW1zO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW5kcG9pbnRGb3JTY29wZShlbmRwb2ludDogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludHNDb25maWcgPVxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZCAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50cztcblxuICAgIGlmIChzY29wZSkge1xuICAgICAgY29uc3QgZW5kcG9pbnRDb25maWcgPSBlbmRwb2ludHNDb25maWdbYCR7ZW5kcG9pbnR9JHt0aGlzLlNDT1BFX1NVRkZJWH1gXTtcbiAgICAgIGlmIChlbmRwb2ludENvbmZpZyAmJiBlbmRwb2ludENvbmZpZ1tzY29wZV0pIHtcbiAgICAgICAgcmV0dXJuIGVuZHBvaW50Q29uZmlnW3Njb3BlXTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYCR7ZW5kcG9pbnR9IGVuZHBvaW50IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBmb3Igc2NvcGUgXCIke3Njb3BlfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbmRwb2ludHNDb25maWdbZW5kcG9pbnRdIHx8IGVuZHBvaW50O1xuICB9XG59XG4iXX0=