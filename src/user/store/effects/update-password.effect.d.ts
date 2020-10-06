import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UpdatePasswordEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updatePassword$: Observable<UserActions.UpdatePasswordSuccess | UserActions.UpdatePasswordFail>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UpdatePasswordEffects>;
}

//# sourceMappingURL=update-password.effect.d.ts.map