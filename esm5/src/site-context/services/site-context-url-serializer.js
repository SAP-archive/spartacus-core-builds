/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { SiteContextParamsService } from '../facade/site-context-params.service';
import { SiteContextConfig } from '../config/site-context-config';
/**
 * @record
 */
export function ParamValuesMap() { }
/**
 * @record
 */
export function UrlTreeWithSiteContext() { }
if (false) {
    /** @type {?|undefined} */
    UrlTreeWithSiteContext.prototype.siteContext;
}
var SiteContextUrlSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(SiteContextUrlSerializer, _super);
    function SiteContextUrlSerializer(siteContextParams, config) {
        var _this = _super.call(this) || this;
        _this.siteContextParams = siteContextParams;
        _this.config = config;
        _this.urlEncodingParameters =
            _this.config.siteContext.urlEncodingParameters || [];
        return _this;
    }
    Object.defineProperty(SiteContextUrlSerializer.prototype, "hasContextInRoutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.urlEncodingParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.parse = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.hasContextInRoutes) {
            /** @type {?} */
            var urlWithParams = this.urlExtractContextParameters(url);
            /** @type {?} */
            var parsed = (/** @type {?} */ (_super.prototype.parse.call(this, urlWithParams.url)));
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return _super.prototype.parse.call(this, url);
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlExtractContextParameters = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var segments = url.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var paramId = 0;
        /** @type {?} */
        var segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            /** @type {?} */
            var paramName = this.urlEncodingParameters[paramId];
            /** @type {?} */
            var paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.includes(segments[segmentId])) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/');
        return { url: url, params: params };
    };
    /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlTreeIncludeContextParameters = /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    function (urlTree, params) {
        urlTree.siteContext = params;
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.serialize = /**
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        /** @type {?} */
        var params = this.urlTreeExtractContextParameters(tree);
        /** @type {?} */
        var url = _super.prototype.serialize.call(this, tree);
        /** @type {?} */
        var serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    };
    /**
     * @param {?} urlTree
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlTreeExtractContextParameters = /**
     * @param {?} urlTree
     * @return {?}
     */
    function (urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    };
    /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    SiteContextUrlSerializer.prototype.urlIncludeContextParameters = /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    function (url, params) {
        var _this = this;
        /** @type {?} */
        var contextRoutePart = this.urlEncodingParameters
            .map(function (param) {
            return params[param]
                ? params[param]
                : _this.siteContextParams.getValue(param);
        })
            .join('/');
        return contextRoutePart + url;
    };
    SiteContextUrlSerializer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextUrlSerializer.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextConfig }
    ]; };
    return SiteContextUrlSerializer;
}(DefaultUrlSerializer));
export { SiteContextUrlSerializer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.urlEncodingParameters;
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.siteContextParams;
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRWxFLG9DQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDZDQUE2Qjs7QUFHL0I7SUFDOEMsb0RBQW9CO0lBT2hFLGtDQUNVLGlCQUEyQyxFQUMzQyxNQUF5QjtRQUZuQyxZQUlFLGlCQUFPLFNBR1I7UUFOUyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBR2pDLEtBQUksQ0FBQyxxQkFBcUI7WUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDOztJQUN4RCxDQUFDO0lBWEQsc0JBQUksd0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7Ozs7SUFXRCx3Q0FBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztnQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2dCQUNyRCxNQUFNLEdBQUcsbUJBQUEsaUJBQU0sS0FBSyxZQUFDLGFBQWEsQ0FBQyxHQUFHLENB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QkFBd0I7Ozs7OztJQUNuQyx5REFBaUQ7Ozs7O0lBTy9DLHFEQUFtRDs7Ozs7SUFDbkQsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbHVlc01hcCB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsVHJlZVdpdGhTaXRlQ29udGV4dCBleHRlbmRzIFVybFRyZWUge1xuICBzaXRlQ29udGV4dD86IFBhcmFtVmFsdWVzTWFwO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIGV4dGVuZHMgRGVmYXVsdFVybFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHVybEVuY29kaW5nUGFyYW1ldGVyczogc3RyaW5nW107XG5cbiAgZ2V0IGhhc0NvbnRleHRJblJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycyA9XG4gICAgICB0aGlzLmNvbmZpZy5zaXRlQ29udGV4dC51cmxFbmNvZGluZ1BhcmFtZXRlcnMgfHwgW107XG4gIH1cblxuICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQge1xuICAgIGlmICh0aGlzLmhhc0NvbnRleHRJblJvdXRlcykge1xuICAgICAgY29uc3QgdXJsV2l0aFBhcmFtcyA9IHRoaXMudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzdXBlci5wYXJzZSh1cmxXaXRoUGFyYW1zLnVybCkgYXMgVXJsVHJlZVdpdGhTaXRlQ29udGV4dDtcbiAgICAgIHRoaXMudXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhwYXJzZWQsIHVybFdpdGhQYXJhbXMucGFyYW1zKTtcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIHVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmw6IHN0cmluZ1xuICApOiB7IHVybDogc3RyaW5nOyBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwIH0ge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgaWYgKHNlZ21lbnRzWzBdID09PSAnJykge1xuICAgICAgc2VnbWVudHMuc2hpZnQoKTtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICBsZXQgcGFyYW1JZCA9IDA7XG4gICAgbGV0IHNlZ21lbnRJZCA9IDA7XG4gICAgd2hpbGUgKFxuICAgICAgcGFyYW1JZCA8IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCAmJlxuICAgICAgc2VnbWVudElkIDwgc2VnbWVudHMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1twYXJhbUlkXTtcbiAgICAgIGNvbnN0IHBhcmFtVmFsdWVzID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRQYXJhbVZhbHVlcyhwYXJhbU5hbWUpO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZXMuaW5jbHVkZXMoc2VnbWVudHNbc2VnbWVudElkXSkpIHtcbiAgICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBzZWdtZW50c1tzZWdtZW50SWRdO1xuICAgICAgICBzZWdtZW50SWQrKztcbiAgICAgIH1cbiAgICAgIHBhcmFtSWQrKztcbiAgICB9XG5cbiAgICB1cmwgPSBzZWdtZW50cy5zbGljZShPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkuam9pbignLycpO1xuICAgIHJldHVybiB7IHVybCwgcGFyYW1zIH07XG4gIH1cblxuICBwcml2YXRlIHVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCxcbiAgICBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwXG4gICkge1xuICAgIHVybFRyZWUuc2l0ZUNvbnRleHQgPSBwYXJhbXM7XG4gIH1cblxuICBzZXJpYWxpemUodHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy51cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHRyZWUpO1xuICAgIGNvbnN0IHVybCA9IHN1cGVyLnNlcmlhbGl6ZSh0cmVlKTtcbiAgICBjb25zdCBzZXJpYWxpemVkID0gdGhpcy51cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsLCBwYXJhbXMpO1xuICAgIHJldHVybiBzZXJpYWxpemVkO1xuICB9XG5cbiAgdXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0XG4gICk6IFBhcmFtVmFsdWVzTWFwIHtcbiAgICByZXR1cm4gdXJsVHJlZS5zaXRlQ29udGV4dCA/IHVybFRyZWUuc2l0ZUNvbnRleHQgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybDogc3RyaW5nLCBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwKSB7XG4gICAgY29uc3QgY29udGV4dFJvdXRlUGFydCA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICAubWFwKHBhcmFtID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1twYXJhbV1cbiAgICAgICAgICA/IHBhcmFtc1twYXJhbV1cbiAgICAgICAgICA6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0VmFsdWUocGFyYW0pO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcvJyk7XG5cbiAgICByZXR1cm4gY29udGV4dFJvdXRlUGFydCArIHVybDtcbiAgfVxufVxuIl19