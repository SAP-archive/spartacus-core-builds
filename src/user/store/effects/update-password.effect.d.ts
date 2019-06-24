import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/update-password.action';
export declare class UpdatePasswordEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updatePassword$: Observable<fromActions.UpdatePasswordSuccess | fromActions.UpdatePasswordFail>;
}
