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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRWxFLG9DQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDZDQUE2Qjs7QUFHL0I7SUFDOEMsb0RBQW9CO0lBT2hFLGtDQUNVLGlCQUEyQyxFQUMzQyxNQUF5QjtRQUZuQyxZQUlFLGlCQUFPLFNBR1I7UUFOUyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBR2pDLEtBQUksQ0FBQyxxQkFBcUI7WUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDOztJQUN4RCxDQUFDO0lBWEQsc0JBQUksd0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7Ozs7SUFXRCx3Q0FBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztnQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2dCQUNyRCxNQUFNLEdBQUcsbUJBQUEsaUJBQU0sS0FBSyxZQUFDLGFBQWEsQ0FBQyxHQUFHLENB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WSx3QkFBd0I7Ozs7OztJQUNuQyx5REFBaUQ7Ozs7O0lBTy9DLHFEQUFtRDs7Ozs7SUFDbkQsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1WYWx1ZXNNYXAge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQgZXh0ZW5kcyBVcmxUcmVlIHtcbiAgc2l0ZUNvbnRleHQ/OiBQYXJhbVZhbHVlc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciBleHRlbmRzIERlZmF1bHRVcmxTZXJpYWxpemVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxFbmNvZGluZ1BhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXG4gIGdldCBoYXNDb250ZXh0SW5Sb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgdGhpcy5jb25maWcuc2l0ZUNvbnRleHQudXJsRW5jb2RpbmdQYXJhbWV0ZXJzIHx8IFtdO1xuICB9XG5cbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IHtcbiAgICBpZiAodGhpcy5oYXNDb250ZXh0SW5Sb3V0ZXMpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhQYXJhbXMgPSB0aGlzLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgICAgY29uc3QgcGFyc2VkID0gc3VwZXIucGFyc2UodXJsV2l0aFBhcmFtcy51cmwpIGFzIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQ7XG4gICAgICB0aGlzLnVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMocGFyc2VkLCB1cmxXaXRoUGFyYW1zLnBhcmFtcyk7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICB1cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsOiBzdHJpbmdcbiAgKTogeyB1cmw6IHN0cmluZzsgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCB9IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHVybC5zcGxpdCgnLycpO1xuICAgIGlmIChzZWdtZW50c1swXSA9PT0gJycpIHtcbiAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgbGV0IHBhcmFtSWQgPSAwO1xuICAgIGxldCBzZWdtZW50SWQgPSAwO1xuICAgIHdoaWxlIChcbiAgICAgIHBhcmFtSWQgPCB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggJiZcbiAgICAgIHNlZ21lbnRJZCA8IHNlZ21lbnRzLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgcGFyYW1OYW1lID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNbcGFyYW1JZF07XG4gICAgICBjb25zdCBwYXJhbVZhbHVlcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0UGFyYW1WYWx1ZXMocGFyYW1OYW1lKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWVzLmluY2x1ZGVzKHNlZ21lbnRzW3NlZ21lbnRJZF0pKSB7XG4gICAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gc2VnbWVudHNbc2VnbWVudElkXTtcbiAgICAgICAgc2VnbWVudElkKys7XG4gICAgICB9XG4gICAgICBwYXJhbUlkKys7XG4gICAgfVxuXG4gICAgdXJsID0gc2VnbWVudHMuc2xpY2UoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpLmpvaW4oJy8nKTtcbiAgICByZXR1cm4geyB1cmwsIHBhcmFtcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQsXG4gICAgcGFyYW1zOiBQYXJhbVZhbHVlc01hcFxuICApIHtcbiAgICB1cmxUcmVlLnNpdGVDb250ZXh0ID0gcGFyYW1zO1xuICB9XG5cbiAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMudXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh0cmVlKTtcbiAgICBjb25zdCB1cmwgPSBzdXBlci5zZXJpYWxpemUodHJlZSk7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMudXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxuXG4gIHVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dFxuICApOiBQYXJhbVZhbHVlc01hcCB7XG4gICAgcmV0dXJuIHVybFRyZWUuc2l0ZUNvbnRleHQgPyB1cmxUcmVlLnNpdGVDb250ZXh0IDoge307XG4gIH1cblxuICBwcml2YXRlIHVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmw6IHN0cmluZywgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCkge1xuICAgIGNvbnN0IGNvbnRleHRSb3V0ZVBhcnQgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgPyBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLycpO1xuXG4gICAgcmV0dXJuIGNvbnRleHRSb3V0ZVBhcnQgKyB1cmw7XG4gIH1cbn1cbiJdfQ==