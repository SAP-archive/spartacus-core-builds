import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions';
import { UserConsentConnector } from '../../connectors/consent/user-consent.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserConsentsEffect {
    private actions$;
    private userConsentConnector;
    resetConsents$: Observable<UserActions.ResetLoadUserConsents>;
    getConsents$: Observable<UserActions.UserConsentsAction>;
    giveConsent$: Observable<UserActions.UserConsentsAction | GlobalMessageActions.RemoveMessagesByType>;
    withdrawConsent$: Observable<UserActions.UserConsentsAction>;
    constructor(actions$: Actions, userConsentConnector: UserConsentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentsEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserConsentsEffect>;
}

//# sourceMappingURL=user-consents.effect.d.ts.map