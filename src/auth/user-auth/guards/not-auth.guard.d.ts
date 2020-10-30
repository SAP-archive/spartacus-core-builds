import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SemanticPathService } from '../../../routing/configurable-routes/url-translation/semantic-path.service';
import { AuthService } from '../facade/auth.service';
import { AuthRedirectService } from '../services/auth-redirect.service';
/**
 * Checks if there isn't any logged in user.
 * Use to protect pages dedicated only for guests (eg. login page).
 */
import * as ɵngcc0 from '@angular/core';
export declare class NotAuthGuard implements CanActivate {
    protected authService: AuthService;
    protected authRedirectService: AuthRedirectService;
    protected semanticPathService: SemanticPathService;
    protected router: Router;
    constructor(authService: AuthService, authRedirectService: AuthRedirectService, semanticPathService: SemanticPathService, router: Router);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotAuthGuard, never>;
}

//# sourceMappingURL=not-auth.guard.d.ts.map