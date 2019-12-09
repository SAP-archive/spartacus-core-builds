import { Cart } from '../../../model/cart.model';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
export declare const CREATE_WISH_LIST = "[Wish List] Create Wish List";
export declare const CREATE_WISH_LIST_FAIL = "[Wish List] Create Wish List Fail";
export declare const CREATE_WISH_LIST_SUCCESS = "[Wish List] Create Wish List Success";
export declare const LOAD_WISH_LIST = "[Wish List] Load Wish List";
export declare const LOAD_WISH_LIST_SUCCESS = "[Wish List] Load Wish List Success";
export declare const RESET_WISH_LIST_DETAILS = "[Wish List] Reset Wish List";
export declare class CreateWishList extends EntityLoadAction {
    payload: {
        userId: string;
        name?: string;
        description?: string;
    };
    readonly type = "[Wish List] Create Wish List";
    constructor(payload: {
        userId: string;
        name?: string;
        description?: string;
    });
}
export declare class CreateWishListSuccess extends EntitySuccessAction {
    payload: {
        cart: Cart;
        userId: string;
    };
    readonly type = "[Wish List] Create Wish List Success";
    constructor(payload: {
        cart: Cart;
        userId: string;
    });
}
export declare class CreateWishListFail extends EntityFailAction {
    payload: {
        cartId: string;
        error?: any;
    };
    readonly type = "[Wish List] Create Wish List Fail";
    constructor(payload: {
        cartId: string;
        error?: any;
    });
}
export declare class LoadWisthList extends EntityLoadAction {
    payload: string;
    readonly type = "[Wish List] Load Wish List";
    constructor(payload: string);
}
export declare class LoadWisthListSuccess extends EntitySuccessAction {
    payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    };
    readonly type = "[Wish List] Load Wish List Success";
    constructor(payload: {
        cart: Cart;
        userId: string;
        extraData?: any;
    });
}
export declare class ResetWishListDetails extends EntityResetAction {
    readonly type = "[Wish List] Reset Wish List";
    constructor();
}
export declare type WishListActions = CreateWishList | CreateWishListSuccess | CreateWishListFail | LoadWisthList | LoadWisthListSuccess | ResetWishListDetails;
