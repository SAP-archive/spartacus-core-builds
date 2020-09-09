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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentsEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserConsentsEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci1jb25zZW50cy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQ29uc2VudHNFZmZlY3Qge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQ29uc2VudENvbm5lY3RvcjtcbiAgICByZXNldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5SZXNldExvYWRVc2VyQ29uc2VudHM+O1xuICAgIGdldENvbnNlbnRzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+O1xuICAgIGdpdmVDb25zZW50JDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24gfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5SZW1vdmVNZXNzYWdlc0J5VHlwZT47XG4gICAgd2l0aGRyYXdDb25zZW50JDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyQ29uc2VudENvbm5lY3RvcjogVXNlckNvbnNlbnRDb25uZWN0b3IpO1xufVxuIl19