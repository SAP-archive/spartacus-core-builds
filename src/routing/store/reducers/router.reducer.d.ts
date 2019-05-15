import { InjectionToken, Provider } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';
import * as fromNgrxRouter from '@ngrx/router-store';
import { ActionReducerMap, MemoizedSelector } from '@ngrx/store';
import { PageContext } from '../../models/page-context.model';
export interface RouterState extends fromNgrxRouter.RouterReducerState<ActivatedRouterStateSnapshot> {
    redirectUrl: string;
    nextState?: ActivatedRouterStateSnapshot;
}
export declare const initialState: RouterState;
export interface ActivatedRouterStateSnapshot {
    url: string;
    queryParams: Params;
    params: Params;
    context: PageContext;
    cmsRequired: boolean;
}
export interface State {
    router: RouterState;
}
export declare function getReducers(): ActionReducerMap<State>;
export declare function reducer(state: RouterState, action: any): RouterState;
export declare const reducerToken: InjectionToken<ActionReducerMap<State>>;
export declare const reducerProvider: Provider;
export declare const getRouterFeatureState: MemoizedSelector<any, State>;
export declare const getRouterState: MemoizedSelector<any, RouterState>;
export declare const getPageContext: MemoizedSelector<any, PageContext>;
export declare const getNextPageContext: MemoizedSelector<any, PageContext>;
export declare const isNavigating: MemoizedSelector<any, boolean>;
export declare const getRedirectUrl: MemoizedSelector<any, string>;
export declare class CustomSerializer implements fromNgrxRouter.RouterStateSerializer<ActivatedRouterStateSnapshot> {
    serialize(routerState: RouterStateSnapshot): ActivatedRouterStateSnapshot;
}
