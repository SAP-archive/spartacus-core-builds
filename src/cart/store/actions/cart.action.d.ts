import { Action } from '@ngrx/store';
export declare const CREATE_CART = "[Cart] Create Cart";
export declare const CREATE_CART_FAIL = "[Cart] Create Cart Fail";
export declare const CREATE_CART_SUCCESS = "[Cart] Create Cart Success";
export declare const LOAD_CART = "[Cart] Load Cart";
export declare const LOAD_CART_FAIL = "[Cart] Load Cart Fail";
export declare const LOAD_CART_SUCCESS = "[Cart] Load Cart Success";
export declare const ADD_EMAIL_TO_CART = "[Cart] Add Email to Cart";
export declare const ADD_EMAIL_TO_CART_FAIL = "[Cart] Add Email to Cart Fail";
export declare const ADD_EMAIL_TO_CART_SUCCESS = "[Cart] Add Email to Cart Success";
export declare const MERGE_CART = "[Cart] Merge Cart";
export declare const MERGE_CART_SUCCESS = "[Cart] Merge Cart Success";
export declare const RESET_CART_DETAILS = "[Cart] Reset Cart Details";
export declare const CLEAR_EXPIRED_COUPONS = "[Cart] Clear Expired Coupon";
export declare const CLEAR_CART = "[Cart] Clear Cart";
export declare const DELETE_CART = "[Cart] Delete Cart";
export declare const DELETE_CART_FAIL = "[Cart] Delete Cart Fail";
export declare class CreateCart {
    payload: any;
    readonly type = "[Cart] Create Cart";
    constructor(payload: any);
}
export declare class CreateCartFail {
    payload: any;
    readonly type = "[Cart] Create Cart Fail";
    constructor(payload: any);
}
export declare class CreateCartSuccess {
    payload: any;
    readonly type = "[Cart] Create Cart Success";
    constructor(payload: any);
}
export declare class AddEmailToCart {
    payload: {
        userId: string;
        cartId: string;
        email: string;
    };
    readonly type = "[Cart] Add Email to Cart";
    constructor(payload: {
        userId: string;
        cartId: string;
        email: string;
    });
}
export declare class AddEmailToCartFail {
    payload: any;
    readonly type = "[Cart] Add Email to Cart Fail";
    constructor(payload: any);
}
export declare class AddEmailToCartSuccess {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Cart] Add Email to Cart Success";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadCart {
    payload: {
        userId: string;
        cartId: string;
        extraData?: any;
    };
    readonly type = "[Cart] Load Cart";
    constructor(payload: {
        userId: string;
        cartId: string;
        extraData?: any;
    });
}
export declare class LoadCartFail {
    payload: any;
    readonly type = "[Cart] Load Cart Fail";
    constructor(payload: any);
}
export declare class LoadCartSuccess {
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
    payload: {
        cartId: string;
        userId: string;
    };
    readonly type = "[Cart] Merge Cart Success";
    constructor(payload: {
        cartId: string;
        userId: string;
    });
}
export declare class ResetCartDetails implements Action {
    readonly type = "[Cart] Reset Cart Details";
    constructor();
}
export declare class ClearExpiredCoupons implements Action {
    payload: any;
    readonly type = "[Cart] Clear Expired Coupon";
    constructor(payload: any);
}
export declare class ClearCart {
    readonly type = "[Cart] Clear Cart";
    constructor();
}
export declare class DeleteCart {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Cart] Delete Cart";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class DeleteCartFail {
    payload: any;
    readonly type = "[Cart] Delete Cart Fail";
    constructor(payload: any);
}
export declare type CartAction = CreateCart | CreateCartFail | CreateCartSuccess | LoadCart | LoadCartFail | LoadCartSuccess | MergeCart | MergeCartSuccess | ResetCartDetails | AddEmailToCart | AddEmailToCartFail | AddEmailToCartSuccess | DeleteCart | DeleteCartFail | ClearExpiredCoupons | ClearCart;
