/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConfigurableRoutesService } from '../configurable-routes.service';
import { RouteRecognizerService } from './route-recognizer.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
var UrlTranslationService = /** @class */ (function () {
    function UrlTranslationService(configurableRoutesService, routeRecognizer, urlParser, config) {
        this.configurableRoutesService = configurableRoutesService;
        this.routeRecognizer = routeRecognizer;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    UrlTranslationService.prototype.translate = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        // if options are invalid, return the root url
        if (!this.validateOptions(options)) {
            return this.ROOT_URL;
        }
        if (typeof options.url === 'string') {
            /** @type {?} */
            var recognizedRoute = this.routeRecognizer.recognizeByDefaultUrl(options.url);
            return recognizedRoute ? this.generateUrl(recognizedRoute) : options.url;
        }
        return this.generateUrl(options.route);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options || typeof options !== 'object') {
            this.warn("Incorrect options for translating url. Options have to be an object. Options: ", options);
            return false;
        }
        /** @type {?} */
        var urlDefined = Boolean(options.url) || options.url === '';
        /** @type {?} */
        var routeDefined = Boolean(options.route);
        if (!urlDefined && !routeDefined) {
            this.warn("Incorrect options for translating url. Options must have 'url' string or 'route' array property. Options: ", options);
            return false;
        }
        if (urlDefined && routeDefined) {
            this.warn("Incorrect options for translating url. Options cannot have both 'url' and 'route' property. Options: ", options);
            return false;
        }
        if (urlDefined) {
            return this.validateOptionsUrl(options.url);
        }
        if (routeDefined) {
            return this.validateOptionsRoute(options.route);
        }
        return true;
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptionsUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (typeof url !== 'string') {
            this.warn("Incorrect options for translating url.", "'url' property should be a string. Url: ", url);
            return false;
        }
        return true;
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.validateOptionsRoute = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        if (!Array.isArray(nestedRoutes)) {
            this.warn("Incorrect options for translating url.", "'route' property should be an array. Route: ", nestedRoutes);
            return false;
        }
        /** @type {?} */
        var length = nestedRoutes.length;
        if (!length) {
            this.warn("Incorrect options for translating url.", "'route' array should not be empty. Route: ", nestedRoutes);
            return false;
        }
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var nestedRoute = nestedRoutes[i];
            if (typeof nestedRoute !== 'string' && !nestedRoute.name) {
                this.warn("Incorrect options for translating url.", "'route' array can contain only elements which are string or object with 'name' property. Route: ", nestedRoutes);
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.generateUrl = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        /** @type {?} */
        var standarizedNestedRoutes = this.standarizeNestedRoutes(nestedRoutes);
        // if no routes given, return root url
        if (!standarizedNestedRoutes.length) {
            return this.ROOT_URL;
        }
        var _a = this.splitRoutesNamesAndParams(standarizedNestedRoutes), nestedRoutesNames = _a.nestedRoutesNames, nestedRoutesParams = _a.nestedRoutesParams;
        /** @type {?} */
        var nestedRoutesTranslations = this.configurableRoutesService.getNestedRoutesTranslations(nestedRoutesNames);
        // if no routes translations were configured, return root url:
        if (!nestedRoutesTranslations) {
            return this.ROOT_URL;
        }
        var _b = tslib_1.__read(nestedRoutesTranslations.slice(-1), 1), leafNestedRouteTranslation = _b[0];
        // if leaf route was disabled in config (set to null), return root url:
        if (!leafNestedRouteTranslation.paths) {
            return this.ROOT_URL;
        }
        // find first path for every nested route that can satisfy it's parameters with given parameters
        /** @type {?} */
        var nestedRoutesPaths = this.findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams);
        // if not every nested route had configured path that can be satisfied with given params, return root url
        if (!nestedRoutesPaths) {
            return this.ROOT_URL;
        }
        /** @type {?} */
        var result = this.provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesTranslations.map(function (routTranslation) { return routTranslation.paramsMapping; }));
        result.unshift(''); // ensure absolute path ( leading '' in path array is equvalent to leading '/' in string)
        return result;
    };
    /**
     * Converts all elements to objects
     */
    /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.standarizeNestedRoutes = /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        return (nestedRoutes || []).map(function (route) {
            return typeof route === 'string'
                ? { name: route, params: {} }
                : { name: route.name, params: route.params || {} };
        });
    };
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    UrlTranslationService.prototype.splitRoutesNamesAndParams = /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    function (nestedRoutes) {
        return (nestedRoutes || []).reduce(function (_a, route) {
            var nestedRoutesNames = _a.nestedRoutesNames, nestedRoutesParams = _a.nestedRoutesParams;
            return ({
                nestedRoutesNames: tslib_1.__spread(nestedRoutesNames, [route.name]),
                nestedRoutesParams: tslib_1.__spread(nestedRoutesParams, [route.params]),
            });
        }, { nestedRoutesNames: [], nestedRoutesParams: [] });
    };
    /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    UrlTranslationService.prototype.provideParamsValues = /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    function (nestedRoutesPaths, nestedRoutesParams, nestedRoutesParamsMappings) {
        /** @type {?} */
        var length = nestedRoutesPaths.length;
        /** @type {?} */
        var result = [];
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var path = nestedRoutesPaths[i];
            /** @type {?} */
            var paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            var paramsMapping = nestedRoutesParamsMappings[i];
            /** @type {?} */
            var pathSegments = this.provideParamsValuesForSingleRoute(path, paramsObject, paramsMapping);
            result.push.apply(result, tslib_1.__spread(pathSegments));
        }
        return result;
    };
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.provideParamsValuesForSingleRoute = /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (path, params, paramsMapping) {
        var _this = this;
        return this.urlParser.getPrimarySegments(path).map(function (segment) {
            if (isParam(segment)) {
                /** @type {?} */
                var paramName = getParamName(segment);
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    };
    /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    UrlTranslationService.prototype.findPathsWithFillableParams = /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    function (nestedRoutesTranslations, nestedRoutesParams) {
        /** @type {?} */
        var length = nestedRoutesTranslations.length;
        /** @type {?} */
        var result = [];
        for (var i = 0; i < length; i++) {
            /** @type {?} */
            var routeTranslation = nestedRoutesTranslations[i];
            /** @type {?} */
            var paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            var path = this.findPartialPathWithFillableParams(routeTranslation.paths, paramsObject, routeTranslation.paramsMapping);
            if (path === undefined || path === null) {
                this.warn("No configured path matches all its params to given object. ", "Route translation: ", routeTranslation, "(in nested routes translations list", nestedRoutesTranslations, "). Params object: ", paramsObject, "(in params objects list", nestedRoutesParams, ")");
                return null;
            }
            result.push(path);
        }
        return result;
    };
    // find first path that can fill all its params with values from given object
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.findPartialPathWithFillableParams = 
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    function (paths, params, paramsMapping) {
        var _this = this;
        return paths.find(function (path) {
            return _this.getParams(path).every(function (paramName) {
                /** @type {?} */
                var mappedParamName = _this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName] !== undefined;
            });
        });
    };
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    UrlTranslationService.prototype.getParams = /**
     * @private
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    };
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    UrlTranslationService.prototype.getMappedParamName = /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    function (paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    UrlTranslationService.prototype.warn = /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.production) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    UrlTranslationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UrlTranslationService.ctorParameters = function () { return [
        { type: ConfigurableRoutesService },
        { type: RouteRecognizerService },
        { type: UrlParsingService },
        { type: ServerConfig }
    ]; };
    return UrlTranslationService;
}());
export { UrlTranslationService };
if (false) {
    /** @type {?} */
    UrlTranslationService.prototype.ROOT_URL;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.configurableRoutesService;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.routeRecognizer;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.urlParser;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBT3JEO0lBSUUsK0JBQ1UseUJBQW9ELEVBQ3BELGVBQXVDLEVBQ3ZDLFNBQTRCLEVBQzVCLE1BQW9CO1FBSHBCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFOckIsYUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFPdkIsQ0FBQzs7Ozs7SUFFSix5Q0FBUzs7OztJQUFULFVBQVUsT0FBNEI7UUFDcEMsOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUVELElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTs7Z0JBQzdCLGVBQWUsR0FBRyxJQUFJLENBQUMs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YUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztTQUM5QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLG9DQUFJOzs7OztJQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkExU0YsVUFBVTs7OztnQkFaRix5QkFBeUI7Z0JBQ3pCLHNCQUFzQjtnQkFDdEIsaUJBQWlCO2dCQUNqQixZQUFZOztJQW9UckIsNEJBQUM7Q0FBQSxBQTNTRCxJQTJTQztTQTFTWSxxQkFBcUI7OztJQUNoQyx5Q0FBMEI7Ozs7O0lBR3hCLDBEQUE0RDs7Ozs7SUFDNUQsZ0RBQStDOzs7OztJQUMvQywwQ0FBb0M7Ozs7O0lBQ3BDLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVSZWNvZ25pemVyU2VydmljZSB9IGZyb20gJy4vcm91dGUtcmVjb2duaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVUcmFuc2xhdGlvbiwgUGFyYW1zTWFwcGluZyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lLCBpc1BhcmFtIH0gZnJvbSAnLi9wYXRoLXV0aWxzJztcbmltcG9ydCB7XG4gIFRyYW5zbGF0ZVVybE9wdGlvbnMsXG4gIFRyYW5zbGF0ZVVybE9wdGlvbnNSb3V0ZSxcbiAgVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlT2JqZWN0LFxufSBmcm9tICcuL3RyYW5zbGF0ZS11cmwtb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcmxUcmFuc2xhdGlvblNlcnZpY2Uge1xuICByZWFkb25seSBST09UX1VSTCA9IFsnLyddO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlndXJhYmxlUm91dGVzU2VydmljZTogQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlUmVjb2duaXplcjogUm91dGVSZWNvZ25pemVyU2VydmljZSxcbiAgICBwcml2YXRlIHVybFBhcnNlcjogVXJsUGFyc2luZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZ1xuICApIHt9XG5cbiAgdHJhbnNsYXRlKG9wdGlvbnM6IFRyYW5zbGF0ZVVybE9wdGlvbnMpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgLy8gaWYgb3B0aW9ucyBhcmUgaW52YWxpZCwgcmV0dXJuIHRoZSByb290IHVybFxuICAgIGlmICghdGhpcy52YWxpZGF0ZU9wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0aGlzLlJPT1RfVVJMO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByZWNvZ25pemVkUm91dGUgPSB0aGlzLnJvdXRlUmVjb2duaXplci5yZWNvZ25pemVCeURlZmF1bHRVcmwoXG4gICAgICAgIG9wdGlvbnMudXJsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlY29nbml6ZWRSb3V0ZSA/IHRoaXMuZ2VuZXJhdGVVcmwocmVjb2duaXplZFJvdXRlKSA6IG9wdGlvbnMudXJsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXJsKG9wdGlvbnMucm91dGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU9wdGlvbnMob3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuIE9wdGlvbnMgaGF2ZSB0byBiZSBhbiBvYmplY3QuIE9wdGlvbnM6IGAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsRGVmaW5lZCA9IEJvb2xlYW4ob3B0aW9ucy51cmwpIHx8IG9wdGlvbnMudXJsID09PSAnJztcbiAgICBjb25zdCByb3V0ZURlZmluZWQgPSBCb29sZWFuKG9wdGlvbnMucm91dGUpO1xuICAgIGlmICghdXJsRGVmaW5lZCAmJiAhcm91dGVEZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBJbmNvcnJlY3Qgb3B0aW9ucyBmb3IgdHJhbnNsYXRpbmcgdXJsLiBPcHRpb25zIG11c3QgaGF2ZSAndXJsJyBzdHJpbmcgb3IgJ3JvdXRlJyBhcnJheSBwcm9wZXJ0eS4gT3B0aW9uczogYCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHVybERlZmluZWQgJiYgcm91dGVEZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBJbmNvcnJlY3Qgb3B0aW9ucyBmb3IgdHJhbnNsYXRpbmcgdXJsLiBPcHRpb25zIGNhbm5vdCBoYXZlIGJvdGggJ3VybCcgYW5kICdyb3V0ZScgcHJvcGVydHkuIE9wdGlvbnM6IGAsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1cmxEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9wdGlvbnNVcmwob3B0aW9ucy51cmwpO1xuICAgIH1cbiAgICBpZiAocm91dGVEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9wdGlvbnNSb3V0ZShvcHRpb25zLnJvdXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9uc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC5gLFxuICAgICAgICBgJ3VybCcgcHJvcGVydHkgc2hvdWxkIGJlIGEgc3RyaW5nLiBVcmw6IGAsXG4gICAgICAgIHVybFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9uc1JvdXRlKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5lc3RlZFJvdXRlcykpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgcHJvcGVydHkgc2hvdWxkIGJlIGFuIGFycmF5LiBSb3V0ZTogYCxcbiAgICAgICAgbmVzdGVkUm91dGVzXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlcy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgYXJyYXkgc2hvdWxkIG5vdCBiZSBlbXB0eS4gUm91dGU6IGAsXG4gICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXN0ZWRSb3V0ZSA9IG5lc3RlZFJvdXRlc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkUm91dGUgIT09ICdzdHJpbmcnICYmICFuZXN0ZWRSb3V0ZS5uYW1lKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC5gLFxuICAgICAgICAgIGAncm91dGUnIGFycmF5IGNhbiBjb250YWluIG9ubHkgZWxlbWVudHMgd2hpY2ggYXJlIHN0cmluZyBvciBvYmplY3Qgd2l0aCAnbmFtZScgcHJvcGVydHkuIFJvdXRlOiBgLFxuICAgICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybChuZXN0ZWRSb3V0ZXM6IFRyYW5zbGF0ZVVybE9wdGlvbnNSb3V0ZVtdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHN0YW5kYXJpemVkTmVzdGVkUm91dGVzID0gdGhpcy5zdGFuZGFyaXplTmVzdGVkUm91dGVzKG5lc3RlZFJvdXRlcyk7XG5cbiAgICAvLyBpZiBubyByb3V0ZXMgZ2l2ZW4sIHJldHVybiByb290IHVybFxuICAgIGlmICghc3RhbmRhcml6ZWROZXN0ZWRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXN0ZWRSb3V0ZXNOYW1lcyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtcyxcbiAgICB9ID0gdGhpcy5zcGxpdFJvdXRlc05hbWVzQW5kUGFyYW1zKHN0YW5kYXJpemVkTmVzdGVkUm91dGVzKTtcblxuICAgIGNvbnN0IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMuY29uZmlndXJhYmxlUm91dGVzU2VydmljZS5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgICBuZXN0ZWRSb3V0ZXNOYW1lc1xuICAgICk7XG5cbiAgICAvLyBpZiBubyByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCwgcmV0dXJuIHJvb3QgdXJsOlxuICAgIGlmICghbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVhZk5lc3RlZFJvdXRlVHJhbnNsYXRpb25dID0gbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zLnNsaWNlKC0xKTtcblxuICAgIC8vIGlmIGxlYWYgcm91dGUgd2FzIGRpc2FibGVkIGluIGNvbmZpZyAoc2V0IHRvIG51bGwpLCByZXR1cm4gcm9vdCB1cmw6XG4gICAgaWYgKCFsZWFmTmVzdGVkUm91dGVUcmFuc2xhdGlvbi5wYXRocykge1xuICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgfVxuXG4gICAgLy8gZmluZCBmaXJzdCBwYXRoIGZvciBldmVyeSBuZXN0ZWQgcm91dGUgdGhhdCBjYW4gc2F0aXNmeSBpdCdzIHBhcmFtZXRlcnMgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgY29uc3QgbmVzdGVkUm91dGVzUGF0aHMgPSB0aGlzLmZpbmRQYXRoc1dpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtc1xuICAgICk7XG5cbiAgICAvLyBpZiBub3QgZXZlcnkgbmVzdGVkIHJvdXRlIGhhZCBjb25maWd1cmVkIHBhdGggdGhhdCBjYW4gYmUgc2F0aXNmaWVkIHdpdGggZ2l2ZW4gcGFyYW1zLCByZXR1cm4gcm9vdCB1cmxcbiAgICBpZiAoIW5lc3RlZFJvdXRlc1BhdGhzKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBuZXN0ZWRSb3V0ZXNQYXRocyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtcyxcbiAgICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucy5tYXAoXG4gICAgICAgIHJvdXRUcmFuc2xhdGlvbiA9PiByb3V0VHJhbnNsYXRpb24ucGFyYW1zTWFwcGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICByZXN1bHQudW5zaGlmdCgnJyk7IC8vIGVuc3VyZSBhYnNvbHV0ZSBwYXRoICggbGVhZGluZyAnJyBpbiBwYXRoIGFycmF5IGlzIGVxdXZhbGVudCB0byBsZWFkaW5nICcvJyBpbiBzdHJpbmcpXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgZWxlbWVudHMgdG8gb2JqZWN0c1xuICAgKi9cbiAgcHJpdmF0ZSBzdGFuZGFyaXplTmVzdGVkUm91dGVzKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlW11cbiAgKTogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlT2JqZWN0W10ge1xuICAgIHJldHVybiAobmVzdGVkUm91dGVzIHx8IFtdKS5tYXAocm91dGUgPT5cbiAgICAgIHR5cGVvZiByb3V0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IG5hbWU6IHJvdXRlLCBwYXJhbXM6IHt9IH1cbiAgICAgICAgOiB7IG5hbWU6IHJvdXRlLm5hbWUsIHBhcmFtczogcm91dGUucGFyYW1zIHx8IHt9IH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGxpdFJvdXRlc05hbWVzQW5kUGFyYW1zKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlT2JqZWN0W11cbiAgKToge1xuICAgIG5lc3RlZFJvdXRlc05hbWVzOiBzdHJpbmdbXTtcbiAgICBuZXN0ZWRSb3V0ZXNQYXJhbXM6IG9iamVjdFtdO1xuICB9IHtcbiAgICByZXR1cm4gKG5lc3RlZFJvdXRlcyB8fCBbXSkucmVkdWNlKFxuICAgICAgKHsgbmVzdGVkUm91dGVzTmFtZXMsIG5lc3RlZFJvdXRlc1BhcmFtcyB9LCByb3V0ZSkgPT4gKHtcbiAgICAgICAgbmVzdGVkUm91dGVzTmFtZXM6IFsuLi5uZXN0ZWRSb3V0ZXNOYW1lcywgcm91dGUubmFtZV0sXG4gICAgICAgIG5lc3RlZFJvdXRlc1BhcmFtczogWy4uLm5lc3RlZFJvdXRlc1BhcmFtcywgcm91dGUucGFyYW1zXSxcbiAgICAgIH0pLFxuICAgICAgeyBuZXN0ZWRSb3V0ZXNOYW1lczogW10sIG5lc3RlZFJvdXRlc1BhcmFtczogW10gfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgbmVzdGVkUm91dGVzUGF0aHM6IHN0cmluZ1tdLFxuICAgIG5lc3RlZFJvdXRlc1BhcmFtczogb2JqZWN0W10sXG4gICAgbmVzdGVkUm91dGVzUGFyYW1zTWFwcGluZ3M6IFBhcmFtc01hcHBpbmdbXVxuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbmVzdGVkUm91dGVzUGF0aHMubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXN0ZWRSb3V0ZXNQYXRoc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc09iamVjdCA9IG5lc3RlZFJvdXRlc1BhcmFtc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc01hcHBpbmcgPSBuZXN0ZWRSb3V0ZXNQYXJhbXNNYXBwaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlc0ZvclNpbmdsZVJvdXRlKFxuICAgICAgICBwYXRoLFxuICAgICAgICBwYXJhbXNPYmplY3QsXG4gICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICk7XG4gICAgICByZXN1bHQucHVzaCguLi5wYXRoU2VnbWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzRm9yU2luZ2xlUm91dGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlci5nZXRQcmltYXJ5U2VnbWVudHMocGF0aCkubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgaWYgKGlzUGFyYW0oc2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHNlZ21lbnQpO1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhdGhzV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVUcmFuc2xhdGlvbltdLFxuICAgIG5lc3RlZFJvdXRlc1BhcmFtczogb2JqZWN0W11cbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucy5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc09iamVjdCA9IG5lc3RlZFJvdXRlc1BhcmFtc1tpXTtcbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmZpbmRQYXJ0aWFsUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICAgICAgcm91dGVUcmFuc2xhdGlvbi5wYXRocyxcbiAgICAgICAgcGFyYW1zT2JqZWN0LFxuICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLnBhcmFtc01hcHBpbmdcbiAgICAgICk7XG4gICAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkIHx8IHBhdGggPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjb25maWd1cmVkIHBhdGggbWF0Y2hlcyBhbGwgaXRzIHBhcmFtcyB0byBnaXZlbiBvYmplY3QuIGAsXG4gICAgICAgICAgYFJvdXRlIHRyYW5zbGF0aW9uOiBgLFxuICAgICAgICAgIHJvdXRlVHJhbnNsYXRpb24sXG4gICAgICAgICAgYChpbiBuZXN0ZWQgcm91dGVzIHRyYW5zbGF0aW9ucyBsaXN0YCxcbiAgICAgICAgICBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgICAgICAgYCkuIFBhcmFtcyBvYmplY3Q6IGAsXG4gICAgICAgICAgcGFyYW1zT2JqZWN0LFxuICAgICAgICAgIGAoaW4gcGFyYW1zIG9iamVjdHMgbGlzdGAsXG4gICAgICAgICAgbmVzdGVkUm91dGVzUGFyYW1zLFxuICAgICAgICAgIGApYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZmluZCBmaXJzdCBwYXRoIHRoYXQgY2FuIGZpbGwgYWxsIGl0cyBwYXJhbXMgd2l0aCB2YWx1ZXMgZnJvbSBnaXZlbiBvYmplY3RcbiAgcHJpdmF0ZSBmaW5kUGFydGlhbFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgcGF0aHM6IHN0cmluZ1tdLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGF0aHMuZmluZChwYXRoID0+XG4gICAgICB0aGlzLmdldFBhcmFtcyhwYXRoKS5ldmVyeShwYXJhbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhbXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyXG4gICAgICAuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpXG4gICAgICAuZmlsdGVyKGlzUGFyYW0pXG4gICAgICAubWFwKGdldFBhcmFtTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZShwYXJhbU5hbWU6IHN0cmluZywgcGFyYW1zTWFwcGluZzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAocGFyYW1zTWFwcGluZykge1xuICAgICAgcmV0dXJuIHBhcmFtc01hcHBpbmdbcGFyYW1OYW1lXSB8fCBwYXJhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbU5hbWU7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19