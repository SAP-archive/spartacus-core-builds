import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUserDetailsAction from '../actions/user-details.action';
import { UserConnector } from '../../connectors/user/user.connector';
export declare class UserDetailsEffects {
    private actions$;
    private userConnector;
    loadUserDetails$: Observable<fromUserDetailsAction.UserDetailsAction>;
    updateUserDetails$: Observable<fromUserDetailsAction.UpdateUserDetailsSuccess | fromUserDetailsAction.UpdateUserDetailsFail>;
    constructor(actions$: Actions, userConnector: UserConnector);
}
