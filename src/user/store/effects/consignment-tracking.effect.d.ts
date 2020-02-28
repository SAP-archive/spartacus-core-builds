import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ConsignmentTrackingEffects {
    private actions$;
    private userOrderConnector;
    loadConsignmentTracking$: Observable<UserActions.ConsignmentTrackingAction>;
    constructor(actions$: Actions, userOrderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConsignmentTrackingEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ConsignmentTrackingEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImNvbnNpZ25tZW50LXRyYWNraW5nLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uc2lnbm1lbnRUcmFja2luZ0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJDb25uZWN0b3I7XG4gICAgbG9hZENvbnNpZ25tZW50VHJhY2tpbmckOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLkNvbnNpZ25tZW50VHJhY2tpbmdBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCB1c2VyT3JkZXJDb25uZWN0b3I6IFVzZXJPcmRlckNvbm5lY3Rvcik7XG59XG4iXX0=