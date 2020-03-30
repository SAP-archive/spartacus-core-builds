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
        return routes.map(route => {
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
        const matchers = matchersOrFactories.map(matcherOrFactory => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFTLE1BQU0sRUFBc0IsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUdoRSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUNwQyxZQUNZLFFBQWtCLEVBQ2xCLG9CQUEwQyxFQUMxQyxpQkFBb0M7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHdEMsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZyRSxDQUFDO0lBSUo7OztPQUdHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsNkZBQTZGO1FBQzdGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FB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LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgUm91dGVzLCBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXJsLW1hdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeSB9IGZyb20gJy4uL3VybC1tYXRjaGVyL3VybC1tYXRjaGVyLWZhY3RvcnknO1xuaW1wb3J0IHsgUm91dGVDb25maWcgfSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGluaXRDYWxsZWQgPSBmYWxzZTsgLy8gZ3VhcmQgbm90IHRvIGNhbGwgaW5pdCgpIG1vcmUgdGhhbiBvbmNlXG5cbiAgLyoqXG4gICAqIEVuaGFuY2VzIGV4aXN0aW5nIEFuZ3VsYXIgcm91dGVzIHVzaW5nIHRoZSByb3V0aW5nIGNvbmZpZyBvZiBTcGFydGFjdXMuXG4gICAqIENhbiBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5oYW5jZXMgZXhpc3RpbmcgQW5ndWxhciByb3V0ZXMgdXNpbmcgdGhlIHJvdXRpbmcgY29uZmlnIG9mIFNwYXJ0YWN1cy5cbiAgICovXG4gIHByb3RlY3RlZCBjb25maWd1cmUoKTogdm9pZCB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICByb3V0ZXIucmVzZXRDb25maWcodGhpcy5jb25maWd1cmVSb3V0ZXMocm91dGVyLmNvbmZpZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByb3BlcnR5IGBwYXRoYCBvciBgbWF0Y2hlcmAgZm9yIHRoZSBnaXZlbiByb3V0ZXMsIGJhc2VkIG9uIHRoZSBTcGFydGFjdXMnIHJvdXRpbmcgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlcyBsaXN0IG9mIEFuZ3VsYXIgYFJvdXRlYCBvYmplY3RzXG4gICAqL1xuICBwcm90ZWN0ZWQgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzIHtcbiAgICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlndXJlZFJvdXRlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByb3BlcnR5IGBwYXRoYCBvciBgbWF0Y2hlcmAgb2YgdGhlIGBSb3V0ZWAsIGJhc2VkIG9uIHRoZSBTcGFydGFjdXMnIHJvdXRpbmcgY29uZmlndXJhdGlvbi5cbiAgICogVXNlcyB0aGUgcHJvcGVydHkgYGRhdGEuY3hSb3V0ZWAgdG8gZGV0ZXJtaW5lIHRoZSBuYW1lIG9mIHRoZSByb3V0ZS5cbiAgICogSXQncyB0aGUgc2FtZSBuYW1lIHVzZWQgYXMgYSBrZXkgaW4gdGhlIHJvdXRpbmcgY29uZmlndXJhdGlvbjogYHJvdXRpbmcucm91dGVzW1JPVVRFIE5BTUVdYC5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIEFuZ3VsYXIgYFJvdXRlYCBvYmplY3RcbiAgICovXG4gIHByb3RlY3RlZCBjb25maWd1cmVSb3V0ZShyb3V0ZTogUm91dGUpOiBSb3V0ZSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRSb3V0ZU5hbWUocm91dGUpO1xuICAgIGlmIChyb3V0ZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJvdXRlQ29uZmlnID0gdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhyb3V0ZU5hbWUpO1xuICAgICAgdGhpcy52YWxpZGF0ZVJvdXRlQ29uZmlnKHJvdXRlQ29uZmlnLCByb3V0ZU5hbWUsIHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlQ29uZmlnPy5kaXNhYmxlZCkge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldEZhbHN5KCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlQ29uZmlnPy5tYXRjaGVycykge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnJlc29sdmVVcmxNYXRjaGVycyhyb3V0ZSwgcm91dGVDb25maWc/Lm1hdGNoZXJzKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGVDb25maWc/LnBhdGhzPy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLm1hdGNoZXI7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiByb3V0ZUNvbmZpZz8ucGF0aHNbMF0gfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0RnJvbVBhdGhzKFxuICAgICAgICAgICAgcm91dGVDb25maWc/LnBhdGhzIHx8IFtdXG4gICAgICAgICAgKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlOyAvLyBpZiByb3V0ZSBkb2Vzbid0IGhhdmUgYSBuYW1lLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBgVXJsTWF0Y2hlcmAgYmFzZWQgb24gZ2l2ZW4gbWF0Y2hlcnMgYW5kIGZhY3RvcmllcyBvZiBtYXRjaGVycy5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgKiBAcGFyYW0gbWF0Y2hlcnNPckZhY3RvcmllcyBgVXJsTWF0Y2hlcmBzIG9yIGluamVjdGlvbiB0b2tlbnMgd2l0aCBhIGZhY3RvcnkgZnVuY3Rpb25zXG4gICAqICB0aGF0IGNyZWF0ZSBVcmxNYXRjaGVycyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcm91dGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVzb2x2ZVVybE1hdGNoZXJzKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICBtYXRjaGVyc09yRmFjdG9yaWVzOiBSb3V0ZUNvbmZpZ1snbWF0Y2hlcnMnXVxuICApOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyczogVXJsTWF0Y2hlcltdID0gbWF0Y2hlcnNPckZhY3Rvcmllcy5tYXAobWF0Y2hlck9yRmFjdG9yeSA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIG1hdGNoZXJPckZhY3RvcnkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBtYXRjaGVyT3JGYWN0b3J5IC8vIG1hdGNoZXJcbiAgICAgICAgOiB0aGlzLnJlc29sdmVVcmxNYXRjaGVyRmFjdG9yeShyb3V0ZSwgbWF0Y2hlck9yRmFjdG9yeSk7IC8vIGZhY3RvcnkgaW5qZWN0aW9uIHRva2VuXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0Q29tYmluZWQobWF0Y2hlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYFVybE1hdGNoZXJgIGJhc2VkIG9uIHRoZSBnaXZlbiByb3V0ZSwgdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb24gY29taW5nIGZyb20gdGhlIGdpdmVuIGluamVjdGlvbiB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIFJvdXRlIG9iamVjdFxuICAgKiBAcGFyYW0gZmFjdG9yeVRva2VuIGluamVjdGlvbiB0b2tlbiB3aXRoIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY3JlYXRlIGFuIFVybE1hdGNoZXIgdXNpbmcgZ2l2ZW4gcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlVXJsTWF0Y2hlckZhY3RvcnkoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIGZhY3RvcnlUb2tlbjogSW5qZWN0aW9uVG9rZW48VXJsTWF0Y2hlckZhY3Rvcnk+XG4gICk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmluamVjdG9yLmdldChmYWN0b3J5VG9rZW4pO1xuICAgIHJldHVybiBmYWN0b3J5KHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBSb3V0ZSBzdG9yZWQgaW4gaXRzIHByb3BlcnR5IGBkYXRhLmN4Um91dGVgXG4gICAqIEBwYXJhbSByb3V0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJvdXRlTmFtZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hSb3V0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVJvdXRlQ29uZmlnKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZTogUm91dGVcbiAgKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAvLyAtIG51bGwgdmFsdWUgb2Ygcm91dGVDb25maWcgb3Igcm91dGVDb25maWcucGF0aHMgbWVhbnMgZXhwbGljaXQgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGUgLSBpdCdzIHZhbGlkIGNvbmZpZ1xuICAgICAgLy8gLSByb3V0ZUNvbmZpZyB3aXRoIGRlZmluZWQgYG1hdGNoZXJzYCBpcyB2YWxpZCwgZXZlbiBpZiBgcGF0aHNgIGFyZSB1bmRlZmluZWRcbiAgICAgIGlmIChcbiAgICAgICAgcm91dGVDb25maWcgPT09IG51bGwgfHxcbiAgICAgICAgcm91dGVDb25maWcucGF0aHMgPT09IG51bGwgfHxcbiAgICAgICAgcm91dGVDb25maWc/Lm1hdGNoZXJzXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB1bmRlZmluZWQgdmFsdWUgb2Ygcm91dGVDb25maWcgb3Igcm91dGVDb25maWcucGF0aHMgaXMgYSBtaXNjb25maWd1cmF0aW9uXG4gICAgICBpZiAoIXJvdXRlQ29uZmlnPy5wYXRocykge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBjb25maWcgb3IgdW5kZWZpbmVkICdwYXRocycgcHJvcGVydHkgZm9yIHRoaXMgcm91dGVgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19