import { OccConfig } from '../../../occ/config/occ-config';
import { AuthConfig, AuthLibConfig } from '../config/auth-config';
import { OAuthFlow } from '../models/oauth-flow';
/**
 * Utility service on top of the authorization config.
 * Provides handy defaults, when not everything is set in the configuration.
 * Use this service instead of direct configuration.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthConfigService {
    protected authConfig: AuthConfig;
    protected occConfig: OccConfig;
    constructor(authConfig: AuthConfig, occConfig: OccConfig);
    /**
     * Utility to make access to authentication config easier.
     */
    private get config();
    /**
     * Get client_id
     *
     * @return client_id
     */
    getClientId(): string;
    /**
     * Get client_secret. OAuth server shouldn't require it from web apps (but Hybris OAuth server requires).
     *
     * @return client_secret
     */
    getClientSecret(): string;
    /**
     * Returns base url of the authorization server
     */
    getBaseUrl(): string;
    /**
     * Returns endpoint for getting the auth token
     */
    getTokenEndpoint(): string;
    /**
     * Returns url for redirect to the authorization server to get token/code
     */
    getLoginUrl(): string;
    /**
     * Returns endpoint for token revocation (both access and refresh token).
     */
    getRevokeEndpoint(): string;
    /**
     * Returns logout url to redirect to on logout.
     */
    getLogoutUrl(): string;
    /**
     * Returns userinfo endpoint of the OAuth server.
     */
    getUserinfoEndpoint(): string;
    /**
     * Returns configuration specific for the angular-oauth2-oidc library.
     */
    getOAuthLibConfig(): AuthLibConfig;
    protected prefixEndpoint(endpoint: string): string;
    /**
     * Returns the type of the OAuth flow based on auth config.
     * Use when you have to perform particular action only in some of the OAuth flow scenarios.
     */
    getOAuthFlow(): OAuthFlow;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthConfigService, never>;
}

//# sourceMappingURL=auth-config.service.d.ts.map