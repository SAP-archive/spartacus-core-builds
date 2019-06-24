import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
export declare const ADD_ENTRY = "[Cart-entry] Add Entry";
export declare const ADD_ENTRY_SUCCESS = "[Cart-entry] Add Entry Success";
export declare const ADD_ENTRY_FAIL = "[Cart-entry] Add Entry Fail";
export declare const REMOVE_ENTRY = "[Cart-entry] Remove Entry";
export declare const REMOVE_ENTRY_SUCCESS = "[Cart-entry] Remove Entry Success";
export declare const REMOVE_ENTRY_FAIL = "[Cart-entry] Remove Entry Fail";
export declare const UPDATE_ENTRY = "[Cart-entry] Update Entry";
export declare const UPDATE_ENTRY_SUCCESS = "[Cart-entry] Update Entry Success";
export declare const UPDATE_ENTRY_FAIL = "[Cart-entry] Update Entry Fail";
export declare class AddEntry extends LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry";
    constructor(payload: any);
}
export declare class AddEntrySuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry Success";
    constructor(payload: any);
}
export declare class AddEntryFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Add Entry Fail";
    constructor(payload: any);
}
export declare class RemoveEntry extends LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry";
    constructor(payload: any);
}
export declare class RemoveEntrySuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry Success";
    constructor(payload: any);
}
export declare class RemoveEntryFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Remove Entry Fail";
    constructor(payload: any);
}
export declare class UpdateEntry extends LoaderLoadAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry";
    constructor(payload: any);
}
export declare class UpdateEntrySuccess extends LoaderSuccessAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry Success";
    constructor(payload: any);
}
export declare class UpdateEntryFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Cart-entry] Update Entry Fail";
    constructor(payload: any);
}
export declare type CartEntryAction = AddEntry | AddEntrySuccess | AddEntryFail | RemoveEntry | RemoveEntrySuccess | RemoveEntryFail | UpdateEntry | UpdateEntrySuccess | UpdateEntryFail;
