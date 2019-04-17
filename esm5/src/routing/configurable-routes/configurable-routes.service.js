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
        translatedRoutes = this.moveWildcardRouteToEnd(translatedRoutes);
        router.resetConfig(translatedRoutes);
    };
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     */
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    ConfigurableRoutesService.prototype.moveWildcardRouteToEnd = /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        /** @type {?} */
        var firstWildcardRoute = routes.find(function (route) { return route.path === '**'; });
        return firstWildcardRoute
            ? routes.filter(function (route) { return route.path !== '**'; }).concat(firstWildcardRoute)
            : routes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTVEO0lBRUUsbUNBQ1UsTUFBb0IsRUFDcEIsUUFBa0IsRUFDbEIsa0JBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRy9CLHdCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLDJGQUEyRjtRQVVoSSxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBWm5FLENBQUM7SUFNSixzQkFBWSxnRUFBeUI7Ozs7O1FBQXJDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsRUFBc0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7Ozs7SUFDRyx3Q0FBSTs7Ozs7O0lBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBaEIsd0JBQWdCO3dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FB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ZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7XG4gIFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgUm91dGVUcmFuc2xhdGlvbixcbiAgUm91dGVzQ29uZmlnLFxufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gJ2VuJzsgLy8gVE9ETzogaGFyZGNvZGVkISBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIG1vcmUgbGFuZ3VhZ2VzIGFyZSBzdXBwb3J0ZWQgYnkgbG9jYWxpemVkIHJvdXRlc1xuXG4gIHByaXZhdGUgYWxsUm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNDb25maWdbJ3RyYW5zbGF0aW9ucyddO1xuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnNbXG4gICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICBdIGFzIFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgc2VydmljZSB3aXRoIGdpdmVuIHRyYW5zbGF0aW9ucyBhbmQgdHJhbnNsYXRlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXIuXG4gICAqL1xuICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgdGhpcy50cmFuc2xhdGVSb3V0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlckNvbmZpZygpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLm1vdmVXaWxkY2FyZFJvdXRlVG9FbmQodHJhbnNsYXRlZFJvdXRlcyk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcodHJhbnNsYXRlZFJvdXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgUm91dGUgd2l0aCBkb3VibGUgYXN0ZXJpc2sgKCoqKSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiBJZiB0aGVyZSBhcmUgbW9yZSBSb3V0ZXMgd2l0aCAqKiwgb25seSB0aGUgZmlyc3Qgd2lsbCBiZSBsZWZ0IGFuZCBvdGhlciByZW1vdmVkLlxuICAgKlxuICAgKiBSZWFzb246IFdoZW4gc29tZSBjdXN0b20gUm91dGVzIGFyZSBpbmplY3RlZCBhZnRlciBTcGFydGFjdXMnIG9uZXMsXG4gICAqICAgICAgICAgIHRoZW4gdGhlIFNwYXJ0YWN1cycgd2lsZGNhcmQgUm91dGUgbmVlZHMgYmVpbmcgbW92ZWQgdG8gdGhlIGVuZCAtXG4gICAqICAgICAgICAgIGV2ZW4gYWZ0ZXIgY3VzdG9tIFJvdXRlcyAtIHRvIG1ha2UgY3VzdG9tIFJvdXRlcyBkaXNjb3ZlcmFibGUuXG4gICAqICAgICAgICAgIE1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgUm91dGUgaXMgYSBzaWduIG9mIGJhZCBjb25maWcsIHNvIHJlZHVuZGFudCBjb3BpZXMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBwcml2YXRlIG1vdmVXaWxkY2FyZFJvdXRlVG9FbmQocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IGZpcnN0V2lsZGNhcmRSb3V0ZSA9IHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09ICcqKicpO1xuICAgIHJldHVybiBmaXJzdFdpbGRjYXJkUm91dGVcbiAgICAgID8gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5wYXRoICE9PSAnKionKS5jb25jYXQoZmlyc3RXaWxkY2FyZFJvdXRlKVxuICAgICAgOiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiByb3V0ZXMgdHJhbnNsYXRpb25zIGZvciBnaXZlbiBsaXN0IG9mIG5lc3RlZCByb3V0ZXNcbiAgICogdXNpbmcgZ2l2ZW4gb2JqZWN0IG9mIHJvdXRlcyB0cmFuc2xhdGlvbnMuXG4gICAqL1xuICBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgbmVzdGVkUm91dGVOYW1lczogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVUcmFuc2xhdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgICBuZXN0ZWRSb3V0ZU5hbWVzLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgbmVzdGVkUm91dGVzTmFtZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zLFxuICAgIGFjY1Jlc3VsdDogUm91dGVUcmFuc2xhdGlvbltdXG4gICk6IFJvdXRlVHJhbnNsYXRpb25bXSB7XG4gICAgaWYgKCFuZXN0ZWRSb3V0ZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2NSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IFtyb3V0ZU5hbWUsIC4uLnJlbWFpbmluZ1JvdXRlTmFtZXNdID0gbmVzdGVkUm91dGVzTmFtZXM7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICghdHJhbnNsYXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdSb3V0ZU5hbWVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGRyZW5UcmFuc2xhdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgICAgICByb3V0ZU5hbWUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmICghY2hpbGRyZW5UcmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjaGlsZHJlbiByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICAgIH0nIWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgcmVtYWluaW5nUm91dGVOYW1lcyxcbiAgICAgICAgY2hpbGRyZW5UcmFuc2xhdGlvbnMsXG4gICAgICAgIGFjY1Jlc3VsdC5jb25jYXQodHJhbnNsYXRpb24pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYWNjUmVzdWx0LmNvbmNhdCh0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICAgIHJvdXRlTmFtZSxcbiAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHJvdXRlVHJhbnNsYXRpb24gJiYgcm91dGVUcmFuc2xhdGlvbi5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVzKFxuICAgIHJvdXRlczogUm91dGVzLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcyA9IHRoaXMudHJhbnNsYXRlUm91dGUoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcyA9IHRoaXMudHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMuZm9yRWFjaCh0cmFuc2xhdGVkUm91dGVBbGlhcyA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXMuY2hpbGRyZW4gPSB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goLi4udHJhbnNsYXRlZFJvdXRlQWxpYXNlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuVHJhbnNsYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChjaGlsZHJlblRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBjaGlsZHJlbiByb3V0ZXMgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdjaGlsZHJlbicga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBudWxsIHN3aXRjaGVzIG9mZiB0aGUgY2hpbGRyZW4gcm91dGVzOlxuICAgICAgaWYgKGNoaWxkcmVuVHJhbnNsYXRpb25zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgY2hpbGRyZW5UcmFuc2xhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGUuY2hpbGRyZW47XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXMge1xuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJykpIHtcbiAgICAgIC8vIHdlIGFzc3VtZSB0aGF0ICdwYXRoJyBhbmQgJ3JlZGlyZWN0VG8nIGNhbm5vdCBiZSBib3RoIGNvbmZpZ3VyZWQgZm9yIG9uZSByb3V0ZVxuICAgICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYEEgcGF0aCBzaG91bGQgbm90IGhhdmUgc2V0IGJvdGggXCJjeFBhdGhcIiBhbmQgXCJjeFJlZGlyZWN0VG9cIiBwcm9wZXJ0aWVzISBSb3V0ZTogJyR7cm91dGV9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVQYXRoKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hSZWRpcmVjdFRvJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhyb3V0ZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3JvdXRlXTsgLy8gaWYgbm90aGluZyBpcyBjb25maWd1cmFibGUsIGp1c3QgcGFzcyB0aGUgb3JpZ2luYWwgcm91dGVcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGFba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVQYXRoKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGVkUGF0aHMocm91dGUsICdjeFBhdGgnLCByb3V0ZXNUcmFuc2xhdGlvbnMpLm1hcChcbiAgICAgIHRyYW5zbGF0ZWRQYXRoID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIHBhdGg6IHRyYW5zbGF0ZWRQYXRoIH07XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICB0cmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVtdIHtcbiAgICBjb25zdCB0cmFuc2xhdGVkUGF0aHMgPSB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICAgIHJvdXRlLFxuICAgICAgJ2N4UmVkaXJlY3RUbycsXG4gICAgICB0cmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHJldHVybiB0cmFuc2xhdGVkUGF0aHMubGVuZ3RoXG4gICAgICA/IFt7IC4uLnJvdXRlLCByZWRpcmVjdFRvOiB0cmFuc2xhdGVkUGF0aHNbMF0gfV0gLy8gdGFrZSB0aGUgZmlyc3QgcGF0aCBmcm9tIGxpc3QgYnkgY29udmVudGlvblxuICAgICAgOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVRyYW5zbGF0aW9uIHtcbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZXNUcmFuc2xhdGlvbnMgJiYgcm91dGVzVHJhbnNsYXRpb25zW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZXNUcmFuc2xhdGlvbnMgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkIGZvciBwYWdlICcke3JvdXRlTmFtZX0nIGluIGxhbmd1YWdlICcke1xuICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICB9JyFgXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFuc2xhdGVkUGF0aHMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXksXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRSb3V0ZVRyYW5zbGF0aW9uKHJvdXRlTmFtZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICBpZiAodHJhbnNsYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBrZXkgJyR7a2V5fScgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5ICcke3JvdXRlTmFtZX0nIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGtleSBmb3IgJyR7cm91dGVOYW1lfScgcm91dGUgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyB0cmFuc2xhdGlvbiBvciB0cmFuc2xhdGlvbi5wYXRocyBjYW4gYmUgbnVsbCAtIHdoaWNoIG1lYW5zIHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlXG4gICAgcmV0dXJuICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19