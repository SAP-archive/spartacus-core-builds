import { ReplenishmentOrder, ScheduleReplenishmentForm } from '../../../model/replenishment-order.model';
import { StateUtils } from '../../../state/utils/index';
export declare const SCHEDULE_REPLENISHMENT_ORDER = "[Checkout] Schedule Replenishment Order";
export declare const SCHEDULE_REPLENISHMENT_ORDER_SUCCESS = "[Checkout] Schedule Replenishment Order Success";
export declare const SCHEDULE_REPLENISHMENT_ORDER_FAIL = "[Checkout] Schedule Replenishment Order Fail";
export declare const CLEAR_SCHEDULE_REPLENISHMENT_ORDER = "[Checkout] Clear Schedule Replenishment Data";
export declare class ScheduleReplenishmentOrder extends StateUtils.EntityLoadAction {
    payload: {
        cartId: string;
        scheduleReplenishmentForm: ScheduleReplenishmentForm;
        termsChecked: boolean;
        userId: string;
    };
    readonly type = "[Checkout] Schedule Replenishment Order";
    constructor(payload: {
        cartId: string;
        scheduleReplenishmentForm: ScheduleReplenishmentForm;
        termsChecked: boolean;
        userId: string;
    });
}
export declare class ScheduleReplenishmentOrderSuccess extends StateUtils.EntitySuccessAction {
    payload: ReplenishmentOrder;
    readonly type = "[Checkout] Schedule Replenishment Order Success";
    constructor(payload: ReplenishmentOrder);
}
export declare class ScheduleReplenishmentOrderFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Schedule Replenishment Order Fail";
    constructor(payload: any);
}
export declare class ClearScheduleReplenishmentOrderAction extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Clear Schedule Replenishment Data";
    constructor();
}
export declare type ReplenishmentOrderActions = ScheduleReplenishmentOrder | ScheduleReplenishmentOrderSuccess | ScheduleReplenishmentOrderFail | ClearScheduleReplenishmentOrderAction;
