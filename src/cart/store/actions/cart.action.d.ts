import { Action } from '@ngrx/store';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
export declare const CREATE_CART = "[Cart] Create Cart";
export declare const CREATE_CART_FAIL = "[Cart] Create Cart Fail";
export declare const CREATE_CART_SUCCESS = "[Cart] Create Cart Success";
export declare const LOAD_CART = "[Cart] Load Cart";
export declare const LOAD_CART_FAIL = "[Cart] Load Cart Fail";
export declare const LOAD_CART_SUCCESS = "[Cart] Load Cart Success";
export declare const MERGE_CART = "[Cart] Merge Cart";
export declare const MERGE_CART_SUCCESS = "[Cart] Merge Cart Success";
export declare class CreateCart extends LoaderLoadAction {
    payload: any;
    readonly type = "[Cart] Create Cart";
    constructor(payload: any);
}
export declare class CreateCartFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Cart] Create Cart Fail";
    constructor(payload: any);
}
export declare class CreateCartSuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart] Create Cart Success";
    constructor(payload: any);
}
export declare class LoadCart extends LoaderLoadAction {
    payload: {
        userId: string;
        cartId: string;
        details?: boolean;
    };
    readonly type = "[Cart] Load Cart";
    constructor(payload: {
        userId: string;
        cartId: string;
        details?: boolean;
    });
}
export declare class LoadCartFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Cart] Load Cart Fail";
    constructor(payload: any);
}
export declare class LoadCartSuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart] Load Cart Success";
    constructor(payload: any);
}
export declare class MergeCart implements Action {
    payload: any;
    readonly type = "[Cart] Merge Cart";
    constructor(payload: any);
}
export declare class MergeCartSuccess implements Action {
    payload: any;
    readonly type = "[Cart] Merge Cart Success";
    constructor(payload: any);
}
export declare type CartAction = CreateCart | CreateCartFail | CreateCartSuccess | LoadCart | LoadCartFail | LoadCartSuccess | MergeCart | MergeCartSuccess;
