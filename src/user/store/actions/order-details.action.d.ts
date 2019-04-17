import { Action } from '@ngrx/store';
import { Order } from '../../../occ/occ-models/index';
export declare const LOAD_ORDER_DETAILS = "[User] Load Order Details";
export declare const LOAD_ORDER_DETAILS_FAIL = "[User] Load Order Details Fail";
export declare const LOAD_ORDER_DETAILS_SUCCESS = "[User] Load Order Details Success";
export declare const CLEAR_ORDER_DETAILS = "[User] Clear Order Details";
export declare class LoadOrderDetails implements Action {
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
export declare class LoadOrderDetailsFail implements Action {
    payload: any;
    readonly type = "[User] Load Order Details Fail";
    constructor(payload: any);
}
export declare class LoadOrderDetailsSuccess implements Action {
    payload: Order;
    readonly type = "[User] Load Order Details Success";
    constructor(payload: Order);
}
export declare class ClearOrderDetails implements Action {
    readonly type = "[User] Clear Order Details";
}
export declare type OrderDetailsAction = LoadOrderDetails | LoadOrderDetailsFail | LoadOrderDetailsSuccess | ClearOrderDetails;
