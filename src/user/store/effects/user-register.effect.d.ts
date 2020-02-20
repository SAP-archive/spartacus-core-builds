import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthActions } from '../../../auth/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    registerGuest$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.LoadUserToken>;
    removeUser$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserRegisterEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserRegisterEffects>;
}

//# sourceMappingURL=user-register.effect.d.ts.map