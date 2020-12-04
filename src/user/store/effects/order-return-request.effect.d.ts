import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
export declare class OrderReturnRequestEffect {
    private actions$;
    private orderConnector;
    createReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    loadReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    cancelReturnRequest$: Observable<UserActions.OrderReturnRequestAction>;
    loadReturnRequestList$: Observable<UserActions.OrderReturnRequestAction>;
    constructor(actions$: Actions, orderConnector: UserOrderConnector);
}
