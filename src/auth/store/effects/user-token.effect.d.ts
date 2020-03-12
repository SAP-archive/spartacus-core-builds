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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci10b2tlbi5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7OztBQVFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1hdXRoZW50aWNhdGlvbi91c2VyLWF1dGhlbnRpY2F0aW9uLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJUb2tlbkVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlO1xuICAgIGxvYWRVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvbj47XG4gICAgbG9naW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLkxvZ2luPjtcbiAgICByZWZyZXNoVXNlclRva2VuJDogT2JzZXJ2YWJsZTxBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb24+O1xuICAgIHJldm9rZVVzZXJUb2tlbiQ6IE9ic2VydmFibGU8QXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlclRva2VuU2VydmljZTogVXNlckF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlKTtcbn1cbiJdfQ==