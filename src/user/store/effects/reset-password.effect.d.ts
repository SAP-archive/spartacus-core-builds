import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromActions from '../actions/index';
export declare class ResetPasswordEffects {
    private actions$;
    private userAccountConnector;
    resetPassword$: Observable<fromActions.ResetPasswordSuccess | GlobalMessageActions.AddMessage | fromActions.ResetPasswordFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
