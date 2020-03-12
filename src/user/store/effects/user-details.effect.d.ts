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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWRldGFpbHMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7O0FBTUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyRGV0YWlsc0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQ29ubmVjdG9yO1xuICAgIGxvYWRVc2VyRGV0YWlscyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlckRldGFpbHNBY3Rpb24+O1xuICAgIHVwZGF0ZVVzZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5VcGRhdGVVc2VyRGV0YWlsc1N1Y2Nlc3MgfCBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyRGV0YWlsc0ZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyQ29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yKTtcbn1cbiJdfQ==