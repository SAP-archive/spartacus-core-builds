import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    triggerOpenIdTokenLoading$: Observable<KymaActions.LoadOpenIdToken>;
    loadOpenIdToken$: Observable<KymaActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService);
}
