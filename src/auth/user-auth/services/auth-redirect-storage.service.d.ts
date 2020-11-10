import { Observable } from 'rxjs';
/**
 * Service serves storage role for AuthRedirectService.
 * Used by AuthStatePersistenceService to store redirect url for OAuth flows that rely on redirects.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthRedirectStorageService {
    constructor();
    private redirectUrl$;
    /**
     * Get redirect url after logging in.
     *
     * @returns observable with the redirect url as string
     */
    getRedirectUrl(): Observable<string>;
    /**
     * Set url to redirect to after login.
     *
     * @param redirectUrl
     */
    setRedirectUrl(redirectUrl: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthRedirectStorageService, never>;
}

//# sourceMappingURL=auth-redirect-storage.service.d.ts.map