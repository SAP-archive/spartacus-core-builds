import { ReplenishmentOrderList } from '../../../model/replenishment-order.model';
import { StateUtils } from '../../../state/utils/index';
export declare const LOAD_USER_REPLENISHMENT_ORDERS = "[User] Load User Replenishment Orders";
export declare const LOAD_USER_REPLENISHMENT_ORDERS_FAIL = "[User] Load User Replenishment Orders Fail";
export declare const LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS = "[User] Load User Replenishment Orders Success";
export declare const CLEAR_USER_REPLENISHMENT_ORDERS = "[User] Clear User Replenishment Orders";
export declare class LoadUserReplenishmentOrders extends StateUtils.LoaderLoadAction {
    payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
    };
    readonly type = "[User] Load User Replenishment Orders";
    constructor(payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
    });
}
export declare class LoadUserReplenishmentOrdersFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[User] Load User Replenishment Orders Fail";
    constructor(payload: any);
}
export declare class LoadUserReplenishmentOrdersSuccess extends StateUtils.LoaderSuccessAction {
    payload: ReplenishmentOrderList;
    readonly type = "[User] Load User Replenishment Orders Success";
    constructor(payload: ReplenishmentOrderList);
}
export declare class ClearUserReplenishmentOrders extends StateUtils.LoaderResetAction {
    readonly type = "[User] Clear User Replenishment Orders";
    constructor();
}
export declare type UserReplenishmentOrdersAction = LoadUserReplenishmentOrders | LoadUserReplenishmentOrdersFail | LoadUserReplenishmentOrdersSuccess | ClearUserReplenishmentOrders;
