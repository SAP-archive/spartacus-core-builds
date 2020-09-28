import { Injectable, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { RoutingConfigService } from './routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "../services/url-matcher.service";
export class ConfigurableRoutesService {
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
                (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.paths) === null || (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.matchers)) {
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
}
ConfigurableRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlMatcherService)); }, token: ConfigurableRoutesService, providedIn: "root" });
ConfigurableRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ConfigurableRoutesService.ctorParameters = () => [
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBUyxNQUFNLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEUsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxZQUNZLFFBQWtCLEVBQ2xCLG9CQUEwQyxFQUMxQyxpQkFBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHdEMsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZyRSxDQUFDO0lBSUo7OztPQUdHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsNkZBQTZGO1FBQzdGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMs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QUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVksQ0FBQyxLQUFZO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBRVMsbUJBQW1CLENBQzNCLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLEtBQVk7UUFFWixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsOEdBQThHO1lBQzlHLGdGQUFnRjtZQUNoRixJQUNFLFdBQVcsS0FBSyxJQUFJO2dCQUNwQixDQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLE1BQUssSUFBSSxLQUMzQixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsUUFBUSxDQUFBLEVBQ3JCO2dCQUNBLE9BQU87YUFDUjtZQUVELDRFQUE0RTtZQUM1RSxJQUFJLEVBQUMsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEtBQUssQ0FBQSxFQUFFO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUNQLHdDQUF3QyxTQUFTLEdBQUcsRUFDcEQsS0FBSyxFQUNMLHNFQUFzRSxDQUN2RSxDQUFDO2dCQUNGLE9BQU87YUFDUjtTQUNGO0lBQ0gsQ0FBQztJQUVPLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDbEIsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7WUFuS0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBUEcsUUFBUTtZQUtwQyxvQkFBb0I7WUFIcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIFJvdXRlcywgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsTWF0Y2hlckZhY3RvcnkgfSBmcm9tICcuLi91cmwtbWF0Y2hlci91cmwtbWF0Y2hlci1mYWN0b3J5JztcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBFbmhhbmNlcyBleGlzdGluZyBBbmd1bGFyIHJvdXRlcyB1c2luZyB0aGUgcm91dGluZyBjb25maWcgb2YgU3BhcnRhY3VzLlxuICAgKiBDYW4gYmUgY2FsbGVkIG9ubHkgb25jZS5cbiAgICovXG4gIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRDYWxsZWQpIHtcbiAgICAgIHRoaXMuaW5pdENhbGxlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuaGFuY2VzIGV4aXN0aW5nIEFuZ3VsYXIgcm91dGVzIHVzaW5nIHRoZSByb3V0aW5nIGNvbmZpZyBvZiBTcGFydGFjdXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlndXJlKCk6IHZvaWQge1xuICAgIC8vIFJvdXRlciBjb3VsZCBub3QgYmUgaW5qZWN0ZWQgaW4gY29uc3RydWN0b3IgZHVlIHRvIGN5Y2xpYyBkZXBlbmRlbmN5IHdpdGggQVBQX0lOSVRJQUxJWkVSOlxuICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlci5jb25maWcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgcGF0aGAgb3IgYG1hdGNoZXJgIGZvciB0aGUgZ2l2ZW4gcm91dGVzLCBiYXNlZCBvbiB0aGUgU3BhcnRhY3VzJyByb3V0aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSByb3V0ZXMgbGlzdCBvZiBBbmd1bGFyIGBSb3V0ZWAgb2JqZWN0c1xuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyk6IFJvdXRlcyB7XG4gICAgcmV0dXJuIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlndXJlZFJvdXRlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByb3BlcnR5IGBwYXRoYCBvciBgbWF0Y2hlcmAgb2YgdGhlIGBSb3V0ZWAsIGJhc2VkIG9uIHRoZSBTcGFydGFjdXMnIHJvdXRpbmcgY29uZmlndXJhdGlvbi5cbiAgICogVXNlcyB0aGUgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWAgdG8gZGV0ZXJtaW5lIHRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAgICogSXQncyB0aGUgc2FtZSBuYW1lIHVzZWQgYXMgYSBrZXkgaW4gdGhlIHJvdXRpbmcgY29uZmlndXJhdGlvbjogYHJvdXRpbmcucm91dGVzW1JPVVRFIE5BTUVdYC5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIEFuZ3VsYXIgYFJvdXRlYCBvYmplY3RcbiAgICovXG4gIHByb3RlY3RlZCBjb25maWd1cmVSb3V0ZShyb3V0ZTogUm91dGUpOiBSb3V0ZSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRSb3V0ZU5hbWUocm91dGUpO1xuICAgIGlmIChyb3V0ZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWUpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJvdXRlQ29uZmlnKHJvdXRlQ29uZmlnLCByb3V0ZU5hbWUsIHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlQ29uZmlnPy5kaXNhYmxlZCkge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldEZhbHN5KCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlQ29uZmlnPy5tYXRjaGVycykge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnJlc29sdmVVcmxNYXRjaGVycyhyb3V0ZSwgcm91dGVDb25maWc/Lm1hdGNoZXJzKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGVDb25maWc/LnBhdGhzPy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLm1hdGNoZXI7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiByb3V0ZUNvbmZpZz8ucGF0aHNbMF0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0RnJvbVBhdGhzKFxuICAgICAgICAgICAgcm91dGVDb25maWc/LnBhdGhzIHx8IFtdXG4gICAgICAgICAgKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlOyAvLyBpZiByb3V0ZSBkb2Vzbid0IGhhdmUgYSBuYW1lLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBgVXJsTWF0Y2hlcmAgYmFzZWQgb24gZ2l2ZW4gbWF0Y2hlcnMgYW5kIGZhY3RvcmllcyBvZiBtYXRjaGVycy5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgKiBAcGFyYW0gbWF0Y2hlcnNPckZhY3RvcmllcyBgVXJsTWF0Y2hlcmBzIG9yIGluamVjdGlvbiB0b2tlbnMgd2l0aCBhIGZhY3RvcnkgZnVuY3Rpb25zXG4gICAqICB0aGF0IGNyZWF0ZSBVcmxNYXRjaGVycyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcm91dGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZVVybE1hdGNoZXJzKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICBtYXRjaGVyc09yRmFjdG9yaWVzOiBSb3V0ZUNvbmZpZ1snbWF0Y2hlcnMnXVxuICApOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyczogVXJsTWF0Y2hlcltdID0gbWF0Y2hlcnNPckZhY3Rvcmllcy5tYXAoXG4gICAgICAobWF0Y2hlck9yRmFjdG9yeSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG1hdGNoZXJPckZhY3RvcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IG1hdGNoZXJPckZhY3RvcnkgLy8gbWF0Y2hlclxuICAgICAgICAgIDogdGhpcy5yZXNvbHZlVXJsTWF0Y2hlckZhY3Rvcnkocm91dGUsIG1hdGNoZXJPckZhY3RvcnkpOyAvLyBmYWN0b3J5IGluamVjdGlvbiB0b2tlblxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0Q29tYmluZWQobWF0Y2hlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYFVybE1hdGNoZXJgIGJhc2VkIG9uIHRoZSBnaXZlbiByb3V0ZSwgdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb24gY29taW5nIGZyb20gdGhlIGdpdmVuIGluamVjdGlvbiB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgKiBAcGFyYW0gZmFjdG9yeVRva2VuIGluamVjdGlvbiB0b2tlbiB3aXRoIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY3JlYXRlIGFuIFVybE1hdGNoZXIgdXNpbmcgZ2l2ZW4gcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlVXJsTWF0Y2hlckZhY3RvcnkoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIGZhY3RvcnlUb2tlbjogSW5qZWN0aW9uVG9rZW48VXJsTWF0Y2hlckZhY3Rvcnk+XG4gICk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmluamVjdG9yLmdldChmYWN0b3J5VG9rZW4pO1xuICAgIHJldHVybiBmYWN0b3J5KHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBSb3V0ZSBzdG9yZWQgaW4gaXRzIHByb3BlcnR5IGBkYXRhLmN4Um91dGVgXG4gICAqIEBwYXJhbSByb3V0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJvdXRlTmFtZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hSb3V0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVJvdXRlQ29uZmlnKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZTogUm91dGVcbiAgKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAvLyAtIG51bGwgdmFsdWUgb2Ygcm91dGVDb25maWcgb3Igcm91dGVDb25maWcucGF0aHMgbWVhbnMgZXhwbGljaXQgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGUgLSBpdCdzIHZhbGlkIGNvbmZpZ1xuICAgICAgLy8gLSByb3V0ZUNvbmZpZyB3aXRoIGRlZmluZWQgYG1hdGNoZXJzYCBpcyB2YWxpZCwgZXZlbiBpZiBgcGF0aHNgIGFyZSB1bmRlZmluZWRcbiAgICAgIGlmIChcbiAgICAgICAgcm91dGVDb25maWcgPT09IG51bGwgfHxcbiAgICAgICAgcm91dGVDb25maWc/LnBhdGhzID09PSBudWxsIHx8XG4gICAgICAgIHJvdXRlQ29uZmlnPy5tYXRjaGVyc1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gdW5kZWZpbmVkIHZhbHVlIG9mIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIGlzIGEgbWlzY29uZmlndXJhdGlvblxuICAgICAgaWYgKCFyb3V0ZUNvbmZpZz8ucGF0aHMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgY29uZmlnIG9yIHVuZGVmaW5lZCAncGF0aHMnIHByb3BlcnR5IGZvciB0aGlzIHJvdXRlYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==