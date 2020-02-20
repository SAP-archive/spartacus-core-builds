import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserDetailsEffects {
    private actions$;
    private userConnector;
    loadUserDetails$: Observable<UserActions.UserDetailsAction>;
    updateUserDetails$: Observable<UserActions.UpdateUserDetailsSuccess | UserActions.UpdateUserDetailsFail>;
    constructor(actions$: Actions, userConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserDetailsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserDetailsEffects>;
}

//# sourceMappingURL=user-details.effect.d.ts.map