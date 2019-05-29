import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import * as fromActions from '../actions/open-id-token.action';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    loadOpenIdToken$: Observable<fromActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService);
}
