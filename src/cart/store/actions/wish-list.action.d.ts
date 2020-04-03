import { Action } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
export declare const CREATE_WISH_LIST = "[Wish List] Create Wish List";
export declare const CREATE_WISH_LIST_FAIL = "[Wish List] Create Wish List Fail";
export declare const CREATE_WISH_LIST_SUCCESS = "[Wish List] Create Wish List Success";
export declare const LOAD_WISH_LIST = "[Wish List] Load Wish List";
export declare const LOAD_WISH_LIST_SUCCESS = "[Wish List] Load Wish List Success";
export declare const LOAD_WISH_LIST_FAIL = "[Wish List] Load Wish List Fail";
export declare const RESET_WISH_LIST_DETAILS = "[Wish List] Reset Wish List";
export declare class CreateWishList implements Action {
    payload: {
        userId: string;
        name: string;
        description?: string;
    };
    readonly type = "[Wish List] Create Wish List";
    constructor(payload: {
        userId: string;
        name: string;
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
interface LoadWishListPayload {
    userId: string;
    /**
     * Used to compute wishlist cart name and find it in list of all carts.
     */
    customerId: string;
    /**
     * When we try load wishlist for the first time we don't know cart id.
     * Instead we create temporary cart with id equal to wishlist name to keep track of loading/error state.
     */
    tempCartId: string;
}
export declare class LoadWishList extends EntityLoadAction {
    payload: LoadWishListPayload;
    readonly type = "[Wish List] Load Wish List";
    constructor(payload: LoadWishListPayload);
}
interface LoadWishListSuccessPayload {
    cart: Cart;
    userId: string;
    /**
     * When LoadWishListSuccess action was dispatched as an completion to LoadWishList action
     * we get temporary cartId that was used to keep track of loading state.
     * In case of loading wish list with known cartId this property will be empty.
     */
    tempCartId?: string;
    /**
     * Used to compute wishlist cart name and find it in list of all carts.
     * In case of loading wish list with known cartId this property will be empty.
     */
    customerId?: string;
    /**
     * Wish list cart id. Extracted from cart content (code property).
     */
    cartId: string;
}
export declare class LoadWishListSuccess extends EntitySuccessAction {
    payload: LoadWishListSuccessPayload;
    readonly type = "[Wish List] Load Wish List Success";
    constructor(payload: LoadWishListSuccessPayload);
}
interface LoadWishListFailPayload {
    userId: string;
    /**
     * Used to compute wishlist cart name and find it in list of all carts.
     * In case of loading wish list with known cartId this property will be empty.
     */
    customerId?: string;
    /**
     * Cart id used as a store entity key. This could point either to some
     * temporary cart used to track loading/error state or to normal wish list entity.
     */
    cartId: string;
    error: any;
}
export declare class LoadWishListFail extends EntityFailAction {
    payload: LoadWishListFailPayload;
    readonly type = "[Wish List] Load Wish List Fail";
    constructor(payload: LoadWishListFailPayload);
}
export declare type WishListActions = CreateWishList | CreateWishListSuccess | CreateWishListFail | LoadWishList | LoadWishListSuccess | LoadWishListFail;
export {};
