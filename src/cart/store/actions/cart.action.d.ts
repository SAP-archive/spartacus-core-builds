import { Action } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { ProcessesLoaderResetAction } from '../../../state/utils/processes-loader/processes-loader.action';
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
export declare const REMOVE_CART = "[Cart] Remove Cart";
export declare const DELETE_CART = "[Cart] Delete Cart";
export declare const DELETE_CART_SUCCESS = "[Cart] Delete Cart Success";
export declare const DELETE_CART_FAIL = "[Cart] Delete Cart Fail";
interface CreateCartPayload {
    userId: string;
    /** Used as a unique key in ngrx carts store (we don't know cartId at that time) */
    tempCartId: string;
    extraData?: {
        active?: boolean;
    };
    /** Anonymous cart which should be merged to new cart */
    oldCartId?: string;
    /** Cart to which should we merge (not passing this will create new cart) */
    toMergeCartGuid?: string;
}
export declare class CreateCart extends EntityLoadAction {
    payload: CreateCartPayload;
    readonly type = "[Cart] Create Cart";
    constructor(payload: CreateCartPayload);
}
interface CreateCartFailPayload extends CreateCartPayload {
    error: any;
}
export declare class CreateCartFail extends EntityFailAction {
    payload: CreateCartFailPayload;
    readonly type = "[Cart] Create Cart Fail";
    constructor(payload: CreateCartFailPayload);
}
interface CreateCartSuccessPayload extends CreateCartPayload {
    cart: Cart;
    cartId: string;
}
export declare class CreateCartSuccess extends EntitySuccessAction {
    payload: CreateCartSuccessPayload;
    readonly type = "[Cart] Create Cart Success";
    constructor(payload: CreateCartSuccessPayload);
}
export declare class AddEmailToCart extends EntityProcessesIncrementAction {
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
export declare class AddEmailToCartFail extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        error: any;
        email: string;
    };
    readonly type = "[Cart] Add Email to Cart Fail";
    constructor(payload: {
        userId: string;
        cartId: string;
        error: any;
        email: string;
    });
}
export declare class AddEmailToCartSuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        email: string;
    };
    readonly type = "[Cart] Add Email to Cart Success";
    constructor(payload: {
        userId: string;
        cartId: string;
        email: string;
    });
}
interface LoadCartPayload {
    userId: string;
    cartId: string;
    extraData?: {
        active?: boolean;
    };
}
export declare class LoadCart extends EntityLoadAction {
    payload: LoadCartPayload;
    readonly type = "[Cart] Load Cart";
    constructor(payload: LoadCartPayload);
}
interface LoadCartFailPayload extends LoadCartPayload {
    error: any;
}
export declare class LoadCartFail extends EntityFailAction {
    payload: LoadCartFailPayload;
    readonly type = "[Cart] Load Cart Fail";
    constructor(payload: LoadCartFailPayload);
}
interface LoadCartSuccessPayload extends LoadCartPayload {
    cart: Cart;
}
export declare class LoadCartSuccess extends EntitySuccessAction {
    payload: LoadCartSuccessPayload;
    readonly type = "[Cart] Load Cart Success";
    constructor(payload: LoadCartSuccessPayload);
}
interface MergeCartPayload {
    cartId: string;
    userId: string;
    extraData?: {
        active?: boolean;
    };
    /**
     * MergeCart actions triggers CreateCart which requires this parameter, so that's why it is required.
     */
    tempCartId: string;
}
export declare class MergeCart implements Action {
    payload: MergeCartPayload;
    readonly type = "[Cart] Merge Cart";
    constructor(payload: MergeCartPayload);
}
interface MergeCartSuccessPayload extends MergeCartPayload {
    /**
     * Previous cart id which was merged with new/user cart.
     * Needed to know which obsolete entity should be removed.
     */
    oldCartId: string;
}
export declare class MergeCartSuccess extends EntityRemoveAction {
    payload: MergeCartSuccessPayload;
    readonly type = "[Cart] Merge Cart Success";
    constructor(payload: MergeCartSuccessPayload);
}
/**
 * On site context change we want to keep current list of entities, but we want to clear the value and flags.
 * With ProcessesLoaderResetAction we run it on every entity of this type.
 */
export declare class ResetCartDetails extends ProcessesLoaderResetAction {
    readonly type = "[Cart] Reset Cart Details";
    constructor();
}
export declare class ClearExpiredCoupons implements Action {
    payload: any;
    readonly type = "[Cart] Clear Expired Coupon";
    constructor(payload: any);
}
/**
 * Used for cleaning cart in local state, when we get information that it no longer exists in the backend.
 * For removing particular cart in both places use DeleteCart actions.
 */
export declare class RemoveCart extends EntityRemoveAction {
    payload: {
        cartId: string;
    };
    readonly type = "[Cart] Remove Cart";
    constructor(payload: {
        cartId: string;
    });
}
export declare class DeleteCart implements Action {
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
export declare class DeleteCartSuccess extends EntityRemoveAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Cart] Delete Cart Success";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class DeleteCartFail implements Action {
    payload: {
        userId: string;
        cartId: string;
        error: any;
    };
    readonly type = "[Cart] Delete Cart Fail";
    constructor(payload: {
        userId: string;
        cartId: string;
        error: any;
    });
}
export declare type CartAction = CreateCart | CreateCartFail | CreateCartSuccess | LoadCart | LoadCartFail | LoadCartSuccess | MergeCart | MergeCartSuccess | ResetCartDetails | AddEmailToCart | AddEmailToCartFail | AddEmailToCartSuccess | DeleteCart | DeleteCartSuccess | DeleteCartFail | ClearExpiredCoupons | RemoveCart;
export {};
