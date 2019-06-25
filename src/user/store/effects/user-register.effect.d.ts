import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthActions } from '../../../auth/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/user-register.action';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | AuthActions.LoadUserToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | AuthActions.Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
