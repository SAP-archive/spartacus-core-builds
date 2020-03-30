import { __assign, __decorate, __read, __spread } from "tslib";
import { Injectable, InjectionToken, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { RoutingConfigService } from './routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "../services/url-matcher.service";
var ConfigurableRoutesService = /** @class */ (function () {
    function ConfigurableRoutesService(injector, routingConfigService, urlMatcherService) {
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherService = urlMatcherService;
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     * Can be called only once.
     */
    ConfigurableRoutesService.prototype.init = function () {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configure();
        }
    };
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     */
    ConfigurableRoutesService.prototype.configure = function () {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        var router = this.injector.get(Router);
        router.resetConfig(this.configureRoutes(router.config));
    };
    /**
     * Sets the property `path` or `matcher` for the given routes, based on the Spartacus' routing configuration.
     *
     * @param routes list of Angular `Route` objects
     */
    ConfigurableRoutesService.prototype.configureRoutes = function (routes) {
        var _this = this;
        return routes.map(function (route) {
            var configuredRoute = _this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = _this.configureRoutes(route.children);
            }
            return configuredRoute;
        });
    };
    /**
     * Sets the property `path` or `matcher` of the `Route`, based on the Spartacus' routing configuration.
     * Uses the property `data.cxRoute` to determine the name of the route.
     * It's the same name used as a key in the routing configuration: `routing.routes[ROUTE NAME]`.
     *
     * @param route Angular `Route` object
     */
    ConfigurableRoutesService.prototype.configureRoute = function (route) {
        var _a;
        var routeName = this.getRouteName(route);
        if (routeName) {
            var routeConfig = this.routingConfigService.getRouteConfig(routeName);
            this.validateRouteConfig(routeConfig, routeName, route);
            if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.disabled) {
                delete route.path;
                return __assign(__assign({}, route), { matcher: this.urlMatcherService.getFalsy() });
            }
            else if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) {
                delete route.path;
                return __assign(__assign({}, route), { matcher: this.resolveUrlMatchers(route, routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) });
            }
            else if (((_a = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) === null || _a === void 0 ? void 0 : _a.length) === 1) {
                delete route.matcher;
                return __assign(__assign({}, route), { path: routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths[0] });
            }
            else {
                delete route.path;
                return __assign(__assign({}, route), { matcher: this.urlMatcherService.getFromPaths((routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) || []) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    };
    /**
     * Creates a single `UrlMatcher` based on given matchers and factories of matchers.
     *
     * @param route Route object
     * @param matchersOrFactories `UrlMatcher`s or injection tokens with a factory functions
     *  that create UrlMatchers based on the given route.
     */
    ConfigurableRoutesService.prototype.resolveUrlMatchers = function (route, matchersOrFactories) {
        var _this = this;
        var matchers = matchersOrFactories.map(function (matcherOrFactory) {
            return typeof matcherOrFactory === 'function'
                ? matcherOrFactory // matcher
                : _this.resolveUrlMatcherFactory(route, matcherOrFactory); // factory injection token
        });
        return this.urlMatcherService.getCombined(matchers);
    };
    /**
     * Creates an `UrlMatcher` based on the given route, using the factory function coming from the given injection token.
     *
     * @param route Route object
     * @param factoryToken injection token with a factory function that will create an UrlMatcher using given route
     */
    ConfigurableRoutesService.prototype.resolveUrlMatcherFactory = function (route, factoryToken) {
        var factory = this.injector.get(factoryToken);
        return factory(route);
    };
    /**
     * Returns the name of the Route stored in its property `data.cxRoute`
     * @param route
     */
    ConfigurableRoutesService.prototype.getRouteName = function (route) {
        return route.data && route.data.cxRoute;
    };
    ConfigurableRoutesService.prototype.validateRouteConfig = function (routeConfig, routeName, route) {
        if (isDevMode()) {
            // - null value of routeConfig or routeConfig.paths means explicit switching off the route - it's valid config
            // - routeConfig with defined `matchers` is valid, even if `paths` are undefined
            if (routeConfig === null ||
                routeConfig.paths === null || (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers)) {
                return;
            }
            // undefined value of routeConfig or routeConfig.paths is a misconfiguration
            if (!(routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths)) {
                this.warn("Could not configure the named route '" + routeName + "'", route, "due to undefined config or undefined 'paths' property for this route");
                return;
            }
        }
    };
    ConfigurableRoutesService.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isDevMode()) {
            console.warn.apply(console, __spread(args));
        }
    };
    ConfigurableRoutesService.ctorParameters = function () { return [
        { type: Injector },
        { type: RoutingConfigService },
        { type: UrlMatcherService }
    ]; };
    ConfigurableRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlMatcherService)); }, token: ConfigurableRoutesService, providedIn: "root" });
    ConfigurableRoutesService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ConfigurableRoutesService);
    return ConfigurableRoutesService;
}());
export { ConfigurableRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFTLE1BQU0sRUFBc0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRTtJQUNFLG1DQUNZLFFBQWtCLEVBQ2xCLG9CQUEwQyxFQUMxQyxpQkFBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHdEMsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZyRSxDQUFDO0lBSUo7OztPQUdHO0lBQ0gsd0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLDZDQUFTLEdBQW5CO1FBQ0UsNkZBQTZGO1FBQzdGLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxD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Q3RCLHlCQUF5QixDQWlLckM7b0NBektEO0NBeUtDLEFBaktELElBaUtDO1NBaktZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXJsLW1hdGNoZXIvdXJsLW1hdGNoZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogRW5oYW5jZXMgZXhpc3RpbmcgQW5ndWxhciByb3V0ZXMgdXNpbmcgdGhlIHJvdXRpbmcgY29uZmlnIG9mIFNwYXJ0YWN1cy5cbiAgICogQ2FuIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqL1xuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmhhbmNlcyBleGlzdGluZyBBbmd1bGFyIHJvdXRlcyB1c2luZyB0aGUgcm91dGluZyBjb25maWcgb2YgU3BhcnRhY3VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZSgpOiB2b2lkIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHJvdXRlci5yZXNldENvbmZpZyh0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJvcGVydHkgYHBhdGhgIG9yIGBtYXRjaGVyYCBmb3IgdGhlIGdpdmVuIHJvdXRlcywgYmFzZWQgb24gdGhlIFNwYXJ0YWN1cycgcm91dGluZyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGVzIGxpc3Qgb2YgQW5ndWxhciBgUm91dGVgIG9iamVjdHNcbiAgICovXG4gIHByb3RlY3RlZCBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZSA9IHRoaXMuY29uZmlndXJlUm91dGUocm91dGUpO1xuXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbmZpZ3VyZWRSb3V0ZS5jaGlsZHJlbiA9IHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb25maWd1cmVkUm91dGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJvcGVydHkgYHBhdGhgIG9yIGBtYXRjaGVyYCBvZiB0aGUgYFJvdXRlYCwgYmFzZWQgb24gdGhlIFNwYXJ0YWN1cycgcm91dGluZyBjb25maWd1cmF0aW9uLlxuICAgKiBVc2VzIHRoZSBwcm9wZXJ0eSBgZGF0YS5jeFJvdXRlYCB0byBkZXRlcm1pbmUgdGhlIG5hbWUgb2YgdGhlIHJvdXRlLlxuICAgKiBJdCdzIHRoZSBzYW1lIG5hbWUgdXNlZCBhcyBhIGtleSBpbiB0aGUgcm91dGluZyBjb25maWd1cmF0aW9uOiBgcm91dGluZy5yb3V0ZXNbUk9VVEUgTkFNRV1gLlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGUgQW5ndWxhciBgUm91dGVgIG9iamVjdFxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZVJvdXRlKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldFJvdXRlTmFtZShyb3V0ZSk7XG4gICAgaWYgKHJvdXRlTmFtZSkge1xuICAgICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgICB0aGlzLnZhbGlkYXRlUm91dGVDb25maWcocm91dGVDb25maWcsIHJvdXRlTmFtZSwgcm91dGUpO1xuXG4gICAgICBpZiAocm91dGVDb25maWc/LmRpc2FibGVkKSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0RmFsc3koKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGVDb25maWc/Lm1hdGNoZXJzKSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMucmVzb2x2ZVVybE1hdGNoZXJzKHJvdXRlLCByb3V0ZUNvbmZpZz8ubWF0Y2hlcnMpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZUNvbmZpZz8ucGF0aHM/Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBkZWxldGUgcm91dGUubWF0Y2hlcjtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIHBhdGg6IHJvdXRlQ29uZmlnPy5wYXRoc1swXSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyU2VydmljZS5nZXRGcm9tUGF0aHMoXG4gICAgICAgICAgICByb3V0ZUNvbmZpZz8ucGF0aHMgfHwgW11cbiAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91dGU7IC8vIGlmIHJvdXRlIGRvZXNuJ3QgaGF2ZSBhIG5hbWUsIGp1c3QgcGFzcyB0aGUgb3JpZ2luYWwgcm91dGVcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2luZ2xlIGBVcmxNYXRjaGVyYCBiYXNlZCBvbiBnaXZlbiBtYXRjaGVycyBhbmQgZmFjdG9yaWVzIG9mIG1hdGNoZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGUgUm91dGUgb2JqZWN0XG4gICAqIEBwYXJhbSBtYXRjaGVyc09yRmFjdG9yaWVzIGBVcmxNYXRjaGVyYHMgb3IgaW5qZWN0aW9uIHRva2VucyB3aXRoIGEgZmFjdG9yeSBmdW5jdGlvbnNcbiAgICogIHRoYXQgY3JlYXRlIFVybE1hdGNoZXJzIGJhc2VkIG9uIHRoZSBnaXZlbiByb3V0ZS5cbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlVXJsTWF0Y2hlcnMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIG1hdGNoZXJzT3JGYWN0b3JpZXM6IFJvdXRlQ29uZmlnWydtYXRjaGVycyddXG4gICk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXJzOiBVcmxNYXRjaGVyW10gPSBtYXRjaGVyc09yRmFjdG9yaWVzLm1hcChtYXRjaGVyT3JGYWN0b3J5ID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgbWF0Y2hlck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG1hdGNoZXJPckZhY3RvcnkgLy8gbWF0Y2hlclxuICAgICAgICA6IHRoaXMucmVzb2x2ZVVybE1hdGNoZXJGYWN0b3J5KHJvdXRlLCBtYXRjaGVyT3JGYWN0b3J5KTsgLy8gZmFjdG9yeSBpbmplY3Rpb24gdG9rZW5cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy51cmxNYXRjaGVyU2VydmljZS5nZXRDb21iaW5lZChtYXRjaGVycyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgVXJsTWF0Y2hlcmAgYmFzZWQgb24gdGhlIGdpdmVuIHJvdXRlLCB1c2luZyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBjb21pbmcgZnJvbSB0aGUgZ2l2ZW4gaW5qZWN0aW9uIHRva2VuLlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGUgUm91dGUgb2JqZWN0XG4gICAqIEBwYXJhbSBmYWN0b3J5VG9rZW4gaW5qZWN0aW9uIHRva2VuIHdpdGggYSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBjcmVhdGUgYW4gVXJsTWF0Y2hlciB1c2luZyBnaXZlbiByb3V0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVVcmxNYXRjaGVyRmFjdG9yeShcbiAgICByb3V0ZTogUm91dGUsXG4gICAgZmFjdG9yeVRva2VuOiBJbmplY3Rpb25Ub2tlbjxVcmxNYXRjaGVyRmFjdG9yeT5cbiAgKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuaW5qZWN0b3IuZ2V0KGZhY3RvcnlUb2tlbik7XG4gICAgcmV0dXJuIGZhY3Rvcnkocm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIFJvdXRlIHN0b3JlZCBpbiBpdHMgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWBcbiAgICogQHBhcmFtIHJvdXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Um91dGVOYW1lKHJvdXRlOiBSb3V0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5jeFJvdXRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZhbGlkYXRlUm91dGVDb25maWcoXG4gICAgcm91dGVDb25maWc6IFJvdXRlQ29uZmlnLFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlOiBSb3V0ZVxuICApIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIC8vIC0gbnVsbCB2YWx1ZSBvZiByb3V0ZUNvbmZpZyBvciByb3V0ZUNvbmZpZy5wYXRocyBtZWFucyBleHBsaWNpdCBzd2l0Y2hpbmcgb2ZmIHRoZSByb3V0ZSAtIGl0J3MgdmFsaWQgY29uZmlnXG4gICAgICAvLyAtIHJvdXRlQ29uZmlnIHdpdGggZGVmaW5lZCBgbWF0Y2hlcnNgIGlzIHZhbGlkLCBldmVuIGlmIGBwYXRoc2AgYXJlIHVuZGVmaW5lZFxuICAgICAgaWYgKFxuICAgICAgICByb3V0ZUNvbmZpZyA9PT0gbnVsbCB8fFxuICAgICAgICByb3V0ZUNvbmZpZy5wYXRocyA9PT0gbnVsbCB8fFxuICAgICAgICByb3V0ZUNvbmZpZz8ubWF0Y2hlcnNcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVuZGVmaW5lZCB2YWx1ZSBvZiByb3V0ZUNvbmZpZyBvciByb3V0ZUNvbmZpZy5wYXRocyBpcyBhIG1pc2NvbmZpZ3VyYXRpb25cbiAgICAgIGlmICghcm91dGVDb25maWc/LnBhdGhzKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IGNvbmZpZ3VyZSB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGNvbmZpZyBvciB1bmRlZmluZWQgJ3BhdGhzJyBwcm9wZXJ0eSBmb3IgdGhpcyByb3V0ZWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=