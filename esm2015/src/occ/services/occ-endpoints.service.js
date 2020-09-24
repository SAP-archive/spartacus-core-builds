import { HttpParams } from '@angular/common/http';
import { Injectable, isDevMode, Optional } from '@angular/core';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { HttpParamsURIEncoder } from '../../util/http-params-uri.encoder';
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
            let httpParamsOptions = { encoder: new HttpParamsURIEncoder() };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sbUJBQW1CO0lBVTlCLFlBQ1UsTUFBaUIsRUFDTCxlQUFnQztRQUQ1QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0wsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRXBELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBaEJELElBQVksY0FBYzs7UUFDeEIsT0FBTyxPQUNMLElBQUks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QUFDLENBQUMsY0FBYztZQUNoQixDQUFDLENBQUMsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFHLGFBQWEsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7OztZQWxKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLFNBQVM7WUFIVCxlQUFlLHVCQXFCbkIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgSHR0cFBhcmFtc1VSSUVuY29kZXIgfSBmcm9tICcuLi8uLi91dGlsL2h0dHAtcGFyYW1zLXVyaS5lbmNvZGVyJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IERFRkFVTFRfU0NPUEUgfSBmcm9tICcuLi9vY2MtbW9kZWxzL29jYy1lbmRwb2ludHMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRW5kcG9pbnRzU2VydmljZSB7XG4gIHByaXZhdGUgX2FjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgYWN0aXZlQmFzZVNpdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fYWN0aXZlQmFzZVNpdGUgPz9cbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRClcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIGlmICh0aGlzLmJhc2VTaXRlU2VydmljZSkge1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiAodGhpcy5fYWN0aXZlQmFzZVNpdGUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuZCBlbmRwb2ludCBzdGFydGluZyBmcm9tIHRoZSBPQ0MgYmFzZVVybCAobm8gYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldFJhd0VuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWc/LmJhY2tlbmQ/Lm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50cz8uW2VuZHBvaW50XTtcblxuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBiYXNlIE9DQyBlbmRwb2ludCAoYmFzZVVybCArIHByZWZpeCArIGJhc2VTaXRlKVxuICAgKi9cbiAgZ2V0QmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZz8uYmFja2VuZD8ub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPQ0MgZW5kcG9pbnQgaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlRW5kcG9pbnQoKSArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICogQHBhcmFtIHVybFBhcmFtcyAgVVJMIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBnZXRVcmwoXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICB1cmxQYXJhbXM/OiBvYmplY3QsXG4gICAgcXVlcnlQYXJhbXM/OiBvYmplY3QsXG4gICAgc2NvcGU/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBlbmRwb2ludCA9IHRoaXMuZ2V0RW5kcG9pbnRGb3JTY29wZShlbmRwb2ludCwgc2NvcGUpO1xuXG4gICAgaWYgKHVybFBhcmFtcykge1xuICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdXJsUGFyYW1zW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBlbmRwb2ludCA9IER5bmFtaWNUZW1wbGF0ZS5yZXNvbHZlKGVuZHBvaW50LCB1cmxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgbGV0IGh0dHBQYXJhbXNPcHRpb25zID0geyBlbmNvZGVyOiBuZXcgSHR0cFBhcmFtc1VSSUVuY29kZXIoKSB9O1xuXG4gICAgICBpZiAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQ7XG4gICAgICAgIFtlbmRwb2ludCwgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnRdID0gZW5kcG9pbnQuc3BsaXQoJz8nKTtcblxuICAgICAgICBodHRwUGFyYW1zT3B0aW9ucyA9IHtcbiAgICAgICAgICAuLi5odHRwUGFyYW1zT3B0aW9ucyxcbiAgICAgICAgICAuLi57IGZyb21TdHJpbmc6IHF1ZXJ5UGFyYW1zRnJvbUVuZHBvaW50IH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoaHR0cFBhcmFtc09wdGlvbnMpO1xuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZHBvaW50ICs9ICc/JyArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQ6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50c0NvbmZpZyA9IHRoaXMuY29uZmlnLmJhY2tlbmQ/Lm9jYz8uZW5kcG9pbnRzO1xuICAgIGNvbnN0IGVuZHBvaW50Q29uZmlnID0gZW5kcG9pbnRzQ29uZmlnW2VuZHBvaW50XTtcblxuICAgIGlmIChzY29wZSkge1xuICAgICAgaWYgKGVuZHBvaW50Q29uZmlnPy5bc2NvcGVdKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZz8uW3Njb3BlXTtcbiAgICAgIH1cbiAgICAgIGlmIChzY29wZSA9PT0gREVGQVVMVF9TQ09QRSAmJiB0eXBlb2YgZW5kcG9pbnRDb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZztcbiAgICAgIH1cbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYCR7ZW5kcG9pbnR9IGVuZHBvaW50IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBmb3Igc2NvcGUgXCIke3Njb3BlfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAodHlwZW9mIGVuZHBvaW50Q29uZmlnID09PSAnc3RyaW5nJ1xuICAgICAgICA/IGVuZHBvaW50Q29uZmlnXG4gICAgICAgIDogZW5kcG9pbnRDb25maWc/LltERUZBVUxUX1NDT1BFXSkgfHwgZW5kcG9pbnRcbiAgICApO1xuICB9XG59XG4iXX0=