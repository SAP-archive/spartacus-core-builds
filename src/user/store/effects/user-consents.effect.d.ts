import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConsentConnector } from '../../connectors/consent/user-consent.connector';
import * as fromActions from '../actions/user-consents.action';
export declare class UserConsentsEffect {
    private actions$;
    private userConsentConnector;
    resetConsents$: Observable<fromActions.ResetLoadUserConsents>;
    getConsents$: Observable<fromActions.UserConsentsAction>;
    giveConsent$: Observable<fromActions.UserConsentsAction>;
    withdrawConsent$: Observable<fromActions.UserConsentsAction>;
    constructor(actions$: Actions, userConsentConnector: UserConsentConnector);
}
