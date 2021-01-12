import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { AuthService } from './facade/auth.service';
import { AuthStatePersistenceService } from './services/auth-state-persistence.service';
/**
 * Initialize the check for `token` or `code` in the url returned from the OAuth server.
 */
export declare function checkOAuthParamsInUrl(authService: AuthService, configInit: ConfigInitializerService): () => Promise<void>;
export declare function authStatePersistenceFactory(authStatePersistenceService: AuthStatePersistenceService): () => void;
/**
 * Authentication module for a user. Handlers requests for logged in users,
 * provides authorization services and storage for tokens.
 */
export declare class UserAuthModule {
    static forRoot(): ModuleWithProviders<UserAuthModule>;
}
