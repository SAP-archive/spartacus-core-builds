import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromUpdateEmailAction from '../actions/update-email.action';
import { UserConnector } from '../../connectors/user/user.connector';
export declare class UpdateEmailEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updateEmail$: Observable<fromUpdateEmailAction.UpdateEmailSuccessAction | fromUpdateEmailAction.UpdateEmailErrorAction>;
}
