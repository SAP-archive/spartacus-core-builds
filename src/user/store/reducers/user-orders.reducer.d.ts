import * as fromUserOrdersAction from '../actions/user-orders.action';
import { OrderHistoryList } from '../../../model/order.model';
export declare const initialState: OrderHistoryList;
export declare function reducer(state: OrderHistoryList, action: fromUserOrdersAction.UserOrdersAction): OrderHistoryList;
