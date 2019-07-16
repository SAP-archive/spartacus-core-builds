/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConfigService } from './routing-config.service';
import { UrlMatcherFactoryService } from './url-matcher-factory.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "./url-matcher-factory.service";
export class ConfigurableRoutesService {
    /**
     * @param {?} injector
     * @param {?} routingConfigService
     * @param {?} urlMatcherFactory
     */
    constructor(injector, routingConfigService, urlMatcherFactory) {
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
        routes.forEach((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            /** @type {?} */
            const configuredRoute = this.configureRoute(route);
            if (route.children && route.children.length) {
                configuredRoute.children = this.configureRoutes(route.children);
            }
            result.push(configuredRoute);
        }));
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    configureRoute(route) {
        /** @type {?} */
        const routeName = this.getRouteName(route);
        if (routeName) {
            /** @type {?} */
            const routeConfig = this.routingConfigService.getRouteConfig(routeName);
            /** @type {?} */
            const paths = this.getConfiguredPaths(routeConfig, routeName, route);
            /** @type {?} */
            const isDisabled = routeConfig && routeConfig.disabled;
            if (isDisabled || !paths.length) {
                delete route.path;
                return Object.assign({}, route, { matcher: this.urlMatcherFactory.getFalsyUrlMatcher() });
            }
            else if (paths.length === 1) {
                delete route.matcher;
                return Object.assign({}, route, { path: paths[0] });
            }
            else {
                delete route.path;
                return Object.assign({}, route, { matcher: this.urlMatcherFactory.getMultiplePathsUrlMatcher(paths) });
            }
        }
        return route; // if route doesn't have a name, just pass the original route
    }
    /**
     * @private
     * @param {?} route
     * @return {?}
     */
    getRouteName(route) {
        return route.data && route.data.cxRoute;
    }
    /**
     * @private
     * @param {?} routeConfig
     * @param {?} routeName
     * @param {?} route
     * @return {?}
     */
    getConfiguredPaths(routeConfig, routeName, route) {
        if (routeConfig === undefined) {
            this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined key '${routeName}' in the routes config`);
            return [];
        }
        if (routeConfig && routeConfig.paths === undefined) {
            this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined 'paths' for the named route '${routeName}' in the routes config`);
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
        if (isDevMode()) {
            console.warn(...args);
        }
    }
}
ConfigurableRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfigurableRoutesService.ctorParameters = () => [
    { type: Injector },
    { type: RoutingConfigService },
    { type: UrlMatcherFactoryService }
];
/** @nocollapse */ ConfigurableRoutesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurableRoutesService_Factory() { return new ConfigurableRoutesService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.RoutingConfigService), i0.ɵɵinject(i2.UrlMatcherFactoryService)); }, token: ConfigurableRoutesService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQVMsTUFBTSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFHekUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBQ3BDLFlBQ1UsUUFBa0IsRUFDbEIsb0JBQTBDLEVBQzFDLGlCQUEyQztRQUYzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUc3QyxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRm5FLENBQUM7Ozs7OztJQU9KLElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVPLGVBQWU7OztjQUVmLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O2NBRWxDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU1RCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLE1BQWM7O2NBQzlCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNmLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUVsRCxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakU7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQVk7O2NBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLFNBQVMsRUFBRTs7a0JBQ1AsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztrQkFDakUsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQzs7a0JBQzlELFVBQVUsR0FBRyxXQUFXLElBQUksV0FBVyxDQUFDLFFBQVE7WUFFdEQsSUFBSSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLElBQ3BEO2FBQ0g7aUJBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNyQix5QkFBWSxLQUFLLElBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBRzthQUNyQztpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxJQUNqRTthQUNIO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLDZEQUE2RDtJQUM3RSxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBWTtRQUMvQixPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FDeEIsV0FBd0IsRUFDeEIsU0FBaUIsRUFDakIsS0FBWTtRQUVaLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUNQLHdDQUF3QyxTQUFTLEdBQUcsRUFDcEQsS0FBSyxFQUNMLHlCQUF5QixTQUFTLHdCQUF3QixDQUMzRCxDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQ1Asd0NBQXdDLFNBQVMsR0FBRyxFQUNwRCxLQUFLLEVBQ0wsaURBQWlELFNBQVMsd0JBQXdCLENBQ25GLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQscUZBQXFGO1FBQ3JGLE9BQU8sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUF2R0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQU5iLFFBQVE7WUFHcEIsb0JBQW9CO1lBQ3BCLHdCQUF3Qjs7Ozs7Ozs7SUFVL0IsK0NBQTJCOzs7OztJQUx6Qiw2Q0FBMEI7Ozs7O0lBQzFCLHlEQUFrRDs7Ozs7SUFDbEQsc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxNYXRjaGVyRmFjdG9yeTogVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGluaXRDYWxsZWQgPSBmYWxzZTsgLy8gZ3VhcmQgbm90IHRvIGNhbGwgaW5pdCgpIG1vcmUgdGhhbiBvbmNlXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYWxsIGV4aXN0aW5nIFJvdXRlcyBpbiB0aGUgUm91dGVyXG4gICAqL1xuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jb25maWd1cmVSb3V0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcigpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgY29uc3QgY29uZmlndXJlZFJvdXRlcyA9IHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlci5jb25maWcpO1xuXG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKGNvbmZpZ3VyZWRSb3V0ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZSA9IHRoaXMuY29uZmlndXJlUm91dGUocm91dGUpO1xuXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbmZpZ3VyZWRSb3V0ZS5jaGlsZHJlbiA9IHRoaXMuY29uZmlndXJlUm91dGVzKHJvdXRlLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGNvbmZpZ3VyZWRSb3V0ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGUocm91dGU6IFJvdXRlKTogUm91dGUge1xuICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Um91dGVOYW1lKHJvdXRlKTtcbiAgICBpZiAocm91dGVOYW1lKSB7XG4gICAgICBjb25zdCByb3V0ZUNvbmZpZyA9IHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcocm91dGVOYW1lKTtcbiAgICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRDb25maWd1cmVkUGF0aHMocm91dGVDb25maWcsIHJvdXRlTmFtZSwgcm91dGUpO1xuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLmRpc2FibGVkO1xuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCAhcGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5wYXRoO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgIG1hdGNoZXI6IHRoaXMudXJsTWF0Y2hlckZhY3RvcnkuZ2V0RmFsc3lVcmxNYXRjaGVyKCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBkZWxldGUgcm91dGUubWF0Y2hlcjtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIHBhdGg6IHBhdGhzWzBdIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldE11bHRpcGxlUGF0aHNVcmxNYXRjaGVyKHBhdGhzKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlOyAvLyBpZiByb3V0ZSBkb2Vzbid0IGhhdmUgYSBuYW1lLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlTmFtZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hSb3V0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJlZFBhdGhzKFxuICAgIHJvdXRlQ29uZmlnOiBSb3V0ZUNvbmZpZyxcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZTogUm91dGVcbiAgKTogc3RyaW5nW10ge1xuICAgIGlmIChyb3V0ZUNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCBrZXkgJyR7cm91dGVOYW1lfScgaW4gdGhlIHJvdXRlcyBjb25maWdgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAocm91dGVDb25maWcgJiYgcm91dGVDb25maWcucGF0aHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IGNvbmZpZ3VyZSB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgJ3BhdGhzJyBmb3IgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nIGluIHRoZSByb3V0ZXMgY29uZmlnYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyByb3V0ZUNvbmZpZyBvciByb3V0ZUNvbmZpZy5wYXRocyBjYW4gYmUgbnVsbCAtIHdoaWNoIG1lYW5zIHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlXG4gICAgcmV0dXJuIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5wYXRocykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19