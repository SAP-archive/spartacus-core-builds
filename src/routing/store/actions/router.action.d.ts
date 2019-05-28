import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';
export declare const GO = "[Router] Go";
export declare const GO_BY_URL = "[Router] Go By Url";
export declare const BACK = "[Router] Back";
export declare const FORWARD = "[Router] Forward";
export declare class Go implements Action {
    payload: {
        path: string[];
        query?: object;
        extras?: NavigationExtras;
    };
    readonly type = "[Router] Go";
    constructor(payload: {
        path: string[];
        query?: object;
        extras?: NavigationExtras;
    });
}
export declare class GoByUrl implements Action {
    payload: string;
    readonly type = "[Router] Go By Url";
    constructor(payload: string);
}
export declare class Back implements Action {
    readonly type = "[Router] Back";
}
export declare class Forward implements Action {
    readonly type = "[Router] Forward";
}
export declare type Actions = Go | GoByUrl | Back | Forward;
