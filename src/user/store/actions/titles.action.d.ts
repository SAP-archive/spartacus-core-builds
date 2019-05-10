import { Action } from '@ngrx/store';
import { Title } from '../../../model/misc.model';
export declare const LOAD_TITLES = "[User] Load Tiltes";
export declare const LOAD_TITLES_FAIL = "[User] Load Titles Fail";
export declare const LOAD_TITLES_SUCCESS = "[User] Load Titles Success";
export declare class LoadTitles implements Action {
    readonly type = "[User] Load Tiltes";
    constructor();
}
export declare class LoadTitlesFail implements Action {
    payload: any;
    readonly type = "[User] Load Titles Fail";
    constructor(payload: any);
}
export declare class LoadTitlesSuccess implements Action {
    payload: Title[];
    readonly type = "[User] Load Titles Success";
    constructor(payload: Title[]);
}
export declare type TitlesAction = LoadTitles | LoadTitlesFail | LoadTitlesSuccess;
