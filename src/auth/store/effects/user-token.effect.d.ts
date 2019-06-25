import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
export declare class UserTokenEffects {
    private actions$;
    private userTokenService;
    loadUserToken$: Observable<AuthActions.UserTokenAction>;
    login$: Observable<AuthActions.Login>;
    refreshUserToken$: Observable<AuthActions.UserTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
}
