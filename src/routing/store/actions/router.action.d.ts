import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';
import { PageContext } from '../../../routing/models/page-context.model';
export declare const ROUTER_GO = "[Router] Go";
export declare const ROUTER_GO_BY_URL = "[Router] Go By Url";
export declare const ROUTER_BACK = "[Router] Back";
export declare const ROUTER_FORWARD = "[Router] Forward";
export declare const CHANGE_NEXT_PAGE_CONTEXT = "[Router] Change Next PageContext";
export declare class RouteGoAction implements Action {
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
export declare class RouteGoByUrlAction implements Action {
    payload: string;
    readonly type = "[Router] Go By Url";
    constructor(payload: string);
}
export declare class RouteBackAction implements Action {
    readonly type = "[Router] Back";
}
export declare class RouteForwardAction implements Action {
    readonly type = "[Router] Forward";
}
export declare class ChangeNextPageContext implements Action {
    payload: PageContext;
    readonly type = "[Router] Change Next PageContext";
    constructor(payload: PageContext);
}
export declare type RoutingAction = RouteGoAction | RouteGoByUrlAction | RouteBackAction | RouteForwardAction | ChangeNextPageContext;
