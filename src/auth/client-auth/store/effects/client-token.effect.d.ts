import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ClientAuthenticationTokenService } from '../../services/client-authentication-token.service';
import { ClientAuthActions } from '../actions/index';
export declare class ClientTokenEffect {
    private actions$;
    private clientAuthenticationTokenService;
    loadClientToken$: Observable<ClientAuthActions.ClientTokenAction>;
    constructor(actions$: Actions, clientAuthenticationTokenService: ClientAuthenticationTokenService);
}
