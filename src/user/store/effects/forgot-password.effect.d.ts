import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AddMessage } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export declare class ForgotPasswordEffects {
    private actions$;
    private userAccountConnector;
    requestForgotPasswordEmail$: Observable<fromActions.ForgotPasswordEmailRequestSuccess | AddMessage | fromActions.ForgotPasswordEmailRequestFail>;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
}
