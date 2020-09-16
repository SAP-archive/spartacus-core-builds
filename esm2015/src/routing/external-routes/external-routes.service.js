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
export class ExternalRoutesService {
    constructor(config, urlMatcherService, injector) {
        this.config = config;
        this.urlMatcherService = urlMatcherService;
        this.injector = injector;
    }
    get internalUrlPatterns() {
        return ((this.config && this.config.routing && this.config.routing.internal) || []);
    }
    /**
     * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
     */
    addRoutes() {
        const router = this.injector.get(Router);
        const newRoutes = this.getRoutes();
        if (newRoutes.length) {
            router.resetConfig([...newRoutes, ...router.config]);
        }
    }
    /**
     * Returns routes that are responsible for redirection to different storefront systems
     */
    getRoutes() {
        if (!this.internalUrlPatterns.length) {
            return [];
        }
        const routes = [];
        routes.push({
            pathMatch: 'full',
            matcher: this.getUrlMatcher(),
            canActivate: [ExternalRoutesGuard],
            component: {},
        });
        return routes;
    }
    /**
     * Returns the URL matcher for the external route
     */
    getUrlMatcher() {
        const matcher = this.urlMatcherService.getFromGlob(this.internalUrlPatterns);
        return this.urlMatcherService.getOpposite(matcher); // the external route should be activated only when it's NOT an internal route
    }
}
ExternalRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalRoutesService_Factory() { return new ExternalRoutesService(i0.ɵɵinject(i1.ExternalRoutesConfig), i0.ɵɵinject(i2.UrlMatcherService), i0.ɵɵinject(i0.INJECTOR)); }, token: ExternalRoutesService, providedIn: "root" });
ExternalRoutesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ExternalRoutesService.ctorParameters = () => [
    { type: ExternalRoutesConfig },
    { type: UrlMatcherService },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9yb3V0aW5nL2V4dGVybmFsLXJvdXRlcy9leHRlcm5hbC1yb3V0ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlEOztHQUVHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNZLE1BQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUVKLElBQWMsbUJBQW1CO1FBQy9CLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBUztRQUNQLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxTQUFTO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdCLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxFQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNPLGFBQWE7UUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FDaEQsSUFBSSxDQUFDLG1CQUFtQixDQUN6QixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsOEVBQThFO0lBQ3BJLENBQUM7Ozs7WUF0REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSUSxvQkFBb0I7WUFEcEIsaUJBQWlCO1lBRkwsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgVXJsTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxNYXRjaGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VybC1tYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNDb25maWcgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNHdWFyZCB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLmd1YXJkJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaGVscHMgcmVkaXJlY3RpbmcgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtcyBmb3IgY29uZmlndXJlZCBVUkxzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBFeHRlcm5hbFJvdXRlc0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgdXJsTWF0Y2hlclNlcnZpY2U6IFVybE1hdGNoZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXQgaW50ZXJuYWxVcmxQYXR0ZXJucygpOiBFeHRlcm5hbFJvdXRlc0NvbmZpZ1sncm91dGluZyddWydpbnRlcm5hbCddIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnJvdXRpbmcgJiYgdGhpcy5jb25maWcucm91dGluZy5pbnRlcm5hbCkgfHwgW11cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlbmRzIHJvdXRlcyAodG8gdGhlIFJvdXRlci5jb25maWcpIHRoYXQgYXJlIHJlc3BvbnNpYmxlIGZvciByZWRpcmVjdGluZyB0byBhIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbVxuICAgKi9cbiAgYWRkUm91dGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlcjogUm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICBjb25zdCBuZXdSb3V0ZXMgPSB0aGlzLmdldFJvdXRlcygpO1xuICAgIGlmIChuZXdSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICByb3V0ZXIucmVzZXRDb25maWcoWy4uLm5ld1JvdXRlcywgLi4ucm91dGVyLmNvbmZpZ10pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvdXRlcyB0aGF0IGFyZSByZXNwb25zaWJsZSBmb3IgcmVkaXJlY3Rpb24gdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtc1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldFJvdXRlcygpOiBSb3V0ZXMge1xuICAgIGlmICghdGhpcy5pbnRlcm5hbFVybFBhdHRlcm5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtdO1xuXG4gICAgcm91dGVzLnB1c2goe1xuICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICBtYXRjaGVyOiB0aGlzLmdldFVybE1hdGNoZXIoKSxcbiAgICAgIGNhbkFjdGl2YXRlOiBbRXh0ZXJuYWxSb3V0ZXNHdWFyZF0sXG4gICAgICBjb21wb25lbnQ6IHt9IGFzIGFueSxcbiAgICB9KTtcblxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgVVJMIG1hdGNoZXIgZm9yIHRoZSBleHRlcm5hbCByb3V0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFVybE1hdGNoZXIoKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IHRoaXMudXJsTWF0Y2hlclNlcnZpY2UuZ2V0RnJvbUdsb2IoXG4gICAgICB0aGlzLmludGVybmFsVXJsUGF0dGVybnNcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnVybE1hdGNoZXJTZXJ2aWNlLmdldE9wcG9zaXRlKG1hdGNoZXIpOyAvLyB0aGUgZXh0ZXJuYWwgcm91dGUgc2hvdWxkIGJlIGFjdGl2YXRlZCBvbmx5IHdoZW4gaXQncyBOT1QgYW4gaW50ZXJuYWwgcm91dGVcbiAgfVxufVxuIl19