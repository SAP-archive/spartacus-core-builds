/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { RoutingConfigService } from './routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "../services/url-matcher-factory.service";
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(injector, routingConfigService, urlMatcherFactory) {
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherFactory = urlMatcherFactory;
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * Configures all existing Routes in the Router
     */
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    ConfigurableRoutesService.prototype.init = 
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    function () {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configureRouter();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRouter = /**
     * @private
     * @return {?}
     */
    function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var configuredRoutes = this.configureRoutes(router.config);
        router.resetConfig(configuredRoutes);
    };
    /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRoutes = /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        var _this = this;
        /** @type {?} */
        var result = [];
        routes.forEach((/**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            /** @type {?} */
            var configuredRoute = _this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = _this.configureRoutes(route.children);
            }
            result.push(configuredRoute);
        }));
        return result;
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.configureRoute = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var routeName = this.getRouteName(route);
        if (routeName) {
            /** @type {?} */
            var routeConfig = this.routingConfigService.getRouteConfig(routeName);
            /** @type {?} */
            var paths = this.getConfiguredPaths(routeConfig, routeName, route);
            /** @type {?} */
            var isDisabled = routeConfig && routeConfig.disabled;
            if (isDisabled || !paths.length) {
                delete route.path;
                return tslib_1.__assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
            }
            else if (paths.length === 1) {
                delete route.matcher;
                return tslib_1.__assign({}, route, { path: paths[0] });
            }
            else {
                delete route.path;
                return tslib_1.__assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    };
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getRouteName = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return route.data && route.data.cxRoute;
    };
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} routeName
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfiguredPaths = /**
     * @private
     * @param {?} routeConfig
     * @param {?} routeName
     * @param {?} route
     * @return {?}
     */
    function (routeConfig, routeName, route) {
        if (routeConfig === undefined) {
            this.warn("Could not configure the named route '" + routeName + "'", route, "due to undefined key '" + routeName + "' in the routes config");
            return [];
        }
        if (routeConfig && routeConfig.paths === undefined) {
            this.warn("Could not configure the named route '" + routeName + "'", route, "due to undefined 'paths' for the named route '" + routeName + "' in the routes config");
            return [];
        }
        // routeConfig or routeConfig.paths can be null - which means switching off the route
        return (routeConfig && routeConfig.paths) || [];
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
        if (isDevMode()) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    ConfigurableRoutesService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: Injector },
        { type: RoutingConfigService },
        { type: UrlMatcherFactoryService }
    ]; };
    /** @nocollapse */ ConfigurableRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlMatcherFactoryService)); }, token: ConfigurableRoutesService, providedIn: "root" });
    return ConfigurableRoutesService;
}());
export { ConfigurableRoutesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.initCalled;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.urlMatcherFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRWhFO0lBRUUsbUNBQ1UsUUFBa0IsRUFDbEIsb0JBQTBDLEVBQzFDLGlCQUEyQztRQUYzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUc3QyxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRm5FLENBQUM7SUFJSjs7T0FFRzs7Ozs7O0lBQ0gsd0NBQUk7Ozs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtREFBZTs7OztJQUF2Qjs7O1lBRVEsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTVELE1BQU0sQ0FBQyxXQUFXLENBQUMs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OztRQUNsQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7O2dCQXZHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQU5iLFFBQVE7Z0JBSXBCLG9CQUFvQjtnQkFGcEIsd0JBQXdCOzs7b0NBRmpDO0NBOEdDLEFBeEdELElBd0dDO1NBdkdZLHlCQUF5Qjs7Ozs7O0lBT3BDLCtDQUEyQjs7Ozs7SUFMekIsNkNBQTBCOzs7OztJQUMxQix5REFBa0Q7Ozs7O0lBQ2xELHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHVybE1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogQ29uZmlndXJlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXJcbiAgICovXG4gIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRDYWxsZWQpIHtcbiAgICAgIHRoaXMuaW5pdENhbGxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNvbmZpZ3VyZVJvdXRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVyKCkge1xuICAgIC8vIFJvdXRlciBjb3VsZCBub3QgYmUgaW5qZWN0ZWQgaW4gY29uc3RydWN0b3IgZHVlIHRvIGN5Y2xpYyBkZXBlbmRlbmN5IHdpdGggQVBQX0lOSVRJQUxJWkVSOlxuICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cbiAgICBjb25zdCBjb25maWd1cmVkUm91dGVzID0gdGhpcy5jb25maWd1cmVSb3V0ZXMocm91dGVyLmNvbmZpZyk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcoY29uZmlndXJlZFJvdXRlcyk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgY29uZmlndXJlZFJvdXRlID0gdGhpcy5jb25maWd1cmVSb3V0ZShyb3V0ZSk7XG5cbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uZmlndXJlZFJvdXRlLmNoaWxkcmVuID0gdGhpcy5jb25maWd1cmVSb3V0ZXMocm91dGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goY29uZmlndXJlZFJvdXRlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZShyb3V0ZTogUm91dGUpOiBSb3V0ZSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRSb3V0ZU5hbWUocm91dGUpO1xuICAgIGlmIChyb3V0ZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWUpO1xuICAgICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldENvbmZpZ3VyZWRQYXRocyhyb3V0ZUNvbmZpZywgcm91dGVOYW1lLCByb3V0ZSk7XG4gICAgICBjb25zdCBpc0Rpc2FibGVkID0gcm91dGVDb25maWcgJiYgcm91dGVDb25maWcuZGlzYWJsZWQ7XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8ICFwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRGYWxzeVVybE1hdGNoZXIoKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocGF0aHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5tYXRjaGVyO1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogcGF0aHNbMF0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlckZhY3RvcnkuZ2V0TXVsdGlwbGVQYXRoc1VybE1hdGNoZXIocGF0aHMpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGU7IC8vIGlmIHJvdXRlIGRvZXNuJ3QgaGF2ZSBhIG5hbWUsIGp1c3QgcGFzcyB0aGUgb3JpZ2luYWwgcm91dGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVOYW1lKHJvdXRlOiBSb3V0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeFJvdXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWd1cmVkUGF0aHMoXG4gICAgcm91dGVDb25maWc6IFJvdXRlQ29uZmlnLFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlOiBSb3V0ZVxuICApOiBzdHJpbmdbXSB7XG4gICAgaWYgKHJvdXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGtleSAnJHtyb3V0ZU5hbWV9JyBpbiB0aGUgcm91dGVzIGNvbmZpZ2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfScgaW4gdGhlIHJvdXRlcyBjb25maWdgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=