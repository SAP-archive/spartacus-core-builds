import { Observable } from 'rxjs';
/**
 * Service serves storage role for AuthRedirectService.
 * Used by AuthStatePersistenceService to store redirect url for OAuth flows that rely on redirects.
 */
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
}
