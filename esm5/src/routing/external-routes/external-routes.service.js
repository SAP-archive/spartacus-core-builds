import { __decorate, __read, __spread } from "tslib";
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
        get: function () {
            return ((this.config && this.config.routing && this.config.routing.internal) || []);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     */
    ExternalRoutesService.prototype.addRoutes = function () {
        var router = this.injector.get(Router);
        var newRoutes = this.getRoutes();
        if (newRoutes.length) {
            router.resetConfig(__spread(newRoutes, router.config));
        }
    };
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     */
    ExternalRoutesService.prototype.getRoutes = function () {
        if (!this.internalUrlPatterns.length) {
            return [];
        }
        var routes = [];
        routes.push({
            pathMatch: 'full',
            matcher: this.getUrlMatcher(),
            canActivate: [ExternalRoutesGuard],
            component: {},
        });
        return routes;
    };
    /**
     * Returns the URL matcher for the external route
     */
    ExternalRoutesService.prototype.getUrlMatcher = function () {
        var matcher = this.matcherFactory.getGlobUrlMatcher(this.internalUrlPatterns);
        return this.matcherFactory.getOppositeUrlMatcher(matcher); // the external route should be activated only when it's NOT an internal route
    };
    ExternalRoutesService.ctorParameters = function () { return [
        { type: ExternalRoutesConfig },
        { type: UrlMatcherFactoryService },
        { type: Injector }
    ]; };
    ExternalRoutesService = __decorate([
        Injectable()
    ], ExternalRoutesService);
    return ExternalRoutesService;
}());
export { ExternalRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7O0dBRUc7QUFFSDtJQUNFLCtCQUNZLE1BQTRCLEVBQzVCLGNBQXdDLEVBQ3hDLFFBQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUEwQjtRQUN4QyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSixzQkFBYyxzREFBbUI7YUFBakM7WUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FDM0UsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCx5Q0FBUyxHQUFUO1FBQ0UsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixNQUFNLENBQUMsV0FBVyxVQUFLLFNBQVMsRUFBSyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyx5Q0FBUyxHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdCLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxFQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNPLDZDQUFhLEdBQXZCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUN6QixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEVBQThFO0lBQzNJLENBQUM7O2dCQWpEbUIsb0JBQW9CO2dCQUNaLHdCQUF3QjtnQkFDOUIsUUFBUTs7SUFKbkIscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQW9EakM7SUFBRCw0QkFBQztDQUFBLEFBcERELElBb0RDO1NBcERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNDb25maWcgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNHdWFyZCB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLmd1YXJkJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaGVscHMgcmVkaXJlY3RpbmcgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtcyBmb3IgY29uZmlndXJlZCBVUkxzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBFeHRlcm5hbFJvdXRlc0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgbWF0Y2hlckZhY3Rvcnk6IFVybE1hdGNoZXJGYWN0b3J5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0IGludGVybmFsVXJsUGF0dGVybnMoKTogRXh0ZXJuYWxSb3V0ZXNDb25maWdbJ3JvdXRpbmcnXVsnaW50ZXJuYWwnXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nICYmIHRoaXMuY29uZmlnLnJvdXRpbmcuaW50ZXJuYWwpIHx8IFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZW5kcyByb3V0ZXMgKHRvIHRoZSBSb3V0ZXIuY29uZmlnKSB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3RpbmcgdG8gYSBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1cbiAgICovXG4gIGFkZFJvdXRlcygpOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZXI6IFJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgY29uc3QgbmV3Um91dGVzID0gdGhpcy5nZXRSb3V0ZXMoKTtcbiAgICBpZiAobmV3Um91dGVzLmxlbmd0aCkge1xuICAgICAgcm91dGVyLnJlc2V0Q29uZmlnKFsuLi5uZXdSb3V0ZXMsIC4uLnJvdXRlci5jb25maWddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByb3V0ZXMgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW9uIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRSb3V0ZXMoKTogUm91dGVzIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJuYWxVcmxQYXR0ZXJucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXTtcblxuICAgIHJvdXRlcy5wdXNoKHtcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgbWF0Y2hlcjogdGhpcy5nZXRVcmxNYXRjaGVyKCksXG4gICAgICBjYW5BY3RpdmF0ZTogW0V4dGVybmFsUm91dGVzR3VhcmRdLFxuICAgICAgY29tcG9uZW50OiB7fSBhcyBhbnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVSTCBtYXRjaGVyIGZvciB0aGUgZXh0ZXJuYWwgcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLm1hdGNoZXJGYWN0b3J5LmdldEdsb2JVcmxNYXRjaGVyKFxuICAgICAgdGhpcy5pbnRlcm5hbFVybFBhdHRlcm5zXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVyRmFjdG9yeS5nZXRPcHBvc2l0ZVVybE1hdGNoZXIobWF0Y2hlcik7IC8vIHRoZSBleHRlcm5hbCByb3V0ZSBzaG91bGQgYmUgYWN0aXZhdGVkIG9ubHkgd2hlbiBpdCdzIE5PVCBhbiBpbnRlcm5hbCByb3V0ZVxuICB9XG59XG4iXX0=