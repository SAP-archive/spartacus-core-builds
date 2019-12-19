import { Order, CancellationRequestEntryInputList } from '../../../model/order.model';
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, LoaderResetAction } from '../../../state/utils/loader/loader.action';
import { StateEntityLoaderActions } from '../../../state/utils/index';
export declare const LOAD_ORDER_DETAILS = "[User] Load Order Details";
export declare const LOAD_ORDER_DETAILS_FAIL = "[User] Load Order Details Fail";
export declare const LOAD_ORDER_DETAILS_SUCCESS = "[User] Load Order Details Success";
export declare const CLEAR_ORDER_DETAILS = "[User] Clear Order Details";
export declare const CANCEL_ORDER = "[User] Cancel Order";
export declare const CANCEL_ORDER_FAIL = "[User] Cancel Order Fail";
export declare const CANCEL_ORDER_SUCCESS = "[User] Cancel Order Success";
export declare const RESET_CANCEL_ORDER_PROCESS = "[User] Reset Cancel Order Process";
export declare class LoadOrderDetails extends LoaderLoadAction {
    payload: {
        userId: string;
        orderCode: string;
    };
    readonly type = "[User] Load Order Details";
    constructor(payload: {
        userId: string;
        orderCode: string;
    });
}
export declare class LoadOrderDetailsFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Load Order Details Fail";
    constructor(payload: any);
}
export declare class LoadOrderDetailsSuccess extends LoaderSuccessAction {
    payload: Order;
    readonly type = "[User] Load Order Details Success";
    constructor(payload: Order);
}
export declare class ClearOrderDetails extends LoaderResetAction {
    readonly type = "[User] Clear Order Details";
    constructor();
}
export declare class CancelOrder extends StateEntityLoaderActions.EntityLoadAction {
    payload: {
        userId: string;
        orderCode: string;
        cancelRequestInput: CancellationRequestEntryInputList;
    };
    readonly type = "[User] Cancel Order";
    constructor(payload: {
        userId: string;
        orderCode: string;
        cancelRequestInput: CancellationRequestEntryInputList;
    });
}
export declare class CancelOrderFail extends StateEntityLoaderActions.EntityFailAction {
    payload: any;
    readonly type = "[User] Cancel Order Fail";
    constructor(payload: any);
}
export declare class CancelOrderSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[User] Cancel Order Success";
    constructor();
}
export declare class ResetCancelOrderProcess extends StateEntityLoaderActions.EntityResetAction {
    readonly type = "[User] Reset Cancel Order Process";
    constructor();
}
export declare type OrderDetailsAction = LoadOrderDetails | LoadOrderDetailsFail | LoadOrderDetailsSuccess | ClearOrderDetails | CancelOrder | CancelOrderFail | CancelOrderSuccess;
