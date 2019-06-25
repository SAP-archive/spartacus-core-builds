/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
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
            (_this.config.context && _this.config.context.urlEncodingParameters) || [];
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
            .map((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            return params[param]
                ? params[param]
                : _this.siteContextParams.getValue(param);
        }))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRWxFLG9DQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDZDQUE2Qjs7QUFHL0I7SUFDOEMsb0RBQW9CO0lBT2hFLGtDQUNVLGlCQUEyQyxFQUMzQyxNQUF5QjtRQUZuQyxZQUlFLGlCQUFPLFNBR1I7UUFOUyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBR2pDLEtBQUksQ0FBQyxxQkFBcUI7WUFDeEIsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFDN0UsQ0FBQztJQVhELHNCQUFJLHdEQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7O0lBV0Qsd0NBQUs7Ozs7SUFBTCxVQUFNLEdBQVc7UUFDZixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDOztnQkFDckQsTUFBTSxHQUFH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QkFBQztDQUFBLEFBeEZELENBQzhDLG9CQUFvQixHQXVGakU7U0F2Rlksd0JBQXdCOzs7Ozs7SUFDbkMseURBQWlEOzs7OztJQU8vQyxxREFBbUQ7Ozs7O0lBQ25ELDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRVcmxTZXJpYWxpemVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtVmFsdWVzTWFwIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IGV4dGVuZHMgVXJsVHJlZSB7XG4gIHNpdGVDb250ZXh0PzogUGFyYW1WYWx1ZXNNYXA7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgZXh0ZW5kcyBEZWZhdWx0VXJsU2VyaWFsaXplciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdXJsRW5jb2RpbmdQYXJhbWV0ZXJzOiBzdHJpbmdbXTtcblxuICBnZXQgaGFzQ29udGV4dEluUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzID1cbiAgICAgICh0aGlzLmNvbmZpZy5jb250ZXh0ICYmIHRoaXMuY29uZmlnLmNvbnRleHQudXJsRW5jb2RpbmdQYXJhbWV0ZXJzKSB8fCBbXTtcbiAgfVxuXG4gIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGV4dEluUm91dGVzKSB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHN1cGVyLnBhcnNlKHVybFdpdGhQYXJhbXMudXJsKSBhcyBVcmxUcmVlV2l0aFNpdGVDb250ZXh0O1xuICAgICAgdGhpcy51cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHBhcnNlZCwgdXJsV2l0aFBhcmFtcy5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybDogc3RyaW5nXG4gICk6IHsgdXJsOiBzdHJpbmc7IHBhcmFtczogUGFyYW1WYWx1ZXNNYXAgfSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnKSB7XG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGxldCBwYXJhbUlkID0gMDtcbiAgICBsZXQgc2VnbWVudElkID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBwYXJhbUlkIDwgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoICYmXG4gICAgICBzZWdtZW50SWQgPCBzZWdtZW50cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzW3BhcmFtSWRdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFBhcmFtVmFsdWVzKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlcy5pbmNsdWRlcyhzZWdtZW50c1tzZWdtZW50SWRdKSkge1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHNlZ21lbnRzW3NlZ21lbnRJZF07XG4gICAgICAgIHNlZ21lbnRJZCsrO1xuICAgICAgfVxuICAgICAgcGFyYW1JZCsrO1xuICAgIH1cblxuICAgIHVybCA9IHNlZ21lbnRzLnNsaWNlKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHsgdXJsLCBwYXJhbXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0LFxuICAgIHBhcmFtczogUGFyYW1WYWx1ZXNNYXBcbiAgKSB7XG4gICAgdXJsVHJlZS5zaXRlQ29udGV4dCA9IHBhcmFtcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModHJlZSk7XG4gICAgY29uc3QgdXJsID0gc3VwZXIuc2VyaWFsaXplKHRyZWUpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gIH1cblxuICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHRcbiAgKTogUGFyYW1WYWx1ZXNNYXAge1xuICAgIHJldHVybiB1cmxUcmVlLnNpdGVDb250ZXh0ID8gdXJsVHJlZS5zaXRlQ29udGV4dCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1WYWx1ZXNNYXApIHtcbiAgICBjb25zdCBjb250ZXh0Um91dGVQYXJ0ID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgIC5tYXAocGFyYW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgID8gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgIDogdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRWYWx1ZShwYXJhbSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJy8nKTtcblxuICAgIHJldHVybiBjb250ZXh0Um91dGVQYXJ0ICsgdXJsO1xuICB9XG59XG4iXX0=