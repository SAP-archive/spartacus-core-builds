import { __decorate } from "tslib";
import { Injectable, InjectionToken, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { RoutingConfigService } from './routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "../services/url-matcher.service";
let ConfigurableRoutesService = class ConfigurableRoutesService {
    constructor(injector, routingConfigService, urlMatcherService) {
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherService = urlMatcherService;
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     * Can be called only once.
     */
    init() {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configure();
        }
    }
    /**
     * Enhances existing Angular routes using the routing config of Spartacus.
     */
    configure() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        const router = this.injector.get(Router);
        router.resetConfig(this.configureRoutes(router.config));
    }
    /**
     * Sets the property `path` or `matcher` for the given routes, based on the Spartacus' routing configuration.
     *
     * @param routes list of Angular `Route` objects
     */
    configureRoutes(routes) {
        return routes.map((route) => {
            const configuredRoute = this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = this.configureRoutes(route.children);
            }
            return configuredRoute;
        });
    }
    /**
     * Sets the property `path` or `matcher` of the `Route`, based on the Spartacus' routing configuration.
     * Uses the property `data.cxRoute` to determine the name of the route.
     * It's the same name used as a key in the routing configuration: `routing.routes[ROUTE NAME]`.
     *
     * @param route Angular `Route` object
     */
    configureRoute(route) {
        var _a;
        const routeName = this.getRouteName(route);
        if (routeName) {
            const routeConfig = this.routingConfigService.getRouteConfig(routeName);
            this.validateRouteConfig(routeConfig, routeName, route);
            if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.disabled) {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.urlMatcherService.getFalsy() });
            }
            else if (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.resolveUrlMatchers(route, routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers) });
            }
            else if (((_a = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) === null || _a === void 0 ? void 0 : _a.length) === 1) {
                delete route.matcher;
                return Object.assign(Object.assign({}, route), { path: routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths[0] });
            }
            else {
                delete route.path;
                return Object.assign(Object.assign({}, route), { matcher: this.urlMatcherService.getFromPaths((routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) || []) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    }
    /**
     * Creates a single `UrlMatcher` based on given matchers and factories of matchers.
     *
     * @param route Route object
     * @param matchersOrFactories `UrlMatcher`s or injection tokens with a factory functions
     *  that create UrlMatchers based on the given route.
     */
    resolveUrlMatchers(route, matchersOrFactories) {
        const matchers = matchersOrFactories.map((matcherOrFactory) => {
            return typeof matcherOrFactory === 'function'
                ? matcherOrFactory // matcher
                : this.resolveUrlMatcherFactory(route, matcherOrFactory); // factory injection token
        });
        return this.urlMatcherService.getCombined(matchers);
    }
    /**
     * Creates an `UrlMatcher` based on the given route, using the factory function coming from the given injection token.
     *
     * @param route Route object
     * @param factoryToken injection token with a factory function that will create an UrlMatcher using given route
     */
    resolveUrlMatcherFactory(route, factoryToken) {
        const factory = this.injector.get(factoryToken);
        return factory(route);
    }
    /**
     * Returns the name of the Route stored in its property `data.cxRoute`
     * @param route
     */
    getRouteName(route) {
        return route.data && route.data.cxRoute;
    }
    validateRouteConfig(routeConfig, routeName, route) {
        if (isDevMode()) {
            // - null value of routeConfig or routeConfig.paths means explicit switching off the route - it's valid config
            // - routeConfig with defined `matchers` is valid, even if `paths` are undefined
            if (routeConfig === null ||
                routeConfig.paths === null || (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers)) {
                return;
            }
            // undefined value of routeConfig or routeConfig.paths is a misconfiguration
            if (!(routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths)) {
                this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined config or undefined 'paths' property for this route`);
                return;
            }
        }
    }
    warn(...args) {
        if (isDevMode()) {
            console.warn(...args);
        }
    }
};
ConfigurableRoutesService.ctorParameters = () => [
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherService }
];
ConfigurableRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlMatcherService)); }, token: ConfigurableRoutesService, providedIn: "root" });
ConfigurableRoutesService = __decorate([
    Injectable({ providedIn: 'root' })
], ConfigurableRoutesService);
export { ConfigurableRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFTLE1BQU0sRUFBc0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUNwQyxZQUNZLFFBQWtCLEVBQ2xCLG9CQUEwQyxFQUMxQyxpQkFBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHdEMsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZyRSxDQUFDO0lBSUo7OztPQUdHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsNkZBQTZGO1FBQzdGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FB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IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXJsLW1hdGNoZXIvdXJsLW1hdGNoZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogRW5oYW5jZXMgZXhpc3RpbmcgQW5ndWxhciByb3V0ZXMgdXNpbmcgdGhlIHJvdXRpbmcgY29uZmlnIG9mIFNwYXJ0YWN1cy5cbiAgICogQ2FuIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqL1xuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmhhbmNlcyBleGlzdGluZyBBbmd1bGFyIHJvdXRlcyB1c2luZyB0aGUgcm91dGluZyBjb25maWcgb2YgU3BhcnRhY3VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZSgpOiB2b2lkIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHJvdXRlci5yZXNldENvbmZpZyh0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJvcGVydHkgYHBhdGhgIG9yIGBtYXRjaGVyYCBmb3IgdGhlIGdpdmVuIHJvdXRlcywgYmFzZWQgb24gdGhlIFNwYXJ0YWN1cycgcm91dGluZyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcm91dGVzIGxpc3Qgb2YgQW5ndWxhciBgUm91dGVgIG9iamVjdHNcbiAgICovXG4gIHByb3RlY3RlZCBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIHJldHVybiByb3V0ZXMubWFwKChyb3V0ZSkgPT4ge1xuICAgICAgY29uc3QgY29uZmlndXJlZFJvdXRlID0gdGhpcy5jb25maWd1cmVSb3V0ZShyb3V0ZSk7XG5cbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uZmlndXJlZFJvdXRlLmNoaWxkcmVuID0gdGhpcy5jb25maWd1cmVSb3V0ZXMocm91dGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZ3VyZWRSb3V0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgcGF0aGAgb3IgYG1hdGNoZXJgIG9mIHRoZSBgUm91dGVgLCBiYXNlZCBvbiB0aGUgU3BhcnRhY3VzJyByb3V0aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAqIFVzZXMgdGhlIHByb3BlcnR5IGBkYXRhLmN4Um91dGVgIHRvIGRldGVybWluZSB0aGUgbmFtZSBvZiB0aGUgcm91dGUuXG4gICAqIEl0J3MgdGhlIHNhbWUgbmFtZSB1c2VkIGFzIGEga2V5IGluIHRoZSByb3V0aW5nIGNvbmZpZ3VyYXRpb246IGByb3V0aW5nLnJvdXRlc1tST1VURSBOQU1FXWAuXG4gICAqXG4gICAqIEBwYXJhbSByb3V0ZSBBbmd1bGFyIGBSb3V0ZWAgb2JqZWN0XG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlndXJlUm91dGUocm91dGU6IFJvdXRlKTogUm91dGUge1xuICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Um91dGVOYW1lKHJvdXRlKTtcbiAgICBpZiAocm91dGVOYW1lKSB7XG4gICAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcocm91dGVOYW1lKTtcbiAgICAgIHRoaXMudmFsaWRhdGVSb3V0ZUNvbmZpZyhyb3V0ZUNvbmZpZywgcm91dGVOYW1lLCByb3V0ZSk7XG5cbiAgICAgIGlmIChyb3V0ZUNvbmZpZz8uZGlzYWJsZWQpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyU2VydmljZS5nZXRGYWxzeSgpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZUNvbmZpZz8ubWF0Y2hlcnMpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy5yZXNvbHZlVXJsTWF0Y2hlcnMocm91dGUsIHJvdXRlQ29uZmlnPy5tYXRjaGVycyksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlQ29uZmlnPy5wYXRocz8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5tYXRjaGVyO1xuICAgICAgICByZXR1cm4geyAuLi5yb3V0ZSwgcGF0aDogcm91dGVDb25maWc/LnBhdGhzWzBdIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldEZyb21QYXRocyhcbiAgICAgICAgICAgIHJvdXRlQ29uZmlnPy5wYXRocyB8fCBbXVxuICAgICAgICAgICksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZTsgLy8gaWYgcm91dGUgZG9lc24ndCBoYXZlIGEgbmFtZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgYFVybE1hdGNoZXJgIGJhc2VkIG9uIGdpdmVuIG1hdGNoZXJzIGFuZCBmYWN0b3JpZXMgb2YgbWF0Y2hlcnMuXG4gICAqXG4gICAqIEBwYXJhbSByb3V0ZSBSb3V0ZSBvYmplY3RcbiAgICogQHBhcmFtIG1hdGNoZXJzT3JGYWN0b3JpZXMgYFVybE1hdGNoZXJgcyBvciBpbmplY3Rpb24gdG9rZW5zIHdpdGggYSBmYWN0b3J5IGZ1bmN0aW9uc1xuICAgKiAgdGhhdCBjcmVhdGUgVXJsTWF0Y2hlcnMgYmFzZWQgb24gdGhlIGdpdmVuIHJvdXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlc29sdmVVcmxNYXRjaGVycyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAgbWF0Y2hlcnNPckZhY3RvcmllczogUm91dGVDb25maWdbJ21hdGNoZXJzJ11cbiAgKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlcnM6IFVybE1hdGNoZXJbXSA9IG1hdGNoZXJzT3JGYWN0b3JpZXMubWFwKFxuICAgICAgKG1hdGNoZXJPckZhY3RvcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBtYXRjaGVyT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBtYXRjaGVyT3JGYWN0b3J5IC8vIG1hdGNoZXJcbiAgICAgICAgICA6IHRoaXMucmVzb2x2ZVVybE1hdGNoZXJGYWN0b3J5KHJvdXRlLCBtYXRjaGVyT3JGYWN0b3J5KTsgLy8gZmFjdG9yeSBpbmplY3Rpb24gdG9rZW5cbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldENvbWJpbmVkKG1hdGNoZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBVcmxNYXRjaGVyYCBiYXNlZCBvbiB0aGUgZ2l2ZW4gcm91dGUsIHVzaW5nIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGNvbWluZyBmcm9tIHRoZSBnaXZlbiBpbmplY3Rpb24gdG9rZW4uXG4gICAqXG4gICAqIEBwYXJhbSByb3V0ZSBSb3V0ZSBvYmplY3RcbiAgICogQHBhcmFtIGZhY3RvcnlUb2tlbiBpbmplY3Rpb24gdG9rZW4gd2l0aCBhIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGNyZWF0ZSBhbiBVcmxNYXRjaGVyIHVzaW5nIGdpdmVuIHJvdXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZVVybE1hdGNoZXJGYWN0b3J5KFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICBmYWN0b3J5VG9rZW46IEluamVjdGlvblRva2VuPFVybE1hdGNoZXJGYWN0b3J5PlxuICApOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5pbmplY3Rvci5nZXQoZmFjdG9yeVRva2VuKTtcbiAgICByZXR1cm4gZmFjdG9yeShyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgUm91dGUgc3RvcmVkIGluIGl0cyBwcm9wZXJ0eSBgZGF0YS5jeFJvdXRlYFxuICAgKiBAcGFyYW0gcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRSb3V0ZU5hbWUocm91dGU6IFJvdXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Um91dGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgdmFsaWRhdGVSb3V0ZUNvbmZpZyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcm91dGVOYW1lOiBzdHJpbmcsXG4gICAgcm91dGU6IFJvdXRlXG4gICkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgLy8gLSBudWxsIHZhbHVlIG9mIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIG1lYW5zIGV4cGxpY2l0IHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlIC0gaXQncyB2YWxpZCBjb25maWdcbiAgICAgIC8vIC0gcm91dGVDb25maWcgd2l0aCBkZWZpbmVkIGBtYXRjaGVyc2AgaXMgdmFsaWQsIGV2ZW4gaWYgYHBhdGhzYCBhcmUgdW5kZWZpbmVkXG4gICAgICBpZiAoXG4gICAgICAgIHJvdXRlQ29uZmlnID09PSBudWxsIHx8XG4gICAgICAgIHJvdXRlQ29uZmlnLnBhdGhzID09PSBudWxsIHx8XG4gICAgICAgIHJvdXRlQ29uZmlnPy5tYXRjaGVyc1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdW5kZWZpbmVkIHZhbHVlIG9mIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIGlzIGEgbWlzY29uZmlndXJhdGlvblxuICAgICAgaWYgKCFyb3V0ZUNvbmZpZz8ucGF0aHMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgY29uZmlnIG9yIHVuZGVmaW5lZCAncGF0aHMnIHByb3BlcnR5IGZvciB0aGlzIHJvdXRlYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==