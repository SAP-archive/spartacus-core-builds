/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutesConfigLoader } from '../routes-config-loader';
import { UrlParsingService } from './url-parsing.service';
import { removeLeadingSlash, isParam, getParamName } from './path-utils';
var RouteRecognizerService = /** @class */ (function () {
    function RouteRecognizerService(routesConfigLoader, urlParser) {
        this.routesConfigLoader = routesConfigLoader;
        this.urlParser = urlParser;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    RouteRecognizerService.prototype.recognizeByDefaultUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        url = removeLeadingSlash(url); // url will be compared with paths translations which do not have leading slash
        // url will be compared with paths translations which do not have leading slash
        /** @type {?} */
        var routesTranslations = this.defaultRoutesTranslations;
        /** @type {?} */
        var urlSegments = this.urlParser.getPrimarySegments(url);
        /** @type {?} */
        var recognizedNestedRoutes = this.getNestedRoutesRecursive(urlSegments, routesTranslations, []);
        return recognizedNestedRoutes;
    };
    /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    RouteRecognizerService.prototype.getNestedRoutesRecursive = /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    function (remainingUrlSegments, routesTranslations, accResult) {
        if (!routesTranslations) {
            return remainingUrlSegments.length ? null : accResult;
        }
        /** @type {?} */
        var routeNames = Object.keys(routesTranslations);
        /** @type {?} */
        var routeNamesLength = routeNames.length;
        for (var i = 0; i < routeNamesLength; i++) {
            /** @type {?} */
            var routeName = routeNames[i];
            /** @type {?} */
            var routeTranslation = routesTranslations && routesTranslations[routeName];
            /** @type {?} */
            var paths = routeTranslation.paths || [];
            /** @type {?} */
            var pathsLength = paths.length;
            for (var j = 0; j < pathsLength; j++) {
                /** @type {?} */
                var path = paths[j];
                /** @type {?} */
                var pathSegments = this.urlParser.getPrimarySegments(path);
                /** @type {?} */
                var params = this.extractParamsIfPathMatchesUrlPrefix(remainingUrlSegments, pathSegments);
                // if some path is matching, try to recognize remaining segments
                if (params) {
                    /** @type {?} */
                    var result = this.getNestedRoutesRecursive(remainingUrlSegments.slice(pathSegments.length), routeTranslation.children, accResult.concat({ name: routeName, params: params }));
                    // if remaining segments were successfuly matched, return result. otherwise continue loop for other paths and routes
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return remainingUrlSegments.length ? null : accResult;
    };
    /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    RouteRecognizerService.prototype.extractParamsIfPathMatchesUrlPrefix = /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    function (urlSegments, pathSegments) {
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var pathSegmentsLength = pathSegments.length;
        /** @type {?} */
        var urlSegmentsLength = urlSegments.length;
        if (urlSegmentsLength < pathSegmentsLength) {
            return null;
        }
        for (var i = 0; i < pathSegmentsLength; i++) {
            /** @type {?} */
            var pathSegment = pathSegments[i];
            /** @type {?} */
            var urlSegment = urlSegments[i];
            if (isParam(pathSegment)) {
                /** @type {?} */
                var paramName = getParamName(pathSegment);
                params[paramName] = urlSegment;
            }
            else {
                if (pathSegment !== urlSegment) {
                    return null;
                }
            }
        }
        return params;
    };
    Object.defineProperty(RouteRecognizerService.prototype, "defaultRoutesTranslations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.routesConfigLoader.routesConfig.translations
                .default));
        },
        enumerable: true,
        configurable: true
    });
    RouteRecognizerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouteRecognizerService.ctorParameters = function () { return [
        { type: RoutesConfigLoader },
        { type: UrlParsingService }
    ]; };
    return RouteRecognizerService;
}());
export { RouteRecognizerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouteRecognizerService.prototype.routesConfigLoader;
    /**
     * @type {?}
     * @private
     */
    RouteRecognizerService.prototype.urlParser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcmVjb2duaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vcm91dGUtcmVjb2duaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpFO0lBRUUsZ0NBQ1Usa0JBQXNDLEVBQ3RDLFNBQTRCO1FBRDVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7SUFDbkMsQ0FBQzs7Ozs7SUFFSixzREFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBVztRQUMvQixHQUFHLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywrRUFBK0U7OztZQUN4RyxrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCOztZQUNuRCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7O1lBQ3BELHNCQUFzQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FDMUQsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixFQUFFLENBQ0g7UUFFRCxPQUFPLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7O0lBRU8seURBQXdCOzs7Ozs7O0lBQWhDLFVBQ0Usb0JBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxTQUE2QztRQUU3QyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIs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O0lBRS9CLG9EQUE4Qzs7Ozs7SUFDOUMsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZy1sb2FkZXInO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVzVHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyByZW1vdmVMZWFkaW5nU2xhc2gsIGlzUGFyYW0sIGdldFBhcmFtTmFtZSB9IGZyb20gJy4vcGF0aC11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZVJlY29nbml6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlcixcbiAgICBwcml2YXRlIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHJlY29nbml6ZUJ5RGVmYXVsdFVybCh1cmw6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nOyBwYXJhbXM6IG9iamVjdCB9W10ge1xuICAgIHVybCA9IHJlbW92ZUxlYWRpbmdTbGFzaCh1cmwpOyAvLyB1cmwgd2lsbCBiZSBjb21wYXJlZCB3aXRoIHBhdGhzIHRyYW5zbGF0aW9ucyB3aGljaCBkbyBub3QgaGF2ZSBsZWFkaW5nIHNsYXNoXG4gICAgY29uc3Qgcm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5kZWZhdWx0Um91dGVzVHJhbnNsYXRpb25zO1xuICAgIGNvbnN0IHVybFNlZ21lbnRzID0gdGhpcy51cmxQYXJzZXIuZ2V0UHJpbWFyeVNlZ21lbnRzKHVybCk7XG4gICAgY29uc3QgcmVjb2duaXplZE5lc3RlZFJvdXRlcyA9IHRoaXMuZ2V0TmVzdGVkUm91dGVzUmVjdXJzaXZlKFxuICAgICAgdXJsU2VnbWVudHMsXG4gICAgICByb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgICBbXVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplZE5lc3RlZFJvdXRlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmVzdGVkUm91dGVzUmVjdXJzaXZlKFxuICAgIHJlbWFpbmluZ1VybFNlZ21lbnRzOiBzdHJpbmdbXSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgICBhY2NSZXN1bHQ6IHsgbmFtZTogc3RyaW5nOyBwYXJhbXM6IG9iamVjdCB9W11cbiAgKTogeyBuYW1lOiBzdHJpbmc7IHBhcmFtczogb2JqZWN0IH1bXSB7XG4gICAgaWYgKCFyb3V0ZXNUcmFuc2xhdGlvbnMpIHtcbiAgICAgIHJldHVybiByZW1haW5pbmdVcmxTZWdtZW50cy5sZW5ndGggPyBudWxsIDogYWNjUmVzdWx0O1xuICAgIH1cbiAgICBjb25zdCByb3V0ZU5hbWVzID0gT2JqZWN0LmtleXMocm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICBjb25zdCByb3V0ZU5hbWVzTGVuZ3RoID0gcm91dGVOYW1lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlTmFtZXNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm91dGVOYW1lID0gcm91dGVOYW1lc1tpXTtcbiAgICAgIGNvbnN0IHJvdXRlVHJhbnNsYXRpb24gPVxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnMgJiYgcm91dGVzVHJhbnNsYXRpb25zW3JvdXRlTmFtZV07XG4gICAgICBjb25zdCBwYXRocyA9IHJvdXRlVHJhbnNsYXRpb24ucGF0aHMgfHwgW107XG4gICAgICBjb25zdCBwYXRoc0xlbmd0aCA9IHBhdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGF0aHNMZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBwYXRoID0gcGF0aHNbal07XG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyhwYXRoKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5leHRyYWN0UGFyYW1zSWZQYXRoTWF0Y2hlc1VybFByZWZpeChcbiAgICAgICAgICByZW1haW5pbmdVcmxTZWdtZW50cyxcbiAgICAgICAgICBwYXRoU2VnbWVudHNcbiAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgc29tZSBwYXRoIGlzIG1hdGNoaW5nLCB0cnkgdG8gcmVjb2duaXplIHJlbWFpbmluZyBzZWdtZW50c1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXROZXN0ZWRSb3V0ZXNSZWN1cnNpdmUoXG4gICAgICAgICAgICByZW1haW5pbmdVcmxTZWdtZW50cy5zbGljZShwYXRoU2VnbWVudHMubGVuZ3RoKSxcbiAgICAgICAgICAgIHJvdXRlVHJhbnNsYXRpb24uY2hpbGRyZW4sXG4gICAgICAgICAgICBhY2NSZXN1bHQuY29uY2F0KHsgbmFtZTogcm91dGVOYW1lLCBwYXJhbXMgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIGlmIHJlbWFpbmluZyBzZWdtZW50cyB3ZXJlIHN1Y2Nlc3NmdWx5IG1hdGNoZWQsIHJldHVybiByZXN1bHQuIG90aGVyd2lzZSBjb250aW51ZSBsb29wIGZvciBvdGhlciBwYXRocyBhbmQgcm91dGVzXG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVtYWluaW5nVXJsU2VnbWVudHMubGVuZ3RoID8gbnVsbCA6IGFjY1Jlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFBhcmFtc0lmUGF0aE1hdGNoZXNVcmxQcmVmaXgoXG4gICAgdXJsU2VnbWVudHM6IHN0cmluZ1tdLFxuICAgIHBhdGhTZWdtZW50czogc3RyaW5nW11cbiAgKTogb2JqZWN0IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCBwYXRoU2VnbWVudHNMZW5ndGggPSBwYXRoU2VnbWVudHMubGVuZ3RoO1xuICAgIGNvbnN0IHVybFNlZ21lbnRzTGVuZ3RoID0gdXJsU2VnbWVudHMubGVuZ3RoO1xuICAgIGlmICh1cmxTZWdtZW50c0xlbmd0aCA8IHBhdGhTZWdtZW50c0xlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHNMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV07XG4gICAgICBjb25zdCB1cmxTZWdtZW50ID0gdXJsU2VnbWVudHNbaV07XG5cbiAgICAgIGlmIChpc1BhcmFtKHBhdGhTZWdtZW50KSkge1xuICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBnZXRQYXJhbU5hbWUocGF0aFNlZ21lbnQpO1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHVybFNlZ21lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0aFNlZ21lbnQgIT09IHVybFNlZ21lbnQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZGVmYXVsdFJvdXRlc1RyYW5zbGF0aW9ucygpOiBSb3V0ZXNUcmFuc2xhdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zXG4gICAgICAuZGVmYXVsdCBhcyBSb3V0ZXNUcmFuc2xhdGlvbnM7XG4gIH1cbn1cbiJdfQ==