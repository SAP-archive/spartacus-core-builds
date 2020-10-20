import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    triggerOpenIdTokenLoading$: Observable<KymaActions.LoadOpenIdToken>;
    loadOpenIdToken$: Observable<KymaActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdTokenEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OpenIdTokenEffect>;
}

//# sourceMappingURL=open-id-token.effect.d.ts.map