import { __assign, __decorate, __param, __read } from "tslib";
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
var OccEndpointsService = /** @class */ (function () {
    function OccEndpointsService(config, baseSiteService) {
        var _this = this;
        this.config = config;
        this.baseSiteService = baseSiteService;
        if (this.baseSiteService) {
            this.baseSiteService
                .getActive()
                .subscribe(function (value) { return (_this._activeBaseSite = value); });
        }
    }
    Object.defineProperty(OccEndpointsService.prototype, "activeBaseSite", {
        get: function () {
            var _a;
            return ((_a = this._activeBaseSite) !== null && _a !== void 0 ? _a : getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns and endpoint starting from the OCC baseUrl (no baseSite)
     * @param endpoint Endpoint suffix
     */
    OccEndpointsService.prototype.getRawEndpoint = function (endpoint) {
        var _a, _b, _c;
        if (!((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.backend) === null || _b === void 0 ? void 0 : _b.occ)) {
            return '';
        }
        endpoint = (_c = this.config.backend.occ.endpoints) === null || _c === void 0 ? void 0 : _c[endpoint];
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.config.backend.occ.baseUrl + endpoint;
    };
    /**
     * Returns base OCC endpoint (baseUrl + prefix + baseSite)
     */
    OccEndpointsService.prototype.getBaseEndpoint = function () {
        var _a, _b;
        if (!((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.backend) === null || _b === void 0 ? void 0 : _b.occ)) {
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
        var _a, _b;
        var endpointsConfig = (_b = (_a = this.config.backend) === null || _a === void 0 ? void 0 : _a.occ) === null || _b === void 0 ? void 0 : _b.endpoints;
        var endpointConfig = endpointsConfig[endpoint];
        if (scope) {
            if (endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[scope]) {
                return endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[scope];
            }
            if (scope === DEFAULT_SCOPE && typeof endpointConfig === 'string') {
                return endpointConfig;
            }
            if (isDevMode()) {
                console.warn(endpoint + " endpoint configuration missing for scope \"" + scope + "\"");
            }
        }
        return ((typeof endpointConfig === 'string'
            ? endpointConfig
            : endpointConfig === null || endpointConfig === void 0 ? void 0 : endpointConfig[DEFAULT_SCOPE]) || endpoint);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUtsRTtJQVVFLDZCQUNVLE1BQWlCLEVBQ0wsZUFBZ0M7UUFGdEQsaUJBU0M7UUFSUyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0wsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRXBELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVMsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWhCRCxzQkFBWSwrQ0FBYzthQUExQjs7WUFDRSxPQUFPLE9BQ0wsSUFBSSxDQUFD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aEIsQ0FBQyxDQUFDLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FDakQsQ0FBQztJQUNKLENBQUM7O2dCQXBJaUIsU0FBUztnQkFDWSxlQUFlLHVCQUFuRCxRQUFROzs7SUFaQSxtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQWFHLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FaRixtQkFBbUIsQ0FnSi9COzhCQTdKRDtDQTZKQyxBQWhKRCxJQWdKQztTQWhKWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHluYW1pY1RlbXBsYXRlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2R5bmFtaWMtdGVtcGxhdGUnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuLi9hZGFwdGVycy9jYXJ0L2N1c3RvbS5lbmNvZGVyJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IERFRkFVTFRfU0NPUEUgfSBmcm9tICcuLi9vY2MtbW9kZWxzL29jYy1lbmRwb2ludHMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRW5kcG9pbnRzU2VydmljZSB7XG4gIHByaXZhdGUgX2FjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgYWN0aXZlQmFzZVNpdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fYWN0aXZlQmFzZVNpdGUgPz9cbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRClcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIGlmICh0aGlzLmJhc2VTaXRlU2VydmljZSkge1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiAodGhpcy5fYWN0aXZlQmFzZVNpdGUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuZCBlbmRwb2ludCBzdGFydGluZyBmcm9tIHRoZSBPQ0MgYmFzZVVybCAobm8gYmFzZVNpdGUpXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldFJhd0VuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWc/LmJhY2tlbmQ/Lm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50cz8uW2VuZHBvaW50XTtcblxuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsICsgZW5kcG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBiYXNlIE9DQyBlbmRwb2ludCAoYmFzZVVybCArIHByZWZpeCArIGJhc2VTaXRlKVxuICAgKi9cbiAgZ2V0QmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZz8uYmFja2VuZD8ub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPQ0MgZW5kcG9pbnQgaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlRW5kcG9pbnQoKSArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICogQHBhcmFtIHVybFBhcmFtcyAgVVJMIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBnZXRVcmwoXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICB1cmxQYXJhbXM/OiBvYmplY3QsXG4gICAgcXVlcnlQYXJhbXM/OiBvYmplY3QsXG4gICAgc2NvcGU/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBlbmRwb2ludCA9IHRoaXMuZ2V0RW5kcG9pbnRGb3JTY29wZShlbmRwb2ludCwgc2NvcGUpO1xuXG4gICAgaWYgKHVybFBhcmFtcykge1xuICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdXJsUGFyYW1zW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBlbmRwb2ludCA9IER5bmFtaWNUZW1wbGF0ZS5yZXNvbHZlKGVuZHBvaW50LCB1cmxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgbGV0IGh0dHBQYXJhbXNPcHRpb25zID0geyBlbmNvZGVyOiBuZXcgQ3VzdG9tRW5jb2RlcigpIH07XG5cbiAgICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludDtcbiAgICAgICAgW2VuZHBvaW50LCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludF0gPSBlbmRwb2ludC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGh0dHBQYXJhbXNPcHRpb25zID0ge1xuICAgICAgICAgIC4uLmh0dHBQYXJhbXNPcHRpb25zLFxuICAgICAgICAgIC4uLnsgZnJvbVN0cmluZzogcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyhodHRwUGFyYW1zT3B0aW9ucyk7XG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFyYW1zID0gaHR0cFBhcmFtcy50b1N0cmluZygpO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgZW5kcG9pbnQgKz0gJz8nICsgcGFyYW1zO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW5kcG9pbnRGb3JTY29wZShlbmRwb2ludDogc3RyaW5nLCBzY29wZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnRzQ29uZmlnID0gdGhpcy5jb25maWcuYmFja2VuZD8ub2NjPy5lbmRwb2ludHM7XG4gICAgY29uc3QgZW5kcG9pbnRDb25maWcgPSBlbmRwb2ludHNDb25maWdbZW5kcG9pbnRdO1xuXG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICBpZiAoZW5kcG9pbnRDb25maWc/LltzY29wZV0pIHtcbiAgICAgICAgcmV0dXJuIGVuZHBvaW50Q29uZmlnPy5bc2NvcGVdO1xuICAgICAgfVxuICAgICAgaWYgKHNjb3BlID09PSBERUZBVUxUX1NDT1BFICYmIHR5cGVvZiBlbmRwb2ludENvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVuZHBvaW50Q29uZmlnO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgJHtlbmRwb2ludH0gZW5kcG9pbnQgY29uZmlndXJhdGlvbiBtaXNzaW5nIGZvciBzY29wZSBcIiR7c2NvcGV9XCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0eXBlb2YgZW5kcG9pbnRDb25maWcgPT09ICdzdHJpbmcnXG4gICAgICAgID8gZW5kcG9pbnRDb25maWdcbiAgICAgICAgOiBlbmRwb2ludENvbmZpZz8uW0RFRkFVTFRfU0NPUEVdKSB8fCBlbmRwb2ludFxuICAgICk7XG4gIH1cbn1cbiJdfQ==