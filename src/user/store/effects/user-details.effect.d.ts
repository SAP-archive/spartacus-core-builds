import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUserDetailsAction from '../actions/user-details.action';
import { UserDetailsConnector } from '../../connectors/details/user-details.connector';
export declare class UserDetailsEffects {
    private actions$;
    private userDetailsConnector;
    loadUserDetails$: Observable<fromUserDetailsAction.UserDetailsAction>;
    updateUserDetails$: Observable<fromUserDetailsAction.UpdateUserDetailsSuccess | fromUserDetailsAction.UpdateUserDetailsFail>;
    constructor(actions$: Actions, userDetailsConnector: UserDetailsConnector);
}
