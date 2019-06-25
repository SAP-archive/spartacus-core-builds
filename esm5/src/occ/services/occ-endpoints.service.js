/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { HttpParams } from '@angular/common/http';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-service-map';
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
     * @return {?}
     */
    OccEndpointsService.prototype.getBaseEndpoint = /**
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
     * @param {?} endpoint
     * @return {?}
     */
    OccEndpointsService.prototype.getEndpoint = /**
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        if (!endpoint.startsWith('/')) {
            endpoint = '/' + endpoint;
        }
        return this.getBaseEndpoint() + endpoint;
    };
    /**
     * @param {?} endpoint
     * @param {?=} urlParams
     * @param {?=} queryParams
     * @return {?}
     */
    OccEndpointsService.prototype.getUrl = /**
     * @param {?} endpoint
     * @param {?=} urlParams
     * @param {?=} queryParams
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWVuZHBvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7Ozs7QUFFeEY7SUFNRSw2QkFDVSxNQUFpQixFQUNMLGVBQWdDO1FBRnRELGlCQVlDO1FBWFMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNMLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxJQUFJLENBQUMsY0FBYztZQUNqQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZTtpQkFDakIsU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJ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bmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBEeW5hbWljVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZHluYW1pYy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0VuZHBvaW50c1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYWN0aXZlQmFzZVNpdGUgPVxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIEJBU0VfU0lURV9DT05URVhUX0lEKSB8fCAnJztcblxuICAgIGlmICh0aGlzLmJhc2VTaXRlU2VydmljZSkge1xuICAgICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gKHRoaXMuYWN0aXZlQmFzZVNpdGUgPSB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGdldEJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5wcmVmaXggK1xuICAgICAgdGhpcy5hY3RpdmVCYXNlU2l0ZVxuICAgICk7XG4gIH1cblxuICBnZXRFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgZW5kcG9pbnQgPSAnLycgKyBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0QmFzZUVuZHBvaW50KCkgKyBlbmRwb2ludDtcbiAgfVxuXG4gIGdldFVybChlbmRwb2ludDogc3RyaW5nLCB1cmxQYXJhbXM/OiBvYmplY3QsIHF1ZXJ5UGFyYW1zPzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kICYmXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYyAmJlxuICAgICAgdGhpcy5jb25maWcuYmFja2VuZC5vY2MuZW5kcG9pbnRzW2VuZHBvaW50XVxuICAgICkge1xuICAgICAgZW5kcG9pbnQgPSB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5lbmRwb2ludHNbZW5kcG9pbnRdO1xuICAgIH1cblxuICAgIGlmICh1cmxQYXJhbXMpIHtcbiAgICAgIGVuZHBvaW50ID0gRHluYW1pY1RlbXBsYXRlLnJlc29sdmUoZW5kcG9pbnQsIHVybFBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICBsZXQgaHR0cFBhcmFtc09wdGlvbnM7XG5cbiAgICAgIGlmIChlbmRwb2ludC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludDtcbiAgICAgICAgW2VuZHBvaW50LCBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludF0gPSBlbmRwb2ludC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGh0dHBQYXJhbXNPcHRpb25zID0geyBmcm9tU3RyaW5nOiBxdWVyeVBhcmFtc0Zyb21FbmRwb2ludCB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKGh0dHBQYXJhbXNPcHRpb25zKTtcbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFyYW1zID0gaHR0cFBhcmFtcy50b1N0cmluZygpO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgZW5kcG9pbnQgKz0gJz8nICsgcGFyYW1zO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxufVxuIl19