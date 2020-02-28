import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UpdatePasswordEffects {
    private actions$;
    private userAccountConnector;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    updatePassword$: Observable<UserActions.UpdatePasswordSuccess | UserActions.UpdatePasswordFail>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UpdatePasswordEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtcGFzc3dvcmQuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVQYXNzd29yZEVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3IpO1xuICAgIHVwZGF0ZVBhc3N3b3JkJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZFN1Y2Nlc3MgfCBVc2VyQWN0aW9ucy5VcGRhdGVQYXNzd29yZEZhaWw+O1xufVxuIl19