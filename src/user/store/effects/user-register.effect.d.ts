import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthActions } from '../../../auth/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserRegisterEffects {
    private actions$;
    private userConnector;
    registerUser$: Observable<UserActions.UserRegisterOrRemoveAction>;
    registerGuest$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.LoadUserToken>;
    removeUser$: Observable<UserActions.UserRegisterOrRemoveAction | AuthActions.Logout>;
    constructor(actions$: Actions, userConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserRegisterEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserRegisterEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci1yZWdpc3Rlci5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJSZWdpc3RlckVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yO1xuICAgIHJlZ2lzdGVyVXNlciQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24+O1xuICAgIHJlZ2lzdGVyR3Vlc3QkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJSZWdpc3Rlck9yUmVtb3ZlQWN0aW9uIHwgQXV0aEFjdGlvbnMuTG9hZFVzZXJUb2tlbj47XG4gICAgcmVtb3ZlVXNlciQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBBdXRoQWN0aW9ucy5Mb2dvdXQ+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yKTtcbn1cbiJdfQ==