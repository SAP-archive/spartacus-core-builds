/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutingConfigService } from './routing-config.service';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/server-config/server-config";
import * as i2 from "./routing-config.service";
import * as i3 from "./url-matcher-factory.service";
export class ConfigurableRoutesService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} routingConfigService
     * @param {?} urlMatcherFactory
     */
    constructor(config, injector, routingConfigService, urlMatcherFactory) {
        this.config = config;
        this.injector = injector;
        this.routingConfigService = routingConfigService;
        this.urlMatcherFactory = urlMatcherFactory;
        this.initCalled = false; // guard not to call init() more than once
    }
    // guard not to call init() more than once
    /**
     * Configures all existing Routes in the Router
     * @return {?}
     */
    init() {
        if (!this.initCalled) {
            this.initCalled = true;
            this.configureRouter();
        }
    }
    /**
     * @private
     * @return {?}
     */
    configureRouter() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        const configuredRoutes = this.configureRoutes(router.config);
        router.resetConfig(configuredRoutes);
    }
    /**
     * @private
     * @param {?} routes
     * @return {?}
     */
    configureRoutes(routes) {
        /** @type {?} */
        const result = [];
        routes.forEach(route => {
            /** @type {?} */
            const configuredRoute = this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = this.configureRoutes(route.children);
            }
            result.push(configuredRoute);
        });
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    configureRoute(route) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn(`A path should not have set both "cxPath" and "cxRedirectTo" properties! Route: '${route}`);
            }
            return this.configureRoutePath(route);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.configureRouteRedirectTo(route);
        }
        return route; // if nothing is configurable, just pass the original route
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    isConfigurable(route, key) {
        return !!this.getConfigurable(route, key);
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    getConfigurable(route, key) {
        return route.data && route.data[key];
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    configureRoutePath(route) {
        /** @type {?} */
        const paths = this.getConfiguredPaths(route, 'cxPath');
        switch (paths.length) {
            case 0:
                delete route.path;
                return Object.assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
            case 1:
                delete route.matcher;
                return Object.assign({}, route, { path: paths[0] });
            default:
                delete route.path;
                return Object.assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
        }
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    configureRouteRedirectTo(route) {
        /** @type {?} */
        const paths = this.getConfiguredPaths(route, 'cxRedirectTo');
        return paths.length
            ? Object.assign({}, route, { redirectTo: paths[0] }) : route;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    getConfiguredPaths(route, key) {
        /** @type {?} */
        const routeName = this.getConfigurable(route, key);
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(routeName);
        if (routeConfig === undefined) {
            this.warn(`Could not configure the key '${key}' of the named route '${routeName}'`, route, `due to undefined key for named route '${routeName}' in config`);
            return [];
        }
        if (routeConfig && routeConfig.paths === undefined) {
            this.warn(`Could not configure the key '${key}' of the named route '${routeName}'`, route, `due to undefined 'paths' for the named route '${routeName}' in config`);
            return [];
        }
        // routeConfig or routeConfig.paths can be null - which means switching off the route
        return (routeConfig && routeConfig.paths) || [];
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
ConfigurableRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfigurableRoutesService.ctorParameters = () => [
    { type: ServerConfig },
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherFactoryService }
];
/** @nocollapse */ ConfigurableRoutesService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.inject(i1.ServerConfig), i0.inject(i0.INJECTOR), i0.inject(i2.RoutingConfigService), i0.inject(i3.UrlMatcherFactoryService)); }, token: ConfigurableRoutesService, providedIn: "root" });
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
    ConfigurableRoutesService.prototype.routingConfigService;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.urlMatcherFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBVSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBS3pFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7SUFDcEMsWUFDVSxNQUFvQixFQUNwQixRQUFrQixFQUNsQixvQkFBMEMsRUFDMUMsaUJBQTJDO1FBSDNDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFHN0MsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZuRSxDQUFDOzs7Ozs7SUFPSixJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxlQUFlOzs7Y0FFZixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztjQUVsQyxnQkFBZ0IsR0FBRyxJQUFJ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ZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlJztcblxudHlwZSBDb25maWd1cmFibGVSb3V0ZUtleSA9ICdjeFBhdGgnIHwgJ2N4UmVkaXJlY3RUbyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxNYXRjaGVyRmFjdG9yeTogVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGluaXRDYWxsZWQgPSBmYWxzZTsgLy8gZ3VhcmQgbm90IHRvIGNhbGwgaW5pdCgpIG1vcmUgdGhhbiBvbmNlXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYWxsIGV4aXN0aW5nIFJvdXRlcyBpbiB0aGUgUm91dGVyXG4gICAqL1xuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb25maWd1cmVSb3V0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcigpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgY29uc3QgY29uZmlndXJlZFJvdXRlcyA9IHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlci5jb25maWcpO1xuXG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKGNvbmZpZ3VyZWRSb3V0ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZSA9IHRoaXMuY29uZmlndXJlUm91dGUocm91dGUpO1xuXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbmZpZ3VyZWRSb3V0ZS5jaGlsZHJlbiA9IHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGNvbmZpZ3VyZWRSb3V0ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGUocm91dGU6IFJvdXRlKTogUm91dGUge1xuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJykpIHtcbiAgICAgIC8vIHdlIGFzc3VtZSB0aGF0ICdwYXRoJyBhbmQgJ3JlZGlyZWN0VG8nIGNhbm5vdCBiZSBib3RoIGNvbmZpZ3VyZWQgZm9yIG9uZSByb3V0ZVxuICAgICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYEEgcGF0aCBzaG91bGQgbm90IGhhdmUgc2V0IGJvdGggXCJjeFBhdGhcIiBhbmQgXCJjeFJlZGlyZWN0VG9cIiBwcm9wZXJ0aWVzISBSb3V0ZTogJyR7cm91dGV9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlUm91dGVQYXRoKHJvdXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVSb3V0ZVJlZGlyZWN0VG8ocm91dGUpO1xuICAgIH1cblxuICAgIHJldHVybiByb3V0ZTsgLy8gaWYgbm90aGluZyBpcyBjb25maWd1cmFibGUsIGp1c3QgcGFzcyB0aGUgb3JpZ2luYWwgcm91dGVcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGFba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVQYXRoKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlLCAnY3hQYXRoJyk7XG4gICAgc3dpdGNoIChwYXRocy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRGYWxzeVVybE1hdGNoZXIoKSxcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBkZWxldGUgcm91dGUubWF0Y2hlcjtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIHBhdGg6IHBhdGhzWzBdIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlckZhY3RvcnkuZ2V0TXVsdGlwbGVQYXRoc1VybE1hdGNoZXIocGF0aHMpLFxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVSZWRpcmVjdFRvKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlLCAnY3hSZWRpcmVjdFRvJyk7XG4gICAgcmV0dXJuIHBhdGhzLmxlbmd0aFxuICAgICAgPyB7IC4uLnJvdXRlLCByZWRpcmVjdFRvOiBwYXRoc1swXSB9IC8vIHRha2UgdGhlIGZpcnN0IHBhdGggZnJvbSBsaXN0IGJ5IGNvbnZlbnRpb25cbiAgICAgIDogcm91dGU7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyZWRQYXRocyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleVxuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgaWYgKHJvdXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIGtleSAnJHtrZXl9JyBvZiB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5IGZvciBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBpbiBjb25maWdgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAocm91dGVDb25maWcgJiYgcm91dGVDb25maWcucGF0aHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IGNvbmZpZ3VyZSB0aGUga2V5ICcke2tleX0nIG9mIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfScgaW4gY29uZmlnYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyByb3V0ZUNvbmZpZyBvciByb3V0ZUNvbmZpZy5wYXRocyBjYW4gYmUgbnVsbCAtIHdoaWNoIG1lYW5zIHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlXG4gICAgcmV0dXJuIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5wYXRocykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19