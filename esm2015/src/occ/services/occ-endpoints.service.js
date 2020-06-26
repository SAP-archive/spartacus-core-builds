import { __decorate, __param } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable, isDevMode, Optional } from '@angular/core';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { CustomEncoder } from '../adapters/cart/custom.encoder';
import { OccConfig } from '../config/occ-config';
import { DEFAULT_SCOPE } from '../occ-models/occ-endpoints.model';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "../../site-context/facade/base-site.service";
let OccEndpointsService = class OccEndpointsService {
    constructor(config, baseSiteService) {
        this.config = config;
        this.baseSiteService = baseSiteService;
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe((value) => (this._activeBaseSite = value));
        }
    }
    get activeBaseSite() {
        var _a;
        return ((_a = this._activeBaseSite) !== null && _a !== void 0 ? _a : getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
    }
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    getRawEndpoint(endpoint) {
        var _a, _b, _c;
        if (!((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.backend) === null || _b === void 0 ? void 0 : _b.occ)) {
            return '';
        }
        endpoint = (_c = this.config.backend.occ.endpoints) === null || _c === void 0 ? void 0 : _c[endpoint];
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.config.backend.occ.baseUrl + endpoint;
    }
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     */
    getBaseEndpoint() {
        var _a, _b;
        if (!((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.backend) === null || _b === void 0 ? void 0 : _b.occ)) {
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
    getUrl(endpoint, urlParams, queryParams, scope) {
        endpoint = this.getEndpointForScope(endpoint, scope);
        if (urlParams) {
            Object.keys(urlParams).forEach((key) => {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            });
            endpoint = DynamicTemplate.resolve(endpoint, urlParams);
        }
        if (queryParams) {
            let httpParamsOptions = { encoder: new CustomEncoder() };
            if (endpoint.includes('?')) {
                let queryParamsFromEndpoint;
                [endpoint, queryParamsFromEndpoint] = endpoint.split('?');
                httpParamsOptions = Object.assign(Object.assign({}, httpParamsOptions), { fromString: queryParamsFromEndpoint });
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
        var _a, _b;
        const endpointsConfig = (_b = (_a = this.config.backend) === null || _a === void 0 ? void 0 : _a.occ) === null || _b === void 0 ? void 0 : _b.endpoints;
        const endpointConfig = endpointsConfig[endpoint];
        if (scope) {
            if (endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[scope]) {
                return endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[scope];
            }
            if (scope === DEFAULT_SCOPE && typeof endpointConfig === 'string') {
                return endpointConfig;
            }
            if (isDevMode()) {
                console.warn(`${endpoint} endpoint configuration missing for scope "${scope}"`);
            }
        }
        return ((typeof endpointConfig === 'string'
            ? endpointConfig
            : endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[DEFAULT_SCOPE]) || endpoint);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUtsRSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVU5QixZQUNVLE1BQWlCLEVBQ0wsZUFBZ0M7UUFENUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWhCRCxJQUFZLGNBQWM7O1FBQ3hCLE9BQU8sT0FDTCxJQUFJ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QUMsQ0FBQyxjQUFjO1lBQ2hCLENBQUMsQ0FBQyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQ2pELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFySW1CLFNBQVM7WUFDWSxlQUFlLHVCQUFuRCxRQUFROzs7QUFaQSxtQkFBbUI7SUFIL0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQWFHLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FaRixtQkFBbUIsQ0FnSi9CO1NBaEpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgQ3VzdG9tRW5jb2RlciB9IGZyb20gJy4uL2FkYXB0ZXJzL2NhcnQvY3VzdG9tLmVuY29kZXInO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgREVGQVVMVF9TQ09QRSB9IGZyb20gJy4uL29jYy1tb2RlbHMvb2NjLWVuZHBvaW50cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NFbmRwb2ludHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfYWN0aXZlQmFzZVNpdGU6IHN0cmluZztcblxuICBwcml2YXRlIGdldCBhY3RpdmVCYXNlU2l0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9hY3RpdmVCYXNlU2l0ZSA/P1xuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHRoaXMuYmFzZVNpdGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+ICh0aGlzLl9hY3RpdmVCYXNlU2l0ZSA9IHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW5kIGVuZHBvaW50IHN0YXJ0aW5nIGZyb20gdGhlIE9DQyBiYXNlVXJsIChubyBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0UmF3RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZz8uYmFja2VuZD8ub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVuZHBvaW50ID0gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzPy5bZW5kcG9pbnRdO1xuXG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGJhc2UgT0NDIGVuZHBvaW50IChiYXNlVXJsICsgcHJlZml4ICsgYmFzZVNpdGUpXG4gICAqL1xuICBnZXRCYXNlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnPy5iYWNrZW5kPy5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmwgfHwgJycpICtcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLnByZWZpeCArXG4gICAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9DQyBlbmRwb2ludCBpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGVcbiAgICogQHBhcmFtIGVuZHBvaW50IEVuZHBvaW50IHN1ZmZpeFxuICAgKi9cbiAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEJhc2VFbmRwb2ludCgpICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHF1YWxpZmllZCBPQ0MgVXJsIChpbmNsdWRpbmcgYmFzZVVybCBhbmQgYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBOYW1lIG9mIHRoZSBPQ0MgZW5kcG9pbnQga2V5IGNvbmZpZ1xuICAgKiBAcGFyYW0gdXJsUGFyYW1zICBVUkwgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgUXVlcnkgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIGdldFVybChcbiAgICBlbmRwb2ludDogc3RyaW5nLFxuICAgIHVybFBhcmFtcz86IG9iamVjdCxcbiAgICBxdWVyeVBhcmFtcz86IG9iamVjdCxcbiAgICBzY29wZT86IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGVuZHBvaW50ID0gdGhpcy5nZXRFbmRwb2ludEZvclNjb3BlKGVuZHBvaW50LCBzY29wZSk7XG5cbiAgICBpZiAodXJsUGFyYW1zKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB1cmxQYXJhbXNba2V5XSA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmxQYXJhbXNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIGVuZHBvaW50ID0gRHluYW1pY1RlbXBsYXRlLnJlc29sdmUoZW5kcG9pbnQsIHVybFBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICBsZXQgaHR0cFBhcmFtc09wdGlvbnMgPSB7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfTtcblxuICAgICAgaWYgKGVuZHBvaW50LmluY2x1ZGVzKCc/JykpIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50O1xuICAgICAgICBbZW5kcG9pbnQsIHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50XSA9IGVuZHBvaW50LnNwbGl0KCc/Jyk7XG5cbiAgICAgICAgaHR0cFBhcmFtc09wdGlvbnMgPSB7XG4gICAgICAgICAgLi4uaHR0cFBhcmFtc09wdGlvbnMsXG4gICAgICAgICAgLi4ueyBmcm9tU3RyaW5nOiBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKGh0dHBQYXJhbXNPcHRpb25zKTtcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSBodHRwUGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBlbmRwb2ludCArPSAnPycgKyBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbmRwb2ludEZvclNjb3BlKGVuZHBvaW50OiBzdHJpbmcsIHNjb3BlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludHNDb25maWcgPSB0aGlzLmNvbmZpZy5iYWNrZW5kPy5vY2M/LmVuZHBvaW50cztcbiAgICBjb25zdCBlbmRwb2ludENvbmZpZyA9IGVuZHBvaW50c0NvbmZpZ1tlbmRwb2ludF07XG5cbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgIGlmIChlbmRwb2ludENvbmZpZz8uW3Njb3BlXSkge1xuICAgICAgICByZXR1cm4gZW5kcG9pbnRDb25maWc/LltzY29wZV07XG4gICAgICB9XG4gICAgICBpZiAoc2NvcGUgPT09IERFRkFVTFRfU0NPUEUgJiYgdHlwZW9mIGVuZHBvaW50Q29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZW5kcG9pbnRDb25maWc7XG4gICAgICB9XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGAke2VuZHBvaW50fSBlbmRwb2ludCBjb25maWd1cmF0aW9uIG1pc3NpbmcgZm9yIHNjb3BlIFwiJHtzY29wZX1cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKHR5cGVvZiBlbmRwb2ludENvbmZpZyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBlbmRwb2ludENvbmZpZ1xuICAgICAgICA6IGVuZHBvaW50Q29uZmlnPy5bREVGQVVMVF9TQ09QRV0pIHx8IGVuZHBvaW50XG4gICAgKTtcbiAgfVxufVxuIl19