import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    loadUserOrders$: Observable<UserActions.UserOrdersAction>;
    resetUserOrders$: Observable<UserActions.ClearUserOrders>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrdersEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserOrdersEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInVzZXItb3JkZXJzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlck9yZGVyc0VmZmVjdCB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBvcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yKTtcbiAgICBsb2FkVXNlck9yZGVycyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlck9yZGVyc0FjdGlvbj47XG4gICAgcmVzZXRVc2VyT3JkZXJzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5DbGVhclVzZXJPcmRlcnM+O1xufVxuIl19