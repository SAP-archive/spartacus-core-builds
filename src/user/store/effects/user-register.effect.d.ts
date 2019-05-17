import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/user-register.action';
import { LoadUserToken, Logout } from '../../../auth/index';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export declare class UserRegisterEffects {
    private actions$;
    private userAccountConnector;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | LoadUserToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | Logout>;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
}
