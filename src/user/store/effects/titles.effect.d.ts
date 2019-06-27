import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export declare class TitlesEffects {
    private actions$;
    private userAccountConnector;
    loadTitles$: Observable<UserActions.TitlesAction>;
    private sortTitles;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
