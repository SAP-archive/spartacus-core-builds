import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { AddMessage } from '../../../global-message/index';
import { UserConnector } from '../../connectors/user/user.connector';
export declare class ResetPasswordEffects {
    private actions$;
    private userAccountConnector;
    resetPassword$: Observable<fromActions.ResetPasswordSuccess | AddMessage | fromActions.ResetPasswordFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
