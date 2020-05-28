import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../../auth/services/user-authentication/user-authentication-token.service';
import { AsmActions } from '../actions/index';
export declare class CustomerSupportAgentTokenEffects {
    private actions$;
    private userTokenService;
    loadCustomerSupportAgentToken$: Observable<AsmActions.CustomerSupportAgentTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
}
