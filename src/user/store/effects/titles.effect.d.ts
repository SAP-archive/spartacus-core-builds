import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromAction from '../actions/titles.action';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
export declare class TitlesEffects {
    private actions$;
    private userAccountConnector;
    loadTitles$: Observable<fromAction.TitlesAction>;
    private sortTitles;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
}
