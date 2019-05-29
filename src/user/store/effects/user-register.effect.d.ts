import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LoadOpenIdToken, LoadUserToken, Logout } from '../../../auth/index';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
import * as fromActions from '../actions/user-register.action';
export declare class UserRegisterEffects {
    private actions$;
    private userAccountConnector;
    registerUser$: Observable<fromActions.UserRegisterOrRemoveAction | LoadUserToken | LoadOpenIdToken>;
    removeUser$: Observable<fromActions.UserRegisterOrRemoveAction | Logout>;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
}
