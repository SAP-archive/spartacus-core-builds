import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LoadOpenIdToken, LoadUserToken, Logout } from '../../../auth/index';
import * as fromActions from '../actions/user-register.action';
import { UserConnector } from '../../connectors/user/user.connector';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | LoadUserToken | LoadOpenIdToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
