/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
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
/** @type {?} */
var UrlSplit = /(^[^#?]*)(.*)/;
// used to split url into path and query/fragment parts
var SiteContextUrlSerializer = /** @class */ (function (_super) {
    tslib_1.__extends(SiteContextUrlSerializer, _super);
    function SiteContextUrlSerializer(siteContextParams) {
        var _this = _super.call(this) || this;
        _this.siteContextParams = siteContextParams;
        _this.urlEncodingParameters = _this.siteContextParams.getUrlEncodingParameters();
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
        var _a = tslib_1.__read(url.match(UrlSplit), 3), urlPart = _a[1], queryPart = _a[2];
        /** @type {?} */
        var segments = urlPart.split('/');
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
        url = segments.slice(Object.keys(params).length).join('/') + queryPart;
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
        { type: SiteContextParamsService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXpFLG9DQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDZDQUE2Qjs7O0lBR3pCLFFBQVEsR0FBRyxlQUFlOztBQUVoQztJQUM4QyxvREFBb0I7SUFPaEUsa0NBQW9CLGlCQUEyQztRQUEvRCxZQUNFLGlCQUFPLFNBRVI7UUFIbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUU3RCxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7O0lBQ2pGLENBQUM7SUFQRCxzQkFBSSx3REFBa0I7Ozs7UUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBOzs7OztJQU9ELHdDQUFLOzs7O0lBQUwsVUFBTSxHQUFXO1FBQ2YsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7O2dCQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3JELE1BQU0sR0FBRyxtQkFBQSxpQkFBTSxLQUFLLFlBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUEwQjtZQUN2RSxJQUFJLENBQUMsK0JBQStCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZ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LHFEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRVcmxTZXJpYWxpemVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbHVlc01hcCB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsVHJlZVdpdGhTaXRlQ29udGV4dCBleHRlbmRzIFVybFRyZWUge1xuICBzaXRlQ29udGV4dD86IFBhcmFtVmFsdWVzTWFwO1xufVxuXG5jb25zdCBVcmxTcGxpdCA9IC8oXlteIz9dKikoLiopLzsgLy8gdXNlZCB0byBzcGxpdCB1cmwgaW50byBwYXRoIGFuZCBxdWVyeS9mcmFnbWVudCBwYXJ0c1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIGV4dGVuZHMgRGVmYXVsdFVybFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHVybEVuY29kaW5nUGFyYW1ldGVyczogc3RyaW5nW107XG5cbiAgZ2V0IGhhc0NvbnRleHRJblJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuICB9XG5cbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IHtcbiAgICBpZiAodGhpcy5oYXNDb250ZXh0SW5Sb3V0ZXMpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhQYXJhbXMgPSB0aGlzLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgICAgY29uc3QgcGFyc2VkID0gc3VwZXIucGFyc2UodXJsV2l0aFBhcmFtcy51cmwpIGFzIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQ7XG4gICAgICB0aGlzLnVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMocGFyc2VkLCB1cmxXaXRoUGFyYW1zLnBhcmFtcyk7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICB1cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsOiBzdHJpbmdcbiAgKTogeyB1cmw6IHN0cmluZzsgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCB9IHtcbiAgICBjb25zdCBbLCB1cmxQYXJ0LCBxdWVyeVBhcnRdID0gdXJsLm1hdGNoKFVybFNwbGl0KTtcblxuICAgIGNvbnN0IHNlZ21lbnRzID0gdXJsUGFydC5zcGxpdCgnLycpO1xuICAgIGlmIChzZWdtZW50c1swXSA9PT0gJycpIHtcbiAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgbGV0IHBhcmFtSWQgPSAwO1xuICAgIGxldCBzZWdtZW50SWQgPSAwO1xuICAgIHdoaWxlIChcbiAgICAgIHBhcmFtSWQgPCB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggJiZcbiAgICAgIHNlZ21lbnRJZCA8IHNlZ21lbnRzLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgcGFyYW1OYW1lID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNbcGFyYW1JZF07XG4gICAgICBjb25zdCBwYXJhbVZhbHVlcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0UGFyYW1WYWx1ZXMocGFyYW1OYW1lKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWVzLmluY2x1ZGVzKHNlZ21lbnRzW3NlZ21lbnRJZF0pKSB7XG4gICAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gc2VnbWVudHNbc2VnbWVudElkXTtcbiAgICAgICAgc2VnbWVudElkKys7XG4gICAgICB9XG4gICAgICBwYXJhbUlkKys7XG4gICAgfVxuXG4gICAgdXJsID0gc2VnbWVudHMuc2xpY2UoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpLmpvaW4oJy8nKSArIHF1ZXJ5UGFydDtcbiAgICByZXR1cm4geyB1cmwsIHBhcmFtcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQsXG4gICAgcGFyYW1zOiBQYXJhbVZhbHVlc01hcFxuICApIHtcbiAgICB1cmxUcmVlLnNpdGVDb250ZXh0ID0gcGFyYW1zO1xuICB9XG5cbiAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMudXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh0cmVlKTtcbiAgICBjb25zdCB1cmwgPSBzdXBlci5zZXJpYWxpemUodHJlZSk7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMudXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxuXG4gIHVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dFxuICApOiBQYXJhbVZhbHVlc01hcCB7XG4gICAgcmV0dXJuIHVybFRyZWUuc2l0ZUNvbnRleHQgPyB1cmxUcmVlLnNpdGVDb250ZXh0IDoge307XG4gIH1cblxuICBwcml2YXRlIHVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmw6IHN0cmluZywgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCkge1xuICAgIGNvbnN0IGNvbnRleHRSb3V0ZVBhcnQgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgPyBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLycpO1xuXG4gICAgcmV0dXJuIGNvbnRleHRSb3V0ZVBhcnQgKyB1cmw7XG4gIH1cbn1cbiJdfQ==