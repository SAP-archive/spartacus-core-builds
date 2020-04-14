import { OrderEntry } from '../../../model/order.model';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
export declare const CART_ADD_ENTRY = "[Cart-entry] Add Entry";
export declare const CART_ADD_ENTRY_SUCCESS = "[Cart-entry] Add Entry Success";
export declare const CART_ADD_ENTRY_FAIL = "[Cart-entry] Add Entry Fail";
export declare const CART_REMOVE_ENTRY = "[Cart-entry] Remove Entry";
export declare const CART_REMOVE_ENTRY_SUCCESS = "[Cart-entry] Remove Entry Success";
export declare const CART_REMOVE_ENTRY_FAIL = "[Cart-entry] Remove Entry Fail";
export declare const CART_UPDATE_ENTRY = "[Cart-entry] Update Entry";
export declare const CART_UPDATE_ENTRY_SUCCESS = "[Cart-entry] Update Entry Success";
export declare const CART_UPDATE_ENTRY_FAIL = "[Cart-entry] Update Entry Fail";
export declare class CartAddEntry extends EntityProcessesIncrementAction {
    payload: {
        cartId: string;
        userId: string;
        productCode: string;
        quantity: number;
    };
    readonly type = "[Cart-entry] Add Entry";
    constructor(payload: {
        cartId: string;
        userId: string;
        productCode: string;
        quantity: number;
    });
}
export declare class CartAddEntrySuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        productCode: string;
        quantity: number;
        deliveryModeChanged: boolean;
        entry: OrderEntry;
        quantityAdded: number;
        statusCode: string;
        statusMessage: string;
    };
    readonly type = "[Cart-entry] Add Entry Success";
    constructor(payload: {
        userId: string;
        cartId: string;
        productCode: string;
        quantity: number;
        deliveryModeChanged: boolean;
        entry: OrderEntry;
        quantityAdded: number;
        statusCode: string;
        statusMessage: string;
    });
}
export declare class CartAddEntryFail extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        productCode: string;
        quantity: number;
        error: any;
    };
    readonly type = "[Cart-entry] Add Entry Fail";
    constructor(payload: {
        userId: string;
        cartId: string;
        productCode: string;
        quantity: number;
        error: any;
    });
}
export declare class CartRemoveEntry extends EntityProcessesIncrementAction {
    payload: {
        cartId: string;
        userId: string;
        entryNumber: string;
    };
    readonly type = "[Cart-entry] Remove Entry";
    constructor(payload: {
        cartId: string;
        userId: string;
        entryNumber: string;
    });
}
export declare class CartRemoveEntrySuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
    };
    readonly type = "[Cart-entry] Remove Entry Success";
    constructor(payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
    });
}
export declare class CartRemoveEntryFail extends EntityProcessesDecrementAction {
    payload: {
        error: any;
        cartId: string;
        userId: string;
        entryNumber: string;
    };
    readonly type = "[Cart-entry] Remove Entry Fail";
    constructor(payload: {
        error: any;
        cartId: string;
        userId: string;
        entryNumber: string;
    });
}
export declare class CartUpdateEntry extends EntityProcessesIncrementAction {
    payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    };
    readonly type = "[Cart-entry] Update Entry";
    constructor(payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    });
}
export declare class CartUpdateEntrySuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    };
    readonly type = "[Cart-entry] Update Entry Success";
    constructor(payload: {
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    });
}
export declare class CartUpdateEntryFail extends EntityProcessesDecrementAction {
    payload: {
        error: any;
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    };
    readonly type = "[Cart-entry] Update Entry Fail";
    constructor(payload: {
        error: any;
        userId: string;
        cartId: string;
        entryNumber: string;
        quantity: number;
    });
}
export declare type CartEntryAction = CartAddEntry | CartAddEntrySuccess | CartAddEntryFail | CartRemoveEntry | CartRemoveEntrySuccess | CartRemoveEntryFail | CartUpdateEntry | CartUpdateEntrySuccess | CartUpdateEntryFail;
