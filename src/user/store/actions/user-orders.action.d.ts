import { OrderHistoryList } from '../../../occ/occ-models/index';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
export declare const LOAD_USER_ORDERS = "[User] Load User Orders";
export declare const LOAD_USER_ORDERS_FAIL = "[User] Load User Orders Fail";
export declare const LOAD_USER_ORDERS_SUCCESS = "[User] Load User Orders Success";
export declare const CLEAR_USER_ORDERS = "[User] Clear User Orders";
export declare class LoadUserOrders extends LoaderLoadAction {
    payload: {
        userId: string;
        pageSize: number;
        currentPage?: number;
        sort?: string;
    };
    readonly type = "[User] Load User Orders";
    constructor(payload: {
        userId: string;
        pageSize: number;
        currentPage?: number;
        sort?: string;
    });
}
export declare class LoadUserOrdersFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Load User Orders Fail";
    constructor(payload: any);
}
export declare class LoadUserOrdersSuccess extends LoaderSuccessAction {
    payload: OrderHistoryList;
    readonly type = "[User] Load User Orders Success";
    constructor(payload: OrderHistoryList);
}
export declare class ClearUserOrders {
    readonly type = "[User] Clear User Orders";
    constructor();
}
export declare type UserOrdersAction = LoadUserOrders | LoadUserOrdersFail | LoadUserOrdersSuccess | ClearUserOrders;
