import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ResetPasswordEffects {
    private actions$;
    private userAccountConnector;
    resetPassword$: Observable<UserActions.ResetPasswordSuccess | GlobalMessageActions.AddMessage | UserActions.ResetPasswordFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResetPasswordEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ResetPasswordEffects>;
}

//# sourceMappingURL=reset-password.effect.d.ts.map