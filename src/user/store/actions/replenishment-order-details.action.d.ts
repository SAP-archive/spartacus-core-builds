import { ReplenishmentOrder } from '../../../model/replenishment-order.model';
import { StateUtils } from '../../../state/utils/index';
export declare const LOAD_REPLENISHMENT_ORDER_DETAILS = "[User] Load Replenishment Order Details";
export declare const LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS = "[User] Load Replenishment Order Details Success";
export declare const LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL = "[User] Load Replenishment Order Details Fail";
export declare const ClEAR_REPLENISHMENT_ORDER_DETAILS = "[User] Clear Replenishment Order Details";
export declare const CANCEL_REPLENISHMENT_ORDER = "[User] Cancel Replenishment Order";
export declare const CANCEL_REPLENISHMENT_ORDER_SUCCESS = "[User] Cancel Replenishment Order Success";
export declare const CANCEL_REPLENISHMENT_ORDER_FAIL = "[User] Cancel Replenishment Order Fail";
export declare const CLEAR_CANCEL_REPLENISHMENT_ORDER = "[User] Clear Cancel Replenishment Order";
export declare class LoadReplenishmentOrderDetails extends StateUtils.LoaderLoadAction {
    payload: {
        userId: string;
        replenishmentOrderCode: string;
    };
    readonly type = "[User] Load Replenishment Order Details";
    constructor(payload: {
        userId: string;
        replenishmentOrderCode: string;
    });
}
export declare class LoadReplenishmentOrderDetailsSuccess extends StateUtils.LoaderSuccessAction {
    payload: ReplenishmentOrder;
    readonly type = "[User] Load Replenishment Order Details Success";
    constructor(payload: ReplenishmentOrder);
}
export declare class LoadReplenishmentOrderDetailsFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[User] Load Replenishment Order Details Fail";
    constructor(payload: any);
}
export declare class ClearReplenishmentOrderDetails extends StateUtils.LoaderResetAction {
    readonly type = "[User] Clear Replenishment Order Details";
    constructor();
}
export declare class CancelReplenishmentOrder extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        replenishmentOrderCode: string;
    };
    readonly type = "[User] Cancel Replenishment Order";
    constructor(payload: {
        userId: string;
        replenishmentOrderCode: string;
    });
}
export declare class CancelReplenishmentOrderSuccess extends StateUtils.EntitySuccessAction {
    payload: ReplenishmentOrder;
    readonly type = "[User] Cancel Replenishment Order Success";
    constructor(payload: ReplenishmentOrder);
}
export declare class CancelReplenishmentOrderFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[User] Cancel Replenishment Order Fail";
    constructor(payload: any);
}
export declare class ClearCancelReplenishmentOrder extends StateUtils.EntityLoaderResetAction {
    readonly type = "[User] Clear Cancel Replenishment Order";
    constructor();
}
export declare type ReplenishmentOrderDetailsAction = LoadReplenishmentOrderDetails | LoadReplenishmentOrderDetailsSuccess | LoadReplenishmentOrderDetailsFail | ClearReplenishmentOrderDetails | CancelReplenishmentOrder | CancelReplenishmentOrderSuccess | CancelReplenishmentOrderFail | ClearCancelReplenishmentOrder;
