/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFakQ7SUFNRSw2QkFDVSxNQUFpQixFQUNMLGVBQWdDO1FBRnRELGlCQVlDO1FBWFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLENBQUMsY0FBYztZQUNqQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNENBQWM7Ozs7O0lBQWQsVUFBZSxRQUFnQjtRQUM3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QSxHQUFHOztvQkFDNUIsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO3dCQUNsQixZQUFVLEdBQUcsWUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckM7eUJBQU07d0JBQ0wsWUFBVSxHQUFHLFlBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjtZQUNILENBQUMsRUFBQyxDQUFDOztnQkFFRyxNQUFNLEdBQUcsWUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLFFBQVEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQzFCO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBbEhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsU0FBUztnQkFGVCxlQUFlLHVCQVluQixRQUFROzs7OEJBaEJiO0NBMkhDLEFBbkhELElBbUhDO1NBaEhZLG1CQUFtQjs7Ozs7O0lBQzlCLDZDQUErQjs7Ozs7SUFHN0IscUNBQXlCOzs7OztJQUN6Qiw4Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER5bmFtaWNUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9keW5hbWljLXRlbXBsYXRlJztcbmltcG9ydCB7IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NFbmRwb2ludHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmFjdGl2ZUJhc2VTaXRlID1cbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBCQVNFX1NJVEVfQ09OVEVYVF9JRCkgfHwgJyc7XG5cbiAgICBpZiAodGhpcy5iYXNlU2l0ZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmFjdGl2ZUJhc2VTaXRlID0gdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbmQgZW5kcG9pbnQgc3RhcnRpbmcgZnJvbSB0aGUgT0NDIGJhc2VVcmwgKG5vIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgRW5kcG9pbnQgc3VmZml4XG4gICAqL1xuICBnZXRSYXdFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kIHx8ICF0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbmRwb2ludCA9IHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLmVuZHBvaW50c1tlbmRwb2ludF07XG5cbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmFzZSBPQ0MgZW5kcG9pbnQgKGJhc2VVcmwgKyBwcmVmaXggKyBiYXNlU2l0ZSlcbiAgICovXG4gIGdldEJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPQ0MgZW5kcG9pbnQgaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlXG4gICAqIEBwYXJhbSBlbmRwb2ludCBFbmRwb2ludCBzdWZmaXhcbiAgICovXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCYXNlRW5kcG9pbnQoKSArIGVuZHBvaW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBxdWFsaWZpZWQgT0NDIFVybCAoaW5jbHVkaW5nIGJhc2VVcmwgYW5kIGJhc2VTaXRlKVxuICAgKiBAcGFyYW0gZW5kcG9pbnQgTmFtZSBvZiB0aGUgT0NDIGVuZHBvaW50IGtleSBjb25maWdcbiAgICogQHBhcmFtIHVybFBhcmFtcyAgVVJMIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIFF1ZXJ5IHBhcmFtZXRlcnNcbiAgICovXG4gIGdldFVybChlbmRwb2ludDogc3RyaW5nLCB1cmxQYXJhbXM/OiBvYmplY3QsIHF1ZXJ5UGFyYW1zPzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzW2VuZHBvaW50XVxuICAgICkge1xuICAgICAgZW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHNbZW5kcG9pbnRdO1xuICAgIH1cblxuICAgIGlmICh1cmxQYXJhbXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB1cmxQYXJhbXNba2V5XSA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmxQYXJhbXNba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIGVuZHBvaW50ID0gRHluYW1pY1RlbXBsYXRlLnJlc29sdmUoZW5kcG9pbnQsIHVybFBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICBsZXQgaHR0cFBhcmFtc09wdGlvbnM7XG5cbiAgICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludDtcbiAgICAgICAgW2VuZHBvaW50LCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludF0gPSBlbmRwb2ludC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGh0dHBQYXJhbXNPcHRpb25zID0geyBmcm9tU3RyaW5nOiBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludCB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKGh0dHBQYXJhbXNPcHRpb25zKTtcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFyYW1zID0gaHR0cFBhcmFtcy50b1N0cmluZygpO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgZW5kcG9pbnQgKz0gJz8nICsgcGFyYW1zO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxufVxuIl19