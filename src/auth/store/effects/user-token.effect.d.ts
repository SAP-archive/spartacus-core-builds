import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Login } from '../actions/login-logout.action';
import { UserTokenAction } from '../actions/user-token.action';
import { UserAuthenticationTokenService } from './../../services/user-authentication/user-authentication-token.service';
export declare class UserTokenEffects {
    private actions$;
    private userTokenService;
    loadUserToken$: Observable<UserTokenAction>;
    login$: Observable<Login>;
    refreshUserToken$: Observable<UserTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
}
