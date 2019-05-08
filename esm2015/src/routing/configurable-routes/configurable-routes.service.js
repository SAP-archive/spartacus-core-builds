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
        if (this.getRouteName(route)) {
            /** @type {?} */
            const paths = this.getConfiguredPaths(route);
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
     * @param {?} route
     * @return {?}
     */
    getConfiguredPaths(route) {
        /** @type {?} */
        const routeName = this.getRouteName(route);
        /** @type {?} */
        const routeConfig = this.routingConfigService.getRouteConfig(routeName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBVSxNQUFNLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBR3pFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7SUFDcEMsWUFDVSxNQUFvQixFQUNwQixRQUFrQixFQUNsQixvQkFBMEMsRUFDMUMsaUJBQTJDO1FBSDNDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFHN0MsZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQUZuRSxDQUFDOzs7Ozs7SUFPSixJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxlQUFlOzs7Y0FFZixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztjQUVsQyxnQkFBZ0IsR0FBRyxJQUFJ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RSxNQUFNLEVBQUU7Ozs7WUFKekIsWUFBWTtZQUZBLFFBQVE7WUFHcEIsb0JBQW9CO1lBQ3BCLHdCQUF3Qjs7Ozs7Ozs7SUFXL0IsK0NBQTJCOzs7OztJQU56QiwyQ0FBNEI7Ozs7O0lBQzVCLDZDQUEwQjs7Ozs7SUFDMUIseURBQWtEOzs7OztJQUNsRCxzREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsTWF0Y2hlckZhY3Rvcnk6IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlclxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29uZmlndXJlUm91dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXIoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZXMgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyhjb25maWd1cmVkUm91dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChjb25maWd1cmVkUm91dGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBpZiAodGhpcy5nZXRSb3V0ZU5hbWUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlKTtcbiAgICAgIHN3aXRjaCAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldEZhbHN5VXJsTWF0Y2hlcigpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGRlbGV0ZSByb3V0ZS5tYXRjaGVyO1xuICAgICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiBwYXRoc1swXSB9O1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJvdXRlLFxuICAgICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRocyksXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlOyAvLyBpZiByb3V0ZSBkb2Vzbid0IGhhdmUgYSBuYW1lLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlTmFtZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuY3hSb3V0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlOiBSb3V0ZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldFJvdXRlTmFtZShyb3V0ZSk7XG4gICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgaWYgKHJvdXRlQ29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGtleSAnJHtyb3V0ZU5hbWV9JyBpbiB0aGUgcm91dGVzIGNvbmZpZ2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChyb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgY29uZmlndXJlIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGZvciB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfScgaW4gdGhlIHJvdXRlcyBjb25maWdgXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIHJvdXRlQ29uZmlnIG9yIHJvdXRlQ29uZmlnLnBhdGhzIGNhbiBiZSBudWxsIC0gd2hpY2ggbWVhbnMgc3dpdGNoaW5nIG9mZiB0aGUgcm91dGVcbiAgICByZXR1cm4gKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLnBhdGhzKSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgd2FybiguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgfVxuICB9XG59XG4iXX0=