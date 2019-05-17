import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUpdateEmailAction from '../actions/update-email.action';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export declare class UpdateEmailEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
    updateEmail$: Observable<fromUpdateEmailAction.UpdateEmailSuccessAction | fromUpdateEmailAction.UpdateEmailErrorAction>;
}
