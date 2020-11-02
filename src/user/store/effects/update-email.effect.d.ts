import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export declare class UpdateEmailEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updateEmail$: Observable<UserActions.UpdateEmailSuccessAction | UserActions.UpdateEmailErrorAction>;
}
