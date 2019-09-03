/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { RoutingConfigService } from './routing-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./routing-config.service";
import * as i2 from "../services/url-matcher-factory.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQVMsTUFBTSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHaEUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBQ3BDLFlBQ1UsUUFBa0IsRUFDbEIsb0JBQTBDLEVBQzFDLGlCQUEyQztRQUYzQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUc3QyxlQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRm5FLENBQUM7Ozs7OztJQU9KLElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVPLGVBQWU7OztjQUVmLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O2NBRWxDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU1RCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLE1BQWM7O2NBQzlCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7O2tCQUNmLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUVsRCxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakU7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQVk7O2NBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLFNBQVMsRUFBRTs7a0JBQ1AsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztrQkFDakUsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQzs7a0JBQzlELFVBQVUsR0FBRyxXQUFXLElBQUksV0FBVyxDQUFDLFFBQVE7WUFFdEQsSUFBSSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUMvQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLElBQ3BEO2FBQ0g7aUJBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNyQix5QkFBWSxLQUFLLElBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBRzthQUNyQztpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxJQUNqRTthQUNIO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLDZEQUE2RDtJQUM3RSxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBWTtRQUMvQixPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FDeEIsV0FBd0IsRUFDeEIsU0FBaUIsRUFDakIsS0FBWTtRQUVaLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUNQLHdDQUF3QyxTQUFTLEdBQUcsRUFDcEQsS0FBSyxFQUNMLHlCQUF5QixTQUFTLHdCQUF3QixDQUMzRCxDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQ1Asd0NBQXdDLFNBQVMsR0FBRyxFQUNwRCxLQUFLLEVBQ0wsaURBQWlELFNBQVMsd0JBQXdCLENBQ25GLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQscUZBQXFGO1FBQ3JGLE9BQU8sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUF2R0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQU5iLFFBQVE7WUFJcEIsb0JBQW9CO1lBRnBCLHdCQUF3Qjs7Ozs7Ozs7SUFZL0IsK0NBQTJCOzs7OztJQUx6Qiw2Q0FBMEI7Ozs7O0lBQzFCLHlEQUFrRDs7Ozs7SUFDbEQsc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXJsTWF0Y2hlckZhY3Rvcnk6IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlclxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29uZmlndXJlUm91dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVSb3V0ZXIoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IGNvbmZpZ3VyZWRSb3V0ZXMgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXIuY29uZmlnKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyhjb25maWd1cmVkUm91dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlUm91dGVzKHJvdXRlczogUm91dGVzKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCBjb25maWd1cmVkUm91dGUgPSB0aGlzLmNvbmZpZ3VyZVJvdXRlKHJvdXRlKTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25maWd1cmVkUm91dGUuY2hpbGRyZW4gPSB0aGlzLmNvbmZpZ3VyZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChjb25maWd1cmVkUm91dGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlKHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldFJvdXRlTmFtZShyb3V0ZSk7XG4gICAgaWYgKHJvdXRlTmFtZSkge1xuICAgICAgY29uc3Qgcm91dGVDb25maWcgPSB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKHJvdXRlTmFtZSk7XG4gICAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0Q29uZmlndXJlZFBhdGhzKHJvdXRlQ29uZmlnLCByb3V0ZU5hbWUsIHJvdXRlKTtcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSByb3V0ZUNvbmZpZyAmJiByb3V0ZUNvbmZpZy5kaXNhYmxlZDtcblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgIXBhdGhzLmxlbmd0aCkge1xuICAgICAgICBkZWxldGUgcm91dGUucGF0aDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5yb3V0ZSxcbiAgICAgICAgICBtYXRjaGVyOiB0aGlzLnVybE1hdGNoZXJGYWN0b3J5LmdldEZhbHN5VXJsTWF0Y2hlcigpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChwYXRocy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLm1hdGNoZXI7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiBwYXRoc1swXSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHJvdXRlLnBhdGg7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm91dGUsXG4gICAgICAgICAgbWF0Y2hlcjogdGhpcy51cmxNYXRjaGVyRmFjdG9yeS5nZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRocyksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3V0ZTsgLy8gaWYgcm91dGUgZG9lc24ndCBoYXZlIGEgbmFtZSwganVzdCBwYXNzIHRoZSBvcmlnaW5hbCByb3V0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZU5hbWUocm91dGU6IFJvdXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmN4Um91dGU7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyZWRQYXRocyhcbiAgICByb3V0ZUNvbmZpZzogUm91dGVDb25maWcsXG4gICAgcm91dGVOYW1lOiBzdHJpbmcsXG4gICAgcm91dGU6IFJvdXRlXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAocm91dGVDb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IGNvbmZpZ3VyZSB0aGUgbmFtZWQgcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5ICcke3JvdXRlTmFtZX0nIGluIHRoZSByb3V0ZXMgY29uZmlnYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHJvdXRlQ29uZmlnICYmIHJvdXRlQ29uZmlnLnBhdGhzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCBjb25maWd1cmUgdGhlIG5hbWVkIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdwYXRocycgZm9yIHRoZSBuYW1lZCByb3V0ZSAnJHtyb3V0ZU5hbWV9JyBpbiB0aGUgcm91dGVzIGNvbmZpZ2BcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gcm91dGVDb25maWcgb3Igcm91dGVDb25maWcucGF0aHMgY2FuIGJlIG51bGwgLSB3aGljaCBtZWFucyBzd2l0Y2hpbmcgb2ZmIHRoZSByb3V0ZVxuICAgIHJldHVybiAocm91dGVDb25maWcgJiYgcm91dGVDb25maWcucGF0aHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==