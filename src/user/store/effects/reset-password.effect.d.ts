import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ResetPasswordEffects {
    private actions$;
    private userAccountConnector;
    resetPassword$: Observable<UserActions.ResetPasswordSuccess | GlobalMessageActions.AddMessage | UserActions.ResetPasswordFail>;
    constructor(actions$: Actions, userAccountConnector: UserConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResetPasswordEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ResetPasswordEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7OztBQUtBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXNldFBhc3N3b3JkRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yO1xuICAgIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZSB8IFVzZXJBY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3IpO1xufVxuIl19