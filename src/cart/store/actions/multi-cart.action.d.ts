import { Action } from '@ngrx/store';
import { Cart } from '../../../model/cart.model';
import { EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAllAction } from '../../../state/utils/entity/entity.action';
export declare const SET_TEMP_CART = "[Multi Cart] Set Temp Cart";
export declare const CART_PROCESSES_INCREMENT = "[Multi Cart] Cart Processes Increment";
export declare const CART_PROCESSES_DECREMENT = "[Multi Cart] Cart Processes Decrement";
export declare const SET_ACTIVE_CART_ID = "[Multi Cart] Set Active Cart Id";
export declare const CLEAR_CART_STATE = "[Cart] Clear Cart State";
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
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
/**
 * Clear whole cart store state: all entities + reset rest of the cart state.
 */
export declare class ClearCartState extends EntityRemoveAllAction {
    readonly type = "[Cart] Clear Cart State";
    constructor();
}
export declare type MultiCartActions = SetTempCart | CartProcessesIncrement | CartProcessesDecrement | SetActiveCartId | ClearCartState;
