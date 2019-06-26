import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/index';
export declare class ForgotPasswordEffects {
    private actions$;
    private userAccountConnector;
    requestForgotPasswordEmail$: Observable<fromActions.ForgotPasswordEmailRequestSuccess | GlobalMessageActions.AddMessage | fromActions.ForgotPasswordEmailRequestFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
