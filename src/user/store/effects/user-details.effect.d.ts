import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export declare class UserDetailsEffects {
    private actions$;
    private userConnector;
    loadUserDetails$: Observable<UserActions.UserDetailsAction>;
    updateUserDetails$: Observable<UserActions.UpdateUserDetailsSuccess | UserActions.UpdateUserDetailsFail>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
