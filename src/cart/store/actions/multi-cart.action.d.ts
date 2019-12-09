import { Action } from '@ngrx/store';
import { EntityLoadAction, EntitySuccessAction, EntityFailAction, EntityResetAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { Cart } from '../../../model/cart.model';
export declare const RESET_FRESH_CART = "[Multi Cart] Reset Fresh Cart";
export declare const CREATE_MULTI_CART = "[Multi Cart] Create Cart";
export declare const CREATE_MULTI_CART_FAIL = "[Multi Cart] Create Cart Fail";
export declare const CREATE_MULTI_CART_SUCCESS = "[Multi Cart] Create Cart Success";
export declare const LOAD_MULTI_CART = "[Multi Cart] Load Cart";
export declare const LOAD_MULTI_CART_FAIL = "[Multi Cart] Load Cart Fail";
export declare const LOAD_MULTI_CART_SUCCESS = "[Multi Cart] Load Cart Success";
export declare const MERGE_MULTI_CART = "[Multi Cart] Merge Cart";
export declare const MERGE_MULTI_CART_SUCCESS = "[Multi Cart] Merge Cart Success";
export declare const RESET_MULTI_CART_DETAILS = "[Multi Cart] Reset Cart Details";
export declare const SET_FRESH_CART = "[Multi Cart] Set Fresh Cart";
export declare const SET_CART_LOADING = "[Multi Cart] Set Cart Loading";
export declare const REMOVE_CART = "[Multi Cart] Remove Cart";
export declare const ADD_EMAIL_TO_MULTI_CART = "[Multi Cart] Add Email";
export declare const ADD_EMAIL_TO_MULTI_CART_FAIL = "[Multi Cart] Add Email Fail";
export declare const ADD_EMAIL_TO_MULTI_CART_SUCCESS = "[Multi Cart] Add Email Success";
export declare class ResetFreshCart extends EntityResetAction {
    readonly type = "[Multi Cart] Reset Fresh Cart";
    constructor();
}
export declare class SetFreshCart extends EntitySuccessAction {
    payload: Cart;
    readonly type = "[Multi Cart] Set Fresh Cart";
    constructor(payload: Cart);
}
export declare class CreateMultiCart extends EntityLoadAction {
    payload: any;
    readonly type = "[Multi Cart] Create Cart";
    constructor(payload: any);
}
export declare class CreateMultiCartFail extends EntityFailAction {
    payload: any;
    readonly type = "[Multi Cart] Create Cart Fail";
    constructor(payload: any);
}
export declare class CreateMultiCartSuccess extends EntitySuccessAction {
    payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    };
    readonly type = "[Multi Cart] Create Cart Success";
    constructor(payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    });
}
export declare class LoadMultiCart extends EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Multi Cart] Load Cart";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadMultiCartFail extends EntityFailAction {
    payload: {
        cartId: string;
        error?: any;
    };
    readonly type = "[Multi Cart] Load Cart Fail";
    constructor(payload: {
        cartId: string;
        error?: any;
    });
}
export declare class LoadMultiCartSuccess extends EntitySuccessAction {
    payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    };
    readonly type = "[Multi Cart] Load Cart Success";
    constructor(payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    });
}
export declare class MergeMultiCart implements Action {
    payload: any;
    readonly type = "[Multi Cart] Merge Cart";
    constructor(payload: any);
}
export declare class MergeMultiCartSuccess extends EntityRemoveAction {
    payload: {
        oldCartId: string;
        cartId: string;
        userId: string;
    };
    readonly type = "[Multi Cart] Merge Cart Success";
    constructor(payload: {
        oldCartId: string;
        cartId: string;
        userId: string;
    });
}
export declare class ResetMultiCartDetails extends EntityResetAction {
    readonly type = "[Multi Cart] Reset Cart Details";
    constructor();
}
export declare class SetCartLoading extends EntityLoadAction {
    payload: {
        cartId: string;
    };
    readonly type = "[Multi Cart] Set Cart Loading";
    constructor(payload: {
        cartId: string;
    });
}
export declare class RemoveCart extends EntityRemoveAction {
    payload: string;
    readonly type = "[Multi Cart] Remove Cart";
    constructor(payload: string);
}
export declare class AddEmailToMultiCart extends EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        email: string;
    };
    readonly type = "[Multi Cart] Add Email";
    constructor(payload: {
        userId: string;
        cartId: string;
        email: string;
    });
}
export declare class AddEmailToMultiCartFail extends EntityFailAction {
    payload: {
        userId: string;
        cartId: string;
        error: any;
    };
    readonly type = "[Multi Cart] Add Email Fail";
    constructor(payload: {
        userId: string;
        cartId: string;
        error: any;
    });
}
export declare class AddEmailToMultiCartSuccess extends EntitySuccessAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Multi Cart] Add Email Success";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare type MultiCartActions = ResetFreshCart | SetFreshCart | CreateMultiCart | CreateMultiCartFail | CreateMultiCartSuccess | LoadMultiCart | LoadMultiCartFail | LoadMultiCartSuccess | MergeMultiCart | MergeMultiCartSuccess | ResetMultiCartDetails | SetCartLoading | RemoveCart | AddEmailToMultiCart | AddEmailToMultiCartFail | AddEmailToMultiCartSuccess;
