import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../../auth/services/user-authentication/user-authentication-token.service';
import { AsmActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSupportAgentTokenEffects {
    private actions$;
    private userTokenService;
    loadCustomerSupportAgentToken$: Observable<AsmActions.CustomerSupportAgentTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSupportAgentTokenEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomerSupportAgentTokenEffects>;
}

//# sourceMappingURL=csagent-token.effect.d.ts.map