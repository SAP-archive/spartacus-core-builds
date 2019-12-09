import { StateLoaderActions, StateEntityLoaderActions } from '../../../state/utils/index';
import { Action } from '@ngrx/store';
export declare const CART_ADD_ENTRY = "[Cart-entry] Add Entry";
export declare const CART_ADD_ENTRY_SUCCESS = "[Cart-entry] Add Entry Success";
export declare const CART_ADD_ENTRY_FAIL = "[Cart-entry] Add Entry Fail";
export declare const CART_ADD_ENTRIES = "[Cart-entry] Add Entries";
export declare const CART_ADD_ENTRIES_SUCCESS = "[Cart-entry] Add Entries Success";
export declare const CART_ADD_ENTRIES_FAIL = "[Cart-entry] Add Entries Fail";
export declare const CART_REMOVE_ENTRY = "[Cart-entry] Remove Entry";
export declare const CART_REMOVE_ENTRY_SUCCESS = "[Cart-entry] Remove Entry Success";
export declare const CART_REMOVE_ENTRY_FAIL = "[Cart-entry] Remove Entry Fail";
export declare const CART_UPDATE_ENTRY = "[Cart-entry] Update Entry";
export declare const CART_UPDATE_ENTRY_SUCCESS = "[Cart-entry] Update Entry Success";
export declare const CART_UPDATE_ENTRY_FAIL = "[Cart-entry] Update Entry Fail";
export declare const CART_START_ADD_ENTRY_PROCESS = "[Cart-entry] Start Add Entry Process";
export declare const CART_SUCCESS_ADD_ENTRY_PROCESS = "[Cart-entry] Success Add Entry Process";
export declare const CART_FAIL_ADD_ENTRY_PROCESS = "[Cart-entry] Fail Add Entry Process";
export declare class CartAddEntry extends StateLoaderActions.LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry";
    constructor(payload: any);
}
export declare class CartAddEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry Success";
    constructor(payload: any);
}
export declare class CartAddEntryFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry Fail";
    constructor(payload: any);
}
export declare class CartAddEntries implements Action {
    payload: {
        userId: string;
        cartId: string;
        products: Array<{
            productCode: string;
            quantity: number;
        }>;
    };
    readonly type = "[Cart-entry] Add Entries";
    constructor(payload: {
        userId: string;
        cartId: string;
        products: Array<{
            productCode: string;
            quantity: number;
        }>;
    });
}
export declare class CartAddEntriesSuccess implements Action {
    payload: any;
    readonly type = "[Cart-entry] Add Entries Success";
    constructor(payload: any);
}
export declare class CartAddEntriesFail implements Action {
    payload: any;
    readonly type = "[Cart-entry] Add Entries Fail";
    constructor(payload: any);
}
export declare class CartStartAddEntryProcess extends StateEntityLoaderActions.EntityLoadAction {
    readonly type = "[Cart-entry] Start Add Entry Process";
    constructor();
}
export declare class CartSuccessAddEntryProcess extends StateEntityLoaderActions.EntitySuccessAction {
    readonly type = "[Cart-entry] Success Add Entry Process";
    constructor();
}
export declare class CartFailAddEntryProcess extends StateEntityLoaderActions.EntityFailAction {
    readonly type = "[Cart-entry] Fail Add Entry Process";
    constructor();
}
export declare class CartRemoveEntry extends StateLoaderActions.LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry";
    constructor(payload: any);
}
export declare class CartRemoveEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry Success";
    constructor(payload: any);
}
export declare class CartRemoveEntryFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry Fail";
    constructor(payload: any);
}
export declare class CartUpdateEntry extends StateLoaderActions.LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry";
    constructor(payload: any);
}
export declare class CartUpdateEntrySuccess extends StateLoaderActions.LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry Success";
    constructor(payload: any);
}
export declare class CartUpdateEntryFail extends StateLoaderActions.LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry Fail";
    constructor(payload: any);
}
export declare type CartEntryAction = CartAddEntry | CartAddEntrySuccess | CartAddEntryFail | CartRemoveEntry | CartRemoveEntrySuccess | CartRemoveEntryFail | CartUpdateEntry | CartUpdateEntrySuccess | CartUpdateEntryFail | CartAddEntries | CartAddEntriesFail | CartAddEntriesSuccess | CartStartAddEntryProcess | CartSuccessAddEntryProcess | CartFailAddEntryProcess;
