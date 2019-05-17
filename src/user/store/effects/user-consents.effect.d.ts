import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAccountConnector } from '../../connectors/account/user-account.connector';
import * as fromActions from '../actions/user-consents.action';
export declare class UserConsentsEffect {
    private actions$;
    private userAccountConnector;
    getConsents$: Observable<fromActions.UserConsentsAction>;
    giveConsent$: Observable<fromActions.UserConsentsAction>;
    withdrawConsent$: Observable<fromActions.UserConsentsAction>;
    constructor(actions$: Actions, userAccountConnector: UserAccountConnector);
}
