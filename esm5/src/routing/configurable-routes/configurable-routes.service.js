/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConfigService } from './routing-config.service';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "./url-matcher-factory.service";
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
        if (this.getRouteName(route)) {
            /** @type {?} */
            var paths = this.getConfiguredPaths(route);
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
     * @param {?} route
     * @return {?}
     */
    ConfigurableRoutesService.prototype.getConfiguredPaths = /**
     * @private
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var routeName = this.getRouteName(route);
        /** @type {?} */
        var routeConfig = this.routingConfigService.getRouteConfig(routeName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFVLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXpFO0lBRUUsbUNBQ1UsUUFBa0IsRUFDbEIsb0JBQTBDLEVBQzFDLGlCQUEyQztRQUYzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUc3QyxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRm5FLENBQUM7SUFJSjs7T0FFRzs7Ozs7O0lBQ0gsd0NBQUk7Ozs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtREFBZTs7OztJQUF2Qjs7O1lBRVEsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTVELE1BQU0sQ0FBQyxXQUFXLENBQUMs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QUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUxiLFFBQVE7Z0JBRXBCLG9CQUFvQjtnQkFDcEIsd0JBQXdCOzs7b0NBSGpDO0NBMEdDLEFBckdELElBcUdDO1NBcEdZLHlCQUF5Qjs7Ozs7O0lBT3BDLCtDQUEyQjs7Ozs7SUFMekIsNkNBQTBCOzs7OztJQUMxQix5REFBa0Q7Ozs7O0lBQ2xELHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3VybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsTWF0Y2hlckZhY3Rvcnk6IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlclxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29uZmlndXJlUm91dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXIoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZXMgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyhjb25maWd1cmVkUm91dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChjb25maWd1cmVkUm91dGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBpZiAodGhpcy5nZXRSb3V0ZU5hbWUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlKTtcbiAgICAgIHN3aXRjaCAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldEZhbHN5VXJsTWF0Y2hlcigpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGRlbGV0ZSByb3V0ZS5tYXRjaGVyO1xuICAgICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiBwYXRoc1swXSB9O1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRocyksXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlOyAvLyBpZiByb3V0ZSBkb2Vzbid0IGhhdmUgYSBuYW1lLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlTmFtZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hSb3V0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlOiBSb3V0ZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldFJvdXRlTmFtZShyb3V0ZSk7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgaWYgKHJvdXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGtleSAnJHtyb3V0ZU5hbWV9JyBpbiB0aGUgcm91dGVzIGNvbmZpZ2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfScgaW4gdGhlIHJvdXRlcyBjb25maWdgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=