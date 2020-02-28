import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { ExternalRoutesConfig } from './external-routes-config';
import { ExternalRoutesGuard } from './external-routes.guard';
/**
 * Service that helps redirecting to different storefront systems for configured URLs
 */
var ExternalRoutesService = /** @class */ (function () {
    function ExternalRoutesService(config, urlMatcherService, injector) {
        this.config = config;
        this.urlMatcherService = urlMatcherService;
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
        var matcher = this.urlMatcherService.getFromGlob(this.internalUrlPatterns);
        return this.urlMatcherService.getOpposite(matcher); // the external route should be activated only when it's NOT an internal route
    };
    ExternalRoutesService.ctorParameters = function () { return [
        { type: ExternalRoutesConfig },
        { type: UrlMatcherService },
        { type: Injector }
    ]; };
    ExternalRoutesService = __decorate([
        Injectable()
    ], ExternalRoutesService);
    return ExternalRoutesService;
}());
export { ExternalRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7O0dBRUc7QUFFSDtJQUNFLCtCQUNZLE1BQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUVKLHNCQUFjLHNEQUFtQjthQUFqQztZQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUMzRSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNILHlDQUFTLEdBQVQ7UUFDRSxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxXQUFXLFVBQUssU0FBUyxFQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLHlDQUFTLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0IsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsU0FBUyxFQUFFLEVBQVM7U0FDckIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sNkNBQWEsR0FBdkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoRCxJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyw4RUFBOEU7SUFDcEksQ0FBQzs7Z0JBakRtQixvQkFBb0I7Z0JBQ1QsaUJBQWlCO2dCQUMxQixRQUFROztJQUpuQixxQkFBcUI7UUFEakMsVUFBVSxFQUFFO09BQ0EscUJBQXFCLENBb0RqQztJQUFELDRCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FwRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBVcmxNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybE1hdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXJsLW1hdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0d1YXJkIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMuZ3VhcmQnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBoZWxwcyByZWRpcmVjdGluZyB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IEV4dGVybmFsUm91dGVzQ29uZmlnLFxuICAgIHByb3RlY3RlZCB1cmxNYXRjaGVyU2VydmljZTogVXJsTWF0Y2hlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldCBpbnRlcm5hbFVybFBhdHRlcm5zKCk6IEV4dGVybmFsUm91dGVzQ29uZmlnWydyb3V0aW5nJ11bJ2ludGVybmFsJ10ge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucm91dGluZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nLmludGVybmFsKSB8fCBbXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGVuZHMgcm91dGVzICh0byB0aGUgUm91dGVyLmNvbmZpZykgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW5nIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtXG4gICAqL1xuICBhZGRSb3V0ZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVyOiBSb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIGNvbnN0IG5ld1JvdXRlcyA9IHRoaXMuZ2V0Um91dGVzKCk7XG4gICAgaWYgKG5ld1JvdXRlcy5sZW5ndGgpIHtcbiAgICAgIHJvdXRlci5yZXNldENvbmZpZyhbLi4ubmV3Um91dGVzLCAuLi5yb3V0ZXIuY29uZmlnXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcm91dGVzIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGlvbiB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1zXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Um91dGVzKCk6IFJvdXRlcyB7XG4gICAgaWYgKCF0aGlzLmludGVybmFsVXJsUGF0dGVybnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlczogUm91dGVzID0gW107XG5cbiAgICByb3V0ZXMucHVzaCh7XG4gICAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgICAgIG1hdGNoZXI6IHRoaXMuZ2V0VXJsTWF0Y2hlcigpLFxuICAgICAgY2FuQWN0aXZhdGU6IFtFeHRlcm5hbFJvdXRlc0d1YXJkXSxcbiAgICAgIGNvbXBvbmVudDoge30gYXMgYW55LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkwgbWF0Y2hlciBmb3IgdGhlIGV4dGVybmFsIHJvdXRlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0VXJsTWF0Y2hlcigpOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBtYXRjaGVyID0gdGhpcy51cmxNYXRjaGVyU2VydmljZS5nZXRGcm9tR2xvYihcbiAgICAgIHRoaXMuaW50ZXJuYWxVcmxQYXR0ZXJuc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0T3Bwb3NpdGUobWF0Y2hlcik7IC8vIHRoZSBleHRlcm5hbCByb3V0ZSBzaG91bGQgYmUgYWN0aXZhdGVkIG9ubHkgd2hlbiBpdCdzIE5PVCBhbiBpbnRlcm5hbCByb3V0ZVxuICB9XG59XG4iXX0=