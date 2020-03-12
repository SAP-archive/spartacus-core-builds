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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsidXNlci1yZWdpc3Rlci5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlclJlZ2lzdGVyRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJDb25uZWN0b3I7XG4gICAgcmVnaXN0ZXJVc2VyJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbj47XG4gICAgcmVnaXN0ZXJHdWVzdCQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlclJlZ2lzdGVyT3JSZW1vdmVBY3Rpb24gfCBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuPjtcbiAgICByZW1vdmVVc2VyJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyUmVnaXN0ZXJPclJlbW92ZUFjdGlvbiB8IEF1dGhBY3Rpb25zLkxvZ291dD47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJDb25uZWN0b3I6IFVzZXJDb25uZWN0b3IpO1xufVxuIl19