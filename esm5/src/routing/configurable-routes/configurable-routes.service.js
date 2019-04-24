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
     * @param {?} routeName
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteTranslation = /**
     * @param {?} routeName
     * @return {?}
     */
    function (routeName) {
        /** @type {?} */
        var routesTranslations = this.currentRoutesTranslations;
        /** @type {?} */
        var result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn("No route translation was configured for page '" + routeName + "' in language '" + this.currentLanguageCode + "'!");
        }
        return result;
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
                var translatedChildrenRoutes_1 = _this.translateRoutes(route.children, routesTranslations);
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
        var translation = this.getRouteTranslation(routeName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSTVEO0lBRUUsbUNBQ1UsTUFBb0IsRUFDcEIsUUFBa0IsRUFDbEIsa0JBQXNDO1FBRnRDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRy9CLHdCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLDJGQUEyRjtRQVVoSSxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBWm5FLENBQUM7SUFNSixzQkFBWSxnRUFBeUI7Ozs7O1FBQXJDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsRUFBc0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7Ozs7SUFDRyx3Q0FBSTs7Ozs7O0lBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBaEIsd0JBQWdCO3dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FB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SUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUNQLDhCQUE0QixHQUFHLG9CQUFlLFNBQVMsTUFBRyxFQUMxRCxLQUFLLEVBQ0wsdUNBQXFDLFNBQVMsbUNBQWdDLEVBQzlFLGtCQUFrQixDQUNuQixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELHFGQUFxRjtRQUNyRixPQUFPLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRU8sd0NBQUk7Ozs7O0lBQVo7UUFBYSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7O2dCQTNLRixVQUFVOzs7O2dCQVZGLFlBQVk7Z0JBRkEsUUFBUTtnQkFRcEIsa0JBQWtCOztJQWdMM0IsZ0NBQUM7Q0FBQSxBQTVLRCxJQTRLQztTQTNLWSx5QkFBeUI7Ozs7OztJQU9wQyx3REFBNEM7Ozs7O0lBRTVDLDBEQUE0RDs7Ozs7SUFRNUQsK0NBQTJCOzs7OztJQWZ6QiwyQ0FBNEI7Ozs7O0lBQzVCLDZDQUEwQjs7Ozs7SUFDMUIsdURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7XG4gIFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgUm91dGVUcmFuc2xhdGlvbixcbiAgUm91dGVzQ29uZmlnLFxufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gJ2VuJzsgLy8gVE9ETzogaGFyZGNvZGVkISBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIG1vcmUgbGFuZ3VhZ2VzIGFyZSBzdXBwb3J0ZWQgYnkgbG9jYWxpemVkIHJvdXRlc1xuXG4gIHByaXZhdGUgYWxsUm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNDb25maWdbJ3RyYW5zbGF0aW9ucyddO1xuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnNbXG4gICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICBdIGFzIFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgc2VydmljZSB3aXRoIGdpdmVuIHRyYW5zbGF0aW9ucyBhbmQgdHJhbnNsYXRlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXIuXG4gICAqL1xuICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgdGhpcy50cmFuc2xhdGVSb3V0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlckNvbmZpZygpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlcyA9IHRoaXMudHJhbnNsYXRlUm91dGVzKFxuICAgICAgcm91dGVyLmNvbmZpZyxcbiAgICAgIHRoaXMuY3VycmVudFJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcodHJhbnNsYXRlZFJvdXRlcyk7XG4gIH1cblxuICBnZXRSb3V0ZVRyYW5zbGF0aW9uKHJvdXRlTmFtZTogc3RyaW5nKTogUm91dGVUcmFuc2xhdGlvbiB7XG4gICAgY29uc3Qgcm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5jdXJyZW50Um91dGVzVHJhbnNsYXRpb25zO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gcm91dGVzVHJhbnNsYXRpb25zICYmIHJvdXRlc1RyYW5zbGF0aW9uc1tyb3V0ZU5hbWVdO1xuICAgIGlmICghcm91dGVzVHJhbnNsYXRpb25zIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBObyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICAgICAgfSchYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVzKFxuICAgIHJvdXRlczogUm91dGVzLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcyA9IHRoaXMudHJhbnNsYXRlUm91dGUoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcyA9IHRoaXMudHJhbnNsYXRlUm91dGVzKFxuICAgICAgICAgIHJvdXRlLmNoaWxkcmVuLFxuICAgICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgICApO1xuXG4gICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMuZm9yRWFjaCh0cmFuc2xhdGVkUm91dGVBbGlhcyA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXMuY2hpbGRyZW4gPSB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goLi4udHJhbnNsYXRlZFJvdXRlQWxpYXNlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGUoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgLy8gd2UgYXNzdW1lIHRoYXQgJ3BhdGgnIGFuZCAncmVkaXJlY3RUbycgY2Fubm90IGJlIGJvdGggY29uZmlndXJlZCBmb3Igb25lIHJvdXRlXG4gICAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQSBwYXRoIHNob3VsZCBub3QgaGF2ZSBzZXQgYm90aCBcImN4UGF0aFwiIGFuZCBcImN4UmVkaXJlY3RUb1wiIHByb3BlcnRpZXMhIFJvdXRlOiAnJHtyb3V0ZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVBhdGgocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBbcm91dGVdOyAvLyBpZiBub3RoaW5nIGlzIGNvbmZpZ3VyYWJsZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YVtrZXldO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVBhdGgoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhyb3V0ZSwgJ2N4UGF0aCcsIHJvdXRlc1RyYW5zbGF0aW9ucykubWFwKFxuICAgICAgdHJhbnNsYXRlZFBhdGggPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogdHJhbnNsYXRlZFBhdGggfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8oXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHRyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlW10ge1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRocyA9IHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgICAgcm91dGUsXG4gICAgICAnY3hSZWRpcmVjdFRvJyxcbiAgICAgIHRyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRQYXRocy5sZW5ndGhcbiAgICAgID8gW3sgLi4ucm91dGUsIHJlZGlyZWN0VG86IHRyYW5zbGF0ZWRQYXRoc1swXSB9XSAvLyB0YWtlIHRoZSBmaXJzdCBwYXRoIGZyb20gbGlzdCBieSBjb252ZW50aW9uXG4gICAgICA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFuc2xhdGVkUGF0aHMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXksXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRSb3V0ZVRyYW5zbGF0aW9uKHJvdXRlTmFtZSk7XG4gICAgaWYgKHRyYW5zbGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGtleSAnJHtyb3V0ZU5hbWV9JyBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodHJhbnNsYXRpb24gJiYgdHJhbnNsYXRpb24ucGF0aHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBrZXkgJyR7a2V5fScgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgJ3BhdGhzJyBrZXkgZm9yICcke3JvdXRlTmFtZX0nIHJvdXRlIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gdHJhbnNsYXRpb24gb3IgdHJhbnNsYXRpb24ucGF0aHMgY2FuIGJlIG51bGwgLSB3aGljaCBtZWFucyBzd2l0Y2hpbmcgb2ZmIHRoZSByb3V0ZVxuICAgIHJldHVybiAodHJhbnNsYXRpb24gJiYgdHJhbnNsYXRpb24ucGF0aHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==