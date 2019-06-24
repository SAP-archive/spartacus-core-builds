import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import * as fromUserOrdersAction from '../actions/user-orders.action';
export declare class UserOrdersEffect {
    private actions$;
    private orderConnector;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
    loadUserOrders$: Observable<fromUserOrdersAction.UserOrdersAction>;
    resetUserOrders$: Observable<Action>;
}
