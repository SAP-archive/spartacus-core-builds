import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ClientTokenAction } from '../actions/client-token.action';
import { ClientAuthenticationTokenService } from './../../services/client-authentication/client-authentication-token.service';
export declare class ClientTokenEffect {
    private actions$;
    private clientAuthenticationTokenService;
    loadClientToken$: Observable<ClientTokenAction>;
    constructor(actions$: Actions, clientAuthenticationTokenService: ClientAuthenticationTokenService);
}
