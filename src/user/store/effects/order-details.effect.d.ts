import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import * as fromOrderDetailsAction from '../actions/order-details.action';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    loadOrderDetails$: Observable<fromOrderDetailsAction.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
}
