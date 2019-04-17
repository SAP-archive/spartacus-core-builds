import { Action } from '@ngrx/store';
export declare const SET_ACTIVE_BASE_SITE = "[Site-context] Set Active BaseSite";
export declare const BASE_SITE_CHANGE = "[Site-context] BaseSite Change";
export declare class SetActiveBaseSite implements Action {
    payload: string;
    readonly type = "[Site-context] Set Active BaseSite";
    constructor(payload: string);
}
export declare class BaseSiteChange implements Action {
    readonly type = "[Site-context] BaseSite Change";
}
export declare type BaseSiteAction = SetActiveBaseSite | BaseSiteChange;
