import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import { GlobalMessageService } from '../../../global-message/index';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    private globalMessageService;
    loadOrderDetails$: Observable<UserActions.OrderDetailsAction>;
    cancelOrder$: Observable<UserActions.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector, globalMessageService: GlobalMessageService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderDetailsEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsib3JkZXItZGV0YWlscy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlck9yZGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckRldGFpbHNFZmZlY3Qge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjtcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIGxvYWRPcmRlckRldGFpbHMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLk9yZGVyRGV0YWlsc0FjdGlvbj47XG4gICAgY2FuY2VsT3JkZXIkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLk9yZGVyRGV0YWlsc0FjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3IsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG59XG4iXX0=