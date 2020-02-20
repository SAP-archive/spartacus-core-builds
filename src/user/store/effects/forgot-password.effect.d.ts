import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ForgotPasswordEffects {
    private actions$;
    private userAccountConnector;
    requestForgotPasswordEmail$: Observable<UserActions.ForgotPasswordEmailRequestSuccess | GlobalMessageActions.AddMessage | UserActions.ForgotPasswordEmailRequestFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ForgotPasswordEffects>;
}

//# sourceMappingURL=forgot-password.effect.d.ts.map