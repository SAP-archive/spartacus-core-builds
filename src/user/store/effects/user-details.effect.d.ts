import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserDetailsEffects {
    private actions$;
    private userConnector;
    loadUserDetails$: Observable<UserActions.UserDetailsAction>;
    updateUserDetails$: Observable<UserActions.UpdateUserDetailsSuccess | UserActions.UpdateUserDetailsFail>;
    constructor(actions$: Actions, userConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserDetailsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserDetailsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWRldGFpbHMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckRldGFpbHNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlckNvbm5lY3RvcjtcbiAgICBsb2FkVXNlckRldGFpbHMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJEZXRhaWxzQWN0aW9uPjtcbiAgICB1cGRhdGVVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXBkYXRlVXNlckRldGFpbHNTdWNjZXNzIHwgVXNlckFjdGlvbnMuVXBkYXRlVXNlckRldGFpbHNGYWlsPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckNvbm5lY3RvcjogVXNlckNvbm5lY3Rvcik7XG59XG4iXX0=