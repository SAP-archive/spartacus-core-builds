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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXpFO0lBRUUsbUNBQ1UsUUFBa0IsRUFDbEIsb0JBQTBDLEVBQzFDLGlCQUEyQztRQUYzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUc3QyxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRm5FLENBQUM7SUFJSjs7T0FFRzs7Ozs7O0lBQ0gsd0NBQUk7Ozs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtREFBZTs7OztJQUF2Qjs7O1lBRVEsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFFbEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTVELE1BQU0sQ0FBQyxXQUFXLENBQUMs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OztRQUNsQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7O2dCQXZHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQU5iLFFBQVE7Z0JBR3BCLG9CQUFvQjtnQkFDcEIsd0JBQXdCOzs7b0NBSmpDO0NBOEdDLEFBeEdELElBd0dDO1NBdkdZLHlCQUF5Qjs7Ozs7O0lBT3BDLCtDQUEyQjs7Ozs7SUFMekIsNkNBQTBCOzs7OztJQUMxQix5REFBa0Q7Ozs7O0lBQ2xELHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3VybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsTWF0Y2hlckZhY3Rvcnk6IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlclxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29uZmlndXJlUm91dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXIoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZXMgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyhjb25maWd1cmVkUm91dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChjb25maWd1cmVkUm91dGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldFJvdXRlTmFtZShyb3V0ZSk7XG4gICAgaWYgKHJvdXRlTmFtZSkge1xuICAgICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlQ29uZmlnLCByb3V0ZU5hbWUsIHJvdXRlKTtcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSByb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5kaXNhYmxlZDtcblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgIXBhdGhzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldEZhbHN5VXJsTWF0Y2hlcigpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChwYXRocy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLm1hdGNoZXI7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiBwYXRoc1swXSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRocyksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZTsgLy8gaWYgcm91dGUgZG9lc24ndCBoYXZlIGEgbmFtZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZU5hbWUocm91dGU6IFJvdXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Um91dGU7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyZWRQYXRocyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcm91dGVOYW1lOiBzdHJpbmcsXG4gICAgcm91dGU6IFJvdXRlXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAocm91dGVDb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IGNvbmZpZ3VyZSB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5ICcke3JvdXRlTmFtZX0nIGluIHRoZSByb3V0ZXMgY29uZmlnYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycgZm9yIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBpbiB0aGUgcm91dGVzIGNvbmZpZ2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gcm91dGVDb25maWcgb3Igcm91dGVDb25maWcucGF0aHMgY2FuIGJlIG51bGwgLSB3aGljaCBtZWFucyBzd2l0Y2hpbmcgb2ZmIHRoZSByb3V0ZVxuICAgIHJldHVybiAocm91dGVDb25maWcgJiYgcm91dGVDb25maWcucGF0aHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==