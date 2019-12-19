import { Order } from '../../../model/order.model';
import { UserActions } from '../actions/index';
export declare const initialState: Order;
export declare function reducer(state: Order, action: UserActions.OrderDetailsAction): Order;
