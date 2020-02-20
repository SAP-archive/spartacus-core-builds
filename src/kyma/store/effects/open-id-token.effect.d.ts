import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    private config;
    triggerOpenIdTokenLoading$: Observable<KymaActions.LoadOpenIdToken>;
    loadOpenIdToken$: Observable<KymaActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService, config: KymaConfig);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdTokenEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OpenIdTokenEffect>;
}

//# sourceMappingURL=open-id-token.effect.d.ts.map