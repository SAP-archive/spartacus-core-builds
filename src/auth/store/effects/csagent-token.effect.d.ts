import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
export declare class CustomerSupportAgentTokenEffects {
    private actions$;
    private userTokenService;
    loadCustomerSupportAgentToken$: Observable<AuthActions.CustomerSupportAgentTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
}
