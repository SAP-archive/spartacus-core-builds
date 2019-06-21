import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AddMessage } from '../../../global-message/index';
import * as fromActions from '../actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
export declare class ForgotPasswordEffects {
    private actions$;
    private userAccountConnector;
    requestForgotPasswordEmail$: Observable<fromActions.ForgotPasswordEmailRequestSuccess | AddMessage | fromActions.ForgotPasswordEmailRequestFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
