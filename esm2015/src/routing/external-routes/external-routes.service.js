/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { ExternalRoutesConfig } from './external-routes-config';
import { ExternalRoutesGuard } from './external-routes.guard';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
export class ExternalRoutesService {
    /**
     * @param {?} config
     * @param {?} matcherFactory
     * @param {?} injector
     */
    constructor(config, matcherFactory, injector) {
        this.config = config;
        this.matcherFactory = matcherFactory;
        this.injector = injector;
    }
    /**
     * @protected
     * @return {?}
     */
    get internalUrlPatterns() {
        return ((this.config && this.config.routing && this.config.routing.internal) || []);
    }
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     * @return {?}
     */
    addRoutes() {
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        const newRoutes = this.getRoutes();
        if (newRoutes.length) {
            router.resetConfig([...newRoutes, ...router.config]);
        }
    }
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     * @protected
     * @return {?}
     */
    getRoutes() {
        if (!this.internalUrlPatterns.length) {
            return [];
        }
        /** @type {?} */
        const routes = [];
        routes.push({
            pathMatch: 'full',
            matcher: this.getUrlMatcher(),
            canActivate: [ExternalRoutesGuard],
            component: (/** @type {?} */ ({})),
        });
        return routes;
    }
    /**
     * Returns the URL matcher for the external route
     * @protected
     * @return {?}
     */
    getUrlMatcher() {
        /** @type {?} */
        const matcher = this.matcherFactory.getGlobUrlMatcher(this.internalUrlPatterns);
        return this.matcherFactory.getOppositeUrlMatcher(matcher); // the external route should be activated only when it's NOT an internal route
    }
}
ExternalRoutesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ExternalRoutesService.ctorParameters = () => [
    { type: ExternalRoutesConfig },
    { type: UrlMatcherFactoryService },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ExternalRoutesService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ExternalRoutesService.prototype.matcherFactory;
    /**
     * @type {?}
     * @protected
     */
    ExternalRoutesService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNOUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1ksTUFBNEIsRUFDNUIsY0FBd0MsRUFDeEMsUUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQTBCO1FBQ3hDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7Ozs7SUFFSixJQUFjLG1CQUFtQjtRQUMvQixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsU0FBUzs7Y0FDRCxNQUFNLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztjQUMxQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7Ozs7SUFLUyxTQUFTO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O2NBQ0ssTUFBTSxHQUFXLEVBQUU7UUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdCLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxtQkFBQSxFQUFFLEVBQU87U0FDckIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBS1MsYUFBYTs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDhFQUE4RTtJQUMzSSxDQUFDOzs7WUFwREYsVUFBVTs7OztZQU5GLG9CQUFvQjtZQURwQix3QkFBd0I7WUFGWixRQUFROzs7Ozs7O0lBWXpCLHVDQUFzQzs7Ozs7SUFDdEMsK0NBQWtEOzs7OztJQUNsRCx5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IEV4dGVybmFsUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IEV4dGVybmFsUm91dGVzR3VhcmQgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5ndWFyZCc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhlbHBzIHJlZGlyZWN0aW5nIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXMgZm9yIGNvbmZpZ3VyZWQgVVJMc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRXh0ZXJuYWxSb3V0ZXNDb25maWcsXG4gICAgcHJvdGVjdGVkIG1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldCBpbnRlcm5hbFVybFBhdHRlcm5zKCk6IEV4dGVybmFsUm91dGVzQ29uZmlnWydyb3V0aW5nJ11bJ2ludGVybmFsJ10ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nLmludGVybmFsKSB8fCBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVuZHMgcm91dGVzICh0byB0aGUgUm91dGVyLmNvbmZpZykgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtXG4gICAqL1xuICBhZGRSb3V0ZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVyOiBSb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIGNvbnN0IG5ld1JvdXRlcyA9IHRoaXMuZ2V0Um91dGVzKCk7XG4gICAgaWYgKG5ld1JvdXRlcy5sZW5ndGgpIHtcbiAgICAgIHJvdXRlci5yZXNldENvbmZpZyhbLi4ubmV3Um91dGVzLCAuLi5yb3V0ZXIuY29uZmlnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcm91dGVzIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGlvbiB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Um91dGVzKCk6IFJvdXRlcyB7XG4gICAgaWYgKCF0aGlzLmludGVybmFsVXJsUGF0dGVybnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlczogUm91dGVzID0gW107XG5cbiAgICByb3V0ZXMucHVzaCh7XG4gICAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgICAgIG1hdGNoZXI6IHRoaXMuZ2V0VXJsTWF0Y2hlcigpLFxuICAgICAgY2FuQWN0aXZhdGU6IFtFeHRlcm5hbFJvdXRlc0d1YXJkXSxcbiAgICAgIGNvbXBvbmVudDoge30gYXMgYW55LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkwgbWF0Y2hlciBmb3IgdGhlIGV4dGVybmFsIHJvdXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0VXJsTWF0Y2hlcigpOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5tYXRjaGVyRmFjdG9yeS5nZXRHbG9iVXJsTWF0Y2hlcihcbiAgICAgIHRoaXMuaW50ZXJuYWxVcmxQYXR0ZXJuc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlckZhY3RvcnkuZ2V0T3Bwb3NpdGVVcmxNYXRjaGVyKG1hdGNoZXIpOyAvLyB0aGUgZXh0ZXJuYWwgcm91dGUgc2hvdWxkIGJlIGFjdGl2YXRlZCBvbmx5IHdoZW4gaXQncyBOT1QgYW4gaW50ZXJuYWwgcm91dGVcbiAgfVxufVxuIl19