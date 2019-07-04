/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXpFLG9DQUVDOzs7O0FBRUQsNENBRUM7OztJQURDLDZDQUE2Qjs7QUFHL0I7SUFDOEMsb0RBQW9CO0lBT2hFLGtDQUFvQixpQkFBMkM7UUFBL0QsWUFDRSxpQkFBTyxTQUVSO1FBSG1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFFN0QsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOztJQUNqRixDQUFDO0lBUEQsc0JBQUksd0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7Ozs7SUFPRCx3Q0FBSzs7OztJQUFMLFVBQU0sR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztnQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2dCQUNyRCxNQUFNLEdBQUcsbUJBQUEsaUJBQU0sS0FBSyxZQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBMEI7WUFDdkUsSUFBSSxDQUFDLCtCQUErQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxpQkFBTSxLQUFLLFlBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELDhEQUEyQjs7OztJQUEzQixVQUNFLEdBQVc7O1lBRUwsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQy9CLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7O1lBQ0ssTUFBTSxHQUFHLEVBQUU7O1lBRWIsT0FBTyxHQUFHLENBQUM7O1lBQ1gsU0FBUyxHQUFHLENBQUM7UUFDakIsT0FDRSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU07WUFDM0MsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQzNCOztnQkFDTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs7Z0JBQy9DLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUVwRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQUVPLGtFQUErQjs7Ozs7O0lBQXZDLFVBQ0UsT0FBK0IsRUFDL0IsTUFBc0I7UUFFdEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw0Q0FBUzs7OztJQUFULFVBQVUsSUFBNEI7O1lBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDOztZQUNuRCxHQUFHLEdBQUcsaUJBQU0sU0FBUyxZQUFDLElBQUksQ0FBQzs7WUFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1FBQ2hFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsa0VBQStCOzs7O0lBQS9CLFVBQ0UsT0FBK0I7UUFFL0IsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVPLDhEQUEyQjs7Ozs7O0lBQW5DLFVBQW9DLEdBQVcsRUFBRSxNQUFzQjtRQUF2RSxpQkFVQzs7WUFUTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCO2FBQ2hELEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDUixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDOztnQkFuRkYsVUFBVTs7OztnQkFWRix3QkFBd0I7O0lBOEZqQywrQkFBQztDQUFBLEFBcEZELENBQzhDLG9CQUFvQixHQW1GakU7U0FuRlksd0JBQXdCOzs7Ozs7SUFDbkMseURBQWlEOzs7OztJQU1yQyxxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0VXJsU2VyaWFsaXplciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1WYWx1ZXNNYXAge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQgZXh0ZW5kcyBVcmxUcmVlIHtcbiAgc2l0ZUNvbnRleHQ/OiBQYXJhbVZhbHVlc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciBleHRlbmRzIERlZmF1bHRVcmxTZXJpYWxpemVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxFbmNvZGluZ1BhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXG4gIGdldCBoYXNDb250ZXh0SW5Sb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTtcbiAgfVxuXG4gIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGV4dEluUm91dGVzKSB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHN1cGVyLnBhcnNlKHVybFdpdGhQYXJhbXMudXJsKSBhcyBVcmxUcmVlV2l0aFNpdGVDb250ZXh0O1xuICAgICAgdGhpcy51cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHBhcnNlZCwgdXJsV2l0aFBhcmFtcy5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybDogc3RyaW5nXG4gICk6IHsgdXJsOiBzdHJpbmc7IHBhcmFtczogUGFyYW1WYWx1ZXNNYXAgfSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnKSB7XG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGxldCBwYXJhbUlkID0gMDtcbiAgICBsZXQgc2VnbWVudElkID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBwYXJhbUlkIDwgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoICYmXG4gICAgICBzZWdtZW50SWQgPCBzZWdtZW50cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzW3BhcmFtSWRdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFBhcmFtVmFsdWVzKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlcy5pbmNsdWRlcyhzZWdtZW50c1tzZWdtZW50SWRdKSkge1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHNlZ21lbnRzW3NlZ21lbnRJZF07XG4gICAgICAgIHNlZ21lbnRJZCsrO1xuICAgICAgfVxuICAgICAgcGFyYW1JZCsrO1xuICAgIH1cblxuICAgIHVybCA9IHNlZ21lbnRzLnNsaWNlKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHsgdXJsLCBwYXJhbXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0LFxuICAgIHBhcmFtczogUGFyYW1WYWx1ZXNNYXBcbiAgKSB7XG4gICAgdXJsVHJlZS5zaXRlQ29udGV4dCA9IHBhcmFtcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModHJlZSk7XG4gICAgY29uc3QgdXJsID0gc3VwZXIuc2VyaWFsaXplKHRyZWUpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gIH1cblxuICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHRcbiAgKTogUGFyYW1WYWx1ZXNNYXAge1xuICAgIHJldHVybiB1cmxUcmVlLnNpdGVDb250ZXh0ID8gdXJsVHJlZS5zaXRlQ29udGV4dCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1WYWx1ZXNNYXApIHtcbiAgICBjb25zdCBjb250ZXh0Um91dGVQYXJ0ID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgIC5tYXAocGFyYW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgID8gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgIDogdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRWYWx1ZShwYXJhbSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJy8nKTtcblxuICAgIHJldHVybiBjb250ZXh0Um91dGVQYXJ0ICsgdXJsO1xuICB9XG59XG4iXX0=