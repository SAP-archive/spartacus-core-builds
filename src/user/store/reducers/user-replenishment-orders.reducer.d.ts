import { ReplenishmentOrderList } from '../../../model/replenishment-order.model';
import { UserActions } from '../actions/index';
export declare const initialState: ReplenishmentOrderList;
export declare function reducer(state: ReplenishmentOrderList, action: UserActions.UserReplenishmentOrdersAction | UserActions.ReplenishmentOrderDetailsAction): ReplenishmentOrderList;
