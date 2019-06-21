import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LoadUserToken, Logout } from '../../../auth/index';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/user-register.action';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | LoadUserToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
