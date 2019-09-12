/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { ExternalRoutesConfig } from './external-routes-config';
import { ExternalRoutesGuard } from './external-routes.guard';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
var ExternalRoutesService = /** @class */ (function () {
    function ExternalRoutesService(config, matcherFactory, injector) {
        this.config = config;
        this.matcherFactory = matcherFactory;
        this.injector = injector;
    }
    Object.defineProperty(ExternalRoutesService.prototype, "internalUrlPatterns", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return ((this.config && this.config.routing && this.config.routing.internal) || []);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     */
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     * @return {?}
     */
    ExternalRoutesService.prototype.addRoutes = /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     * @return {?}
     */
    function () {
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var newRoutes = this.getRoutes();
        if (newRoutes.length) {
            router.resetConfig(tslib_1.__spread(newRoutes, router.config));
        }
    };
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     */
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     * @protected
     * @return {?}
     */
    ExternalRoutesService.prototype.getRoutes = /**
     * Returns routes that are responsible for redirection to different storefront systems
     * @protected
     * @return {?}
     */
    function () {
        if (!this.internalUrlPatterns.length) {
            return [];
        }
        /** @type {?} */
        var routes = [];
        routes.push({
            pathMatch: 'full',
            matcher: this.getUrlMatcher(),
            canActivate: [ExternalRoutesGuard],
            component: (/** @type {?} */ ({})),
        });
        return routes;
    };
    /**
     * Returns the URL matcher for the external route
     */
    /**
     * Returns the URL matcher for the external route
     * @protected
     * @return {?}
     */
    ExternalRoutesService.prototype.getUrlMatcher = /**
     * Returns the URL matcher for the external route
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var matcher = this.matcherFactory.getGlobUrlMatcher(this.internalUrlPatterns);
        return this.matcherFactory.getOppositeUrlMatcher(matcher); // the external route should be activated only when it's NOT an internal route
    };
    ExternalRoutesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ExternalRoutesService.ctorParameters = function () { return [
        { type: ExternalRoutesConfig },
        { type: UrlMatcherFactoryService },
        { type: Injector }
    ]; };
    return ExternalRoutesService;
}());
export { ExternalRoutesService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSzlEO0lBRUUsK0JBQ1ksTUFBNEIsRUFDNUIsY0FBd0MsRUFDeEMsUUFBa0I7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQTBCO1FBQ3hDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUVKLHNCQUFjLHNEQUFtQjs7Ozs7UUFBakM7WUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQVM7Ozs7SUFBVDs7WUFDUSxNQUFNLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztZQUMxQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFdBQVcsa0JBQUssU0FBUyxFQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ08seUNBQVM7Ozs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDSyxNQUFNLEdBQVcsRUFBRTtRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0IsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsU0FBUyxFQUFFLG1CQUFBLEVBQUUsRUFBTztTQUNyQixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNPLDZDQUFhOzs7OztJQUF2Qjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUN6QjtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDhFQUE4RTtJQUMzSSxDQUFDOztnQkFwREYsVUFBVTs7OztnQkFORixvQkFBb0I7Z0JBRHBCLHdCQUF3QjtnQkFGWixRQUFROztJQThEN0IsNEJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQXBEWSxxQkFBcUI7Ozs7OztJQUU5Qix1Q0FBc0M7Ozs7O0lBQ3RDLCtDQUFrRDs7Ozs7SUFDbEQseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VybC1tYXRjaGVyLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0d1YXJkIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMuZ3VhcmQnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBoZWxwcyByZWRpcmVjdGluZyB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IEV4dGVybmFsUm91dGVzQ29uZmlnLFxuICAgIHByb3RlY3RlZCBtYXRjaGVyRmFjdG9yeTogVXJsTWF0Y2hlckZhY3RvcnlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXQgaW50ZXJuYWxVcmxQYXR0ZXJucygpOiBFeHRlcm5hbFJvdXRlc0NvbmZpZ1sncm91dGluZyddWydpbnRlcm5hbCddIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmcgJiYgdGhpcy5jb25maWcucm91dGluZy5pbnRlcm5hbCkgfHwgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlbmRzIHJvdXRlcyAodG8gdGhlIFJvdXRlci5jb25maWcpIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byBhIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbVxuICAgKi9cbiAgYWRkUm91dGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlcjogUm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICBjb25zdCBuZXdSb3V0ZXMgPSB0aGlzLmdldFJvdXRlcygpO1xuICAgIGlmIChuZXdSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICByb3V0ZXIucmVzZXRDb25maWcoWy4uLm5ld1JvdXRlcywgLi4ucm91dGVyLmNvbmZpZ10pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvdXRlcyB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3Rpb24gdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJvdXRlcygpOiBSb3V0ZXMge1xuICAgIGlmICghdGhpcy5pbnRlcm5hbFVybFBhdHRlcm5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtdO1xuXG4gICAgcm91dGVzLnB1c2goe1xuICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICBtYXRjaGVyOiB0aGlzLmdldFVybE1hdGNoZXIoKSxcbiAgICAgIGNhbkFjdGl2YXRlOiBbRXh0ZXJuYWxSb3V0ZXNHdWFyZF0sXG4gICAgICBjb21wb25lbnQ6IHt9IGFzIGFueSxcbiAgICB9KTtcblxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgVVJMIG1hdGNoZXIgZm9yIHRoZSBleHRlcm5hbCByb3V0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFVybE1hdGNoZXIoKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IHRoaXMubWF0Y2hlckZhY3RvcnkuZ2V0R2xvYlVybE1hdGNoZXIoXG4gICAgICB0aGlzLmludGVybmFsVXJsUGF0dGVybnNcbiAgICApO1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXJGYWN0b3J5LmdldE9wcG9zaXRlVXJsTWF0Y2hlcihtYXRjaGVyKTsgLy8gdGhlIGV4dGVybmFsIHJvdXRlIHNob3VsZCBiZSBhY3RpdmF0ZWQgb25seSB3aGVuIGl0J3MgTk9UIGFuIGludGVybmFsIHJvdXRlXG4gIH1cbn1cbiJdfQ==