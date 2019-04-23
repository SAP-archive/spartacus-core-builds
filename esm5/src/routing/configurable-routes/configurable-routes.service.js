/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfigLoader } from './routes-config-loader';
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(config, injector, routesConfigLoader) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
        this.initCalled = false; // guard not to call init() more than once
    }
    Object.defineProperty(ConfigurableRoutesService.prototype, "currentRoutesTranslations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.allRoutesTranslations[this.currentLanguageCode]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     */
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    ConfigurableRoutesService.prototype.init = 
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initCalled) return [3 /*break*/, 2];
                        this.initCalled = true;
                        return [4 /*yield*/, this.routesConfigLoader.load()];
                    case 1:
                        _a.sent();
                        this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                        this.translateRouterConfig();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouterConfig = /**
     * @private
     * @return {?}
     */
    function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        router.resetConfig(translatedRoutes);
    };
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     */
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslations = /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    function (nestedRouteNames, routesTranslations) {
        if (routesTranslations === void 0) { routesTranslations = this.currentRoutesTranslations; }
        return this.getNestedRoutesTranslationsRecursive(nestedRouteNames, routesTranslations, []);
    };
    /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getNestedRoutesTranslationsRecursive = /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    function (nestedRoutesNames, routesTranslations, accResult) {
        if (!nestedRoutesNames.length) {
            return accResult;
        }
        var _a = tslib_1.__read(nestedRoutesNames), routeName = _a[0], remainingRouteNames = _a.slice(1);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (!translation) {
            return null;
        }
        if (remainingRouteNames.length) {
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (!childrenTranslations) {
                this.warn("No children routes translations were configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
                return null;
            }
            return this.getNestedRoutesTranslationsRecursive(remainingRouteNames, childrenTranslations, accResult.concat(translation));
        }
        return accResult.concat(translation);
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getChildrenRoutesTranslations = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var routeTranslation = this.getRouteTranslation(routeName, routesTranslations);
        return routeTranslation && routeTranslation.children;
    };
    /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutes = /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routes, routesTranslations) {
        var _this = this;
        /** @type {?} */
        var result = [];
        routes.forEach(function (route) {
            /** @type {?} */
            var translatedRouteAliases = _this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                var translatedChildrenRoutes_1 = _this.translateChildrenRoutes(route, routesTranslations);
                translatedRouteAliases.forEach(function (translatedRouteAlias) {
                    translatedRouteAlias.children = translatedChildrenRoutes_1;
                });
            }
            result.push.apply(result, tslib_1.__spread(translatedRouteAliases));
        });
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateChildrenRoutes = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            /** @type {?} */
            var routeName = this.getConfigurable(route, 'cxPath');
            /** @type {?} */
            var childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (childrenTranslations === undefined) {
                this.warn("Could not translate children routes of route '" + routeName + "'", route, "due to undefined 'children' key for '" + routeName + "' route in routes translations", routesTranslations);
                return [];
            }
            // null switches off the children routes:
            if (childrenTranslations === null) {
                return [];
            }
            return this.translateRoutes(route.children, childrenTranslations);
        }
        return route.children;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoute = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn("A path should not have set both \"cxPath\" and \"cxRedirectTo\" properties! Route: '" + route);
            }
            return this.translateRoutePath(route, routesTranslations);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.translateRouteRedirectTo(route, routesTranslations);
        }
        return [route]; // if nothing is configurable, just pass the original route
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.isConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return !!this.getConfigurable(route, key);
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfigurable = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    function (route, key) {
        return route.data && route.data[key];
    };
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRoutePath = /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, routesTranslations) {
        return this.getTranslatedPaths(route, 'cxPath', routesTranslations).map(function (translatedPath) {
            return tslib_1.__assign({}, route, { path: translatedPath });
        });
    };
    /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.translateRouteRedirectTo = /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    function (route, translations) {
        /** @type {?} */
        var translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
        return translatedPaths.length
            ? [tslib_1.__assign({}, route, { redirectTo: translatedPaths[0] })] // take the first path from list by convention
            : [];
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteTranslation = /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    function (routeName, routesTranslations) {
        /** @type {?} */
        var result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn("No route translation was configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
        }
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getTranslatedPaths = /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    function (route, key, routesTranslations) {
        /** @type {?} */
        var routeName = this.getConfigurable(route, key);
        /** @type {?} */
        var translation = this.getRouteTranslation(routeName, routesTranslations);
        if (translation === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in routes translations", routesTranslations);
            return [];
        }
        if (translation && translation.paths === undefined) {
            this.warn("Could not translate key '" + key + "' of route '" + routeName + "'", route, "due to undefined 'paths' key for '" + routeName + "' route in routes translations", routesTranslations);
            return [];
        }
        // translation or translation.paths can be null - which means switching off the route
        return (translation && translation.paths) || [];
    };
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    ConfigurableRoutesService.prototype.warn = /**
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
    ConfigurableRoutesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: ServerConfig },
        { type: Injector },
        { type: RoutesConfigLoader }
    ]; };
    return ConfigurableRoutesService;
}());
export { ConfigurableRoutesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.currentLanguageCode;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.allRoutesTranslations;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.initCalled;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.routesConfigLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTVEO0lBRUUsbUNBQ1UsTUFBb0IsRUFDcEIsUUFBa0IsRUFDbEIsa0JBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRy9CLHdCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLDJGQUEyRjtRQVVoSSxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBWm5FLENBQUM7SUFNSixzQkFBWSxnRUFBeUI7Ozs7O1FBQXJDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsRUFBc0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7Ozs7SUFDRyx3Q0FBSTs7Ozs7O0lBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBaEIsd0JBQWdCO3dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FB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QU8sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyx3Q0FBSTs7Ozs7SUFBWjtRQUFhLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsSUFBSSxHQUFFO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0JBeFFGLFVBQVU7Ozs7Z0JBVkYsWUFBWTtnQkFGQSxRQUFRO2dCQVFwQixrQkFBa0I7O0lBNlEzQixnQ0FBQztDQUFBLEFBelFELElBeVFDO1NBeFFZLHlCQUF5Qjs7Ozs7O0lBT3BDLHdEQUE0Qzs7Ozs7SUFFNUMsMERBQTREOzs7OztJQVE1RCwrQ0FBMkI7Ozs7O0lBZnpCLDJDQUE0Qjs7Ozs7SUFDNUIsNkNBQTBCOzs7OztJQUMxQix1REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHtcbiAgUm91dGVzVHJhbnNsYXRpb25zLFxuICBSb3V0ZVRyYW5zbGF0aW9uLFxuICBSb3V0ZXNDb25maWcsXG59IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL3JvdXRlcy1jb25maWctbG9hZGVyJztcblxudHlwZSBDb25maWd1cmFibGVSb3V0ZUtleSA9ICdjeFBhdGgnIHwgJ2N4UmVkaXJlY3RUbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZyxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlc0NvbmZpZ0xvYWRlcjogUm91dGVzQ29uZmlnTG9hZGVyXG4gICkge31cblxuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSAnZW4nOyAvLyBUT0RPOiBoYXJkY29kZWQhIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gbW9yZSBsYW5ndWFnZXMgYXJlIHN1cHBvcnRlZCBieSBsb2NhbGl6ZWQgcm91dGVzXG5cbiAgcHJpdmF0ZSBhbGxSb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc0NvbmZpZ1sndHJhbnNsYXRpb25zJ107XG5cbiAgcHJpdmF0ZSBnZXQgY3VycmVudFJvdXRlc1RyYW5zbGF0aW9ucygpOiBSb3V0ZXNUcmFuc2xhdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmFsbFJvdXRlc1RyYW5zbGF0aW9uc1tcbiAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgIF0gYXMgUm91dGVzVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBzZXJ2aWNlIHdpdGggZ2l2ZW4gdHJhbnNsYXRpb25zIGFuZCB0cmFuc2xhdGVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlci5cbiAgICovXG4gIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmluaXRDYWxsZWQpIHtcbiAgICAgIHRoaXMuaW5pdENhbGxlZCA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5sb2FkKCk7XG4gICAgICB0aGlzLmFsbFJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMucm91dGVzQ29uZmlnTG9hZGVyLnJvdXRlc0NvbmZpZy50cmFuc2xhdGlvbnM7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVJvdXRlckNvbmZpZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVyQ29uZmlnKCkge1xuICAgIC8vIFJvdXRlciBjb3VsZCBub3QgYmUgaW5qZWN0ZWQgaW4gY29uc3RydWN0b3IgZHVlIHRvIGN5Y2xpYyBkZXBlbmRlbmN5IHdpdGggQVBQX0lOSVRJQUxJWkVSOlxuICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVkUm91dGVzID0gdGhpcy50cmFuc2xhdGVSb3V0ZXMoXG4gICAgICByb3V0ZXIuY29uZmlnLFxuICAgICAgdGhpcy5jdXJyZW50Um91dGVzVHJhbnNsYXRpb25zXG4gICAgKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyh0cmFuc2xhdGVkUm91dGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHJvdXRlcyB0cmFuc2xhdGlvbnMgZm9yIGdpdmVuIGxpc3Qgb2YgbmVzdGVkIHJvdXRlc1xuICAgKiB1c2luZyBnaXZlbiBvYmplY3Qgb2Ygcm91dGVzIHRyYW5zbGF0aW9ucy5cbiAgICovXG4gIGdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICBuZXN0ZWRSb3V0ZU5hbWVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVRyYW5zbGF0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICAgIG5lc3RlZFJvdXRlTmFtZXMsXG4gICAgICByb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgICBbXVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICBuZXN0ZWRSb3V0ZXNOYW1lczogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgYWNjUmVzdWx0OiBSb3V0ZVRyYW5zbGF0aW9uW11cbiAgKTogUm91dGVUcmFuc2xhdGlvbltdIHtcbiAgICBpZiAoIW5lc3RlZFJvdXRlc05hbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFjY1Jlc3VsdDtcbiAgICB9XG4gICAgY29uc3QgW3JvdXRlTmFtZSwgLi4ucmVtYWluaW5nUm91dGVOYW1lc10gPSBuZXN0ZWRSb3V0ZXNOYW1lcztcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihyb3V0ZU5hbWUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgaWYgKCF0cmFuc2xhdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHJlbWFpbmluZ1JvdXRlTmFtZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaGlsZHJlblRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW5Sb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgICAgIHJvdXRlTmFtZSxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgaWYgKCFjaGlsZHJlblRyYW5zbGF0aW9ucykge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYE5vIGNoaWxkcmVuIHJvdXRlcyB0cmFuc2xhdGlvbnMgd2VyZSBjb25maWd1cmVkIGZvciBwYWdlICcke3JvdXRlTmFtZX0nIGluIGxhbmd1YWdlICcke1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgICAgICAgfSchYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TmVzdGVkUm91dGVzVHJhbnNsYXRpb25zUmVjdXJzaXZlKFxuICAgICAgICByZW1haW5pbmdSb3V0ZU5hbWVzLFxuICAgICAgICBjaGlsZHJlblRyYW5zbGF0aW9ucyxcbiAgICAgICAgYWNjUmVzdWx0LmNvbmNhdCh0cmFuc2xhdGlvbilcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBhY2NSZXN1bHQuY29uY2F0KHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hpbGRyZW5Sb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgcm91dGVOYW1lOiBzdHJpbmcsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICBjb25zdCByb3V0ZVRyYW5zbGF0aW9uID0gdGhpcy5nZXRSb3V0ZVRyYW5zbGF0aW9uKFxuICAgICAgcm91dGVOYW1lLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgKTtcbiAgICByZXR1cm4gcm91dGVUcmFuc2xhdGlvbiAmJiByb3V0ZVRyYW5zbGF0aW9uLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZXMoXG4gICAgcm91dGVzOiBSb3V0ZXMsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVkUm91dGVBbGlhc2VzID0gdGhpcy50cmFuc2xhdGVSb3V0ZShcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZENoaWxkcmVuUm91dGVzID0gdGhpcy50cmFuc2xhdGVDaGlsZHJlblJvdXRlcyhcbiAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcy5mb3JFYWNoKHRyYW5zbGF0ZWRSb3V0ZUFsaWFzID0+IHtcbiAgICAgICAgICB0cmFuc2xhdGVkUm91dGVBbGlhcy5jaGlsZHJlbiA9IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCguLi50cmFuc2xhdGVkUm91dGVBbGlhc2VzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVDaGlsZHJlblJvdXRlcyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzIHtcbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UGF0aCcpKSB7XG4gICAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UGF0aCcpO1xuICAgICAgY29uc3QgY2hpbGRyZW5UcmFuc2xhdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgICAgICByb3V0ZU5hbWUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcblxuICAgICAgaWYgKGNoaWxkcmVuVHJhbnNsYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGNoaWxkcmVuIHJvdXRlcyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgJ2NoaWxkcmVuJyBrZXkgZm9yICcke3JvdXRlTmFtZX0nIHJvdXRlIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIG51bGwgc3dpdGNoZXMgb2ZmIHRoZSBjaGlsZHJlbiByb3V0ZXM6XG4gICAgICBpZiAoY2hpbGRyZW5UcmFuc2xhdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBjaGlsZHJlblRyYW5zbGF0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZS5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGUoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgJ3BhdGgnIGFuZCAncmVkaXJlY3RUbycgY2Fubm90IGJlIGJvdGggY29uZmlndXJlZCBmb3Igb25lIHJvdXRlXG4gICAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQSBwYXRoIHNob3VsZCBub3QgaGF2ZSBzZXQgYm90aCBcImN4UGF0aFwiIGFuZCBcImN4UmVkaXJlY3RUb1wiIHByb3BlcnRpZXMhIFJvdXRlOiAnJHtyb3V0ZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVBhdGgocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBbcm91dGVdOyAvLyBpZiBub3RoaW5nIGlzIGNvbmZpZ3VyYWJsZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVtrZXldO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVBhdGgoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhyb3V0ZSwgJ2N4UGF0aCcsIHJvdXRlc1RyYW5zbGF0aW9ucykubWFwKFxuICAgICAgdHJhbnNsYXRlZFBhdGggPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogdHJhbnNsYXRlZFBhdGggfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8oXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRocyA9IHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgICAgcm91dGUsXG4gICAgICAnY3hSZWRpcmVjdFRvJyxcbiAgICAgIHRyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRQYXRocy5sZW5ndGhcbiAgICAgID8gW3sgLi4ucm91dGUsIHJlZGlyZWN0VG86IHRyYW5zbGF0ZWRQYXRoc1swXSB9XSAvLyB0YWtlIHRoZSBmaXJzdCBwYXRoIGZyb20gbGlzdCBieSBjb252ZW50aW9uXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZVRyYW5zbGF0aW9uKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlVHJhbnNsYXRpb24ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc1RyYW5zbGF0aW9ucyAmJiByb3V0ZXNUcmFuc2xhdGlvbnNbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc1RyYW5zbGF0aW9ucyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQgZm9yIHBhZ2UgJyR7cm91dGVOYW1lfScgaW4gbGFuZ3VhZ2UgJyR7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgICAgIH0nIWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICh0cmFuc2xhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBrZXkgJyR7cm91dGVOYW1lfScgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHRyYW5zbGF0aW9uIG9yIHRyYW5zbGF0aW9uLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=