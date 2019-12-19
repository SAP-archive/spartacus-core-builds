import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    loadOrderDetails$: Observable<UserActions.OrderDetailsAction>;
    cancelOrder$: Observable<UserActions.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
}
