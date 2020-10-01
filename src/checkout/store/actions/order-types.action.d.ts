import { Action } from '@ngrx/store';
import { ORDER_TYPE } from '../../../model/replenishment-order.model';
export declare const SET_ORDER_TYPE = "[Checkout] Set Order Type";
export declare class SetOrderType implements Action {
    payload: ORDER_TYPE;
    readonly type = "[Checkout] Set Order Type";
    constructor(payload: ORDER_TYPE);
}
export declare type OrderTypesActions = SetOrderType;
