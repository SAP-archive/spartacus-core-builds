import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserTokenEffects {
    private actions$;
    private userTokenService;
    loadUserToken$: Observable<AuthActions.UserTokenAction>;
    login$: Observable<AuthActions.Login>;
    refreshUserToken$: Observable<AuthActions.UserTokenAction>;
    revokeUserToken$: Observable<AuthActions.UserTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserTokenEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserTokenEffects>;
}

//# sourceMappingURL=user-token.effect.d.ts.map