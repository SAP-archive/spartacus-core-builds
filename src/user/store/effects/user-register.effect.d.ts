import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthActions } from '../../../auth/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    registerGuest$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.LoadUserToken>;
    removeUser$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
