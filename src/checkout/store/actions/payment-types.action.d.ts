import { Action } from '@ngrx/store';
import { PaymentType, Cart } from '../../../model/cart.model';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, EntityLoaderResetAction } from '../../../state/utils/entity-loader/entity-loader.action';
export declare const LOAD_PAYMENT_TYPES = "[Checkout] Load Payment Types";
export declare const LOAD_PAYMENT_TYPES_FAIL = "[Checkout] Load Payment Types Fail";
export declare const LOAD_PAYMENT_TYPES_SUCCESS = "[Checkout] Load Payment Types Success";
export declare const RESET_LOAD_PAYMENT_TYPES_PROCESS_ID = "[Checkout] Reset Load Payment Type Process";
export declare const SET_PAYMENT_TYPE = "[Checkout] Set Payment Type";
export declare const SET_PAYMENT_TYPE_FAIL = "[Checkout] Set Payment Type Fail";
export declare const SET_PAYMENT_TYPE_SUCCESS = "[Checkout] Set Payment Type Success";
export declare class LoadPaymentTypes extends EntityLoadAction {
    readonly type = "[Checkout] Load Payment Types";
    constructor();
}
export declare class LoadPaymentTypesFail extends EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Load Payment Types Fail";
    constructor(payload: any);
}
export declare class LoadPaymentTypesSuccess extends EntitySuccessAction {
    payload: PaymentType[];
    readonly type = "[Checkout] Load Payment Types Success";
    constructor(payload: PaymentType[]);
}
export declare class ResetLoadPaymentTypesProcess extends EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Load Payment Type Process";
    constructor();
}
export declare class SetPaymentType implements Action {
    payload: {
        userId: string;
        cartId: string;
        typeCode: string;
        poNumber?: string;
    };
    readonly type = "[Checkout] Set Payment Type";
    constructor(payload: {
        userId: string;
        cartId: string;
        typeCode: string;
        poNumber?: string;
    });
}
export declare class SetPaymentTypeFail implements Action {
    payload: any;
    readonly type = "[Checkout] Set Payment Type Fail";
    constructor(payload: any);
}
export declare class SetPaymentTypeSuccess implements Action {
    payload: Cart;
    readonly type = "[Checkout] Set Payment Type Success";
    constructor(payload: Cart);
}
export declare type PaymentTypesAction = LoadPaymentTypes | LoadPaymentTypesFail | LoadPaymentTypesSuccess | ResetLoadPaymentTypesProcess | SetPaymentType | SetPaymentTypeFail | SetPaymentTypeSuccess;
