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
export class OccEndpointsService {
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
}
OccEndpointsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccEndpointsService_Factory() { return new OccEndpointsService(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.BaseSiteService, 8)); }, token: OccEndpointsService, providedIn: "root" });
OccEndpointsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccEndpointsService.ctorParameters = () => [
    { type: OccConfig },
    { type: BaseSiteService, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFLbEUsTUFBTSxPQUFPLG1CQUFtQjtJQVU5QixZQUNVLE1BQWlCLEVBQ0wsZUFBZ0M7UUFENUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLFNBQVMsRUFBRTtpQkFDWCxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWhCRCxJQUFZLGNBQWM7O1FBQ3hCLE9BQU8sT0FDTCxJQUFJLENB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Q0FBQyxjQUFjO1lBQ2hCLENBQUMsQ0FBQyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxRQUFRLENBQ2pELENBQUM7SUFDSixDQUFDOzs7O1lBbEpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsU0FBUztZQUhULGVBQWUsdUJBcUJuQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9keW5hbWljLXRlbXBsYXRlJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBDdXN0b21FbmNvZGVyIH0gZnJvbSAnLi4vYWRhcHRlcnMvY2FydC9jdXN0b20uZW5jb2Rlcic7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBERUZBVUxUX1NDT1BFIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MtZW5kcG9pbnRzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0VuZHBvaW50c1NlcnZpY2Uge1xuICBwcml2YXRlIF9hY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IGFjdGl2ZUJhc2VTaXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2FjdGl2ZUJhc2VTaXRlID8/XG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgQkFTRV9TSVRFX0NPTlRFWFRfSUQpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICBpZiAodGhpcy5iYXNlU2l0ZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gKHRoaXMuX2FjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbmQgZW5kcG9pbnQgc3RhcnRpbmcgZnJvbSB0aGUgT0NDIGJhc2VVcmwgKG5vIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRSYXdFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnPy5iYWNrZW5kPy5vY2MpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHM/LltlbmRwb2ludF07XG5cbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmFzZSBPQ0MgZW5kcG9pbnQgKGJhc2VVcmwgKyBwcmVmaXggKyBiYXNlU2l0ZSlcbiAgICovXG4gIGdldEJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWc/LmJhY2tlbmQ/Lm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJykgK1xuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MucHJlZml4ICtcbiAgICAgIHRoaXMuYWN0aXZlQmFzZVNpdGVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT0NDIGVuZHBvaW50IGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZUVuZHBvaW50KCkgKyBlbmRwb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgcXVhbGlmaWVkIE9DQyBVcmwgKGluY2x1ZGluZyBiYXNlVXJsIGFuZCBiYXNlU2l0ZSlcbiAgICogQHBhcmFtIGVuZHBvaW50IE5hbWUgb2YgdGhlIE9DQyBlbmRwb2ludCBrZXkgY29uZmlnXG4gICAqIEBwYXJhbSB1cmxQYXJhbXMgIFVSTCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyBRdWVyeSBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgZ2V0VXJsKFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgdXJsUGFyYW1zPzogb2JqZWN0LFxuICAgIHF1ZXJ5UGFyYW1zPzogb2JqZWN0LFxuICAgIHNjb3BlPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgZW5kcG9pbnQgPSB0aGlzLmdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQsIHNjb3BlKTtcblxuICAgIGlmICh1cmxQYXJhbXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHVybFBhcmFtc1trZXldID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybFBhcmFtc1trZXldKTtcbiAgICAgIH0pO1xuICAgICAgZW5kcG9pbnQgPSBEeW5hbWljVGVtcGxhdGUucmVzb2x2ZShlbmRwb2ludCwgdXJsUGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlQYXJhbXMpIHtcbiAgICAgIGxldCBodHRwUGFyYW1zT3B0aW9ucyA9IHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9O1xuXG4gICAgICBpZiAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQ7XG4gICAgICAgIFtlbmRwb2ludCwgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnRdID0gZW5kcG9pbnQuc3BsaXQoJz8nKTtcblxuICAgICAgICBodHRwUGFyYW1zT3B0aW9ucyA9IHtcbiAgICAgICAgICAuLi5odHRwUGFyYW1zT3B0aW9ucyxcbiAgICAgICAgICAuLi57IGZyb21TdHJpbmc6IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50IH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoaHR0cFBhcmFtc09wdGlvbnMpO1xuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZHBvaW50ICs9ICc/JyArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQ6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50c0NvbmZpZyA9IHRoaXMuY29uZmlnLmJhY2tlbmQ/Lm9jYz8uZW5kcG9pbnRzO1xuICAgIGNvbnN0IGVuZHBvaW50Q29uZmlnID0gZW5kcG9pbnRzQ29uZmlnW2VuZHBvaW50XTtcblxuICAgIGlmIChzY29wZSkge1xuICAgICAgaWYgKGVuZHBvaW50Q29uZmlnPy5bc2NvcGVdKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZz8uW3Njb3BlXTtcbiAgICAgIH1cbiAgICAgIGlmIChzY29wZSA9PT0gREVGQVVMVF9TQ09QRSAmJiB0eXBlb2YgZW5kcG9pbnRDb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZztcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYCR7ZW5kcG9pbnR9IGVuZHBvaW50IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBmb3Igc2NvcGUgXCIke3Njb3BlfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAodHlwZW9mIGVuZHBvaW50Q29uZmlnID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGVuZHBvaW50Q29uZmlnXG4gICAgICAgIDogZW5kcG9pbnRDb25maWc/LltERUZBVUxUX1NDT1BFXSkgfHwgZW5kcG9pbnRcbiAgICApO1xuICB9XG59XG4iXX0=