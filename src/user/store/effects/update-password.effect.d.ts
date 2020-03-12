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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJ1cGRhdGUtcGFzc3dvcmQuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwZGF0ZVBhc3N3b3JkRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3Rvcik7XG4gICAgdXBkYXRlUGFzc3dvcmQkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkU3VjY2VzcyB8IFVzZXJBY3Rpb25zLlVwZGF0ZVBhc3N3b3JkRmFpbD47XG59XG4iXX0=