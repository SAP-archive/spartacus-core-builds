import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SemanticPathService } from '../../../routing/configurable-routes/url-translation/semantic-path.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from '../services/auth-redirect.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/auth.service";
import * as i2 from "../services/auth-redirect.service";
import * as i3 from "../../../routing/configurable-routes/url-translation/semantic-path.service";
import * as i4 from "@angular/router";
/**
 * Checks if there isn't any logged in user.
 * Use to protect pages dedicated only for guests (eg. login page).
 */
export class NotAuthGuard {
    constructor(authService, authRedirectService, semanticPathService, router) {
        this.authService = authService;
        this.authRedirectService = authRedirectService;
        this.semanticPathService = semanticPathService;
        this.router = router;
    }
    canActivate() {
        this.authRedirectService.reportNotAuthGuard();
        // redirect, if user is already logged in:
        return this.authService.isUserLoggedIn().pipe(map((isLoggedIn) => {
            if (isLoggedIn) {
                return this.router.parseUrl(this.semanticPathService.get('home'));
            }
            return !isLoggedIn;
        }));
    }
}
NotAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotAuthGuard_Factory() { return new NotAuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AuthRedirectService), i0.ɵɵinject(i3.SemanticPathService), i0.ɵɵinject(i4.Router)); }, token: NotAuthGuard, providedIn: "root" });
NotAuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
NotAuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: AuthRedirectService },
    { type: SemanticPathService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9ndWFyZHMvbm90LWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsTUFBTSxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBRXhFOzs7R0FHRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQ1ksV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLG1CQUF3QyxFQUN4QyxNQUFjO1FBSGQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdkIsQ0FBQztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDakIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkU7WUFDRCxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVFEsV0FBVztZQUNYLG1CQUFtQjtZQUZuQixtQkFBbUI7WUFITixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLXJlZGlyZWN0LnNlcnZpY2UnO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpc24ndCBhbnkgbG9nZ2VkIGluIHVzZXIuXG4gKiBVc2UgdG8gcHJvdGVjdCBwYWdlcyBkZWRpY2F0ZWQgb25seSBmb3IgZ3Vlc3RzIChlZy4gbG9naW4gcGFnZSkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgdGhpcy5hdXRoUmVkaXJlY3RTZXJ2aWNlLnJlcG9ydE5vdEF1dGhHdWFyZCgpO1xuXG4gICAgLy8gcmVkaXJlY3QsIGlmIHVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW46XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKS5waXBlKFxuICAgICAgbWFwKChpc0xvZ2dlZEluKSA9PiB7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ2hvbWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFpc0xvZ2dlZEluO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=