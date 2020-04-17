import { ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequestModification } from '../../../model/order.model';
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, LoaderResetAction } from '../../../state/utils/loader/loader.action';
import { StateUtils } from '../../../state/utils/index';
export declare const CREATE_ORDER_RETURN_REQUEST = "[User] Create Order Return Request";
export declare const CREATE_ORDER_RETURN_REQUEST_FAIL = "[User] Create Order Return Request Fail";
export declare const CREATE_ORDER_RETURN_REQUEST_SUCCESS = "[User] Create Order Return Request Success";
export declare const LOAD_ORDER_RETURN_REQUEST = "[User] Load Order Return Request details";
export declare const LOAD_ORDER_RETURN_REQUEST_FAIL = "[User] Load Order Return Request details Fail";
export declare const LOAD_ORDER_RETURN_REQUEST_SUCCESS = "[User] Load Order Return Request details Success";
export declare const CANCEL_ORDER_RETURN_REQUEST = "[User] Cancel Order Return Request";
export declare const CANCEL_ORDER_RETURN_REQUEST_FAIL = "[User] Cancel Order Return Request Fail";
export declare const CANCEL_ORDER_RETURN_REQUEST_SUCCESS = "[User] Cancel Order Return Request Success";
export declare const LOAD_ORDER_RETURN_REQUEST_LIST = "[User] Load User Order Return Request List";
export declare const LOAD_ORDER_RETURN_REQUEST_LIST_FAIL = "[User] Load User Order Return Request List Fail";
export declare const LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS = "[User] Load User Order Return Request List Success";
export declare const CLEAR_ORDER_RETURN_REQUEST = "[User] Clear Order Return Request Details";
export declare const CLEAR_ORDER_RETURN_REQUEST_LIST = "[User] Clear Order Return Request List";
export declare const RESET_CANCEL_RETURN_PROCESS = "[User] Reset Cancel Return Request Process";
export declare class CreateOrderReturnRequest extends LoaderLoadAction {
    payload: {
        userId: string;
        returnRequestInput: ReturnRequestEntryInputList;
    };
    readonly type = "[User] Create Order Return Request";
    constructor(payload: {
        userId: string;
        returnRequestInput: ReturnRequestEntryInputList;
    });
}
export declare class CreateOrderReturnRequestFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Create Order Return Request Fail";
    constructor(payload: any);
}
export declare class CreateOrderReturnRequestSuccess extends LoaderSuccessAction {
    payload: ReturnRequest;
    readonly type = "[User] Create Order Return Request Success";
    constructor(payload: ReturnRequest);
}
export declare class LoadOrderReturnRequest extends LoaderLoadAction {
    payload: {
        userId: string;
        returnRequestCode: string;
    };
    readonly type = "[User] Load Order Return Request details";
    constructor(payload: {
        userId: string;
        returnRequestCode: string;
    });
}
export declare class LoadOrderReturnRequestFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Load Order Return Request details Fail";
    constructor(payload: any);
}
export declare class LoadOrderReturnRequestSuccess extends LoaderSuccessAction {
    payload: ReturnRequest;
    readonly type = "[User] Load Order Return Request details Success";
    constructor(payload: ReturnRequest);
}
export declare class CancelOrderReturnRequest extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        returnRequestCode: string;
        returnRequestModification: ReturnRequestModification;
    };
    readonly type = "[User] Cancel Order Return Request";
    constructor(payload: {
        userId: string;
        returnRequestCode: string;
        returnRequestModification: ReturnRequestModification;
    });
}
export declare class CancelOrderReturnRequestFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[User] Cancel Order Return Request Fail";
    constructor(payload: any);
}
export declare class CancelOrderReturnRequestSuccess extends StateUtils.EntitySuccessAction {
    readonly type = "[User] Cancel Order Return Request Success";
    constructor();
}
export declare class LoadOrderReturnRequestList extends LoaderLoadAction {
    payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
    };
    readonly type = "[User] Load User Order Return Request List";
    constructor(payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
    });
}
export declare class LoadOrderReturnRequestListFail extends LoaderFailAction {
    payload: any;
    readonly type = "[User] Load User Order Return Request List Fail";
    constructor(payload: any);
}
export declare class LoadOrderReturnRequestListSuccess extends LoaderSuccessAction {
    payload: ReturnRequestList;
    readonly type = "[User] Load User Order Return Request List Success";
    constructor(payload: ReturnRequestList);
}
export declare class ClearOrderReturnRequest extends LoaderResetAction {
    readonly type = "[User] Clear Order Return Request Details";
    constructor();
}
export declare class ClearOrderReturnRequestList extends LoaderResetAction {
    readonly type = "[User] Clear Order Return Request List";
    constructor();
}
export declare class ResetCancelReturnProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[User] Reset Cancel Return Request Process";
    constructor();
}
export declare type OrderReturnRequestAction = CreateOrderReturnRequest | CreateOrderReturnRequestFail | CreateOrderReturnRequestSuccess | LoadOrderReturnRequest | LoadOrderReturnRequestFail | LoadOrderReturnRequestSuccess | CancelOrderReturnRequest | CancelOrderReturnRequestFail | CancelOrderReturnRequestSuccess | LoadOrderReturnRequestList | LoadOrderReturnRequestListFail | LoadOrderReturnRequestListSuccess | ClearOrderReturnRequest | ClearOrderReturnRequestList | ResetCancelReturnProcess;
