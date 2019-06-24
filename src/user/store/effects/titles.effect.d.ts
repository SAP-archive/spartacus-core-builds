import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromAction from '../actions/titles.action';
export declare class TitlesEffects {
    private actions$;
    private userAccountConnector;
    loadTitles$: Observable<fromAction.TitlesAction>;
    private sortTitles;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
}
