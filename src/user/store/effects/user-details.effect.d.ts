import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OccUserService } from '../../occ/index';
import * as fromUserDetailsAction from '../actions/user-details.action';
export declare class UserDetailsEffects {
    private actions$;
    private occUserService;
    loadUserDetails$: Observable<fromUserDetailsAction.UserDetailsAction>;
    updateUserDetails$: Observable<fromUserDetailsAction.UpdateUserDetailsSuccess | fromUserDetailsAction.UpdateUserDetailsFail>;
    constructor(actions$: Actions, occUserService: OccUserService);
}
