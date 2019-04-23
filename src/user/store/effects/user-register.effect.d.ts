import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/user-register.action';
import { LoadUserToken, Logout } from '../../../auth/index';
import { OccUserService } from '../../../user/occ/index';
export declare class UserRegisterEffects {
    private actions$;
    private userService;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | LoadUserToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | Logout>;
    constructor(actions$: Actions, userService: OccUserService);
}
