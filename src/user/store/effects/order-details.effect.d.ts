import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    loadOrderDetails$: Observable<UserActions.OrderDetailsAction>;
    cancelOrder$: Observable<UserActions.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailsEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OrderDetailsEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsib3JkZXItZGV0YWlscy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcmRlckRldGFpbHNFZmZlY3Qge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBvcmRlckNvbm5lY3RvcjtcbiAgICBsb2FkT3JkZXJEZXRhaWxzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5PcmRlckRldGFpbHNBY3Rpb24+O1xuICAgIGNhbmNlbE9yZGVyJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5PcmRlckRldGFpbHNBY3Rpb24+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBvcmRlckNvbm5lY3RvcjogVXNlck9yZGVyQ29ubmVjdG9yKTtcbn1cbiJdfQ==