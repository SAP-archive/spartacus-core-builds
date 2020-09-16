import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProtectedRoutesService } from './protected-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "./protected-routes.service";
import * as i2 from "../../auth/guards/auth.guard";
export class ProtectedRoutesGuard {
    constructor(service, authGuard) {
        this.service = service;
        this.authGuard = authGuard;
    }
    /**
     * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
     */
    canActivate(route) {
        let urlSegments = route.url.map((seg) => seg.path);
        // For the root path `/` ActivatedRoute contains an empty array of segments:
        urlSegments = urlSegments.length ? urlSegments : [''];
        if (this.service.isUrlProtected(urlSegments)) {
            return this.authGuard.canActivate();
        }
        return of(true);
    }
}
ProtectedRoutesGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProtectedRoutesGuard_Factory() { return new ProtectedRoutesGuard(i0.ɵɵinject(i1.ProtectedRoutesService), i0.ɵɵinject(i2.AuthGuard)); }, token: ProtectedRoutesGuard, providedIn: "root" });
ProtectedRoutesGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProtectedRoutesGuard.ctorParameters = () => [
    { type: ProtectedRoutesService },
    { type: AuthGuard }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdGVjdGVkLXJvdXRlcy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvcHJvdGVjdGVkLXJvdXRlcy9wcm90ZWN0ZWQtcm91dGVzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFHcEUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUNZLE9BQStCLEVBQy9CLFNBQW9CO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDN0IsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksV0FBVyxHQUFhLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsNEVBQTRFO1FBQzVFLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUZ6QixzQkFBc0I7WUFEdEIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9hdXRoL2d1YXJkcy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IFByb3RlY3RlZFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL3Byb3RlY3RlZC1yb3V0ZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvdGVjdGVkUm91dGVzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQcm90ZWN0ZWRSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoR3VhcmQ6IEF1dGhHdWFyZFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGFudGljaXBhdGVkIHVybCBpcyBwcm90ZWN0ZWQsIGl0IHN3aXRjaGVzIHRvIHRoZSBBdXRoR3VhcmQuIE90aGVyd2lzZSBlbWl0cyB0cnVlLlxuICAgKi9cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgdXJsU2VnbWVudHM6IHN0cmluZ1tdID0gcm91dGUudXJsLm1hcCgoc2VnKSA9PiBzZWcucGF0aCk7XG5cbiAgICAvLyBGb3IgdGhlIHJvb3QgcGF0aCBgL2AgQWN0aXZhdGVkUm91dGUgY29udGFpbnMgYW4gZW1wdHkgYXJyYXkgb2Ygc2VnbWVudHM6XG4gICAgdXJsU2VnbWVudHMgPSB1cmxTZWdtZW50cy5sZW5ndGggPyB1cmxTZWdtZW50cyA6IFsnJ107XG5cbiAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVXJsUHJvdGVjdGVkKHVybFNlZ21lbnRzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aEd1YXJkLmNhbkFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxufVxuIl19