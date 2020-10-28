import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ClientAuthenticationTokenService } from '../../services/client-authentication-token.service';
import { ClientAuthActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ClientTokenEffect {
    private actions$;
    private clientAuthenticationTokenService;
    loadClientToken$: Observable<ClientAuthActions.ClientTokenAction>;
    constructor(actions$: Actions, clientAuthenticationTokenService: ClientAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ClientTokenEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ClientTokenEffect>;
}

//# sourceMappingURL=client-token.effect.d.ts.map