/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
     * @param scope
     */
    /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param {?} endpoint Name of the OCC endpoint key config
     * @param {?=} urlParams  URL parameters
     * @param {?=} queryParams Query parameters
     * @param {?=} scope
     * @return {?}
     */
    OccEndpointsService.prototype.getUrl = /**
     * Returns a fully qualified OCC Url (including baseUrl and baseSite)
     * @param {?} endpoint Name of the OCC endpoint key config
     * @param {?=} urlParams  URL parameters
     * @param {?=} queryParams Query parameters
     * @param {?=} scope
     * @return {?}
     */
    function (endpoint, urlParams, queryParams, scope) {
        var _a;
        if (scope === void 0) { scope = ''; }
        endpoint = this.getEndpointForScope(endpoint, scope);
        if (urlParams) {
            Object.keys(urlParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                urlParams[key] = encodeURIComponent(urlParams[key]);
            }));
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
    /**
     * @private
     * @param {?} endpoint
     * @param {?} scope
     * @return {?}
     */
    OccEndpointsService.prototype.getEndpointForScope = /**
     * @private
     * @param {?} endpoint
     * @param {?} scope
     * @return {?}
     */
    function (endpoint, scope) {
        /** @type {?} */
        var endpointsConfig = this.config.backend &&
            this.config.backend.occ &&
            this.config.backend.occ.endpoints;
        if (scope) {
            /** @type {?} */
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
    OccEndpointsService.prototype.SCOPE_SUFFIX;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBRWpEO0lBUUUsNkJBQ1UsTUFBaUIsRUFDTCxlQUFnQztRQUZ0RCxpQkFZQztRQVhTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDTCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKckMsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFNeEMsSUFBSSxDQUFDLGNBQWM7WUFDakIsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLFNBQVMsRUFBRTtpQkFDWCxTQUFTOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7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QkFKUSxTQUFTO2dCQUZULGVBQWUsdUJBY25CLFFBQVE7Ozs4QkFsQmI7Q0FrSkMsQUExSUQsSUEwSUM7U0F2SVksbUJBQW1COzs7Ozs7SUFDOUIsNkNBQStCOzs7OztJQUUvQiwyQ0FBMEM7Ozs7O0lBR3hDLHFDQUF5Qjs7Ozs7SUFDekIsOENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9keW5hbWljLXRlbXBsYXRlJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NFbmRwb2ludHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgU0NPUEVfU1VGRklYID0gJ19zY29wZXMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlID1cbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRCkgfHwgJyc7XG5cbiAgICBpZiAodGhpcy5iYXNlU2l0ZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmFjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbmQgZW5kcG9pbnQgc3RhcnRpbmcgZnJvbSB0aGUgT0NDIGJhc2VVcmwgKG5vIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRSYXdFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50c1tlbmRwb2ludF07XG5cbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmFzZSBPQ0MgZW5kcG9pbnQgKGJhc2VVcmwgKyBwcmVmaXggKyBiYXNlU2l0ZSlcbiAgICovXG4gIGdldEJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPQ0MgZW5kcG9pbnQgaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlRW5kcG9pbnQoKSArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICogQHBhcmFtIHVybFBhcmFtcyAgVVJMIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBnZXRVcmwoXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICB1cmxQYXJhbXM/OiBvYmplY3QsXG4gICAgcXVlcnlQYXJhbXM/OiBvYmplY3QsXG4gICAgc2NvcGUgPSAnJ1xuICApOiBzdHJpbmcge1xuICAgIGVuZHBvaW50ID0gdGhpcy5nZXRFbmRwb2ludEZvclNjb3BlKGVuZHBvaW50LCBzY29wZSk7XG5cbiAgICBpZiAodXJsUGFyYW1zKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdXJsUGFyYW1zW2tleV0gPSBlbmNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBlbmRwb2ludCA9IER5bmFtaWNUZW1wbGF0ZS5yZXNvbHZlKGVuZHBvaW50LCB1cmxQYXJhbXMpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgbGV0IGh0dHBQYXJhbXNPcHRpb25zO1xuXG4gICAgICBpZiAoZW5kcG9pbnQuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQ7XG4gICAgICAgIFtlbmRwb2ludCwgcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnRdID0gZW5kcG9pbnQuc3BsaXQoJz8nKTtcblxuICAgICAgICBodHRwUGFyYW1zT3B0aW9ucyA9IHsgZnJvbVN0cmluZzogcXVlcnlQYXJhbXNGcm9tRW5kcG9pbnQgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyhodHRwUGFyYW1zT3B0aW9ucyk7XG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IGh0dHBQYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgIGVuZHBvaW50ICs9ICc/JyArIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVuZHBvaW50Rm9yU2NvcGUoZW5kcG9pbnQ6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnRzQ29uZmlnID1cbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQgJiZcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHM7XG5cbiAgICBpZiAoc2NvcGUpIHtcbiAgICAgIGNvbnN0IGVuZHBvaW50Q29uZmlnID0gZW5kcG9pbnRzQ29uZmlnW2Ake2VuZHBvaW50fSR7dGhpcy5TQ09QRV9TVUZGSVh9YF07XG4gICAgICBpZiAoZW5kcG9pbnRDb25maWcgJiYgZW5kcG9pbnRDb25maWdbc2NvcGVdKSB7XG4gICAgICAgIHJldHVybiBlbmRwb2ludENvbmZpZ1tzY29wZV07XG4gICAgICB9XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGAke2VuZHBvaW50fSBlbmRwb2ludCBjb25maWd1cmF0aW9uIG1pc3NpbmcgZm9yIHNjb3BlIFwiJHtzY29wZX1cImBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kcG9pbnRzQ29uZmlnW2VuZHBvaW50XSB8fCBlbmRwb2ludDtcbiAgfVxufVxuIl19