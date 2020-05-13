import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UrlMatcherService } from '../services/url-matcher.service';
import { ExternalRoutesConfig } from './external-routes-config';
import { ExternalRoutesGuard } from './external-routes.guard';
import * as i0 from "@angular/core";
import * as i1 from "./external-routes-config";
import * as i2 from "../services/url-matcher.service";
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
    ExternalRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalRoutesService_Factory() { return new ExternalRoutesService(i0.ɵɵinject(i1.ExternalRoutesConfig), i0.ɵɵinject(i2.UrlMatcherService), i0.ɵɵinject(i0.INJECTOR)); }, token: ExternalRoutesService, providedIn: "root" });
    ExternalRoutesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ExternalRoutesService);
    return ExternalRoutesService;
}());
export { ExternalRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFOUQ7O0dBRUc7QUFJSDtJQUNFLCtCQUNZLE1BQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUVKLHNCQUFjLHNEQUFtQjthQUFqQztZQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUMzRSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNILHlDQUFTLEdBQVQ7UUFDRSxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxXQUFXLFVBQUssU0FBUyxFQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLHlDQUFTLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0IsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsU0FBUyxFQUFFLEVBQVM7U0FDckIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sNkNBQWEsR0FBdkI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUNoRCxJQUFJLENBQUMsbUJBQW1CLENBQ3pCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyw4RUFBOEU7SUFDcEksQ0FBQzs7Z0JBakRtQixvQkFBb0I7Z0JBQ1QsaUJBQWlCO2dCQUMxQixRQUFROzs7SUFKbkIscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0FvRGpDO2dDQWhFRDtDQWdFQyxBQXBERCxJQW9EQztTQXBEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMsIFVybE1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsTWF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV4dGVybmFsUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IEV4dGVybmFsUm91dGVzR3VhcmQgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5ndWFyZCc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhlbHBzIHJlZGlyZWN0aW5nIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXMgZm9yIGNvbmZpZ3VyZWQgVVJMc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogRXh0ZXJuYWxSb3V0ZXNDb25maWcsXG4gICAgcHJvdGVjdGVkIHVybE1hdGNoZXJTZXJ2aWNlOiBVcmxNYXRjaGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0IGludGVybmFsVXJsUGF0dGVybnMoKTogRXh0ZXJuYWxSb3V0ZXNDb25maWdbJ3JvdXRpbmcnXVsnaW50ZXJuYWwnXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5yb3V0aW5nICYmIHRoaXMuY29uZmlnLnJvdXRpbmcuaW50ZXJuYWwpIHx8IFtdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZW5kcyByb3V0ZXMgKHRvIHRoZSBSb3V0ZXIuY29uZmlnKSB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3RpbmcgdG8gYSBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW1cbiAgICovXG4gIGFkZFJvdXRlcygpOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZXI6IFJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgY29uc3QgbmV3Um91dGVzID0gdGhpcy5nZXRSb3V0ZXMoKTtcbiAgICBpZiAobmV3Um91dGVzLmxlbmd0aCkge1xuICAgICAgcm91dGVyLnJlc2V0Q29uZmlnKFsuLi5uZXdSb3V0ZXMsIC4uLnJvdXRlci5jb25maWddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByb3V0ZXMgdGhhdCBhcmUgcmVzcG9uc2libGUgZm9yIHJlZGlyZWN0aW9uIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRSb3V0ZXMoKTogUm91dGVzIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJuYWxVcmxQYXR0ZXJucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXTtcblxuICAgIHJvdXRlcy5wdXNoKHtcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgbWF0Y2hlcjogdGhpcy5nZXRVcmxNYXRjaGVyKCksXG4gICAgICBjYW5BY3RpdmF0ZTogW0V4dGVybmFsUm91dGVzR3VhcmRdLFxuICAgICAgY29tcG9uZW50OiB7fSBhcyBhbnksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVSTCBtYXRjaGVyIGZvciB0aGUgZXh0ZXJuYWwgcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIGNvbnN0IG1hdGNoZXIgPSB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldEZyb21HbG9iKFxuICAgICAgdGhpcy5pbnRlcm5hbFVybFBhdHRlcm5zXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy51cmxNYXRjaGVyU2VydmljZS5nZXRPcHBvc2l0ZShtYXRjaGVyKTsgLy8gdGhlIGV4dGVybmFsIHJvdXRlIHNob3VsZCBiZSBhY3RpdmF0ZWQgb25seSB3aGVuIGl0J3MgTk9UIGFuIGludGVybmFsIHJvdXRlXG4gIH1cbn1cbiJdfQ==