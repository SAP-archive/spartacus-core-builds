/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConfigurableRoutesService } from '../configurable-routes.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { getParamName, isParam } from './path-utils';
export class UrlTranslationService {
    /**
     * @param {?} configurableRoutesService
     * @param {?} urlParser
     * @param {?} config
     */
    constructor(configurableRoutesService, urlParser, config) {
        this.configurableRoutesService = configurableRoutesService;
        this.urlParser = urlParser;
        this.config = config;
        this.ROOT_URL = ['/'];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    translate(options) {
        // if options are invalid, return the root url
        if (!this.validateOptions(options)) {
            return this.ROOT_URL;
        }
        return this.generateUrl(options.route);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    validateOptions(options) {
        if (!options || typeof options !== 'object') {
            this.warn(`Incorrect options for translating url. Options have to be an object. Options: `, options);
            return false;
        }
        /** @type {?} */
        const routeDefined = Boolean(options.route);
        if (!routeDefined) {
            this.warn(`Incorrect options for translating url. Options must have 'route' array property. Options: `, options);
            return false;
        }
        if (routeDefined) {
            return this.validateOptionsRoute(options.route);
        }
        return true;
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    validateOptionsRoute(nestedRoutes) {
        if (!Array.isArray(nestedRoutes)) {
            this.warn(`Incorrect options for translating url.`, `'route' property should be an array. Route: `, nestedRoutes);
            return false;
        }
        /** @type {?} */
        const length = nestedRoutes.length;
        if (!length) {
            this.warn(`Incorrect options for translating url.`, `'route' array should not be empty. Route: `, nestedRoutes);
            return false;
        }
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const nestedRoute = nestedRoutes[i];
            if (typeof nestedRoute !== 'string' && !nestedRoute.name) {
                this.warn(`Incorrect options for translating url.`, `'route' array can contain only elements which are string or object with 'name' property. Route: `, nestedRoutes);
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    generateUrl(nestedRoutes) {
        /** @type {?} */
        const standarizedNestedRoutes = this.standarizeNestedRoutes(nestedRoutes);
        // if no routes given, return root url
        if (!standarizedNestedRoutes.length) {
            return this.ROOT_URL;
        }
        const { nestedRoutesNames, nestedRoutesParams, } = this.splitRoutesNamesAndParams(standarizedNestedRoutes);
        /** @type {?} */
        const nestedRoutesTranslations = this.configurableRoutesService.getNestedRoutesTranslations(nestedRoutesNames);
        // if no routes translations were configured, return root url:
        if (!nestedRoutesTranslations) {
            return this.ROOT_URL;
        }
        const [leafNestedRouteTranslation] = nestedRoutesTranslations.slice(-1);
        // if leaf route was disabled in config (set to null), return root url:
        if (!leafNestedRouteTranslation.paths) {
            return this.ROOT_URL;
        }
        // find first path for every nested route that can satisfy it's parameters with given parameters
        /** @type {?} */
        const nestedRoutesPaths = this.findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams);
        // if not every nested route had configured path that can be satisfied with given params, return root url
        if (!nestedRoutesPaths) {
            return this.ROOT_URL;
        }
        /** @type {?} */
        const result = this.provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesTranslations.map(routTranslation => routTranslation.paramsMapping));
        result.unshift(''); // ensure absolute path ( leading '' in path array is equvalent to leading '/' in string)
        return result;
    }
    /**
     * Converts all elements to objects
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    standarizeNestedRoutes(nestedRoutes) {
        return (nestedRoutes || []).map(route => typeof route === 'string'
            ? { name: route, params: {} }
            : { name: route.name, params: route.params || {} });
    }
    /**
     * @private
     * @param {?} nestedRoutes
     * @return {?}
     */
    splitRoutesNamesAndParams(nestedRoutes) {
        return (nestedRoutes || []).reduce(({ nestedRoutesNames, nestedRoutesParams }, route) => ({
            nestedRoutesNames: [...nestedRoutesNames, route.name],
            nestedRoutesParams: [...nestedRoutesParams, route.params],
        }), { nestedRoutesNames: [], nestedRoutesParams: [] });
    }
    /**
     * @private
     * @param {?} nestedRoutesPaths
     * @param {?} nestedRoutesParams
     * @param {?} nestedRoutesParamsMappings
     * @return {?}
     */
    provideParamsValues(nestedRoutesPaths, nestedRoutesParams, nestedRoutesParamsMappings) {
        /** @type {?} */
        const length = nestedRoutesPaths.length;
        /** @type {?} */
        const result = [];
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const path = nestedRoutesPaths[i];
            /** @type {?} */
            const paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            const paramsMapping = nestedRoutesParamsMappings[i];
            /** @type {?} */
            const pathSegments = this.provideParamsValuesForSingleRoute(path, paramsObject, paramsMapping);
            result.push(...pathSegments);
        }
        return result;
    }
    /**
     * @private
     * @param {?} path
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    provideParamsValuesForSingleRoute(path, params, paramsMapping) {
        return this.urlParser.getPrimarySegments(path).map(segment => {
            if (isParam(segment)) {
                /** @type {?} */
                const paramName = getParamName(segment);
                /** @type {?} */
                const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
                return params[mappedParamName];
            }
            return segment;
        });
    }
    /**
     * @private
     * @param {?} nestedRoutesTranslations
     * @param {?} nestedRoutesParams
     * @return {?}
     */
    findPathsWithFillableParams(nestedRoutesTranslations, nestedRoutesParams) {
        /** @type {?} */
        const length = nestedRoutesTranslations.length;
        /** @type {?} */
        const result = [];
        for (let i = 0; i < length; i++) {
            /** @type {?} */
            const routeTranslation = nestedRoutesTranslations[i];
            /** @type {?} */
            const paramsObject = nestedRoutesParams[i];
            /** @type {?} */
            const path = this.findPartialPathWithFillableParams(routeTranslation.paths, paramsObject, routeTranslation.paramsMapping);
            if (path === undefined || path === null) {
                this.warn(`No configured path matches all its params to given object. `, `Route translation: `, routeTranslation, `(in nested routes translations list`, nestedRoutesTranslations, `). Params object: `, paramsObject, `(in params objects list`, nestedRoutesParams, `)`);
                return null;
            }
            result.push(path);
        }
        return result;
    }
    // find first path that can fill all its params with values from given object
    /**
     * @private
     * @param {?} paths
     * @param {?} params
     * @param {?} paramsMapping
     * @return {?}
     */
    findPartialPathWithFillableParams(paths, params, paramsMapping) {
        return paths.find(path => this.getParams(path).every(paramName => {
            /** @type {?} */
            const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
            return params[mappedParamName] !== undefined;
        }));
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    getParams(path) {
        return this.urlParser
            .getPrimarySegments(path)
            .filter(isParam)
            .map(getParamName);
    }
    /**
     * @private
     * @param {?} paramName
     * @param {?} paramsMapping
     * @return {?}
     */
    getMappedParamName(paramName, paramsMapping) {
        if (paramsMapping) {
            return paramsMapping[paramName] || paramName;
        }
        return paramName;
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
UrlTranslationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UrlTranslationService.ctorParameters = () => [
    { type: ConfigurableRoutesService },
    { type: UrlParsingService },
    { type: ServerConfig }
];
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
    UrlTranslationService.prototype.urlParser;
    /**
     * @type {?}
     * @private
     */
    UrlTranslationService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRckQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBR2hDLFlBQ1UseUJBQW9ELEVBQ3BELFNBQTRCLEVBQzVCLE1BQW9CO1FBRnBCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUxyQixhQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQU12QixDQUFDOzs7OztJQUVKLFNBQVMsQ0FBQyxPQUE0QjtRQUNwQyw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsT0FBNEI7UUFDbEQsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFD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LE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztTQUM5QztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQTNRRixVQUFVOzs7O1lBWEYseUJBQXlCO1lBQ3pCLGlCQUFpQjtZQUNqQixZQUFZOzs7O0lBV25CLHlDQUEwQjs7Ozs7SUFHeEIsMERBQTREOzs7OztJQUM1RCwwQ0FBb0M7Ozs7O0lBQ3BDLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsUGFyc2luZ1NlcnZpY2UgfSBmcm9tICcuL3VybC1wYXJzaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZVRyYW5zbGF0aW9uLCBQYXJhbXNNYXBwaW5nIH0gZnJvbSAnLi4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUsIGlzUGFyYW0gfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuaW1wb3J0IHtcbiAgVHJhbnNsYXRlVXJsT3B0aW9ucyxcbiAgVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlLFxuICBUcmFuc2xhdGVVcmxPcHRpb25zUm91dGVPYmplY3QsXG59IGZyb20gJy4vdHJhbnNsYXRlLXVybC1vcHRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVybFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHJlYWRvbmx5IFJPT1RfVVJMID0gWycvJ107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlOiBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsUGFyc2VyOiBVcmxQYXJzaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnXG4gICkge31cblxuICB0cmFuc2xhdGUob3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAvLyBpZiBvcHRpb25zIGFyZSBpbnZhbGlkLCByZXR1cm4gdGhlIHJvb3QgdXJsXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVcmwob3B0aW9ucy5yb3V0ZSk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9ucyhvcHRpb25zOiBUcmFuc2xhdGVVcmxPcHRpb25zKTogYm9vbGVhbiB7XG4gICAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC4gT3B0aW9ucyBoYXZlIHRvIGJlIGFuIG9iamVjdC4gT3B0aW9uczogYCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZURlZmluZWQgPSBCb29sZWFuKG9wdGlvbnMucm91dGUpO1xuICAgIGlmICghcm91dGVEZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBJbmNvcnJlY3Qgb3B0aW9ucyBmb3IgdHJhbnNsYXRpbmcgdXJsLiBPcHRpb25zIG11c3QgaGF2ZSAncm91dGUnIGFycmF5IHByb3BlcnR5LiBPcHRpb25zOiBgLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocm91dGVEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9wdGlvbnNSb3V0ZShvcHRpb25zLnJvdXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT3B0aW9uc1JvdXRlKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlW11cbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5lc3RlZFJvdXRlcykpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgcHJvcGVydHkgc2hvdWxkIGJlIGFuIGFycmF5LiBSb3V0ZTogYCxcbiAgICAgICAgbmVzdGVkUm91dGVzXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlcy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYEluY29ycmVjdCBvcHRpb25zIGZvciB0cmFuc2xhdGluZyB1cmwuYCxcbiAgICAgICAgYCdyb3V0ZScgYXJyYXkgc2hvdWxkIG5vdCBiZSBlbXB0eS4gUm91dGU6IGAsXG4gICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXN0ZWRSb3V0ZSA9IG5lc3RlZFJvdXRlc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgbmVzdGVkUm91dGUgIT09ICdzdHJpbmcnICYmICFuZXN0ZWRSb3V0ZS5uYW1lKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgSW5jb3JyZWN0IG9wdGlvbnMgZm9yIHRyYW5zbGF0aW5nIHVybC5gLFxuICAgICAgICAgIGAncm91dGUnIGFycmF5IGNhbiBjb250YWluIG9ubHkgZWxlbWVudHMgd2hpY2ggYXJlIHN0cmluZyBvciBvYmplY3Qgd2l0aCAnbmFtZScgcHJvcGVydHkuIFJvdXRlOiBgLFxuICAgICAgICAgIG5lc3RlZFJvdXRlc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVVybChuZXN0ZWRSb3V0ZXM6IFRyYW5zbGF0ZVVybE9wdGlvbnNSb3V0ZVtdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHN0YW5kYXJpemVkTmVzdGVkUm91dGVzID0gdGhpcy5zdGFuZGFyaXplTmVzdGVkUm91dGVzKG5lc3RlZFJvdXRlcyk7XG5cbiAgICAvLyBpZiBubyByb3V0ZXMgZ2l2ZW4sIHJldHVybiByb290IHVybFxuICAgIGlmICghc3RhbmRhcml6ZWROZXN0ZWRSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXN0ZWRSb3V0ZXNOYW1lcyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtcyxcbiAgICB9ID0gdGhpcy5zcGxpdFJvdXRlc05hbWVzQW5kUGFyYW1zKHN0YW5kYXJpemVkTmVzdGVkUm91dGVzKTtcblxuICAgIGNvbnN0IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMuY29uZmlndXJhYmxlUm91dGVzU2VydmljZS5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgICBuZXN0ZWRSb3V0ZXNOYW1lc1xuICAgICk7XG5cbiAgICAvLyBpZiBubyByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCwgcmV0dXJuIHJvb3QgdXJsOlxuICAgIGlmICghbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVhZk5lc3RlZFJvdXRlVHJhbnNsYXRpb25dID0gbmVzdGVkUm91dGVzVHJhbnNsYXRpb25zLnNsaWNlKC0xKTtcblxuICAgIC8vIGlmIGxlYWYgcm91dGUgd2FzIGRpc2FibGVkIGluIGNvbmZpZyAoc2V0IHRvIG51bGwpLCByZXR1cm4gcm9vdCB1cmw6XG4gICAgaWYgKCFsZWFmTmVzdGVkUm91dGVUcmFuc2xhdGlvbi5wYXRocykge1xuICAgICAgcmV0dXJuIHRoaXMuUk9PVF9VUkw7XG4gICAgfVxuXG4gICAgLy8gZmluZCBmaXJzdCBwYXRoIGZvciBldmVyeSBuZXN0ZWQgcm91dGUgdGhhdCBjYW4gc2F0aXNmeSBpdCdzIHBhcmFtZXRlcnMgd2l0aCBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgY29uc3QgbmVzdGVkUm91dGVzUGF0aHMgPSB0aGlzLmZpbmRQYXRoc1dpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtc1xuICAgICk7XG5cbiAgICAvLyBpZiBub3QgZXZlcnkgbmVzdGVkIHJvdXRlIGhhZCBjb25maWd1cmVkIHBhdGggdGhhdCBjYW4gYmUgc2F0aXNmaWVkIHdpdGggZ2l2ZW4gcGFyYW1zLCByZXR1cm4gcm9vdCB1cmxcbiAgICBpZiAoIW5lc3RlZFJvdXRlc1BhdGhzKSB7XG4gICAgICByZXR1cm4gdGhpcy5ST09UX1VSTDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgICBuZXN0ZWRSb3V0ZXNQYXRocyxcbiAgICAgIG5lc3RlZFJvdXRlc1BhcmFtcyxcbiAgICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucy5tYXAoXG4gICAgICAgIHJvdXRUcmFuc2xhdGlvbiA9PiByb3V0VHJhbnNsYXRpb24ucGFyYW1zTWFwcGluZ1xuICAgICAgKVxuICAgICk7XG5cbiAgICByZXN1bHQudW5zaGlmdCgnJyk7IC8vIGVuc3VyZSBhYnNvbHV0ZSBwYXRoICggbGVhZGluZyAnJyBpbiBwYXRoIGFycmF5IGlzIGVxdXZhbGVudCB0byBsZWFkaW5nICcvJyBpbiBzdHJpbmcpXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbGwgZWxlbWVudHMgdG8gb2JqZWN0c1xuICAgKi9cbiAgcHJpdmF0ZSBzdGFuZGFyaXplTmVzdGVkUm91dGVzKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlW11cbiAgKTogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlT2JqZWN0W10ge1xuICAgIHJldHVybiAobmVzdGVkUm91dGVzIHx8IFtdKS5tYXAocm91dGUgPT5cbiAgICAgIHR5cGVvZiByb3V0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IG5hbWU6IHJvdXRlLCBwYXJhbXM6IHt9IH1cbiAgICAgICAgOiB7IG5hbWU6IHJvdXRlLm5hbWUsIHBhcmFtczogcm91dGUucGFyYW1zIHx8IHt9IH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzcGxpdFJvdXRlc05hbWVzQW5kUGFyYW1zKFxuICAgIG5lc3RlZFJvdXRlczogVHJhbnNsYXRlVXJsT3B0aW9uc1JvdXRlT2JqZWN0W11cbiAgKToge1xuICAgIG5lc3RlZFJvdXRlc05hbWVzOiBzdHJpbmdbXTtcbiAgICBuZXN0ZWRSb3V0ZXNQYXJhbXM6IG9iamVjdFtdO1xuICB9IHtcbiAgICByZXR1cm4gKG5lc3RlZFJvdXRlcyB8fCBbXSkucmVkdWNlKFxuICAgICAgKHsgbmVzdGVkUm91dGVzTmFtZXMsIG5lc3RlZFJvdXRlc1BhcmFtcyB9LCByb3V0ZSkgPT4gKHtcbiAgICAgICAgbmVzdGVkUm91dGVzTmFtZXM6IFsuLi5uZXN0ZWRSb3V0ZXNOYW1lcywgcm91dGUubmFtZV0sXG4gICAgICAgIG5lc3RlZFJvdXRlc1BhcmFtczogWy4uLm5lc3RlZFJvdXRlc1BhcmFtcywgcm91dGUucGFyYW1zXSxcbiAgICAgIH0pLFxuICAgICAgeyBuZXN0ZWRSb3V0ZXNOYW1lczogW10sIG5lc3RlZFJvdXRlc1BhcmFtczogW10gfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHByb3ZpZGVQYXJhbXNWYWx1ZXMoXG4gICAgbmVzdGVkUm91dGVzUGF0aHM6IHN0cmluZ1tdLFxuICAgIG5lc3RlZFJvdXRlc1BhcmFtczogb2JqZWN0W10sXG4gICAgbmVzdGVkUm91dGVzUGFyYW1zTWFwcGluZ3M6IFBhcmFtc01hcHBpbmdbXVxuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbmVzdGVkUm91dGVzUGF0aHMubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXN0ZWRSb3V0ZXNQYXRoc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc09iamVjdCA9IG5lc3RlZFJvdXRlc1BhcmFtc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc01hcHBpbmcgPSBuZXN0ZWRSb3V0ZXNQYXJhbXNNYXBwaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHRoaXMucHJvdmlkZVBhcmFtc1ZhbHVlc0ZvclNpbmdsZVJvdXRlKFxuICAgICAgICBwYXRoLFxuICAgICAgICBwYXJhbXNPYmplY3QsXG4gICAgICAgIHBhcmFtc01hcHBpbmdcbiAgICAgICk7XG4gICAgICByZXN1bHQucHVzaCguLi5wYXRoU2VnbWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBwcm92aWRlUGFyYW1zVmFsdWVzRm9yU2luZ2xlUm91dGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnVybFBhcnNlci5nZXRQcmltYXJ5U2VnbWVudHMocGF0aCkubWFwKHNlZ21lbnQgPT4ge1xuICAgICAgaWYgKGlzUGFyYW0oc2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHNlZ21lbnQpO1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcGFyYW1zW21hcHBlZFBhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhdGhzV2l0aEZpbGxhYmxlUGFyYW1zKFxuICAgIG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVUcmFuc2xhdGlvbltdLFxuICAgIG5lc3RlZFJvdXRlc1BhcmFtczogb2JqZWN0W11cbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucy5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IG5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1tpXTtcbiAgICAgIGNvbnN0IHBhcmFtc09iamVjdCA9IG5lc3RlZFJvdXRlc1BhcmFtc1tpXTtcbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmZpbmRQYXJ0aWFsUGF0aFdpdGhGaWxsYWJsZVBhcmFtcyhcbiAgICAgICAgcm91dGVUcmFuc2xhdGlvbi5wYXRocyxcbiAgICAgICAgcGFyYW1zT2JqZWN0LFxuICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLnBhcmFtc01hcHBpbmdcbiAgICAgICk7XG4gICAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkIHx8IHBhdGggPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjb25maWd1cmVkIHBhdGggbWF0Y2hlcyBhbGwgaXRzIHBhcmFtcyB0byBnaXZlbiBvYmplY3QuIGAsXG4gICAgICAgICAgYFJvdXRlIHRyYW5zbGF0aW9uOiBgLFxuICAgICAgICAgIHJvdXRlVHJhbnNsYXRpb24sXG4gICAgICAgICAgYChpbiBuZXN0ZWQgcm91dGVzIHRyYW5zbGF0aW9ucyBsaXN0YCxcbiAgICAgICAgICBuZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgICAgICAgYCkuIFBhcmFtcyBvYmplY3Q6IGAsXG4gICAgICAgICAgcGFyYW1zT2JqZWN0LFxuICAgICAgICAgIGAoaW4gcGFyYW1zIG9iamVjdHMgbGlzdGAsXG4gICAgICAgICAgbmVzdGVkUm91dGVzUGFyYW1zLFxuICAgICAgICAgIGApYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZmluZCBmaXJzdCBwYXRoIHRoYXQgY2FuIGZpbGwgYWxsIGl0cyBwYXJhbXMgd2l0aCB2YWx1ZXMgZnJvbSBnaXZlbiBvYmplY3RcbiAgcHJpdmF0ZSBmaW5kUGFydGlhbFBhdGhXaXRoRmlsbGFibGVQYXJhbXMoXG4gICAgcGF0aHM6IHN0cmluZ1tdLFxuICAgIHBhcmFtczogb2JqZWN0LFxuICAgIHBhcmFtc01hcHBpbmc6IFBhcmFtc01hcHBpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGF0aHMuZmluZChwYXRoID0+XG4gICAgICB0aGlzLmdldFBhcmFtcyhwYXRoKS5ldmVyeShwYXJhbU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWRQYXJhbU5hbWUgPSB0aGlzLmdldE1hcHBlZFBhcmFtTmFtZShcbiAgICAgICAgICBwYXJhbU5hbWUsXG4gICAgICAgICAgcGFyYW1zTWFwcGluZ1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwYXJhbXNbbWFwcGVkUGFyYW1OYW1lXSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhbXMocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsUGFyc2VyXG4gICAgICAuZ2V0UHJpbWFyeVNlZ21lbnRzKHBhdGgpXG4gICAgICAuZmlsdGVyKGlzUGFyYW0pXG4gICAgICAubWFwKGdldFBhcmFtTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFBhcmFtTmFtZShwYXJhbU5hbWU6IHN0cmluZywgcGFyYW1zTWFwcGluZzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAocGFyYW1zTWFwcGluZykge1xuICAgICAgcmV0dXJuIHBhcmFtc01hcHBpbmdbcGFyYW1OYW1lXSB8fCBwYXJhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbU5hbWU7XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19