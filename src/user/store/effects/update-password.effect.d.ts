import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/update-password.action';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export declare class UpdatePasswordEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
    updatePassword$: Observable<fromActions.UpdatePasswordSuccess | fromActions.UpdatePasswordFail>;
}
