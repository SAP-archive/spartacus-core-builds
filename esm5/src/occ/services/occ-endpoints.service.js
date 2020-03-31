import { __decorate, __param, __read } from "tslib";
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
            var httpParamsOptions = void 0;
            if (endpoint.includes('?')) {
                var queryParamsFromEndpoint = void 0;
                _a = __read(endpoint.split('?'), 2), endpoint = _a[0], queryParamsFromEndpoint = _a[1];
                httpParamsOptions = { fromString: queryParamsFromEndpoint };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLakQ7SUFLRSw2QkFDVSxNQUFpQixFQUNMLGVBQWdDO1FBRnRELGlCQVlDO1FBWFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUpyQyxpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQU14QyxJQUFJLENBQUMsY0FBYztZQUNqQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFj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QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBUUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQVBGLG1CQUFtQixDQXVJL0I7OEJBbEpEO0NBa0pDLEFBdklELElBdUlDO1NBdklZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRW5kcG9pbnRzU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlQmFzZVNpdGU6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IFNDT1BFX1NVRkZJWCA9ICdfc2NvcGVzJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5hY3RpdmVCYXNlU2l0ZSA9XG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgQkFTRV9TSVRFX0NPTlRFWFRfSUQpIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuYmFzZVNpdGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+ICh0aGlzLmFjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbmQgZW5kcG9pbnQgc3RhcnRpbmcgZnJvbSB0aGUgT0NDIGJhc2VVcmwgKG5vIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRSYXdFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50c1tlbmRwb2ludF07XG5cbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmFzZSBPQ0MgZW5kcG9pbnQgKGJhc2VVcmwgKyBwcmVmaXggKyBiYXNlU2l0ZSlcbiAgICovXG4gIGdldEJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPQ0MgZW5kcG9pbnQgaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlRW5kcG9pbnQoKSArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICogQHBhcmFtIHVybFBhcmFtcyAgVVJMIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBnZXRVcmwoXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICB1cmxQYXJhbXM/OiBvYmplY3QsXG4gICAgcXVlcnlQYXJhbXM/OiBvYmplY3QsXG4gICAgc2NvcGUgPSAnJ1xuICApOiBzdHJpbmcge1xuICAgIGVuZHBvaW50ID0gdGhpcy5nZXRFbmRwb2ludEZvclNjb3BlKGVuZHBvaW50LCBzY29wZSk7XG5cbiAgICBpZiAodXJsUGFyYW1zKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB1cmxQYXJhbXNba2V5XSA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmxQYXJhbXNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIGVuZHBvaW50ID0gRHluYW1pY1RlbXBsYXRlLnJlc29sdmUoZW5kcG9pbnQsIHVybFBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICBsZXQgaHR0cFBhcmFtc09wdGlvbnM7XG5cbiAgICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludDtcbiAgICAgICAgW2VuZHBvaW50LCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludF0gPSBlbmRwb2ludC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGh0dHBQYXJhbXNPcHRpb25zID0geyBmcm9tU3RyaW5nOiBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludCB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKGh0dHBQYXJhbXNPcHRpb25zKTtcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSBodHRwUGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBlbmRwb2ludCArPSAnPycgKyBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbmRwb2ludEZvclNjb3BlKGVuZHBvaW50OiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50c0NvbmZpZyA9XG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzO1xuXG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICBjb25zdCBlbmRwb2ludENvbmZpZyA9IGVuZHBvaW50c0NvbmZpZ1tgJHtlbmRwb2ludH0ke3RoaXMuU0NPUEVfU1VGRklYfWBdO1xuICAgICAgaWYgKGVuZHBvaW50Q29uZmlnICYmIGVuZHBvaW50Q29uZmlnW3Njb3BlXSkge1xuICAgICAgICByZXR1cm4gZW5kcG9pbnRDb25maWdbc2NvcGVdO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgJHtlbmRwb2ludH0gZW5kcG9pbnQgY29uZmlndXJhdGlvbiBtaXNzaW5nIGZvciBzY29wZSBcIiR7c2NvcGV9XCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZHBvaW50c0NvbmZpZ1tlbmRwb2ludF0gfHwgZW5kcG9pbnQ7XG4gIH1cbn1cbiJdfQ==