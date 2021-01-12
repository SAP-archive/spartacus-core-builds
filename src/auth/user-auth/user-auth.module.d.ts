import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { AuthService } from './facade/auth.service';
import { AuthStatePersistenceService } from './services/auth-state-persistence.service';
/**
 * Initialize the check for `token` or `code` in the url returned from the OAuth server.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-oauth2-oidc';
import * as ɵngcc3 from './events/user-auth-event.module';
export declare function checkOAuthParamsInUrl(authService: AuthService, configInit: ConfigInitializerService): () => Promise<void>;
export declare function authStatePersistenceFactory(authStatePersistenceService: AuthStatePersistenceService): () => void;
/**
 * Authentication module for a user. Handlers requests for logged in users,
 * provides authorization services and storage for tokens.
 */
export declare class UserAuthModule {
    static forRoot(): ModuleWithProviders<UserAuthModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<UserAuthModule, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc2.OAuthModule, typeof ɵngcc3.UserAuthEventModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<UserAuthModule>;
}

//# sourceMappingURL=user-auth.module.d.ts.map