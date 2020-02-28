import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserTokenEffects {
    private actions$;
    private userTokenService;
    loadUserToken$: Observable<AuthActions.UserTokenAction>;
    login$: Observable<AuthActions.Login>;
    refreshUserToken$: Observable<AuthActions.UserTokenAction>;
    revokeUserToken$: Observable<AuthActions.UserTokenAction>;
    constructor(actions$: Actions, userTokenService: UserAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserTokenEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserTokenEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci10b2tlbi5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7OztBQVFBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItYXV0aGVudGljYXRpb24vdXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyVG9rZW5FZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlclRva2VuU2VydmljZTtcbiAgICBsb2FkVXNlclRva2VuJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb24+O1xuICAgIGxvZ2luJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Mb2dpbj47XG4gICAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8QXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uPjtcbiAgICByZXZva2VVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJUb2tlblNlcnZpY2U6IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSk7XG59XG4iXX0=