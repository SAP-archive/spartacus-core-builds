import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromOrderDetailsAction from '../actions/order-details.action';
import { OrderConnector } from '../../connectors/order/order.connector';
export declare class OrderDetailsEffect {
    private actions$;
    private orderConnector;
    loadOrderDetails$: Observable<fromOrderDetailsAction.OrderDetailsAction>;
    constructor(actions$: Actions, orderConnector: OrderConnector);
}
