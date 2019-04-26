/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfigLoader } from './routes-config-loader';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(config, injector, routesConfigLoader, urlMatcherFactory) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.urlMatcherFactory = urlMatcherFactory;
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
            var translatedRoute = _this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                var translatedChildrenRoutes = _this.translateRoutes(route.children, routesTranslations);
                translatedRoute.children = translatedChildrenRoutes;
            }
            result.push(translatedRoute);
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
        return route; // if nothing is configurable, just pass the original route
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
        /** @type {?} */
        var paths = this.getTranslatedPaths(route, 'cxPath', routesTranslations);
        switch (paths.length) {
            case 0:
                delete route.path;
                return tslib_1.__assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
            case 1:
                delete route.matcher;
                return tslib_1.__assign({}, route, { path: paths[0] });
            default:
                delete route.path;
                return tslib_1.__assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
        }
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
            ? tslib_1.__assign({}, route, { redirectTo: translatedPaths[0] }) : route;
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
        { type: RoutesConfigLoader },
        { type: UrlMatcherFactoryService }
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
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.urlMatcherFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSXpFO0lBRUUsbUNBQ1UsTUFBb0IsRUFDcEIsUUFBa0IsRUFDbEIsa0JBQXNDLEVBQ3RDLGlCQUEyQztRQUgzQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBR3BDLHdCQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLDJGQUEyRjtRQVVoSSxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBWm5FLENBQUM7SUFNSixzQkFBWSxnRUFBeUI7Ozs7O1FBQXJDO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMscUJBQXFCLENBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsRUFBc0IsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUlEOztPQUVHOzs7Ozs7SUFDRyx3Q0FBSTs7Ozs7O0lBQVY7Ozs7OzZCQUNNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBaEIsd0JBQWdCO3dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO3dCQUMvRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7Ozs7O0tBRWhDOzs7OztJQUVPLHlEQUFxQjs7OztJQUE3Qjs7O1lBRVEsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sRUFDYixJQUFJLENBQUMseUJBQXlCLENBQy9CO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsdURBQW1COzs7O0lBQW5CLFVBQW9CLFNBQWlCOztZQUM3QixrQkFBa0IsR0FBRyxJQUFJLENBQUMseUJBQXlCOztZQUVuRCxNQUFNLEdBQUcsa0JBQWtCLElBQUksa0JBQWtCLENBQUMsU0FBUyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQ1AsbURBQWlELFNBQVMsdUJBQ3hELElBQUksQ0FBQyxtQkFBbUIsT0FDdEIsQ0FDTCxDQUFDO1NBQ0g7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sbURBQWU7Ozs7OztJQUF2QixVQUNFLE1BQWMsRUFDZCxrQkFBc0M7UUFGeEMsaUJBbUJDOztZQWZPLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLOztnQkFDWixlQUFlLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUM7WUFFdEUsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFOztvQkFDckMsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FDbkQsS0FBSyxDQUFDLFFBQVEsRUFDZCxrQkFBa0IsQ0FDbkI7Z0JBRUQsZUFBZSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQzthQUNyRDtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sa0RBQWM7Ozs7OztJQUF0QixVQUNFLEtBQVksRUFDWixrQkFBc0M7UUFFdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN4QyxpRkFBaUY7WUFDakYsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FDUCx5RkFBbUYsS0FBTyxDQUMzRixDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDLDJEQUEyRDtJQUMzRSxDQUFDOzs7Ozs7O0lBRU8sa0RBQWM7Ozs7OztJQUF0QixVQUF1QixLQUFZLEVBQUUsR0FBeUI7UUFDNUQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQUVPLG1EQUFlOzs7Ozs7SUFBdkIsVUFBd0IsS0FBWSxFQUFFLEdBQXlCO1FBQzdELE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFTyxzREFBa0I7Ozs7OztJQUExQixVQUNFLEtBQVksRUFDWixrQkFBc0M7O1lBRWhDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztRQUMxRSxRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDbEIsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsSUFDcEQ7WUFFSixLQUFLLENBQUM7Z0JBQ0osT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNyQiw0QkFBWSxLQUFLLElBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBRztZQUV0QztnQkFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxJQUNqRTtTQUNMO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDREQUF3Qjs7Ozs7O0lBQWhDLFVBQ0UsS0FBWSxFQUNaLFlBQWdDOztZQUUxQixlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUM3QyxLQUFLLEVBQ0wsY0FBYyxFQUNkLFlBQVksQ0FDYjtRQUNELE9BQU8sZUFBZSxDQUFDLE1BQU07WUFDM0IsQ0FBQyxzQkFBTSxLQUFLLElBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7Ozs7Ozs7O0lBRU8sc0RBQWtCOzs7Ozs7O0lBQTFCLFVBQ0UsS0FBWSxFQUNaLEdBQXlCLEVBQ3pCLGtCQUFzQzs7WUFFaEMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQzs7WUFDNUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQ1AsOEJBQTRCLEdBQUcsb0JBQWUsU0FBUyxNQUFHLEVBQzFELEtBQUssRUFDTCwyQkFBeUIsU0FBUyw2QkFBMEIsRUFDNUQsa0JBQWtCLENBQ25CLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FDUCw4QkFBNEIsR0FBRyxvQkFBZSxTQUFTLE1BQUcsRUFDMUQsS0FBSyxFQUNMLHVDQUFxQyxTQUFTLG1DQUFnQyxFQUM5RSxrQkFBa0IsQ0FDbkIsQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxxRkFBcUY7UUFDckYsT0FBTyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLHdDQUFJOzs7OztJQUFaO1FBQWEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7U0FDdkI7SUFDSCxDQUFDOztnQkF2TEYsVUFBVTs7OztnQkFYRixZQUFZO2dCQUZBLFFBQVE7Z0JBUXBCLGtCQUFrQjtnQkFDbEIsd0JBQXdCOztJQTRMakMsZ0NBQUM7Q0FBQSxBQXhMRCxJQXdMQztTQXZMWSx5QkFBeUI7Ozs7OztJQVFwQyx3REFBNEM7Ozs7O0lBRTVDLDBEQUE0RDs7Ozs7SUFRNUQsK0NBQTJCOzs7OztJQWhCekIsMkNBQTRCOzs7OztJQUM1Qiw2Q0FBMEI7Ozs7O0lBQzFCLHVEQUE4Qzs7Ozs7SUFDOUMsc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7XG4gIFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgUm91dGVUcmFuc2xhdGlvbixcbiAgUm91dGVzQ29uZmlnLFxufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3VybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZSc7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlcixcbiAgICBwcml2YXRlIHVybE1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgY3VycmVudExhbmd1YWdlQ29kZSA9ICdlbic7IC8vIFRPRE86IGhhcmRjb2RlZCEgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBtb3JlIGxhbmd1YWdlcyBhcmUgc3VwcG9ydGVkIGJ5IGxvY2FsaXplZCByb3V0ZXNcblxuICBwcml2YXRlIGFsbFJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzQ29uZmlnWyd0cmFuc2xhdGlvbnMnXTtcblxuICBwcml2YXRlIGdldCBjdXJyZW50Um91dGVzVHJhbnNsYXRpb25zKCk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuYWxsUm91dGVzVHJhbnNsYXRpb25zW1xuICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgXSBhcyBSb3V0ZXNUcmFuc2xhdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGluaXRDYWxsZWQgPSBmYWxzZTsgLy8gZ3VhcmQgbm90IHRvIGNhbGwgaW5pdCgpIG1vcmUgdGhhbiBvbmNlXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHNlcnZpY2Ugd2l0aCBnaXZlbiB0cmFuc2xhdGlvbnMgYW5kIHRyYW5zbGF0ZXMgYWxsIGV4aXN0aW5nIFJvdXRlcyBpbiB0aGUgUm91dGVyLlxuICAgKi9cbiAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMucm91dGVzQ29uZmlnTG9hZGVyLmxvYWQoKTtcbiAgICAgIHRoaXMuYWxsUm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIucm91dGVzQ29uZmlnLnRyYW5zbGF0aW9ucztcbiAgICAgIHRoaXMudHJhbnNsYXRlUm91dGVyQ29uZmlnKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZXJDb25maWcoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuXG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKHRyYW5zbGF0ZWRSb3V0ZXMpO1xuICB9XG5cbiAgZ2V0Um91dGVUcmFuc2xhdGlvbihyb3V0ZU5hbWU6IHN0cmluZyk6IFJvdXRlVHJhbnNsYXRpb24ge1xuICAgIGNvbnN0IHJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudFJvdXRlc1RyYW5zbGF0aW9ucztcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJvdXRlc1RyYW5zbGF0aW9ucyAmJiByb3V0ZXNUcmFuc2xhdGlvbnNbcm91dGVOYW1lXTtcbiAgICBpZiAoIXJvdXRlc1RyYW5zbGF0aW9ucyB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgTm8gcm91dGUgdHJhbnNsYXRpb24gd2FzIGNvbmZpZ3VyZWQgZm9yIHBhZ2UgJyR7cm91dGVOYW1lfScgaW4gbGFuZ3VhZ2UgJyR7XG4gICAgICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgICAgIH0nIWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlcyhcbiAgICByb3V0ZXM6IFJvdXRlcyxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXMge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRSb3V0ZSA9IHRoaXMudHJhbnNsYXRlUm91dGUocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG5cbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZENoaWxkcmVuUm91dGVzID0gdGhpcy50cmFuc2xhdGVSb3V0ZXMoXG4gICAgICAgICAgcm91dGUuY2hpbGRyZW4sXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG5cbiAgICAgICAgdHJhbnNsYXRlZFJvdXRlLmNoaWxkcmVuID0gdHJhbnNsYXRlZENoaWxkcmVuUm91dGVzO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godHJhbnNsYXRlZFJvdXRlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZShcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGUge1xuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJykpIHtcbiAgICAgIC8vIHdlIGFzc3VtZSB0aGF0ICdwYXRoJyBhbmQgJ3JlZGlyZWN0VG8nIGNhbm5vdCBiZSBib3RoIGNvbmZpZ3VyZWQgZm9yIG9uZSByb3V0ZVxuICAgICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYEEgcGF0aCBzaG91bGQgbm90IGhhdmUgc2V0IGJvdGggXCJjeFBhdGhcIiBhbmQgXCJjeFJlZGlyZWN0VG9cIiBwcm9wZXJ0aWVzISBSb3V0ZTogJyR7cm91dGV9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVQYXRoKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hSZWRpcmVjdFRvJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhyb3V0ZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm91dGU7IC8vIGlmIG5vdGhpbmcgaXMgY29uZmlndXJhYmxlLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGlzQ29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhW2tleV07XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUGF0aChcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGUge1xuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRUcmFuc2xhdGVkUGF0aHMocm91dGUsICdjeFBhdGgnLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIHN3aXRjaCAocGF0aHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlckZhY3RvcnkuZ2V0RmFsc3lVcmxNYXRjaGVyKCksXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGVsZXRlIHJvdXRlLm1hdGNoZXI7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiBwYXRoc1swXSB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldE11bHRpcGxlUGF0aHNVcmxNYXRjaGVyKHBhdGhzKSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAgdHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGUge1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRocyA9IHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgICAgcm91dGUsXG4gICAgICAnY3hSZWRpcmVjdFRvJyxcbiAgICAgIHRyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZWRQYXRocy5sZW5ndGhcbiAgICAgID8geyAuLi5yb3V0ZSwgcmVkaXJlY3RUbzogdHJhbnNsYXRlZFBhdGhzWzBdIH0gLy8gdGFrZSB0aGUgZmlyc3QgcGF0aCBmcm9tIGxpc3QgYnkgY29udmVudGlvblxuICAgICAgOiByb3V0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5LFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihyb3V0ZU5hbWUpO1xuICAgIGlmICh0cmFuc2xhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBrZXkgJyR7cm91dGVOYW1lfScgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHRyYW5zbGF0aW9uIG9yIHRyYW5zbGF0aW9uLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=