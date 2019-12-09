import { StateLoaderActions } from '../../../state/utils/index';
export declare const CART_ADD_ENTRY = "[Cart-entry] Add Entry";
export declare const CART_ADD_ENTRY_SUCCESS = "[Cart-entry] Add Entry Success";
export declare const CART_ADD_ENTRY_FAIL = "[Cart-entry] Add Entry Fail";
export declare const CART_REMOVE_ENTRY = "[Cart-entry] Remove Entry";
export declare const CART_REMOVE_ENTRY_SUCCESS = "[Cart-entry] Remove Entry Success";
export declare const CART_REMOVE_ENTRY_FAIL = "[Cart-entry] Remove Entry Fail";
export declare const CART_UPDATE_ENTRY = "[Cart-entry] Update Entry";
export declare const CART_UPDATE_ENTRY_SUCCESS = "[Cart-entry] Update Entry Success";
export declare const CART_UPDATE_ENTRY_FAIL = "[Cart-entry] Update Entry Fail";
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
export declare type CartEntryAction = CartAddEntry | CartAddEntrySuccess | CartAddEntryFail | CartRemoveEntry | CartRemoveEntrySuccess | CartRemoveEntryFail | CartUpdateEntry | CartUpdateEntrySuccess | CartUpdateEntryFail;
