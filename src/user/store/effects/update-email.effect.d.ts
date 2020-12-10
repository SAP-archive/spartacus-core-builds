import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateEmailEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updateEmail$: Observable<UserActions.UpdateEmailSuccessAction | UserActions.UpdateEmailErrorAction>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UpdateEmailEffects>;
}

//# sourceMappingURL=update-email.effect.d.ts.map