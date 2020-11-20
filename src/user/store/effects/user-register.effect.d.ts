import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/user-auth/facade/auth.service';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    private authService;
    registerUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    registerGuest$: Observable<UserActions.UserRegisterOrRemoveAction>;
    removeUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    constructor(actions$: Actions, userConnector: UserConnector, authService: AuthService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserRegisterEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserRegisterEffects>;
}

//# sourceMappingURL=user-register.effect.d.ts.map