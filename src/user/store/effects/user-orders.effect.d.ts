import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUserOrdersAction from '../actions/user-orders.action';
import { OrderConnector } from '../../connectors/order/order.connector';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    constructor(actions$: Actions, orderConnector: OrderConnector);
    loadUserOrders$: Observable<fromUserOrdersAction.UserOrdersAction>;
    resetUserOrders$: Observable<Action>;
}
