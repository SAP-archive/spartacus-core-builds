import { Action } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
export declare const REMOVE_TEMP_CART = "[Multi Cart] Remove Temp Cart";
export declare const LOAD_MULTI_CART = "[Multi Cart] Load Cart";
export declare const LOAD_MULTI_CART_FAIL = "[Multi Cart] Load Cart Fail";
export declare const LOAD_MULTI_CART_SUCCESS = "[Multi Cart] Load Cart Success";
export declare const MERGE_MULTI_CART = "[Multi Cart] Merge Cart";
export declare const MERGE_MULTI_CART_SUCCESS = "[Multi Cart] Merge Cart Success";
export declare const RESET_MULTI_CART_DETAILS = "[Multi Cart] Reset Cart Details";
export declare const SET_TEMP_CART = "[Multi Cart] Set Temp Cart";
export declare const REMOVE_CART = "[Multi Cart] Remove Cart";
export declare const ADD_EMAIL_TO_MULTI_CART = "[Multi Cart] Add Email";
export declare const ADD_EMAIL_TO_MULTI_CART_FAIL = "[Multi Cart] Add Email Fail";
export declare const ADD_EMAIL_TO_MULTI_CART_SUCCESS = "[Multi Cart] Add Email Success";
export declare const CART_PROCESSES_INCREMENT = "[Multi Cart] Cart Processes Increment";
export declare const CART_PROCESSES_DECREMENT = "[Multi Cart] Cart Processes Decrement";
export declare const SET_ACTIVE_CART_ID = "[Multi Cart] Set Active Cart Id";
export declare const CLEAR_MULTI_CART_STATE = "[Multi Cart] Clear Cart State";
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
export declare class RemoveTempCart extends EntityRemoveAction {
    payload: {
        tempCartId: string;
    };
    readonly type = "[Multi Cart] Remove Temp Cart";
    constructor(payload: {
        tempCartId: string;
    });
}
export declare class SetTempCart extends EntitySuccessAction {
    payload: {
        cart: Cart;
        tempCartId: string;
    };
    readonly type = "[Multi Cart] Set Temp Cart";
    constructor(payload: {
        cart: Cart;
        tempCartId: string;
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
export declare class ResetMultiCartDetails extends EntityProcessesLoaderResetAction {
    readonly type = "[Multi Cart] Reset Cart Details";
    constructor();
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
export declare class CartProcessesIncrement extends EntityProcessesIncrementAction {
    payload: string;
    readonly type = "[Multi Cart] Cart Processes Increment";
    constructor(payload: string);
}
export declare class CartProcessesDecrement extends EntityProcessesDecrementAction {
    payload: string;
    readonly type = "[Multi Cart] Cart Processes Decrement";
    constructor(payload: string);
}
export declare class SetActiveCartId implements Action {
    payload: string;
    readonly type = "[Multi Cart] Set Active Cart Id";
    constructor(payload: string);
}
export declare class ClearMultiCartState extends EntityRemoveAction {
    readonly type = "[Multi Cart] Clear Cart State";
    constructor();
}
export declare type MultiCartActions = RemoveTempCart | SetTempCart | LoadMultiCart | LoadMultiCartFail | LoadMultiCartSuccess | MergeMultiCart | MergeMultiCartSuccess | ResetMultiCartDetails | RemoveCart | AddEmailToMultiCart | AddEmailToMultiCartFail | AddEmailToMultiCartSuccess | CartProcessesIncrement | CartProcessesDecrement | SetActiveCartId | ClearMultiCartState;
